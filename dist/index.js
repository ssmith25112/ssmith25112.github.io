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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../res/hero.jpg */ "./res/hero.jpg"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../res/eatingconcerns.jpg */ "./res/eatingconcerns.jpg"));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../res/lifestyle2.jpg */ "./res/lifestyle2.jpg"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../res/medicalproblems.jpg */ "./res/medicalproblems.jpg"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../res/relationships.jpg */ "./res/relationships.jpg"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../res/stressmanagement.jpg */ "./res/stressmanagement.jpg"));
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../res/transitions.jpg */ "./res/transitions.jpg"));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../res/services.jpg */ "./res/services.jpg"));
var ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(/*! ../res/succulentBurst.jpg */ "./res/succulentBurst.jpg"));
var ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ../res/moreClasses.jpg */ "./res/moreClasses.jpg"));
var ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(/*! ../res/moreResources.jpg */ "./res/moreResources.jpg"));
// Module
exports.push([module.i, "* {\n  color: #222222;\n}\n\nh2 {\n  text-align: center;\n  font-size: 3rem;\n  font-family: 'Dancing Script', cursive;\n  margin: 0;\n}\n\nbody {\n  margin: 0;\n  position: relative;\n}\n\n.navMenu {\n  font-size: 18px;\n  position: relative;\n}\n\n.backdrop {\n  overflow: hidden;\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n}\n\n.hero {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 100%;\n}\n\n.content {\n  margin-top: 50px;\n}\n\n.hero-content {\n  width: 100%;\n  display: flex;\n  height: 85vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.hero-content blockquote {\n  width: 60%;\n}\n\n.hero-content h1 {\n  color: #FFFFFF;\n}\n\nblockquote footer {\n  text-align: end;\n  font-size: 22px;\n  color: #FFFFFF;\n}\n\n.meet {\n  display: flex;\n  background-color: #EDEAE5;\n  padding: 30px;\n\n}\n\n\n\n\n.profile {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n}\n\n.profilePhoto {\n  width: 100%;\n  max-width: 450px;\n  min-width: 0;\n  min-height: 0;\n  object-fit: contain;\n  border-radius: 25px;\n}\n\n.bio {\n  flex: 1 0 auto;\n  margin: 20px;\n  max-width: 50%;\n}\n\n.bio .bioSubtitle {\n  text-align: center;\n}\n\n.bio p {\n  word-wrap: break-word;\n  /* padding: 0px 30px; */\n}\n\n@media screen and (max-width: 400px) {\n  .meet {\n    flex-direction: column;\n  }\n\n  .bio,\n  .profile {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n\n.practiceAreas {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n\n.practiceAreas .areas {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 30px;\n  align-items: space-between;\n  justify-content: center;\n}\n\n.practiceAreas .areas>.area {\n  display: flex;\n  flex: 1 0 290px;\n  max-width: 290px;\n  height: 320px;\n  background: #F7F7F7;\n  border-radius: 2px;\n  flex-direction: column;\n  margin: 0 30px 30px 0;\n  position: relative;\n}\n\n.areaImage {\n  width: 100%;\n  height: 200px;\n  background-color: lightgray;\n}\n\n.areaEatingConcerns {\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left bottom -50px;\n}\n\n.areaLifestyle {\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -65px;\n}\n\n.areaMedicalProblems {\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left;\n}\n\n.areaRelationships {\n  background: url(" + ___CSS_LOADER_URL___4___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n\n.areaStress {\n  background: url(" + ___CSS_LOADER_URL___5___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n\n.areaTransitions {\n  background: url(" + ___CSS_LOADER_URL___6___ + ") no-repeat;\n  background-size: cover;\n  background-position: left -20px;\n}\n\n.areaText {\n  font-size: 30px;\n  height: 120px;\n  max-height: 120px;\n}\n\n.areaText div {\n  margin-left: 42px;\n  margin-top: 12px;\n}\n\n.areaOverlay {\n  background: transparent;\n  border: 1px solid black;\n  border-radius: 2px;\n  position: absolute;\n  width: 230px;\n  height: 260px;\n  margin: 30px;\n}\n\n.services {\n  height: 400px;\n  background-color: #FBEEC1;\n  display: flex;\n}\n\n.servicesDescription {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n}\n\n.servicesImage {\n  width: 50%;\n  background: url(" + ___CSS_LOADER_URL___7___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media screen and (max-width: 400px) {\n  .servicesDescription {\n    width: 100%;\n  }\n\n  .servicesImage {\n    width: 0%;\n    display: none;\n  }\n\n  .hero-content blockquote h1 {\n    font-size: 1.75rem;\n  }\n\n  .hero-content blockquote footer {\n    font-size: 1.25rem;\n  }\n}\n\n.button {\n  display: inline-block;\n  border: none;\n  border-radius: 2px;\n  margin: 0;\n  text-decoration: none;\n  background: rgba(171, 208, 230, 1);\n  font-size: 18px;\n  cursor: pointer;\n  text-align: center;\n  transition: background 200ms ease-in-out, transform 100ms ease;\n  -webkit-appearance: none;\n  padding: 10px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.button:hover {\n  background: rgba(171, 208, 230, 0.7);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.readMore {\n  display: flex;\n  justify-content: center;\n}\n\n.classes {\n  display: flex;\n  justify-content: center;\n  background: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n.contact {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n.contact h2 {\n  color: #FFFFFF;\n}\n\n.contact h3 {\n  color: #FFFFFF;\n}\n\n.contact form {\n  margin-top: 30px;\n}\n\n\n.group {\n  position: relative;\n  margin-bottom: 45px;\n}\n\ninput,\ntextarea {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid white;\n  background: transparent;\n  color: white;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n/* LABEL ======================================= */\nlabel {\n  color: white;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n/* active state */\ninput:focus~label,\ninput:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: white;\n  /* color: #4e5f75; */\n}\n\ntextarea {\n  resize: none;\n  padding: 0;\n}\n\ntextarea:focus~label,\ntextarea:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: white;\n}\n\n/* TODO learn this */\n\n/* BOTTOM BARS ================================= */\n.bar {\n  position: relative;\n  display: block;\n  width: 300px;\n}\n\n.bar:before,\n.bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: white;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar:before {\n  left: 50%;\n}\n\n.bar:after {\n  right: 50%;\n}\n\n/* active state */\ninput:focus~.bar:before,\ninput:focus~.bar:after {\n  width: 50%;\n}\n\n/* active state */\ntextarea:focus~.bar:before,\ntextarea:focus~.bar:after {\n  width: 50%;\n}\n\n/* HIGHLIGHTER ================================== */\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n/* active state */\ninput:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* active state */\ntextarea:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* ANIMATIONS ================ */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: white;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@-moz-keyframes inputHighlighter {\n  from {\n    background: white;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: white;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #EDEAE5;\n  padding: 30px;\n}\n\n.footer>div {\n  height: 90px;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: column;\n}\n\n.footer>div>span {\n  text-align: right;\n  cursor: pointer;\n  margin-left: auto;\n}\n\n.footer>div>span:hover {\n  filter: brightness(1.2);\n}\n\n\n.link:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  bottom: -2px;\n  left: 0;\n  background: #EDEAE5;\n  visibility: hidden;\n  border-radius: 5px;\n  transform: scaleX(0);\n  transition: .25s linear;\n}\n\n.link:hover:before,\n.link:focus:before {\n  visibility: visible;\n  transform: scaleX(1);\n}\n\n.navMenu:before {\n  bottom: -5px !important;\n}\n\n.contact {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___8___ + ");\n}\n\n.moreClasses {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___9___ + ");\n}\n\n.moreResources {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___10___ + ");\n}\n\n\n\n/* \n.about {\n  background-image: url('../res/about.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.help {\n  background-image: url('../res/help.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.services {\n  background-image: url('../res/services.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.classes {\n  background-image: url('../res/classes.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.contact {\n  background-image: url('../res/contact.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.resources {\n  background-image: url('../res/resources.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n} */\n\n.signature {\n  font-family: 'Dancing Script', cursive;\n  font-size: 26px;\n}\n\n.navMenu:hover {\n  filter: brightness(1.2);\n}\n\n.page-title {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.page-title .title {\n  font-size: 4rem;\n  font-family: 'Dancing Script', cursive;\n}\n\n.card {\n  background: #F7F7F7;\n  border-radius: 2px;\n  margin: 50px 15%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  min-width: 100px;\n}\n\n.card * {\n  color: #222222;\n}\n\n.card-body {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  min-height: 100px;\n  padding: 20px;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  padding: 20px;\n  border-bottom: 1px solid #222222;\n  height: 100%;\n}\n\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.card-2 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n}\n\n.background {\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n\n.drawer-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.30);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  z-index: 20;\n}\n\n.drawer-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  width: 155px;\n  height: calc(100vh - 50px);\n  z-index: 100;\n  /* transition: all 0.3s ease-in-out; */\n  top: 50px;\n  position: fixed;\n}\n\n.drawer {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: #EDEAE5;\n  justify-content: flex-start;\n  box-shadow: 11px 10px 8px 0px rgba(0, 0, 0, 0.25), 10px 0 5px -5px rgba(0, 0, 0, 0);\n  transition: none;\n}\n\n.drawer+.dark {\n  background-color: #C0C3C6;\n}\n\n.drawer-button {\n  width: 100%;\n  height: 40px;\n}\n\n.header-nav-button {\n  height: 40px;\n  width: 100px;\n}\n\n.drawer-item {\n  display: flex;\n}\n\n.drawer-item>div {\n  flex: 1;\n  padding-bottom: 10px;\n}\n\n.header-hamburger {\n  cursor: pointer;\n}\n\n.header-hamburger:hover * {\n  color: rgba(34, 34, 34, 0.6);\n}\n\n.hide {\n  display: none;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./res/eatingconcerns.jpg":
/*!********************************!*\
  !*** ./res/eatingconcerns.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/eatingconcerns.jpg";

/***/ }),

/***/ "./res/hero.jpg":
/*!**********************!*\
  !*** ./res/hero.jpg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/hero.jpg";

/***/ }),

/***/ "./res/lifestyle2.jpg":
/*!****************************!*\
  !*** ./res/lifestyle2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/lifestyle2.jpg";

/***/ }),

/***/ "./res/medicalproblems.jpg":
/*!*********************************!*\
  !*** ./res/medicalproblems.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/medicalproblems.jpg";

/***/ }),

/***/ "./res/moreClasses.jpg":
/*!*****************************!*\
  !*** ./res/moreClasses.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/moreClasses.jpg";

/***/ }),

/***/ "./res/moreResources.jpg":
/*!*******************************!*\
  !*** ./res/moreResources.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/moreResources.jpg";

/***/ }),

/***/ "./res/relationships.jpg":
/*!*******************************!*\
  !*** ./res/relationships.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/relationships.jpg";

/***/ }),

/***/ "./res/services.jpg":
/*!**************************!*\
  !*** ./res/services.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/services.jpg";

/***/ }),

/***/ "./res/stressmanagement.jpg":
/*!**********************************!*\
  !*** ./res/stressmanagement.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/stressmanagement.jpg";

/***/ }),

/***/ "./res/succulentBurst.jpg":
/*!********************************!*\
  !*** ./res/succulentBurst.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/succulentBurst.jpg";

/***/ }),

/***/ "./res/transitions.jpg":
/*!*****************************!*\
  !*** ./res/transitions.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/transitions.jpg";

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: App, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // TODO: accessibility

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleNav", function (target) {
      _this.setState({
        page: target
      });

      if (target.dock) {
        _this.closeDrawer();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDrawer", function () {
      _this.setState(function (current) {
        return {
          showDrawer: !current.showDrawer
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeDrawer", function () {
      _this.setState({
        showDrawer: false
      });
    });

    _this.state = {
      page: {
        name: 'home',
        scrollTo: null
      },
      showHamburger: false,
      showDrawer: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var width = window.innerWidth;

      if (width > 750) {
        this.setState({
          showDrawer: false
        });
      } else {
        this.setState({
          showDrawer: false,
          showHamburger: true
        });
      }

      window.addEventListener('resize', function () {
        var width = window.innerWidth;
        var showHamburger = _this2.state.showHamburger;

        if (width > 750 && showHamburger) {
          _this2.setState({
            showDrawer: false,
            showHamburger: false
          });
        } else if (width < 750 && !showHamburger) {
          _this2.setState({
            showHamburger: true
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var templateStyle = {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto, sans-serif'
      };
      var page = this.state.page;
      var name = page.name;
      var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

      switch (name) {
        case 'home':
          content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Home, {
            onNav: this.handleNav
          });
          break;

        case 'practice':
          content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PracticeAreas, null);
          break;

        case 'services':
          content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Services, null);
          break;

        case 'classes':
          content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Classes, null);
          break;

        case 'resources':
          content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Resources, null);
          break;

        case 'docs':
          content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClientDocuments, null);
          break;

        case 'fees':
          content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fees, null);
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: templateStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
        showHamburger: this.state.showHamburger,
        active: name,
        onNav: this.handleNav,
        openDrawer: this.toggleDrawer
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, {
        page: page,
        closeDrawer: this.closeDrawer,
        showDrawer: this.state.showDrawer,
        onNav: this.handleNav
      }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
        onNav: this.handleNav
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Body =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Body, _React$Component2);

  function Body() {
    var _getPrototypeOf2;

    var _this3;

    _classCallCheck(this, Body);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Body)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "handleDrawerOverlayClick", function () {
      _this3.props.closeDrawer();
    });

    _defineProperty(_assertThisInitialized(_this3), "renderDrawer", function () {
      var showDrawer = _this3.props.showDrawer;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('drawer-container', {
        'hide': !showDrawer
      });
      var overlayClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('drawer-overlay', {
        'hide': !showDrawer
      });

      var onDrawerMeetClick = function onDrawerMeetClick() {
        _this3.props.onNav({
          name: 'home',
          scrollTo: 'meet',
          dock: true
        });
      };

      var onDrawerPracticeClick = function onDrawerPracticeClick() {
        _this3.props.onNav({
          name: 'home',
          scrollTo: 'practice',
          dock: true
        });
      };

      var onDrawerServicesClick = function onDrawerServicesClick() {
        _this3.props.onNav({
          name: 'services',
          scrollTo: 0,
          dock: true
        });
      };

      var onDrawerContactClick = function onDrawerContactClick() {
        _this3.props.onNav({
          name: 'home',
          scrollTo: 'contact',
          dock: true
        });
      };

      var onDrawerClassesClick = function onDrawerClassesClick() {
        _this3.props.onNav({
          name: 'classes',
          scrollTo: 0,
          dock: true
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Drawer, {
        handleMeetClick: onDrawerMeetClick,
        handleContactClick: onDrawerContactClick,
        handleServicesClick: onDrawerServicesClick,
        handlePracticeClick: onDrawerPracticeClick,
        handleClassesClick: onDrawerClassesClick
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: overlayClasses,
        onClick: _this3.handleDrawerOverlayClick
      }));
    });

    return _this3;
  }

  _createClass(Body, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = this.props.page;

      if (page.scrollTo) {
        setTimeout(function () {
          return document.getElementById('top').scrollIntoView();
        }, 0);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var page = this.props.page;

      if (page.scrollTo !== null || page.scrollTo !== undefined) {
        if (typeof page.scrollTo === 'string') {
          setTimeout(function () {
            return document.getElementById(page.scrollTo).scrollIntoView({
              behavior: "smooth"
            });
          }, 0);
        }

        if (typeof page.scrollTo === 'number') {
          setTimeout(function () {
            return window.scrollTo(0, page.scrollTo);
          }, 0);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var page = this.props.page;
      var bodyStyle = {
        minHeight: "calc(100vh - 125px)"
      };
      var n = page.name;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'moreServices': n === 'services',
        'moreResources': n === 'resources',
        'moreDocuments': n === 'docs',
        'moreFees': n === 'fees',
        'moreClasses': n === 'classes',
        'morePractice': n === 'practice'
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes,
        style: bodyStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderDrawer(), this.props.children));
    }
  }]);

  return Body;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Header = function Header(props) {
  var inlineStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EDEAE5',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    zIndex: 24
  };
  var menuStyle = {
    cursor: 'pointer'
  };
  var active = props.active,
      onNav = props.onNav,
      showHamburger = props.showHamburger,
      openDrawer = props.openDrawer;

  var renderHamburger = function renderHamburger() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-nav header-hamburger",
      style: {
        marginLeft: 20
      },
      onClick: openDrawer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      className: "hamburger",
      width: "34",
      height: "34",
      viewBox: "0 0 24 24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "currentColor",
      d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    }))));
  };

  if (showHamburger) {
    inlineStyle.justifyContent = 'space-between';
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: inlineStyle
    }, renderHamburger(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: function onClick() {
        return onNav({
          name: 'home',
          scrollTo: 'top'
        });
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'signature', 'link', {
        'navMenu--active': active === 'home'
      }),
      style: _objectSpread({}, menuStyle, {
        marginRight: 20
      })
    }, "Stephanie Smith, Psy.D."));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: inlineStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: 'home',
        scrollTo: 'top'
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'signature', 'link', {
      'navMenu--active': active === 'home'
    }),
    style: menuStyle
  }, "Stephanie Smith, Psy.D."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: 'home',
        scrollTo: 'meet'
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
      'navMenu--active': active === 'help'
    }),
    style: menuStyle
  }, "Meet Dr. Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: 'home',
        scrollTo: 'practice'
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
      'navMenu--active': active === 'help'
    }),
    style: menuStyle
  }, "Practice Areas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: 'services',
        scrollTo: 0
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
      'navMenu--active': active === 'services'
    }),
    style: menuStyle
  }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: 'classes',
        scrollTo: 0
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
      'navMenu--active': active === 'classes'
    }),
    style: menuStyle
  }, "Classes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: 'home',
        scrollTo: 'contact'
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
      'navMenu--active': active === 'contact'
    }),
    style: menuStyle
  }, "Contact"));
};

var Footer = function Footer(props) {
  var onNav = props.onNav;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Stephanie Smith, Psy.D."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "801 Alhambra Blvd,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Suite 2B Sacramento, CA 95816"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "(916) 399-3615")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "link",
    onClick: function onClick() {
      return onNav({
        name: 'resources',
        scrollTo: 0
      });
    }
  }, "Additional Resources"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "link",
    onClick: function onClick() {
      return onNav({
        name: 'docs',
        scrollTo: 0
      });
    }
  }, "Client Documents"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "link",
    onClick: function onClick() {
      return onNav({
        name: 'fees',
        scrollTo: 0
      });
    }
  }, "Fees for Services")));
};

var Home = function Home(props) {
  var onNav = props.onNav;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "backdrop"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    id: "top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\"And the day came when the risk to remain tight as a bud was more painful than the risk it took to blossom.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, "- Anais Nin"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "meet card-2",
    id: "meet"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "profilePhoto card-1",
    src: "res/profile.jpg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bio"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "bioTitle"
  }, "Meet Dr. Stephanie Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "bioSubtitle"
  }, "Clinical Psychologist"), meetSteph)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "practiceAreas",
    id: "practice"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Practice Areas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areas"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaEatingConcerns"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Eating", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Concerns"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaLifestyle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Lifestyle", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Changes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaTransitions"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Life", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Transitions"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaRelationships"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Relationship", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Challenges"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaMedicalProblems"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Medical", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Problems"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaStress"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Stress", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Management")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "readMore"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "readMore button",
    onClick: function onClick() {
      return onNav({
        name: 'practice',
        scrollTo: 0
      });
    }
  }, "READ MORE"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contact card-2",
    id: "contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Change begins today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Request a consultation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "class": "highlight"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "class": "bar"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "class": "highlight"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "class": "bar"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "phone",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "class": "highlight"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "class": "bar"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Phone")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    type: "text",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "class": "highlight"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "class": "bar"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Message"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "readMore"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button"
  }, "SEND")))));
};
/** Home */

/** Pages */


var PracticeAreas = function PracticeAreas() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: "Practice Areas"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    body: practiceAreas
  }));
};

var Services = function Services() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: "Services"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    body: services
  }));
};

var Classes = function Classes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: 'Classes'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    body: classes
  }));
};

var ClientDocuments = function ClientDocuments() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: 'Client Documents'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    body: clientDocuments
  }));
};

var Resources = function Resources() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: 'Resources'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    body: resources
  }));
};

var Fees = function Fees() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: 'Fees'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    body: fees
  }));
};
/** Pages contents */


var meetSteph = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus elit eget orci pellentesque, nec finibus dolor laoreet. Etiam enim ex, sodales id tortor vel, vestibulum vehicula velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ipsum et mi semper aliquam. Vivamus eget gravida sem, et consectetur elit. Vivamus ut consequat magna. Maecenas in justo maximus, mattis nisl vitae, venenatis elit. Integer eu ipsum massa. Sed sagittis lacus vel cursus tempor. Cras id egestas turpis.");
var practiceAreas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Eating Concerns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Individuals noticing mindless, stress, emotional, or binge eating behaviors are welcome to consider both individual and class-based therapies with me. My approach to these concerns recognizes the complex role eating can play as a mechanism of coping for individual, family, and culturally systemic issues. We work together to acknowledge the fullness of this role as well as it's history, while honoring the desire that may exist to change. Through our work we can begin to develop new and healthier coping strategies as a natural outcome of increased awareness and self-compassion. I tailor my approach to the needs and style of the individual with whom I am working."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Lifestyle Changes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Most of us can relate to the running mental list of things we know we \"should\" be doing in order to be healthier. Maybe this is moving our bodies more, eating differently, improving  sleep habits, or disconnecting from technology. Maybe it could be these things plus many more! While certainly excellent habits, looking at a list of personal wellness \"to dos\" can be overwhelming. In fact, we often avoid thinking about these healthy living items because it can feel hopeless. Together we can create a plan of small steps to work towards connecting behavior changes with your deepest values. Things that may have felt forced in the past can become things we are eager for. I will leverage my training in Lifestyle Medicine to help set manageable and research supported aims to produce real improvements in your health."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Phase of Life Issues/Life Transitions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Though the phrase, \"the only thing constant is change\" is one familiar to many of us, this can be little comfort during the turmoil of a significant transition. Changes in life circumstances can impact us on every level of our being and external life. Seeking therapy during these times can be both anchor and guide light. I will support you to process the loss of how things have been. When you are ready, we will set consciously developed goals for the phase of life that you find yourself in now. We will work together to identify healthy core components of who you are evolving to be and center our attention to nurture this growth. There is no set timeline of how long an adjustment period lasts. I will help you to move into the next part of your life in the healthful ways, as quickly as is reasonable, and in complete respect for your own pace."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Relationship Challenges"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Romantic, family, social, and occupational relationships can all be sources of significant pleasure and consequently, significant pain. There are a multitude of reasons relationships can become troubled. Many of the roots of these reasons can be traced to communication clarity. While we cannot change other people, we can identify personal qualities in ourselves that we wish to change for the wellbeing of a current or future relationship. Working towards identifying these areas, creating mindful awareness around them, and making values based changes can provide both personal benefits and improvements to the relationship. We can work together to identify and optimize these changes in a compassionate and respectful environment while prioritizing effective and clear communication as the cornerstone to improved relationships."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Medical Problems"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There is no doubt that our physical wellbeing impacts our psychological wellbeing and vice versa. Whether you are looking for support in improving your management of a medical problem, handling the stress around it, or believe there may be lifestyle changes that will reverse the condition, I would be happy to support this aspect of your health. I am a trained health psychologist and work regularly with both chronic and acute medical conditions. I have personal and professional experience with the impacts physical health can have not only on oneself, but also on those around us. I believe support can make a substantive difference in managing a health concern as well as the emotional and social impacts of this. I will work with you to accept those realities that are unchanging as well as recognize opportunities for positive growth."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Exceptions to the above"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Due to the part time nature of my private practice, I am unfortunately unable at this time to work with those who have active and acute suicidal or homicidal thoughts or are engaging in self-harming behaviors. While it is not uncommon for these thoughts or behaviors to be part of the lives of those who fall into one or more of the categories above, I am unable to be available with the consistency or regularity that is needed to help support active and acute safety concerns. Should an active and acute safety concern occur during our work together, I will work together with you to find appropriate care that can meet your needs. It is likely that with stabilization there is potential to return to our work together if that is determined to be in your best interest. I am happy to discuss this in further detail and welcome any questions or concerns."));
var services = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I provide both individual therapy appointments as well as classes."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Telephone Consult"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As our first contact for either of these services I offer a complementary 15-minute phone consultation. This is an opportunity for us to connect about the issues that bring you into care, and to determine whether working together is the best fit for your needs. I can answer any questions that you may have about coming into care and set up your first appointment or class.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Initial Appointment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "An initial individual therapy appointment is a 60-minute appointment. During this appointment I will review your complete intake form with you to ensure that I have an appropriate understanding of some of your history, what brings you into care, and your goals for our work together. We will also use this appointment to create some initial goals for care and to set up our expectations for treatment.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Return Appointments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Return appointments are 50-minute appointments. During return appointments we will work together on your goals and I will support you through the process. We will regularly check in about the progress of care and make adjustments as needed to ensure that we are working effectively together.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Classes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Classes are 90 minutes in length. Due to space needed, classes are held at a nearby location separate from the main therapy office. More information about class and class content can be found under the \"Classes\" tab. Though classes take place over 4 sessions, the full fee must be paid in advance of the first session. After this payment, no additional charges are incurred for the remainder of the classes unless an additional service is requested or provided.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "TeleMental Health"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "On occasion it may be indicated for us to engage in tele-health either over the phone or through video communication. These services are offered to individuals only after they have been initially established in-person through at least one in-person appointment. Due to licensing requirements, I am unable to provide these services to anyone out-of-state or country at the time of service. There are a variety of platforms available for this service and, though convenient, it is important to be aware that they are not HIPAA compliant. Completing the Informed Consent form acknowledges your understanding of this and acceptance of the risk should we utilize this format of care.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "* You will be expected to pay for each session before/at the start of session, unless we agree otherwise. Payment may be made through cash, check, or HIPAA compliant application. Use of the HIPAA compliant application incurs an additional $5 charge. I am an \"out of network provider\" for insurance networks but will provide you a Superbill which you may use to request reimbursement.")));
var fees = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Please note that you will be expected to pay for each session before/at the start of session, unless we agree otherwise. Payment may be made through cash, check, or HIPAA compliant application. Use of the HIPAA compliant application incurs an additional $5 charge. I am an \"out of network provider\" for insurance networks but will provide you a Superbill which you may use to request reimbursement."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Telephone Consult"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "15-min initial telephone consult\u2014 free of charge")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Initial Appointment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "60-min initial individual appointment\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Return Appointments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "50-min return individual appointment\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Classes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "4-session (360-min) class series\u2014 $160")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "TeleMental Health"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "5 to 25 minutes\u2014 $75"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "26-50 minutes\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null)));
var classes = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Mood & Food"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Mood & Food is a class designed for individuals struggling with overeating, mindless eating, stress eating, emotional eating, shame around eating, or binge eating. The course is structured into 4 classes each lasting 90 minutes. The class centers on presented material though questions and participation are welcome and encouraged. Class materials also include handouts and at-home practice exercises. During the course of the classes we will cover topics including: what emotional eating is, cultural implications, environmental impacts, set point theory, emotional vs physical hunger, binge eating cycle, interpersonal dynamics around food, self-talk, behavior analysis & behavior change, mindful eating, loving limits, self-compassion, managing difficult emotions, habit formation, stages of change, and healthy eating guidelines. By the end of the class series participants will be able to recognize opportunities for, prepare for, and make positive changes in their relationships with themselves, food, and their environment."));
var resources = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The below are resources that I find to be clinically valuable. I have no affiliation with any of the individuals or entities indicated below. These resources are provided purely due to my perception of their clinical benefit. I receive no compensation of any kind for sharing these resources."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Webpages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://anxietycanada.com/",
  target: "_blank"
}, "Anxiety Canada"), " is an excellent web resource for evidence based information about anxiety. The website is written in clear language that is thoughtful, easy to understand, and helpful."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://maps.anxietycanada.com/courses/my-anxiety-plan-map-for-adults/",
  target: "_blank"
}, "My Anxiety Plan"), " is the online course associated with Anxiety Canada. It is a free course that provides excellent information in addition to practical tools and practices for managing anxiety and anxiety-based conditions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://brenebrown.com/",
  target: "_blank"
}, "Brene Brown"), " is an author, researcher, and speaker that I highly recommend. The link is to her main webpage. Below are specific resources of hers that I recommend."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://ggsc.berkeley.edu/",
  target: "_blank"
}, "The Greater Good Science Center"), "- Berkeley is a center of research and innovation focusing on making positivity and positive change accessible to all."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.edx.org/course/the-science-of-happiness-0",
  target: "_blank"
}, "The Science of Happiness"), " is the online course from the Greater Good Science Center. It is a free 8-week course that provides tools to happier experiences and greater meaning in life."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://ggia.berkeley.edu/",
  target: "_blank"
}, "Greater Good in Action"), " provides doable practices for making concrete and impactful positive changes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Videos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.ted.com/talks/brene_brown_on_vulnerability?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare",
  target: "_blank"
}, "The Power of Vulnerability- Brene Brown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.ted.com/talks/brene_brown_listening_to_shame?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare",
  target: "_blank"
}, "Listening to Shame- Brene Brown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://player.vimeo.com/video/261348709",
  target: "_blank"
}, "SuperSoul Sessions: The Anatomy of Trust- Brene Brown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://brenebrown.com/videos/",
  target: "_blank"
}, "Additional Brene Brown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://youtu.be/IvtZBUSplr4",
  target: "_blank"
}, "The Space Between Self-Esteem and Self-Compassion- Kristin Neff"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://self-compassion.org/videos/",
  target: "_blank"
}, "Additional Kristin Neff"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.ted.com/talks/sandra_aamodt_why_dieting_doesn_t_usually_work?utm_campaign=tedspread&utm_medium=referral&utm_source=tedcomshare",
  target: "_blank"
}, "Why Dieting Doesn't Usually Work- Sandra Aamodt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Audio Recordings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://centerformsc.org/practice-msc/guided-meditations-and-exercises/",
  target: "_blank"
}, "Mindful Self Compassion Meditations"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.uclahealth.org/marc/mindful-meditations",
  target: "_blank"
}, "UCLA Meditations (Also available in Spanish!)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Books"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://geneenroth.com/books/",
  target: "_blank"
}, "Women, Food, and God by Geneen Roth"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://brenebrown.com/books-audio/",
  target: "_blank"
}, "The Gifts of Imperfection by Brene Brown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://brenebrown.com/books-audio/",
  target: "_blank"
}, "Daring Greatly by Brene Brown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://brenebrown.com/books-audio/",
  target: "_blank"
}, "Rising Strong by Brene Brown"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null));
var clientDocuments = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The following forms are for your review. If we have scheduled an in-person appointment, please read carefully each of the forms below. Please print, complete, and bring the first three forms to our first appointment. We will review them together. If you would like for your health information to be shared with another individual or group, or would like me to gather information from them, please print, complete, and bring the Release of Information form to your next appointment."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "./res/Informed Consent.pdf",
  download: true,
  target: "_blank"
}, "Informed Consent")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "./res/Intake Form.pdf",
  download: true,
  target: "_blank"
}, "Intake Form")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "./res/Receipt of Forms.pdf",
  download: true,
  target: "_blank"
}, "Receipt of Forms")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "./res/Privacy Policy.pdf",
  download: true,
  target: "_blank"
}, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "./res/ROI.pdf",
  download: true,
  target: "_blank"
}, "Release of Information"))));

var Card1 = function Card1(props) {
  var title = props.title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-title"
  }, props.title) : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card card-1"
  }, title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, props.body));
};

var PageTitle = function PageTitle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-title",
    id: "top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, props.title));
};

var Drawer =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Drawer, _React$Component3);

  function Drawer() {
    _classCallCheck(this, Drawer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Drawer).apply(this, arguments));
  }

  _createClass(Drawer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleMeetClick = _this$props.handleMeetClick,
          handlePracticeClick = _this$props.handlePracticeClick,
          handleServicesClick = _this$props.handleServicesClick,
          handleClassesClick = _this$props.handleClassesClick,
          handleContactClick = _this$props.handleContactClick;
      var active = '';
      var menuStyle = {
        cursor: 'pointer',
        fontSize: 20,
        borderBottom: '1px solid currentColor',
        padding: 10
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "drawer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: handleMeetClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
          'navMenu--active': active === 'help'
        }),
        style: _objectSpread({}, menuStyle, {
          borderTop: '1px solid currentColor'
        })
      }, "Meet Dr. Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: handlePracticeClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
          'navMenu--active': active === 'help'
        }),
        style: menuStyle
      }, "Practice Areas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: handleServicesClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
          'navMenu--active': active === 'services'
        }),
        style: menuStyle
      }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: handleClassesClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
          'navMenu--active': active === 'classes'
        }),
        style: menuStyle
      }, "Classes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: handleContactClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
          'navMenu--active': active === 'contact'
        }),
        style: menuStyle
      }, "Contact"));
    }
  }]);

  return Drawer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Button =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Button, _React$Component4);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          to = _this$props2.to,
          text = _this$props2.text,
          onClick = _this$props2.onClick,
          classes = _this$props2.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button ".concat(classes),
        onClick: onClick
      }, text, this.props.children));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["App"]), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcz9lODVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3Jlcy9lYXRpbmdjb25jZXJucy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL2hlcm8uanBnIiwid2VicGFjazovLy8uL3Jlcy9saWZlc3R5bGUyLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbW9yZUNsYXNzZXMuanBnIiwid2VicGFjazovLy8uL3Jlcy9tb3JlUmVzb3VyY2VzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvcmVsYXRpb25zaGlwcy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3NlcnZpY2VzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvdHJhbnNpdGlvbnMuanBnIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInBhZ2UiLCJkb2NrIiwiY2xvc2VEcmF3ZXIiLCJjdXJyZW50Iiwic2hvd0RyYXdlciIsInN0YXRlIiwibmFtZSIsInNjcm9sbFRvIiwic2hvd0hhbWJ1cmdlciIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZW1wbGF0ZVN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmb250RmFtaWx5IiwiY29udGVudCIsImhhbmRsZU5hdiIsInRvZ2dsZURyYXdlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9keSIsImNsYXNzZXMiLCJjbiIsIm92ZXJsYXlDbGFzc2VzIiwib25EcmF3ZXJNZWV0Q2xpY2siLCJvbk5hdiIsIm9uRHJhd2VyUHJhY3RpY2VDbGljayIsIm9uRHJhd2VyU2VydmljZXNDbGljayIsIm9uRHJhd2VyQ29udGFjdENsaWNrIiwib25EcmF3ZXJDbGFzc2VzQ2xpY2siLCJoYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2siLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwidW5kZWZpbmVkIiwiYmVoYXZpb3IiLCJib2R5U3R5bGUiLCJtaW5IZWlnaHQiLCJuIiwicmVuZGVyRHJhd2VyIiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJpbmxpbmVTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsIm1lbnVTdHlsZSIsImN1cnNvciIsImFjdGl2ZSIsIm9wZW5EcmF3ZXIiLCJyZW5kZXJIYW1idXJnZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJGb290ZXIiLCJIb21lIiwibWVldFN0ZXBoIiwiUHJhY3RpY2VBcmVhcyIsInByYWN0aWNlQXJlYXMiLCJTZXJ2aWNlcyIsInNlcnZpY2VzIiwiQ2xhc3NlcyIsIkNsaWVudERvY3VtZW50cyIsImNsaWVudERvY3VtZW50cyIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIkZlZXMiLCJmZWVzIiwiQ2FyZDEiLCJ0aXRsZSIsImJvZHkiLCJQYWdlVGl0bGUiLCJEcmF3ZXIiLCJoYW5kbGVNZWV0Q2xpY2siLCJoYW5kbGVQcmFjdGljZUNsaWNrIiwiaGFuZGxlU2VydmljZXNDbGljayIsImhhbmRsZUNsYXNzZXNDbGljayIsImhhbmRsZUNvbnRhY3RDbGljayIsImZvbnRTaXplIiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsImJvcmRlclRvcCIsIkJ1dHRvbiIsInRvIiwidGV4dCIsIm9uQ2xpY2siLCJSZWFjdERPTSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkEsY0FBYyxtQkFBTyxDQUFDLGtIQUFzRDs7QUFFNUUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSyxLQUE2QjtBQUNsQztBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUUsTUFBTSxFQUVOO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkRELDJCQUEyQixtQkFBTyxDQUFDLHFHQUFnRDtBQUNuRjtBQUNBLGFBQWEsbUJBQU8sQ0FBQywyR0FBbUQ7QUFDeEUsc0NBQXNDLG1CQUFPLENBQUMsdUNBQWlCO0FBQy9ELHNDQUFzQyxtQkFBTyxDQUFDLDJEQUEyQjtBQUN6RSxzQ0FBc0MsbUJBQU8sQ0FBQyxtREFBdUI7QUFDckUsc0NBQXNDLG1CQUFPLENBQUMsNkRBQTRCO0FBQzFFLHNDQUFzQyxtQkFBTyxDQUFDLHlEQUEwQjtBQUN4RSxzQ0FBc0MsbUJBQU8sQ0FBQywrREFBNkI7QUFDM0Usc0NBQXNDLG1CQUFPLENBQUMscURBQXdCO0FBQ3RFLHNDQUFzQyxtQkFBTyxDQUFDLCtDQUFxQjtBQUNuRSxzQ0FBc0MsbUJBQU8sQ0FBQywyREFBMkI7QUFDekUsc0NBQXNDLG1CQUFPLENBQUMscURBQXdCO0FBQ3RFLHVDQUF1QyxtQkFBTyxDQUFDLHlEQUEwQjtBQUN6RTtBQUNBLGNBQWMsUUFBUyxNQUFNLG1CQUFtQixHQUFHLFFBQVEsdUJBQXVCLG9CQUFvQiwyQ0FBMkMsY0FBYyxHQUFHLFVBQVUsY0FBYyx1QkFBdUIsR0FBRyxjQUFjLG9CQUFvQix1QkFBdUIsR0FBRyxlQUFlLHFCQUFxQixvQkFBb0IsZ0JBQWdCLGdCQUFnQixHQUFHLFdBQVcsNERBQTRELGlDQUFpQywyQkFBMkIsa0JBQWtCLGdCQUFnQixHQUFHLGNBQWMscUJBQXFCLEdBQUcsbUJBQW1CLGdCQUFnQixrQkFBa0IsaUJBQWlCLDRCQUE0Qix3QkFBd0IsR0FBRyw4QkFBOEIsZUFBZSxHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyx1QkFBdUIsb0JBQW9CLG9CQUFvQixtQkFBbUIsR0FBRyxXQUFXLGtCQUFrQiw4QkFBOEIsa0JBQWtCLEtBQUssb0JBQW9CLGtCQUFrQixlQUFlLDRCQUE0Qix3QkFBd0IsR0FBRyxtQkFBbUIsZ0JBQWdCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxVQUFVLG1CQUFtQixpQkFBaUIsbUJBQW1CLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLFlBQVksMEJBQTBCLHlCQUF5QixNQUFNLDBDQUEwQyxXQUFXLDZCQUE2QixLQUFLLHlCQUF5QixrQkFBa0Isc0JBQXNCLEtBQUssR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQiw4QkFBOEIsa0JBQWtCLG9EQUFvRCxHQUFHLCtCQUErQixrQkFBa0Isb0JBQW9CLGtCQUFrQiwrQkFBK0IsNEJBQTRCLEdBQUcsaUNBQWlDLGtCQUFrQixvQkFBb0IscUJBQXFCLGtCQUFrQix3QkFBd0IsdUJBQXVCLDJCQUEyQiwwQkFBMEIsdUJBQXVCLEdBQUcsZ0JBQWdCLGdCQUFnQixrQkFBa0IsZ0NBQWdDLEdBQUcseUJBQXlCLGdFQUFnRSwrQkFBK0IsMkNBQTJDLEdBQUcsb0JBQW9CLGdFQUFnRSwyQkFBMkIsMkNBQTJDLEdBQUcsMEJBQTBCLGdFQUFnRSwrQkFBK0IsOEJBQThCLEdBQUcsd0JBQXdCLGdFQUFnRSwyQkFBMkIsMkNBQTJDLEdBQUcsaUJBQWlCLGdFQUFnRSwyQkFBMkIsMkNBQTJDLEdBQUcsc0JBQXNCLGdFQUFnRSwyQkFBMkIsb0NBQW9DLEdBQUcsZUFBZSxvQkFBb0Isa0JBQWtCLHNCQUFzQixHQUFHLG1CQUFtQixzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLHVCQUF1QixpQkFBaUIsa0JBQWtCLGlCQUFpQixHQUFHLGVBQWUsa0JBQWtCLDhCQUE4QixrQkFBa0IsR0FBRywwQkFBMEIsZUFBZSxrQkFBa0IsMkJBQTJCLGtCQUFrQixHQUFHLG9CQUFvQixlQUFlLHNEQUFzRCwyQkFBMkIsaUNBQWlDLEdBQUcsMENBQTBDLDBCQUEwQixrQkFBa0IsS0FBSyxzQkFBc0IsZ0JBQWdCLG9CQUFvQixLQUFLLG1DQUFtQyx5QkFBeUIsS0FBSyx1Q0FBdUMseUJBQXlCLEtBQUssR0FBRyxhQUFhLDBCQUEwQixpQkFBaUIsdUJBQXVCLGNBQWMsMEJBQTBCLHVDQUF1QyxvQkFBb0Isb0JBQW9CLHVCQUF1QixtRUFBbUUsNkJBQTZCLGtCQUFrQiw2RUFBNkUsR0FBRyxtQkFBbUIseUNBQXlDLCtFQUErRSxHQUFHLGVBQWUsa0JBQWtCLDRCQUE0QixHQUFHLGNBQWMsa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLG9EQUFvRCxHQUFHLGdCQUFnQiw4QkFBOEIsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLHNCQUFzQix5QkFBeUIsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxjQUFjLHVCQUF1Qix3QkFBd0IsR0FBRyxzQkFBc0Isb0JBQW9CLGdDQUFnQyxtQkFBbUIsaUJBQWlCLGlCQUFpQixtQ0FBbUMsNEJBQTRCLGlCQUFpQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxvQkFBb0Isa0JBQWtCLEdBQUcsZ0VBQWdFLGlCQUFpQixvQkFBb0Isd0JBQXdCLHVCQUF1Qix5QkFBeUIsY0FBYyxjQUFjLDhCQUE4QixtQ0FBbUMsc0NBQXNDLEdBQUcsK0RBQStELGVBQWUsb0JBQW9CLGlCQUFpQixzQkFBc0IsTUFBTSxjQUFjLGlCQUFpQixlQUFlLEdBQUcsaURBQWlELGVBQWUsb0JBQW9CLGlCQUFpQixHQUFHLHdGQUF3Rix1QkFBdUIsbUJBQW1CLGlCQUFpQixHQUFHLDhCQUE4QixnQkFBZ0IsZ0JBQWdCLGFBQWEsZ0JBQWdCLHVCQUF1QixzQkFBc0IsOEJBQThCLG1DQUFtQyxzQ0FBc0MsR0FBRyxpQkFBaUIsY0FBYyxHQUFHLGdCQUFnQixlQUFlLEdBQUcsMEVBQTBFLGVBQWUsR0FBRyxnRkFBZ0YsZUFBZSxHQUFHLHNFQUFzRSx1QkFBdUIsZ0JBQWdCLGlCQUFpQixhQUFhLFlBQVkseUJBQXlCLGlCQUFpQixHQUFHLGdEQUFnRCxrREFBa0QsK0NBQStDLDBDQUEwQyxHQUFHLG1EQUFtRCxrREFBa0QsK0NBQStDLDBDQUEwQyxHQUFHLDRFQUE0RSxVQUFVLHdCQUF3QixLQUFLLFVBQVUsZUFBZSw4QkFBOEIsS0FBSyxHQUFHLHNDQUFzQyxVQUFVLHdCQUF3QixLQUFLLFVBQVUsZUFBZSw4QkFBOEIsS0FBSyxHQUFHLGlDQUFpQyxVQUFVLHdCQUF3QixLQUFLLFVBQVUsZUFBZSw4QkFBOEIsS0FBSyxHQUFHLGVBQWUsa0JBQWtCLG1DQUFtQyx3QkFBd0IsOEJBQThCLGtCQUFrQixHQUFHLGlCQUFpQixpQkFBaUIsbUNBQW1DLGtCQUFrQiwyQkFBMkIsR0FBRyxzQkFBc0Isc0JBQXNCLG9CQUFvQixzQkFBc0IsR0FBRyw0QkFBNEIsNEJBQTRCLEdBQUcsb0JBQW9CLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsWUFBWSx3QkFBd0IsdUJBQXVCLHVCQUF1Qix5QkFBeUIsNEJBQTRCLEdBQUcsNkNBQTZDLHdCQUF3Qix5QkFBeUIsR0FBRyxxQkFBcUIsNEJBQTRCLEdBQUcsY0FBYywrRUFBK0UsR0FBRyxrQkFBa0IsK0VBQStFLEdBQUcsb0JBQW9CLGdGQUFnRixHQUFHLHFCQUFxQiw4Q0FBOEMsaUNBQWlDLDJCQUEyQixHQUFHLFdBQVcsNkNBQTZDLGlDQUFpQywyQkFBMkIsR0FBRyxlQUFlLGlEQUFpRCxpQ0FBaUMsMkJBQTJCLEdBQUcsY0FBYyxnREFBZ0QsaUNBQWlDLDJCQUEyQixHQUFHLGNBQWMsZ0RBQWdELGlDQUFpQywyQkFBMkIsR0FBRyxnQkFBZ0Isa0RBQWtELGlDQUFpQywyQkFBMkIsR0FBRyxtQkFBbUIsMkNBQTJDLG9CQUFvQixHQUFHLG9CQUFvQiw0QkFBNEIsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHNCQUFzQixHQUFHLHdCQUF3QixvQkFBb0IsMkNBQTJDLEdBQUcsV0FBVyx3QkFBd0IsdUJBQXVCLHFCQUFxQixrQkFBa0IsMkJBQTJCLHNCQUFzQixxQkFBcUIsR0FBRyxhQUFhLG1CQUFtQixHQUFHLGdCQUFnQixvQkFBb0Isd0JBQXdCLHNCQUFzQixrQkFBa0IsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3QixvQkFBb0Isa0JBQWtCLHFDQUFxQyxpQkFBaUIsR0FBRyxhQUFhLDZFQUE2RSxHQUFHLGFBQWEsNkVBQTZFLEdBQUcsYUFBYSwrRUFBK0UsR0FBRyxhQUFhLGlGQUFpRixHQUFHLGFBQWEsaUZBQWlGLEdBQUcsaUJBQWlCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLHVCQUF1QixvQkFBb0IsWUFBWSxXQUFXLGlCQUFpQixnQkFBZ0IsMENBQTBDLGtCQUFrQix3QkFBd0IsZ0NBQWdDLGdCQUFnQixHQUFHLHVCQUF1Qix1QkFBdUIsWUFBWSxXQUFXLGtCQUFrQixpQkFBaUIsK0JBQStCLGlCQUFpQix3Q0FBd0MsaUJBQWlCLG9CQUFvQixHQUFHLGFBQWEsWUFBWSxrQkFBa0IsMkJBQTJCLDhCQUE4QixnQ0FBZ0Msd0ZBQXdGLHFCQUFxQixHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixHQUFHLHdCQUF3QixpQkFBaUIsaUJBQWlCLEdBQUcsa0JBQWtCLGtCQUFrQixHQUFHLHNCQUFzQixZQUFZLHlCQUF5QixHQUFHLHVCQUF1QixvQkFBb0IsR0FBRywrQkFBK0IsaUNBQWlDLEdBQUcsV0FBVyxrQkFBa0IsR0FBRzs7Ozs7Ozs7Ozs7OztBQ2Z4NFg7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Q0FJQTs7QUFFTyxJQUFNQSxHQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNFLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsNkVBQU1BLEtBQU47O0FBRGlCLGdFQTBDUCxVQUFDQyxNQUFELEVBQVk7QUFDdEIsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLFlBQUksRUFBRUY7QUFBUixPQUFkOztBQUVBLFVBQUlBLE1BQU0sQ0FBQ0csSUFBWCxFQUFpQjtBQUNmLGNBQUtDLFdBQUw7QUFDRDtBQUNGLEtBaERrQjs7QUFBQSxtRUFrREosWUFBTTtBQUNuQixZQUFLSCxRQUFMLENBQWMsVUFBQ0ksT0FBRDtBQUFBLGVBQWM7QUFDMUJDLG9CQUFVLEVBQUUsQ0FBQ0QsT0FBTyxDQUFDQztBQURLLFNBQWQ7QUFBQSxPQUFkO0FBR0QsS0F0RGtCOztBQUFBLGtFQXdETCxZQUFNO0FBQ2xCLFlBQUtMLFFBQUwsQ0FBYztBQUNaSyxrQkFBVSxFQUFFO0FBREEsT0FBZDtBQUdELEtBNURrQjs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hMLFVBQUksRUFBRTtBQUNKTSxZQUFJLEVBQUUsTUFERjtBQUVKQyxnQkFBUSxFQUFFO0FBRk4sT0FESztBQUtYQyxtQkFBYSxFQUFFLEtBTEo7QUFNWEosZ0JBQVUsRUFBRTtBQU5ELEtBQWI7QUFGaUI7QUFVbEI7O0FBWEg7QUFBQTtBQUFBLHdDQWFzQjtBQUFBOztBQUNsQixVQUFNSyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBckI7O0FBQ0EsVUFBSUYsS0FBSyxHQUFHLEdBQVosRUFBaUI7QUFDZixhQUFLVixRQUFMLENBQWM7QUFBRUssb0JBQVUsRUFBRTtBQUFkLFNBQWQ7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLTCxRQUFMLENBQWM7QUFDWkssb0JBQVUsRUFBRSxLQURBO0FBRVpJLHVCQUFhLEVBQUU7QUFGSCxTQUFkO0FBSUQ7O0FBRURFLFlBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0QyxZQUFNSCxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBckI7QUFEc0MsWUFHcENILGFBSG9DLEdBSWxDLE1BQUksQ0FBQ0gsS0FKNkIsQ0FHcENHLGFBSG9DOztBQU10QyxZQUFJQyxLQUFLLEdBQUcsR0FBUixJQUFlRCxhQUFuQixFQUFrQztBQUNoQyxnQkFBSSxDQUFDVCxRQUFMLENBQWM7QUFDWkssc0JBQVUsRUFBRSxLQURBO0FBRVpJLHlCQUFhLEVBQUU7QUFGSCxXQUFkO0FBSUQsU0FMRCxNQUtPLElBQUlDLEtBQUssR0FBRyxHQUFSLElBQWUsQ0FBQ0QsYUFBcEIsRUFBbUM7QUFDeEMsZ0JBQUksQ0FBQ1QsUUFBTCxDQUFjO0FBQ1pTLHlCQUFhLEVBQUU7QUFESCxXQUFkO0FBR0Q7QUFDRixPQWhCRDtBQWlCRDtBQXpDSDtBQUFBO0FBQUEsNkJBK0RXO0FBQ1AsVUFBTUssYUFBYSxHQUFHO0FBQ3BCQyxlQUFPLEVBQUUsTUFEVztBQUVwQkMscUJBQWEsRUFBRSxRQUZLO0FBR3BCQyxrQkFBVSxFQUFFO0FBSFEsT0FBdEI7QUFETyxVQVFMaEIsSUFSSyxHQVNILEtBQUtLLEtBVEYsQ0FRTEwsSUFSSztBQUFBLFVBWUxNLElBWkssR0FhSE4sSUFiRyxDQVlMTSxJQVpLO0FBZVAsVUFBSVcsT0FBTyxHQUFHLHVFQUFkOztBQUVBLGNBQVFYLElBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRVcsaUJBQU8sR0FBRywyREFBQyxJQUFEO0FBQU0saUJBQUssRUFBRSxLQUFLQztBQUFsQixZQUFWO0FBQ0E7O0FBQ0YsYUFBSyxVQUFMO0FBQ0VELGlCQUFPLEdBQUcsMkRBQUMsYUFBRCxPQUFWO0FBQ0E7O0FBQ0YsYUFBSyxVQUFMO0FBQ0VBLGlCQUFPLEdBQUcsMkRBQUMsUUFBRCxPQUFWO0FBQ0E7O0FBQ0YsYUFBSyxTQUFMO0FBQ0VBLGlCQUFPLEdBQUcsMkRBQUMsT0FBRCxPQUFWO0FBQ0E7O0FBQ0YsYUFBSyxXQUFMO0FBQ0VBLGlCQUFPLEdBQUcsMkRBQUMsU0FBRCxPQUFWO0FBQ0E7O0FBQ0YsYUFBSyxNQUFMO0FBQ0VBLGlCQUFPLEdBQUcsMkRBQUMsZUFBRCxPQUFWO0FBQ0E7O0FBQ0YsYUFBSyxNQUFMO0FBQ0VBLGlCQUFPLEdBQUcsMkRBQUMsSUFBRCxPQUFWO0FBQ0E7QUFyQko7O0FBd0JBLGFBQ0U7QUFDRSxhQUFLLEVBQUVKO0FBRFQsU0FHRSwyREFBQyxNQUFEO0FBQ0UscUJBQWEsRUFBRSxLQUFLUixLQUFMLENBQVdHLGFBRDVCO0FBRUUsY0FBTSxFQUFFRixJQUZWO0FBR0UsYUFBSyxFQUFFLEtBQUtZLFNBSGQ7QUFJRSxrQkFBVSxFQUFFLEtBQUtDO0FBSm5CLFFBSEYsRUFTRSwyREFBQyxJQUFEO0FBQ0UsWUFBSSxFQUFFbkIsSUFEUjtBQUVFLG1CQUFXLEVBQUUsS0FBS0UsV0FGcEI7QUFHRSxrQkFBVSxFQUFFLEtBQUtHLEtBQUwsQ0FBV0QsVUFIekI7QUFJRSxhQUFLLEVBQUUsS0FBS2M7QUFKZCxTQU1HRCxPQU5ILENBVEYsRUFpQkUsMkRBQUMsTUFBRDtBQUNFLGFBQUssRUFBRSxLQUFLQztBQURkLFFBakJGLENBREY7QUF1QkQ7QUEvSEg7O0FBQUE7QUFBQSxFQUF5QkUsNENBQUssQ0FBQ0MsU0FBL0I7O0lBa0lNQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0ZBNEJ1QixZQUFNO0FBQy9CLGFBQUt6QixLQUFMLENBQVdLLFdBQVg7QUFDRCxLOztvRUFFYyxZQUFNO0FBQUEsVUFDWEUsVUFEVyxHQUNJLE9BQUtQLEtBRFQsQ0FDWE8sVUFEVztBQUduQixVQUFNbUIsT0FBTyxHQUFHQyxpREFBRSxDQUFDLGtCQUFELEVBQXFCO0FBQ3JDLGdCQUFRLENBQUNwQjtBQUQ0QixPQUFyQixDQUFsQjtBQUlBLFVBQU1xQixjQUFjLEdBQUdELGlEQUFFLENBQUMsZ0JBQUQsRUFBbUI7QUFDMUMsZ0JBQVEsQ0FBQ3BCO0FBRGlDLE9BQW5CLENBQXpCOztBQUlBLFVBQU1zQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsZUFBSzdCLEtBQUwsQ0FBVzhCLEtBQVgsQ0FBaUI7QUFBRXJCLGNBQUksRUFBRSxNQUFSO0FBQWdCQyxrQkFBUSxFQUFFLE1BQTFCO0FBQWtDTixjQUFJLEVBQUU7QUFBeEMsU0FBakI7QUFDRCxPQUZEOztBQUlBLFVBQU0yQixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbEMsZUFBSy9CLEtBQUwsQ0FBVzhCLEtBQVgsQ0FBaUI7QUFBRXJCLGNBQUksRUFBRSxNQUFSO0FBQWdCQyxrQkFBUSxFQUFFLFVBQTFCO0FBQXNDTixjQUFJLEVBQUU7QUFBNUMsU0FBakI7QUFDRCxPQUZEOztBQUlBLFVBQU00QixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbEMsZUFBS2hDLEtBQUwsQ0FBVzhCLEtBQVgsQ0FBaUI7QUFBRXJCLGNBQUksRUFBRSxVQUFSO0FBQW9CQyxrQkFBUSxFQUFFLENBQTlCO0FBQWlDTixjQUFJLEVBQUU7QUFBdkMsU0FBakI7QUFDRCxPQUZEOztBQUlBLFVBQU02QixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMsZUFBS2pDLEtBQUwsQ0FBVzhCLEtBQVgsQ0FBaUI7QUFBRXJCLGNBQUksRUFBRSxNQUFSO0FBQWdCQyxrQkFBUSxFQUFFLFNBQTFCO0FBQXFDTixjQUFJLEVBQUU7QUFBM0MsU0FBakI7QUFDRCxPQUZEOztBQUlBLFVBQU04QixvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMsZUFBS2xDLEtBQUwsQ0FBVzhCLEtBQVgsQ0FBaUI7QUFBRXJCLGNBQUksRUFBRSxTQUFSO0FBQW1CQyxrQkFBUSxFQUFFLENBQTdCO0FBQWdDTixjQUFJLEVBQUU7QUFBdEMsU0FBakI7QUFDRCxPQUZEOztBQUlBLGFBQ0UsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0U7QUFBSyxpQkFBUyxFQUFFc0I7QUFBaEIsU0FDRSwyREFBQyxNQUFEO0FBQ0UsdUJBQWUsRUFBRUcsaUJBRG5CO0FBRUUsMEJBQWtCLEVBQUVJLG9CQUZ0QjtBQUdFLDJCQUFtQixFQUFFRCxxQkFIdkI7QUFJRSwyQkFBbUIsRUFBRUQscUJBSnZCO0FBS0UsMEJBQWtCLEVBQUVHO0FBTHRCLFFBREYsQ0FERixFQVVFO0FBQUssaUJBQVMsRUFBRU4sY0FBaEI7QUFBZ0MsZUFBTyxFQUFFLE9BQUtPO0FBQTlDLFFBVkYsQ0FERjtBQWVELEs7Ozs7Ozs7d0NBNUVtQjtBQUFBLFVBRWhCaEMsSUFGZ0IsR0FHZCxLQUFLSCxLQUhTLENBRWhCRyxJQUZnQjs7QUFLbEIsVUFBSUEsSUFBSSxDQUFDTyxRQUFULEVBQW1CO0FBQ2pCMEIsa0JBQVUsQ0FBQztBQUFBLGlCQUFNQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLGNBQS9CLEVBQU47QUFBQSxTQUFELEVBQXdELENBQXhELENBQVY7QUFDRDtBQUNGOzs7eUNBRW9CO0FBQUEsVUFFakJwQyxJQUZpQixHQUdmLEtBQUtILEtBSFUsQ0FFakJHLElBRmlCOztBQUtuQixVQUFJQSxJQUFJLENBQUNPLFFBQUwsS0FBa0IsSUFBbEIsSUFBMEJQLElBQUksQ0FBQ08sUUFBTCxLQUFrQjhCLFNBQWhELEVBQTJEO0FBQ3pELFlBQUksT0FBT3JDLElBQUksQ0FBQ08sUUFBWixLQUF5QixRQUE3QixFQUF1QztBQUNyQzBCLG9CQUFVLENBQUM7QUFBQSxtQkFBTUMsUUFBUSxDQUFDQyxjQUFULENBQXdCbkMsSUFBSSxDQUFDTyxRQUE3QixFQUF1QzZCLGNBQXZDLENBQXNEO0FBQUVFLHNCQUFRLEVBQUU7QUFBWixhQUF0RCxDQUFOO0FBQUEsV0FBRCxFQUFzRixDQUF0RixDQUFWO0FBQ0Q7O0FBRUQsWUFBSSxPQUFPdEMsSUFBSSxDQUFDTyxRQUFaLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ3JDMEIsb0JBQVUsQ0FBQztBQUFBLG1CQUFNdkIsTUFBTSxDQUFDSCxRQUFQLENBQWdCLENBQWhCLEVBQW1CUCxJQUFJLENBQUNPLFFBQXhCLENBQU47QUFBQSxXQUFELEVBQTBDLENBQTFDLENBQVY7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFzRFE7QUFBQSxVQUVMUCxJQUZLLEdBR0gsS0FBS0gsS0FIRixDQUVMRyxJQUZLO0FBS1AsVUFBTXVDLFNBQVMsR0FBRztBQUNoQkMsaUJBQVM7QUFETyxPQUFsQjtBQUlBLFVBQU1DLENBQUMsR0FBR3pDLElBQUksQ0FBQ00sSUFBZjtBQUNBLFVBQU1pQixPQUFPLEdBQUdDLGlEQUFFLENBQUM7QUFDakIsd0JBQWdCaUIsQ0FBQyxLQUFLLFVBREw7QUFFakIseUJBQWlCQSxDQUFDLEtBQUssV0FGTjtBQUdqQix5QkFBaUJBLENBQUMsS0FBSyxNQUhOO0FBSWpCLG9CQUFZQSxDQUFDLEtBQUssTUFKRDtBQUtqQix1QkFBZUEsQ0FBQyxLQUFLLFNBTEo7QUFNakIsd0JBQWdCQSxDQUFDLEtBQUs7QUFOTCxPQUFELENBQWxCO0FBU0EsYUFDRTtBQUNFLGlCQUFTLEVBQUVsQixPQURiO0FBRUUsYUFBSyxFQUFFZ0I7QUFGVCxTQUlFLHdFQUVHLEtBQUtHLFlBQUwsRUFGSCxFQUdHLEtBQUs3QyxLQUFMLENBQVc4QyxRQUhkLENBSkYsQ0FERjtBQVlEOzs7O0VBL0dnQnZCLDRDQUFLLENBQUNDLFM7O0FBa0h6QixJQUFNdUIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQy9DLEtBQUQsRUFBVztBQUN4QixNQUFNZ0QsV0FBVyxHQUFHO0FBQ2xCQyxZQUFRLEVBQUUsT0FEUTtBQUVsQkMsUUFBSSxFQUFFLENBRlk7QUFHbEJDLE9BQUcsRUFBRSxDQUhhO0FBSWxCQyxVQUFNLEVBQUUsRUFKVTtBQUtsQnhDLFNBQUssRUFBRSxNQUxXO0FBTWxCSyxXQUFPLEVBQUUsTUFOUztBQU9sQm9DLGtCQUFjLEVBQUUsY0FQRTtBQVFsQkMsY0FBVSxFQUFFLFFBUk07QUFTbEJDLG1CQUFlLEVBQUUsU0FUQztBQVVsQkMsYUFBUyxFQUFFLHdEQVZPO0FBV2xCQyxVQUFNLEVBQUU7QUFYVSxHQUFwQjtBQWNBLE1BQU1DLFNBQVMsR0FBRztBQUNoQkMsVUFBTSxFQUFFO0FBRFEsR0FBbEI7QUFmd0IsTUFvQnRCQyxNQXBCc0IsR0F3QnBCNUQsS0F4Qm9CLENBb0J0QjRELE1BcEJzQjtBQUFBLE1BcUJ0QjlCLEtBckJzQixHQXdCcEI5QixLQXhCb0IsQ0FxQnRCOEIsS0FyQnNCO0FBQUEsTUFzQnRCbkIsYUF0QnNCLEdBd0JwQlgsS0F4Qm9CLENBc0J0QlcsYUF0QnNCO0FBQUEsTUF1QnRCa0QsVUF2QnNCLEdBd0JwQjdELEtBeEJvQixDQXVCdEI2RCxVQXZCc0I7O0FBMEJ4QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsV0FDRTtBQUNFLGVBQVMsRUFBQyw2QkFEWjtBQUVFLFdBQUssRUFBRTtBQUFFQyxrQkFBVSxFQUFFO0FBQWQsT0FGVDtBQUdFLGFBQU8sRUFBRUY7QUFIWCxPQUtFLHlFQUNFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBMkIsV0FBSyxFQUFDLElBQWpDO0FBQXNDLFlBQU0sRUFBQyxJQUE3QztBQUFrRCxhQUFPLEVBQUM7QUFBMUQsT0FBc0U7QUFBTSxPQUFDLEVBQUMsZUFBUjtBQUF3QixVQUFJLEVBQUM7QUFBN0IsTUFBdEUsRUFBNEc7QUFBTSxVQUFJLEVBQUMsY0FBWDtBQUEwQixPQUFDLEVBQUM7QUFBNUIsTUFBNUcsQ0FERixDQUxGLENBREY7QUFXRCxHQVpEOztBQWNBLE1BQUlsRCxhQUFKLEVBQW1CO0FBQ2pCcUMsZUFBVyxDQUFDSyxjQUFaLEdBQTZCLGVBQTdCO0FBQ0EsV0FDRTtBQUNFLFdBQUssRUFBRUw7QUFEVCxPQUdHYyxlQUFlLEVBSGxCLEVBSUU7QUFDRSxhQUFPLEVBQUU7QUFBQSxlQUFNaEMsS0FBSyxDQUFDO0FBQUVyQixjQUFJLEVBQUUsTUFBUjtBQUFnQkMsa0JBQVEsRUFBRTtBQUExQixTQUFELENBQVg7QUFBQSxPQURYO0FBRUUsZUFBUyxFQUFFaUIsaURBQUUsQ0FBQyxTQUFELEVBQVksV0FBWixFQUF5QixNQUF6QixFQUFpQztBQUFFLDJCQUFtQmlDLE1BQU0sS0FBSztBQUFoQyxPQUFqQyxDQUZmO0FBR0UsV0FBSyxvQkFBT0YsU0FBUDtBQUFrQk0sbUJBQVcsRUFBRTtBQUEvQjtBQUhQLGlDQUpGLENBREY7QUFjRDs7QUFFRCxTQUNFO0FBQ0UsU0FBSyxFQUFFaEI7QUFEVCxLQUdFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTWxCLEtBQUssQ0FBQztBQUFFckIsWUFBSSxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFRLEVBQUU7QUFBMUIsT0FBRCxDQUFYO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBRWlCLGlEQUFFLENBQUMsU0FBRCxFQUFZLFdBQVosRUFBeUIsTUFBekIsRUFBaUM7QUFBRSx5QkFBbUJpQyxNQUFNLEtBQUs7QUFBaEMsS0FBakMsQ0FGZjtBQUdFLFNBQUssRUFBRUY7QUFIVCwrQkFIRixFQVVFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTTVCLEtBQUssQ0FBQztBQUFFckIsWUFBSSxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFRLEVBQUU7QUFBMUIsT0FBRCxDQUFYO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBRWlCLGlEQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0I7QUFBRSx5QkFBbUJpQyxNQUFNLEtBQUs7QUFBaEMsS0FBcEIsQ0FGZjtBQUdFLFNBQUssRUFBRUY7QUFIVCxzQkFWRixFQWlCRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU01QixLQUFLLENBQUM7QUFBRXJCLFlBQUksRUFBRSxNQUFSO0FBQWdCQyxnQkFBUSxFQUFFO0FBQTFCLE9BQUQsQ0FBWDtBQUFBLEtBRFg7QUFFRSxhQUFTLEVBQUVpQixpREFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CO0FBQUUseUJBQW1CaUMsTUFBTSxLQUFLO0FBQWhDLEtBQXBCLENBRmY7QUFHRSxTQUFLLEVBQUVGO0FBSFQsc0JBakJGLEVBd0JFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTTVCLEtBQUssQ0FBQztBQUFFckIsWUFBSSxFQUFFLFVBQVI7QUFBb0JDLGdCQUFRLEVBQUU7QUFBOUIsT0FBRCxDQUFYO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBRWlCLGlEQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0I7QUFBRSx5QkFBbUJpQyxNQUFNLEtBQUs7QUFBaEMsS0FBcEIsQ0FGZjtBQUdFLFNBQUssRUFBRUY7QUFIVCxnQkF4QkYsRUErQkU7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNNUIsS0FBSyxDQUFDO0FBQUVyQixZQUFJLEVBQUUsU0FBUjtBQUFtQkMsZ0JBQVEsRUFBRTtBQUE3QixPQUFELENBQVg7QUFBQSxLQURYO0FBRUUsYUFBUyxFQUFFaUIsaURBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQjtBQUFFLHlCQUFtQmlDLE1BQU0sS0FBSztBQUFoQyxLQUFwQixDQUZmO0FBR0UsU0FBSyxFQUFFRjtBQUhULGVBL0JGLEVBc0NFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTTVCLEtBQUssQ0FBQztBQUFFckIsWUFBSSxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFRLEVBQUU7QUFBMUIsT0FBRCxDQUFYO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBRWlCLGlEQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0I7QUFBRSx5QkFBbUJpQyxNQUFNLEtBQUs7QUFBaEMsS0FBcEIsQ0FGZjtBQUdFLFNBQUssRUFBRUY7QUFIVCxlQXRDRixDQURGO0FBZ0RELENBMUdEOztBQTRHQSxJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDakUsS0FBRCxFQUFXO0FBQUEsTUFFdEI4QixLQUZzQixHQUdwQjlCLEtBSG9CLENBRXRCOEIsS0FGc0I7QUFJeEIsU0FDRTtBQUNFLGFBQVMsRUFBQztBQURaLEtBR0Usd0VBQ0Usa0dBREYsRUFLRSw4RkFDb0Isc0VBRHBCLGtDQUxGLEVBU0UseUZBVEYsQ0FIRixFQWlCRSx3RUFDRTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1BLEtBQUssQ0FBQztBQUFFckIsWUFBSSxFQUFFLFdBQVI7QUFBcUJDLGdCQUFRLEVBQUU7QUFBL0IsT0FBRCxDQUFYO0FBQUE7QUFEWCw0QkFERixFQUlFO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTW9CLEtBQUssQ0FBQztBQUFFckIsWUFBSSxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFRLEVBQUU7QUFBMUIsT0FBRCxDQUFYO0FBQUE7QUFEWCx3QkFKRixFQU1FO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTW9CLEtBQUssQ0FBQztBQUFFckIsWUFBSSxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFRLEVBQUU7QUFBMUIsT0FBRCxDQUFYO0FBQUE7QUFEWCx5QkFORixDQWpCRixDQURGO0FBOEJELENBbENEOztBQXFDQSxJQUFNd0QsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ2xFLEtBQUQsRUFBVztBQUFBLE1BRXBCOEIsS0FGb0IsR0FHbEI5QixLQUhrQixDQUVwQjhCLEtBRm9CO0FBSXRCLFNBQ0Usd0VBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUF5QixNQUFFLEVBQUM7QUFBNUIsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsK0VBQ0Usd0xBREYsRUFJRSx5RkFKRixDQURGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQTZCLE1BQUUsRUFBQztBQUFoQyxLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFxQyxPQUFHLEVBQUM7QUFBekMsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUksYUFBUyxFQUFDO0FBQWQsZ0NBREYsRUFJRTtBQUFJLGFBQVMsRUFBQztBQUFkLDZCQUpGLEVBT0dxQyxTQVBILENBSkYsQ0FWRixFQXdCRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLE1BQUUsRUFBQztBQUFsQyxLQUNFLHdGQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Usa0ZBQ1Esc0VBRFIsY0FERixDQUhGLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLHFGQUNXLHNFQURYLGFBREYsQ0FIRixDQVZGLEVBbUJFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsZ0ZBQ00sc0VBRE4saUJBREYsQ0FIRixDQW5CRixFQTRCRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLHdGQUNjLHNFQURkLGdCQURGLENBSEYsQ0E1QkYsRUFxQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxtRkFDUyxzRUFEVCxjQURGLENBSEYsQ0FyQ0YsRUE4Q0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxrRkFDUSxzRUFEUixnQkFERixDQUhGLENBOUNGLENBRkYsRUEwREU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQVEsYUFBUyxFQUFDLGlCQUFsQjtBQUFvQyxXQUFPLEVBQUU7QUFBQSxhQUFNckMsS0FBSyxDQUFDO0FBQUVyQixZQUFJLEVBQUUsVUFBUjtBQUFvQkMsZ0JBQVEsRUFBRTtBQUE5QixPQUFELENBQVg7QUFBQTtBQUE3QyxpQkFERixDQTFERixDQXhCRixFQThIRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxNQUFFLEVBQUM7QUFBbkMsS0FDRSw2RkFERixFQUVFLGdHQUZGLEVBR0UseUVBQ0U7QUFBSyxhQUFNO0FBQVgsS0FDRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFlBQVE7QUFBM0IsSUFERixFQUVFO0FBQU0sYUFBTTtBQUFaLElBRkYsRUFHRTtBQUFNLGFBQU07QUFBWixJQUhGLEVBSUUsaUZBSkYsQ0FERixFQU9FO0FBQUssYUFBTTtBQUFYLEtBQ0U7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixZQUFRO0FBQTVCLElBREYsRUFFRTtBQUFNLGFBQU07QUFBWixJQUZGLEVBR0U7QUFBTSxhQUFNO0FBQVosSUFIRixFQUlFLGtGQUpGLENBUEYsRUFhRTtBQUFLLGFBQU07QUFBWCxLQUNFO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBUTtBQUE1QixJQURGLEVBRUU7QUFBTSxhQUFNO0FBQVosSUFGRixFQUdFO0FBQU0sYUFBTTtBQUFaLElBSEYsRUFJRSxrRkFKRixDQWJGLEVBbUJFO0FBQUssYUFBTTtBQUFYLEtBQ0U7QUFBVSxRQUFJLEVBQUMsTUFBZjtBQUFzQixZQUFRO0FBQTlCLElBREYsRUFFRTtBQUFNLGFBQU07QUFBWixJQUZGLEVBR0U7QUFBTSxhQUFNO0FBQVosSUFIRixFQUlFLG9GQUpGLENBbkJGLENBSEYsRUE2QkU7QUFBSyxhQUFNO0FBQVgsS0FDRTtBQUFRLGFBQVMsRUFBQztBQUFsQixZQURGLENBN0JGLENBOUhGLENBSkYsQ0FERjtBQXVLRCxDQTNLRDtBQTZLQTs7QUFHQTs7O0FBRUEsSUFBTTBELGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixTQUNFLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLDJEQUFDLFNBQUQ7QUFDRSxTQUFLLEVBQUM7QUFEUixJQURGLEVBSUUsMkRBQUMsS0FBRDtBQUNFLFFBQUksRUFBRUM7QUFEUixJQUpGLENBREY7QUFVRCxDQVhEOztBQWFBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsU0FDRSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRSwyREFBQyxTQUFEO0FBQ0UsU0FBSyxFQUFDO0FBRFIsSUFERixFQUlFLDJEQUFDLEtBQUQ7QUFDRSxRQUFJLEVBQUVDO0FBRFIsSUFKRixDQURGO0FBVUQsQ0FYRDs7QUFhQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLFNBQ0UsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsMkRBQUMsU0FBRDtBQUNFLFNBQUssRUFBRTtBQURULElBREYsRUFJRSwyREFBQyxLQUFEO0FBQ0UsUUFBSSxFQUFFOUM7QUFEUixJQUpGLENBREY7QUFXRCxDQVpEOztBQWNBLElBQU0rQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsU0FDRSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRSwyREFBQyxTQUFEO0FBQ0UsU0FBSyxFQUFFO0FBRFQsSUFERixFQUlFLDJEQUFDLEtBQUQ7QUFDRSxRQUFJLEVBQUVDO0FBRFIsSUFKRixDQURGO0FBVUQsQ0FYRDs7QUFhQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQ0UsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsMkRBQUMsU0FBRDtBQUNFLFNBQUssRUFBRTtBQURULElBREYsRUFJRSwyREFBQyxLQUFEO0FBQ0UsUUFBSSxFQUFFQztBQURSLElBSkYsQ0FERjtBQVdELENBWkQ7O0FBY0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixTQUNFLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLDJEQUFDLFNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFEVCxJQURGLEVBSUUsMkRBQUMsS0FBRDtBQUNFLFFBQUksRUFBRUM7QUFEUixJQUpGLENBREY7QUFXRCxDQVpEO0FBZ0JBOzs7QUFFQSxJQUFNWCxTQUFTLEdBQ2IsdW1CQURGO0FBTUEsSUFBTUUsYUFBYSxHQUNqQiwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRSx5RkFERixFQUVFLHF1QkFGRixFQU1FLDJGQU5GLEVBUUUsKzNCQVJGLEVBWUUsK0dBWkYsRUFhRSwrNUJBYkYsRUFpQkUsaUdBakJGLEVBa0JFLHk0QkFsQkYsRUFxQkUsMEZBckJGLEVBc0JFLGs1QkF0QkYsRUF5QkUsaUdBekJGLEVBMEJFLGc2QkExQkYsQ0FERjtBQWlDQSxJQUFNRSxRQUFRLEdBQ1osMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsMklBREYsRUFJRSwyRkFKRixFQUtFLCtiQUN1WCxzRUFEdlgsQ0FMRixFQVNFLDZGQVRGLEVBVUUsMmRBRUUsc0VBRkYsQ0FWRixFQWVFLDZGQWZGLEVBZ0JFLDZXQUVFLHNFQUZGLENBaEJGLEVBcUJFLGlGQXJCRixFQXNCRSx5aEJBRUUsc0VBRkYsQ0F0QkYsRUEyQkUsMkZBM0JGLEVBNEJFLGd2QkFFRSxzRUFGRixDQTVCRixFQWtDRSxzRUFsQ0YsRUFtQ0Usc0VBQ0UsMGNBREYsQ0FuQ0YsQ0FERjtBQTRDQSxJQUFNTyxJQUFJLEdBQ1IsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UseWRBREYsRUFJRSwyRkFKRixFQUtFLHNFQUNFLDhIQURGLENBTEYsRUFRRSw2RkFSRixFQVNFLHNFQUNFLHlIQURGLENBVEYsRUFZRSw2RkFaRixFQWFFLHNFQUNFLHdIQURGLENBYkYsRUFnQkUsaUZBaEJGLEVBaUJFLHNFQUNFLG9IQURGLENBakJGLEVBb0JFLDJGQXBCRixFQXFCRSxzRUFDRSxrR0FERixFQUNvQyxzRUFEcEMsRUFFRSxpR0FGRixDQXJCRixFQXlCRSxzRUF6QkYsRUEwQkUsc0VBQ0UscUVBREYsQ0ExQkYsQ0FERjtBQWtDQSxJQUFNcEQsT0FBTyxHQUNYLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLHFGQURGLEVBSUUsK2tDQUpGLENBREY7QUFXQSxJQUFNa0QsU0FBUyxHQUNiLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLDZXQURGLEVBSUUsa0ZBSkYsRUFLRSxzRUFDRTtBQUFHLE1BQUksRUFBQyw0QkFBUjtBQUFxQyxRQUFNLEVBQUM7QUFBNUMsb0JBREYsOEtBTEYsRUFRRSxzRUFDRTtBQUFHLE1BQUksRUFBQyx3RUFBUjtBQUFpRixRQUFNLEVBQUM7QUFBeEYscUJBREYsa05BUkYsRUFXRSxzRUFDRTtBQUFHLE1BQUksRUFBQyx5QkFBUjtBQUFrQyxRQUFNLEVBQUM7QUFBekMsaUJBREYsNEpBWEYsRUFjRSxzRUFDRTtBQUFHLE1BQUksRUFBQyw0QkFBUjtBQUFxQyxRQUFNLEVBQUM7QUFBNUMscUNBREYsMkhBZEYsRUFpQkUsc0VBQ0U7QUFBRyxNQUFJLEVBQUMsdURBQVI7QUFBZ0UsUUFBTSxFQUFDO0FBQXZFLDhCQURGLG1LQWpCRixFQW9CRSxzRUFDRTtBQUFHLE1BQUksRUFBQyw0QkFBUjtBQUFxQyxRQUFNLEVBQUM7QUFBNUMsNEJBREYsa0ZBcEJGLEVBd0JFLGdGQXhCRixFQTBCRTtBQUFHLE1BQUksRUFBQywwSEFBUjtBQUFtSSxRQUFNLEVBQUM7QUFBMUksNkNBMUJGLEVBMEJnTSxzRUExQmhNLEVBMkJFO0FBQUcsTUFBSSxFQUFDLDRIQUFSO0FBQXFJLFFBQU0sRUFBQztBQUE1SSxxQ0EzQkYsRUEyQjBMLHNFQTNCMUwsRUE0QkU7QUFBRyxNQUFJLEVBQUMsMENBQVI7QUFBbUQsUUFBTSxFQUFDO0FBQTFELDJEQTVCRixFQTRCOEgsc0VBNUI5SCxFQTZCRTtBQUFHLE1BQUksRUFBQyxnQ0FBUjtBQUF5QyxRQUFNLEVBQUM7QUFBaEQsNEJBN0JGLEVBNkJxRixzRUE3QnJGLEVBOEJFO0FBQUcsTUFBSSxFQUFDLDhCQUFSO0FBQXVDLFFBQU0sRUFBQztBQUE5QyxxRUE5QkYsRUE4QjRILHNFQTlCNUgsRUErQkU7QUFBRyxNQUFJLEVBQUMscUNBQVI7QUFBOEMsUUFBTSxFQUFDO0FBQXJELDZCQS9CRixFQStCMkYsc0VBL0IzRixFQWdDRTtBQUFHLE1BQUksRUFBQyw0SUFBUjtBQUFxSixRQUFNLEVBQUM7QUFBNUoscURBaENGLEVBZ0MwTixzRUFoQzFOLEVBa0NFLDBGQWxDRixFQW9DRTtBQUFHLE1BQUksRUFBQyx5RUFBUjtBQUFrRixRQUFNLEVBQUM7QUFBekYseUNBcENGLEVBb0MySSxzRUFwQzNJLEVBcUNFO0FBQUcsTUFBSSxFQUFDLHFEQUFSO0FBQThELFFBQU0sRUFBQztBQUFyRSxtREFyQ0YsRUFxQ2lJLHNFQXJDakksRUF1Q0UsK0VBdkNGLEVBd0NFO0FBQUcsTUFBSSxFQUFDLCtCQUFSO0FBQXdDLFFBQU0sRUFBQztBQUEvQyx5Q0F4Q0YsRUF3Q2lHLHNFQXhDakcsRUF5Q0U7QUFBRyxNQUFJLEVBQUMscUNBQVI7QUFBOEMsUUFBTSxFQUFDO0FBQXJELDhDQXpDRixFQXlDNEcsc0VBekM1RyxFQTBDRTtBQUFHLE1BQUksRUFBQyxxQ0FBUjtBQUE4QyxRQUFNLEVBQUM7QUFBckQsbUNBMUNGLEVBMENpRyxzRUExQ2pHLEVBMkNFO0FBQUcsTUFBSSxFQUFDLHFDQUFSO0FBQThDLFFBQU0sRUFBQztBQUFyRCxrQ0EzQ0YsRUEyQ2dHLHNFQTNDaEcsQ0FERjtBQWdEQSxJQUFNRixlQUFlLEdBQ25CLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLDBpQkFERixFQUlFLHVFQUNFLHVFQUNFO0FBQUcsTUFBSSxFQUFDLDRCQUFSO0FBQXFDLFVBQVEsTUFBN0M7QUFBOEMsUUFBTSxFQUFDO0FBQXJELHNCQURGLENBREYsRUFJRSx1RUFDRTtBQUFHLE1BQUksRUFBQyx1QkFBUjtBQUFnQyxVQUFRLE1BQXhDO0FBQXlDLFFBQU0sRUFBQztBQUFoRCxpQkFERixDQUpGLEVBT0UsdUVBQ0U7QUFBRyxNQUFJLEVBQUMsNEJBQVI7QUFBcUMsVUFBUSxNQUE3QztBQUE4QyxRQUFNLEVBQUM7QUFBckQsc0JBREYsQ0FQRixFQVVFLHVFQUNFO0FBQUcsTUFBSSxFQUFDLDBCQUFSO0FBQW1DLFVBQVEsTUFBM0M7QUFBNEMsUUFBTSxFQUFDO0FBQW5ELG9CQURGLENBVkYsRUFhRSx1RUFDRTtBQUFHLE1BQUksRUFBQyxlQUFSO0FBQXdCLFVBQVEsTUFBaEM7QUFBaUMsUUFBTSxFQUFDO0FBQXhDLDRCQURGLENBYkYsQ0FKRixDQURGOztBQTRCQSxJQUFNSyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDL0UsS0FBRCxFQUFXO0FBQ3ZCLE1BQU1nRixLQUFLLEdBQUdoRixLQUFLLENBQUNnRixLQUFOLEdBRVY7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHaEYsS0FBSyxDQUFDZ0YsS0FEVCxDQUZVLEdBS1J4QyxTQUxOO0FBT0EsU0FDRTtBQUNFLGFBQVMsRUFBQztBQURaLEtBR0d3QyxLQUhILEVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHaEYsS0FBSyxDQUFDaUYsSUFEVCxDQUpGLENBREY7QUFVRCxDQWxCRDs7QUF3QkEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2xGLEtBQUQsRUFBVztBQUMzQixTQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBNEIsTUFBRSxFQUFDO0FBQS9CLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHQSxLQUFLLENBQUNnRixLQURULENBREYsQ0FERjtBQU9ELENBUkQ7O0lBV01HLE07Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSx3QkFPSCxLQUFLbkYsS0FQRjtBQUFBLFVBRUxvRixlQUZLLGVBRUxBLGVBRks7QUFBQSxVQUdMQyxtQkFISyxlQUdMQSxtQkFISztBQUFBLFVBSUxDLG1CQUpLLGVBSUxBLG1CQUpLO0FBQUEsVUFLTEMsa0JBTEssZUFLTEEsa0JBTEs7QUFBQSxVQU1MQyxrQkFOSyxlQU1MQSxrQkFOSztBQVNQLFVBQU01QixNQUFNLEdBQUcsRUFBZjtBQUVBLFVBQU1GLFNBQVMsR0FBRztBQUNoQkMsY0FBTSxFQUFFLFNBRFE7QUFFaEI4QixnQkFBUSxFQUFFLEVBRk07QUFHaEJDLG9CQUFZLEVBQUUsd0JBSEU7QUFJaEJDLGVBQU8sRUFBRTtBQUpPLE9BQWxCO0FBT0EsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNBO0FBQ0UsZUFBTyxFQUFFUCxlQURYO0FBRUUsaUJBQVMsRUFBRXpELGlEQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0I7QUFBRSw2QkFBbUJpQyxNQUFNLEtBQUs7QUFBaEMsU0FBcEIsQ0FGZjtBQUdFLGFBQUssb0JBQU1GLFNBQU47QUFBaUJrQyxtQkFBUyxFQUFFO0FBQTVCO0FBSFAsMEJBREEsRUFRQTtBQUNFLGVBQU8sRUFBRVAsbUJBRFg7QUFFRSxpQkFBUyxFQUFFMUQsaURBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQjtBQUFFLDZCQUFtQmlDLE1BQU0sS0FBSztBQUFoQyxTQUFwQixDQUZmO0FBR0UsYUFBSyxFQUFFRjtBQUhULDBCQVJBLEVBZUE7QUFDRSxlQUFPLEVBQUU0QixtQkFEWDtBQUVFLGlCQUFTLEVBQUUzRCxpREFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CO0FBQUUsNkJBQW1CaUMsTUFBTSxLQUFLO0FBQWhDLFNBQXBCLENBRmY7QUFHRSxhQUFLLEVBQUVGO0FBSFQsb0JBZkEsRUFzQkE7QUFDRSxlQUFPLEVBQUU2QixrQkFEWDtBQUVFLGlCQUFTLEVBQUU1RCxpREFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CO0FBQUUsNkJBQW1CaUMsTUFBTSxLQUFLO0FBQWhDLFNBQXBCLENBRmY7QUFHRSxhQUFLLEVBQUVGO0FBSFQsbUJBdEJBLEVBNkJBO0FBQ0UsZUFBTyxFQUFFOEIsa0JBRFg7QUFFRSxpQkFBUyxFQUFFN0QsaURBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQjtBQUFFLDZCQUFtQmlDLE1BQU0sS0FBSztBQUFoQyxTQUFwQixDQUZmO0FBR0UsYUFBSyxFQUFFRjtBQUhULG1CQTdCQSxDQURGO0FBdUNEOzs7O0VBMURrQm5DLDRDQUFLLENBQUNDLFM7O0FBNkRwQixJQUFNcUUsTUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUNXO0FBQUEseUJBTUgsS0FBSzdGLEtBTkY7QUFBQSxVQUVMOEYsRUFGSyxnQkFFTEEsRUFGSztBQUFBLFVBR0xDLElBSEssZ0JBR0xBLElBSEs7QUFBQSxVQUlMQyxPQUpLLGdCQUlMQSxPQUpLO0FBQUEsVUFLTHRFLE9BTEssZ0JBS0xBLE9BTEs7QUFRUCxhQUNFLHdFQUVFO0FBQ0UsaUJBQVMsbUJBQVlBLE9BQVosQ0FEWDtBQUVFLGVBQU8sRUFBRXNFO0FBRlgsU0FJR0QsSUFKSCxFQUtHLEtBQUsvRixLQUFMLENBQVc4QyxRQUxkLENBRkYsQ0FERjtBQVlEO0FBckJIOztBQUFBO0FBQUEsRUFBNEJ2Qiw0Q0FBSyxDQUFDQyxTQUFsQyxFOzs7Ozs7Ozs7Ozs7QUM5N0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBeUUsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQjNFLDRDQUFLLENBQUM0RSxhQUFOLENBQW9CcEcsd0NBQXBCLENBQWhCLEVBQTBDc0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgZ2V0VXJsID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvaGVyby5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL2VhdGluZ2NvbmNlcm5zLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvbGlmZXN0eWxlMi5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL21lZGljYWxwcm9ibGVtcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3JlbGF0aW9uc2hpcHMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zdHJlc3NtYW5hZ2VtZW50LmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX182X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvdHJhbnNpdGlvbnMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zZXJ2aWNlcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX185X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvbW9yZUNsYXNzZXMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzEwX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvbW9yZVJlc291cmNlcy5qcGdcIikpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXZNZW51IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJhY2tkcm9wIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVybyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLmhlcm8tY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uaGVyby1jb250ZW50IGgxIHtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG5ibG9ja3F1b3RlIGZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLm1lZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVBRTU7XFxuICBwYWRkaW5nOiAzMHB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4ucHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2ZpbGVQaG90byB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBtaW4td2lkdGg6IDA7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5iaW8ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmJpbyAuYmlvU3VidGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYmlvIHAge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgLyogcGFkZGluZzogMHB4IDMwcHg7ICovXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAubWVldCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYmlvLFxcbiAgLnByb2ZpbGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ucHJhY3RpY2VBcmVhcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxufVxcblxcblxcblxcbi5wcmFjdGljZUFyZWFzIC5hcmVhcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcmFjdGljZUFyZWFzIC5hcmVhcz4uYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDI5MHB4O1xcbiAgbWF4LXdpZHRoOiAyOTBweDtcXG4gIGhlaWdodDogMzIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMCAzMHB4IDMwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFyZWFJbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5hcmVhRWF0aW5nQ29uY2VybnMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxNDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b20gLTUwcHg7XFxufVxcblxcbi5hcmVhTGlmZXN0eWxlIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b20gLTY1cHg7XFxufVxcblxcbi5hcmVhTWVkaWNhbFByb2JsZW1zIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTQwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxufVxcblxcbi5hcmVhUmVsYXRpb25zaGlwcyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC04MHB4O1xcbn1cXG5cXG4uYXJlYVN0cmVzcyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC04MHB4O1xcbn1cXG5cXG4uYXJlYVRyYW5zaXRpb25zIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAtMjBweDtcXG59XFxuXFxuLmFyZWFUZXh0IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBtYXgtaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLmFyZWFUZXh0IGRpdiB7XFxuICBtYXJnaW4tbGVmdDogNDJweDtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbi5hcmVhT3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgaGVpZ2h0OiAyNjBweDtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuLnNlcnZpY2VzIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJFRUMxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNlcnZpY2VzRGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLnNlcnZpY2VzSW1hZ2Uge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fN19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLnNlcnZpY2VzRGVzY3JpcHRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zZXJ2aWNlc0ltYWdlIHtcXG4gICAgd2lkdGg6IDAlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmhlcm8tY29udGVudCBibG9ja3F1b3RlIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgfVxcblxcbiAgLmhlcm8tY29udGVudCBibG9ja3F1b3RlIGZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3MSwgMjA4LCAyMzAsIDEpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyMDBtcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIDEwMG1zIGVhc2U7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTcxLCAyMDgsIDIzMCwgMC43KTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4ucmVhZE1vcmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2xhc3NlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbn1cXG5cXG5cXG4uY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uY29udGFjdCBoMiB7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxuLmNvbnRhY3QgaDMge1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi5jb250YWN0IGZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuXFxuLmdyb3VwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIExBQkVMID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGxlZnQ6IDVweDtcXG4gIHRvcDogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbmlucHV0OmZvY3VzfmxhYmVsLFxcbmlucHV0OnZhbGlkfmxhYmVsIHtcXG4gIHRvcDogLTIwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICAvKiBjb2xvcjogIzRlNWY3NTsgKi9cXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXN+bGFiZWwsXFxudGV4dGFyZWE6dmFsaWR+bGFiZWwge1xcbiAgdG9wOiAtMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogVE9ETyBsZWFybiB0aGlzICovXFxuXFxuLyogQk9UVE9NIEJBUlMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJhcjpiZWZvcmUsXFxuLmJhcjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDA7XFxuICBib3R0b206IDFweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG59XFxuXFxuLmJhcjpiZWZvcmUge1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4uYmFyOmFmdGVyIHtcXG4gIHJpZ2h0OiA1MCU7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbmlucHV0OmZvY3Vzfi5iYXI6YmVmb3JlLFxcbmlucHV0OmZvY3Vzfi5iYXI6YWZ0ZXIge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxudGV4dGFyZWE6Zm9jdXN+LmJhcjpiZWZvcmUsXFxudGV4dGFyZWE6Zm9jdXN+LmJhcjphZnRlciB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBISUdITElHSFRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhpZ2hsaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHRvcDogMjUlO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG5pbnB1dDpmb2N1c34uaGlnaGxpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbnRleHRhcmVhOmZvY3Vzfi5oaWdobGlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgLW1vei1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG59XFxuXFxuLyogQU5JTUFUSU9OUyA9PT09PT09PT09PT09PT09ICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFQUU1O1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmZvb3Rlcj5kaXYge1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb290ZXI+ZGl2PnNwYW4ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmZvb3Rlcj5kaXY+c3Bhbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuXFxuLmxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjRURFQUU1O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLmxpbms6aG92ZXI6YmVmb3JlLFxcbi5saW5rOmZvY3VzOmJlZm9yZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5uYXZNZW51OmJlZm9yZSB7XFxuICBib3R0b206IC01cHggIWltcG9ydGFudDtcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyArIFwiKTtcXG59XFxuXFxuLm1vcmVDbGFzc2VzIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzlfX18gKyBcIik7XFxufVxcblxcbi5tb3JlUmVzb3VyY2VzIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEwX19fICsgXCIpO1xcbn1cXG5cXG5cXG5cXG4vKiBcXG4uYWJvdXQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9yZXMvYWJvdXQuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlbHAge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9yZXMvaGVscC5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc2VydmljZXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9yZXMvc2VydmljZXMuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmNsYXNzZXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9yZXMvY2xhc3Nlcy5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3Jlcy9jb250YWN0LmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5yZXNvdXJjZXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9yZXMvcmVzb3VyY2VzLmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufSAqL1xcblxcbi5zaWduYXR1cmUge1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5uYXZNZW51OmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5wYWdlLXRpdGxlIC50aXRsZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbjogNTBweCAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmNhcmQgKiB7XFxuICBjb2xvcjogIzIyMjIyMjtcXG59XFxuXFxuLmNhcmQtYm9keSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjIyMjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQtMSB7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxufVxcblxcbi5jYXJkLTIge1xcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4uY2FyZC0zIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4uY2FyZC00IHtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcblxcbi5jYXJkLTUge1xcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLmRyYXdlci1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uZHJhd2VyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxNTVweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7ICovXFxuICB0b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5kcmF3ZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUFFNTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJveC1zaGFkb3c6IDExcHggMTBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDEwcHggMCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuXFxuLmRyYXdlcisuZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBDM0M2O1xcbn1cXG5cXG4uZHJhd2VyLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmhlYWRlci1uYXYtYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmRyYXdlci1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcmF3ZXItaXRlbT5kaXYge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaGFtYnVyZ2VyOmhvdmVyICoge1xcbiAgY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9lYXRpbmdjb25jZXJucy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvaGVyby5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvbGlmZXN0eWxlMi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9tb3JlQ2xhc3Nlcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvbW9yZVJlc291cmNlcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvcmVsYXRpb25zaGlwcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvc2VydmljZXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3N0cmVzc21hbmFnZW1lbnQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy90cmFuc2l0aW9ucy5qcGdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5cbi8vIFRPRE86IGFjY2Vzc2liaWxpdHlcblxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiB7XG4gICAgICAgIG5hbWU6ICdob21lJyxcbiAgICAgICAgc2Nyb2xsVG86IG51bGxcbiAgICAgIH0sXG4gICAgICBzaG93SGFtYnVyZ2VyOiBmYWxzZSxcbiAgICAgIHNob3dEcmF3ZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgaWYgKHdpZHRoID4gNzUwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0RyYXdlcjogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93RHJhd2VyOiBmYWxzZSxcbiAgICAgICAgc2hvd0hhbWJ1cmdlcjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNob3dIYW1idXJnZXJcbiAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICBpZiAod2lkdGggPiA3NTAgJiYgc2hvd0hhbWJ1cmdlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93RHJhd2VyOiBmYWxzZSxcbiAgICAgICAgICBzaG93SGFtYnVyZ2VyOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAod2lkdGggPCA3NTAgJiYgIXNob3dIYW1idXJnZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd0hhbWJ1cmdlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU5hdiA9ICh0YXJnZXQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFnZTogdGFyZ2V0IH0pO1xuXG4gICAgaWYgKHRhcmdldC5kb2NrKSB7XG4gICAgICB0aGlzLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKGN1cnJlbnQpID0+ICh7XG4gICAgICBzaG93RHJhd2VyOiAhY3VycmVudC5zaG93RHJhd2VyXG4gICAgfSkpO1xuICB9XG5cbiAgY2xvc2VEcmF3ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RHJhd2VyOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGVtcGxhdGVTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZm9udEZhbWlseTogJ1JvYm90bywgc2Fucy1zZXJpZidcbiAgICB9O1xuXG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgbmFtZVxuICAgIH0gPSBwYWdlO1xuXG4gICAgbGV0IGNvbnRlbnQgPSA8ZGl2IC8+O1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgY29udGVudCA9IDxIb21lIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn0gLz5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcmFjdGljZSc6XG4gICAgICAgIGNvbnRlbnQgPSA8UHJhY3RpY2VBcmVhcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZXJ2aWNlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8U2VydmljZXMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xhc3Nlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8Q2xhc3NlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXNvdXJjZXMnOlxuICAgICAgICBjb250ZW50ID0gPFJlc291cmNlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb2NzJzpcbiAgICAgICAgY29udGVudCA9IDxDbGllbnREb2N1bWVudHMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmVlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8RmVlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3RlbXBsYXRlU3R5bGV9XG4gICAgICA+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBzaG93SGFtYnVyZ2VyPXt0aGlzLnN0YXRlLnNob3dIYW1idXJnZXJ9XG4gICAgICAgICAgYWN0aXZlPXtuYW1lfVxuICAgICAgICAgIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn1cbiAgICAgICAgICBvcGVuRHJhd2VyPXt0aGlzLnRvZ2dsZURyYXdlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJvZHlcbiAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgIGNsb3NlRHJhd2VyPXt0aGlzLmNsb3NlRHJhd2VyfVxuICAgICAgICAgIHNob3dEcmF3ZXI9e3RoaXMuc3RhdGUuc2hvd0RyYXdlcn1cbiAgICAgICAgICBvbk5hdj17dGhpcy5oYW5kbGVOYXZ9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9Cb2R5PlxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgb25OYXY9e3RoaXMuaGFuZGxlTmF2fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFnZS5zY3JvbGxUbykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wJykuc2Nyb2xsSW50b1ZpZXcoKSwgMCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYWdlLnNjcm9sbFRvICE9PSBudWxsIHx8IHBhZ2Uuc2Nyb2xsVG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBwYWdlLnNjcm9sbFRvID09PSAnc3RyaW5nJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2Uuc2Nyb2xsVG8pLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSksIDApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHBhZ2Uuc2Nyb2xsVG8gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIHBhZ2Uuc2Nyb2xsVG8pLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jbG9zZURyYXdlcigpXG4gIH1cblxuICByZW5kZXJEcmF3ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93RHJhd2VyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNuKCdkcmF3ZXItY29udGFpbmVyJywge1xuICAgICAgJ2hpZGUnOiAhc2hvd0RyYXdlclxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzZXMgPSBjbignZHJhd2VyLW92ZXJsYXknLCB7XG4gICAgICAnaGlkZSc6ICFzaG93RHJhd2VyXG4gICAgfSk7XG5cbiAgICBjb25zdCBvbkRyYXdlck1lZXRDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAnbWVldCcsIGRvY2s6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJQcmFjdGljZUNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICdwcmFjdGljZScsIGRvY2s6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJTZXJ2aWNlc0NsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdzZXJ2aWNlcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyQ29udGFjdENsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICdjb250YWN0JywgZG9jazogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyQ2xhc3Nlc0NsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdjbGFzc2VzJywgc2Nyb2xsVG86IDAsIGRvY2s6IHRydWUgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgPERyYXdlciBcbiAgICAgICAgICAgIGhhbmRsZU1lZXRDbGljaz17b25EcmF3ZXJNZWV0Q2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVDb250YWN0Q2xpY2s9e29uRHJhd2VyQ29udGFjdENsaWNrfVxuICAgICAgICAgICAgaGFuZGxlU2VydmljZXNDbGljaz17b25EcmF3ZXJTZXJ2aWNlc0NsaWNrfVxuICAgICAgICAgICAgaGFuZGxlUHJhY3RpY2VDbGljaz17b25EcmF3ZXJQcmFjdGljZUNsaWNrfVxuICAgICAgICAgICAgaGFuZGxlQ2xhc3Nlc0NsaWNrPXtvbkRyYXdlckNsYXNzZXNDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc2VzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlck92ZXJsYXlDbGlja30+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGJvZHlTdHlsZSA9IHtcbiAgICAgIG1pbkhlaWdodDogYGNhbGMoMTAwdmggLSAxMjVweClgXG4gICAgfTtcblxuICAgIGNvbnN0IG4gPSBwYWdlLm5hbWU7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNuKHtcbiAgICAgICdtb3JlU2VydmljZXMnOiBuID09PSAnc2VydmljZXMnLFxuICAgICAgJ21vcmVSZXNvdXJjZXMnOiBuID09PSAncmVzb3VyY2VzJyxcbiAgICAgICdtb3JlRG9jdW1lbnRzJzogbiA9PT0gJ2RvY3MnLFxuICAgICAgJ21vcmVGZWVzJzogbiA9PT0gJ2ZlZXMnLFxuICAgICAgJ21vcmVDbGFzc2VzJzogbiA9PT0gJ2NsYXNzZXMnLFxuICAgICAgJ21vcmVQcmFjdGljZSc6IG4gPT09ICdwcmFjdGljZSdcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgc3R5bGU9e2JvZHlTdHlsZX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyRHJhd2VyKCl9XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaW5saW5lU3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0VERUFFNScsXG4gICAgYm94U2hhZG93OiAnMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpJyxcbiAgICB6SW5kZXg6IDI0LFxuICB9O1xuXG4gIGNvbnN0IG1lbnVTdHlsZSA9IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBvbk5hdixcbiAgICBzaG93SGFtYnVyZ2VyLFxuICAgIG9wZW5EcmF3ZXJcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHJlbmRlckhhbWJ1cmdlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2hlYWRlci1uYXYgaGVhZGVyLWhhbWJ1cmdlcidcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgb25DbGljaz17b3BlbkRyYXdlcn1cbiAgICAgID5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2hhbWJ1cmdlcicgd2lkdGg9XCIzNFwiIGhlaWdodD1cIjM0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XCIgLz48L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzaG93SGFtYnVyZ2VyKSB7XG4gICAgaW5saW5lU3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e2lubGluZVN0eWxlfVxuICAgICAgPlxuICAgICAgICB7cmVuZGVySGFtYnVyZ2VyKCl9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICd0b3AnIH0pfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnc2lnbmF0dXJlJywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdob21lJyB9KX1cbiAgICAgICAgICBzdHlsZT17eyAuLi5tZW51U3R5bGUsIG1hcmdpblJpZ2h0OiAyMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgU3RlcGhhbmllIFNtaXRoLCBQc3kuRC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17aW5saW5lU3R5bGV9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICd0b3AnIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ3NpZ25hdHVyZScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnaG9tZScgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFN0ZXBoYW5pZSBTbWl0aCwgUHN5LkQuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAnbWVldCcgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2hlbHAnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBNZWV0IERyLiBTbWl0aFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ3ByYWN0aWNlJyB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnaGVscCcgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFByYWN0aWNlIEFyZWFzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnc2VydmljZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnc2VydmljZXMnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBTZXJ2aWNlc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2NsYXNzZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY2xhc3NlcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIENsYXNzZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICdjb250YWN0JyB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY29udGFjdCcgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIENvbnRhY3RcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvbk5hdlxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdmb290ZXInXG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICA+XG4gICAgICAgICAgU3RlcGhhbmllIFNtaXRoLCBQc3kuRC5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgODAxIEFsaGFtYnJhIEJsdmQsPGJyIC8+XG4gICAgICAgICAgU3VpdGUgMkIgU2FjcmFtZW50bywgQ0EgOTU4MTZcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgPlxuICAgICAgICAgICg5MTYpIDM5OS0zNjE1XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xpbmsnXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncmVzb3VyY2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgID5BZGRpdGlvbmFsIFJlc291cmNlczwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsaW5rJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2RvY3MnLCBzY3JvbGxUbzogMCB9KX0+Q2xpZW50IERvY3VtZW50czwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsaW5rJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2ZlZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgPkZlZXMgZm9yIFNlcnZpY2VzPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uTmF2XG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tkcm9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8nIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50JyBpZD0ndG9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8tY29udGVudCc+XG4gICAgICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgIFwiQW5kIHRoZSBkYXkgY2FtZSB3aGVuIHRoZSByaXNrIHRvIHJlbWFpbiB0aWdodCBhcyBhIGJ1ZCB3YXMgbW9yZSBwYWluZnVsIHRoYW4gdGhlIHJpc2sgaXQgdG9vayB0byBibG9zc29tLlwiXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8Zm9vdGVyPi0gQW5haXMgTmluXG4gICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWV0IGNhcmQtMicgaWQ9J21lZXQnID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZSc+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncHJvZmlsZVBob3RvIGNhcmQtMScgc3JjPSdyZXMvcHJvZmlsZS5qcGcnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jpbyc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdiaW9UaXRsZSc+XG4gICAgICAgICAgICAgIE1lZXQgRHIuIFN0ZXBoYW5pZSBTbWl0aFxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nYmlvU3VidGl0bGUnPlxuICAgICAgICAgICAgICBDbGluaWNhbCBQc3ljaG9sb2dpc3RcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIHttZWV0U3RlcGh9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJhY3RpY2VBcmVhcycgaWQ9J3ByYWN0aWNlJz5cbiAgICAgICAgICA8aDI+UHJhY3RpY2UgQXJlYXM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhcyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYUVhdGluZ0NvbmNlcm5zJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBFYXRpbmc8YnIgLz4gQ29uY2VybnNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYUltYWdlIGFyZWFMaWZlc3R5bGUnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIExpZmVzdHlsZTxiciAvPiBDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhVHJhbnNpdGlvbnMnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIExpZmU8YnIgLz4gVHJhbnNpdGlvbnNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYUltYWdlIGFyZWFSZWxhdGlvbnNoaXBzJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBSZWxhdGlvbnNoaXA8YnIgLz4gQ2hhbGxlbmdlc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYU1lZGljYWxQcm9ibGVtcycgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgTWVkaWNhbDxiciAvPiBQcm9ibGVtc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYVN0cmVzcycgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgU3RyZXNzPGJyIC8+IE1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFkTW9yZSc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncmVhZE1vcmUgYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAwIH0pfT5cbiAgICAgICAgICAgICAgUkVBRCBNT1JFXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMgY2FyZC0yJyBpZD0nc2VydmljZXMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlc0Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgU2VydmljZXNcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBhdWN0b3IgYmliZW5kdW0gcXVhbSBhdCBlZmZpY2l0dXIuIFNlZCBwaGFyZXRyYSBpZCB2ZWxpdCBuZWMgZWxlbWVudHVtLiBNb3JiaSB0aW5jaWR1bnQgc2FwaWVuIG5pc2ksIG5lYyBwb3J0dGl0b3IgYXVndWUgc2VtcGVyIGFjLiBWZXN0aWJ1bHVtIHB1bHZpbmFyIGN1cnN1cyB1cm5hLCBpZCB2YXJpdXMgbWF1cmlzIHBlbGxlbnRlc3F1ZSBpbi4gQWVuZWFuIGFjIG5lcXVlIHB1cnVzLiBTZWQgZWdlc3RhcyBjb25zZWN0ZXR1ciBpcHN1bS4gQ3JhcyBub24gc2VtcGVyIGxpZ3VsYSwgcXVpcyBzdXNjaXBpdCBvZGlvLiBDcmFzIGRpY3R1bSBwaGFyZXRyYSBhdWN0b3IuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFkTW9yZScgc3R5bGU9e3sgbWFyZ2luVG9wOiAnYXV0bycsIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcgfX0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdzZXJ2aWNlcycsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUkVBRCBNT1JFXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2VzSW1hZ2UnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nY2xhc3NlcycgaWQ9J2NsYXNzZXMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGFzc2VzRGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICBNb29kICYgRm9vZFxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEdldCBpbiBteSBiZWxseVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVhZE1vcmUnIHN0eWxlPXt7IG1hcmdpblRvcDogJ2F1dG8nLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnIH19PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnY2xhc3NlcycsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUkVBRCBNT1JFXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QgY2FyZC0yJyBpZD0nY29udGFjdCc+XG4gICAgICAgICAgPGgyPkNoYW5nZSBiZWdpbnMgdG9kYXk8L2gyPlxuICAgICAgICAgIDxoMz5SZXF1ZXN0IGEgY29uc3VsdGF0aW9uPC9oMz5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBob25lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+UGhvbmU8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzcz0ncmVhZE1vcmUnPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbic+U0VORDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vKiogSG9tZSAqL1xuXG5cbi8qKiBQYWdlcyAqL1xuXG5jb25zdCBQcmFjdGljZUFyZWFzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9J1ByYWN0aWNlIEFyZWFzJ1xuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtwcmFjdGljZUFyZWFzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9J1NlcnZpY2VzJ1xuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtzZXJ2aWNlc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuY29uc3QgQ2xhc3NlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnQ2xhc3Nlcyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIGJvZHk9e2NsYXNzZXN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgKTtcbn1cblxuY29uc3QgQ2xpZW50RG9jdW1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9eydDbGllbnQgRG9jdW1lbnRzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17Y2xpZW50RG9jdW1lbnRzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5jb25zdCBSZXNvdXJjZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J1Jlc291cmNlcyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIGJvZHk9e3Jlc291cmNlc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApO1xufVxuXG5jb25zdCBGZWVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9eydGZWVzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17ZmVlc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApO1xufVxuXG5cblxuLyoqIFBhZ2VzIGNvbnRlbnRzICovXG5cbmNvbnN0IG1lZXRTdGVwaCA9IChcbiAgPHA+XG4gICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgdGVtcHVzIGVsaXQgZWdldCBvcmNpIHBlbGxlbnRlc3F1ZSwgbmVjIGZpbmlidXMgZG9sb3IgbGFvcmVldC4gRXRpYW0gZW5pbSBleCwgc29kYWxlcyBpZCB0b3J0b3IgdmVsLCB2ZXN0aWJ1bHVtIHZlaGljdWxhIHZlbGl0LiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBJbnRlZ2VyIHZpdGFlIGlwc3VtIGV0IG1pIHNlbXBlciBhbGlxdWFtLiBWaXZhbXVzIGVnZXQgZ3JhdmlkYSBzZW0sIGV0IGNvbnNlY3RldHVyIGVsaXQuIFZpdmFtdXMgdXQgY29uc2VxdWF0IG1hZ25hLiBNYWVjZW5hcyBpbiBqdXN0byBtYXhpbXVzLCBtYXR0aXMgbmlzbCB2aXRhZSwgdmVuZW5hdGlzIGVsaXQuIEludGVnZXIgZXUgaXBzdW0gbWFzc2EuIFNlZCBzYWdpdHRpcyBsYWN1cyB2ZWwgY3Vyc3VzIHRlbXBvci4gQ3JhcyBpZCBlZ2VzdGFzIHR1cnBpcy5cbiAgPC9wPlxuKTtcblxuY29uc3QgcHJhY3RpY2VBcmVhcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMz5FYXRpbmcgQ29uY2VybnM8L2gzPlxuICAgIDxwPlxuICAgICAgSW5kaXZpZHVhbHMgbm90aWNpbmcgbWluZGxlc3MsIHN0cmVzcywgZW1vdGlvbmFsLCBvciBiaW5nZSBlYXRpbmcgYmVoYXZpb3JzIGFyZSB3ZWxjb21lIHRvIGNvbnNpZGVyIGJvdGggaW5kaXZpZHVhbCBhbmQgY2xhc3MtYmFzZWQgdGhlcmFwaWVzIHdpdGggbWUuIE15IGFwcHJvYWNoIHRvIHRoZXNlIGNvbmNlcm5zIHJlY29nbml6ZXMgdGhlIGNvbXBsZXggcm9sZSBlYXRpbmcgY2FuIHBsYXkgYXMgYSBtZWNoYW5pc20gb2YgY29waW5nIGZvciBpbmRpdmlkdWFsLCBmYW1pbHksIGFuZCBjdWx0dXJhbGx5IHN5c3RlbWljIGlzc3Vlcy4gV2Ugd29yayB0b2dldGhlciB0byBhY2tub3dsZWRnZSB0aGUgZnVsbG5lc3Mgb2YgdGhpcyByb2xlIGFzIHdlbGwgYXMgaXQncyBoaXN0b3J5LCB3aGlsZSBob25vcmluZyB0aGUgZGVzaXJlIHRoYXQgbWF5IGV4aXN0IHRvIGNoYW5nZS4gVGhyb3VnaCBvdXIgd29yayB3ZSBjYW4gYmVnaW4gdG8gZGV2ZWxvcCBuZXcgYW5kIGhlYWx0aGllciBjb3Bpbmcgc3RyYXRlZ2llcyBhcyBhIG5hdHVyYWwgb3V0Y29tZSBvZiBpbmNyZWFzZWQgYXdhcmVuZXNzIGFuZCBzZWxmLWNvbXBhc3Npb24uIEkgdGFpbG9yIG15IGFwcHJvYWNoIHRvIHRoZSBuZWVkcyBhbmQgc3R5bGUgb2YgdGhlIGluZGl2aWR1YWwgd2l0aCB3aG9tIEkgYW0gd29ya2luZy5cbjwvcD5cblxuICAgIDxoMz5MaWZlc3R5bGUgQ2hhbmdlczwvaDM+XG5cbiAgICA8cD5cbiAgICAgIE1vc3Qgb2YgdXMgY2FuIHJlbGF0ZSB0byB0aGUgcnVubmluZyBtZW50YWwgbGlzdCBvZiB0aGluZ3Mgd2Uga25vdyB3ZSBcInNob3VsZFwiIGJlIGRvaW5nIGluIG9yZGVyIHRvIGJlIGhlYWx0aGllci4gTWF5YmUgdGhpcyBpcyBtb3Zpbmcgb3VyIGJvZGllcyBtb3JlLCBlYXRpbmcgZGlmZmVyZW50bHksIGltcHJvdmluZyAgc2xlZXAgaGFiaXRzLCBvciBkaXNjb25uZWN0aW5nIGZyb20gdGVjaG5vbG9neS4gTWF5YmUgaXQgY291bGQgYmUgdGhlc2UgdGhpbmdzIHBsdXMgbWFueSBtb3JlISBXaGlsZSBjZXJ0YWlubHkgZXhjZWxsZW50IGhhYml0cywgbG9va2luZyBhdCBhIGxpc3Qgb2YgcGVyc29uYWwgd2VsbG5lc3MgXCJ0byBkb3NcIiBjYW4gYmUgb3ZlcndoZWxtaW5nLiBJbiBmYWN0LCB3ZSBvZnRlbiBhdm9pZCB0aGlua2luZyBhYm91dCB0aGVzZSBoZWFsdGh5IGxpdmluZyBpdGVtcyBiZWNhdXNlIGl0IGNhbiBmZWVsIGhvcGVsZXNzLiBUb2dldGhlciB3ZSBjYW4gY3JlYXRlIGEgcGxhbiBvZiBzbWFsbCBzdGVwcyB0byB3b3JrIHRvd2FyZHMgY29ubmVjdGluZyBiZWhhdmlvciBjaGFuZ2VzIHdpdGggeW91ciBkZWVwZXN0IHZhbHVlcy4gVGhpbmdzIHRoYXQgbWF5IGhhdmUgZmVsdCBmb3JjZWQgaW4gdGhlIHBhc3QgY2FuIGJlY29tZSB0aGluZ3Mgd2UgYXJlIGVhZ2VyIGZvci4gSSB3aWxsIGxldmVyYWdlIG15IHRyYWluaW5nIGluIExpZmVzdHlsZSBNZWRpY2luZSB0byBoZWxwIHNldCBtYW5hZ2VhYmxlIGFuZCByZXNlYXJjaCBzdXBwb3J0ZWQgYWltcyB0byBwcm9kdWNlIHJlYWwgaW1wcm92ZW1lbnRzIGluIHlvdXIgaGVhbHRoLlxuPC9wPlxuXG4gICAgPGgzPlBoYXNlIG9mIExpZmUgSXNzdWVzL0xpZmUgVHJhbnNpdGlvbnM8L2gzPlxuICAgIDxwPlxuICAgICAgVGhvdWdoIHRoZSBwaHJhc2UsIFwidGhlIG9ubHkgdGhpbmcgY29uc3RhbnQgaXMgY2hhbmdlXCIgaXMgb25lIGZhbWlsaWFyIHRvIG1hbnkgb2YgdXMsIHRoaXMgY2FuIGJlIGxpdHRsZSBjb21mb3J0IGR1cmluZyB0aGUgdHVybW9pbCBvZiBhIHNpZ25pZmljYW50IHRyYW5zaXRpb24uIENoYW5nZXMgaW4gbGlmZSBjaXJjdW1zdGFuY2VzIGNhbiBpbXBhY3QgdXMgb24gZXZlcnkgbGV2ZWwgb2Ygb3VyIGJlaW5nIGFuZCBleHRlcm5hbCBsaWZlLiBTZWVraW5nIHRoZXJhcHkgZHVyaW5nIHRoZXNlIHRpbWVzIGNhbiBiZSBib3RoIGFuY2hvciBhbmQgZ3VpZGUgbGlnaHQuIEkgd2lsbCBzdXBwb3J0IHlvdSB0byBwcm9jZXNzIHRoZSBsb3NzIG9mIGhvdyB0aGluZ3MgaGF2ZSBiZWVuLiBXaGVuIHlvdSBhcmUgcmVhZHksIHdlIHdpbGwgc2V0IGNvbnNjaW91c2x5IGRldmVsb3BlZCBnb2FscyBmb3IgdGhlIHBoYXNlIG9mIGxpZmUgdGhhdCB5b3UgZmluZCB5b3Vyc2VsZiBpbiBub3cuIFdlIHdpbGwgd29yayB0b2dldGhlciB0byBpZGVudGlmeSBoZWFsdGh5IGNvcmUgY29tcG9uZW50cyBvZiB3aG8geW91IGFyZSBldm9sdmluZyB0byBiZSBhbmQgY2VudGVyIG91ciBhdHRlbnRpb24gdG8gbnVydHVyZSB0aGlzIGdyb3d0aC4gVGhlcmUgaXMgbm8gc2V0IHRpbWVsaW5lIG9mIGhvdyBsb25nIGFuIGFkanVzdG1lbnQgcGVyaW9kIGxhc3RzLiBJIHdpbGwgaGVscCB5b3UgdG8gbW92ZSBpbnRvIHRoZSBuZXh0IHBhcnQgb2YgeW91ciBsaWZlIGluIHRoZSBoZWFsdGhmdWwgd2F5cywgYXMgcXVpY2tseSBhcyBpcyByZWFzb25hYmxlLCBhbmQgaW4gY29tcGxldGUgcmVzcGVjdCBmb3IgeW91ciBvd24gcGFjZS5cbjwvcD5cblxuICAgIDxoMz5SZWxhdGlvbnNoaXAgQ2hhbGxlbmdlczwvaDM+XG4gICAgPHA+XG4gICAgICBSb21hbnRpYywgZmFtaWx5LCBzb2NpYWwsIGFuZCBvY2N1cGF0aW9uYWwgcmVsYXRpb25zaGlwcyBjYW4gYWxsIGJlIHNvdXJjZXMgb2Ygc2lnbmlmaWNhbnQgcGxlYXN1cmUgYW5kIGNvbnNlcXVlbnRseSwgc2lnbmlmaWNhbnQgcGFpbi4gVGhlcmUgYXJlIGEgbXVsdGl0dWRlIG9mIHJlYXNvbnMgcmVsYXRpb25zaGlwcyBjYW4gYmVjb21lIHRyb3VibGVkLiBNYW55IG9mIHRoZSByb290cyBvZiB0aGVzZSByZWFzb25zIGNhbiBiZSB0cmFjZWQgdG8gY29tbXVuaWNhdGlvbiBjbGFyaXR5LiBXaGlsZSB3ZSBjYW5ub3QgY2hhbmdlIG90aGVyIHBlb3BsZSwgd2UgY2FuIGlkZW50aWZ5IHBlcnNvbmFsIHF1YWxpdGllcyBpbiBvdXJzZWx2ZXMgdGhhdCB3ZSB3aXNoIHRvIGNoYW5nZSBmb3IgdGhlIHdlbGxiZWluZyBvZiBhIGN1cnJlbnQgb3IgZnV0dXJlIHJlbGF0aW9uc2hpcC4gV29ya2luZyB0b3dhcmRzIGlkZW50aWZ5aW5nIHRoZXNlIGFyZWFzLCBjcmVhdGluZyBtaW5kZnVsIGF3YXJlbmVzcyBhcm91bmQgdGhlbSwgYW5kIG1ha2luZyB2YWx1ZXMgYmFzZWQgY2hhbmdlcyBjYW4gcHJvdmlkZSBib3RoIHBlcnNvbmFsIGJlbmVmaXRzIGFuZCBpbXByb3ZlbWVudHMgdG8gdGhlIHJlbGF0aW9uc2hpcC4gV2UgY2FuIHdvcmsgdG9nZXRoZXIgdG8gaWRlbnRpZnkgYW5kIG9wdGltaXplIHRoZXNlIGNoYW5nZXMgaW4gYSBjb21wYXNzaW9uYXRlIGFuZCByZXNwZWN0ZnVsIGVudmlyb25tZW50IHdoaWxlIHByaW9yaXRpemluZyBlZmZlY3RpdmUgYW5kIGNsZWFyIGNvbW11bmljYXRpb24gYXMgdGhlIGNvcm5lcnN0b25lIHRvIGltcHJvdmVkIHJlbGF0aW9uc2hpcHMuXG48L3A+XG4gICAgPGgzPk1lZGljYWwgUHJvYmxlbXM8L2gzPlxuICAgIDxwPlxuICAgICAgVGhlcmUgaXMgbm8gZG91YnQgdGhhdCBvdXIgcGh5c2ljYWwgd2VsbGJlaW5nIGltcGFjdHMgb3VyIHBzeWNob2xvZ2ljYWwgd2VsbGJlaW5nIGFuZCB2aWNlIHZlcnNhLiBXaGV0aGVyIHlvdSBhcmUgbG9va2luZyBmb3Igc3VwcG9ydCBpbiBpbXByb3ZpbmcgeW91ciBtYW5hZ2VtZW50IG9mIGEgbWVkaWNhbCBwcm9ibGVtLCBoYW5kbGluZyB0aGUgc3RyZXNzIGFyb3VuZCBpdCwgb3IgYmVsaWV2ZSB0aGVyZSBtYXkgYmUgbGlmZXN0eWxlIGNoYW5nZXMgdGhhdCB3aWxsIHJldmVyc2UgdGhlIGNvbmRpdGlvbiwgSSB3b3VsZCBiZSBoYXBweSB0byBzdXBwb3J0IHRoaXMgYXNwZWN0IG9mIHlvdXIgaGVhbHRoLiBJIGFtIGEgdHJhaW5lZCBoZWFsdGggcHN5Y2hvbG9naXN0IGFuZCB3b3JrIHJlZ3VsYXJseSB3aXRoIGJvdGggY2hyb25pYyBhbmQgYWN1dGUgbWVkaWNhbCBjb25kaXRpb25zLiBJIGhhdmUgcGVyc29uYWwgYW5kIHByb2Zlc3Npb25hbCBleHBlcmllbmNlIHdpdGggdGhlIGltcGFjdHMgcGh5c2ljYWwgaGVhbHRoIGNhbiBoYXZlIG5vdCBvbmx5IG9uIG9uZXNlbGYsIGJ1dCBhbHNvIG9uIHRob3NlIGFyb3VuZCB1cy4gSSBiZWxpZXZlIHN1cHBvcnQgY2FuIG1ha2UgYSBzdWJzdGFudGl2ZSBkaWZmZXJlbmNlIGluIG1hbmFnaW5nIGEgaGVhbHRoIGNvbmNlcm4gYXMgd2VsbCBhcyB0aGUgZW1vdGlvbmFsIGFuZCBzb2NpYWwgaW1wYWN0cyBvZiB0aGlzLiBJIHdpbGwgd29yayB3aXRoIHlvdSB0byBhY2NlcHQgdGhvc2UgcmVhbGl0aWVzIHRoYXQgYXJlIHVuY2hhbmdpbmcgYXMgd2VsbCBhcyByZWNvZ25pemUgb3Bwb3J0dW5pdGllcyBmb3IgcG9zaXRpdmUgZ3Jvd3RoLlxuPC9wPlxuICAgIDxoMz5FeGNlcHRpb25zIHRvIHRoZSBhYm92ZTwvaDM+XG4gICAgPHA+XG4gICAgICBEdWUgdG8gdGhlIHBhcnQgdGltZSBuYXR1cmUgb2YgbXkgcHJpdmF0ZSBwcmFjdGljZSwgSSBhbSB1bmZvcnR1bmF0ZWx5IHVuYWJsZSBhdCB0aGlzIHRpbWUgdG8gd29yayB3aXRoIHRob3NlIHdobyBoYXZlIGFjdGl2ZSBhbmQgYWN1dGUgc3VpY2lkYWwgb3IgaG9taWNpZGFsIHRob3VnaHRzIG9yIGFyZSBlbmdhZ2luZyBpbiBzZWxmLWhhcm1pbmcgYmVoYXZpb3JzLiBXaGlsZSBpdCBpcyBub3QgdW5jb21tb24gZm9yIHRoZXNlIHRob3VnaHRzIG9yIGJlaGF2aW9ycyB0byBiZSBwYXJ0IG9mIHRoZSBsaXZlcyBvZiB0aG9zZSB3aG8gZmFsbCBpbnRvIG9uZSBvciBtb3JlIG9mIHRoZSBjYXRlZ29yaWVzIGFib3ZlLCBJIGFtIHVuYWJsZSB0byBiZSBhdmFpbGFibGUgd2l0aCB0aGUgY29uc2lzdGVuY3kgb3IgcmVndWxhcml0eSB0aGF0IGlzIG5lZWRlZCB0byBoZWxwIHN1cHBvcnQgYWN0aXZlIGFuZCBhY3V0ZSBzYWZldHkgY29uY2VybnMuIFNob3VsZCBhbiBhY3RpdmUgYW5kIGFjdXRlIHNhZmV0eSBjb25jZXJuIG9jY3VyIGR1cmluZyBvdXIgd29yayB0b2dldGhlciwgSSB3aWxsIHdvcmsgdG9nZXRoZXIgd2l0aCB5b3UgdG8gZmluZCBhcHByb3ByaWF0ZSBjYXJlIHRoYXQgY2FuIG1lZXQgeW91ciBuZWVkcy4gSXQgaXMgbGlrZWx5IHRoYXQgd2l0aCBzdGFiaWxpemF0aW9uIHRoZXJlIGlzIHBvdGVudGlhbCB0byByZXR1cm4gdG8gb3VyIHdvcmsgdG9nZXRoZXIgaWYgdGhhdCBpcyBkZXRlcm1pbmVkIHRvIGJlIGluIHlvdXIgYmVzdCBpbnRlcmVzdC4gSSBhbSBoYXBweSB0byBkaXNjdXNzIHRoaXMgaW4gZnVydGhlciBkZXRhaWwgYW5kIHdlbGNvbWUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBzZXJ2aWNlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxwPlxuICAgICAgSSBwcm92aWRlIGJvdGggaW5kaXZpZHVhbCB0aGVyYXB5IGFwcG9pbnRtZW50cyBhcyB3ZWxsIGFzIGNsYXNzZXMuXG4gICAgPC9wPlxuICAgIDxoMz5UZWxlcGhvbmUgQ29uc3VsdDwvaDM+XG4gICAgPHA+XG4gICAgICBBcyBvdXIgZmlyc3QgY29udGFjdCBmb3IgZWl0aGVyIG9mIHRoZXNlIHNlcnZpY2VzIEkgb2ZmZXIgYSBjb21wbGVtZW50YXJ5IDE1LW1pbnV0ZSBwaG9uZSBjb25zdWx0YXRpb24uIFRoaXMgaXMgYW4gb3Bwb3J0dW5pdHkgZm9yIHVzIHRvIGNvbm5lY3QgYWJvdXQgdGhlIGlzc3VlcyB0aGF0IGJyaW5nIHlvdSBpbnRvIGNhcmUsIGFuZCB0byBkZXRlcm1pbmUgd2hldGhlciB3b3JraW5nIHRvZ2V0aGVyIGlzIHRoZSBiZXN0IGZpdCBmb3IgeW91ciBuZWVkcy4gSSBjYW4gYW5zd2VyIGFueSBxdWVzdGlvbnMgdGhhdCB5b3UgbWF5IGhhdmUgYWJvdXQgY29taW5nIGludG8gY2FyZSBhbmQgc2V0IHVwIHlvdXIgZmlyc3QgYXBwb2ludG1lbnQgb3IgY2xhc3MuPGJyIC8+XG4gICAgICB7LyogPGk+MTUtbWluIGluaXRpYWwgdGVsZXBob25lIGNvbnN1bHQmI3gyMDE0OyBmcmVlIG9mIGNoYXJnZTwvaT4gKi99XG4gICAgPC9wPlxuICAgIDxoMz5Jbml0aWFsIEFwcG9pbnRtZW50PC9oMz5cbiAgICA8cD5cbiAgICAgIEFuIGluaXRpYWwgaW5kaXZpZHVhbCB0aGVyYXB5IGFwcG9pbnRtZW50IGlzIGEgNjAtbWludXRlIGFwcG9pbnRtZW50LiBEdXJpbmcgdGhpcyBhcHBvaW50bWVudCBJIHdpbGwgcmV2aWV3IHlvdXIgY29tcGxldGUgaW50YWtlIGZvcm0gd2l0aCB5b3UgdG8gZW5zdXJlIHRoYXQgSSBoYXZlIGFuIGFwcHJvcHJpYXRlIHVuZGVyc3RhbmRpbmcgb2Ygc29tZSBvZiB5b3VyIGhpc3RvcnksIHdoYXQgYnJpbmdzIHlvdSBpbnRvIGNhcmUsIGFuZCB5b3VyIGdvYWxzIGZvciBvdXIgd29yayB0b2dldGhlci4gV2Ugd2lsbCBhbHNvIHVzZSB0aGlzIGFwcG9pbnRtZW50IHRvIGNyZWF0ZSBzb21lIGluaXRpYWwgZ29hbHMgZm9yIGNhcmUgYW5kIHRvIHNldCB1cCBvdXIgZXhwZWN0YXRpb25zIGZvciB0cmVhdG1lbnQuXG4gICAgICA8YnIgLz5cbiAgICAgIHsvKiA8aT42MC1taW4gaW5pdGlhbCBpbmRpdmlkdWFsIGFwcG9pbnRtZW50JiN4MjAxNDsgJDE1MCAqPC9pPiAqL31cbiAgICA8L3A+XG4gICAgPGgzPlJldHVybiBBcHBvaW50bWVudHM8L2gzPlxuICAgIDxwPlxuICAgICAgUmV0dXJuIGFwcG9pbnRtZW50cyBhcmUgNTAtbWludXRlIGFwcG9pbnRtZW50cy4gRHVyaW5nIHJldHVybiBhcHBvaW50bWVudHMgd2Ugd2lsbCB3b3JrIHRvZ2V0aGVyIG9uIHlvdXIgZ29hbHMgYW5kIEkgd2lsbCBzdXBwb3J0IHlvdSB0aHJvdWdoIHRoZSBwcm9jZXNzLiBXZSB3aWxsIHJlZ3VsYXJseSBjaGVjayBpbiBhYm91dCB0aGUgcHJvZ3Jlc3Mgb2YgY2FyZSBhbmQgbWFrZSBhZGp1c3RtZW50cyBhcyBuZWVkZWQgdG8gZW5zdXJlIHRoYXQgd2UgYXJlIHdvcmtpbmcgZWZmZWN0aXZlbHkgdG9nZXRoZXIuXG4gICAgICA8YnIgLz5cbiAgICAgIHsvKiA8aT41MC1taW4gcmV0dXJuIGluZGl2aWR1YWwgYXBwb2ludG1lbnQmI3gyMDE0OyAkMTUwICo8L2k+ICovfVxuICAgIDwvcD5cbiAgICA8aDM+Q2xhc3NlczwvaDM+XG4gICAgPHA+XG4gICAgICBDbGFzc2VzIGFyZSA5MCBtaW51dGVzIGluIGxlbmd0aC4gRHVlIHRvIHNwYWNlIG5lZWRlZCwgY2xhc3NlcyBhcmUgaGVsZCBhdCBhIG5lYXJieSBsb2NhdGlvbiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIHRoZXJhcHkgb2ZmaWNlLiBNb3JlIGluZm9ybWF0aW9uIGFib3V0IGNsYXNzIGFuZCBjbGFzcyBjb250ZW50IGNhbiBiZSBmb3VuZCB1bmRlciB0aGUgXCJDbGFzc2VzXCIgdGFiLiBUaG91Z2ggY2xhc3NlcyB0YWtlIHBsYWNlIG92ZXIgNCBzZXNzaW9ucywgdGhlIGZ1bGwgZmVlIG11c3QgYmUgcGFpZCBpbiBhZHZhbmNlIG9mIHRoZSBmaXJzdCBzZXNzaW9uLiBBZnRlciB0aGlzIHBheW1lbnQsIG5vIGFkZGl0aW9uYWwgY2hhcmdlcyBhcmUgaW5jdXJyZWQgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIGNsYXNzZXMgdW5sZXNzIGFuIGFkZGl0aW9uYWwgc2VydmljZSBpcyByZXF1ZXN0ZWQgb3IgcHJvdmlkZWQuXG4gICAgICA8YnIgLz5cbiAgICAgIHsvKiA8aT40LXNlc3Npb24gKDM2MC1taW4pIGNsYXNzIHNlcmllcyYjeDIwMTQ7ICQxNjAgKjwvaT4gKi99XG4gICAgPC9wPlxuICAgIDxoMz5UZWxlTWVudGFsIEhlYWx0aDwvaDM+XG4gICAgPHA+XG4gICAgICBPbiBvY2Nhc2lvbiBpdCBtYXkgYmUgaW5kaWNhdGVkIGZvciB1cyB0byBlbmdhZ2UgaW4gdGVsZS1oZWFsdGggZWl0aGVyIG92ZXIgdGhlIHBob25lIG9yIHRocm91Z2ggdmlkZW8gY29tbXVuaWNhdGlvbi4gVGhlc2Ugc2VydmljZXMgYXJlIG9mZmVyZWQgdG8gaW5kaXZpZHVhbHMgb25seSBhZnRlciB0aGV5IGhhdmUgYmVlbiBpbml0aWFsbHkgZXN0YWJsaXNoZWQgaW4tcGVyc29uIHRocm91Z2ggYXQgbGVhc3Qgb25lIGluLXBlcnNvbiBhcHBvaW50bWVudC4gRHVlIHRvIGxpY2Vuc2luZyByZXF1aXJlbWVudHMsIEkgYW0gdW5hYmxlIHRvIHByb3ZpZGUgdGhlc2Ugc2VydmljZXMgdG8gYW55b25lIG91dC1vZi1zdGF0ZSBvciBjb3VudHJ5IGF0IHRoZSB0aW1lIG9mIHNlcnZpY2UuIFRoZXJlIGFyZSBhIHZhcmlldHkgb2YgcGxhdGZvcm1zIGF2YWlsYWJsZSBmb3IgdGhpcyBzZXJ2aWNlIGFuZCwgdGhvdWdoIGNvbnZlbmllbnQsIGl0IGlzIGltcG9ydGFudCB0byBiZSBhd2FyZSB0aGF0IHRoZXkgYXJlIG5vdCBISVBBQSBjb21wbGlhbnQuIENvbXBsZXRpbmcgdGhlIEluZm9ybWVkIENvbnNlbnQgZm9ybSBhY2tub3dsZWRnZXMgeW91ciB1bmRlcnN0YW5kaW5nIG9mIHRoaXMgYW5kIGFjY2VwdGFuY2Ugb2YgdGhlIHJpc2sgc2hvdWxkIHdlIHV0aWxpemUgdGhpcyBmb3JtYXQgb2YgY2FyZS5cbiAgICAgIDxiciAvPlxuICAgICAgey8qIDxpPjUgdG8gMjUgbWludXRlcyYjeDIwMTQ7ICQ3NSAqPC9pPjxiciAvPiAqL31cbiAgICAgIHsvKiA8aT4yNi01MCBtaW51dGVzJiN4MjAxNDsgJDE1MCAqPC9pPiAqL31cbiAgICA8L3A+XG4gICAgPGJyIC8+XG4gICAgPHA+XG4gICAgICA8aT5cbiAgICAgICAgKiBZb3Ugd2lsbCBiZSBleHBlY3RlZCB0byBwYXkgZm9yIGVhY2ggc2Vzc2lvbiBiZWZvcmUvYXQgdGhlIHN0YXJ0IG9mIHNlc3Npb24sIHVubGVzcyB3ZSBhZ3JlZSBvdGhlcndpc2UuIFBheW1lbnQgbWF5IGJlIG1hZGUgdGhyb3VnaCBjYXNoLCBjaGVjaywgb3IgSElQQUEgY29tcGxpYW50IGFwcGxpY2F0aW9uLiBVc2Ugb2YgdGhlIEhJUEFBIGNvbXBsaWFudCBhcHBsaWNhdGlvbiBpbmN1cnMgYW4gYWRkaXRpb25hbCAkNSBjaGFyZ2UuIEkgYW0gYW4gXCJvdXQgb2YgbmV0d29yayBwcm92aWRlclwiIGZvciBpbnN1cmFuY2UgbmV0d29ya3MgYnV0IHdpbGwgcHJvdmlkZSB5b3UgYSBTdXBlcmJpbGwgd2hpY2ggeW91IG1heSB1c2UgdG8gcmVxdWVzdCByZWltYnVyc2VtZW50LlxuICAgICAgPC9pPlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IGZlZXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8cD5cbiAgICAgIFBsZWFzZSBub3RlIHRoYXQgeW91IHdpbGwgYmUgZXhwZWN0ZWQgdG8gcGF5IGZvciBlYWNoIHNlc3Npb24gYmVmb3JlL2F0IHRoZSBzdGFydCBvZiBzZXNzaW9uLCB1bmxlc3Mgd2UgYWdyZWUgb3RoZXJ3aXNlLiBQYXltZW50IG1heSBiZSBtYWRlIHRocm91Z2ggY2FzaCwgY2hlY2ssIG9yIEhJUEFBIGNvbXBsaWFudCBhcHBsaWNhdGlvbi4gVXNlIG9mIHRoZSBISVBBQSBjb21wbGlhbnQgYXBwbGljYXRpb24gaW5jdXJzIGFuIGFkZGl0aW9uYWwgJDUgY2hhcmdlLiBJIGFtIGFuIFwib3V0IG9mIG5ldHdvcmsgcHJvdmlkZXJcIiBmb3IgaW5zdXJhbmNlIG5ldHdvcmtzIGJ1dCB3aWxsIHByb3ZpZGUgeW91IGEgU3VwZXJiaWxsIHdoaWNoIHlvdSBtYXkgdXNlIHRvIHJlcXVlc3QgcmVpbWJ1cnNlbWVudC5cbiAgICA8L3A+XG4gICAgPGgzPlRlbGVwaG9uZSBDb25zdWx0PC9oMz5cbiAgICA8cD5cbiAgICAgIDxpPjE1LW1pbiBpbml0aWFsIHRlbGVwaG9uZSBjb25zdWx0JiN4MjAxNDsgZnJlZSBvZiBjaGFyZ2U8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5Jbml0aWFsIEFwcG9pbnRtZW50PC9oMz5cbiAgICA8cD5cbiAgICAgIDxpPjYwLW1pbiBpbml0aWFsIGluZGl2aWR1YWwgYXBwb2ludG1lbnQmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+UmV0dXJuIEFwcG9pbnRtZW50czwvaDM+XG4gICAgPHA+XG4gICAgICA8aT41MC1taW4gcmV0dXJuIGluZGl2aWR1YWwgYXBwb2ludG1lbnQmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+Q2xhc3NlczwvaDM+XG4gICAgPHA+XG4gICAgICA8aT40LXNlc3Npb24gKDM2MC1taW4pIGNsYXNzIHNlcmllcyYjeDIwMTQ7ICQxNjA8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5UZWxlTWVudGFsIEhlYWx0aDwvaDM+XG4gICAgPHA+XG4gICAgICA8aT41IHRvIDI1IG1pbnV0ZXMmI3gyMDE0OyAkNzU8L2k+PGJyIC8+XG4gICAgICA8aT4yNi01MCBtaW51dGVzJiN4MjAxNDsgJDE1MDwvaT5cbiAgICA8L3A+XG4gICAgPGJyIC8+XG4gICAgPHA+XG4gICAgICA8aT5cbiAgICAgIDwvaT5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBjbGFzc2VzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGgzPlxuICAgICAgTW9vZCAmIEZvb2RcbiAgICA8L2gzPlxuICAgIDxwPlxuICAgICAgTW9vZCAmIEZvb2QgaXMgYSBjbGFzcyBkZXNpZ25lZCBmb3IgaW5kaXZpZHVhbHMgc3RydWdnbGluZyB3aXRoIG92ZXJlYXRpbmcsIG1pbmRsZXNzIGVhdGluZywgc3RyZXNzIGVhdGluZywgZW1vdGlvbmFsIGVhdGluZywgc2hhbWUgYXJvdW5kIGVhdGluZywgb3IgYmluZ2UgZWF0aW5nLiBUaGUgY291cnNlIGlzIHN0cnVjdHVyZWQgaW50byA0IGNsYXNzZXMgZWFjaCBsYXN0aW5nIDkwIG1pbnV0ZXMuIFRoZSBjbGFzcyBjZW50ZXJzIG9uIHByZXNlbnRlZCBtYXRlcmlhbCB0aG91Z2ggcXVlc3Rpb25zIGFuZCBwYXJ0aWNpcGF0aW9uIGFyZSB3ZWxjb21lIGFuZCBlbmNvdXJhZ2VkLiBDbGFzcyBtYXRlcmlhbHMgYWxzbyBpbmNsdWRlIGhhbmRvdXRzIGFuZCBhdC1ob21lIHByYWN0aWNlIGV4ZXJjaXNlcy4gRHVyaW5nIHRoZSBjb3Vyc2Ugb2YgdGhlIGNsYXNzZXMgd2Ugd2lsbCBjb3ZlciB0b3BpY3MgaW5jbHVkaW5nOiB3aGF0IGVtb3Rpb25hbCBlYXRpbmcgaXMsIGN1bHR1cmFsIGltcGxpY2F0aW9ucywgZW52aXJvbm1lbnRhbCBpbXBhY3RzLCBzZXQgcG9pbnQgdGhlb3J5LCBlbW90aW9uYWwgdnMgcGh5c2ljYWwgaHVuZ2VyLCBiaW5nZSBlYXRpbmcgY3ljbGUsIGludGVycGVyc29uYWwgZHluYW1pY3MgYXJvdW5kIGZvb2QsIHNlbGYtdGFsaywgYmVoYXZpb3IgYW5hbHlzaXMgJiBiZWhhdmlvciBjaGFuZ2UsIG1pbmRmdWwgZWF0aW5nLCBsb3ZpbmcgbGltaXRzLCBzZWxmLWNvbXBhc3Npb24sIG1hbmFnaW5nIGRpZmZpY3VsdCBlbW90aW9ucywgaGFiaXQgZm9ybWF0aW9uLCBzdGFnZXMgb2YgY2hhbmdlLCBhbmQgaGVhbHRoeSBlYXRpbmcgZ3VpZGVsaW5lcy4gQnkgdGhlIGVuZCBvZiB0aGUgY2xhc3Mgc2VyaWVzIHBhcnRpY2lwYW50cyB3aWxsIGJlIGFibGUgdG8gcmVjb2duaXplIG9wcG9ydHVuaXRpZXMgZm9yLCBwcmVwYXJlIGZvciwgYW5kIG1ha2UgcG9zaXRpdmUgY2hhbmdlcyBpbiB0aGVpciByZWxhdGlvbnNoaXBzIHdpdGggdGhlbXNlbHZlcywgZm9vZCwgYW5kIHRoZWlyIGVudmlyb25tZW50LlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IHJlc291cmNlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxwPlxuICAgICAgVGhlIGJlbG93IGFyZSByZXNvdXJjZXMgdGhhdCBJIGZpbmQgdG8gYmUgY2xpbmljYWxseSB2YWx1YWJsZS4gSSBoYXZlIG5vIGFmZmlsaWF0aW9uIHdpdGggYW55IG9mIHRoZSBpbmRpdmlkdWFscyBvciBlbnRpdGllcyBpbmRpY2F0ZWQgYmVsb3cuIFRoZXNlIHJlc291cmNlcyBhcmUgcHJvdmlkZWQgcHVyZWx5IGR1ZSB0byBteSBwZXJjZXB0aW9uIG9mIHRoZWlyIGNsaW5pY2FsIGJlbmVmaXQuIEkgcmVjZWl2ZSBubyBjb21wZW5zYXRpb24gb2YgYW55IGtpbmQgZm9yIHNoYXJpbmcgdGhlc2UgcmVzb3VyY2VzLlxuICAgIDwvcD5cbiAgICA8aDM+V2VicGFnZXM8L2gzPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYW54aWV0eWNhbmFkYS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QW54aWV0eSBDYW5hZGE8L2E+IGlzIGFuIGV4Y2VsbGVudCB3ZWIgcmVzb3VyY2UgZm9yIGV2aWRlbmNlIGJhc2VkIGluZm9ybWF0aW9uIGFib3V0IGFueGlldHkuIFRoZSB3ZWJzaXRlIGlzIHdyaXR0ZW4gaW4gY2xlYXIgbGFuZ3VhZ2UgdGhhdCBpcyB0aG91Z2h0ZnVsLCBlYXN5IHRvIHVuZGVyc3RhbmQsIGFuZCBoZWxwZnVsLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL21hcHMuYW54aWV0eWNhbmFkYS5jb20vY291cnNlcy9teS1hbnhpZXR5LXBsYW4tbWFwLWZvci1hZHVsdHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TXkgQW54aWV0eSBQbGFuPC9hPiBpcyB0aGUgb25saW5lIGNvdXJzZSBhc3NvY2lhdGVkIHdpdGggQW54aWV0eSBDYW5hZGEuIEl0IGlzIGEgZnJlZSBjb3Vyc2UgdGhhdCBwcm92aWRlcyBleGNlbGxlbnQgaW5mb3JtYXRpb24gaW4gYWRkaXRpb24gdG8gcHJhY3RpY2FsIHRvb2xzIGFuZCBwcmFjdGljZXMgZm9yIG1hbmFnaW5nIGFueGlldHkgYW5kIGFueGlldHktYmFzZWQgY29uZGl0aW9ucy5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5CcmVuZSBCcm93bjwvYT4gaXMgYW4gYXV0aG9yLCByZXNlYXJjaGVyLCBhbmQgc3BlYWtlciB0aGF0IEkgaGlnaGx5IHJlY29tbWVuZC4gVGhlIGxpbmsgaXMgdG8gaGVyIG1haW4gd2VicGFnZS4gQmVsb3cgYXJlIHNwZWNpZmljIHJlc291cmNlcyBvZiBoZXJzIHRoYXQgSSByZWNvbW1lbmQuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2dzYy5iZXJrZWxleS5lZHUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIEdyZWF0ZXIgR29vZCBTY2llbmNlIENlbnRlcjwvYT4tIEJlcmtlbGV5IGlzIGEgY2VudGVyIG9mIHJlc2VhcmNoIGFuZCBpbm5vdmF0aW9uIGZvY3VzaW5nIG9uIG1ha2luZyBwb3NpdGl2aXR5IGFuZCBwb3NpdGl2ZSBjaGFuZ2UgYWNjZXNzaWJsZSB0byBhbGwuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVkeC5vcmcvY291cnNlL3RoZS1zY2llbmNlLW9mLWhhcHBpbmVzcy0wXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIFNjaWVuY2Ugb2YgSGFwcGluZXNzPC9hPiBpcyB0aGUgb25saW5lIGNvdXJzZSBmcm9tIHRoZSBHcmVhdGVyIEdvb2QgU2NpZW5jZSBDZW50ZXIuIEl0IGlzIGEgZnJlZSA4LXdlZWsgY291cnNlIHRoYXQgcHJvdmlkZXMgdG9vbHMgdG8gaGFwcGllciBleHBlcmllbmNlcyBhbmQgZ3JlYXRlciBtZWFuaW5nIGluIGxpZmUuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2dpYS5iZXJrZWxleS5lZHUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R3JlYXRlciBHb29kIGluIEFjdGlvbjwvYT4gcHJvdmlkZXMgZG9hYmxlIHByYWN0aWNlcyBmb3IgbWFraW5nIGNvbmNyZXRlIGFuZCBpbXBhY3RmdWwgcG9zaXRpdmUgY2hhbmdlc1xuICAgIDwvcD5cblxuICAgIDxoMz5WaWRlb3M8L2gzPlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlZC5jb20vdGFsa3MvYnJlbmVfYnJvd25fb25fdnVsbmVyYWJpbGl0eT91dG1fY2FtcGFpZ249dGVkc3ByZWFkJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT10ZWRjb21zaGFyZVwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBQb3dlciBvZiBWdWxuZXJhYmlsaXR5LSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGVkLmNvbS90YWxrcy9icmVuZV9icm93bl9saXN0ZW5pbmdfdG9fc2hhbWU/dXRtX2NhbXBhaWduPXRlZHNwcmVhZCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dGVkY29tc2hhcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaXN0ZW5pbmcgdG8gU2hhbWUtIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMjYxMzQ4NzA5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3VwZXJTb3VsIFNlc3Npb25zOiBUaGUgQW5hdG9teSBvZiBUcnVzdC0gQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vdmlkZW9zL1wiIHRhcmdldD1cIl9ibGFua1wiPkFkZGl0aW9uYWwgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8veW91dHUuYmUvSXZ0WkJVU3BscjRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgU3BhY2UgQmV0d2VlbiBTZWxmLUVzdGVlbSBhbmQgU2VsZi1Db21wYXNzaW9uLSBLcmlzdGluIE5lZmY8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vc2VsZi1jb21wYXNzaW9uLm9yZy92aWRlb3MvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QWRkaXRpb25hbCBLcmlzdGluIE5lZmY8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlZC5jb20vdGFsa3Mvc2FuZHJhX2FhbW9kdF93aHlfZGlldGluZ19kb2Vzbl90X3VzdWFsbHlfd29yaz91dG1fY2FtcGFpZ249dGVkc3ByZWFkJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT10ZWRjb21zaGFyZVwiIHRhcmdldD1cIl9ibGFua1wiPldoeSBEaWV0aW5nIERvZXNuJ3QgVXN1YWxseSBXb3JrLSBTYW5kcmEgQWFtb2R0PC9hPjxiciAvPlxuXG4gICAgPGgzPkF1ZGlvIFJlY29yZGluZ3M8L2gzPlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vY2VudGVyZm9ybXNjLm9yZy9wcmFjdGljZS1tc2MvZ3VpZGVkLW1lZGl0YXRpb25zLWFuZC1leGVyY2lzZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWluZGZ1bCBTZWxmIENvbXBhc3Npb24gTWVkaXRhdGlvbnM8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnVjbGFoZWFsdGgub3JnL21hcmMvbWluZGZ1bC1tZWRpdGF0aW9uc1wiIHRhcmdldD1cIl9ibGFua1wiPlVDTEEgTWVkaXRhdGlvbnMgKEFsc28gYXZhaWxhYmxlIGluIFNwYW5pc2ghKTwvYT48YnIgLz5cblxuICAgIDxoMz5Cb29rczwvaDM+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2VuZWVucm90aC5jb20vYm9va3MvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V29tZW4sIEZvb2QsIGFuZCBHb2QgYnkgR2VuZWVuIFJvdGg8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vYm9va3MtYXVkaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIEdpZnRzIG9mIEltcGVyZmVjdGlvbiBieSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9ib29rcy1hdWRpby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EYXJpbmcgR3JlYXRseSBieSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9ib29rcy1hdWRpby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SaXNpbmcgU3Ryb25nIGJ5IEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgY2xpZW50RG9jdW1lbnRzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHA+XG4gICAgICBUaGUgZm9sbG93aW5nIGZvcm1zIGFyZSBmb3IgeW91ciByZXZpZXcuIElmIHdlIGhhdmUgc2NoZWR1bGVkIGFuIGluLXBlcnNvbiBhcHBvaW50bWVudCwgcGxlYXNlIHJlYWQgY2FyZWZ1bGx5IGVhY2ggb2YgdGhlIGZvcm1zIGJlbG93LiBQbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIGZpcnN0IHRocmVlIGZvcm1zIHRvIG91ciBmaXJzdCBhcHBvaW50bWVudC4gV2Ugd2lsbCByZXZpZXcgdGhlbSB0b2dldGhlci4gSWYgeW91IHdvdWxkIGxpa2UgZm9yIHlvdXIgaGVhbHRoIGluZm9ybWF0aW9uIHRvIGJlIHNoYXJlZCB3aXRoIGFub3RoZXIgaW5kaXZpZHVhbCBvciBncm91cCwgb3Igd291bGQgbGlrZSBtZSB0byBnYXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGVtLCBwbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIFJlbGVhc2Ugb2YgSW5mb3JtYXRpb24gZm9ybSB0byB5b3VyIG5leHQgYXBwb2ludG1lbnQuXG4gICAgPC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL0luZm9ybWVkIENvbnNlbnQucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+SW5mb3JtZWQgQ29uc2VudDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9JbnRha2UgRm9ybS5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5JbnRha2UgRm9ybTwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9SZWNlaXB0IG9mIEZvcm1zLnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlJlY2VpcHQgb2YgRm9ybXM8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvUHJpdmFjeSBQb2xpY3kucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvUk9JLnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlJlbGVhc2Ugb2YgSW5mb3JtYXRpb248L2E+XG4gICAgICA8L2xpPlxuXG4gICAgPC91bD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cblxuXG5jb25zdCBDYXJkMSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aXRsZSA9IHByb3BzLnRpdGxlID9cbiAgICAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC10aXRsZSc+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICkgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2NhcmQgY2FyZC0xJ1xuICAgID5cbiAgICAgIHt0aXRsZX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxuICAgICAgICB7cHJvcHMuYm9keX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuXG5cbmNvbnN0IFBhZ2VUaXRsZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlLXRpdGxlJyBpZD0ndG9wJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmNsYXNzIERyYXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoYW5kbGVNZWV0Q2xpY2ssXG4gICAgICBoYW5kbGVQcmFjdGljZUNsaWNrLFxuICAgICAgaGFuZGxlU2VydmljZXNDbGljayxcbiAgICAgIGhhbmRsZUNsYXNzZXNDbGljayxcbiAgICAgIGhhbmRsZUNvbnRhY3RDbGlja1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgYWN0aXZlID0gJydcblxuICAgIGNvbnN0IG1lbnVTdHlsZSA9IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcicsXG4gICAgICBwYWRkaW5nOiAxMFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RyYXdlcic+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lZXRDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnaGVscCcgfSl9XG4gICAgICAgIHN0eWxlPXt7Li4ubWVudVN0eWxlLCBib3JkZXJUb3A6ICcxcHggc29saWQgY3VycmVudENvbG9yJ319XG4gICAgICA+XG4gICAgICAgIE1lZXQgRHIuIFNtaXRoXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJhY3RpY2VDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnaGVscCcgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFByYWN0aWNlIEFyZWFzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17aGFuZGxlU2VydmljZXNDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnc2VydmljZXMnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBTZXJ2aWNlc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsYXNzZXNDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY2xhc3NlcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIENsYXNzZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250YWN0Q2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NvbnRhY3QnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBDb250YWN0XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0byxcbiAgICAgIHRleHQsXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2xhc3Nlc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiAke2NsYXNzZXN9YH1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL0FwcCc7XG5cbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5cblJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyBcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9