"use strict";(self.webpackChunk_scrowl_template_quiz=self.webpackChunk_scrowl_template_quiz||[]).push([[698],{698:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var s=n(24),r=n.n(s);const c=({id:e,schema:t,lesson:n,...c})=>{const a=window.Scrowl;let o="template-quiz";const l=a.core.Markdown,u=!!c.editMode,i=u?c.focusElement:null,m=`${e}-quiz`,d=t.content.question.content.question.value;let w=[];Object.keys(t.content).forEach((e=>{e.includes("answer")&&w.push(t.content[e])}));let p=[];w.forEach((e=>{!0===e.content.correctness.value&&p.push(e)}));const v="text"===i&&"has-focus",E=t.controlOptions.disableAnimations?.value,h=t.controlOptions.stopUserAdvancement.value,f=t.content.options.content.showProgress.value,C=(0,s.useRef)(f),g=(0,s.useRef)(0),[q,_]=(0,s.useState)({width:f?"0%":"100%"}),x=(0,s.useRef)([]);f&&(o+=" show-progress");const N=e=>{x.current.pop(),x.current.push(e.target.value)},b=e=>{if(!0===e.target.checked)x.current.push(e.target.value);else{const t=x.current.indexOf(e.target.value);x.current.splice(t,1)}};return(0,s.useEffect)((()=>{C.current=f,_({...q,width:f?`${g.current}%`:"100%"})}),[f]),r().createElement(a.core.Template,{id:`slide-${m}`,className:o,onProgress:e=>{g.current=e.progress,C.current&&_({...q,width:`${e.progress}%`})},onEnd:()=>{g.current=100,C.current&&_({...q,width:"100%"})},notScene:!!E,stopUserAdvancement:h,...c},r().createElement("div",{id:m,className:"owlui-container"},r().createElement("div",{className:"owlui-row"},r().createElement("div",{className:"owlui-col text__wrapper"},r().createElement("div",{className:"text__container"},r().createElement("div",{className:"progress-indictor"},r().createElement("div",{className:"progress-bar",style:q})),r().createElement("div",{className:`text__value can-focus ${v}`},r().createElement("h3",{onMouseDown:()=>{u&&a.core.host.sendMessage({type:"focus",field:"question"})},className:"question__text"},r().createElement(l,null,d)),r().createElement("div",{className:"answers__container"},r().createElement("form",{onSubmit:e=>{if(e.preventDefault(),p.length<=1)if(x.current[0]===p[0].content.answerText.value){alert("CORRECT");const e=new CustomEvent("quizCompleted",{detail:{question:d,answer:p[0].content.answerText.value,contentId:m,correct:!0}});document.dispatchEvent(e)}else{alert("INCORRECT");const e=new CustomEvent("quizCompleted",{detail:{question:d,answer:p[0].content.answerText.value,contentId:m,correct:!1}});document.dispatchEvent(e)}else{let e=!0;if(p.forEach((t=>{x.current&&(x.current.includes(t.content.answerText.value)||(e=!1))})),e&&x.current.length===p.length){alert("CORRECT");const e=new CustomEvent("quizCompleted",{detail:{question:d,answer:p[0].content.answerText.value,contentId:m,correct:!0}});document.dispatchEvent(e)}else{alert("INCORRECT");const e=new CustomEvent("quizCompleted",{detail:{question:d,answer:p[0].content.answerText.value,contentId:m,correct:!1}});document.dispatchEvent(e)}}}},w.map(((e,t)=>r().createElement("div",{className:"answer",key:t},r().createElement("input",{type:p.length>1?"checkbox":"radio",id:`${m}-answer-${t}`,name:d,value:e.content.answerText.value,onChange:p.length>1?b:N}),r().createElement("label",{htmlFor:`${m}-answer-${t}`},e.content.answerText.value)))),r().createElement("input",{className:"owlui-btn owlui-btn-primary submit-answer",type:"submit",value:"Submit"})))))))))}}}]);
//# sourceMappingURL=scrowl.template-quiz.698.component.js.map