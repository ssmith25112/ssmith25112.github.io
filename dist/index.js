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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../res/lifestyle.jpg */ "./res/lifestyle.jpg"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../res/medicalproblems.jpg */ "./res/medicalproblems.jpg"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../res/relationships.jpg */ "./res/relationships.jpg"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../res/stressmanagement.jpg */ "./res/stressmanagement.jpg"));
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../res/transitions.jpg */ "./res/transitions.jpg"));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../res/succulentBurst.jpg */ "./res/succulentBurst.jpg"));
var ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(/*! ../res/pineapple.jpg */ "./res/pineapple.jpg"));
var ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ../res/moreResources.jpg */ "./res/moreResources.jpg"));
var ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(/*! ../res/practiceareas.jpg */ "./res/practiceareas.jpg"));
var ___CSS_LOADER_URL___11___ = getUrl(__webpack_require__(/*! ../res/cornerplant.jpg */ "./res/cornerplant.jpg"));
var ___CSS_LOADER_URL___12___ = getUrl(__webpack_require__(/*! ../res/succulentmat.jpg */ "./res/succulentmat.jpg"));
// Module
exports.push([module.i, "* {\n  color: #3f4c4e;\n}\n\nh2 {\n  text-align: center;\n  font-size: 3rem;\n  font-family: 'Dancing Script', cursive;\n  margin: 0;\n}\n\nbody {\n  margin: 0;\n  position: relative;\n}\n\n.navMenu {\n  font-size: 18px;\n  position: relative;\n}\n\n@media screen and (max-width: 900px) {\n  .navMenu {\n    font-size: 16px;\n  }\n}\n\n.backdrop {\n  overflow: hidden;\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n}\n\n.hero {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n\n.content {\n  margin-top: 50px;\n}\n\n.hero-content {\n  width: 100%;\n  display: flex;\n  height: 85vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.hero-content blockquote {\n  width: 60%;\n}\n\n.hero-content h1 {\n  /* color: #FFFFFF; */\n}\n\nblockquote footer {\n  text-align: end;\n  font-size: 22px;\n  /* color: #FFFFFF; */\n}\n\n.meet {\n  display: flex;\n  background-color: #EDEAE5;\n  padding: 30px;\n  justify-content: center;\n  align-items: center;\n\n}\n\n.meetContent {\n  max-width: 975px;\n  display: flex;\n}\n\n.profile {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n}\n\n.profilePhoto {\n  width: 100%;\n  max-width: 275px;\n  max-height: 375px;\n  min-width: 0;\n  min-height: 0;\n  object-fit: contain;\n  border-radius: 25px;\n}\n\n.bio {\n  flex: 1 0 auto;\n  margin: 20px;\n  max-width: 50%;\n}\n\n.bio .bioSubtitle {\n  text-align: center;\n}\n\n.bio p {\n  word-wrap: break-word;\n  /* padding: 0px 30px; */\n}\n\n@media screen and (max-width: 650px) {\n  .meetContent {\n    flex-direction: column;\n  }\n\n  .bio {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .bio,\n  .profile {\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .contact>p {\n    font-size: 16px !important;\n  }\n\n  #shrink {\n    margin: 50px 10px;\n  }\n\n  .title {\n    font-size: 3rem !important;\n  }\n}\n\n.practiceAreas {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n\n.practiceAreas .areas {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 30px;\n  align-items: space-between;\n  justify-content: center;\n}\n\n.practiceAreas .areas>.area {\n  display: flex;\n  flex: 1 0 290px;\n  max-width: 290px;\n  height: 320px;\n  background: #F7F7F7;\n  border-radius: 2px;\n  flex-direction: column;\n  margin: 0 30px 30px 0;\n  position: relative;\n}\n\n.practiceAreas .areas>.area:hover {\n  filter: brightness(1.2);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  transition: box-shadow 0.3s ease-in-out;\n  cursor: pointer;\n}\n\n.areaImage {\n  width: 100%;\n  height: 200px;\n  background-color: lightgray;\n}\n\n.areaEatingConcerns {\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left bottom -50px;\n}\n\n.areaLifestyle {\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -65px;\n}\n\n/* \n.areaLifestyle.lazy {\n  background: url('../res/lifestyle-placeholder.jpg') no-repeat;\n  background-size: cover;\n  background-position: left bottom -65px;\n} */\n\n.areaMedicalProblems {\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left;\n}\n\n/* .areaMedicalProblems.lazy {\n  background: url('../res/medicalproblems-placeholder.jpg') no-repeat;\n} */\n\n.areaRelationships {\n  background: url(" + ___CSS_LOADER_URL___4___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n\n/* \n.areaRelationshipsj.lazy {\n  background: url('../res/relationships.jpg') no-repeat;\n} */\n\n.areaStress {\n  background: url(" + ___CSS_LOADER_URL___5___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n\n/* .areaStress.lazy {\n  background: url('../res/stressmanagement-placeholder.jpg') no-repeat;\n} */\n\n.areaTransitions {\n  background: url(" + ___CSS_LOADER_URL___6___ + ") no-repeat;\n  background-size: cover;\n  background-position: left -20px;\n}\n\n/* .areaTransitions .lazy {\n  background: url('../res/transitions-placeholder.jpg') no-repeat;\n} */\n\n.areaText {\n  font-size: 30px;\n  height: 120px;\n  max-height: 120px;\n}\n\n.areaText div {\n  margin-left: 42px;\n  margin-top: 12px;\n}\n\n.areaOverlay {\n  background: transparent;\n  border: 1px solid black;\n  border-radius: 2px;\n  position: absolute;\n  width: 230px;\n  height: 260px;\n  margin: 30px;\n}\n\n.services {\n  height: 400px;\n  background-color: #FBEEC1;\n  display: flex;\n}\n\n.servicesDescription {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n}\n\n@media screen and (max-width: 400px) {\n  .servicesDescription {\n    width: 100%;\n  }\n\n  .servicesImage {\n    width: 0%;\n    display: none;\n  }\n\n  .hero-content blockquote h1 {\n    font-size: 1.75rem;\n  }\n\n  .hero-content blockquote footer {\n    font-size: 1.25rem;\n  }\n}\n\n.button {\n  display: inline-block;\n  border: none;\n  border-radius: 2px;\n  margin: 0;\n  text-decoration: none;\n  background: rgba(171, 208, 230, 1);\n  font-size: 18px;\n  cursor: pointer;\n  text-align: center;\n  transition: background 200ms ease-in-out, transform 100ms ease;\n  -webkit-appearance: none;\n  padding: 10px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.button:hover {\n  background: rgb(202, 226, 240);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.readMore {\n  display: flex;\n  justify-content: center;\n}\n\n.classes {\n  display: flex;\n  justify-content: center;\n  background: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n.contact {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n.contact form {\n  margin-top: 30px;\n}\n\n\n.group {\n  position: relative;\n  margin-bottom: 45px;\n}\n\ninput,\ntextarea {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #3f4c4e;\n  background: transparent;\n  color: #3f4c4e;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n/* LABEL ======================================= */\nlabel {\n  color: #3f4c4e;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n/* active state */\ninput:focus~label,\ninput:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\ntextarea {\n  resize: none;\n  padding: 0;\n}\n\ntextarea:focus~label,\ntextarea:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n/* TODO learn this */\n\n/* BOTTOM BARS ================================= */\n.bar {\n  position: relative;\n  display: block;\n  width: 300px;\n}\n\n.bar:before,\n.bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #3f4c4e;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar:before {\n  left: 50%;\n}\n\n.bar:after {\n  right: 50%;\n}\n\n/* active state */\ninput:focus~.bar:before,\ninput:focus~.bar:after {\n  width: 50%;\n}\n\n/* active state */\ntextarea:focus~.bar:before,\ntextarea:focus~.bar:after {\n  width: 50%;\n}\n\n/* HIGHLIGHTER ================================== */\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n/* active state */\ninput:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* active state */\ntextarea:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* ANIMATIONS ================ */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@-moz-keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #EDEAE5;\n  padding: 20px;\n  height: 60px;\n}\n\n#address:before {\n  content: '\\007C';\n  padding: 0 15px\n}\n\n#address:after {\n  content: '\\007C';\n  padding: 0 15px;\n}\n\n@media screen and (max-width: 776px) {\n\n  .footer {\n    flex-direction: column;\n    align-items: center;\n    height: 120px;\n    justify-content: flex-start;\n    text-align: center;\n  }\n\n  #address:before {\n    content: none;\n    padding: 0\n  }\n\n  #address:after {\n    content: none;\n    padding: 0;\n  }\n}\n\n\n.link:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  bottom: -2px;\n  left: 0;\n  background: #3f4c4e;\n  visibility: hidden;\n  border-radius: 5px;\n  transform: scaleX(0);\n  transition: .25s linear;\n}\n\n.link:hover:before,\n.link:focus:before {\n  visibility: visible;\n  transform: scaleX(1);\n}\n\n/* .navMenu:before {\n  bottom: -5px !important;\n} */\n\n.contact {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___7___ + ");\n}\n\n/* .contact.lazy {\n  background: center / cover no-repeat url('../res/succulentBurst-placeholder.jpg');\n} */\n\n.moreClasses {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___8___ + ");\n}\n\n/* \n.moreClasses.lazy {\n  background: center / cover no-repeat url('../res/pineapple-placeholder.jpg');\n} */\n\n.moreResources {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___9___ + ");\n}\n\n/* \n.moreResources.lazy {\n  background: center / cover no-repeat url('../res/moreResources-placeholder.jpg');\n} */\n\n.morePractice {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___10___ + ");\n}\n\n/* .morePractice.lazy {\n  background: center / cover no-repeat url('../res/practiceareas-placeholder.jpg');\n} */\n\n.moreServices {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___11___ + ");\n}\n\n.moreServices.lazy {\n  /* background: center / cover no-repeat url('../res/cornerplant-placeholder.jpg'); */\n}\n\n.moreDocuments {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___12___ + ");\n\n}\n\n/* .moreDocuments.lazy {\n  background: center / cover no-repeat url('../res/succulentmat-placeholder.jpg');\n\n} */\n\n.signature {\n  font-family: 'Dancing Script', cursive;\n  font-size: 26px;\n}\n\n.navMenu:hover {\n  filter: brightness(1.2);\n}\n\n.page-title {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.page-title .title {\n  font-size: 4rem;\n  font-family: 'Dancing Script', cursive;\n}\n\n.card {\n  background: #F7F7F7;\n  border-radius: 2px;\n  margin: 50px 15%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  min-width: 100px;\n}\n\n.card-body {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  min-height: 100px;\n  padding: 20px;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  padding: 20px;\n  border-bottom: 1px solid #222222;\n  height: 100%;\n}\n\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.card-2 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n}\n\n.background {\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n\n.drawer-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.30);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  z-index: 20;\n}\n\n.drawer-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  width: 155px;\n  height: calc(100vh - 50px);\n  z-index: 100;\n  /* transition: all 0.3s ease-in-out; */\n  top: 50px;\n  position: fixed;\n}\n\n.drawer {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: #EDEAE5;\n  justify-content: flex-start;\n  box-shadow: 11px 10px 8px 0px rgba(0, 0, 0, 0.25), 10px 0 5px -5px rgba(0, 0, 0, 0);\n  transition: none;\n}\n\n.drawer+.dark {\n  background-color: #C0C3C6;\n}\n\n.drawer-button {\n  width: 100%;\n  height: 40px;\n}\n\n.header-nav-button {\n  height: 40px;\n  width: 100px;\n}\n\n.drawer-item {\n  display: flex;\n}\n\n.drawer-item>div {\n  flex: 1;\n  padding-bottom: 10px;\n}\n\n.header-hamburger {\n  cursor: pointer;\n}\n\n.header-hamburger:hover * {\n  color: #879092;\n}\n\n.hide {\n  display: none;\n}\n\n/* .moreServices h2 {\n  text-align: center;\n  font-size: 3rem;\n  margin: unset;\n  font-family: Roboto, sans-serif;\n} */", ""]);


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

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/index.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/index.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/resolve-pathname/index.js":
/*!************************************************!*\
  !*** ./node_modules/resolve-pathname/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

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

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/index.js":
/*!*******************************************!*\
  !*** ./node_modules/value-equal/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

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

/***/ "./res/lifestyle.jpg":
/*!***************************!*\
  !*** ./res/lifestyle.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/lifestyle.jpg";

/***/ }),

/***/ "./res/medicalproblems.jpg":
/*!*********************************!*\
  !*** ./res/medicalproblems.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/medicalproblems.jpg";

/***/ }),

/***/ "./res/moreResources.jpg":
/*!*******************************!*\
  !*** ./res/moreResources.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dist/res/moreResources.jpg";

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
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
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

    _defineProperty(_assertThisInitialized(_this), "history", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleNav", function (target) {
      _this.setState({
        page: target
      });

      if (target.dock) {
        _this.closeDrawer();
      }

      switch (target.name) {
        case 'home':
          _this.history.push('/');

          break;

        case 'practice':
          _this.history.push('/practice-areas');

          break;

        case 'services':
          _this.history.push('/services');

          break;

        case 'classes':
          _this.history.push('/classes');

          break;

        case 'resources':
          _this.history.push('/resources');

          break;

        case 'docs':
          _this.history.push('/client-documents');

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
    var currentLocation = window.location.pathname;
    _this.currentPage = currentLocation;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_2__["createBrowserHistory"])();

    _this.history.listen(function (location) {
      _this.currentPage = location.pathname;
    });

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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, {
        page: page,
        closeDrawer: this.closeDrawer,
        showDrawer: this.state.showDrawer,
        onNav: this.handleNav
      }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
        onNav: this.handleNav
      })));
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
      var bodyStyle = {// minHeight: `calc(100vh - 60px)`
      };
      var n = page.name;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('backdrop', {
        'hero lazy': n === 'home',
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
  }, "Services & Fees"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Stephanie Smith, Psy.D."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "address"
  }, "801 Alhambra Blvd, Suite 2B Sacramento, CA 95816"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "(916) 399-3615"));
};

var Home = function Home(props) {
  var onNav = props.onNav;
  var lazy = '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "backdrop"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero ".concat(lazy)
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    id: "top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\"And the day came when the risk to remain tight as a bud was more painful than the risk it took to blossom.\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, "- Anais Nin"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "meet card-2",
    id: "meet"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "meetContent"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "profilePhoto card-1",
    src: "res/profile_.jpg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bio"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "bioTitle"
  }, "Meet Dr. Stephanie Smith"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "bioSubtitle"
  }, "Clinical Psychologist"), meetSteph))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "practiceAreas",
    id: "practice"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Practice Areas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areas"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1",
    onClick: function onClick() {
      return onNav({
        name: 'practice',
        scrollTo: 'moreEatingConcerns'
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaEatingConcerns ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Eating", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Concerns"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1",
    onClick: function onClick() {
      return onNav({
        name: 'practice',
        scrollTo: 'moreLifestyleChanges'
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaLifestyle ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Lifestyle", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Changes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1",
    onClick: function onClick() {
      return onNav({
        name: 'practice',
        scrollTo: 'moreLifeTransitions'
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaTransitions ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Life", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Transitions"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1",
    onClick: function onClick() {
      return onNav({
        name: 'practice',
        scrollTo: 'moreReleationshipChallenges'
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaRelationships ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Relationship", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Challenges"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1",
    onClick: function onClick() {
      return onNav({
        name: 'practice',
        scrollTo: 'moreMedicalProblems'
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaMedicalProblems ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Health", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Difficulties"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1",
    onClick: function onClick() {
      return onNav({
        name: 'practice',
        scrollTo: 'moreStressManagement'
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaStress ".concat(lazy)
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
    className: "contact card-2 ".concat(lazy),
    id: "contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Change begins today"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      fontSize: 23
    }
  }, "Request a consultation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 19,
      lineHeight: 1.9,
      marginTop: 40
    }
  }, "Call/Text: 916-399-3615", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Email: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    type: "email",
    href: "mailto:StephanieSmithPsyD@protonmail.com",
    target: "_blank"
  }, "StephanieSmithPsyD@protonmail.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.psychologytoday.com/profile/473076",
    target: "_blank"
  }, "Connect through Psychology Today")))));
};

var mail = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
}, "SEND")));
/** Home */

/** Pages */

var PracticeAreas = function PracticeAreas() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: "Practice Areas"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    shrink: true,
    body: practiceAreas
  }));
};

var Services = function Services() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: "Services & Fees"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    shrink: true,
    body: services
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    shrink: true,
    body: servicesReimbursment
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    shrink: true,
    body: servicesInsurace
  }));
};

var Classes = function Classes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: 'Classes'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    shrink: true,
    body: classes
  }));
};

var ClientDocuments = function ClientDocuments() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: 'Client Documents'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    shrink: true,
    body: clientDocuments
  }));
};

var Resources = function Resources() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: 'Resources'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    shrink: true,
    body: resources
  }));
};

var Fees = function Fees() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageTitle, {
    title: 'Fees'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card1, {
    shrink: true,
    body: fees
  }));
};
/** Pages contents */


var meetSteph = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome and thank you for visiting! This is a place to explore the possibility of change for a better tomorrow. There is no \u201Cone size fits all\u201D approach to our time together. I work collaboratively with my clients to create an environment of respect and compassion that can be applied to renew their lives. Therapy has the power to both soothe and transform. I use techniques of one-on-one therapy and classes to spark meaningful and lasting change. I am known by my clients as being down to earth, genuine, and relatable. I look forward to partnering together to build your healthier tomorrow.");
var practiceAreas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  id: "moreEatingConcerns"
}, "Eating Concerns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Individuals noticing mindless, stress, emotional, or binge eating behaviors are welcome to consider both individual and class-based therapies with me. My approach to these concerns recognizes the complex role eating can play as a mechanism of coping for individual, family, and culturally systemic issues. We work together to acknowledge the fullness of this role as well as it's history, while honoring the desire that may exist to change. Through our work we can begin to develop new and healthier coping strategies as a natural outcome of increased awareness and self-compassion. I tailor my approach to the needs and style of the individual with whom I am working."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  id: "moreLifestyleChanges"
}, "Lifestyle Changes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Most of us can relate to the running mental list of things we know we \"should\" be doing in order to be healthier. Maybe this is moving our bodies more, eating differently, improving sleep habits, or disconnecting from technology. Maybe it could be these things plus many more! While certainly excellent habits, looking at a list of personal wellness \"to dos\" can be overwhelming. In fact, we often avoid thinking about these healthy living items because it can feel hopeless. Unfortunately, often this means staying stuck in a rut of feeling unhealthy. Together, we can create a plan of small steps to work towards connecting behavior changes with your deepest values. Things that may have felt forced in the past can become things we are eager for. I will leverage my training in Lifestyle Medicine to help set manageable and research supported aims to produce real improvements in your health."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  id: "moreLifeTransitions"
}, "Phase of Life Issues/Life Transitions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Though the phrase, \"the only thing constant is change\" is one familiar to many of us, this often feels like little comfort during the turmoil of a significant transition. Changes in life circumstances can impact us on every level of our being and external life. Seeking therapy during these times can be both anchor and guide light. I will support you to process the loss of how things have been. When you are ready, we will set consciously developed goals for the phase of life that you find yourself in now. We will work together to identify healthy core components of who you are evolving to be, and center our attention to nurture this growth. There is no set timeline of how long an adjustment period lasts. I will help you to move into the next part of your life in healthful ways, as quickly as is reasonable, and in complete respect for your own pace."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  id: "moreRelationshipCallenges"
}, "Relationship Challenges"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Romantic, family, social, and occupational relationships can all be sources of significant pleasure and, consequently, significant pain. There are a multitude of reasons relationships can become troubled. Many of the roots of these reasons can be traced to communication clarity. While we cannot change other people, we can identify personal qualities in ourselves that we wish to change for the wellbeing of a current or future relationship. Working towards identifying these areas, creating mindful awareness around them, and making values-based changes can provide both personal benefits and improvements to the relationship. We can work together to identify and optimize these changes while prioritizing effective and clear communication as the cornerstone to improved relationships."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  id: "moreHealthDifficulties"
}, "Health Difficulties"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There is no doubt that our physical wellbeing impacts our psychological wellbeing and vice versa. Whether you are looking for support in improving your management of a medical problem, handling the stress around it, or believe there may be lifestyle changes that will reverse the condition, I would be happy to support this aspect of your health. I am a trained health psychologist and work regularly with both chronic and acute medical conditions. I have personal and professional experience with the impacts physical health can have not only on oneself, but also on those around us. I believe support can make a substantive difference in managing a health concern as well as the emotional and social impacts of this. I will work with you to accept those realities that are unchanging, as well as recognize opportunities for positive growth."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  id: "moreStressManagement"
}, "Stress Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "At times we can find ourselves overwhelmed. The reasons for feeling overwhelmed might seem clear, or they may be hard to understand. It can feel like being trapped in parts of your own life. Talking through your stressors with a professional can allow space around painful parts of your experience that could ease the pressure. There may also be alternative perspectives that you aren\u2019t able to see from being right in the thick of the stress, that may be visible from an outside perspective. Therapy can provide support to process your experiences and free you to be a more whole version of yourself; able to engage with the rest of your life and the people in it."));
var services = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  style: {
    textAlign: 'center'
  }
}, "What to Expect"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Telephone Consult"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "As our first contact for either individual therapy or classes I offer a complementary 15-minute phone consultation. This is an opportunity for us to connect about the issues that bring you into care, and to determine whether working together is the best fit for your needs. I can answer any questions that you may have about coming into care and set up your first appointment or class.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "15-min initial telephone consult\u2014 free")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Initial Appointment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "An initial individual therapy appointment is a 60-minute appointment. During this appointment I will review your complete intake form with you to ensure that I have an appropriate understanding of some of your history, what brings you into care, and your goals for our work together. I will answer any questions that you have to the best of my ability. We will also use this appointment to create some initial goals for care and to set up our mutual expectations for treatment.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "60-min initial individual appointment\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Return Appointments"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Return appointments are 50-minute appointments. During return appointments we will work together on your goals and I will support you through the process. We will regularly check in about the progress of care and make adjustments as needed to ensure that we are working effectively together.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "50-min return individual appointment\u2014 $150")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Classes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Classes are 90 minutes in length. Due to space needed, classes are held at a nearby location separate from the main therapy office. More information about class and class content can be found under the \"Classes\" tab. Though classes take place over 4 sessions, the full fee must be paid in advance of the first session. After this payment, no additional charges are incurred for the remainder of the classes unless an additional service is requested or provided.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "4-session (360-min) class series\u2014 $160")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "TeleMental Health"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "On occasion it may be indicated for us to engage in tele-health either over the phone or through video communication. These services are offered to individuals only after we have initially established in-person therapeutic relationship through at least one in-person appointment. Due to licensing requirements, I am unable to provide these services to anyone out-of-state or country at the time of service. There are a variety of platforms available for this service and, though convenient, it is important to be aware that most are not HIPAA compliant. Completing the Informed Consent form acknowledges your understanding of this and acceptance of the risk should we utilize this format of care.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "5 to 25 minutes\u2014 $75"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "26-50 minutes\u2014 $150")));
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
var classes = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Mood & Food"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Mood & Food is a class designed for individuals struggling with overeating, mindless eating, stress eating, emotional eating, shame around eating, or binge eating. The course is structured into 4 classes each lasting 90 minutes. The class centers on presented material, though questions and participation are welcome and encouraged. Class materials also include handouts and at-home practice exercises. During the course of the classes we will cover topics including:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "what emotional eating is"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "cultural implications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "environmental impacts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "set point theory"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "emotional vs physical hunger"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "binge eating cycle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "interpersonal dynamics around food"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "self-talk")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "behavior analysis & behavior change"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "mindful eating"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "loving limits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "self-compassion"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "managing difficult emotions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "habit formation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "stages of change"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "healthy eating guidelines"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "By the end of the class series participants will be able to recognize opportunities for, prepare for, and make positive changes in their relationships with themselves, food, and their environment."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActiveClasses, null));

var ActiveClasses = function ActiveClasses(props) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  var complete = function complete() {
    console.log('Order complete!');
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (ref.current) {
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '81000367279',
        iframeContainerId: 'eventbrite-widget-container-81000367279',
        iframeContainerHeight: 425,
        onOrderComplete: complete
      });
    }
  }, [ref]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: ref,
    id: "eventbrite-widget-container-81000367279"
  });
};

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
var clientDocuments = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The following forms are for your review. If we have scheduled an in-person appointment, carefully read each of the forms below. Please print, complete, and bring the first three forms to our first appointment. We will review them together. If you would like for your health information to be shared with another individual or group, or would like me to gather information from them, please print, complete, and bring the Release of Information form to your next appointment which identifies the person or entity with whom your information should be shared."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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
  var id = props.shrink ? 'shrink' : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcz9lODVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2VzbS9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LWludmFyaWFudC9kaXN0L3RpbnktaW52YXJpYW50LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzL2Nvcm5lcnBsYW50LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvZWF0aW5nY29uY2VybnMuanBnIiwid2VicGFjazovLy8uL3Jlcy9oZXJvLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbGlmZXN0eWxlLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbW9yZVJlc291cmNlcy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3BpbmVhcHBsZS5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3ByYWN0aWNlYXJlYXMuanBnIiwid2VicGFjazovLy8uL3Jlcy9yZWxhdGlvbnNoaXBzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3VjY3VsZW50bWF0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvdHJhbnNpdGlvbnMuanBnIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInBhZ2UiLCJkb2NrIiwiY2xvc2VEcmF3ZXIiLCJuYW1lIiwiaGlzdG9yeSIsInB1c2giLCJjdXJyZW50Iiwic2hvd0RyYXdlciIsInN0YXRlIiwic2Nyb2xsVG8iLCJzaG93SGFtYnVyZ2VyIiwiY3VycmVudExvY2F0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImN1cnJlbnRQYWdlIiwiY3JlYXRlSGlzdG9yeSIsImxpc3RlbiIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZW1wbGF0ZVN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmb250RmFtaWx5IiwiY29udGVudCIsImhhbmRsZU5hdiIsInRvZ2dsZURyYXdlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9keSIsImNsYXNzZXMiLCJjbiIsIm92ZXJsYXlDbGFzc2VzIiwib25EcmF3ZXJQcmFjdGljZUNsaWNrIiwib25OYXYiLCJvbkRyYXdlclNlcnZpY2VzQ2xpY2siLCJvbkRyYXdlckNvbnRhY3RDbGljayIsIm9uRHJhd2VyQ2xhc3Nlc0NsaWNrIiwib25EcmF3ZXJEb2N1bWVudHNDbGljayIsIm9uRHJhd2VyUmVzb3VyY2VzQ2xpY2siLCJoYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2siLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwidW5kZWZpbmVkIiwiYmVoYXZpb3IiLCJib2R5U3R5bGUiLCJuIiwicmVuZGVyRHJhd2VyIiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJpbmxpbmVTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsIm1lbnVTdHlsZSIsImN1cnNvciIsImFjdGl2ZSIsIm9wZW5EcmF3ZXIiLCJyZW5kZXJIYW1idXJnZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJGb290ZXIiLCJIb21lIiwibGF6eSIsIm1lZXRTdGVwaCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsIm1hcmdpblRvcCIsIm1haWwiLCJQcmFjdGljZUFyZWFzIiwicHJhY3RpY2VBcmVhcyIsIlNlcnZpY2VzIiwic2VydmljZXMiLCJzZXJ2aWNlc1JlaW1idXJzbWVudCIsInNlcnZpY2VzSW5zdXJhY2UiLCJDbGFzc2VzIiwiQ2xpZW50RG9jdW1lbnRzIiwiY2xpZW50RG9jdW1lbnRzIiwiUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwiRmVlcyIsImZlZXMiLCJmbGV4RmxvdyIsIkFjdGl2ZUNsYXNzZXMiLCJyZWYiLCJ1c2VSZWYiLCJjb21wbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJFQldpZGdldHMiLCJjcmVhdGVXaWRnZXQiLCJ3aWRnZXRUeXBlIiwiZXZlbnRJZCIsImlmcmFtZUNvbnRhaW5lcklkIiwiaWZyYW1lQ29udGFpbmVySGVpZ2h0Iiwib25PcmRlckNvbXBsZXRlIiwiQ2FyZDEiLCJ0aXRsZSIsImlkIiwic2hyaW5rIiwiYm9keSIsIlBhZ2VUaXRsZSIsIkRyYXdlciIsImhhbmRsZVByYWN0aWNlQ2xpY2siLCJoYW5kbGVTZXJ2aWNlc0NsaWNrIiwiaGFuZGxlQ2xhc3Nlc0NsaWNrIiwiaGFuZGxlQ29udGFjdENsaWNrIiwiaGFuZGxlRG9jdW1lbnRzQ2xpY2siLCJoYW5kbGVSZXNvdXJjZXNDbGljayIsImJvcmRlckJvdHRvbSIsInBhZGRpbmciLCJib3JkZXJUb3AiLCJCdXR0b24iLCJ0byIsInRleHQiLCJvbkNsaWNrIiwiUmVhY3RET00iLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBLGNBQWMsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRTVFLDRDQUE0QyxRQUFTOztB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QTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxH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Qiw0Q0FBSyxDQUFDQyxTQUFsQyxFOzs7Ozs7Ozs7Ozs7QUNwbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBa0csZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQnBHLDRDQUFLLENBQUNxRyxhQUFOLENBQW9Cckksd0NBQXBCLENBQWhCLEVBQTBDK0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9oZXJvLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvZWF0aW5nY29uY2VybnMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9saWZlc3R5bGUuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9tZWRpY2FscHJvYmxlbXMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9yZWxhdGlvbnNoaXBzLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX181X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3RyYW5zaXRpb25zLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX183X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvc3VjY3VsZW50QnVyc3QuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzhfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9waW5lYXBwbGUuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzlfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9tb3JlUmVzb3VyY2VzLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3ByYWN0aWNlYXJlYXMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzExX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvY29ybmVycGxhbnQuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzEyX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvc3VjY3VsZW50bWF0LmpwZ1wiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgY29sb3I6ICMzZjRjNGU7XFxufVxcblxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdk1lbnUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLm5hdk1lbnUge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICB9XFxufVxcblxcbi5iYWNrZHJvcCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDA7XFxufVxcblxcbi5oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uaGVyby1jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODV2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8tY29udGVudCBibG9ja3F1b3RlIHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQgaDEge1xcbiAgLyogY29sb3I6ICNGRkZGRkY7ICovXFxufVxcblxcbmJsb2NrcXVvdGUgZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIC8qIGNvbG9yOiAjRkZGRkZGOyAqL1xcbn1cXG5cXG4ubWVldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUFFNTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5tZWV0Q29udGVudCB7XFxuICBtYXgtd2lkdGg6IDk3NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2ZpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA1MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9maWxlUGhvdG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDI3NXB4O1xcbiAgbWF4LWhlaWdodDogMzc1cHg7XFxuICBtaW4td2lkdGg6IDA7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5iaW8ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmJpbyAuYmlvU3VidGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYmlvIHAge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgLyogcGFkZGluZzogMHB4IDMwcHg7ICovXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAubWVldENvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJpbyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAuYmlvLFxcbiAgLnByb2ZpbGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmNvbnRhY3Q+cCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgI3NocmluayB7XFxuICAgIG1hcmdpbjogNTBweCAxMHB4O1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbi5wcmFjdGljZUFyZWFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXG59XFxuXFxuXFxuXFxuLnByYWN0aWNlQXJlYXMgLmFyZWFzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByYWN0aWNlQXJlYXMgLmFyZWFzPi5hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDAgMjkwcHg7XFxuICBtYXgtd2lkdGg6IDI5MHB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAwIDMwcHggMzBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJhY3RpY2VBcmVhcyAuYXJlYXM+LmFyZWE6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFyZWFJbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5hcmVhRWF0aW5nQ29uY2VybnMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxNDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b20gLTUwcHg7XFxufVxcblxcbi5hcmVhTGlmZXN0eWxlIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b20gLTY1cHg7XFxufVxcblxcbi8qIFxcbi5hcmVhTGlmZXN0eWxlLmxhenkge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9yZXMvbGlmZXN0eWxlLXBsYWNlaG9sZGVyLmpwZycpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtNjVweDtcXG59ICovXFxuXFxuLmFyZWFNZWRpY2FsUHJvYmxlbXMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxNDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG59XFxuXFxuLyogLmFyZWFNZWRpY2FsUHJvYmxlbXMubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3Jlcy9tZWRpY2FscHJvYmxlbXMtcGxhY2Vob2xkZXIuanBnJykgbm8tcmVwZWF0O1xcbn0gKi9cXG5cXG4uYXJlYVJlbGF0aW9uc2hpcHMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtODBweDtcXG59XFxuXFxuLyogXFxuLmFyZWFSZWxhdGlvbnNoaXBzai5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vcmVzL3JlbGF0aW9uc2hpcHMuanBnJykgbm8tcmVwZWF0O1xcbn0gKi9cXG5cXG4uYXJlYVN0cmVzcyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC04MHB4O1xcbn1cXG5cXG4vKiAuYXJlYVN0cmVzcy5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vcmVzL3N0cmVzc21hbmFnZW1lbnQtcGxhY2Vob2xkZXIuanBnJykgbm8tcmVwZWF0O1xcbn0gKi9cXG5cXG4uYXJlYVRyYW5zaXRpb25zIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAtMjBweDtcXG59XFxuXFxuLyogLmFyZWFUcmFuc2l0aW9ucyAubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3Jlcy90cmFuc2l0aW9ucy1wbGFjZWhvbGRlci5qcGcnKSBuby1yZXBlYXQ7XFxufSAqL1xcblxcbi5hcmVhVGV4dCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgbWF4LWhlaWdodDogMTIwcHg7XFxufVxcblxcbi5hcmVhVGV4dCBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4uYXJlYU92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbi5zZXJ2aWNlcyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUVDMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZXJ2aWNlc0Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAuc2VydmljZXNEZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNlcnZpY2VzSW1hZ2Uge1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuaGVyby1jb250ZW50IGJsb2NrcXVvdGUgaDEge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxuXFxuICAuaGVyby1jb250ZW50IGJsb2NrcXVvdGUgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTcxLCAyMDgsIDIzMCwgMSk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTAwbXMgZWFzZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDIwMiwgMjI2LCAyNDApO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcblxcbi5yZWFkTW9yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbGFzc2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxufVxcblxcblxcbi5jb250YWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jb250YWN0IGZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuXFxuLmdyb3VwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZjRjNGU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjM2Y0YzRlO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBMQUJFTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5sYWJlbCB7XFxuICBjb2xvcjogIzNmNGM0ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGxlZnQ6IDVweDtcXG4gIHRvcDogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbmlucHV0OmZvY3VzfmxhYmVsLFxcbmlucHV0OnZhbGlkfmxhYmVsIHtcXG4gIHRvcDogLTIwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXN+bGFiZWwsXFxudGV4dGFyZWE6dmFsaWR+bGFiZWwge1xcbiAgdG9wOiAtMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4vKiBUT0RPIGxlYXJuIHRoaXMgKi9cXG5cXG4vKiBCT1RUT00gQkFSUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYmFyOmJlZm9yZSxcXG4uYmFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB3aWR0aDogMDtcXG4gIGJvdHRvbTogMXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogIzNmNGM0ZTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxufVxcblxcbi5iYXI6YmVmb3JlIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLmJhcjphZnRlciB7XFxuICByaWdodDogNTAlO1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG5pbnB1dDpmb2N1c34uYmFyOmJlZm9yZSxcXG5pbnB1dDpmb2N1c34uYmFyOmFmdGVyIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbnRleHRhcmVhOmZvY3Vzfi5iYXI6YmVmb3JlLFxcbnRleHRhcmVhOmZvY3Vzfi5iYXI6YWZ0ZXIge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogSElHSExJR0hURVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oaWdobGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogMTAwcHg7XFxuICB0b3A6IDI1JTtcXG4gIGxlZnQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxuaW5wdXQ6Zm9jdXN+LmhpZ2hsaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxuICAtbW96LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG50ZXh0YXJlYTpmb2N1c34uaGlnaGxpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxufVxcblxcbi8qIEFOSU1BVElPTlMgPT09PT09PT09PT09PT09PSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZDogIzNmNGM0ZTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUFFNTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbiNhZGRyZXNzOmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXDAwN0MnO1xcbiAgcGFkZGluZzogMCAxNXB4XFxufVxcblxcbiNhZGRyZXNzOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMDA3Qyc7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3NnB4KSB7XFxuXFxuICAuZm9vdGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjYWRkcmVzczpiZWZvcmUge1xcbiAgICBjb250ZW50OiBub25lO1xcbiAgICBwYWRkaW5nOiAwXFxuICB9XFxuXFxuICAjYWRkcmVzczphZnRlciB7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcblxcbi5saW5rOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBib3R0b206IC0ycHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogIzNmNGM0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNpdGlvbjogLjI1cyBsaW5lYXI7XFxufVxcblxcbi5saW5rOmhvdmVyOmJlZm9yZSxcXG4ubGluazpmb2N1czpiZWZvcmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4vKiAubmF2TWVudTpiZWZvcmUge1xcbiAgYm90dG9tOiAtNXB4ICFpbXBvcnRhbnQ7XFxufSAqL1xcblxcbi5jb250YWN0IHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gKyBcIik7XFxufVxcblxcbi8qIC5jb250YWN0Lmxhenkge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybCgnLi4vcmVzL3N1Y2N1bGVudEJ1cnN0LXBsYWNlaG9sZGVyLmpwZycpO1xcbn0gKi9cXG5cXG4ubW9yZUNsYXNzZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyArIFwiKTtcXG59XFxuXFxuLyogXFxuLm1vcmVDbGFzc2VzLmxhenkge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybCgnLi4vcmVzL3BpbmVhcHBsZS1wbGFjZWhvbGRlci5qcGcnKTtcXG59ICovXFxuXFxuLm1vcmVSZXNvdXJjZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyArIFwiKTtcXG59XFxuXFxuLyogXFxuLm1vcmVSZXNvdXJjZXMubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKCcuLi9yZXMvbW9yZVJlc291cmNlcy1wbGFjZWhvbGRlci5qcGcnKTtcXG59ICovXFxuXFxuLm1vcmVQcmFjdGljZSB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xMF9fXyArIFwiKTtcXG59XFxuXFxuLyogLm1vcmVQcmFjdGljZS5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoJy4uL3Jlcy9wcmFjdGljZWFyZWFzLXBsYWNlaG9sZGVyLmpwZycpO1xcbn0gKi9cXG5cXG4ubW9yZVNlcnZpY2VzIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzExX19fICsgXCIpO1xcbn1cXG5cXG4ubW9yZVNlcnZpY2VzLmxhenkge1xcbiAgLyogYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybCgnLi4vcmVzL2Nvcm5lcnBsYW50LXBsYWNlaG9sZGVyLmpwZycpOyAqL1xcbn1cXG5cXG4ubW9yZURvY3VtZW50cyB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xMl9fXyArIFwiKTtcXG5cXG59XFxuXFxuLyogLm1vcmVEb2N1bWVudHMubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKCcuLi9yZXMvc3VjY3VsZW50bWF0LXBsYWNlaG9sZGVyLmpwZycpO1xcblxcbn0gKi9cXG5cXG4uc2lnbmF0dXJlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4ubmF2TWVudTpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLnBhZ2UtdGl0bGUge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG4ucGFnZS10aXRsZSAudGl0bGUge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQ6ICNGN0Y3Rjc7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW46IDUwcHggMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxufVxcblxcbi5jYXJkLWJvZHkge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjIyMjI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jYXJkLTEge1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcbn1cXG5cXG4uY2FyZC0yIHtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmNhcmQtMyB7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmNhcmQtNCB7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbn1cXG5cXG4uY2FyZC01IHtcXG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMCwgMCwgMCwgMC4zMCksIDAgMTVweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5kcmF3ZXItb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLmRyYXdlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTU1cHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0OyAqL1xcbiAgdG9wOiA1MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4uZHJhd2VyIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVBRTU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBib3gtc2hhZG93OiAxMXB4IDEwcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAxMHB4IDAgNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcblxcbi5kcmF3ZXIrLmRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MwQzNDNjtcXG59XFxuXFxuLmRyYXdlci1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5oZWFkZXItbmF2LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5kcmF3ZXItaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZHJhd2VyLWl0ZW0+ZGl2IHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmhlYWRlci1oYW1idXJnZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlcjpob3ZlciAqIHtcXG4gIGNvbG9yOiAjODc5MDkyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiAubW9yZVNlcnZpY2VzIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbjogdW5zZXQ7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbn0gKi9cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHJlc29sdmVQYXRobmFtZSBmcm9tICdyZXNvbHZlLXBhdGhuYW1lJztcbmltcG9ydCB2YWx1ZUVxdWFsIGZyb20gJ3ZhbHVlLWVxdWFsJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ3RpbnktaW52YXJpYW50JztcblxuZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogJy8nICsgcGF0aDtcbn1cbmZ1bmN0aW9uIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoLnN1YnN0cigxKSA6IHBhdGg7XG59XG5mdW5jdGlvbiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcHJlZml4ICsgJyhcXFxcL3xcXFxcP3wjfCQpJywgJ2knKS50ZXN0KHBhdGgpO1xufVxuZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkgPyBwYXRoLnN1YnN0cihwcmVmaXgubGVuZ3RoKSA6IHBhdGg7XG59XG5mdW5jdGlvbiBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufVxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gcGF0aCB8fCAnLyc7XG4gIHZhciBzZWFyY2ggPSAnJztcbiAgdmFyIGhhc2ggPSAnJztcbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcblxuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHIoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuXG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoID09PSAnPycgPyAnJyA6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoID09PSAnIycgPyAnJyA6IGhhc2hcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgdmFyIHBhdGggPSBwYXRobmFtZSB8fCAnLyc7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSAnPycpIHBhdGggKz0gc2VhcmNoLmNoYXJBdCgwKSA9PT0gJz8nID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG4gIGlmIChoYXNoICYmIGhhc2ggIT09ICcjJykgcGF0aCArPSBoYXNoLmNoYXJBdCgwKSA9PT0gJyMnID8gaGFzaCA6IFwiI1wiICsgaGFzaDtcbiAgcmV0dXJuIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBrZXksIGN1cnJlbnRMb2NhdGlvbikge1xuICB2YXIgbG9jYXRpb247XG5cbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgIC8vIFR3by1hcmcgZm9ybTogcHVzaChwYXRoLCBzdGF0ZSlcbiAgICBsb2NhdGlvbiA9IHBhcnNlUGF0aChwYXRoKTtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9IGVsc2Uge1xuICAgIC8vIE9uZS1hcmcgZm9ybTogcHVzaChsb2NhdGlvbilcbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBwYXRoKTtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24ucGF0aG5hbWUgPSAnJztcblxuICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2guY2hhckF0KDApICE9PSAnPycpIGxvY2F0aW9uLnNlYXJjaCA9ICc/JyArIGxvY2F0aW9uLnNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uc2VhcmNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBsb2NhdGlvbi5oYXNoID0gJyMnICsgbG9jYXRpb24uaGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uLnN0YXRlID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICB0cnkge1xuICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gZGVjb2RlVVJJKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgVVJJRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBVUklFcnJvcignUGF0aG5hbWUgXCInICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnXCIgY291bGQgbm90IGJlIGRlY29kZWQuICcgKyAnVGhpcyBpcyBsaWtlbHkgY2F1c2VkIGJ5IGFuIGludmFsaWQgcGVyY2VudC1lbmNvZGluZy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5KSBsb2NhdGlvbi5rZXkgPSBrZXk7XG5cbiAgaWYgKGN1cnJlbnRMb2NhdGlvbikge1xuICAgIC8vIFJlc29sdmUgaW5jb21wbGV0ZS9yZWxhdGl2ZSBwYXRobmFtZSByZWxhdGl2ZSB0byBjdXJyZW50IGxvY2F0aW9uLlxuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gY3VycmVudExvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gcmVzb2x2ZVBhdGhuYW1lKGxvY2F0aW9uLnBhdGhuYW1lLCBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIHByaW9yIGxvY2F0aW9uIGFuZCBwYXRobmFtZSBpcyBlbXB0eSwgc2V0IGl0IHRvIC9cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9ICcvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9jYXRpb247XG59XG5mdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggPT09IGIuaGFzaCAmJiBhLmtleSA9PT0gYi5rZXkgJiYgdmFsdWVFcXVhbChhLnN0YXRlLCBiLnN0YXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKSB7XG4gIHZhciBwcm9tcHQgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIHNldFByb21wdChuZXh0UHJvbXB0KSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwcm9tcHQgPT0gbnVsbCwgJ0EgaGlzdG9yeSBzdXBwb3J0cyBvbmx5IG9uZSBwcm9tcHQgYXQgYSB0aW1lJykgOiB2b2lkIDA7XG4gICAgcHJvbXB0ID0gbmV4dFByb21wdDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb21wdCA9PT0gbmV4dFByb21wdCkgcHJvbXB0ID0gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBjYWxsYmFjaykge1xuICAgIC8vIFRPRE86IElmIGFub3RoZXIgdHJhbnNpdGlvbiBzdGFydHMgd2hpbGUgd2UncmUgc3RpbGwgY29uZmlybWluZ1xuICAgIC8vIHRoZSBwcmV2aW91cyBvbmUsIHdlIG1heSBlbmQgdXAgaW4gYSB3ZWlyZCBzdGF0ZS4gRmlndXJlIG91dCB0aGVcbiAgICAvLyBiZXN0IHdheSB0byBoYW5kbGUgdGhpcy5cbiAgICBpZiAocHJvbXB0ICE9IG51bGwpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0eXBlb2YgcHJvbXB0ID09PSAnZnVuY3Rpb24nID8gcHJvbXB0KGxvY2F0aW9uLCBhY3Rpb24pIDogcHJvbXB0O1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVc2VyQ29uZmlybWF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihyZXN1bHQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnQSBoaXN0b3J5IG5lZWRzIGEgZ2V0VXNlckNvbmZpcm1hdGlvbiBmdW5jdGlvbiBpbiBvcmRlciB0byB1c2UgYSBwcm9tcHQgbWVzc2FnZScpIDogdm9pZCAwO1xuICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gZmFsc2UgZnJvbSBhIHRyYW5zaXRpb24gaG9vayB0byBjYW5jZWwgdGhlIHRyYW5zaXRpb24uXG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgZnVuY3Rpb24gYXBwZW5kTGlzdGVuZXIoZm4pIHtcbiAgICB2YXIgaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICBpZiAoaXNBY3RpdmUpIGZuLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnMoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldFByb21wdDogc2V0UHJvbXB0LFxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG86IGNvbmZpcm1UcmFuc2l0aW9uVG8sXG4gICAgYXBwZW5kTGlzdGVuZXI6IGFwcGVuZExpc3RlbmVyLFxuICAgIG5vdGlmeUxpc3RlbmVyczogbm90aWZ5TGlzdGVuZXJzXG4gIH07XG59XG5cbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuZnVuY3Rpb24gZ2V0Q29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hbGVydFxufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGlzIHN1cHBvcnRlZC4gVGFrZW4gZnJvbSBNb2Rlcm5penIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYnJvd3NlciBmaXJlcyBwb3BzdGF0ZSBvbiBoYXNoIGNoYW5nZS5cbiAqIElFMTAgYW5kIElFMTEgZG8gbm90LlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPT09IC0xO1xufVxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPT09IC0xO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSBnaXZlbiBwb3BzdGF0ZSBldmVudCBpcyBhbiBleHRyYW5lb3VzIFdlYktpdCBldmVudC5cbiAqIEFjY291bnRzIGZvciB0aGUgZmFjdCB0aGF0IENocm9tZSBvbiBpT1MgZmlyZXMgcmVhbCBwb3BzdGF0ZSBldmVudHNcbiAqIGNvbnRhaW5pbmcgdW5kZWZpbmVkIHN0YXRlIHdoZW4gcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uLlxuICovXG5cbmZ1bmN0aW9uIGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQoZXZlbnQpIHtcbiAgZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0NyaU9TJykgPT09IC0xO1xufVxuXG52YXIgUG9wU3RhdGVFdmVudCA9ICdwb3BzdGF0ZSc7XG52YXIgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xuXG5mdW5jdGlvbiBnZXRIaXN0b3J5U3RhdGUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSUUgMTEgc29tZXRpbWVzIHRocm93cyB3aGVuIGFjY2Vzc2luZyB3aW5kb3cuaGlzdG9yeS5zdGF0ZVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9oaXN0b3J5L3B1bGwvMjg5XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG4vKipcbiAqIENyZWF0ZXMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGluY2x1ZGluZ1xuICogcHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShwcm9wcykge1xuICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHByb3BzID0ge307XG4gIH1cblxuICAhY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpO1xuICB2YXIgX3Byb3BzID0gcHJvcHMsXG4gICAgICBfcHJvcHMkZm9yY2VSZWZyZXNoID0gX3Byb3BzLmZvcmNlUmVmcmVzaCxcbiAgICAgIGZvcmNlUmVmcmVzaCA9IF9wcm9wcyRmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZvcmNlUmVmcmVzaCxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdm9pZCAwID8gZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGtleUxlbmd0aCA9IF9wcm9wcy5rZXlMZW5ndGgsXG4gICAgICBrZXlMZW5ndGggPSBfcHJvcHMka2V5TGVuZ3RoID09PSB2b2lkIDAgPyA2IDogX3Byb3BzJGtleUxlbmd0aDtcbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyBzdHJpcFRyYWlsaW5nU2xhc2goYWRkTGVhZGluZ1NsYXNoKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcblxuICBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICB2YXIgX3JlZiA9IGhpc3RvcnlTdGF0ZSB8fCB7fSxcbiAgICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcblxuICAgIHZhciBfd2luZG93JGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLFxuICAgICAgICBwYXRobmFtZSA9IF93aW5kb3ckbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaCA9IF93aW5kb3ckbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICBoYXNoID0gX3dpbmRvdyRsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIWJhc2VuYW1lIHx8IGhhc0Jhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJykgOiB2b2lkIDA7XG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gc3RyaXBCYXNlbmFtZShwYXRoLCBiYXNlbmFtZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfVxuXG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gZ2xvYmFsSGlzdG9yeS5sZW5ndGg7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcFN0YXRlKGV2ZW50KSB7XG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cbiAgICBpZiAoaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkpIHJldHVybjtcbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH1cblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG4gICAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247IC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG4gICAgaWYgKHRvSW5kZXggPT09IC0xKSB0b0luZGV4ID0gMDtcbiAgICB2YXIgZnJvbUluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGZyb21Mb2NhdGlvbi5rZXkpO1xuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07IC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGJhc2VuYW1lICsgY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byBwdXNoIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIHZhciBuZXh0S2V5cyA9IGFsbEtleXMuc2xpY2UoMCwgcHJldkluZGV4ID09PSAtMSA/IDAgOiBwcmV2SW5kZXggKyAxKTtcbiAgICAgICAgICBuZXh0S2V5cy5wdXNoKGxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgYWxsS2V5cyA9IG5leHRLZXlzO1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKSA6IHZvaWQgMDtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgICAgfSwgbnVsbCwgaHJlZik7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmcmVzaCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpIDogdm9pZCAwO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSAmJiBkZWx0YSA9PT0gMSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxudmFyIEhhc2hDaGFuZ2VFdmVudCQxID0gJ2hhc2hjaGFuZ2UnO1xudmFyIEhhc2hQYXRoQ29kZXJzID0ge1xuICBoYXNoYmFuZzoge1xuICAgIGVuY29kZVBhdGg6IGZ1bmN0aW9uIGVuY29kZVBhdGgocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnIScgPyBwYXRoIDogJyEvJyArIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpO1xuICAgIH0sXG4gICAgZGVjb2RlUGF0aDogZnVuY3Rpb24gZGVjb2RlUGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICchJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbiAgICB9XG4gIH0sXG4gIG5vc2xhc2g6IHtcbiAgICBlbmNvZGVQYXRoOiBzdHJpcExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBhZGRMZWFkaW5nU2xhc2hcbiAgfSxcbiAgc2xhc2g6IHtcbiAgICBlbmNvZGVQYXRoOiBhZGRMZWFkaW5nU2xhc2gsXG4gICAgZGVjb2RlUGF0aDogYWRkTGVhZGluZ1NsYXNoXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldEhhc2hQYXRoKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBoYXNoSW5kZXggPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgcmV0dXJuIGhhc2hJbmRleCA9PT0gLTEgPyAnJyA6IGhyZWYuc3Vic3RyaW5nKGhhc2hJbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBwdXNoSGFzaFBhdGgocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHZhciBoYXNoSW5kZXggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJyk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGhhc2hJbmRleCA+PSAwID8gaGFzaEluZGV4IDogMCkgKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkocHJvcHMpIHtcbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgIWNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ0hhc2ggaGlzdG9yeSBuZWVkcyBhIERPTScpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhbkdvV2l0aG91dFJlbG9hZCA9IHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCk7XG4gIHZhciBfcHJvcHMgPSBwcm9wcyxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdm9pZCAwID8gZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGhhc2hUeXBlID0gX3Byb3BzLmhhc2hUeXBlLFxuICAgICAgaGFzaFR5cGUgPSBfcHJvcHMkaGFzaFR5cGUgPT09IHZvaWQgMCA/ICdzbGFzaCcgOiBfcHJvcHMkaGFzaFR5cGU7XG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gc3RyaXBUcmFpbGluZ1NsYXNoKGFkZExlYWRpbmdTbGFzaChwcm9wcy5iYXNlbmFtZSkpIDogJyc7XG4gIHZhciBfSGFzaFBhdGhDb2RlcnMkaGFzaFQgPSBIYXNoUGF0aENvZGVyc1toYXNoVHlwZV0sXG4gICAgICBlbmNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmVuY29kZVBhdGgsXG4gICAgICBkZWNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmRlY29kZVBhdGg7XG5cbiAgZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGggPSBkZWNvZGVQYXRoKGdldEhhc2hQYXRoKCkpO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIWJhc2VuYW1lIHx8IGhhc0Jhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJykgOiB2b2lkIDA7XG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gc3RyaXBCYXNlbmFtZShwYXRoLCBiYXNlbmFtZSk7XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKHBhdGgpO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICB2YXIgaWdub3JlUGF0aCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChwYXRoKTtcblxuICAgIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkge1xuICAgICAgLy8gRW5zdXJlIHdlIGFsd2F5cyBoYXZlIGEgcHJvcGVybHktZW5jb2RlZCBoYXNoLlxuICAgICAgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oKTtcbiAgICAgIHZhciBwcmV2TG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xuICAgICAgaWYgKCFmb3JjZU5leHRQb3AgJiYgbG9jYXRpb25zQXJlRXF1YWwocHJldkxvY2F0aW9uLCBsb2NhdGlvbikpIHJldHVybjsgLy8gQSBoYXNoY2hhbmdlIGRvZXNuJ3QgYWx3YXlzID09IGxvY2F0aW9uIGNoYW5nZS5cblxuICAgICAgaWYgKGlnbm9yZVBhdGggPT09IGNyZWF0ZVBhdGgobG9jYXRpb24pKSByZXR1cm47IC8vIElnbm9yZSB0aGlzIGNoYW5nZTsgd2UgYWxyZWFkeSBzZXRTdGF0ZSBpbiBwdXNoL3JlcGxhY2UuXG5cbiAgICAgIGlnbm9yZVBhdGggPSBudWxsO1xuICAgICAgaGFuZGxlUG9wKGxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjsgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBwYXRocyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBwYXRocyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKHRvTG9jYXRpb24pKTtcbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuICAgIHZhciBmcm9tSW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKGZyb21Mb2NhdGlvbikpO1xuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9IC8vIEVuc3VyZSB0aGUgaGFzaCBpcyBlbmNvZGVkIHByb3Blcmx5IGJlZm9yZSBkb2luZyBhbnl0aGluZyBlbHNlLlxuXG5cbiAgdmFyIHBhdGggPSBnZXRIYXNoUGF0aCgpO1xuICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuICBpZiAocGF0aCAhPT0gZW5jb2RlZFBhdGgpIHJlcGxhY2VIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICB2YXIgYWxsUGF0aHMgPSBbY3JlYXRlUGF0aChpbml0aWFsTG9jYXRpb24pXTsgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gJyMnICsgZW5jb2RlUGF0aChiYXNlbmFtZSArIGNyZWF0ZVBhdGgobG9jYXRpb24pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIHBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBQVVNILCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICBwdXNoSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoY3JlYXRlUGF0aChoaXN0b3J5LmxvY2F0aW9uKSk7XG4gICAgICAgIHZhciBuZXh0UGF0aHMgPSBhbGxQYXRocy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuICAgICAgICBuZXh0UGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgYWxsUGF0aHMgPSBuZXh0UGF0aHM7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCBQVVNIIHRoZSBzYW1lIHBhdGg7IGEgbmV3IGVudHJ5IHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBoaXN0b3J5IHN0YWNrJykgOiB2b2lkIDA7XG4gICAgICAgIHNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBwYXRoID0gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gICAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKGJhc2VuYW1lICsgcGF0aCk7XG4gICAgICB2YXIgaGFzaENoYW5nZWQgPSBnZXRIYXNoUGF0aCgpICE9PSBlbmNvZGVkUGF0aDtcblxuICAgICAgaWYgKGhhc2hDaGFuZ2VkKSB7XG4gICAgICAgIC8vIFdlIGNhbm5vdCB0ZWxsIGlmIGEgaGFzaGNoYW5nZSB3YXMgY2F1c2VkIGJ5IGEgUkVQTEFDRSwgc28gd2UnZFxuICAgICAgICAvLyByYXRoZXIgc2V0U3RhdGUgaGVyZSBhbmQgaWdub3JlIHRoZSBoYXNoY2hhbmdlLiBUaGUgY2F2ZWF0IGhlcmVcbiAgICAgICAgLy8gaXMgdGhhdCBvdGhlciBoYXNoIGhpc3RvcmllcyBpbiB0aGUgcGFnZSB3aWxsIGNvbnNpZGVyIGl0IGEgUE9QLlxuICAgICAgICBpZ25vcmVQYXRoID0gcGF0aDtcbiAgICAgICAgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZJbmRleCA9IGFsbFBhdGhzLmluZGV4T2YoY3JlYXRlUGF0aChoaXN0b3J5LmxvY2F0aW9uKSk7XG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsUGF0aHNbcHJldkluZGV4XSA9IHBhdGg7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoY2FuR29XaXRob3V0UmVsb2FkLCAnSGFzaCBoaXN0b3J5IGdvKG4pIGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQgaW4gdGhpcyBicm93c2VyJykgOiB2b2lkIDA7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gY2hlY2tET01MaXN0ZW5lcnMoZGVsdGEpIHtcbiAgICBsaXN0ZW5lckNvdW50ICs9IGRlbHRhO1xuXG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEgJiYgZGVsdGEgPT09IDEpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCQxLCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCQxLCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gYmxvY2socHJvbXB0KSB7XG4gICAgaWYgKHByb21wdCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9tcHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wKG4sIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIGxvd2VyQm91bmQpLCB1cHBlckJvdW5kKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgc3RvcmVzIGxvY2F0aW9ucyBpbiBtZW1vcnkuXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KHByb3BzKSB7XG4gIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcHMgPSB7fTtcbiAgfVxuXG4gIHZhciBfcHJvcHMgPSBwcm9wcyxcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIF9wcm9wcyRpbml0aWFsRW50cmllcyA9IF9wcm9wcy5pbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxFbnRyaWVzID0gX3Byb3BzJGluaXRpYWxFbnRyaWVzID09PSB2b2lkIDAgPyBbJy8nXSA6IF9wcm9wcyRpbml0aWFsRW50cmllcyxcbiAgICAgIF9wcm9wcyRpbml0aWFsSW5kZXggPSBfcHJvcHMuaW5pdGlhbEluZGV4LFxuICAgICAgaW5pdGlhbEluZGV4ID0gX3Byb3BzJGluaXRpYWxJbmRleCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRpbml0aWFsSW5kZXgsXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gX3Byb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHZvaWQgMCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH1cblxuICB2YXIgaW5kZXggPSBjbGFtcChpbml0aWFsSW5kZXgsIDAsIGluaXRpYWxFbnRyaWVzLmxlbmd0aCAtIDEpO1xuICB2YXIgZW50cmllcyA9IGluaXRpYWxFbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJyA/IGNyZWF0ZUxvY2F0aW9uKGVudHJ5LCB1bmRlZmluZWQsIGNyZWF0ZUtleSgpKSA6IGNyZWF0ZUxvY2F0aW9uKGVudHJ5LCB1bmRlZmluZWQsIGVudHJ5LmtleSB8fCBjcmVhdGVLZXkoKSk7XG4gIH0pOyAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgdmFyIGNyZWF0ZUhyZWYgPSBjcmVhdGVQYXRoO1xuXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgcHJldkluZGV4ID0gaGlzdG9yeS5pbmRleDtcbiAgICAgIHZhciBuZXh0SW5kZXggPSBwcmV2SW5kZXggKyAxO1xuICAgICAgdmFyIG5leHRFbnRyaWVzID0gaGlzdG9yeS5lbnRyaWVzLnNsaWNlKDApO1xuXG4gICAgICBpZiAobmV4dEVudHJpZXMubGVuZ3RoID4gbmV4dEluZGV4KSB7XG4gICAgICAgIG5leHRFbnRyaWVzLnNwbGljZShuZXh0SW5kZXgsIG5leHRFbnRyaWVzLmxlbmd0aCAtIG5leHRJbmRleCwgbG9jYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dEVudHJpZXMucHVzaChsb2NhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgaW5kZXg6IG5leHRJbmRleCxcbiAgICAgICAgZW50cmllczogbmV4dEVudHJpZXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIGhpc3RvcnkuZW50cmllc1toaXN0b3J5LmluZGV4XSA9IGxvY2F0aW9uO1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gY2xhbXAoaGlzdG9yeS5pbmRleCArIG4sIDAsIGhpc3RvcnkuZW50cmllcy5sZW5ndGggLSAxKTtcbiAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG4gICAgdmFyIGxvY2F0aW9uID0gaGlzdG9yeS5lbnRyaWVzW25leHRJbmRleF07XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChvaykge1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgIGluZGV4OiBuZXh0SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNaW1pYyB0aGUgYmVoYXZpb3Igb2YgRE9NIGhpc3RvcmllcyBieVxuICAgICAgICAvLyBjYXVzaW5nIGEgcmVuZGVyIGFmdGVyIGEgY2FuY2VsbGVkIFBPUC5cbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5HbyhuKSB7XG4gICAgdmFyIG5leHRJbmRleCA9IGhpc3RvcnkuaW5kZXggKyBuO1xuICAgIHJldHVybiBuZXh0SW5kZXggPj0gMCAmJiBuZXh0SW5kZXggPCBoaXN0b3J5LmVudHJpZXMubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gYmxvY2socHJvbXB0KSB7XG4gICAgaWYgKHByb21wdCA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9tcHQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBlbnRyaWVzLmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBlbnRyaWVzW2luZGV4XSxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgZW50cmllczogZW50cmllcyxcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgY2FuR286IGNhbkdvLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVMb2NhdGlvbiwgbG9jYXRpb25zQXJlRXF1YWwsIHBhcnNlUGF0aCwgY3JlYXRlUGF0aCB9O1xuIiwiZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRobmFtZSkge1xuICByZXR1cm4gcGF0aG5hbWUuY2hhckF0KDApID09PSAnLyc7XG59XG5cbi8vIEFib3V0IDEuNXggZmFzdGVyIHRoYW4gdGhlIHR3by1hcmcgdmVyc2lvbiBvZiBBcnJheSNzcGxpY2UoKVxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCwgayA9IGkgKyAxLCBuID0gbGlzdC5sZW5ndGg7IGsgPCBuOyBpICs9IDEsIGsgKz0gMSkge1xuICAgIGxpc3RbaV0gPSBsaXN0W2tdO1xuICB9XG5cbiAgbGlzdC5wb3AoKTtcbn1cblxuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBoZWF2aWx5IG9uIG5vZGUncyB1cmwucGFyc2VcbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZSh0bykge1xuICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG5cbiAgdmFyIHRvUGFydHMgPSB0byAmJiB0by5zcGxpdCgnLycpIHx8IFtdO1xuICB2YXIgZnJvbVBhcnRzID0gZnJvbSAmJiBmcm9tLnNwbGl0KCcvJykgfHwgW107XG5cbiAgdmFyIGlzVG9BYnMgPSB0byAmJiBpc0Fic29sdXRlKHRvKTtcbiAgdmFyIGlzRnJvbUFicyA9IGZyb20gJiYgaXNBYnNvbHV0ZShmcm9tKTtcbiAgdmFyIG11c3RFbmRBYnMgPSBpc1RvQWJzIHx8IGlzRnJvbUFicztcblxuICBpZiAodG8gJiYgaXNBYnNvbHV0ZSh0bykpIHtcbiAgICAvLyB0byBpcyBhYnNvbHV0ZVxuICAgIGZyb21QYXJ0cyA9IHRvUGFydHM7XG4gIH0gZWxzZSBpZiAodG9QYXJ0cy5sZW5ndGgpIHtcbiAgICAvLyB0byBpcyByZWxhdGl2ZSwgZHJvcCB0aGUgZmlsZW5hbWVcbiAgICBmcm9tUGFydHMucG9wKCk7XG4gICAgZnJvbVBhcnRzID0gZnJvbVBhcnRzLmNvbmNhdCh0b1BhcnRzKTtcbiAgfVxuXG4gIGlmICghZnJvbVBhcnRzLmxlbmd0aCkgcmV0dXJuICcvJztcblxuICB2YXIgaGFzVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbiAgaWYgKGZyb21QYXJ0cy5sZW5ndGgpIHtcbiAgICB2YXIgbGFzdCA9IGZyb21QYXJ0c1tmcm9tUGFydHMubGVuZ3RoIC0gMV07XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nIHx8IGxhc3QgPT09ICcnO1xuICB9IGVsc2Uge1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBmYWxzZTtcbiAgfVxuXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBmcm9tUGFydHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHZhciBwYXJ0ID0gZnJvbVBhcnRzW2ldO1xuXG4gICAgaWYgKHBhcnQgPT09ICcuJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgfSBlbHNlIGlmIChwYXJ0ID09PSAnLi4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICghbXVzdEVuZEFicykgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgZnJvbVBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gIH1pZiAobXVzdEVuZEFicyAmJiBmcm9tUGFydHNbMF0gIT09ICcnICYmICghZnJvbVBhcnRzWzBdIHx8ICFpc0Fic29sdXRlKGZyb21QYXJ0c1swXSkpKSBmcm9tUGFydHMudW5zaGlmdCgnJyk7XG5cbiAgdmFyIHJlc3VsdCA9IGZyb21QYXJ0cy5qb2luKCcvJyk7XG5cbiAgaWYgKGhhc1RyYWlsaW5nU2xhc2ggJiYgcmVzdWx0LnN1YnN0cigtMSkgIT09ICcvJykgcmVzdWx0ICs9ICcvJztcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlUGF0aG5hbWU7IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG52YXIgcHJlZml4ID0gJ0ludmFyaWFudCBmYWlsZWQnO1xuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXgpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXggKyBcIjogXCIgKyAobWVzc2FnZSB8fCAnJykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGludmFyaWFudDtcbiIsInZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFpc1Byb2R1Y3Rpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRleHQgPSBcIldhcm5pbmc6IFwiICsgbWVzc2FnZTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2Fybih0ZXh0KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhyb3cgRXJyb3IodGV4dCk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3YXJuaW5nO1xuIiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiB2YWx1ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBhVHlwZSA9IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKTtcbiAgdmFyIGJUeXBlID0gdHlwZW9mIGIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGIpO1xuXG4gIGlmIChhVHlwZSAhPT0gYlR5cGUpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYVR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFWYWx1ZSA9IGEudmFsdWVPZigpO1xuICAgIHZhciBiVmFsdWUgPSBiLnZhbHVlT2YoKTtcblxuICAgIGlmIChhVmFsdWUgIT09IGEgfHwgYlZhbHVlICE9PSBiKSByZXR1cm4gdmFsdWVFcXVhbChhVmFsdWUsIGJWYWx1ZSk7XG5cbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcblxuICAgIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2YWx1ZUVxdWFsKGFba2V5XSwgYltrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsdWVFcXVhbDsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvY29ybmVycGxhbnQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2VhdGluZ2NvbmNlcm5zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9oZXJvLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9saWZlc3R5bGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL21lZGljYWxwcm9ibGVtcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvbW9yZVJlc291cmNlcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvcGluZWFwcGxlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9wcmFjdGljZWFyZWFzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9yZWxhdGlvbnNoaXBzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9zdHJlc3NtYW5hZ2VtZW50LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9zdWNjdWxlbnRCdXJzdC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvc3VjY3VsZW50bWF0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy90cmFuc2l0aW9ucy5qcGdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgYXMgY3JlYXRlSGlzdG9yeSwgSGlzdG9yeSwgTG9jYXRpb24gfSBmcm9tICdoaXN0b3J5JztcblxuXG5cbi8vIFRPRE86IGFjY2Vzc2liaWxpdHlcblxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGhpc3Rvcnk7XG5cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZToge1xuICAgICAgICBuYW1lOiAnaG9tZScsXG4gICAgICAgIHNjcm9sbFRvOiBudWxsXG4gICAgICB9LFxuICAgICAgc2hvd0hhbWJ1cmdlcjogZmFsc2UsXG4gICAgICBzaG93RHJhd2VyOiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IGN1cnJlbnRMb2NhdGlvbjtcbiAgICB0aGlzLmhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KCk7XG5cbiAgICB0aGlzLmhpc3RvcnkubGlzdGVuKChsb2NhdGlvbikgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBpZiAod2lkdGggPiA4MDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RHJhd2VyOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dEcmF3ZXI6IGZhbHNlLFxuICAgICAgICBzaG93SGFtYnVyZ2VyOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2hvd0hhbWJ1cmdlclxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGlmICh3aWR0aCA+IDgwMCAmJiBzaG93SGFtYnVyZ2VyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgIHNob3dIYW1idXJnZXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDgwMCAmJiAhc2hvd0hhbWJ1cmdlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93SGFtYnVyZ2VyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTmF2ID0gKHRhcmdldCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiB0YXJnZXQgfSk7XG5cbiAgICBpZiAodGFyZ2V0LmRvY2spIHtcbiAgICAgIHRoaXMuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRhcmdldC5uYW1lKSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcmFjdGljZSc6XG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKCcvcHJhY3RpY2UtYXJlYXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZXJ2aWNlcyc6XG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKCcvc2VydmljZXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy9jbGFzc2VzJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVzb3VyY2VzJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy9yZXNvdXJjZXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb2NzJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy9jbGllbnQtZG9jdW1lbnRzJyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKGN1cnJlbnQpID0+ICh7XG4gICAgICBzaG93RHJhd2VyOiAhY3VycmVudC5zaG93RHJhd2VyXG4gICAgfSkpO1xuICB9XG5cbiAgY2xvc2VEcmF3ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RHJhd2VyOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGVtcGxhdGVTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZm9udEZhbWlseTogJ1JvYm90bywgc2Fucy1zZXJpZidcbiAgICB9O1xuXG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgbmFtZVxuICAgIH0gPSBwYWdlO1xuXG4gICAgbGV0IGNvbnRlbnQgPSA8ZGl2IC8+O1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgY29udGVudCA9IDxIb21lIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn0gLz5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcmFjdGljZSc6XG4gICAgICAgIGNvbnRlbnQgPSA8UHJhY3RpY2VBcmVhcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZXJ2aWNlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8U2VydmljZXMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xhc3Nlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8Q2xhc3NlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXNvdXJjZXMnOlxuICAgICAgICBjb250ZW50ID0gPFJlc291cmNlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb2NzJzpcbiAgICAgICAgY29udGVudCA9IDxDbGllbnREb2N1bWVudHMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmVlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8RmVlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3RlbXBsYXRlU3R5bGV9XG4gICAgICA+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBzaG93SGFtYnVyZ2VyPXt0aGlzLnN0YXRlLnNob3dIYW1idXJnZXJ9XG4gICAgICAgICAgYWN0aXZlPXtuYW1lfVxuICAgICAgICAgIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn1cbiAgICAgICAgICBvcGVuRHJhd2VyPXt0aGlzLnRvZ2dsZURyYXdlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Qm9keVxuICAgICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICAgIGNsb3NlRHJhd2VyPXt0aGlzLmNsb3NlRHJhd2VyfVxuICAgICAgICAgICAgc2hvd0RyYXdlcj17dGhpcy5zdGF0ZS5zaG93RHJhd2VyfVxuICAgICAgICAgICAgb25OYXY9e3RoaXMuaGFuZGxlTmF2fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgICBvbk5hdj17dGhpcy5oYW5kbGVOYXZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYWdlLnNjcm9sbFRvKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3AnKS5zY3JvbGxJbnRvVmlldygpLCAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhZ2Uuc2Nyb2xsVG8gIT09IG51bGwgfHwgcGFnZS5zY3JvbGxUbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHBhZ2Uuc2Nyb2xsVG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFnZS5zY3JvbGxUbykuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgcGFnZS5zY3JvbGxUbyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFnZS5zY3JvbGxUbyksIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURyYXdlck92ZXJsYXlDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNsb3NlRHJhd2VyKClcbiAgfVxuXG4gIHJlbmRlckRyYXdlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dEcmF3ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY24oJ2RyYXdlci1jb250YWluZXInLCB7XG4gICAgICAnaGlkZSc6ICFzaG93RHJhd2VyXG4gICAgfSk7XG5cbiAgICBjb25zdCBvdmVybGF5Q2xhc3NlcyA9IGNuKCdkcmF3ZXItb3ZlcmxheScsIHtcbiAgICAgICdoaWRlJzogIXNob3dEcmF3ZXJcbiAgICB9KTtcblxuXG4gICAgY29uc3Qgb25EcmF3ZXJQcmFjdGljZUNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyU2VydmljZXNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnc2VydmljZXMnLCBzY3JvbGxUbzogMCwgZG9jazogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyYXdlckNvbnRhY3RDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAnY29udGFjdCcsIGRvY2s6IHRydWUgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyYXdlckNsYXNzZXNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnY2xhc3NlcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyRG9jdW1lbnRzQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ2RvY3MnLCBzY3JvbGxUbzogMCwgZG9jazogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyUmVzb3VyY2VzQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ3Jlc291cmNlcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgIGhhbmRsZUNvbnRhY3RDbGljaz17b25EcmF3ZXJDb250YWN0Q2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVTZXJ2aWNlc0NsaWNrPXtvbkRyYXdlclNlcnZpY2VzQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVQcmFjdGljZUNsaWNrPXtvbkRyYXdlclByYWN0aWNlQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVDbGFzc2VzQ2xpY2s9e29uRHJhd2VyQ2xhc3Nlc0NsaWNrfVxuICAgICAgICAgICAgaGFuZGxlRG9jdW1lbnRzQ2xpY2s9e29uRHJhd2VyRG9jdW1lbnRzQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVSZXNvdXJjZXNDbGljaz17b25EcmF3ZXJSZXNvdXJjZXNDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e292ZXJsYXlDbGFzc2VzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZURyYXdlck92ZXJsYXlDbGlja30+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGJvZHlTdHlsZSA9IHtcbiAgICAgIC8vIG1pbkhlaWdodDogYGNhbGMoMTAwdmggLSA2MHB4KWBcbiAgICB9O1xuXG4gICAgY29uc3QgbiA9IHBhZ2UubmFtZTtcbiAgICBjb25zdCBjbGFzc2VzID0gY24oJ2JhY2tkcm9wJywge1xuICAgICAgJ2hlcm8gbGF6eSc6IG4gPT09ICdob21lJyxcbiAgICAgICdtb3JlU2VydmljZXMnOiBuID09PSAnc2VydmljZXMnLFxuICAgICAgJ21vcmVSZXNvdXJjZXMnOiBuID09PSAncmVzb3VyY2VzJyxcbiAgICAgICdtb3JlRG9jdW1lbnRzJzogbiA9PT0gJ2RvY3MnLFxuICAgICAgJ21vcmVGZWVzJzogbiA9PT0gJ2ZlZXMnLFxuICAgICAgJ21vcmVDbGFzc2VzJzogbiA9PT0gJ2NsYXNzZXMnLFxuICAgICAgJ21vcmVQcmFjdGljZSc6IG4gPT09ICdwcmFjdGljZSdcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXtib2R5U3R5bGV9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEcmF3ZXIoKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBpbmxpbmVTdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRURFQUU1JyxcbiAgICBib3hTaGFkb3c6ICcwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyknLFxuICAgIHpJbmRleDogMjQsXG4gIH07XG5cbiAgY29uc3QgbWVudVN0eWxlID0ge1xuICAgIGN1cnNvcjogJ3BvaW50ZXInXG4gIH1cblxuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIG9uTmF2LFxuICAgIHNob3dIYW1idXJnZXIsXG4gICAgb3BlbkRyYXdlclxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcmVuZGVySGFtYnVyZ2VyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0naGVhZGVyLW5hdiBoZWFkZXItaGFtYnVyZ2VyJ1xuICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMCB9fVxuICAgICAgICBvbkNsaWNrPXtvcGVuRHJhd2VyfVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0naGFtYnVyZ2VyJyB3aWR0aD1cIjM0XCIgaGVpZ2h0PVwiMzRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMyAxOGgxOHYtMkgzdjJ6bTAtNWgxOHYtMkgzdjJ6bTAtN3YyaDE4VjZIM3pcIiAvPjwvc3ZnPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKHNob3dIYW1idXJnZXIpIHtcbiAgICBpbmxpbmVTdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17aW5saW5lU3R5bGV9XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJIYW1idXJnZXIoKX1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ3RvcCcgfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdzaWduYXR1cmUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2hvbWUnIH0pfVxuICAgICAgICAgIHN0eWxlPXt7IC4uLm1lbnVTdHlsZSwgbWFyZ2luUmlnaHQ6IDIwIH19XG4gICAgICAgID5cbiAgICAgICAgICBTdGVwaGFuaWUgU21pdGgsIFBzeS5ELlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXtpbmxpbmVTdHlsZX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ3RvcCcgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnc2lnbmF0dXJlJywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdob21lJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgU3RlcGhhbmllIFNtaXRoLCBQc3kuRC5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdwcmFjdGljZScgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFByYWN0aWNlIEFyZWFzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnc2VydmljZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnc2VydmljZXMnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBTZXJ2aWNlcyAmIEZlZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdjbGFzc2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NsYXNzZXMnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBDbGFzc2VzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnZG9jcycsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdkb2NzJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgRG9jdW1lbnRzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAnY29udGFjdCcgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NvbnRhY3QnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBDb250YWN0XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncmVzb3VyY2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3Jlc291cmNlcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFJlc291cmNlc1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2Zvb3RlcidcbiAgICA+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgU3RlcGhhbmllIFNtaXRoLCBQc3kuRC5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPSdhZGRyZXNzJz5cbiAgICAgICAgODAxIEFsaGFtYnJhIEJsdmQsIFN1aXRlIDJCIFNhY3JhbWVudG8sIENBIDk1ODE2XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgKDkxNikgMzk5LTM2MTVcbiAgICAgIDwvc3Bhbj5cbiAgICA8L2RpdiA+XG4gICk7XG59O1xuXG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uTmF2XG4gIH0gPSBwcm9wcztcblxuICBsZXQgbGF6eSA9ICcnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZHJvcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVybyAke2xhenl9YH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnIGlkPSd0b3AnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVyby1jb250ZW50Jz5cbiAgICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgXCJBbmQgdGhlIGRheSBjYW1lIHdoZW4gdGhlIHJpc2sgdG8gcmVtYWluIHRpZ2h0IGFzIGEgYnVkIHdhcyBtb3JlIHBhaW5mdWwgdGhhbiB0aGUgcmlzayBpdCB0b29rIHRvIGJsb3Nzb20uXCJcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxmb290ZXI+LSBBbmFpcyBOaW5cbiAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZXQgY2FyZC0yJyBpZD0nbWVldCcgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWV0Q29udGVudCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZSc+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdwcm9maWxlUGhvdG8gY2FyZC0xJyBzcmM9J3Jlcy9wcm9maWxlXy5qcGcnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiaW8nPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdiaW9UaXRsZSc+XG4gICAgICAgICAgICAgICAgTWVldCBEci4gU3RlcGhhbmllIFNtaXRoXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2Jpb1N1YnRpdGxlJz5cbiAgICAgICAgICAgICAgICBDbGluaWNhbCBQc3ljaG9sb2dpc3RcbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAge21lZXRTdGVwaH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByYWN0aWNlQXJlYXMnIGlkPSdwcmFjdGljZSc+XG4gICAgICAgICAgPGgyPlByYWN0aWNlIEFyZWFzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYXMnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAnbW9yZUVhdGluZ0NvbmNlcm5zJyB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFyZWFJbWFnZSBhcmVhRWF0aW5nQ29uY2VybnMgJHtsYXp5fWB9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIEVhdGluZzxiciAvPiBDb25jZXJuc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86ICdtb3JlTGlmZXN0eWxlQ2hhbmdlcycgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhcmVhSW1hZ2UgYXJlYUxpZmVzdHlsZSAke2xhenl9YH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgTGlmZXN0eWxlPGJyIC8+IENoYW5nZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAnbW9yZUxpZmVUcmFuc2l0aW9ucycgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhcmVhSW1hZ2UgYXJlYVRyYW5zaXRpb25zICR7bGF6eX1gfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBMaWZlPGJyIC8+IFRyYW5zaXRpb25zXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSdcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncHJhY3RpY2UnLCBzY3JvbGxUbzogJ21vcmVSZWxlYXRpb25zaGlwQ2hhbGxlbmdlcycgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhcmVhSW1hZ2UgYXJlYVJlbGF0aW9uc2hpcHMgJHtsYXp5fWB9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFJlbGF0aW9uc2hpcDxiciAvPiBDaGFsbGVuZ2VzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSdcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncHJhY3RpY2UnLCBzY3JvbGxUbzogJ21vcmVNZWRpY2FsUHJvYmxlbXMnIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYXJlYUltYWdlIGFyZWFNZWRpY2FsUHJvYmxlbXMgJHtsYXp5fWB9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIEhlYWx0aDxiciAvPiBEaWZmaWN1bHRpZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAnbW9yZVN0cmVzc01hbmFnZW1lbnQnIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYXJlYUltYWdlIGFyZWFTdHJlc3MgJHtsYXp5fWB9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFN0cmVzczxiciAvPiBNYW5hZ2VtZW50XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVhZE1vcmUnPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3JlYWRNb3JlIGJ1dHRvbicgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncHJhY3RpY2UnLCBzY3JvbGxUbzogMCB9KX0+XG4gICAgICAgICAgICAgIFJFQUQgTU9SRVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhY3QgY2FyZC0yICR7bGF6eX1gfSBpZD0nY29udGFjdCc+XG4gICAgICAgICAgPGgyPkNoYW5nZSBiZWdpbnMgdG9kYXk8L2gyPlxuICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogMjMgfX0+UmVxdWVzdCBhIGNvbnN1bHRhdGlvbjwvaDM+XG4gICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6IDE5LCBsaW5lSGVpZ2h0OiAxLjksIG1hcmdpblRvcDogNDAgfX0+XG4gICAgICAgICAgICBDYWxsL1RleHQ6IDkxNi0zOTktMzYxNTxiciAvPlxuICAgICAgICAgICAgRW1haWw6IDxhIHR5cGU9J2VtYWlsJyBocmVmPSdtYWlsdG86U3RlcGhhbmllU21pdGhQc3lEQHByb3Rvbm1haWwuY29tJyB0YXJnZXQ9J19ibGFuayc+U3RlcGhhbmllU21pdGhQc3lEQHByb3Rvbm1haWwuY29tPC9hPjxiciAvPlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9wcm9maWxlLzQ3MzA3NicgdGFyZ2V0PSdfYmxhbmsnPkNvbm5lY3QgdGhyb3VnaCBQc3ljaG9sb2d5IFRvZGF5PC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgbWFpbCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxmb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGhvbmVcIiByZXF1aXJlZCAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgIDxsYWJlbD5QaG9uZTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgICA8ZGl2IGNsYXNzPSdyZWFkTW9yZSc+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uJz5TRU5EPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG4vKiogSG9tZSAqL1xuXG5cbi8qKiBQYWdlcyAqL1xuXG5jb25zdCBQcmFjdGljZUFyZWFzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9J1ByYWN0aWNlIEFyZWFzJ1xuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBzaHJpbms9e3RydWV9XG5cbiAgICAgICAgYm9keT17cHJhY3RpY2VBcmVhc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPSdTZXJ2aWNlcyAmIEZlZXMnXG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIHNocmluaz17dHJ1ZX1cblxuICAgICAgICBib2R5PXtzZXJ2aWNlc31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgc2hyaW5rPXt0cnVlfVxuXG4gICAgICAgIGJvZHk9e3NlcnZpY2VzUmVpbWJ1cnNtZW50fVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBzaHJpbms9e3RydWV9XG5cbiAgICAgICAgYm9keT17c2VydmljZXNJbnN1cmFjZX1cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuY29uc3QgQ2xhc3NlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnQ2xhc3Nlcyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIHNocmluaz17dHJ1ZX1cblxuICAgICAgICBib2R5PXtjbGFzc2VzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cbmNvbnN0IENsaWVudERvY3VtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnQ2xpZW50IERvY3VtZW50cyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIHNocmluaz17dHJ1ZX1cbiAgICAgICAgYm9keT17Y2xpZW50RG9jdW1lbnRzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5jb25zdCBSZXNvdXJjZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J1Jlc291cmNlcyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIHNocmluaz17dHJ1ZX1cbiAgICAgICAgYm9keT17cmVzb3VyY2VzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cbmNvbnN0IEZlZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J0ZlZXMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBzaHJpbms9e3RydWV9XG4gICAgICAgIGJvZHk9e2ZlZXN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgKTtcbn1cblxuXG5cbi8qKiBQYWdlcyBjb250ZW50cyAqL1xuXG5jb25zdCBtZWV0U3RlcGggPSAoXG4gIDxwPlxuICAgIFdlbGNvbWUgYW5kIHRoYW5rIHlvdSBmb3IgdmlzaXRpbmchIFRoaXMgaXMgYSBwbGFjZSB0byBleHBsb3JlIHRoZSBwb3NzaWJpbGl0eSBvZiBjaGFuZ2UgZm9yIGEgYmV0dGVyIHRvbW9ycm93LiBUaGVyZSBpcyBubyDigJxvbmUgc2l6ZSBmaXRzIGFsbOKAnSBhcHByb2FjaCB0byBvdXIgdGltZSB0b2dldGhlci4gSSB3b3JrIGNvbGxhYm9yYXRpdmVseSB3aXRoIG15IGNsaWVudHMgdG8gY3JlYXRlIGFuIGVudmlyb25tZW50IG9mIHJlc3BlY3QgYW5kIGNvbXBhc3Npb24gdGhhdCBjYW4gYmUgYXBwbGllZCB0byByZW5ldyB0aGVpciBsaXZlcy4gVGhlcmFweSBoYXMgdGhlIHBvd2VyIHRvIGJvdGggc29vdGhlIGFuZCB0cmFuc2Zvcm0uIEkgdXNlIHRlY2huaXF1ZXMgb2Ygb25lLW9uLW9uZSB0aGVyYXB5IGFuZCBjbGFzc2VzIHRvIHNwYXJrIG1lYW5pbmdmdWwgYW5kIGxhc3RpbmcgY2hhbmdlLiBJIGFtIGtub3duIGJ5IG15IGNsaWVudHMgYXMgYmVpbmcgZG93biB0byBlYXJ0aCwgZ2VudWluZSwgYW5kIHJlbGF0YWJsZS4gSSBsb29rIGZvcndhcmQgdG8gcGFydG5lcmluZyB0b2dldGhlciB0byBidWlsZCB5b3VyIGhlYWx0aGllciB0b21vcnJvdy5cbiAgPC9wPlxuKTtcblxuY29uc3QgcHJhY3RpY2VBcmVhcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBpZD0nbW9yZUVhdGluZ0NvbmNlcm5zJz5FYXRpbmcgQ29uY2VybnM8L2gzPlxuICAgIDxwPlxuICAgICAgSW5kaXZpZHVhbHMgbm90aWNpbmcgbWluZGxlc3MsIHN0cmVzcywgZW1vdGlvbmFsLCBvciBiaW5nZSBlYXRpbmcgYmVoYXZpb3JzIGFyZSB3ZWxjb21lIHRvIGNvbnNpZGVyIGJvdGggaW5kaXZpZHVhbCBhbmQgY2xhc3MtYmFzZWQgdGhlcmFwaWVzIHdpdGggbWUuIE15IGFwcHJvYWNoIHRvIHRoZXNlIGNvbmNlcm5zIHJlY29nbml6ZXMgdGhlIGNvbXBsZXggcm9sZSBlYXRpbmcgY2FuIHBsYXkgYXMgYSBtZWNoYW5pc20gb2YgY29waW5nIGZvciBpbmRpdmlkdWFsLCBmYW1pbHksIGFuZCBjdWx0dXJhbGx5IHN5c3RlbWljIGlzc3Vlcy4gV2Ugd29yayB0b2dldGhlciB0byBhY2tub3dsZWRnZSB0aGUgZnVsbG5lc3Mgb2YgdGhpcyByb2xlIGFzIHdlbGwgYXMgaXQncyBoaXN0b3J5LCB3aGlsZSBob25vcmluZyB0aGUgZGVzaXJlIHRoYXQgbWF5IGV4aXN0IHRvIGNoYW5nZS4gVGhyb3VnaCBvdXIgd29yayB3ZSBjYW4gYmVnaW4gdG8gZGV2ZWxvcCBuZXcgYW5kIGhlYWx0aGllciBjb3Bpbmcgc3RyYXRlZ2llcyBhcyBhIG5hdHVyYWwgb3V0Y29tZSBvZiBpbmNyZWFzZWQgYXdhcmVuZXNzIGFuZCBzZWxmLWNvbXBhc3Npb24uIEkgdGFpbG9yIG15IGFwcHJvYWNoIHRvIHRoZSBuZWVkcyBhbmQgc3R5bGUgb2YgdGhlIGluZGl2aWR1YWwgd2l0aCB3aG9tIEkgYW0gd29ya2luZy5cbiAgICA8L3A+XG5cbiAgICA8aDNcbiAgICAgIGlkPSdtb3JlTGlmZXN0eWxlQ2hhbmdlcydcbiAgICA+TGlmZXN0eWxlIENoYW5nZXM8L2gzPlxuXG4gICAgPHA+XG4gICAgICBNb3N0IG9mIHVzIGNhbiByZWxhdGUgdG8gdGhlIHJ1bm5pbmcgbWVudGFsIGxpc3Qgb2YgdGhpbmdzIHdlIGtub3cgd2UgXCJzaG91bGRcIiBiZSBkb2luZyBpbiBvcmRlciB0byBiZSBoZWFsdGhpZXIuIE1heWJlIHRoaXMgaXMgbW92aW5nIG91ciBib2RpZXMgbW9yZSwgZWF0aW5nIGRpZmZlcmVudGx5LCBpbXByb3Zpbmcgc2xlZXAgaGFiaXRzLCBvciBkaXNjb25uZWN0aW5nIGZyb20gdGVjaG5vbG9neS4gTWF5YmUgaXQgY291bGQgYmUgdGhlc2UgdGhpbmdzIHBsdXMgbWFueSBtb3JlISBXaGlsZSBjZXJ0YWlubHkgZXhjZWxsZW50IGhhYml0cywgbG9va2luZyBhdCBhIGxpc3Qgb2YgcGVyc29uYWwgd2VsbG5lc3MgXCJ0byBkb3NcIiBjYW4gYmUgb3ZlcndoZWxtaW5nLiBJbiBmYWN0LCB3ZSBvZnRlbiBhdm9pZCB0aGlua2luZyBhYm91dCB0aGVzZSBoZWFsdGh5IGxpdmluZyBpdGVtcyBiZWNhdXNlIGl0IGNhbiBmZWVsIGhvcGVsZXNzLiBVbmZvcnR1bmF0ZWx5LCBvZnRlbiB0aGlzIG1lYW5zIHN0YXlpbmcgc3R1Y2sgaW4gYSBydXQgb2YgZmVlbGluZyB1bmhlYWx0aHkuIFRvZ2V0aGVyLCB3ZSBjYW4gY3JlYXRlIGEgcGxhbiBvZiBzbWFsbCBzdGVwcyB0byB3b3JrIHRvd2FyZHMgY29ubmVjdGluZyBiZWhhdmlvciBjaGFuZ2VzIHdpdGggeW91ciBkZWVwZXN0IHZhbHVlcy4gVGhpbmdzIHRoYXQgbWF5IGhhdmUgZmVsdCBmb3JjZWQgaW4gdGhlIHBhc3QgY2FuIGJlY29tZSB0aGluZ3Mgd2UgYXJlIGVhZ2VyIGZvci4gSSB3aWxsIGxldmVyYWdlIG15IHRyYWluaW5nIGluIExpZmVzdHlsZSBNZWRpY2luZSB0byBoZWxwIHNldCBtYW5hZ2VhYmxlIGFuZCByZXNlYXJjaCBzdXBwb3J0ZWQgYWltcyB0byBwcm9kdWNlIHJlYWwgaW1wcm92ZW1lbnRzIGluIHlvdXIgaGVhbHRoLlxuPC9wPlxuXG4gICAgPGgzXG4gICAgICBpZD0nbW9yZUxpZmVUcmFuc2l0aW9ucydcbiAgICA+UGhhc2Ugb2YgTGlmZSBJc3N1ZXMvTGlmZSBUcmFuc2l0aW9uczwvaDM+XG4gICAgPHA+XG4gICAgICBUaG91Z2ggdGhlIHBocmFzZSwgXCJ0aGUgb25seSB0aGluZyBjb25zdGFudCBpcyBjaGFuZ2VcIiBpcyBvbmUgZmFtaWxpYXIgdG8gbWFueSBvZiB1cywgdGhpcyBvZnRlbiBmZWVscyBsaWtlIGxpdHRsZSBjb21mb3J0IGR1cmluZyB0aGUgdHVybW9pbCBvZiBhIHNpZ25pZmljYW50IHRyYW5zaXRpb24uIENoYW5nZXMgaW4gbGlmZSBjaXJjdW1zdGFuY2VzIGNhbiBpbXBhY3QgdXMgb24gZXZlcnkgbGV2ZWwgb2Ygb3VyIGJlaW5nIGFuZCBleHRlcm5hbCBsaWZlLiBTZWVraW5nIHRoZXJhcHkgZHVyaW5nIHRoZXNlIHRpbWVzIGNhbiBiZSBib3RoIGFuY2hvciBhbmQgZ3VpZGUgbGlnaHQuIEkgd2lsbCBzdXBwb3J0IHlvdSB0byBwcm9jZXNzIHRoZSBsb3NzIG9mIGhvdyB0aGluZ3MgaGF2ZSBiZWVuLiBXaGVuIHlvdSBhcmUgcmVhZHksIHdlIHdpbGwgc2V0IGNvbnNjaW91c2x5IGRldmVsb3BlZCBnb2FscyBmb3IgdGhlIHBoYXNlIG9mIGxpZmUgdGhhdCB5b3UgZmluZCB5b3Vyc2VsZiBpbiBub3cuIFdlIHdpbGwgd29yayB0b2dldGhlciB0byBpZGVudGlmeSBoZWFsdGh5IGNvcmUgY29tcG9uZW50cyBvZiB3aG8geW91IGFyZSBldm9sdmluZyB0byBiZSwgYW5kIGNlbnRlciBvdXIgYXR0ZW50aW9uIHRvIG51cnR1cmUgdGhpcyBncm93dGguIFRoZXJlIGlzIG5vIHNldCB0aW1lbGluZSBvZiBob3cgbG9uZyBhbiBhZGp1c3RtZW50IHBlcmlvZCBsYXN0cy4gSSB3aWxsIGhlbHAgeW91IHRvIG1vdmUgaW50byB0aGUgbmV4dCBwYXJ0IG9mIHlvdXIgbGlmZSBpbiBoZWFsdGhmdWwgd2F5cywgYXMgcXVpY2tseSBhcyBpcyByZWFzb25hYmxlLCBhbmQgaW4gY29tcGxldGUgcmVzcGVjdCBmb3IgeW91ciBvd24gcGFjZS5cbjwvcD5cblxuICAgIDxoM1xuICAgICAgaWQ9J21vcmVSZWxhdGlvbnNoaXBDYWxsZW5nZXMnXG4gICAgPlJlbGF0aW9uc2hpcCBDaGFsbGVuZ2VzPC9oMz5cbiAgICA8cD5cbiAgICAgIFJvbWFudGljLCBmYW1pbHksIHNvY2lhbCwgYW5kIG9jY3VwYXRpb25hbCByZWxhdGlvbnNoaXBzIGNhbiBhbGwgYmUgc291cmNlcyBvZiBzaWduaWZpY2FudCBwbGVhc3VyZSBhbmQsIGNvbnNlcXVlbnRseSwgc2lnbmlmaWNhbnQgcGFpbi4gVGhlcmUgYXJlIGEgbXVsdGl0dWRlIG9mIHJlYXNvbnMgcmVsYXRpb25zaGlwcyBjYW4gYmVjb21lIHRyb3VibGVkLiBNYW55IG9mIHRoZSByb290cyBvZiB0aGVzZSByZWFzb25zIGNhbiBiZSB0cmFjZWQgdG8gY29tbXVuaWNhdGlvbiBjbGFyaXR5LiBXaGlsZSB3ZSBjYW5ub3QgY2hhbmdlIG90aGVyIHBlb3BsZSwgd2UgY2FuIGlkZW50aWZ5IHBlcnNvbmFsIHF1YWxpdGllcyBpbiBvdXJzZWx2ZXMgdGhhdCB3ZSB3aXNoIHRvIGNoYW5nZSBmb3IgdGhlIHdlbGxiZWluZyBvZiBhIGN1cnJlbnQgb3IgZnV0dXJlIHJlbGF0aW9uc2hpcC4gV29ya2luZyB0b3dhcmRzIGlkZW50aWZ5aW5nIHRoZXNlIGFyZWFzLCBjcmVhdGluZyBtaW5kZnVsIGF3YXJlbmVzcyBhcm91bmQgdGhlbSwgYW5kIG1ha2luZyB2YWx1ZXMtYmFzZWQgY2hhbmdlcyBjYW4gcHJvdmlkZSBib3RoIHBlcnNvbmFsIGJlbmVmaXRzIGFuZCBpbXByb3ZlbWVudHMgdG8gdGhlIHJlbGF0aW9uc2hpcC4gV2UgY2FuIHdvcmsgdG9nZXRoZXIgdG8gaWRlbnRpZnkgYW5kIG9wdGltaXplIHRoZXNlIGNoYW5nZXMgd2hpbGUgcHJpb3JpdGl6aW5nIGVmZmVjdGl2ZSBhbmQgY2xlYXIgY29tbXVuaWNhdGlvbiBhcyB0aGUgY29ybmVyc3RvbmUgdG8gaW1wcm92ZWQgcmVsYXRpb25zaGlwcy5cbjwvcD5cbiAgICA8aDNcbiAgICAgIGlkPSdtb3JlSGVhbHRoRGlmZmljdWx0aWVzJ1xuICAgID5IZWFsdGggRGlmZmljdWx0aWVzPC9oMz5cbiAgICA8cD5cbiAgICAgIFRoZXJlIGlzIG5vIGRvdWJ0IHRoYXQgb3VyIHBoeXNpY2FsIHdlbGxiZWluZyBpbXBhY3RzIG91ciBwc3ljaG9sb2dpY2FsIHdlbGxiZWluZyBhbmQgdmljZSB2ZXJzYS4gV2hldGhlciB5b3UgYXJlIGxvb2tpbmcgZm9yIHN1cHBvcnQgaW4gaW1wcm92aW5nIHlvdXIgbWFuYWdlbWVudCBvZiBhIG1lZGljYWwgcHJvYmxlbSwgaGFuZGxpbmcgdGhlIHN0cmVzcyBhcm91bmQgaXQsIG9yIGJlbGlldmUgdGhlcmUgbWF5IGJlIGxpZmVzdHlsZSBjaGFuZ2VzIHRoYXQgd2lsbCByZXZlcnNlIHRoZSBjb25kaXRpb24sIEkgd291bGQgYmUgaGFwcHkgdG8gc3VwcG9ydCB0aGlzIGFzcGVjdCBvZiB5b3VyIGhlYWx0aC4gSSBhbSBhIHRyYWluZWQgaGVhbHRoIHBzeWNob2xvZ2lzdCBhbmQgd29yayByZWd1bGFybHkgd2l0aCBib3RoIGNocm9uaWMgYW5kIGFjdXRlIG1lZGljYWwgY29uZGl0aW9ucy4gSSBoYXZlIHBlcnNvbmFsIGFuZCBwcm9mZXNzaW9uYWwgZXhwZXJpZW5jZSB3aXRoIHRoZSBpbXBhY3RzIHBoeXNpY2FsIGhlYWx0aCBjYW4gaGF2ZSBub3Qgb25seSBvbiBvbmVzZWxmLCBidXQgYWxzbyBvbiB0aG9zZSBhcm91bmQgdXMuIEkgYmVsaWV2ZSBzdXBwb3J0IGNhbiBtYWtlIGEgc3Vic3RhbnRpdmUgZGlmZmVyZW5jZSBpbiBtYW5hZ2luZyBhIGhlYWx0aCBjb25jZXJuIGFzIHdlbGwgYXMgdGhlIGVtb3Rpb25hbCBhbmQgc29jaWFsIGltcGFjdHMgb2YgdGhpcy4gSSB3aWxsIHdvcmsgd2l0aCB5b3UgdG8gYWNjZXB0IHRob3NlIHJlYWxpdGllcyB0aGF0IGFyZSB1bmNoYW5naW5nLCBhcyB3ZWxsIGFzIHJlY29nbml6ZSBvcHBvcnR1bml0aWVzIGZvciBwb3NpdGl2ZSBncm93dGguXG48L3A+XG4gICAgPGgzXG4gICAgICBpZD0nbW9yZVN0cmVzc01hbmFnZW1lbnQnXG4gICAgPlN0cmVzcyBNYW5hZ2VtZW50PC9oMz5cbiAgICA8cD5cbiAgICAgIEF0IHRpbWVzIHdlIGNhbiBmaW5kIG91cnNlbHZlcyBvdmVyd2hlbG1lZC4gVGhlIHJlYXNvbnMgZm9yIGZlZWxpbmcgb3ZlcndoZWxtZWQgbWlnaHQgc2VlbSBjbGVhciwgb3IgdGhleSBtYXkgYmUgaGFyZCB0byB1bmRlcnN0YW5kLiBJdCBjYW4gZmVlbCBsaWtlIGJlaW5nIHRyYXBwZWQgaW4gcGFydHMgb2YgeW91ciBvd24gbGlmZS4gVGFsa2luZyB0aHJvdWdoIHlvdXIgc3RyZXNzb3JzIHdpdGggYSBwcm9mZXNzaW9uYWwgY2FuIGFsbG93IHNwYWNlIGFyb3VuZCBwYWluZnVsIHBhcnRzIG9mIHlvdXIgZXhwZXJpZW5jZSB0aGF0IGNvdWxkIGVhc2UgdGhlIHByZXNzdXJlLiBUaGVyZSBtYXkgYWxzbyBiZSBhbHRlcm5hdGl2ZSBwZXJzcGVjdGl2ZXMgdGhhdCB5b3UgYXJlbuKAmXQgYWJsZSB0byBzZWUgZnJvbSBiZWluZyByaWdodCBpbiB0aGUgdGhpY2sgb2YgdGhlIHN0cmVzcywgdGhhdCBtYXkgYmUgdmlzaWJsZSBmcm9tIGFuIG91dHNpZGUgcGVyc3BlY3RpdmUuIFRoZXJhcHkgY2FuIHByb3ZpZGUgc3VwcG9ydCB0byBwcm9jZXNzIHlvdXIgZXhwZXJpZW5jZXMgYW5kIGZyZWUgeW91IHRvIGJlIGEgbW9yZSB3aG9sZSB2ZXJzaW9uIG9mIHlvdXJzZWxmOyBhYmxlIHRvIGVuZ2FnZSB3aXRoIHRoZSByZXN0IG9mIHlvdXIgbGlmZSBhbmQgdGhlIHBlb3BsZSBpbiBpdC5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBzZXJ2aWNlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgV2hhdCB0byBFeHBlY3RcbiAgICA8L2gzPlxuICAgIDxoMz5UZWxlcGhvbmUgQ29uc3VsdDwvaDM+XG4gICAgPHA+XG4gICAgICBBcyBvdXIgZmlyc3QgY29udGFjdCBmb3IgZWl0aGVyIGluZGl2aWR1YWwgdGhlcmFweSBvciBjbGFzc2VzIEkgb2ZmZXIgYSBjb21wbGVtZW50YXJ5IDE1LW1pbnV0ZSBwaG9uZSBjb25zdWx0YXRpb24uIFRoaXMgaXMgYW4gb3Bwb3J0dW5pdHkgZm9yIHVzIHRvIGNvbm5lY3QgYWJvdXQgdGhlIGlzc3VlcyB0aGF0IGJyaW5nIHlvdSBpbnRvIGNhcmUsIGFuZCB0byBkZXRlcm1pbmUgd2hldGhlciB3b3JraW5nIHRvZ2V0aGVyIGlzIHRoZSBiZXN0IGZpdCBmb3IgeW91ciBuZWVkcy4gSSBjYW4gYW5zd2VyIGFueSBxdWVzdGlvbnMgdGhhdCB5b3UgbWF5IGhhdmUgYWJvdXQgY29taW5nIGludG8gY2FyZSBhbmQgc2V0IHVwIHlvdXIgZmlyc3QgYXBwb2ludG1lbnQgb3IgY2xhc3MuXG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjE1LW1pbiBpbml0aWFsIHRlbGVwaG9uZSBjb25zdWx0JiN4MjAxNDsgZnJlZTwvaT5cbiAgICA8L3A+XG4gICAgPGgzPkluaXRpYWwgQXBwb2ludG1lbnQ8L2gzPlxuICAgIDxwPlxuICAgICAgQW4gaW5pdGlhbCBpbmRpdmlkdWFsIHRoZXJhcHkgYXBwb2ludG1lbnQgaXMgYSA2MC1taW51dGUgYXBwb2ludG1lbnQuIER1cmluZyB0aGlzIGFwcG9pbnRtZW50IEkgd2lsbCByZXZpZXcgeW91ciBjb21wbGV0ZSBpbnRha2UgZm9ybSB3aXRoIHlvdSB0byBlbnN1cmUgdGhhdCBJIGhhdmUgYW4gYXBwcm9wcmlhdGUgdW5kZXJzdGFuZGluZyBvZiBzb21lIG9mIHlvdXIgaGlzdG9yeSwgd2hhdCBicmluZ3MgeW91IGludG8gY2FyZSwgYW5kIHlvdXIgZ29hbHMgZm9yIG91ciB3b3JrIHRvZ2V0aGVyLiBJIHdpbGwgYW5zd2VyIGFueSBxdWVzdGlvbnMgdGhhdCB5b3UgaGF2ZSB0byB0aGUgYmVzdCBvZiBteSBhYmlsaXR5LiBXZSB3aWxsIGFsc28gdXNlIHRoaXMgYXBwb2ludG1lbnQgdG8gY3JlYXRlIHNvbWUgaW5pdGlhbCBnb2FscyBmb3IgY2FyZSBhbmQgdG8gc2V0IHVwIG91ciBtdXR1YWwgZXhwZWN0YXRpb25zIGZvciB0cmVhdG1lbnQuXG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjYwLW1pbiBpbml0aWFsIGluZGl2aWR1YWwgYXBwb2ludG1lbnQmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+UmV0dXJuIEFwcG9pbnRtZW50czwvaDM+XG4gICAgPHA+XG4gICAgICBSZXR1cm4gYXBwb2ludG1lbnRzIGFyZSA1MC1taW51dGUgYXBwb2ludG1lbnRzLiBEdXJpbmcgcmV0dXJuIGFwcG9pbnRtZW50cyB3ZSB3aWxsIHdvcmsgdG9nZXRoZXIgb24geW91ciBnb2FscyBhbmQgSSB3aWxsIHN1cHBvcnQgeW91IHRocm91Z2ggdGhlIHByb2Nlc3MuIFdlIHdpbGwgcmVndWxhcmx5IGNoZWNrIGluIGFib3V0IHRoZSBwcm9ncmVzcyBvZiBjYXJlIGFuZCBtYWtlIGFkanVzdG1lbnRzIGFzIG5lZWRlZCB0byBlbnN1cmUgdGhhdCB3ZSBhcmUgd29ya2luZyBlZmZlY3RpdmVseSB0b2dldGhlci5cbiAgICAgIDxiciAvPlxuICAgICAgPGk+NTAtbWluIHJldHVybiBpbmRpdmlkdWFsIGFwcG9pbnRtZW50JiN4MjAxNDsgJDE1MDwvaT5cbiAgICA8L3A+XG4gICAgPGgzPkNsYXNzZXM8L2gzPlxuICAgIDxwPlxuICAgICAgQ2xhc3NlcyBhcmUgOTAgbWludXRlcyBpbiBsZW5ndGguIER1ZSB0byBzcGFjZSBuZWVkZWQsIGNsYXNzZXMgYXJlIGhlbGQgYXQgYSBuZWFyYnkgbG9jYXRpb24gc2VwYXJhdGUgZnJvbSB0aGUgbWFpbiB0aGVyYXB5IG9mZmljZS4gTW9yZSBpbmZvcm1hdGlvbiBhYm91dCBjbGFzcyBhbmQgY2xhc3MgY29udGVudCBjYW4gYmUgZm91bmQgdW5kZXIgdGhlIFwiQ2xhc3Nlc1wiIHRhYi4gVGhvdWdoIGNsYXNzZXMgdGFrZSBwbGFjZSBvdmVyIDQgc2Vzc2lvbnMsIHRoZSBmdWxsIGZlZSBtdXN0IGJlIHBhaWQgaW4gYWR2YW5jZSBvZiB0aGUgZmlyc3Qgc2Vzc2lvbi4gQWZ0ZXIgdGhpcyBwYXltZW50LCBubyBhZGRpdGlvbmFsIGNoYXJnZXMgYXJlIGluY3VycmVkIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSBjbGFzc2VzIHVubGVzcyBhbiBhZGRpdGlvbmFsIHNlcnZpY2UgaXMgcmVxdWVzdGVkIG9yIHByb3ZpZGVkLlxuICAgICAgPGJyIC8+XG4gICAgICA8aT40LXNlc3Npb24gKDM2MC1taW4pIGNsYXNzIHNlcmllcyYjeDIwMTQ7ICQxNjA8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5UZWxlTWVudGFsIEhlYWx0aDwvaDM+XG4gICAgPHA+XG4gICAgICBPbiBvY2Nhc2lvbiBpdCBtYXkgYmUgaW5kaWNhdGVkIGZvciB1cyB0byBlbmdhZ2UgaW4gdGVsZS1oZWFsdGggZWl0aGVyIG92ZXIgdGhlIHBob25lIG9yIHRocm91Z2ggdmlkZW8gY29tbXVuaWNhdGlvbi4gVGhlc2Ugc2VydmljZXMgYXJlIG9mZmVyZWQgdG8gaW5kaXZpZHVhbHMgb25seSBhZnRlciB3ZSBoYXZlIGluaXRpYWxseSBlc3RhYmxpc2hlZCBpbi1wZXJzb24gdGhlcmFwZXV0aWMgcmVsYXRpb25zaGlwIHRocm91Z2ggYXQgbGVhc3Qgb25lIGluLXBlcnNvbiBhcHBvaW50bWVudC4gRHVlIHRvIGxpY2Vuc2luZyByZXF1aXJlbWVudHMsIEkgYW0gdW5hYmxlIHRvIHByb3ZpZGUgdGhlc2Ugc2VydmljZXMgdG8gYW55b25lIG91dC1vZi1zdGF0ZSBvciBjb3VudHJ5IGF0IHRoZSB0aW1lIG9mIHNlcnZpY2UuIFRoZXJlIGFyZSBhIHZhcmlldHkgb2YgcGxhdGZvcm1zIGF2YWlsYWJsZSBmb3IgdGhpcyBzZXJ2aWNlIGFuZCwgdGhvdWdoIGNvbnZlbmllbnQsIGl0IGlzIGltcG9ydGFudCB0byBiZSBhd2FyZSB0aGF0IG1vc3QgYXJlIG5vdCBISVBBQSBjb21wbGlhbnQuIENvbXBsZXRpbmcgdGhlIEluZm9ybWVkIENvbnNlbnQgZm9ybSBhY2tub3dsZWRnZXMgeW91ciB1bmRlcnN0YW5kaW5nIG9mIHRoaXMgYW5kIGFjY2VwdGFuY2Ugb2YgdGhlIHJpc2sgc2hvdWxkIHdlIHV0aWxpemUgdGhpcyBmb3JtYXQgb2YgY2FyZS5cbiAgICAgIDxiciAvPlxuICAgICAgPGk+NSB0byAyNSBtaW51dGVzJiN4MjAxNDsgJDc1PC9pPlxuICAgICAgPGJyIC8+XG4gICAgICA8aT4yNi01MCBtaW51dGVzJiN4MjAxNDsgJDE1MDwvaT5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBzZXJ2aWNlc1JlaW1idXJzbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgUGF5bWVudCBhbmQgUmVpbWJ1cnNlbWVudFxuICAgIDwvaDM+XG4gICAgPHA+XG4gICAgICBZb3Ugd2lsbCBiZSBleHBlY3RlZCB0byBwYXkgZm9yIGVhY2ggc2Vzc2lvbiBiZWZvcmUvYXQgdGhlIHN0YXJ0IG9mIHNlc3Npb24sIHVubGVzcyB3ZSBhZ3JlZSBvdGhlcndpc2UuIFBheW1lbnQgbWF5IGJlIG1hZGUgdGhyb3VnaCBjYXNoLCBjaGVjaywgb3IgSElQQUEgY29tcGxpYW50IGFwcGxpY2F0aW9uLiBVc2Ugb2YgdGhlIEhJUEFBIGNvbXBsaWFudCBhcHBsaWNhdGlvbiBpbmN1cnMgYW4gYWRkaXRpb25hbCAkNSBjaGFyZ2UuXG4gICAgPC9wPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3Qgc2VydmljZXNJbnN1cmFjZSA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgSW5zdXJhbmNlXG4gICAgPC9oMz5cbiAgICA8cD5cbiAgICAgIEkgYW0gYW4gXCJvdXQgb2YgbmV0d29yayBwcm92aWRlclwiIGZvciBpbnN1cmFuY2UgbmV0d29ya3MgYnV0IHdpbGwgcHJvdmlkZSB5b3UgYSBTdXBlcmJpbGwgd2hpY2ggeW91IG1heSB1c2UgdG8gcmVxdWVzdCByZWltYnVyc2VtZW50LiBUaGUgY292ZXJhZ2UgeW91IHJlY2VpdmUgaXMgZW50aXJlbHkgZGVwZW5kZW50IHVwb24gdGhlIHBsYW4gdGhhdCB5b3UgaGF2ZS4gSSByZWNvbW1lbmQgdGhhdCB5b3UgY29udGFjdCB5b3VyIGluc3VyYW5jZSBjb21wYW55IGRpcmVjdGx5IHRvIGRldGVybWluZSB5b3VyIHNwZWNpZmljIGNvdmVyYWdlLiBTb21lIHF1ZXN0aW9ucyB0aGF0IG1heSBiZSBoZWxwZnVsIGluIHRoaXMgY29udmVyc2F0aW9uIGluY2x1ZGU6XG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgRG8gSSBoYXZlIG1lbnRhbCBoZWFsdGggaW5zdXJhbmNlIGJlbmVmaXRzIHRoYXQgY292ZXIgcHN5Y2hvdGhlcmFweT9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIERvZXMgbXkgcG9saWN5IGNvdmVyIGFuIG91dCBvZiBuZXR3b3JrIExpY2Vuc2VkIFBzeWNob2xvZ2lzdD8gSWYgc28sIHdoYXQgcGVyY2VudGFnZSBpcyBjb3ZlcmVkIG9yIHdoYXQgaXMgdGhlIGNvdmVyYWdlIGFtb3VudCBwZXIgdGhlcmFweSBzZXNzaW9uP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgV2hhdCBpcyBteSBkZWR1Y3RpYmxlIGFuZCBoYXMgaXQgYmVlbiBtZXQ/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBBcmUgbXkgbWVkaWNhbCBhbmQgbWVudGFsIGhlYWx0aC9iZWhhdmlvcmFsIGhlYWx0aCBkZWR1Y3RpYmxlcyBzZXBhcmF0ZT9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIEhvdyBtYW55IHNlc3Npb25zIHBlciB5ZWFyIGRvZXMgbXkgaGVhbHRoIGluc3VyYW5jZSBjb3Zlcj9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIERvZXMgdGhlIGRpYWdub3NpcyBtYXR0ZXI/IEFyZSBzb21lIGRpYWdub3NlcyBjb3ZlcmVkIGFuZCBvdGhlcnMgbm90P1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgV2hhdCBwYXBlcndvcmsgb3IgZm9ybXMgZG8gSSBuZWVkIHRvIHN1Ym1pdCBmb3Igc2Vzc2lvbnMgdG8gYmUgY292ZXJlZD9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIElzIGFwcHJvdmFsIHJlcXVpcmVkIGZyb20gbXkgcHJpbWFyeSBjYXJlIHBoeXNpY2lhbj9cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cblxuY29uc3QgY2xhc3NlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMz5cbiAgICAgIE1vb2QgJiBGb29kXG4gICAgPC9oMz5cbiAgICA8cD5cbiAgICAgIE1vb2QgJiBGb29kIGlzIGEgY2xhc3MgZGVzaWduZWQgZm9yIGluZGl2aWR1YWxzIHN0cnVnZ2xpbmcgd2l0aCBvdmVyZWF0aW5nLCBtaW5kbGVzcyBlYXRpbmcsIHN0cmVzcyBlYXRpbmcsIGVtb3Rpb25hbCBlYXRpbmcsIHNoYW1lIGFyb3VuZCBlYXRpbmcsIG9yIGJpbmdlIGVhdGluZy4gVGhlIGNvdXJzZSBpcyBzdHJ1Y3R1cmVkIGludG8gNCBjbGFzc2VzIGVhY2ggbGFzdGluZyA5MCBtaW51dGVzLiBUaGUgY2xhc3MgY2VudGVycyBvbiBwcmVzZW50ZWQgbWF0ZXJpYWwsIHRob3VnaCBxdWVzdGlvbnMgYW5kIHBhcnRpY2lwYXRpb24gYXJlIHdlbGNvbWUgYW5kIGVuY291cmFnZWQuIENsYXNzIG1hdGVyaWFscyBhbHNvIGluY2x1ZGUgaGFuZG91dHMgYW5kIGF0LWhvbWUgcHJhY3RpY2UgZXhlcmNpc2VzLiBEdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2xhc3NlcyB3ZSB3aWxsIGNvdmVyIHRvcGljcyBpbmNsdWRpbmc6XG4gICAgPC9wPlxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXhGbG93OiAncm93IHdyYXAnIH19PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgd2hhdCBlbW90aW9uYWwgZWF0aW5nIGlzXG4gICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgY3VsdHVyYWwgaW1wbGljYXRpb25zXG4gICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgZW52aXJvbm1lbnRhbCBpbXBhY3RzXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBzZXQgcG9pbnQgdGhlb3J5XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBlbW90aW9uYWwgdnMgcGh5c2ljYWwgaHVuZ2VyXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBiaW5nZSBlYXRpbmcgY3ljbGVcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIGludGVycGVyc29uYWwgZHluYW1pY3MgYXJvdW5kIGZvb2RcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIHNlbGYtdGFsa1xuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIGJlaGF2aW9yIGFuYWx5c2lzICYgYmVoYXZpb3IgY2hhbmdlXG4gICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgbWluZGZ1bCBlYXRpbmdcbiAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBsb3ZpbmcgbGltaXRzXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBzZWxmLWNvbXBhc3Npb25cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIG1hbmFnaW5nIGRpZmZpY3VsdCBlbW90aW9uc1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgaGFiaXQgZm9ybWF0aW9uXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBzdGFnZXMgb2YgY2hhbmdlXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBoZWFsdGh5IGVhdGluZyBndWlkZWxpbmVzXG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxwPlxuICAgICAgQnkgdGhlIGVuZCBvZiB0aGUgY2xhc3Mgc2VyaWVzIHBhcnRpY2lwYW50cyB3aWxsIGJlIGFibGUgdG8gcmVjb2duaXplIG9wcG9ydHVuaXRpZXMgZm9yLCBwcmVwYXJlIGZvciwgYW5kIG1ha2UgcG9zaXRpdmUgY2hhbmdlcyBpbiB0aGVpciByZWxhdGlvbnNoaXBzIHdpdGggdGhlbXNlbHZlcywgZm9vZCwgYW5kIHRoZWlyIGVudmlyb25tZW50LlxuICAgIDwvcD5cbiAgICA8QWN0aXZlQ2xhc3NlcyAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgQWN0aXZlQ2xhc3NlcyA9IChwcm9wcykgPT4ge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdPcmRlciBjb21wbGV0ZSEnKTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgd2luZG93LkVCV2lkZ2V0cy5jcmVhdGVXaWRnZXQoe1xuICAgICAgICB3aWRnZXRUeXBlOiAnY2hlY2tvdXQnLFxuICAgICAgICBldmVudElkOiAnODEwMDAzNjcyNzknLFxuICAgICAgICBpZnJhbWVDb250YWluZXJJZDogJ2V2ZW50YnJpdGUtd2lkZ2V0LWNvbnRhaW5lci04MTAwMDM2NzI3OScsXG4gICAgICAgIGlmcmFtZUNvbnRhaW5lckhlaWdodDogNDI1LFxuICAgICAgICBvbk9yZGVyQ29tcGxldGU6IGNvbXBsZXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtyZWZdKTtcblxuICByZXR1cm4gPGRpdiByZWY9e3JlZn0gaWQ9XCJldmVudGJyaXRlLXdpZGdldC1jb250YWluZXItODEwMDAzNjcyNzlcIiAvPlxufVxuXG5jb25zdCByZXNvdXJjZXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8cD5cbiAgICAgIFRoZSBiZWxvdyBhcmUgcmVzb3VyY2VzIHRoYXQgSSBmaW5kIHRvIGJlIGNsaW5pY2FsbHkgdmFsdWFibGUuIEkgaGF2ZSBubyBhZmZpbGlhdGlvbiB3aXRoIGFueSBvZiB0aGUgaW5kaXZpZHVhbHMgb3IgZW50aXRpZXMgaW5kaWNhdGVkIGJlbG93LiBUaGVzZSByZXNvdXJjZXMgYXJlIHByb3ZpZGVkIHB1cmVseSBkdWUgdG8gbXkgcGVyY2VwdGlvbiBvZiB0aGVpciBjbGluaWNhbCBiZW5lZml0LiBJIHJlY2VpdmUgbm8gY29tcGVuc2F0aW9uIG9mIGFueSBraW5kIGZvciBzaGFyaW5nIHRoZXNlIHJlc291cmNlcy5cbiAgICA8L3A+XG4gICAgPGgzPldlYnBhZ2VzPC9oMz5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2FueGlldHljYW5hZGEuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkFueGlldHkgQ2FuYWRhPC9hPiBpcyBhbiBleGNlbGxlbnQgd2ViIHJlc291cmNlIGZvciBldmlkZW5jZSBiYXNlZCBpbmZvcm1hdGlvbiBhYm91dCBhbnhpZXR5LiBUaGUgd2Vic2l0ZSBpcyB3cml0dGVuIGluIGNsZWFyIGxhbmd1YWdlIHRoYXQgaXMgdGhvdWdodGZ1bCwgZWFzeSB0byB1bmRlcnN0YW5kLCBhbmQgaGVscGZ1bC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXBzLmFueGlldHljYW5hZGEuY29tL2NvdXJzZXMvbXktYW54aWV0eS1wbGFuLW1hcC1mb3ItYWR1bHRzL1wiIHRhcmdldD1cIl9ibGFua1wiPk15IEFueGlldHkgUGxhbjwvYT4gaXMgdGhlIG9ubGluZSBjb3Vyc2UgYXNzb2NpYXRlZCB3aXRoIEFueGlldHkgQ2FuYWRhLiBJdCBpcyBhIGZyZWUgY291cnNlIHRoYXQgcHJvdmlkZXMgZXhjZWxsZW50IGluZm9ybWF0aW9uIGluIGFkZGl0aW9uIHRvIHByYWN0aWNhbCB0b29scyBhbmQgcHJhY3RpY2VzIGZvciBtYW5hZ2luZyBhbnhpZXR5IGFuZCBhbnhpZXR5LWJhc2VkIGNvbmRpdGlvbnMuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QnJlbmUgQnJvd248L2E+IGlzIGFuIGF1dGhvciwgcmVzZWFyY2hlciwgYW5kIHNwZWFrZXIgdGhhdCBJIGhpZ2hseSByZWNvbW1lbmQuIFRoZSBsaW5rIGlzIHRvIGhlciBtYWluIHdlYnBhZ2UuIEJlbG93IGFyZSBzcGVjaWZpYyByZXNvdXJjZXMgb2YgaGVycyB0aGF0IEkgcmVjb21tZW5kLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dnc2MuYmVya2VsZXkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBHcmVhdGVyIEdvb2QgU2NpZW5jZSBDZW50ZXI8L2E+LSBCZXJrZWxleSBpcyBhIGNlbnRlciBvZiByZXNlYXJjaCBhbmQgaW5ub3ZhdGlvbiBmb2N1c2luZyBvbiBtYWtpbmcgcG9zaXRpdml0eSBhbmQgcG9zaXRpdmUgY2hhbmdlIGFjY2Vzc2libGUgdG8gYWxsLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lZHgub3JnL2NvdXJzZS90aGUtc2NpZW5jZS1vZi1oYXBwaW5lc3MtMFwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBTY2llbmNlIG9mIEhhcHBpbmVzczwvYT4gaXMgdGhlIG9ubGluZSBjb3Vyc2UgZnJvbSB0aGUgR3JlYXRlciBHb29kIFNjaWVuY2UgQ2VudGVyLiBJdCBpcyBhIGZyZWUgOC13ZWVrIGNvdXJzZSB0aGF0IHByb3ZpZGVzIHRvb2xzIHRvIGhhcHBpZXIgZXhwZXJpZW5jZXMgYW5kIGdyZWF0ZXIgbWVhbmluZyBpbiBsaWZlLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dnaWEuYmVya2VsZXkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiPkdyZWF0ZXIgR29vZCBpbiBBY3Rpb248L2E+IHByb3ZpZGVzIGRvYWJsZSBwcmFjdGljZXMgZm9yIG1ha2luZyBjb25jcmV0ZSBhbmQgaW1wYWN0ZnVsIHBvc2l0aXZlIGNoYW5nZXNcbiAgICA8L3A+XG5cbiAgICA8aDM+VmlkZW9zPC9oMz5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50ZWQuY29tL3RhbGtzL2JyZW5lX2Jyb3duX29uX3Z1bG5lcmFiaWxpdHk/dXRtX2NhbXBhaWduPXRlZHNwcmVhZCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dGVkY29tc2hhcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgUG93ZXIgb2YgVnVsbmVyYWJpbGl0eS0gQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlZC5jb20vdGFsa3MvYnJlbmVfYnJvd25fbGlzdGVuaW5nX3RvX3NoYW1lP3V0bV9jYW1wYWlnbj10ZWRzcHJlYWQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXRlZGNvbXNoYXJlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGlzdGVuaW5nIHRvIFNoYW1lLSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzI2MTM0ODcwOVwiIHRhcmdldD1cIl9ibGFua1wiPlN1cGVyU291bCBTZXNzaW9uczogVGhlIEFuYXRvbXkgb2YgVHJ1c3QtIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL3ZpZGVvcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BZGRpdGlvbmFsIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3lvdXR1LmJlL0l2dFpCVVNwbHI0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIFNwYWNlIEJldHdlZW4gU2VsZi1Fc3RlZW0gYW5kIFNlbGYtQ29tcGFzc2lvbi0gS3Jpc3RpbiBOZWZmPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3NlbGYtY29tcGFzc2lvbi5vcmcvdmlkZW9zL1wiIHRhcmdldD1cIl9ibGFua1wiPkFkZGl0aW9uYWwgS3Jpc3RpbiBOZWZmPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50ZWQuY29tL3RhbGtzL3NhbmRyYV9hYW1vZHRfd2h5X2RpZXRpbmdfZG9lc25fdF91c3VhbGx5X3dvcms/dXRtX2NhbXBhaWduPXRlZHNwcmVhZCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dGVkY29tc2hhcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5XaHkgRGlldGluZyBEb2Vzbid0IFVzdWFsbHkgV29yay0gU2FuZHJhIEFhbW9kdDwvYT48YnIgLz5cblxuICAgIDxoMz5BdWRpbyBSZWNvcmRpbmdzPC9oMz5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL2NlbnRlcmZvcm1zYy5vcmcvcHJhY3RpY2UtbXNjL2d1aWRlZC1tZWRpdGF0aW9ucy1hbmQtZXhlcmNpc2VzL1wiIHRhcmdldD1cIl9ibGFua1wiPk1pbmRmdWwgU2VsZiBDb21wYXNzaW9uIE1lZGl0YXRpb25zPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy51Y2xhaGVhbHRoLm9yZy9tYXJjL21pbmRmdWwtbWVkaXRhdGlvbnNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5VQ0xBIE1lZGl0YXRpb25zIChBbHNvIGF2YWlsYWJsZSBpbiBTcGFuaXNoISk8L2E+PGJyIC8+XG5cbiAgICA8aDM+Qm9va3M8L2gzPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2dlbmVlbnJvdGguY29tL2Jvb2tzL1wiIHRhcmdldD1cIl9ibGFua1wiPldvbWVuLCBGb29kLCBhbmQgR29kIGJ5IEdlbmVlbiBSb3RoPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL2Jvb2tzLWF1ZGlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBHaWZ0cyBvZiBJbXBlcmZlY3Rpb24gYnkgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vYm9va3MtYXVkaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGFyaW5nIEdyZWF0bHkgYnkgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vYm9va3MtYXVkaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmlzaW5nIFN0cm9uZyBieSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IGNsaWVudERvY3VtZW50cyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxwPlxuICAgICAgVGhlIGZvbGxvd2luZyBmb3JtcyBhcmUgZm9yIHlvdXIgcmV2aWV3LiBJZiB3ZSBoYXZlIHNjaGVkdWxlZCBhbiBpbi1wZXJzb24gYXBwb2ludG1lbnQsIGNhcmVmdWxseSByZWFkIGVhY2ggb2YgdGhlIGZvcm1zIGJlbG93LiBQbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIGZpcnN0IHRocmVlIGZvcm1zIHRvIG91ciBmaXJzdCBhcHBvaW50bWVudC4gV2Ugd2lsbCByZXZpZXcgdGhlbSB0b2dldGhlci4gSWYgeW91IHdvdWxkIGxpa2UgZm9yIHlvdXIgaGVhbHRoIGluZm9ybWF0aW9uIHRvIGJlIHNoYXJlZCB3aXRoIGFub3RoZXIgaW5kaXZpZHVhbCBvciBncm91cCwgb3Igd291bGQgbGlrZSBtZSB0byBnYXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGVtLCBwbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIFJlbGVhc2Ugb2YgSW5mb3JtYXRpb24gZm9ybSB0byB5b3VyIG5leHQgYXBwb2ludG1lbnQgd2hpY2ggaWRlbnRpZmllcyB0aGUgcGVyc29uIG9yIGVudGl0eSB3aXRoIHdob20geW91ciBpbmZvcm1hdGlvbiBzaG91bGQgYmUgc2hhcmVkLlxuICAgIDwvcD5cbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9JbmZvcm1lZCBDb25zZW50LnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPkluZm9ybWVkIENvbnNlbnQ8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvSW50YWtlIEZvcm0ucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+SW50YWtlIEZvcm08L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvUmVjZWlwdCBvZiBGb3Jtcy5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5SZWNlaXB0IG9mIEZvcm1zPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL1ByaXZhY3kgUG9saWN5LnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlByaXZhY3kgUG9saWN5PC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL1JPSS5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5SZWxlYXNlIG9mIEluZm9ybWF0aW9uPC9hPlxuICAgICAgPC9saT5cblxuICAgIDwvdWw+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5cblxuY29uc3QgQ2FyZDEgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBwcm9wcy50aXRsZSA/XG4gICAgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtdGl0bGUnPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICApIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGlkID0gcHJvcHMuc2hyaW5rID8gJ3NocmluaycgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD17aWR9XG4gICAgICBjbGFzc05hbWU9J2NhcmQgY2FyZC0xJ1xuICAgID5cbiAgICAgIHt0aXRsZX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxuICAgICAgICB7cHJvcHMuYm9keX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuXG5cbmNvbnN0IFBhZ2VUaXRsZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlLXRpdGxlJyBpZD0ndG9wJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmNsYXNzIERyYXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoYW5kbGVQcmFjdGljZUNsaWNrLFxuICAgICAgaGFuZGxlU2VydmljZXNDbGljayxcbiAgICAgIGhhbmRsZUNsYXNzZXNDbGljayxcbiAgICAgIGhhbmRsZUNvbnRhY3RDbGljayxcbiAgICAgIGhhbmRsZURvY3VtZW50c0NsaWNrLFxuICAgICAgaGFuZGxlUmVzb3VyY2VzQ2xpY2tcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGFjdGl2ZSA9ICcnXG5cbiAgICBjb25zdCBtZW51U3R5bGUgPSB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBjdXJyZW50Q29sb3InLFxuICAgICAgcGFkZGluZzogMTBcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcmF3ZXInPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUHJhY3RpY2VDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdwcmFjdGljZScgfSl9XG4gICAgICAgICAgc3R5bGU9e3sgLi4ubWVudVN0eWxlLCBib3JkZXJUb3A6ICcxcHggc29saWQgY3VycmVudENvbG9yJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgUHJhY3RpY2UgQXJlYXNcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VydmljZXNDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdzZXJ2aWNlcycgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIFNlcnZpY2VzXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsYXNzZXNDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdjbGFzc2VzJyB9KX1cbiAgICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgQ2xhc3Nlc1xuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb2N1bWVudHNDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdkb2NzJyB9KX1cbiAgICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgRG9jdW1lbnRzXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbnRhY3RDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdjb250YWN0JyB9KX1cbiAgICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgQ29udGFjdFxuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZXNvdXJjZXNDbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdyZXNvdXJjZXMnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBSZXNvdXJjZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvLFxuICAgICAgdGV4dCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBjbGFzc2VzXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uICR7Y2xhc3Nlc31gfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vQXBwJztcblxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IFxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=