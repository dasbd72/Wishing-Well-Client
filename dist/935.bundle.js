(self.webpackChunk=self.webpackChunk||[]).push([[935],{35160:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"o\": () => (/* binding */ I18n)\n});\n\n// UNUSED EXPORTS: default\n\n// EXTERNAL MODULE: ../node_modules/@aws-amplify/core/lib-esm/Logger/ConsoleLogger.js\nvar ConsoleLogger = __webpack_require__(24397);\n;// CONCATENATED MODULE: ../node_modules/@aws-amplify/core/lib-esm/I18n/I18n.js\n/*\n * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\"). You may not use this file except in compliance with\n * the License. A copy of the License is located at\n *\n *     http://aws.amazon.com/apache2.0/\n *\n * or in the \"license\" file accompanying this file. This file is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions\n * and limitations under the License.\n */\n\nvar logger = new ConsoleLogger/* ConsoleLogger */.k('I18n');\n/**\n * Language transition class\n */\nvar I18n_I18n = /** @class */ (function () {\n    /**\n     * @constructor\n     * Initialize with configurations\n     * @param {Object} options\n     */\n    function I18n(options) {\n        /**\n         * @private\n         */\n        this._options = null;\n        /**\n         * @private\n         */\n        this._lang = null;\n        /**\n         * @private\n         */\n        this._dict = {};\n        this._options = Object.assign({}, options);\n        this._lang = this._options.language;\n        if (!this._lang &&\n            typeof window !== 'undefined' &&\n            window &&\n            window.navigator) {\n            this._lang = window.navigator.language;\n        }\n        logger.debug(this._lang);\n    }\n    /**\n     * @method\n     * Explicitly setting language\n     * @param {String} lang\n     */\n    I18n.prototype.setLanguage = function (lang) {\n        this._lang = lang;\n    };\n    /**\n     * @method\n     * Get value\n     * @param {String} key\n     * @param {String} defVal - Default value\n     */\n    I18n.prototype.get = function (key, defVal) {\n        if (defVal === void 0) { defVal = undefined; }\n        if (!this._lang) {\n            return typeof defVal !== 'undefined' ? defVal : key;\n        }\n        var lang = this._lang;\n        var val = this.getByLanguage(key, lang);\n        if (val) {\n            return val;\n        }\n        if (lang.indexOf('-') > 0) {\n            val = this.getByLanguage(key, lang.split('-')[0]);\n        }\n        if (val) {\n            return val;\n        }\n        return typeof defVal !== 'undefined' ? defVal : key;\n    };\n    /**\n     * @method\n     * Get value according to specified language\n     * @param {String} key\n     * @param {String} language - Specified langurage to be used\n     * @param {String} defVal - Default value\n     */\n    I18n.prototype.getByLanguage = function (key, language, defVal) {\n        if (defVal === void 0) { defVal = null; }\n        if (!language) {\n            return defVal;\n        }\n        var lang_dict = this._dict[language];\n        if (!lang_dict) {\n            return defVal;\n        }\n        return lang_dict[key];\n    };\n    /**\n     * @method\n     * Add vocabularies for one language\n     * @param {String} language - Language of the dictionary\n     * @param {Object} vocabularies - Object that has key-value as dictionary entry\n     */\n    I18n.prototype.putVocabulariesForLanguage = function (language, vocabularies) {\n        var lang_dict = this._dict[language];\n        if (!lang_dict) {\n            lang_dict = this._dict[language] = {};\n        }\n        Object.assign(lang_dict, vocabularies);\n    };\n    /**\n     * @method\n     * Add vocabularies for one language\n     * @param {Object} vocabularies - Object that has language as key,\n     *                                vocabularies of each language as value\n     */\n    I18n.prototype.putVocabularies = function (vocabularies) {\n        var _this = this;\n        Object.keys(vocabularies).map(function (key) {\n            _this.putVocabulariesForLanguage(key, vocabularies[key]);\n        });\n    };\n    return I18n;\n}());\n\n//# sourceMappingURL=I18n.js.map\n// EXTERNAL MODULE: ../node_modules/@aws-amplify/core/lib-esm/Amplify.js\nvar Amplify = __webpack_require__(69857);\n;// CONCATENATED MODULE: ../node_modules/@aws-amplify/core/lib-esm/I18n/index.js\n/*\n * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\"). You may not use this file except in compliance with\n * the License. A copy of the License is located at\n *\n *     http://aws.amazon.com/apache2.0/\n *\n * or in the \"license\" file accompanying this file. This file is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions\n * and limitations under the License.\n */\n\n\n\nvar I18n_logger = new ConsoleLogger/* ConsoleLogger */.k('I18n');\nvar _config = null;\nvar _i18n = null;\n/**\n * Export I18n APIs\n */\nvar I18n = /** @class */ (function () {\n    function I18n() {\n    }\n    /**\n     * @static\n     * @method\n     * Configure I18n part\n     * @param {Object} config - Configuration of the I18n\n     */\n    I18n.configure = function (config) {\n        I18n_logger.debug('configure I18n');\n        if (!config) {\n            return _config;\n        }\n        _config = Object.assign({}, _config, config.I18n || config);\n        I18n.createInstance();\n        return _config;\n    };\n    I18n.getModuleName = function () {\n        return 'I18n';\n    };\n    /**\n     * @static\n     * @method\n     * Create an instance of I18n for the library\n     */\n    I18n.createInstance = function () {\n        I18n_logger.debug('create I18n instance');\n        if (_i18n) {\n            return;\n        }\n        _i18n = new I18n_I18n(_config);\n    };\n    /**\n     * @static @method\n     * Explicitly setting language\n     * @param {String} lang\n     */\n    I18n.setLanguage = function (lang) {\n        I18n.checkConfig();\n        return _i18n.setLanguage(lang);\n    };\n    /**\n     * @static @method\n     * Get value\n     * @param {String} key\n     * @param {String} defVal - Default value\n     */\n    I18n.get = function (key, defVal) {\n        if (!I18n.checkConfig()) {\n            return typeof defVal === 'undefined' ? key : defVal;\n        }\n        return _i18n.get(key, defVal);\n    };\n    /**\n     * @static\n     * @method\n     * Add vocabularies for one language\n     * @param {String} langurage - Language of the dictionary\n     * @param {Object} vocabularies - Object that has key-value as dictionary entry\n     */\n    I18n.putVocabulariesForLanguage = function (language, vocabularies) {\n        I18n.checkConfig();\n        return _i18n.putVocabulariesForLanguage(language, vocabularies);\n    };\n    /**\n     * @static\n     * @method\n     * Add vocabularies for one language\n     * @param {Object} vocabularies - Object that has language as key,\n     *                                vocabularies of each language as value\n     */\n    I18n.putVocabularies = function (vocabularies) {\n        I18n.checkConfig();\n        return _i18n.putVocabularies(vocabularies);\n    };\n    I18n.checkConfig = function () {\n        if (!_i18n) {\n            _i18n = new I18n_I18n(_config);\n        }\n        return true;\n    };\n    return I18n;\n}());\n\nAmplify/* Amplify.register */.dQ.register(I18n);\n/**\n * @deprecated use named import\n */\n/* harmony default export */ const lib_esm_I18n = ((/* unused pure expression or super */ null && (I18n)));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/core/lib-esm/I18n/index.js_+_1_modules?")},78472:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "T": () => (/* binding */ Translations)\n/* harmony export */ });\n/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27723);\n\nvar AuthStrings;\n(function (AuthStrings) {\n    AuthStrings["BACK_TO_SIGN_IN"] = "Back to Sign In";\n    AuthStrings["CHANGE_PASSWORD_ACTION"] = "Change";\n    AuthStrings["CHANGE_PASSWORD"] = "Change Password";\n    AuthStrings["CODE_LABEL"] = "Verification code";\n    AuthStrings["CODE_PLACEHOLDER"] = "Enter code";\n    AuthStrings["CONFIRM_SIGN_UP_CODE_LABEL"] = "Confirmation Code";\n    AuthStrings["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"] = "Enter your code";\n    AuthStrings["CONFIRM_SIGN_UP_HEADER_TEXT"] = "Confirm Sign up";\n    AuthStrings["CONFIRM_SIGN_UP_LOST_CODE"] = "Lost your code?";\n    AuthStrings["CONFIRM_SIGN_UP_RESEND_CODE"] = "Resend Code";\n    AuthStrings["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"] = "Confirm";\n    AuthStrings["CONFIRM_SMS_CODE"] = "Confirm SMS Code";\n    AuthStrings["CONFIRM_TOTP_CODE"] = "Confirm TOTP Code";\n    AuthStrings["CONFIRM"] = "Confirm";\n    AuthStrings["CREATE_ACCOUNT_TEXT"] = "Create account";\n    AuthStrings["EMAIL_LABEL"] = "Email Address *";\n    AuthStrings["EMAIL_PLACEHOLDER"] = "Enter your email address";\n    AuthStrings["FORGOT_PASSWORD_TEXT"] = "Forgot your password?";\n    AuthStrings["LESS_THAN_TWO_MFA_VALUES_MESSAGE"] = "Less than two MFA types available";\n    AuthStrings["NEW_PASSWORD_LABEL"] = "New password";\n    AuthStrings["NEW_PASSWORD_PLACEHOLDER"] = "Enter your new password";\n    AuthStrings["NO_ACCOUNT_TEXT"] = "No account?";\n    AuthStrings["USERNAME_REMOVE_WHITESPACE"] = "Username cannot contain whitespace";\n    AuthStrings["PASSWORD_REMOVE_WHITESPACE"] = "Password cannot start or end with whitespace";\n    AuthStrings["PASSWORD_LABEL"] = "Password *";\n    AuthStrings["PASSWORD_PLACEHOLDER"] = "Enter your password";\n    AuthStrings["PHONE_LABEL"] = "Phone Number *";\n    AuthStrings["PHONE_PLACEHOLDER"] = "(555) 555-1212";\n    AuthStrings["QR_CODE_ALT"] = "qrcode";\n    AuthStrings["RESET_PASSWORD_TEXT"] = "Reset password";\n    AuthStrings["RESET_YOUR_PASSWORD"] = "Reset your password";\n    AuthStrings["SELECT_MFA_TYPE_HEADER_TEXT"] = "Select MFA Type";\n    AuthStrings["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"] = "Verify";\n    AuthStrings["SEND_CODE"] = "Send Code";\n    AuthStrings["SUBMIT"] = "Submit";\n    AuthStrings["SETUP_TOTP_REQUIRED"] = "TOTP needs to be configured";\n    AuthStrings["SIGN_IN_ACTION"] = "Sign In";\n    AuthStrings["SIGN_IN_HEADER_TEXT"] = "Sign in to your account";\n    AuthStrings["SIGN_IN_TEXT"] = "Sign in";\n    AuthStrings["SIGN_IN_WITH_AMAZON"] = "Sign in with Amazon";\n    AuthStrings["SIGN_IN_WITH_AUTH0"] = "Sign in with Auth0";\n    AuthStrings["SIGN_IN_WITH_AWS"] = "Sign in with AWS";\n    AuthStrings["SIGN_IN_WITH_FACEBOOK"] = "Sign in with Facebook";\n    AuthStrings["SIGN_IN_WITH_GOOGLE"] = "Sign in with Google";\n    AuthStrings["SIGN_OUT"] = "Sign Out";\n    AuthStrings["SIGN_UP_EMAIL_PLACEHOLDER"] = "Email";\n    AuthStrings["SIGN_UP_HAVE_ACCOUNT_TEXT"] = "Have an account?";\n    AuthStrings["SIGN_UP_HEADER_TEXT"] = "Create a new account";\n    AuthStrings["SIGN_UP_PASSWORD_PLACEHOLDER"] = "Password";\n    AuthStrings["SIGN_UP_SUBMIT_BUTTON_TEXT"] = "Create Account";\n    AuthStrings["SIGN_UP_USERNAME_PLACEHOLDER"] = "Username";\n    AuthStrings["SUCCESS_MFA_TYPE"] = "Success! Your MFA Type is now:";\n    AuthStrings["TOTP_HEADER_TEXT"] = "Scan then enter verification code";\n    AuthStrings["TOTP_LABEL"] = "Enter Security Code:";\n    AuthStrings["TOTP_ISSUER"] = "AWSCognito";\n    AuthStrings["TOTP_SETUP_FAILURE"] = "TOTP Setup has failed";\n    AuthStrings["TOTP_SUBMIT_BUTTON_TEXT"] = "Verify Security Token";\n    AuthStrings["TOTP_SUCCESS_MESSAGE"] = "Setup TOTP successfully!";\n    AuthStrings["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"] = "Failed! Unable to configure MFA at this time";\n    AuthStrings["USERNAME_LABEL"] = "Username *";\n    AuthStrings["USERNAME_PLACEHOLDER"] = "Enter your username";\n    AuthStrings["VERIFY_CONTACT_EMAIL_LABEL"] = "Email";\n    AuthStrings["VERIFY_CONTACT_HEADER_TEXT"] = "Account recovery requires verified contact information";\n    AuthStrings["VERIFY_CONTACT_PHONE_LABEL"] = "Phone Number";\n    AuthStrings["VERIFY_CONTACT_SUBMIT_LABEL"] = "Submit";\n    AuthStrings["VERIFY_CONTACT_VERIFY_LABEL"] = "Verify";\n    AuthStrings["ADDRESS_LABEL"] = "Address";\n    AuthStrings["ADDRESS_PLACEHOLDER"] = "Enter your address";\n    AuthStrings["NICKNAME_LABEL"] = "Nickname";\n    AuthStrings["NICKNAME_PLACEHOLDER"] = "Enter your nickname";\n    AuthStrings["BIRTHDATE_LABEL"] = "Birthday";\n    AuthStrings["BIRTHDATE_PLACEHOLDER"] = "Enter your birthday";\n    AuthStrings["PICTURE_LABEL"] = "Picture URL";\n    AuthStrings["PICTURE_PLACEHOLDER"] = "Enter your picture URL";\n    AuthStrings["FAMILY_NAME_LABEL"] = "Family Name";\n    AuthStrings["FAMILY_NAME_PLACEHOLDER"] = "Enter your family name";\n    AuthStrings["PREFERRED_USERNAME_LABEL"] = "Preferred Username";\n    AuthStrings["PREFERRED_USERNAME_PLACEHOLDER"] = "Enter your preferred username";\n    AuthStrings["GENDER_LABEL"] = "Gender";\n    AuthStrings["GENDER_PLACEHOLDER"] = "Enter your gender";\n    AuthStrings["PROFILE_LABEL"] = "Profile URL";\n    AuthStrings["PROFILE_PLACEHOLDER"] = "Enter your profile URL";\n    AuthStrings["GIVEN_NAME_LABEL"] = "First Name";\n    AuthStrings["GIVEN_NAME_PLACEHOLDER"] = "Enter your first name";\n    AuthStrings["ZONEINFO_LABEL"] = "Time zone";\n    AuthStrings["ZONEINFO_PLACEHOLDER"] = "Enter your time zone";\n    AuthStrings["LOCALE_LABEL"] = "Locale";\n    AuthStrings["LOCALE_PLACEHOLDER"] = "Enter your locale";\n    AuthStrings["UPDATED_AT_LABEL"] = "Updated At";\n    AuthStrings["UPDATED_AT_PLACEHOLDER"] = "Enter the time the information was last updated";\n    AuthStrings["MIDDLE_NAME_LABEL"] = "Middle Name";\n    AuthStrings["MIDDLE_NAME_PLACEHOLDER"] = "Enter your middle name";\n    AuthStrings["WEBSITE_LABEL"] = "Website";\n    AuthStrings["WEBSITE_PLACEHOLDER"] = "Enter your website";\n    AuthStrings["NAME_LABEL"] = "Full Name";\n    AuthStrings["NAME_PLACEHOLDER"] = "Enter your full name";\n    AuthStrings["PHOTO_PICKER_TITLE"] = "Picker Title";\n    AuthStrings["PHOTO_PICKER_HINT"] = "Ancillary text or content may occupy this space here";\n    AuthStrings["PHOTO_PICKER_PLACEHOLDER_HINT"] = "Placeholder hint";\n    AuthStrings["PHOTO_PICKER_BUTTON_TEXT"] = "Button";\n    AuthStrings["IMAGE_PICKER_TITLE"] = "Add Profile Photo";\n    AuthStrings["IMAGE_PICKER_HINT"] = "Preview the image before upload";\n    AuthStrings["IMAGE_PICKER_PLACEHOLDER_HINT"] = "Tap to image select";\n    AuthStrings["IMAGE_PICKER_BUTTON_TEXT"] = "Upload";\n    AuthStrings["PICKER_TEXT"] = "Pick a file";\n    AuthStrings["TEXT_FALLBACK_CONTENT"] = "Fallback Content";\n    AuthStrings["CONFIRM_SIGN_UP_FAILED"] = "Confirm Sign Up Failed";\n    AuthStrings["SIGN_UP_FAILED"] = "Sign Up Failed";\n})(AuthStrings || (AuthStrings = {}));\nvar InteractionsStrings;\n(function (InteractionsStrings) {\n    InteractionsStrings["CHATBOT_TITLE"] = "ChatBot Lex";\n    InteractionsStrings["TEXT_INPUT_PLACEHOLDER"] = "Write a message";\n    InteractionsStrings["VOICE_INPUT_PLACEHOLDER"] = "Click mic to speak";\n    InteractionsStrings["CHAT_DISABLED_ERROR"] = "Error: Either voice or text must be enabled for the chatbot";\n    InteractionsStrings["NO_BOT_NAME_ERROR"] = "Error: Bot name must be provided to ChatBot";\n})(InteractionsStrings || (InteractionsStrings = {}));\nvar Translations = Object.assign(Object.assign(Object.assign({}, AuthStrings), _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_0__/* .AuthErrorStrings */ .A), InteractionsStrings);\n\n\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js?')},70935:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "amplify_select_mfa_type": () => (/* binding */ AmplifySelectMFAType)\n/* harmony export */ });\n/* harmony import */ var _index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26293);\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24397);\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35160);\n/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26908);\n/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15548);\n/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78472);\n/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10396);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError("Generator is already executing.");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\nvar logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__/* .ConsoleLogger */ .k(\'SelectMFAType\');\nvar AmplifySelectMFAType = /** @class */ (function () {\n    function class_1(hostRef) {\n        var _this = this;\n        (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);\n        /** Fires when Verify is clicked */\n        this.handleSubmit = function (event) { return _this.verify(event); };\n        this.TOTPSetup = false;\n        this.selectMessage = null;\n        this.MFAMethod = null;\n        this.isTOTP = false;\n        this.isNoMFA = false;\n        this.isSMS = false;\n        this.loading = false;\n    }\n    class_1.prototype.handleRadioButtonChange = function (event) {\n        this.TOTPSetup = false;\n        this.selectMessage = null;\n        // Reseting state values to default\n        this.isNoMFA = false;\n        this.isTOTP = false;\n        this.isSMS = false;\n        var _a = event.target, value = _a.value, type = _a.type, checked = _a.checked;\n        var checkType = [\'radio\', \'checkbox\'].includes(type);\n        if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__.M.SMS && checkType) {\n            this.isSMS = checked;\n        }\n        if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__.M.TOTP && checkType) {\n            this.isTOTP = checked;\n        }\n        if (value === _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__.M.NOMFA && checkType) {\n            this.isNoMFA = checked;\n        }\n    };\n    class_1.prototype.verify = function (event) {\n        return __awaiter(this, void 0, void 0, function () {\n            var user, preferredMFAData, error_1, message;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        // avoid submitting the form\n                        if (event) {\n                            event.preventDefault();\n                        }\n                        logger.debug(\'MFA Type Values\', {\n                            TOTP: this.isTOTP,\n                            SMS: this.isSMS,\n                            \'No MFA\': this.isNoMFA,\n                        });\n                        if (this.isTOTP) {\n                            this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__.M.TOTP;\n                        }\n                        else if (this.isSMS) {\n                            this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__.M.SMS;\n                        }\n                        else if (this.isNoMFA) {\n                            this.MFAMethod = _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_1__.M.NOMFA;\n                        }\n                        user = this.authData;\n                        if (!_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__/* .Auth */ .g || typeof _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__/* .Auth.setPreferredMFA */ .g.setPreferredMFA !== \'function\') {\n                            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__.N);\n                        }\n                        this.loading = true;\n                        _a.label = 1;\n                    case 1:\n                        _a.trys.push([1, 3, 4, 5]);\n                        return [4 /*yield*/, _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__/* .Auth.setPreferredMFA */ .g.setPreferredMFA(user, this.MFAMethod)];\n                    case 2:\n                        preferredMFAData = _a.sent();\n                        logger.debug(\'Set Preferred MFA Succeeded\', preferredMFAData);\n                        this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .I18n.get */ .o.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__.T.SUCCESS_MFA_TYPE) + " " + this.MFAMethod;\n                        return [3 /*break*/, 5];\n                    case 3:\n                        error_1 = _a.sent();\n                        message = error_1.message;\n                        if (message === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__.f ||\n                            message === _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__.g) {\n                            this.TOTPSetup = true;\n                            this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .I18n.get */ .o.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__.T.SETUP_TOTP_REQUIRED);\n                            // \tTODO Add Toast = showToast: true,\n                        }\n                        else {\n                            logger.debug(\'Set Preferred MFA failed\', error_1);\n                            this.selectMessage = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .I18n.get */ .o.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__.T.UNABLE_TO_SETUP_MFA_AT_THIS_TIME);\n                            // \tTODO Add Toast = showToast: true,\n                        }\n                        return [3 /*break*/, 5];\n                    case 4:\n                        this.loading = false;\n                        return [7 /*endfinally*/];\n                    case 5: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    class_1.prototype.contentBuilder = function () {\n        var _this = this;\n        if (!this.MFATypes || Object.keys(this.MFATypes).length < 2) {\n            logger.debug(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .I18n.get */ .o.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE));\n            return ((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("a", null, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .I18n.get */ .o.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__.T.LESS_THAN_TWO_MFA_VALUES_MESSAGE))));\n        }\n        var _a = this.MFATypes, SMS = _a.SMS, TOTP = _a.TOTP, Optional = _a.Optional;\n        return (\n        // TODO: Add Toast messages\n        (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("amplify-form-section", { submitButtonText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .I18n.get */ .o.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__.T.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT), headerText: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_6__/* .I18n.get */ .o.get(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_2__.T.SELECT_MFA_TYPE_HEADER_TEXT), handleSubmit: function (event) { return _this.handleSubmit(event); }, loading: this.loading }, SMS ? ((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("amplify-radio-button", { key: "sms", name: "MFAType", value: "SMS", label: "SMS", handleInputChange: function (event) { return _this.handleRadioButtonChange(event); } })) : null, TOTP ? ((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("amplify-radio-button", { key: "totp", name: "MFAType", value: "TOTP", label: "TOTP", handleInputChange: function (event) { return _this.handleRadioButtonChange(event); } })) : null, Optional ? ((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("amplify-radio-button", { key: "noMFA", name: "MFAType", value: "NOMFA", label: "No MFA", handleInputChange: function (event) { return _this.handleRadioButtonChange(event); } })) : null));\n    };\n    class_1.prototype.render = function () {\n        return ((0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, this.contentBuilder(), this.TOTPSetup ? (0,_index_83f2275b_js__WEBPACK_IMPORTED_MODULE_0__.h)("amplify-totp-setup", { user: this.authData }) : null));\n    };\n    return class_1;\n}());\n\n\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-select-mfa-type.entry.js?')},26908:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "A": () => (/* binding */ AuthState),\n/* harmony export */   "C": () => (/* binding */ ChallengeName),\n/* harmony export */   "M": () => (/* binding */ MfaOption),\n/* harmony export */   "U": () => (/* binding */ UsernameAlias),\n/* harmony export */   "a": () => (/* binding */ AuthFormField)\n/* harmony export */ });\n// TODO: Move these values to or extract them from the Cognito Provider in the Auth category for Auth V2\nvar AuthState;\n(function (AuthState) {\n    AuthState["SignUp"] = "signup";\n    AuthState["SignOut"] = "signout";\n    AuthState["SignIn"] = "signin";\n    AuthState["Loading"] = "loading";\n    AuthState["SignedOut"] = "signedout";\n    AuthState["SignedIn"] = "signedin";\n    AuthState["SigningUp"] = "signingup";\n    AuthState["ConfirmSignUp"] = "confirmSignUp";\n    AuthState["confirmingSignUpCustomFlow"] = "confirmsignupcustomflow";\n    AuthState["ConfirmSignIn"] = "confirmSignIn";\n    AuthState["confirmingSignInCustomFlow"] = "confirmingsignincustomflow";\n    AuthState["VerifyingAttributes"] = "verifyingattributes";\n    AuthState["ForgotPassword"] = "forgotpassword";\n    AuthState["ResetPassword"] = "resettingpassword";\n    AuthState["SettingMFA"] = "settingMFA";\n    AuthState["TOTPSetup"] = "TOTPSetup";\n    AuthState["CustomConfirmSignIn"] = "customConfirmSignIn";\n    AuthState["VerifyContact"] = "verifyContact";\n})(AuthState || (AuthState = {}));\nvar MfaOption;\n(function (MfaOption) {\n    MfaOption["TOTP"] = "TOTP";\n    MfaOption["SMS"] = "SMS";\n    MfaOption["NOMFA"] = "NOMFA";\n})(MfaOption || (MfaOption = {}));\nvar ChallengeName;\n(function (ChallengeName) {\n    ChallengeName["SoftwareTokenMFA"] = "SOFTWARE_TOKEN_MFA";\n    ChallengeName["SMSMFA"] = "SMS_MFA";\n    ChallengeName["NewPasswordRequired"] = "NEW_PASSWORD_REQUIRED";\n    ChallengeName["MFASetup"] = "MFA_SETUP";\n    ChallengeName["CustomChallenge"] = "CUSTOM_CHALLENGE";\n})(ChallengeName || (ChallengeName = {}));\nvar AuthFormField;\n(function (AuthFormField) {\n    AuthFormField["Password"] = "password";\n})(AuthFormField || (AuthFormField = {}));\nvar UsernameAlias;\n(function (UsernameAlias) {\n    UsernameAlias["username"] = "username";\n    UsernameAlias["email"] = "email";\n    UsernameAlias["phone_number"] = "phone_number";\n})(UsernameAlias || (UsernameAlias = {}));\n\n\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js?')},10396:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"A\": () => (/* binding */ AUTH_CHANNEL),\n/* harmony export */   \"C\": () => (/* binding */ COUNTRY_DIAL_CODE_SUFFIX),\n/* harmony export */   \"E\": () => (/* binding */ EMAIL_SUFFIX),\n/* harmony export */   \"N\": () => (/* binding */ NO_AUTH_MODULE_FOUND),\n/* harmony export */   \"P\": () => (/* binding */ PHONE_EMPTY_ERROR_MESSAGE),\n/* harmony export */   \"R\": () => (/* binding */ REDIRECTED_FROM_HOSTED_UI),\n/* harmony export */   \"S\": () => (/* binding */ SETUP_TOTP),\n/* harmony export */   \"T\": () => (/* binding */ TOAST_AUTH_ERROR_EVENT),\n/* harmony export */   \"U\": () => (/* binding */ UI_AUTH_CHANNEL),\n/* harmony export */   \"a\": () => (/* binding */ AUTH_STATE_CHANGE_EVENT),\n/* harmony export */   \"b\": () => (/* binding */ PHONE_SUFFIX),\n/* harmony export */   \"c\": () => (/* binding */ AUTHENTICATOR_AUTHSTATE),\n/* harmony export */   \"d\": () => (/* binding */ NO_INTERACTIONS_MODULE_FOUND),\n/* harmony export */   \"e\": () => (/* binding */ NO_STORAGE_MODULE_FOUND),\n/* harmony export */   \"f\": () => (/* binding */ USER_NOT_SETUP_SOFTWARE_TOKEN_MFA),\n/* harmony export */   \"g\": () => (/* binding */ USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA),\n/* harmony export */   \"h\": () => (/* binding */ COUNTRY_DIAL_CODE_DEFAULT),\n/* harmony export */   \"i\": () => (/* binding */ SUCCESS),\n/* harmony export */   \"j\": () => (/* binding */ AUTH_SOURCE_KEY),\n/* harmony export */   \"k\": () => (/* binding */ CODE_SUFFIX),\n/* harmony export */   \"l\": () => (/* binding */ PASSWORD_SUFFIX),\n/* harmony export */   \"m\": () => (/* binding */ USERNAME_SUFFIX)\n/* harmony export */ });\n// Dictionaries\n// fieldId constants\nvar USERNAME_SUFFIX = 'username';\nvar EMAIL_SUFFIX = 'email';\nvar CODE_SUFFIX = 'code';\nvar PHONE_SUFFIX = 'phone';\nvar PASSWORD_SUFFIX = 'password';\n// Country Dial Code common constants\nvar COUNTRY_DIAL_CODE_SUFFIX = 'country-dial-code-select';\nvar COUNTRY_DIAL_CODE_DEFAULT = '+1';\n// Auth Keys\nvar AUTH_SOURCE_KEY = 'amplify-auth-source';\nvar REDIRECTED_FROM_HOSTED_UI = 'amplify-redirected-from-hosted-ui';\nvar AUTHENTICATOR_AUTHSTATE = 'amplify-authenticator-authState';\n// Error message Common Constants\nvar PHONE_EMPTY_ERROR_MESSAGE = 'Phone number can not be empty';\nvar NO_AUTH_MODULE_FOUND = 'No Auth module found, please ensure @aws-amplify/auth is imported';\nvar NO_STORAGE_MODULE_FOUND = 'No Storage module found, please ensure @aws-amplify/storage is imported';\nvar NO_INTERACTIONS_MODULE_FOUND = 'No Interactions module found, please ensure @aws-amplify/interactions is imported';\n// TOTP Messages\nvar SETUP_TOTP = 'SETUP_TOTP';\n// Select MFA Types Messages\nvar USER_NOT_SETUP_SOFTWARE_TOKEN_MFA = 'User has not set up software token mfa';\nvar USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA = 'User has not verified software token mfa';\n// Common events\nvar SUCCESS = 'SUCCESS';\n// Hub Events and Channels\nvar AUTH_CHANNEL = 'auth';\nvar UI_AUTH_CHANNEL = 'UI Auth';\nvar TOAST_AUTH_ERROR_EVENT = 'ToastAuthError';\nvar AUTH_STATE_CHANGE_EVENT = 'AuthStateChange';\n\n\n\n//# sourceURL=webpack:///../node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js?")}}]);