/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.accordion = function () {
  let headActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'accordion-head--active';
  let contentActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'accordion-content--active';
  let paddings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;

  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).toggleClass(headActive); // для head

      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].nextElementSibling).toggleClass(contentActive); // для content

      if (this[i].classList.contains(headActive)) {
        this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px'; // збільшуємо висоту контенту, щоб не налазили один на одного
      } else {
        this[i].nextElementSibling.style.maxHeight = '0px';
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.accordion-head').accordion();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttribute('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
}; // $('.dropdown-toggle').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");

const scroll = calcScroll();

function calcScroll() {
  // штучний блок, щоб забрати загальний скрол при появі всіх модалок
  let div = document.createElement('div');
  div.style.width = '50px'; // будь-яка ширина і висота

  div.style.height = '50px';
  div.style.overflowY = 'scroll'; // штучно задаємо, щоб з'явився скрол

  div.style.visibility = 'hidden'; // щоб ми його не бачили 

  document.body.appendChild(div); // просто кудись вставити

  let scrollWidth = div.offsetWidth - div.clientWidth; // віднімаємо від загальних параметрів блоку (разом зі скролом) його реальні параметри і різниця - це скрол в пікселях

  div.remove();
  return scrollWidth;
} // ф-ія modal - логіка модалки (відкриття, закриття)
// ф-ія createModal - створює програмно модалку (замість коду в html)


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  // created - якщо передаємо, це значить, що працюємо з модалкою, яка створена програмно, а не просто прописана в html. Треба для того, щоб видаляти модалку після закриття
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute('data-target'); // те модальне вікно, яке треба відкрити. Тобто, ми з кнопки беремо атрибут id, по якому знаходимо модалку, бо в модалки стоїть це id (exampleModal)

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = 'hidden'; // document.body.style.marginRight = `${scroll}px`;
    });
    const closeElements = document.querySelectorAll(`${target} [data-close]`);
    closeElements.forEach(elem => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(elem).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains('modall')) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';

        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
}; // $('[data-toggle="modal"]').modal();
// 1. клікаємо на кнопку (це записано в main)
// 2. створюємо модалку через createElement, додаємо модалці класи, прописуємо верстку через innerHTML (передаємо динамічно параметри з ф-ії createModal)
// 3. встановлюємо модалці id, в який записуємо значення data-target з кнопки, по якій клікнули (щоб різні кнопки викликали різні модалки)
// 4. В innerHTML модалки записуємо масив з кнопками 
// 5. Додаємо створену модалку в html 
// 6. Запускаємо ф-ію modal всередині createModal (щоб в main не писати .modal.createModal)


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function () {
  let {
    text,
    btns
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement('div'); // 2. 

    modal.classList.add('modall'); // 2.

    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); // 3. slice, щоб передати без #, яка 0 символ
    // btns = {count: num, settings: [ [text, classNames = [], close, cb] ] } . Це просто як має виглядати

    const buttons = []; // 4. 

    for (let j = 0; j < btns.settings.length; j++) {
      // count
      const [textBtn, classNames, close, cb] = btns.settings[j]; // деструктуризація

      let btn = document.createElement('button');
      btn.classList.add('btn', ...classNames); // classNames

      btn.textContent = textBtn; // text

      if (close) {
        // close
        btn.setAttribute('data-close', 'true');
      }

      if (cb && typeof cb === 'function') {
        // cb
        btn.addEventListener('click', cb);
      }

      buttons.push(btn);
    } // 2.


    modal.innerHTML = ` 
        <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close><span>&times;</span></button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
        `;
    modal.querySelector('.modal-footer').append(...buttons); // 4.

    document.body.appendChild(modal); // 5. 

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true); // 6. відразу запускаємо ф-ію modal всередині createModal

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute('data-target')).fadeIn(500); // типу імітуємо click. Тому що ф-ія modal чекає клік, щоб працювати, а тут ми по кліку запускаємо ф-ію createModal, тому треба типу зімітувати клік, щоб запрацювала ф-я modal або, як і зробили, просто прямо прописати метод fadeIn напряму. 
  }
};

/***/ }),

/***/ "./src/js/lib/components/slider.js":
/*!*****************************************!*\
  !*** ./src/js/lib/components/slider.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // слайди стоять в ряд за допомогою флексу в обгортці slidesField
// при кліку на кнопки обгоортка slidesField рухається і видимим стає інший слайд. Рухається обгортка рівно на width кожного слайду, яку ми задаємо самі. Ширина кожного слайда дорівнює ширині вікна. Ширина вікна встановлюється у верстці для головного діва carousel, у нас це 900px
// 3. Робота з dots
// 4. Коли клікаємо на dot має показуватися відповідний слайд (у верстці в кожної кнопки записано до якого слайду вона має вести)

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.slider = function (autoplay) {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width; // вікно - видима частина слайдера, в яку поміщається слайд, який ми бачимо

    const slides = this[i].querySelectorAll('.carousel-item');
    const slidesField = this[i].querySelector('.carousel-slides');
    const dots = this[i].querySelectorAll('.carousel-indicators li'); // 3.

    slidesField.style.width = 100 * slides.length + '%'; // задаємо ширину для обгортки слайдів, обговортка для слайдів має бути довга, щоб слайди в ній стали в ряд і по ньому рухалися 

    slides.forEach(slide => {
      // задаємо однакову ширину для кожного слайда
      slide.style.width = width; // дорівнює розміру вікна
    });
    let offset = 0; // показує на скільки ми вже посунули slidesField

    let slideIndex = 0; // 3. Показує активну точку 

    if (autoplay) {
      setInterval(() => {
        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
          // якщо дійшли до кінця
          offset = 0;
        } else {
          offset += +width.replace(/\D/g, '');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length - 1) {
          // 3.
          slideIndex = 0;
        } else {
          slideIndex++;
        }

        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
      }, 2000);
    }

    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="next"]')).click(e => {
      e.preventDefault();

      if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
        // якщо дійшли до кінця
        offset = 0;
      } else {
        offset += +width.replace(/\D/g, '');
      }

      slidesField.style.transform = `translateX(-${offset}px)`; // при кліку на next slidesField має зміщуватися вліво. Правильно, бо за замовчуванням вони стоять справа до кінця, а зліва пусто.

      if (slideIndex == slides.length - 1) {
        // 3.
        slideIndex = 0;
      } else {
        slideIndex++;
      }

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].querySelector('[data-slide="prev"]')).click(e => {
      e.preventDefault();

      if (offset == 0) {
        // якщо дійшли до початку
        offset = +width.replace(/\D/g, '') * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, '');
      }

      slidesField.style.transform = `translateX(-${offset}px)`; // при кліку на next slidesField має зміщуватися вліво. Правильно, бо за замовчуванням вони стоять справа до кінця, а зліва пусто.

      if (slideIndex == 0) {
        // 3.
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }

      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const slideTo = i;
        slideIndex = slideTo;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
        offset = +width.replace(/\D/g, '') * slideTo;
        slidesField.style.transform = `translateX(-${offset}px)`;
      });
    });
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createSlider = function (_ref) {
  let {
    imgs,
    autoplay,
    dots
  } = _ref;
  let slider = document.createElement('div');
  slider.classList.add('carousel');
  slider.setAttribute('id', 'example');
  let slidesArr = [];

  for (let i = 0; i < imgs.length; i++) {
    let slideDiv = document.createElement('div');
    slideDiv.classList.add('carousel-item');
    slideDiv.innerHTML = `
        <img src=${imgs[i]} alt="photo"></img>
        `;
    slidesArr.push(slideDiv);
  }

  let dotsArr = [];

  if (dots) {
    for (let i = 0; i < imgs.length; i++) {
      let dotsLi = document.createElement('li');
      dotsArr.push(dotsLi);
    }
  }

  slider.innerHTML = `
    <ol class="carousel-indicators">
           
    </ol>
    <div class="carousel-inner">
        <div class="carousel-slides">
                   
        </div>
    </div>
    <a href="#" class="carousel-prev" data-slide="prev">
        <span class="carousel-prev-icon">&lt;</span>
    </a>
    <a href="#" class="carousel-next" data-slide="next">
        <span class="carousel-next-icon">&gt;</span>
    </a>
    `;
  slider.querySelector('.carousel-indicators').append(...dotsArr);
  slider.querySelector('.carousel-slides').append(...slidesArr);
  document.body.appendChild(slider);
  Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').slider(autoplay);
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).on('click', () => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item--active').siblings().removeClass('tab-item--active').closest('.tab').find('.tab-content').removeClass('tab-content--active').eq(Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).index()).addClass('tab-content--active');
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tabpanel] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// прототипом об'єкта функції $ є об'єкт функція init
// у ф-ію init записані всі методи, які ми створюємо, додаючи їх в прототип init (0: addClass; 1: click...)
// а потім ми всі ці методи записуємо в об'єкт $
const $ = function (selector) {
  return new $.prototype.init(selector); // кожен раз, коли запускається функція, створюється новий об'єкт 
};

$.prototype.init = function (selector) {
  // щоб кожен раз не робити querySelectorAll на кожен метод. А відразу звертатися до елементів 
  if (!selector) {
    return this; // новосторений об'єкт, в цьому випадку пустий {}
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector)); // додаємо в {} елементи, для яких ми нижче додаємо свойства

  this.length = document.querySelectorAll(selector).length; // нове свойство length

  return this;
};

$.prototype.init.prototype = $.prototype; // ми в протитип об'єкта, який нам повертає init, записуємо прототип нашої головної функції (всі методи, які ми в неї додали )
// прототипом inita є функція $ (!). А в $ ми записуємо всі інші методи (з модулів). І виходить, що у $ є і ініт, і інші методи з модулів. 

window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($); // Про ООП
// __proto__ є в будь-якого об'єкта, а prototype - тільки в класів чи функцій  https://www.youtube.com/watch?v=b55hiUlhAzI&t=1508s
// prototype завжди не рівні між собою
// __proto__ - це те від чого створилося. від Function.prototype, Number.prototype, Array.prototype...
// console.log($.prototype)

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/accordion */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/slider */ "./src/js/lib/components/slider.js");
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/requests */ "./src/js/lib/services/requests.js");
// файл експортів, по яких ми збираємо бібліотеку













/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // ../ - вийти з папки

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
}; // для роботи з окремими елементами, наприклад, лише з 2 дівом з 10 дівів


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength.length; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this; // повертає об'єкт з яким можна далі взаємодіяти 
}; // отримання елементу по порядку, серед тих елементів, які мають спільного родителя 
// це закінчений метод (повертає число - індекс елементу, який ми шукаємо), тобто, немає команди return this


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function (i) {
  const parent = this[0].parentNode; // шукаємо родительський елемент

  const childs = [...parent.children]; // шукаємо його дітей, перетворюємо в масив, щоб можна було методи масиву використати
  //ф-ія для пошуку елементу, передається у findIndex

  const findMyIndex = item => {
    return item == this[0]; // поверне лише той один елемент item, який буде дорівнювати тому селектору, який ми передаємо на початку в $()
  };

  return childs.findIndex(findMyIndex); // шукаємо потрібний елемент 
  // Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; // к-сть елементів, які підійшли по селектору

  let counter = 0;
  const copyObj = Object.assign({}, this); // створюємо просто копію об'єкту this, щоб з ним працювати, а потім вже перейти до нормального this

  for (let i = 0; i < copyObj.length; i++) {
    // перебираємо всі елементи 
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.length == 0) {
      continue;
    } // записуємо в об'єкт this елементи, які знайшли


    for (let j = 0; j < arr.length; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems; // видаляємо зайві елементи з першого базового this, щоб була нормальна length

  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    if (this[i].closest(selector) !== null) {
      this[i] = this[i].closest(selector);
      counter++;
    }
  }

  const objLength = Object.keys(this).length;

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
}; // шукає всі сусідні елементи, не включаючи сам елемент


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0; // к-сть елементів, які підійшли по селектору

  let counter = 0;
  const copyObj = Object.assign({}, this); // створюємо просто копію об'єкту this, щоб з ним працювати, а потім вже перейти до нормального this

  for (let i = 0; i < copyObj.length; i++) {
    // перебираємо всі елементи 
    const arr = copyObj[i].parentNode.children; // записуємо в об'єкт this елементи, які знайшли

    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        // щоб сам елемент, по якому клікнули, не додавався 
        continue;
      }

      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems; // видаляємо зайві елементи з першого базового this, щоб була нормальна length

  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // ../ - вийти з папки

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttribute = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].setAttribute(name, value)) {
      // якщо нема взагалі такого свойства в елемента
      continue;
    }

    return this[i].setAttribute(name, value);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttribute = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute(name)) {
      // якщо нема взагалі такого свойства в елемента
      continue;
    }

    return this[i].getAttribute(name);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // ../ - вийти з папки

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      // якщо нема взагалі такого свойства в елемента
      continue;
    }

    this[i].classList.add(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      // якщо нема взагалі такого свойства в елемента
      continue;
    }

    this[i].classList.remove(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      // якщо нема взагалі такого свойства в елемента
      continue;
    }

    this[i].classList.toggle(classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // ../ - вийти з папки

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      // якщо нема взагалі такого свойства style в елемента
      continue;
    }

    this[i].style.display = '';
  }

  return this; // щоб ми далі могли працювати з цими методами
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      // якщо нема взагалі такого свойства style в елемента
      continue;
    }

    this[i].style.display = 'none';
  }

  return this; // щоб ми далі могли працювати з цими методами
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      // якщо нема взагалі такого свойства style в елемента
      continue;
    }

    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display = 'none';
    }
  }

  return this; // щоб ми далі могли працювати з цими методами
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (dur, cb, fin) {
  // dur - як довго буде виконуватися анімація, cb і fin - необов'язкові параметри. cb - запуск після того як анімація запустилася, fin - після закінчення анімації.
  // треба створити функцію, яка буде виконуватися до певної умови. Якщо умова виконується, то все, анімація закінчується
  // вираховуємо час початку анімації і порівнюємо його з dur, який самі встановлюємо
  // 1. Треба визначити скільки часу пройшло від початку анімації 
  // 2. Порівняти значення, яке вийшло, із duration, яку задаємо самі (за скільки часу має пройти анімація: 3,5,10 сек)
  // 3. Результат (число) записати у основну дію з анімацією (зростання opacity, якась distance тощо). Це типу інтервал анімації.
  // 4. Записати умови, що ф-ія requestAnimationFrame працює, поки кількість часу, яка пройшла, не перевищує duration, яку ми зазначили вручну
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart; // скільки часу пройшло від початку 

    console.log(timeElapsed); // dur = 3000, виставляю сам, тобто, за скільки часу має відбутися анімація ()

    let complection = Math.min(timeElapsed / dur, 1); // кожен раз інше значення

    cb(complection);

    if (timeElapsed < dur) {
      // якщо пройшло менше часу, ніж ми задали в dur, то все ок, анімація поки працює
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }

  return _animateOverTime;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block';

    const _fadeIn = complection => {
      this[i].style.opacity = complection; // цифри від 0 до 1 
    };

    const ani = this.animateOverTime(dur, _fadeIn, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (dur, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;

      if (complection == 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(dur, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (dur, display, fin) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      this[i].style.display = display || 'block';

      const _fadeIn = complection => {
        this[i].style.opacity = complection; // цифри від 0 до 1 
      };

      const ani = this.animateOverTime(dur, _fadeIn, fin);
      requestAnimationFrame(ani);
    } else {
      for (let i = 0; i < this.length; i++) {
        const _fadeOut = complection => {
          this[i].style.opacity = 1 - complection;

          if (complection == 1) {
            this[i].style.display = 'none';
          }
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
      }
    }
  }

  return this;
}; // let circle = document.querySelector('.circle');
// circle.style.cssText = `
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     margin-left: -300px;
//     width: 100px;
//     height: 100px;
//     background: red;
// `;
// ми хочемо, щоб за секунду пройшло 10 ітерацій (10 рухів)
// const duration = 1000; // за скільки часу
// const iterations = 60; // за скільки разів (кадрів у секунду)
// const distance = 500; // на скільки ми хочемо зрушити об'єкт
// let translate = 0;
// const anim = setInterval(() => {
//     translate += distance / iterations;
//     circle.style.transform = `translateX(${translate}px)`
//     if (translate >= distance) {
//         clearInterval(anim);
//     }
// }, duration/iterations)
// те саме, але через requestAnimationFrame. Не треба рахувати кількість iterations, це робить requestAnimationFrame - time
// const duration = 1000; // за скільки часу
// const distance = 500; // на скільки ми хочемо зрушити об'єкт
// let startAnimation = null;
// requestAnimationFrame(function measure(time) {
//     if (!startAnimation) {
//         startAnimation = time;
//     }
//     const progress = (time - startAnimation) / duration; // число від 0 до 1, наприклад time = 500; startAnimation = 0; duration = 1000; то прогрес = 500/1000 = 0,5, тобто, ми в середині анімації, а якщо 1 - то в кінці 
//     console.log(startAnimation)
//     console.log(time)
//     const translate = progress * distance;
//     circle.style.transform = `translateX(${translate}px)`
//     if (progress < 1) { // виклик анімації, типу рекурсія тут
//         requestAnimationFrame(measure)
//     }
// });

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // ../ - вийти з папки

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click(); // просто віртуальний клік по елементу
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/services/requests.js":
/*!*****************************************!*\
  !*** ./src/js/lib/services/requests.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.get = async function (url) {
  let dataTypeAnswer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();

    case 'blob':
      return await res.blob();
  }
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.post = async function (url, data) {
  let dataTypeAnswer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'text';
  let res = await fetch(url, {
    method: "POST",
    body: data
  });

  switch (dataTypeAnswer) {
    case 'json':
      return await res.json();

    case 'text':
      return await res.text();

    case 'blob':
      return await res.blob();
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
 // modal
// $('#trigger').click(() => {
//     $('#trigger').createModal({
//         text: {
//             title: 'Modal title',
//             body: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, maxime autem voluptatum est corrupti libero eligendi ipsa obcaecati, officia officiis ut veritatis earum. Neque deserunt, harum quibusdam similique cum unde!'
//         },
//         btns: {
//             settings: [
//                 [
//                     'Close',
//                     ['btn-danger', 'mr-10'],
//                     true
//                 ],
//                 [
//                     'Save changes',
//                     ['btn-success'],
//                     false,
//                     () => {
//                         alert('Дані збережено');
//                     }
//                 ],
//                 [
//                     'Another btn',
//                     ['btn-warning'],
//                     false,
//                     () => {
//                         alert('Куку');
//                     }
//                 ]
//             ]
//         }
//     });
// })
// // slider
// $().createSlider({
//     imgs: [
//             'https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg',
//             'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg',
//             'https://pixlr.com/images/best-photo-editor-cover.jpg',
//             'http://www.rosphoto.com/images/u/articles/1510/7_5.jpg',
//             'https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg',
//             'https://prophotos.ru/data/articles/0002/2614/image-rectangle_600_x.jpg',
//             'https://i.pinimg.com/736x/b3/a6/32/b3a632a5547d22c553075514add449db.jpg'
//     ],
//     autoplay: false,
//     dots: true
// });

/***/ })

/******/ });
//# sourceMappingURL=script.js.map