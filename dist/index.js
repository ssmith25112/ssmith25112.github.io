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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    body: servicesReimbursment
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    body: servicesInsurace
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
}, "What to Expect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Telephone Consult"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As our first contact for either individual therapy or classes I offer a complementary 15-minute phone consultation. This is an opportunity for us to connect about the issues that bring you into care, and to determine whether working together is the best fit for your needs. I can answer any questions that you may have about coming into care and set up your first appointment or class.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "15-min initial telephone consult\u2014 free")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Initial Appointment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "An initial individual therapy appointment is a 60-minute appointment. During this appointment I will review your complete intake form with you to ensure that I have an appropriate understanding of some of your history, what brings you into care, and your goals for our work together. We will also use this appointment to create some initial goals for care and to set up our expectations for treatment.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "60-min initial individual appointment\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Return Appointments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Return appointments are 50-minute appointments. During return appointments we will work together on your goals and I will support you through the process. We will regularly check in about the progress of care and make adjustments as needed to ensure that we are working effectively together.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "50-min return individual appointment\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Classes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Classes are 90 minutes in length. Due to space needed, classes are held at a nearby location separate from the main therapy office. More information about class and class content can be found under the \"Classes\" tab. Though classes take place over 4 sessions, the full fee must be paid in advance of the first session. After this payment, no additional charges are incurred for the remainder of the classes unless an additional service is requested or provided.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "4-session (360-min) class series\u2014 $160")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "TeleMental Health"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "On occasion it may be indicated for us to engage in tele-health either over the phone or through video communication. These services are offered to individuals only after they have been initially established in-person through at least one in-person appointment. Due to licensing requirements, I am unable to provide these services to anyone out-of-state or country at the time of service. There are a variety of platforms available for this service and, though convenient, it is important to be aware that they are not HIPAA compliant. Completing the Informed Consent form acknowledges your understanding of this and acceptance of the risk should we utilize this format of care.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "5 to 25 minutes\u2014 $75"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "26-50 minutes\u2014 $150")));
var servicesReimbursment = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  style: {
    textAlign: 'center'
  }
}, "Payment and Reimbursement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You will be expected to pay for each session before/at the start of session, unless we agree otherwise. Payment may be made through cash, check, or HIPAA compliant application. Use of the HIPAA compliant application incurs an additional $5 charge."));
var servicesInsurace = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  style: {
    textAlign: 'center'
  }
}, "Insurance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I am an \"out of network provider\" for insurance networks but will provide you a Superbill which you may use to request reimbursement. The coverage you receive is entirely dependent upon the plan that you have. I recommend that you contact your insurance company directly to determine your specific coverage. Some questions that may be helpful in this conversation include:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Do I have mental health insurance benefits that cover psychotherapy?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Does my policy cover an out of network Licensed Psychologist? If so, what percentage is covered or what is the coverage amount per therapy session?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "What is my deductible and has it been met?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Are my medical and mental health/behavioral health deductibles separate?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "How many sessions per year does my health insurance cover?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Does the diagnosis matter? Are some diagnoses covered and others not?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "What paperwork or forms do I need to submit for sessions to be covered?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Is approval required from my primary care physician?")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcz9lODVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3Jlcy9lYXRpbmdjb25jZXJucy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL2hlcm8uanBnIiwid2VicGFjazovLy8uL3Jlcy9saWZlc3R5bGUyLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbW9yZUNsYXNzZXMuanBnIiwid2VicGFjazovLy8uL3Jlcy9tb3JlUmVzb3VyY2VzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvcmVsYXRpb25zaGlwcy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3NlcnZpY2VzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvdHJhbnNpdGlvbnMuanBnIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInBhZ2UiLCJkb2NrIiwiY2xvc2VEcmF3ZXIiLCJjdXJyZW50Iiwic2hvd0RyYXdlciIsInN0YXRlIiwibmFtZSIsInNjcm9sbFRvIiwic2hvd0hhbWJ1cmdlciIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZW1wbGF0ZVN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmb250RmFtaWx5IiwiY29udGVudCIsImhhbmRsZU5hdiIsInRvZ2dsZURyYXdlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9keSIsImNsYXNzZXMiLCJjbiIsIm92ZXJsYXlDbGFzc2VzIiwib25EcmF3ZXJQcmFjdGljZUNsaWNrIiwib25OYXYiLCJvbkRyYXdlclNlcnZpY2VzQ2xpY2siLCJvbkRyYXdlckNvbnRhY3RDbGljayIsIm9uRHJhd2VyQ2xhc3Nlc0NsaWNrIiwib25EcmF3ZXJEb2N1bWVudHNDbGljayIsIm9uRHJhd2VyUmVzb3VyY2VzQ2xpY2siLCJoYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2siLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwidW5kZWZpbmVkIiwiYmVoYXZpb3IiLCJib2R5U3R5bGUiLCJtaW5IZWlnaHQiLCJuIiwicmVuZGVyRHJhd2VyIiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJpbmxpbmVTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsIm1lbnVTdHlsZSIsImN1cnNvciIsImFjdGl2ZSIsIm9wZW5EcmF3ZXIiLCJyZW5kZXJIYW1idXJnZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJGb290ZXIiLCJIb21lIiwibWVldFN0ZXBoIiwiUHJhY3RpY2VBcmVhcyIsInByYWN0aWNlQXJlYXMiLCJTZXJ2aWNlcyIsInNlcnZpY2VzIiwic2VydmljZXNSZWltYnVyc21lbnQiLCJzZXJ2aWNlc0luc3VyYWNlIiwiQ2xhc3NlcyIsIkNsaWVudERvY3VtZW50cyIsImNsaWVudERvY3VtZW50cyIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIkZlZXMiLCJmZWVzIiwidGV4dEFsaWduIiwiQ2FyZDEiLCJ0aXRsZSIsImJvZHkiLCJQYWdlVGl0bGUiLCJEcmF3ZXIiLCJoYW5kbGVQcmFjdGljZUNsaWNrIiwiaGFuZGxlU2VydmljZXNDbGljayIsImhhbmRsZUNsYXNzZXNDbGljayIsImhhbmRsZUNvbnRhY3RDbGljayIsImhhbmRsZURvY3VtZW50c0NsaWNrIiwiaGFuZGxlUmVzb3VyY2VzQ2xpY2siLCJmb250U2l6ZSIsImJvcmRlckJvdHRvbSIsInBhZGRpbmciLCJCdXR0b24iLCJ0byIsInRleHQiLCJvbkNsaWNrIiwiUmVhY3RET00iLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFB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RXBCLElBQU15RSxNQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ1c7QUFBQSx5QkFNSCxLQUFLakcsS0FORjtBQUFBLFVBRUxrRyxFQUZLLGdCQUVMQSxFQUZLO0FBQUEsVUFHTEMsSUFISyxnQkFHTEEsSUFISztBQUFBLFVBSUxDLE9BSkssZ0JBSUxBLE9BSks7QUFBQSxVQUtMMUUsT0FMSyxnQkFLTEEsT0FMSztBQVFQLGFBQ0Usd0VBRUU7QUFDRSxpQkFBUyxtQkFBWUEsT0FBWixDQURYO0FBRUUsZUFBTyxFQUFFMEU7QUFGWCxTQUlHRCxJQUpILEVBS0csS0FBS25HLEtBQUwsQ0FBVytDLFFBTGQsQ0FGRixDQURGO0FBWUQ7QUFyQkg7O0FBQUE7QUFBQSxFQUE0QnhCLDRDQUFLLENBQUNDLFNBQWxDLEU7Ozs7Ozs7Ozs7OztBQy82QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE2RSxnREFBUSxDQUFDQyxNQUFULENBQWdCL0UsNENBQUssQ0FBQ2dGLGFBQU4sQ0FBb0J4Ryx3Q0FBcEIsQ0FBaEIsRUFBMEN1QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBMUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9oZXJvLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvZWF0aW5nY29uY2VybnMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9saWZlc3R5bGUyLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX180X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvcmVsYXRpb25zaGlwcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3N0cmVzc21hbmFnZW1lbnQuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzZfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy90cmFuc2l0aW9ucy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fN19fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3NlcnZpY2VzLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX184X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvc3VjY3VsZW50QnVyc3QuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzlfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9tb3JlQ2xhc3Nlcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMTBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9tb3JlUmVzb3VyY2VzLmpwZ1wiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgY29sb3I6ICMzZjRjNGU7XFxufVxcblxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdk1lbnUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmFja2Ryb3Age1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uaGVyby1jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODV2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8tY29udGVudCBibG9ja3F1b3RlIHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQgaDEge1xcbiAgLyogY29sb3I6ICNGRkZGRkY7ICovXFxufVxcblxcbmJsb2NrcXVvdGUgZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIC8qIGNvbG9yOiAjRkZGRkZGOyAqL1xcbn1cXG5cXG4ubWVldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUFFNTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuXFxufVxcblxcblxcblxcblxcbi5wcm9maWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZmlsZVBob3RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmJpbyB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uYmlvIC5iaW9TdWJ0aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5iaW8gcCB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAvKiBwYWRkaW5nOiAwcHggMzBweDsgKi9cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5tZWV0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5iaW8sXFxuICAucHJvZmlsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5wcmFjdGljZUFyZWFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXG59XFxuXFxuXFxuXFxuLnByYWN0aWNlQXJlYXMgLmFyZWFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByYWN0aWNlQXJlYXMgLmFyZWFzPi5hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgMjkwcHg7XFxuICBtYXgtd2lkdGg6IDI5MHB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDMwcHggMzBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYXJlYUltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmFyZWFFYXRpbmdDb25jZXJucyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDE0MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtNTBweDtcXG59XFxuXFxuLmFyZWFMaWZlc3R5bGUge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtNjVweDtcXG59XFxuXFxuLmFyZWFNZWRpY2FsUHJvYmxlbXMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxNDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG59XFxuXFxuLmFyZWFSZWxhdGlvbnNoaXBzIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b20gLTgwcHg7XFxufVxcblxcbi5hcmVhU3RyZXNzIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b20gLTgwcHg7XFxufVxcblxcbi5hcmVhVHJhbnNpdGlvbnMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX182X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IC0yMHB4O1xcbn1cXG5cXG4uYXJlYVRleHQge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xcbn1cXG5cXG4uYXJlYVRleHQgZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiA0MnB4O1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLmFyZWFPdmVybGF5IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjMwcHg7XFxuICBoZWlnaHQ6IDI2MHB4O1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4uc2VydmljZXMge1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkVFQzE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VydmljZXNEZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uc2VydmljZXNJbWFnZSB7XFxuICB3aWR0aDogNTAlO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX183X19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAuc2VydmljZXNEZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNlcnZpY2VzSW1hZ2Uge1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuaGVyby1jb250ZW50IGJsb2NrcXVvdGUgaDEge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxuXFxuICAuaGVyby1jb250ZW50IGJsb2NrcXVvdGUgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTcxLCAyMDgsIDIzMCwgMSk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTAwbXMgZWFzZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDIwMiwgMjI2LCAyNDApO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcblxcbi5yZWFkTW9yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbGFzc2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxufVxcblxcblxcbi5jb250YWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jb250YWN0IGZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuXFxuLmdyb3VwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZjRjNGU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjM2Y0YzRlO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBMQUJFTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5sYWJlbCB7XFxuICBjb2xvcjogIzNmNGM0ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGxlZnQ6IDVweDtcXG4gIHRvcDogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbmlucHV0OmZvY3VzfmxhYmVsLFxcbmlucHV0OnZhbGlkfmxhYmVsIHtcXG4gIHRvcDogLTIwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXN+bGFiZWwsXFxudGV4dGFyZWE6dmFsaWR+bGFiZWwge1xcbiAgdG9wOiAtMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4vKiBUT0RPIGxlYXJuIHRoaXMgKi9cXG5cXG4vKiBCT1RUT00gQkFSUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYmFyOmJlZm9yZSxcXG4uYmFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB3aWR0aDogMDtcXG4gIGJvdHRvbTogMXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogIzNmNGM0ZTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxufVxcblxcbi5iYXI6YmVmb3JlIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLmJhcjphZnRlciB7XFxuICByaWdodDogNTAlO1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG5pbnB1dDpmb2N1c34uYmFyOmJlZm9yZSxcXG5pbnB1dDpmb2N1c34uYmFyOmFmdGVyIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbnRleHRhcmVhOmZvY3Vzfi5iYXI6YmVmb3JlLFxcbnRleHRhcmVhOmZvY3Vzfi5iYXI6YWZ0ZXIge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogSElHSExJR0hURVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oaWdobGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogMTAwcHg7XFxuICB0b3A6IDI1JTtcXG4gIGxlZnQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxuaW5wdXQ6Zm9jdXN+LmhpZ2hsaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxuICAtbW96LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG50ZXh0YXJlYTpmb2N1c34uaGlnaGxpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxufVxcblxcbi8qIEFOSU1BVElPTlMgPT09PT09PT09PT09PT09PSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZDogIzNmNGM0ZTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFQUU1O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2FkZHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMDA3Qyc7XFxuICBwYWRkaW5nOiAwIDE1cHhcXG59XFxuXFxuI2FkZHJlc3M6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwwMDdDJztcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzc2cHgpIHtcXG5cXG4gIC5mb290ZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjYWRkcmVzczpiZWZvcmUge1xcbiAgICBjb250ZW50OiBub25lO1xcbiAgICBwYWRkaW5nOiAwXFxuICB9XFxuICBcXG4gICNhZGRyZXNzOmFmdGVyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXFxuXFxuLmxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLmxpbms6aG92ZXI6YmVmb3JlLFxcbi5saW5rOmZvY3VzOmJlZm9yZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi8qIC5uYXZNZW51OmJlZm9yZSB7XFxuICBib3R0b206IC01cHggIWltcG9ydGFudDtcXG59ICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyArIFwiKTtcXG59XFxuXFxuLm1vcmVDbGFzc2VzIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzlfX18gKyBcIik7XFxufVxcblxcbi5tb3JlUmVzb3VyY2VzIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEwX19fICsgXCIpO1xcbn1cXG5cXG4uc2lnbmF0dXJlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4ubmF2TWVudTpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLnBhZ2UtdGl0bGUge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4ucGFnZS10aXRsZSAudGl0bGUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW46IDUwcHggMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxufVxcblxcbi5jYXJkLWJvZHkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjIyMjI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkLTEge1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbn1cXG5cXG4uY2FyZC0yIHtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmNhcmQtMyB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmNhcmQtNCB7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbn1cXG5cXG4uY2FyZC01IHtcXG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5kcmF3ZXItb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmRyYXdlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTU1cHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0OyAqL1xcbiAgdG9wOiA1MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uZHJhd2VyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVBRTU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3gtc2hhZG93OiAxMXB4IDEwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAxMHB4IDAgNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcblxcbi5kcmF3ZXIrLmRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MwQzNDNjtcXG59XFxuXFxuLmRyYXdlci1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5oZWFkZXItbmF2LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5kcmF3ZXItaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJhd2VyLWl0ZW0+ZGl2IHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmhlYWRlci1oYW1idXJnZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlcjpob3ZlciAqIHtcXG4gIGNvbG9yOiAjODc5MDkyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiAubW9yZVNlcnZpY2VzIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbjogdW5zZXQ7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbn0gKi9cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2VhdGluZ2NvbmNlcm5zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9oZXJvLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9saWZlc3R5bGUyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9tZWRpY2FscHJvYmxlbXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL21vcmVDbGFzc2VzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9tb3JlUmVzb3VyY2VzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9yZWxhdGlvbnNoaXBzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9zZXJ2aWNlcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvc3VjY3VsZW50QnVyc3QuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3RyYW5zaXRpb25zLmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuLy8gVE9ETzogYWNjZXNzaWJpbGl0eVxuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IHtcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgICBzY3JvbGxUbzogbnVsbFxuICAgICAgfSxcbiAgICAgIHNob3dIYW1idXJnZXI6IGZhbHNlLFxuICAgICAgc2hvd0RyYXdlcjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBpZiAod2lkdGggPiA4MDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RHJhd2VyOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dEcmF3ZXI6IGZhbHNlLFxuICAgICAgICBzaG93SGFtYnVyZ2VyOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2hvd0hhbWJ1cmdlclxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGlmICh3aWR0aCA+IDgwMCAmJiBzaG93SGFtYnVyZ2VyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgIHNob3dIYW1idXJnZXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDgwMCAmJiAhc2hvd0hhbWJ1cmdlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93SGFtYnVyZ2VyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTmF2ID0gKHRhcmdldCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiB0YXJnZXQgfSk7XG5cbiAgICBpZiAodGFyZ2V0LmRvY2spIHtcbiAgICAgIHRoaXMuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoY3VycmVudCkgPT4gKHtcbiAgICAgIHNob3dEcmF3ZXI6ICFjdXJyZW50LnNob3dEcmF3ZXJcbiAgICB9KSk7XG4gIH1cblxuICBjbG9zZURyYXdlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEcmF3ZXI6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZVN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBmb250RmFtaWx5OiAnUm9ib3RvLCBzYW5zLXNlcmlmJ1xuICAgIH07XG5cbiAgICBjb25zdCB7XG4gICAgICBwYWdlXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICBuYW1lXG4gICAgfSA9IHBhZ2U7XG5cbiAgICBsZXQgY29udGVudCA9IDxkaXYgLz47XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICBjb250ZW50ID0gPEhvbWUgb25OYXY9e3RoaXMuaGFuZGxlTmF2fSAvPlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ByYWN0aWNlJzpcbiAgICAgICAgY29udGVudCA9IDxQcmFjdGljZUFyZWFzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlcnZpY2VzJzpcbiAgICAgICAgY29udGVudCA9IDxTZXJ2aWNlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgY29udGVudCA9IDxDbGFzc2VzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Jlc291cmNlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8UmVzb3VyY2VzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RvY3MnOlxuICAgICAgICBjb250ZW50ID0gPENsaWVudERvY3VtZW50cyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmZWVzJzpcbiAgICAgICAgY29udGVudCA9IDxGZWVzIC8+O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17dGVtcGxhdGVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIHNob3dIYW1idXJnZXI9e3RoaXMuc3RhdGUuc2hvd0hhbWJ1cmdlcn1cbiAgICAgICAgICBhY3RpdmU9e25hbWV9XG4gICAgICAgICAgb25OYXY9e3RoaXMuaGFuZGxlTmF2fVxuICAgICAgICAgIG9wZW5EcmF3ZXI9e3RoaXMudG9nZ2xlRHJhd2VyfVxuICAgICAgICAvPlxuICAgICAgICA8Qm9keVxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgY2xvc2VEcmF3ZXI9e3RoaXMuY2xvc2VEcmF3ZXJ9XG4gICAgICAgICAgc2hvd0RyYXdlcj17dGhpcy5zdGF0ZS5zaG93RHJhd2VyfVxuICAgICAgICAgIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L0JvZHk+XG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBvbk5hdj17dGhpcy5oYW5kbGVOYXZ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYWdlLnNjcm9sbFRvKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AnKS5zY3JvbGxJbnRvVmlldygpLCAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhZ2Uuc2Nyb2xsVG8gIT09IG51bGwgfHwgcGFnZS5zY3JvbGxUbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHBhZ2Uuc2Nyb2xsVG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZS5zY3JvbGxUbykuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcGFnZS5zY3JvbGxUbyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFnZS5zY3JvbGxUbyksIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURyYXdlck92ZXJsYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNsb3NlRHJhd2VyKClcbiAgfVxuXG4gIHJlbmRlckRyYXdlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dEcmF3ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY24oJ2RyYXdlci1jb250YWluZXInLCB7XG4gICAgICAnaGlkZSc6ICFzaG93RHJhd2VyXG4gICAgfSk7XG5cbiAgICBjb25zdCBvdmVybGF5Q2xhc3NlcyA9IGNuKCdkcmF3ZXItb3ZlcmxheScsIHtcbiAgICAgICdoaWRlJzogIXNob3dEcmF3ZXJcbiAgICB9KTtcblxuXG4gICAgY29uc3Qgb25EcmF3ZXJQcmFjdGljZUNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyU2VydmljZXNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnc2VydmljZXMnLCBzY3JvbGxUbzogMCwgZG9jazogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyYXdlckNvbnRhY3RDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAnY29udGFjdCcsIGRvY2s6IHRydWUgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyYXdlckNsYXNzZXNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnY2xhc3NlcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyRG9jdW1lbnRzQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ2RvY3MnLCBzY3JvbGxUbzogMCwgZG9jazogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyUmVzb3VyY2VzQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ3Jlc291cmNlcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgIGhhbmRsZUNvbnRhY3RDbGljaz17b25EcmF3ZXJDb250YWN0Q2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVTZXJ2aWNlc0NsaWNrPXtvbkRyYXdlclNlcnZpY2VzQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVQcmFjdGljZUNsaWNrPXtvbkRyYXdlclByYWN0aWNlQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVDbGFzc2VzQ2xpY2s9e29uRHJhd2VyQ2xhc3Nlc0NsaWNrfVxuICAgICAgICAgICAgaGFuZGxlRG9jdW1lbnRzQ2xpY2s9e29uRHJhd2VyRG9jdW1lbnRzQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVSZXNvdXJjZXNDbGljaz17b25EcmF3ZXJSZXNvdXJjZXNDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc2VzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlck92ZXJsYXlDbGlja30+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGJvZHlTdHlsZSA9IHtcbiAgICAgIG1pbkhlaWdodDogYGNhbGMoMTAwdmggLSA2MHB4KWBcbiAgICB9O1xuXG4gICAgY29uc3QgbiA9IHBhZ2UubmFtZTtcbiAgICBjb25zdCBjbGFzc2VzID0gY24oe1xuICAgICAgJ21vcmVTZXJ2aWNlcyc6IG4gPT09ICdzZXJ2aWNlcycsXG4gICAgICAnbW9yZVJlc291cmNlcyc6IG4gPT09ICdyZXNvdXJjZXMnLFxuICAgICAgJ21vcmVEb2N1bWVudHMnOiBuID09PSAnZG9jcycsXG4gICAgICAnbW9yZUZlZXMnOiBuID09PSAnZmVlcycsXG4gICAgICAnbW9yZUNsYXNzZXMnOiBuID09PSAnY2xhc3NlcycsXG4gICAgICAnbW9yZVByYWN0aWNlJzogbiA9PT0gJ3ByYWN0aWNlJ1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICBzdHlsZT17Ym9keVN0eWxlfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEcmF3ZXIoKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBpbmxpbmVTdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRURFQUU1JyxcbiAgICBib3hTaGFkb3c6ICcwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyknLFxuICAgIHpJbmRleDogMjQsXG4gIH07XG5cbiAgY29uc3QgbWVudVN0eWxlID0ge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH1cblxuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIG9uTmF2LFxuICAgIHNob3dIYW1idXJnZXIsXG4gICAgb3BlbkRyYXdlclxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcmVuZGVySGFtYnVyZ2VyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0naGVhZGVyLW5hdiBoZWFkZXItaGFtYnVyZ2VyJ1xuICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMCB9fVxuICAgICAgICBvbkNsaWNrPXtvcGVuRHJhd2VyfVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0naGFtYnVyZ2VyJyB3aWR0aD1cIjM0XCIgaGVpZ2h0PVwiMzRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3pcIiAvPjwvc3ZnPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKHNob3dIYW1idXJnZXIpIHtcbiAgICBpbmxpbmVTdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17aW5saW5lU3R5bGV9XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJIYW1idXJnZXIoKX1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ3RvcCcgfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdzaWduYXR1cmUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2hvbWUnIH0pfVxuICAgICAgICAgIHN0eWxlPXt7IC4uLm1lbnVTdHlsZSwgbWFyZ2luUmlnaHQ6IDIwIH19XG4gICAgICAgID5cbiAgICAgICAgICBTdGVwaGFuaWUgU21pdGgsIFBzeS5ELlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXtpbmxpbmVTdHlsZX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ3RvcCcgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnc2lnbmF0dXJlJywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdob21lJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgU3RlcGhhbmllIFNtaXRoLCBQc3kuRC5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdwcmFjdGljZScgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFByYWN0aWNlIEFyZWFzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnc2VydmljZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnc2VydmljZXMnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBTZXJ2aWNlc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2NsYXNzZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY2xhc3NlcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIENsYXNzZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdkb2NzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2RvY3MnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBEb2N1bWVudHNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICdjb250YWN0JyB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY29udGFjdCcgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIENvbnRhY3RcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdyZXNvdXJjZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAncmVzb3VyY2VzJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgUmVzb3VyY2VzXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgb25OYXZcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT0nZm9vdGVyJ1xuICAgID5cbiAgICAgIDxzcGFuPlxuICAgICAgICBTdGVwaGFuaWUgU21pdGgsIFBzeS5ELlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gaWQ9J2FkZHJlc3MnPlxuICAgICAgICA4MDEgQWxoYW1icmEgQmx2ZCwgU3VpdGUgMkIgU2FjcmFtZW50bywgQ0EgOTU4MTZcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICAoOTE2KSAzOTktMzYxNVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2ID5cbiAgKTtcbn07XG5cblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgb25OYXZcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFja2Ryb3AnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVybycgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnIGlkPSd0b3AnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVyby1jb250ZW50Jz5cbiAgICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgXCJBbmQgdGhlIGRheSBjYW1lIHdoZW4gdGhlIHJpc2sgdG8gcmVtYWluIHRpZ2h0IGFzIGEgYnVkIHdhcyBtb3JlIHBhaW5mdWwgdGhhbiB0aGUgcmlzayBpdCB0b29rIHRvIGJsb3Nzb20uXCJcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxmb290ZXI+LSBBbmFpcyBOaW5cbiAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZXQgY2FyZC0yJyBpZD0nbWVldCcgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlJz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdwcm9maWxlUGhvdG8gY2FyZC0xJyBzcmM9J3Jlcy9wcm9maWxlLmpwZycgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmlvJz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Jpb1RpdGxlJz5cbiAgICAgICAgICAgICAgTWVldCBEci4gU3RlcGhhbmllIFNtaXRoXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdiaW9TdWJ0aXRsZSc+XG4gICAgICAgICAgICAgIENsaW5pY2FsIFBzeWNob2xvZ2lzdFxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAge21lZXRTdGVwaH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmFjdGljZUFyZWFzJyBpZD0ncHJhY3RpY2UnPlxuICAgICAgICAgIDxoMj5QcmFjdGljZSBBcmVhczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhRWF0aW5nQ29uY2VybnMnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIEVhdGluZzxiciAvPiBDb25jZXJuc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYUxpZmVzdHlsZScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgTGlmZXN0eWxlPGJyIC8+IENoYW5nZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYUltYWdlIGFyZWFUcmFuc2l0aW9ucycgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgTGlmZTxiciAvPiBUcmFuc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYVJlbGF0aW9uc2hpcHMnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFJlbGF0aW9uc2hpcDxiciAvPiBDaGFsbGVuZ2VzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhTWVkaWNhbFByb2JsZW1zJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBIZWFsdGg8YnIgLz4gRGlmZmljdWx0aWVzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhU3RyZXNzJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBTdHJlc3M8YnIgLz4gTWFuYWdlbWVudFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWRNb3JlJz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdyZWFkTW9yZSBidXR0b24nIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86IDAgfSl9PlxuICAgICAgICAgICAgICBSRUFEIE1PUkVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QgY2FyZC0yJyBpZD0nY29udGFjdCc+XG4gICAgICAgICAgPGgyPkNoYW5nZSBiZWdpbnMgdG9kYXk8L2gyPlxuICAgICAgICAgIDxoMz5SZXF1ZXN0IGEgY29uc3VsdGF0aW9uPC9oMz5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBob25lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+UGhvbmU8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzcz0ncmVhZE1vcmUnPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbic+U0VORDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vKiogSG9tZSAqL1xuXG5cbi8qKiBQYWdlcyAqL1xuXG5jb25zdCBQcmFjdGljZUFyZWFzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9J1ByYWN0aWNlIEFyZWFzJ1xuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtwcmFjdGljZUFyZWFzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9J1NlcnZpY2VzJ1xuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtzZXJ2aWNlc31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDEgXG4gICAgICAgIGJvZHk9e3NlcnZpY2VzUmVpbWJ1cnNtZW50fVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtzZXJ2aWNlc0luc3VyYWNlfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5jb25zdCBDbGFzc2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9eydDbGFzc2VzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17Y2xhc3Nlc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApO1xufVxuXG5jb25zdCBDbGllbnREb2N1bWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J0NsaWVudCBEb2N1bWVudHMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtjbGllbnREb2N1bWVudHN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbmNvbnN0IFJlc291cmNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnUmVzb3VyY2VzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17cmVzb3VyY2VzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cbmNvbnN0IEZlZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J0ZlZXMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtmZWVzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cblxuXG4vKiogUGFnZXMgY29udGVudHMgKi9cblxuY29uc3QgbWVldFN0ZXBoID0gKFxuICA8cD5cbiAgICBXZWxjb21lIGFuZCBUaGFuayB5b3UgZm9yIHZpc2l0aW5nISBUaGlzIGlzIGEgcGxhY2UgdG8gZXhwbG9yZSB0aGUgcG9zc2liaWxpdHkgb2YgY2hhbmdlIGZvciBhIGJldHRlciB0b21vcnJvdy4gVGhlcmUgaXMgbm8g4oCcb25lIHNpemUgZml0cyBhbGzigJ0gYXBwcm9hY2ggdG8gb3VyIHRpbWUgdG9nZXRoZXIgYW5kIEkgd29yayBjb2xsYWJvcmF0aXZlbHkgd2l0aCBteSBjbGllbnRzIHRvIGNyZWF0ZSBhbiBlbnZpcm9ubWVudCBvZiByZXNwZWN0IGFuZCBjb21wYXNzaW9uIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gcmVuZXcgdGhlaXIgbGl2ZXMuIFRoZXJhcHkgaGFzIHRoZSBwb3dlciB0byBib3RoIHNvb3RoZSBhbmQgdHJhbnNmb3JtIGFuZCBJIHVzZSB0ZWNobmlxdWVzIG9mIG9uZS1vbi1vbmUgdGhlcmFweSBhbmQgY2xhc3NlcyB0byBzcGFyayBtZWFuaW5nZnVsIGFuZCBsYXN0aW5nIGNoYW5nZS4gSSBhbSBrbm93biBieSBteSBjbGllbnRzIGFzIGJlaW5nIGRvd24gdG8gZWFydGgsIGdlbnVpbmUsIGFuZCByZWxhdGFibGUuIEkgbG9vayBmb3J3YXJkIHRvIHBhcnRuZXJpbmcgdG9nZXRoZXIgdG8gYnVpbGQgeW91ciBoZWFsdGhpZXIgdG9tb3Jyb3cuXG4gIDwvcD5cbik7XG5cbmNvbnN0IHByYWN0aWNlQXJlYXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDM+RWF0aW5nIENvbmNlcm5zPC9oMz5cbiAgICA8cD5cbiAgICAgIEluZGl2aWR1YWxzIG5vdGljaW5nIG1pbmRsZXNzLCBzdHJlc3MsIGVtb3Rpb25hbCwgb3IgYmluZ2UgZWF0aW5nIGJlaGF2aW9ycyBhcmUgd2VsY29tZSB0byBjb25zaWRlciBib3RoIGluZGl2aWR1YWwgYW5kIGNsYXNzLWJhc2VkIHRoZXJhcGllcyB3aXRoIG1lLiBNeSBhcHByb2FjaCB0byB0aGVzZSBjb25jZXJucyByZWNvZ25pemVzIHRoZSBjb21wbGV4IHJvbGUgZWF0aW5nIGNhbiBwbGF5IGFzIGEgbWVjaGFuaXNtIG9mIGNvcGluZyBmb3IgaW5kaXZpZHVhbCwgZmFtaWx5LCBhbmQgY3VsdHVyYWxseSBzeXN0ZW1pYyBpc3N1ZXMuIFdlIHdvcmsgdG9nZXRoZXIgdG8gYWNrbm93bGVkZ2UgdGhlIGZ1bGxuZXNzIG9mIHRoaXMgcm9sZSBhcyB3ZWxsIGFzIGl0J3MgaGlzdG9yeSwgd2hpbGUgaG9ub3JpbmcgdGhlIGRlc2lyZSB0aGF0IG1heSBleGlzdCB0byBjaGFuZ2UuIFRocm91Z2ggb3VyIHdvcmsgd2UgY2FuIGJlZ2luIHRvIGRldmVsb3AgbmV3IGFuZCBoZWFsdGhpZXIgY29waW5nIHN0cmF0ZWdpZXMgYXMgYSBuYXR1cmFsIG91dGNvbWUgb2YgaW5jcmVhc2VkIGF3YXJlbmVzcyBhbmQgc2VsZi1jb21wYXNzaW9uLiBJIHRhaWxvciBteSBhcHByb2FjaCB0byB0aGUgbmVlZHMgYW5kIHN0eWxlIG9mIHRoZSBpbmRpdmlkdWFsIHdpdGggd2hvbSBJIGFtIHdvcmtpbmcuXG48L3A+XG5cbiAgICA8aDM+TGlmZXN0eWxlIENoYW5nZXM8L2gzPlxuXG4gICAgPHA+XG4gICAgICBNb3N0IG9mIHVzIGNhbiByZWxhdGUgdG8gdGhlIHJ1bm5pbmcgbWVudGFsIGxpc3Qgb2YgdGhpbmdzIHdlIGtub3cgd2UgXCJzaG91bGRcIiBiZSBkb2luZyBpbiBvcmRlciB0byBiZSBoZWFsdGhpZXIuIE1heWJlIHRoaXMgaXMgbW92aW5nIG91ciBib2RpZXMgbW9yZSwgZWF0aW5nIGRpZmZlcmVudGx5LCBpbXByb3ZpbmcgIHNsZWVwIGhhYml0cywgb3IgZGlzY29ubmVjdGluZyBmcm9tIHRlY2hub2xvZ3kuIE1heWJlIGl0IGNvdWxkIGJlIHRoZXNlIHRoaW5ncyBwbHVzIG1hbnkgbW9yZSEgV2hpbGUgY2VydGFpbmx5IGV4Y2VsbGVudCBoYWJpdHMsIGxvb2tpbmcgYXQgYSBsaXN0IG9mIHBlcnNvbmFsIHdlbGxuZXNzIFwidG8gZG9zXCIgY2FuIGJlIG92ZXJ3aGVsbWluZy4gSW4gZmFjdCwgd2Ugb2Z0ZW4gYXZvaWQgdGhpbmtpbmcgYWJvdXQgdGhlc2UgaGVhbHRoeSBsaXZpbmcgaXRlbXMgYmVjYXVzZSBpdCBjYW4gZmVlbCBob3BlbGVzcy4gVG9nZXRoZXIgd2UgY2FuIGNyZWF0ZSBhIHBsYW4gb2Ygc21hbGwgc3RlcHMgdG8gd29yayB0b3dhcmRzIGNvbm5lY3RpbmcgYmVoYXZpb3IgY2hhbmdlcyB3aXRoIHlvdXIgZGVlcGVzdCB2YWx1ZXMuIFRoaW5ncyB0aGF0IG1heSBoYXZlIGZlbHQgZm9yY2VkIGluIHRoZSBwYXN0IGNhbiBiZWNvbWUgdGhpbmdzIHdlIGFyZSBlYWdlciBmb3IuIEkgd2lsbCBsZXZlcmFnZSBteSB0cmFpbmluZyBpbiBMaWZlc3R5bGUgTWVkaWNpbmUgdG8gaGVscCBzZXQgbWFuYWdlYWJsZSBhbmQgcmVzZWFyY2ggc3VwcG9ydGVkIGFpbXMgdG8gcHJvZHVjZSByZWFsIGltcHJvdmVtZW50cyBpbiB5b3VyIGhlYWx0aC5cbjwvcD5cblxuICAgIDxoMz5QaGFzZSBvZiBMaWZlIElzc3Vlcy9MaWZlIFRyYW5zaXRpb25zPC9oMz5cbiAgICA8cD5cbiAgICAgIFRob3VnaCB0aGUgcGhyYXNlLCBcInRoZSBvbmx5IHRoaW5nIGNvbnN0YW50IGlzIGNoYW5nZVwiIGlzIG9uZSBmYW1pbGlhciB0byBtYW55IG9mIHVzLCB0aGlzIGNhbiBiZSBsaXR0bGUgY29tZm9ydCBkdXJpbmcgdGhlIHR1cm1vaWwgb2YgYSBzaWduaWZpY2FudCB0cmFuc2l0aW9uLiBDaGFuZ2VzIGluIGxpZmUgY2lyY3Vtc3RhbmNlcyBjYW4gaW1wYWN0IHVzIG9uIGV2ZXJ5IGxldmVsIG9mIG91ciBiZWluZyBhbmQgZXh0ZXJuYWwgbGlmZS4gU2Vla2luZyB0aGVyYXB5IGR1cmluZyB0aGVzZSB0aW1lcyBjYW4gYmUgYm90aCBhbmNob3IgYW5kIGd1aWRlIGxpZ2h0LiBJIHdpbGwgc3VwcG9ydCB5b3UgdG8gcHJvY2VzcyB0aGUgbG9zcyBvZiBob3cgdGhpbmdzIGhhdmUgYmVlbi4gV2hlbiB5b3UgYXJlIHJlYWR5LCB3ZSB3aWxsIHNldCBjb25zY2lvdXNseSBkZXZlbG9wZWQgZ29hbHMgZm9yIHRoZSBwaGFzZSBvZiBsaWZlIHRoYXQgeW91IGZpbmQgeW91cnNlbGYgaW4gbm93LiBXZSB3aWxsIHdvcmsgdG9nZXRoZXIgdG8gaWRlbnRpZnkgaGVhbHRoeSBjb3JlIGNvbXBvbmVudHMgb2Ygd2hvIHlvdSBhcmUgZXZvbHZpbmcgdG8gYmUgYW5kIGNlbnRlciBvdXIgYXR0ZW50aW9uIHRvIG51cnR1cmUgdGhpcyBncm93dGguIFRoZXJlIGlzIG5vIHNldCB0aW1lbGluZSBvZiBob3cgbG9uZyBhbiBhZGp1c3RtZW50IHBlcmlvZCBsYXN0cy4gSSB3aWxsIGhlbHAgeW91IHRvIG1vdmUgaW50byB0aGUgbmV4dCBwYXJ0IG9mIHlvdXIgbGlmZSBpbiB0aGUgaGVhbHRoZnVsIHdheXMsIGFzIHF1aWNrbHkgYXMgaXMgcmVhc29uYWJsZSwgYW5kIGluIGNvbXBsZXRlIHJlc3BlY3QgZm9yIHlvdXIgb3duIHBhY2UuXG48L3A+XG5cbiAgICA8aDM+UmVsYXRpb25zaGlwIENoYWxsZW5nZXM8L2gzPlxuICAgIDxwPlxuICAgICAgUm9tYW50aWMsIGZhbWlseSwgc29jaWFsLCBhbmQgb2NjdXBhdGlvbmFsIHJlbGF0aW9uc2hpcHMgY2FuIGFsbCBiZSBzb3VyY2VzIG9mIHNpZ25pZmljYW50IHBsZWFzdXJlIGFuZCBjb25zZXF1ZW50bHksIHNpZ25pZmljYW50IHBhaW4uIFRoZXJlIGFyZSBhIG11bHRpdHVkZSBvZiByZWFzb25zIHJlbGF0aW9uc2hpcHMgY2FuIGJlY29tZSB0cm91YmxlZC4gTWFueSBvZiB0aGUgcm9vdHMgb2YgdGhlc2UgcmVhc29ucyBjYW4gYmUgdHJhY2VkIHRvIGNvbW11bmljYXRpb24gY2xhcml0eS4gV2hpbGUgd2UgY2Fubm90IGNoYW5nZSBvdGhlciBwZW9wbGUsIHdlIGNhbiBpZGVudGlmeSBwZXJzb25hbCBxdWFsaXRpZXMgaW4gb3Vyc2VsdmVzIHRoYXQgd2Ugd2lzaCB0byBjaGFuZ2UgZm9yIHRoZSB3ZWxsYmVpbmcgb2YgYSBjdXJyZW50IG9yIGZ1dHVyZSByZWxhdGlvbnNoaXAuIFdvcmtpbmcgdG93YXJkcyBpZGVudGlmeWluZyB0aGVzZSBhcmVhcywgY3JlYXRpbmcgbWluZGZ1bCBhd2FyZW5lc3MgYXJvdW5kIHRoZW0sIGFuZCBtYWtpbmcgdmFsdWVzIGJhc2VkIGNoYW5nZXMgY2FuIHByb3ZpZGUgYm90aCBwZXJzb25hbCBiZW5lZml0cyBhbmQgaW1wcm92ZW1lbnRzIHRvIHRoZSByZWxhdGlvbnNoaXAuIFdlIGNhbiB3b3JrIHRvZ2V0aGVyIHRvIGlkZW50aWZ5IGFuZCBvcHRpbWl6ZSB0aGVzZSBjaGFuZ2VzIGluIGEgY29tcGFzc2lvbmF0ZSBhbmQgcmVzcGVjdGZ1bCBlbnZpcm9ubWVudCB3aGlsZSBwcmlvcml0aXppbmcgZWZmZWN0aXZlIGFuZCBjbGVhciBjb21tdW5pY2F0aW9uIGFzIHRoZSBjb3JuZXJzdG9uZSB0byBpbXByb3ZlZCByZWxhdGlvbnNoaXBzLlxuPC9wPlxuICAgIDxoMz5IZWFsdGggRGlmZmljdWx0aWVzPC9oMz5cbiAgICA8cD5cbiAgICAgIFRoZXJlIGlzIG5vIGRvdWJ0IHRoYXQgb3VyIHBoeXNpY2FsIHdlbGxiZWluZyBpbXBhY3RzIG91ciBwc3ljaG9sb2dpY2FsIHdlbGxiZWluZyBhbmQgdmljZSB2ZXJzYS4gV2hldGhlciB5b3UgYXJlIGxvb2tpbmcgZm9yIHN1cHBvcnQgaW4gaW1wcm92aW5nIHlvdXIgbWFuYWdlbWVudCBvZiBhIGhlYWx0aCBkaWZmaWN1bHR5LCBoYW5kbGluZyB0aGUgc3RyZXNzIGFyb3VuZCBpdCwgb3IgYmVsaWV2ZSB0aGVyZSBtYXkgYmUgbGlmZXN0eWxlIGNoYW5nZXMgdGhhdCB3aWxsIHJldmVyc2UgdGhlIGNvbmRpdGlvbiwgSSB3b3VsZCBiZSBoYXBweSB0byBzdXBwb3J0IHRoaXMgYXNwZWN0IG9mIHlvdXIgaGVhbHRoLiBJIGFtIGEgdHJhaW5lZCBoZWFsdGggcHN5Y2hvbG9naXN0IGFuZCB3b3JrIHJlZ3VsYXJseSB3aXRoIGJvdGggY2hyb25pYyBhbmQgYWN1dGUgbWVkaWNhbCBjb25kaXRpb25zLiBJIGhhdmUgcGVyc29uYWwgYW5kIHByb2Zlc3Npb25hbCBleHBlcmllbmNlIHdpdGggdGhlIGltcGFjdHMgcGh5c2ljYWwgaGVhbHRoIGNhbiBoYXZlIG5vdCBvbmx5IG9uIG9uZXNlbGYsIGJ1dCBhbHNvIG9uIHRob3NlIGFyb3VuZCB1cy4gSSBiZWxpZXZlIHN1cHBvcnQgY2FuIG1ha2UgYSBzdWJzdGFudGl2ZSBkaWZmZXJlbmNlIGluIG1hbmFnaW5nIGEgaGVhbHRoIGNvbmNlcm4gYXMgd2VsbCBhcyB0aGUgZW1vdGlvbmFsIGFuZCBzb2NpYWwgaW1wYWN0cyBvZiB0aGlzLiBJIHdpbGwgd29yayB3aXRoIHlvdSB0byBhY2NlcHQgdGhvc2UgcmVhbGl0aWVzIHRoYXQgYXJlIHVuY2hhbmdpbmcgYXMgd2VsbCBhcyByZWNvZ25pemUgb3Bwb3J0dW5pdGllcyBmb3IgcG9zaXRpdmUgZ3Jvd3RoLlxuPC9wPlxuICAgIDxoMz5FeGNlcHRpb25zIHRvIHRoZSBhYm92ZTwvaDM+XG4gICAgPHA+XG4gICAgICBEdWUgdG8gdGhlIHBhcnQgdGltZSBuYXR1cmUgb2YgbXkgcHJpdmF0ZSBwcmFjdGljZSwgSSBhbSB1bmZvcnR1bmF0ZWx5IHVuYWJsZSBhdCB0aGlzIHRpbWUgdG8gd29yayB3aXRoIHRob3NlIHdobyBoYXZlIGFjdGl2ZSBhbmQgYWN1dGUgc3VpY2lkYWwgb3IgaG9taWNpZGFsIHRob3VnaHRzIG9yIGFyZSBlbmdhZ2luZyBpbiBzZWxmLWhhcm1pbmcgYmVoYXZpb3JzLiBXaGlsZSBpdCBpcyBub3QgdW5jb21tb24gZm9yIHRoZXNlIHRob3VnaHRzIG9yIGJlaGF2aW9ycyB0byBiZSBwYXJ0IG9mIHRoZSBsaXZlcyBvZiB0aG9zZSB3aG8gZmFsbCBpbnRvIG9uZSBvciBtb3JlIG9mIHRoZSBjYXRlZ29yaWVzIGFib3ZlLCBJIGFtIHVuYWJsZSB0byBiZSBhdmFpbGFibGUgd2l0aCB0aGUgY29uc2lzdGVuY3kgb3IgcmVndWxhcml0eSB0aGF0IGlzIG5lZWRlZCB0byBoZWxwIHN1cHBvcnQgYWN0aXZlIGFuZCBhY3V0ZSBzYWZldHkgY29uY2VybnMuIFNob3VsZCBhbiBhY3RpdmUgYW5kIGFjdXRlIHNhZmV0eSBjb25jZXJuIG9jY3VyIGR1cmluZyBvdXIgd29yayB0b2dldGhlciwgSSB3aWxsIHdvcmsgdG9nZXRoZXIgd2l0aCB5b3UgdG8gZmluZCBhcHByb3ByaWF0ZSBjYXJlIHRoYXQgY2FuIG1lZXQgeW91ciBuZWVkcy4gSXQgaXMgbGlrZWx5IHRoYXQgd2l0aCBzdGFiaWxpemF0aW9uIHRoZXJlIGlzIHBvdGVudGlhbCB0byByZXR1cm4gdG8gb3VyIHdvcmsgdG9nZXRoZXIgaWYgdGhhdCBpcyBkZXRlcm1pbmVkIHRvIGJlIGluIHlvdXIgYmVzdCBpbnRlcmVzdC4gSSBhbSBoYXBweSB0byBkaXNjdXNzIHRoaXMgaW4gZnVydGhlciBkZXRhaWwgYW5kIHdlbGNvbWUgYW55IHF1ZXN0aW9ucyBvciBjb25jZXJucy5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBzZXJ2aWNlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgIFdoYXQgdG8gRXhwZWN0XG4gICAgPC9oMz5cbiAgICA8aDM+VGVsZXBob25lIENvbnN1bHQ8L2gzPlxuICAgIDxwPlxuICAgICAgQXMgb3VyIGZpcnN0IGNvbnRhY3QgZm9yIGVpdGhlciBpbmRpdmlkdWFsIHRoZXJhcHkgb3IgY2xhc3NlcyBJIG9mZmVyIGEgY29tcGxlbWVudGFyeSAxNS1taW51dGUgcGhvbmUgY29uc3VsdGF0aW9uLiBUaGlzIGlzIGFuIG9wcG9ydHVuaXR5IGZvciB1cyB0byBjb25uZWN0IGFib3V0IHRoZSBpc3N1ZXMgdGhhdCBicmluZyB5b3UgaW50byBjYXJlLCBhbmQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgd29ya2luZyB0b2dldGhlciBpcyB0aGUgYmVzdCBmaXQgZm9yIHlvdXIgbmVlZHMuIEkgY2FuIGFuc3dlciBhbnkgcXVlc3Rpb25zIHRoYXQgeW91IG1heSBoYXZlIGFib3V0IGNvbWluZyBpbnRvIGNhcmUgYW5kIHNldCB1cCB5b3VyIGZpcnN0IGFwcG9pbnRtZW50IG9yIGNsYXNzLiAgICAgICBcbiAgICAgIDxiciAvPlxuICAgICAgPGk+MTUtbWluIGluaXRpYWwgdGVsZXBob25lIGNvbnN1bHQmI3gyMDE0OyBmcmVlPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+SW5pdGlhbCBBcHBvaW50bWVudDwvaDM+XG4gICAgPHA+XG4gICAgICBBbiBpbml0aWFsIGluZGl2aWR1YWwgdGhlcmFweSBhcHBvaW50bWVudCBpcyBhIDYwLW1pbnV0ZSBhcHBvaW50bWVudC4gRHVyaW5nIHRoaXMgYXBwb2ludG1lbnQgSSB3aWxsIHJldmlldyB5b3VyIGNvbXBsZXRlIGludGFrZSBmb3JtIHdpdGggeW91IHRvIGVuc3VyZSB0aGF0IEkgaGF2ZSBhbiBhcHByb3ByaWF0ZSB1bmRlcnN0YW5kaW5nIG9mIHNvbWUgb2YgeW91ciBoaXN0b3J5LCB3aGF0IGJyaW5ncyB5b3UgaW50byBjYXJlLCBhbmQgeW91ciBnb2FscyBmb3Igb3VyIHdvcmsgdG9nZXRoZXIuIFdlIHdpbGwgYWxzbyB1c2UgdGhpcyBhcHBvaW50bWVudCB0byBjcmVhdGUgc29tZSBpbml0aWFsIGdvYWxzIGZvciBjYXJlIGFuZCB0byBzZXQgdXAgb3VyIGV4cGVjdGF0aW9ucyBmb3IgdHJlYXRtZW50LlxuICAgICAgPGJyIC8+XG4gICAgPGk+NjAtbWluIGluaXRpYWwgaW5kaXZpZHVhbCBhcHBvaW50bWVudCYjeDIwMTQ7ICQxNTA8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5SZXR1cm4gQXBwb2ludG1lbnRzPC9oMz5cbiAgICA8cD5cbiAgICAgIFJldHVybiBhcHBvaW50bWVudHMgYXJlIDUwLW1pbnV0ZSBhcHBvaW50bWVudHMuIER1cmluZyByZXR1cm4gYXBwb2ludG1lbnRzIHdlIHdpbGwgd29yayB0b2dldGhlciBvbiB5b3VyIGdvYWxzIGFuZCBJIHdpbGwgc3VwcG9ydCB5b3UgdGhyb3VnaCB0aGUgcHJvY2Vzcy4gV2Ugd2lsbCByZWd1bGFybHkgY2hlY2sgaW4gYWJvdXQgdGhlIHByb2dyZXNzIG9mIGNhcmUgYW5kIG1ha2UgYWRqdXN0bWVudHMgYXMgbmVlZGVkIHRvIGVuc3VyZSB0aGF0IHdlIGFyZSB3b3JraW5nIGVmZmVjdGl2ZWx5IHRvZ2V0aGVyLlxuICAgICAgPGJyIC8+XG4gICAgICA8aT41MC1taW4gcmV0dXJuIGluZGl2aWR1YWwgYXBwb2ludG1lbnQmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+Q2xhc3NlczwvaDM+XG4gICAgPHA+XG4gICAgICBDbGFzc2VzIGFyZSA5MCBtaW51dGVzIGluIGxlbmd0aC4gRHVlIHRvIHNwYWNlIG5lZWRlZCwgY2xhc3NlcyBhcmUgaGVsZCBhdCBhIG5lYXJieSBsb2NhdGlvbiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIHRoZXJhcHkgb2ZmaWNlLiBNb3JlIGluZm9ybWF0aW9uIGFib3V0IGNsYXNzIGFuZCBjbGFzcyBjb250ZW50IGNhbiBiZSBmb3VuZCB1bmRlciB0aGUgXCJDbGFzc2VzXCIgdGFiLiBUaG91Z2ggY2xhc3NlcyB0YWtlIHBsYWNlIG92ZXIgNCBzZXNzaW9ucywgdGhlIGZ1bGwgZmVlIG11c3QgYmUgcGFpZCBpbiBhZHZhbmNlIG9mIHRoZSBmaXJzdCBzZXNzaW9uLiBBZnRlciB0aGlzIHBheW1lbnQsIG5vIGFkZGl0aW9uYWwgY2hhcmdlcyBhcmUgaW5jdXJyZWQgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIGNsYXNzZXMgdW5sZXNzIGFuIGFkZGl0aW9uYWwgc2VydmljZSBpcyByZXF1ZXN0ZWQgb3IgcHJvdmlkZWQuXG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjQtc2Vzc2lvbiAoMzYwLW1pbikgY2xhc3Mgc2VyaWVzJiN4MjAxNDsgJDE2MDwvaT5cbiAgICA8L3A+XG4gICAgPGgzPlRlbGVNZW50YWwgSGVhbHRoPC9oMz5cbiAgICA8cD5cbiAgICAgIE9uIG9jY2FzaW9uIGl0IG1heSBiZSBpbmRpY2F0ZWQgZm9yIHVzIHRvIGVuZ2FnZSBpbiB0ZWxlLWhlYWx0aCBlaXRoZXIgb3ZlciB0aGUgcGhvbmUgb3IgdGhyb3VnaCB2aWRlbyBjb21tdW5pY2F0aW9uLiBUaGVzZSBzZXJ2aWNlcyBhcmUgb2ZmZXJlZCB0byBpbmRpdmlkdWFscyBvbmx5IGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGluaXRpYWxseSBlc3RhYmxpc2hlZCBpbi1wZXJzb24gdGhyb3VnaCBhdCBsZWFzdCBvbmUgaW4tcGVyc29uIGFwcG9pbnRtZW50LiBEdWUgdG8gbGljZW5zaW5nIHJlcXVpcmVtZW50cywgSSBhbSB1bmFibGUgdG8gcHJvdmlkZSB0aGVzZSBzZXJ2aWNlcyB0byBhbnlvbmUgb3V0LW9mLXN0YXRlIG9yIGNvdW50cnkgYXQgdGhlIHRpbWUgb2Ygc2VydmljZS4gVGhlcmUgYXJlIGEgdmFyaWV0eSBvZiBwbGF0Zm9ybXMgYXZhaWxhYmxlIGZvciB0aGlzIHNlcnZpY2UgYW5kLCB0aG91Z2ggY29udmVuaWVudCwgaXQgaXMgaW1wb3J0YW50IHRvIGJlIGF3YXJlIHRoYXQgdGhleSBhcmUgbm90IEhJUEFBIGNvbXBsaWFudC4gQ29tcGxldGluZyB0aGUgSW5mb3JtZWQgQ29uc2VudCBmb3JtIGFja25vd2xlZGdlcyB5b3VyIHVuZGVyc3RhbmRpbmcgb2YgdGhpcyBhbmQgYWNjZXB0YW5jZSBvZiB0aGUgcmlzayBzaG91bGQgd2UgdXRpbGl6ZSB0aGlzIGZvcm1hdCBvZiBjYXJlLlxuICAgICAgPGJyIC8+XG4gICAgICA8aT41IHRvIDI1IG1pbnV0ZXMmI3gyMDE0OyAkNzU8L2k+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjI2LTUwIG1pbnV0ZXMmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IHNlcnZpY2VzUmVpbWJ1cnNtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGgzIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgIFBheW1lbnQgYW5kIFJlaW1idXJzZW1lbnRcbiAgICA8L2gzPlxuICAgIDxwPlxuICAgICAgWW91IHdpbGwgYmUgZXhwZWN0ZWQgdG8gcGF5IGZvciBlYWNoIHNlc3Npb24gYmVmb3JlL2F0IHRoZSBzdGFydCBvZiBzZXNzaW9uLCB1bmxlc3Mgd2UgYWdyZWUgb3RoZXJ3aXNlLiBQYXltZW50IG1heSBiZSBtYWRlIHRocm91Z2ggY2FzaCwgY2hlY2ssIG9yIEhJUEFBIGNvbXBsaWFudCBhcHBsaWNhdGlvbi4gVXNlIG9mIHRoZSBISVBBQSBjb21wbGlhbnQgYXBwbGljYXRpb24gaW5jdXJzIGFuIGFkZGl0aW9uYWwgJDUgY2hhcmdlLlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IHNlcnZpY2VzSW5zdXJhY2UgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICBJbnN1cmFuY2VcbiAgICA8L2gzPlxuICAgIDxwPlxuICAgICAgSSBhbSBhbiBcIm91dCBvZiBuZXR3b3JrIHByb3ZpZGVyXCIgZm9yIGluc3VyYW5jZSBuZXR3b3JrcyBidXQgd2lsbCBwcm92aWRlIHlvdSBhIFN1cGVyYmlsbCB3aGljaCB5b3UgbWF5IHVzZSB0byByZXF1ZXN0IHJlaW1idXJzZW1lbnQuIFRoZSBjb3ZlcmFnZSB5b3UgcmVjZWl2ZSBpcyBlbnRpcmVseSBkZXBlbmRlbnQgdXBvbiB0aGUgcGxhbiB0aGF0IHlvdSBoYXZlLiBJIHJlY29tbWVuZCB0aGF0IHlvdSBjb250YWN0IHlvdXIgaW5zdXJhbmNlIGNvbXBhbnkgZGlyZWN0bHkgdG8gZGV0ZXJtaW5lIHlvdXIgc3BlY2lmaWMgY292ZXJhZ2UuIFNvbWUgcXVlc3Rpb25zIHRoYXQgbWF5IGJlIGhlbHBmdWwgaW4gdGhpcyBjb252ZXJzYXRpb24gaW5jbHVkZTpcbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICBEbyBJIGhhdmUgbWVudGFsIGhlYWx0aCBpbnN1cmFuY2UgYmVuZWZpdHMgdGhhdCBjb3ZlciBwc3ljaG90aGVyYXB5P1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgRG9lcyBteSBwb2xpY3kgY292ZXIgYW4gb3V0IG9mIG5ldHdvcmsgTGljZW5zZWQgUHN5Y2hvbG9naXN0PyBJZiBzbywgd2hhdCBwZXJjZW50YWdlIGlzIGNvdmVyZWQgb3Igd2hhdCBpcyB0aGUgY292ZXJhZ2UgYW1vdW50IHBlciB0aGVyYXB5IHNlc3Npb24/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBXaGF0IGlzIG15IGRlZHVjdGlibGUgYW5kIGhhcyBpdCBiZWVuIG1ldD9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIEFyZSBteSBtZWRpY2FsIGFuZCBtZW50YWwgaGVhbHRoL2JlaGF2aW9yYWwgaGVhbHRoIGRlZHVjdGlibGVzIHNlcGFyYXRlP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgSG93IG1hbnkgc2Vzc2lvbnMgcGVyIHllYXIgZG9lcyBteSBoZWFsdGggaW5zdXJhbmNlIGNvdmVyP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgRG9lcyB0aGUgZGlhZ25vc2lzIG1hdHRlcj8gQXJlIHNvbWUgZGlhZ25vc2VzIGNvdmVyZWQgYW5kIG90aGVycyBub3Q/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBXaGF0IHBhcGVyd29yayBvciBmb3JtcyBkbyBJIG5lZWQgdG8gc3VibWl0IGZvciBzZXNzaW9ucyB0byBiZSBjb3ZlcmVkP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgSXMgYXBwcm92YWwgcmVxdWlyZWQgZnJvbSBteSBwcmltYXJ5IGNhcmUgcGh5c2ljaWFuP1xuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuXG5jb25zdCBjbGFzc2VzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGgzPlxuICAgICAgTW9vZCAmIEZvb2RcbiAgICA8L2gzPlxuICAgIDxwPlxuICAgICAgTW9vZCAmIEZvb2QgaXMgYSBjbGFzcyBkZXNpZ25lZCBmb3IgaW5kaXZpZHVhbHMgc3RydWdnbGluZyB3aXRoIG92ZXJlYXRpbmcsIG1pbmRsZXNzIGVhdGluZywgc3RyZXNzIGVhdGluZywgZW1vdGlvbmFsIGVhdGluZywgc2hhbWUgYXJvdW5kIGVhdGluZywgb3IgYmluZ2UgZWF0aW5nLiBUaGUgY291cnNlIGlzIHN0cnVjdHVyZWQgaW50byA0IGNsYXNzZXMgZWFjaCBsYXN0aW5nIDkwIG1pbnV0ZXMuIFRoZSBjbGFzcyBjZW50ZXJzIG9uIHByZXNlbnRlZCBtYXRlcmlhbCB0aG91Z2ggcXVlc3Rpb25zIGFuZCBwYXJ0aWNpcGF0aW9uIGFyZSB3ZWxjb21lIGFuZCBlbmNvdXJhZ2VkLiBDbGFzcyBtYXRlcmlhbHMgYWxzbyBpbmNsdWRlIGhhbmRvdXRzIGFuZCBhdC1ob21lIHByYWN0aWNlIGV4ZXJjaXNlcy4gRHVyaW5nIHRoZSBjb3Vyc2Ugb2YgdGhlIGNsYXNzZXMgd2Ugd2lsbCBjb3ZlciB0b3BpY3MgaW5jbHVkaW5nOiB3aGF0IGVtb3Rpb25hbCBlYXRpbmcgaXMsIGN1bHR1cmFsIGltcGxpY2F0aW9ucywgZW52aXJvbm1lbnRhbCBpbXBhY3RzLCBzZXQgcG9pbnQgdGhlb3J5LCBlbW90aW9uYWwgdnMgcGh5c2ljYWwgaHVuZ2VyLCBiaW5nZSBlYXRpbmcgY3ljbGUsIGludGVycGVyc29uYWwgZHluYW1pY3MgYXJvdW5kIGZvb2QsIHNlbGYtdGFsaywgYmVoYXZpb3IgYW5hbHlzaXMgJiBiZWhhdmlvciBjaGFuZ2UsIG1pbmRmdWwgZWF0aW5nLCBsb3ZpbmcgbGltaXRzLCBzZWxmLWNvbXBhc3Npb24sIG1hbmFnaW5nIGRpZmZpY3VsdCBlbW90aW9ucywgaGFiaXQgZm9ybWF0aW9uLCBzdGFnZXMgb2YgY2hhbmdlLCBhbmQgaGVhbHRoeSBlYXRpbmcgZ3VpZGVsaW5lcy4gQnkgdGhlIGVuZCBvZiB0aGUgY2xhc3Mgc2VyaWVzIHBhcnRpY2lwYW50cyB3aWxsIGJlIGFibGUgdG8gcmVjb2duaXplIG9wcG9ydHVuaXRpZXMgZm9yLCBwcmVwYXJlIGZvciwgYW5kIG1ha2UgcG9zaXRpdmUgY2hhbmdlcyBpbiB0aGVpciByZWxhdGlvbnNoaXBzIHdpdGggdGhlbXNlbHZlcywgZm9vZCwgYW5kIHRoZWlyIGVudmlyb25tZW50LlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IHJlc291cmNlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxwPlxuICAgICAgVGhlIGJlbG93IGFyZSByZXNvdXJjZXMgdGhhdCBJIGZpbmQgdG8gYmUgY2xpbmljYWxseSB2YWx1YWJsZS4gSSBoYXZlIG5vIGFmZmlsaWF0aW9uIHdpdGggYW55IG9mIHRoZSBpbmRpdmlkdWFscyBvciBlbnRpdGllcyBpbmRpY2F0ZWQgYmVsb3cuIFRoZXNlIHJlc291cmNlcyBhcmUgcHJvdmlkZWQgcHVyZWx5IGR1ZSB0byBteSBwZXJjZXB0aW9uIG9mIHRoZWlyIGNsaW5pY2FsIGJlbmVmaXQuIEkgcmVjZWl2ZSBubyBjb21wZW5zYXRpb24gb2YgYW55IGtpbmQgZm9yIHNoYXJpbmcgdGhlc2UgcmVzb3VyY2VzLlxuICAgIDwvcD5cbiAgICA8aDM+V2VicGFnZXM8L2gzPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYW54aWV0eWNhbmFkYS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QW54aWV0eSBDYW5hZGE8L2E+IGlzIGFuIGV4Y2VsbGVudCB3ZWIgcmVzb3VyY2UgZm9yIGV2aWRlbmNlIGJhc2VkIGluZm9ybWF0aW9uIGFib3V0IGFueGlldHkuIFRoZSB3ZWJzaXRlIGlzIHdyaXR0ZW4gaW4gY2xlYXIgbGFuZ3VhZ2UgdGhhdCBpcyB0aG91Z2h0ZnVsLCBlYXN5IHRvIHVuZGVyc3RhbmQsIGFuZCBoZWxwZnVsLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL21hcHMuYW54aWV0eWNhbmFkYS5jb20vY291cnNlcy9teS1hbnhpZXR5LXBsYW4tbWFwLWZvci1hZHVsdHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TXkgQW54aWV0eSBQbGFuPC9hPiBpcyB0aGUgb25saW5lIGNvdXJzZSBhc3NvY2lhdGVkIHdpdGggQW54aWV0eSBDYW5hZGEuIEl0IGlzIGEgZnJlZSBjb3Vyc2UgdGhhdCBwcm92aWRlcyBleGNlbGxlbnQgaW5mb3JtYXRpb24gaW4gYWRkaXRpb24gdG8gcHJhY3RpY2FsIHRvb2xzIGFuZCBwcmFjdGljZXMgZm9yIG1hbmFnaW5nIGFueGlldHkgYW5kIGFueGlldHktYmFzZWQgY29uZGl0aW9ucy5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5CcmVuZSBCcm93bjwvYT4gaXMgYW4gYXV0aG9yLCByZXNlYXJjaGVyLCBhbmQgc3BlYWtlciB0aGF0IEkgaGlnaGx5IHJlY29tbWVuZC4gVGhlIGxpbmsgaXMgdG8gaGVyIG1haW4gd2VicGFnZS4gQmVsb3cgYXJlIHNwZWNpZmljIHJlc291cmNlcyBvZiBoZXJzIHRoYXQgSSByZWNvbW1lbmQuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2dzYy5iZXJrZWxleS5lZHUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIEdyZWF0ZXIgR29vZCBTY2llbmNlIENlbnRlcjwvYT4tIEJlcmtlbGV5IGlzIGEgY2VudGVyIG9mIHJlc2VhcmNoIGFuZCBpbm5vdmF0aW9uIGZvY3VzaW5nIG9uIG1ha2luZyBwb3NpdGl2aXR5IGFuZCBwb3NpdGl2ZSBjaGFuZ2UgYWNjZXNzaWJsZSB0byBhbGwuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVkeC5vcmcvY291cnNlL3RoZS1zY2llbmNlLW9mLWhhcHBpbmVzcy0wXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIFNjaWVuY2Ugb2YgSGFwcGluZXNzPC9hPiBpcyB0aGUgb25saW5lIGNvdXJzZSBmcm9tIHRoZSBHcmVhdGVyIEdvb2QgU2NpZW5jZSBDZW50ZXIuIEl0IGlzIGEgZnJlZSA4LXdlZWsgY291cnNlIHRoYXQgcHJvdmlkZXMgdG9vbHMgdG8gaGFwcGllciBleHBlcmllbmNlcyBhbmQgZ3JlYXRlciBtZWFuaW5nIGluIGxpZmUuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2dpYS5iZXJrZWxleS5lZHUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R3JlYXRlciBHb29kIGluIEFjdGlvbjwvYT4gcHJvdmlkZXMgZG9hYmxlIHByYWN0aWNlcyBmb3IgbWFraW5nIGNvbmNyZXRlIGFuZCBpbXBhY3RmdWwgcG9zaXRpdmUgY2hhbmdlc1xuICAgIDwvcD5cblxuICAgIDxoMz5WaWRlb3M8L2gzPlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlZC5jb20vdGFsa3MvYnJlbmVfYnJvd25fb25fdnVsbmVyYWJpbGl0eT91dG1fY2FtcGFpZ249dGVkc3ByZWFkJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT10ZWRjb21zaGFyZVwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBQb3dlciBvZiBWdWxuZXJhYmlsaXR5LSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGVkLmNvbS90YWxrcy9icmVuZV9icm93bl9saXN0ZW5pbmdfdG9fc2hhbWU/dXRtX2NhbXBhaWduPXRlZHNwcmVhZCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dGVkY29tc2hhcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaXN0ZW5pbmcgdG8gU2hhbWUtIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMjYxMzQ4NzA5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3VwZXJTb3VsIFNlc3Npb25zOiBUaGUgQW5hdG9teSBvZiBUcnVzdC0gQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vdmlkZW9zL1wiIHRhcmdldD1cIl9ibGFua1wiPkFkZGl0aW9uYWwgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8veW91dHUuYmUvSXZ0WkJVU3BscjRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgU3BhY2UgQmV0d2VlbiBTZWxmLUVzdGVlbSBhbmQgU2VsZi1Db21wYXNzaW9uLSBLcmlzdGluIE5lZmY8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vc2VsZi1jb21wYXNzaW9uLm9yZy92aWRlb3MvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QWRkaXRpb25hbCBLcmlzdGluIE5lZmY8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlZC5jb20vdGFsa3Mvc2FuZHJhX2FhbW9kdF93aHlfZGlldGluZ19kb2Vzbl90X3VzdWFsbHlfd29yaz91dG1fY2FtcGFpZ249dGVkc3ByZWFkJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT10ZWRjb21zaGFyZVwiIHRhcmdldD1cIl9ibGFua1wiPldoeSBEaWV0aW5nIERvZXNuJ3QgVXN1YWxseSBXb3JrLSBTYW5kcmEgQWFtb2R0PC9hPjxiciAvPlxuXG4gICAgPGgzPkF1ZGlvIFJlY29yZGluZ3M8L2gzPlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vY2VudGVyZm9ybXNjLm9yZy9wcmFjdGljZS1tc2MvZ3VpZGVkLW1lZGl0YXRpb25zLWFuZC1leGVyY2lzZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWluZGZ1bCBTZWxmIENvbXBhc3Npb24gTWVkaXRhdGlvbnM8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnVjbGFoZWFsdGgub3JnL21hcmMvbWluZGZ1bC1tZWRpdGF0aW9uc1wiIHRhcmdldD1cIl9ibGFua1wiPlVDTEEgTWVkaXRhdGlvbnMgKEFsc28gYXZhaWxhYmxlIGluIFNwYW5pc2ghKTwvYT48YnIgLz5cblxuICAgIDxoMz5Cb29rczwvaDM+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2VuZWVucm90aC5jb20vYm9va3MvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V29tZW4sIEZvb2QsIGFuZCBHb2QgYnkgR2VuZWVuIFJvdGg8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vYm9va3MtYXVkaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIEdpZnRzIG9mIEltcGVyZmVjdGlvbiBieSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9ib29rcy1hdWRpby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EYXJpbmcgR3JlYXRseSBieSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9ib29rcy1hdWRpby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SaXNpbmcgU3Ryb25nIGJ5IEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgY2xpZW50RG9jdW1lbnRzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHA+XG4gICAgICBUaGUgZm9sbG93aW5nIGZvcm1zIGFyZSBmb3IgeW91ciByZXZpZXcuIElmIHdlIGhhdmUgc2NoZWR1bGVkIGFuIGluLXBlcnNvbiBhcHBvaW50bWVudCwgcGxlYXNlIHJlYWQgY2FyZWZ1bGx5IGVhY2ggb2YgdGhlIGZvcm1zIGJlbG93LiBQbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIGZpcnN0IHRocmVlIGZvcm1zIHRvIG91ciBmaXJzdCBhcHBvaW50bWVudC4gV2Ugd2lsbCByZXZpZXcgdGhlbSB0b2dldGhlci4gSWYgeW91IHdvdWxkIGxpa2UgZm9yIHlvdXIgaGVhbHRoIGluZm9ybWF0aW9uIHRvIGJlIHNoYXJlZCB3aXRoIGFub3RoZXIgaW5kaXZpZHVhbCBvciBncm91cCwgb3Igd291bGQgbGlrZSBtZSB0byBnYXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGVtLCBwbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIFJlbGVhc2Ugb2YgSW5mb3JtYXRpb24gZm9ybSB0byB5b3VyIG5leHQgYXBwb2ludG1lbnQuXG4gICAgPC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL0luZm9ybWVkIENvbnNlbnQucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+SW5mb3JtZWQgQ29uc2VudDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9JbnRha2UgRm9ybS5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5JbnRha2UgRm9ybTwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9SZWNlaXB0IG9mIEZvcm1zLnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlJlY2VpcHQgb2YgRm9ybXM8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvUHJpdmFjeSBQb2xpY3kucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvUk9JLnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlJlbGVhc2Ugb2YgSW5mb3JtYXRpb248L2E+XG4gICAgICA8L2xpPlxuXG4gICAgPC91bD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cblxuXG5jb25zdCBDYXJkMSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aXRsZSA9IHByb3BzLnRpdGxlID9cbiAgICAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC10aXRsZSc+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICkgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2NhcmQgY2FyZC0xJ1xuICAgID5cbiAgICAgIHt0aXRsZX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxuICAgICAgICB7cHJvcHMuYm9keX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuXG5cbmNvbnN0IFBhZ2VUaXRsZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlLXRpdGxlJyBpZD0ndG9wJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmNsYXNzIERyYXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoYW5kbGVQcmFjdGljZUNsaWNrLFxuICAgICAgaGFuZGxlU2VydmljZXNDbGljayxcbiAgICAgIGhhbmRsZUNsYXNzZXNDbGljayxcbiAgICAgIGhhbmRsZUNvbnRhY3RDbGljayxcbiAgICAgIGhhbmRsZURvY3VtZW50c0NsaWNrLFxuICAgICAgaGFuZGxlUmVzb3VyY2VzQ2xpY2tcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGFjdGl2ZSA9ICcnXG5cbiAgICBjb25zdCBtZW51U3R5bGUgPSB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBjdXJyZW50Q29sb3InLFxuICAgICAgcGFkZGluZzogMTBcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcmF3ZXInPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUHJhY3RpY2VDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdwcmFjdGljZScgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIFByYWN0aWNlIEFyZWFzXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlcnZpY2VzQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnc2VydmljZXMnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBTZXJ2aWNlc1xuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGFzc2VzQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY2xhc3NlcycgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIENsYXNzZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvY3VtZW50c0NsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2RvY3MnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBEb2N1bWVudHNcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ29udGFjdENsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NvbnRhY3QnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBDb250YWN0XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNvdXJjZXNDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdyZXNvdXJjZXMnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBSZXNvdXJjZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvLFxuICAgICAgdGV4dCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBjbGFzc2VzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uICR7Y2xhc3Nlc31gfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vQXBwJztcblxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IFxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=