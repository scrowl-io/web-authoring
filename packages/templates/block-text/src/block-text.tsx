import React from 'react';
import * as core from '@scrowl/template-core';
import * as css from './_index.scss';
import { BlockTextProps } from './block-text.types';

export const BlockText = ({ layout, ...props }: BlockTextProps) => {
  let classes = `${css.templateBlockText} `;
  const editMode = props.editMode ? true : false;
  const focusElement = editMode ? props.focusElement : null;
  const scrollScenes: any = React.useRef([]);
  const timeline: any = React.useRef();

  let layoutText = layout.text.value;
  let useImageAsBG = layout.bgImage.fields.bg.value;
  let alignment = layout.options.fields.alignment.value;
  let showProgressBar = layout.options.fields.showProgress.value;
  const slideDuration = showProgressBar ? 1000 : 0;

  if (showProgressBar) {
    classes += ' show-progress';
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getId(id?: String) {
    if (!id) {
      return props.id;
    }
    return props.id + '-' + id;
  }

  const handleScrollUpdate = (e: any) => {
    if (e.stage === 'body') {
      timeline.current.seek(timeline.current.duration * e.stageProgress);
    }
  };

  const handleStateChange = (e: any) => {
    if (e.state === 'visible') {
      scrollScenes.current.map((scene: any) => scene.enabled(true));
    } else {
      scrollScenes.current.map((scene: any) => scene.enabled(false));
    }
  };

  React.useEffect(() => {
    if (!showProgressBar) {
      return () => {};
    }

    scrollScenes.current.push(
      new core.scroll.Scene({
        triggerElement: '#' + getId(),
        duration: slideDuration,
        offset: 0,
        triggerHook: 0,
      })
        .setPin('#' + getId('pinned-body'), { pushFollowers: false })
        .addTo(props.controller)
        .enabled(false)
    );

    timeline.current = core.anime.timeline({
      easing: 'easeInOutQuad',
      autoplay: false,
    });
    const currentTimeline = timeline.current;
    const target = {
      targets: '#' + getId('bar'),
      width: '100%',
      duration: slideDuration,
    };

    currentTimeline.add(target);

    return () => {
      scrollScenes.current.forEach((scene) => {
        scene.destroy(true);
        props.controller.removeScene(scene);
      });

      scrollScenes.current = [];

      currentTimeline.children.map((child: any) => {
        child.remove(target);
        child.reset();
        currentTimeline.remove(child);
      });

      currentTimeline.reset();
    };
  }, [showProgressBar]);

  return (
    <core.Template
      {...props}
      className={classes}
      duration={slideDuration}
      onStateChange={handleStateChange}
      onScroll={handleScrollUpdate}
      ready={true}
    >
      <div className="slide-container">
        <div
          id={getId('pinned-body')}
          className="hero"
          aria-label={useImageAsBG ? layout['bgImage.alt'] : ''}
          style={
            useImageAsBG && layout['bgImage.url']
              ? {
                  width: '100vw',
                  height: '100vh',
                  backgroundImage:
                    'url("./course/assets/' + layout['bgImage.url'] + '")',
                }
              : {}
          }
        >
          {useImageAsBG ? <div className="overlay" /> : null}

          <div className={'text ' + (alignment === 'right' ? ' right' : '')}>
            <div className="wrapper">
              <hr
                id={getId('bar')}
                style={{ width: showProgressBar ? '0%' : '100%' }}
              />
              <p
                className={
                  'can-focus ' + (focusElement === 'text' && ' has-focus')
                }
                onMouseDown={() => {
                  if (editMode) {
                    // Scrowl.focusOnlayout('text');
                  }
                }}
              >
                <core.Markdown children={layoutText} />
              </p>
            </div>
          </div>

          {useImageAsBG ? null : (
            <div
              role="img"
              aria-label={layout['hero_image.alt']}
              className={
                'img ' +
                (alignment === 'right' ? ' right' : '') +
                ' can-focus ' +
                (focusElement === 'bgImage.url' && ' has-focus')
              }
              onMouseDown={() => {
                if (editMode) {
                  // Scrowl.focusOnlayout('bgImage.url');
                }
              }}
              style={
                layout['bgImage.url']
                  ? {
                      backgroundImage:
                        'url("./course/assets/' + layout['bgImage.url'] + '")',
                    }
                  : {}
              }
            />
          )}
        </div>
      </div>
    </core.Template>
  );
};

export default {
  BlockText,
};