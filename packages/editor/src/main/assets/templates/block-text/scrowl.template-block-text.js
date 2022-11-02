!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("React"),require("@scrowl/template-core"));else if("function"==typeof define&&define.amd)define(["React"],n);else{var t="object"==typeof exports?n(require("React"),require("@scrowl/template-core")):n(e.React,e.Scrowl);for(var a in t)("object"==typeof exports?exports:e)[a]=t[a]}}(self,((__WEBPACK_EXTERNAL_MODULE__24__,__WEBPACK_EXTERNAL_MODULE__294__)=>(()=>{"use strict";var __webpack_modules__={918:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"React\"\nvar external_React_ = __webpack_require__(24);\nvar external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);\n// EXTERNAL MODULE: external {\"root\":\"Scrowl\",\"commonjs\":\"@scrowl/template-core\",\"commonjs2\":\"@scrowl/template-core\"}\nvar template_core_ = __webpack_require__(294);\nvar template_core_default = /*#__PURE__*/__webpack_require__.n(template_core_);\n;// CONCATENATED MODULE: ./src/_index.scss\n// extracted by mini-css-extract-plugin\nvar canFocus = \"can-focus\";\nvar editMode = \"edit-mode\";\nvar hasFocus = \"has-focus\";\nvar header = \"header\";\nvar hero = \"hero\";\nvar img = \"img\";\nvar overlay = \"overlay\";\nvar right = \"right\";\nvar showProgress = \"show-progress\";\nvar templateBlockText = \"template-block-text\";\nvar _index_text = \"text\";\nvar wrapper = \"wrapper\";\n;// CONCATENATED MODULE: ./src/block-text.tsx\n\n\n\nconst BlockText = ({ schema, ...props }) => {\n    let classes = `${templateBlockText} `;\n    const editMode = props.editMode ? true : false;\n    const focusElement = editMode ? props.focusElement : null;\n    const scrollScenes = external_React_default().useRef([]);\n    const timeline = external_React_default().useRef();\n    let schemaText = schema.content.text.value;\n    let useImageAsBG = schema.content.bgImage.content.bg.value;\n    let alignment = schema.content.options.content.alignment.value;\n    let showProgressBar = schema.content.options.content.showProgress.value;\n    const slideDuration = showProgressBar ? 1000 : 0;\n    if (showProgressBar) {\n        classes += ' show-progress';\n    }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    function getId(id) {\n        if (!id) {\n            return props.id;\n        }\n        return props.id + '-' + id;\n    }\n    const handleScrollUpdate = (e) => {\n        if (e.stage === 'body') {\n            timeline.current.seek(timeline.current.duration * e.stageProgress);\n        }\n    };\n    const handleStateChange = (e) => {\n        if (e.state === 'visible') {\n            scrollScenes.current.map((scene) => scene.enabled(true));\n        }\n        else {\n            scrollScenes.current.map((scene) => scene.enabled(false));\n        }\n    };\n    external_React_default().useEffect(() => {\n        if (!showProgressBar) {\n            return () => { };\n        }\n        scrollScenes.current.push(new (template_core_default()).core.scroll.Scene({\n            triggerElement: '#' + getId(),\n            duration: slideDuration,\n            offset: 0,\n            triggerHook: 0,\n        })\n            .setPin('#' + getId('pinned-body'), { pushFollowers: false })\n            .addTo(props.controller)\n            .enabled(false));\n        timeline.current = template_core_default().core.anime.timeline({\n            easing: 'easeInOutQuad',\n            autoplay: false,\n        });\n        const currentTimeline = timeline.current;\n        const target = {\n            targets: '#' + getId('bar'),\n            width: '100%',\n            duration: slideDuration,\n        };\n        currentTimeline.add(target);\n        return () => {\n            scrollScenes.current.forEach((scene) => {\n                scene.destroy(true);\n                props.controller.removeScene(scene);\n            });\n            scrollScenes.current = [];\n            currentTimeline.children.map((child) => {\n                child.remove(target);\n                child.reset();\n                currentTimeline.remove(child);\n            });\n            currentTimeline.reset();\n        };\n    }, [showProgressBar]);\n    return (external_React_default().createElement((template_core_default()).core.Template, { ...props, className: classes, duration: slideDuration, onStateChange: handleStateChange, onScroll: handleScrollUpdate, ready: true },\n        external_React_default().createElement(\"div\", { className: \"slide-container\" },\n            external_React_default().createElement(\"div\", { id: getId('pinned-body'), className: \"hero\", \"aria-label\": useImageAsBG ? schema['bgImage.alt'] : '', style: useImageAsBG && schema['bgImage.url']\n                    ? {\n                        width: '100vw',\n                        height: '100vh',\n                        backgroundImage: 'url(\"./course/assets/' + schema['bgImage.url'] + '\")',\n                    }\n                    : {} },\n                useImageAsBG ? external_React_default().createElement(\"div\", { className: \"overlay\" }) : null,\n                external_React_default().createElement(\"div\", { className: 'text ' + (alignment === 'right' ? ' right' : '') },\n                    external_React_default().createElement(\"div\", { className: \"wrapper\" },\n                        external_React_default().createElement(\"hr\", { id: getId('bar'), style: { width: showProgressBar ? '0%' : '100%' } }),\n                        external_React_default().createElement(\"p\", { className: 'can-focus ' + (focusElement === 'text' && ' has-focus'), onMouseDown: () => {\n                                if (editMode) {\n                                    // Scrowl.focusOnschema('text');\n                                }\n                            } },\n                            external_React_default().createElement((template_core_default()).core.Markdown, { children: schemaText })))),\n                useImageAsBG ? null : (external_React_default().createElement(\"div\", { role: \"img\", \"aria-label\": schema['hero_image.alt'], className: 'img ' +\n                        (alignment === 'right' ? ' right' : '') +\n                        ' can-focus ' +\n                        (focusElement === 'bgImage.url' && ' has-focus'), onMouseDown: () => {\n                        if (editMode) {\n                            // Scrowl.focusOnschema('bgImage.url');\n                        }\n                    }, style: schema['bgImage.url']\n                        ? {\n                            backgroundImage: 'url(\"./course/assets/' + schema['bgImage.url'] + '\")',\n                        }\n                        : {} }))))));\n};\n/* harmony default export */ const block_text = ({\n    BlockText,\n});\n\n;// CONCATENATED MODULE: ./src/block-text.schema.ts\nconst BlockTextSchema = {\n    meta: {\n        version: \"1.0.0\",\n        label: \"Text Block\",\n        component: \"BlockText\",\n        filename: \"block-text\"\n    },\n    content: {\n        text: {\n            type: 'Textbox',\n            label: 'Block Text',\n            value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',\n            placeholder: 'Write content here...',\n            multiLine: true,\n            lines: 10,\n            autoGrow: 10,\n            allowLinebreaks: true,\n        },\n        bgImage: {\n            type: 'Fieldset',\n            label: 'Background Image',\n            content: {\n                alt: {\n                    type: 'Textbox',\n                    label: 'Alt Text',\n                    placeholder: 'Image alt text',\n                },\n                url: {\n                    type: 'Asset',\n                    assetType: 'image',\n                    label: 'Image',\n                },\n                bg: {\n                    type: 'Checkbox',\n                    label: 'Use as Background',\n                    value: false,\n                }\n            },\n        },\n        options: {\n            type: 'Fieldset',\n            label: 'Options',\n            content: {\n                alignment: {\n                    type: 'Select',\n                    hint: 'BodyAlignment',\n                    label: 'Alignment',\n                    value: 'left',\n                    options: [\n                        { name: 'Align Left', value: 'left', icon: 'align_horizontal_left' },\n                        { name: 'Align Right', value: 'right', icon: 'align_horizontal_right' },\n                    ],\n                    iconFromValue: true,\n                },\n                showProgress: {\n                    type: 'Checkbox',\n                    label: 'Show Progress Bar',\n                    value: false,\n                },\n            },\n        },\n    },\n};\n/* harmony default export */ const block_text_schema = ({\n    BlockTextSchema,\n});\n\n;// CONCATENATED MODULE: ./src/index.ts\n\n\n\n\n;// CONCATENATED MODULE: ./web/index.ts\n\nwindow.BlockText = BlockText;\nwindow.BlockTextSchema = BlockTextSchema;\n\n\n//# sourceURL=webpack://@scrowl/template-block-text/./web/index.ts_+_4_modules?")},24:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__24__},294:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__294__}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__(918);return __webpack_exports__})()));