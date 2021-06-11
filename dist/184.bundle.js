(self.webpackChunk=self.webpackChunk||[]).push([[184],{58184:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "amplify_nav": () => (/* binding */ AmplifyNav),\n/* harmony export */   "amplify_sign_out": () => (/* binding */ AmplifySignOut)\n/* harmony export */ });\n/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26293);\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35160);\n/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26908);\n/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15548);\n/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78472);\n/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10396);\n/* harmony import */ var _helpers_82822fb2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6756);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError("Generator is already executing.");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\n\nvar amplifyNavCss = ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";\nvar AmplifyNav = /** @class */ (function () {\n    function AmplifyNav(hostRef) {\n        (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);\n    }\n    AmplifyNav.prototype.render = function () {\n        return ((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav", { class: "nav" }, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));\n    };\n    return AmplifyNav;\n}());\nAmplifyNav.style = amplifyNavCss;\nvar AmplifySignOut = /** @class */ (function () {\n    function class_1(hostRef) {\n        (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);\n        /** Auth state change handler for this component */\n        this.handleAuthStateChange = _helpers_82822fb2_js__WEBPACK_IMPORTED_MODULE_3__.d;\n        /** Text inside of the Sign Out button */\n        this.buttonText = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__.T.SIGN_OUT;\n    }\n    class_1.prototype.signOut = function (event) {\n        return __awaiter(this, void 0, void 0, function () {\n            var error_1;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (event)\n                            event.preventDefault();\n                        // TODO: Federated Sign Out\n                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__/* .Auth */ .g || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__/* .Auth.signOut */ .g.signOut !== \'function\') {\n                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__.N);\n                        }\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, , 4]);\n                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__/* .Auth.signOut */ .g.signOut()];\n                    case 2:\n                        _a.sent();\n                        this.handleAuthStateChange(_auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__.A.SignedOut);\n                        return [3 /*break*/, 4];\n                    case 3:\n                        error_1 = _a.sent();\n                        (0,_helpers_82822fb2_js__WEBPACK_IMPORTED_MODULE_3__.a)(error_1);\n                        return [3 /*break*/, 4];\n                    case 4: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    class_1.prototype.render = function () {\n        var _this = this;\n        return ((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("amplify-button", { slot: "sign-out", onClick: function (event) { return _this.signOut(event); }, "data-test": "sign-out-button" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .I18n.get */ .o.get(this.buttonText)));\n    };\n    return class_1;\n}());\n\n\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-nav_2.entry.js?')}}]);