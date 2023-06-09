import { useSelector, useDispatch } from 'react-redux';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import {
  AssetType,
  ProjectsReqUpload,
  ProjectData,
  ProjectAsset,
  ProjectsReqPreviewAsset,
  ProjectMeta,
  ProjectsReqPreviewProject
} from './projects.types';
import { stateManager, rq } from '../../services';
import { API, state } from './';

const processor: stateManager.StateProcessor = {};

export const useProcessor = () => {
  const dispatch = useDispatch();

  processor.dispatch = dispatch;
};

export const resetState = () => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  const fn = state.resetState as ActionCreatorWithoutPayload;
  processor.dispatch(fn());
};

export const useInteractions = () => {
  return useSelector((data: stateManager.RootState) => {
    return {
      isDirty: data.projects.isDirty,
      isUncommitted: data.projects.isUncommitted,
      isLoaded: data.projects.isLoaded,
      isNew: data.projects.isNew,
    };
  });
};

export const useData = ():ProjectData  => {
  return useSelector((data: stateManager.RootState) => data.projects.data);
};

export const setData = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.setData(data));
};

export const useMeta = () => {
  return useSelector((data: stateManager.RootState) => data.projects.data.meta);
};

export const setMeta = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.setMeta(data));
};

export const useScorm = () => {
  return useSelector((data: stateManager.RootState) => data.projects.data.scorm);
};

export const setScorm = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.setScorm(data));
};

export const useModules = (moduleId?: number,) => {
  return useSelector((data: stateManager.RootState) => {
    const hasModuleId = moduleId !== undefined && moduleId !== null && moduleId !== -1;

    if (!hasModuleId) {
      return data.projects.data.modules;
    }
    
    return data.projects.data.modules.filter((module) => {
      return module.id === moduleId;
    })[0];
  });
};

export const addModule = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.addOutlineItem({
    ...data,
    type: 'module',
  }));
};

export const setModule = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.setOutlineItem({
    ...data,
    type: 'module',
  }));
};

export const duplicateModule = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.duplicateOutlineItem({
    ...data,
    type: 'module',
  }));
};

export const removeModule = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.removeOutlineItem({
    ...data,
    type: 'module'
  }));
};

export const useLessons = (moduleId?: number, lessonId?: number) => {
  return useSelector((data: stateManager.RootState) => {
    const hasModuleId = moduleId !== undefined && moduleId !== null && moduleId !== -1;
    const hasLessonId = lessonId !== undefined && lessonId !== null && lessonId !== -1;

    if (!hasModuleId) {
      return data.projects.data.lessons;
    }

    if (!hasLessonId) {
      return data.projects.data.lessons.filter((lesson) => {
        return lesson.moduleId === moduleId;
      })
    }
    
    return data.projects.data.lessons.filter((lesson) => {
      return lesson.moduleId === moduleId && lesson.id === lessonId;
    })[0];
  });
};

export const addLesson = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.addOutlineItem({
    ...data,
    type: 'lesson',
  }));
};

export const setLesson = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.setOutlineItem({
    ...data,
    type: 'lesson',
  }));
};

export const duplicateLesson = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.duplicateOutlineItem({
    ...data,
    type: 'lesson',
  }));
};

export const removeLesson = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.removeOutlineItem({
    ...data,
    type: 'lesson'
  }));
};

export const moveOutlineItem = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.moveOutlineItem(data));
};

export const useGlossary = () => {
  return useSelector((data: stateManager.RootState) => data.projects.data.glossary);
}

export const addGlossaryItem = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.addGlossaryItem(data));
};

export const setGlossaryItem = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.setGlossaryItem(data));
};

export const removeGlossaryItem = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.removeGlossaryItem(data));
};

export const useResources = () => {
  return useSelector((data: stateManager.RootState) => data.projects.data.resources);
}

export const addResourceItem = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.addResourceItem(data));
};

export const setResourceItem = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.setResourceItem(data));
};

export const removeResourceItem = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.removeResourceItem(data));
};

export const useAssets = (assetTypes?: Array<AssetType>): Array<ProjectAsset> => {
  return useSelector((data: stateManager.RootState) => {
    let list;

    if (!assetTypes) {
      list = data.projects.assets;
    } else {
      list = data.projects.assets.filter((asset) => {
        return assetTypes.indexOf(asset.type) !== -1;
      });
    }

    return list.filter((asset) => {
      return !asset.isDeleted;
    })
  });
}

export const setAssets = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.setAssets(data));
};

export const addAsset = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.addAssetItem(data));
};

export const setAsset = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.setAssetItem(data));
};

export const removeAsset = (data) => {
  if (!processor.dispatch) {
    console.warn('projects processor not ready');
    return;
  }

  processor.dispatch(state.removeAssetItem(data));
};

export const create = (data: {
  workspaceId: string,
  blueprint?: string
}): Promise<rq.ApiResult> => {
  return new Promise((resolve) => {
    API.create(data).then((res) => {
      if (res.error) {
        console.error(res)
      } else {
        console.log('created', res);
        setData(res.data);
        // setAssets(res.data.assets);
      }

      resolve(res);
    });
  });
};

export const get = (data: {
  projectId?: string;
  workspaceId?: string;
}): Promise<rq.ApiResult> => {
  return new Promise((resolve) => {
    API.get(data).then((res) => {
      if (res.error) {
        console.error(res);
      } else {
        setData(res.data);
      }

      resolve(res);
    });
  })
};

export const upload = (req: ProjectsReqUpload): Promise<rq.ApiResult> => {
  return new Promise((resolve) => {
    API.upload(req).then((res) => {
      if (res.error) {
        console.error(res);
      }

      resolve(res);
    });
  });
};

export const save = (req: ProjectData): Promise<rq.ApiResult> => {
  return new Promise((resolve) => {
    API.save(req).then((res) => {
      if (processor.dispatch) {
        const fn = state.resetIsUncommitted as ActionCreatorWithoutPayload;
        processor.dispatch(fn());
      }

      if (res.error) {
        console.error(res);
      } else {
        setData(res.data);
      }

      resolve(res);
    });
  });
};

export const publish = (data): Promise<rq.ApiResult> => {

  return new Promise((resolve) => {
    API.publish(data).then((res) => {
      if (res.error) {
        console.error(res);
      }

      resolve(res);
    });
  });
};

export const list = (limit?: number): Promise<rq.ApiResult> => {

  return new Promise((resolve) => {
    API.list(limit).then((res) => {
      if (res.error) {
        console.error(res);
      }

      resolve(res);
    });
  });
};

export const open = (project: ProjectMeta): Promise<rq.ApiResult> => {

  return new Promise((resolve) => {
    API.open(project).then((res) => {
      if (res.error) {
        console.error(res);
      }

      resolve(res);
    });
  });
};

export const previewAsset = (data: ProjectsReqPreviewAsset) => {
  return API.previewAsset(data);
};

export const preview = (payload: ProjectsReqPreviewProject) => {
  return API.preview(payload);
};

export const useProjectBrowser = () => {
  return useSelector((data: stateManager.RootState) => {
    return data.projects.isOpenProjectBrowser;
  });
};

export const openProjectBrowser = () => {
  if (!processor.dispatch) {
    console.warn('project processor not ready');
    return;
  }

  const fn = state.openProjectBrowser as ActionCreatorWithoutPayload;
  processor.dispatch(fn());
};

export const closeProjectBrowser = () => {
  if (!processor.dispatch) {
    console.warn('project processor not ready');
    return;
  }

  const fn = state.closeProjectBrowser as ActionCreatorWithoutPayload;
  processor.dispatch(fn());
};

export default {
  useProcessor,
  resetState,
  useData,
  setData,
  useMeta,
  setMeta,
  useScorm,
  setScorm,
  useModules,
  addModule,
  setModule,
  duplicateModule,
  removeModule,
  useLessons,
  addLesson,
  setLesson,
  duplicateLesson,
  removeLesson,
  moveOutlineItem,
  useGlossary,
  addGlossaryItem,
  setGlossaryItem,
  removeGlossaryItem,
  useResources,
  addResourceItem,
  setResourceItem,
  removeResourceItem,
  useAssets,
  addAsset,
  setAsset,
  removeAsset,
  create,
  get,
  upload,
  save,
  publish,
  list,
  open,
  previewAsset,
  preview,
  useProjectBrowser,
  openProjectBrowser,
  closeProjectBrowser
};
