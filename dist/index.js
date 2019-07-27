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
exports.push([module.i, "* {\n  color: #3f4c4e;\n}\n\nh2 {\n  text-align: center;\n  font-size: 3rem;\n  font-family: 'Dancing Script', cursive;\n  margin: 0;\n}\n\nbody {\n  margin: 0;\n  position: relative;\n}\n\n.navMenu {\n  font-size: 18px;\n  position: relative;\n}\n\n.backdrop {\n  overflow: hidden;\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n  height: 100vh;\n}\n\n.hero {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n\n.content {\n  margin-top: 50px;\n}\n\n.hero-content {\n  width: 100%;\n  display: flex;\n  height: 85vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.hero-content blockquote {\n  width: 60%;\n}\n\n.hero-content h1 {\n  /* color: #FFFFFF; */\n}\n\nblockquote footer {\n  text-align: end;\n  font-size: 22px;\n  /* color: #FFFFFF; */\n}\n\n.meet {\n  display: flex;\n  background-color: #EDEAE5;\n  padding: 30px;\n\n}\n\n\n\n\n.profile {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n}\n\n.profilePhoto {\n  width: 100%;\n  max-width: 450px;\n  min-width: 0;\n  min-height: 0;\n  object-fit: contain;\n  border-radius: 25px;\n}\n\n.bio {\n  flex: 1 0 auto;\n  margin: 20px;\n  max-width: 50%;\n}\n\n.bio .bioSubtitle {\n  text-align: center;\n}\n\n.bio p {\n  word-wrap: break-word;\n  /* padding: 0px 30px; */\n}\n\n@media screen and (max-width: 400px) {\n  .meet {\n    flex-direction: column;\n  }\n\n  .bio,\n  .profile {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n\n.practiceAreas {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n\n.practiceAreas .areas {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 30px;\n  align-items: space-between;\n  justify-content: center;\n}\n\n.practiceAreas .areas>.area {\n  display: flex;\n  flex: 1 0 290px;\n  max-width: 290px;\n  height: 320px;\n  background: #F7F7F7;\n  border-radius: 2px;\n  flex-direction: column;\n  margin: 0 30px 30px 0;\n  position: relative;\n}\n\n.areaImage {\n  width: 100%;\n  height: 200px;\n  background-color: lightgray;\n}\n\n.areaEatingConcerns {\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left bottom -50px;\n}\n\n.areaLifestyle {\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -65px;\n}\n/* \n.areaLifestyle.lazy {\n  background: url('../res/lifestyle-placeholder.jpg') no-repeat;\n  background-size: cover;\n  background-position: left bottom -65px;\n} */\n\n.areaMedicalProblems {\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\n  background-size: 100% 140%;\n  background-position: left;\n}\n\n/* .areaMedicalProblems.lazy {\n  background: url('../res/medicalproblems-placeholder.jpg') no-repeat;\n} */\n\n.areaRelationships {\n  background: url(" + ___CSS_LOADER_URL___4___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n/* \n.areaRelationshipsj.lazy {\n  background: url('../res/relationships.jpg') no-repeat;\n} */\n\n.areaStress {\n  background: url(" + ___CSS_LOADER_URL___5___ + ") no-repeat;\n  background-size: cover;\n  background-position: left bottom -80px;\n}\n\n/* .areaStress.lazy {\n  background: url('../res/stressmanagement-placeholder.jpg') no-repeat;\n} */\n\n.areaTransitions {\n  background: url(" + ___CSS_LOADER_URL___6___ + ") no-repeat;\n  background-size: cover;\n  background-position: left -20px;\n}\n\n/* .areaTransitions .lazy {\n  background: url('../res/transitions-placeholder.jpg') no-repeat;\n} */\n\n.areaText {\n  font-size: 30px;\n  height: 120px;\n  max-height: 120px;\n}\n\n.areaText div {\n  margin-left: 42px;\n  margin-top: 12px;\n}\n\n.areaOverlay {\n  background: transparent;\n  border: 1px solid black;\n  border-radius: 2px;\n  position: absolute;\n  width: 230px;\n  height: 260px;\n  margin: 30px;\n}\n\n.services {\n  height: 400px;\n  background-color: #FBEEC1;\n  display: flex;\n}\n\n.servicesDescription {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n}\n\n@media screen and (max-width: 400px) {\n  .servicesDescription {\n    width: 100%;\n  }\n\n  .servicesImage {\n    width: 0%;\n    display: none;\n  }\n\n  .hero-content blockquote h1 {\n    font-size: 1.75rem;\n  }\n\n  .hero-content blockquote footer {\n    font-size: 1.25rem;\n  }\n}\n\n.button {\n  display: inline-block;\n  border: none;\n  border-radius: 2px;\n  margin: 0;\n  text-decoration: none;\n  background: rgba(171, 208, 230, 1);\n  font-size: 18px;\n  cursor: pointer;\n  text-align: center;\n  transition: background 200ms ease-in-out, transform 100ms ease;\n  -webkit-appearance: none;\n  padding: 10px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.button:hover {\n  background: rgb(202, 226, 240);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.readMore {\n  display: flex;\n  justify-content: center;\n}\n\n.classes {\n  display: flex;\n  justify-content: center;\n  background: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n.contact {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n.contact form {\n  margin-top: 30px;\n}\n\n\n.group {\n  position: relative;\n  margin-bottom: 45px;\n}\n\ninput,\ntextarea {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #3f4c4e;\n  background: transparent;\n  color: #3f4c4e;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n/* LABEL ======================================= */\nlabel {\n  color: #3f4c4e;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n/* active state */\ninput:focus~label,\ninput:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\ntextarea {\n  resize: none;\n  padding: 0;\n}\n\ntextarea:focus~label,\ntextarea:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: #FFFFFF;\n}\n\n/* TODO learn this */\n\n/* BOTTOM BARS ================================= */\n.bar {\n  position: relative;\n  display: block;\n  width: 300px;\n}\n\n.bar:before,\n.bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #3f4c4e;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar:before {\n  left: 50%;\n}\n\n.bar:after {\n  right: 50%;\n}\n\n/* active state */\ninput:focus~.bar:before,\ninput:focus~.bar:after {\n  width: 50%;\n}\n\n/* active state */\ntextarea:focus~.bar:before,\ntextarea:focus~.bar:after {\n  width: 50%;\n}\n\n/* HIGHLIGHTER ================================== */\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n/* active state */\ninput:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* active state */\ntextarea:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* ANIMATIONS ================ */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@-moz-keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: #3f4c4e;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #EDEAE5;\n  padding: 20px;\n}\n\n#address:before {\n  content: '\\007C';\n  padding: 0 15px\n}\n\n#address:after {\n  content: '\\007C';\n  padding: 0 15px;\n}\n\n@media screen and (max-width: 776px) {\n\n  .footer {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  #address:before {\n    content: none;\n    padding: 0\n  }\n  \n  #address:after {\n    content: none;\n    padding: 0;\n  }\n}\n\n\n.link:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  bottom: -2px;\n  left: 0;\n  background: #3f4c4e;\n  visibility: hidden;\n  border-radius: 5px;\n  transform: scaleX(0);\n  transition: .25s linear;\n}\n\n.link:hover:before,\n.link:focus:before {\n  visibility: visible;\n  transform: scaleX(1);\n}\n\n/* .navMenu:before {\n  bottom: -5px !important;\n} */\n\n.contact {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___7___ + ");\n}\n\n/* .contact.lazy {\n  background: center / cover no-repeat url('../res/succulentBurst-placeholder.jpg');\n} */\n\n.moreClasses {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___8___ + ");\n}\n/* \n.moreClasses.lazy {\n  background: center / cover no-repeat url('../res/pineapple-placeholder.jpg');\n} */\n\n.moreResources {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___9___ + ");\n}\n/* \n.moreResources.lazy {\n  background: center / cover no-repeat url('../res/moreResources-placeholder.jpg');\n} */\n\n.morePractice {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___10___ + ");\n}\n\n/* .morePractice.lazy {\n  background: center / cover no-repeat url('../res/practiceareas-placeholder.jpg');\n} */\n\n.moreServices {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___11___ + ");\n}\n\n.moreServices.lazy {\n  /* background: center / cover no-repeat url('../res/cornerplant-placeholder.jpg'); */\n}\n\n.moreDocuments {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___12___ + ");\n\n}\n\n/* .moreDocuments.lazy {\n  background: center / cover no-repeat url('../res/succulentmat-placeholder.jpg');\n\n} */\n\n.signature {\n  font-family: 'Dancing Script', cursive;\n  font-size: 26px;\n}\n\n.navMenu:hover {\n  filter: brightness(1.2);\n}\n\n.page-title {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.page-title .title {\n  font-size: 4rem;\n  font-family: 'Dancing Script', cursive;\n}\n\n.card {\n  background: #F7F7F7;\n  border-radius: 2px;\n  margin: 50px 15%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  min-width: 100px;\n}\n\n.card-body {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  min-height: 100px;\n  padding: 20px;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  padding: 20px;\n  border-bottom: 1px solid #222222;\n  height: 100%;\n}\n\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.card-2 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n}\n\n.background {\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n\n.drawer-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.30);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  z-index: 20;\n}\n\n.drawer-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  width: 155px;\n  height: calc(100vh - 50px);\n  z-index: 100;\n  /* transition: all 0.3s ease-in-out; */\n  top: 50px;\n  position: fixed;\n}\n\n.drawer {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: #EDEAE5;\n  justify-content: flex-start;\n  box-shadow: 11px 10px 8px 0px rgba(0, 0, 0, 0.25), 10px 0 5px -5px rgba(0, 0, 0, 0);\n  transition: none;\n}\n\n.drawer+.dark {\n  background-color: #C0C3C6;\n}\n\n.drawer-button {\n  width: 100%;\n  height: 40px;\n}\n\n.header-nav-button {\n  height: 40px;\n  width: 100px;\n}\n\n.drawer-item {\n  display: flex;\n}\n\n.drawer-item>div {\n  flex: 1;\n  padding-bottom: 10px;\n}\n\n.header-hamburger {\n  cursor: pointer;\n}\n\n.header-hamburger:hover * {\n  color: #879092;\n}\n\n.hide {\n  display: none;\n}\n\n/* .moreServices h2 {\n  text-align: center;\n  font-size: 3rem;\n  margin: unset;\n  font-family: Roboto, sans-serif;\n} */", ""]);


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

      switch (page.name) {
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
  var onNav = props.onNav; // const [isLazy, setLazy] = React.useState(true);
  // React.useEffect(() => {
  //   if (isLazy) {
  //     setLazy(false);
  //   }
  // });

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
    className: "areaImage areaEatingConcerns ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Eating", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Concerns"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaLifestyle ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Lifestyle", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Changes"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaTransitions ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Life", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Transitions"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaRelationships ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Relationship", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Challenges"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaOverlay"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaImage areaMedicalProblems ".concat(lazy)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "areaText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Health", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Difficulties"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "area card-1"
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


var meetSteph = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome and thank you for visiting! This is a place to explore the possibility of change for a better tomorrow. There is no \u201Cone size fits all\u201D approach to our time together. I work collaboratively with my clients to create an environment of respect and compassion that can be applied to renew their lives. Therapy has the power to both soothe and transform. I use techniques of one-on-one therapy and classes to spark meaningful and lasting change. I am known by my clients as being down to earth, genuine, and relatable. I look forward to partnering together to build your healthier tomorrow.");
var practiceAreas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Eating Concerns"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Individuals noticing mindless, stress, emotional, or binge eating behaviors are welcome to consider both individual and class-based therapies with me. My approach to these concerns recognizes the complex role eating can play as a mechanism of coping for individual, family, and culturally systemic issues. We work together to acknowledge the fullness of this role as well as it's history, while honoring the desire that may exist to change. Through our work we can begin to develop new and healthier coping strategies as a natural outcome of increased awareness and self-compassion. I tailor my approach to the needs and style of the individual with whom I am working."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Lifestyle Changes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Most of us can relate to the running mental list of things we know we \"should\" be doing in order to be healthier. Maybe this is moving our bodies more, eating differently, improving sleep habits, or disconnecting from technology. Maybe it could be these things plus many more! While certainly excellent habits, looking at a list of personal wellness \"to dos\" can be overwhelming. In fact, we often avoid thinking about these healthy living items because it can feel hopeless. Unfortunately, often this means staying stuck in a rut of feeling unhealthy. Together, we can create a plan of small steps to work towards connecting behavior changes with your deepest values. Things that may have felt forced in the past can become things we are eager for. I will leverage my training in Lifestyle Medicine to help set manageable and research supported aims to produce real improvements in your health."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Phase of Life Issues/Life Transitions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Though the phrase, \"the only thing constant is change\" is one familiar to many of us, this often feels like little comfort during the turmoil of a significant transition. Changes in life circumstances can impact us on every level of our being and external life. Seeking therapy during these times can be both anchor and guide light. I will support you to process the loss of how things have been. When you are ready, we will set consciously developed goals for the phase of life that you find yourself in now. We will work together to identify healthy core components of who you are evolving to be, and center our attention to nurture this growth. There is no set timeline of how long an adjustment period lasts. I will help you to move into the next part of your life in healthful ways, as quickly as is reasonable, and in complete respect for your own pace."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Relationship Challenges"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Romantic, family, social, and occupational relationships can all be sources of significant pleasure and, consequently, significant pain. There are a multitude of reasons relationships can become troubled. Many of the roots of these reasons can be traced to communication clarity. While we cannot change other people, we can identify personal qualities in ourselves that we wish to change for the wellbeing of a current or future relationship. Working towards identifying these areas, creating mindful awareness around them, and making values-based changes can provide both personal benefits and improvements to the relationship. We can work together to identify and optimize these changes while prioritizing effective and clear communication as the cornerstone to improved relationships."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Health Difficulties"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There is no doubt that our physical wellbeing impacts our psychological wellbeing and vice versa. Whether you are looking for support in improving your management of a medical problem, handling the stress around it, or believe there may be lifestyle changes that will reverse the condition, I would be happy to support this aspect of your health. I am a trained health psychologist and work regularly with both chronic and acute medical conditions. I have personal and professional experience with the impacts physical health can have not only on oneself, but also on those around us. I believe support can make a substantive difference in managing a health concern as well as the emotional and social impacts of this. I will work with you to accept those realities that are unchanging, as well as recognize opportunities for positive growth."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Stress Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "At times we can find ourselves overwhelmed. The reasons for feeling overwhelmed might seem clear, or they may be hard to understand. It can feel like being trapped in parts of your own life. Talking through your stressors with a professional can allow space around painful parts of your experience that could ease the pressure. There may also be alternative perspectives that you aren\u2019t able to see from being right in the thick of the stress, that may be visible from an outside perspective. Therapy can provide support to process your experiences and free you to be a more whole version of yourself; able to engage with the rest of your life and the people in it."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcz9lODVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2VzbS9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LWludmFyaWFudC9kaXN0L3RpbnktaW52YXJpYW50LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzL2Nvcm5lcnBsYW50LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvZWF0aW5nY29uY2VybnMuanBnIiwid2VicGFjazovLy8uL3Jlcy9oZXJvLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbGlmZXN0eWxlLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbW9yZVJlc291cmNlcy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3BpbmVhcHBsZS5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3ByYWN0aWNlYXJlYXMuanBnIiwid2VicGFjazovLy8uL3Jlcy9yZWxhdGlvbnNoaXBzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3VjY3VsZW50bWF0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvdHJhbnNpdGlvbnMuanBnIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInBhZ2UiLCJkb2NrIiwiY2xvc2VEcmF3ZXIiLCJuYW1lIiwiaGlzdG9yeSIsInB1c2giLCJjdXJyZW50Iiwic2hvd0RyYXdlciIsInN0YXRlIiwic2Nyb2xsVG8iLCJzaG93SGFtYnVyZ2VyIiwiY3VycmVudExvY2F0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImN1cnJlbnRQYWdlIiwiY3JlYXRlSGlzdG9yeSIsImxpc3RlbiIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZW1wbGF0ZVN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmb250RmFtaWx5IiwiY29udGVudCIsImhhbmRsZU5hdiIsInRvZ2dsZURyYXdlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQm9keSIsImNsYXNzZXMiLCJjbiIsIm92ZXJsYXlDbGFzc2VzIiwib25EcmF3ZXJQcmFjdGljZUNsaWNrIiwib25OYXYiLCJvbkRyYXdlclNlcnZpY2VzQ2xpY2siLCJvbkRyYXdlckNvbnRhY3RDbGljayIsIm9uRHJhd2VyQ2xhc3Nlc0NsaWNrIiwib25EcmF3ZXJEb2N1bWVudHNDbGljayIsIm9uRHJhd2VyUmVzb3VyY2VzQ2xpY2siLCJoYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2siLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwidW5kZWZpbmVkIiwiYmVoYXZpb3IiLCJib2R5U3R5bGUiLCJtaW5IZWlnaHQiLCJuIiwicmVuZGVyRHJhd2VyIiwiY2hpbGRyZW4iLCJIZWFkZXIiLCJpbmxpbmVTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsIm1lbnVTdHlsZSIsImN1cnNvciIsImFjdGl2ZSIsIm9wZW5EcmF3ZXIiLCJyZW5kZXJIYW1idXJnZXIiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJGb290ZXIiLCJIb21lIiwibGF6eSIsIm1lZXRTdGVwaCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsIm1hcmdpblRvcCIsIm1haWwiLCJQcmFjdGljZUFyZWFzIiwicHJhY3RpY2VBcmVhcyIsIlNlcnZpY2VzIiwic2VydmljZXMiLCJzZXJ2aWNlc1JlaW1idXJzbWVudCIsInNlcnZpY2VzSW5zdXJhY2UiLCJDbGFzc2VzIiwiQ2xpZW50RG9jdW1lbnRzIiwiY2xpZW50RG9jdW1lbnRzIiwiUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwiRmVlcyIsImZlZXMiLCJmbGV4RmxvdyIsIkNhcmQxIiwidGl0bGUiLCJib2R5IiwiUGFnZVRpdGxlIiwiRHJhd2VyIiwiaGFuZGxlUHJhY3RpY2VDbGljayIsImhhbmRsZVNlcnZpY2VzQ2xpY2siLCJoYW5kbGVDbGFzc2VzQ2xpY2siLCJoYW5kbGVDb250YWN0Q2xpY2siLCJoYW5kbGVEb2N1bWVudHNDbGljayIsImhhbmRsZVJlc291cmNlc0NsaWNrIiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsImJvcmRlclRvcCIsIkJ1dHRvbiIsInRvIiwidGV4dCIsIm9uQ2xpY2siLCJSZWFjdERPTSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkEsY0FBYyxtQkFBTyxDQUFDLGtIQUFzRDs7QUFFNUUsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLG1HQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBLG1CQUFtQixhQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNkekI7QUFBQSxtQkFBbUIsYUFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVlLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQnZCO0FBQUEsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVlLHlFQUFVLEU7Ozs7Ozs7Ozs7O0FDckN6Qiw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtDQUtBOztBQUVPLElBQU1BLEdBQWI7QUFBQTtBQUFBO0FBQUE7O0FBSUUsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw2RUFBTUEsS0FBTjs7QUFEaUI7O0FBQUEsZ0VBa0RQLFVBQUNDLE1BQUQsRUFBWTtBQUN0QixZQUFLQyxRQUFMLENBQWM7QUFBRUMsWUFBSSxFQUFFRjtBQUFSLE9BQWQ7O0FBRUEsVUFBSUEsTUFBTSxDQUFDRyxJQUFYLEVBQWlCO0FBQ2YsY0FBS0MsV0FBTDtBQUNEOztBQUVELGNBQVFGLElBQUksQ0FBQ0csSUFBYjtBQUNFLGFBQUssTUFBTDtBQUNFLGdCQUFLQyxPQUFMLENBQWFDLElBQWIsQ0FBa0IsR0FBbEI7O0FBQ0E7O0FBQ0YsYUFBSyxVQUFMO0FBQ0UsZ0JBQUtELE9BQUwsQ0FBYUMsSUFBYixDQUFrQixpQkFBbEI7O0FBQ0E7O0FBQ0YsYUFBSyxVQUFMO0FBQ0UsZ0JBQUtELE9BQUwsQ0FBYUMsSUFBYixDQUFrQixXQUFsQjs7QUFDQTs7QUFDRixhQUFLLFNBQUw7QUFDRSxnQkFBS0QsT0FBTCxDQUFhQyxJQUFiLENBQWtCLFVBQWxCOztBQUNBOztBQUNGLGFBQUssV0FBTDtBQUNFLGdCQUFLRCxPQUFMLENBQWFDLElBQWIsQ0FBa0IsWUFBbEI7O0FBQ0E7O0FBQ0YsYUFBSyxNQUFMO0FBQ0UsZ0JBQUtELE9BQUwsQ0FBYUMsSUFBYixDQUFrQixtQkFBbEI7O0FBakJKO0FBbUJELEtBNUVrQjs7QUFBQSxtRUE4RUosWUFBTTtBQUNuQixZQUFLTixRQUFMLENBQWMsVUFBQ08sT0FBRDtBQUFBLGVBQWM7QUFDMUJDLG9CQUFVLEVBQUUsQ0FBQ0QsT0FBTyxDQUFDQztBQURLLFNBQWQ7QUFBQSxPQUFkO0FBR0QsS0FsRmtCOztBQUFBLGtFQW9GTCxZQUFNO0FBQ2xCLFlBQUtSLFFBQUwsQ0FBYztBQUNaUSxrQkFBVSxFQUFFO0FBREEsT0FBZDtBQUdELEtBeEZrQjs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hSLFVBQUksRUFBRTtBQUNKRyxZQUFJLEVBQUUsTUFERjtBQUVKTSxnQkFBUSxFQUFFO0FBRk4sT0FESztBQUtYQyxtQkFBYSxFQUFFLEtBTEo7QUFNWEgsZ0JBQVUsRUFBRTtBQU5ELEtBQWI7QUFTQSxRQUFNSSxlQUFlLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBeEM7QUFDQSxVQUFLQyxXQUFMLEdBQW1CSixlQUFuQjtBQUNBLFVBQUtQLE9BQUwsR0FBZVksb0VBQWEsRUFBNUI7O0FBRUEsVUFBS1osT0FBTCxDQUFhYSxNQUFiLENBQW9CLFVBQUNKLFFBQUQsRUFBYztBQUNoQyxZQUFLRSxXQUFMLEdBQW1CRixRQUFRLENBQUNDLFFBQTVCO0FBQ0QsS0FGRDs7QUFmaUI7QUFrQmxCOztBQXRCSDtBQUFBO0FBQUEsd0NBd0JzQjtBQUFBOztBQUNsQixVQUFNSSxLQUFLLEdBQUdOLE1BQU0sQ0FBQ08sVUFBckI7O0FBQ0EsVUFBSUQsS0FBSyxHQUFHLEdBQVosRUFBaUI7QUFDZixhQUFLbkIsUUFBTCxDQUFjO0FBQUVRLG9CQUFVLEVBQUU7QUFBZCxTQUFkO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS1IsUUFBTCxDQUFjO0FBQ1pRLG9CQUFVLEVBQUUsS0FEQTtBQUVaRyx1QkFBYSxFQUFFO0FBRkgsU0FBZDtBQUlEOztBQUVERSxZQUFNLENBQUNRLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDdEMsWUFBTUYsS0FBSyxHQUFHTixNQUFNLENBQUNPLFVBQXJCO0FBRHNDLFlBR3BDVCxhQUhvQyxHQUlsQyxNQUFJLENBQUNGLEtBSjZCLENBR3BDRSxhQUhvQzs7QUFNdEMsWUFBSVEsS0FBSyxHQUFHLEdBQVIsSUFBZVIsYUFBbkIsRUFBa0M7QUFDaEMsZ0JBQUksQ0FBQ1gsUUFBTCxDQUFjO0FBQ1pRLHNCQUFVLEVBQUUsS0FEQTtBQUVaRyx5QkFBYSxFQUFFO0FBRkgsV0FBZDtBQUlELFNBTEQsTUFLTyxJQUFJUSxLQUFLLEdBQUcsR0FBUixJQUFlLENBQUNSLGFBQXBCLEVBQW1DO0FBQ3hDLGdCQUFJLENBQUNYLFFBQUwsQ0FBYztBQUNaVyx5QkFBYSxFQUFFO0FBREgsV0FBZDtBQUdEO0FBQ0YsT0FoQkQ7QUFpQkQ7QUFwREg7QUFBQTtBQUFBLDZCQThGVztBQUNQLFVBQU1XLGFBQWEsR0FBRztBQUNwQkMsZUFBTyxFQUFFLE1BRFc7QUFFcEJDLHFCQUFhLEVBQUUsUUFGSztBQUdwQkMsa0JBQVUsRUFBRTtBQUhRLE9BQXRCO0FBRE8sVUFRTHhCLElBUkssR0FTSCxLQUFLUSxLQVRGLENBUUxSLElBUks7QUFBQSxVQVlMRyxJQVpLLEdBYUhILElBYkcsQ0FZTEcsSUFaSztBQWVQLFVBQUlzQixPQUFPLEdBQUcsdUVBQWQ7O0FBRUEsY0FBUXRCLElBQVI7QUFDRSxhQUFLLE1BQUw7QUFDRXNCLGlCQUFPLEdBQUcsMkRBQUMsSUFBRDtBQUFNLGlCQUFLLEVBQUUsS0FBS0M7QUFBbEIsWUFBVjtBQUNBOztBQUNGLGFBQUssVUFBTDtBQUNFRCxpQkFBTyxHQUFHLDJEQUFDLGFBQUQsT0FBVjtBQUNBOztBQUNGLGFBQUssVUFBTDtBQUNFQSxpQkFBTyxHQUFHLDJEQUFDLFFBQUQsT0FBVjtBQUNBOztBQUNGLGFBQUssU0FBTDtBQUNFQSxpQkFBTyxHQUFHLDJEQUFDLE9BQUQsT0FBVjtBQUNBOztBQUNGLGFBQUssV0FBTDtBQUNFQSxpQkFBTyxHQUFHLDJEQUFDLFNBQUQsT0FBVjtBQUNBOztBQUNGLGFBQUssTUFBTDtBQUNFQSxpQkFBTyxHQUFHLDJEQUFDLGVBQUQsT0FBVjtBQUNBOztBQUNGLGFBQUssTUFBTDtBQUNFQSxpQkFBTyxHQUFHLDJEQUFDLElBQUQsT0FBVjtBQUNBO0FBckJKOztBQXdCQSxhQUNFO0FBQ0UsYUFBSyxFQUFFSjtBQURULFNBR0UsMkRBQUMsTUFBRDtBQUNFLHFCQUFhLEVBQUUsS0FBS2IsS0FBTCxDQUFXRSxhQUQ1QjtBQUVFLGNBQU0sRUFBRVAsSUFGVjtBQUdFLGFBQUssRUFBRSxLQUFLdUIsU0FIZDtBQUlFLGtCQUFVLEVBQUUsS0FBS0M7QUFKbkIsUUFIRixFQVNFLDJEQUFDLElBQUQ7QUFDRSxZQUFJLEVBQUUzQixJQURSO0FBRUUsbUJBQVcsRUFBRSxLQUFLRSxXQUZwQjtBQUdFLGtCQUFVLEVBQUUsS0FBS00sS0FBTCxDQUFXRCxVQUh6QjtBQUlFLGFBQUssRUFBRSxLQUFLbUI7QUFKZCxTQU1HRCxPQU5ILENBVEYsRUFpQkUsMkRBQUMsTUFBRDtBQUNFLGFBQUssRUFBRSxLQUFLQztBQURkLFFBakJGLENBREY7QUF1QkQ7QUE5Skg7O0FBQUE7QUFBQSxFQUF5QkUsNENBQUssQ0FBQ0MsU0FBL0I7O0lBaUtNQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0ZBNEJ1QixZQUFNO0FBQy9CLGFBQUtqQyxLQUFMLENBQVdLLFdBQVg7QUFDRCxLOztvRUFFYyxZQUFNO0FBQUEsVUFDWEssVUFEVyxHQUNJLE9BQUtWLEtBRFQsQ0FDWFUsVUFEVztBQUduQixVQUFNd0IsT0FBTyxHQUFHQyxpREFBRSxDQUFDLGtCQUFELEVBQXFCO0FBQ3JDLGdCQUFRLENBQUN6QjtBQUQ0QixPQUFyQixDQUFsQjtBQUlBLFVBQU0wQixjQUFjLEdBQUdELGlEQUFFLENBQUMsZ0JBQUQsRUFBbUI7QUFDMUMsZ0JBQVEsQ0FBQ3pCO0FBRGlDLE9BQW5CLENBQXpCOztBQUtBLFVBQU0yQixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbEMsZUFBS3JDLEtBQUwsQ0FBV3NDLEtBQVgsQ0FBaUI7QUFBRWhDLGNBQUksRUFBRSxVQUFSO0FBQW9CTSxrQkFBUSxFQUFFLENBQTlCO0FBQWlDUixjQUFJLEVBQUU7QUFBdkMsU0FBakI7QUFDRCxPQUZEOztBQUlBLFVBQU1tQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQU07QUFDbEMsZUFBS3ZDLEtBQUwsQ0FBV3NDLEtBQVgsQ0FBaUI7QUFBRWhDLGNBQUksRUFBRSxVQUFSO0FBQW9CTSxrQkFBUSxFQUFFLENBQTlCO0FBQWlDUixjQUFJLEVBQUU7QUFBdkMsU0FBakI7QUFDRCxPQUZEOztBQUlBLFVBQU1vQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMsZUFBS3hDLEtBQUwsQ0FBV3NDLEtBQVgsQ0FBaUI7QUFBRWhDLGNBQUksRUFBRSxNQUFSO0FBQWdCTSxrQkFBUSxFQUFFLFNBQTFCO0FBQXFDUixjQUFJLEVBQUU7QUFBM0MsU0FBakI7QUFDRCxPQUZEOztBQUlBLFVBQU1xQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFDakMsZUFBS3pDLEtBQUwsQ0FBV3NDLEtBQVgsQ0FBaUI7QUFBRWhDLGNBQUksRUFBRSxTQUFSO0FBQW1CTSxrQkFBUSxFQUFFLENBQTdCO0FBQWdDUixjQUFJLEVBQUU7QUFBdEMsU0FBakI7QUFDRCxPQUZEOztBQUlBLFVBQU1zQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07QUFDbkMsZUFBSzFDLEtBQUwsQ0FBV3NDLEtBQVgsQ0FBaUI7QUFBRWhDLGNBQUksRUFBRSxNQUFSO0FBQWdCTSxrQkFBUSxFQUFFLENBQTFCO0FBQTZCUixjQUFJLEVBQUU7QUFBbkMsU0FBakI7QUFDRCxPQUZEOztBQUlBLFVBQU11QyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07QUFDbkMsZUFBSzNDLEtBQUwsQ0FBV3NDLEtBQVgsQ0FBaUI7QUFBRWhDLGNBQUksRUFBRSxXQUFSO0FBQXFCTSxrQkFBUSxFQUFFLENBQS9CO0FBQWtDUixjQUFJLEVBQUU7QUFBeEMsU0FBakI7QUFDRCxPQUZEOztBQUlBLGFBQ0UsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0U7QUFBSyxpQkFBUyxFQUFFOEI7QUFBaEIsU0FDRSwyREFBQyxNQUFEO0FBQ0UsMEJBQWtCLEVBQUVNLG9CQUR0QjtBQUVFLDJCQUFtQixFQUFFRCxxQkFGdkI7QUFHRSwyQkFBbUIsRUFBRUYscUJBSHZCO0FBSUUsMEJBQWtCLEVBQUVJLG9CQUp0QjtBQUtFLDRCQUFvQixFQUFFQyxzQkFMeEI7QUFNRSw0QkFBb0IsRUFBRUM7QUFOeEIsUUFERixDQURGLEVBV0U7QUFBSyxpQkFBUyxFQUFFUCxjQUFoQjtBQUFnQyxlQUFPLEVBQUUsT0FBS1E7QUFBOUMsUUFYRixDQURGO0FBZ0JELEs7Ozs7Ozs7d0NBbEZtQjtBQUFBLFVBRWhCekMsSUFGZ0IsR0FHZCxLQUFLSCxLQUhTLENBRWhCRyxJQUZnQjs7QUFLbEIsVUFBSUEsSUFBSSxDQUFDUyxRQUFULEVBQW1CO0FBQ2pCaUMsa0JBQVUsQ0FBQztBQUFBLGlCQUFNQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsRUFBK0JDLGNBQS9CLEVBQU47QUFBQSxTQUFELEVBQXdELENBQXhELENBQVY7QUFDRDtBQUNGOzs7eUNBRW9CO0FBQUEsVUFFakI3QyxJQUZpQixHQUdmLEtBQUtILEtBSFUsQ0FFakJHLElBRmlCOztBQUtuQixVQUFJQSxJQUFJLENBQUNTLFFBQUwsS0FBa0IsSUFBbEIsSUFBMEJULElBQUksQ0FBQ1MsUUFBTCxLQUFrQnFDLFNBQWhELEVBQTJEO0FBQ3pELFlBQUksT0FBTzlDLElBQUksQ0FBQ1MsUUFBWixLQUF5QixRQUE3QixFQUF1QztBQUNyQ2lDLG9CQUFVLENBQUM7QUFBQSxtQkFBTUMsUUFBUSxDQUFDQyxjQUFULENBQXdCNUMsSUFBSSxDQUFDUyxRQUE3QixFQUF1Q29DLGNBQXZDLENBQXNEO0FBQUVFLHNCQUFRLEVBQUU7QUFBWixhQUF0RCxDQUFOO0FBQUEsV0FBRCxFQUFzRixDQUF0RixDQUFWO0FBQ0Q7O0FBRUQsWUFBSSxPQUFPL0MsSUFBSSxDQUFDUyxRQUFaLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ3JDaUMsb0JBQVUsQ0FBQztBQUFBLG1CQUFNOUIsTUFBTSxDQUFDSCxRQUFQLENBQWdCLENBQWhCLEVBQW1CVCxJQUFJLENBQUNTLFFBQXhCLENBQU47QUFBQSxXQUFELEVBQTBDLENBQTFDLENBQVY7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkE0RFE7QUFBQSxVQUVMVCxJQUZLLEdBR0gsS0FBS0gsS0FIRixDQUVMRyxJQUZLO0FBS1AsVUFBTWdELFNBQVMsR0FBRztBQUNoQkMsaUJBQVM7QUFETyxPQUFsQjtBQUlBLFVBQU1DLENBQUMsR0FBR2xELElBQUksQ0FBQ0csSUFBZjtBQUNBLFVBQU00QixPQUFPLEdBQUdDLGlEQUFFLENBQUMsVUFBRCxFQUFhO0FBQzdCLHFCQUFha0IsQ0FBQyxLQUFLLE1BRFU7QUFFN0Isd0JBQWdCQSxDQUFDLEtBQUssVUFGTztBQUc3Qix5QkFBaUJBLENBQUMsS0FBSyxXQUhNO0FBSTdCLHlCQUFpQkEsQ0FBQyxLQUFLLE1BSk07QUFLN0Isb0JBQVlBLENBQUMsS0FBSyxNQUxXO0FBTTdCLHVCQUFlQSxDQUFDLEtBQUssU0FOUTtBQU83Qix3QkFBZ0JBLENBQUMsS0FBSztBQVBPLE9BQWIsQ0FBbEI7QUFVQSxhQUNFO0FBQ0UsYUFBSyxFQUFFRjtBQURULFNBR0U7QUFBSyxpQkFBUyxFQUFFakI7QUFBaEIsUUFIRixFQUlFLHdFQUVHLEtBQUtvQixZQUFMLEVBRkgsRUFHRyxLQUFLdEQsS0FBTCxDQUFXdUQsUUFIZCxDQUpGLENBREY7QUFZRDs7OztFQXRIZ0J4Qiw0Q0FBSyxDQUFDQyxTOztBQXlIekIsSUFBTXdCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUN4RCxLQUFELEVBQVc7QUFDeEIsTUFBTXlELFdBQVcsR0FBRztBQUNsQkMsWUFBUSxFQUFFLE9BRFE7QUFFbEJDLFFBQUksRUFBRSxDQUZZO0FBR2xCQyxPQUFHLEVBQUUsQ0FIYTtBQUlsQkMsVUFBTSxFQUFFLEVBSlU7QUFLbEJ4QyxTQUFLLEVBQUUsTUFMVztBQU1sQkksV0FBTyxFQUFFLE1BTlM7QUFPbEJxQyxrQkFBYyxFQUFFLGNBUEU7QUFRbEJDLGNBQVUsRUFBRSxRQVJNO0FBU2xCQyxtQkFBZSxFQUFFLFNBVEM7QUFVbEJDLGFBQVMsRUFBRSx3REFWTztBQVdsQkMsVUFBTSxFQUFFO0FBWFUsR0FBcEI7QUFjQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFVBQU0sRUFBRTtBQURRLEdBQWxCO0FBZndCLE1Bb0J0QkMsTUFwQnNCLEdBd0JwQnJFLEtBeEJvQixDQW9CdEJxRSxNQXBCc0I7QUFBQSxNQXFCdEIvQixLQXJCc0IsR0F3QnBCdEMsS0F4Qm9CLENBcUJ0QnNDLEtBckJzQjtBQUFBLE1Bc0J0QnpCLGFBdEJzQixHQXdCcEJiLEtBeEJvQixDQXNCdEJhLGFBdEJzQjtBQUFBLE1BdUJ0QnlELFVBdkJzQixHQXdCcEJ0RSxLQXhCb0IsQ0F1QnRCc0UsVUF2QnNCOztBQTBCeEIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFdBQ0U7QUFDRSxlQUFTLEVBQUMsNkJBRFo7QUFFRSxXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRTtBQUFkLE9BRlQ7QUFHRSxhQUFPLEVBQUVGO0FBSFgsT0FLRSx5RUFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQTJCLFdBQUssRUFBQyxJQUFqQztBQUFzQyxZQUFNLEVBQUMsSUFBN0M7QUFBa0QsYUFBTyxFQUFDO0FBQTFELE9BQXNFO0FBQU0sT0FBQyxFQUFDLGVBQVI7QUFBd0IsVUFBSSxFQUFDO0FBQTdCLE1BQXRFLEVBQTRHO0FBQU0sVUFBSSxFQUFDLGNBQVg7QUFBMEIsT0FBQyxFQUFDO0FBQTVCLE1BQTVHLENBREYsQ0FMRixDQURGO0FBV0QsR0FaRDs7QUFjQSxNQUFJekQsYUFBSixFQUFtQjtBQUNqQjRDLGVBQVcsQ0FBQ0ssY0FBWixHQUE2QixlQUE3QjtBQUNBLFdBQ0U7QUFDRSxXQUFLLEVBQUVMO0FBRFQsT0FHR2MsZUFBZSxFQUhsQixFQUlFO0FBQ0UsYUFBTyxFQUFFO0FBQUEsZUFBTWpDLEtBQUssQ0FBQztBQUFFaEMsY0FBSSxFQUFFLE1BQVI7QUFBZ0JNLGtCQUFRLEVBQUU7QUFBMUIsU0FBRCxDQUFYO0FBQUEsT0FEWDtBQUVFLGVBQVMsRUFBRXVCLGlEQUFFLENBQUMsU0FBRCxFQUFZLFdBQVosRUFBeUIsTUFBekIsRUFBaUM7QUFBRSwyQkFBbUJrQyxNQUFNLEtBQUs7QUFBaEMsT0FBakMsQ0FGZjtBQUdFLFdBQUssb0JBQU9GLFNBQVA7QUFBa0JNLG1CQUFXLEVBQUU7QUFBL0I7QUFIUCxpQ0FKRixDQURGO0FBY0Q7O0FBRUQsU0FDRTtBQUNFLFNBQUssRUFBRWhCO0FBRFQsS0FHRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1uQixLQUFLLENBQUM7QUFBRWhDLFlBQUksRUFBRSxNQUFSO0FBQWdCTSxnQkFBUSxFQUFFO0FBQTFCLE9BQUQsQ0FBWDtBQUFBLEtBRFg7QUFFRSxhQUFTLEVBQUV1QixpREFBRSxDQUFDLFNBQUQsRUFBWSxXQUFaLEVBQXlCLE1BQXpCLEVBQWlDO0FBQUUseUJBQW1Ca0MsTUFBTSxLQUFLO0FBQWhDLEtBQWpDLENBRmY7QUFHRSxTQUFLLEVBQUVGO0FBSFQsK0JBSEYsRUFVRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU03QixLQUFLLENBQUM7QUFBRWhDLFlBQUksRUFBRSxVQUFSO0FBQW9CTSxnQkFBUSxFQUFFO0FBQTlCLE9BQUQsQ0FBWDtBQUFBLEtBRFg7QUFFRSxhQUFTLEVBQUV1QixpREFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CO0FBQUUseUJBQW1Ca0MsTUFBTSxLQUFLO0FBQWhDLEtBQXBCLENBRmY7QUFHRSxTQUFLLEVBQUVGO0FBSFQsc0JBVkYsRUFpQkU7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNN0IsS0FBSyxDQUFDO0FBQUVoQyxZQUFJLEVBQUUsVUFBUjtBQUFvQk0sZ0JBQVEsRUFBRTtBQUE5QixPQUFELENBQVg7QUFBQSxLQURYO0FBRUUsYUFBUyxFQUFFdUIsaURBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQjtBQUFFLHlCQUFtQmtDLE1BQU0sS0FBSztBQUFoQyxLQUFwQixDQUZmO0FBR0UsU0FBSyxFQUFFRjtBQUhULGdCQWpCRixFQXdCRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU03QixLQUFLLENBQUM7QUFBRWhDLFlBQUksRUFBRSxTQUFSO0FBQW1CTSxnQkFBUSxFQUFFO0FBQTdCLE9BQUQsQ0FBWDtBQUFBLEtBRFg7QUFFRSxhQUFTLEVBQUV1QixpREFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CO0FBQUUseUJBQW1Ca0MsTUFBTSxLQUFLO0FBQWhDLEtBQXBCLENBRmY7QUFHRSxTQUFLLEVBQUVGO0FBSFQsZUF4QkYsRUErQkU7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNN0IsS0FBSyxDQUFDO0FBQUVoQyxZQUFJLEVBQUUsTUFBUjtBQUFnQk0sZ0JBQVEsRUFBRTtBQUExQixPQUFELENBQVg7QUFBQSxLQURYO0FBRUUsYUFBUyxFQUFFdUIsaURBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQjtBQUFFLHlCQUFtQmtDLE1BQU0sS0FBSztBQUFoQyxLQUFwQixDQUZmO0FBR0UsU0FBSyxFQUFFRjtBQUhULGlCQS9CRixFQXNDRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU03QixLQUFLLENBQUM7QUFBRWhDLFlBQUksRUFBRSxNQUFSO0FBQWdCTSxnQkFBUSxFQUFFO0FBQTFCLE9BQUQsQ0FBWDtBQUFBLEtBRFg7QUFFRSxhQUFTLEVBQUV1QixpREFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CO0FBQUUseUJBQW1Ca0MsTUFBTSxLQUFLO0FBQWhDLEtBQXBCLENBRmY7QUFHRSxTQUFLLEVBQUVGO0FBSFQsZUF0Q0YsRUE2Q0U7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNN0IsS0FBSyxDQUFDO0FBQUVoQyxZQUFJLEVBQUUsV0FBUjtBQUFxQk0sZ0JBQVEsRUFBRTtBQUEvQixPQUFELENBQVg7QUFBQSxLQURYO0FBRUUsYUFBUyxFQUFFdUIsaURBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQjtBQUFFLHlCQUFtQmtDLE1BQU0sS0FBSztBQUFoQyxLQUFwQixDQUZmO0FBR0UsU0FBSyxFQUFFRjtBQUhULGlCQTdDRixDQURGO0FBdURELENBakhEOztBQW1IQSxJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDMUUsS0FBRCxFQUFXO0FBQUEsTUFFdEJzQyxLQUZzQixHQUdwQnRDLEtBSG9CLENBRXRCc0MsS0FGc0I7QUFJeEIsU0FDRTtBQUNFLGFBQVMsRUFBQztBQURaLEtBR0UsbUdBSEYsRUFNRTtBQUFNLE1BQUUsRUFBQztBQUFULHdEQU5GLEVBU0UsMEZBVEYsQ0FERjtBQWVELENBbkJEOztBQXNCQSxJQUFNcUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQzNFLEtBQUQsRUFBVztBQUFBLE1BRXBCc0MsS0FGb0IsR0FHbEJ0QyxLQUhrQixDQUVwQnNDLEtBRm9CLEVBS3RCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJc0MsSUFBSSxHQUFHLEVBQVg7QUFFQSxTQUNFLHdFQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsaUJBQVVBLElBQVY7QUFBZCxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLE1BQUUsRUFBQztBQUE1QixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSwrRUFDRSx3TEFERixFQUlFLHlGQUpGLENBREYsQ0FERixFQVVFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBNkIsTUFBRSxFQUFDO0FBQWhDLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQXFDLE9BQUcsRUFBQztBQUF6QyxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSSxhQUFTLEVBQUM7QUFBZCxnQ0FERixFQUlFO0FBQUksYUFBUyxFQUFDO0FBQWQsNkJBSkYsRUFPR0MsU0FQSCxDQUpGLENBVkYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixNQUFFLEVBQUM7QUFBbEMsS0FDRSx3RkFERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLEVBRUU7QUFBSyxhQUFTLHlDQUFrQ0QsSUFBbEM7QUFBZCxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLGtGQUNRLHNFQURSLGNBREYsQ0FIRixDQURGLEVBVUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERixFQUVFO0FBQUssYUFBUyxvQ0FBNkJBLElBQTdCO0FBQWQsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSxxRkFDVyxzRUFEWCxhQURGLENBSEYsQ0FWRixFQW1CRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLEVBRUU7QUFBSyxhQUFTLHNDQUErQkEsSUFBL0I7QUFBZCxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLGdGQUNNLHNFQUROLGlCQURGLENBSEYsQ0FuQkYsRUE0QkU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFERixFQUVFO0FBQUssYUFBUyx3Q0FBaUNBLElBQWpDO0FBQWQsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRSx3RkFDYyxzRUFEZCxnQkFERixDQUhGLENBNUJGLEVBcUNFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLElBREYsRUFFRTtBQUFLLGFBQVMsMENBQW1DQSxJQUFuQztBQUFkLElBRkYsRUFHRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Usa0ZBQ1Esc0VBRFIsa0JBREYsQ0FIRixDQXJDRixFQThDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixJQURGLEVBRUU7QUFBSyxhQUFTLGlDQUEwQkEsSUFBMUI7QUFBZCxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLGtGQUNRLHNFQURSLGdCQURGLENBSEYsQ0E5Q0YsQ0FGRixFQTBERTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0U7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFdBQU8sRUFBRTtBQUFBLGFBQU10QyxLQUFLLENBQUM7QUFBRWhDLFlBQUksRUFBRSxVQUFSO0FBQW9CTSxnQkFBUSxFQUFFO0FBQTlCLE9BQUQsQ0FBWDtBQUFBO0FBQTdDLGlCQURGLENBMURGLENBeEJGLEVBd0ZFO0FBQUssYUFBUywyQkFBb0JnRSxJQUFwQixDQUFkO0FBQTBDLE1BQUUsRUFBQztBQUE3QyxLQUNFLDZGQURGLEVBRUU7QUFBSSxTQUFLLEVBQUU7QUFBRUUsY0FBUSxFQUFFO0FBQVo7QUFBWCw4QkFGRixFQUdFO0FBQUcsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxRQUFiO0FBQXVCRCxjQUFRLEVBQUUsRUFBakM7QUFBcUNFLGdCQUFVLEVBQUUsR0FBakQ7QUFBc0RDLGVBQVMsRUFBRTtBQUFqRTtBQUFWLGdDQUN5QixzRUFEekIsYUFFUztBQUFHLFFBQUksRUFBQyxPQUFSO0FBQWdCLFFBQUksRUFBQywwQ0FBckI7QUFBZ0UsVUFBTSxFQUFDO0FBQXZFLHlDQUZULEVBRThILHNFQUY5SCxFQUdFO0FBQUcsUUFBSSxFQUFDLGdEQUFSO0FBQXlELFVBQU0sRUFBQztBQUFoRSx3Q0FIRixDQUhGLENBeEZGLENBSkYsQ0FERjtBQXlHRCxDQXhIRDs7QUEwSEEsSUFBTUMsSUFBSSxHQUNSLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLHlFQUNFO0FBQUssV0FBTTtBQUFYLEdBQ0U7QUFBTyxNQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFRO0FBQTNCLEVBREYsRUFFRTtBQUFNLFdBQU07QUFBWixFQUZGLEVBR0U7QUFBTSxXQUFNO0FBQVosRUFIRixFQUlFLGlGQUpGLENBREYsRUFPRTtBQUFLLFdBQU07QUFBWCxHQUNFO0FBQU8sTUFBSSxFQUFDLE9BQVo7QUFBb0IsVUFBUTtBQUE1QixFQURGLEVBRUU7QUFBTSxXQUFNO0FBQVosRUFGRixFQUdFO0FBQU0sV0FBTTtBQUFaLEVBSEYsRUFJRSxrRkFKRixDQVBGLEVBYUU7QUFBSyxXQUFNO0FBQVgsR0FDRTtBQUFPLE1BQUksRUFBQyxPQUFaO0FBQW9CLFVBQVE7QUFBNUIsRUFERixFQUVFO0FBQU0sV0FBTTtBQUFaLEVBRkYsRUFHRTtBQUFNLFdBQU07QUFBWixFQUhGLEVBSUUsa0ZBSkYsQ0FiRixFQW1CRTtBQUFLLFdBQU07QUFBWCxHQUNFO0FBQVUsTUFBSSxFQUFDLE1BQWY7QUFBc0IsVUFBUTtBQUE5QixFQURGLEVBRUU7QUFBTSxXQUFNO0FBQVosRUFGRixFQUdFO0FBQU0sV0FBTTtBQUFaLEVBSEYsRUFJRSxvRkFKRixDQW5CRixDQURGLEVBMkJFO0FBQUssV0FBTTtBQUFYLEdBQ0U7QUFBUSxXQUFTLEVBQUM7QUFBbEIsVUFERixDQTNCRixDQURGO0FBa0NBOztBQUdBOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixTQUNFLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLDJEQUFDLFNBQUQ7QUFDRSxTQUFLLEVBQUM7QUFEUixJQURGLEVBSUUsMkRBQUMsS0FBRDtBQUNFLFFBQUksRUFBRUM7QUFEUixJQUpGLENBREY7QUFVRCxDQVhEOztBQWFBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsU0FDRSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRSwyREFBQyxTQUFEO0FBQ0UsU0FBSyxFQUFDO0FBRFIsSUFERixFQUlFLDJEQUFDLEtBQUQ7QUFDRSxRQUFJLEVBQUVDO0FBRFIsSUFKRixFQU9FLDJEQUFDLEtBQUQ7QUFDRSxRQUFJLEVBQUVDO0FBRFIsSUFQRixFQVVFLDJEQUFDLEtBQUQ7QUFDRSxRQUFJLEVBQUVDO0FBRFIsSUFWRixDQURGO0FBZ0JELENBakJEOztBQW1CQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLFNBQ0UsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsMkRBQUMsU0FBRDtBQUNFLFNBQUssRUFBRTtBQURULElBREYsRUFJRSwyREFBQyxLQUFEO0FBQ0UsUUFBSSxFQUFFdkQ7QUFEUixJQUpGLENBREY7QUFXRCxDQVpEOztBQWNBLElBQU13RCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsU0FDRSwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRSwyREFBQyxTQUFEO0FBQ0UsU0FBSyxFQUFFO0FBRFQsSUFERixFQUlFLDJEQUFDLEtBQUQ7QUFDRSxRQUFJLEVBQUVDO0FBRFIsSUFKRixDQURGO0FBVUQsQ0FYRDs7QUFhQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQ0UsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsMkRBQUMsU0FBRDtBQUNFLFNBQUssRUFBRTtBQURULElBREYsRUFJRSwyREFBQyxLQUFEO0FBQ0UsUUFBSSxFQUFFQztBQURSLElBSkYsQ0FERjtBQVdELENBWkQ7O0FBY0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixTQUNFLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLDJEQUFDLFNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFEVCxJQURGLEVBSUUsMkRBQUMsS0FBRDtBQUNFLFFBQUksRUFBRUM7QUFEUixJQUpGLENBREY7QUFXRCxDQVpEO0FBZ0JBOzs7QUFFQSxJQUFNbEIsU0FBUyxHQUNiLHFxQkFERjtBQU1BLElBQU1PLGFBQWEsR0FDakIsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UseUZBREYsRUFFRSxxdUJBRkYsRUFNRSwyRkFORixFQVFFLDQ4QkFSRixFQVlFLCtHQVpGLEVBYUUsczZCQWJGLEVBaUJFLGlHQWpCRixFQWtCRSw0MUJBbEJGLEVBcUJFLDZGQXJCRixFQXNCRSxtNUJBdEJGLEVBeUJFLDJGQXpCRixFQTBCRSx1dUJBMUJGLENBREY7QUFpQ0EsSUFBTUUsUUFBUSxHQUNaLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFO0FBQUksT0FBSyxFQUFFO0FBQUVQLGFBQVMsRUFBRTtBQUFiO0FBQVgsb0JBREYsRUFJRSwyRkFKRixFQUtFLDJjQUVFLHNFQUZGLEVBR0Usb0hBSEYsQ0FMRixFQVVFLDZGQVZGLEVBV0UsdWlCQUVFLHNFQUZGLEVBR0UseUhBSEYsQ0FYRixFQWdCRSw2RkFoQkYsRUFpQkUsNldBRUUsc0VBRkYsRUFHRSx3SEFIRixDQWpCRixFQXNCRSxpRkF0QkYsRUF1QkUseWhCQUVFLHNFQUZGLEVBR0Usb0hBSEYsQ0F2QkYsRUE0QkUsMkZBNUJGLEVBNkJFLGt3QkFFRSxzRUFGRixFQUdFLGtHQUhGLEVBSUUsc0VBSkYsRUFLRSxpR0FMRixDQTdCRixDQURGO0FBd0NBLElBQU1RLG9CQUFvQixHQUN4QiwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRTtBQUFJLE9BQUssRUFBRTtBQUFFUixhQUFTLEVBQUU7QUFBYjtBQUFYLCtCQURGLEVBSUUsZ1VBSkYsQ0FERjtBQVdBLElBQU1TLGdCQUFnQixHQUNwQiwyREFBQyw0Q0FBRCxDQUFPLFFBQVAsUUFDRTtBQUFJLE9BQUssRUFBRTtBQUFFVCxhQUFTLEVBQUU7QUFBYjtBQUFYLGVBREYsRUFJRSwrYkFKRixFQU9FLHVFQUNFLDhJQURGLEVBSUUsNk5BSkYsRUFPRSxvSEFQRixFQVVFLGtKQVZGLEVBYUUsb0lBYkYsRUFnQkUsK0lBaEJGLEVBbUJFLGlKQW5CRixFQXNCRSw4SEF0QkYsQ0FQRixDQURGO0FBc0NBLElBQU03QyxPQUFPLEdBQ1gsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UscUZBREYsRUFJRSw0aEJBSkYsRUFPRTtBQUFLLE9BQUssRUFBRTtBQUFFVCxXQUFPLEVBQUUsTUFBWDtBQUFtQnFDLGtCQUFjLEVBQUUsUUFBbkM7QUFBNkNrQyxZQUFRLEVBQUU7QUFBdkQ7QUFBWixHQUNFLHVFQUNFLGtHQURGLEVBSUUsK0ZBSkYsRUFPRSwrRkFQRixFQVVFLDBGQVZGLEVBYUUsc0dBYkYsRUFnQkUsNEZBaEJGLEVBbUJFLDRHQW5CRixFQXNCRSxtRkF0QkYsQ0FERixFQTJCRSx1RUFDRSw2R0FERixFQUlFLHdGQUpGLEVBT0UsdUZBUEYsRUFVRSx5RkFWRixFQWFFLHFHQWJGLEVBZ0JFLHlGQWhCRixFQW1CRSwwRkFuQkYsRUFzQkUsbUdBdEJGLENBM0JGLENBUEYsRUE2REUsNlFBN0RGLENBREY7QUFvRUEsSUFBTUgsU0FBUyxHQUNiLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLDZXQURGLEVBSUUsa0ZBSkYsRUFLRSxzRUFDRTtBQUFHLE1BQUksRUFBQyw0QkFBUjtBQUFxQyxRQUFNLEVBQUM7QUFBNUMsb0JBREYsOEtBTEYsRUFRRSxzRUFDRTtBQUFHLE1BQUksRUFBQyx3RUFBUjtBQUFpRixRQUFNLEVBQUM7QUFBeEYscUJBREYsa05BUkYsRUFXRSxzRUFDRTtBQUFHLE1BQUksRUFBQyx5QkFBUjtBQUFrQyxRQUFNLEVBQUM7QUFBekMsaUJBREYsNEpBWEYsRUFjRSxzRUFDRTtBQUFHLE1BQUksRUFBQyw0QkFBUjtBQUFxQyxRQUFNLEVBQUM7QUFBNUMscUNBREYsMkhBZEYsRUFpQkUsc0VBQ0U7QUFBRyxNQUFJLEVBQUMsdURBQVI7QUFBZ0UsUUFBTSxFQUFDO0FBQXZFLDhCQURGLG1LQWpCRixFQW9CRSxzRUFDRTtBQUFHLE1BQUksRUFBQyw0QkFBUjtBQUFxQyxRQUFNLEVBQUM7QUFBNUMsNEJBREYsa0ZBcEJGLEVBd0JFLGdGQXhCRixFQTBCRTtBQUFHLE1BQUksRUFBQywwSEFBUjtBQUFtSSxRQUFNLEVBQUM7QUFBMUksNkNBMUJGLEVBMEJnTSxzRUExQmhNLEVBMkJFO0FBQUcsTUFBSSxFQUFDLDRIQUFSO0FBQXFJLFFBQU0sRUFBQztBQUE1SSxxQ0EzQkYsRUEyQjBMLHNFQTNCMUwsRUE0QkU7QUFBRyxNQUFJLEVBQUMsMENBQVI7QUFBbUQsUUFBTSxFQUFDO0FBQTFELDJEQTVCRixFQTRCOEgsc0VBNUI5SCxFQTZCRTtBQUFHLE1BQUksRUFBQyxnQ0FBUjtBQUF5QyxRQUFNLEVBQUM7QUFBaEQsNEJBN0JGLEVBNkJxRixzRUE3QnJGLEVBOEJFO0FBQUcsTUFBSSxFQUFDLDhCQUFSO0FBQXVDLFFBQU0sRUFBQztBQUE5QyxxRUE5QkYsRUE4QjRILHNFQTlCNUgsRUErQkU7QUFBRyxNQUFJLEVBQUMscUNBQVI7QUFBOEMsUUFBTSxFQUFDO0FBQXJELDZCQS9CRixFQStCMkYsc0VBL0IzRixFQWdDRTtBQUFHLE1BQUksRUFBQyw0SUFBUjtBQUFxSixRQUFNLEVBQUM7QUFBNUoscURBaENGLEVBZ0MwTixzRUFoQzFOLEVBa0NFLDBGQWxDRixFQW9DRTtBQUFHLE1BQUksRUFBQyx5RUFBUjtBQUFrRixRQUFNLEVBQUM7QUFBekYseUNBcENGLEVBb0MySSxzRUFwQzNJLEVBcUNFO0FBQUcsTUFBSSxFQUFDLHFEQUFSO0FBQThELFFBQU0sRUFBQztBQUFyRSxtREFyQ0YsRUFxQ2lJLHNFQXJDakksRUF1Q0UsK0VBdkNGLEVBd0NFO0FBQUcsTUFBSSxFQUFDLCtCQUFSO0FBQXdDLFFBQU0sRUFBQztBQUEvQyx5Q0F4Q0YsRUF3Q2lHLHNFQXhDakcsRUF5Q0U7QUFBRyxNQUFJLEVBQUMscUNBQVI7QUFBOEMsUUFBTSxFQUFDO0FBQXJELDhDQXpDRixFQXlDNEcsc0VBekM1RyxFQTBDRTtBQUFHLE1BQUksRUFBQyxxQ0FBUjtBQUE4QyxRQUFNLEVBQUM7QUFBckQsbUNBMUNGLEVBMENpRyxzRUExQ2pHLEVBMkNFO0FBQUcsTUFBSSxFQUFDLHFDQUFSO0FBQThDLFFBQU0sRUFBQztBQUFyRCxrQ0EzQ0YsRUEyQ2dHLHNFQTNDaEcsQ0FERjtBQWdEQSxJQUFNRixlQUFlLEdBQ25CLDJEQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLHFuQkFERixFQUlFLHVFQUNFLHVFQUNFO0FBQUcsTUFBSSxFQUFDLDRCQUFSO0FBQXFDLFVBQVEsTUFBN0M7QUFBOEMsUUFBTSxFQUFDO0FBQXJELHNCQURGLENBREYsRUFJRSx1RUFDRTtBQUFHLE1BQUksRUFBQyx1QkFBUjtBQUFnQyxVQUFRLE1BQXhDO0FBQXlDLFFBQU0sRUFBQztBQUFoRCxpQkFERixDQUpGLEVBT0UsdUVBQ0U7QUFBRyxNQUFJLEVBQUMsNEJBQVI7QUFBcUMsVUFBUSxNQUE3QztBQUE4QyxRQUFNLEVBQUM7QUFBckQsc0JBREYsQ0FQRixFQVVFLHVFQUNFO0FBQUcsTUFBSSxFQUFDLDBCQUFSO0FBQW1DLFVBQVEsTUFBM0M7QUFBNEMsUUFBTSxFQUFDO0FBQW5ELG9CQURGLENBVkYsRUFhRSx1RUFDRTtBQUFHLE1BQUksRUFBQyxlQUFSO0FBQXdCLFVBQVEsTUFBaEM7QUFBaUMsUUFBTSxFQUFDO0FBQXhDLDRCQURGLENBYkYsQ0FKRixDQURGOztBQTRCQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDakcsS0FBRCxFQUFXO0FBQ3ZCLE1BQU1rRyxLQUFLLEdBQUdsRyxLQUFLLENBQUNrRyxLQUFOLEdBRVY7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHbEcsS0FBSyxDQUFDa0csS0FEVCxDQUZVLEdBS1JqRCxTQUxOO0FBT0EsU0FDRTtBQUNFLGFBQVMsRUFBQztBQURaLEtBR0dpRCxLQUhILEVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHbEcsS0FBSyxDQUFDbUcsSUFEVCxDQUpGLENBREY7QUFVRCxDQWxCRDs7QUF3QkEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3BHLEtBQUQsRUFBVztBQUMzQixTQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBNEIsTUFBRSxFQUFDO0FBQS9CLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHQSxLQUFLLENBQUNrRyxLQURULENBREYsQ0FERjtBQU9ELENBUkQ7O0lBV01HLE07Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSx3QkFRSCxLQUFLckcsS0FSRjtBQUFBLFVBRUxzRyxtQkFGSyxlQUVMQSxtQkFGSztBQUFBLFVBR0xDLG1CQUhLLGVBR0xBLG1CQUhLO0FBQUEsVUFJTEMsa0JBSkssZUFJTEEsa0JBSks7QUFBQSxVQUtMQyxrQkFMSyxlQUtMQSxrQkFMSztBQUFBLFVBTUxDLG9CQU5LLGVBTUxBLG9CQU5LO0FBQUEsVUFPTEMsb0JBUEssZUFPTEEsb0JBUEs7QUFVUCxVQUFNdEMsTUFBTSxHQUFHLEVBQWY7QUFFQSxVQUFNRixTQUFTLEdBQUc7QUFDaEJDLGNBQU0sRUFBRSxTQURRO0FBRWhCVSxnQkFBUSxFQUFFLEVBRk07QUFHaEI4QixvQkFBWSxFQUFFLHdCQUhFO0FBSWhCQyxlQUFPLEVBQUU7QUFKTyxPQUFsQjtBQU9BLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUNFLGVBQU8sRUFBRVAsbUJBRFg7QUFFRSxpQkFBUyxFQUFFbkUsaURBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQjtBQUFFLDZCQUFtQmtDLE1BQU0sS0FBSztBQUFoQyxTQUFwQixDQUZmO0FBR0UsYUFBSyxvQkFBT0YsU0FBUDtBQUFrQjJDLG1CQUFTLEVBQUU7QUFBN0I7QUFIUCwwQkFERixFQVFFO0FBQ0UsZUFBTyxFQUFFUCxtQkFEWDtBQUVFLGlCQUFTLEVBQUVwRSxpREFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CO0FBQUUsNkJBQW1Ca0MsTUFBTSxLQUFLO0FBQWhDLFNBQXBCLENBRmY7QUFHRSxhQUFLLEVBQUVGO0FBSFQsb0JBUkYsRUFlRTtBQUNFLGVBQU8sRUFBRXFDLGtCQURYO0FBRUUsaUJBQVMsRUFBRXJFLGlEQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0I7QUFBRSw2QkFBbUJrQyxNQUFNLEtBQUs7QUFBaEMsU0FBcEIsQ0FGZjtBQUdFLGFBQUssRUFBRUY7QUFIVCxtQkFmRixFQXNCRTtBQUNFLGVBQU8sRUFBRXVDLG9CQURYO0FBRUUsaUJBQVMsRUFBRXZFLGlEQUFFLENBQUMsU0FBRCxFQUFZLE1BQVosRUFBb0I7QUFBRSw2QkFBbUJrQyxNQUFNLEtBQUs7QUFBaEMsU0FBcEIsQ0FGZjtBQUdFLGFBQUssRUFBRUY7QUFIVCxxQkF0QkYsRUE2QkU7QUFDRSxlQUFPLEVBQUVzQyxrQkFEWDtBQUVFLGlCQUFTLEVBQUV0RSxpREFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CO0FBQUUsNkJBQW1Ca0MsTUFBTSxLQUFLO0FBQWhDLFNBQXBCLENBRmY7QUFHRSxhQUFLLEVBQUVGO0FBSFQsbUJBN0JGLEVBb0NFO0FBQ0UsZUFBTyxFQUFFd0Msb0JBRFg7QUFFRSxpQkFBUyxFQUFFeEUsaURBQUUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQjtBQUFFLDZCQUFtQmtDLE1BQU0sS0FBSztBQUFoQyxTQUFwQixDQUZmO0FBR0UsYUFBSyxFQUFFRjtBQUhULHFCQXBDRixDQURGO0FBOENEOzs7O0VBbEVrQnBDLDRDQUFLLENBQUNDLFM7O0FBcUVwQixJQUFNK0UsTUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUNXO0FBQUEseUJBTUgsS0FBSy9HLEtBTkY7QUFBQSxVQUVMZ0gsRUFGSyxnQkFFTEEsRUFGSztBQUFBLFVBR0xDLElBSEssZ0JBR0xBLElBSEs7QUFBQSxVQUlMQyxPQUpLLGdCQUlMQSxPQUpLO0FBQUEsVUFLTGhGLE9BTEssZ0JBS0xBLE9BTEs7QUFRUCxhQUNFLHdFQUVFO0FBQ0UsaUJBQVMsbUJBQVlBLE9BQVosQ0FEWDtBQUVFLGVBQU8sRUFBRWdGO0FBRlgsU0FJR0QsSUFKSCxFQUtHLEtBQUtqSCxLQUFMLENBQVd1RCxRQUxkLENBRkYsQ0FERjtBQVlEO0FBckJIOztBQUFBO0FBQUEsRUFBNEJ4Qiw0Q0FBSyxDQUFDQyxTQUFsQyxFOzs7Ozs7Ozs7Ozs7QUMvaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBbUYsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQnJGLDRDQUFLLENBQUNzRixhQUFOLENBQW9CdEgsd0NBQXBCLENBQWhCLEVBQTBDK0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9oZXJvLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvZWF0aW5nY29uY2VybnMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9saWZlc3R5bGUuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9tZWRpY2FscHJvYmxlbXMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzRfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9yZWxhdGlvbnNoaXBzLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX181X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3RyYW5zaXRpb25zLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX183X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvc3VjY3VsZW50QnVyc3QuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzhfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9waW5lYXBwbGUuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzlfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9tb3JlUmVzb3VyY2VzLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xMF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3ByYWN0aWNlYXJlYXMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzExX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvY29ybmVycGxhbnQuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzEyX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvc3VjY3VsZW50bWF0LmpwZ1wiKSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgY29sb3I6ICMzZjRjNGU7XFxufVxcblxcbmgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdk1lbnUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmFja2Ryb3Age1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVybyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLmhlcm8tY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSB7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4uaGVyby1jb250ZW50IGgxIHtcXG4gIC8qIGNvbG9yOiAjRkZGRkZGOyAqL1xcbn1cXG5cXG5ibG9ja3F1b3RlIGZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBmb250LXNpemU6IDIycHg7XFxuICAvKiBjb2xvcjogI0ZGRkZGRjsgKi9cXG59XFxuXFxuLm1lZXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVBRTU7XFxuICBwYWRkaW5nOiAzMHB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4ucHJvZmlsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2ZpbGVQaG90byB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBtaW4td2lkdGg6IDA7XFxuICBtaW4taGVpZ2h0OiAwO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbi5iaW8ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmJpbyAuYmlvU3VidGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYmlvIHAge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgLyogcGFkZGluZzogMHB4IDMwcHg7ICovXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAubWVldCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuYmlvLFxcbiAgLnByb2ZpbGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ucHJhY3RpY2VBcmVhcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxufVxcblxcblxcblxcbi5wcmFjdGljZUFyZWFzIC5hcmVhcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcmFjdGljZUFyZWFzIC5hcmVhcz4uYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAwIDI5MHB4O1xcbiAgbWF4LXdpZHRoOiAyOTBweDtcXG4gIGhlaWdodDogMzIwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMCAzMHB4IDMwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFyZWFJbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbi5hcmVhRWF0aW5nQ29uY2VybnMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxNDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b20gLTUwcHg7XFxufVxcblxcbi5hcmVhTGlmZXN0eWxlIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b20gLTY1cHg7XFxufVxcbi8qIFxcbi5hcmVhTGlmZXN0eWxlLmxhenkge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9yZXMvbGlmZXN0eWxlLXBsYWNlaG9sZGVyLmpwZycpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtNjVweDtcXG59ICovXFxuXFxuLmFyZWFNZWRpY2FsUHJvYmxlbXMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxNDAlO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG59XFxuXFxuLyogLmFyZWFNZWRpY2FsUHJvYmxlbXMubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3Jlcy9tZWRpY2FscHJvYmxlbXMtcGxhY2Vob2xkZXIuanBnJykgbm8tcmVwZWF0O1xcbn0gKi9cXG5cXG4uYXJlYVJlbGF0aW9uc2hpcHMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbSAtODBweDtcXG59XFxuLyogXFxuLmFyZWFSZWxhdGlvbnNoaXBzai5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vcmVzL3JlbGF0aW9uc2hpcHMuanBnJykgbm8tcmVwZWF0O1xcbn0gKi9cXG5cXG4uYXJlYVN0cmVzcyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tIC04MHB4O1xcbn1cXG5cXG4vKiAuYXJlYVN0cmVzcy5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vcmVzL3N0cmVzc21hbmFnZW1lbnQtcGxhY2Vob2xkZXIuanBnJykgbm8tcmVwZWF0O1xcbn0gKi9cXG5cXG4uYXJlYVRyYW5zaXRpb25zIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAtMjBweDtcXG59XFxuXFxuLyogLmFyZWFUcmFuc2l0aW9ucyAubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL3Jlcy90cmFuc2l0aW9ucy1wbGFjZWhvbGRlci5qcGcnKSBuby1yZXBlYXQ7XFxufSAqL1xcblxcbi5hcmVhVGV4dCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgbWF4LWhlaWdodDogMTIwcHg7XFxufVxcblxcbi5hcmVhVGV4dCBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4uYXJlYU92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbi5zZXJ2aWNlcyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUVDMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZXJ2aWNlc0Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAuc2VydmljZXNEZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnNlcnZpY2VzSW1hZ2Uge1xcbiAgICB3aWR0aDogMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuaGVyby1jb250ZW50IGJsb2NrcXVvdGUgaDEge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxuXFxuICAuaGVyby1jb250ZW50IGJsb2NrcXVvdGUgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTcxLCAyMDgsIDIzMCwgMSk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTAwbXMgZWFzZTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDIwMiwgMjI2LCAyNDApO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcblxcbi5yZWFkTW9yZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jbGFzc2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxufVxcblxcblxcbi5jb250YWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jb250YWN0IGZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuXFxuLmdyb3VwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZjRjNGU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjM2Y0YzRlO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBMQUJFTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5sYWJlbCB7XFxuICBjb2xvcjogIzNmNGM0ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGxlZnQ6IDVweDtcXG4gIHRvcDogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbmlucHV0OmZvY3VzfmxhYmVsLFxcbmlucHV0OnZhbGlkfmxhYmVsIHtcXG4gIHRvcDogLTIwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXN+bGFiZWwsXFxudGV4dGFyZWE6dmFsaWR+bGFiZWwge1xcbiAgdG9wOiAtMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4vKiBUT0RPIGxlYXJuIHRoaXMgKi9cXG5cXG4vKiBCT1RUT00gQkFSUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYmFyOmJlZm9yZSxcXG4uYmFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAycHg7XFxuICB3aWR0aDogMDtcXG4gIGJvdHRvbTogMXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogIzNmNGM0ZTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxufVxcblxcbi5iYXI6YmVmb3JlIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuXFxuLmJhcjphZnRlciB7XFxuICByaWdodDogNTAlO1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG5pbnB1dDpmb2N1c34uYmFyOmJlZm9yZSxcXG5pbnB1dDpmb2N1c34uYmFyOmFmdGVyIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbnRleHRhcmVhOmZvY3Vzfi5iYXI6YmVmb3JlLFxcbnRleHRhcmVhOmZvY3Vzfi5iYXI6YWZ0ZXIge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLyogSElHSExJR0hURVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5oaWdobGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogMTAwcHg7XFxuICB0b3A6IDI1JTtcXG4gIGxlZnQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxuaW5wdXQ6Zm9jdXN+LmhpZ2hsaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxuICAtbW96LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG50ZXh0YXJlYTpmb2N1c34uaGlnaGxpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG4gIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxufVxcblxcbi8qIEFOSU1BVElPTlMgPT09PT09PT09PT09PT09PSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkAtbW96LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXG4gIGZyb20ge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZDogIzNmNGM0ZTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFQUU1O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2FkZHJlc3M6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMDA3Qyc7XFxuICBwYWRkaW5nOiAwIDE1cHhcXG59XFxuXFxuI2FkZHJlc3M6YWZ0ZXIge1xcbiAgY29udGVudDogJ1xcXFwwMDdDJztcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzc2cHgpIHtcXG5cXG4gIC5mb290ZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjYWRkcmVzczpiZWZvcmUge1xcbiAgICBjb250ZW50OiBub25lO1xcbiAgICBwYWRkaW5nOiAwXFxuICB9XFxuICBcXG4gICNhZGRyZXNzOmFmdGVyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXFxuXFxuLmxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjM2Y0YzRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLmxpbms6aG92ZXI6YmVmb3JlLFxcbi5saW5rOmZvY3VzOmJlZm9yZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi8qIC5uYXZNZW51OmJlZm9yZSB7XFxuICBib3R0b206IC01cHggIWltcG9ydGFudDtcXG59ICovXFxuXFxuLmNvbnRhY3Qge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fN19fXyArIFwiKTtcXG59XFxuXFxuLyogLmNvbnRhY3QubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKCcuLi9yZXMvc3VjY3VsZW50QnVyc3QtcGxhY2Vob2xkZXIuanBnJyk7XFxufSAqL1xcblxcbi5tb3JlQ2xhc3NlcyB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX184X19fICsgXCIpO1xcbn1cXG4vKiBcXG4ubW9yZUNsYXNzZXMubGF6eSB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKCcuLi9yZXMvcGluZWFwcGxlLXBsYWNlaG9sZGVyLmpwZycpO1xcbn0gKi9cXG5cXG4ubW9yZVJlc291cmNlcyB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX185X19fICsgXCIpO1xcbn1cXG4vKiBcXG4ubW9yZVJlc291cmNlcy5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoJy4uL3Jlcy9tb3JlUmVzb3VyY2VzLXBsYWNlaG9sZGVyLmpwZycpO1xcbn0gKi9cXG5cXG4ubW9yZVByYWN0aWNlIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEwX19fICsgXCIpO1xcbn1cXG5cXG4vKiAubW9yZVByYWN0aWNlLmxhenkge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybCgnLi4vcmVzL3ByYWN0aWNlYXJlYXMtcGxhY2Vob2xkZXIuanBnJyk7XFxufSAqL1xcblxcbi5tb3JlU2VydmljZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTFfX18gKyBcIik7XFxufVxcblxcbi5tb3JlU2VydmljZXMubGF6eSB7XFxuICAvKiBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKCcuLi9yZXMvY29ybmVycGxhbnQtcGxhY2Vob2xkZXIuanBnJyk7ICovXFxufVxcblxcbi5tb3JlRG9jdW1lbnRzIHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEyX19fICsgXCIpO1xcblxcbn1cXG5cXG4vKiAubW9yZURvY3VtZW50cy5sYXp5IHtcXG4gIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIG5vLXJlcGVhdCB1cmwoJy4uL3Jlcy9zdWNjdWxlbnRtYXQtcGxhY2Vob2xkZXIuanBnJyk7XFxuXFxufSAqL1xcblxcbi5zaWduYXR1cmUge1xcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbi5uYXZNZW51OmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5wYWdlLXRpdGxlIC50aXRsZSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbjogNTBweCAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmNhcmQtYm9keSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIyMjIyMjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQtMSB7XFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxufVxcblxcbi5jYXJkLTIge1xcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4uY2FyZC0zIHtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcbn1cXG5cXG4uY2FyZC00IHtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XFxufVxcblxcbi5jYXJkLTUge1xcbiAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLCAwLCAwLCAwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgei1pbmRleDogLTE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLmRyYXdlci1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4uZHJhd2VyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxNTVweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgLyogdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7ICovXFxuICB0b3A6IDUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5kcmF3ZXIge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERUFFNTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJveC1zaGFkb3c6IDExcHggMTBweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDEwcHggMCA1cHggLTVweCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuXFxuLmRyYXdlcisuZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBDM0M2O1xcbn1cXG5cXG4uZHJhd2VyLWJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmhlYWRlci1uYXYtYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmRyYXdlci1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kcmF3ZXItaXRlbT5kaXYge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyLWhhbWJ1cmdlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItaGFtYnVyZ2VyOmhvdmVyICoge1xcbiAgY29sb3I6ICM4NzkwOTI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIC5tb3JlU2VydmljZXMgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luOiB1bnNldDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxufSAqL1wiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgcmVzb2x2ZVBhdGhuYW1lIGZyb20gJ3Jlc29sdmUtcGF0aG5hbWUnO1xuaW1wb3J0IHZhbHVlRXF1YWwgZnJvbSAndmFsdWUtZXF1YWwnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG5mdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGggOiAnLycgKyBwYXRoO1xufVxuZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXggKyAnKFxcXFwvfFxcXFw/fCN8JCknLCAnaScpLnRlc3QocGF0aCk7XG59XG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn1cbmZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5mdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuXG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG5cbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2ggPT09ICc/JyA/ICcnIDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2ggPT09ICcjJyA/ICcnIDogaGFzaFxuICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICB2YXIgcGF0aCA9IHBhdGhuYW1lIHx8ICcvJztcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuICByZXR1cm4gcGF0aDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSwgY3VycmVudExvY2F0aW9uKSB7XG4gIHZhciBsb2NhdGlvbjtcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gVHdvLWFyZyBmb3JtOiBwdXNoKHBhdGgsIHN0YXRlKVxuICAgIGxvY2F0aW9uID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gT25lLWFyZyBmb3JtOiBwdXNoKGxvY2F0aW9uKVxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIHBhdGgpO1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcnO1xuXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5jaGFyQXQoMCkgIT09ICc/JykgbG9jYXRpb24uc2VhcmNoID0gJz8nICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5zZWFyY2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgaWYgKGxvY2F0aW9uLmhhc2guY2hhckF0KDApICE9PSAnIycpIGxvY2F0aW9uLmhhc2ggPSAnIycgKyBsb2NhdGlvbi5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uc3RhdGUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbG9jYXRpb24ucGF0aG5hbWUgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBVUklFcnJvcikge1xuICAgICAgdGhyb3cgbmV3IFVSSUVycm9yKCdQYXRobmFtZSBcIicgKyBsb2NhdGlvbi5wYXRobmFtZSArICdcIiBjb3VsZCBub3QgYmUgZGVjb2RlZC4gJyArICdUaGlzIGlzIGxpa2VseSBjYXVzZWQgYnkgYW4gaW52YWxpZCBwZXJjZW50LWVuY29kaW5nLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrZXkpIGxvY2F0aW9uLmtleSA9IGtleTtcblxuICBpZiAoY3VycmVudExvY2F0aW9uKSB7XG4gICAgLy8gUmVzb2x2ZSBpbmNvbXBsZXRlL3JlbGF0aXZlIHBhdGhuYW1lIHJlbGF0aXZlIHRvIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSByZXNvbHZlUGF0aG5hbWUobG9jYXRpb24ucGF0aG5hbWUsIGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFdoZW4gdGhlcmUgaXMgbm8gcHJpb3IgbG9jYXRpb24gYW5kIHBhdGhuYW1lIGlzIGVtcHR5LCBzZXQgaXQgdG8gL1xuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gJy8nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsb2NhdGlvbjtcbn1cbmZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCA9PT0gYi5oYXNoICYmIGEua2V5ID09PSBiLmtleSAmJiB2YWx1ZUVxdWFsKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpIHtcbiAgdmFyIHByb21wdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc2V0UHJvbXB0KG5leHRQcm9tcHQpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHByb21wdCA9PSBudWxsLCAnQSBoaXN0b3J5IHN1cHBvcnRzIG9ubHkgb25lIHByb21wdCBhdCBhIHRpbWUnKSA6IHZvaWQgMDtcbiAgICBwcm9tcHQgPSBuZXh0UHJvbXB0O1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJvbXB0ID09PSBuZXh0UHJvbXB0KSBwcm9tcHQgPSBudWxsO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETzogSWYgYW5vdGhlciB0cmFuc2l0aW9uIHN0YXJ0cyB3aGlsZSB3ZSdyZSBzdGlsbCBjb25maXJtaW5nXG4gICAgLy8gdGhlIHByZXZpb3VzIG9uZSwgd2UgbWF5IGVuZCB1cCBpbiBhIHdlaXJkIHN0YXRlLiBGaWd1cmUgb3V0IHRoZVxuICAgIC8vIGJlc3Qgd2F5IHRvIGhhbmRsZSB0aGlzLlxuICAgIGlmIChwcm9tcHQgIT0gbnVsbCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiBwcm9tcHQgPT09ICdmdW5jdGlvbicgPyBwcm9tcHQobG9jYXRpb24sIGFjdGlvbikgOiBwcm9tcHQ7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGdldFVzZXJDb25maXJtYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKHJlc3VsdCwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdBIGhpc3RvcnkgbmVlZHMgYSBnZXRVc2VyQ29uZmlybWF0aW9uIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHVzZSBhIHByb21wdCBtZXNzYWdlJykgOiB2b2lkIDA7XG4gICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBmcm9tIGEgdHJhbnNpdGlvbiBob29rIHRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgY2FsbGJhY2socmVzdWx0ICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBmdW5jdGlvbiBhcHBlbmRMaXN0ZW5lcihmbikge1xuICAgIHZhciBpc0FjdGl2ZSA9IHRydWU7XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgIGlmIChpc0FjdGl2ZSkgZm4uYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0UHJvbXB0OiBzZXRQcm9tcHQsXG4gICAgY29uZmlybVRyYW5zaXRpb25UbzogY29uZmlybVRyYW5zaXRpb25UbyxcbiAgICBhcHBlbmRMaXN0ZW5lcjogYXBwZW5kTGlzdGVuZXIsXG4gICAgbm90aWZ5TGlzdGVuZXJzOiBub3RpZnlMaXN0ZW5lcnNcbiAgfTtcbn1cblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiBnZXRDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBicm93c2VyIGZpcmVzIHBvcHN0YXRlIG9uIGhhc2ggY2hhbmdlLlxuICogSUUxMCBhbmQgSUUxMSBkbyBub3QuXG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA9PT0gLTE7XG59XG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cblxuZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICBldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSA9PT0gLTE7XG59XG5cbnZhciBQb3BTdGF0ZUV2ZW50ID0gJ3BvcHN0YXRlJztcbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbmZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn1cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHByb3BzKSB7XG4gIGlmIChwcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgcHJvcHMgPSB7fTtcbiAgfVxuXG4gICFjYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHZhciBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHZhciBjYW5Vc2VIaXN0b3J5ID0gc3VwcG9ydHNIaXN0b3J5KCk7XG4gIHZhciBuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lciA9ICFzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKCk7XG4gIHZhciBfcHJvcHMgPSBwcm9wcyxcbiAgICAgIF9wcm9wcyRmb3JjZVJlZnJlc2ggPSBfcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gX3Byb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB2b2lkIDAgPyBnZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gX3Byb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHZvaWQgMCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuICB2YXIgYmFzZW5hbWUgPSBwcm9wcy5iYXNlbmFtZSA/IHN0cmlwVHJhaWxpbmdTbGFzaChhZGRMZWFkaW5nU2xhc2gocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHBhdGggPSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghYmFzZW5hbWUgfHwgaGFzQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKSA6IHZvaWQgMDtcbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSBzdHJpcEJhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKTtcblxuICBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuICAgIGlmIChpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KGV2ZW50KSkgcmV0dXJuO1xuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihldmVudC5zdGF0ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpKTtcbiAgfVxuXG4gIHZhciBmb3JjZU5leHRQb3AgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjsgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBrZXlzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIGtleXMgd2UgZG9uJ3Qga25vdy5cblxuICAgIHZhciB0b0luZGV4ID0gYWxsS2V5cy5pbmRleE9mKHRvTG9jYXRpb24ua2V5KTtcbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuICAgIHZhciBmcm9tSW5kZXggPSBhbGxLZXlzLmluZGV4T2YoZnJvbUxvY2F0aW9uLmtleSk7XG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaW5pdGlhbExvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oZ2V0SGlzdG9yeVN0YXRlKCkpO1xuICB2YXIgYWxsS2V5cyA9IFtpbml0aWFsTG9jYXRpb24ua2V5XTsgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gYmFzZW5hbWUgKyBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodHlwZW9mIHBhdGggPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJykgOiB2b2lkIDA7XG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG4gICAgICBpZiAoY2FuVXNlSGlzdG9yeSkge1xuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuICAgICAgICAgIG5leHRLZXlzLnB1c2gobG9jYXRpb24ua2V5KTtcbiAgICAgICAgICBhbGxLZXlzID0gbmV4dEtleXM7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpIDogdm9pZCAwO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXksXG4gICAgICAgICAgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgICB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIGFsbEtleXNbcHJldkluZGV4XSA9IGxvY2F0aW9uLmtleTtcbiAgICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5JykgOiB2b2lkIDA7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGhyZWYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH1cblxuICBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgZ28oLTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIGdvKDEpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxICYmIGRlbHRhID09PSAxKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lckNvdW50ID09PSAwKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGJsb2NrKHByb21wdCkge1xuICAgIGlmIChwcm9tcHQgPT09IHZvaWQgMCkge1xuICAgICAgcHJvbXB0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdmFyIHVubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGdsb2JhbEhpc3RvcnkubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGluaXRpYWxMb2NhdGlvbixcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG52YXIgSGFzaENoYW5nZUV2ZW50JDEgPSAnaGFzaGNoYW5nZSc7XG52YXIgSGFzaFBhdGhDb2RlcnMgPSB7XG4gIGhhc2hiYW5nOiB7XG4gICAgZW5jb2RlUGF0aDogZnVuY3Rpb24gZW5jb2RlUGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICchJyA/IHBhdGggOiAnIS8nICsgc3RyaXBMZWFkaW5nU2xhc2gocGF0aCk7XG4gICAgfSxcbiAgICBkZWNvZGVQYXRoOiBmdW5jdGlvbiBkZWNvZGVQYXRoKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJyEnID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xuICAgIH1cbiAgfSxcbiAgbm9zbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IHN0cmlwTGVhZGluZ1NsYXNoLFxuICAgIGRlY29kZVBhdGg6IGFkZExlYWRpbmdTbGFzaFxuICB9LFxuICBzbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IGFkZExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBhZGRMZWFkaW5nU2xhc2hcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdmFyIGhhc2hJbmRleCA9IGhyZWYuaW5kZXhPZignIycpO1xuICByZXR1cm4gaGFzaEluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zdWJzdHJpbmcoaGFzaEluZGV4ICsgMSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgdmFyIGhhc2hJbmRleCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgaGFzaEluZGV4ID49IDAgPyBoYXNoSW5kZXggOiAwKSArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIYXNoSGlzdG9yeShwcm9wcykge1xuICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHByb3BzID0ge307XG4gIH1cblxuICAhY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnSGFzaCBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuR29XaXRob3V0UmVsb2FkID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKTtcbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gX3Byb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB2b2lkIDAgPyBnZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMkaGFzaFR5cGUgPSBfcHJvcHMuaGFzaFR5cGUsXG4gICAgICBoYXNoVHlwZSA9IF9wcm9wcyRoYXNoVHlwZSA9PT0gdm9pZCAwID8gJ3NsYXNoJyA6IF9wcm9wcyRoYXNoVHlwZTtcbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyBzdHJpcFRyYWlsaW5nU2xhc2goYWRkTGVhZGluZ1NsYXNoKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcbiAgdmFyIF9IYXNoUGF0aENvZGVycyRoYXNoVCA9IEhhc2hQYXRoQ29kZXJzW2hhc2hUeXBlXSxcbiAgICAgIGVuY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZW5jb2RlUGF0aCxcbiAgICAgIGRlY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZGVjb2RlUGF0aDtcblxuICBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbigpIHtcbiAgICB2YXIgcGF0aCA9IGRlY29kZVBhdGgoZ2V0SGFzaFBhdGgoKSk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghYmFzZW5hbWUgfHwgaGFzQmFzZW5hbWUocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKSA6IHZvaWQgMDtcbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSBzdHJpcEJhc2VuYW1lKHBhdGgsIGJhc2VuYW1lKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24ocGF0aCk7XG4gIH1cblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcigpO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH1cblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gIHZhciBpZ25vcmVQYXRoID0gbnVsbDtcblxuICBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcbiAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuXG4gICAgaWYgKHBhdGggIT09IGVuY29kZWRQYXRoKSB7XG4gICAgICAvLyBFbnN1cmUgd2UgYWx3YXlzIGhhdmUgYSBwcm9wZXJseS1lbmNvZGVkIGhhc2guXG4gICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICAgICAgdmFyIHByZXZMb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG4gICAgICBpZiAoIWZvcmNlTmV4dFBvcCAmJiBsb2NhdGlvbnNBcmVFcXVhbChwcmV2TG9jYXRpb24sIGxvY2F0aW9uKSkgcmV0dXJuOyAvLyBBIGhhc2hjaGFuZ2UgZG9lc24ndCBhbHdheXMgPT0gbG9jYXRpb24gY2hhbmdlLlxuXG4gICAgICBpZiAoaWdub3JlUGF0aCA9PT0gY3JlYXRlUGF0aChsb2NhdGlvbikpIHJldHVybjsgLy8gSWdub3JlIHRoaXMgY2hhbmdlOyB3ZSBhbHJlYWR5IHNldFN0YXRlIGluIHB1c2gvcmVwbGFjZS5cblxuICAgICAgaWdub3JlUGF0aCA9IG51bGw7XG4gICAgICBoYW5kbGVQb3AobG9jYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uOyAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIHBhdGhzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIHBhdGhzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKGNyZWF0ZVBhdGgodG9Mb2NhdGlvbikpO1xuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG4gICAgdmFyIGZyb21JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKGNyZWF0ZVBhdGgoZnJvbUxvY2F0aW9uKSk7XG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH0gLy8gRW5zdXJlIHRoZSBoYXNoIGlzIGVuY29kZWQgcHJvcGVybHkgYmVmb3JlIGRvaW5nIGFueXRoaW5nIGVsc2UuXG5cblxuICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgocGF0aCk7XG4gIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKCk7XG4gIHZhciBhbGxQYXRocyA9IFtjcmVhdGVQYXRoKGluaXRpYWxMb2NhdGlvbildOyAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiAnIycgKyBlbmNvZGVQYXRoKGJhc2VuYW1lICsgY3JlYXRlUGF0aChsb2NhdGlvbikpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGhpc3RvcnkubG9jYXRpb24pO1xuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG4gICAgICB2YXIgcGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChiYXNlbmFtZSArIHBhdGgpO1xuICAgICAgdmFyIGhhc2hDaGFuZ2VkID0gZ2V0SGFzaFBhdGgoKSAhPT0gZW5jb2RlZFBhdGg7XG5cbiAgICAgIGlmIChoYXNoQ2hhbmdlZCkge1xuICAgICAgICAvLyBXZSBjYW5ub3QgdGVsbCBpZiBhIGhhc2hjaGFuZ2Ugd2FzIGNhdXNlZCBieSBhIFBVU0gsIHNvIHdlJ2RcbiAgICAgICAgLy8gcmF0aGVyIHNldFN0YXRlIGhlcmUgYW5kIGlnbm9yZSB0aGUgaGFzaGNoYW5nZS4gVGhlIGNhdmVhdCBoZXJlXG4gICAgICAgIC8vIGlzIHRoYXQgb3RoZXIgaGFzaCBoaXN0b3JpZXMgaW4gdGhlIHBhZ2Ugd2lsbCBjb25zaWRlciBpdCBhIFBPUC5cbiAgICAgICAgaWdub3JlUGF0aCA9IHBhdGg7XG4gICAgICAgIHB1c2hIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZihjcmVhdGVQYXRoKGhpc3RvcnkubG9jYXRpb24pKTtcbiAgICAgICAgdmFyIG5leHRQYXRocyA9IGFsbFBhdGhzLnNsaWNlKDAsIHByZXZJbmRleCA9PT0gLTEgPyAwIDogcHJldkluZGV4ICsgMSk7XG4gICAgICAgIG5leHRQYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICBhbGxQYXRocyA9IG5leHRQYXRocztcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdIYXNoIGhpc3RvcnkgY2Fubm90IFBVU0ggdGhlIHNhbWUgcGF0aDsgYSBuZXcgZW50cnkgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2snKSA6IHZvaWQgMDtcbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgdmFyIHBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBSRVBMQUNFLCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMuaW5kZXhPZihjcmVhdGVQYXRoKGhpc3RvcnkubG9jYXRpb24pKTtcbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxQYXRoc1twcmV2SW5kZXhdID0gcGF0aDtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbyhuKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhjYW5Hb1dpdGhvdXRSZWxvYWQsICdIYXNoIGhpc3RvcnkgZ28obikgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZCBpbiB0aGlzIGJyb3dzZXInKSA6IHZvaWQgMDtcbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSAmJiBkZWx0YSA9PT0gMSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50JDEsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoSGFzaENoYW5nZUV2ZW50JDEsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobiwgbG93ZXJCb3VuZCwgdXBwZXJCb3VuZCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgbG93ZXJCb3VuZCksIHVwcGVyQm91bmQpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgaGlzdG9yeSBvYmplY3QgdGhhdCBzdG9yZXMgbG9jYXRpb25zIGluIG1lbW9yeS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3RvcnkocHJvcHMpIHtcbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgdmFyIF9wcm9wcyA9IHByb3BzLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgX3Byb3BzJGluaXRpYWxFbnRyaWVzID0gX3Byb3BzLmluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEVudHJpZXMgPSBfcHJvcHMkaW5pdGlhbEVudHJpZXMgPT09IHZvaWQgMCA/IFsnLyddIDogX3Byb3BzJGluaXRpYWxFbnRyaWVzLFxuICAgICAgX3Byb3BzJGluaXRpYWxJbmRleCA9IF9wcm9wcy5pbml0aWFsSW5kZXgsXG4gICAgICBpbml0aWFsSW5kZXggPSBfcHJvcHMkaW5pdGlhbEluZGV4ID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJGluaXRpYWxJbmRleCxcbiAgICAgIF9wcm9wcyRrZXlMZW5ndGggPSBfcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdm9pZCAwID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCk7XG5cbiAgZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gaGlzdG9yeS5lbnRyaWVzLmxlbmd0aDtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfVxuXG4gIHZhciBpbmRleCA9IGNsYW1wKGluaXRpYWxJbmRleCwgMCwgaW5pdGlhbEVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIHZhciBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnID8gY3JlYXRlTG9jYXRpb24oZW50cnksIHVuZGVmaW5lZCwgY3JlYXRlS2V5KCkpIDogY3JlYXRlTG9jYXRpb24oZW50cnksIHVuZGVmaW5lZCwgZW50cnkua2V5IHx8IGNyZWF0ZUtleSgpKTtcbiAgfSk7IC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGNyZWF0ZVBhdGg7XG5cbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcHVzaCB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKSA6IHZvaWQgMDtcbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcbiAgICAgIHZhciBwcmV2SW5kZXggPSBoaXN0b3J5LmluZGV4O1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZJbmRleCArIDE7XG4gICAgICB2YXIgbmV4dEVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMuc2xpY2UoMCk7XG5cbiAgICAgIGlmIChuZXh0RW50cmllcy5sZW5ndGggPiBuZXh0SW5kZXgpIHtcbiAgICAgICAgbmV4dEVudHJpZXMuc3BsaWNlKG5leHRJbmRleCwgbmV4dEVudHJpZXMubGVuZ3RoIC0gbmV4dEluZGV4LCBsb2NhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0RW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgICBlbnRyaWVzOiBuZXh0RW50cmllc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHR5cGVvZiBwYXRoID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpIDogdm9pZCAwO1xuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuICAgICAgaGlzdG9yeS5lbnRyaWVzW2hpc3RvcnkuaW5kZXhdID0gbG9jYXRpb247XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIHZhciBuZXh0SW5kZXggPSBjbGFtcChoaXN0b3J5LmluZGV4ICsgbiwgMCwgaGlzdG9yeS5lbnRyaWVzLmxlbmd0aCAtIDEpO1xuICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICB2YXIgbG9jYXRpb24gPSBoaXN0b3J5LmVudHJpZXNbbmV4dEluZGV4XTtcbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgaW5kZXg6IG5leHRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1pbWljIHRoZSBiZWhhdmlvciBvZiBET00gaGlzdG9yaWVzIGJ5XG4gICAgICAgIC8vIGNhdXNpbmcgYSByZW5kZXIgYWZ0ZXIgYSBjYW5jZWxsZWQgUE9QLlxuICAgICAgICBzZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gaGlzdG9yeS5pbmRleCArIG47XG4gICAgcmV0dXJuIG5leHRJbmRleCA+PSAwICYmIG5leHRJbmRleCA8IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBibG9jayhwcm9tcHQpIHtcbiAgICBpZiAocHJvbXB0ID09PSB2b2lkIDApIHtcbiAgICAgIHByb21wdCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGVudHJpZXMubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGVudHJpZXNbaW5kZXhdLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBlbnRyaWVzOiBlbnRyaWVzLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjYW5HbzogY2FuR28sXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG5leHBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZU1lbW9yeUhpc3RvcnksIGNyZWF0ZUxvY2F0aW9uLCBsb2NhdGlvbnNBcmVFcXVhbCwgcGFyc2VQYXRoLCBjcmVhdGVQYXRoIH07XG4iLCJmdW5jdGlvbiBpc0Fic29sdXRlKHBhdGhuYW1lKSB7XG4gIHJldHVybiBwYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJztcbn1cblxuLy8gQWJvdXQgMS41eCBmYXN0ZXIgdGhhbiB0aGUgdHdvLWFyZyB2ZXJzaW9uIG9mIEFycmF5I3NwbGljZSgpXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4LCBrID0gaSArIDEsIG4gPSBsaXN0Lmxlbmd0aDsgayA8IG47IGkgKz0gMSwgayArPSAxKSB7XG4gICAgbGlzdFtpXSA9IGxpc3Rba107XG4gIH1cblxuICBsaXN0LnBvcCgpO1xufVxuXG4vLyBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIGhlYXZpbHkgb24gbm9kZSdzIHVybC5wYXJzZVxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHRvKSB7XG4gIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcblxuICB2YXIgdG9QYXJ0cyA9IHRvICYmIHRvLnNwbGl0KCcvJykgfHwgW107XG4gIHZhciBmcm9tUGFydHMgPSBmcm9tICYmIGZyb20uc3BsaXQoJy8nKSB8fCBbXTtcblxuICB2YXIgaXNUb0FicyA9IHRvICYmIGlzQWJzb2x1dGUodG8pO1xuICB2YXIgaXNGcm9tQWJzID0gZnJvbSAmJiBpc0Fic29sdXRlKGZyb20pO1xuICB2YXIgbXVzdEVuZEFicyA9IGlzVG9BYnMgfHwgaXNGcm9tQWJzO1xuXG4gIGlmICh0byAmJiBpc0Fic29sdXRlKHRvKSkge1xuICAgIC8vIHRvIGlzIGFic29sdXRlXG4gICAgZnJvbVBhcnRzID0gdG9QYXJ0cztcbiAgfSBlbHNlIGlmICh0b1BhcnRzLmxlbmd0aCkge1xuICAgIC8vIHRvIGlzIHJlbGF0aXZlLCBkcm9wIHRoZSBmaWxlbmFtZVxuICAgIGZyb21QYXJ0cy5wb3AoKTtcbiAgICBmcm9tUGFydHMgPSBmcm9tUGFydHMuY29uY2F0KHRvUGFydHMpO1xuICB9XG5cbiAgaWYgKCFmcm9tUGFydHMubGVuZ3RoKSByZXR1cm4gJy8nO1xuXG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xuICBpZiAoZnJvbVBhcnRzLmxlbmd0aCkge1xuICAgIHZhciBsYXN0ID0gZnJvbVBhcnRzW2Zyb21QYXJ0cy5sZW5ndGggLSAxXTtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gbGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicgfHwgbGFzdCA9PT0gJyc7XG4gIH0gZWxzZSB7XG4gICAgaGFzVHJhaWxpbmdTbGFzaCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IGZyb21QYXJ0cy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHBhcnQgPSBmcm9tUGFydHNbaV07XG5cbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBzcGxpY2VPbmUoZnJvbVBhcnRzLCBpKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgaWYgKCFtdXN0RW5kQWJzKSBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICBmcm9tUGFydHMudW5zaGlmdCgnLi4nKTtcbiAgfWlmIChtdXN0RW5kQWJzICYmIGZyb21QYXJ0c1swXSAhPT0gJycgJiYgKCFmcm9tUGFydHNbMF0gfHwgIWlzQWJzb2x1dGUoZnJvbVBhcnRzWzBdKSkpIGZyb21QYXJ0cy51bnNoaWZ0KCcnKTtcblxuICB2YXIgcmVzdWx0ID0gZnJvbVBhcnRzLmpvaW4oJy8nKTtcblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiByZXN1bHQuc3Vic3RyKC0xKSAhPT0gJy8nKSByZXN1bHQgKz0gJy8nO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVQYXRobmFtZTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbnZhciBwcmVmaXggPSAnSW52YXJpYW50IGZhaWxlZCc7XG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmIChjb25kaXRpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCArIFwiOiBcIiArIChtZXNzYWdlIHx8ICcnKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW52YXJpYW50O1xuIiwidmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5mdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWlzUHJvZHVjdGlvbikge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGV4dCA9IFwiV2FybmluZzogXCIgKyBtZXNzYWdlO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKHRleHQpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aHJvdyBFcnJvcih0ZXh0KTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdhcm5pbmc7XG4iLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIHZhbHVlRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoaXRlbSwgYltpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGFUeXBlID0gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGEpO1xuICB2YXIgYlR5cGUgPSB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYik7XG5cbiAgaWYgKGFUeXBlICE9PSBiVHlwZSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChhVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYVZhbHVlID0gYS52YWx1ZU9mKCk7XG4gICAgdmFyIGJWYWx1ZSA9IGIudmFsdWVPZigpO1xuXG4gICAgaWYgKGFWYWx1ZSAhPT0gYSB8fCBiVmFsdWUgIT09IGIpIHJldHVybiB2YWx1ZUVxdWFsKGFWYWx1ZSwgYlZhbHVlKTtcblxuICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWx1ZUVxdWFsOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9jb3JuZXJwbGFudC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvZWF0aW5nY29uY2VybnMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2hlcm8uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2xpZmVzdHlsZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9tb3JlUmVzb3VyY2VzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9waW5lYXBwbGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3ByYWN0aWNlYXJlYXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3JlbGF0aW9uc2hpcHMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3N0cmVzc21hbmFnZW1lbnQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9zdWNjdWxlbnRtYXQuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3RyYW5zaXRpb25zLmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSBhcyBjcmVhdGVIaXN0b3J5LCBIaXN0b3J5LCBMb2NhdGlvbiB9IGZyb20gJ2hpc3RvcnknO1xuXG5cblxuLy8gVE9ETzogYWNjZXNzaWJpbGl0eVxuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGlzdG9yeTtcblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiB7XG4gICAgICAgIG5hbWU6ICdob21lJyxcbiAgICAgICAgc2Nyb2xsVG86IG51bGxcbiAgICAgIH0sXG4gICAgICBzaG93SGFtYnVyZ2VyOiBmYWxzZSxcbiAgICAgIHNob3dEcmF3ZXI6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gY3VycmVudExvY2F0aW9uO1xuICAgIHRoaXMuaGlzdG9yeSA9IGNyZWF0ZUhpc3RvcnkoKTtcblxuICAgIHRoaXMuaGlzdG9yeS5saXN0ZW4oKGxvY2F0aW9uKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmICh3aWR0aCA+IDgwMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEcmF3ZXI6IGZhbHNlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd0RyYXdlcjogZmFsc2UsXG4gICAgICAgIHNob3dIYW1idXJnZXI6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaG93SGFtYnVyZ2VyXG4gICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgaWYgKHdpZHRoID4gODAwICYmIHNob3dIYW1idXJnZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2hvd0RyYXdlcjogZmFsc2UsXG4gICAgICAgICAgc2hvd0hhbWJ1cmdlcjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgODAwICYmICFzaG93SGFtYnVyZ2VyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dIYW1idXJnZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVOYXYgPSAodGFyZ2V0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2U6IHRhcmdldCB9KTtcblxuICAgIGlmICh0YXJnZXQuZG9jaykge1xuICAgICAgdGhpcy5jbG9zZURyYXdlcigpO1xuICAgIH1cblxuICAgIHN3aXRjaCAocGFnZS5uYW1lKSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcmFjdGljZSc6XG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKCcvcHJhY3RpY2UtYXJlYXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZXJ2aWNlcyc6XG4gICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoKCcvc2VydmljZXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjbGFzc2VzJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy9jbGFzc2VzJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVzb3VyY2VzJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy9yZXNvdXJjZXMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb2NzJzpcbiAgICAgICAgdGhpcy5oaXN0b3J5LnB1c2goJy9jbGllbnQtZG9jdW1lbnRzJyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKGN1cnJlbnQpID0+ICh7XG4gICAgICBzaG93RHJhd2VyOiAhY3VycmVudC5zaG93RHJhd2VyXG4gICAgfSkpO1xuICB9XG5cbiAgY2xvc2VEcmF3ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93RHJhd2VyOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGVtcGxhdGVTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZm9udEZhbWlseTogJ1JvYm90bywgc2Fucy1zZXJpZidcbiAgICB9O1xuXG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgbmFtZVxuICAgIH0gPSBwYWdlO1xuXG4gICAgbGV0IGNvbnRlbnQgPSA8ZGl2IC8+O1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgY29udGVudCA9IDxIb21lIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn0gLz5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcmFjdGljZSc6XG4gICAgICAgIGNvbnRlbnQgPSA8UHJhY3RpY2VBcmVhcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZXJ2aWNlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8U2VydmljZXMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xhc3Nlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8Q2xhc3NlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXNvdXJjZXMnOlxuICAgICAgICBjb250ZW50ID0gPFJlc291cmNlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb2NzJzpcbiAgICAgICAgY29udGVudCA9IDxDbGllbnREb2N1bWVudHMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmVlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8RmVlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3RlbXBsYXRlU3R5bGV9XG4gICAgICA+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBzaG93SGFtYnVyZ2VyPXt0aGlzLnN0YXRlLnNob3dIYW1idXJnZXJ9XG4gICAgICAgICAgYWN0aXZlPXtuYW1lfVxuICAgICAgICAgIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn1cbiAgICAgICAgICBvcGVuRHJhd2VyPXt0aGlzLnRvZ2dsZURyYXdlcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJvZHlcbiAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgIGNsb3NlRHJhd2VyPXt0aGlzLmNsb3NlRHJhd2VyfVxuICAgICAgICAgIHNob3dEcmF3ZXI9e3RoaXMuc3RhdGUuc2hvd0RyYXdlcn1cbiAgICAgICAgICBvbk5hdj17dGhpcy5oYW5kbGVOYXZ9XG4gICAgICAgID5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9Cb2R5PlxuICAgICAgICA8Rm9vdGVyXG4gICAgICAgICAgb25OYXY9e3RoaXMuaGFuZGxlTmF2fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFnZS5zY3JvbGxUbykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wJykuc2Nyb2xsSW50b1ZpZXcoKSwgMCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYWdlLnNjcm9sbFRvICE9PSBudWxsIHx8IHBhZ2Uuc2Nyb2xsVG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBwYWdlLnNjcm9sbFRvID09PSAnc3RyaW5nJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2Uuc2Nyb2xsVG8pLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSksIDApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHBhZ2Uuc2Nyb2xsVG8gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIHBhZ2Uuc2Nyb2xsVG8pLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jbG9zZURyYXdlcigpXG4gIH1cblxuICByZW5kZXJEcmF3ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzaG93RHJhd2VyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNuKCdkcmF3ZXItY29udGFpbmVyJywge1xuICAgICAgJ2hpZGUnOiAhc2hvd0RyYXdlclxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3ZlcmxheUNsYXNzZXMgPSBjbignZHJhd2VyLW92ZXJsYXknLCB7XG4gICAgICAnaGlkZSc6ICFzaG93RHJhd2VyXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IG9uRHJhd2VyUHJhY3RpY2VDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25OYXYoeyBuYW1lOiAncHJhY3RpY2UnLCBzY3JvbGxUbzogMCwgZG9jazogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyYXdlclNlcnZpY2VzQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ3NlcnZpY2VzJywgc2Nyb2xsVG86IDAsIGRvY2s6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJDb250YWN0Q2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ2NvbnRhY3QnLCBkb2NrOiB0cnVlIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgb25EcmF3ZXJDbGFzc2VzQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uTmF2KHsgbmFtZTogJ2NsYXNzZXMnLCBzY3JvbGxUbzogMCwgZG9jazogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyYXdlckRvY3VtZW50c0NsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdkb2NzJywgc2Nyb2xsVG86IDAsIGRvY2s6IHRydWUgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvbkRyYXdlclJlc291cmNlc0NsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk5hdih7IG5hbWU6ICdyZXNvdXJjZXMnLCBzY3JvbGxUbzogMCwgZG9jazogdHJ1ZSB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICBoYW5kbGVDb250YWN0Q2xpY2s9e29uRHJhd2VyQ29udGFjdENsaWNrfVxuICAgICAgICAgICAgaGFuZGxlU2VydmljZXNDbGljaz17b25EcmF3ZXJTZXJ2aWNlc0NsaWNrfVxuICAgICAgICAgICAgaGFuZGxlUHJhY3RpY2VDbGljaz17b25EcmF3ZXJQcmFjdGljZUNsaWNrfVxuICAgICAgICAgICAgaGFuZGxlQ2xhc3Nlc0NsaWNrPXtvbkRyYXdlckNsYXNzZXNDbGlja31cbiAgICAgICAgICAgIGhhbmRsZURvY3VtZW50c0NsaWNrPXtvbkRyYXdlckRvY3VtZW50c0NsaWNrfVxuICAgICAgICAgICAgaGFuZGxlUmVzb3VyY2VzQ2xpY2s9e29uRHJhd2VyUmVzb3VyY2VzQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdmVybGF5Q2xhc3Nlc30gb25DbGljaz17dGhpcy5oYW5kbGVEcmF3ZXJPdmVybGF5Q2xpY2t9PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBib2R5U3R5bGUgPSB7XG4gICAgICBtaW5IZWlnaHQ6IGBjYWxjKDEwMHZoIC0gNjBweClgXG4gICAgfTtcblxuICAgIGNvbnN0IG4gPSBwYWdlLm5hbWU7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNuKCdiYWNrZHJvcCcsIHtcbiAgICAgICdoZXJvIGxhenknOiBuID09PSAnaG9tZScsXG4gICAgICAnbW9yZVNlcnZpY2VzJzogbiA9PT0gJ3NlcnZpY2VzJyxcbiAgICAgICdtb3JlUmVzb3VyY2VzJzogbiA9PT0gJ3Jlc291cmNlcycsXG4gICAgICAnbW9yZURvY3VtZW50cyc6IG4gPT09ICdkb2NzJyxcbiAgICAgICdtb3JlRmVlcyc6IG4gPT09ICdmZWVzJyxcbiAgICAgICdtb3JlQ2xhc3Nlcyc6IG4gPT09ICdjbGFzc2VzJyxcbiAgICAgICdtb3JlUHJhY3RpY2UnOiBuID09PSAncHJhY3RpY2UnXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17Ym9keVN0eWxlfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gLz5cbiAgICAgICAgPGRpdlxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucmVuZGVyRHJhd2VyKCl9XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaW5saW5lU3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0VERUFFNScsXG4gICAgYm94U2hhZG93OiAnMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpJyxcbiAgICB6SW5kZXg6IDI0LFxuICB9O1xuXG4gIGNvbnN0IG1lbnVTdHlsZSA9IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBvbk5hdixcbiAgICBzaG93SGFtYnVyZ2VyLFxuICAgIG9wZW5EcmF3ZXJcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHJlbmRlckhhbWJ1cmdlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2hlYWRlci1uYXYgaGVhZGVyLWhhbWJ1cmdlcidcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgb25DbGljaz17b3BlbkRyYXdlcn1cbiAgICAgID5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2hhbWJ1cmdlcicgd2lkdGg9XCIzNFwiIGhlaWdodD1cIjM0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XCIgLz48L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzaG93SGFtYnVyZ2VyKSB7XG4gICAgaW5saW5lU3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2Vlbic7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e2lubGluZVN0eWxlfVxuICAgICAgPlxuICAgICAgICB7cmVuZGVySGFtYnVyZ2VyKCl9XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICd0b3AnIH0pfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnc2lnbmF0dXJlJywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdob21lJyB9KX1cbiAgICAgICAgICBzdHlsZT17eyAuLi5tZW51U3R5bGUsIG1hcmdpblJpZ2h0OiAyMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgU3RlcGhhbmllIFNtaXRoLCBQc3kuRC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17aW5saW5lU3R5bGV9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICd0b3AnIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ3NpZ25hdHVyZScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnaG9tZScgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFN0ZXBoYW5pZSBTbWl0aCwgUHN5LkQuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncHJhY3RpY2UnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAncHJhY3RpY2UnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBQcmFjdGljZSBBcmVhc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3NlcnZpY2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3NlcnZpY2VzJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgU2VydmljZXNcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdjbGFzc2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NsYXNzZXMnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBDbGFzc2VzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnZG9jcycsIHNjcm9sbFRvOiAwIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdkb2NzJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgRG9jdW1lbnRzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAnY29udGFjdCcgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2NvbnRhY3QnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBDb250YWN0XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncmVzb3VyY2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ3Jlc291cmNlcycgfSl9XG4gICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICA+XG4gICAgICAgIFJlc291cmNlc1xuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uTmF2XG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2Zvb3RlcidcbiAgICA+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgU3RlcGhhbmllIFNtaXRoLCBQc3kuRC5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPSdhZGRyZXNzJz5cbiAgICAgICAgODAxIEFsaGFtYnJhIEJsdmQsIFN1aXRlIDJCIFNhY3JhbWVudG8sIENBIDk1ODE2XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgKDkxNikgMzk5LTM2MTVcbiAgICAgIDwvc3Bhbj5cbiAgICA8L2RpdiA+XG4gICk7XG59O1xuXG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uTmF2XG4gIH0gPSBwcm9wcztcblxuICAvLyBjb25zdCBbaXNMYXp5LCBzZXRMYXp5XSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXG4gIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKGlzTGF6eSkge1xuICAvLyAgICAgc2V0TGF6eShmYWxzZSk7XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICBsZXQgbGF6eSA9ICcnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZHJvcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVybyAke2xhenl9YH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnIGlkPSd0b3AnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVyby1jb250ZW50Jz5cbiAgICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgXCJBbmQgdGhlIGRheSBjYW1lIHdoZW4gdGhlIHJpc2sgdG8gcmVtYWluIHRpZ2h0IGFzIGEgYnVkIHdhcyBtb3JlIHBhaW5mdWwgdGhhbiB0aGUgcmlzayBpdCB0b29rIHRvIGJsb3Nzb20uXCJcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxmb290ZXI+LSBBbmFpcyBOaW5cbiAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZXQgY2FyZC0yJyBpZD0nbWVldCcgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlJz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdwcm9maWxlUGhvdG8gY2FyZC0xJyBzcmM9J3Jlcy9wcm9maWxlLmpwZycgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmlvJz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Jpb1RpdGxlJz5cbiAgICAgICAgICAgICAgTWVldCBEci4gU3RlcGhhbmllIFNtaXRoXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdiaW9TdWJ0aXRsZSc+XG4gICAgICAgICAgICAgIENsaW5pY2FsIFBzeWNob2xvZ2lzdFxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAge21lZXRTdGVwaH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmFjdGljZUFyZWFzJyBpZD0ncHJhY3RpY2UnPlxuICAgICAgICAgIDxoMj5QcmFjdGljZSBBcmVhczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhcmVhSW1hZ2UgYXJlYUVhdGluZ0NvbmNlcm5zICR7bGF6eX1gfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBFYXRpbmc8YnIgLz4gQ29uY2VybnNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFyZWFJbWFnZSBhcmVhTGlmZXN0eWxlICR7bGF6eX1gfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBMaWZlc3R5bGU8YnIgLz4gQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYXJlYUltYWdlIGFyZWFUcmFuc2l0aW9ucyAke2xhenl9YH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgTGlmZTxiciAvPiBUcmFuc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYXJlYUltYWdlIGFyZWFSZWxhdGlvbnNoaXBzICR7bGF6eX1gfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBSZWxhdGlvbnNoaXA8YnIgLz4gQ2hhbGxlbmdlc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYXJlYUltYWdlIGFyZWFNZWRpY2FsUHJvYmxlbXMgJHtsYXp5fWB9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIEhlYWx0aDxiciAvPiBEaWZmaWN1bHRpZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFyZWFJbWFnZSBhcmVhU3RyZXNzICR7bGF6eX1gfSAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBTdHJlc3M8YnIgLz4gTWFuYWdlbWVudFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWRNb3JlJz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdyZWFkTW9yZSBidXR0b24nIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86IDAgfSl9PlxuICAgICAgICAgICAgICBSRUFEIE1PUkVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250YWN0IGNhcmQtMiAke2xhenl9YH0gaWQ9J2NvbnRhY3QnPlxuICAgICAgICAgIDxoMj5DaGFuZ2UgYmVnaW5zIHRvZGF5PC9oMj5cbiAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6IDIzIH19PlJlcXVlc3QgYSBjb25zdWx0YXRpb248L2gzPlxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAxOSwgbGluZUhlaWdodDogMS45LCBtYXJnaW5Ub3A6IDQwIH19PlxuICAgICAgICAgICAgQ2FsbC9UZXh0OiA5MTYtMzk5LTM2MTU8YnIgLz5cbiAgICAgICAgICAgIEVtYWlsOiA8YSB0eXBlPSdlbWFpbCcgaHJlZj0nbWFpbHRvOlN0ZXBoYW5pZVNtaXRoUHN5REBwcm90b25tYWlsLmNvbScgdGFyZ2V0PSdfYmxhbmsnPlN0ZXBoYW5pZVNtaXRoUHN5REBwcm90b25tYWlsLmNvbTwvYT48YnIgLz5cbiAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnBzeWNob2xvZ3l0b2RheS5jb20vcHJvZmlsZS80NzMwNzYnIHRhcmdldD0nX2JsYW5rJz5Db25uZWN0IHRocm91Z2ggUHN5Y2hvbG9neSBUb2RheTwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IG1haWwgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8Zm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiByZXF1aXJlZCAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XG4gICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBob25lXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICA8bGFiZWw+UGhvbmU8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICA8bGFiZWw+TWVzc2FnZTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICAgPGRpdiBjbGFzcz0ncmVhZE1vcmUnPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbic+U0VORDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuLyoqIEhvbWUgKi9cblxuXG4vKiogUGFnZXMgKi9cblxuY29uc3QgUHJhY3RpY2VBcmVhcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPSdQcmFjdGljZSBBcmVhcydcbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17cHJhY3RpY2VBcmVhc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPSdTZXJ2aWNlcydcbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17c2VydmljZXN9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIGJvZHk9e3NlcnZpY2VzUmVpbWJ1cnNtZW50fVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtzZXJ2aWNlc0luc3VyYWNlfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5jb25zdCBDbGFzc2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9eydDbGFzc2VzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17Y2xhc3Nlc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApO1xufVxuXG5jb25zdCBDbGllbnREb2N1bWVudHMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J0NsaWVudCBEb2N1bWVudHMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtjbGllbnREb2N1bWVudHN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbmNvbnN0IFJlc291cmNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnUmVzb3VyY2VzJ31cbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17cmVzb3VyY2VzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cbmNvbnN0IEZlZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J0ZlZXMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtmZWVzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cblxuXG4vKiogUGFnZXMgY29udGVudHMgKi9cblxuY29uc3QgbWVldFN0ZXBoID0gKFxuICA8cD5cbiAgICBXZWxjb21lIGFuZCB0aGFuayB5b3UgZm9yIHZpc2l0aW5nISBUaGlzIGlzIGEgcGxhY2UgdG8gZXhwbG9yZSB0aGUgcG9zc2liaWxpdHkgb2YgY2hhbmdlIGZvciBhIGJldHRlciB0b21vcnJvdy4gVGhlcmUgaXMgbm8g4oCcb25lIHNpemUgZml0cyBhbGzigJ0gYXBwcm9hY2ggdG8gb3VyIHRpbWUgdG9nZXRoZXIuIEkgd29yayBjb2xsYWJvcmF0aXZlbHkgd2l0aCBteSBjbGllbnRzIHRvIGNyZWF0ZSBhbiBlbnZpcm9ubWVudCBvZiByZXNwZWN0IGFuZCBjb21wYXNzaW9uIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gcmVuZXcgdGhlaXIgbGl2ZXMuIFRoZXJhcHkgaGFzIHRoZSBwb3dlciB0byBib3RoIHNvb3RoZSBhbmQgdHJhbnNmb3JtLiBJIHVzZSB0ZWNobmlxdWVzIG9mIG9uZS1vbi1vbmUgdGhlcmFweSBhbmQgY2xhc3NlcyB0byBzcGFyayBtZWFuaW5nZnVsIGFuZCBsYXN0aW5nIGNoYW5nZS4gSSBhbSBrbm93biBieSBteSBjbGllbnRzIGFzIGJlaW5nIGRvd24gdG8gZWFydGgsIGdlbnVpbmUsIGFuZCByZWxhdGFibGUuIEkgbG9vayBmb3J3YXJkIHRvIHBhcnRuZXJpbmcgdG9nZXRoZXIgdG8gYnVpbGQgeW91ciBoZWFsdGhpZXIgdG9tb3Jyb3cuXG4gIDwvcD5cbik7XG5cbmNvbnN0IHByYWN0aWNlQXJlYXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDM+RWF0aW5nIENvbmNlcm5zPC9oMz5cbiAgICA8cD5cbiAgICAgIEluZGl2aWR1YWxzIG5vdGljaW5nIG1pbmRsZXNzLCBzdHJlc3MsIGVtb3Rpb25hbCwgb3IgYmluZ2UgZWF0aW5nIGJlaGF2aW9ycyBhcmUgd2VsY29tZSB0byBjb25zaWRlciBib3RoIGluZGl2aWR1YWwgYW5kIGNsYXNzLWJhc2VkIHRoZXJhcGllcyB3aXRoIG1lLiBNeSBhcHByb2FjaCB0byB0aGVzZSBjb25jZXJucyByZWNvZ25pemVzIHRoZSBjb21wbGV4IHJvbGUgZWF0aW5nIGNhbiBwbGF5IGFzIGEgbWVjaGFuaXNtIG9mIGNvcGluZyBmb3IgaW5kaXZpZHVhbCwgZmFtaWx5LCBhbmQgY3VsdHVyYWxseSBzeXN0ZW1pYyBpc3N1ZXMuIFdlIHdvcmsgdG9nZXRoZXIgdG8gYWNrbm93bGVkZ2UgdGhlIGZ1bGxuZXNzIG9mIHRoaXMgcm9sZSBhcyB3ZWxsIGFzIGl0J3MgaGlzdG9yeSwgd2hpbGUgaG9ub3JpbmcgdGhlIGRlc2lyZSB0aGF0IG1heSBleGlzdCB0byBjaGFuZ2UuIFRocm91Z2ggb3VyIHdvcmsgd2UgY2FuIGJlZ2luIHRvIGRldmVsb3AgbmV3IGFuZCBoZWFsdGhpZXIgY29waW5nIHN0cmF0ZWdpZXMgYXMgYSBuYXR1cmFsIG91dGNvbWUgb2YgaW5jcmVhc2VkIGF3YXJlbmVzcyBhbmQgc2VsZi1jb21wYXNzaW9uLiBJIHRhaWxvciBteSBhcHByb2FjaCB0byB0aGUgbmVlZHMgYW5kIHN0eWxlIG9mIHRoZSBpbmRpdmlkdWFsIHdpdGggd2hvbSBJIGFtIHdvcmtpbmcuXG4gICAgPC9wPlxuXG4gICAgPGgzPkxpZmVzdHlsZSBDaGFuZ2VzPC9oMz5cblxuICAgIDxwPlxuICAgICAgTW9zdCBvZiB1cyBjYW4gcmVsYXRlIHRvIHRoZSBydW5uaW5nIG1lbnRhbCBsaXN0IG9mIHRoaW5ncyB3ZSBrbm93IHdlIFwic2hvdWxkXCIgYmUgZG9pbmcgaW4gb3JkZXIgdG8gYmUgaGVhbHRoaWVyLiBNYXliZSB0aGlzIGlzIG1vdmluZyBvdXIgYm9kaWVzIG1vcmUsIGVhdGluZyBkaWZmZXJlbnRseSwgaW1wcm92aW5nIHNsZWVwIGhhYml0cywgb3IgZGlzY29ubmVjdGluZyBmcm9tIHRlY2hub2xvZ3kuIE1heWJlIGl0IGNvdWxkIGJlIHRoZXNlIHRoaW5ncyBwbHVzIG1hbnkgbW9yZSEgV2hpbGUgY2VydGFpbmx5IGV4Y2VsbGVudCBoYWJpdHMsIGxvb2tpbmcgYXQgYSBsaXN0IG9mIHBlcnNvbmFsIHdlbGxuZXNzIFwidG8gZG9zXCIgY2FuIGJlIG92ZXJ3aGVsbWluZy4gSW4gZmFjdCwgd2Ugb2Z0ZW4gYXZvaWQgdGhpbmtpbmcgYWJvdXQgdGhlc2UgaGVhbHRoeSBsaXZpbmcgaXRlbXMgYmVjYXVzZSBpdCBjYW4gZmVlbCBob3BlbGVzcy4gVW5mb3J0dW5hdGVseSwgb2Z0ZW4gdGhpcyBtZWFucyBzdGF5aW5nIHN0dWNrIGluIGEgcnV0IG9mIGZlZWxpbmcgdW5oZWFsdGh5LiBUb2dldGhlciwgd2UgY2FuIGNyZWF0ZSBhIHBsYW4gb2Ygc21hbGwgc3RlcHMgdG8gd29yayB0b3dhcmRzIGNvbm5lY3RpbmcgYmVoYXZpb3IgY2hhbmdlcyB3aXRoIHlvdXIgZGVlcGVzdCB2YWx1ZXMuIFRoaW5ncyB0aGF0IG1heSBoYXZlIGZlbHQgZm9yY2VkIGluIHRoZSBwYXN0IGNhbiBiZWNvbWUgdGhpbmdzIHdlIGFyZSBlYWdlciBmb3IuIEkgd2lsbCBsZXZlcmFnZSBteSB0cmFpbmluZyBpbiBMaWZlc3R5bGUgTWVkaWNpbmUgdG8gaGVscCBzZXQgbWFuYWdlYWJsZSBhbmQgcmVzZWFyY2ggc3VwcG9ydGVkIGFpbXMgdG8gcHJvZHVjZSByZWFsIGltcHJvdmVtZW50cyBpbiB5b3VyIGhlYWx0aC5cbjwvcD5cblxuICAgIDxoMz5QaGFzZSBvZiBMaWZlIElzc3Vlcy9MaWZlIFRyYW5zaXRpb25zPC9oMz5cbiAgICA8cD5cbiAgICAgIFRob3VnaCB0aGUgcGhyYXNlLCBcInRoZSBvbmx5IHRoaW5nIGNvbnN0YW50IGlzIGNoYW5nZVwiIGlzIG9uZSBmYW1pbGlhciB0byBtYW55IG9mIHVzLCB0aGlzIG9mdGVuIGZlZWxzIGxpa2UgbGl0dGxlIGNvbWZvcnQgZHVyaW5nIHRoZSB0dXJtb2lsIG9mIGEgc2lnbmlmaWNhbnQgdHJhbnNpdGlvbi4gQ2hhbmdlcyBpbiBsaWZlIGNpcmN1bXN0YW5jZXMgY2FuIGltcGFjdCB1cyBvbiBldmVyeSBsZXZlbCBvZiBvdXIgYmVpbmcgYW5kIGV4dGVybmFsIGxpZmUuIFNlZWtpbmcgdGhlcmFweSBkdXJpbmcgdGhlc2UgdGltZXMgY2FuIGJlIGJvdGggYW5jaG9yIGFuZCBndWlkZSBsaWdodC4gSSB3aWxsIHN1cHBvcnQgeW91IHRvIHByb2Nlc3MgdGhlIGxvc3Mgb2YgaG93IHRoaW5ncyBoYXZlIGJlZW4uIFdoZW4geW91IGFyZSByZWFkeSwgd2Ugd2lsbCBzZXQgY29uc2Npb3VzbHkgZGV2ZWxvcGVkIGdvYWxzIGZvciB0aGUgcGhhc2Ugb2YgbGlmZSB0aGF0IHlvdSBmaW5kIHlvdXJzZWxmIGluIG5vdy4gV2Ugd2lsbCB3b3JrIHRvZ2V0aGVyIHRvIGlkZW50aWZ5IGhlYWx0aHkgY29yZSBjb21wb25lbnRzIG9mIHdobyB5b3UgYXJlIGV2b2x2aW5nIHRvIGJlLCBhbmQgY2VudGVyIG91ciBhdHRlbnRpb24gdG8gbnVydHVyZSB0aGlzIGdyb3d0aC4gVGhlcmUgaXMgbm8gc2V0IHRpbWVsaW5lIG9mIGhvdyBsb25nIGFuIGFkanVzdG1lbnQgcGVyaW9kIGxhc3RzLiBJIHdpbGwgaGVscCB5b3UgdG8gbW92ZSBpbnRvIHRoZSBuZXh0IHBhcnQgb2YgeW91ciBsaWZlIGluIGhlYWx0aGZ1bCB3YXlzLCBhcyBxdWlja2x5IGFzIGlzIHJlYXNvbmFibGUsIGFuZCBpbiBjb21wbGV0ZSByZXNwZWN0IGZvciB5b3VyIG93biBwYWNlLlxuPC9wPlxuXG4gICAgPGgzPlJlbGF0aW9uc2hpcCBDaGFsbGVuZ2VzPC9oMz5cbiAgICA8cD5cbiAgICAgIFJvbWFudGljLCBmYW1pbHksIHNvY2lhbCwgYW5kIG9jY3VwYXRpb25hbCByZWxhdGlvbnNoaXBzIGNhbiBhbGwgYmUgc291cmNlcyBvZiBzaWduaWZpY2FudCBwbGVhc3VyZSBhbmQsIGNvbnNlcXVlbnRseSwgc2lnbmlmaWNhbnQgcGFpbi4gVGhlcmUgYXJlIGEgbXVsdGl0dWRlIG9mIHJlYXNvbnMgcmVsYXRpb25zaGlwcyBjYW4gYmVjb21lIHRyb3VibGVkLiBNYW55IG9mIHRoZSByb290cyBvZiB0aGVzZSByZWFzb25zIGNhbiBiZSB0cmFjZWQgdG8gY29tbXVuaWNhdGlvbiBjbGFyaXR5LiBXaGlsZSB3ZSBjYW5ub3QgY2hhbmdlIG90aGVyIHBlb3BsZSwgd2UgY2FuIGlkZW50aWZ5IHBlcnNvbmFsIHF1YWxpdGllcyBpbiBvdXJzZWx2ZXMgdGhhdCB3ZSB3aXNoIHRvIGNoYW5nZSBmb3IgdGhlIHdlbGxiZWluZyBvZiBhIGN1cnJlbnQgb3IgZnV0dXJlIHJlbGF0aW9uc2hpcC4gV29ya2luZyB0b3dhcmRzIGlkZW50aWZ5aW5nIHRoZXNlIGFyZWFzLCBjcmVhdGluZyBtaW5kZnVsIGF3YXJlbmVzcyBhcm91bmQgdGhlbSwgYW5kIG1ha2luZyB2YWx1ZXMtYmFzZWQgY2hhbmdlcyBjYW4gcHJvdmlkZSBib3RoIHBlcnNvbmFsIGJlbmVmaXRzIGFuZCBpbXByb3ZlbWVudHMgdG8gdGhlIHJlbGF0aW9uc2hpcC4gV2UgY2FuIHdvcmsgdG9nZXRoZXIgdG8gaWRlbnRpZnkgYW5kIG9wdGltaXplIHRoZXNlIGNoYW5nZXMgd2hpbGUgcHJpb3JpdGl6aW5nIGVmZmVjdGl2ZSBhbmQgY2xlYXIgY29tbXVuaWNhdGlvbiBhcyB0aGUgY29ybmVyc3RvbmUgdG8gaW1wcm92ZWQgcmVsYXRpb25zaGlwcy5cbjwvcD5cbiAgICA8aDM+SGVhbHRoIERpZmZpY3VsdGllczwvaDM+XG4gICAgPHA+XG4gICAgICBUaGVyZSBpcyBubyBkb3VidCB0aGF0IG91ciBwaHlzaWNhbCB3ZWxsYmVpbmcgaW1wYWN0cyBvdXIgcHN5Y2hvbG9naWNhbCB3ZWxsYmVpbmcgYW5kIHZpY2UgdmVyc2EuIFdoZXRoZXIgeW91IGFyZSBsb29raW5nIGZvciBzdXBwb3J0IGluIGltcHJvdmluZyB5b3VyIG1hbmFnZW1lbnQgb2YgYSBtZWRpY2FsIHByb2JsZW0sIGhhbmRsaW5nIHRoZSBzdHJlc3MgYXJvdW5kIGl0LCBvciBiZWxpZXZlIHRoZXJlIG1heSBiZSBsaWZlc3R5bGUgY2hhbmdlcyB0aGF0IHdpbGwgcmV2ZXJzZSB0aGUgY29uZGl0aW9uLCBJIHdvdWxkIGJlIGhhcHB5IHRvIHN1cHBvcnQgdGhpcyBhc3BlY3Qgb2YgeW91ciBoZWFsdGguIEkgYW0gYSB0cmFpbmVkIGhlYWx0aCBwc3ljaG9sb2dpc3QgYW5kIHdvcmsgcmVndWxhcmx5IHdpdGggYm90aCBjaHJvbmljIGFuZCBhY3V0ZSBtZWRpY2FsIGNvbmRpdGlvbnMuIEkgaGF2ZSBwZXJzb25hbCBhbmQgcHJvZmVzc2lvbmFsIGV4cGVyaWVuY2Ugd2l0aCB0aGUgaW1wYWN0cyBwaHlzaWNhbCBoZWFsdGggY2FuIGhhdmUgbm90IG9ubHkgb24gb25lc2VsZiwgYnV0IGFsc28gb24gdGhvc2UgYXJvdW5kIHVzLiBJIGJlbGlldmUgc3VwcG9ydCBjYW4gbWFrZSBhIHN1YnN0YW50aXZlIGRpZmZlcmVuY2UgaW4gbWFuYWdpbmcgYSBoZWFsdGggY29uY2VybiBhcyB3ZWxsIGFzIHRoZSBlbW90aW9uYWwgYW5kIHNvY2lhbCBpbXBhY3RzIG9mIHRoaXMuIEkgd2lsbCB3b3JrIHdpdGggeW91IHRvIGFjY2VwdCB0aG9zZSByZWFsaXRpZXMgdGhhdCBhcmUgdW5jaGFuZ2luZywgYXMgd2VsbCBhcyByZWNvZ25pemUgb3Bwb3J0dW5pdGllcyBmb3IgcG9zaXRpdmUgZ3Jvd3RoLlxuPC9wPlxuICAgIDxoMz5TdHJlc3MgTWFuYWdlbWVudDwvaDM+XG4gICAgPHA+XG4gICAgICBBdCB0aW1lcyB3ZSBjYW4gZmluZCBvdXJzZWx2ZXMgb3ZlcndoZWxtZWQuIFRoZSByZWFzb25zIGZvciBmZWVsaW5nIG92ZXJ3aGVsbWVkIG1pZ2h0IHNlZW0gY2xlYXIsIG9yIHRoZXkgbWF5IGJlIGhhcmQgdG8gdW5kZXJzdGFuZC4gSXQgY2FuIGZlZWwgbGlrZSBiZWluZyB0cmFwcGVkIGluIHBhcnRzIG9mIHlvdXIgb3duIGxpZmUuIFRhbGtpbmcgdGhyb3VnaCB5b3VyIHN0cmVzc29ycyB3aXRoIGEgcHJvZmVzc2lvbmFsIGNhbiBhbGxvdyBzcGFjZSBhcm91bmQgcGFpbmZ1bCBwYXJ0cyBvZiB5b3VyIGV4cGVyaWVuY2UgdGhhdCBjb3VsZCBlYXNlIHRoZSBwcmVzc3VyZS4gVGhlcmUgbWF5IGFsc28gYmUgYWx0ZXJuYXRpdmUgcGVyc3BlY3RpdmVzIHRoYXQgeW91IGFyZW7igJl0IGFibGUgdG8gc2VlIGZyb20gYmVpbmcgcmlnaHQgaW4gdGhlIHRoaWNrIG9mIHRoZSBzdHJlc3MsIHRoYXQgbWF5IGJlIHZpc2libGUgZnJvbSBhbiBvdXRzaWRlIHBlcnNwZWN0aXZlLiBUaGVyYXB5IGNhbiBwcm92aWRlIHN1cHBvcnQgdG8gcHJvY2VzcyB5b3VyIGV4cGVyaWVuY2VzIGFuZCBmcmVlIHlvdSB0byBiZSBhIG1vcmUgd2hvbGUgdmVyc2lvbiBvZiB5b3Vyc2VsZjsgYWJsZSB0byBlbmdhZ2Ugd2l0aCB0aGUgcmVzdCBvZiB5b3VyIGxpZmUgYW5kIHRoZSBwZW9wbGUgaW4gaXQuXG4gICAgPC9wPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3Qgc2VydmljZXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgIFdoYXQgdG8gRXhwZWN0XG4gICAgPC9oMz5cbiAgICA8aDM+VGVsZXBob25lIENvbnN1bHQ8L2gzPlxuICAgIDxwPlxuICAgICAgQXMgb3VyIGZpcnN0IGNvbnRhY3QgZm9yIGVpdGhlciBpbmRpdmlkdWFsIHRoZXJhcHkgb3IgY2xhc3NlcyBJIG9mZmVyIGEgY29tcGxlbWVudGFyeSAxNS1taW51dGUgcGhvbmUgY29uc3VsdGF0aW9uLiBUaGlzIGlzIGFuIG9wcG9ydHVuaXR5IGZvciB1cyB0byBjb25uZWN0IGFib3V0IHRoZSBpc3N1ZXMgdGhhdCBicmluZyB5b3UgaW50byBjYXJlLCBhbmQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgd29ya2luZyB0b2dldGhlciBpcyB0aGUgYmVzdCBmaXQgZm9yIHlvdXIgbmVlZHMuIEkgY2FuIGFuc3dlciBhbnkgcXVlc3Rpb25zIHRoYXQgeW91IG1heSBoYXZlIGFib3V0IGNvbWluZyBpbnRvIGNhcmUgYW5kIHNldCB1cCB5b3VyIGZpcnN0IGFwcG9pbnRtZW50IG9yIGNsYXNzLlxuICAgICAgPGJyIC8+XG4gICAgICA8aT4xNS1taW4gaW5pdGlhbCB0ZWxlcGhvbmUgY29uc3VsdCYjeDIwMTQ7IGZyZWU8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5Jbml0aWFsIEFwcG9pbnRtZW50PC9oMz5cbiAgICA8cD5cbiAgICAgIEFuIGluaXRpYWwgaW5kaXZpZHVhbCB0aGVyYXB5IGFwcG9pbnRtZW50IGlzIGEgNjAtbWludXRlIGFwcG9pbnRtZW50LiBEdXJpbmcgdGhpcyBhcHBvaW50bWVudCBJIHdpbGwgcmV2aWV3IHlvdXIgY29tcGxldGUgaW50YWtlIGZvcm0gd2l0aCB5b3UgdG8gZW5zdXJlIHRoYXQgSSBoYXZlIGFuIGFwcHJvcHJpYXRlIHVuZGVyc3RhbmRpbmcgb2Ygc29tZSBvZiB5b3VyIGhpc3RvcnksIHdoYXQgYnJpbmdzIHlvdSBpbnRvIGNhcmUsIGFuZCB5b3VyIGdvYWxzIGZvciBvdXIgd29yayB0b2dldGhlci4gSSB3aWxsIGFuc3dlciBhbnkgcXVlc3Rpb25zIHRoYXQgeW91IGhhdmUgdG8gdGhlIGJlc3Qgb2YgbXkgYWJpbGl0eS4gV2Ugd2lsbCBhbHNvIHVzZSB0aGlzIGFwcG9pbnRtZW50IHRvIGNyZWF0ZSBzb21lIGluaXRpYWwgZ29hbHMgZm9yIGNhcmUgYW5kIHRvIHNldCB1cCBvdXIgbXV0dWFsIGV4cGVjdGF0aW9ucyBmb3IgdHJlYXRtZW50LlxuICAgICAgPGJyIC8+XG4gICAgICA8aT42MC1taW4gaW5pdGlhbCBpbmRpdmlkdWFsIGFwcG9pbnRtZW50JiN4MjAxNDsgJDE1MDwvaT5cbiAgICA8L3A+XG4gICAgPGgzPlJldHVybiBBcHBvaW50bWVudHM8L2gzPlxuICAgIDxwPlxuICAgICAgUmV0dXJuIGFwcG9pbnRtZW50cyBhcmUgNTAtbWludXRlIGFwcG9pbnRtZW50cy4gRHVyaW5nIHJldHVybiBhcHBvaW50bWVudHMgd2Ugd2lsbCB3b3JrIHRvZ2V0aGVyIG9uIHlvdXIgZ29hbHMgYW5kIEkgd2lsbCBzdXBwb3J0IHlvdSB0aHJvdWdoIHRoZSBwcm9jZXNzLiBXZSB3aWxsIHJlZ3VsYXJseSBjaGVjayBpbiBhYm91dCB0aGUgcHJvZ3Jlc3Mgb2YgY2FyZSBhbmQgbWFrZSBhZGp1c3RtZW50cyBhcyBuZWVkZWQgdG8gZW5zdXJlIHRoYXQgd2UgYXJlIHdvcmtpbmcgZWZmZWN0aXZlbHkgdG9nZXRoZXIuXG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjUwLW1pbiByZXR1cm4gaW5kaXZpZHVhbCBhcHBvaW50bWVudCYjeDIwMTQ7ICQxNTA8L2k+XG4gICAgPC9wPlxuICAgIDxoMz5DbGFzc2VzPC9oMz5cbiAgICA8cD5cbiAgICAgIENsYXNzZXMgYXJlIDkwIG1pbnV0ZXMgaW4gbGVuZ3RoLiBEdWUgdG8gc3BhY2UgbmVlZGVkLCBjbGFzc2VzIGFyZSBoZWxkIGF0IGEgbmVhcmJ5IGxvY2F0aW9uIHNlcGFyYXRlIGZyb20gdGhlIG1haW4gdGhlcmFweSBvZmZpY2UuIE1vcmUgaW5mb3JtYXRpb24gYWJvdXQgY2xhc3MgYW5kIGNsYXNzIGNvbnRlbnQgY2FuIGJlIGZvdW5kIHVuZGVyIHRoZSBcIkNsYXNzZXNcIiB0YWIuIFRob3VnaCBjbGFzc2VzIHRha2UgcGxhY2Ugb3ZlciA0IHNlc3Npb25zLCB0aGUgZnVsbCBmZWUgbXVzdCBiZSBwYWlkIGluIGFkdmFuY2Ugb2YgdGhlIGZpcnN0IHNlc3Npb24uIEFmdGVyIHRoaXMgcGF5bWVudCwgbm8gYWRkaXRpb25hbCBjaGFyZ2VzIGFyZSBpbmN1cnJlZCBmb3IgdGhlIHJlbWFpbmRlciBvZiB0aGUgY2xhc3NlcyB1bmxlc3MgYW4gYWRkaXRpb25hbCBzZXJ2aWNlIGlzIHJlcXVlc3RlZCBvciBwcm92aWRlZC5cbiAgICAgIDxiciAvPlxuICAgICAgPGk+NC1zZXNzaW9uICgzNjAtbWluKSBjbGFzcyBzZXJpZXMmI3gyMDE0OyAkMTYwPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+VGVsZU1lbnRhbCBIZWFsdGg8L2gzPlxuICAgIDxwPlxuICAgICAgT24gb2NjYXNpb24gaXQgbWF5IGJlIGluZGljYXRlZCBmb3IgdXMgdG8gZW5nYWdlIGluIHRlbGUtaGVhbHRoIGVpdGhlciBvdmVyIHRoZSBwaG9uZSBvciB0aHJvdWdoIHZpZGVvIGNvbW11bmljYXRpb24uIFRoZXNlIHNlcnZpY2VzIGFyZSBvZmZlcmVkIHRvIGluZGl2aWR1YWxzIG9ubHkgYWZ0ZXIgd2UgaGF2ZSBpbml0aWFsbHkgZXN0YWJsaXNoZWQgaW4tcGVyc29uIHRoZXJhcGV1dGljIHJlbGF0aW9uc2hpcCB0aHJvdWdoIGF0IGxlYXN0IG9uZSBpbi1wZXJzb24gYXBwb2ludG1lbnQuIER1ZSB0byBsaWNlbnNpbmcgcmVxdWlyZW1lbnRzLCBJIGFtIHVuYWJsZSB0byBwcm92aWRlIHRoZXNlIHNlcnZpY2VzIHRvIGFueW9uZSBvdXQtb2Ytc3RhdGUgb3IgY291bnRyeSBhdCB0aGUgdGltZSBvZiBzZXJ2aWNlLiBUaGVyZSBhcmUgYSB2YXJpZXR5IG9mIHBsYXRmb3JtcyBhdmFpbGFibGUgZm9yIHRoaXMgc2VydmljZSBhbmQsIHRob3VnaCBjb252ZW5pZW50LCBpdCBpcyBpbXBvcnRhbnQgdG8gYmUgYXdhcmUgdGhhdCBtb3N0IGFyZSBub3QgSElQQUEgY29tcGxpYW50LiBDb21wbGV0aW5nIHRoZSBJbmZvcm1lZCBDb25zZW50IGZvcm0gYWNrbm93bGVkZ2VzIHlvdXIgdW5kZXJzdGFuZGluZyBvZiB0aGlzIGFuZCBhY2NlcHRhbmNlIG9mIHRoZSByaXNrIHNob3VsZCB3ZSB1dGlsaXplIHRoaXMgZm9ybWF0IG9mIGNhcmUuXG4gICAgICA8YnIgLz5cbiAgICAgIDxpPjUgdG8gMjUgbWludXRlcyYjeDIwMTQ7ICQ3NTwvaT5cbiAgICAgIDxiciAvPlxuICAgICAgPGk+MjYtNTAgbWludXRlcyYjeDIwMTQ7ICQxNTA8L2k+XG4gICAgPC9wPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3Qgc2VydmljZXNSZWltYnVyc21lbnQgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgIFBheW1lbnQgYW5kIFJlaW1idXJzZW1lbnRcbiAgICA8L2gzPlxuICAgIDxwPlxuICAgICAgWW91IHdpbGwgYmUgZXhwZWN0ZWQgdG8gcGF5IGZvciBlYWNoIHNlc3Npb24gYmVmb3JlL2F0IHRoZSBzdGFydCBvZiBzZXNzaW9uLCB1bmxlc3Mgd2UgYWdyZWUgb3RoZXJ3aXNlLiBQYXltZW50IG1heSBiZSBtYWRlIHRocm91Z2ggY2FzaCwgY2hlY2ssIG9yIEhJUEFBIGNvbXBsaWFudCBhcHBsaWNhdGlvbi4gVXNlIG9mIHRoZSBISVBBQSBjb21wbGlhbnQgYXBwbGljYXRpb24gaW5jdXJzIGFuIGFkZGl0aW9uYWwgJDUgY2hhcmdlLlxuICAgIDwvcD5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IHNlcnZpY2VzSW5zdXJhY2UgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDMgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgIEluc3VyYW5jZVxuICAgIDwvaDM+XG4gICAgPHA+XG4gICAgICBJIGFtIGFuIFwib3V0IG9mIG5ldHdvcmsgcHJvdmlkZXJcIiBmb3IgaW5zdXJhbmNlIG5ldHdvcmtzIGJ1dCB3aWxsIHByb3ZpZGUgeW91IGEgU3VwZXJiaWxsIHdoaWNoIHlvdSBtYXkgdXNlIHRvIHJlcXVlc3QgcmVpbWJ1cnNlbWVudC4gVGhlIGNvdmVyYWdlIHlvdSByZWNlaXZlIGlzIGVudGlyZWx5IGRlcGVuZGVudCB1cG9uIHRoZSBwbGFuIHRoYXQgeW91IGhhdmUuIEkgcmVjb21tZW5kIHRoYXQgeW91IGNvbnRhY3QgeW91ciBpbnN1cmFuY2UgY29tcGFueSBkaXJlY3RseSB0byBkZXRlcm1pbmUgeW91ciBzcGVjaWZpYyBjb3ZlcmFnZS4gU29tZSBxdWVzdGlvbnMgdGhhdCBtYXkgYmUgaGVscGZ1bCBpbiB0aGlzIGNvbnZlcnNhdGlvbiBpbmNsdWRlOlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIERvIEkgaGF2ZSBtZW50YWwgaGVhbHRoIGluc3VyYW5jZSBiZW5lZml0cyB0aGF0IGNvdmVyIHBzeWNob3RoZXJhcHk/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBEb2VzIG15IHBvbGljeSBjb3ZlciBhbiBvdXQgb2YgbmV0d29yayBMaWNlbnNlZCBQc3ljaG9sb2dpc3Q/IElmIHNvLCB3aGF0IHBlcmNlbnRhZ2UgaXMgY292ZXJlZCBvciB3aGF0IGlzIHRoZSBjb3ZlcmFnZSBhbW91bnQgcGVyIHRoZXJhcHkgc2Vzc2lvbj9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIFdoYXQgaXMgbXkgZGVkdWN0aWJsZSBhbmQgaGFzIGl0IGJlZW4gbWV0P1xuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgQXJlIG15IG1lZGljYWwgYW5kIG1lbnRhbCBoZWFsdGgvYmVoYXZpb3JhbCBoZWFsdGggZGVkdWN0aWJsZXMgc2VwYXJhdGU/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBIb3cgbWFueSBzZXNzaW9ucyBwZXIgeWVhciBkb2VzIG15IGhlYWx0aCBpbnN1cmFuY2UgY292ZXI/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBEb2VzIHRoZSBkaWFnbm9zaXMgbWF0dGVyPyBBcmUgc29tZSBkaWFnbm9zZXMgY292ZXJlZCBhbmQgb3RoZXJzIG5vdD9cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIFdoYXQgcGFwZXJ3b3JrIG9yIGZvcm1zIGRvIEkgbmVlZCB0byBzdWJtaXQgZm9yIHNlc3Npb25zIHRvIGJlIGNvdmVyZWQ/XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICBJcyBhcHByb3ZhbCByZXF1aXJlZCBmcm9tIG15IHByaW1hcnkgY2FyZSBwaHlzaWNpYW4/XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5cbmNvbnN0IGNsYXNzZXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDM+XG4gICAgICBNb29kICYgRm9vZFxuICAgIDwvaDM+XG4gICAgPHA+XG4gICAgICBNb29kICYgRm9vZCBpcyBhIGNsYXNzIGRlc2lnbmVkIGZvciBpbmRpdmlkdWFscyBzdHJ1Z2dsaW5nIHdpdGggb3ZlcmVhdGluZywgbWluZGxlc3MgZWF0aW5nLCBzdHJlc3MgZWF0aW5nLCBlbW90aW9uYWwgZWF0aW5nLCBzaGFtZSBhcm91bmQgZWF0aW5nLCBvciBiaW5nZSBlYXRpbmcuIFRoZSBjb3Vyc2UgaXMgc3RydWN0dXJlZCBpbnRvIDQgY2xhc3NlcyBlYWNoIGxhc3RpbmcgOTAgbWludXRlcy4gVGhlIGNsYXNzIGNlbnRlcnMgb24gcHJlc2VudGVkIG1hdGVyaWFsLCB0aG91Z2ggcXVlc3Rpb25zIGFuZCBwYXJ0aWNpcGF0aW9uIGFyZSB3ZWxjb21lIGFuZCBlbmNvdXJhZ2VkLiBDbGFzcyBtYXRlcmlhbHMgYWxzbyBpbmNsdWRlIGhhbmRvdXRzIGFuZCBhdC1ob21lIHByYWN0aWNlIGV4ZXJjaXNlcy4gRHVyaW5nIHRoZSBjb3Vyc2Ugb2YgdGhlIGNsYXNzZXMgd2Ugd2lsbCBjb3ZlciB0b3BpY3MgaW5jbHVkaW5nOlxuICAgIDwvcD5cbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmbGV4RmxvdzogJ3JvdyB3cmFwJyB9fT5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIHdoYXQgZW1vdGlvbmFsIGVhdGluZyBpc1xuICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIGN1bHR1cmFsIGltcGxpY2F0aW9uc1xuICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIGVudmlyb25tZW50YWwgaW1wYWN0c1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgc2V0IHBvaW50IHRoZW9yeVxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgZW1vdGlvbmFsIHZzIHBoeXNpY2FsIGh1bmdlclxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgYmluZ2UgZWF0aW5nIGN5Y2xlXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBpbnRlcnBlcnNvbmFsIGR5bmFtaWNzIGFyb3VuZCBmb29kXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBzZWxmLXRhbGtcbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBiZWhhdmlvciBhbmFseXNpcyAmIGJlaGF2aW9yIGNoYW5nZVxuICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIG1pbmRmdWwgZWF0aW5nXG4gICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgbG92aW5nIGxpbWl0c1xuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgc2VsZi1jb21wYXNzaW9uXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBtYW5hZ2luZyBkaWZmaWN1bHQgZW1vdGlvbnNcbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIGhhYml0IGZvcm1hdGlvblxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgc3RhZ2VzIG9mIGNoYW5nZVxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgaGVhbHRoeSBlYXRpbmcgZ3VpZGVsaW5lc1xuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8cD5cbiAgICAgIEJ5IHRoZSBlbmQgb2YgdGhlIGNsYXNzIHNlcmllcyBwYXJ0aWNpcGFudHMgd2lsbCBiZSBhYmxlIHRvIHJlY29nbml6ZSBvcHBvcnR1bml0aWVzIGZvciwgcHJlcGFyZSBmb3IsIGFuZCBtYWtlIHBvc2l0aXZlIGNoYW5nZXMgaW4gdGhlaXIgcmVsYXRpb25zaGlwcyB3aXRoIHRoZW1zZWx2ZXMsIGZvb2QsIGFuZCB0aGVpciBlbnZpcm9ubWVudC5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCByZXNvdXJjZXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8cD5cbiAgICAgIFRoZSBiZWxvdyBhcmUgcmVzb3VyY2VzIHRoYXQgSSBmaW5kIHRvIGJlIGNsaW5pY2FsbHkgdmFsdWFibGUuIEkgaGF2ZSBubyBhZmZpbGlhdGlvbiB3aXRoIGFueSBvZiB0aGUgaW5kaXZpZHVhbHMgb3IgZW50aXRpZXMgaW5kaWNhdGVkIGJlbG93LiBUaGVzZSByZXNvdXJjZXMgYXJlIHByb3ZpZGVkIHB1cmVseSBkdWUgdG8gbXkgcGVyY2VwdGlvbiBvZiB0aGVpciBjbGluaWNhbCBiZW5lZml0LiBJIHJlY2VpdmUgbm8gY29tcGVuc2F0aW9uIG9mIGFueSBraW5kIGZvciBzaGFyaW5nIHRoZXNlIHJlc291cmNlcy5cbiAgICA8L3A+XG4gICAgPGgzPldlYnBhZ2VzPC9oMz5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2FueGlldHljYW5hZGEuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkFueGlldHkgQ2FuYWRhPC9hPiBpcyBhbiBleGNlbGxlbnQgd2ViIHJlc291cmNlIGZvciBldmlkZW5jZSBiYXNlZCBpbmZvcm1hdGlvbiBhYm91dCBhbnhpZXR5LiBUaGUgd2Vic2l0ZSBpcyB3cml0dGVuIGluIGNsZWFyIGxhbmd1YWdlIHRoYXQgaXMgdGhvdWdodGZ1bCwgZWFzeSB0byB1bmRlcnN0YW5kLCBhbmQgaGVscGZ1bC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXBzLmFueGlldHljYW5hZGEuY29tL2NvdXJzZXMvbXktYW54aWV0eS1wbGFuLW1hcC1mb3ItYWR1bHRzL1wiIHRhcmdldD1cIl9ibGFua1wiPk15IEFueGlldHkgUGxhbjwvYT4gaXMgdGhlIG9ubGluZSBjb3Vyc2UgYXNzb2NpYXRlZCB3aXRoIEFueGlldHkgQ2FuYWRhLiBJdCBpcyBhIGZyZWUgY291cnNlIHRoYXQgcHJvdmlkZXMgZXhjZWxsZW50IGluZm9ybWF0aW9uIGluIGFkZGl0aW9uIHRvIHByYWN0aWNhbCB0b29scyBhbmQgcHJhY3RpY2VzIGZvciBtYW5hZ2luZyBhbnhpZXR5IGFuZCBhbnhpZXR5LWJhc2VkIGNvbmRpdGlvbnMuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QnJlbmUgQnJvd248L2E+IGlzIGFuIGF1dGhvciwgcmVzZWFyY2hlciwgYW5kIHNwZWFrZXIgdGhhdCBJIGhpZ2hseSByZWNvbW1lbmQuIFRoZSBsaW5rIGlzIHRvIGhlciBtYWluIHdlYnBhZ2UuIEJlbG93IGFyZSBzcGVjaWZpYyByZXNvdXJjZXMgb2YgaGVycyB0aGF0IEkgcmVjb21tZW5kLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dnc2MuYmVya2VsZXkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBHcmVhdGVyIEdvb2QgU2NpZW5jZSBDZW50ZXI8L2E+LSBCZXJrZWxleSBpcyBhIGNlbnRlciBvZiByZXNlYXJjaCBhbmQgaW5ub3ZhdGlvbiBmb2N1c2luZyBvbiBtYWtpbmcgcG9zaXRpdml0eSBhbmQgcG9zaXRpdmUgY2hhbmdlIGFjY2Vzc2libGUgdG8gYWxsLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lZHgub3JnL2NvdXJzZS90aGUtc2NpZW5jZS1vZi1oYXBwaW5lc3MtMFwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBTY2llbmNlIG9mIEhhcHBpbmVzczwvYT4gaXMgdGhlIG9ubGluZSBjb3Vyc2UgZnJvbSB0aGUgR3JlYXRlciBHb29kIFNjaWVuY2UgQ2VudGVyLiBJdCBpcyBhIGZyZWUgOC13ZWVrIGNvdXJzZSB0aGF0IHByb3ZpZGVzIHRvb2xzIHRvIGhhcHBpZXIgZXhwZXJpZW5jZXMgYW5kIGdyZWF0ZXIgbWVhbmluZyBpbiBsaWZlLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dnaWEuYmVya2VsZXkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiPkdyZWF0ZXIgR29vZCBpbiBBY3Rpb248L2E+IHByb3ZpZGVzIGRvYWJsZSBwcmFjdGljZXMgZm9yIG1ha2luZyBjb25jcmV0ZSBhbmQgaW1wYWN0ZnVsIHBvc2l0aXZlIGNoYW5nZXNcbiAgICA8L3A+XG5cbiAgICA8aDM+VmlkZW9zPC9oMz5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50ZWQuY29tL3RhbGtzL2JyZW5lX2Jyb3duX29uX3Z1bG5lcmFiaWxpdHk/dXRtX2NhbXBhaWduPXRlZHNwcmVhZCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dGVkY29tc2hhcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgUG93ZXIgb2YgVnVsbmVyYWJpbGl0eS0gQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlZC5jb20vdGFsa3MvYnJlbmVfYnJvd25fbGlzdGVuaW5nX3RvX3NoYW1lP3V0bV9jYW1wYWlnbj10ZWRzcHJlYWQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXRlZGNvbXNoYXJlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGlzdGVuaW5nIHRvIFNoYW1lLSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzI2MTM0ODcwOVwiIHRhcmdldD1cIl9ibGFua1wiPlN1cGVyU291bCBTZXNzaW9uczogVGhlIEFuYXRvbXkgb2YgVHJ1c3QtIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL3ZpZGVvcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BZGRpdGlvbmFsIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3lvdXR1LmJlL0l2dFpCVVNwbHI0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIFNwYWNlIEJldHdlZW4gU2VsZi1Fc3RlZW0gYW5kIFNlbGYtQ29tcGFzc2lvbi0gS3Jpc3RpbiBOZWZmPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3NlbGYtY29tcGFzc2lvbi5vcmcvdmlkZW9zL1wiIHRhcmdldD1cIl9ibGFua1wiPkFkZGl0aW9uYWwgS3Jpc3RpbiBOZWZmPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50ZWQuY29tL3RhbGtzL3NhbmRyYV9hYW1vZHRfd2h5X2RpZXRpbmdfZG9lc25fdF91c3VhbGx5X3dvcms/dXRtX2NhbXBhaWduPXRlZHNwcmVhZCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dGVkY29tc2hhcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5XaHkgRGlldGluZyBEb2Vzbid0IFVzdWFsbHkgV29yay0gU2FuZHJhIEFhbW9kdDwvYT48YnIgLz5cblxuICAgIDxoMz5BdWRpbyBSZWNvcmRpbmdzPC9oMz5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL2NlbnRlcmZvcm1zYy5vcmcvcHJhY3RpY2UtbXNjL2d1aWRlZC1tZWRpdGF0aW9ucy1hbmQtZXhlcmNpc2VzL1wiIHRhcmdldD1cIl9ibGFua1wiPk1pbmRmdWwgU2VsZiBDb21wYXNzaW9uIE1lZGl0YXRpb25zPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy51Y2xhaGVhbHRoLm9yZy9tYXJjL21pbmRmdWwtbWVkaXRhdGlvbnNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5VQ0xBIE1lZGl0YXRpb25zIChBbHNvIGF2YWlsYWJsZSBpbiBTcGFuaXNoISk8L2E+PGJyIC8+XG5cbiAgICA8aDM+Qm9va3M8L2gzPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2dlbmVlbnJvdGguY29tL2Jvb2tzL1wiIHRhcmdldD1cIl9ibGFua1wiPldvbWVuLCBGb29kLCBhbmQgR29kIGJ5IEdlbmVlbiBSb3RoPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL2Jvb2tzLWF1ZGlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBHaWZ0cyBvZiBJbXBlcmZlY3Rpb24gYnkgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vYm9va3MtYXVkaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGFyaW5nIEdyZWF0bHkgYnkgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vYm9va3MtYXVkaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmlzaW5nIFN0cm9uZyBieSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IGNsaWVudERvY3VtZW50cyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxwPlxuICAgICAgVGhlIGZvbGxvd2luZyBmb3JtcyBhcmUgZm9yIHlvdXIgcmV2aWV3LiBJZiB3ZSBoYXZlIHNjaGVkdWxlZCBhbiBpbi1wZXJzb24gYXBwb2ludG1lbnQsIGNhcmVmdWxseSByZWFkIGVhY2ggb2YgdGhlIGZvcm1zIGJlbG93LiBQbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIGZpcnN0IHRocmVlIGZvcm1zIHRvIG91ciBmaXJzdCBhcHBvaW50bWVudC4gV2Ugd2lsbCByZXZpZXcgdGhlbSB0b2dldGhlci4gSWYgeW91IHdvdWxkIGxpa2UgZm9yIHlvdXIgaGVhbHRoIGluZm9ybWF0aW9uIHRvIGJlIHNoYXJlZCB3aXRoIGFub3RoZXIgaW5kaXZpZHVhbCBvciBncm91cCwgb3Igd291bGQgbGlrZSBtZSB0byBnYXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGVtLCBwbGVhc2UgcHJpbnQsIGNvbXBsZXRlLCBhbmQgYnJpbmcgdGhlIFJlbGVhc2Ugb2YgSW5mb3JtYXRpb24gZm9ybSB0byB5b3VyIG5leHQgYXBwb2ludG1lbnQgd2hpY2ggaWRlbnRpZmllcyB0aGUgcGVyc29uIG9yIGVudGl0eSB3aXRoIHdob20geW91ciBpbmZvcm1hdGlvbiBzaG91bGQgYmUgc2hhcmVkLlxuICAgIDwvcD5cbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9JbmZvcm1lZCBDb25zZW50LnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPkluZm9ybWVkIENvbnNlbnQ8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvSW50YWtlIEZvcm0ucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+SW50YWtlIEZvcm08L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvUmVjZWlwdCBvZiBGb3Jtcy5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5SZWNlaXB0IG9mIEZvcm1zPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL1ByaXZhY3kgUG9saWN5LnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlByaXZhY3kgUG9saWN5PC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL1JPSS5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5SZWxlYXNlIG9mIEluZm9ybWF0aW9uPC9hPlxuICAgICAgPC9saT5cblxuICAgIDwvdWw+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5cblxuY29uc3QgQ2FyZDEgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBwcm9wcy50aXRsZSA/XG4gICAgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtdGl0bGUnPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICApIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdjYXJkIGNhcmQtMSdcbiAgICA+XG4gICAgICB7dGl0bGV9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cbiAgICAgICAge3Byb3BzLmJvZHl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cblxuXG5jb25zdCBQYWdlVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS10aXRsZScgaWQ9J3RvcCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5jbGFzcyBEcmF3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGFuZGxlUHJhY3RpY2VDbGljayxcbiAgICAgIGhhbmRsZVNlcnZpY2VzQ2xpY2ssXG4gICAgICBoYW5kbGVDbGFzc2VzQ2xpY2ssXG4gICAgICBoYW5kbGVDb250YWN0Q2xpY2ssXG4gICAgICBoYW5kbGVEb2N1bWVudHNDbGljayxcbiAgICAgIGhhbmRsZVJlc291cmNlc0NsaWNrXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBhY3RpdmUgPSAnJ1xuXG4gICAgY29uc3QgbWVudVN0eWxlID0ge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBmb250U2l6ZTogMjAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgY3VycmVudENvbG9yJyxcbiAgICAgIHBhZGRpbmc6IDEwXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJhd2VyJz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByYWN0aWNlQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAncHJhY3RpY2UnIH0pfVxuICAgICAgICAgIHN0eWxlPXt7IC4uLm1lbnVTdHlsZSwgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIGN1cnJlbnRDb2xvcicgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFByYWN0aWNlIEFyZWFzXG4gICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlcnZpY2VzQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnc2VydmljZXMnIH0pfVxuICAgICAgICAgIHN0eWxlPXttZW51U3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICBTZXJ2aWNlc1xuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGFzc2VzQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY2xhc3NlcycgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIENsYXNzZXNcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRG9jdW1lbnRzQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnZG9jcycgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIERvY3VtZW50c1xuICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb250YWN0Q2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnY29udGFjdCcgfSl9XG4gICAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIENvbnRhY3RcbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzb3VyY2VzQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAncmVzb3VyY2VzJyB9KX1cbiAgICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgUmVzb3VyY2VzXG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0byxcbiAgICAgIHRleHQsXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2xhc3Nlc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgID5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiAke2NsYXNzZXN9YH1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICA+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL0FwcCc7XG5cbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5cblJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyBcbiIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiXSwic291cmNlUm9vdCI6IiJ9