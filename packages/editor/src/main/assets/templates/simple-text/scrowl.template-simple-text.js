!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var r="object"==typeof exports?t(require("React")):t(e.React);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(e=>(()=>{"use strict";var t,r,n={24:t=>{t.exports=e}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.m=n,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"scrowl.template-simple-text.component.js",a.miniCssF=e=>{if(10===e)return"scrowl.template-simple-text.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="@scrowl/template-simple-text:",a.l=(e,n,o,i)=>{if(t[e])t[e].push(n);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==r+o){l=p;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",r+o),l.src=e),t[e]=[n];var m=(r,n)=>{l.onerror=l.onload=null,clearTimeout(d);var o=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),s&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,r)=>{var n=a.miniCssF(e),o=a.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode&&a.parentNode.removeChild(a),o(s)}},a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a)})(e,o,null,t,r)})),t={873:0};a.f.miniCss=(r,n)=>{t[r]?n.push(t[r]):0!==t[r]&&{10:1}[r]&&n.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{var e={873:0};a.f.j=(t,r)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(t),l=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,l,s]=r,u=0;if(i.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)s(a)}for(t&&t(r);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunk_scrowl_template_simple_text=self.webpackChunk_scrowl_template_simple_text||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i={};return(()=>{a.r(i);const e={meta:{version:"1.0.0",label:"Simple Text",component:"SimpleText",filename:"simple-text",tags:["text"],icon:"notes"},content:{text:{type:"Textbox",label:"Text",value:"# Starting \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!",placeholder:"Enter your text",multiLine:!0,lines:10,autoGrow:10,allowLinebreaks:!0},animateLists:{type:"Select",label:"Animations",value:"all",options:[{name:"No Animation",value:"none"},{name:"Lists & Paragraphs",value:"all"}]},bgImage:{type:"Fieldset",label:"Background Image",content:{alt:{type:"Textbox",label:"Alt Text",placeholder:"Image alt text"},url:{type:"Asset",assetTypes:["image"],label:"Image"}}},options:{type:"Fieldset",label:"Options",content:{alignment:{type:"Select",hint:"BodyAlignment",label:"Alignment",value:"center",options:[{name:"Full Justify",value:"justify",icon:"align_horizontal_right"},{name:"Align Left",value:"left",icon:"align_horizontal_left"},{name:"Align Center",value:"center",icon:"align_horizontal_left"},{name:"Align Right",value:"right",icon:"align_horizontal_right"}],iconFromValue:!0}}}},controlOptions:{stopUserAdvancement:{type:"Checkbox",label:"Stop User Advancement",value:!1},disableAnimations:{type:"Checkbox",label:"Disable Animations",value:!0}}};var t=a(24),r=a.n(t);const n=(0,t.lazy)((()=>a.e(10).then(a.bind(a,368)))),o=e=>r().createElement(t.Suspense,{fallback:r().createElement("div",null,"Loading...")},r().createElement(n,{...e}));window.SimpleText=o,window.SimpleTextSchema=e})(),i})()));
//# sourceMappingURL=scrowl.template-simple-text.js.map