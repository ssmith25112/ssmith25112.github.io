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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card2, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActiveClasses, null)));
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
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "what emotional eating is"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "cultural implications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "environmental impacts"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "set point theory"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "emotional vs physical hunger"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "binge eating cycle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "interpersonal dynamics around food"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "self-talk")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "behavior analysis & behavior change"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "mindful eating"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "loving limits"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "self-compassion"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "managing difficult emotions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "habit formation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "stages of change"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "healthy eating guidelines"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "By the end of the class series participants will be able to recognize opportunities for, prepare for, and make positive changes in their relationships with themselves, food, and their environment."));

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

var Card2 = function Card2(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card card-1"
  }, props.children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcz9lODVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2VzbS9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LWludmFyaWFudC9kaXN0L3RpbnktaW52YXJpYW50LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzL2Nvcm5lcnBsYW50LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvZWF0aW5nY29uY2VybnMuanBnIiwid2VicGFjazovLy8uL3Jlcy9oZXJvLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbGlmZXN0eWxlLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbW9yZVJlc291cmNlcy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3BpbmVhcHBsZS5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3ByYWN0aWNlYXJlYXMuanBnIiwid2VicGFjazovLy8uL3Jlcy9yZWxhdGlvbnNoaXBzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3VjY3VsZW50bWF0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvdHJhbnNpdGlvbnMuanBnIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInBhZ2UiLCJkb2NrIiwiY2xvc2VEcmF3ZXIiLCJuYW1lIiwiaGlzdG9yeSIsInB1c2giLCJjdXJyZW50Iiwic2hvd0RyYXdlciIsInN0YXRlIiwic2Nyb2xsVG8iLCJzaG93SGFtYnVyZ2VyIiwiY3VycmVudExvY2F0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImN1cnJlbnRQYWdlIiwiY3JlYXRlSGlzdG9yeSIsImxpc3RlbiIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZW1wbGF0ZVN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmb250RmFtaWx5IiwiY29udGVudCIsImhhbmRsZU5hdiIsInRvZ2dsZURyYXdlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9keSIsImNsYXNzZXMiLCJjbiIsIm92ZXJsYXlDbGFzc2VzIiwib25EcmF3ZXJQcmFjdGljZUNsaWNrIiwib25OYXYiLCJvbkRyYXdlclNlcnZpY2VzQ2xpY2siLCJvbkRyYXdlckNvbnRhY3RDbGljayIsIm9uRHJhd2VyQ2xhc3Nlc0NsaWNrIiwib25EcmF3ZXJEb2N1bWVudHNDbGljayIsIm9uRHJhd2VyUmVzb3VyY2VzQ2xpY2siLCJoYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2siLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwidW5kZWZpbmVkIiwiYmVoYXZpb3IiLCJib2R5U3R5bGUiLCJuIiwicmVuZGVyRHJhd2VyIiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJpbmxpbmVTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsIm1lbnVTdHlsZSIsImN1cnNvciIsImFjdGl2ZSIsIm9wZW5EcmF3ZXIiLCJyZW5kZXJIYW1idXJnZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJGb290ZXIiLCJIb21lIiwibGF6eSIsIm1lZXRTdGVwaCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsIm1hcmdpblRvcCIsIm1haWwiLCJQcmFjdGljZUFyZWFzIiwicHJhY3RpY2VBcmVhcyIsIlNlcnZpY2VzIiwic2VydmljZXMiLCJzZXJ2aWNlc1JlaW1idXJzbWVudCIsInNlcnZpY2VzSW5zdXJhY2UiLCJDbGFzc2VzIiwiQ2xpZW50RG9jdW1lbnRzIiwiY2xpZW50RG9jdW1lbnRzIiwiUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwiRmVlcyIsImZlZXMiLCJmbGV4RmxvdyIsIkFjdGl2ZUNsYXNzZXMiLCJyZWYiLCJ1c2VSZWYiLCJjb21wbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJFQldpZGdldHMiLCJjcmVhdGVXaWRnZXQiLCJ3aWRnZXRUeXBlIiwiZXZlbnRJZCIsImlmcmFtZUNvbnRhaW5lcklkIiwiaWZyYW1lQ29udGFpbmVySGVpZ2h0Iiwib25PcmRlckNvbXBsZXRlIiwiQ2FyZDEiLCJ0aXRsZSIsImlkIiwic2hyaW5rIiwiYm9keSIsIkNhcmQyIiwiUGFnZVRpdGxlIiwiRHJhd2VyIiwiaGFuZGxlUHJhY3RpY2VDbGljayIsImhhbmRsZVNlcnZpY2VzQ2xpY2siLCJoYW5kbGVDbGFzc2VzQ2xpY2siLCJoYW5kbGVDb250YWN0Q2xpY2siLCJoYW5kbGVEb2N1bWVudHNDbGljayIsImhhbmRsZVJlc291cmNlc0NsaWNrIiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsImJvcmRlclRvcCIsIkJ1dHRvbiIsInRvIiwidGV4dCIsIm9uQ2xpY2siLCJSZWFjdERPTSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkEsY0FBYyxtQkFBTyxDQUFDLGtIQUFzRDs7QUFFNUUsNENBQTRD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QUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXND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T0FMSztBQVFQLGFBQ0Usd0VBRUU7QUFDRSxpQkFBUyxtQkFBWUEsT0FBWixDQURYO0FBRUUsZUFBTyxFQUFFZ0c7QUFGWCxTQUlHRCxJQUpILEVBS0csS0FBS2pJLEtBQUwsQ0FBV3NELFFBTGQsQ0FGRixDQURGO0FBWUQ7QUFyQkg7O0FBQUE7QUFBQSxFQUE0QnZCLDRDQUFLLENBQUNDLFNBQWxDLEU7Ozs7Ozs7Ozs7OztBQzVsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUFtRyxnREFBUSxDQUFDQyxNQUFULENBQWdCckcsNENBQUssQ0FBQ3NHLGFBQU4sQ0FBb0J0SSx3Q0FBcEIsQ0FBaEIsRUFBMEMrQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBMUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xudmFyIGdldFVybCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL2hlcm8uanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9lYXRpbmdjb25jZXJucy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL2xpZmVzdHlsZS5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL21lZGljYWxwcm9ibGVtcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3JlbGF0aW9uc2hpcHMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zdHJlc3NtYW5hZ2VtZW50LmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX182X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvdHJhbnNpdGlvbnMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zdWNjdWxlbnRCdXJzdC5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3BpbmVhcHBsZS5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL21vcmVSZXNvdXJjZXMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzEwX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvcHJhY3RpY2VhcmVhcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMTFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9jb3JuZXJwbGFudC5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMTJfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zdWNjdWxlbnRtYXQuanBnXCIpKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBjb2xvcjogIzNmNGM0ZTtcXG59XFxuXFxuaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmF2TWVudSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAubmF2TWVudSB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gIH1cXG59XFxuXFxuLmJhY2tkcm9wIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVyby1jb250ZW50IGJsb2NrcXVvdGUge1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmhlcm8tY29udGVudCBoMSB7XFxuICAvKiBjb2xvcjogI0ZGRkZGRjsgKi9cXG59XFxuXFxuYmxvY2txdW90ZSBmb290ZXIge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgLyogY29sb3I6ICNGRkZGRkY7ICovXFxufVxcblxcbi5tZWV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFQUU1O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLm1lZXRDb250ZW50IHtcXG4gIG1heC13aWR0aDogOTc1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2ZpbGVQaG90byB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMjc1cHg7XFxuICBtYXgtaGVpZ2h0OiAzNzVweDtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmJpbyB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uYmlvIC5iaW9TdWJ0aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5iaW8gcCB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAvKiBwYWRkaW5nOiAwcHggMzBweDsgKi9cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5tZWV0Q29udGVudCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYmlvIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG5cXG4gIC5iaW8sXFxuICAucHJvZmlsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29udGFjdD5wIHtcXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAjc2hyaW5rIHtcXG4gICAgbWFyZ2luOiA1MHB4IDEwcHg7XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLnByYWN0aWNlQXJlYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xcbn1cXG5cXG5cXG5cXG4ucHJhY3RpY2VBcmVhcyAuYXJlYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJhY3RpY2VBcmVhcyAuYXJlYXM+LmFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCAyOTBweDtcXG4gIG1heC13aWR0aDogMjkwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMzBweCAzMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcmFjdGljZUFyZWFzIC5hcmVhcz4uYXJlYTpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXJlYUltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuLmFyZWFFYXRpbmdDb25jZXJucyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDE0MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtNTBweDtcXG59XFxuXFxuLmFyZWFMaWZlc3R5bGUge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtNjVweDtcXG59XFxuXFxuLyogXFxuLmFyZWFMaWZlc3R5bGUubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3Jlcy9saWZlc3R5bGUtcGxhY2Vob2xkZXIuanBnJykgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC02NXB4O1xcbn0gKi9cXG5cXG4uYXJlYU1lZGljYWxQcm9ibGVtcyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDE0MCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbn1cXG5cXG4vKiAuYXJlYU1lZGljYWxQcm9ibGVtcy5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vcmVzL21lZGljYWxwcm9ibGVtcy1wbGFjZWhvbGRlci5qcGcnKSBuby1yZXBlYXQ7XFxufSAqL1xcblxcbi5hcmVhUmVsYXRpb25zaGlwcyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC04MHB4O1xcbn1cXG5cXG4vKiBcXG4uYXJlYVJlbGF0aW9uc2hpcHNqLmxhenkge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9yZXMvcmVsYXRpb25zaGlwcy5qcGcnKSBuby1yZXBlYXQ7XFxufSAqL1xcblxcbi5hcmVhU3RyZXNzIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b20gLTgwcHg7XFxufVxcblxcbi8qIC5hcmVhU3RyZXNzLmxhenkge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9yZXMvc3RyZXNzbWFuYWdlbWVudC1wbGFjZWhvbGRlci5qcGcnKSBuby1yZXBlYXQ7XFxufSAqL1xcblxcbi5hcmVhVHJhbnNpdGlvbnMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX182X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IC0yMHB4O1xcbn1cXG5cXG4vKiAuYXJlYVRyYW5zaXRpb25zIC5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vcmVzL3RyYW5zaXRpb25zLXBsYWNlaG9sZGVyLmpwZycpIG5vLXJlcGVhdDtcXG59ICovXFxuXFxuLmFyZWFUZXh0IHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxuICBtYXgtaGVpZ2h0OiAxMjBweDtcXG59XFxuXFxuLmFyZWFUZXh0IGRpdiB7XFxuICBtYXJnaW4tbGVmdDogNDJweDtcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbi5hcmVhT3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgaGVpZ2h0OiAyNjBweDtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuLnNlcnZpY2VzIHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJFRUMxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNlcnZpY2VzRGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5zZXJ2aWNlc0Rlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuc2VydmljZXNJbWFnZSB7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcblxcbi5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzEsIDIwOCwgMjMwLCAxKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxMDBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMjYsIDI0MCk7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLnJlYWRNb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNsYXNzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXG59XFxuXFxuXFxuLmNvbnRhY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmNvbnRhY3QgZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG5cXG4uZ3JvdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNmNGM0ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMzZjRjNGU7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIExBQkVMID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmxhYmVsIHtcXG4gIGNvbG9yOiAjM2Y0YzRlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgbGVmdDogNXB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxuaW5wdXQ6Zm9jdXN+bGFiZWwsXFxuaW5wdXQ6dmFsaWR+bGFiZWwge1xcbiAgdG9wOiAtMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1c35sYWJlbCxcXG50ZXh0YXJlYTp2YWxpZH5sYWJlbCB7XFxuICB0b3A6IC0yMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbi8qIFRPRE8gbGVhcm4gdGhpcyAqL1xcblxcbi8qIEJPVFRPTSBCQVJTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5iYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5iYXI6YmVmb3JlLFxcbi5iYXI6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiAwO1xcbiAgYm90dG9tOiAxcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXG59XFxuXFxuLmJhcjpiZWZvcmUge1xcbiAgbGVmdDogNTAlO1xcbn1cXG5cXG4uYmFyOmFmdGVyIHtcXG4gIHJpZ2h0OiA1MCU7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbmlucHV0OmZvY3Vzfi5iYXI6YmVmb3JlLFxcbmlucHV0OmZvY3Vzfi5iYXI6YWZ0ZXIge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxudGV4dGFyZWE6Zm9jdXN+LmJhcjpiZWZvcmUsXFxudGV4dGFyZWE6Zm9jdXN+LmJhcjphZnRlciB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBISUdITElHSFRFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhpZ2hsaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHRvcDogMjUlO1xcbiAgbGVmdDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG5pbnB1dDpmb2N1c34uaGlnaGxpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbnRleHRhcmVhOmZvY3Vzfi5oaWdobGlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgLW1vei1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG59XFxuXFxuLyogQU5JTUFUSU9OUyA9PT09PT09PT09PT09PT09ICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6ICMzZjRjNGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuQC1tb3ota2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6ICMzZjRjNGU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFQUU1O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuXFxuI2FkZHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMDA3Qyc7XFxuICBwYWRkaW5nOiAwIDE1cHhcXG59XFxuXFxuI2FkZHJlc3M6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwwMDdDJztcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzc2cHgpIHtcXG5cXG4gIC5mb290ZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNhZGRyZXNzOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDBcXG4gIH1cXG5cXG4gICNhZGRyZXNzOmFmdGVyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXFxuXFxuLmxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLmxpbms6aG92ZXI6YmVmb3JlLFxcbi5saW5rOmZvY3VzOmJlZm9yZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi8qIC5uYXZNZW51OmJlZm9yZSB7XFxuICBib3R0b206IC01cHggIWltcG9ydGFudDtcXG59ICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fN19fXyArIFwiKTtcXG59XFxuXFxuLyogLmNvbnRhY3QubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKCcuLi9yZXMvc3VjY3VsZW50QnVyc3QtcGxhY2Vob2xkZXIuanBnJyk7XFxufSAqL1xcblxcbi5tb3JlQ2xhc3NlcyB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX184X19fICsgXCIpO1xcbn1cXG5cXG4vKiBcXG4ubW9yZUNsYXNzZXMubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKCcuLi9yZXMvcGluZWFwcGxlLXBsYWNlaG9sZGVyLmpwZycpO1xcbn0gKi9cXG5cXG4ubW9yZVJlc291cmNlcyB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX185X19fICsgXCIpO1xcbn1cXG5cXG4vKiBcXG4ubW9yZVJlc291cmNlcy5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoJy4uL3Jlcy9tb3JlUmVzb3VyY2VzLXBsYWNlaG9sZGVyLmpwZycpO1xcbn0gKi9cXG5cXG4ubW9yZVByYWN0aWNlIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEwX19fICsgXCIpO1xcbn1cXG5cXG4vKiAubW9yZVByYWN0aWNlLmxhenkge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybCgnLi4vcmVzL3ByYWN0aWNlYXJlYXMtcGxhY2Vob2xkZXIuanBnJyk7XFxufSAqL1xcblxcbi5tb3JlU2VydmljZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTFfX18gKyBcIik7XFxufVxcblxcbi5tb3JlU2VydmljZXMubGF6eSB7XFxuICAvKiBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKCcuLi9yZXMvY29ybmVycGxhbnQtcGxhY2Vob2xkZXIuanBnJyk7ICovXFxufVxcblxcbi5tb3JlRG9jdW1lbnRzIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEyX19fICsgXCIpO1xcblxcbn1cXG5cXG4vKiAubW9yZURvY3VtZW50cy5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoJy4uL3Jlcy9zdWNjdWxlbnRtYXQtcGxhY2Vob2xkZXIuanBnJyk7XFxuXFxufSAqL1xcblxcbi5zaWduYXR1cmUge1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5uYXZNZW51OmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5wYWdlLXRpdGxlIC50aXRsZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbjogNTBweCAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmNhcmQtYm9keSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjIyMjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQtMSB7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxufVxcblxcbi5jYXJkLTIge1xcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4uY2FyZC0zIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4uY2FyZC00IHtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcblxcbi5jYXJkLTUge1xcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLmRyYXdlci1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uZHJhd2VyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxNTVweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7ICovXFxuICB0b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5kcmF3ZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUFFNTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJveC1zaGFkb3c6IDExcHggMTBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDEwcHggMCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuXFxuLmRyYXdlcisuZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBDM0M2O1xcbn1cXG5cXG4uZHJhd2VyLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmhlYWRlci1uYXYtYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmRyYXdlci1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcmF3ZXItaXRlbT5kaXYge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaGFtYnVyZ2VyOmhvdmVyICoge1xcbiAgY29sb3I6ICM4NzkwOTI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIC5tb3JlU2VydmljZXMgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luOiB1bnNldDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxufSAqL1wiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgcmVzb2x2ZVBhdGhuYW1lIGZyb20gJ3Jlc29sdmUtcGF0aG5hbWUnO1xuaW1wb3J0IHZhbHVlRXF1YWwgZnJvbSAndmFsdWUtZXF1YWwnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG5mdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGggOiAnLycgKyBwYXRoO1xufVxuZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXggKyAnKFxcXFwvfFxcXFw/fCN8JCknLCAnaScpLnRlc3QocGF0aCk7XG59XG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuXG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG5cbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2ggPT09ICc/JyA/ICcnIDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2ggPT09ICcjJyA/ICcnIDogaGFzaFxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICB2YXIgcGF0aCA9IHBhdGhuYW1lIHx8ICcvJztcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSwgY3VycmVudExvY2F0aW9uKSB7XG4gIHZhciBsb2NhdGlvbjtcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gT25lLWFyZyBmb3JtOiBwdXNoKGxvY2F0aW9uKVxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIHBhdGgpO1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSByZXNvbHZlUGF0aG5hbWUobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn1cbmZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCA9PT0gYi5oYXNoICYmIGEua2V5ID09PSBiLmtleSAmJiB2YWx1ZUVxdWFsKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc2V0UHJvbXB0KG5leHRQcm9tcHQpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHByb21wdCA9PSBudWxsLCAnQSBoaXN0b3J5IHN1cHBvcnRzIG9ubHkgb25lIHByb21wdCBhdCBhIHRpbWUnKSA6IHZvaWQgMDtcbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJvbXB0ID09PSBuZXh0UHJvbXB0KSBwcm9tcHQgPSBudWxsO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETzogSWYgYW5vdGhlciB0cmFuc2l0aW9uIHN0YXJ0cyB3aGlsZSB3ZSdyZSBzdGlsbCBjb25maXJtaW5nXG4gICAgLy8gdGhlIHByZXZpb3VzIG9uZSwgd2UgbWF5IGVuZCB1cCBpbiBhIHdlaXJkIHN0YXRlLiBGaWd1cmUgb3V0IHRoZVxuICAgIC8vIGJlc3Qgd2F5IHRvIGhhbmRsZSB0aGlzLlxuICAgIGlmIChwcm9tcHQgIT0gbnVsbCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiBwcm9tcHQgPT09ICdmdW5jdGlvbicgPyBwcm9tcHQobG9jYXRpb24sIGFjdGlvbikgOiBwcm9tcHQ7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGdldFVzZXJDb25maXJtYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKHJlc3VsdCwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdBIGhpc3RvcnkgbmVlZHMgYSBnZXRVc2VyQ29uZmlybWF0aW9uIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHVzZSBhIHByb21wdCBtZXNzYWdlJykgOiB2b2lkIDA7XG4gICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBmcm9tIGEgdHJhbnNpdGlvbiBob29rIHRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgY2FsbGJhY2socmVzdWx0ICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBmdW5jdGlvbiBhcHBlbmRMaXN0ZW5lcihmbikge1xuICAgIHZhciBpc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgIGlmIChpc0FjdGl2ZSkgZm4uYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0UHJvbXB0OiBzZXRQcm9tcHQsXG4gICAgY29uZmlybVRyYW5zaXRpb25UbzogY29uZmlybVRyYW5zaXRpb25UbyxcbiAgICBhcHBlbmRMaXN0ZW5lcjogYXBwZW5kTGlzdGVuZXIsXG4gICAgbm90aWZ5TGlzdGVuZXJzOiBub3RpZnlMaXN0ZW5lcnNcbiAgfTtcbn1cblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiBnZXRDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBicm93c2VyIGZpcmVzIHBvcHN0YXRlIG9uIGhhc2ggY2hhbmdlLlxuICogSUUxMCBhbmQgSUUxMSBkbyBub3QuXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA9PT0gLTE7XG59XG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cblxuZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICBldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSA9PT0gLTE7XG59XG5cbnZhciBQb3BTdGF0ZUV2ZW50ID0gJ3BvcHN0YXRlJztcbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbmZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHByb3BzKSB7XG4gIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcHMgPSB7fTtcbiAgfVxuXG4gICFjYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHZhciBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHZhciBjYW5Vc2VIaXN0b3J5ID0gc3VwcG9ydHNIaXN0b3J5KCk7XG4gIHZhciBuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lciA9ICFzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKCk7XG4gIHZhciBfcHJvcHMgPSBwcm9wcyxcbiAgICAgIF9wcm9wcyRmb3JjZVJlZnJlc2ggPSBfcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gX3Byb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB2b2lkIDAgPyBnZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gX3Byb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHZvaWQgMCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuICB2YXIgYmFzZW5hbWUgPSBwcm9wcy5iYXNlbmFtZSA/IHN0cmlwVHJhaWxpbmdTbGFzaChhZGRMZWFkaW5nU2xhc2gocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHBhdGggPSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghYmFzZW5hbWUgfHwgaGFzQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKSA6IHZvaWQgMDtcbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSBzdHJpcEJhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuICAgIGlmIChpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KGV2ZW50KSkgcmV0dXJuO1xuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihldmVudC5zdGF0ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpKTtcbiAgfVxuXG4gIHZhciBmb3JjZU5leHRQb3AgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjsgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBrZXlzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIGtleXMgd2UgZG9uJ3Qga25vdy5cblxuICAgIHZhciB0b0luZGV4ID0gYWxsS2V5cy5pbmRleE9mKHRvTG9jYXRpb24ua2V5KTtcbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuICAgIHZhciBmcm9tSW5kZXggPSBhbGxLZXlzLmluZGV4T2YoZnJvbUxvY2F0aW9uLmtleSk7XG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5pdGlhbExvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpO1xuICB2YXIgYWxsS2V5cyA9IFtpbml0aWFsTG9jYXRpb24ua2V5XTsgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gYmFzZW5hbWUgKyBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuICAgICAgICAgIG5leHRLZXlzLnB1c2gobG9jYXRpb24ua2V5KTtcbiAgICAgICAgICBhbGxLZXlzID0gbmV4dEtleXM7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpIDogdm9pZCAwO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIGFsbEtleXNbcHJldkluZGV4XSA9IGxvY2F0aW9uLmtleTtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5JykgOiB2b2lkIDA7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgZ28oLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIGdvKDEpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxICYmIGRlbHRhID09PSAxKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lckNvdW50ID09PSAwKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGJsb2NrKHByb21wdCkge1xuICAgIGlmIChwcm9tcHQgPT09IHZvaWQgMCkge1xuICAgICAgcHJvbXB0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdmFyIHVubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGdsb2JhbEhpc3RvcnkubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGluaXRpYWxMb2NhdGlvbixcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG52YXIgSGFzaENoYW5nZUV2ZW50JDEgPSAnaGFzaGNoYW5nZSc7XG52YXIgSGFzaFBhdGhDb2RlcnMgPSB7XG4gIGhhc2hiYW5nOiB7XG4gICAgZW5jb2RlUGF0aDogZnVuY3Rpb24gZW5jb2RlUGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICchJyA/IHBhdGggOiAnIS8nICsgc3RyaXBMZWFkaW5nU2xhc2gocGF0aCk7XG4gICAgfSxcbiAgICBkZWNvZGVQYXRoOiBmdW5jdGlvbiBkZWNvZGVQYXRoKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJyEnID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xuICAgIH1cbiAgfSxcbiAgbm9zbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IHN0cmlwTGVhZGluZ1NsYXNoLFxuICAgIGRlY29kZVBhdGg6IGFkZExlYWRpbmdTbGFzaFxuICB9LFxuICBzbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IGFkZExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBhZGRMZWFkaW5nU2xhc2hcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdmFyIGhhc2hJbmRleCA9IGhyZWYuaW5kZXhPZignIycpO1xuICByZXR1cm4gaGFzaEluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zdWJzdHJpbmcoaGFzaEluZGV4ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgdmFyIGhhc2hJbmRleCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgaGFzaEluZGV4ID49IDAgPyBoYXNoSW5kZXggOiAwKSArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIYXNoSGlzdG9yeShwcm9wcykge1xuICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHByb3BzID0ge307XG4gIH1cblxuICAhY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnSGFzaCBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuR29XaXRob3V0UmVsb2FkID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKTtcbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gX3Byb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB2b2lkIDAgPyBnZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMkaGFzaFR5cGUgPSBfcHJvcHMuaGFzaFR5cGUsXG4gICAgICBoYXNoVHlwZSA9IF9wcm9wcyRoYXNoVHlwZSA9PT0gdm9pZCAwID8gJ3NsYXNoJyA6IF9wcm9wcyRoYXNoVHlwZTtcbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyBzdHJpcFRyYWlsaW5nU2xhc2goYWRkTGVhZGluZ1NsYXNoKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcbiAgdmFyIF9IYXNoUGF0aENvZGVycyRoYXNoVCA9IEhhc2hQYXRoQ29kZXJzW2hhc2hUeXBlXSxcbiAgICAgIGVuY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZW5jb2RlUGF0aCxcbiAgICAgIGRlY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZGVjb2RlUGF0aDtcblxuICBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbigpIHtcbiAgICB2YXIgcGF0aCA9IGRlY29kZVBhdGgoZ2V0SGFzaFBhdGgoKSk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghYmFzZW5hbWUgfHwgaGFzQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKSA6IHZvaWQgMDtcbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSBzdHJpcEJhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24ocGF0aCk7XG4gIH1cblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH1cblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gIHZhciBpZ25vcmVQYXRoID0gbnVsbDtcblxuICBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcbiAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuXG4gICAgaWYgKHBhdGggIT09IGVuY29kZWRQYXRoKSB7XG4gICAgICAvLyBFbnN1cmUgd2UgYWx3YXlzIGhhdmUgYSBwcm9wZXJseS1lbmNvZGVkIGhhc2guXG4gICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICAgICAgdmFyIHByZXZMb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG4gICAgICBpZiAoIWZvcmNlTmV4dFBvcCAmJiBsb2NhdGlvbnNBcmVFcXVhbChwcmV2TG9jYXRpb24sIGxvY2F0aW9uKSkgcmV0dXJuOyAvLyBBIGhhc2hjaGFuZ2UgZG9lc24ndCBhbHdheXMgPT0gbG9jYXRpb24gY2hhbmdlLlxuXG4gICAgICBpZiAoaWdub3JlUGF0aCA9PT0gY3JlYXRlUGF0aChsb2NhdGlvbikpIHJldHVybjsgLy8gSWdub3JlIHRoaXMgY2hhbmdlOyB3ZSBhbHJlYWR5IHNldFN0YXRlIGluIHB1c2gvcmVwbGFjZS5cblxuICAgICAgaWdub3JlUGF0aCA9IG51bGw7XG4gICAgICBoYW5kbGVQb3AobG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uOyAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIHBhdGhzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIHBhdGhzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKGNyZWF0ZVBhdGgodG9Mb2NhdGlvbikpO1xuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG4gICAgdmFyIGZyb21JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKGNyZWF0ZVBhdGgoZnJvbUxvY2F0aW9uKSk7XG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH0gLy8gRW5zdXJlIHRoZSBoYXNoIGlzIGVuY29kZWQgcHJvcGVybHkgYmVmb3JlIGRvaW5nIGFueXRoaW5nIGVsc2UuXG5cblxuICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgocGF0aCk7XG4gIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKCk7XG4gIHZhciBhbGxQYXRocyA9IFtjcmVhdGVQYXRoKGluaXRpYWxMb2NhdGlvbildOyAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiAnIycgKyBlbmNvZGVQYXRoKGJhc2VuYW1lICsgY3JlYXRlUGF0aChsb2NhdGlvbikpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgcGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChiYXNlbmFtZSArIHBhdGgpO1xuICAgICAgdmFyIGhhc2hDaGFuZ2VkID0gZ2V0SGFzaFBhdGgoKSAhPT0gZW5jb2RlZFBhdGg7XG5cbiAgICAgIGlmIChoYXNoQ2hhbmdlZCkge1xuICAgICAgICAvLyBXZSBjYW5ub3QgdGVsbCBpZiBhIGhhc2hjaGFuZ2Ugd2FzIGNhdXNlZCBieSBhIFBVU0gsIHNvIHdlJ2RcbiAgICAgICAgLy8gcmF0aGVyIHNldFN0YXRlIGhlcmUgYW5kIGlnbm9yZSB0aGUgaGFzaGNoYW5nZS4gVGhlIGNhdmVhdCBoZXJlXG4gICAgICAgIC8vIGlzIHRoYXQgb3RoZXIgaGFzaCBoaXN0b3JpZXMgaW4gdGhlIHBhZ2Ugd2lsbCBjb25zaWRlciBpdCBhIFBPUC5cbiAgICAgICAgaWdub3JlUGF0aCA9IHBhdGg7XG4gICAgICAgIHB1c2hIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKGhpc3RvcnkubG9jYXRpb24pKTtcbiAgICAgICAgdmFyIG5leHRQYXRocyA9IGFsbFBhdGhzLnNsaWNlKDAsIHByZXZJbmRleCA9PT0gLTEgPyAwIDogcHJldkluZGV4ICsgMSk7XG4gICAgICAgIG5leHRQYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICBhbGxQYXRocyA9IG5leHRQYXRocztcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdIYXNoIGhpc3RvcnkgY2Fubm90IFBVU0ggdGhlIHNhbWUgcGF0aDsgYSBuZXcgZW50cnkgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2snKSA6IHZvaWQgMDtcbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIHBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBSRVBMQUNFLCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMuaW5kZXhPZihjcmVhdGVQYXRoKGhpc3RvcnkubG9jYXRpb24pKTtcbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxQYXRoc1twcmV2SW5kZXhdID0gcGF0aDtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbyhuKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhjYW5Hb1dpdGhvdXRSZWxvYWQsICdIYXNoIGhpc3RvcnkgZ28obikgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZCBpbiB0aGlzIGJyb3dzZXInKSA6IHZvaWQgMDtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSAmJiBkZWx0YSA9PT0gMSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50JDEsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50JDEsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobiwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgbG93ZXJCb3VuZCksIHVwcGVyQm91bmQpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCBzdG9yZXMgbG9jYXRpb25zIGluIG1lbW9yeS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3RvcnkocHJvcHMpIHtcbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgX3Byb3BzJGluaXRpYWxFbnRyaWVzID0gX3Byb3BzLmluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEVudHJpZXMgPSBfcHJvcHMkaW5pdGlhbEVudHJpZXMgPT09IHZvaWQgMCA/IFsnLyddIDogX3Byb3BzJGluaXRpYWxFbnRyaWVzLFxuICAgICAgX3Byb3BzJGluaXRpYWxJbmRleCA9IF9wcm9wcy5pbml0aWFsSW5kZXgsXG4gICAgICBpbml0aWFsSW5kZXggPSBfcHJvcHMkaW5pdGlhbEluZGV4ID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJGluaXRpYWxJbmRleCxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBfcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdm9pZCAwID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gaGlzdG9yeS5lbnRyaWVzLmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfVxuXG4gIHZhciBpbmRleCA9IGNsYW1wKGluaXRpYWxJbmRleCwgMCwgaW5pdGlhbEVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIHZhciBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnID8gY3JlYXRlTG9jYXRpb24oZW50cnksIHVuZGVmaW5lZCwgY3JlYXRlS2V5KCkpIDogY3JlYXRlTG9jYXRpb24oZW50cnksIHVuZGVmaW5lZCwgZW50cnkua2V5IHx8IGNyZWF0ZUtleSgpKTtcbiAgfSk7IC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGNyZWF0ZVBhdGg7XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBwcmV2SW5kZXggPSBoaXN0b3J5LmluZGV4O1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZJbmRleCArIDE7XG4gICAgICB2YXIgbmV4dEVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMuc2xpY2UoMCk7XG5cbiAgICAgIGlmIChuZXh0RW50cmllcy5sZW5ndGggPiBuZXh0SW5kZXgpIHtcbiAgICAgICAgbmV4dEVudHJpZXMuc3BsaWNlKG5leHRJbmRleCwgbmV4dEVudHJpZXMubGVuZ3RoIC0gbmV4dEluZGV4LCBsb2NhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0RW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgICBlbnRyaWVzOiBuZXh0RW50cmllc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgaGlzdG9yeS5lbnRyaWVzW2hpc3RvcnkuaW5kZXhdID0gbG9jYXRpb247XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIHZhciBuZXh0SW5kZXggPSBjbGFtcChoaXN0b3J5LmluZGV4ICsgbiwgMCwgaGlzdG9yeS5lbnRyaWVzLmxlbmd0aCAtIDEpO1xuICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICB2YXIgbG9jYXRpb24gPSBoaXN0b3J5LmVudHJpZXNbbmV4dEluZGV4XTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgaW5kZXg6IG5leHRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1pbWljIHRoZSBiZWhhdmlvciBvZiBET00gaGlzdG9yaWVzIGJ5XG4gICAgICAgIC8vIGNhdXNpbmcgYSByZW5kZXIgYWZ0ZXIgYSBjYW5jZWxsZWQgUE9QLlxuICAgICAgICBzZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gaGlzdG9yeS5pbmRleCArIG47XG4gICAgcmV0dXJuIG5leHRJbmRleCA+PSAwICYmIG5leHRJbmRleCA8IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGVudHJpZXMubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGVudHJpZXNbaW5kZXhdLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBlbnRyaWVzOiBlbnRyaWVzLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjYW5HbzogY2FuR28sXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG5leHBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZU1lbW9yeUhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uLCBsb2NhdGlvbnNBcmVFcXVhbCwgcGFyc2VQYXRoLCBjcmVhdGVQYXRoIH07XG4iLCJmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuLy8gQWJvdXQgMS41eCBmYXN0ZXIgdGhhbiB0aGUgdHdvLWFyZyB2ZXJzaW9uIG9mIEFycmF5I3NwbGljZSgpXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4LCBrID0gaSArIDEsIG4gPSBsaXN0Lmxlbmd0aDsgayA8IG47IGkgKz0gMSwgayArPSAxKSB7XG4gICAgbGlzdFtpXSA9IGxpc3Rba107XG4gIH1cblxuICBsaXN0LnBvcCgpO1xufVxuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIGhlYXZpbHkgb24gbm9kZSdzIHVybC5wYXJzZVxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHRvKSB7XG4gIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcblxuICB2YXIgdG9QYXJ0cyA9IHRvICYmIHRvLnNwbGl0KCcvJykgfHwgW107XG4gIHZhciBmcm9tUGFydHMgPSBmcm9tICYmIGZyb20uc3BsaXQoJy8nKSB8fCBbXTtcblxuICB2YXIgaXNUb0FicyA9IHRvICYmIGlzQWJzb2x1dGUodG8pO1xuICB2YXIgaXNGcm9tQWJzID0gZnJvbSAmJiBpc0Fic29sdXRlKGZyb20pO1xuICB2YXIgbXVzdEVuZEFicyA9IGlzVG9BYnMgfHwgaXNGcm9tQWJzO1xuXG4gIGlmICh0byAmJiBpc0Fic29sdXRlKHRvKSkge1xuICAgIC8vIHRvIGlzIGFic29sdXRlXG4gICAgZnJvbVBhcnRzID0gdG9QYXJ0cztcbiAgfSBlbHNlIGlmICh0b1BhcnRzLmxlbmd0aCkge1xuICAgIC8vIHRvIGlzIHJlbGF0aXZlLCBkcm9wIHRoZSBmaWxlbmFtZVxuICAgIGZyb21QYXJ0cy5wb3AoKTtcbiAgICBmcm9tUGFydHMgPSBmcm9tUGFydHMuY29uY2F0KHRvUGFydHMpO1xuICB9XG5cbiAgaWYgKCFmcm9tUGFydHMubGVuZ3RoKSByZXR1cm4gJy8nO1xuXG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuICBpZiAoZnJvbVBhcnRzLmxlbmd0aCkge1xuICAgIHZhciBsYXN0ID0gZnJvbVBhcnRzW2Zyb21QYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gbGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicgfHwgbGFzdCA9PT0gJyc7XG4gIH0gZWxzZSB7XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IGZyb21QYXJ0cy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHBhcnQgPSBmcm9tUGFydHNbaV07XG5cbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgaWYgKCFtdXN0RW5kQWJzKSBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICBmcm9tUGFydHMudW5zaGlmdCgnLi4nKTtcbiAgfWlmIChtdXN0RW5kQWJzICYmIGZyb21QYXJ0c1swXSAhPT0gJycgJiYgKCFmcm9tUGFydHNbMF0gfHwgIWlzQWJzb2x1dGUoZnJvbVBhcnRzWzBdKSkpIGZyb21QYXJ0cy51bnNoaWZ0KCcnKTtcblxuICB2YXIgcmVzdWx0ID0gZnJvbVBhcnRzLmpvaW4oJy8nKTtcblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiByZXN1bHQuc3Vic3RyKC0xKSAhPT0gJy8nKSByZXN1bHQgKz0gJy8nO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVQYXRobmFtZTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbnZhciBwcmVmaXggPSAnSW52YXJpYW50IGZhaWxlZCc7XG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmIChjb25kaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCArIFwiOiBcIiArIChtZXNzYWdlIHx8ICcnKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW52YXJpYW50O1xuIiwidmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5mdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWlzUHJvZHVjdGlvbikge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGV4dCA9IFwiV2FybmluZzogXCIgKyBtZXNzYWdlO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKHRleHQpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aHJvdyBFcnJvcih0ZXh0KTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdhcm5pbmc7XG4iLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoaXRlbSwgYltpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGFUeXBlID0gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGEpO1xuICB2YXIgYlR5cGUgPSB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYik7XG5cbiAgaWYgKGFUeXBlICE9PSBiVHlwZSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChhVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYVZhbHVlID0gYS52YWx1ZU9mKCk7XG4gICAgdmFyIGJWYWx1ZSA9IGIudmFsdWVPZigpO1xuXG4gICAgaWYgKGFWYWx1ZSAhPT0gYSB8fCBiVmFsdWUgIT09IGIpIHJldHVybiB2YWx1ZUVxdWFsKGFWYWx1ZSwgYlZhbHVlKTtcblxuICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWx1ZUVxdWFsOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9jb3JuZXJwbGFudC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvZWF0aW5nY29uY2VybnMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2hlcm8uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2xpZmVzdHlsZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9tb3JlUmVzb3VyY2VzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9waW5lYXBwbGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3ByYWN0aWNlYXJlYXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3JlbGF0aW9uc2hpcHMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3N0cmVzc21hbmFnZW1lbnQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9zdWNjdWxlbnRtYXQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3RyYW5zaXRpb25zLmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSBhcyBjcmVhdGVIaXN0b3J5LCBIaXN0b3J5LCBMb2NhdGlvbiB9IGZyb20gJ2hpc3RvcnknO1xuXG5cblxuLy8gVE9ETzogYWNjZXNzaWJpbGl0eVxuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGlzdG9yeTtcblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiB7XG4gICAgICAgIG5hbWU6ICdob21lJyxcbiAgICAgICAgc2Nyb2xsVG86IG51bGxcbiAgICAgIH0sXG4gICAgICBzaG93SGFtYnVyZ2VyOiBmYWxzZSxcbiAgICAgIHNob3dEcmF3ZXI6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gY3VycmVudExvY2F0aW9uO1xuICAgIHRoaXMuaGlzdG9yeSA9IGNyZWF0ZUhpc3RvcnkoKTtcblxuICAgIHRoaXMuaGlzdG9yeS5saXN0ZW4oKGxvY2F0aW9uKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmICh3aWR0aCA+IDgwMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEcmF3ZXI6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd0RyYXdlcjogZmFsc2UsXG4gICAgICAgIHNob3dIYW1idXJnZXI6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaG93SGFtYnVyZ2VyXG4gICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgaWYgKHdpZHRoID4gODAwICYmIHNob3dIYW1idXJnZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd0RyYXdlcjogZmFsc2UsXG4gICAgICAgICAgc2hvd0hhbWJ1cmdlcjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgODAwICYmICFzaG93SGFtYnVyZ2VyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dIYW1idXJnZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVOYXYgPSAodGFyZ2V0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IHRhcmdldCB9KTtcblxuICAgIGlmICh0YXJnZXQuZG9jaykge1xuICAgICAgdGhpcy5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodGFyZ2V0Lm5hbWUpIHtcbiAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ByYWN0aWNlJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy9wcmFjdGljZS1hcmVhcycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlcnZpY2VzJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy9zZXJ2aWNlcycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsYXNzZXMnOlxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCgnL2NsYXNzZXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXNvdXJjZXMnOlxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCgnL3Jlc291cmNlcycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RvY3MnOlxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaCgnL2NsaWVudC1kb2N1bWVudHMnKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoY3VycmVudCkgPT4gKHtcbiAgICAgIHNob3dEcmF3ZXI6ICFjdXJyZW50LnNob3dEcmF3ZXJcbiAgICB9KSk7XG4gIH1cblxuICBjbG9zZURyYXdlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dEcmF3ZXI6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZVN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBmb250RmFtaWx5OiAnUm9ib3RvLCBzYW5zLXNlcmlmJ1xuICAgIH07XG5cbiAgICBjb25zdCB7XG4gICAgICBwYWdlXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICBuYW1lXG4gICAgfSA9IHBhZ2U7XG5cbiAgICBsZXQgY29udGVudCA9IDxkaXYgLz47XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICBjb250ZW50ID0gPEhvbWUgb25OYXY9e3RoaXMuaGFuZGxlTmF2fSAvPlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ByYWN0aWNlJzpcbiAgICAgICAgY29udGVudCA9IDxQcmFjdGljZUFyZWFzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlcnZpY2VzJzpcbiAgICAgICAgY29udGVudCA9IDxTZXJ2aWNlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgY29udGVudCA9IDxDbGFzc2VzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Jlc291cmNlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8UmVzb3VyY2VzIC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RvY3MnOlxuICAgICAgICBjb250ZW50ID0gPENsaWVudERvY3VtZW50cyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdmZWVzJzpcbiAgICAgICAgY29udGVudCA9IDxGZWVzIC8+O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17dGVtcGxhdGVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIHNob3dIYW1idXJnZXI9e3RoaXMuc3RhdGUuc2hvd0hhbWJ1cmdlcn1cbiAgICAgICAgICBhY3RpdmU9e25hbWV9XG4gICAgICAgICAgb25OYXY9e3RoaXMuaGFuZGxlTmF2fVxuICAgICAgICAgIG9wZW5EcmF3ZXI9e3RoaXMudG9nZ2xlRHJhd2VyfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCb2R5XG4gICAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgICAgY2xvc2VEcmF3ZXI9e3RoaXMuY2xvc2VEcmF3ZXJ9XG4gICAgICAgICAgICBzaG93RHJhd2VyPXt0aGlzLnN0YXRlLnNob3dEcmF3ZXJ9XG4gICAgICAgICAgICBvbk5hdj17dGhpcy5oYW5kbGVOYXZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhZ2Uuc2Nyb2xsVG8pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcCcpLnNjcm9sbEludG9WaWV3KCksIDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFnZS5zY3JvbGxUbyAhPT0gbnVsbCB8fCBwYWdlLnNjcm9sbFRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgcGFnZS5zY3JvbGxUbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlLnNjcm9sbFRvKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwYWdlLnNjcm9sbFRvID09PSAnbnVtYmVyJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCBwYWdlLnNjcm9sbFRvKSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRHJhd2VyT3ZlcmxheUNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2xvc2VEcmF3ZXIoKVxuICB9XG5cbiAgcmVuZGVyRHJhd2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2hvd0RyYXdlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjbignZHJhd2VyLWNvbnRhaW5lcicsIHtcbiAgICAgICdoaWRlJzogIXNob3dEcmF3ZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IG92ZXJsYXlDbGFzc2VzID0gY24oJ2RyYXdlci1vdmVybGF5Jywge1xuICAgICAgJ2hpZGUnOiAhc2hvd0RyYXdlclxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBvbkRyYXdlclByYWN0aWNlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86IDAsIGRvY2s6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJTZXJ2aWNlc0NsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdzZXJ2aWNlcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyQ29udGFjdENsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICdjb250YWN0JywgZG9jazogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uRHJhd2VyQ2xhc3Nlc0NsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdjbGFzc2VzJywgc2Nyb2xsVG86IDAsIGRvY2s6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJEb2N1bWVudHNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAnZG9jcycsIHNjcm9sbFRvOiAwLCBkb2NrOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJSZXNvdXJjZXNDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAncmVzb3VyY2VzJywgc2Nyb2xsVG86IDAsIGRvY2s6IHRydWUgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgaGFuZGxlQ29udGFjdENsaWNrPXtvbkRyYXdlckNvbnRhY3RDbGlja31cbiAgICAgICAgICAgIGhhbmRsZVNlcnZpY2VzQ2xpY2s9e29uRHJhd2VyU2VydmljZXNDbGlja31cbiAgICAgICAgICAgIGhhbmRsZVByYWN0aWNlQ2xpY2s9e29uRHJhd2VyUHJhY3RpY2VDbGlja31cbiAgICAgICAgICAgIGhhbmRsZUNsYXNzZXNDbGljaz17b25EcmF3ZXJDbGFzc2VzQ2xpY2t9XG4gICAgICAgICAgICBoYW5kbGVEb2N1bWVudHNDbGljaz17b25EcmF3ZXJEb2N1bWVudHNDbGlja31cbiAgICAgICAgICAgIGhhbmRsZVJlc291cmNlc0NsaWNrPXtvbkRyYXdlclJlc291cmNlc0NsaWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3ZlcmxheUNsYXNzZXN9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJhd2VyT3ZlcmxheUNsaWNrfT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgYm9keVN0eWxlID0ge1xuICAgICAgLy8gbWluSGVpZ2h0OiBgY2FsYygxMDB2aCAtIDYwcHgpYFxuICAgIH07XG5cbiAgICBjb25zdCBuID0gcGFnZS5uYW1lO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjbignYmFja2Ryb3AnLCB7XG4gICAgICAnaGVybyBsYXp5JzogbiA9PT0gJ2hvbWUnLFxuICAgICAgJ21vcmVTZXJ2aWNlcyc6IG4gPT09ICdzZXJ2aWNlcycsXG4gICAgICAnbW9yZVJlc291cmNlcyc6IG4gPT09ICdyZXNvdXJjZXMnLFxuICAgICAgJ21vcmVEb2N1bWVudHMnOiBuID09PSAnZG9jcycsXG4gICAgICAnbW9yZUZlZXMnOiBuID09PSAnZmVlcycsXG4gICAgICAnbW9yZUNsYXNzZXMnOiBuID09PSAnY2xhc3NlcycsXG4gICAgICAnbW9yZVByYWN0aWNlJzogbiA9PT0gJ3ByYWN0aWNlJ1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e2JvZHlTdHlsZX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckRyYXdlcigpfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGlubGluZVN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIGhlaWdodDogNTAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNFREVBRTUnLFxuICAgIGJveFNoYWRvdzogJzAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKScsXG4gICAgekluZGV4OiAyNCxcbiAgfTtcblxuICBjb25zdCBtZW51U3R5bGUgPSB7XG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgb25OYXYsXG4gICAgc2hvd0hhbWJ1cmdlcixcbiAgICBvcGVuRHJhd2VyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCByZW5kZXJIYW1idXJnZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXItbmF2IGhlYWRlci1oYW1idXJnZXInXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDIwIH19XG4gICAgICAgIG9uQ2xpY2s9e29wZW5EcmF3ZXJ9XG4gICAgICA+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdoYW1idXJnZXInIHdpZHRoPVwiMzRcIiBoZWlnaHQ9XCIzNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelwiIC8+PC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoc2hvd0hhbWJ1cmdlcikge1xuICAgIGlubGluZVN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXtpbmxpbmVTdHlsZX1cbiAgICAgID5cbiAgICAgICAge3JlbmRlckhhbWJ1cmdlcigpfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAndG9wJyB9KX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ3NpZ25hdHVyZScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnaG9tZScgfSl9XG4gICAgICAgICAgc3R5bGU9e3sgLi4ubWVudVN0eWxlLCBtYXJnaW5SaWdodDogMjAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN0ZXBoYW5pZSBTbWl0aCwgUHN5LkQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e2lubGluZVN0eWxlfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAndG9wJyB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdzaWduYXR1cmUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2hvbWUnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBTdGVwaGFuaWUgU21pdGgsIFBzeS5ELlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3ByYWN0aWNlJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgUHJhY3RpY2UgQXJlYXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdzZXJ2aWNlcycsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdzZXJ2aWNlcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFNlcnZpY2VzICYgRmVlc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2NsYXNzZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY2xhc3NlcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIENsYXNzZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdkb2NzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2RvY3MnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBEb2N1bWVudHNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICdjb250YWN0JyB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY29udGFjdCcgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIENvbnRhY3RcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdyZXNvdXJjZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAncmVzb3VyY2VzJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgUmVzb3VyY2VzXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT0nZm9vdGVyJ1xuICAgID5cbiAgICAgIDxzcGFuPlxuICAgICAgICBTdGVwaGFuaWUgU21pdGgsIFBzeS5ELlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gaWQ9J2FkZHJlc3MnPlxuICAgICAgICA4MDEgQWxoYW1icmEgQmx2ZCwgU3VpdGUgMkIgU2FjcmFtZW50bywgQ0EgOTU4MTZcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICAoOTE2KSAzOTktMzYxNVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2ID5cbiAgKTtcbn07XG5cblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgb25OYXZcbiAgfSA9IHByb3BzO1xuXG4gIGxldCBsYXp5ID0gJyc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tkcm9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoZXJvICR7bGF6eX1gfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCcgaWQ9J3RvcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvLWNvbnRlbnQnPlxuICAgICAgICAgIDxibG9ja3F1b3RlPlxuICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICBcIkFuZCB0aGUgZGF5IGNhbWUgd2hlbiB0aGUgcmlzayB0byByZW1haW4gdGlnaHQgYXMgYSBidWQgd2FzIG1vcmUgcGFpbmZ1bCB0aGFuIHRoZSByaXNrIGl0IHRvb2sgdG8gYmxvc3NvbS5cIlxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGZvb3Rlcj4tIEFuYWlzIE5pblxuICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVldCBjYXJkLTInIGlkPSdtZWV0JyA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZXRDb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlJz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3Byb2ZpbGVQaG90byBjYXJkLTEnIHNyYz0ncmVzL3Byb2ZpbGVfLmpwZycgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jpbyc+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Jpb1RpdGxlJz5cbiAgICAgICAgICAgICAgICBNZWV0IERyLiBTdGVwaGFuaWUgU21pdGhcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nYmlvU3VidGl0bGUnPlxuICAgICAgICAgICAgICAgIENsaW5pY2FsIFBzeWNob2xvZ2lzdFxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICB7bWVldFN0ZXBofVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJhY3RpY2VBcmVhcycgaWQ9J3ByYWN0aWNlJz5cbiAgICAgICAgICA8aDI+UHJhY3RpY2UgQXJlYXM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhcyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86ICdtb3JlRWF0aW5nQ29uY2VybnMnIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYXJlYUltYWdlIGFyZWFFYXRpbmdDb25jZXJucyAke2xhenl9YH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgRWF0aW5nPGJyIC8+IENvbmNlcm5zXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSdcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncHJhY3RpY2UnLCBzY3JvbGxUbzogJ21vcmVMaWZlc3R5bGVDaGFuZ2VzJyB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFyZWFJbWFnZSBhcmVhTGlmZXN0eWxlICR7bGF6eX1gfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBMaWZlc3R5bGU8YnIgLz4gQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86ICdtb3JlTGlmZVRyYW5zaXRpb25zJyB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFyZWFJbWFnZSBhcmVhVHJhbnNpdGlvbnMgJHtsYXp5fWB9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIExpZmU8YnIgLz4gVHJhbnNpdGlvbnNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAnbW9yZVJlbGVhdGlvbnNoaXBDaGFsbGVuZ2VzJyB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFyZWFJbWFnZSBhcmVhUmVsYXRpb25zaGlwcyAke2xhenl9YH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgUmVsYXRpb25zaGlwPGJyIC8+IENoYWxsZW5nZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAnbW9yZU1lZGljYWxQcm9ibGVtcycgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhcmVhSW1hZ2UgYXJlYU1lZGljYWxQcm9ibGVtcyAke2xhenl9YH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgSGVhbHRoPGJyIC8+IERpZmZpY3VsdGllc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86ICdtb3JlU3RyZXNzTWFuYWdlbWVudCcgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhcmVhSW1hZ2UgYXJlYVN0cmVzcyAke2xhenl9YH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgU3RyZXNzPGJyIC8+IE1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFkTW9yZSc+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncmVhZE1vcmUgYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdwcmFjdGljZScsIHNjcm9sbFRvOiAwIH0pfT5cbiAgICAgICAgICAgICAgUkVBRCBNT1JFXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFjdCBjYXJkLTIgJHtsYXp5fWB9IGlkPSdjb250YWN0Jz5cbiAgICAgICAgICA8aDI+Q2hhbmdlIGJlZ2lucyB0b2RheTwvaDI+XG4gICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAyMyB9fT5SZXF1ZXN0IGEgY29uc3VsdGF0aW9uPC9oMz5cbiAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogMTksIGxpbmVIZWlnaHQ6IDEuOSwgbWFyZ2luVG9wOiA0MCB9fT5cbiAgICAgICAgICAgIENhbGwvVGV4dDogOTE2LTM5OS0zNjE1PGJyIC8+XG4gICAgICAgICAgICBFbWFpbDogPGEgdHlwZT0nZW1haWwnIGhyZWY9J21haWx0bzpTdGVwaGFuaWVTbWl0aFBzeURAcHJvdG9ubWFpbC5jb20nIHRhcmdldD0nX2JsYW5rJz5TdGVwaGFuaWVTbWl0aFBzeURAcHJvdG9ubWFpbC5jb208L2E+PGJyIC8+XG4gICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5wc3ljaG9sb2d5dG9kYXkuY29tL3Byb2ZpbGUvNDczMDc2JyB0YXJnZXQ9J19ibGFuayc+Q29ubmVjdCB0aHJvdWdoIFBzeWNob2xvZ3kgVG9kYXk8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBtYWlsID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPGZvcm0+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJwaG9uZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgPGxhYmVsPlBob25lPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgPGxhYmVsPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxkaXYgY2xhc3M9J3JlYWRNb3JlJz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24nPlNFTkQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbi8qKiBIb21lICovXG5cblxuLyoqIFBhZ2VzICovXG5cbmNvbnN0IFByYWN0aWNlQXJlYXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT0nUHJhY3RpY2UgQXJlYXMnXG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIHNocmluaz17dHJ1ZX1cblxuICAgICAgICBib2R5PXtwcmFjdGljZUFyZWFzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9J1NlcnZpY2VzICYgRmVlcydcbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgc2hyaW5rPXt0cnVlfVxuXG4gICAgICAgIGJvZHk9e3NlcnZpY2VzfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBzaHJpbms9e3RydWV9XG5cbiAgICAgICAgYm9keT17c2VydmljZXNSZWltYnVyc21lbnR9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIHNocmluaz17dHJ1ZX1cblxuICAgICAgICBib2R5PXtzZXJ2aWNlc0luc3VyYWNlfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5jb25zdCBDbGFzc2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9eydDbGFzc2VzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgc2hyaW5rPXt0cnVlfVxuICAgICAgICBib2R5PXtjbGFzc2VzfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMj5cbiAgICAgICAgPEFjdGl2ZUNsYXNzZXMgLz5cbiAgICAgIDwvQ2FyZDI+XG5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cbmNvbnN0IENsaWVudERvY3VtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnQ2xpZW50IERvY3VtZW50cyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIHNocmluaz17dHJ1ZX1cbiAgICAgICAgYm9keT17Y2xpZW50RG9jdW1lbnRzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5jb25zdCBSZXNvdXJjZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J1Jlc291cmNlcyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIHNocmluaz17dHJ1ZX1cbiAgICAgICAgYm9keT17cmVzb3VyY2VzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cbmNvbnN0IEZlZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J0ZlZXMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBzaHJpbms9e3RydWV9XG4gICAgICAgIGJvZHk9e2ZlZXN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgKTtcbn1cblxuXG5cbi8qKiBQYWdlcyBjb250ZW50cyAqL1xuXG5jb25zdCBtZWV0U3RlcGggPSAoXG4gIDxwPlxuICAgIFdlbGNvbWUgYW5kIHRoYW5rIHlvdSBmb3IgdmlzaXRpbmchIFRoaXMgaXMgYSBwbGFjZSB0byBleHBsb3JlIHRoZSBwb3NzaWJpbGl0eSBvZiBjaGFuZ2UgZm9yIGEgYmV0dGVyIHRvbW9ycm93LiBUaGVyZSBpcyBubyDigJxvbmUgc2l6ZSBmaXRzIGFsbOKAnSBhcHByb2FjaCB0byBvdXIgdGltZSB0b2dldGhlci4gSSB3b3JrIGNvbGxhYm9yYXRpdmVseSB3aXRoIG15IGNsaWVudHMgdG8gY3JlYXRlIGFuIGVudmlyb25tZW50IG9mIHJlc3BlY3QgYW5kIGNvbXBhc3Npb24gdGhhdCBjYW4gYmUgYXBwbGllZCB0byByZW5ldyB0aGVpciBsaXZlcy4gVGhlcmFweSBoYXMgdGhlIHBvd2VyIHRvIGJvdGggc29vdGhlIGFuZCB0cmFuc2Zvcm0uIEkgdXNlIHRlY2huaXF1ZXMgb2Ygb25lLW9uLW9uZSB0aGVyYXB5IGFuZCBjbGFzc2VzIHRvIHNwYXJrIG1lYW5pbmdmdWwgYW5kIGxhc3RpbmcgY2hhbmdlLiBJIGFtIGtub3duIGJ5IG15IGNsaWVudHMgYXMgYmVpbmcgZG93biB0byBlYXJ0aCwgZ2VudWluZSwgYW5kIHJlbGF0YWJsZS4gSSBsb29rIGZvcndhcmQgdG8gcGFydG5lcmluZyB0b2dldGhlciB0byBidWlsZCB5b3VyIGhlYWx0aGllciB0b21vcnJvdy5cbiAgPC9wPlxuKTtcblxuY29uc3QgcHJhY3RpY2VBcmVhcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBpZD0nbW9yZUVhdGluZ0NvbmNlcm5zJz5FYXRpbmcgQ29uY2VybnM8L2gzPlxuICAgIDxwPlxuICAgICAgSW5kaXZpZHVhbHMgbm90aWNpbmcgbWluZGxlc3MsIHN0cmVzcywgZW1vdGlvbmFsLCBvciBiaW5nZSBlYXRpbmcgYmVoYXZpb3JzIGFyZSB3ZWxjb21lIHRvIGNvbnNpZGVyIGJvdGggaW5kaXZpZHVhbCBhbmQgY2xhc3MtYmFzZWQgdGhlcmFwaWVzIHdpdGggbWUuIE15IGFwcHJvYWNoIHRvIHRoZXNlIGNvbmNlcm5zIHJlY29nbml6ZXMgdGhlIGNvbXBsZXggcm9sZSBlYXRpbmcgY2FuIHBsYXkgYXMgYSBtZWNoYW5pc20gb2YgY29waW5nIGZvciBpbmRpdmlkdWFsLCBmYW1pbHksIGFuZCBjdWx0dXJhbGx5IHN5c3RlbWljIGlzc3Vlcy4gV2Ugd29yayB0b2dldGhlciB0byBhY2tub3dsZWRnZSB0aGUgZnVsbG5lc3Mgb2YgdGhpcyByb2xlIGFzIHdlbGwgYXMgaXQncyBoaXN0b3J5LCB3aGlsZSBob25vcmluZyB0aGUgZGVzaXJlIHRoYXQgbWF5IGV4aXN0IHRvIGNoYW5nZS4gVGhyb3VnaCBvdXIgd29yayB3ZSBjYW4gYmVnaW4gdG8gZGV2ZWxvcCBuZXcgYW5kIGhlYWx0aGllciBjb3Bpbmcgc3RyYXRlZ2llcyBhcyBhIG5hdHVyYWwgb3V0Y29tZSBvZiBpbmNyZWFzZWQgYXdhcmVuZXNzIGFuZCBzZWxmLWNvbXBhc3Npb24uIEkgdGFpbG9yIG15IGFwcHJvYWNoIHRvIHRoZSBuZWVkcyBhbmQgc3R5bGUgb2YgdGhlIGluZGl2aWR1YWwgd2l0aCB3aG9tIEkgYW0gd29ya2luZy5cbiAgICA8L3A+XG5cbiAgICA8aDNcbiAgICAgIGlkPSdtb3JlTGlmZXN0eWxlQ2hhbmdlcydcbiAgICA+TGlmZXN0eWxlIENoYW5nZXM8L2gzPlxuXG4gICAgPHA+XG4gICAgICBNb3N0IG9mIHVzIGNhbiByZWxhdGUgdG8gdGhlIHJ1bm5pbmcgbWVudGFsIGxpc3Qgb2YgdGhpbmdzIHdlIGtub3cgd2UgXCJzaG91bGRcIiBiZSBkb2luZyBpbiBvcmRlciB0byBiZSBoZWFsdGhpZXIuIE1heWJlIHRoaXMgaXMgbW92aW5nIG91ciBib2RpZXMgbW9yZSwgZWF0aW5nIGRpZmZlcmVudGx5LCBpbXByb3Zpbmcgc2xlZXAgaGFiaXRzLCBvciBkaXNjb25uZWN0aW5nIGZyb20gdGVjaG5vbG9neS4gTWF5YmUgaXQgY291bGQgYmUgdGhlc2UgdGhpbmdzIHBsdXMgbWFueSBtb3JlISBXaGlsZSBjZXJ0YWlubHkgZXhjZWxsZW50IGhhYml0cywgbG9va2luZyBhdCBhIGxpc3Qgb2YgcGVyc29uYWwgd2VsbG5lc3MgXCJ0byBkb3NcIiBjYW4gYmUgb3ZlcndoZWxtaW5nLiBJbiBmYWN0LCB3ZSBvZnRlbiBhdm9pZCB0aGlua2luZyBhYm91dCB0aGVzZSBoZWFsdGh5IGxpdmluZyBpdGVtcyBiZWNhdXNlIGl0IGNhbiBmZWVsIGhvcGVsZXNzLiBVbmZvcnR1bmF0ZWx5LCBvZnRlbiB0aGlzIG1lYW5zIHN0YXlpbmcgc3R1Y2sgaW4gYSBydXQgb2YgZmVlbGluZyB1bmhlYWx0aHkuIFRvZ2V0aGVyLCB3ZSBjYW4gY3JlYXRlIGEgcGxhbiBvZiBzbWFsbCBzdGVwcyB0byB3b3JrIHRvd2FyZHMgY29ubmVjdGluZyBiZWhhdmlvciBjaGFuZ2VzIHdpdGggeW91ciBkZWVwZXN0IHZhbHVlcy4gVGhpbmdzIHRoYXQgbWF5IGhhdmUgZmVsdCBmb3JjZWQgaW4gdGhlIHBhc3QgY2FuIGJlY29tZSB0aGluZ3Mgd2UgYXJlIGVhZ2VyIGZvci4gSSB3aWxsIGxldmVyYWdlIG15IHRyYWluaW5nIGluIExpZmVzdHlsZSBNZWRpY2luZSB0byBoZWxwIHNldCBtYW5hZ2VhYmxlIGFuZCByZXNlYXJjaCBzdXBwb3J0ZWQgYWltcyB0byBwcm9kdWNlIHJlYWwgaW1wcm92ZW1lbnRzIGluIHlvdXIgaGVhbHRoLlxuPC9wPlxuXG4gICAgPGgzXG4gICAgICBpZD0nbW9yZUxpZmVUcmFuc2l0aW9ucydcbiAgICA+UGhhc2Ugb2YgTGlmZSBJc3N1ZXMvTGlmZSBUcmFuc2l0aW9uczwvaDM+XG4gICAgPHA+XG4gICAgICBUaG91Z2ggdGhlIHBocmFzZSwgXCJ0aGUgb25seSB0aGluZyBjb25zdGFudCBpcyBjaGFuZ2VcIiBpcyBvbmUgZmFtaWxpYXIgdG8gbWFueSBvZiB1cywgdGhpcyBvZnRlbiBmZWVscyBsaWtlIGxpdHRsZSBjb21mb3J0IGR1cmluZyB0aGUgdHVybW9pbCBvZiBhIHNpZ25pZmljYW50IHRyYW5zaXRpb24uIENoYW5nZXMgaW4gbGlmZSBjaXJjdW1zdGFuY2VzIGNhbiBpbXBhY3QgdXMgb24gZXZlcnkgbGV2ZWwgb2Ygb3VyIGJlaW5nIGFuZCBleHRlcm5hbCBsaWZlLiBTZWVraW5nIHRoZXJhcHkgZHVyaW5nIHRoZXNlIHRpbWVzIGNhbiBiZSBib3RoIGFuY2hvciBhbmQgZ3VpZGUgbGlnaHQuIEkgd2lsbCBzdXBwb3J0IHlvdSB0byBwcm9jZXNzIHRoZSBsb3NzIG9mIGhvdyB0aGluZ3MgaGF2ZSBiZWVuLiBXaGVuIHlvdSBhcmUgcmVhZHksIHdlIHdpbGwgc2V0IGNvbnNjaW91c2x5IGRldmVsb3BlZCBnb2FscyBmb3IgdGhlIHBoYXNlIG9mIGxpZmUgdGhhdCB5b3UgZmluZCB5b3Vyc2VsZiBpbiBub3cuIFdlIHdpbGwgd29yayB0b2dldGhlciB0byBpZGVudGlmeSBoZWFsdGh5IGNvcmUgY29tcG9uZW50cyBvZiB3aG8geW91IGFyZSBldm9sdmluZyB0byBiZSwgYW5kIGNlbnRlciBvdXIgYXR0ZW50aW9uIHRvIG51cnR1cmUgdGhpcyBncm93dGguIFRoZXJlIGlzIG5vIHNldCB0aW1lbGluZSBvZiBob3cgbG9uZyBhbiBhZGp1c3RtZW50IHBlcmlvZCBsYXN0cy4gSSB3aWxsIGhlbHAgeW91IHRvIG1vdmUgaW50byB0aGUgbmV4dCBwYXJ0IG9mIHlvdXIgbGlmZSBpbiBoZWFsdGhmdWwgd2F5cywgYXMgcXVpY2tseSBhcyBpcyByZWFzb25hYmxlLCBhbmQgaW4gY29tcGxldGUgcmVzcGVjdCBmb3IgeW91ciBvd24gcGFjZS5cbjwvcD5cblxuICAgIDxoM1xuICAgICAgaWQ9J21vcmVSZWxhdGlvbnNoaXBDYWxsZW5nZXMnXG4gICAgPlJlbGF0aW9uc2hpcCBDaGFsbGVuZ2VzPC9oMz5cbiAgICA8cD5cbiAgICAgIFJvbWFudGljLCBmYW1pbHksIHNvY2lhbCwgYW5kIG9jY3VwYXRpb25hbCByZWxhdGlvbnNoaXBzIGNhbiBhbGwgYmUgc291cmNlcyBvZiBzaWduaWZpY2FudCBwbGVhc3VyZSBhbmQsIGNvbnNlcXVlbnRseSwgc2lnbmlmaWNhbnQgcGFpbi4gVGhlcmUgYXJlIGEgbXVsdGl0dWRlIG9mIHJlYXNvbnMgcmVsYXRpb25zaGlwcyBjYW4gYmVjb21lIHRyb3VibGVkLiBNYW55IG9mIHRoZSByb290cyBvZiB0aGVzZSByZWFzb25zIGNhbiBiZSB0cmFjZWQgdG8gY29tbXVuaWNhdGlvbiBjbGFyaXR5LiBXaGlsZSB3ZSBjYW5ub3QgY2hhbmdlIG90aGVyIHBlb3BsZSwgd2UgY2FuIGlkZW50aWZ5IHBlcnNvbmFsIHF1YWxpdGllcyBpbiBvdXJzZWx2ZXMgdGhhdCB3ZSB3aXNoIHRvIGNoYW5nZSBmb3IgdGhlIHdlbGxiZWluZyBvZiBhIGN1cnJlbnQgb3IgZnV0dXJlIHJlbGF0aW9uc2hpcC4gV29ya2luZyB0b3dhcmRzIGlkZW50aWZ5aW5nIHRoZXNlIGFyZWFzLCBjcmVhdGluZyBtaW5kZnVsIGF3YXJlbmVzcyBhcm91bmQgdGhlbSwgYW5kIG1ha2luZyB2YWx1ZXMtYmFzZWQgY2hhbmdlcyBjYW4gcHJvdmlkZSBib3RoIHBlcnNvbmFsIGJlbmVmaXRzIGFuZCBpbXByb3ZlbWVudHMgdG8gdGhlIHJlbGF0aW9uc2hpcC4gV2UgY2FuIHdvcmsgdG9nZXRoZXIgdG8gaWRlbnRpZnkgYW5kIG9wdGltaXplIHRoZXNlIGNoYW5nZXMgd2hpbGUgcHJpb3JpdGl6aW5nIGVmZmVjdGl2ZSBhbmQgY2xlYXIgY29tbXVuaWNhdGlvbiBhcyB0aGUgY29ybmVyc3RvbmUgdG8gaW1wcm92ZWQgcmVsYXRpb25zaGlwcy5cbjwvcD5cbiAgICA8aDNcbiAgICAgIGlkPSdtb3JlSGVhbHRoRGlmZmljdWx0aWVzJ1xuICAgID5IZWFsdGggRGlmZmljdWx0aWVzPC9oMz5cbiAgICA8cD5cbiAgICAgIFRoZXJlIGlzIG5vIGRvdWJ0IHRoYXQgb3VyIHBoeXNpY2FsIHdlbGxiZWluZyBpbXBhY3RzIG91ciBwc3ljaG9sb2dpY2FsIHdlbGxiZWluZyBhbmQgdmljZSB2ZXJzYS4gV2hldGhlciB5b3UgYXJlIGxvb2tpbmcgZm9yIHN1cHBvcnQgaW4gaW1wcm92aW5nIHlvdXIgbWFuYWdlbWVudCBvZiBhIG1lZGljYWwgcHJvYmxlbSwgaGFuZGxpbmcgdGhlIHN0cmVzcyBhcm91bmQgaXQsIG9yIGJlbGlldmUgdGhlcmUgbWF5IGJlIGxpZmVzdHlsZSBjaGFuZ2VzIHRoYXQgd2lsbCByZXZlcnNlIHRoZSBjb25kaXRpb24sIEkgd291bGQgYmUgaGFwcHkgdG8gc3VwcG9ydCB0aGlzIGFzcGVjdCBvZiB5b3VyIGhlYWx0aC4gSSBhbSBhIHRyYWluZWQgaGVhbHRoIHBzeWNob2xvZ2lzdCBhbmQgd29yayByZWd1bGFybHkgd2l0aCBib3RoIGNocm9uaWMgYW5kIGFjdXRlIG1lZGljYWwgY29uZGl0aW9ucy4gSSBoYXZlIHBlcnNvbmFsIGFuZCBwcm9mZXNzaW9uYWwgZXhwZXJpZW5jZSB3aXRoIHRoZSBpbXBhY3RzIHBoeXNpY2FsIGhlYWx0aCBjYW4gaGF2ZSBub3Qgb25seSBvbiBvbmVzZWxmLCBidXQgYWxzbyBvbiB0aG9zZSBhcm91bmQgdXMuIEkgYmVsaWV2ZSBzdXBwb3J0IGNhbiBtYWtlIGEgc3Vic3RhbnRpdmUgZGlmZmVyZW5jZSBpbiBtYW5hZ2luZyBhIGhlYWx0aCBjb25jZXJuIGFzIHdlbGwgYXMgdGhlIGVtb3Rpb25hbCBhbmQgc29jaWFsIGltcGFjdHMgb2YgdGhpcy4gSSB3aWxsIHdvcmsgd2l0aCB5b3UgdG8gYWNjZXB0IHRob3NlIHJlYWxpdGllcyB0aGF0IGFyZSB1bmNoYW5naW5nLCBhcyB3ZWxsIGFzIHJlY29nbml6ZSBvcHBvcnR1bml0aWVzIGZvciBwb3NpdGl2ZSBncm93dGguXG48L3A+XG4gICAgPGgzXG4gICAgICBpZD0nbW9yZVN0cmVzc01hbmFnZW1lbnQnXG4gICAgPlN0cmVzcyBNYW5hZ2VtZW50PC9oMz5cbiAgICA8cD5cbiAgICAgIEF0IHRpbWVzIHdlIGNhbiBmaW5kIG91cnNlbHZlcyBvdmVyd2hlbG1lZC4gVGhlIHJlYXNvbnMgZm9yIGZlZWxpbmcgb3ZlcndoZWxtZWQgbWlnaHQgc2VlbSBjbGVhciwgb3IgdGhleSBtYXkgYmUgaGFyZCB0byB1bmRlcnN0YW5kLiBJdCBjYW4gZmVlbCBsaWtlIGJlaW5nIHRyYXBwZWQgaW4gcGFydHMgb2YgeW91ciBvd24gbGlmZS4gVGFsa2luZyB0aHJvdWdoIHlvdXIgc3RyZXNzb3JzIHdpdGggYSBwcm9mZXNzaW9uYWwgY2FuIGFsbG93IHNwYWNlIGFyb3VuZCBwYWluZnVsIHBhcnRzIG9mIHlvdXIgZXhwZXJpZW5jZSB0aGF0IGNvdWxkIGVhc2UgdGhlIHByZXNzdXJlLiBUaGVyZSBtYXkgYWxzbyBiZSBhbHRlcm5hdGl2ZSBwZXJzcGVjdGl2ZXMgdGhhdCB5b3UgYXJlbuKAmXQgYWJsZSB0byBzZWUgZnJvbSBiZWluZyByaWdodCBpbiB0aGUgdGhpY2sgb2YgdGhlIHN0cmVzcywgdGhhdCBtYXkgYmUgdmlzaWJsZSBmcm9tIGFuIG91dHNpZGUgcGVyc3BlY3RpdmUuIFRoZXJhcHkgY2FuIHByb3ZpZGUgc3VwcG9ydCB0byBwcm9jZXNzIHlvdXIgZXhwZXJpZW5jZXMgYW5kIGZyZWUgeW91IHRvIGJlIGEgbW9yZSB3aG9sZSB2ZXJzaW9uIG9mIHlvdXJzZWxmOyBhYmxlIHRvIGVuZ2FnZSB3aXRoIHRoZSByZXN0IG9mIHlvdXIgbGlmZSBhbmQgdGhlIHBlb3BsZSBpbiBpdC5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBzZXJ2aWNlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgV2hhdCB0byBFeHBlY3RcbiAgICA8L2gzPlxuICAgIDxoMz5UZWxlcGhvbmUgQ29uc3VsdDwvaDM+XG4gICAgPHA+XG4gICAgICBBcyBvdXIgZmlyc3QgY29udGFjdCBmb3IgZWl0aGVyIGluZGl2aWR1YWwgdGhlcmFweSBvciBjbGFzc2VzIEkgb2ZmZXIgYSBjb21wbGVtZW50YXJ5IDE1LW1pbnV0ZSBwaG9uZSBjb25zdWx0YXRpb24uIFRoaXMgaXMgYW4gb3Bwb3J0dW5pdHkgZm9yIHVzIHRvIGNvbm5lY3QgYWJvdXQgdGhlIGlzc3VlcyB0aGF0IGJyaW5nIHlvdSBpbnRvIGNhcmUsIGFuZCB0byBkZXRlcm1pbmUgd2hldGhlciB3b3JraW5nIHRvZ2V0aGVyIGlzIHRoZSBiZXN0IGZpdCBmb3IgeW91ciBuZWVkcy4gSSBjYW4gYW5zd2VyIGFueSBxdWVzdGlvbnMgdGhhdCB5b3UgbWF5IGhhdmUgYWJvdXQgY29taW5nIGludG8gY2FyZSBhbmQgc2V0IHVwIHlvdXIgZmlyc3QgYXBwb2ludG1lbnQgb3IgY2xhc3MuXG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjE1LW1pbiBpbml0aWFsIHRlbGVwaG9uZSBjb25zdWx0JiN4MjAxNDsgZnJlZTwvaT5cbiAgICA8L3A+XG4gICAgPGgzPkluaXRpYWwgQXBwb2ludG1lbnQ8L2gzPlxuICAgIDxwPlxuICAgICAgQW4gaW5pdGlhbCBpbmRpdmlkdWFsIHRoZXJhcHkgYXBwb2ludG1lbnQgaXMgYSA2MC1taW51dGUgYXBwb2ludG1lbnQuIER1cmluZyB0aGlzIGFwcG9pbnRtZW50IEkgd2lsbCByZXZpZXcgeW91ciBjb21wbGV0ZSBpbnRha2UgZm9ybSB3aXRoIHlvdSB0byBlbnN1cmUgdGhhdCBJIGhhdmUgYW4gYXBwcm9wcmlhdGUgdW5kZXJzdGFuZGluZyBvZiBzb21lIG9mIHlvdXIgaGlzdG9yeSwgd2hhdCBicmluZ3MgeW91IGludG8gY2FyZSwgYW5kIHlvdXIgZ29hbHMgZm9yIG91ciB3b3JrIHRvZ2V0aGVyLiBJIHdpbGwgYW5zd2VyIGFueSBxdWVzdGlvbnMgdGhhdCB5b3UgaGF2ZSB0byB0aGUgYmVzdCBvZiBteSBhYmlsaXR5LiBXZSB3aWxsIGFsc28gdXNlIHRoaXMgYXBwb2ludG1lbnQgdG8gY3JlYXRlIHNvbWUgaW5pdGlhbCBnb2FscyBmb3IgY2FyZSBhbmQgdG8gc2V0IHVwIG91ciBtdXR1YWwgZXhwZWN0YXRpb25zIGZvciB0cmVhdG1lbnQuXG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjYwLW1pbiBpbml0aWFsIGluZGl2aWR1YWwgYXBwb2ludG1lbnQmI3gyMDE0OyAkMTUwPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+UmV0dXJuIEFwcG9pbnRtZW50czwvaDM+XG4gICAgPHA+XG4gICAgICBSZXR1cm4gYXBwb2ludG1lbnRzIGFyZSA1MC1taW51dGUgYXBwb2ludG1lbnRzLiBEdXJpbmcgcmV0dXJuIGFwcG9pbnRtZW50cyB3ZSB3aWxsIHdvcmsgdG9nZXRoZXIgb24geW91ciBnb2FscyBhbmQgSSB3aWxsIHN1cHBvcnQgeW91IHRocm91Z2ggdGhlIHByb2Nlc3MuIFdlIHdpbGwgcmVndWxhcmx5IGNoZWNrIGluIGFib3V0IHRoZSBwcm9ncmVzcyBvZiBjYXJlIGFuZCBtYWtlIGFkanVzdG1lbnRzIGFzIG5lZWRlZCB0byBlbnN1cmUgdGhhdCB3ZSBhcmUgd29ya2luZyBlZmZlY3RpdmVseSB0b2dldGhlci5cbiAgICAgIDxiciAvPlxuICAgICAgPGk+NTAtbWluIHJldHVybiBpbmRpdmlkdWFsIGFwcG9pbnRtZW50JiN4MjAxNDsgJDE1MDwvaT5cbiAgICA8L3A+XG4gICAgPGgzPkNsYXNzZXM8L2gzPlxuICAgIDxwPlxuICAgICAgQ2xhc3NlcyBhcmUgOTAgbWludXRlcyBpbiBsZW5ndGguIER1ZSB0byBzcGFjZSBuZWVkZWQsIGNsYXNzZXMgYXJlIGhlbGQgYXQgYSBuZWFyYnkgbG9jYXRpb24gc2VwYXJhdGUgZnJvbSB0aGUgbWFpbiB0aGVyYXB5IG9mZmljZS4gTW9yZSBpbmZvcm1hdGlvbiBhYm91dCBjbGFzcyBhbmQgY2xhc3MgY29udGVudCBjYW4gYmUgZm91bmQgdW5kZXIgdGhlIFwiQ2xhc3Nlc1wiIHRhYi4gVGhvdWdoIGNsYXNzZXMgdGFrZSBwbGFjZSBvdmVyIDQgc2Vzc2lvbnMsIHRoZSBmdWxsIGZlZSBtdXN0IGJlIHBhaWQgaW4gYWR2YW5jZSBvZiB0aGUgZmlyc3Qgc2Vzc2lvbi4gQWZ0ZXIgdGhpcyBwYXltZW50LCBubyBhZGRpdGlvbmFsIGNoYXJnZXMgYXJlIGluY3VycmVkIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSBjbGFzc2VzIHVubGVzcyBhbiBhZGRpdGlvbmFsIHNlcnZpY2UgaXMgcmVxdWVzdGVkIG9yIHByb3ZpZGVkLlxuICAgICAgPGJyIC8+XG4gICAgICA8aT40LXNlc3Npb24gKDM2MC1taW4pIGNsYXNzIHNlcmllcyYjeDIwMTQ7ICQxNjA8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5UZWxlTWVudGFsIEhlYWx0aDwvaDM+XG4gICAgPHA+XG4gICAgICBPbiBvY2Nhc2lvbiBpdCBtYXkgYmUgaW5kaWNhdGVkIGZvciB1cyB0byBlbmdhZ2UgaW4gdGVsZS1oZWFsdGggZWl0aGVyIG92ZXIgdGhlIHBob25lIG9yIHRocm91Z2ggdmlkZW8gY29tbXVuaWNhdGlvbi4gVGhlc2Ugc2VydmljZXMgYXJlIG9mZmVyZWQgdG8gaW5kaXZpZHVhbHMgb25seSBhZnRlciB3ZSBoYXZlIGluaXRpYWxseSBlc3RhYmxpc2hlZCBpbi1wZXJzb24gdGhlcmFwZXV0aWMgcmVsYXRpb25zaGlwIHRocm91Z2ggYXQgbGVhc3Qgb25lIGluLXBlcnNvbiBhcHBvaW50bWVudC4gRHVlIHRvIGxpY2Vuc2luZyByZXF1aXJlbWVudHMsIEkgYW0gdW5hYmxlIHRvIHByb3ZpZGUgdGhlc2Ugc2VydmljZXMgdG8gYW55b25lIG91dC1vZi1zdGF0ZSBvciBjb3VudHJ5IGF0IHRoZSB0aW1lIG9mIHNlcnZpY2UuIFRoZXJlIGFyZSBhIHZhcmlldHkgb2YgcGxhdGZvcm1zIGF2YWlsYWJsZSBmb3IgdGhpcyBzZXJ2aWNlIGFuZCwgdGhvdWdoIGNvbnZlbmllbnQsIGl0IGlzIGltcG9ydGFudCB0byBiZSBhd2FyZSB0aGF0IG1vc3QgYXJlIG5vdCBISVBBQSBjb21wbGlhbnQuIENvbXBsZXRpbmcgdGhlIEluZm9ybWVkIENvbnNlbnQgZm9ybSBhY2tub3dsZWRnZXMgeW91ciB1bmRlcnN0YW5kaW5nIG9mIHRoaXMgYW5kIGFjY2VwdGFuY2Ugb2YgdGhlIHJpc2sgc2hvdWxkIHdlIHV0aWxpemUgdGhpcyBmb3JtYXQgb2YgY2FyZS5cbiAgICAgIDxiciAvPlxuICAgICAgPGk+NSB0byAyNSBtaW51dGVzJiN4MjAxNDsgJDc1PC9pPlxuICAgICAgPGJyIC8+XG4gICAgICA8aT4yNi01MCBtaW51dGVzJiN4MjAxNDsgJDE1MDwvaT5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBzZXJ2aWNlc1JlaW1idXJzbWVudCA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgUGF5bWVudCBhbmQgUmVpbWJ1cnNlbWVudFxuICAgIDwvaDM+XG4gICAgPHA+XG4gICAgICBZb3Ugd2lsbCBiZSBleHBlY3RlZCB0byBwYXkgZm9yIGVhY2ggc2Vzc2lvbiBiZWZvcmUvYXQgdGhlIHN0YXJ0IG9mIHNlc3Npb24sIHVubGVzcyB3ZSBhZ3JlZSBvdGhlcndpc2UuIFBheW1lbnQgbWF5IGJlIG1hZGUgdGhyb3VnaCBjYXNoLCBjaGVjaywgb3IgSElQQUEgY29tcGxpYW50IGFwcGxpY2F0aW9uLiBVc2Ugb2YgdGhlIEhJUEFBIGNvbXBsaWFudCBhcHBsaWNhdGlvbiBpbmN1cnMgYW4gYWRkaXRpb25hbCAkNSBjaGFyZ2UuXG4gICAgPC9wPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3Qgc2VydmljZXNJbnN1cmFjZSA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMyBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgSW5zdXJhbmNlXG4gICAgPC9oMz5cbiAgICA8cD5cbiAgICAgIEkgYW0gYW4gXCJvdXQgb2YgbmV0d29yayBwcm92aWRlclwiIGZvciBpbnN1cmFuY2UgbmV0d29ya3MgYnV0IHdpbGwgcHJvdmlkZSB5b3UgYSBTdXBlcmJpbGwgd2hpY2ggeW91IG1heSB1c2UgdG8gcmVxdWVzdCByZWltYnVyc2VtZW50LiBUaGUgY292ZXJhZ2UgeW91IHJlY2VpdmUgaXMgZW50aXJlbHkgZGVwZW5kZW50IHVwb24gdGhlIHBsYW4gdGhhdCB5b3UgaGF2ZS4gSSByZWNvbW1lbmQgdGhhdCB5b3UgY29udGFjdCB5b3VyIGluc3VyYW5jZSBjb21wYW55IGRpcmVjdGx5IHRvIGRldGVybWluZSB5b3VyIHNwZWNpZmljIGNvdmVyYWdlLiBTb21lIHF1ZXN0aW9ucyB0aGF0IG1heSBiZSBoZWxwZnVsIGluIHRoaXMgY29udmVyc2F0aW9uIGluY2x1ZGU6XG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgRG8gSSBoYXZlIG1lbnRhbCBoZWFsdGggaW5zdXJhbmNlIGJlbmVmaXRzIHRoYXQgY292ZXIgcHN5Y2hvdGhlcmFweT9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIERvZXMgbXkgcG9saWN5IGNvdmVyIGFuIG91dCBvZiBuZXR3b3JrIExpY2Vuc2VkIFBzeWNob2xvZ2lzdD8gSWYgc28sIHdoYXQgcGVyY2VudGFnZSBpcyBjb3ZlcmVkIG9yIHdoYXQgaXMgdGhlIGNvdmVyYWdlIGFtb3VudCBwZXIgdGhlcmFweSBzZXNzaW9uP1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgV2hhdCBpcyBteSBkZWR1Y3RpYmxlIGFuZCBoYXMgaXQgYmVlbiBtZXQ/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBBcmUgbXkgbWVkaWNhbCBhbmQgbWVudGFsIGhlYWx0aC9iZWhhdmlvcmFsIGhlYWx0aCBkZWR1Y3RpYmxlcyBzZXBhcmF0ZT9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIEhvdyBtYW55IHNlc3Npb25zIHBlciB5ZWFyIGRvZXMgbXkgaGVhbHRoIGluc3VyYW5jZSBjb3Zlcj9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIERvZXMgdGhlIGRpYWdub3NpcyBtYXR0ZXI/IEFyZSBzb21lIGRpYWdub3NlcyBjb3ZlcmVkIGFuZCBvdGhlcnMgbm90P1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgV2hhdCBwYXBlcndvcmsgb3IgZm9ybXMgZG8gSSBuZWVkIHRvIHN1Ym1pdCBmb3Igc2Vzc2lvbnMgdG8gYmUgY292ZXJlZD9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIElzIGFwcHJvdmFsIHJlcXVpcmVkIGZyb20gbXkgcHJpbWFyeSBjYXJlIHBoeXNpY2lhbj9cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cblxuY29uc3QgY2xhc3NlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMz5cbiAgICAgIE1vb2QgJiBGb29kXG4gICAgPC9oMz5cbiAgICA8cD5cbiAgICAgIE1vb2QgJiBGb29kIGlzIGEgY2xhc3MgZGVzaWduZWQgZm9yIGluZGl2aWR1YWxzIHN0cnVnZ2xpbmcgd2l0aCBvdmVyZWF0aW5nLCBtaW5kbGVzcyBlYXRpbmcsIHN0cmVzcyBlYXRpbmcsIGVtb3Rpb25hbCBlYXRpbmcsIHNoYW1lIGFyb3VuZCBlYXRpbmcsIG9yIGJpbmdlIGVhdGluZy4gVGhlIGNvdXJzZSBpcyBzdHJ1Y3R1cmVkIGludG8gNCBjbGFzc2VzIGVhY2ggbGFzdGluZyA5MCBtaW51dGVzLiBUaGUgY2xhc3MgY2VudGVycyBvbiBwcmVzZW50ZWQgbWF0ZXJpYWwsIHRob3VnaCBxdWVzdGlvbnMgYW5kIHBhcnRpY2lwYXRpb24gYXJlIHdlbGNvbWUgYW5kIGVuY291cmFnZWQuIENsYXNzIG1hdGVyaWFscyBhbHNvIGluY2x1ZGUgaGFuZG91dHMgYW5kIGF0LWhvbWUgcHJhY3RpY2UgZXhlcmNpc2VzLiBEdXJpbmcgdGhlIGNvdXJzZSBvZiB0aGUgY2xhc3NlcyB3ZSB3aWxsIGNvdmVyIHRvcGljcyBpbmNsdWRpbmc6XG4gICAgPC9wPlxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXhGbG93OiAncm93IHdyYXAnIH19PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgd2hhdCBlbW90aW9uYWwgZWF0aW5nIGlzXG4gICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgY3VsdHVyYWwgaW1wbGljYXRpb25zXG4gICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgZW52aXJvbm1lbnRhbCBpbXBhY3RzXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBzZXQgcG9pbnQgdGhlb3J5XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBlbW90aW9uYWwgdnMgcGh5c2ljYWwgaHVuZ2VyXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBiaW5nZSBlYXRpbmcgY3ljbGVcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIGludGVycGVyc29uYWwgZHluYW1pY3MgYXJvdW5kIGZvb2RcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIHNlbGYtdGFsa1xuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIGJlaGF2aW9yIGFuYWx5c2lzICYgYmVoYXZpb3IgY2hhbmdlXG4gICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgbWluZGZ1bCBlYXRpbmdcbiAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBsb3ZpbmcgbGltaXRzXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBzZWxmLWNvbXBhc3Npb25cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIG1hbmFnaW5nIGRpZmZpY3VsdCBlbW90aW9uc1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgaGFiaXQgZm9ybWF0aW9uXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBzdGFnZXMgb2YgY2hhbmdlXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBoZWFsdGh5IGVhdGluZyBndWlkZWxpbmVzXG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxwPlxuICAgICAgQnkgdGhlIGVuZCBvZiB0aGUgY2xhc3Mgc2VyaWVzIHBhcnRpY2lwYW50cyB3aWxsIGJlIGFibGUgdG8gcmVjb2duaXplIG9wcG9ydHVuaXRpZXMgZm9yLCBwcmVwYXJlIGZvciwgYW5kIG1ha2UgcG9zaXRpdmUgY2hhbmdlcyBpbiB0aGVpciByZWxhdGlvbnNoaXBzIHdpdGggdGhlbXNlbHZlcywgZm9vZCwgYW5kIHRoZWlyIGVudmlyb25tZW50LlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IEFjdGl2ZUNsYXNzZXMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnT3JkZXIgY29tcGxldGUhJyk7XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgIHdpbmRvdy5FQldpZGdldHMuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgd2lkZ2V0VHlwZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgZXZlbnRJZDogJzgxMDAwMzY3Mjc5JyxcbiAgICAgICAgaWZyYW1lQ29udGFpbmVySWQ6ICdldmVudGJyaXRlLXdpZGdldC1jb250YWluZXItODEwMDAzNjcyNzknLFxuICAgICAgICBpZnJhbWVDb250YWluZXJIZWlnaHQ6IDQyNSxcbiAgICAgICAgb25PcmRlckNvbXBsZXRlOiBjb21wbGV0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbcmVmXSk7XG5cbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IGlkPVwiZXZlbnRicml0ZS13aWRnZXQtY29udGFpbmVyLTgxMDAwMzY3Mjc5XCIgLz5cbn1cblxuY29uc3QgcmVzb3VyY2VzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHA+XG4gICAgICBUaGUgYmVsb3cgYXJlIHJlc291cmNlcyB0aGF0IEkgZmluZCB0byBiZSBjbGluaWNhbGx5IHZhbHVhYmxlLiBJIGhhdmUgbm8gYWZmaWxpYXRpb24gd2l0aCBhbnkgb2YgdGhlIGluZGl2aWR1YWxzIG9yIGVudGl0aWVzIGluZGljYXRlZCBiZWxvdy4gVGhlc2UgcmVzb3VyY2VzIGFyZSBwcm92aWRlZCBwdXJlbHkgZHVlIHRvIG15IHBlcmNlcHRpb24gb2YgdGhlaXIgY2xpbmljYWwgYmVuZWZpdC4gSSByZWNlaXZlIG5vIGNvbXBlbnNhdGlvbiBvZiBhbnkga2luZCBmb3Igc2hhcmluZyB0aGVzZSByZXNvdXJjZXMuXG4gICAgPC9wPlxuICAgIDxoMz5XZWJwYWdlczwvaDM+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hbnhpZXR5Y2FuYWRhLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BbnhpZXR5IENhbmFkYTwvYT4gaXMgYW4gZXhjZWxsZW50IHdlYiByZXNvdXJjZSBmb3IgZXZpZGVuY2UgYmFzZWQgaW5mb3JtYXRpb24gYWJvdXQgYW54aWV0eS4gVGhlIHdlYnNpdGUgaXMgd3JpdHRlbiBpbiBjbGVhciBsYW5ndWFnZSB0aGF0IGlzIHRob3VnaHRmdWwsIGVhc3kgdG8gdW5kZXJzdGFuZCwgYW5kIGhlbHBmdWwuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbWFwcy5hbnhpZXR5Y2FuYWRhLmNvbS9jb3Vyc2VzL215LWFueGlldHktcGxhbi1tYXAtZm9yLWFkdWx0cy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NeSBBbnhpZXR5IFBsYW48L2E+IGlzIHRoZSBvbmxpbmUgY291cnNlIGFzc29jaWF0ZWQgd2l0aCBBbnhpZXR5IENhbmFkYS4gSXQgaXMgYSBmcmVlIGNvdXJzZSB0aGF0IHByb3ZpZGVzIGV4Y2VsbGVudCBpbmZvcm1hdGlvbiBpbiBhZGRpdGlvbiB0byBwcmFjdGljYWwgdG9vbHMgYW5kIHByYWN0aWNlcyBmb3IgbWFuYWdpbmcgYW54aWV0eSBhbmQgYW54aWV0eS1iYXNlZCBjb25kaXRpb25zLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkJyZW5lIEJyb3duPC9hPiBpcyBhbiBhdXRob3IsIHJlc2VhcmNoZXIsIGFuZCBzcGVha2VyIHRoYXQgSSBoaWdobHkgcmVjb21tZW5kLiBUaGUgbGluayBpcyB0byBoZXIgbWFpbiB3ZWJwYWdlLiBCZWxvdyBhcmUgc3BlY2lmaWMgcmVzb3VyY2VzIG9mIGhlcnMgdGhhdCBJIHJlY29tbWVuZC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nZ3NjLmJlcmtlbGV5LmVkdS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgR3JlYXRlciBHb29kIFNjaWVuY2UgQ2VudGVyPC9hPi0gQmVya2VsZXkgaXMgYSBjZW50ZXIgb2YgcmVzZWFyY2ggYW5kIGlubm92YXRpb24gZm9jdXNpbmcgb24gbWFraW5nIHBvc2l0aXZpdHkgYW5kIHBvc2l0aXZlIGNoYW5nZSBhY2Nlc3NpYmxlIHRvIGFsbC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZWR4Lm9yZy9jb3Vyc2UvdGhlLXNjaWVuY2Utb2YtaGFwcGluZXNzLTBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgU2NpZW5jZSBvZiBIYXBwaW5lc3M8L2E+IGlzIHRoZSBvbmxpbmUgY291cnNlIGZyb20gdGhlIEdyZWF0ZXIgR29vZCBTY2llbmNlIENlbnRlci4gSXQgaXMgYSBmcmVlIDgtd2VlayBjb3Vyc2UgdGhhdCBwcm92aWRlcyB0b29scyB0byBoYXBwaWVyIGV4cGVyaWVuY2VzIGFuZCBncmVhdGVyIG1lYW5pbmcgaW4gbGlmZS5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9nZ2lhLmJlcmtlbGV5LmVkdS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5HcmVhdGVyIEdvb2QgaW4gQWN0aW9uPC9hPiBwcm92aWRlcyBkb2FibGUgcHJhY3RpY2VzIGZvciBtYWtpbmcgY29uY3JldGUgYW5kIGltcGFjdGZ1bCBwb3NpdGl2ZSBjaGFuZ2VzXG4gICAgPC9wPlxuXG4gICAgPGgzPlZpZGVvczwvaDM+XG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGVkLmNvbS90YWxrcy9icmVuZV9icm93bl9vbl92dWxuZXJhYmlsaXR5P3V0bV9jYW1wYWlnbj10ZWRzcHJlYWQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXRlZGNvbXNoYXJlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIFBvd2VyIG9mIFZ1bG5lcmFiaWxpdHktIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50ZWQuY29tL3RhbGtzL2JyZW5lX2Jyb3duX2xpc3RlbmluZ190b19zaGFtZT91dG1fY2FtcGFpZ249dGVkc3ByZWFkJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX3NvdXJjZT10ZWRjb21zaGFyZVwiIHRhcmdldD1cIl9ibGFua1wiPkxpc3RlbmluZyB0byBTaGFtZS0gQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8yNjEzNDg3MDlcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TdXBlclNvdWwgU2Vzc2lvbnM6IFRoZSBBbmF0b215IG9mIFRydXN0LSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS92aWRlb3MvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QWRkaXRpb25hbCBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly95b3V0dS5iZS9JdnRaQlVTcGxyNFwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBTcGFjZSBCZXR3ZWVuIFNlbGYtRXN0ZWVtIGFuZCBTZWxmLUNvbXBhc3Npb24tIEtyaXN0aW4gTmVmZjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9zZWxmLWNvbXBhc3Npb24ub3JnL3ZpZGVvcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BZGRpdGlvbmFsIEtyaXN0aW4gTmVmZjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGVkLmNvbS90YWxrcy9zYW5kcmFfYWFtb2R0X3doeV9kaWV0aW5nX2RvZXNuX3RfdXN1YWxseV93b3JrP3V0bV9jYW1wYWlnbj10ZWRzcHJlYWQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXRlZGNvbXNoYXJlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V2h5IERpZXRpbmcgRG9lc24ndCBVc3VhbGx5IFdvcmstIFNhbmRyYSBBYW1vZHQ8L2E+PGJyIC8+XG5cbiAgICA8aDM+QXVkaW8gUmVjb3JkaW5nczwvaDM+XG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9jZW50ZXJmb3Jtc2Mub3JnL3ByYWN0aWNlLW1zYy9ndWlkZWQtbWVkaXRhdGlvbnMtYW5kLWV4ZXJjaXNlcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NaW5kZnVsIFNlbGYgQ29tcGFzc2lvbiBNZWRpdGF0aW9uczwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudWNsYWhlYWx0aC5vcmcvbWFyYy9taW5kZnVsLW1lZGl0YXRpb25zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VUNMQSBNZWRpdGF0aW9ucyAoQWxzbyBhdmFpbGFibGUgaW4gU3BhbmlzaCEpPC9hPjxiciAvPlxuXG4gICAgPGgzPkJvb2tzPC9oMz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9nZW5lZW5yb3RoLmNvbS9ib29rcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Xb21lbiwgRm9vZCwgYW5kIEdvZCBieSBHZW5lZW4gUm90aDwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9icmVuZWJyb3duLmNvbS9ib29rcy1hdWRpby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgR2lmdHMgb2YgSW1wZXJmZWN0aW9uIGJ5IEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL2Jvb2tzLWF1ZGlvL1wiIHRhcmdldD1cIl9ibGFua1wiPkRhcmluZyBHcmVhdGx5IGJ5IEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL2Jvb2tzLWF1ZGlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlJpc2luZyBTdHJvbmcgYnkgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBjbGllbnREb2N1bWVudHMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8cD5cbiAgICAgIFRoZSBmb2xsb3dpbmcgZm9ybXMgYXJlIGZvciB5b3VyIHJldmlldy4gSWYgd2UgaGF2ZSBzY2hlZHVsZWQgYW4gaW4tcGVyc29uIGFwcG9pbnRtZW50LCBjYXJlZnVsbHkgcmVhZCBlYWNoIG9mIHRoZSBmb3JtcyBiZWxvdy4gUGxlYXNlIHByaW50LCBjb21wbGV0ZSwgYW5kIGJyaW5nIHRoZSBmaXJzdCB0aHJlZSBmb3JtcyB0byBvdXIgZmlyc3QgYXBwb2ludG1lbnQuIFdlIHdpbGwgcmV2aWV3IHRoZW0gdG9nZXRoZXIuIElmIHlvdSB3b3VsZCBsaWtlIGZvciB5b3VyIGhlYWx0aCBpbmZvcm1hdGlvbiB0byBiZSBzaGFyZWQgd2l0aCBhbm90aGVyIGluZGl2aWR1YWwgb3IgZ3JvdXAsIG9yIHdvdWxkIGxpa2UgbWUgdG8gZ2F0aGVyIGluZm9ybWF0aW9uIGZyb20gdGhlbSwgcGxlYXNlIHByaW50LCBjb21wbGV0ZSwgYW5kIGJyaW5nIHRoZSBSZWxlYXNlIG9mIEluZm9ybWF0aW9uIGZvcm0gdG8geW91ciBuZXh0IGFwcG9pbnRtZW50IHdoaWNoIGlkZW50aWZpZXMgdGhlIHBlcnNvbiBvciBlbnRpdHkgd2l0aCB3aG9tIHlvdXIgaW5mb3JtYXRpb24gc2hvdWxkIGJlIHNoYXJlZC5cbiAgICA8L3A+XG4gICAgPHVsPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvSW5mb3JtZWQgQ29uc2VudC5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5JbmZvcm1lZCBDb25zZW50PC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL0ludGFrZSBGb3JtLnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPkludGFrZSBGb3JtPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL1JlY2VpcHQgb2YgRm9ybXMucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+UmVjZWlwdCBvZiBGb3JtczwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9Qcml2YWN5IFBvbGljeS5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9ST0kucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+UmVsZWFzZSBvZiBJbmZvcm1hdGlvbjwvYT5cbiAgICAgIDwvbGk+XG5cbiAgICA8L3VsPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuXG5cbmNvbnN0IENhcmQxID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gcHJvcHMudGl0bGUgP1xuICAgIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLXRpdGxlJz5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgKSA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBpZCA9IHByb3BzLnNocmluayA/ICdzaHJpbmsnIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9e2lkfVxuICAgICAgY2xhc3NOYW1lPSdjYXJkIGNhcmQtMSdcbiAgICA+XG4gICAgICB7dGl0bGV9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cbiAgICAgICAge3Byb3BzLmJvZHl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENhcmQyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdjYXJkIGNhcmQtMSdcbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBQYWdlVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS10aXRsZScgaWQ9J3RvcCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuY2xhc3MgRHJhd2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZVByYWN0aWNlQ2xpY2ssXG4gICAgICBoYW5kbGVTZXJ2aWNlc0NsaWNrLFxuICAgICAgaGFuZGxlQ2xhc3Nlc0NsaWNrLFxuICAgICAgaGFuZGxlQ29udGFjdENsaWNrLFxuICAgICAgaGFuZGxlRG9jdW1lbnRzQ2xpY2ssXG4gICAgICBoYW5kbGVSZXNvdXJjZXNDbGlja1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgYWN0aXZlID0gJydcblxuICAgIGNvbnN0IG1lbnVTdHlsZSA9IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcicsXG4gICAgICBwYWRkaW5nOiAxMFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RyYXdlcic+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmFjdGljZUNsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3ByYWN0aWNlJyB9KX1cbiAgICAgICAgICBzdHlsZT17eyAuLi5tZW51U3R5bGUsIGJvcmRlclRvcDogJzFweCBzb2xpZCBjdXJyZW50Q29sb3InIH19XG4gICAgICAgID5cbiAgICAgICAgICBQcmFjdGljZSBBcmVhc1xuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZXJ2aWNlc0NsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3NlcnZpY2VzJyB9KX1cbiAgICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgU2VydmljZXNcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xhc3Nlc0NsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NsYXNzZXMnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBDbGFzc2VzXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvY3VtZW50c0NsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2RvY3MnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBEb2N1bWVudHNcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ29udGFjdENsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NvbnRhY3QnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBDb250YWN0XG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc291cmNlc0NsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3Jlc291cmNlcycgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlc291cmNlc1xuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdG8sXG4gICAgICB0ZXh0LFxuICAgICAgb25DbGljayxcbiAgICAgIGNsYXNzZXNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICA+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gJHtjbGFzc2VzfWB9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9BcHAnO1xuXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsgXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==