/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkyd_react_generator"] = self["webpackChunkyd_react_generator"] || []).push([["demo"],{

/***/ "./src/web/components/demo/Footer.tsx":
/*!********************************************!*\
  !*** ./src/web/components/demo/Footer.tsx ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _tools_useRootData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tools/useRootData */ \"./src/web/tools/useRootData.ts\");\n\n\n\nvar Footer = () => {\n  console.log('Footer重新渲染');\n  var {\n    remaining,\n    total\n  } = (0,_tools_useRootData__WEBPACK_IMPORTED_MODULE_1__.useRootData)(store => ({\n    remaining: store.demo.remainingTodos,\n    total: store.demo.todos.length\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, remaining.toString(), \" / \", total.toString(), \" left\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://yd-react-generator/./src/web/components/demo/Footer.tsx?");

/***/ }),

/***/ "./src/web/components/demo/TodoList.tsx":
/*!**********************************************!*\
  !*** ./src/web/components/demo/TodoList.tsx ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _tools_useRootData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tools/useRootData */ \"./src/web/tools/useRootData.ts\");\n/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ \"./node_modules/mobx-react-lite/es/index.js\");\n\n\n\nvar TodoList = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__.observer)(() => {\n  console.log('TodoList重新渲染');\n  var todos = (0,_tools_useRootData__WEBPACK_IMPORTED_MODULE_1__.useRootData)(store => store.demo.todos);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    style: {\n      listStyle: 'none'\n    }\n  }, todos && todos.map(t => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    onClick: t.toggleTodo,\n    style: {\n      margin: 10,\n      opacity: t.completed ? 0.5 : 1,\n      cursor: 'pointer',\n      textDecoration: t.completed ? 'line-through' : 'none'\n    },\n    key: t.id\n  }, t.text)));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n//# sourceURL=webpack://yd-react-generator/./src/web/components/demo/TodoList.tsx?");

/***/ }),

/***/ "./src/web/components/demo/index.tsx":
/*!*******************************************!*\
  !*** ./src/web/components/demo/index.tsx ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList */ \"./src/web/components/demo/TodoList.tsx\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/web/components/demo/Footer.tsx\");\n/* harmony import */ var _tools_useRootData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tools/useRootData */ \"./src/web/tools/useRootData.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\n\n\n\n\n\n\nvar DisplayRemoteData = () => {\n  var {\n    isLoading,\n    error,\n    data\n  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)('repoData', () => fetch('http://localhost:8081/api/list').then(res => res.json()));\n  if (isLoading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Loading...\");\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"\\uD83D\\uDE22\");\n  console.log('🐻', data);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"\\uD83D\\uDC40\\u2728\", data.item));\n};\n\nvar Demo = routerProps => {\n  console.log('重新渲染');\n  console.log('传参', routerProps.match.params.id);\n  var id = (0,_tools_useRootData__WEBPACK_IMPORTED_MODULE_3__.useRootData)(store => store.demo.id);\n  var setid = (0,_tools_useRootData__WEBPACK_IMPORTED_MODULE_3__.useRootData)(store => store.demo.setid);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"components-demo \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisplayRemoteData, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"button\",\n    value: \"\\u6D4B\\u8BD5\\u5F02\\u6B65\\u8BF7\\u6C42\",\n    onClick: () => setid(Math.random())\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demo);\n\n//# sourceURL=webpack://yd-react-generator/./src/web/components/demo/index.tsx?");

/***/ })

}]);