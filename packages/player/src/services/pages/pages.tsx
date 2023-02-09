import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageDefinition, PageProps } from './pages.types';
import {
  // @ts-ignore
  PlayerRootConfig,
  PlayerTemplateList,
  TemplateComponent,
} from '../../root/root.types';
import utils from '../../utils';
import * as _css from '../../root/_root.scss';
import { Error } from '../../components';
import { NavBar } from '../../components/navbar';

const css = utils.css.removeMapPrefix(_css);

const Page = ({ slides, templates, slideId, ...props }: PageProps) => {
  const Scrowl = window['Scrowl'];
  const controller = new Scrowl.core.scroll.Controller();

  let currentSlide = `module-${slides[0].moduleId}--lesson-${slides[0].lessonId}--slide-${slides[0].id}-${slides[0].template.meta.filename}`;
  let currentIndex = 0;

  const targets = slides?.map((slide) => {
    return `module-${slide.moduleId}--lesson-${slide.lessonId}--slide-${slide.id}-${slide.template.meta.filename}`;
  });

  const handleArrowKeys = (ev) => {
    if (Scrowl && Scrowl.runtime) {
      if (Scrowl.runtime.API !== null) {
        const [error, suspendData] = Scrowl.runtime.getSuspendData();
        if (suspendData === '{}') {
          return;
        } else {
          const parsedData = JSON.parse(suspendData);
          if (error || !parsedData.courseStarted) {
            return;
          }
        }
      }
    }

    let matchingId;

    if (targets && currentSlide !== 'owlui-last') {
      matchingId = targets.find((t) => {
        return t === currentSlide;
      });
    }

    if (matchingId) {
      currentIndex = targets?.indexOf(matchingId);
    } else if (currentSlide === 'owlui-last') {
      currentIndex = targets.length;
    }

    let targetIndex;
    let targetElement;

    if (ev.key === 'ArrowLeft') {
      if (currentIndex === 1) {
        targetIndex = targets[0];
        targetElement = document.querySelector(`#${targetIndex}`);
        currentIndex = 0;
        currentSlide = `module-${slides[0].moduleId}--lesson-${slides[0].lessonId}--slide-${slides[0].id}-${slides[0].template.meta.filename}`;
        setTimeout(() => {
          targetElement?.scrollIntoView(false);
        }, 0);
      } else {
        targetIndex = targets[currentIndex - 1];
        targetElement = document.querySelector(`#${targetIndex}`);
        setTimeout(() => {
          targetElement?.scrollIntoView(false);
        }, 0);
      }
    } else if (ev.key === 'ArrowRight') {
      if (currentIndex + 1 === targets.length) {
        targetElement = document.querySelector('.owlui-last');
        setTimeout(() => {
          targetElement?.scrollIntoView(true);
        }, 0);
        currentSlide = 'owlui-last';
      } else {
        targetIndex = targets[currentIndex + 1];
        targetElement = document.querySelector(`#${targetIndex}`);
        setTimeout(() => {
          targetElement?.scrollIntoView(true);
        }, 0);
      }
    }

    const currentSlideObj = {
      currentIndex: currentIndex,
      currentSlide: currentSlide,
    };

    const currentSlideEvent = new CustomEvent('CurrentSlideUpdate', {
      detail: currentSlideObj,
    });
    document.dispatchEvent(currentSlideEvent);
  };

  useEffect(() => {
    const handleSlideEvent = (ev) => {
      currentSlide = ev.detail.currentTarget.id;
    };
    document.addEventListener('slide.enter', handleSlideEvent);
  }, [slides]);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        handleArrowKeys(e);
      }
    });
  }, []);

  useEffect(() => {
    if (slideId && slideId?.length > 0) {
      document.querySelector(`#${slideId}`)?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [slides]);

  useEffect(() => {
    const handleUpdateSlideEvent = (ev) => {
      currentIndex = ev.detail.currentIndex;
      currentSlide = ev.detail.currentSlide;
    };
    document.addEventListener('CurrentSlideUpdate', handleUpdateSlideEvent);
  });

  useEffect(() => {
    return () => {
      controller.destroy(true);
    };
  });

  return (
    <>
      {slides.map((slide, idx) => {
        const id = `${props.id}--slide-${slide.id}`;
        const component = slide.template.meta.component;

        if (!templates.hasOwnProperty(component)) {
          return <Error msg={`Unabled to find template: ${component}`} />;
        }

        const Template = templates[component] as TemplateComponent;

        return (
          <Template
            key={idx}
            id={id}
            schema={slide.template}
            controller={controller}
            slides={slides}
          />
        );
      })}
    </>
  );
};

const updateCourseProgress = (project, id) => {
  const Scrowl = window['Scrowl'];

  let lessonsArray: { index: number; targetId: string; lesson: any }[] = [];
  let counter = 1;
  project.outlineConfig.forEach((module, mIdx) => {
    module.lessons.forEach((lesson, lIdx) => {
      const lessonObj = {
        index: counter,
        targetId: `module-${mIdx}--lesson-${lIdx}`,
        lesson: lesson,
      };
      counter++;
      lessonsArray.push(lessonObj);
    });
  });

  const currentLesson = lessonsArray.find((lesson) => {
    return lesson.targetId === id;
  });

  const currentLessonIndex = currentLesson?.index;
  const totalLessons = lessonsArray.length;

  let percentageCompleted;

  if (currentLessonIndex) {
    percentageCompleted = currentLessonIndex / totalLessons;
  }

  Scrowl.runtime?.updateProgress(percentageCompleted);
  if (window['API_1484_11']) {
    window['API_1484_11'].SetValue('cmi.progress_measure', percentageCompleted);
  }
};

const finishCourse = () => {
  const Scrowl = window['Scrowl'];

  if (Scrowl.runtime) {
    Scrowl.runtime.finish();
  }

  if (window['API_1484_11']) {
    window['API_1484_11'].SetValue('cmi.score.raw', 90);
    window['API_1484_11'].SetValue('cmi.score.min', 70);
    window['API_1484_11'].SetValue('cmi.score.max', 100);
    window['API_1484_11'].SetValue('cmi.score.scaled', 90 / 100);
    window['API_1484_11'].SetValue('cmi.success_status', 'passed');
    window['API_1484_11'].SetValue('cmi.completion_status', 'completed');
    window['API_1484_11'].SetValue('cmi.progress_measure', 1);
  }
};

export const create = (
  project,
  templateList: PlayerTemplateList,
  slideId: string
) => {
  const Scrowl = window['Scrowl'];
  const controller = new Scrowl.core.scroll.Controller();
  const data: Array<PageDefinition> = [];

  project.outlineConfig.forEach((module, mIdx) => {
    module.lessons.forEach((page, lIdx) => {
      const id = `module-${mIdx}--lesson-${page.lesson.id}`;
      const url = `/${id}`;

      let nextLessonUrl;
      let nextLessonId;
      let nextLessonText;

      if (
        lIdx < module.lessons.length - 1 ||
        mIdx < project.outlineConfig.length - 1
      ) {
        nextLessonId = `module-${mIdx}--lesson-${page.lesson.id + 1}`;
        nextLessonUrl = `/${nextLessonId}`;
        nextLessonText = `Continue to the next lesson`;
      }

      if (
        lIdx === module.lessons.length - 1 &&
        mIdx <= project.outlineConfig.length - 1
      ) {
        nextLessonId = `module-${mIdx + 1}--lesson-${page.lesson.id + 1}`;
        nextLessonUrl = `/${nextLessonId}`;
        nextLessonText = `Continue to the first Lesson of Module ${mIdx + 1}`;
      }

      data.push({
        module: module.module,
        lesson: page.lesson,
        url,
        Element: () => {
          return (
            <>
              <NavBar slides={page.slides} pageId={id} project={project} />
              <div className="owlui-lesson">
                <Page
                  id={id}
                  slides={page.slides}
                  templates={templateList}
                  slideId={slideId}
                />
                <Scrowl.core.Template
                  className="owlui-last"
                  id={`slide-end-${id}`}
                  controller={controller}
                  notScene={true}
                >
                  <div className={css.nextLessonContainer}>
                    {lIdx < module.lessons.length - 1 ||
                    mIdx < project.outlineConfig.length - 1 ? (
                      <Link
                        to={nextLessonUrl}
                        // @ts-ignore
                        onClick={() => updateCourseProgress(project, id)}
                      >
                        {nextLessonText}
                      </Link>
                    ) : (
                      <Scrowl.ui.Button onClick={finishCourse}>
                        Finish Course
                      </Scrowl.ui.Button>
                    )}
                  </div>
                </Scrowl.core.Template>
              </div>
            </>
          );
        },
      });
    });
  });

  return data;
};

export default {
  create,
};
