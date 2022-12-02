import React, { useEffect } from 'react';
import * as css from './_page-workspace.scss';
import {
  openPromptProjectName,
  resetWorkspace,
  resetActiveSlide,
  useActiveSlide,
} from './page-workspace-hooks';
import {
  Header,
  PaneDetails,
  Canvas,
  PaneEditor,
  TemplateBrowser,
  PromptProjectName,
  PublishProgress,
} from './components';
import { Projects } from '../../models';
import { menu, sys } from '../../services';

export const Path = '/workspace';

export const openProject = (project: Projects.ProjectMeta) => {
  Projects.open(project).then((res) => {
    if (res.error) {
      sys.messageDialog({
        message: res.message,
      });
      return;
    }

    Projects.resetState();
    resetWorkspace();
    resetActiveSlide();

    setTimeout(() => {
      Projects.setData(res.data.project);
    }, 1);
  });
};

export const Page = () => {
  const projectData = Projects.useData();
  const assets = Projects.useAssets();
  const activeSlide = useActiveSlide() as Projects.ProjectSlide;

  useEffect(() => {
    let isListening = true;

    const saveListener = () => {
      Projects.save({ data: projectData, assets }).then((res) => {
        if (!isListening) {
          return;
        }

        if (res.data && res.data.action) {
          switch (res.data.action) {
            case 'prompt-project-name':
              openPromptProjectName();
              break;
          }
          return;
        }

        if (res.error) {
          console.error(res);
          return;
        }

        // notification - project saved correctly
      });
    };

    const openListener = (ev, project?: Projects.ProjectMeta) => {
      if (project) {
        openProject(project);
        return;
      }

      Projects.openProjectBrowser();
    };

    const previewListener = (ev, type: menu.PreviewTypes) => {
      const payload: Projects.PreviewProjectReq = {
        type,
        project: projectData,
      };

      switch (type) {
        case 'slide':
          payload.id = activeSlide.id;
          break;
        case 'lesson':
          payload.id = activeSlide.lessonId;
          break;
        case 'module':
          payload.id = activeSlide.moduleId;
          break;
      }

      Projects.preview(payload).then((res) => {
        if (res.error) {
          sys.messageDialog({
            message: res.message,
          });
          return;
        }

        console.log('preview result', res);
      });
    };

    menu.API.onProjectSave(saveListener);
    menu.API.onProjectOpen(openListener);
    menu.API.onPreviewOpen(previewListener);

    return () => {
      isListening = false;
      menu.API.offProjectSave();
      menu.API.offProjectOpen();
      menu.API.offPreviewOpen();
    };
  }, [projectData, activeSlide]);

  return (
    <>
      <div className={css.workspace}>
        <Header />
        <PaneDetails />
        <Canvas />
        <PaneEditor />
      </div>
      <TemplateBrowser />
      <PromptProjectName />
      <PublishProgress />
    </>
  );
};

export default {
  Path,
  Page,
  openProject,
};
