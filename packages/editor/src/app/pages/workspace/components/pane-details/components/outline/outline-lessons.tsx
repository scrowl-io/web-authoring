import React, { useCallback, useState } from 'react';
import { ui } from '@scrowl/ui';
import { OutlineLessonsProps, OutlineLessonItemProps } from './outline.types';
import * as css from '../../_pane-details.scss';
import { Projects } from '../../../../../../models';
import { menu, sys } from '../../../../../../services';
import { InlineInput } from '../../../../../../components';
import {
  useActiveLesson,
  setActiveLesson,
} from '../../../../page-workspace-hooks';
import { ELEM_ALIGNMENT } from '@scrowl/utils';

export const OutlineLessonItem = ({
  lesson,
  moduleIdx,
  idx,
  className,
  ...props
}: OutlineLessonItemProps) => {
  let classes = `${css.outlineHeader} outline-item__lesson`;
  const menuId = `module-${lesson.moduleId}-lesson-menu-${lesson.id}`;
  const activeLesson = useActiveLesson();
  const [isEdit, setIsEdit] = useState(false);
  const inputContainerProps = {
    draggable: true,
    'data-outline-type': 'lesson',
    'data-lesson-id': lesson.id,
    'data-module-id': lesson.moduleId,
  };
  const lessonMenuItems: Array<menu.ContextMenuItem> = [
    {
      label: 'Duplicate Lesson',
      click: () => {
        Projects.duplicateLesson(lesson);
      },
    },
    {
      label: 'Add New Lesson After',
      click: () => {
        Projects.addLesson({
          id: lesson.id,
          moduleId: lesson.moduleId,
        });
      },
    },
    { type: 'separator' },
    {
      label: 'Rename',
      click: () => {
        setIsEdit(true);
      },
    },
    { type: 'separator' },
    {
      label: 'Delete Lesson',
      click: () => {
        // TODO: reimplement error handling and verifying whether user is sure they want to delete
        Projects.removeLesson(lesson);
      },
    },
  ];

  if (className) {
    classes += `${className} `;
  }

  const handleOpenLessonMenu = (
    ev: React.MouseEvent,
    alignment?: ELEM_ALIGNMENT
  ) => {
    const target = ev.target as HTMLElement;

    menu.API.contextMenu(ev, lessonMenuItems, undefined, { alignment }).then(
      (result) => {
        target.blur();
      }
    );
  };

  const handleNameChange = (val) => {
    const updateData = {
      ...lesson,
      name: val,
    };

    Projects.setLesson(updateData);
  };

  const handleNameClose = () => {
    setIsEdit(false);
  };

  const handleLesonChange = useCallback(() => {
    setActiveLesson(lesson);
  }, [lesson]);

  return (
    <div
      className={css.outlineLesson}
      {...props}
      data-module-id={lesson.moduleId}
      data-lesson-id={lesson.id}
    >
      <div className={classes}>
        <ui.Button
          aria-expanded={activeLesson ? lesson.id === activeLesson.id : false}
          aria-controls={menuId}
          className={css.outlineItem}
          onClick={handleLesonChange}
          onContextMenu={handleOpenLessonMenu}
          variant="link"
        >
          <div className={css.lessonIcons}>
            <span className={css.outlineItemIconDetail}>
              <ui.Icon
                icon="interests"
                display="sharp"
                filled={activeLesson ? lesson.id !== activeLesson.id : false}
                grad={200}
                opsz={20}
              />
            </span>
            <InlineInput.Text
              isEdit={isEdit}
              text={lesson.name}
              onChange={handleNameChange}
              onBlur={handleNameClose}
              containerProps={inputContainerProps}
            />
          </div>
        </ui.Button>
        <ui.Button
          className={css.actionMenu}
          variant="ghost"
          onClick={(ev) => {
            handleOpenLessonMenu(ev, 'left-bottom');
          }}
          onContextMenu={(ev) => {
            handleOpenLessonMenu(ev, 'left-bottom');
          }}
        >
          <ui.Icon display="rounded" icon="more_vert" opsz={20} filled />
        </ui.Button>
      </div>
    </div>
  );
};

export const OutlineLessons = ({
  moduleId,
  moduleIdx,
  className,
  ...props
}: OutlineLessonsProps) => {
  const lessons = Projects.useLessons(moduleId);
  let classes = `nav flex-column outline-list-lesson`;
  let addClasses = `${css.outlineAdd} outline-item__lesson .inline-input`;
  const handleAddLesson = () => {
    Projects.addLesson({
      id: -1,
      moduleId,
    });
  };

  if (className) {
    classes += `${className} `;
  }

  return (
    <div className={classes} {...props}>
      {lessons.map((lesson, idx) => {
        return (
          <OutlineLessonItem
            key={idx}
            lesson={lesson}
            moduleIdx={moduleIdx}
            idx={idx}
          />
        );
      })}
      <ui.Button
        variant="link"
        className={addClasses}
        onClick={handleAddLesson}
        data-module-id={moduleId}
        data-lesson-id={-1}
      >
        <ui.Icon icon="add" display="outlined" />
        <span>Add New Lesson</span>
      </ui.Button>
    </div>
  );
};

export default {
  OutlineLessons,
  OutlineLessonItem,
};
