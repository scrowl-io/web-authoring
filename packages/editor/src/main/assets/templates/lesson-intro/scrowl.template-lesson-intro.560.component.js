"use strict";(self.webpackChunk_scrowl_template_lesson_intro=self.webpackChunk_scrowl_template_lesson_intro||[]).push([[560],{560:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var a=s(24),n=s.n(a);const l=({id:e,schema:t,...s})=>{const l=window.Scrowl;const o=!!s.editMode,c=o?s.focusElement:null,r=`${e}-lesson-intro`,u=t.content.title.value;let i="template-lesson-intro-title can-focus";const m=t.content.subtitle.value;let d="template-lesson-intro-subtitle can-focus";const f=t.content.time.value;let b="template-lesson-intro-time can-focus";const p=t.content.startLabel.value;let h="template-lesson-intro-start-button can-focus";const g=t.content.bgImage.content.bg.value,w=t.content.bgImage.content.url.value,v=t.content.bgImage.content.alt.value||"";let E="img__wrapper can-focus "+(g?"as-bg":"as-hero");const _=(0,a.useRef)(null),M={backgroundImage:`url("${w}")`};switch("title"===c&&(i+=" has-focus"),c){case"title":i+=" has-focus";break;case"subtitle":d+=" has-focus";break;case"time":b+=" has-focus";break;case"startLabel":h+=" has-focus";break;case"bgImage.url":E+=" has-focus";break;default:console.warn("Unsupported element",c)}return n().createElement(l.core.Template,{id:`slide-${r}`,className:"template-lesson-intro",notScene:!0,style:{overflow:"hidden"},...s},n().createElement("div",{id:r,className:"content"},n().createElement("header",null,g&&n().createElement("div",{className:"overlay"}),n().createElement("h1",{className:i,onMouseDown:()=>{o&&l.core.host.sendMessage({type:"focus",field:"title"})}},u),n().createElement("h2",{className:d,onMouseDown:()=>{o&&l.core.host.sendMessage({type:"focus",field:"subtitle"})}},m),f&&f.length>0&&n().createElement("span",{className:b,onMouseDown:()=>{o&&l.core.host.sendMessage({type:"focus",field:"time"})}},n().createElement(l.ui.Icon,{icon:"schedule",display:"outlined"}),n().createElement("span",{className:"template-lesson-intro-time-value"},f)),n().createElement("button",{className:h,onMouseDown:e=>{if(o)l.core.host.sendMessage({type:"focus",field:"startLabel"});else{const t=new CustomEvent("startCourse",{detail:e});document.dispatchEvent(t)}}},p)),(w||o)&&n().createElement("div",{ref:_,className:E,onMouseDown:()=>{o&&l.core.host.sendMessage({type:"focus",field:"bgImage.url"})}},n().createElement("img",{className:"img__container","aria-label":v,style:M}))))}}}]);
//# sourceMappingURL=scrowl.template-lesson-intro.560.component.js.map