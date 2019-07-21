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
exports.push([module.i, "* {\n  color: #3f4c4e;\n}\n\nh2 {\n  text-align: center;\n  font-size: 3rem;\n  font-family: 'Dancing Script', cursive;\n  margin: 0;\n}\n\nbody {\n  margin: 0;\n  position: relative;\n}\n\n.navMenu {\n  font-size: 18px;\n  position: relative;\n}\n\n.backdrop {\n  overflow: hidden;\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n}\n\n.hero {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 100%;\n}\n\n.content {\n  margin-top: 50px;\n}\n\n.hero-content {\n  width: 100%;\n  display: flex;\n  height: 85vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.hero-content blockquote {\n  width: 60%;\n}\n\n.hero-content h1 {\n  /* color: #FFFFFF; */\n}\n\nblockquote footer {\n  text-align: end;\n  font-size: 22px;\n  /* color: #FFFFFF; */\n}\n\n.meet {\n  display: flex;\n  background-color: #EDEAE5;\n  padding: 30px;\n\n}\n\n\n\n\n.profile {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n}\n\n.profilePhoto {\n  width: 100%;\n  max-width: 450px;\n  min-width: 0;\n  min-height: 0;\n  object-fit: contain;\n  border-radius: 25px;\n}\n\n.bio {\n  flex: 1 0 auto;\n  margin: 20px;\n  max-width: 50%;\n}\n\n.bio .bioSubtitle {\n  text-align: center;\n}\n\n.bio p {\n  word-wrap: break-word;\n  /* padding: 0px 30px; */\n}\n\n@media screen and (max-width: 400px) {\n  .meet {\n    flex-direction: column;\n  }\n\n  .bio,\n  .profile {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n\n.practiceAreas {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n\n.practiceAreas .areas {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 30px;\n  align-items: space-between;\n  justify-content: center;\n}\n\n.practiceAreas .areas>.area {\n  display: flex;\n  flex: 1 0 290px;\n  max-width: 290px;\n  height: 320px;\n  background: #F7F7F7;\n  border-radius: 2px;\n  flex-direction: column;\n  margin: 0 30px 30px 0;\n  position: relative;\n}\n\n.areaImage {\n  width: 100%;\n  height: 200px;\n  background-color: lightgray;\n}\n\n.areaEatingConcerns {\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left bottom -50px;\n}\n\n.areaLifestyle {\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -65px;\n}\n\n.areaMedicalProblems {\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left;\n}\n\n.areaRelationships {\n  background: url(" + ___CSS_LOADER_URL___4___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n\n.areaStress {\n  background: url(" + ___CSS_LOADER_URL___5___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n\n.areaTransitions {\n  background: url(" + ___CSS_LOADER_URL___6___ + ") no-repeat;\n  background-size: cover;\n  background-position: left -20px;\n}\n\n.areaText {\n  font-size: 30px;\n  height: 120px;\n  max-height: 120px;\n}\n\n.areaText div {\n  margin-left: 42px;\n  margin-top: 12px;\n}\n\n.areaOverlay {\n  background: transparent;\n  border: 1px solid black;\n  border-radius: 2px;\n  position: absolute;\n  width: 230px;\n  height: 260px;\n  margin: 30px;\n}\n\n.services {\n  height: 400px;\n  background-color: #FBEEC1;\n  display: flex;\n}\n\n.servicesDescription {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n}\n\n.servicesImage {\n  width: 50%;\n  background: url(" + ___CSS_LOADER_URL___7___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media screen and (max-width: 400px) {\n  .servicesDescription {\n    width: 100%;\n  }\n\n  .servicesImage {\n    width: 0%;\n    display: none;\n  }\n\n  .hero-content blockquote h1 {\n    font-size: 1.75rem;\n  }\n\n  .hero-content blockquote footer {\n    font-size: 1.25rem;\n  }\n}\n\n.button {\n  display: inline-block;\n  border: none;\n  border-radius: 2px;\n  margin: 0;\n  text-decoration: none;\n  background: rgba(171, 208, 230, 1);\n  font-size: 18px;\n  cursor: pointer;\n  text-align: center;\n  transition: background 200ms ease-in-out, transform 100ms ease;\n  -webkit-appearance: none;\n  padding: 10px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.button:hover {\n  background: rgb(202, 226, 240);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.readMore {\n  display: flex;\n  justify-content: center;\n}\n\n.classes {\n  display: flex;\n  justify-content: center;\n  background: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n.contact {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n.contact form {\n  margin-top: 30px;\n}\n\n\n.group {\n  position: relative;\n  margin-bottom: 45px;\n}\n\ninput,\ntextarea {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #3f4c4e;\n  background: transparent;\n  color: #3f4c4e;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n/* LABEL ======================================= */\nlabel {\n  color: #3f4c4e;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n/* active state */\ninput:focus~label,\ninput:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\ntextarea {\n  resize: none;\n  padding: 0;\n}\n\ntextarea:focus~label,\ntextarea:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n/* TODO learn this */\n\n/* BOTTOM BARS ================================= */\n.bar {\n  position: relative;\n  display: block;\n  width: 300px;\n}\n\n.bar:before,\n.bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #3f4c4e;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar:before {\n  left: 50%;\n}\n\n.bar:after {\n  right: 50%;\n}\n\n/* active state */\ninput:focus~.bar:before,\ninput:focus~.bar:after {\n  width: 50%;\n}\n\n/* active state */\ntextarea:focus~.bar:before,\ntextarea:focus~.bar:after {\n  width: 50%;\n}\n\n/* HIGHLIGHTER ================================== */\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n/* active state */\ninput:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* active state */\ntextarea:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* ANIMATIONS ================ */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@-moz-keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #EDEAE5;\n  padding: 20px;\n}\n\n#address:before {\n  content: '\\007C';\n  padding: 0 15px\n}\n\n#address:after {\n  content: '\\007C';\n  padding: 0 15px;\n}\n\n@media screen and (max-width: 776px) {\n\n  .footer {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  #address:before {\n    content: none;\n    padding: 0\n  }\n  \n  #address:after {\n    content: none;\n    padding: 0;\n  }\n}\n\n\n.link:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  bottom: -2px;\n  left: 0;\n  background: #3f4c4e;\n  visibility: hidden;\n  border-radius: 5px;\n  transform: scaleX(0);\n  transition: .25s linear;\n}\n\n.link:hover:before,\n.link:focus:before {\n  visibility: visible;\n  transform: scaleX(1);\n}\n\n/* .navMenu:before {\n  bottom: -5px !important;\n} */\n\n.contact {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___8___ + ");\n}\n\n.moreClasses {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___9___ + ");\n}\n\n.moreResources {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___10___ + ");\n}\n\n.signature {\n  font-family: 'Dancing Script', cursive;\n  font-size: 26px;\n}\n\n.navMenu:hover {\n  filter: brightness(1.2);\n}\n\n.page-title {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.page-title .title {\n  font-size: 4rem;\n  font-family: 'Dancing Script', cursive;\n}\n\n.card {\n  background: #F7F7F7;\n  border-radius: 2px;\n  margin: 50px 15%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  min-width: 100px;\n}\n\n.card-body {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  min-height: 100px;\n  padding: 20px;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  padding: 20px;\n  border-bottom: 1px solid #222222;\n  height: 100%;\n}\n\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.card-2 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n}\n\n.background {\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n\n.drawer-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.30);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  z-index: 20;\n}\n\n.drawer-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  width: 155px;\n  height: calc(100vh - 50px);\n  z-index: 100;\n  /* transition: all 0.3s ease-in-out; */\n  top: 50px;\n  position: fixed;\n}\n\n.drawer {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: #EDEAE5;\n  justify-content: flex-start;\n  box-shadow: 11px 10px 8px 0px rgba(0, 0, 0, 0.25), 10px 0 5px -5px rgba(0, 0, 0, 0);\n  transition: none;\n}\n\n.drawer+.dark {\n  background-color: #C0C3C6;\n}\n\n.drawer-button {\n  width: 100%;\n  height: 40px;\n}\n\n.header-nav-button {\n  height: 40px;\n  width: 100px;\n}\n\n.drawer-item {\n  display: flex;\n}\n\n.drawer-item>div {\n  flex: 1;\n  padding-bottom: 10px;\n}\n\n.header-hamburger {\n  cursor: pointer;\n}\n\n.header-hamburger:hover * {\n  color: #879092;\n}\n\n.hide {\n  display: none;\n}\n\n/* .moreServices h2 {\n  text-align: center;\n  font-size: 3rem;\n  margin: unset;\n  font-family: Roboto, sans-serif;\n} */", ""]);


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

      if (width > 800) {
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

        if (width > 800 && showHamburger) {
          _this2.setState({
            showDrawer: false,
            showHamburger: false
          });
        } else if (width < 800 && !showHamburger) {
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

      var onDrawerPracticeClick = function onDrawerPracticeClick() {
        _this3.props.onNav({
          name: 'practice',
          scrollTo: 0,
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

      var onDrawerDocumentsClick = function onDrawerDocumentsClick() {
        _this3.props.onNav({
          name: 'docs',
          scrollTo: 0,
          dock: true
        });
      };

      var onDrawerResourcesClick = function onDrawerResourcesClick() {
        _this3.props.onNav({
          name: 'resources',
          scrollTo: 0,
          dock: true
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Drawer, {
        handleContactClick: onDrawerContactClick,
        handleServicesClick: onDrawerServicesClick,
        handlePracticeClick: onDrawerPracticeClick,
        handleClassesClick: onDrawerClassesClick,
        handleDocumentsClick: onDrawerDocumentsClick,
        handleResourcesClick: onDrawerResourcesClick
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
        minHeight: "calc(100vh - 60px)"
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
        name: 'practice',
        scrollTo: 0
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
      'navMenu--active': active === 'practice'
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
        name: 'docs',
        scrollTo: 0
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
      'navMenu--active': active === 'docs'
    }),
    style: menuStyle
  }, "Documents"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: 'resources',
        scrollTo: 0
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
      'navMenu--active': active === 'resources'
    }),
    style: menuStyle
  }, "Resources"));
};

var Footer = function Footer(props) {
  var onNav = props.onNav;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Stephanie Smith, Psy.D."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "address"
  }, "801 Alhambra Blvd, Suite 2B Sacramento, CA 95816"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "(916) 399-3615"));
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Health", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Difficulties"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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


var meetSteph = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome and Thank you for visiting! This is a place to explore the possibility of change for a better tomorrow. There is no \u201Cone size fits all\u201D approach to our time together and I work collaboratively with my clients to create an environment of respect and compassion that can be applied to renew their lives. Therapy has the power to both soothe and transform and I use techniques of one-on-one therapy and classes to spark meaningful and lasting change. I am known by my clients as being down to earth, genuine, and relatable. I look forward to partnering together to build your healthier tomorrow.");
var practiceAreas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Eating Concerns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Individuals noticing mindless, stress, emotional, or binge eating behaviors are welcome to consider both individual and class-based therapies with me. My approach to these concerns recognizes the complex role eating can play as a mechanism of coping for individual, family, and culturally systemic issues. We work together to acknowledge the fullness of this role as well as it's history, while honoring the desire that may exist to change. Through our work we can begin to develop new and healthier coping strategies as a natural outcome of increased awareness and self-compassion. I tailor my approach to the needs and style of the individual with whom I am working."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Lifestyle Changes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Most of us can relate to the running mental list of things we know we \"should\" be doing in order to be healthier. Maybe this is moving our bodies more, eating differently, improving  sleep habits, or disconnecting from technology. Maybe it could be these things plus many more! While certainly excellent habits, looking at a list of personal wellness \"to dos\" can be overwhelming. In fact, we often avoid thinking about these healthy living items because it can feel hopeless. Together we can create a plan of small steps to work towards connecting behavior changes with your deepest values. Things that may have felt forced in the past can become things we are eager for. I will leverage my training in Lifestyle Medicine to help set manageable and research supported aims to produce real improvements in your health."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Phase of Life Issues/Life Transitions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Though the phrase, \"the only thing constant is change\" is one familiar to many of us, this can be little comfort during the turmoil of a significant transition. Changes in life circumstances can impact us on every level of our being and external life. Seeking therapy during these times can be both anchor and guide light. I will support you to process the loss of how things have been. When you are ready, we will set consciously developed goals for the phase of life that you find yourself in now. We will work together to identify healthy core components of who you are evolving to be and center our attention to nurture this growth. There is no set timeline of how long an adjustment period lasts. I will help you to move into the next part of your life in the healthful ways, as quickly as is reasonable, and in complete respect for your own pace."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Relationship Challenges"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Romantic, family, social, and occupational relationships can all be sources of significant pleasure and consequently, significant pain. There are a multitude of reasons relationships can become troubled. Many of the roots of these reasons can be traced to communication clarity. While we cannot change other people, we can identify personal qualities in ourselves that we wish to change for the wellbeing of a current or future relationship. Working towards identifying these areas, creating mindful awareness around them, and making values based changes can provide both personal benefits and improvements to the relationship. We can work together to identify and optimize these changes in a compassionate and respectful environment while prioritizing effective and clear communication as the cornerstone to improved relationships."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Health Difficulties"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There is no doubt that our physical wellbeing impacts our psychological wellbeing and vice versa. Whether you are looking for support in improving your management of a health difficulty, handling the stress around it, or believe there may be lifestyle changes that will reverse the condition, I would be happy to support this aspect of your health. I am a trained health psychologist and work regularly with both chronic and acute medical conditions. I have personal and professional experience with the impacts physical health can have not only on oneself, but also on those around us. I believe support can make a substantive difference in managing a health concern as well as the emotional and social impacts of this. I will work with you to accept those realities that are unchanging as well as recognize opportunities for positive growth."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Exceptions to the above"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Due to the part time nature of my private practice, I am unfortunately unable at this time to work with those who have active and acute suicidal or homicidal thoughts or are engaging in self-harming behaviors. While it is not uncommon for these thoughts or behaviors to be part of the lives of those who fall into one or more of the categories above, I am unable to be available with the consistency or regularity that is needed to help support active and acute safety concerns. Should an active and acute safety concern occur during our work together, I will work together with you to find appropriate care that can meet your needs. It is likely that with stabilization there is potential to return to our work together if that is determined to be in your best interest. I am happy to discuss this in further detail and welcome any questions or concerns."));
var services = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  style: {
    textAlign: 'center'
  }
}, "What to Expect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Telephone Consult"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As our first contact for either individual therapy or classes I offer a complementary 15-minute phone consultation. This is an opportunity for us to connect about the issues that bring you into care, and to determine whether working together is the best fit for your needs. I can answer any questions that you may have about coming into care and set up your first appointment or class.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "15-min initial telephone consult\u2014 free")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Initial Appointment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "An initial individual therapy appointment is a 60-minute appointment. During this appointment I will review your complete intake form with you to ensure that I have an appropriate understanding of some of your history, what brings you into care, and your goals for our work together. We will also use this appointment to create some initial goals for care and to set up our expectations for treatment.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "60-min initial individual appointment\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Return Appointments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Return appointments are 50-minute appointments. During return appointments we will work together on your goals and I will support you through the process. We will regularly check in about the progress of care and make adjustments as needed to ensure that we are working effectively together.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "50-min return individual appointment\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Classes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Classes are 90 minutes in length. Due to space needed, classes are held at a nearby location separate from the main therapy office. More information about class and class content can be found under the \"Classes\" tab. Though classes take place over 4 sessions, the full fee must be paid in advance of the first session. After this payment, no additional charges are incurred for the remainder of the classes unless an additional service is requested or provided.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "4-session (360-min) class series\u2014 $160")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "TeleMental Health"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "On occasion it may be indicated for us to engage in tele-health either over the phone or through video communication. These services are offered to individuals only after they have been initially established in-person through at least one in-person appointment. Due to licensing requirements, I am unable to provide these services to anyone out-of-state or country at the time of service. There are a variety of platforms available for this service and, though convenient, it is important to be aware that they are not HIPAA compliant. Completing the Informed Consent form acknowledges your understanding of this and acceptance of the risk should we utilize this format of care.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "5 to 25 minutes\u2014 $75"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "26-50 minutes\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  style: {
    textAlign: 'center'
  }
}, "Insurance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I am an \"out of network provider\" for insurance networks but will provide you a Superbill which you may use to request reimbursement. The coverage you receive is entirely dependent upon the plan that you have. I recommend that you contact your insurance company directly to determine your specific coverage. Some questions that may be helpful in this conversation include:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Do I have mental health insurance benefits that cover psychotherapy?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Does my policy cover an out of network Licensed Psychologist? If so, what percentage is covered or what is the coverage amount per therapy session?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "What is my deductible and has it been met?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Are my medical and mental health/behavioral health deductibles separate?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "How many sessions per year does my health insurance cover?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Does the diagnosis matter? Are some diagnoses covered and others not?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "What paperwork or forms do I need to submit for sessions to be covered?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Is approval required from my primary care physician?")));
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
          handlePracticeClick = _this$props.handlePracticeClick,
          handleServicesClick = _this$props.handleServicesClick,
          handleClassesClick = _this$props.handleClassesClick,
          handleContactClick = _this$props.handleContactClick,
          handleDocumentsClick = _this$props.handleDocumentsClick,
          handleResourcesClick = _this$props.handleResourcesClick;
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
        onClick: handlePracticeClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
          'navMenu--active': active === 'practice'
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
        onClick: handleDocumentsClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
          'navMenu--active': active === 'docs'
        }),
        style: menuStyle
      }, "Documents"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: handleContactClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
          'navMenu--active': active === 'contact'
        }),
        style: menuStyle
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: handleResourcesClick,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
          'navMenu--active': active === 'resources'
        }),
        style: menuStyle
      }, "Resources"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcz9lODVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3Jlcy9lYXRpbmdjb25jZXJucy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL2hlcm8uanBnIiwid2VicGFjazovLy8uL3Jlcy9saWZlc3R5bGUyLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbW9yZUNsYXNzZXMuanBnIiwid2VicGFjazovLy8uL3Jlcy9tb3JlUmVzb3VyY2VzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvcmVsYXRpb25zaGlwcy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3NlcnZpY2VzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvdHJhbnNpdGlvbnMuanBnIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInBhZ2UiLCJkb2NrIiwiY2xvc2VEcmF3ZXIiLCJjdXJyZW50Iiwic2hvd0RyYXdlciIsInN0YXRlIiwibmFtZSIsInNjcm9sbFRvIiwic2hvd0hhbWJ1cmdlciIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZW1wbGF0ZVN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmb250RmFtaWx5IiwiY29udGVudCIsImhhbmRsZU5hdiIsInRvZ2dsZURyYXdlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9keSIsImNsYXNzZXMiLCJjbiIsIm92ZXJsYXlDbGFzc2VzIiwib25EcmF3ZXJQcmFjdGljZUNsaWNrIiwib25OYXYiLCJvbkRyYXdlclNlcnZpY2VzQ2xpY2siLCJvbkRyYXdlckNvbnRhY3RDbGljayIsIm9uRHJhd2VyQ2xhc3Nlc0NsaWNrIiwib25EcmF3ZXJEb2N1bWVudHNDbGljayIsIm9uRHJhd2VyUmVzb3VyY2VzQ2xpY2siLCJoYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2siLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwidW5kZWZpbmVkIiwiYmVoYXZpb3IiLCJib2R5U3R5bGUiLCJtaW5IZWlnaHQiLCJuIiwicmVuZGVyRHJhd2VyIiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJpbmxpbmVTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsIm1lbnVTdHlsZSIsImN1cnNvciIsImFjdGl2ZSIsIm9wZW5EcmF3ZXIiLCJyZW5kZXJIYW1idXJnZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJGb290ZXIiLCJIb21lIiwibWVldFN0ZXBoIiwiUHJhY3RpY2VBcmVhcyIsInByYWN0aWNlQXJlYXMiLCJTZXJ2aWNlcyIsInNlcnZpY2VzIiwiQ2xhc3NlcyIsIkNsaWVudERvY3VtZW50cyIsImNsaWVudERvY3VtZW50cyIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIkZlZXMiLCJmZWVzIiwidGV4dEFsaWduIiwiQ2FyZDEiLCJ0aXRsZSIsImJvZHkiLCJQYWdlVGl0bGUiLCJEcmF3ZXIiLCJoYW5kbGVQcmFjdGljZUNsaWNrIiwiaGFuZGxlU2VydmljZXNDbGljayIsImhhbmRsZUNsYXNzZXNDbGljayIsImhhbmRsZUNvbnRhY3RDbGljayIsImhhbmRsZURvY3VtZW50c0NsaWNrIiwiaGFuZGxlUmVzb3VyY2VzQ2xpY2siLCJmb250U2l6ZSIsImJvcmRlckJvdHRvbSIsInBhZGRpbmciLCJCdXR0b24iLCJ0byIsInRleHQiLCJvbkNsaWNrIiwiUmVhY3RET00iLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStE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OztBQXFFcEIsSUFBTXVFLE1BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFDVztBQUFBLHlCQU1ILEtBQUsvRixLQU5GO0FBQUEsVUFFTGdHLEVBRkssZ0JBRUxBLEVBRks7QUFBQSxVQUdMQyxJQUhLLGdCQUdMQSxJQUhLO0FBQUEsVUFJTEMsT0FKSyxnQkFJTEEsT0FKSztBQUFBLFVBS0x4RSxPQUxLLGdCQUtMQSxPQUxLO0FBUVAsYUFDRSx3RUFFRTtBQUNFLGlCQUFTLG1CQUFZQSxPQUFaLENBRFg7QUFFRSxlQUFPLEVBQUV3RTtBQUZYLFNBSUdELElBSkgsRUFLRyxLQUFLakcsS0FBTCxDQUFXK0MsUUFMZCxDQUZGLENBREY7QUFZRDtBQXJCSDs7QUFBQTtBQUFBLEVBQTRCeEIsNENBQUssQ0FBQ0MsU0FBbEMsRTs7Ozs7Ozs7Ozs7O0FDMTdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTJFLGdEQUFRLENBQUNDLE1BQVQsQ0FBZ0I3RSw0Q0FBSyxDQUFDOEUsYUFBTixDQUFvQnRHLHdDQUFwQixDQUFoQixFQUEwQ3VDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUExQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLHVCOzs7Ozs7Ozs7OztBQ0FBLDBCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL2hlcm8uanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9lYXRpbmdjb25jZXJucy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL2xpZmVzdHlsZTIuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9tZWRpY2FscHJvYmxlbXMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9yZWxhdGlvbnNoaXBzLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX181X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3RyYW5zaXRpb25zLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX183X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvc2VydmljZXMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzhfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zdWNjdWxlbnRCdXJzdC5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL21vcmVDbGFzc2VzLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL21vcmVSZXNvdXJjZXMuanBnXCIpKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBjb2xvcjogIzNmNGM0ZTtcXG59XFxuXFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmF2TWVudSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5iYWNrZHJvcCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVyby1jb250ZW50IGJsb2NrcXVvdGUge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmhlcm8tY29udGVudCBoMSB7XFxuICAvKiBjb2xvcjogI0ZGRkZGRjsgKi9cXG59XFxuXFxuYmxvY2txdW90ZSBmb290ZXIge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgLyogY29sb3I6ICNGRkZGRkY7ICovXFxufVxcblxcbi5tZWV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFQUU1O1xcbiAgcGFkZGluZzogMzBweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLnByb2ZpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA1MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9maWxlUGhvdG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uYmlvIHtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5iaW8gLmJpb1N1YnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJpbyBwIHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIC8qIHBhZGRpbmc6IDBweCAzMHB4OyAqL1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLm1lZXQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJpbyxcXG4gIC5wcm9maWxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnByYWN0aWNlQXJlYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbn1cXG5cXG5cXG5cXG4ucHJhY3RpY2VBcmVhcyAuYXJlYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJhY3RpY2VBcmVhcyAuYXJlYXM+LmFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCAyOTBweDtcXG4gIG1heC13aWR0aDogMjkwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMzBweCAzMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hcmVhSW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uYXJlYUVhdGluZ0NvbmNlcm5zIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTQwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC01MHB4O1xcbn1cXG5cXG4uYXJlYUxpZmVzdHlsZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC02NXB4O1xcbn1cXG5cXG4uYXJlYU1lZGljYWxQcm9ibGVtcyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDE0MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbn1cXG5cXG4uYXJlYVJlbGF0aW9uc2hpcHMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtODBweDtcXG59XFxuXFxuLmFyZWFTdHJlc3Mge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX181X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtODBweDtcXG59XFxuXFxuLmFyZWFUcmFuc2l0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzZfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgLTIwcHg7XFxufVxcblxcbi5hcmVhVGV4dCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgbWF4LWhlaWdodDogMTIwcHg7XFxufVxcblxcbi5hcmVhVGV4dCBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4uYXJlYU92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbi5zZXJ2aWNlcyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUVDMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZXJ2aWNlc0Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5zZXJ2aWNlc0ltYWdlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5zZXJ2aWNlc0Rlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2VydmljZXNJbWFnZSB7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcblxcbi5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzEsIDIwOCwgMjMwLCAxKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxMDBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMjYsIDI0MCk7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLnJlYWRNb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNsYXNzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXG59XFxuXFxuXFxuLmNvbnRhY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmNvbnRhY3QgZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG5cXG4uZ3JvdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNmNGM0ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMzZjRjNGU7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIExBQkVMID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmxhYmVsIHtcXG4gIGNvbG9yOiAjM2Y0YzRlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxuaW5wdXQ6Zm9jdXN+bGFiZWwsXFxuaW5wdXQ6dmFsaWR+bGFiZWwge1xcbiAgdG9wOiAtMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1c35sYWJlbCxcXG50ZXh0YXJlYTp2YWxpZH5sYWJlbCB7XFxuICB0b3A6IC0yMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi8qIFRPRE8gbGVhcm4gdGhpcyAqL1xcblxcbi8qIEJPVFRPTSBCQVJTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5iYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5iYXI6YmVmb3JlLFxcbi5iYXI6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiAwO1xcbiAgYm90dG9tOiAxcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG59XFxuXFxuLmJhcjpiZWZvcmUge1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4uYmFyOmFmdGVyIHtcXG4gIHJpZ2h0OiA1MCU7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbmlucHV0OmZvY3Vzfi5iYXI6YmVmb3JlLFxcbmlucHV0OmZvY3Vzfi5iYXI6YWZ0ZXIge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxudGV4dGFyZWE6Zm9jdXN+LmJhcjpiZWZvcmUsXFxudGV4dGFyZWE6Zm9jdXN+LmJhcjphZnRlciB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBISUdITElHSFRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhpZ2hsaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHRvcDogMjUlO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG5pbnB1dDpmb2N1c34uaGlnaGxpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbnRleHRhcmVhOmZvY3Vzfi5oaWdobGlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgLW1vei1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG59XFxuXFxuLyogQU5JTUFUSU9OUyA9PT09PT09PT09PT09PT09ICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6ICMzZjRjNGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuQC1tb3ota2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6ICMzZjRjNGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVBRTU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jYWRkcmVzczpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFwwMDdDJztcXG4gIHBhZGRpbmc6IDAgMTVweFxcbn1cXG5cXG4jYWRkcmVzczphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXDAwN0MnO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzZweCkge1xcblxcbiAgLmZvb3RlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNhZGRyZXNzOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDBcXG4gIH1cXG4gIFxcbiAgI2FkZHJlc3M6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cXG5cXG4ubGluazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICMzZjRjNGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zaXRpb246IC4yNXMgbGluZWFyO1xcbn1cXG5cXG4ubGluazpob3ZlcjpiZWZvcmUsXFxuLmxpbms6Zm9jdXM6YmVmb3JlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLyogLm5hdk1lbnU6YmVmb3JlIHtcXG4gIGJvdHRvbTogLTVweCAhaW1wb3J0YW50O1xcbn0gKi9cXG5cXG4uY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX184X19fICsgXCIpO1xcbn1cXG5cXG4ubW9yZUNsYXNzZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyArIFwiKTtcXG59XFxuXFxuLm1vcmVSZXNvdXJjZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTBfX18gKyBcIik7XFxufVxcblxcbi5zaWduYXR1cmUge1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5uYXZNZW51OmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5wYWdlLXRpdGxlIC50aXRsZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbjogNTBweCAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmNhcmQtYm9keSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjIyMjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQtMSB7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxufVxcblxcbi5jYXJkLTIge1xcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4uY2FyZC0zIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4uY2FyZC00IHtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcblxcbi5jYXJkLTUge1xcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLmRyYXdlci1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uZHJhd2VyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxNTVweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7ICovXFxuICB0b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5kcmF3ZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUFFNTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJveC1zaGFkb3c6IDExcHggMTBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDEwcHggMCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuXFxuLmRyYXdlcisuZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBDM0M2O1xcbn1cXG5cXG4uZHJhd2VyLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmhlYWRlci1uYXYtYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmRyYXdlci1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcmF3ZXItaXRlbT5kaXYge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaGFtYnVyZ2VyOmhvdmVyICoge1xcbiAgY29sb3I6ICM4NzkwOTI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIC5tb3JlU2VydmljZXMgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luOiB1bnNldDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxufSAqL1wiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvZWF0aW5nY29uY2VybnMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2hlcm8uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2xpZmVzdHlsZTIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL21lZGljYWxwcm9ibGVtcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvbW9yZUNsYXNzZXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL21vcmVSZXNvdXJjZXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3JlbGF0aW9uc2hpcHMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3NlcnZpY2VzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9zdHJlc3NtYW5hZ2VtZW50LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9zdWNjdWxlbnRCdXJzdC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvdHJhbnNpdGlvbnMuanBnXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcblxuXG4vLyBUT0RPOiBhY2Nlc3NpYmlsaXR5XG5cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZToge1xuICAgICAgICBuYW1lOiAnaG9tZScsXG4gICAgICAgIHNjcm9sbFRvOiBudWxsXG4gICAgICB9LFxuICAgICAgc2hvd0hhbWJ1cmdlcjogZmFsc2UsXG4gICAgICBzaG93RHJhd2VyOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmICh3aWR0aCA+IDgwMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEcmF3ZXI6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd0RyYXdlcjogZmFsc2UsXG4gICAgICAgIHNob3dIYW1idXJnZXI6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaG93SGFtYnVyZ2VyXG4gICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgaWYgKHdpZHRoID4gODAwICYmIHNob3dIYW1idXJnZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd0RyYXdlcjogZmFsc2UsXG4gICAgICAgICAgc2hvd0hhbWJ1cmdlcjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgODAwICYmICFzaG93SGFtYnVyZ2VyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dIYW1idXJnZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVOYXYgPSAodGFyZ2V0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IHRhcmdldCB9KTtcblxuICAgIGlmICh0YXJnZXQuZG9jaykge1xuICAgICAgdGhpcy5jbG9zZURyYXdlcigpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURyYXdlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChjdXJyZW50KSA9PiAoe1xuICAgICAgc2hvd0RyYXdlcjogIWN1cnJlbnQuc2hvd0RyYXdlclxuICAgIH0pKTtcbiAgfVxuXG4gIGNsb3NlRHJhd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0RyYXdlcjogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8sIHNhbnMtc2VyaWYnXG4gICAgfTtcblxuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgIG5hbWVcbiAgICB9ID0gcGFnZTtcblxuICAgIGxldCBjb250ZW50ID0gPGRpdiAvPjtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgIGNvbnRlbnQgPSA8SG9tZSBvbk5hdj17dGhpcy5oYW5kbGVOYXZ9IC8+XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHJhY3RpY2UnOlxuICAgICAgICBjb250ZW50ID0gPFByYWN0aWNlQXJlYXMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VydmljZXMnOlxuICAgICAgICBjb250ZW50ID0gPFNlcnZpY2VzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsYXNzZXMnOlxuICAgICAgICBjb250ZW50ID0gPENsYXNzZXMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVzb3VyY2VzJzpcbiAgICAgICAgY29udGVudCA9IDxSZXNvdXJjZXMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZG9jcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8Q2xpZW50RG9jdW1lbnRzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZlZXMnOlxuICAgICAgICBjb250ZW50ID0gPEZlZXMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt0ZW1wbGF0ZVN0eWxlfVxuICAgICAgPlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgc2hvd0hhbWJ1cmdlcj17dGhpcy5zdGF0ZS5zaG93SGFtYnVyZ2VyfVxuICAgICAgICAgIGFjdGl2ZT17bmFtZX1cbiAgICAgICAgICBvbk5hdj17dGhpcy5oYW5kbGVOYXZ9XG4gICAgICAgICAgb3BlbkRyYXdlcj17dGhpcy50b2dnbGVEcmF3ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb2R5XG4gICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICBjbG9zZURyYXdlcj17dGhpcy5jbG9zZURyYXdlcn1cbiAgICAgICAgICBzaG93RHJhd2VyPXt0aGlzLnN0YXRlLnNob3dEcmF3ZXJ9XG4gICAgICAgICAgb25OYXY9e3RoaXMuaGFuZGxlTmF2fVxuICAgICAgICA+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvQm9keT5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhZ2Uuc2Nyb2xsVG8pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcCcpLnNjcm9sbEludG9WaWV3KCksIDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFnZS5zY3JvbGxUbyAhPT0gbnVsbCB8fCBwYWdlLnNjcm9sbFRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgcGFnZS5zY3JvbGxUbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlLnNjcm9sbFRvKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwYWdlLnNjcm9sbFRvID09PSAnbnVtYmVyJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCBwYWdlLnNjcm9sbFRvKSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRHJhd2VyT3ZlcmxheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2xvc2VEcmF3ZXIoKVxuICB9XG5cbiAgcmVuZGVyRHJhd2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd0RyYXdlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbignZHJhd2VyLWNvbnRhaW5lcicsIHtcbiAgICAgICdoaWRlJzogIXNob3dEcmF3ZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IG92ZXJsYXlDbGFzc2VzID0gY24oJ2RyYXdlci1vdmVybGF5Jywge1xuICAgICAgJ2hpZGUnOiAhc2hvd0RyYXdlclxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBvbkRyYXdlclByYWN0aWNlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86IDAsIGRvY2s6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJTZXJ2aWNlc0NsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdzZXJ2aWNlcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyQ29udGFjdENsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICdjb250YWN0JywgZG9jazogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyQ2xhc3Nlc0NsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdjbGFzc2VzJywgc2Nyb2xsVG86IDAsIGRvY2s6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJEb2N1bWVudHNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnZG9jcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJSZXNvdXJjZXNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAncmVzb3VyY2VzJywgc2Nyb2xsVG86IDAsIGRvY2s6IHRydWUgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgaGFuZGxlQ29udGFjdENsaWNrPXtvbkRyYXdlckNvbnRhY3RDbGlja31cbiAgICAgICAgICAgIGhhbmRsZVNlcnZpY2VzQ2xpY2s9e29uRHJhd2VyU2VydmljZXNDbGlja31cbiAgICAgICAgICAgIGhhbmRsZVByYWN0aWNlQ2xpY2s9e29uRHJhd2VyUHJhY3RpY2VDbGlja31cbiAgICAgICAgICAgIGhhbmRsZUNsYXNzZXNDbGljaz17b25EcmF3ZXJDbGFzc2VzQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVEb2N1bWVudHNDbGljaz17b25EcmF3ZXJEb2N1bWVudHNDbGlja31cbiAgICAgICAgICAgIGhhbmRsZVJlc291cmNlc0NsaWNrPXtvbkRyYXdlclJlc291cmNlc0NsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheUNsYXNzZXN9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJhd2VyT3ZlcmxheUNsaWNrfT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgYm9keVN0eWxlID0ge1xuICAgICAgbWluSGVpZ2h0OiBgY2FsYygxMDB2aCAtIDYwcHgpYFxuICAgIH07XG5cbiAgICBjb25zdCBuID0gcGFnZS5uYW1lO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjbih7XG4gICAgICAnbW9yZVNlcnZpY2VzJzogbiA9PT0gJ3NlcnZpY2VzJyxcbiAgICAgICdtb3JlUmVzb3VyY2VzJzogbiA9PT0gJ3Jlc291cmNlcycsXG4gICAgICAnbW9yZURvY3VtZW50cyc6IG4gPT09ICdkb2NzJyxcbiAgICAgICdtb3JlRmVlcyc6IG4gPT09ICdmZWVzJyxcbiAgICAgICdtb3JlQ2xhc3Nlcyc6IG4gPT09ICdjbGFzc2VzJyxcbiAgICAgICdtb3JlUHJhY3RpY2UnOiBuID09PSAncHJhY3RpY2UnXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgIHN0eWxlPXtib2R5U3R5bGV9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckRyYXdlcigpfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGlubGluZVN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIGhlaWdodDogNTAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNFREVBRTUnLFxuICAgIGJveFNoYWRvdzogJzAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKScsXG4gICAgekluZGV4OiAyNCxcbiAgfTtcblxuICBjb25zdCBtZW51U3R5bGUgPSB7XG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgb25OYXYsXG4gICAgc2hvd0hhbWJ1cmdlcixcbiAgICBvcGVuRHJhd2VyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCByZW5kZXJIYW1idXJnZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXItbmF2IGhlYWRlci1oYW1idXJnZXInXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDIwIH19XG4gICAgICAgIG9uQ2xpY2s9e29wZW5EcmF3ZXJ9XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdoYW1idXJnZXInIHdpZHRoPVwiMzRcIiBoZWlnaHQ9XCIzNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelwiIC8+PC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoc2hvd0hhbWJ1cmdlcikge1xuICAgIGlubGluZVN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXtpbmxpbmVTdHlsZX1cbiAgICAgID5cbiAgICAgICAge3JlbmRlckhhbWJ1cmdlcigpfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAndG9wJyB9KX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ3NpZ25hdHVyZScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnaG9tZScgfSl9XG4gICAgICAgICAgc3R5bGU9e3sgLi4ubWVudVN0eWxlLCBtYXJnaW5SaWdodDogMjAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN0ZXBoYW5pZSBTbWl0aCwgUHN5LkQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e2lubGluZVN0eWxlfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAndG9wJyB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdzaWduYXR1cmUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2hvbWUnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBTdGVwaGFuaWUgU21pdGgsIFBzeS5ELlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3ByYWN0aWNlJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgUHJhY3RpY2UgQXJlYXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdzZXJ2aWNlcycsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdzZXJ2aWNlcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFNlcnZpY2VzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnY2xhc3NlcycsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdjbGFzc2VzJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgQ2xhc3Nlc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2RvY3MnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnZG9jcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIERvY3VtZW50c1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ2NvbnRhY3QnIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdjb250YWN0JyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgQ29udGFjdFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3Jlc291cmNlcycsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdyZXNvdXJjZXMnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBSZXNvdXJjZXNcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvbk5hdlxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdmb290ZXInXG4gICAgPlxuICAgICAgPHNwYW4+XG4gICAgICAgIFN0ZXBoYW5pZSBTbWl0aCwgUHN5LkQuXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBpZD0nYWRkcmVzcyc+XG4gICAgICAgIDgwMSBBbGhhbWJyYSBCbHZkLCBTdWl0ZSAyQiBTYWNyYW1lbnRvLCBDQSA5NTgxNlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4+XG4gICAgICAgICg5MTYpIDM5OS0zNjE1XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXYgPlxuICApO1xufTtcblxuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvbk5hdlxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZHJvcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCcgaWQ9J3RvcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvLWNvbnRlbnQnPlxuICAgICAgICAgIDxibG9ja3F1b3RlPlxuICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICBcIkFuZCB0aGUgZGF5IGNhbWUgd2hlbiB0aGUgcmlzayB0byByZW1haW4gdGlnaHQgYXMgYSBidWQgd2FzIG1vcmUgcGFpbmZ1bCB0aGFuIHRoZSByaXNrIGl0IHRvb2sgdG8gYmxvc3NvbS5cIlxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGZvb3Rlcj4tIEFuYWlzIE5pblxuICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVldCBjYXJkLTInIGlkPSdtZWV0JyA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGUnPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3Byb2ZpbGVQaG90byBjYXJkLTEnIHNyYz0ncmVzL3Byb2ZpbGUuanBnJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiaW8nPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nYmlvVGl0bGUnPlxuICAgICAgICAgICAgICBNZWV0IERyLiBTdGVwaGFuaWUgU21pdGhcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2Jpb1N1YnRpdGxlJz5cbiAgICAgICAgICAgICAgQ2xpbmljYWwgUHN5Y2hvbG9naXN0XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICB7bWVldFN0ZXBofVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByYWN0aWNlQXJlYXMnIGlkPSdwcmFjdGljZSc+XG4gICAgICAgICAgPGgyPlByYWN0aWNlIEFyZWFzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYXMnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYUltYWdlIGFyZWFFYXRpbmdDb25jZXJucycgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgRWF0aW5nPGJyIC8+IENvbmNlcm5zXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhTGlmZXN0eWxlJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBMaWZlc3R5bGU8YnIgLz4gQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYVRyYW5zaXRpb25zJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBMaWZlPGJyIC8+IFRyYW5zaXRpb25zXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhUmVsYXRpb25zaGlwcycgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgUmVsYXRpb25zaGlwPGJyIC8+IENoYWxsZW5nZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYUltYWdlIGFyZWFNZWRpY2FsUHJvYmxlbXMnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIEhlYWx0aDxiciAvPiBEaWZmaWN1bHRpZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYUltYWdlIGFyZWFTdHJlc3MnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFN0cmVzczxiciAvPiBNYW5hZ2VtZW50XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVhZE1vcmUnPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3JlYWRNb3JlIGJ1dHRvbicgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncHJhY3RpY2UnLCBzY3JvbGxUbzogMCB9KX0+XG4gICAgICAgICAgICAgIFJFQUQgTU9SRVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdCBjYXJkLTInIGlkPSdjb250YWN0Jz5cbiAgICAgICAgICA8aDI+Q2hhbmdlIGJlZ2lucyB0b2RheTwvaDI+XG4gICAgICAgICAgPGgzPlJlcXVlc3QgYSBjb25zdWx0YXRpb248L2gzPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGhvbmVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxsYWJlbD5QaG9uZTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSdyZWFkTW9yZSc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uJz5TRU5EPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8qKiBIb21lICovXG5cblxuLyoqIFBhZ2VzICovXG5cbmNvbnN0IFByYWN0aWNlQXJlYXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT0nUHJhY3RpY2UgQXJlYXMnXG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIGJvZHk9e3ByYWN0aWNlQXJlYXN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT0nU2VydmljZXMnXG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIGJvZHk9e3NlcnZpY2VzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5jb25zdCBDbGFzc2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9eydDbGFzc2VzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17Y2xhc3Nlc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApO1xufVxuXG5jb25zdCBDbGllbnREb2N1bWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J0NsaWVudCBEb2N1bWVudHMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtjbGllbnREb2N1bWVudHN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbmNvbnN0IFJlc291cmNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnUmVzb3VyY2VzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17cmVzb3VyY2VzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cbmNvbnN0IEZlZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J0ZlZXMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtmZWVzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cblxuXG4vKiogUGFnZXMgY29udGVudHMgKi9cblxuY29uc3QgbWVldFN0ZXBoID0gKFxuICA8cD5cbiAgICBXZWxjb21lIGFuZCBUaGFuayB5b3UgZm9yIHZpc2l0aW5nISBUaGlzIGlzIGEgcGxhY2UgdG8gZXhwbG9yZSB0aGUgcG9zc2liaWxpdHkgb2YgY2hhbmdlIGZvciBhIGJldHRlciB0b21vcnJvdy4gVGhlcmUgaXMgbm8g4oCcb25lIHNpemUgZml0cyBhbGzigJ0gYXBwcm9hY2ggdG8gb3VyIHRpbWUgdG9nZXRoZXIgYW5kIEkgd29yayBjb2xsYWJvcmF0aXZlbHkgd2l0aCBteSBjbGllbnRzIHRvIGNyZWF0ZSBhbiBlbnZpcm9ubWVudCBvZiByZXNwZWN0IGFuZCBjb21wYXNzaW9uIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gcmVuZXcgdGhlaXIgbGl2ZXMuIFRoZXJhcHkgaGFzIHRoZSBwb3dlciB0byBib3RoIHNvb3RoZSBhbmQgdHJhbnNmb3JtIGFuZCBJIHVzZSB0ZWNobmlxdWVzIG9mIG9uZS1vbi1vbmUgdGhlcmFweSBhbmQgY2xhc3NlcyB0byBzcGFyayBtZWFuaW5nZnVsIGFuZCBsYXN0aW5nIGNoYW5nZS4gSSBhbSBrbm93biBieSBteSBjbGllbnRzIGFzIGJlaW5nIGRvd24gdG8gZWFydGgsIGdlbnVpbmUsIGFuZCByZWxhdGFibGUuIEkgbG9vayBmb3J3YXJkIHRvIHBhcnRuZXJpbmcgdG9nZXRoZXIgdG8gYnVpbGQgeW91ciBoZWFsdGhpZXIgdG9tb3Jyb3cuXG4gIDwvcD5cbik7XG5cbmNvbnN0IHByYWN0aWNlQXJlYXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDM+RWF0aW5nIENvbmNlcm5zPC9oMz5cbiAgICA8cD5cbiAgICAgIEluZGl2aWR1YWxzIG5vdGljaW5nIG1pbmRsZXNzLCBzdHJlc3MsIGVtb3Rpb25hbCwgb3IgYmluZ2UgZWF0aW5nIGJlaGF2aW9ycyBhcmUgd2VsY29tZSB0byBjb25zaWRlciBib3RoIGluZGl2aWR1YWwgYW5kIGNsYXNzLWJhc2VkIHRoZXJhcGllcyB3aXRoIG1lLiBNeSBhcHByb2FjaCB0byB0aGVzZSBjb25jZXJucyByZWNvZ25pemVzIHRoZSBjb21wbGV4IHJvbGUgZWF0aW5nIGNhbiBwbGF5IGFzIGEgbWVjaGFuaXNtIG9mIGNvcGluZyBmb3IgaW5kaXZpZHVhbCwgZmFtaWx5LCBhbmQgY3VsdHVyYWxseSBzeXN0ZW1pYyBpc3N1ZXMuIFdlIHdvcmsgdG9nZXRoZXIgdG8gYWNrbm93bGVkZ2UgdGhlIGZ1bGxuZXNzIG9mIHRoaXMgcm9sZSBhcyB3ZWxsIGFzIGl0J3MgaGlzdG9yeSwgd2hpbGUgaG9ub3JpbmcgdGhlIGRlc2lyZSB0aGF0IG1heSBleGlzdCB0byBjaGFuZ2UuIFRocm91Z2ggb3VyIHdvcmsgd2UgY2FuIGJlZ2luIHRvIGRldmVsb3AgbmV3IGFuZCBoZWFsdGhpZXIgY29waW5nIHN0cmF0ZWdpZXMgYXMgYSBuYXR1cmFsIG91dGNvbWUgb2YgaW5jcmVhc2VkIGF3YXJlbmVzcyBhbmQgc2VsZi1jb21wYXNzaW9uLiBJIHRhaWxvciBteSBhcHByb2FjaCB0byB0aGUgbmVlZHMgYW5kIHN0eWxlIG9mIHRoZSBpbmRpdmlkdWFsIHdpdGggd2hvbSBJIGFtIHdvcmtpbmcuXG48L3A+XG5cbiAgICA8aDM+TGlmZXN0eWxlIENoYW5nZXM8L2gzPlxuXG4gICAgPHA+XG4gICAgICBNb3N0IG9mIHVzIGNhbiByZWxhdGUgdG8gdGhlIHJ1bm5pbmcgbWVudGFsIGxpc3Qgb2YgdGhpbmdzIHdlIGtub3cgd2UgXCJzaG91bGRcIiBiZSBkb2luZyBpbiBvcmRlciB0byBiZSBoZWFsdGhpZXIuIE1heWJlIHRoaXMgaXMgbW92aW5nIG91ciBib2RpZXMgbW9yZSwgZWF0aW5nIGRpZmZlcmVudGx5LCBpbXByb3ZpbmcgIHNsZWVwIGhhYml0cywgb3IgZGlzY29ubmVjdGluZyBmcm9tIHRlY2hub2xvZ3kuIE1heWJlIGl0IGNvdWxkIGJlIHRoZXNlIHRoaW5ncyBwbHVzIG1hbnkgbW9yZSEgV2hpbGUgY2VydGFpbmx5IGV4Y2VsbGVudCBoYWJpdHMsIGxvb2tpbmcgYXQgYSBsaXN0IG9mIHBlcnNvbmFsIHdlbGxuZXNzIFwidG8gZG9zXCIgY2FuIGJlIG92ZXJ3aGVsbWluZy4gSW4gZmFjdCwgd2Ugb2Z0ZW4gYXZvaWQgdGhpbmtpbmcgYWJvdXQgdGhlc2UgaGVhbHRoeSBsaXZpbmcgaXRlbXMgYmVjYXVzZSBpdCBjYW4gZmVlbCBob3BlbGVzcy4gVG9nZXRoZXIgd2UgY2FuIGNyZWF0ZSBhIHBsYW4gb2Ygc21hbGwgc3RlcHMgdG8gd29yayB0b3dhcmRzIGNvbm5lY3RpbmcgYmVoYXZpb3IgY2hhbmdlcyB3aXRoIHlvdXIgZGVlcGVzdCB2YWx1ZXMuIFRoaW5ncyB0aGF0IG1heSBoYXZlIGZlbHQgZm9yY2VkIGluIHRoZSBwYXN0IGNhbiBiZWNvbWUgdGhpbmdzIHdlIGFyZSBlYWdlciBmb3IuIEkgd2lsbCBsZXZlcmFnZSBteSB0cmFpbmluZyBpbiBMaWZlc3R5bGUgTWVkaWNpbmUgdG8gaGVscCBzZXQgbWFuYWdlYWJsZSBhbmQgcmVzZWFyY2ggc3VwcG9ydGVkIGFpbXMgdG8gcHJvZHVjZSByZWFsIGltcHJvdmVtZW50cyBpbiB5b3VyIGhlYWx0aC5cbjwvcD5cblxuICAgIDxoMz5QaGFzZSBvZiBMaWZlIElzc3Vlcy9MaWZlIFRyYW5zaXRpb25zPC9oMz5cbiAgICA8cD5cbiAgICAgIFRob3VnaCB0aGUgcGhyYXNlLCBcInRoZSBvbmx5IHRoaW5nIGNvbnN0YW50IGlzIGNoYW5nZVwiIGlzIG9uZSBmYW1pbGlhciB0byBtYW55IG9mIHVzLCB0aGlzIGNhbiBiZSBsaXR0bGUgY29tZm9ydCBkdXJpbmcgdGhlIHR1cm1vaWwgb2YgYSBzaWduaWZpY2FudCB0cmFuc2l0aW9uLiBDaGFuZ2VzIGluIGxpZmUgY2lyY3Vtc3RhbmNlcyBjYW4gaW1wYWN0IHVzIG9uIGV2ZXJ5IGxldmVsIG9mIG91ciBiZWluZyBhbmQgZXh0ZXJuYWwgbGlmZS4gU2Vla2luZyB0aGVyYXB5IGR1cmluZyB0aGVzZSB0aW1lcyBjYW4gYmUgYm90aCBhbmNob3IgYW5kIGd1aWRlIGxpZ2h0LiBJIHdpbGwgc3VwcG9ydCB5b3UgdG8gcHJvY2VzcyB0aGUgbG9zcyBvZiBob3cgdGhpbmdzIGhhdmUgYmVlbi4gV2hlbiB5b3UgYXJlIHJlYWR5LCB3ZSB3aWxsIHNldCBjb25zY2lvdXNseSBkZXZlbG9wZWQgZ29hbHMgZm9yIHRoZSBwaGFzZSBvZiBsaWZlIHRoYXQgeW91IGZpbmQgeW91cnNlbGYgaW4gbm93LiBXZSB3aWxsIHdvcmsgdG9nZXRoZXIgdG8gaWRlbnRpZnkgaGVhbHRoeSBjb3JlIGNvbXBvbmVudHMgb2Ygd2hvIHlvdSBhcmUgZXZvbHZpbmcgdG8gYmUgYW5kIGNlbnRlciBvdXIgYXR0ZW50aW9uIHRvIG51cnR1cmUgdGhpcyBncm93dGguIFRoZXJlIGlzIG5vIHNldCB0aW1lbGluZSBvZiBob3cgbG9uZyBhbiBhZGp1c3RtZW50IHBlcmlvZCBsYXN0cy4gSSB3aWxsIGhlbHAgeW91IHRvIG1vdmUgaW50byB0aGUgbmV4dCBwYXJ0IG9mIHlvdXIgbGlmZSBpbiB0aGUgaGVhbHRoZnVsIHdheXMsIGFzIHF1aWNrbHkgYXMgaXMgcmVhc29uYWJsZSwgYW5kIGluIGNvbXBsZXRlIHJlc3BlY3QgZm9yIHlvdXIgb3duIHBhY2UuXG48L3A+XG5cbiAgICA8aDM+UmVsYXRpb25zaGlwIENoYWxsZW5nZXM8L2gzPlxuICAgIDxwPlxuICAgICAgUm9tYW50aWMsIGZhbWlseSwgc29jaWFsLCBhbmQgb2NjdXBhdGlvbmFsIHJlbGF0aW9uc2hpcHMgY2FuIGFsbCBiZSBzb3VyY2VzIG9mIHNpZ25pZmljYW50IHBsZWFzdXJlIGFuZCBjb25zZXF1ZW50bHksIHNpZ25pZmljYW50IHBhaW4uIFRoZXJlIGFyZSBhIG11bHRpdHVkZSBvZiByZWFzb25zIHJlbGF0aW9uc2hpcHMgY2FuIGJlY29tZSB0cm91YmxlZC4gTWFueSBvZiB0aGUgcm9vdHMgb2YgdGhlc2UgcmVhc29ucyBjYW4gYmUgdHJhY2VkIHRvIGNvbW11bmljYXRpb24gY2xhcml0eS4gV2hpbGUgd2UgY2Fubm90IGNoYW5nZSBvdGhlciBwZW9wbGUsIHdlIGNhbiBpZGVudGlmeSBwZXJzb25hbCBxdWFsaXRpZXMgaW4gb3Vyc2VsdmVzIHRoYXQgd2Ugd2lzaCB0byBjaGFuZ2UgZm9yIHRoZSB3ZWxsYmVpbmcgb2YgYSBjdXJyZW50IG9yIGZ1dHVyZSByZWxhdGlvbnNoaXAuIFdvcmtpbmcgdG93YXJkcyBpZGVudGlmeWluZyB0aGVzZSBhcmVhcywgY3JlYXRpbmcgbWluZGZ1bCBhd2FyZW5lc3MgYXJvdW5kIHRoZW0sIGFuZCBtYWtpbmcgdmFsdWVzIGJhc2VkIGNoYW5nZXMgY2FuIHByb3ZpZGUgYm90aCBwZXJzb25hbCBiZW5lZml0cyBhbmQgaW1wcm92ZW1lbnRzIHRvIHRoZSByZWxhdGlvbnNoaXAuIFdlIGNhbiB3b3JrIHRvZ2V0aGVyIHRvIGlkZW50aWZ5IGFuZCBvcHRpbWl6ZSB0aGVzZSBjaGFuZ2VzIGluIGEgY29tcGFzc2lvbmF0ZSBhbmQgcmVzcGVjdGZ1bCBlbnZpcm9ubWVudCB3aGlsZSBwcmlvcml0aXppbmcgZWZmZWN0aXZlIGFuZCBjbGVhciBjb21tdW5pY2F0aW9uIGFzIHRoZSBjb3JuZXJzdG9uZSB0byBpbXByb3ZlZCByZWxhdGlvbnNoaXBzLlxuPC9wPlxuICAgIDxoMz5IZWFsdGggRGlmZmljdWx0aWVzPC9oMz5cbiAgICA8cD5cbiAgICAgIFRoZXJlIGlzIG5vIGRvdWJ0IHRoYXQgb3VyIHBoeXNpY2FsIHdlbGxiZWluZyBpbXBhY3RzIG91ciBwc3ljaG9sb2dpY2FsIHdlbGxiZWluZyBhbmQgdmljZSB2ZXJzYS4gV2hldGhlciB5b3UgYXJlIGxvb2tpbmcgZm9yIHN1cHBvcnQgaW4gaW1wcm92aW5nIHlvdXIgbWFuYWdlbWVudCBvZiBhIGhlYWx0aCBkaWZmaWN1bHR5LCBoYW5kbGluZyB0aGUgc3RyZXNzIGFyb3VuZCBpdCwgb3IgYmVsaWV2ZSB0aGVyZSBtYXkgYmUgbGlmZXN0eWxlIGNoYW5nZXMgdGhhdCB3aWxsIHJldmVyc2UgdGhlIGNvbmRpdGlvbiwgSSB3b3VsZCBiZSBoYXBweSB0byBzdXBwb3J0IHRoaXMgYXNwZWN0IG9mIHlvdXIgaGVhbHRoLiBJIGFtIGEgdHJhaW5lZCBoZWFsdGggcHN5Y2hvbG9naXN0IGFuZCB3b3JrIHJlZ3VsYXJseSB3aXRoIGJvdGggY2hyb25pYyBhbmQgYWN1dGUgbWVkaWNhbCBjb25kaXRpb25zLiBJIGhhdmUgcGVyc29uYWwgYW5kIHByb2Zlc3Npb25hbCBleHBlcmllbmNlIHdpdGggdGhlIGltcGFjdHMgcGh5c2ljYWwgaGVhbHRoIGNhbiBoYXZlIG5vdCBvbmx5IG9uIG9uZXNlbGYsIGJ1dCBhbHNvIG9uIHRob3NlIGFyb3VuZCB1cy4gSSBiZWxpZXZlIHN1cHBvcnQgY2FuIG1ha2UgYSBzdWJzdGFudGl2ZSBkaWZmZXJlbmNlIGluIG1hbmFnaW5nIGEgaGVhbHRoIGNvbmNlcm4gYXMgd2VsbCBhcyB0aGUgZW1vdGlvbmFsIGFuZCBzb2NpYWwgaW1wYWN0cyBvZiB0aGlzLiBJIHdpbGwgd29yayB3aXRoIHlvdSB0byBhY2NlcHQgdGhvc2UgcmVhbGl0aWVzIHRoYXQgYXJlIHVuY2hhbmdpbmcgYXMgd2VsbCBhcyByZWNvZ25pemUgb3Bwb3J0dW5pdGllcyBmb3IgcG9zaXRpdmUgZ3Jvd3RoLlxuPC9wPlxuICAgIDxoMz5FeGNlcHRpb25zIHRvIHRoZSBhYm92ZTwvaDM+XG4gICAgPHA+XG4gICAgICBEdWUgdG8gdGhlIHBhcnQgdGltZSBuYXR1cmUgb2YgbXkgcHJpdmF0ZSBwcmFjdGljZSwgSSBhbSB1bmZvcnR1bmF0ZWx5IHVuYWJsZSBhdCB0aGlzIHRpbWUgdG8gd29yayB3aXRoIHRob3NlIHdobyBoYXZlIGFjdGl2ZSBhbmQgYWN1dGUgc3VpY2lkYWwgb3IgaG9taWNpZGFsIHRob3VnaHRzIG9yIGFyZSBlbmdhZ2luZyBpbiBzZWxmLWhhcm1pbmcgYmVoYXZpb3JzLiBXaGlsZSBpdCBpcyBub3QgdW5jb21tb24gZm9yIHRoZXNlIHRob3VnaHRzIG9yIGJlaGF2aW9ycyB0byBiZSBwYXJ0IG9mIHRoZSBsaXZlcyBvZiB0aG9zZSB3aG8gZmFsbCBpbnRvIG9uZSBvciBtb3JlIG9mIHRoZSBjYXRlZ29yaWVzIGFib3ZlLCBJIGFtIHVuYWJsZSB0byBiZSBhdmFpbGFibGUgd2l0aCB0aGUgY29uc2lzdGVuY3kgb3IgcmVndWxhcml0eSB0aGF0IGlzIG5lZWRlZCB0byBoZWxwIHN1cHBvcnQgYWN0aXZlIGFuZCBhY3V0ZSBzYWZldHkgY29uY2VybnMuIFNob3VsZCBhbiBhY3RpdmUgYW5kIGFjdXRlIHNhZmV0eSBjb25jZXJuIG9jY3VyIGR1cmluZyBvdXIgd29yayB0b2dldGhlciwgSSB3aWxsIHdvcmsgdG9nZXRoZXIgd2l0aCB5b3UgdG8gZmluZCBhcHByb3ByaWF0ZSBjYXJlIHRoYXQgY2FuIG1lZXQgeW91ciBuZWVkcy4gSXQgaXMgbGlrZWx5IHRoYXQgd2l0aCBzdGFiaWxpemF0aW9uIHRoZXJlIGlzIHBvdGVudGlhbCB0byByZXR1cm4gdG8gb3VyIHdvcmsgdG9nZXRoZXIgaWYgdGhhdCBpcyBkZXRlcm1pbmVkIHRvIGJlIGluIHlvdXIgYmVzdCBpbnRlcmVzdC4gSSBhbSBoYXBweSB0byBkaXNjdXNzIHRoaXMgaW4gZnVydGhlciBkZXRhaWwgYW5kIHdlbGNvbWUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBzZXJ2aWNlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgIFdoYXQgdG8gRXhwZWN0XG4gICAgPC9oMz5cbiAgICA8aDM+VGVsZXBob25lIENvbnN1bHQ8L2gzPlxuICAgIDxwPlxuICAgICAgQXMgb3VyIGZpcnN0IGNvbnRhY3QgZm9yIGVpdGhlciBpbmRpdmlkdWFsIHRoZXJhcHkgb3IgY2xhc3NlcyBJIG9mZmVyIGEgY29tcGxlbWVudGFyeSAxNS1taW51dGUgcGhvbmUgY29uc3VsdGF0aW9uLiBUaGlzIGlzIGFuIG9wcG9ydHVuaXR5IGZvciB1cyB0byBjb25uZWN0IGFib3V0IHRoZSBpc3N1ZXMgdGhhdCBicmluZyB5b3UgaW50byBjYXJlLCBhbmQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgd29ya2luZyB0b2dldGhlciBpcyB0aGUgYmVzdCBmaXQgZm9yIHlvdXIgbmVlZHMuIEkgY2FuIGFuc3dlciBhbnkgcXVlc3Rpb25zIHRoYXQgeW91IG1heSBoYXZlIGFib3V0IGNvbWluZyBpbnRvIGNhcmUgYW5kIHNldCB1cCB5b3VyIGZpcnN0IGFwcG9pbnRtZW50IG9yIGNsYXNzLiAgICAgICBcbiAgICAgIDxiciAvPlxuICAgICAgPGk+MTUtbWluIGluaXRpYWwgdGVsZXBob25lIGNvbnN1bHQmI3gyMDE0OyBmcmVlPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+SW5pdGlhbCBBcHBvaW50bWVudDwvaDM+XG4gICAgPHA+XG4gICAgICBBbiBpbml0aWFsIGluZGl2aWR1YWwgdGhlcmFweSBhcHBvaW50bWVudCBpcyBhIDYwLW1pbnV0ZSBhcHBvaW50bWVudC4gRHVyaW5nIHRoaXMgYXBwb2ludG1lbnQgSSB3aWxsIHJldmlldyB5b3VyIGNvbXBsZXRlIGludGFrZSBmb3JtIHdpdGggeW91IHRvIGVuc3VyZSB0aGF0IEkgaGF2ZSBhbiBhcHByb3ByaWF0ZSB1bmRlcnN0YW5kaW5nIG9mIHNvbWUgb2YgeW91ciBoaXN0b3J5LCB3aGF0IGJyaW5ncyB5b3UgaW50byBjYXJlLCBhbmQgeW91ciBnb2FscyBmb3Igb3VyIHdvcmsgdG9nZXRoZXIuIFdlIHdpbGwgYWxzbyB1c2UgdGhpcyBhcHBvaW50bWVudCB0byBjcmVhdGUgc29tZSBpbml0aWFsIGdvYWxzIGZvciBjYXJlIGFuZCB0byBzZXQgdXAgb3VyIGV4cGVjdGF0aW9ucyBmb3IgdHJlYXRtZW50LlxuICAgICAgPGJyIC8+XG4gICAgPGk+NjAtbWluIGluaXRpYWwgaW5kaXZpZHVhbCBhcHBvaW50bWVudCYjeDIwMTQ7ICQxNTA8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5SZXR1cm4gQXBwb2ludG1lbnRzPC9oMz5cbiAgICA8cD5cbiAgICAgIFJldHVybiBhcHBvaW50bWVudHMgYXJlIDUwLW1pbnV0ZSBhcHBvaW50bWVudHMuIER1cmluZyByZXR1cm4gYXBwb2ludG1lbnRzIHdlIHdpbGwgd29yayB0b2dldGhlciBvbiB5b3VyIGdvYWxzIGFuZCBJIHdpbGwgc3VwcG9ydCB5b3UgdGhyb3VnaCB0aGUgcHJvY2Vzcy4gV2Ugd2lsbCByZWd1bGFybHkgY2hlY2sgaW4gYWJvdXQgdGhlIHByb2dyZXNzIG9mIGNhcmUgYW5kIG1ha2UgYWRqdXN0bWVudHMgYXMgbmVlZGVkIHRvIGVuc3VyZSB0aGF0IHdlIGFyZSB3b3JraW5nIGVmZmVjdGl2ZWx5IHRvZ2V0aGVyLlxuICAgICAgPGJyIC8+XG4gICAgICA8aT41MC1taW4gcmV0dXJuIGluZGl2aWR1YWwgYXBwb2ludG1lbnQmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+Q2xhc3NlczwvaDM+XG4gICAgPHA+XG4gICAgICBDbGFzc2VzIGFyZSA5MCBtaW51dGVzIGluIGxlbmd0aC4gRHVlIHRvIHNwYWNlIG5lZWRlZCwgY2xhc3NlcyBhcmUgaGVsZCBhdCBhIG5lYXJieSBsb2NhdGlvbiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIHRoZXJhcHkgb2ZmaWNlLiBNb3JlIGluZm9ybWF0aW9uIGFib3V0IGNsYXNzIGFuZCBjbGFzcyBjb250ZW50IGNhbiBiZSBmb3VuZCB1bmRlciB0aGUgXCJDbGFzc2VzXCIgdGFiLiBUaG91Z2ggY2xhc3NlcyB0YWtlIHBsYWNlIG92ZXIgNCBzZXNzaW9ucywgdGhlIGZ1bGwgZmVlIG11c3QgYmUgcGFpZCBpbiBhZHZhbmNlIG9mIHRoZSBmaXJzdCBzZXNzaW9uLiBBZnRlciB0aGlzIHBheW1lbnQsIG5vIGFkZGl0aW9uYWwgY2hhcmdlcyBhcmUgaW5jdXJyZWQgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIGNsYXNzZXMgdW5sZXNzIGFuIGFkZGl0aW9uYWwgc2VydmljZSBpcyByZXF1ZXN0ZWQgb3IgcHJvdmlkZWQuXG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjQtc2Vzc2lvbiAoMzYwLW1pbikgY2xhc3Mgc2VyaWVzJiN4MjAxNDsgJDE2MDwvaT5cbiAgICA8L3A+XG4gICAgPGgzPlRlbGVNZW50YWwgSGVhbHRoPC9oMz5cbiAgICA8cD5cbiAgICAgIE9uIG9jY2FzaW9uIGl0IG1heSBiZSBpbmRpY2F0ZWQgZm9yIHVzIHRvIGVuZ2FnZSBpbiB0ZWxlLWhlYWx0aCBlaXRoZXIgb3ZlciB0aGUgcGhvbmUgb3IgdGhyb3VnaCB2aWRlbyBjb21tdW5pY2F0aW9uLiBUaGVzZSBzZXJ2aWNlcyBhcmUgb2ZmZXJlZCB0byBpbmRpdmlkdWFscyBvbmx5IGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGluaXRpYWxseSBlc3RhYmxpc2hlZCBpbi1wZXJzb24gdGhyb3VnaCBhdCBsZWFzdCBvbmUgaW4tcGVyc29uIGFwcG9pbnRtZW50LiBEdWUgdG8gbGljZW5zaW5nIHJlcXVpcmVtZW50cywgSSBhbSB1bmFibGUgdG8gcHJvdmlkZSB0aGVzZSBzZXJ2aWNlcyB0byBhbnlvbmUgb3V0LW9mLXN0YXRlIG9yIGNvdW50cnkgYXQgdGhlIHRpbWUgb2Ygc2VydmljZS4gVGhlcmUgYXJlIGEgdmFyaWV0eSBvZiBwbGF0Zm9ybXMgYXZhaWxhYmxlIGZvciB0aGlzIHNlcnZpY2UgYW5kLCB0aG91Z2ggY29udmVuaWVudCwgaXQgaXMgaW1wb3J0YW50IHRvIGJlIGF3YXJlIHRoYXQgdGhleSBhcmUgbm90IEhJUEFBIGNvbXBsaWFudC4gQ29tcGxldGluZyB0aGUgSW5mb3JtZWQgQ29uc2VudCBmb3JtIGFja25vd2xlZGdlcyB5b3VyIHVuZGVyc3RhbmRpbmcgb2YgdGhpcyBhbmQgYWNjZXB0YW5jZSBvZiB0aGUgcmlzayBzaG91bGQgd2UgdXRpbGl6ZSB0aGlzIGZvcm1hdCBvZiBjYXJlLlxuICAgICAgPGJyIC8+XG4gICAgICA8aT41IHRvIDI1IG1pbnV0ZXMmI3gyMDE0OyAkNzU8L2k+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjI2LTUwIG1pbnV0ZXMmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICBJbnN1cmFuY2VcbiAgICA8L2gzPlxuICAgIDxwPlxuICAgICAgSSBhbSBhbiBcIm91dCBvZiBuZXR3b3JrIHByb3ZpZGVyXCIgZm9yIGluc3VyYW5jZSBuZXR3b3JrcyBidXQgd2lsbCBwcm92aWRlIHlvdSBhIFN1cGVyYmlsbCB3aGljaCB5b3UgbWF5IHVzZSB0byByZXF1ZXN0IHJlaW1idXJzZW1lbnQuIFRoZSBjb3ZlcmFnZSB5b3UgcmVjZWl2ZSBpcyBlbnRpcmVseSBkZXBlbmRlbnQgdXBvbiB0aGUgcGxhbiB0aGF0IHlvdSBoYXZlLiBJIHJlY29tbWVuZCB0aGF0IHlvdSBjb250YWN0IHlvdXIgaW5zdXJhbmNlIGNvbXBhbnkgZGlyZWN0bHkgdG8gZGV0ZXJtaW5lIHlvdXIgc3BlY2lmaWMgY292ZXJhZ2UuIFNvbWUgcXVlc3Rpb25zIHRoYXQgbWF5IGJlIGhlbHBmdWwgaW4gdGhpcyBjb252ZXJzYXRpb24gaW5jbHVkZTpcbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICBEbyBJIGhhdmUgbWVudGFsIGhlYWx0aCBpbnN1cmFuY2UgYmVuZWZpdHMgdGhhdCBjb3ZlciBwc3ljaG90aGVyYXB5P1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgRG9lcyBteSBwb2xpY3kgY292ZXIgYW4gb3V0IG9mIG5ldHdvcmsgTGljZW5zZWQgUHN5Y2hvbG9naXN0PyBJZiBzbywgd2hhdCBwZXJjZW50YWdlIGlzIGNvdmVyZWQgb3Igd2hhdCBpcyB0aGUgY292ZXJhZ2UgYW1vdW50IHBlciB0aGVyYXB5IHNlc3Npb24/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBXaGF0IGlzIG15IGRlZHVjdGlibGUgYW5kIGhhcyBpdCBiZWVuIG1ldD9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIEFyZSBteSBtZWRpY2FsIGFuZCBtZW50YWwgaGVhbHRoL2JlaGF2aW9yYWwgaGVhbHRoIGRlZHVjdGlibGVzIHNlcGFyYXRlP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgSG93IG1hbnkgc2Vzc2lvbnMgcGVyIHllYXIgZG9lcyBteSBoZWFsdGggaW5zdXJhbmNlIGNvdmVyP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgRG9lcyB0aGUgZGlhZ25vc2lzIG1hdHRlcj8gQXJlIHNvbWUgZGlhZ25vc2VzIGNvdmVyZWQgYW5kIG90aGVycyBub3Q/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBXaGF0IHBhcGVyd29yayBvciBmb3JtcyBkbyBJIG5lZWQgdG8gc3VibWl0IGZvciBzZXNzaW9ucyB0byBiZSBjb3ZlcmVkP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgSXMgYXBwcm92YWwgcmVxdWlyZWQgZnJvbSBteSBwcmltYXJ5IGNhcmUgcGh5c2ljaWFuP1xuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgZmVlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxwPlxuICAgICAgUGxlYXNlIG5vdGUgdGhhdCB5b3Ugd2lsbCBiZSBleHBlY3RlZCB0byBwYXkgZm9yIGVhY2ggc2Vzc2lvbiBiZWZvcmUvYXQgdGhlIHN0YXJ0IG9mIHNlc3Npb24sIHVubGVzcyB3ZSBhZ3JlZSBvdGhlcndpc2UuIFBheW1lbnQgbWF5IGJlIG1hZGUgdGhyb3VnaCBjYXNoLCBjaGVjaywgb3IgSElQQUEgY29tcGxpYW50IGFwcGxpY2F0aW9uLiBVc2Ugb2YgdGhlIEhJUEFBIGNvbXBsaWFudCBhcHBsaWNhdGlvbiBpbmN1cnMgYW4gYWRkaXRpb25hbCAkNSBjaGFyZ2UuIEkgYW0gYW4gXCJvdXQgb2YgbmV0d29yayBwcm92aWRlclwiIGZvciBpbnN1cmFuY2UgbmV0d29ya3MgYnV0IHdpbGwgcHJvdmlkZSB5b3UgYSBTdXBlcmJpbGwgd2hpY2ggeW91IG1heSB1c2UgdG8gcmVxdWVzdCByZWltYnVyc2VtZW50LlxuICAgIDwvcD5cbiAgICA8aDM+VGVsZXBob25lIENvbnN1bHQ8L2gzPlxuICAgIDxwPlxuICAgICAgPGk+MTUtbWluIGluaXRpYWwgdGVsZXBob25lIGNvbnN1bHQmI3gyMDE0OyBmcmVlIG9mIGNoYXJnZTwvaT5cbiAgICA8L3A+XG4gICAgPGgzPkluaXRpYWwgQXBwb2ludG1lbnQ8L2gzPlxuICAgIDxwPlxuICAgICAgPGk+NjAtbWluIGluaXRpYWwgaW5kaXZpZHVhbCBhcHBvaW50bWVudCYjeDIwMTQ7ICQxNTA8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5SZXR1cm4gQXBwb2ludG1lbnRzPC9oMz5cbiAgICA8cD5cbiAgICAgIDxpPjUwLW1pbiByZXR1cm4gaW5kaXZpZHVhbCBhcHBvaW50bWVudCYjeDIwMTQ7ICQxNTA8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5DbGFzc2VzPC9oMz5cbiAgICA8cD5cbiAgICAgIDxpPjQtc2Vzc2lvbiAoMzYwLW1pbikgY2xhc3Mgc2VyaWVzJiN4MjAxNDsgJDE2MDwvaT5cbiAgICA8L3A+XG4gICAgPGgzPlRlbGVNZW50YWwgSGVhbHRoPC9oMz5cbiAgICA8cD5cbiAgICAgIDxpPjUgdG8gMjUgbWludXRlcyYjeDIwMTQ7ICQ3NTwvaT48YnIgLz5cbiAgICAgIDxpPjI2LTUwIG1pbnV0ZXMmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgICA8YnIgLz5cbiAgICA8cD5cbiAgICAgIDxpPlxuICAgICAgPC9pPlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IGNsYXNzZXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDM+XG4gICAgICBNb29kICYgRm9vZFxuICAgIDwvaDM+XG4gICAgPHA+XG4gICAgICBNb29kICYgRm9vZCBpcyBhIGNsYXNzIGRlc2lnbmVkIGZvciBpbmRpdmlkdWFscyBzdHJ1Z2dsaW5nIHdpdGggb3ZlcmVhdGluZywgbWluZGxlc3MgZWF0aW5nLCBzdHJlc3MgZWF0aW5nLCBlbW90aW9uYWwgZWF0aW5nLCBzaGFtZSBhcm91bmQgZWF0aW5nLCBvciBiaW5nZSBlYXRpbmcuIFRoZSBjb3Vyc2UgaXMgc3RydWN0dXJlZCBpbnRvIDQgY2xhc3NlcyBlYWNoIGxhc3RpbmcgOTAgbWludXRlcy4gVGhlIGNsYXNzIGNlbnRlcnMgb24gcHJlc2VudGVkIG1hdGVyaWFsIHRob3VnaCBxdWVzdGlvbnMgYW5kIHBhcnRpY2lwYXRpb24gYXJlIHdlbGNvbWUgYW5kIGVuY291cmFnZWQuIENsYXNzIG1hdGVyaWFscyBhbHNvIGluY2x1ZGUgaGFuZG91dHMgYW5kIGF0LWhvbWUgcHJhY3RpY2UgZXhlcmNpc2VzLiBEdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2xhc3NlcyB3ZSB3aWxsIGNvdmVyIHRvcGljcyBpbmNsdWRpbmc6IHdoYXQgZW1vdGlvbmFsIGVhdGluZyBpcywgY3VsdHVyYWwgaW1wbGljYXRpb25zLCBlbnZpcm9ubWVudGFsIGltcGFjdHMsIHNldCBwb2ludCB0aGVvcnksIGVtb3Rpb25hbCB2cyBwaHlzaWNhbCBodW5nZXIsIGJpbmdlIGVhdGluZyBjeWNsZSwgaW50ZXJwZXJzb25hbCBkeW5hbWljcyBhcm91bmQgZm9vZCwgc2VsZi10YWxrLCBiZWhhdmlvciBhbmFseXNpcyAmIGJlaGF2aW9yIGNoYW5nZSwgbWluZGZ1bCBlYXRpbmcsIGxvdmluZyBsaW1pdHMsIHNlbGYtY29tcGFzc2lvbiwgbWFuYWdpbmcgZGlmZmljdWx0IGVtb3Rpb25zLCBoYWJpdCBmb3JtYXRpb24sIHN0YWdlcyBvZiBjaGFuZ2UsIGFuZCBoZWFsdGh5IGVhdGluZyBndWlkZWxpbmVzLiBCeSB0aGUgZW5kIG9mIHRoZSBjbGFzcyBzZXJpZXMgcGFydGljaXBhbnRzIHdpbGwgYmUgYWJsZSB0byByZWNvZ25pemUgb3Bwb3J0dW5pdGllcyBmb3IsIHByZXBhcmUgZm9yLCBhbmQgbWFrZSBwb3NpdGl2ZSBjaGFuZ2VzIGluIHRoZWlyIHJlbGF0aW9uc2hpcHMgd2l0aCB0aGVtc2VsdmVzLCBmb29kLCBhbmQgdGhlaXIgZW52aXJvbm1lbnQuXG4gICAgPC9wPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgcmVzb3VyY2VzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHA+XG4gICAgICBUaGUgYmVsb3cgYXJlIHJlc291cmNlcyB0aGF0IEkgZmluZCB0byBiZSBjbGluaWNhbGx5IHZhbHVhYmxlLiBJIGhhdmUgbm8gYWZmaWxpYXRpb24gd2l0aCBhbnkgb2YgdGhlIGluZGl2aWR1YWxzIG9yIGVudGl0aWVzIGluZGljYXRlZCBiZWxvdy4gVGhlc2UgcmVzb3VyY2VzIGFyZSBwcm92aWRlZCBwdXJlbHkgZHVlIHRvIG15IHBlcmNlcHRpb24gb2YgdGhlaXIgY2xpbmljYWwgYmVuZWZpdC4gSSByZWNlaXZlIG5vIGNvbXBlbnNhdGlvbiBvZiBhbnkga2luZCBmb3Igc2hhcmluZyB0aGVzZSByZXNvdXJjZXMuXG4gICAgPC9wPlxuICAgIDxoMz5XZWJwYWdlczwvaDM+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hbnhpZXR5Y2FuYWRhLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BbnhpZXR5IENhbmFkYTwvYT4gaXMgYW4gZXhjZWxsZW50IHdlYiByZXNvdXJjZSBmb3IgZXZpZGVuY2UgYmFzZWQgaW5mb3JtYXRpb24gYWJvdXQgYW54aWV0eS4gVGhlIHdlYnNpdGUgaXMgd3JpdHRlbiBpbiBjbGVhciBsYW5ndWFnZSB0aGF0IGlzIHRob3VnaHRmdWwsIGVhc3kgdG8gdW5kZXJzdGFuZCwgYW5kIGhlbHBmdWwuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFwcy5hbnhpZXR5Y2FuYWRhLmNvbS9jb3Vyc2VzL215LWFueGlldHktcGxhbi1tYXAtZm9yLWFkdWx0cy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NeSBBbnhpZXR5IFBsYW48L2E+IGlzIHRoZSBvbmxpbmUgY291cnNlIGFzc29jaWF0ZWQgd2l0aCBBbnhpZXR5IENhbmFkYS4gSXQgaXMgYSBmcmVlIGNvdXJzZSB0aGF0IHByb3ZpZGVzIGV4Y2VsbGVudCBpbmZvcm1hdGlvbiBpbiBhZGRpdGlvbiB0byBwcmFjdGljYWwgdG9vbHMgYW5kIHByYWN0aWNlcyBmb3IgbWFuYWdpbmcgYW54aWV0eSBhbmQgYW54aWV0eS1iYXNlZCBjb25kaXRpb25zLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkJyZW5lIEJyb3duPC9hPiBpcyBhbiBhdXRob3IsIHJlc2VhcmNoZXIsIGFuZCBzcGVha2VyIHRoYXQgSSBoaWdobHkgcmVjb21tZW5kLiBUaGUgbGluayBpcyB0byBoZXIgbWFpbiB3ZWJwYWdlLiBCZWxvdyBhcmUgc3BlY2lmaWMgcmVzb3VyY2VzIG9mIGhlcnMgdGhhdCBJIHJlY29tbWVuZC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nZ3NjLmJlcmtlbGV5LmVkdS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgR3JlYXRlciBHb29kIFNjaWVuY2UgQ2VudGVyPC9hPi0gQmVya2VsZXkgaXMgYSBjZW50ZXIgb2YgcmVzZWFyY2ggYW5kIGlubm92YXRpb24gZm9jdXNpbmcgb24gbWFraW5nIHBvc2l0aXZpdHkgYW5kIHBvc2l0aXZlIGNoYW5nZSBhY2Nlc3NpYmxlIHRvIGFsbC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZWR4Lm9yZy9jb3Vyc2UvdGhlLXNjaWVuY2Utb2YtaGFwcGluZXNzLTBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgU2NpZW5jZSBvZiBIYXBwaW5lc3M8L2E+IGlzIHRoZSBvbmxpbmUgY291cnNlIGZyb20gdGhlIEdyZWF0ZXIgR29vZCBTY2llbmNlIENlbnRlci4gSXQgaXMgYSBmcmVlIDgtd2VlayBjb3Vyc2UgdGhhdCBwcm92aWRlcyB0b29scyB0byBoYXBwaWVyIGV4cGVyaWVuY2VzIGFuZCBncmVhdGVyIG1lYW5pbmcgaW4gbGlmZS5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nZ2lhLmJlcmtlbGV5LmVkdS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HcmVhdGVyIEdvb2QgaW4gQWN0aW9uPC9hPiBwcm92aWRlcyBkb2FibGUgcHJhY3RpY2VzIGZvciBtYWtpbmcgY29uY3JldGUgYW5kIGltcGFjdGZ1bCBwb3NpdGl2ZSBjaGFuZ2VzXG4gICAgPC9wPlxuXG4gICAgPGgzPlZpZGVvczwvaDM+XG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGVkLmNvbS90YWxrcy9icmVuZV9icm93bl9vbl92dWxuZXJhYmlsaXR5P3V0bV9jYW1wYWlnbj10ZWRzcHJlYWQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXRlZGNvbXNoYXJlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIFBvd2VyIG9mIFZ1bG5lcmFiaWxpdHktIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50ZWQuY29tL3RhbGtzL2JyZW5lX2Jyb3duX2xpc3RlbmluZ190b19zaGFtZT91dG1fY2FtcGFpZ249dGVkc3ByZWFkJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT10ZWRjb21zaGFyZVwiIHRhcmdldD1cIl9ibGFua1wiPkxpc3RlbmluZyB0byBTaGFtZS0gQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8yNjEzNDg3MDlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TdXBlclNvdWwgU2Vzc2lvbnM6IFRoZSBBbmF0b215IG9mIFRydXN0LSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS92aWRlb3MvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QWRkaXRpb25hbCBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly95b3V0dS5iZS9JdnRaQlVTcGxyNFwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBTcGFjZSBCZXR3ZWVuIFNlbGYtRXN0ZWVtIGFuZCBTZWxmLUNvbXBhc3Npb24tIEtyaXN0aW4gTmVmZjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9zZWxmLWNvbXBhc3Npb24ub3JnL3ZpZGVvcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BZGRpdGlvbmFsIEtyaXN0aW4gTmVmZjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGVkLmNvbS90YWxrcy9zYW5kcmFfYWFtb2R0X3doeV9kaWV0aW5nX2RvZXNuX3RfdXN1YWxseV93b3JrP3V0bV9jYW1wYWlnbj10ZWRzcHJlYWQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXRlZGNvbXNoYXJlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V2h5IERpZXRpbmcgRG9lc24ndCBVc3VhbGx5IFdvcmstIFNhbmRyYSBBYW1vZHQ8L2E+PGJyIC8+XG5cbiAgICA8aDM+QXVkaW8gUmVjb3JkaW5nczwvaDM+XG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9jZW50ZXJmb3Jtc2Mub3JnL3ByYWN0aWNlLW1zYy9ndWlkZWQtbWVkaXRhdGlvbnMtYW5kLWV4ZXJjaXNlcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NaW5kZnVsIFNlbGYgQ29tcGFzc2lvbiBNZWRpdGF0aW9uczwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudWNsYWhlYWx0aC5vcmcvbWFyYy9taW5kZnVsLW1lZGl0YXRpb25zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VUNMQSBNZWRpdGF0aW9ucyAoQWxzbyBhdmFpbGFibGUgaW4gU3BhbmlzaCEpPC9hPjxiciAvPlxuXG4gICAgPGgzPkJvb2tzPC9oMz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9nZW5lZW5yb3RoLmNvbS9ib29rcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Xb21lbiwgRm9vZCwgYW5kIEdvZCBieSBHZW5lZW4gUm90aDwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9ib29rcy1hdWRpby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgR2lmdHMgb2YgSW1wZXJmZWN0aW9uIGJ5IEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL2Jvb2tzLWF1ZGlvL1wiIHRhcmdldD1cIl9ibGFua1wiPkRhcmluZyBHcmVhdGx5IGJ5IEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL2Jvb2tzLWF1ZGlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlJpc2luZyBTdHJvbmcgYnkgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBjbGllbnREb2N1bWVudHMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8cD5cbiAgICAgIFRoZSBmb2xsb3dpbmcgZm9ybXMgYXJlIGZvciB5b3VyIHJldmlldy4gSWYgd2UgaGF2ZSBzY2hlZHVsZWQgYW4gaW4tcGVyc29uIGFwcG9pbnRtZW50LCBwbGVhc2UgcmVhZCBjYXJlZnVsbHkgZWFjaCBvZiB0aGUgZm9ybXMgYmVsb3cuIFBsZWFzZSBwcmludCwgY29tcGxldGUsIGFuZCBicmluZyB0aGUgZmlyc3QgdGhyZWUgZm9ybXMgdG8gb3VyIGZpcnN0IGFwcG9pbnRtZW50LiBXZSB3aWxsIHJldmlldyB0aGVtIHRvZ2V0aGVyLiBJZiB5b3Ugd291bGQgbGlrZSBmb3IgeW91ciBoZWFsdGggaW5mb3JtYXRpb24gdG8gYmUgc2hhcmVkIHdpdGggYW5vdGhlciBpbmRpdmlkdWFsIG9yIGdyb3VwLCBvciB3b3VsZCBsaWtlIG1lIHRvIGdhdGhlciBpbmZvcm1hdGlvbiBmcm9tIHRoZW0sIHBsZWFzZSBwcmludCwgY29tcGxldGUsIGFuZCBicmluZyB0aGUgUmVsZWFzZSBvZiBJbmZvcm1hdGlvbiBmb3JtIHRvIHlvdXIgbmV4dCBhcHBvaW50bWVudC5cbiAgICA8L3A+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvSW5mb3JtZWQgQ29uc2VudC5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5JbmZvcm1lZCBDb25zZW50PC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL0ludGFrZSBGb3JtLnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPkludGFrZSBGb3JtPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL1JlY2VpcHQgb2YgRm9ybXMucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+UmVjZWlwdCBvZiBGb3JtczwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9Qcml2YWN5IFBvbGljeS5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9ST0kucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+UmVsZWFzZSBvZiBJbmZvcm1hdGlvbjwvYT5cbiAgICAgIDwvbGk+XG5cbiAgICA8L3VsPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuXG5cbmNvbnN0IENhcmQxID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gcHJvcHMudGl0bGUgP1xuICAgIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXRpdGxlJz5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgKSA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT0nY2FyZCBjYXJkLTEnXG4gICAgPlxuICAgICAge3RpdGxlfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XG4gICAgICAgIHtwcm9wcy5ib2R5fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG5cblxuY29uc3QgUGFnZVRpdGxlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UtdGl0bGUnIGlkPSd0b3AnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuY2xhc3MgRHJhd2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZVByYWN0aWNlQ2xpY2ssXG4gICAgICBoYW5kbGVTZXJ2aWNlc0NsaWNrLFxuICAgICAgaGFuZGxlQ2xhc3Nlc0NsaWNrLFxuICAgICAgaGFuZGxlQ29udGFjdENsaWNrLFxuICAgICAgaGFuZGxlRG9jdW1lbnRzQ2xpY2ssXG4gICAgICBoYW5kbGVSZXNvdXJjZXNDbGlja1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgYWN0aXZlID0gJydcblxuICAgIGNvbnN0IG1lbnVTdHlsZSA9IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcicsXG4gICAgICBwYWRkaW5nOiAxMFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RyYXdlcic+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmFjdGljZUNsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3ByYWN0aWNlJyB9KX1cbiAgICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgUHJhY3RpY2UgQXJlYXNcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VydmljZXNDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdzZXJ2aWNlcycgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIFNlcnZpY2VzXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsYXNzZXNDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdjbGFzc2VzJyB9KX1cbiAgICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgQ2xhc3Nlc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRG9jdW1lbnRzQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnZG9jcycgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIERvY3VtZW50c1xuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250YWN0Q2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY29udGFjdCcgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIENvbnRhY3RcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc291cmNlc0NsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3Jlc291cmNlcycgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlc291cmNlc1xuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdG8sXG4gICAgICB0ZXh0LFxuICAgICAgb25DbGljayxcbiAgICAgIGNsYXNzZXNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gJHtjbGFzc2VzfWB9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9BcHAnO1xuXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsgXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==