!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var o="object"==typeof exports?t(require("React")):t(e.React);for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,(e=>(()=>{"use strict";var t,o,r={24:t=>{t.exports=e}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,o)=>(i.f[o](e,t),t)),[])),i.u=e=>"scrowl.template-simple-video."+e+".component.js",i.miniCssF=e=>{if(914===e)return"scrowl.template-simple-video.css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},o="@scrowl/template-simple-video:",i.l=(e,r,n,l)=>{if(t[e])t[e].push(r);else{var a,s;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var p=d[c];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+n){a=p;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",o+n),a.src=e),t[e]=[r];var u=(o,r)=>{a.onerror=a.onload=null,clearTimeout(m);var n=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),o)return o(r)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),s&&document.head.appendChild(a)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,o)=>{var r=i.miniCssF(e),n=i.p+r;if(((e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=(l=o[r]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===t))return l}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var l;if((n=(l=i[r]).getAttribute("data-href"))===e||n===t)return l}})(r,n))return t();((e,t,o,r,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=o=>{if(i.onerror=i.onload=null,"load"===o.type)r();else{var l=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=a,i.parentNode&&i.parentNode.removeChild(i),n(s)}},i.href=t,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i)})(e,n,null,t,o)})),t={989:0};i.f.miniCss=(o,r)=>{t[o]?r.push(t[o]):0!==t[o]&&{914:1}[o]&&r.push(t[o]=e(o).then((()=>{t[o]=0}),(e=>{throw delete t[o],e})))}}})(),(()=>{var e={989:0};i.f.j=(t,o)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var n=new Promise(((o,n)=>r=e[t]=[o,n]));o.push(r[2]=n);var l=i.p+i.u(t),a=new Error;i.l(l,(o=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",a.name="ChunkLoadError",a.type=n,a.request=l,r[1](a)}}),"chunk-"+t,t)}};var t=(t,o)=>{var r,n,[l,a,s]=o,d=0;if(l.some((t=>0!==e[t]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(s)s(i)}for(t&&t(o);d<l.length;d++)n=l[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0},o=self.webpackChunk_scrowl_template_simple_video=self.webpackChunk_scrowl_template_simple_video||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l={};return(()=>{i.r(l);const e={meta:{version:"1.0.0",label:"Simple Video",component:"SimpleVideo",filename:"simple-video",icon:"view_week",tags:["text","video"]},content:{text:{type:"Textbox",label:"Video Text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",placeholder:"Write content here...",multiLine:!0,lines:10,autoGrow:10,allowLinebreaks:!0},videoAsset:{type:"Fieldset",label:"Video",content:{alt:{type:"Textbox",label:"Alt Text",placeholder:"Image alt text"},assetUrl:{type:"Asset",assetTypes:["video"],label:"Video"},webUrl:{type:"Textbox",label:"Embed URL",placeholder:"Embed URL"}}},options:{type:"Fieldset",label:"Options",content:{alignment:{type:"Select",hint:"BodyAlignment",label:"Alignment",value:"left",options:[{name:"Align Left",value:"left",icon:"align_horizontal_left"},{name:"Align Right",value:"right",icon:"align_horizontal_right"}],iconFromValue:!0},showProgress:{type:"Checkbox",label:"Show Progress Bar",value:!0}}}},controlOptions:{stopUserAdvancement:{type:"Checkbox",label:"Stop User Advancement",value:!1},disableAnimations:{type:"Checkbox",label:"Disable Animations",value:!0}}};var t=i(24),o=i.n(t);const r=(0,t.lazy)((()=>Promise.all([i.e(287),i.e(914)]).then(i.bind(i,914)))),n=e=>o().createElement(t.Suspense,{fallback:o().createElement("div",null,"Loading...")},o().createElement(r,{...e}));window.SimpleVideo=n,window.SimpleVideoSchema=e})(),l})()));
//# sourceMappingURL=scrowl.template-simple-video.js.map