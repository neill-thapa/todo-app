/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nh2 {\n    margin: 0;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    gap: 1rem;\n}\n\n#todos-list {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    gap: 1rem;\n}\n\n#todos-list div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 0.8rem;\n\n    border-radius: 0.5rem;\n    border: 1px solid black;\n}\n\n.todo-title {\n    margin-bottom: 1rem;\n\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n#projects-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n#projects-list div {\n    display: flex;\n    justify-content: space-between;\n    padding: 0.6rem;\n\n    border-radius: 0.5rem;\n    border: 1px solid black;\n    background-color: rgb(228, 228, 228);\n\n    cursor: pointer;\n}\n\n.sidebar,\n.main {\n    border-radius: 1rem;\n    border: 1px solid black;\n    padding: 1rem 1.5rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.sidebar > button,\n.main > button {\n    padding: 0.3rem 0;\n    border-radius: 0.5rem;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/createProject.js"
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ \"./src/createTodo.js\");\n\n\nfunction createProject(name, description) {\n\n    const todos = []\n\n    function addTodo(title, description, dueDate, priority) {\n        const todo = (0,_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title, description, dueDate, priority)\n        todos.push(todo)\n    }\n\n    function getTodos() {\n        return todos\n    }\n\n    function removeTodo(index) {\n        todos.splice(index, 1)\n    }\n\n    function removeAllTodos() {\n        todos.splice(0)\n    }\n\n    return {\n        name,\n        description,\n        addTodo,\n        getTodos,\n        removeTodo,\n        removeAllTodos\n    }\n}\n\n//# sourceURL=webpack://todo-app/./src/createProject.js?\n}");

/***/ },

/***/ "./src/createTodo.js"
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(title, description, dueDate, priority) {\n\n    let completeStatus = false\n    \n    function toggleCompleteStatus() {\n        completeStatus = !completeStatus\n    }\n\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        getCompleteStatus: () => completeStatus,\n        toggleCompleteStatus\n    }\n}\n\n//# sourceURL=webpack://todo-app/./src/createTodo.js?\n}");

/***/ },

/***/ "./src/displayController.js"
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DisplayController: () => (/* binding */ DisplayController)\n/* harmony export */ });\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\n\n\n\nconst DisplayController = (function() {\n\n    const title = document.querySelector(\"#project-title\")\n    const todosList = document.querySelector(\"#todos-list\")\n    const projectsList = document.querySelector(\"#projects-list\")\n    \n    function renderProject(project, onToggleClick, onDeleteTodo) {\n        const title = document.querySelector(\"#project-title\")\n        const todosList = document.querySelector(\"#todos-list\")\n\n        title.textContent = project.name\n        todosList.innerHTML = \"\"\n\n        project.getTodos().forEach(todo => {\n            const div = document.createElement(\"div\")\n            const titleEl = document.createElement(\"span\")\n            titleEl.classList.add(\"todo-title\")\n            titleEl.textContent = todo.title\n\n            const descriptionEl = document.createElement(\"span\")\n            descriptionEl.textContent = \"Description: \" + todo.description\n\n            const dueDateEl = document.createElement(\"span\")\n            dueDateEl.textContent = \"Deadline: \" + todo.dueDate\n\n            const priorityEl = document.createElement(\"span\")\n            priorityEl.textContent = \"Priority: \" + todo.priority \n\n            const statusEl = document.createElement(\"span\")\n            statusEl.textContent = todo.getCompleteStatus() ? \"✓ Complete\" : \"○ Incomplete\"\n\n            const toggleBtn = document.createElement(\"button\")\n            toggleBtn.textContent = \"Toggle Status\"\n            toggleBtn.addEventListener(\"click\", () => {\n                onToggleClick(todo)\n            })\n            statusEl.appendChild(toggleBtn)\n\n            const deleteTodo = document.createElement(\"span\")\n            const deleteBtn = document.createElement(\"button\")\n            deleteBtn.textContent = \"Delete To-Do\"\n            deleteBtn.addEventListener(\"click\", () => {\n                onDeleteTodo(todo)\n            })\n            deleteTodo.appendChild(deleteBtn)\n\n            div.appendChild(titleEl)\n            div.appendChild(descriptionEl)\n            div.appendChild(dueDateEl)\n            div.appendChild(priorityEl)\n            div.appendChild(statusEl)\n            div.appendChild(deleteTodo)\n            \n            todosList.appendChild(div)\n        })\n    }\n\n    function renderProjects(projects, onProjectClick, onProjectDelete) {\n        projectsList.innerHTML = \"\"\n\n        projects.forEach(project => {\n            const div = document.createElement(\"div\")\n\n            div.textContent = project.name\n\n            const deleteBtn = document.createElement(\"button\")\n            deleteBtn.textContent = \"Delete\"\n\n            deleteBtn.addEventListener(\"click\", (e) => {\n                e.stopPropagation()\n                onProjectDelete(project)\n            })            \n            div.appendChild(deleteBtn)       \n\n            div.addEventListener(\"click\", () => {\n                onProjectClick(project)\n            })\n            projectsList.appendChild(div)\n        })\n    }\n\n    function renderProjectModal(onSubmit) {\n        const { modal, form } = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createModal)()\n\n        const title = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createInput)(\"Project Title\", \"project-title\")\n        const description = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createInput)(\"Description\", \"project-description\")\n\n        form.appendChild(title.label)\n        form.appendChild(title.input)\n\n        form.appendChild(description.label)\n        form.appendChild(description.input)\n\n        const button = document.createElement(\"button\")\n        button.textContent = \"Create Project\"\n        form.appendChild(button)\n\n        form.addEventListener(\"submit\", (e) => {\n            e.preventDefault()\n\n            if (\n                title.input.value === \"\" || \n                description.input.value === \"\"\n            ) {\n                alert(\"Please fill in all fields\")\n                return\n            }\n\n            onSubmit(\n                title.input.value,\n                description.input.value\n            )\n\n            modal.close()\n            modal.remove()\n        })\n    }\n\n    function renderTodoModal(onSubmit) {\n        const { modal, form } = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createModal)()\n\n        const title = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createInput)(\"Title\", \"todo-title\")\n        const description = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createInput)(\"Description of the task\", \"todo-description\")\n        const dueDate = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createInput)(\"Due Date\", \"todo-date\")\n        const priority = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.createInput)(\"Priority\", \"todo-priority\")   \n\n        form.appendChild(title.label)\n        form.appendChild(title.input)\n\n        form.appendChild(description.label)\n        form.appendChild(description.input)\n\n        form.appendChild(dueDate.label)\n        form.appendChild(dueDate.input)\n\n        form.appendChild(priority.label)\n        form.appendChild(priority.input)\n\n        const button = document.createElement(\"button\")\n        button.textContent = \"Create To-Do\"\n        form.appendChild(button)\n\n        form.addEventListener(\"submit\", (e) => {\n            e.preventDefault()\n\n            if (\n                title.input.value === \"\" || \n                description.input.value === \"\" ||\n                dueDate.input.value === \"\" ||\n                priority.input.value === \"\"\n            ) {\n                alert(\"Please fill in all fields\")\n                return\n            }\n\n            onSubmit(\n                title.input.value,\n                description.input.value,\n                dueDate.input.value,\n                priority.input.value\n            )\n\n            modal.close()\n            modal.remove()\n        })\n    }  \n\n    return {\n        renderProject,\n        renderProjects,\n        renderProjectModal,\n        renderTodoModal\n    }\n})()\n\n//# sourceURL=webpack://todo-app/./src/displayController.js?\n}");

/***/ },

/***/ "./src/helpers.js"
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendField: () => (/* binding */ appendField),\n/* harmony export */   createInput: () => (/* binding */ createInput),\n/* harmony export */   createModal: () => (/* binding */ createModal)\n/* harmony export */ });\nfunction createInput(labelText, id) {\n    const label = document.createElement(\"label\")\n    label.textContent = labelText\n\n    const input = document.createElement(\"input\")\n    input.id = id\n\n    label.htmlFor = id\n\n    return { label, input }\n}\n\nfunction createModal() {\n    const modal = document.createElement(\"dialog\")\n    const form = document.createElement(\"form\")\n\n    modal.appendChild(form)\n    document.body.appendChild(modal)\n    modal.showModal()\n\n    return { modal, form }\n}\n\nfunction appendField(form, field) {\n    form.appendChild(field.label)\n    form.appendChild(field.input)\n}\n\n//# sourceURL=webpack://todo-app/./src/helpers.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nlet currentProject = null\n\nconst projectButton = document.querySelector(\".add-project\")\nprojectButton.addEventListener(\"click\", () => {\n    _displayController_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.renderProjectModal((title, description) => {\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.addProject(title, description)\n        updateUI()\n    })  \n})\n\nconst todoButton = document.querySelector(\".add-todo\")\ntodoButton.addEventListener(\"click\", () => {\n    if (!currentProject) {\n        alert(\"Please select a project first!\")\n        return\n    }\n    _displayController_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.renderTodoModal((title, description, dueDate, priority) => {\n        currentProject.addTodo(title, description, dueDate, priority)\n        _displayController_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.renderProject(currentProject, handleToggleTodo, handleTodoDeletion)\n    })\n})\n\nfunction handleProjectClick(project) {\n    currentProject = project\n    _displayController_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.renderProject(project, handleToggleTodo, handleTodoDeletion)\n}\n\nfunction handleProjectDelete(project) {\n    const index = _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.getProjects().indexOf(project)\n    _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.removeProject(index)\n    \n    // If we deleted the project we're currently viewing, clear it\n    if (currentProject === project) {\n        currentProject = null\n        const title = document.querySelector(\"#project-title\")\n        const todosList = document.querySelector(\"#todos-list\")\n        title.textContent = \"\"\n        todosList.innerHTML = \"\"\n    }\n    \n    updateUI()\n}\n\nfunction handleToggleTodo(todo) {\n    todo.toggleCompleteStatus()\n    _displayController_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.renderProject(currentProject, handleToggleTodo, handleTodoDeletion)\n}\n\nfunction handleTodoDeletion(todo) {\n    const index = currentProject.getTodos().indexOf(todo)\n    currentProject.removeTodo(index)\n    _displayController_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.renderProject(currentProject, handleToggleTodo, handleTodoDeletion)\n}\n\nfunction updateUI() {\n    _displayController_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.renderProjects(\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.getProjects(), \n        handleProjectClick, \n        handleProjectDelete\n    )\n}\n\n_displayController_js__WEBPACK_IMPORTED_MODULE_0__.DisplayController.renderProjects(\n    _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.getProjects(), \n    handleProjectClick, \n    handleProjectDelete\n)\nif (_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.getProjects().length > 0) {\n    handleProjectClick(_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.ProjectManager.getProjects()[0])\n}\n\n//# sourceURL=webpack://todo-app/./src/index.js?\n}");

/***/ },

/***/ "./src/projectManager.js"
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager)\n/* harmony export */ });\n/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject.js */ \"./src/createProject.js\");\n\n\nconst ProjectManager = (function() {\n    const projects = []  // private, single source of truth\n\n    function addProject(name, description) {\n        const project = (0,_createProject_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name, description)\n        projects.push(project)\n    }\n\n    function getProjects() {\n        return projects\n    }\n\n    function removeProject(index) {\n        projects.splice(index, 1)\n    }\n\n    return {\n        addProject,\n        getProjects,\n        removeProject\n    }\n})()\n\n//# sourceURL=webpack://todo-app/./src/projectManager.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;