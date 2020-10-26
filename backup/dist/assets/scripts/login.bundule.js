/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkyd_react_generator"] = self["webpackChunkyd_react_generator"] || []).push([["login"],{

/***/ "./src/web/components/Login/index.tsx":
/*!********************************************!*\
  !*** ./src/web/components/Login/index.tsx ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web_tools_useRootData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web/tools/useRootData */ \"./src/web/tools/useRootData.ts\");\n\n // const { useContext } = React;\n// import { DatePicker } from \"antd\";\n\n\n\n\nvar Login = routerProps => {\n  console.log(routerProps); // const { location, history } = routerProps;\n  // let token = useRootData((store: IRootStoreModel) => store.home.token);\n  // let str = useRootData((store: IRootStoreModel) => store.home.str);\n  // const { token, str, setStr } = useRootData((store: RootStoreType) => ({\n  //   token: store.home.token,\n  //   str: store.home.str,\n  //   setStr: store.home.setStr,\n  // }));\n\n  var {\n    token,\n    str,\n    setStr\n  } = (0,web_tools_useRootData__WEBPACK_IMPORTED_MODULE_2__.useRootData)(store => ({\n    token: store.home.token,\n    str: store.home.str,\n    setStr: store.home.setStr\n  })); // const store = useYdStore((store: TStore) => store);\n  // console.log(\"跳转信息\",state.location.state.from.pathname);\n  // const RedirectUrl = location.state ? location.state.from.pathname : '/';\n  // console.log('跳转', RedirectUrl);\n\n  var RedirectUrl = '/'; // 登陆成功之后的跳转\n\n  var loginIn = () => {\n    console.log('函数生效'); // store.str = '🏮' + Math.random();\n\n    setStr(); // console.log('状态', store);\n\n    localStorage['token'] = Math.random().toString(); // history.push(RedirectUrl);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"components-login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, token), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"\\u52A8\\u6001\\u6570\\u636E \", str), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n    to: \"/\"\n  }, \"\\u9996\\u9875xxx\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.NavLink, {\n    to: \"/demos/123\"\n  }, \"\\u6D4B\\u8BD5\\u9875\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"button\",\n    value: \"\\u767B\\u5F55\\u7CFB\\u7EDF\\u9996\\u9875\",\n    onClick: loginIn\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://yd-react-generator/./src/web/components/Login/index.tsx?");

/***/ })

}]);