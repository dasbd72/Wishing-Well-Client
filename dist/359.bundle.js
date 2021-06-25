(self.webpackChunk=self.webpackChunk||[]).push([[359],{44359:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "amplify_s3_image": () => (/* binding */ AmplifyS3Image)\n/* harmony export */ });\n/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26293);\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24397);\n/* harmony import */ var _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90549);\n/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13648);\n/* harmony import */ var _storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62118);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError("Generator is already executing.");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\nvar amplifyS3ImageCss = ":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}";\nvar logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_4__/* .ConsoleLogger */ .k(\'S3Image\');\nvar AmplifyS3Image = /** @class */ (function () {\n    function class_1(hostRef) {\n        (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);\n        /** The content type header used when uploading to S3 */\n        this.contentType = \'binary/octet-stream\';\n        /** The access level of the image */\n        this.level = _storage_types_f257c0f2_js__WEBPACK_IMPORTED_MODULE_1__.A.Public;\n    }\n    class_1.prototype.watchHandler = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.load()];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    class_1.prototype.componentWillLoad = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.load()];\n                    case 1:\n                        _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    class_1.prototype.load = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var _a, imgKey, path, body, contentType, level, track, identityId, key, _b, err_1;\n            return __generator(this, function (_c) {\n                switch (_c.label) {\n                    case 0:\n                        _a = this, imgKey = _a.imgKey, path = _a.path, body = _a.body, contentType = _a.contentType, level = _a.level, track = _a.track, identityId = _a.identityId;\n                        if (!imgKey && !path) {\n                            logger.debug(\'empty imgKey and path\');\n                            return [2 /*return*/];\n                        }\n                        key = imgKey || path;\n                        logger.debug(\'loading \' + key + \'...\');\n                        _c.label = 1;\n                    case 1:\n                        _c.trys.push([1, 5, , 6]);\n                        if (!body) return [3 /*break*/, 3];\n                        return [4 /*yield*/, (0,_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_3__.p)(imgKey, body, level, track, contentType, logger)];\n                    case 2:\n                        _c.sent();\n                        _c.label = 3;\n                    case 3:\n                        _b = this;\n                        return [4 /*yield*/, (0,_storage_helpers_48c373a0_js__WEBPACK_IMPORTED_MODULE_3__.g)(key, level, track, identityId, logger)];\n                    case 4:\n                        _b.src = _c.sent();\n                        return [3 /*break*/, 6];\n                    case 5:\n                        err_1 = _c.sent();\n                        logger.debug(err_1);\n                        throw new Error(err_1);\n                    case 6: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    class_1.prototype.render = function () {\n        return ((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.src && ((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: this.src, onLoad: this.handleOnLoad, onError: this.handleOnError }))));\n    };\n    Object.defineProperty(class_1, "watchers", {\n        get: function () {\n            return {\n                "body": ["watchHandler"]\n            };\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return class_1;\n}());\nAmplifyS3Image.style = amplifyS3ImageCss;\n\n\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-s3-image.entry.js?')},10396:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"A\": () => (/* binding */ AUTH_CHANNEL),\n/* harmony export */   \"C\": () => (/* binding */ COUNTRY_DIAL_CODE_SUFFIX),\n/* harmony export */   \"E\": () => (/* binding */ EMAIL_SUFFIX),\n/* harmony export */   \"N\": () => (/* binding */ NO_AUTH_MODULE_FOUND),\n/* harmony export */   \"P\": () => (/* binding */ PHONE_EMPTY_ERROR_MESSAGE),\n/* harmony export */   \"R\": () => (/* binding */ REDIRECTED_FROM_HOSTED_UI),\n/* harmony export */   \"S\": () => (/* binding */ SETUP_TOTP),\n/* harmony export */   \"T\": () => (/* binding */ TOAST_AUTH_ERROR_EVENT),\n/* harmony export */   \"U\": () => (/* binding */ UI_AUTH_CHANNEL),\n/* harmony export */   \"a\": () => (/* binding */ AUTH_STATE_CHANGE_EVENT),\n/* harmony export */   \"b\": () => (/* binding */ PHONE_SUFFIX),\n/* harmony export */   \"c\": () => (/* binding */ AUTHENTICATOR_AUTHSTATE),\n/* harmony export */   \"d\": () => (/* binding */ NO_INTERACTIONS_MODULE_FOUND),\n/* harmony export */   \"e\": () => (/* binding */ NO_STORAGE_MODULE_FOUND),\n/* harmony export */   \"f\": () => (/* binding */ USER_NOT_SETUP_SOFTWARE_TOKEN_MFA),\n/* harmony export */   \"g\": () => (/* binding */ USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA),\n/* harmony export */   \"h\": () => (/* binding */ COUNTRY_DIAL_CODE_DEFAULT),\n/* harmony export */   \"i\": () => (/* binding */ SUCCESS),\n/* harmony export */   \"j\": () => (/* binding */ AUTH_SOURCE_KEY),\n/* harmony export */   \"k\": () => (/* binding */ CODE_SUFFIX),\n/* harmony export */   \"l\": () => (/* binding */ PASSWORD_SUFFIX),\n/* harmony export */   \"m\": () => (/* binding */ USERNAME_SUFFIX)\n/* harmony export */ });\n// Dictionaries\n// fieldId constants\nvar USERNAME_SUFFIX = 'username';\nvar EMAIL_SUFFIX = 'email';\nvar CODE_SUFFIX = 'code';\nvar PHONE_SUFFIX = 'phone';\nvar PASSWORD_SUFFIX = 'password';\n// Country Dial Code common constants\nvar COUNTRY_DIAL_CODE_SUFFIX = 'country-dial-code-select';\nvar COUNTRY_DIAL_CODE_DEFAULT = '+1';\n// Auth Keys\nvar AUTH_SOURCE_KEY = 'amplify-auth-source';\nvar REDIRECTED_FROM_HOSTED_UI = 'amplify-redirected-from-hosted-ui';\nvar AUTHENTICATOR_AUTHSTATE = 'amplify-authenticator-authState';\n// Error message Common Constants\nvar PHONE_EMPTY_ERROR_MESSAGE = 'Phone number can not be empty';\nvar NO_AUTH_MODULE_FOUND = 'No Auth module found, please ensure @aws-amplify/auth is imported';\nvar NO_STORAGE_MODULE_FOUND = 'No Storage module found, please ensure @aws-amplify/storage is imported';\nvar NO_INTERACTIONS_MODULE_FOUND = 'No Interactions module found, please ensure @aws-amplify/interactions is imported';\n// TOTP Messages\nvar SETUP_TOTP = 'SETUP_TOTP';\n// Select MFA Types Messages\nvar USER_NOT_SETUP_SOFTWARE_TOKEN_MFA = 'User has not set up software token mfa';\nvar USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA = 'User has not verified software token mfa';\n// Common events\nvar SUCCESS = 'SUCCESS';\n// Hub Events and Channels\nvar AUTH_CHANNEL = 'auth';\nvar UI_AUTH_CHANNEL = 'UI Auth';\nvar TOAST_AUTH_ERROR_EVENT = 'ToastAuthError';\nvar AUTH_STATE_CHANGE_EVENT = 'AuthStateChange';\n\n\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js?")},62118:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => (/* binding */ getTextSource),\n/* harmony export */   \"c\": () => (/* binding */ calcKey),\n/* harmony export */   \"g\": () => (/* binding */ getStorageObject),\n/* harmony export */   \"i\": () => (/* binding */ imageFileType),\n/* harmony export */   \"p\": () => (/* binding */ putStorageObject)\n/* harmony export */ });\n/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10396);\n/* harmony import */ var _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13648);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar imageFileType = new Set([\n    'apng',\n    'bmp',\n    'gif',\n    'ico',\n    'cur',\n    'jpg',\n    'jpeg',\n    'jfif',\n    'pjpeg',\n    'pjp',\n    'png',\n    'svg',\n    'tif',\n    'tiff',\n    'webp',\n]);\nvar calcKey = function (file, fileToKey) {\n    var name = file.name, size = file.size, type = file.type;\n    var key = encodeURI(name);\n    if (fileToKey) {\n        if (typeof fileToKey === 'string') {\n            key = fileToKey;\n        }\n        else if (typeof fileToKey === 'function') {\n            key = fileToKey({ name: name, size: size, type: type });\n        }\n        else {\n            key = encodeURI(JSON.stringify(fileToKey));\n        }\n        if (!key) {\n            key = 'empty_key';\n        }\n    }\n    return key.replace(/\\s/g, '_');\n};\nvar getStorageObject = function (key, level, track, identityId, logger) { return __awaiter(void 0, void 0, void 0, function () {\n    var src, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__/* .Storage */ .Ke || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__/* .Storage.get */ .Ke.get !== 'function') {\n                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_1__.e);\n                }\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__/* .Storage.get */ .Ke.get(key, { level: level, track: track, identityId: identityId })];\n            case 2:\n                src = _a.sent();\n                logger.debug('Storage image get', src);\n                return [2 /*return*/, src];\n            case 3:\n                error_1 = _a.sent();\n                throw new Error(error_1);\n            case 4: return [2 /*return*/];\n        }\n    });\n}); };\nvar readFileAsync = function (blob) {\n    return new Promise(function (resolve, reject) {\n        var reader = new FileReader();\n        reader.onload = function () {\n            resolve(reader.result);\n        };\n        reader.onerror = function () {\n            reject('Failed to read file!');\n            reader.abort();\n        };\n        reader.readAsText(blob);\n    });\n};\nvar getTextSource = function (key, level, track, identityId, logger) { return __awaiter(void 0, void 0, void 0, function () {\n    var textSrc, text, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__/* .Storage */ .Ke || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__/* .Storage.get */ .Ke.get !== 'function') {\n                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_1__.e);\n                }\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 4, , 5]);\n                return [4 /*yield*/, _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__/* .Storage.get */ .Ke.get(key, {\n                        download: true,\n                        level: level,\n                        track: track,\n                        identityId: identityId,\n                    })];\n            case 2:\n                textSrc = _a.sent();\n                logger.debug(textSrc);\n                return [4 /*yield*/, readFileAsync(textSrc['Body'])];\n            case 3:\n                text = (_a.sent());\n                return [2 /*return*/, text];\n            case 4:\n                error_2 = _a.sent();\n                throw new Error(error_2);\n            case 5: return [2 /*return*/];\n        }\n    });\n}); };\nvar putStorageObject = function (key, body, level, track, contentType, logger) { return __awaiter(void 0, void 0, void 0, function () {\n    var data, error_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                if (!_aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__/* .Storage */ .Ke || typeof _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__/* .Storage.put */ .Ke.put !== 'function') {\n                    throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_1__.e);\n                }\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, _aws_amplify_storage__WEBPACK_IMPORTED_MODULE_0__/* .Storage.put */ .Ke.put(key, body, {\n                        contentType: contentType,\n                        level: level,\n                        track: track,\n                    })];\n            case 2:\n                data = _a.sent();\n                logger.debug('Upload data', data);\n                return [3 /*break*/, 4];\n            case 3:\n                error_3 = _a.sent();\n                throw new Error(error_3);\n            case 4: return [2 /*return*/];\n        }\n    });\n}); };\n\n\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/ui-components/dist/esm-es5/storage-helpers-48c373a0.js?")},90549:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "A": () => (/* binding */ AccessLevel)\n/* harmony export */ });\nvar AccessLevel;\n(function (AccessLevel) {\n    AccessLevel["Public"] = "public";\n    AccessLevel["Private"] = "private";\n    AccessLevel["Protected"] = "protected";\n})(AccessLevel || (AccessLevel = {}));\n\n\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/ui-components/dist/esm-es5/storage-types-f257c0f2.js?')}}]);