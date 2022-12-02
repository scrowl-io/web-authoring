import { createScormSource, createScormEntry } from './project-publisher';
import { ProjectData, ProjectFile } from './projects.types';
import { rq, fs, log, mu } from '../../services';
import { lt, obj } from '../../utils';

export const createPreviewSource = (project: ProjectData, meta: ProjectFile, source: string, dest: string) => {
  return new Promise<rq.ApiResult>((resolve) => {
    log.info('creating preview:');
    log.info('source', source);
    log.info('dest', dest);
    log.info('project', project);
    resolve({
      error: false,
      data: {
        project,
        meta,
        source,
        dest,
      },
    });
  });
};

export const preview = (project: ProjectData, meta: ProjectFile, type: mu.PreviewTypes, id?: number) => {
  return new Promise<rq.ApiResult>((resolve) => {
    const projectSource = fs.getDirname(project.meta.filename || '');
    const previewDest = fs.APP_PATHS.preview;
    let previewData: ProjectData | undefined = undefined;
    const previewError = {
      error: true,
      message: '',
      data: {
        project,
        meta,
        type,
        id,
      }
    };

    switch (type) {
      case 'slide':
        if (!project.slides || !project.slides.length) {
          previewError.message = 'Unable to create preview: project has no slides';
          log.error(previewError);
          resolve(previewError);
          return;
        }

        if (!id) {
          previewError.message = 'Unable to create preview: slide id required';
          log.error(previewError);
          resolve(previewError);
          return;
        }

        const slides = project.slides as unknown as Array<obj.JSON_DATA>;
        const slideIdx = lt.indexOf(slides, 'id', id);

        if (slideIdx === -1) {
          previewError.message = 'Unable to create preview: slide not found';
          log.error(previewError);
          resolve(previewError);
          return;
        }

        const slide = project.slides[slideIdx];

        previewData = {
          ...project,
          modules: project.modules?.filter((m) => {
            return m.id === slide.moduleId;
          }),
          lessons: project.lessons?.filter((l) => {
            return l.moduleId === slide.moduleId && l.id === slide.lessonId;
          }),
          slides: [slide],
        };
        break;
      case 'lesson':
        if (!project.lessons || !project.lessons.length) {
          previewError.message = 'Unable to create preview: project has no lessons';
          log.error(previewError);
          resolve(previewError);
          return;
        }

        if (!id) {
          previewError.message = 'Unable to create preview: lesson id required';
          log.error(previewError);
          resolve(previewError);
          return;
        }

        const lessons = project.lessons as unknown as Array<obj.JSON_DATA>;
        const lessonIdx = lt.indexOf(lessons, 'id', id);

        if (lessonIdx === -1) {
          previewError.message = 'Unable to create preview: lesson not found';
          log.error(previewError);
          resolve(previewError);
          return;
        }

        const lesson = project.lessons[lessonIdx];

        previewData = {
          ...project,
          modules: project.modules?.filter((m) => {
            return m.id === lesson.moduleId;
          }),
          lessons: [lesson],
          slides: project.slides?.filter((s) => {
            return s.moduleId === lesson.moduleId && s.lessonId === lesson.id;
          }),
        };
        break;
      case 'module':
        if (!project.modules || !project.modules.length) {
          previewError.message = 'Unable to create preview: project has no modules';
          log.error(previewError);
          resolve(previewError);
          return;
        }

        if (!id) {
          previewError.message = 'Unable to create preview: module id required';
          log.error(previewError);
          resolve(previewError);
          return;
        }

        const modules = project.modules as unknown as Array<obj.JSON_DATA>;
        const moduleIdx = lt.indexOf(modules, 'id', id);

        if (moduleIdx === -1) {
          previewError.message = 'Unable to create preview: module not found';
          log.error(previewError);
          resolve(previewError);
          return;
        }

        const module = project.modules[moduleIdx];

        previewData = {
          ...project,
          modules: [module],
          lessons: project.lessons?.filter((l) => {
            return l.moduleId === module.id;
          }),
          slides: project.slides?.filter((s) => {
            return s.moduleId === module.id;
          }),
        };
        break;
      case 'project':
        previewData = project;
        break;
    }

    if (!previewData) {
      previewError.message = 'Unable to preview: project data not set';
      log.error(previewError);
      resolve(previewError);
      return;
    }

    createPreviewSource(previewData, meta, projectSource, previewDest).then(resolve);
  });
};

export default {
  createPreviewSource,
  preview,
};
