/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pancake_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pancake.png */ "./src/pancake.png");


function renderHome() {
    console.log('Loading home.')

    function makeElement(tag, id, c, text) {
        let create = document.createElement(tag);
        if (id) create.setAttribute('id', id);
        if (c) create.setAttribute('class', c);
        if (text) create.innerHTML = text;
        return create;
    }

    const content = document.querySelector('#content');
    content.appendChild(makeElement('nav'));

    const nav = document.querySelector('nav');
    nav.appendChild(makeElement('ul'));

    const navUl = document.querySelector('ul');
    navUl.appendChild(makeElement('li', 'maple', '', `Maple's`));
    navUl.appendChild(makeElement('li', '', 'right', 'Menu'));
    navUl.appendChild(makeElement('li', '', '', 'Contact'));

    content.appendChild(makeElement('main'));

    const main = document.querySelector('main');
    main.appendChild(makeElement('div', '', 'hero center-flex'));

    const hero = document.querySelector('.hero');
    hero.appendChild(makeElement('h2', '', '', `<span>Welcome to</span><br>Maple's Restaurant.`));
    hero.appendChild(makeElement('div', 'hero-btn'));

    const heroBtn = document.getElementById('hero-btn');
    heroBtn.appendChild(makeElement('button', '', '', 'Delivery'));
    heroBtn.appendChild(makeElement('button', 'blue-btn', '', 'Book Now'));

    main.appendChild(makeElement('div', '', 'container'));

    const container = document.querySelector('.container');
    container.appendChild(makeElement('div', '', 'side-margin center-flex'));

    const containerContent = document.querySelector('.side-margin');
    containerContent.appendChild(makeElement('h2', '', '', 'Pancakes are our <br><span>obsession.</span>'));
    containerContent.appendChild(makeElement('p', '', '', `There's nothing like some fluffy, warm pancakes for breakfast, lunch, and dinner.`));
    containerContent.appendChild(makeElement('p', '', '', `We're open from <strong>dawn 'til dusk</strong>, so come on in and grab a pancake stacked with fresh fruit, Nutella choc, and our signature Maple Special Syrup.`));

    container.appendChild(makeElement('div', 'pancake-image', 'center-flex'));

    const pancakeImageDiv = document.getElementById('pancake-image');
    let pancakeImage = document.createElement('img');
    pancakeImage.setAttribute('src', '../src/pancake.png');
    pancakeImage.setAttribute('width', '256');
    pancakeImage.setAttribute('height', '256');
    pancakeImageDiv.appendChild(pancakeImage);

    content.appendChild(makeElement('footer'));
    const footer = document.querySelector('footer');
    footer.appendChild(makeElement('p', '', '', `Coded by <a href='https://github.com/winnytp/restaurant-page'>@winnytp`));
    footer.appendChild(makeElement('p', '', '', `Maple's © 2021 | All Rights Reserved`));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

/***/ }),

/***/ "./src/pancake.png":
/*!*************************!*\
  !*** ./src/pancake.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b5fbb1b6939d4b93a86.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");


console.log(`I'm working.`);

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvQzs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVTs7Ozs7Ozs7Ozs7Ozs7OztVQzlEZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7O0FDZm1DOztBQUVuQzs7QUFFQSxpREFBVSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFuY2FrZSBmcm9tICcuL3BhbmNha2UucG5nJztcblxuZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBob21lLicpXG5cbiAgICBmdW5jdGlvbiBtYWtlRWxlbWVudCh0YWcsIGlkLCBjLCB0ZXh0KSB7XG4gICAgICAgIGxldCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgIGlmIChpZCkgY3JlYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgIGlmIChjKSBjcmVhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGMpO1xuICAgICAgICBpZiAodGV4dCkgY3JlYXRlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBjcmVhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbmF2JykpO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCd1bCcpKTtcblxuICAgIGNvbnN0IG5hdlVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbGknLCAnbWFwbGUnLCAnJywgYE1hcGxlJ3NgKSk7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2xpJywgJycsICdyaWdodCcsICdNZW51JykpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsICcnLCAnJywgJ0NvbnRhY3QnKSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdtYWluJykpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCAnJywgJ2hlcm8gY2VudGVyLWZsZXgnKSk7XG5cbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMicsICcnLCAnJywgYDxzcGFuPldlbGNvbWUgdG88L3NwYW4+PGJyPk1hcGxlJ3MgUmVzdGF1cmFudC5gKSk7XG4gICAgaGVyby5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgJ2hlcm8tYnRuJykpO1xuXG4gICAgY29uc3QgaGVyb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZXJvLWJ0bicpO1xuICAgIGhlcm9CdG4uYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsICcnLCAnJywgJ0RlbGl2ZXJ5JykpO1xuICAgIGhlcm9CdG4uYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsICdibHVlLWJ0bicsICcnLCAnQm9vayBOb3cnKSk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCAnJywgJ2NvbnRhaW5lcicpKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsICcnLCAnc2lkZS1tYXJnaW4gY2VudGVyLWZsZXgnKSk7XG5cbiAgICBjb25zdCBjb250YWluZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtbWFyZ2luJyk7XG4gICAgY29udGFpbmVyQ29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDInLCAnJywgJycsICdQYW5jYWtlcyBhcmUgb3VyIDxicj48c3Bhbj5vYnNlc3Npb24uPC9zcGFuPicpKTtcbiAgICBjb250YWluZXJDb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdwJywgJycsICcnLCBgVGhlcmUncyBub3RoaW5nIGxpa2Ugc29tZSBmbHVmZnksIHdhcm0gcGFuY2FrZXMgZm9yIGJyZWFrZmFzdCwgbHVuY2gsIGFuZCBkaW5uZXIuYCkpO1xuICAgIGNvbnRhaW5lckNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ3AnLCAnJywgJycsIGBXZSdyZSBvcGVuIGZyb20gPHN0cm9uZz5kYXduICd0aWwgZHVzazwvc3Ryb25nPiwgc28gY29tZSBvbiBpbiBhbmQgZ3JhYiBhIHBhbmNha2Ugc3RhY2tlZCB3aXRoIGZyZXNoIGZydWl0LCBOdXRlbGxhIGNob2MsIGFuZCBvdXIgc2lnbmF0dXJlIE1hcGxlIFNwZWNpYWwgU3lydXAuYCkpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCAncGFuY2FrZS1pbWFnZScsICdjZW50ZXItZmxleCcpKTtcblxuICAgIGNvbnN0IHBhbmNha2VJbWFnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW5jYWtlLWltYWdlJyk7XG4gICAgbGV0IHBhbmNha2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBhbmNha2VJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvcGFuY2FrZS5wbmcnKTtcbiAgICBwYW5jYWtlSW1hZ2Uuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcyNTYnKTtcbiAgICBwYW5jYWtlSW1hZ2Uuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMjU2Jyk7XG4gICAgcGFuY2FrZUltYWdlRGl2LmFwcGVuZENoaWxkKHBhbmNha2VJbWFnZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdmb290ZXInKSk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdwJywgJycsICcnLCBgQ29kZWQgYnkgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL3dpbm55dHAvcmVzdGF1cmFudC1wYWdlJz5Ad2lubnl0cGApKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ3AnLCAnJywgJycsIGBNYXBsZSdzIMKpIDIwMjEgfCBBbGwgUmlnaHRzIFJlc2VydmVkYCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHJlbmRlckhvbWUgZnJvbSAnLi9ob21lLmpzJztcblxuY29uc29sZS5sb2coYEknbSB3b3JraW5nLmApO1xuXG5yZW5kZXJIb21lKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==