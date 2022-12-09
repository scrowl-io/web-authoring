!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("React"));else if("function"==typeof define&&define.amd)define(["React"],n);else{var t="object"==typeof exports?n(require("React")):n(e.React);for(var a in t)("object"==typeof exports?exports:e)[a]=t[a]}}(self,(__WEBPACK_EXTERNAL_MODULE__24__=>(()=>{"use strict";var __webpack_modules__={185:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"React\"\nvar external_React_ = __webpack_require__(24);\nvar external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);\n;// CONCATENATED MODULE: ./src/simple-text.tsx\n\n\nconst SimpleText = ({ id, schema, ...props }) => {\n    const Scrowl = window['Scrowl'];\n    let classes = `template-simple-text`;\n    const Markdown = Scrowl.core.Markdown;\n    const Anime = Scrowl.core.anime;\n    const textAnimation = (0,external_React_.useRef)();\n    const editMode = props.editMode ? true : false;\n    const focusElement = editMode ? props.focusElement : null;\n    const contentId = `${id}-block-text`;\n    const text = schema.content.text.value;\n    const textFocusCss = focusElement === 'text' && 'has-focus';\n    const textRef = (0,external_React_.useRef)(null);\n    const textStyles = {\n        transform: 'translateX(100%)',\n        opacity: '0',\n    };\n    const textAnimiationDuration = 120;\n    const animations = schema.content.animateLists.value;\n    const bgUrl = schema.content.bgImage.content.url.value;\n    const bgLabel = schema.content.bgImage.content.alt.value || '';\n    const bgFocusCss = focusElement === 'bgImage.url' && 'has-focus';\n    const bgRef = (0,external_React_.useRef)(null);\n    const bgStyles = {\n        backgroundImage: `url(\"${bgUrl}\")`,\n    };\n    const alignment = schema.content.options.content.alignment.value;\n    const alignmentCss = alignment;\n    switch (animations) {\n        case 'none':\n            textStyles.transform = 'translateX(0%)';\n            textStyles.opacity = '1';\n            break;\n    }\n    const handleFocusText = () => {\n        if (editMode) {\n            Scrowl.core.host.sendMessage({\n                type: 'focus',\n                field: 'text',\n            });\n        }\n    };\n    const handleFocusBg = () => {\n        if (editMode) {\n            Scrowl.core.host.sendMessage({\n                type: 'focus',\n                field: 'bgImage.url',\n            });\n        }\n    };\n    const handleSlideProgress = (ev) => {\n        const updateTextAnimation = () => {\n            if (animations === 'none') {\n                return;\n            }\n            if (textAnimation.current && ev.scene.progress >= 0) {\n                const seekValue = textAnimiationDuration * 2 * (ev.scene.progress / 100);\n                textAnimation.current.seek(seekValue);\n            }\n        };\n        updateTextAnimation();\n    };\n    (0,external_React_.useEffect)(() => {\n        const createAnimation = () => {\n            if (!textRef.current || !textRef.current.childNodes) {\n                return;\n            }\n            const initialTextStyles = Object.keys(textStyles);\n            const nodeList = [];\n            textRef.current.childNodes.forEach((child) => {\n                const node = child;\n                if (!node || !node.style) {\n                    return;\n                }\n                initialTextStyles.forEach((prop) => {\n                    node.style[prop] = textStyles[prop];\n                });\n                nodeList.push(node);\n            });\n            switch (animations) {\n                case 'all':\n                    textAnimation.current = Anime({\n                        targets: nodeList,\n                        autoplay: false,\n                        easing: 'easeInOutQuad',\n                        opacity: '1',\n                        translateX: '0',\n                        duration: textAnimiationDuration,\n                    });\n                    break;\n                case 'none':\n                    if (textAnimation) {\n                        textAnimation.current.remove(nodeList);\n                    }\n                    break;\n            }\n        };\n        createAnimation();\n    }, [textRef.current, animations]);\n    return (external_React_default().createElement(Scrowl.core.Template, { id: `slide-${contentId}`, className: classes, onProgress: handleSlideProgress, ...props },\n        external_React_default().createElement(\"div\", { id: contentId, className: \"owlui-container\" },\n            (bgUrl || editMode) && (external_React_default().createElement(\"div\", { ref: bgRef, className: `img__wrapper ${alignmentCss} can-focus ${bgFocusCss} as-bg`, onMouseDown: handleFocusBg },\n                external_React_default().createElement(\"img\", { className: \"img__container\", \"aria-label\": bgLabel, style: bgStyles }))),\n            external_React_default().createElement(\"div\", { className: \"owlui-row owlui-row-cols-1\" },\n                external_React_default().createElement(\"div\", { className: \"owlui-col\" },\n                    bgUrl && external_React_default().createElement(\"div\", { className: \"overlay\" }),\n                    external_React_default().createElement(\"div\", { className: `text__wrapper ${alignmentCss}` },\n                        external_React_default().createElement(\"div\", { ref: textRef, className: `text__container can-focus ${textFocusCss}`, onMouseDown: handleFocusText },\n                            external_React_default().createElement(Markdown, null, text))))))));\n};\n/* harmony default export */ const simple_text = ({\n    SimpleText,\n});\n\n;// CONCATENATED MODULE: ./src/simple-text.schema.ts\nconst SimpleTextSchema = {\n    meta: {\n        version: '1.0.0',\n        label: 'Simple Text',\n        component: 'SimpleText',\n        filename: 'simple-text',\n        tags: [\"text\"],\n        icon: 'notes',\n    },\n    content: {\n        text: {\n            type: 'Textbox',\n            label: 'Text',\n            value: '# Starting \\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!',\n            placeholder: 'Enter your text',\n            multiLine: true,\n            lines: 10,\n            autoGrow: 10,\n            allowLinebreaks: true,\n        },\n        animateLists: {\n            type: 'Select',\n            label: 'Animations',\n            value: 'all',\n            options: [\n                { name: 'No Animation', value: 'none' },\n                { name: 'Lists & Paragraphs', value: 'all' },\n            ],\n        },\n        bgImage: {\n            type: 'Fieldset',\n            label: 'Background Image',\n            content: {\n                alt: {\n                    type: 'Textbox',\n                    label: 'Alt Text',\n                    placeholder: 'Image alt text',\n                },\n                url: {\n                    type: 'Asset',\n                    assetTypes: ['image'],\n                    label: 'Image',\n                },\n            },\n        },\n        options: {\n            type: 'Fieldset',\n            label: 'Options',\n            content: {\n                alignment: {\n                    type: 'Select',\n                    hint: 'BodyAlignment',\n                    label: 'Alignment',\n                    value: 'center',\n                    options: [\n                        {\n                            name: 'Full Justify',\n                            value: 'justify',\n                            icon: 'align_horizontal_right',\n                        },\n                        {\n                            name: 'Align Left',\n                            value: 'left',\n                            icon: 'align_horizontal_left',\n                        },\n                        {\n                            name: 'Align Center',\n                            value: 'center',\n                            icon: 'align_horizontal_left',\n                        },\n                        {\n                            name: 'Align Right',\n                            value: 'right',\n                            icon: 'align_horizontal_right',\n                        },\n                    ],\n                    iconFromValue: true,\n                },\n            },\n        },\n    },\n};\n/* harmony default export */ const simple_text_schema = ({\n    SimpleTextSchema,\n});\n\n;// CONCATENATED MODULE: ./src/index.ts\n\n\n\n\n;// CONCATENATED MODULE: ./web/index.ts\n\nwindow.SimpleText = SimpleText;\nwindow.SimpleTextSchema = SimpleTextSchema;\n\n\n//# sourceURL=webpack://@scrowl/template-simple-text/./web/index.ts_+_3_modules?")},24:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__24__}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__(185);return __webpack_exports__})()));