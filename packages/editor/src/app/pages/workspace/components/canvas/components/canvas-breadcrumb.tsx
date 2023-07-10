import React from 'react';
import { motion } from 'framer-motion';
import { ui } from '@scrowl/ui';
import * as css from '../_canvas.scss';
import { Settings, Projects } from '../../../../../models';
import { events } from '../../../../../services';
import { useActiveLesson } from '../../../page-workspace-hooks';

export const CanvasBreadcrumb = () => {
  const lesson = useActiveLesson();
  const module = Projects.useModules(lesson.moduleId);
  const hasLesson = lesson.id !== -1;
  const animationSettings = Settings.useAnimation();
  const reducedAnimations = animationSettings.reducedAnimations;
  const animationDelay = animationSettings.animationDelay;

  const handleFocus = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const targetModuleEl = document.querySelector(
      `[data-module-id="${module.id}"]`
    );
    if (!ev.currentTarget.id.includes('lesson')) {
      targetModuleEl?.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      const targetLessonEl = targetModuleEl?.querySelector(
        `[data-lesson-id="${lesson.id}"]`
      );
      targetLessonEl?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      className={`${css.canvasBreadcrumb} navbar fixed-bottom`}
      aria-label="breadcrumb"
      style={reducedAnimations ? {} : { transform: 'translate(0,32px)' }}
      initial={reducedAnimations ? {} : { transform: 'translate(0,32px)' }}
      animate={
        reducedAnimations
          ? {}
          : {
              transform: 'translate(0,0px)',
              transition: { delay: animationDelay, duration: 0.4 },
            }
      }
    >
      <ol className={`${css.canvasBreadcrumbList} breadcrumb`}>
        {hasLesson ? (
          <>
            <li className="breadcrumb-item">
              <button
                className="breadcrumb-item__content"
                onClick={handleFocus}
              >
                <ui.Icon
                  icon="folder"
                  display="sharp"
                  filled={true}
                  grad={200}
                  opsz={20}
                  appearance="Module"
                />
                {module && module.name}
              </button>
            </li>
            <li className="breadcrumb-item">
              <button
                className="breadcrumb-item__content"
                id={`module-${module.id}-lesson-${lesson.id}`}
                onClick={handleFocus}
              >
                <ui.Icon
                  icon="interests"
                  display="sharp"
                  filled={true}
                  grad={200}
                  opsz={20}
                  appearance="Lesson"
                />
                {lesson && lesson.name}
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="breadcrumb-item active dropup" aria-current="page">
              <button
                className="breadcrumb-item__content dropdown-toggle"
                style={{
                  textDecoration: 'none',
                  pointerEvents: 'none',
                }}
              >
                <ui.Icon
                  icon="rectangle"
                  display="outlined"
                  opsz={20}
                  grad={200}
                  appearance="Slide"
                />
                No lesson selected...
              </button>
            </li>
          </>
        )}
      </ol>
    </motion.nav>
  );
};

export default {
  CanvasBreadcrumb,
};
