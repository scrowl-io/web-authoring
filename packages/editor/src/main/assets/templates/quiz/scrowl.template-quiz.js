!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var r="object"==typeof exports?t(require("React")):t(e.React);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,(e=>(()=>{"use strict";var t,r,o={24:t=>{t.exports=e}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,a),r.exports}a.m=o,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>"scrowl.template-quiz."+e+".component.js",a.miniCssF=e=>{if(698===e)return"scrowl.template-quiz.css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="@scrowl/template-quiz:",a.l=(e,o,n,l)=>{if(t[e])t[e].push(o);else{var i,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==r+n){i=p;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",r+n),i.src=e),t[e]=[o];var d=(r,o)=>{i.onerror=i.onload=null,clearTimeout(f);var n=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),r)return r(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,r)=>{var o=a.miniCssF(e),n=a.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(l=r[o]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(n===e||n===t))return l}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var l;if((n=(l=a[o]).getAttribute("data-href"))===e||n===t)return l}})(o,n))return t();((e,t,r,o,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=r=>{if(a.onerror=a.onload=null,"load"===r.type)o();else{var l=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,a.parentNode&&a.parentNode.removeChild(a),n(s)}},a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a)})(e,n,null,t,r)})),t={494:0};a.f.miniCss=(r,o)=>{t[r]?o.push(t[r]):0!==t[r]&&{698:1}[r]&&o.push(t[r]=e(r).then((()=>{t[r]=0}),(e=>{throw delete t[r],e})))}}})(),(()=>{var e={494:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var l=a.p+a.u(t),i=new Error;a.l(l,(r=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",i.name="ChunkLoadError",i.type=n,i.request=l,o[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[l,i,s]=r,c=0;if(l.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(s)s(a)}for(t&&t(r);c<l.length;c++)n=l[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunk_scrowl_template_quiz=self.webpackChunk_scrowl_template_quiz||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l={};return(()=>{a.r(l);const e={meta:{version:"1.0.0",label:"Quiz",component:"Quiz",filename:"quiz",category:"quiz",tags:["text","image"],icon:"vertical_split"},content:{question:{type:"Fieldset",label:"Question",content:{question:{type:"Textbox",label:"Question Text",value:"What does AODA stand for?",placeholder:"Quiz content here...",multiLine:!0,lines:2,autoGrow:2,allowLinebreaks:!0}}},answer1:{type:"Fieldset",label:"Answer 1",content:{answerText:{type:"Textbox",placeholder:"Answer 1",value:"Accessibility for Ontarians with Disabilities Act."},correctness:{type:"Checkbox",label:"Mark as correct",value:!0}}},answer2:{type:"Fieldset",label:"Answer 2",content:{answerText:{type:"Textbox",placeholder:"Answer 2",value:"Association for Ontario's Disabled Adults."},correctness:{type:"Checkbox",label:"Mark as correct",value:!0}}},answer3:{type:"Fieldset",label:"Answer 3",content:{answerText:{type:"Textbox",placeholder:"Answer 3",value:"Act for Ontarians with Disabilities and Afflictions."},correctness:{type:"Checkbox",label:"Mark as correct",value:!1}}},answer4:{type:"Fieldset",label:"Answer 4",content:{answerText:{type:"Textbox",placeholder:"Answer 4",value:"None of the above."},correctness:{type:"Checkbox",label:"Mark as correct",value:!1}}},options:{type:"Fieldset",label:"Options",content:{showProgress:{type:"Checkbox",label:"Show Progress Bar",value:!0}}}},controlOptions:{stopUserAdvancement:{type:"Checkbox",label:"Stop User Advancement",value:!1},disableAnimations:{type:"Checkbox",label:"Disable Animations",value:!1}}};var t=a(24),r=a.n(t);const o=(0,t.lazy)((()=>a.e(698).then(a.bind(a,698)))),n=e=>r().createElement(t.Suspense,{fallback:r().createElement("div",null,"Loading...")},r().createElement(o,{...e}));window.Quiz=n,window.QuizSchema=e})(),l})()));
//# sourceMappingURL=scrowl.template-quiz.js.map