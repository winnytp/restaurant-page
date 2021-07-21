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
    pancakeImage.setAttribute('src', './assets/pancake.png');
    pancakeImage.setAttribute('width', '256');
    pancakeImage.setAttribute('height', '256');
    pancakeImageDiv.appendChild(pancakeImage);

    content.appendChild(makeElement('footer'));
    const footer = document.querySelector('footer');
    footer.appendChild(makeElement('p', '', '', `Coded by <a href='https://github.com/winnytp/restaurant-page'>@winnytp`));
    footer.appendChild(makeElement('p', '', '', `Maple's © 2021 | All Rights Reserved`));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");

// import './style.css';

console.log(`I'm working.`);

(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVOzs7Ozs7VUM1RGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNObUM7QUFDbkM7O0FBRUE7O0FBRUEsaURBQVUsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcbiAgICBjb25zb2xlLmxvZygnTG9hZGluZyBob21lLicpXG5cbiAgICBmdW5jdGlvbiBtYWtlRWxlbWVudCh0YWcsIGlkLCBjLCB0ZXh0KSB7XG4gICAgICAgIGxldCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgIGlmIChpZCkgY3JlYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgIGlmIChjKSBjcmVhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGMpO1xuICAgICAgICBpZiAodGV4dCkgY3JlYXRlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBjcmVhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbmF2JykpO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCd1bCcpKTtcblxuICAgIGNvbnN0IG5hdlVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICBuYXZVbC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnbGknLCAnbWFwbGUnLCAnJywgYE1hcGxlJ3NgKSk7XG4gICAgbmF2VWwuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2xpJywgJycsICdyaWdodCcsICdNZW51JykpO1xuICAgIG5hdlVsLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdsaScsICcnLCAnJywgJ0NvbnRhY3QnKSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdtYWluJykpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCAnJywgJ2hlcm8gY2VudGVyLWZsZXgnKSk7XG5cbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKTtcbiAgICBoZXJvLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdoMicsICcnLCAnJywgYDxzcGFuPldlbGNvbWUgdG88L3NwYW4+PGJyPk1hcGxlJ3MgUmVzdGF1cmFudC5gKSk7XG4gICAgaGVyby5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnZGl2JywgJ2hlcm8tYnRuJykpO1xuXG4gICAgY29uc3QgaGVyb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZXJvLWJ0bicpO1xuICAgIGhlcm9CdG4uYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsICcnLCAnJywgJ0RlbGl2ZXJ5JykpO1xuICAgIGhlcm9CdG4uYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2J1dHRvbicsICdibHVlLWJ0bicsICcnLCAnQm9vayBOb3cnKSk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCAnJywgJ2NvbnRhaW5lcicpKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2RpdicsICcnLCAnc2lkZS1tYXJnaW4gY2VudGVyLWZsZXgnKSk7XG5cbiAgICBjb25zdCBjb250YWluZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtbWFyZ2luJyk7XG4gICAgY29udGFpbmVyQ29udGVudC5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgnaDInLCAnJywgJycsICdQYW5jYWtlcyBhcmUgb3VyIDxicj48c3Bhbj5vYnNlc3Npb24uPC9zcGFuPicpKTtcbiAgICBjb250YWluZXJDb250ZW50LmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdwJywgJycsICcnLCBgVGhlcmUncyBub3RoaW5nIGxpa2Ugc29tZSBmbHVmZnksIHdhcm0gcGFuY2FrZXMgZm9yIGJyZWFrZmFzdCwgbHVuY2gsIGFuZCBkaW5uZXIuYCkpO1xuICAgIGNvbnRhaW5lckNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ3AnLCAnJywgJycsIGBXZSdyZSBvcGVuIGZyb20gPHN0cm9uZz5kYXduICd0aWwgZHVzazwvc3Ryb25nPiwgc28gY29tZSBvbiBpbiBhbmQgZ3JhYiBhIHBhbmNha2Ugc3RhY2tlZCB3aXRoIGZyZXNoIGZydWl0LCBOdXRlbGxhIGNob2MsIGFuZCBvdXIgc2lnbmF0dXJlIE1hcGxlIFNwZWNpYWwgU3lydXAuYCkpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1ha2VFbGVtZW50KCdkaXYnLCAncGFuY2FrZS1pbWFnZScsICdjZW50ZXItZmxleCcpKTtcblxuICAgIGNvbnN0IHBhbmNha2VJbWFnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYW5jYWtlLWltYWdlJyk7XG4gICAgbGV0IHBhbmNha2VJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBhbmNha2VJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9wYW5jYWtlLnBuZycpO1xuICAgIHBhbmNha2VJbWFnZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzI1NicpO1xuICAgIHBhbmNha2VJbWFnZS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcyNTYnKTtcbiAgICBwYW5jYWtlSW1hZ2VEaXYuYXBwZW5kQ2hpbGQocGFuY2FrZUltYWdlKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ2Zvb3RlcicpKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobWFrZUVsZW1lbnQoJ3AnLCAnJywgJycsIGBDb2RlZCBieSA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vd2lubnl0cC9yZXN0YXVyYW50LXBhZ2UnPkB3aW5ueXRwYCkpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChtYWtlRWxlbWVudCgncCcsICcnLCAnJywgYE1hcGxlJ3MgwqkgMjAyMSB8IEFsbCBSaWdodHMgUmVzZXJ2ZWRgKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJIb21lIGZyb20gJy4vaG9tZS5qcyc7XG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc29sZS5sb2coYEknbSB3b3JraW5nLmApO1xuXG5yZW5kZXJIb21lKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==