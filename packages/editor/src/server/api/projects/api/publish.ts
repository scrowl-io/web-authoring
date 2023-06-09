import { v4 as uuid } from 'uuid';
import packager from 'simple-scorm-packager';
import { Datetime, Str } from '@scrowl/utils';
import type { ProjectData, ProjectFile } from '../../../../app/models/projects';
import type { ProjectsApiPublish } from '../projects.types';
import type { ApiResult } from '../../../services/requester';
import { fs, tmpr } from '../../../services';

const getPathRootOS = (): string => {
  const osRootSteps = process.cwd().split('/').length;
  let pathname = '';

  for (let i = 0; i < osRootSteps; i++) {
    pathname += '../';
  }

  return pathname;
};

const renderEntry = (src, dest, data) => {
  const readRes = fs.readSync(src);

  if (readRes.error) {
    console.error(`unable to render entry ${src}: ${readRes.message}`);
    return readRes;
  }

  const renderRes = tmpr.compile(readRes.data.contents, data);

  if (renderRes.error) {
    console.error(`unable to render entry ${src}: ${renderRes.message}`);
    return renderRes;
  }

  return fs.writeSync(dest, renderRes.data.contents);
};

export const renderScormEntries = (
  { scorm, meta, ...project }: ProjectData,
  opts: {
    tmpDirId: string;
    entrySrcHTML?: string;
    entrySrcJS?: string;
  }
) => {
  const htmlSrc = (opts.entrySrcHTML) ? opts.entrySrcHTML : 'scorm.html.hbs';
  const jsSrc = (opts.entrySrcJS) ? opts.entrySrcJS : 'scorm.js.hbs';
  const entryPathHTML = fs.utils.join(fs.projectPath, htmlSrc);
  const entryPathJS = fs.utils.join(fs.projectPath, jsSrc);
  const osRootPath = getPathRootOS();
  const tempSource = fs.utils.join(osRootPath, fs.utils.tempPath, opts.tmpDirId, 'package');
  const tempContent = fs.utils.join(tempSource, 'content');
  const entryDestHTML = fs.utils.join(tempContent, 'index.html');
  const entryDestJS = fs.utils.join(tempContent, 'index.js');
  const renderData = {
    // stringify the scorm data to make available to handlebar
    project: JSON.stringify(project),
    scorm: JSON.stringify(scorm),
    tmpDirId: opts.tmpDirId,
  };
  const htmlRes = renderEntry(entryPathHTML, entryDestHTML, renderData);
  const jsRes = renderEntry(entryPathJS, entryDestJS, renderData);
  const renderMeta = {
    entryPathHTML,
    entryDestHTML,
    entryPathJS,
    entryDestJS,
    renderData,
  };

  if (htmlRes.error) {
    htmlRes.data.meta = renderMeta;
    return htmlRes;
  }

  if (jsRes.error) {
    jsRes.data.meta = renderMeta;
    return jsRes;
  }

  return {
    error: false,
    data: {
      rendered: true,
      meta: renderMeta,
    },
  };
};

export const generateProjectFiles = (projectData: ProjectData, renderParams?: {
  entrySrcHTML?: string;
  entrySrcJS?: string;
}) => {
  const id = uuid();
  const osRootPath = getPathRootOS();
  const tempSource = fs.utils.join(osRootPath, fs.utils.tempPath, id, 'package');
  const tempContent = fs.utils.join(tempSource, 'content');
  // const tempAsset = fs.utils.join(tempContent, 'assets');

  const copyAsset = (pathname) => {
    fs.copySync(pathname, tempContent);
  };

  fs.copySync(fs.projectPath, tempContent, {
    overwrite: false,
    filter: (src: string) => {
      return src.indexOf('.hbs') === -1 && src.indexOf('.map') === -1;
    },
  });

  // const [projectTemplatePaths, projectTemplatesList] = getProjectTemplates(projectData);

  // if (projectTemplatePaths) {
  //   projectTemplatePaths.forEach(copyAsset);
  // }

  const renderRes = renderScormEntries(projectData, { tmpDirId: id, ...renderParams });

  renderRes.data.tmpDirId = id;
  return renderRes;
};

export const cleanupTempDir = (tmpDirId: string) => {
  const osRootPath = getPathRootOS();
  const tempSource = fs.utils.join(osRootPath, fs.utils.tempPath, tmpDirId);

  return fs.removeSync(tempSource);
};

export const createScormPackage = (tmpDirId: string, project: ProjectData, meta?: ProjectFile) => {
  return new Promise<ApiResult>((resolve) => {
    const config = project.scorm;
    const today = Datetime.getDateStampLocal();
    const projectVersion = meta ? `0.0.${meta.versions.length}` : '0.0.1';
    const osRootPath = getPathRootOS();
    const tempSource = fs.utils.join(osRootPath, fs.utils.tempPath, tmpDirId);
    const scormSource = fs.utils.join(tempSource, 'package');
    const scormContent = fs.utils.join(scormSource, 'content');
    const courseName = Str.toScormCase(config.name && config.name.length > 0 ? config.name : project.meta.name || '');
    const packagerOpts = {
      source: scormSource,
      title: project.meta.name,
      version: config.outputFormat,
      language: config.language,
      startingPage: 'content/index.html',
      organization: config.organization,
      identifier: config.identifier,
      package: {
        outputFolder: tempSource,
        zip: true,
        date: today,
        version: projectVersion,
        name: courseName,
        description: config.description,
        author: config.authors,
        rights: '©Copyright ' + new Date().getFullYear(),
      },
    };
    const packageFilename = fs.utils.join(
      packagerOpts.package.outputFolder,
      `${Str.toScormCase(courseName)}_v${
        packagerOpts.package.version
      }_${today}.zip`
    );
    const projectFilename = fs.utils.join(packagerOpts.package.outputFolder, `${Str.toKebabCase(courseName || '')}-${projectVersion}.zip`);
    
    packager(packagerOpts, (message: string) => {
      resolve(fs.renameSync(packageFilename, projectFilename));
    });
  });
};

export const publish: ProjectsApiPublish = {
  name: '/projects/publish',
  type: 'invoke',
  method: 'POST',
  fn: async (req, res) => {
    const projectData = req.body as ProjectData;
    const generationRes = generateProjectFiles(projectData);

    if (generationRes.error) {
      res.status(500).send(generationRes);
      cleanupTempDir(generationRes.data.tmpDirId);
      return;
    }

    const packageRes = await createScormPackage(generationRes.data.tmpDirId, projectData);

    if (packageRes.error) {
      res.status(500).send(packageRes);
      cleanupTempDir(generationRes.data.tmpDirId);
      return;
    }

    res.setHeader('content-type', 'application/zip');
    
    const stream = fs.createReadStream(packageRes.data.filename);

    stream.on('error', (err) => {
      res.status(500).send({
        error: true,
        message: 'unable to publish: unexpected error',
        data: {
          trace: err,
        },
      });
    });

    stream.on('close', () => {
      cleanupTempDir(generationRes.data.tmpDirId);
    });

    stream.pipe(res);
  },
};

export default {
  renderScormEntries,
  generateProjectFiles,
  cleanupTempDir,
  publish,
};