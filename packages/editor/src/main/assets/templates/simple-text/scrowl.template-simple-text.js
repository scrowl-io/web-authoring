!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var n="object"==typeof exports?t(require("React")):t(e.React);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(__WEBPACK_EXTERNAL_MODULE__24__=>(()=>{"use strict";var __webpack_modules__={849:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: ./src/simple-text.schema.ts\nconst SimpleTextSchema = {\n    meta: {\n        version: '1.0.0',\n        label: 'Simple Text',\n        component: 'SimpleText',\n        filename: 'simple-text',\n        tags: ['text'],\n        icon: 'notes',\n    },\n    content: {\n        text: {\n            type: 'Textbox',\n            label: 'Text',\n            value: '# Starting \\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!',\n            placeholder: 'Enter your text',\n            multiLine: true,\n            lines: 10,\n            autoGrow: 10,\n            allowLinebreaks: true,\n        },\n        animateLists: {\n            type: 'Select',\n            label: 'Animations',\n            value: 'all',\n            options: [\n                { name: 'No Animation', value: 'none' },\n                { name: 'Lists & Paragraphs', value: 'all' },\n            ],\n        },\n        bgImage: {\n            type: 'Fieldset',\n            label: 'Background Image',\n            content: {\n                alt: {\n                    type: 'Textbox',\n                    label: 'Alt Text',\n                    placeholder: 'Image alt text',\n                },\n                url: {\n                    type: 'Asset',\n                    assetTypes: ['image'],\n                    label: 'Image',\n                },\n            },\n        },\n        options: {\n            type: 'Fieldset',\n            label: 'Options',\n            content: {\n                alignment: {\n                    type: 'Select',\n                    hint: 'BodyAlignment',\n                    label: 'Alignment',\n                    value: 'center',\n                    options: [\n                        {\n                            name: 'Full Justify',\n                            value: 'justify',\n                            icon: 'align_horizontal_right',\n                        },\n                        {\n                            name: 'Align Left',\n                            value: 'left',\n                            icon: 'align_horizontal_left',\n                        },\n                        {\n                            name: 'Align Center',\n                            value: 'center',\n                            icon: 'align_horizontal_left',\n                        },\n                        {\n                            name: 'Align Right',\n                            value: 'right',\n                            icon: 'align_horizontal_right',\n                        },\n                    ],\n                    iconFromValue: true,\n                },\n            },\n        },\n    },\n    controlOptions: {\n        stopUserAdvancement: {\n            type: 'Checkbox',\n            label: 'Stop User Advancement',\n            value: false,\n        },\n    },\n};\n/* harmony default export */ const simple_text_schema = ({\n    SimpleTextSchema,\n});\n\n;// CONCATENATED MODULE: ./src/index.ts\n\n// export * from './simple-text';\n\n\n// EXTERNAL MODULE: external \"React\"\nvar external_React_ = __webpack_require__(24);\nvar external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);\n;// CONCATENATED MODULE: ./web/simple-text-lazy.tsx\n\nconst SimpleTextLazy = (0,external_React_.lazy)(() => __webpack_require__.e(/* import() | template-simple-text */ 10).then(__webpack_require__.bind(__webpack_require__, 368)));\nconst SimpleText = (props) => {\n    return (external_React_default().createElement(external_React_.Suspense, { fallback: external_React_default().createElement(\"div\", null, \"Loading...\") },\n        external_React_default().createElement(SimpleTextLazy, { ...props })));\n};\n/* harmony default export */ const simple_text_lazy = (SimpleText);\n\n;// CONCATENATED MODULE: ./web/index.ts\n\n\nwindow.SimpleText = simple_text_lazy;\nwindow.SimpleTextSchema = SimpleTextSchema;\n\n\n//# sourceURL=webpack://@scrowl/template-simple-text/./web/index.ts_+_3_modules?")},24:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__24__}},__webpack_module_cache__={},inProgress,dataWebpackPrefix,loadStylesheet,installedCssChunks;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((t,n)=>(__webpack_require__.f[n](e,t),t)),[])),__webpack_require__.u=e=>"scrowl.template-simple-text.component.js",__webpack_require__.miniCssF=e=>{if(10===e)return"scrowl.template-simple-text.css"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),inProgress={},dataWebpackPrefix="@scrowl/template-simple-text:",__webpack_require__.l=(e,t,n,r)=>{if(inProgress[e])inProgress[e].push(t);else{var _,a;if(void 0!==n)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var o=i[l];if(o.getAttribute("src")==e||o.getAttribute("data-webpack")==dataWebpackPrefix+n){_=o;break}}_||(a=!0,(_=document.createElement("script")).charset="utf-8",_.timeout=120,__webpack_require__.nc&&_.setAttribute("nonce",__webpack_require__.nc),_.setAttribute("data-webpack",dataWebpackPrefix+n),_.src=e),inProgress[e]=[t];var s=(t,n)=>{_.onerror=_.onload=null,clearTimeout(c);var r=inProgress[e];if(delete inProgress[e],_.parentNode&&_.parentNode.removeChild(_),r&&r.forEach((e=>e(n))),t)return t(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:_}),12e4);_.onerror=s.bind(null,_.onerror),_.onload=s.bind(null,_.onload),a&&document.head.appendChild(_)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),loadStylesheet=e=>new Promise(((t,n)=>{var r=__webpack_require__.miniCssF(e),_=__webpack_require__.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var _=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(_===e||_===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var i;if((_=(i=a[r]).getAttribute("data-href"))===e||_===t)return i}})(r,_))return t();((e,t,n,r)=>{var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onerror=_.onload=a=>{if(_.onerror=_.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||t,o=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");o.code="CSS_CHUNK_LOAD_FAILED",o.type=i,o.request=l,_.parentNode.removeChild(_),r(o)}},_.href=t,document.head.appendChild(_)})(e,_,t,n)})),installedCssChunks={873:0},__webpack_require__.f.miniCss=(e,t)=>{installedCssChunks[e]?t.push(installedCssChunks[e]):0!==installedCssChunks[e]&&{10:1}[e]&&t.push(installedCssChunks[e]=loadStylesheet(e).then((()=>{installedCssChunks[e]=0}),(t=>{throw delete installedCssChunks[e],t})))},(()=>{var e={873:0};__webpack_require__.f.j=(t,n)=>{var r=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var _=new Promise(((n,_)=>r=e[t]=[n,_]));n.push(r[2]=_);var a=__webpack_require__.p+__webpack_require__.u(t),i=new Error;__webpack_require__.l(a,(n=>{if(__webpack_require__.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var _=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+_+": "+a+")",i.name="ChunkLoadError",i.type=_,i.request=a,r[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,_,[a,i,l]=n,o=0;if(a.some((t=>0!==e[t]))){for(r in i)__webpack_require__.o(i,r)&&(__webpack_require__.m[r]=i[r]);if(l)l(__webpack_require__)}for(t&&t(n);o<a.length;o++)_=a[o],__webpack_require__.o(e,_)&&e[_]&&e[_][0](),e[_]=0},n=self.webpackChunk_scrowl_template_simple_text=self.webpackChunk_scrowl_template_simple_text||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var __webpack_exports__=__webpack_require__(849);return __webpack_exports__})()));