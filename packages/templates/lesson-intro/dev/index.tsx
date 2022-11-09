import '@owlui/lib/dist/owl.lib.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Scrowl from '@scrowl/template-core';
import * as css from './_index.scss';
import { LessonIntro, LessonIntroSchema, LessonIntroSchemaProps } from '../src';

document.body.className = `${css.body} owlui-theme--default`;

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);
const App = () => {
  const schema = LessonIntroSchema as LessonIntroSchemaProps;
  const controller = new Scrowl.core.scroll.Controller();

  return (
    <LessonIntro
      id="template-block-text"
      templateKey="LessonIntro@1.0.0"
      duration={0}
      controller={controller}
      schema={schema}
    />
  );
};

root.render(<App />);