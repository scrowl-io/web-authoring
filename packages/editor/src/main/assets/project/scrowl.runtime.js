!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(self,(()=>(()=>{"use strict";var __webpack_modules__={166:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n;// CONCATENATED MODULE: ./src/runtime.ts\n// const hasProp = (obj: {}, prop: string) => {\n//   return Object.prototype.hasOwnProperty.call(obj, prop);\n// };\nconst service = {\n    init: false,\n    finished: false,\n    _time: {\n        startTime: undefined,\n        getSessionTime: () => {\n            let sessionTime;\n            if (service._time.startTime) {\n                sessionTime = new Date().getTime() - service._time.startTime.getTime();\n            }\n            console.log('GET TIME');\n            console.log(sessionTime);\n            console.log(service._time.convert(sessionTime));\n            return service._time.convert(sessionTime);\n        },\n        end: undefined,\n        convert: (total) => {\n            // @ts-ignore\n            function ZeroPad(val, pad) {\n                let res = new String(val);\n                const len = res.length;\n                if (len > pad) {\n                    return res.substr(0, pad);\n                }\n                for (let i = len; i < pad; i++) {\n                    res = '0' + res;\n                }\n                return res;\n            }\n            let totalMs = total % 1000;\n            let totalS = ((total - totalMs) / 1000) % 60;\n            let totalM = ((total - totalMs - totalS * 1000) / 60000) % 60;\n            let totalH = (total - totalMs - totalS * 1000 - totalM * 60000) / 3600000;\n            if (totalH == 10000) {\n                totalH = 9999;\n                totalM = (total - totalH * 3600000) / 60000;\n                if (totalM == 100) {\n                    totalM = 99;\n                }\n                totalM = Math.floor(totalM);\n                totalS = (total - totalH * 3600000 - totalM * 60000) / 1000;\n                if (totalS == 100) {\n                    totalS = 99;\n                }\n                totalS = Math.floor(totalS);\n                totalMs = total - totalH * 3600000 - totalM * 60000 - totalS * 1000;\n            }\n            let timespan = 'PT' +\n                totalH +\n                // ZeroPad(totalH, 4) +\n                'H' +\n                totalM +\n                // ZeroPad(totalM, 2) +\n                'M' +\n                totalS +\n                // ZeroPad(totalS, 2) +\n                'S';\n            if (totalH > 9999) {\n                timespan = '9999:99:99';\n            }\n            console.log('TIMESPAN');\n            console.log(timespan);\n            return timespan;\n        },\n    },\n    nFindAPITries: 0,\n    // @ts-ignore\n    API: null,\n    maxTries: 500,\n    //@ts-ignore\n    scanForAPI: (win) => {\n        while (win.API_1484_11 == null && win.parent != null && win.parent != win) {\n            service.nFindAPITries++;\n            if (service.nFindAPITries > service.maxTries) {\n                return null;\n            }\n            win = win.parent;\n        }\n        return win.API_1484_11;\n    },\n    getAPI: (win) => {\n        if (win.parent != null && win.parent != win) {\n            // @ts-ignore\n            service.API = service.scanForAPI(win.parent);\n        }\n        if (service.API == null && win.opener != null) {\n            // @ts-ignore\n            service.API = service.scanForAPI(win.opener);\n        }\n    },\n    getError: (printError) => {\n        printError =\n            printError === undefined || printError === null ? true : printError;\n        const [isInit, API] = service.isInitialized();\n        if (!isInit) {\n            return {\n                error: true,\n                message: 'Service is not initialized',\n            };\n        }\n        const errorId = API.GetLastError();\n        const errorMsg = API.GetErrorString(errorId);\n        const errorStack = API.GetDiagnostic(errorId);\n        const apiError = {\n            id: errorId,\n            message: errorMsg,\n            stack: errorStack,\n        };\n        if (printError) {\n            console.error(`Error:\\n${JSON.stringify(apiError, null, 2)}`);\n        }\n        return {\n            error: false,\n            data: apiError,\n        };\n    },\n    commit: () => {\n        console.debug(`API.Commit`);\n        const [isInit, API] = service.isInitialized();\n        if (!isInit || !API) {\n            console.warn(`Unable to get location: service not initialized`);\n            return [true];\n        }\n        service.setValue('cmi.session_time', service._time.getSessionTime());\n        API.Commit('');\n        return [false];\n    },\n    exit: () => {\n        console.debug('API.Exit');\n        return service.commit();\n    },\n    isInitialized: () => {\n        console.debug('API.Initialize()');\n        service.init = false;\n        if (!service.API) {\n            console.error('MISSING_SCORM_API - INIT');\n            return [service.init, false];\n        }\n        // @ts-ignore\n        if (service.API.Initialized === 'false') {\n            console.error('API failed to initialize');\n            return [service.init, false];\n        }\n        service.init = true;\n        return [service.init, service.API];\n    },\n    // { m: 1, l: 1, s?: 3 }\n    updateLocation: (location, slideId) => {\n        console.log(`API.UpdateLocation`);\n        console.log(location);\n        const [isInit, API] = service.isInitialized();\n        if (!isInit || !API) {\n            console.warn(`Unable to get location: service not initialized`);\n            return [true];\n        }\n        service.setValue('cmi.location', JSON.stringify({ v1: 1, ...location, slideId: slideId }));\n        service.commit();\n        return [false];\n    },\n    getLocation: () => {\n        console.debug(`API.GetLocation`);\n        const [isInit, API] = service.isInitialized();\n        if (!isInit || !API) {\n            console.warn(`Unable to get location: service not initialized`);\n            return [true, {}];\n        }\n        // {m:1, l:1, s?:3} || {} || null\n        try {\n            const [error, location] = service.getValue('cmi.location');\n            if (error || !location) {\n                return [true, {}];\n            }\n            return [false, JSON.parse(location)];\n        }\n        catch (e) {\n            console.error(e);\n            return [true, {}];\n        }\n    },\n    getProgress: () => {\n        console.debug(`API.GetProgress`);\n        const [isInit, API] = service.isInitialized();\n        if (!isInit || !API) {\n            console.warn(`Unable to get progress: service not initialized`);\n            return [true, {}];\n        }\n        try {\n            const [error, progress] = service.getValue('cmi.progress_measure');\n            if (error || !progress) {\n                return [true, {}];\n            }\n            return [false, progress];\n        }\n        catch (e) {\n            console.error(e);\n            return [true, {}];\n        }\n    },\n    updateProgress: (progressPercentage) => {\n        console.log(`API.UpdateProgress`);\n        const [isInit, API] = service.isInitialized();\n        if (!isInit || !API) {\n            console.warn(`Unable to update progress: service not initialized`);\n            return [true];\n        }\n        const [progressError, previousProgress] = service.getValue('cmi.progress_measure');\n        // error 403 = Data Model Element Value Not Initialized (first time setting progress)\n        // @ts-ignore\n        if (progressError && previousProgress.data.id === '403') {\n            service.setValue('cmi.progress_measure', progressPercentage);\n            service.commit();\n        }\n        if (!progressError) {\n            if (!previousProgress ||\n                parseFloat(previousProgress) === 0 ||\n                progressPercentage > parseFloat(previousProgress)) {\n                service.setValue('cmi.progress_measure', progressPercentage);\n            }\n            service.commit();\n        }\n        return [false];\n    },\n    start: () => {\n        console.debug(`API.Start`);\n        service._time.startTime = new Date();\n        service.getAPI(window);\n        service.API?.Initialize('');\n        const [isInit, API] = service.isInitialized();\n        if (!isInit || !API) {\n            return [true];\n        }\n        const [statusError, completionStatus] = service.getValue('cmi.completion_status');\n        if (statusError) {\n            return [true];\n        }\n        if (completionStatus === 'unknown') {\n            service.setValue('cmi.completion_status', 'incomplete');\n            service.setValue('cmi.success_status', 'unknown');\n            service.setValue('cmi.suspend_data', '{}');\n        }\n        else {\n            service.setValue('cmi.score.scaled', service.getValue('cmi.score.scaled')[1]);\n            service.setValue('cmi.score.raw', service.getValue('cmi.score.raw')[1]);\n            service.setValue('cmi.success_status', service.getValue('cmi.success_status')[1]);\n            service.setValue('cmi.progress_measure', service.getValue('cmi.progress_measure')[1]);\n            service.setValue('cmi.completion_status', service.getValue('cmi.completion_status')[1]);\n        }\n        // until we have things hooked up to exit buttons/nav, set exit to 'suspend' as part of start() so that status persists whether the user finishes or exits\n        service.setValue('cmi.exit', 'suspend');\n        service.commit();\n        console.log('runtime started');\n        return [false];\n    },\n    finish: () => {\n        console.debug(`API.Finish`);\n        const [isInit, API] = service.isInitialized();\n        if (!isInit || !API) {\n            console.warn(`Unable to finish: service not initialized`);\n            return [true];\n        }\n        service.setValue('cmi.score.min', 0);\n        service.setValue('cmi.score.max', 100);\n        service.setValue('cmi.score.scaled', 1);\n        service.setValue('cmi.score.raw', 100);\n        service.setValue('cmi.success_status', 'passed');\n        service.setValue('cmi.progress_measure', 1);\n        service.setValue('cmi.completion_status', 'completed');\n        service.commit();\n        API.Terminate('');\n        return [false];\n    },\n    setValue: (elem, val) => {\n        console.debug(`API.SetValue for ${elem} to ${val}`);\n        const [isInit, API] = service.isInitialized();\n        if (!isInit || !API) {\n            console.warn(`Unable to set value for ${elem}: service not initialized`);\n            return [true];\n        }\n        if (val !== undefined) {\n            if (API.SetValue(elem, val) === 'false') {\n                service.getError(true);\n                // return [true, service.getError(true)];\n            }\n        }\n        else {\n            console.warn(`Unable to set value for ${elem}: value undefined`);\n        }\n        return [false];\n    },\n    getValue: (elem) => {\n        console.debug(`API.GetValue for ${elem}`);\n        const [isInit, API] = service.isInitialized();\n        if (!isInit || !API) {\n            console.warn(`Unable to set value for ${elem}: service not initialized`);\n            return [true, ''];\n        }\n        const getRes = API.GetValue(elem);\n        if (getRes === '') {\n            console.error(`API failed to get value for: ${elem}`);\n            service.getError(true);\n        }\n        return [false, getRes];\n    },\n};\n/* harmony default export */ const runtime = ({\n    service,\n});\n\n;// CONCATENATED MODULE: ./src/index.ts\n\n\n\n;// CONCATENATED MODULE: ./web/index.ts\n\nwindow.Scrowl = window.Scrowl || {};\nwindow.Scrowl.runtime = service;\n\n\n//# sourceURL=webpack://@scrowl/runtime/./web/index.ts_+_2_modules?")}},__webpack_require__={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},__webpack_exports__={};return __webpack_modules__[166](0,__webpack_exports__,__webpack_require__),__webpack_exports__})()));
