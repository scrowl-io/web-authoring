import React from 'react';
import { createRoot } from 'react-dom/client';
import ColumnComponent from './column-component';
import './_styles.scss';

export default class ColumnFactory {
  static get toolbox() {
    return {
      icon: `<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 48 48" xml:space="preserve">
   <path id="Layer_2_00000034068811408167942790000003951247543995121288_" d="M42,22h-4v-4c0-0.5-0.2-1.1-0.6-1.4
     C37,16.2,36.5,16,36,16c-1.1,0-2,0.9-2,2v4h-4c-0.5,0-1,0.2-1.4,0.6C28.2,22.9,28,23.5,28,24c0,1.1,0.9,2,2,2h4v4
     c0,0.5,0.2,1.1,0.6,1.4C35,31.8,35.5,32,36,32c1.1,0,2-0.9,2-2v-4h4c0.5,0,1-0.2,1.4-0.6c0.4-0.3,0.6-0.9,0.6-1.4
     C44,22.9,43.1,22,42,22z M36,36h-3c-2.2,0-4-1.8-4-4v-2h-1c-1.2,0-2.4-0.5-3.1-1.5c-0.2-0.2-0.5-0.3-0.7-0.1
     c-0.1,0.1-0.2,0.2-0.2,0.4V44h11c1.6,0.1,2.9-1.2,3-2.8c0-0.1,0-0.1,0-0.2v-3C38,36.9,37.1,36,36,36z M35,4H24v15.2
     c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.3-0.1,0.4-0.2c0.7-1,1.9-1.5,3.1-1.5h2v-2c0-2.2,1.8-4,4-4h2c1.1,0,2-0.9,2-2V7
     c0.1-1.6-1.2-2.9-2.8-3C35.1,4,35.1,4,35,4z M6,7v34c-0.1,1.6,1.2,2.9,2.8,3c0.1,0,0.1,0,0.2,0h11V4H9C7.4,3.9,6.1,5.2,6,6.8
     C6,6.9,6,6.9,6,7z"/>
   </svg>`,
      title: 'Column',
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
      wrapper: 'column-block-container',
    };

    this.nodes = {
      holder: null,
    };
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
      <ColumnComponent
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
}
