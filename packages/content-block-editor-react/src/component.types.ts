import type { OutputData, EditorConfig, BlockMutationEventMap, API } from '@scrowl/content-block-editor';

export type ValueOf<T> = T[keyof T];

export type BlockEditorOutputData = OutputData;
export type BlockEditorConfig = EditorConfig;
export type BlockEditorAPI = API;
export type BlockEditorMutationEvent = ValueOf<BlockMutationEventMap>;

export interface BlockEditorClass {
  destroy: () => Promise<void>;
  clear: () => Promise<void>;
  save: () => Promise<OutputData>;
  render: (data: OutputData) => Promise<void>;
  getInstance: () => any | null;
  focus: () => void;
};

export type BlockEditorFactory = (config: EditorConfig) => BlockEditorClass;

export interface BlockEditorCommons extends Omit<EditorConfig, 'data'> {
  id?: number;
  factory: BlockEditorFactory;
  value?: EditorConfig['data'];
  defaultValue?: EditorConfig['data'];
  onInit?: (editor: BlockEditorClass) => void;
};

export type BlockEditorProps = Omit<BlockEditorCommons, 'factory' | 'holderId' | 'holder'> & React.AllHTMLAttributes<HTMLDivElement>;