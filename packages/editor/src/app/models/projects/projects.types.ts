import type { TemplateSchema } from '@scrowl/template-core';
import type { AssetType } from '../../pages/workspace/components/overlay/asset-browser/asset.types';
import type { PreviewTypes } from '../../services/menu';

export type ProjectModule = {
  id: number;
  name: string;
  passingThreshold: number;
};

export type ProjectLesson = {
  name: string;
  moduleId: number;
  id: number;
};

export type ProjectSlide = {
  name: string;
  moduleId: number;
  lessonId: number;
  id: number;
  template: TemplateSchema;
};

export type ProjectGlossaryItem = {
  id: number;
  word: string;
  definition: string;
};

export type ProjectMeta = {
  id: string;
  name: string;
  filename: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tags: Array<string>;
  blueprint?: string;
  createdBy?: string;
};

export type ProjectScorm = {
  name: string;
  outputFormat: '1.2' | '2004 3rd Edition' | '2004.4';
  optimizeMedia: 'low' | 'recommended' | 'high' | 'original';
  version?: string;
  description?: string;
  authors?: string;
  organization?: string;
  reportStatus?: string;
  identifier?: string;
  masteryScore?: number;
  language?: 'en-US';
};

export type { AssetType } from '../../pages/workspace/components/overlay/asset-browser/asset.types';

export type ProjectAsset = {
  title: string;
  filename: string;
  ext: string;
  type: AssetType;
  size: number;
  isDeleted?: boolean;
  sourceExt: string;
  sourceFilename: string;
};

export interface ProjectResource extends ProjectAsset {
  description?: string;
}

export type ProjectData = {
  meta: Partial<ProjectMeta>;
  scorm: Partial<ProjectScorm>;
  modules?: Array<ProjectModule>;
  lessons?: Array<ProjectLesson>;
  slides?: Array<ProjectSlide>;
  glossary?: Array<ProjectGlossaryItem>;
  resources?: Array<ProjectResource>;
};

export type UnsavedReq = {
  status: {
    isDirty: boolean,
    isUncommitted: boolean,
    isLoaded: boolean,
    isNew: boolean,
  };
  project: {
    data: ProjectData;
    assets: Array<ProjectAsset>;
  };
};

export type ProjectsReqPreviewAsset = {
  asset: ProjectAsset | ProjectResource;
  meta: ProjectMeta;
};

export type ProjectsReqPreviewProject = {
  project: ProjectData;
  assets: Array<ProjectAsset>;
  type: PreviewTypes;
  id?: number;
};

export type ProjectsReqUpload = {
  meta: ProjectMeta;
  options: {
    assetTypes: Array<AssetType>;
  };
};

export type ProjectsReqSave = {
  data: ProjectData;
  assets: Array<ProjectAsset>;
};

export type ProjectFile = {
  createdAt: string;
  openedAt: string;
  updatedAt: string;
  assets: Array<ProjectAsset>;
  versions: Array<ProjectMeta>;
  lastPublishedFilename?: string;
};
