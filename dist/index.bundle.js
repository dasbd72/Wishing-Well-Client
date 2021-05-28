(()=>{"use strict";var __webpack_modules__={4842:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// EXTERNAL MODULE: ../node_modules/@babel/polyfill/lib/index.js\nvar lib = __webpack_require__(1202);\n// EXTERNAL MODULE: ../node_modules/react/index.js\nvar react = __webpack_require__(7378);\n// EXTERNAL MODULE: ../node_modules/react-dom/index.js\nvar react_dom = __webpack_require__(1542);\n// EXTERNAL MODULE: ../node_modules/prop-types/index.js\nvar prop_types = __webpack_require__(3615);\nvar prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);\n;// CONCATENATED MODULE: ./utilities/utility.js\nvar imgDistPath = \'img\';\nfunction getImgPath(img) {\n  var ret = \'\';\n\n  switch (img) {\n    case \'wishing-well-logo\':\n      ret = imgDistPath + \'/logo.jpeg\';\n      break;\n  }\n\n  console.log(\'Getting Image: \' + ret);\n  return ret;\n}\n// EXTERNAL MODULE: ../node_modules/reactstrap/es/Form.js\nvar Form = __webpack_require__(1807);\n// EXTERNAL MODULE: ../node_modules/reactstrap/es/Button.js\nvar Button = __webpack_require__(743);\n;// CONCATENATED MODULE: ./components/LoginForm.jsx\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar _default = /*#__PURE__*/function (_React$Component) {\n  _inherits(_default, _React$Component);\n\n  var _super = _createSuper(_default);\n\n  function _default(props) {\n    var _this;\n\n    _classCallCheck(this, _default);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      email: "",\n      setEmail: "",\n      password: "",\n      setPassword: ""\n    };\n    return _this;\n  }\n\n  _createClass(_default, [{\n    key: "validateForm",\n    value: function validateForm() {\n      return email.length > 0 && password.length > 0;\n    }\n  }, {\n    key: "handleSubmit",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/react.createElement("div", {\n        className: "Login"\n      }, /*#__PURE__*/react.createElement(Form/* default */.Z, {\n        onSubmit: handleSubmit\n      }, /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {\n        size: "lg",\n        controlId: "email"\n      }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Email"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {\n        autoFocus: true,\n        type: "email",\n        value: email,\n        onChange: function onChange(e) {\n          return setEmail(e.target.value);\n        }\n      })), /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {\n        size: "lg",\n        controlId: "password"\n      }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Password"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {\n        type: "password",\n        value: password,\n        onChange: function onChange(e) {\n          return setPassword(e.target.value);\n        }\n      })), /*#__PURE__*/react.createElement(Button/* default */.Z, {\n        block: true,\n        size: "lg",\n        type: "submit",\n        disabled: !validateForm()\n      }, "Login")));\n    }\n  }]);\n\n  return _default;\n}(react.Component);\n\n_defineProperty(_default, "propTypes", {});\n\n\n;// CONCATENATED MODULE: ./components/AppEntrance.jsx\nfunction AppEntrance_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AppEntrance_typeof = function _typeof(obj) { return typeof obj; }; } else { AppEntrance_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AppEntrance_typeof(obj); }\n\nfunction AppEntrance_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction AppEntrance_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction AppEntrance_createClass(Constructor, protoProps, staticProps) { if (protoProps) AppEntrance_defineProperties(Constructor.prototype, protoProps); if (staticProps) AppEntrance_defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction AppEntrance_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AppEntrance_setPrototypeOf(subClass, superClass); }\n\nfunction AppEntrance_setPrototypeOf(o, p) { AppEntrance_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AppEntrance_setPrototypeOf(o, p); }\n\nfunction AppEntrance_createSuper(Derived) { var hasNativeReflectConstruct = AppEntrance_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = AppEntrance_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = AppEntrance_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return AppEntrance_possibleConstructorReturn(this, result); }; }\n\nfunction AppEntrance_possibleConstructorReturn(self, call) { if (call && (AppEntrance_typeof(call) === "object" || typeof call === "function")) { return call; } return AppEntrance_assertThisInitialized(self); }\n\nfunction AppEntrance_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction AppEntrance_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction AppEntrance_getPrototypeOf(o) { AppEntrance_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AppEntrance_getPrototypeOf(o); }\n\nfunction AppEntrance_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar AppEntrance = /*#__PURE__*/function (_React$Component) {\n  AppEntrance_inherits(AppEntrance, _React$Component);\n\n  var _super = AppEntrance_createSuper(AppEntrance);\n\n  function AppEntrance(props) {\n    var _this;\n\n    AppEntrance_classCallCheck(this, AppEntrance);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      page: \'login\'\n    };\n    return _this;\n  }\n\n  AppEntrance_createClass(AppEntrance, [{\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/react.createElement("div", {\n        className: "container"\n      }, /*#__PURE__*/react.createElement("div", {\n        className: "row"\n      }, /*#__PURE__*/react.createElement("div", {\n        className: "col"\n      }, /*#__PURE__*/react.createElement("img", {\n        src: getImgPath(\'wishing-well-logo\'),\n        alt: "logo"\n      })), /*#__PURE__*/react.createElement("div", {\n        className: "col"\n      }, /*#__PURE__*/react.createElement(_default, null))));\n    }\n  }]);\n\n  return AppEntrance;\n}(react.Component);\n\nAppEntrance_defineProperty(AppEntrance, "propTypes", {\n  language: (prop_types_default())\n});\n\n\n// EXTERNAL MODULE: ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\nvar injectStylesIntoStyleTag = __webpack_require__(1892);\nvar injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);\n// EXTERNAL MODULE: ../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./components/Main.css\nvar Main = __webpack_require__(8371);\n;// CONCATENATED MODULE: ./components/Main.css\n\n            \n\nvar options = {};\n\noptions.insert = "head";\noptions.singleton = false;\n\nvar update = injectStylesIntoStyleTag_default()(Main/* default */.Z, options);\n\n\n\n/* harmony default export */ const components_Main = (Main/* default.locals */.Z.locals || {});\n;// CONCATENATED MODULE: ./components/Main.jsx\nfunction Main_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Main_typeof = function _typeof(obj) { return typeof obj; }; } else { Main_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Main_typeof(obj); }\n\nfunction Main_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction Main_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction Main_createClass(Constructor, protoProps, staticProps) { if (protoProps) Main_defineProperties(Constructor.prototype, protoProps); if (staticProps) Main_defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction Main_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Main_setPrototypeOf(subClass, superClass); }\n\nfunction Main_setPrototypeOf(o, p) { Main_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Main_setPrototypeOf(o, p); }\n\nfunction Main_createSuper(Derived) { var hasNativeReflectConstruct = Main_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Main_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Main_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Main_possibleConstructorReturn(this, result); }; }\n\nfunction Main_possibleConstructorReturn(self, call) { if (call && (Main_typeof(call) === "object" || typeof call === "function")) { return call; } return Main_assertThisInitialized(self); }\n\nfunction Main_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction Main_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction Main_getPrototypeOf(o) { Main_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Main_getPrototypeOf(o); }\n\nfunction Main_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar Main_Main = /*#__PURE__*/function (_React$Component) {\n  Main_inherits(Main, _React$Component);\n\n  var _super = Main_createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    Main_classCallCheck(this, Main);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      hasLoggedIn: false,\n      language: "en"\n    };\n    return _this;\n  }\n\n  Main_createClass(Main, [{\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/react.createElement("div", {\n        className: "container"\n      }, /*#__PURE__*/react.createElement(AppEntrance, null));\n    }\n  }]);\n\n  return Main;\n}(react.Component);\n\nMain_defineProperty(Main_Main, "propTypes", {});\n\n\n// EXTERNAL MODULE: ../node_modules/bootstrap/dist/css/bootstrap.min.css\nvar bootstrap_min = __webpack_require__(2118);\n;// CONCATENATED MODULE: ./index.jsx\n\n\n\n\n\n\nwindow.onload = function () {\n  react_dom.render( /*#__PURE__*/react.createElement(Main_Main, null), document.getElementById(\'root\'));\n};\n\n//# sourceURL=webpack:///./index.jsx_+_5_modules?')},8371:(module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3476);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./components/Main.css?../node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D')}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,t,n,r)=>{if(!t){var o=1/0;for(_=0;_<deferred.length;_++){for(var[t,n,r]=deferred[_],a=!0,s=0;s<t.length;s++)(!1&r||o>=r)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[s])))?t.splice(s--,1):(a=!1,r<o&&(o=r));a&&(deferred.splice(_--,1),e=n())}return e}r=r||0;for(var _=deferred.length;_>0&&deferred[_-1][2]>r;_--)deferred[_]=deferred[_-1];deferred[_]=[t,n,r]},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0};__webpack_require__.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[a,s,_]=n,i=0;for(r in s)__webpack_require__.o(s,r)&&(__webpack_require__.m[r]=s[r]);if(_)var p=_(__webpack_require__);for(t&&t(n);i<a.length;i++)o=a[i],__webpack_require__.o(e,o)&&e[o]&&e[o][0](),e[a[i]]=0;return __webpack_require__.O(p)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var __webpack_exports__=__webpack_require__.O(void 0,[486],(()=>__webpack_require__(4842)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();