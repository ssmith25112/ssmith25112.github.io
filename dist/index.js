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
var ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ../res/pineapple.jpg */ "./res/pineapple.jpg"));
var ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(/*! ../res/resources.jpg */ "./res/resources.jpg"));
var ___CSS_LOADER_URL___11___ = getUrl(__webpack_require__(/*! ../res/practiceareas.jpg */ "./res/practiceareas.jpg"));
var ___CSS_LOADER_URL___12___ = getUrl(__webpack_require__(/*! ../res/cornerplant.jpg */ "./res/cornerplant.jpg"));
var ___CSS_LOADER_URL___13___ = getUrl(__webpack_require__(/*! ../res/succulentmat.jpg */ "./res/succulentmat.jpg"));
// Module
exports.push([module.i, "* {\n  color: #3f4c4e;\n}\n\nh2 {\n  text-align: center;\n  font-size: 3rem;\n  font-family: 'Dancing Script', cursive;\n  margin: 0;\n}\n\nbody {\n  margin: 0;\n  position: relative;\n}\n\n.navMenu {\n  font-size: 18px;\n  position: relative;\n}\n\n.backdrop {\n  overflow: hidden;\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n  height: 100vh;\n}\n\n.hero {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.content {\n  margin-top: 50px;\n}\n\n.hero-content {\n  width: 100%;\n  display: flex;\n  height: 85vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.hero-content blockquote {\n  width: 60%;\n}\n\n.hero-content h1 {\n  /* color: #FFFFFF; */\n}\n\nblockquote footer {\n  text-align: end;\n  font-size: 22px;\n  /* color: #FFFFFF; */\n}\n\n.meet {\n  display: flex;\n  background-color: #EDEAE5;\n  padding: 30px;\n\n}\n\n\n\n\n.profile {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n}\n\n.profilePhoto {\n  width: 100%;\n  max-width: 450px;\n  min-width: 0;\n  min-height: 0;\n  object-fit: contain;\n  border-radius: 25px;\n}\n\n.bio {\n  flex: 1 0 auto;\n  margin: 20px;\n  max-width: 50%;\n}\n\n.bio .bioSubtitle {\n  text-align: center;\n}\n\n.bio p {\n  word-wrap: break-word;\n  /* padding: 0px 30px; */\n}\n\n@media screen and (max-width: 400px) {\n  .meet {\n    flex-direction: column;\n  }\n\n  .bio,\n  .profile {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n\n.practiceAreas {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n\n.practiceAreas .areas {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 30px;\n  align-items: space-between;\n  justify-content: center;\n}\n\n.practiceAreas .areas>.area {\n  display: flex;\n  flex: 1 0 290px;\n  max-width: 290px;\n  height: 320px;\n  background: #F7F7F7;\n  border-radius: 2px;\n  flex-direction: column;\n  margin: 0 30px 30px 0;\n  position: relative;\n}\n\n.areaImage {\n  width: 100%;\n  height: 200px;\n  background-color: lightgray;\n}\n\n.areaEatingConcerns {\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left bottom -50px;\n}\n\n.areaLifestyle {\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -65px;\n}\n\n.areaMedicalProblems {\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left;\n}\n\n.areaRelationships {\n  background: url(" + ___CSS_LOADER_URL___4___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n\n.areaStress {\n  background: url(" + ___CSS_LOADER_URL___5___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n\n.areaTransitions {\n  background: url(" + ___CSS_LOADER_URL___6___ + ") no-repeat;\n  background-size: cover;\n  background-position: left -20px;\n}\n\n.areaText {\n  font-size: 30px;\n  height: 120px;\n  max-height: 120px;\n}\n\n.areaText div {\n  margin-left: 42px;\n  margin-top: 12px;\n}\n\n.areaOverlay {\n  background: transparent;\n  border: 1px solid black;\n  border-radius: 2px;\n  position: absolute;\n  width: 230px;\n  height: 260px;\n  margin: 30px;\n}\n\n.services {\n  height: 400px;\n  background-color: #FBEEC1;\n  display: flex;\n}\n\n.servicesDescription {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n}\n\n.servicesImage {\n  width: 50%;\n  background: url(" + ___CSS_LOADER_URL___7___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media screen and (max-width: 400px) {\n  .servicesDescription {\n    width: 100%;\n  }\n\n  .servicesImage {\n    width: 0%;\n    display: none;\n  }\n\n  .hero-content blockquote h1 {\n    font-size: 1.75rem;\n  }\n\n  .hero-content blockquote footer {\n    font-size: 1.25rem;\n  }\n}\n\n.button {\n  display: inline-block;\n  border: none;\n  border-radius: 2px;\n  margin: 0;\n  text-decoration: none;\n  background: rgba(171, 208, 230, 1);\n  font-size: 18px;\n  cursor: pointer;\n  text-align: center;\n  transition: background 200ms ease-in-out, transform 100ms ease;\n  -webkit-appearance: none;\n  padding: 10px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.button:hover {\n  background: rgb(202, 226, 240);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.readMore {\n  display: flex;\n  justify-content: center;\n}\n\n.classes {\n  display: flex;\n  justify-content: center;\n  background: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n.contact {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n.contact form {\n  margin-top: 30px;\n}\n\n\n.group {\n  position: relative;\n  margin-bottom: 45px;\n}\n\ninput,\ntextarea {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #3f4c4e;\n  background: transparent;\n  color: #3f4c4e;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n/* LABEL ======================================= */\nlabel {\n  color: #3f4c4e;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n/* active state */\ninput:focus~label,\ninput:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\ntextarea {\n  resize: none;\n  padding: 0;\n}\n\ntextarea:focus~label,\ntextarea:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n/* TODO learn this */\n\n/* BOTTOM BARS ================================= */\n.bar {\n  position: relative;\n  display: block;\n  width: 300px;\n}\n\n.bar:before,\n.bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #3f4c4e;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar:before {\n  left: 50%;\n}\n\n.bar:after {\n  right: 50%;\n}\n\n/* active state */\ninput:focus~.bar:before,\ninput:focus~.bar:after {\n  width: 50%;\n}\n\n/* active state */\ntextarea:focus~.bar:before,\ntextarea:focus~.bar:after {\n  width: 50%;\n}\n\n/* HIGHLIGHTER ================================== */\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n/* active state */\ninput:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* active state */\ntextarea:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* ANIMATIONS ================ */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@-moz-keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #EDEAE5;\n  padding: 20px;\n}\n\n#address:before {\n  content: '\\007C';\n  padding: 0 15px\n}\n\n#address:after {\n  content: '\\007C';\n  padding: 0 15px;\n}\n\n@media screen and (max-width: 776px) {\n\n  .footer {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  #address:before {\n    content: none;\n    padding: 0\n  }\n  \n  #address:after {\n    content: none;\n    padding: 0;\n  }\n}\n\n\n.link:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  bottom: -2px;\n  left: 0;\n  background: #3f4c4e;\n  visibility: hidden;\n  border-radius: 5px;\n  transform: scaleX(0);\n  transition: .25s linear;\n}\n\n.link:hover:before,\n.link:focus:before {\n  visibility: visible;\n  transform: scaleX(1);\n}\n\n/* .navMenu:before {\n  bottom: -5px !important;\n} */\n\n.contact {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___8___ + ");\n}\n\n.moreClasses {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___9___ + ");\n}\n\n.moreResources {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___10___ + ");\n}\n\n.morePractice {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___11___ + ");\n}\n\n.moreServices {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___12___ + ");\n}\n\n.moreDocuments {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___13___ + ");\n\n}\n\n.signature {\n  font-family: 'Dancing Script', cursive;\n  font-size: 26px;\n}\n\n.navMenu:hover {\n  filter: brightness(1.2);\n}\n\n.page-title {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.page-title .title {\n  font-size: 4rem;\n  font-family: 'Dancing Script', cursive;\n}\n\n.card {\n  background: #F7F7F7;\n  border-radius: 2px;\n  margin: 50px 15%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  min-width: 100px;\n}\n\n.card-body {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  min-height: 100px;\n  padding: 20px;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  padding: 20px;\n  border-bottom: 1px solid #222222;\n  height: 100%;\n}\n\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.card-2 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n}\n\n.background {\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n\n.drawer-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.30);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  z-index: 20;\n}\n\n.drawer-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  width: 155px;\n  height: calc(100vh - 50px);\n  z-index: 100;\n  /* transition: all 0.3s ease-in-out; */\n  top: 50px;\n  position: fixed;\n}\n\n.drawer {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: #EDEAE5;\n  justify-content: flex-start;\n  box-shadow: 11px 10px 8px 0px rgba(0, 0, 0, 0.25), 10px 0 5px -5px rgba(0, 0, 0, 0);\n  transition: none;\n}\n\n.drawer+.dark {\n  background-color: #C0C3C6;\n}\n\n.drawer-button {\n  width: 100%;\n  height: 40px;\n}\n\n.header-nav-button {\n  height: 40px;\n  width: 100px;\n}\n\n.drawer-item {\n  display: flex;\n}\n\n.drawer-item>div {\n  flex: 1;\n  padding-bottom: 10px;\n}\n\n.header-hamburger {\n  cursor: pointer;\n}\n\n.header-hamburger:hover * {\n  color: #879092;\n}\n\n.hide {\n  display: none;\n}\n\n/* .moreServices h2 {\n  text-align: center;\n  font-size: 3rem;\n  margin: unset;\n  font-family: Roboto, sans-serif;\n} */", ""]);


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

/***/ "./res/cornerplant.jpg":
/*!*****************************!*\
  !*** ./res/cornerplant.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/cornerplant.jpg";

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

/***/ "./res/pineapple.jpg":
/*!***************************!*\
  !*** ./res/pineapple.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/pineapple.jpg";

/***/ }),

/***/ "./res/practiceareas.jpg":
/*!*******************************!*\
  !*** ./res/practiceareas.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/practiceareas.jpg";

/***/ }),

/***/ "./res/relationships.jpg":
/*!*******************************!*\
  !*** ./res/relationships.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/relationships.jpg";

/***/ }),

/***/ "./res/resources.jpg":
/*!***************************!*\
  !*** ./res/resources.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/resources.jpg";

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

/***/ "./res/succulentmat.jpg":
/*!******************************!*\
  !*** ./res/succulentmat.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/succulentmat.jpg";

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
      var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('backdrop', {
        'hero': n === 'home',
        'moreServices': n === 'services',
        'moreResources': n === 'resources',
        'moreDocuments': n === 'docs',
        'moreFees': n === 'fees',
        'moreClasses': n === 'classes',
        'morePractice': n === 'practice'
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: bodyStyle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderDrawer(), this.props.children));
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
var practiceAreas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Eating Concerns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Individuals noticing mindless, stress, emotional, or binge eating behaviors are welcome to consider both individual and class-based therapies with me. My approach to these concerns recognizes the complex role eating can play as a mechanism of coping for individual, family, and culturally systemic issues. We work together to acknowledge the fullness of this role as well as it's history, while honoring the desire that may exist to change. Through our work we can begin to develop new and healthier coping strategies as a natural outcome of increased awareness and self-compassion. I tailor my approach to the needs and style of the individual with whom I am working."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Lifestyle Changes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Most of us can relate to the running mental list of things we know we \"should\" be doing in order to be healthier. Maybe this is moving our bodies more, eating differently, improving sleep habits, or disconnecting from technology. Maybe it could be these things plus many more! While certainly excellent habits, looking at a list of personal wellness \"to dos\" can be overwhelming. In fact, we often avoid thinking about these healthy living items because it can feel hopeless. Unfortunately, often this means staying stuck in a rut of feeling unhealthy. Together, we can create a plan of small steps to work towards connecting behavior changes with your deepest values. Things that may have felt forced in the past can become things we are eager for. I will leverage my training in Lifestyle Medicine to help set manageable and research supported aims to produce real improvements in your health."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Phase of Life Issues/Life Transitions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Though the phrase, \"the only thing constant is change\" is one familiar to many of us, this often feels like little comfort during the turmoil of a significant transition. Changes in life circumstances can impact us on every level of our being and external life. Seeking therapy during these times can be both anchor and guide light. I will support you to process the loss of how things have been. When you are ready, we will set consciously developed goals for the phase of life that you find yourself in now. We will work together to identify healthy core components of who you are evolving to be, and center our attention to nurture this growth. There is no set timeline of how long an adjustment period lasts. I will help you to move into the next part of your life in healthful ways, as quickly as is reasonable, and in complete respect for your own pace."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Relationship Challenges"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Romantic, family, social, and occupational relationships can all be sources of significant pleasure and, consequently, significant pain. There are a multitude of reasons relationships can become troubled. Many of the roots of these reasons can be traced to communication clarity. While we cannot change other people, we can identify personal qualities in ourselves that we wish to change for the wellbeing of a current or future relationship. Working towards identifying these areas, creating mindful awareness around them, and making values-based changes can provide both personal benefits and improvements to the relationship. We can work together to identify and optimize these changes in a compassionate and respectful environment while prioritizing effective and clear communication as the cornerstone to improved relationships."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Health Difficulties"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There is no doubt that our physical wellbeing impacts our psychological wellbeing and vice versa. Whether you are looking for support in improving your management of a medical problem, handling the stress around it, or believe there may be lifestyle changes that will reverse the condition, I would be happy to support this aspect of your health. I am a trained health psychologist and work regularly with both chronic and acute medical conditions. I have personal and professional experience with the impacts physical health can have not only on oneself, but also on those around us. I believe support can make a substantive difference in managing a health concern as well as the emotional and social impacts of this. I will work with you to accept those realities that are unchanging, as well as recognize opportunities for positive growth."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Stress Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "At times we can find ourselves overwhelmed. The reasons for feeling overwhelmed might seem clear or may be hard to understand. It can feel like being trapped in parts of your own life. Talking through your stressors with a professional can allow space around painful parts of your experience that could ease the pressure. There may also be alternative perspectives that you aren\u2019t able to see from being right in the thick of the stress, that may be visible from an outside perspective. Therapy can provide support to process your experiences and free you to be more whole to engage with the rest of your life and the people in it."));
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
        style: _objectSpread({}, menuStyle, {
          borderTop: '1px solid currentColor'
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcz9lODVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3Jlcy9jb3JuZXJwbGFudC5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL2VhdGluZ2NvbmNlcm5zLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvaGVyby5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL2xpZmVzdHlsZTIuanBnIiwid2VicGFjazovLy8uL3Jlcy9tZWRpY2FscHJvYmxlbXMuanBnIiwid2VicGFjazovLy8uL3Jlcy9waW5lYXBwbGUuanBnIiwid2VicGFjazovLy8uL3Jlcy9wcmFjdGljZWFyZWFzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvcmVsYXRpb25zaGlwcy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3Jlc291cmNlcy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3NlcnZpY2VzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3VjY3VsZW50bWF0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvdHJhbnNpdGlvbnMuanBnIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInBhZ2UiLCJkb2NrIiwiY2xvc2VEcmF3ZXIiLCJjdXJyZW50Iiwic2hvd0RyYXdlciIsInN0YXRlIiwibmFtZSIsInNjcm9sbFRvIiwic2hvd0hhbWJ1cmdlciIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZW1wbGF0ZVN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmb250RmFtaWx5IiwiY29udGVudCIsImhhbmRsZU5hdiIsInRvZ2dsZURyYXdlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9keSIsImNsYXNzZXMiLCJjbiIsIm92ZXJsYXlDbGFzc2VzIiwib25EcmF3ZXJQcmFjdGljZUNsaWNrIiwib25OYXYiLCJvbkRyYXdlclNlcnZpY2VzQ2xpY2siLCJvbkRyYXdlckNvbnRhY3RDbGljayIsIm9uRHJhd2VyQ2xhc3Nlc0NsaWNrIiwib25EcmF3ZXJEb2N1bWVudHNDbGljayIsIm9uRHJhd2VyUmVzb3VyY2VzQ2xpY2siLCJoYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2siLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwidW5kZWZpbmVkIiwiYmVoYXZpb3IiLCJib2R5U3R5bGUiLCJtaW5IZWlnaHQiLCJuIiwicmVuZGVyRHJhd2VyIiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJpbmxpbmVTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsIm1lbnVTdHlsZSIsImN1cnNvciIsImFjdGl2ZSIsIm9wZW5EcmF3ZXIiLCJyZW5kZXJIYW1idXJnZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJGb290ZXIiLCJIb21lIiwibWVldFN0ZXBoIiwiUHJhY3RpY2VBcmVhcyIsInByYWN0aWNlQXJlYXMiLCJTZXJ2aWNlcyIsInNlcnZpY2VzIiwic2VydmljZXNSZWltYnVyc21lbnQiLCJzZXJ2aWNlc0luc3VyYWNlIiwiQ2xhc3NlcyIsIkNsaWVudERvY3VtZW50cyIsImNsaWVudERvY3VtZW50cyIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIkZlZXMiLCJmZWVzIiwidGV4dEFsaWduIiwiQ2FyZDEiLCJ0aXRsZSIsImJvZHkiLCJQYWdlVGl0bGUiLCJEcmF3ZXIiLCJoYW5kbGVQcmFjdGljZUNsaWNrIiwiaGFuZGxlU2VydmljZXNDbGljayIsImhhbmRsZUNsYXNzZXNDbGljayIsImhhbmRsZUNvbnRhY3RDbGljayIsImhhbmRsZURvY3VtZW50c0NsaWNrIiwiaGFuZGxlUmVzb3VyY2VzQ2xpY2siLCJmb250U2l6ZSIsImJvcmRlckJvdHRvbSIsInBhZGRpbmciLCJib3JkZXJUb3AiLCJCdXR0b24iLCJ0byIsInRleHQiLCJvbkNsaWNrIiwiUmVhY3RET00iLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBLGNBQWMsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRTVFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDbkJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQjs7QUFFaEI7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUssS0FBNkI7QUFDbEM7QUFDQTtBQUNBLEVBQUUsVUFBVSxJQUE0RTtBQUN4RjtBQUNBLEVBQUUsaUNBQXFCLEVBQUUsbUNBQUU7QUFDM0I7QUFDQSxHQUFHO0FBQUEsb0dBQUM7QUFDSixFQUFFLE1BQU0sRUFFTjtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ25ERCwyQkFBMkIsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDbkY7QUFDQSxhQUFhLG1CQUFPLENBQUMsMkdBQW1EO0FBQ3hFLHNDQUFzQyxtQkFBTyxDQUFDLHVDQUFpQjtBQUMvRCxzQ0FBc0MsbUJBQU8sQ0FBQywyREFBMkI7QUFDekUsc0NBQXNDLG1CQUFPLENBQUMsbURBQXVCO0FBQ3JFLHNDQUFzQyxtQkFBTyxDQUFDLDZEQUE0QjtBQUMxRSxzQ0FBc0MsbUJBQU8sQ0FBQyx5REFBMEI7QUFDeEUsc0NBQXNDLG1CQUFPLENBQUMsK0RBQTZCO0FBQzNFLHNDQUFzQyxtQkFBTyxDQUFDLHFEQUF3QjtBQUN0RSxzQ0FBc0MsbUJBQU8sQ0FBQywrQ0FBcUI7QUFDbkUsc0NBQXNDLG1CQUFPLENBQUMsMkRBQTJCO0FBQ3pFLHNDQUFzQyxtQkFBTyxDQUFDLGlEQUFzQjtBQUNwRSx1Q0FBdUMsbUJBQU8sQ0FBQyxpREFBc0I7QUFDckUsdUNBQXVDLG1CQUFPLENBQUMseURBQTBCO0FBQ3pFLHVDQUF1QyxtQkFBTyxDQUFDLHFEQUF3QjtBQUN2RSx1Q0FBdUMsbUJBQU8sQ0FBQyx1REFBeUI7QUFDeEU7QUFDQSxjQUFjLFFBQVMsTUFBTSxtQkFBbUIsR0FBRyxRQUFRLHVCQUF1QixvQkFBb0IsMkNBQTJDLGNBQWMsR0FBRyxVQUFVLGNBQWMsdUJBQXVCLEdBQUcsY0FBYyxvQkFBb0IsdUJBQXVCLEdBQUcsZUFBZSxxQkFBcUIsb0JBQW9CLGdCQUFnQixnQkFBZ0Isa0JBQWtCLEdBQUcsV0FBVyw0REFBNEQsaUNBQWlDLDJCQUEyQixHQUFHLGNBQWMscUJBQXFCLEdBQUcsbUJBQW1CLGdCQUFnQixrQkFBa0IsaUJBQWlCLDRCQUE0Qix3QkFBd0IsR0FBRyw4QkFBOEIsZUFBZSxHQUFHLHNCQUFzQixzQkFBc0IsTUFBTSx1QkFBdUIsb0JBQW9CLG9CQUFvQixzQkFBc0IsTUFBTSxXQUFXLGtCQUFrQiw4QkFBOEIsa0JBQWtCLEtBQUssb0JBQW9CLGtCQUFrQixlQUFlLDRCQUE0Qix3QkFBd0IsR0FBRyxtQkFBbUIsZ0JBQWdCLHFCQUFxQixpQkFBaUIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxVQUFVLG1CQUFtQixpQkFBaUIsbUJBQW1CLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLFlBQVksMEJBQTBCLHlCQUF5QixNQUFNLDBDQUEwQyxXQUFXLDZCQUE2QixLQUFLLHlCQUF5QixrQkFBa0Isc0JBQXNCLEtBQUssR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQiw4QkFBOEIsa0JBQWtCLG9EQUFvRCxHQUFHLCtCQUErQixrQkFBa0Isb0JBQW9CLGtCQUFrQiwrQkFBK0IsNEJBQTRCLEdBQUcsaUNBQWlDLGtCQUFrQixvQkFBb0IscUJBQXFCLGtCQUFrQix3QkFBd0IsdUJBQXVCLDJCQUEyQiwwQkFBMEIsdUJBQXVCLEdBQUcsZ0JBQWdCLGdCQUFnQixrQkFBa0IsZ0NBQWdDLEdBQUcseUJBQXlCLGdFQUFnRSwrQkFBK0IsMkNBQTJDLEdBQUcsb0JBQW9CLGdFQUFnRSwyQkFBMkIsMkNBQTJDLEdBQUcsMEJBQTBCLGdFQUFnRSwrQkFBK0IsOEJBQThCLEdBQUcsd0JBQXdCLGdFQUFnRSwyQkFBMkIsMkNBQTJDLEdBQUcsaUJBQWlCLGdFQUFnRSwyQkFBMkIsMkNBQTJDLEdBQUcsc0JBQXNCLGdFQUFnRSwyQkFBMkIsb0NBQW9DLEdBQUcsZUFBZSxvQkFBb0Isa0JBQWtCLHNCQUFzQixHQUFHLG1CQUFtQixzQkFBc0IscUJBQXFCLEdBQUcsa0JBQWtCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLHVCQUF1QixpQkFBaUIsa0JBQWtCLGlCQUFpQixHQUFHLGVBQWUsa0JBQWtCLDhCQUE4QixrQkFBa0IsR0FBRywwQkFBMEIsZUFBZSxrQkFBa0IsMkJBQTJCLGtCQUFrQixHQUFHLG9CQUFvQixlQUFlLHNEQUFzRCwyQkFBMkIsaUNBQWlDLEdBQUcsMENBQTBDLDBCQUEwQixrQkFBa0IsS0FBSyxzQkFBc0IsZ0JBQWdCLG9CQUFvQixLQUFLLG1DQUFtQyx5QkFBeUIsS0FBSyx1Q0FBdUMseUJBQXlCLEtBQUssR0FBRyxhQUFhLDBCQUEwQixpQkFBaUIsdUJBQXVCLGNBQWMsMEJBQTBCLHVDQUF1QyxvQkFBb0Isb0JBQW9CLHVCQUF1QixtRUFBbUUsNkJBQTZCLGtCQUFrQiw2RUFBNkUsR0FBRyxtQkFBbUIsbUNBQW1DLCtFQUErRSxHQUFHLGVBQWUsa0JBQWtCLDRCQUE0QixHQUFHLGNBQWMsa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLG9EQUFvRCxHQUFHLGdCQUFnQiw4QkFBOEIsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLHNCQUFzQix5QkFBeUIsR0FBRyxtQkFBbUIscUJBQXFCLEdBQUcsY0FBYyx1QkFBdUIsd0JBQXdCLEdBQUcsc0JBQXNCLG9CQUFvQixnQ0FBZ0MsbUJBQW1CLGlCQUFpQixpQkFBaUIscUNBQXFDLDRCQUE0QixtQkFBbUIsR0FBRyxpQkFBaUIsa0JBQWtCLEdBQUcsb0JBQW9CLGtCQUFrQixHQUFHLGdFQUFnRSxtQkFBbUIsb0JBQW9CLHdCQUF3Qix1QkFBdUIseUJBQXlCLGNBQWMsY0FBYyw4QkFBOEIsbUNBQW1DLHNDQUFzQyxHQUFHLCtEQUErRCxlQUFlLG9CQUFvQixtQkFBbUIsR0FBRyxjQUFjLGlCQUFpQixlQUFlLEdBQUcsaURBQWlELGVBQWUsb0JBQW9CLG1CQUFtQixHQUFHLHdGQUF3Rix1QkFBdUIsbUJBQW1CLGlCQUFpQixHQUFHLDhCQUE4QixnQkFBZ0IsZ0JBQWdCLGFBQWEsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsOEJBQThCLG1DQUFtQyxzQ0FBc0MsR0FBRyxpQkFBaUIsY0FBYyxHQUFHLGdCQUFnQixlQUFlLEdBQUcsMEVBQTBFLGVBQWUsR0FBRyxnRkFBZ0YsZUFBZSxHQUFHLHNFQUFzRSx1QkFBdUIsZ0JBQWdCLGlCQUFpQixhQUFhLFlBQVkseUJBQXlCLGlCQUFpQixHQUFHLGdEQUFnRCxrREFBa0QsK0NBQStDLDBDQUEwQyxHQUFHLG1EQUFtRCxrREFBa0QsK0NBQStDLDBDQUEwQyxHQUFHLDRFQUE0RSxVQUFVLDBCQUEwQixLQUFLLFVBQVUsZUFBZSw4QkFBOEIsS0FBSyxHQUFHLHNDQUFzQyxVQUFVLDBCQUEwQixLQUFLLFVBQVUsZUFBZSw4QkFBOEIsS0FBSyxHQUFHLGlDQUFpQyxVQUFVLDBCQUEwQixLQUFLLFVBQVUsZUFBZSw4QkFBOEIsS0FBSyxHQUFHLGVBQWUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsOEJBQThCLGtCQUFrQixHQUFHLHFCQUFxQixzQkFBc0Isc0JBQXNCLG9CQUFvQixzQkFBc0Isb0JBQW9CLEdBQUcsMENBQTBDLGVBQWUsNkJBQTZCLHlCQUF5QixLQUFLLHVCQUF1QixvQkFBb0IscUJBQXFCLHdCQUF3QixvQkFBb0IsaUJBQWlCLEtBQUssR0FBRyxvQkFBb0Isa0JBQWtCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixZQUFZLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHlCQUF5Qiw0QkFBNEIsR0FBRyw2Q0FBNkMsd0JBQXdCLHlCQUF5QixHQUFHLHdCQUF3Qiw0QkFBNEIsR0FBRyxpQkFBaUIsK0VBQStFLEdBQUcsa0JBQWtCLCtFQUErRSxHQUFHLG9CQUFvQixnRkFBZ0YsR0FBRyxtQkFBbUIsZ0ZBQWdGLEdBQUcsbUJBQW1CLGdGQUFnRixHQUFHLG9CQUFvQixnRkFBZ0YsS0FBSyxnQkFBZ0IsMkNBQTJDLG9CQUFvQixHQUFHLG9CQUFvQiw0QkFBNEIsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHNCQUFzQixHQUFHLHdCQUF3QixvQkFBb0IsMkNBQTJDLEdBQUcsV0FBVyx3QkFBd0IsdUJBQXVCLHFCQUFxQixrQkFBa0IsMkJBQTJCLHNCQUFzQixxQkFBcUIsR0FBRyxnQkFBZ0Isb0JBQW9CLHdCQUF3QixzQkFBc0Isa0JBQWtCLEdBQUcsaUJBQWlCLGtCQUFrQix3QkFBd0Isb0JBQW9CLGtCQUFrQixxQ0FBcUMsaUJBQWlCLEdBQUcsYUFBYSw2RUFBNkUsR0FBRyxhQUFhLDZFQUE2RSxHQUFHLGFBQWEsK0VBQStFLEdBQUcsYUFBYSxpRkFBaUYsR0FBRyxhQUFhLGlGQUFpRixHQUFHLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsR0FBRyx1QkFBdUIsb0JBQW9CLFlBQVksV0FBVyxpQkFBaUIsZ0JBQWdCLDBDQUEwQyxrQkFBa0Isd0JBQXdCLGdDQUFnQyxnQkFBZ0IsR0FBRyx1QkFBdUIsdUJBQXVCLFlBQVksV0FBVyxrQkFBa0IsaUJBQWlCLCtCQUErQixpQkFBaUIsd0NBQXdDLGlCQUFpQixvQkFBb0IsR0FBRyxhQUFhLFlBQVksa0JBQWtCLDJCQUEyQiw4QkFBOEIsZ0NBQWdDLHdGQUF3RixxQkFBcUIsR0FBRyxtQkFBbUIsOEJBQThCLEdBQUcsb0JBQW9CLGdCQUFnQixpQkFBaUIsR0FBRyx3QkFBd0IsaUJBQWlCLGlCQUFpQixHQUFHLGtCQUFrQixrQkFBa0IsR0FBRyxzQkFBc0IsWUFBWSx5QkFBeUIsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLFdBQVcsa0JBQWtCLEdBQUcseUJBQXlCLHVCQUF1QixvQkFBb0Isa0JBQWtCLG9DQUFvQyxHQUFHOzs7Ozs7Ozs7Ozs7O0FDbEJyaVg7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtB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d0NBQXBCLENBQWhCLEVBQTBDdUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgZ2V0VXJsID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvaGVyby5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL2VhdGluZ2NvbmNlcm5zLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvbGlmZXN0eWxlMi5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL21lZGljYWxwcm9ibGVtcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3JlbGF0aW9uc2hpcHMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zdHJlc3NtYW5hZ2VtZW50LmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX182X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvdHJhbnNpdGlvbnMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zZXJ2aWNlcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX185X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvcGluZWFwcGxlLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3Jlc291cmNlcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMTFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9wcmFjdGljZWFyZWFzLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xMl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL2Nvcm5lcnBsYW50LmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xM19fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3N1Y2N1bGVudG1hdC5qcGdcIikpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGNvbG9yOiAjM2Y0YzRlO1xcbn1cXG5cXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXZNZW51IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJhY2tkcm9wIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVyby1jb250ZW50IGJsb2NrcXVvdGUge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmhlcm8tY29udGVudCBoMSB7XFxuICAvKiBjb2xvcjogI0ZGRkZGRjsgKi9cXG59XFxuXFxuYmxvY2txdW90ZSBmb290ZXIge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgLyogY29sb3I6ICNGRkZGRkY7ICovXFxufVxcblxcbi5tZWV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFQUU1O1xcbiAgcGFkZGluZzogMzBweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLnByb2ZpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA1MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9maWxlUGhvdG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4uYmlvIHtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiA1MCU7XFxufVxcblxcbi5iaW8gLmJpb1N1YnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJpbyBwIHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIC8qIHBhZGRpbmc6IDBweCAzMHB4OyAqL1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLm1lZXQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJpbyxcXG4gIC5wcm9maWxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnByYWN0aWNlQXJlYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbn1cXG5cXG5cXG5cXG4ucHJhY3RpY2VBcmVhcyAuYXJlYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJhY3RpY2VBcmVhcyAuYXJlYXM+LmFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCAyOTBweDtcXG4gIG1heC13aWR0aDogMjkwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMzBweCAzMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hcmVhSW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uYXJlYUVhdGluZ0NvbmNlcm5zIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTQwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC01MHB4O1xcbn1cXG5cXG4uYXJlYUxpZmVzdHlsZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC02NXB4O1xcbn1cXG5cXG4uYXJlYU1lZGljYWxQcm9ibGVtcyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDE0MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbn1cXG5cXG4uYXJlYVJlbGF0aW9uc2hpcHMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtODBweDtcXG59XFxuXFxuLmFyZWFTdHJlc3Mge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX181X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtODBweDtcXG59XFxuXFxuLmFyZWFUcmFuc2l0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzZfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgLTIwcHg7XFxufVxcblxcbi5hcmVhVGV4dCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgbWF4LWhlaWdodDogMTIwcHg7XFxufVxcblxcbi5hcmVhVGV4dCBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4uYXJlYU92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbi5zZXJ2aWNlcyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUVDMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZXJ2aWNlc0Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5zZXJ2aWNlc0ltYWdlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5zZXJ2aWNlc0Rlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2VydmljZXNJbWFnZSB7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcblxcbi5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzEsIDIwOCwgMjMwLCAxKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxMDBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMjYsIDI0MCk7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLnJlYWRNb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNsYXNzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXG59XFxuXFxuXFxuLmNvbnRhY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmNvbnRhY3QgZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG5cXG4uZ3JvdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNmNGM0ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMzZjRjNGU7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIExBQkVMID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmxhYmVsIHtcXG4gIGNvbG9yOiAjM2Y0YzRlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxuaW5wdXQ6Zm9jdXN+bGFiZWwsXFxuaW5wdXQ6dmFsaWR+bGFiZWwge1xcbiAgdG9wOiAtMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1c35sYWJlbCxcXG50ZXh0YXJlYTp2YWxpZH5sYWJlbCB7XFxuICB0b3A6IC0yMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi8qIFRPRE8gbGVhcm4gdGhpcyAqL1xcblxcbi8qIEJPVFRPTSBCQVJTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5iYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5iYXI6YmVmb3JlLFxcbi5iYXI6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiAwO1xcbiAgYm90dG9tOiAxcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG59XFxuXFxuLmJhcjpiZWZvcmUge1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4uYmFyOmFmdGVyIHtcXG4gIHJpZ2h0OiA1MCU7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbmlucHV0OmZvY3Vzfi5iYXI6YmVmb3JlLFxcbmlucHV0OmZvY3Vzfi5iYXI6YWZ0ZXIge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxudGV4dGFyZWE6Zm9jdXN+LmJhcjpiZWZvcmUsXFxudGV4dGFyZWE6Zm9jdXN+LmJhcjphZnRlciB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBISUdITElHSFRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhpZ2hsaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHRvcDogMjUlO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG5pbnB1dDpmb2N1c34uaGlnaGxpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbnRleHRhcmVhOmZvY3Vzfi5oaWdobGlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgLW1vei1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG59XFxuXFxuLyogQU5JTUFUSU9OUyA9PT09PT09PT09PT09PT09ICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6ICMzZjRjNGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuQC1tb3ota2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6ICMzZjRjNGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVBRTU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jYWRkcmVzczpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFwwMDdDJztcXG4gIHBhZGRpbmc6IDAgMTVweFxcbn1cXG5cXG4jYWRkcmVzczphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXDAwN0MnO1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzZweCkge1xcblxcbiAgLmZvb3RlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNhZGRyZXNzOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDBcXG4gIH1cXG4gIFxcbiAgI2FkZHJlc3M6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cXG5cXG4ubGluazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgYm90dG9tOiAtMnB4O1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICMzZjRjNGU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zaXRpb246IC4yNXMgbGluZWFyO1xcbn1cXG5cXG4ubGluazpob3ZlcjpiZWZvcmUsXFxuLmxpbms6Zm9jdXM6YmVmb3JlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLyogLm5hdk1lbnU6YmVmb3JlIHtcXG4gIGJvdHRvbTogLTVweCAhaW1wb3J0YW50O1xcbn0gKi9cXG5cXG4uY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX184X19fICsgXCIpO1xcbn1cXG5cXG4ubW9yZUNsYXNzZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyArIFwiKTtcXG59XFxuXFxuLm1vcmVSZXNvdXJjZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTBfX18gKyBcIik7XFxufVxcblxcbi5tb3JlUHJhY3RpY2Uge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTFfX18gKyBcIik7XFxufVxcblxcbi5tb3JlU2VydmljZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTJfX18gKyBcIik7XFxufVxcblxcbi5tb3JlRG9jdW1lbnRzIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEzX19fICsgXCIpO1xcblxcbn1cXG5cXG4uc2lnbmF0dXJlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4ubmF2TWVudTpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLnBhZ2UtdGl0bGUge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4ucGFnZS10aXRsZSAudGl0bGUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW46IDUwcHggMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxufVxcblxcbi5jYXJkLWJvZHkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjIyMjI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkLTEge1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbn1cXG5cXG4uY2FyZC0yIHtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmNhcmQtMyB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmNhcmQtNCB7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbn1cXG5cXG4uY2FyZC01IHtcXG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5kcmF3ZXItb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmRyYXdlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTU1cHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0OyAqL1xcbiAgdG9wOiA1MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uZHJhd2VyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVBRTU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3gtc2hhZG93OiAxMXB4IDEwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAxMHB4IDAgNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcblxcbi5kcmF3ZXIrLmRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MwQzNDNjtcXG59XFxuXFxuLmRyYXdlci1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5oZWFkZXItbmF2LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5kcmF3ZXItaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJhd2VyLWl0ZW0+ZGl2IHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmhlYWRlci1oYW1idXJnZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlcjpob3ZlciAqIHtcXG4gIGNvbG9yOiAjODc5MDkyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiAubW9yZVNlcnZpY2VzIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbjogdW5zZXQ7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbn0gKi9cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2Nvcm5lcnBsYW50LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9lYXRpbmdjb25jZXJucy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvaGVyby5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvbGlmZXN0eWxlMi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9waW5lYXBwbGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3ByYWN0aWNlYXJlYXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3JlbGF0aW9uc2hpcHMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3Jlc291cmNlcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvc2VydmljZXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3N0cmVzc21hbmFnZW1lbnQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9zdWNjdWxlbnRtYXQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3RyYW5zaXRpb25zLmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuLy8gVE9ETzogYWNjZXNzaWJpbGl0eVxuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IHtcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgICBzY3JvbGxUbzogbnVsbFxuICAgICAgfSxcbiAgICAgIHNob3dIYW1idXJnZXI6IGZhbHNlLFxuICAgICAgc2hvd0RyYXdlcjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBpZiAod2lkdGggPiA4MDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RHJhd2VyOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dEcmF3ZXI6IGZhbHNlLFxuICAgICAgICBzaG93SGFtYnVyZ2VyOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2hvd0hhbWJ1cmdlclxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGlmICh3aWR0aCA+IDgwMCAmJiBzaG93SGFtYnVyZ2VyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgIHNob3dIYW1idXJnZXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDgwMCAmJiAhc2hvd0hhbWJ1cmdlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93SGFtYnVyZ2VyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTmF2ID0gKHRhcmdldCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiB0YXJnZXQgfSk7XG5cbiAgICBpZiAodGFyZ2V0LmRvY2spIHtcbiAgICAgIHRoaXMuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoY3VycmVudCkgPT4gKHtcbiAgICAgIHNob3dEcmF3ZXI6ICFjdXJyZW50LnNob3dEcmF3ZXJcbiAgICB9KSk7XG4gIH1cblxuICBjbG9zZURyYXdlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEcmF3ZXI6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZVN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBmb250RmFtaWx5OiAnUm9ib3RvLCBzYW5zLXNlcmlmJ1xuICAgIH07XG5cbiAgICBjb25zdCB7XG4gICAgICBwYWdlXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICBuYW1lXG4gICAgfSA9IHBhZ2U7XG5cbiAgICBsZXQgY29udGVudCA9IDxkaXYgLz47XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICBjb250ZW50ID0gPEhvbWUgb25OYXY9e3RoaXMuaGFuZGxlTmF2fSAvPlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ByYWN0aWNlJzpcbiAgICAgICAgY29udGVudCA9IDxQcmFjdGljZUFyZWFzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlcnZpY2VzJzpcbiAgICAgICAgY29udGVudCA9IDxTZXJ2aWNlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgY29udGVudCA9IDxDbGFzc2VzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Jlc291cmNlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8UmVzb3VyY2VzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RvY3MnOlxuICAgICAgICBjb250ZW50ID0gPENsaWVudERvY3VtZW50cyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmZWVzJzpcbiAgICAgICAgY29udGVudCA9IDxGZWVzIC8+O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17dGVtcGxhdGVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIHNob3dIYW1idXJnZXI9e3RoaXMuc3RhdGUuc2hvd0hhbWJ1cmdlcn1cbiAgICAgICAgICBhY3RpdmU9e25hbWV9XG4gICAgICAgICAgb25OYXY9e3RoaXMuaGFuZGxlTmF2fVxuICAgICAgICAgIG9wZW5EcmF3ZXI9e3RoaXMudG9nZ2xlRHJhd2VyfVxuICAgICAgICAvPlxuICAgICAgICA8Qm9keVxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgY2xvc2VEcmF3ZXI9e3RoaXMuY2xvc2VEcmF3ZXJ9XG4gICAgICAgICAgc2hvd0RyYXdlcj17dGhpcy5zdGF0ZS5zaG93RHJhd2VyfVxuICAgICAgICAgIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L0JvZHk+XG4gICAgICAgIDxGb290ZXJcbiAgICAgICAgICBvbk5hdj17dGhpcy5oYW5kbGVOYXZ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYWdlLnNjcm9sbFRvKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AnKS5zY3JvbGxJbnRvVmlldygpLCAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhZ2Uuc2Nyb2xsVG8gIT09IG51bGwgfHwgcGFnZS5zY3JvbGxUbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHBhZ2Uuc2Nyb2xsVG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZS5zY3JvbGxUbykuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcGFnZS5zY3JvbGxUbyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFnZS5zY3JvbGxUbyksIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURyYXdlck92ZXJsYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNsb3NlRHJhd2VyKClcbiAgfVxuXG4gIHJlbmRlckRyYXdlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dEcmF3ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY24oJ2RyYXdlci1jb250YWluZXInLCB7XG4gICAgICAnaGlkZSc6ICFzaG93RHJhd2VyXG4gICAgfSk7XG5cbiAgICBjb25zdCBvdmVybGF5Q2xhc3NlcyA9IGNuKCdkcmF3ZXItb3ZlcmxheScsIHtcbiAgICAgICdoaWRlJzogIXNob3dEcmF3ZXJcbiAgICB9KTtcblxuXG4gICAgY29uc3Qgb25EcmF3ZXJQcmFjdGljZUNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyU2VydmljZXNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnc2VydmljZXMnLCBzY3JvbGxUbzogMCwgZG9jazogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyYXdlckNvbnRhY3RDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAnY29udGFjdCcsIGRvY2s6IHRydWUgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyYXdlckNsYXNzZXNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnY2xhc3NlcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyRG9jdW1lbnRzQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ2RvY3MnLCBzY3JvbGxUbzogMCwgZG9jazogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyUmVzb3VyY2VzQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ3Jlc291cmNlcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgIGhhbmRsZUNvbnRhY3RDbGljaz17b25EcmF3ZXJDb250YWN0Q2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVTZXJ2aWNlc0NsaWNrPXtvbkRyYXdlclNlcnZpY2VzQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVQcmFjdGljZUNsaWNrPXtvbkRyYXdlclByYWN0aWNlQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVDbGFzc2VzQ2xpY2s9e29uRHJhd2VyQ2xhc3Nlc0NsaWNrfVxuICAgICAgICAgICAgaGFuZGxlRG9jdW1lbnRzQ2xpY2s9e29uRHJhd2VyRG9jdW1lbnRzQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVSZXNvdXJjZXNDbGljaz17b25EcmF3ZXJSZXNvdXJjZXNDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc2VzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlck92ZXJsYXlDbGlja30+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGJvZHlTdHlsZSA9IHtcbiAgICAgIG1pbkhlaWdodDogYGNhbGMoMTAwdmggLSA2MHB4KWBcbiAgICB9O1xuXG4gICAgY29uc3QgbiA9IHBhZ2UubmFtZTtcbiAgICBjb25zdCBjbGFzc2VzID0gY24oJ2JhY2tkcm9wJywge1xuICAgICAgJ2hlcm8nOiBuID09PSAnaG9tZScsXG4gICAgICAnbW9yZVNlcnZpY2VzJzogbiA9PT0gJ3NlcnZpY2VzJyxcbiAgICAgICdtb3JlUmVzb3VyY2VzJzogbiA9PT0gJ3Jlc291cmNlcycsXG4gICAgICAnbW9yZURvY3VtZW50cyc6IG4gPT09ICdkb2NzJyxcbiAgICAgICdtb3JlRmVlcyc6IG4gPT09ICdmZWVzJyxcbiAgICAgICdtb3JlQ2xhc3Nlcyc6IG4gPT09ICdjbGFzc2VzJyxcbiAgICAgICdtb3JlUHJhY3RpY2UnOiBuID09PSAncHJhY3RpY2UnXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17Ym9keVN0eWxlfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gLz5cbiAgICAgICAgPGRpdlxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyRHJhd2VyKCl9XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaW5saW5lU3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0VERUFFNScsXG4gICAgYm94U2hhZG93OiAnMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpJyxcbiAgICB6SW5kZXg6IDI0LFxuICB9O1xuXG4gIGNvbnN0IG1lbnVTdHlsZSA9IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBvbk5hdixcbiAgICBzaG93SGFtYnVyZ2VyLFxuICAgIG9wZW5EcmF3ZXJcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHJlbmRlckhhbWJ1cmdlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2hlYWRlci1uYXYgaGVhZGVyLWhhbWJ1cmdlcidcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgb25DbGljaz17b3BlbkRyYXdlcn1cbiAgICAgID5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2hhbWJ1cmdlcicgd2lkdGg9XCIzNFwiIGhlaWdodD1cIjM0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XCIgLz48L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzaG93SGFtYnVyZ2VyKSB7XG4gICAgaW5saW5lU3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e2lubGluZVN0eWxlfVxuICAgICAgPlxuICAgICAgICB7cmVuZGVySGFtYnVyZ2VyKCl9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICd0b3AnIH0pfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnc2lnbmF0dXJlJywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdob21lJyB9KX1cbiAgICAgICAgICBzdHlsZT17eyAuLi5tZW51U3R5bGUsIG1hcmdpblJpZ2h0OiAyMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgU3RlcGhhbmllIFNtaXRoLCBQc3kuRC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17aW5saW5lU3R5bGV9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICd0b3AnIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ3NpZ25hdHVyZScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnaG9tZScgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFN0ZXBoYW5pZSBTbWl0aCwgUHN5LkQuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncHJhY3RpY2UnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAncHJhY3RpY2UnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBQcmFjdGljZSBBcmVhc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3NlcnZpY2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3NlcnZpY2VzJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgU2VydmljZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdjbGFzc2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NsYXNzZXMnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBDbGFzc2VzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnZG9jcycsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdkb2NzJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgRG9jdW1lbnRzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAnY29udGFjdCcgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NvbnRhY3QnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBDb250YWN0XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncmVzb3VyY2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3Jlc291cmNlcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFJlc291cmNlc1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uTmF2XG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2Zvb3RlcidcbiAgICA+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgU3RlcGhhbmllIFNtaXRoLCBQc3kuRC5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPSdhZGRyZXNzJz5cbiAgICAgICAgODAxIEFsaGFtYnJhIEJsdmQsIFN1aXRlIDJCIFNhY3JhbWVudG8sIENBIDk1ODE2XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgKDkxNikgMzk5LTM2MTVcbiAgICAgIDwvc3Bhbj5cbiAgICA8L2RpdiA+XG4gICk7XG59O1xuXG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uTmF2XG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tkcm9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8nIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50JyBpZD0ndG9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8tY29udGVudCc+XG4gICAgICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgIFwiQW5kIHRoZSBkYXkgY2FtZSB3aGVuIHRoZSByaXNrIHRvIHJlbWFpbiB0aWdodCBhcyBhIGJ1ZCB3YXMgbW9yZSBwYWluZnVsIHRoYW4gdGhlIHJpc2sgaXQgdG9vayB0byBibG9zc29tLlwiXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8Zm9vdGVyPi0gQW5haXMgTmluXG4gICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWV0IGNhcmQtMicgaWQ9J21lZXQnID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZSc+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncHJvZmlsZVBob3RvIGNhcmQtMScgc3JjPSdyZXMvcHJvZmlsZS5qcGcnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jpbyc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdiaW9UaXRsZSc+XG4gICAgICAgICAgICAgIE1lZXQgRHIuIFN0ZXBoYW5pZSBTbWl0aFxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nYmlvU3VidGl0bGUnPlxuICAgICAgICAgICAgICBDbGluaWNhbCBQc3ljaG9sb2dpc3RcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIHttZWV0U3RlcGh9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJhY3RpY2VBcmVhcycgaWQ9J3ByYWN0aWNlJz5cbiAgICAgICAgICA8aDI+UHJhY3RpY2UgQXJlYXM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhcyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYUVhdGluZ0NvbmNlcm5zJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBFYXRpbmc8YnIgLz4gQ29uY2VybnNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYUltYWdlIGFyZWFMaWZlc3R5bGUnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIExpZmVzdHlsZTxiciAvPiBDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhVHJhbnNpdGlvbnMnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIExpZmU8YnIgLz4gVHJhbnNpdGlvbnNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYUltYWdlIGFyZWFSZWxhdGlvbnNoaXBzJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBSZWxhdGlvbnNoaXA8YnIgLz4gQ2hhbGxlbmdlc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYU1lZGljYWxQcm9ibGVtcycgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgSGVhbHRoPGJyIC8+IERpZmZpY3VsdGllc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYVN0cmVzcycgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgU3RyZXNzPGJyIC8+IE1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFkTW9yZSc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncmVhZE1vcmUgYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAwIH0pfT5cbiAgICAgICAgICAgICAgUkVBRCBNT1JFXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0IGNhcmQtMicgaWQ9J2NvbnRhY3QnPlxuICAgICAgICAgIDxoMj5DaGFuZ2UgYmVnaW5zIHRvZGF5PC9oMj5cbiAgICAgICAgICA8aDM+UmVxdWVzdCBhIGNvbnN1bHRhdGlvbjwvaDM+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwaG9uZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsPlBob25lPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3JlYWRNb3JlJz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24nPlNFTkQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLyoqIEhvbWUgKi9cblxuXG4vKiogUGFnZXMgKi9cblxuY29uc3QgUHJhY3RpY2VBcmVhcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPSdQcmFjdGljZSBBcmVhcydcbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17cHJhY3RpY2VBcmVhc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPSdTZXJ2aWNlcydcbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17c2VydmljZXN9XG4gICAgICAvPlxuICAgICAgPENhcmQxIFxuICAgICAgICBib2R5PXtzZXJ2aWNlc1JlaW1idXJzbWVudH1cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17c2VydmljZXNJbnN1cmFjZX1cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuY29uc3QgQ2xhc3NlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnQ2xhc3Nlcyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIGJvZHk9e2NsYXNzZXN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgKTtcbn1cblxuY29uc3QgQ2xpZW50RG9jdW1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9eydDbGllbnQgRG9jdW1lbnRzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17Y2xpZW50RG9jdW1lbnRzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5jb25zdCBSZXNvdXJjZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J1Jlc291cmNlcyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIGJvZHk9e3Jlc291cmNlc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApO1xufVxuXG5jb25zdCBGZWVzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9eydGZWVzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17ZmVlc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApO1xufVxuXG5cblxuLyoqIFBhZ2VzIGNvbnRlbnRzICovXG5cbmNvbnN0IG1lZXRTdGVwaCA9IChcbiAgPHA+XG4gICAgV2VsY29tZSBhbmQgVGhhbmsgeW91IGZvciB2aXNpdGluZyEgVGhpcyBpcyBhIHBsYWNlIHRvIGV4cGxvcmUgdGhlIHBvc3NpYmlsaXR5IG9mIGNoYW5nZSBmb3IgYSBiZXR0ZXIgdG9tb3Jyb3cuIFRoZXJlIGlzIG5vIOKAnG9uZSBzaXplIGZpdHMgYWxs4oCdIGFwcHJvYWNoIHRvIG91ciB0aW1lIHRvZ2V0aGVyIGFuZCBJIHdvcmsgY29sbGFib3JhdGl2ZWx5IHdpdGggbXkgY2xpZW50cyB0byBjcmVhdGUgYW4gZW52aXJvbm1lbnQgb2YgcmVzcGVjdCBhbmQgY29tcGFzc2lvbiB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIHJlbmV3IHRoZWlyIGxpdmVzLiBUaGVyYXB5IGhhcyB0aGUgcG93ZXIgdG8gYm90aCBzb290aGUgYW5kIHRyYW5zZm9ybSBhbmQgSSB1c2UgdGVjaG5pcXVlcyBvZiBvbmUtb24tb25lIHRoZXJhcHkgYW5kIGNsYXNzZXMgdG8gc3BhcmsgbWVhbmluZ2Z1bCBhbmQgbGFzdGluZyBjaGFuZ2UuIEkgYW0ga25vd24gYnkgbXkgY2xpZW50cyBhcyBiZWluZyBkb3duIHRvIGVhcnRoLCBnZW51aW5lLCBhbmQgcmVsYXRhYmxlLiBJIGxvb2sgZm9yd2FyZCB0byBwYXJ0bmVyaW5nIHRvZ2V0aGVyIHRvIGJ1aWxkIHlvdXIgaGVhbHRoaWVyIHRvbW9ycm93LlxuICA8L3A+XG4pO1xuXG5jb25zdCBwcmFjdGljZUFyZWFzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGgzPkVhdGluZyBDb25jZXJuczwvaDM+XG4gICAgPHA+XG4gICAgSW5kaXZpZHVhbHMgbm90aWNpbmcgbWluZGxlc3MsIHN0cmVzcywgZW1vdGlvbmFsLCBvciBiaW5nZSBlYXRpbmcgYmVoYXZpb3JzIGFyZSB3ZWxjb21lIHRvIGNvbnNpZGVyIGJvdGggaW5kaXZpZHVhbCBhbmQgY2xhc3MtYmFzZWQgdGhlcmFwaWVzIHdpdGggbWUuIE15IGFwcHJvYWNoIHRvIHRoZXNlIGNvbmNlcm5zIHJlY29nbml6ZXMgdGhlIGNvbXBsZXggcm9sZSBlYXRpbmcgY2FuIHBsYXkgYXMgYSBtZWNoYW5pc20gb2YgY29waW5nIGZvciBpbmRpdmlkdWFsLCBmYW1pbHksIGFuZCBjdWx0dXJhbGx5IHN5c3RlbWljIGlzc3Vlcy4gV2Ugd29yayB0b2dldGhlciB0byBhY2tub3dsZWRnZSB0aGUgZnVsbG5lc3Mgb2YgdGhpcyByb2xlIGFzIHdlbGwgYXMgaXQncyBoaXN0b3J5LCB3aGlsZSBob25vcmluZyB0aGUgZGVzaXJlIHRoYXQgbWF5IGV4aXN0IHRvIGNoYW5nZS4gVGhyb3VnaCBvdXIgd29yayB3ZSBjYW4gYmVnaW4gdG8gZGV2ZWxvcCBuZXcgYW5kIGhlYWx0aGllciBjb3Bpbmcgc3RyYXRlZ2llcyBhcyBhIG5hdHVyYWwgb3V0Y29tZSBvZiBpbmNyZWFzZWQgYXdhcmVuZXNzIGFuZCBzZWxmLWNvbXBhc3Npb24uIEkgdGFpbG9yIG15IGFwcHJvYWNoIHRvIHRoZSBuZWVkcyBhbmQgc3R5bGUgb2YgdGhlIGluZGl2aWR1YWwgd2l0aCB3aG9tIEkgYW0gd29ya2luZy4gXG4gICAgPC9wPlxuXG4gICAgPGgzPkxpZmVzdHlsZSBDaGFuZ2VzPC9oMz5cblxuICAgIDxwPlxuICAgIE1vc3Qgb2YgdXMgY2FuIHJlbGF0ZSB0byB0aGUgcnVubmluZyBtZW50YWwgbGlzdCBvZiB0aGluZ3Mgd2Uga25vdyB3ZSBcInNob3VsZFwiIGJlIGRvaW5nIGluIG9yZGVyIHRvIGJlIGhlYWx0aGllci4gTWF5YmUgdGhpcyBpcyBtb3Zpbmcgb3VyIGJvZGllcyBtb3JlLCBlYXRpbmcgZGlmZmVyZW50bHksIGltcHJvdmluZyBzbGVlcCBoYWJpdHMsIG9yIGRpc2Nvbm5lY3RpbmcgZnJvbSB0ZWNobm9sb2d5LiBNYXliZSBpdCBjb3VsZCBiZSB0aGVzZSB0aGluZ3MgcGx1cyBtYW55IG1vcmUhIFdoaWxlIGNlcnRhaW5seSBleGNlbGxlbnQgaGFiaXRzLCBsb29raW5nIGF0IGEgbGlzdCBvZiBwZXJzb25hbCB3ZWxsbmVzcyBcInRvIGRvc1wiIGNhbiBiZSBvdmVyd2hlbG1pbmcuIEluIGZhY3QsIHdlIG9mdGVuIGF2b2lkIHRoaW5raW5nIGFib3V0IHRoZXNlIGhlYWx0aHkgbGl2aW5nIGl0ZW1zIGJlY2F1c2UgaXQgY2FuIGZlZWwgaG9wZWxlc3MuIFVuZm9ydHVuYXRlbHksIG9mdGVuIHRoaXMgbWVhbnMgc3RheWluZyBzdHVjayBpbiBhIHJ1dCBvZiBmZWVsaW5nIHVuaGVhbHRoeS4gVG9nZXRoZXIsIHdlIGNhbiBjcmVhdGUgYSBwbGFuIG9mIHNtYWxsIHN0ZXBzIHRvIHdvcmsgdG93YXJkcyBjb25uZWN0aW5nIGJlaGF2aW9yIGNoYW5nZXMgd2l0aCB5b3VyIGRlZXBlc3QgdmFsdWVzLiBUaGluZ3MgdGhhdCBtYXkgaGF2ZSBmZWx0IGZvcmNlZCBpbiB0aGUgcGFzdCBjYW4gYmVjb21lIHRoaW5ncyB3ZSBhcmUgZWFnZXIgZm9yLiBJIHdpbGwgbGV2ZXJhZ2UgbXkgdHJhaW5pbmcgaW4gTGlmZXN0eWxlIE1lZGljaW5lIHRvIGhlbHAgc2V0IG1hbmFnZWFibGUgYW5kIHJlc2VhcmNoIHN1cHBvcnRlZCBhaW1zIHRvIHByb2R1Y2UgcmVhbCBpbXByb3ZlbWVudHMgaW4geW91ciBoZWFsdGguXG48L3A+XG5cbiAgICA8aDM+UGhhc2Ugb2YgTGlmZSBJc3N1ZXMvTGlmZSBUcmFuc2l0aW9uczwvaDM+XG4gICAgPHA+XG4gICAgVGhvdWdoIHRoZSBwaHJhc2UsIFwidGhlIG9ubHkgdGhpbmcgY29uc3RhbnQgaXMgY2hhbmdlXCIgaXMgb25lIGZhbWlsaWFyIHRvIG1hbnkgb2YgdXMsIHRoaXMgb2Z0ZW4gZmVlbHMgbGlrZSBsaXR0bGUgY29tZm9ydCBkdXJpbmcgdGhlIHR1cm1vaWwgb2YgYSBzaWduaWZpY2FudCB0cmFuc2l0aW9uLiBDaGFuZ2VzIGluIGxpZmUgY2lyY3Vtc3RhbmNlcyBjYW4gaW1wYWN0IHVzIG9uIGV2ZXJ5IGxldmVsIG9mIG91ciBiZWluZyBhbmQgZXh0ZXJuYWwgbGlmZS4gU2Vla2luZyB0aGVyYXB5IGR1cmluZyB0aGVzZSB0aW1lcyBjYW4gYmUgYm90aCBhbmNob3IgYW5kIGd1aWRlIGxpZ2h0LiBJIHdpbGwgc3VwcG9ydCB5b3UgdG8gcHJvY2VzcyB0aGUgbG9zcyBvZiBob3cgdGhpbmdzIGhhdmUgYmVlbi4gV2hlbiB5b3UgYXJlIHJlYWR5LCB3ZSB3aWxsIHNldCBjb25zY2lvdXNseSBkZXZlbG9wZWQgZ29hbHMgZm9yIHRoZSBwaGFzZSBvZiBsaWZlIHRoYXQgeW91IGZpbmQgeW91cnNlbGYgaW4gbm93LiBXZSB3aWxsIHdvcmsgdG9nZXRoZXIgdG8gaWRlbnRpZnkgaGVhbHRoeSBjb3JlIGNvbXBvbmVudHMgb2Ygd2hvIHlvdSBhcmUgZXZvbHZpbmcgdG8gYmUsIGFuZCBjZW50ZXIgb3VyIGF0dGVudGlvbiB0byBudXJ0dXJlIHRoaXMgZ3Jvd3RoLiBUaGVyZSBpcyBubyBzZXQgdGltZWxpbmUgb2YgaG93IGxvbmcgYW4gYWRqdXN0bWVudCBwZXJpb2QgbGFzdHMuIEkgd2lsbCBoZWxwIHlvdSB0byBtb3ZlIGludG8gdGhlIG5leHQgcGFydCBvZiB5b3VyIGxpZmUgaW4gaGVhbHRoZnVsIHdheXMsIGFzIHF1aWNrbHkgYXMgaXMgcmVhc29uYWJsZSwgYW5kIGluIGNvbXBsZXRlIHJlc3BlY3QgZm9yIHlvdXIgb3duIHBhY2UuIFxuPC9wPlxuXG4gICAgPGgzPlJlbGF0aW9uc2hpcCBDaGFsbGVuZ2VzPC9oMz5cbiAgICA8cD5cbiAgICBSb21hbnRpYywgZmFtaWx5LCBzb2NpYWwsIGFuZCBvY2N1cGF0aW9uYWwgcmVsYXRpb25zaGlwcyBjYW4gYWxsIGJlIHNvdXJjZXMgb2Ygc2lnbmlmaWNhbnQgcGxlYXN1cmUgYW5kLCBjb25zZXF1ZW50bHksIHNpZ25pZmljYW50IHBhaW4uIFRoZXJlIGFyZSBhIG11bHRpdHVkZSBvZiByZWFzb25zIHJlbGF0aW9uc2hpcHMgY2FuIGJlY29tZSB0cm91YmxlZC4gTWFueSBvZiB0aGUgcm9vdHMgb2YgdGhlc2UgcmVhc29ucyBjYW4gYmUgdHJhY2VkIHRvIGNvbW11bmljYXRpb24gY2xhcml0eS4gV2hpbGUgd2UgY2Fubm90IGNoYW5nZSBvdGhlciBwZW9wbGUsIHdlIGNhbiBpZGVudGlmeSBwZXJzb25hbCBxdWFsaXRpZXMgaW4gb3Vyc2VsdmVzIHRoYXQgd2Ugd2lzaCB0byBjaGFuZ2UgZm9yIHRoZSB3ZWxsYmVpbmcgb2YgYSBjdXJyZW50IG9yIGZ1dHVyZSByZWxhdGlvbnNoaXAuIFdvcmtpbmcgdG93YXJkcyBpZGVudGlmeWluZyB0aGVzZSBhcmVhcywgY3JlYXRpbmcgbWluZGZ1bCBhd2FyZW5lc3MgYXJvdW5kIHRoZW0sIGFuZCBtYWtpbmcgdmFsdWVzLWJhc2VkIGNoYW5nZXMgY2FuIHByb3ZpZGUgYm90aCBwZXJzb25hbCBiZW5lZml0cyBhbmQgaW1wcm92ZW1lbnRzIHRvIHRoZSByZWxhdGlvbnNoaXAuIFdlIGNhbiB3b3JrIHRvZ2V0aGVyIHRvIGlkZW50aWZ5IGFuZCBvcHRpbWl6ZSB0aGVzZSBjaGFuZ2VzIGluIGEgY29tcGFzc2lvbmF0ZSBhbmQgcmVzcGVjdGZ1bCBlbnZpcm9ubWVudCB3aGlsZSBwcmlvcml0aXppbmcgZWZmZWN0aXZlIGFuZCBjbGVhciBjb21tdW5pY2F0aW9uIGFzIHRoZSBjb3JuZXJzdG9uZSB0byBpbXByb3ZlZCByZWxhdGlvbnNoaXBzLiBcbjwvcD5cbiAgICA8aDM+SGVhbHRoIERpZmZpY3VsdGllczwvaDM+XG4gICAgPHA+XG4gICAgVGhlcmUgaXMgbm8gZG91YnQgdGhhdCBvdXIgcGh5c2ljYWwgd2VsbGJlaW5nIGltcGFjdHMgb3VyIHBzeWNob2xvZ2ljYWwgd2VsbGJlaW5nIGFuZCB2aWNlIHZlcnNhLiBXaGV0aGVyIHlvdSBhcmUgbG9va2luZyBmb3Igc3VwcG9ydCBpbiBpbXByb3ZpbmcgeW91ciBtYW5hZ2VtZW50IG9mIGEgbWVkaWNhbCBwcm9ibGVtLCBoYW5kbGluZyB0aGUgc3RyZXNzIGFyb3VuZCBpdCwgb3IgYmVsaWV2ZSB0aGVyZSBtYXkgYmUgbGlmZXN0eWxlIGNoYW5nZXMgdGhhdCB3aWxsIHJldmVyc2UgdGhlIGNvbmRpdGlvbiwgSSB3b3VsZCBiZSBoYXBweSB0byBzdXBwb3J0IHRoaXMgYXNwZWN0IG9mIHlvdXIgaGVhbHRoLiBJIGFtIGEgdHJhaW5lZCBoZWFsdGggcHN5Y2hvbG9naXN0IGFuZCB3b3JrIHJlZ3VsYXJseSB3aXRoIGJvdGggY2hyb25pYyBhbmQgYWN1dGUgbWVkaWNhbCBjb25kaXRpb25zLiBJIGhhdmUgcGVyc29uYWwgYW5kIHByb2Zlc3Npb25hbCBleHBlcmllbmNlIHdpdGggdGhlIGltcGFjdHMgcGh5c2ljYWwgaGVhbHRoIGNhbiBoYXZlIG5vdCBvbmx5IG9uIG9uZXNlbGYsIGJ1dCBhbHNvIG9uIHRob3NlIGFyb3VuZCB1cy4gSSBiZWxpZXZlIHN1cHBvcnQgY2FuIG1ha2UgYSBzdWJzdGFudGl2ZSBkaWZmZXJlbmNlIGluIG1hbmFnaW5nIGEgaGVhbHRoIGNvbmNlcm4gYXMgd2VsbCBhcyB0aGUgZW1vdGlvbmFsIGFuZCBzb2NpYWwgaW1wYWN0cyBvZiB0aGlzLiBJIHdpbGwgd29yayB3aXRoIHlvdSB0byBhY2NlcHQgdGhvc2UgcmVhbGl0aWVzIHRoYXQgYXJlIHVuY2hhbmdpbmcsIGFzIHdlbGwgYXMgcmVjb2duaXplIG9wcG9ydHVuaXRpZXMgZm9yIHBvc2l0aXZlIGdyb3d0aC4gXG48L3A+XG4gICAgPGgzPlN0cmVzcyBNYW5hZ2VtZW50PC9oMz5cbiAgICA8cD5cbiAgICBBdCB0aW1lcyB3ZSBjYW4gZmluZCBvdXJzZWx2ZXMgb3ZlcndoZWxtZWQuIFRoZSByZWFzb25zIGZvciBmZWVsaW5nIG92ZXJ3aGVsbWVkIG1pZ2h0IHNlZW0gY2xlYXIgb3IgbWF5IGJlIGhhcmQgdG8gdW5kZXJzdGFuZC4gSXQgY2FuIGZlZWwgbGlrZSBiZWluZyB0cmFwcGVkIGluIHBhcnRzIG9mIHlvdXIgb3duIGxpZmUuIFRhbGtpbmcgdGhyb3VnaCB5b3VyIHN0cmVzc29ycyB3aXRoIGEgcHJvZmVzc2lvbmFsIGNhbiBhbGxvdyBzcGFjZSBhcm91bmQgcGFpbmZ1bCBwYXJ0cyBvZiB5b3VyIGV4cGVyaWVuY2UgdGhhdCBjb3VsZCBlYXNlIHRoZSBwcmVzc3VyZS4gVGhlcmUgbWF5IGFsc28gYmUgYWx0ZXJuYXRpdmUgcGVyc3BlY3RpdmVzIHRoYXQgeW91IGFyZW7igJl0IGFibGUgdG8gc2VlIGZyb20gYmVpbmcgcmlnaHQgaW4gdGhlIHRoaWNrIG9mIHRoZSBzdHJlc3MsIHRoYXQgbWF5IGJlIHZpc2libGUgZnJvbSBhbiBvdXRzaWRlIHBlcnNwZWN0aXZlLiBUaGVyYXB5IGNhbiBwcm92aWRlIHN1cHBvcnQgdG8gcHJvY2VzcyB5b3VyIGV4cGVyaWVuY2VzIGFuZCBmcmVlIHlvdSB0byBiZSBtb3JlIHdob2xlIHRvIGVuZ2FnZSB3aXRoIHRoZSByZXN0IG9mIHlvdXIgbGlmZSBhbmQgdGhlIHBlb3BsZSBpbiBpdC5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBzZXJ2aWNlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgIFdoYXQgdG8gRXhwZWN0XG4gICAgPC9oMz5cbiAgICA8aDM+VGVsZXBob25lIENvbnN1bHQ8L2gzPlxuICAgIDxwPlxuICAgICAgQXMgb3VyIGZpcnN0IGNvbnRhY3QgZm9yIGVpdGhlciBpbmRpdmlkdWFsIHRoZXJhcHkgb3IgY2xhc3NlcyBJIG9mZmVyIGEgY29tcGxlbWVudGFyeSAxNS1taW51dGUgcGhvbmUgY29uc3VsdGF0aW9uLiBUaGlzIGlzIGFuIG9wcG9ydHVuaXR5IGZvciB1cyB0byBjb25uZWN0IGFib3V0IHRoZSBpc3N1ZXMgdGhhdCBicmluZyB5b3UgaW50byBjYXJlLCBhbmQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgd29ya2luZyB0b2dldGhlciBpcyB0aGUgYmVzdCBmaXQgZm9yIHlvdXIgbmVlZHMuIEkgY2FuIGFuc3dlciBhbnkgcXVlc3Rpb25zIHRoYXQgeW91IG1heSBoYXZlIGFib3V0IGNvbWluZyBpbnRvIGNhcmUgYW5kIHNldCB1cCB5b3VyIGZpcnN0IGFwcG9pbnRtZW50IG9yIGNsYXNzLiAgICAgICBcbiAgICAgIDxiciAvPlxuICAgICAgPGk+MTUtbWluIGluaXRpYWwgdGVsZXBob25lIGNvbnN1bHQmI3gyMDE0OyBmcmVlPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+SW5pdGlhbCBBcHBvaW50bWVudDwvaDM+XG4gICAgPHA+XG4gICAgICBBbiBpbml0aWFsIGluZGl2aWR1YWwgdGhlcmFweSBhcHBvaW50bWVudCBpcyBhIDYwLW1pbnV0ZSBhcHBvaW50bWVudC4gRHVyaW5nIHRoaXMgYXBwb2ludG1lbnQgSSB3aWxsIHJldmlldyB5b3VyIGNvbXBsZXRlIGludGFrZSBmb3JtIHdpdGggeW91IHRvIGVuc3VyZSB0aGF0IEkgaGF2ZSBhbiBhcHByb3ByaWF0ZSB1bmRlcnN0YW5kaW5nIG9mIHNvbWUgb2YgeW91ciBoaXN0b3J5LCB3aGF0IGJyaW5ncyB5b3UgaW50byBjYXJlLCBhbmQgeW91ciBnb2FscyBmb3Igb3VyIHdvcmsgdG9nZXRoZXIuIFdlIHdpbGwgYWxzbyB1c2UgdGhpcyBhcHBvaW50bWVudCB0byBjcmVhdGUgc29tZSBpbml0aWFsIGdvYWxzIGZvciBjYXJlIGFuZCB0byBzZXQgdXAgb3VyIGV4cGVjdGF0aW9ucyBmb3IgdHJlYXRtZW50LlxuICAgICAgPGJyIC8+XG4gICAgPGk+NjAtbWluIGluaXRpYWwgaW5kaXZpZHVhbCBhcHBvaW50bWVudCYjeDIwMTQ7ICQxNTA8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5SZXR1cm4gQXBwb2ludG1lbnRzPC9oMz5cbiAgICA8cD5cbiAgICAgIFJldHVybiBhcHBvaW50bWVudHMgYXJlIDUwLW1pbnV0ZSBhcHBvaW50bWVudHMuIER1cmluZyByZXR1cm4gYXBwb2ludG1lbnRzIHdlIHdpbGwgd29yayB0b2dldGhlciBvbiB5b3VyIGdvYWxzIGFuZCBJIHdpbGwgc3VwcG9ydCB5b3UgdGhyb3VnaCB0aGUgcHJvY2Vzcy4gV2Ugd2lsbCByZWd1bGFybHkgY2hlY2sgaW4gYWJvdXQgdGhlIHByb2dyZXNzIG9mIGNhcmUgYW5kIG1ha2UgYWRqdXN0bWVudHMgYXMgbmVlZGVkIHRvIGVuc3VyZSB0aGF0IHdlIGFyZSB3b3JraW5nIGVmZmVjdGl2ZWx5IHRvZ2V0aGVyLlxuICAgICAgPGJyIC8+XG4gICAgICA8aT41MC1taW4gcmV0dXJuIGluZGl2aWR1YWwgYXBwb2ludG1lbnQmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+Q2xhc3NlczwvaDM+XG4gICAgPHA+XG4gICAgICBDbGFzc2VzIGFyZSA5MCBtaW51dGVzIGluIGxlbmd0aC4gRHVlIHRvIHNwYWNlIG5lZWRlZCwgY2xhc3NlcyBhcmUgaGVsZCBhdCBhIG5lYXJieSBsb2NhdGlvbiBzZXBhcmF0ZSBmcm9tIHRoZSBtYWluIHRoZXJhcHkgb2ZmaWNlLiBNb3JlIGluZm9ybWF0aW9uIGFib3V0IGNsYXNzIGFuZCBjbGFzcyBjb250ZW50IGNhbiBiZSBmb3VuZCB1bmRlciB0aGUgXCJDbGFzc2VzXCIgdGFiLiBUaG91Z2ggY2xhc3NlcyB0YWtlIHBsYWNlIG92ZXIgNCBzZXNzaW9ucywgdGhlIGZ1bGwgZmVlIG11c3QgYmUgcGFpZCBpbiBhZHZhbmNlIG9mIHRoZSBmaXJzdCBzZXNzaW9uLiBBZnRlciB0aGlzIHBheW1lbnQsIG5vIGFkZGl0aW9uYWwgY2hhcmdlcyBhcmUgaW5jdXJyZWQgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIGNsYXNzZXMgdW5sZXNzIGFuIGFkZGl0aW9uYWwgc2VydmljZSBpcyByZXF1ZXN0ZWQgb3IgcHJvdmlkZWQuXG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjQtc2Vzc2lvbiAoMzYwLW1pbikgY2xhc3Mgc2VyaWVzJiN4MjAxNDsgJDE2MDwvaT5cbiAgICA8L3A+XG4gICAgPGgzPlRlbGVNZW50YWwgSGVhbHRoPC9oMz5cbiAgICA8cD5cbiAgICAgIE9uIG9jY2FzaW9uIGl0IG1heSBiZSBpbmRpY2F0ZWQgZm9yIHVzIHRvIGVuZ2FnZSBpbiB0ZWxlLWhlYWx0aCBlaXRoZXIgb3ZlciB0aGUgcGhvbmUgb3IgdGhyb3VnaCB2aWRlbyBjb21tdW5pY2F0aW9uLiBUaGVzZSBzZXJ2aWNlcyBhcmUgb2ZmZXJlZCB0byBpbmRpdmlkdWFscyBvbmx5IGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGluaXRpYWxseSBlc3RhYmxpc2hlZCBpbi1wZXJzb24gdGhyb3VnaCBhdCBsZWFzdCBvbmUgaW4tcGVyc29uIGFwcG9pbnRtZW50LiBEdWUgdG8gbGljZW5zaW5nIHJlcXVpcmVtZW50cywgSSBhbSB1bmFibGUgdG8gcHJvdmlkZSB0aGVzZSBzZXJ2aWNlcyB0byBhbnlvbmUgb3V0LW9mLXN0YXRlIG9yIGNvdW50cnkgYXQgdGhlIHRpbWUgb2Ygc2VydmljZS4gVGhlcmUgYXJlIGEgdmFyaWV0eSBvZiBwbGF0Zm9ybXMgYXZhaWxhYmxlIGZvciB0aGlzIHNlcnZpY2UgYW5kLCB0aG91Z2ggY29udmVuaWVudCwgaXQgaXMgaW1wb3J0YW50IHRvIGJlIGF3YXJlIHRoYXQgdGhleSBhcmUgbm90IEhJUEFBIGNvbXBsaWFudC4gQ29tcGxldGluZyB0aGUgSW5mb3JtZWQgQ29uc2VudCBmb3JtIGFja25vd2xlZGdlcyB5b3VyIHVuZGVyc3RhbmRpbmcgb2YgdGhpcyBhbmQgYWNjZXB0YW5jZSBvZiB0aGUgcmlzayBzaG91bGQgd2UgdXRpbGl6ZSB0aGlzIGZvcm1hdCBvZiBjYXJlLlxuICAgICAgPGJyIC8+XG4gICAgICA8aT41IHRvIDI1IG1pbnV0ZXMmI3gyMDE0OyAkNzU8L2k+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjI2LTUwIG1pbnV0ZXMmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IHNlcnZpY2VzUmVpbWJ1cnNtZW50ID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGgzIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgIFBheW1lbnQgYW5kIFJlaW1idXJzZW1lbnRcbiAgICA8L2gzPlxuICAgIDxwPlxuICAgICAgWW91IHdpbGwgYmUgZXhwZWN0ZWQgdG8gcGF5IGZvciBlYWNoIHNlc3Npb24gYmVmb3JlL2F0IHRoZSBzdGFydCBvZiBzZXNzaW9uLCB1bmxlc3Mgd2UgYWdyZWUgb3RoZXJ3aXNlLiBQYXltZW50IG1heSBiZSBtYWRlIHRocm91Z2ggY2FzaCwgY2hlY2ssIG9yIEhJUEFBIGNvbXBsaWFudCBhcHBsaWNhdGlvbi4gVXNlIG9mIHRoZSBISVBBQSBjb21wbGlhbnQgYXBwbGljYXRpb24gaW5jdXJzIGFuIGFkZGl0aW9uYWwgJDUgY2hhcmdlLlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IHNlcnZpY2VzSW5zdXJhY2UgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICBJbnN1cmFuY2VcbiAgICA8L2gzPlxuICAgIDxwPlxuICAgICAgSSBhbSBhbiBcIm91dCBvZiBuZXR3b3JrIHByb3ZpZGVyXCIgZm9yIGluc3VyYW5jZSBuZXR3b3JrcyBidXQgd2lsbCBwcm92aWRlIHlvdSBhIFN1cGVyYmlsbCB3aGljaCB5b3UgbWF5IHVzZSB0byByZXF1ZXN0IHJlaW1idXJzZW1lbnQuIFRoZSBjb3ZlcmFnZSB5b3UgcmVjZWl2ZSBpcyBlbnRpcmVseSBkZXBlbmRlbnQgdXBvbiB0aGUgcGxhbiB0aGF0IHlvdSBoYXZlLiBJIHJlY29tbWVuZCB0aGF0IHlvdSBjb250YWN0IHlvdXIgaW5zdXJhbmNlIGNvbXBhbnkgZGlyZWN0bHkgdG8gZGV0ZXJtaW5lIHlvdXIgc3BlY2lmaWMgY292ZXJhZ2UuIFNvbWUgcXVlc3Rpb25zIHRoYXQgbWF5IGJlIGhlbHBmdWwgaW4gdGhpcyBjb252ZXJzYXRpb24gaW5jbHVkZTpcbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICBEbyBJIGhhdmUgbWVudGFsIGhlYWx0aCBpbnN1cmFuY2UgYmVuZWZpdHMgdGhhdCBjb3ZlciBwc3ljaG90aGVyYXB5P1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgRG9lcyBteSBwb2xpY3kgY292ZXIgYW4gb3V0IG9mIG5ldHdvcmsgTGljZW5zZWQgUHN5Y2hvbG9naXN0PyBJZiBzbywgd2hhdCBwZXJjZW50YWdlIGlzIGNvdmVyZWQgb3Igd2hhdCBpcyB0aGUgY292ZXJhZ2UgYW1vdW50IHBlciB0aGVyYXB5IHNlc3Npb24/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBXaGF0IGlzIG15IGRlZHVjdGlibGUgYW5kIGhhcyBpdCBiZWVuIG1ldD9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIEFyZSBteSBtZWRpY2FsIGFuZCBtZW50YWwgaGVhbHRoL2JlaGF2aW9yYWwgaGVhbHRoIGRlZHVjdGlibGVzIHNlcGFyYXRlP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgSG93IG1hbnkgc2Vzc2lvbnMgcGVyIHllYXIgZG9lcyBteSBoZWFsdGggaW5zdXJhbmNlIGNvdmVyP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgRG9lcyB0aGUgZGlhZ25vc2lzIG1hdHRlcj8gQXJlIHNvbWUgZGlhZ25vc2VzIGNvdmVyZWQgYW5kIG90aGVycyBub3Q/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBXaGF0IHBhcGVyd29yayBvciBmb3JtcyBkbyBJIG5lZWQgdG8gc3VibWl0IGZvciBzZXNzaW9ucyB0byBiZSBjb3ZlcmVkP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgSXMgYXBwcm92YWwgcmVxdWlyZWQgZnJvbSBteSBwcmltYXJ5IGNhcmUgcGh5c2ljaWFuP1xuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuXG5jb25zdCBjbGFzc2VzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGgzPlxuICAgICAgTW9vZCAmIEZvb2RcbiAgICA8L2gzPlxuICAgIDxwPlxuICAgICAgTW9vZCAmIEZvb2QgaXMgYSBjbGFzcyBkZXNpZ25lZCBmb3IgaW5kaXZpZHVhbHMgc3RydWdnbGluZyB3aXRoIG92ZXJlYXRpbmcsIG1pbmRsZXNzIGVhdGluZywgc3RyZXNzIGVhdGluZywgZW1vdGlvbmFsIGVhdGluZywgc2hhbWUgYXJvdW5kIGVhdGluZywgb3IgYmluZ2UgZWF0aW5nLiBUaGUgY291cnNlIGlzIHN0cnVjdHVyZWQgaW50byA0IGNsYXNzZXMgZWFjaCBsYXN0aW5nIDkwIG1pbnV0ZXMuIFRoZSBjbGFzcyBjZW50ZXJzIG9uIHByZXNlbnRlZCBtYXRlcmlhbCB0aG91Z2ggcXVlc3Rpb25zIGFuZCBwYXJ0aWNpcGF0aW9uIGFyZSB3ZWxjb21lIGFuZCBlbmNvdXJhZ2VkLiBDbGFzcyBtYXRlcmlhbHMgYWxzbyBpbmNsdWRlIGhhbmRvdXRzIGFuZCBhdC1ob21lIHByYWN0aWNlIGV4ZXJjaXNlcy4gRHVyaW5nIHRoZSBjb3Vyc2Ugb2YgdGhlIGNsYXNzZXMgd2Ugd2lsbCBjb3ZlciB0b3BpY3MgaW5jbHVkaW5nOiB3aGF0IGVtb3Rpb25hbCBlYXRpbmcgaXMsIGN1bHR1cmFsIGltcGxpY2F0aW9ucywgZW52aXJvbm1lbnRhbCBpbXBhY3RzLCBzZXQgcG9pbnQgdGhlb3J5LCBlbW90aW9uYWwgdnMgcGh5c2ljYWwgaHVuZ2VyLCBiaW5nZSBlYXRpbmcgY3ljbGUsIGludGVycGVyc29uYWwgZHluYW1pY3MgYXJvdW5kIGZvb2QsIHNlbGYtdGFsaywgYmVoYXZpb3IgYW5hbHlzaXMgJiBiZWhhdmlvciBjaGFuZ2UsIG1pbmRmdWwgZWF0aW5nLCBsb3ZpbmcgbGltaXRzLCBzZWxmLWNvbXBhc3Npb24sIG1hbmFnaW5nIGRpZmZpY3VsdCBlbW90aW9ucywgaGFiaXQgZm9ybWF0aW9uLCBzdGFnZXMgb2YgY2hhbmdlLCBhbmQgaGVhbHRoeSBlYXRpbmcgZ3VpZGVsaW5lcy4gQnkgdGhlIGVuZCBvZiB0aGUgY2xhc3Mgc2VyaWVzIHBhcnRpY2lwYW50cyB3aWxsIGJlIGFibGUgdG8gcmVjb2duaXplIG9wcG9ydHVuaXRpZXMgZm9yLCBwcmVwYXJlIGZvciwgYW5kIG1ha2UgcG9zaXRpdmUgY2hhbmdlcyBpbiB0aGVpciByZWxhdGlvbnNoaXBzIHdpdGggdGhlbXNlbHZlcywgZm9vZCwgYW5kIHRoZWlyIGVudmlyb25tZW50LlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IHJlc291cmNlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxwPlxuICAgICAgVGhlIGJlbG93IGFyZSByZXNvdXJjZXMgdGhhdCBJIGZpbmQgdG8gYmUgY2xpbmljYWxseSB2YWx1YWJsZS4gSSBoYXZlIG5vIGFmZmlsaWF0aW9uIHdpdGggYW55IG9mIHRoZSBpbmRpdmlkdWFscyBvciBlbnRpdGllcyBpbmRpY2F0ZWQgYmVsb3cuIFRoZXNlIHJlc291cmNlcyBhcmUgcHJvdmlkZWQgcHVyZWx5IGR1ZSB0byBteSBwZXJjZXB0aW9uIG9mIHRoZWlyIGNsaW5pY2FsIGJlbmVmaXQuIEkgcmVjZWl2ZSBubyBjb21wZW5zYXRpb24gb2YgYW55IGtpbmQgZm9yIHNoYXJpbmcgdGhlc2UgcmVzb3VyY2VzLlxuICAgIDwvcD5cbiAgICA8aDM+V2VicGFnZXM8L2gzPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYW54aWV0eWNhbmFkYS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QW54aWV0eSBDYW5hZGE8L2E+IGlzIGFuIGV4Y2VsbGVudCB3ZWIgcmVzb3VyY2UgZm9yIGV2aWRlbmNlIGJhc2VkIGluZm9ybWF0aW9uIGFib3V0IGFueGlldHkuIFRoZSB3ZWJzaXRlIGlzIHdyaXR0ZW4gaW4gY2xlYXIgbGFuZ3VhZ2UgdGhhdCBpcyB0aG91Z2h0ZnVsLCBlYXN5IHRvIHVuZGVyc3RhbmQsIGFuZCBoZWxwZnVsLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL21hcHMuYW54aWV0eWNhbmFkYS5jb20vY291cnNlcy9teS1hbnhpZXR5LXBsYW4tbWFwLWZvci1hZHVsdHMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TXkgQW54aWV0eSBQbGFuPC9hPiBpcyB0aGUgb25saW5lIGNvdXJzZSBhc3NvY2lhdGVkIHdpdGggQW54aWV0eSBDYW5hZGEuIEl0IGlzIGEgZnJlZSBjb3Vyc2UgdGhhdCBwcm92aWRlcyBleGNlbGxlbnQgaW5mb3JtYXRpb24gaW4gYWRkaXRpb24gdG8gcHJhY3RpY2FsIHRvb2xzIGFuZCBwcmFjdGljZXMgZm9yIG1hbmFnaW5nIGFueGlldHkgYW5kIGFueGlldHktYmFzZWQgY29uZGl0aW9ucy5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5CcmVuZSBCcm93bjwvYT4gaXMgYW4gYXV0aG9yLCByZXNlYXJjaGVyLCBhbmQgc3BlYWtlciB0aGF0IEkgaGlnaGx5IHJlY29tbWVuZC4gVGhlIGxpbmsgaXMgdG8gaGVyIG1haW4gd2VicGFnZS4gQmVsb3cgYXJlIHNwZWNpZmljIHJlc291cmNlcyBvZiBoZXJzIHRoYXQgSSByZWNvbW1lbmQuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2dzYy5iZXJrZWxleS5lZHUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIEdyZWF0ZXIgR29vZCBTY2llbmNlIENlbnRlcjwvYT4tIEJlcmtlbGV5IGlzIGEgY2VudGVyIG9mIHJlc2VhcmNoIGFuZCBpbm5vdmF0aW9uIGZvY3VzaW5nIG9uIG1ha2luZyBwb3NpdGl2aXR5IGFuZCBwb3NpdGl2ZSBjaGFuZ2UgYWNjZXNzaWJsZSB0byBhbGwuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVkeC5vcmcvY291cnNlL3RoZS1zY2llbmNlLW9mLWhhcHBpbmVzcy0wXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIFNjaWVuY2Ugb2YgSGFwcGluZXNzPC9hPiBpcyB0aGUgb25saW5lIGNvdXJzZSBmcm9tIHRoZSBHcmVhdGVyIEdvb2QgU2NpZW5jZSBDZW50ZXIuIEl0IGlzIGEgZnJlZSA4LXdlZWsgY291cnNlIHRoYXQgcHJvdmlkZXMgdG9vbHMgdG8gaGFwcGllciBleHBlcmllbmNlcyBhbmQgZ3JlYXRlciBtZWFuaW5nIGluIGxpZmUuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2dpYS5iZXJrZWxleS5lZHUvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R3JlYXRlciBHb29kIGluIEFjdGlvbjwvYT4gcHJvdmlkZXMgZG9hYmxlIHByYWN0aWNlcyBmb3IgbWFraW5nIGNvbmNyZXRlIGFuZCBpbXBhY3RmdWwgcG9zaXRpdmUgY2hhbmdlc1xuICAgIDwvcD5cblxuICAgIDxoMz5WaWRlb3M8L2gzPlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlZC5jb20vdGFsa3MvYnJlbmVfYnJvd25fb25fdnVsbmVyYWJpbGl0eT91dG1fY2FtcGFpZ249dGVkc3ByZWFkJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT10ZWRjb21zaGFyZVwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBQb3dlciBvZiBWdWxuZXJhYmlsaXR5LSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGVkLmNvbS90YWxrcy9icmVuZV9icm93bl9saXN0ZW5pbmdfdG9fc2hhbWU/dXRtX2NhbXBhaWduPXRlZHNwcmVhZCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dGVkY29tc2hhcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaXN0ZW5pbmcgdG8gU2hhbWUtIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMjYxMzQ4NzA5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+U3VwZXJTb3VsIFNlc3Npb25zOiBUaGUgQW5hdG9teSBvZiBUcnVzdC0gQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vdmlkZW9zL1wiIHRhcmdldD1cIl9ibGFua1wiPkFkZGl0aW9uYWwgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8veW91dHUuYmUvSXZ0WkJVU3BscjRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgU3BhY2UgQmV0d2VlbiBTZWxmLUVzdGVlbSBhbmQgU2VsZi1Db21wYXNzaW9uLSBLcmlzdGluIE5lZmY8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vc2VsZi1jb21wYXNzaW9uLm9yZy92aWRlb3MvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QWRkaXRpb25hbCBLcmlzdGluIE5lZmY8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlZC5jb20vdGFsa3Mvc2FuZHJhX2FhbW9kdF93aHlfZGlldGluZ19kb2Vzbl90X3VzdWFsbHlfd29yaz91dG1fY2FtcGFpZ249dGVkc3ByZWFkJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT10ZWRjb21zaGFyZVwiIHRhcmdldD1cIl9ibGFua1wiPldoeSBEaWV0aW5nIERvZXNuJ3QgVXN1YWxseSBXb3JrLSBTYW5kcmEgQWFtb2R0PC9hPjxiciAvPlxuXG4gICAgPGgzPkF1ZGlvIFJlY29yZGluZ3M8L2gzPlxuXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vY2VudGVyZm9ybXNjLm9yZy9wcmFjdGljZS1tc2MvZ3VpZGVkLW1lZGl0YXRpb25zLWFuZC1leGVyY2lzZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TWluZGZ1bCBTZWxmIENvbXBhc3Npb24gTWVkaXRhdGlvbnM8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnVjbGFoZWFsdGgub3JnL21hcmMvbWluZGZ1bC1tZWRpdGF0aW9uc1wiIHRhcmdldD1cIl9ibGFua1wiPlVDTEEgTWVkaXRhdGlvbnMgKEFsc28gYXZhaWxhYmxlIGluIFNwYW5pc2ghKTwvYT48YnIgLz5cblxuICAgIDxoMz5Cb29rczwvaDM+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vZ2VuZWVucm90aC5jb20vYm9va3MvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V29tZW4sIEZvb2QsIGFuZCBHb2QgYnkgR2VuZWVuIFJvdGg8L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vYm9va3MtYXVkaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIEdpZnRzIG9mIEltcGVyZmVjdGlvbiBieSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9ib29rcy1hdWRpby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5EYXJpbmcgR3JlYXRseSBieSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9ib29rcy1hdWRpby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5SaXNpbmcgU3Ryb25nIGJ5IEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgY2xpZW50RG9jdW1lbnRzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHA+XG4gICAgICBUaGUgZm9sbG93aW5nIGZvcm1zIGFyZSBmb3IgeW91ciByZXZpZXcuIElmIHdlIGhhdmUgc2NoZWR1bGVkIGFuIGluLXBlcnNvbiBhcHBvaW50bWVudCwgcGxlYXNlIHJlYWQgY2FyZWZ1bGx5IGVhY2ggb2YgdGhlIGZvcm1zIGJlbG93LiBQbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIGZpcnN0IHRocmVlIGZvcm1zIHRvIG91ciBmaXJzdCBhcHBvaW50bWVudC4gV2Ugd2lsbCByZXZpZXcgdGhlbSB0b2dldGhlci4gSWYgeW91IHdvdWxkIGxpa2UgZm9yIHlvdXIgaGVhbHRoIGluZm9ybWF0aW9uIHRvIGJlIHNoYXJlZCB3aXRoIGFub3RoZXIgaW5kaXZpZHVhbCBvciBncm91cCwgb3Igd291bGQgbGlrZSBtZSB0byBnYXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGVtLCBwbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIFJlbGVhc2Ugb2YgSW5mb3JtYXRpb24gZm9ybSB0byB5b3VyIG5leHQgYXBwb2ludG1lbnQuXG4gICAgPC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL0luZm9ybWVkIENvbnNlbnQucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+SW5mb3JtZWQgQ29uc2VudDwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9JbnRha2UgRm9ybS5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5JbnRha2UgRm9ybTwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9SZWNlaXB0IG9mIEZvcm1zLnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlJlY2VpcHQgb2YgRm9ybXM8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvUHJpdmFjeSBQb2xpY3kucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+UHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvUk9JLnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlJlbGVhc2Ugb2YgSW5mb3JtYXRpb248L2E+XG4gICAgICA8L2xpPlxuXG4gICAgPC91bD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cblxuXG5jb25zdCBDYXJkMSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB0aXRsZSA9IHByb3BzLnRpdGxlID9cbiAgICAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC10aXRsZSc+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICkgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2NhcmQgY2FyZC0xJ1xuICAgID5cbiAgICAgIHt0aXRsZX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxuICAgICAgICB7cHJvcHMuYm9keX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuXG5cbmNvbnN0IFBhZ2VUaXRsZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlLXRpdGxlJyBpZD0ndG9wJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmNsYXNzIERyYXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoYW5kbGVQcmFjdGljZUNsaWNrLFxuICAgICAgaGFuZGxlU2VydmljZXNDbGljayxcbiAgICAgIGhhbmRsZUNsYXNzZXNDbGljayxcbiAgICAgIGhhbmRsZUNvbnRhY3RDbGljayxcbiAgICAgIGhhbmRsZURvY3VtZW50c0NsaWNrLFxuICAgICAgaGFuZGxlUmVzb3VyY2VzQ2xpY2tcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGFjdGl2ZSA9ICcnXG5cbiAgICBjb25zdCBtZW51U3R5bGUgPSB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBjdXJyZW50Q29sb3InLFxuICAgICAgcGFkZGluZzogMTBcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcmF3ZXInPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUHJhY3RpY2VDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdwcmFjdGljZScgfSl9XG4gICAgICAgICAgc3R5bGU9e3suLi5tZW51U3R5bGUsIGJvcmRlclRvcDogJzFweCBzb2xpZCBjdXJyZW50Q29sb3InfX1cbiAgICAgICAgPlxuICAgICAgICAgIFByYWN0aWNlIEFyZWFzXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlcnZpY2VzQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnc2VydmljZXMnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBTZXJ2aWNlc1xuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGFzc2VzQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY2xhc3NlcycgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIENsYXNzZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvY3VtZW50c0NsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2RvY3MnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBEb2N1bWVudHNcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ29udGFjdENsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NvbnRhY3QnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBDb250YWN0XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNvdXJjZXNDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdyZXNvdXJjZXMnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBSZXNvdXJjZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvLFxuICAgICAgdGV4dCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBjbGFzc2VzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uICR7Y2xhc3Nlc31gfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vQXBwJztcblxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IFxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=