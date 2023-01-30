!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("React"));else if("function"==typeof define&&define.amd)define(["React"],n);else{var t="object"==typeof exports?n(require("React")):n(e.React);for(var a in t)("object"==typeof exports?exports:e)[a]=t[a]}}(self,(__WEBPACK_EXTERNAL_MODULE__24__=>(()=>{"use strict";var __webpack_modules__={742:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"React\"\nvar external_React_ = __webpack_require__(24);\nvar external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);\n;// CONCATENATED MODULE: ./src/lesson-intro.tsx\n// @ts-ignore\n\n\nconst LessonIntro = ({ id, schema, ...props }) => {\n    const Scrowl = window['Scrowl'];\n    let classes = 'template-lesson-intro';\n    const editMode = props.editMode ? true : false;\n    const focusElement = editMode ? props.focusElement : null;\n    const contentId = `${id}-lesson-intro`;\n    const title = schema.content.title.value;\n    let titleClasses = 'template-lesson-intro-title can-focus';\n    const subtitle = schema.content.subtitle.value;\n    let subtitleClasses = 'template-lesson-intro-subtitle can-focus';\n    const time = schema.content.time.value;\n    let timeClasses = 'template-lesson-intro-time can-focus';\n    const startLabel = schema.content.startLabel.value;\n    let startLabelClasses = 'template-lesson-intro-start-button can-focus';\n    const bg = schema.content.bgImage.content.bg.value;\n    const bgUrl = schema.content.bgImage.content.url.value;\n    const bgLabel = schema.content.bgImage.content.alt.value || '';\n    let bgClasses = `img__wrapper can-focus ${bg ? 'as-bg' : 'as-hero'}`;\n    const bgRef = (0,external_React_.useRef)(null);\n    const bgStyles = {\n        backgroundImage: `url(\"${bgUrl}\")`,\n    };\n    const [scroll, setScroll] = (0,external_React_.useState)(false);\n    if (focusElement === 'title') {\n        titleClasses += ' has-focus';\n    }\n    switch (focusElement) {\n        case 'title':\n            titleClasses += ' has-focus';\n            break;\n        case 'subtitle':\n            subtitleClasses += ' has-focus';\n            break;\n        case 'time':\n            timeClasses += ' has-focus';\n            break;\n        case 'startLabel':\n            startLabelClasses += ' has-focus';\n            break;\n        case 'bgImage.url':\n            bgClasses += ' has-focus';\n            break;\n        default:\n            console.warn('Unsupported element', focusElement);\n            break;\n    }\n    const handleFocusTitle = () => {\n        if (editMode) {\n            Scrowl.core.host.sendMessage({\n                type: 'focus',\n                field: 'title',\n            });\n        }\n    };\n    const handleFocusSubtitle = () => {\n        if (editMode) {\n            Scrowl.core.host.sendMessage({\n                type: 'focus',\n                field: 'subtitle',\n            });\n        }\n    };\n    const handleFocusTime = () => {\n        if (editMode) {\n            Scrowl.core.host.sendMessage({\n                type: 'focus',\n                field: 'time',\n            });\n        }\n    };\n    const handleFocusStartLabel = () => {\n        setScroll(true);\n        if (editMode) {\n            Scrowl.core.host.sendMessage({\n                type: 'focus',\n                field: 'startLabel',\n            });\n        }\n    };\n    const handleFocusBg = () => {\n        if (editMode) {\n            Scrowl.core.host.sendMessage({\n                type: 'focus',\n                field: 'bgImage.url',\n            });\n        }\n    };\n    if (!scroll) {\n        document.body.style.overflow = 'hidden';\n    }\n    else {\n        document.body.style.overflow = 'scroll';\n    }\n    return (external_React_default().createElement(Scrowl.core.Template, { id: `slide-${contentId}`, className: classes, notScene: true, style: { overflow: 'hidden' }, ...props },\n        external_React_default().createElement(\"div\", { id: contentId, className: \"content\" },\n            external_React_default().createElement(\"header\", null,\n                bg && external_React_default().createElement(\"div\", { className: \"overlay\" }),\n                external_React_default().createElement(\"h1\", { className: titleClasses, onMouseDown: handleFocusTitle }, title),\n                external_React_default().createElement(\"h2\", { className: subtitleClasses, onMouseDown: handleFocusSubtitle }, subtitle),\n                time && time.length > 0 && (external_React_default().createElement(\"span\", { className: timeClasses, onMouseDown: handleFocusTime },\n                    external_React_default().createElement(Scrowl.ui.Icon, { icon: \"schedule\", display: \"outlined\" }),\n                    external_React_default().createElement(\"span\", { className: \"template-lesson-intro-time-value\" }, time))),\n                external_React_default().createElement(\"button\", { className: startLabelClasses, onMouseDown: handleFocusStartLabel }, startLabel)),\n            (bgUrl || editMode) && (external_React_default().createElement(\"div\", { ref: bgRef, className: bgClasses, onMouseDown: handleFocusBg },\n                external_React_default().createElement(\"img\", { className: \"img__container\", \"aria-label\": bgLabel, style: bgStyles }))))));\n};\n/* harmony default export */ const lesson_intro = ({\n    LessonIntro,\n});\n\n;// CONCATENATED MODULE: ./src/lesson-intro.schema.ts\nconst LessonIntroSchema = {\n    meta: {\n        version: '1.0.0',\n        label: 'Lesson Intro',\n        component: 'LessonIntro',\n        filename: 'lesson-intro',\n        tags: ['text', 'introduction'],\n        icon: 'article',\n    },\n    content: {\n        title: {\n            type: 'Textbox',\n            label: 'Title',\n            value: 'Enter Your New Title',\n            placeholder: 'Title',\n            multiLine: false,\n            autoGrow: 10,\n            allowLinebreaks: true,\n        },\n        subtitle: {\n            type: 'Textbox',\n            label: 'Subtitle',\n            value: 'Subtitle Goes Here',\n            placeholder: 'Subtitle',\n            multiLine: true,\n            lines: 10,\n            autoGrow: 10,\n            allowLinebreaks: true,\n        },\n        time: {\n            type: 'Textbox',\n            label: 'Time',\n            value: '40 min',\n            placeholder: 'Time',\n            multiLine: false,\n            autoGrow: 10,\n            allowLinebreaks: true,\n        },\n        startLabel: {\n            type: 'Textbox',\n            label: 'Start Label',\n            value: 'START',\n            placeholder: 'Start Label',\n            multiLine: false,\n            autoGrow: 10,\n            allowLinebreaks: true,\n        },\n        bgImage: {\n            type: 'Fieldset',\n            label: 'Background Image',\n            content: {\n                alt: {\n                    type: 'Textbox',\n                    label: 'Alt Text',\n                    placeholder: 'Image alt text',\n                },\n                url: {\n                    type: 'Asset',\n                    assetTypes: ['image'],\n                    label: 'Image',\n                },\n                bg: {\n                    type: 'Checkbox',\n                    label: 'Use as Background',\n                    value: false,\n                }\n            },\n        },\n    },\n};\n/* harmony default export */ const lesson_intro_schema = ({\n    LessonIntroSchema,\n});\n\n;// CONCATENATED MODULE: ./src/index.ts\n\n\n\n\n;// CONCATENATED MODULE: ./web/index.ts\n\nwindow.LessonIntro = LessonIntro;\nwindow.LessonIntroSchema = LessonIntroSchema;\n\n\n//# sourceURL=webpack://@scrowl/template-lesson-intro/./web/index.ts_+_3_modules?")},24:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__24__}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__(742);return __webpack_exports__})()));