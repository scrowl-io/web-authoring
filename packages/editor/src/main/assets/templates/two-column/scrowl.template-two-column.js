!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var o="object"==typeof exports?t(require("React")):t(e.React);for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(self,(e=>(()=>{"use strict";var t,o,n={24:t=>{t.exports=e}},l={};function i(e){var t=l[e];if(void 0!==t)return t.exports;var o=l[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.m=n,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,o)=>(i.f[o](e,t),t)),[])),i.u=e=>"scrowl.template-two-column.component.js",i.miniCssF=e=>{if(815===e)return"scrowl.template-two-column.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},o="@scrowl/template-two-column:",i.l=(e,n,l,r)=>{if(t[e])t[e].push(n);else{var a,u;if(void 0!==l)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+l){a=d;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",o+l),a.src=e),t[e]=[n];var m=(o,n)=>{a.onerror=a.onload=null,clearTimeout(p);var l=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),l&&l.forEach((e=>e(n))),o)return o(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),u&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&!e;)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,o)=>{var n=i.miniCssF(e),l=i.p+n;if(((e,t)=>{for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var l=(r=o[n]).getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===e||l===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var r;if((l=(r=i[n]).getAttribute("data-href"))===e||l===t)return r}})(n,l))return t();((e,t,o,n,l)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=o=>{if(i.onerror=i.onload=null,"load"===o.type)n();else{var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=a,i.parentNode&&i.parentNode.removeChild(i),l(u)}},i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i)})(e,l,null,t,o)})),t={718:0};i.f.miniCss=(o,n)=>{t[o]?n.push(t[o]):0!==t[o]&&{815:1}[o]&&n.push(t[o]=e(o).then((()=>{t[o]=0}),(e=>{throw delete t[o],e})))}}})(),(()=>{var e={718:0};i.f.j=(t,o)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var l=new Promise(((o,l)=>n=e[t]=[o,l]));o.push(n[2]=l);var r=i.p+i.u(t),a=new Error;i.l(r,(o=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var l=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+l+": "+r+")",a.name="ChunkLoadError",a.type=l,a.request=r,n[1](a)}}),"chunk-"+t,t)}};var t=(t,o)=>{var n,l,[r,a,u]=o,s=0;if(r.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(u)u(i)}for(t&&t(o);s<r.length;s++)l=r[s],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0},o=self.webpackChunk_scrowl_template_two_column=self.webpackChunk_scrowl_template_two_column||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r={};return(()=>{i.r(r);const e={meta:{version:"1.0.0",label:"Two Column",component:"TwoColumn",filename:"two-column",icon:"view_week",tags:["text","columns"]},content:{options:{type:"Fieldset",label:"Columns",content:{numberOfColumns:{type:"Radio",label:"Number of Columns",value:2,options:[{label:"One column",value:1,icon:"crop_portrait",controller:{fields:["secondColumn","thridColumn"],effect:"hide"}},{label:"Two columns",value:2,icon:"view_column_2",controller:{fields:["thridColumn"],effect:"hide"}},{label:"Three columns",value:3,icon:"view_week"}]},stackOnMobile:{type:"Checkbox",label:"Stack On Mobile",value:!0},alignment:{type:"Select",hint:"BodyAlignment",label:"Alignment",value:"left",options:[{name:"Full Justify",value:"justify",icon:"align_horizontal_right"},{name:"Align Left",value:"left",icon:"align_horizontal_left"},{name:"Align Center",value:"center",icon:"align_horizontal_left"},{name:"Align Right",value:"right",icon:"align_horizontal_right"}],iconFromValue:!0}}},firstColumn:{type:"Fieldset",label:"First Column",content:{heading:{type:"Textbox",label:"Heading",placeholder:"Heading",value:"Heading 1"},body:{type:"Textbox",label:"body",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",placeholder:"Write content here...",multiLine:!0,lines:3,autoGrow:5,allowLinebreaks:!0}}},secondColumn:{type:"Fieldset",label:"Second Column",content:{heading:{type:"Textbox",label:"Heading",placeholder:"Heading",value:"Heading 2"},body:{type:"Textbox",label:"body",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",placeholder:"Write content here...",multiLine:!0,lines:3,autoGrow:5,allowLinebreaks:!0}}},thirdColumn:{type:"Fieldset",label:"Third Column",content:{heading:{type:"Textbox",label:"Heading",placeholder:"Heading",value:"Heading 3"},body:{type:"Textbox",label:"body",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",placeholder:"Write content here...",multiLine:!0,lines:3,autoGrow:5,allowLinebreaks:!0}}}},controlOptions:{stopUserAdvancement:{type:"Checkbox",label:"Stop User Advancement",value:!1},disableAnimations:{type:"Checkbox",label:"Disable Animations",value:!0}}};var t=i(24),o=i.n(t);const n=(0,t.lazy)((()=>i.e(815).then(i.bind(i,733)))),l=e=>o().createElement(t.Suspense,{fallback:o().createElement("div",null,"Loading...")},o().createElement(n,{...e}));window.TwoColumn=l,window.TwoColumnSchema=e})(),r})()));
//# sourceMappingURL=scrowl.template-two-column.js.map