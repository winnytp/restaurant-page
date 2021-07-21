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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderHome() {\n    console.log('Loading home.')\n\n    function makeElement(tag, id, c, text) {\n        let create = document.createElement(tag);\n        if (id) create.setAttribute('id', id);\n        if (c) create.setAttribute('class', c);\n        if (text) create.innerHTML = text;\n        return create;\n    }\n\n    const content = document.querySelector('#content');\n    content.appendChild(makeElement('nav'));\n\n    const nav = document.querySelector('nav');\n    nav.appendChild(makeElement('ul'));\n\n    const navUl = document.querySelector('ul');\n    navUl.appendChild(makeElement('li', 'maple', '', `Maple's`));\n    navUl.appendChild(makeElement('li', '', 'right', 'Menu'));\n    navUl.appendChild(makeElement('li', '', '', 'Contact'));\n\n    content.appendChild(makeElement('main'));\n\n    const main = document.querySelector('main');\n    main.appendChild(makeElement('div', '', 'hero center-flex'));\n\n    const hero = document.querySelector('.hero');\n    hero.appendChild(makeElement('h2', '', '', `<span>Welcome to</span><br>Maple's Restaurant.`));\n    hero.appendChild(makeElement('div', 'hero-btn'));\n\n    const heroBtn = document.getElementById('hero-btn');\n    heroBtn.appendChild(makeElement('button', '', '', 'Delivery'));\n    heroBtn.appendChild(makeElement('button', 'blue-btn', '', 'Book Now'));\n\n    main.appendChild(makeElement('div', '', 'container'));\n\n    const container = document.querySelector('.container');\n    container.appendChild(makeElement('div', '', 'side-margin center-flex'));\n\n    const containerContent = document.querySelector('.side-margin');\n    containerContent.appendChild(makeElement('h2', '', '', 'Pancakes are our <br><span>obsession.</span>'));\n    containerContent.appendChild(makeElement('p', '', '', `There's nothing like some fluffy, warm pancakes for breakfast, lunch, and dinner.`));\n    containerContent.appendChild(makeElement('p', '', '', `We're open from <strong>dawn 'til dusk</strong>, so come on in and grab a pancake stacked with fresh fruit, Nutella choc, and our signature Maple Special Syrup.`));\n\n    container.appendChild(makeElement('div', 'pancake-image', 'center-flex'));\n\n    const pancakeImageDiv = document.getElementById('pancake-image');\n    let pancakeImage = document.createElement('img');\n    pancakeImage.setAttribute('src', '../src/pancake.png');\n    pancakeImage.setAttribute('width', '256');\n    pancakeImage.setAttribute('height', '256');\n    pancakeImageDiv.appendChild(pancakeImage);\n\n    content.appendChild(makeElement('footer'));\n    const footer = document.querySelector('footer');\n    footer.appendChild(makeElement('p', '', '', `Coded by <a href='https://github.com/winnytp/restaurant-page'>@winnytp`));\n    footer.appendChild(makeElement('p', '', '', `Maple's © 2021 | All Rights Reserved`));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\n\nconsole.log(`I'm working.`);\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;