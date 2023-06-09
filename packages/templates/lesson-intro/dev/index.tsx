import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { core } from '@scrowl/template-core';
import { ui } from '@scrowl/ui';
import './_index.scss';
import { LessonIntroSchema, LessonIntroSchemaProps } from '../src';
const LessonIntro = React.lazy(() => import('../src/lesson-intro'));

const container = document.getElementById('scrowl-player') as HTMLElement;
const root = createRoot(container);
const Scrowl = {
  core,
  ui,
};
window['Scrowl'] = Scrowl;

const App = () => {
  const controller = new Scrowl.core.scroll.Controller();
  const schema = LessonIntroSchema as LessonIntroSchemaProps;

  return (
    <div id="lesson-wrapper">
      <div className="lesson">
        <Suspense fallback={<div>Loading...</div>}>
          <LessonIntro
            editMode={true}
            id="template-lesson-intro"
            controller={controller}
            schema={schema}
          />
        </Suspense>
      </div>
    </div>
  );
};

root.render(<App />);
