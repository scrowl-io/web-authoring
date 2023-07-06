import React from 'react';
import { createRoot } from 'react-dom/client';
import MultipleChoiceComponent from './multiple-choice-component';
import './_styles.scss';

export default class MultipleChoiceFactory {
  static get toolbox() {
    return {
      icon: `<svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 294.023 294.023" xml:space="preserve"><path color-rendering="auto" image-rendering="auto" shape-rendering="auto" color-interpolation="sRGB" d="M124.916,0.002 c-1.649,0.045-3.169,0.9-4.064,2.285l-14.49,21.736h-49.35c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50c2.761,0,5-2.239,5-5 V39.574l-10,15v19.449h-40v-40h37.682L85.631,55.117l-6.146-12.293c-1.205-2.485-4.196-3.523-6.681-2.318 c-2.485,1.205-3.523,4.196-2.318,6.681c0.018,0.036,0.035,0.072,0.054,0.108l10,20c1.235,2.47,4.238,3.472,6.709,2.237 c0.778-0.389,1.441-0.974,1.924-1.698l40-60c1.565-2.276,0.989-5.389-1.287-6.954C127.013,0.281,125.974-0.027,124.916,0.002 L124.916,0.002z M147.012,44.025c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90c2.761,0,5-2.239,5-5v-10c0-2.761-2.239-5-5-5 H147.012z M57.012,94.06c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50c2.761,0,5-2.239,5-5v-50c0-2.761-2.239-5-5-5H57.012z M62.012,104.06h40v40h-40V104.06z M147.012,114.023c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90c2.761,0,5-2.239,5-5v-10 c0-2.761-2.239-5-5-5H147.012z M57.012,164.023c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50c2.761,0,5-2.239,5-5v-50 c0-2.761-2.239-5-5-5H57.012z M62.012,174.023h40v40h-40V174.023z M147.012,184.058c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90 c2.761,0,5-2.239,5-5v-10c0-2.761-2.239-5-5-5H147.012z M57.012,234.023c-2.761,0-5,2.239-5,5v50c0,2.761,2.239,5,5,5h50 c2.761,0,5-2.239,5-5v-50c0-2.761-2.239-5-5-5L57.012,234.023L57.012,234.023z M62.012,244.023h40v40h-40V244.023z M147.012,254.023 c-2.761,0-5,2.239-5,5v10c0,2.761,2.239,5,5,5h90c2.761,0,5-2.239,5-5v-10c0-2.761-2.239-5-5-5H147.012z"/></svg>`,
      title: 'Multiple Choice',
    };
  }

  static get isReadOnlySupported() {
    return true;
  }

  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly;
    this.data = {
      events: data.events || [],
    };

    this.CSS = {
      wrapper: 'column-block-multiple-choice',
    };

    this.nodes = {
      holder: null,
    };

    console.log('contructor data: ', this.data);
  }

  render() {
    const rootNode = document.createElement('div');
    rootNode.setAttribute('class', this.CSS.wrapper);
    this.nodes.holder = rootNode;
    const root = createRoot(rootNode);

    const onDataChange = (newData) => {
      this.data = {
        ...newData,
      };
    };

    root.render(
      <MultipleChoiceComponent
        onDataChange={onDataChange}
        readOnly={this.readOnly}
        data={this.data}
      />
    );

    return this.nodes.holder;
  }

  save() {
    return this.data;
  }

  static get sanitize() {
    return {
      br: true,
    };
  }
}
