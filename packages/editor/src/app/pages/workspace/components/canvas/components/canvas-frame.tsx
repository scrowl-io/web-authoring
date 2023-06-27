import React, { useCallback, useRef, useEffect, useState } from 'react';
import { BlockEditor } from '@scrowl/content-block-editor-react';
import type {
  BlockEditorAPI,
  BlockEditorMutationEvent,
  BlockEditorClass,
} from '@scrowl/content-block-editor-react';
import * as css from '../_canvas.scss';
import { Error } from '../../../../../components';
import {
  useActiveLesson,
  setActiveLesson,
} from '../../../page-workspace-hooks';
import { Projects } from '../../../../../models';

export const CanvasFrame = () => {
  const activeLesson = useActiveLesson();
  const lessonId = useRef(activeLesson.id);
  const content = useRef(activeLesson.content);
  const isLoading = useRef(true);
  const editorInstance = useRef<BlockEditorClass | null>(null);
  const onInit = useCallback(
    (api) => {
      editorInstance.current = api;
      lessonId.current = activeLesson.id;

      if (activeLesson.content) {
        if (!content.current && editorInstance.current) {
          editorInstance.current.render(activeLesson.content);
        }

        content.current = activeLesson.content;
      }
    },
    [activeLesson]
  );
  const onChange = useCallback(
    (
      api: BlockEditorAPI,
      ev: BlockEditorMutationEvent | BlockEditorMutationEvent[]
    ) => {
      if (!activeLesson) {
        return;
      }

      api.saver.save().then((data) => {
        const { content, ...lesson } = activeLesson;
        const lessonUpdate = {
          content: data,
          ...lesson,
        };
        setActiveLesson(lessonUpdate);
        Projects.setLesson(lessonUpdate);
      });
    },
    [activeLesson]
  );

  useEffect(() => {
    if (!activeLesson) {
      return;
    }

    isLoading.current = false;

    const updateEditor = () => {
      if (editorInstance.current) {
        editorInstance.current.render(activeLesson.content);
      }
    };

    if (activeLesson.content) {
      if (
        lessonId.current === undefined ||
        lessonId.current !== activeLesson.id
      ) {
        updateEditor();
      }

      lessonId.current = activeLesson.id;
    }
  }, [activeLesson]);

  if (isLoading.current) {
    return <div>...Loading</div>;
  }

  return (
    <div className={css.canvasFrame}>
      <Error>
        <BlockEditor onChange={onChange} onInit={onInit} />
      </Error>
    </div>
  );
};

export default {
  CanvasFrame,
};
