"use strict";(self.webpackChunk_scrowl_template_inline_text=self.webpackChunk_scrowl_template_inline_text||[]).push([[481],{481:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(24),o=n.n(a);const s=({id:e,schema:t,...n})=>{const s=window.Scrowl;let l="template-inline-text";const c=!!n.editMode?n.focusElement:null,r=`${e}-inline-text`,i=t.content.text.value,d=t.content.text.label,m="text"===c&&"has-focus",u=t.content.bgImage.content.bg.value,p="right"===t.content.options.content.alignment.value?"right":"left",v=t.controlOptions.disableAnimations?.value,w=t.controlOptions.stopUserAdvacement?.value,E=t.content.options.content.showProgress.value,g=(0,a.useRef)(E),h=(0,a.useRef)(0),[_,x]=(0,a.useState)({width:E?"0%":"100%"}),[b,f]=(0,a.useState)(!1),N=s.core.components.Editor,k=s.core.components.EditorTextParser,$={blocks:[{type:"header",data:{text:d,level:1}},{type:"paragraph",data:{text:i}}]},[S,y]=(0,a.useState)($);E&&(l+=" show-progress");return(0,a.useEffect)((()=>{g.current=E,x({..._,width:E?`${h.current}%`:"100%"})}),[E]),o().createElement(s.core.Template,{id:`slide-${r}`,className:l,onProgress:e=>{h.current=e.progress,g.current&&x({..._,width:`${e.progress}%`})},onEnd:()=>{h.current=100,g.current&&x({..._,width:"100%"})},notScene:!!v,stopUserAdvancement:w,...n},o().createElement("div",{id:r,className:"owlui-container"},o().createElement("div",{className:`owlui-row ${p}`},u&&o().createElement("div",{className:"owlui-col overlay"}),o().createElement("div",{className:"owlui-col text__wrapper"},o().createElement("div",{className:"text__container"},o().createElement("div",{className:"progress-indictor"},o().createElement("div",{className:"progress-bar",style:_})),o().createElement("div",{className:`text__value can-focus ${m}`},o().createElement("button",{id:"toggle-edit-btn",onClick:()=>{b?(f(!1),console.log("Edit mode is now disabled")):(f(!0),console.log("Edit mode is now enabled"))}},"Toggle Edit Mode"),o().createElement("div",{className:"app-content"},b?o().createElement(N,{data:S,setData:y}):o().createElement(k,{data:S}))))))))}}}]);
//# sourceMappingURL=scrowl.template-inline-text.481.component.js.map