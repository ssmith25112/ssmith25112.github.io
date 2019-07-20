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
exports.push([module.i, "* {\n  color: #222222;\n}\n\nbody {\n  margin: 0;\n  position: relative;\n}\n\n.navMenu {\n  font-size: 18px;\n  position: relative;\n}\n\n.backdrop {\n  overflow: hidden;\n  position: fixed;\n  z-index: -1;\n  width: 100%;\n}\n\n.hero {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 100%;\n}\n\n.content {\n  margin-top: 50px;\n}\n\n.hero-content {\n  width: 100%;\n  display: flex;\n  height: 85vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.hero-content blockquote {\n  width: 60%;\n}\n\n.hero-content h1 {\n  color: #FFFFFF;\n}\n\nblockquote footer {\n  text-align: end;\n  font-size: 22px;\n  color: #FFFFFF;\n}\n\n.meet {\n  display: flex;\n  background-color: #ABD0DA;\n  padding: 30px;\n\n}\n\n\n\n\n.profile {\n  display: flex;\n  width: 50%;\n  justify-content: center;\n  align-items: center;\n}\n\n.profilePhoto {\n  width: 100%;\n  max-width: 450px;\n  min-width: 0;\n  min-height: 0;\n  object-fit: contain;\n  border-radius: 25px;\n}\n\n.bio {\n  flex: 1 0 auto;\n  margin: 20px;\n  max-width: 50%;\n}\n\n.bio .bioTitle {\n  text-decoration: underline;\n  text-align: center;\n  margin-top: 0;\n}\n\n.bio .bioSubtitle {\n  text-align: center;\n}\n\n.bio p {\n  word-wrap: break-word;\n  /* padding: 0px 30px; */\n}\n\n@media screen and (max-width: 400px) {\n  .meet {\n    flex-direction: column;\n  }\n\n  .bio, .profile {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n\n.practiceAreas {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n.practiceAreas h2 {\n  text-align: center;\n  font-size: 4rem;\n  font-family: 'Dancing Script', cursive;\n  margin: 0;\n}\n\n.practiceAreas .areas {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 30px;\n  align-items: space-between;\n  justify-content: center;\n}\n\n.practiceAreas .areas>.area {\n  display: flex;\n  flex: 1 0 290px;\n  max-width: 290px;\n  height: 320px;\n  background: #F7F7F7;\n  border-radius: 2px;\n  flex-direction: column;\n  margin: 0 30px 30px 0;\n  position: relative;\n}\n\n.areaImage {\n  width: 100%;\n  height: 200px;\n  background-color: lightgray;\n}\n\n.areaEatingConcerns {\n  background: url(" + ___CSS_LOADER_URL___1___ + ") no-repeat;\n  background-size: 100% 119%;\n\n}\n\n.areaLifestyle {\n  background: url(" + ___CSS_LOADER_URL___2___ + ") no-repeat;\n  background-size: cover;\n\n}\n\n.areaMedicalProblems {\n  background: url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;\n  background-size: 100% 120%;\n\n}\n\n.areaRelationships {\n  background: url(" + ___CSS_LOADER_URL___4___ + ")  no-repeat;\n  background-size: cover;\n\n}\n\n.areaStress {\n  background: url(" + ___CSS_LOADER_URL___5___ + ") no-repeat;\n  background-size: cover;\n\n}\n\n.areaTransitions {\n  background: url(" + ___CSS_LOADER_URL___6___ + ") no-repeat;\n  background-size: cover;\n}\n\n.areaText {\n  font-size: 30px;\n  height: 120px;\n  max-height: 120px;\n}\n\n.areaText div {\n  margin-left: 42px;\n  margin-top: 12px;\n}\n\n.areaOverlay {\n  background: transparent;\n  border: 1px solid black;\n  border-radius: 2px;\n  position: absolute;\n  width: 230px;\n  height: 260px;\n  margin: 30px;\n}\n\n.services {\n  height: 400px;\n  background-color: #FBEEC1;\n  display: flex;\n}\n\n.servicesDescription {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n}\n\n.servicesImage {\n  width: 50%;\n  background: url(" + ___CSS_LOADER_URL___7___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n@media screen and (max-width: 400px) {\n  .servicesDescription {\n    width: 100%;\n  }\n  .servicesImage {\n    width: 0%;\n    display: none;\n  }\n\n  .hero-content blockquote h1 {\n    font-size: 1.75rem;\n  }\n\n  .hero-content blockquote footer {\n    font-size: 1.25rem;\n  }\n}\n\n.button {\n  display: inline-block;\n  border: none;\n  border-radius: 2px;\n  margin: 0;\n  text-decoration: none;\n  background: #9FEDD7;\n  font-size: 18px;\n  cursor: pointer;\n  text-align: center;\n  transition: background 200ms ease-in-out, transform 100ms ease;\n  -webkit-appearance: none;\n  padding: 10px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.button:hover {\n  background: rgb(178, 233, 217);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.readMore {\n  display: flex;\n  justify-content: center;\n}\n\n.classes {\n  display: flex;\n  justify-content: center;\n  background: #FFFFFF;\n  padding: 30px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n\n.contact {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n.contact form {\n  margin-top: 30px;\n}\n\n\n.group {\n  position: relative;\n  margin-bottom: 45px;\n}\n\ninput,\ntextarea {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575;\n}\n\ninput:focus {\n  outline: none;\n}\n\ntextarea:focus {\n  outline: none;\n}\n\n/* LABEL ======================================= */\nlabel {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n/* active state */\ninput:focus~label,\ninput:valid~label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE;\n}\n\ntextarea {\n  resize: none;\n  padding: 0;\n}\n\ntextarea:focus ~label,\ntextarea:valid ~label {\n  top: -20px;\n  font-size: 14px;\n  color: #5264AE;\n}\n\n/* TODO learn this */\n\n/* BOTTOM BARS ================================= */ \n.bar {\n  position: relative;\n  display: block;\n  width: 300px;\n}\n\n.bar:before,\n.bar:after {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #5264AE;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar:before {\n  left: 50%;\n}\n\n.bar:after {\n  right: 50%;\n}\n\n/* active state */\ninput:focus~.bar:before,\ninput:focus~.bar:after {\n  width: 50%;\n}\n\n/* active state */\ntextarea:focus~.bar:before,\ntextarea:focus~.bar:after {\n  width: 50%;\n}\n\n/* HIGHLIGHTER ================================== */\n.highlight {\n  position: absolute;\n  height: 60%;\n  width: 100px;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n/* active state */\ninput:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* active state */\ntextarea:focus~.highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  -moz-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* ANIMATIONS ================ */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #5264AE;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@-moz-keyframes inputHighlighter {\n  from {\n    background: #5264AE;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: #5264AE;\n  }\n\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #EDEAE5;\n  padding: 30px;\n}\n\n.footer > div {\n  height: 65px;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: column;\n}\n\n.footer > div > span {\n  text-align: right;\n  cursor: pointer;\n  margin-left: auto;\n}\n\n.footer > div > span:hover {\n  filter: brightness(1.2);\n}\n\n\n.link:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  bottom: -2px;\n  left: 0;\n  background: #EDEAE5;\n  visibility: hidden;\n  border-radius: 5px;\n  transform: scaleX(0);\n  transition: .25s linear;\n}\n\n.link:hover:before,\n.link:focus:before {\n  visibility: visible;\n  transform: scaleX(1);\n}\n\n.navMenu:before {\n  bottom: -5px !important;\n}\n\n.moreServices {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___8___ + ");\n}\n\n.moreClasses {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___9___ + ");\n}\n\n.moreResources {\n  background: center / cover no-repeat url(" + ___CSS_LOADER_URL___10___ + ");\n}\n\n\n\n/* \n.about {\n  background-image: url('../res/about.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.help {\n  background-image: url('../res/help.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.services {\n  background-image: url('../res/services.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.classes {\n  background-image: url('../res/classes.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.contact {\n  background-image: url('../res/contact.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.resources {\n  background-image: url('../res/resources.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n} */\n\n.signature {\n  font-family: 'Dancing Script', cursive;\n  font-size: 26px;\n}\n\n.navMenu:hover {\n  filter: brightness(1.2);\n}\n\n.page-title {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n.page-title .title {\n  font-size: 4rem;\n  font-family: 'Dancing Script', cursive;\n}\n\n.card {\n  background: #F7F7F7;\n  border-radius: 2px;\n  margin: 50px 15%;\n  display: flex;\n  flex-direction: column;\n  min-height: 100px;\n  min-width: 100px;\n}\n\n.card * {\n  color: #222222;\n}\n\n.card-body {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  min-height: 100px;\n  padding: 20px;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  padding: 20px;\n  border-bottom: 1px solid #222222;\n  height: 100%;\n}\n\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.card-2 {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-3 {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.card-4 {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.card-5 {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n}\n\n.background {\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}", ""]);


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
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
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
        onNav: this.handleNav
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, {
        page: page
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
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, _getPrototypeOf(Body).apply(this, arguments));
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.children));
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
    zIndex: 10
  };
  var menuStyle = {
    cursor: 'pointer'
  };
  var active = props.active,
      onNav = props.onNav,
      showHamburger = props.showHamburger;

  var renderHamburger = function renderHamburger() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header-nav header-hamburger",
      style: {
        marginLeft: 20
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "34",
      height: "34",
      viewBox: "0 0 24 24"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      fill: "#000000",
      d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
    }))));
  };

  console.log(showHamburger);

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
        name: 'home',
        scrollTo: 'services'
      });
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('navMenu', 'link', {
      'navMenu--active': active === 'services'
    }),
    style: menuStyle
  }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return onNav({
        name: 'home',
        scrollTo: 'classes'
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Stephanie Smith, Psy.D."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Alhambra Blvd"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "(916) 555-5555")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
    className: "services card-2",
    id: "services"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "servicesDescription"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor bibendum quam at efficitur. Sed pharetra id velit nec elementum. Morbi tincidunt sapien nisi, nec porttitor augue semper ac. Vestibulum pulvinar cursus urna, id varius mauris pellentesque in. Aenean ac neque purus. Sed egestas consectetur ipsum. Cras non semper ligula, quis suscipit odio. Cras dictum pharetra auctor."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "readMore",
    style: {
      marginTop: 'auto',
      justifyContent: 'flex-start'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button",
    onClick: function onClick() {
      return onNav({
        name: 'services',
        scrollTo: 0
      });
    }
  }, "READ MORE"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "servicesImage"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "classes",
    id: "classes"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "classesDescription"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Mood & Food"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Get in my belly"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "readMore",
    style: {
      marginTop: 'auto',
      justifyContent: 'flex-start'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button",
    onClick: function onClick() {
      return onNav({
        name: 'classes',
        scrollTo: 0
      });
    }
  }, "READ MORE")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcz9lODVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3Jlcy9lYXRpbmdjb25jZXJucy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL2hlcm8uanBnIiwid2VicGFjazovLy8uL3Jlcy9saWZlc3R5bGUyLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbWVkaWNhbHByb2JsZW1zLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvbW9yZUNsYXNzZXMuanBnIiwid2VicGFjazovLy8uL3Jlcy9tb3JlUmVzb3VyY2VzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvcmVsYXRpb25zaGlwcy5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3NlcnZpY2VzLmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGciLCJ3ZWJwYWNrOi8vLy4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZyIsIndlYnBhY2s6Ly8vLi9yZXMvdHJhbnNpdGlvbnMuanBnIiwid2VicGFjazovLy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInBhZ2UiLCJzdGF0ZSIsIm5hbWUiLCJzY3JvbGxUbyIsInNob3dIYW1idXJnZXIiLCJzaG93RHJhd2VyIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlbXBsYXRlU3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZvbnRGYW1pbHkiLCJjb250ZW50IiwiaGFuZGxlTmF2IiwiUmVhY3QiLCJDb21wb25lbnQiLCJCb2R5Iiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsInVuZGVmaW5lZCIsImJlaGF2aW9yIiwiYm9keVN0eWxlIiwibWluSGVpZ2h0IiwibiIsImNsYXNzZXMiLCJjbiIsImNoaWxkcmVuIiwiSGVhZGVyIiwiaW5saW5lU3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJ6SW5kZXgiLCJtZW51U3R5bGUiLCJjdXJzb3IiLCJhY3RpdmUiLCJvbk5hdiIsInJlbmRlckhhbWJ1cmdlciIsIm1hcmdpbkxlZnQiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luUmlnaHQiLCJGb290ZXIiLCJIb21lIiwibWVldFN0ZXBoIiwibWFyZ2luVG9wIiwiUHJhY3RpY2VBcmVhcyIsInByYWN0aWNlQXJlYXMiLCJTZXJ2aWNlcyIsInNlcnZpY2VzIiwiQ2xhc3NlcyIsIkNsaWVudERvY3VtZW50cyIsImNsaWVudERvY3VtZW50cyIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIkZlZXMiLCJmZWVzIiwiQ2FyZDEiLCJ0aXRsZSIsImJvZHkiLCJQYWdlVGl0bGUiLCJSZWFjdERPTSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtB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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztB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O0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBNEIsTUFBRSxFQUFDO0FBQS9CLEtBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHQSxLQUFLLENBQUNzRSxLQURULENBREYsQ0FERjtBQU9ELENBUkQsQzs7Ozs7Ozs7Ozs7O0FDenlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQUcsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQnZELDRDQUFLLENBQUN3RCxhQUFOLENBQW9CNUUsd0NBQXBCLENBQWhCLEVBQTBDd0IsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsdUI7Ozs7Ozs7Ozs7O0FDQUEsMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgZ2V0VXJsID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvaGVyby5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL2VhdGluZ2NvbmNlcm5zLmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvbGlmZXN0eWxlMi5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL21lZGljYWxwcm9ibGVtcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3JlbGF0aW9uc2hpcHMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zdHJlc3NtYW5hZ2VtZW50LmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX182X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvdHJhbnNpdGlvbnMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL3Jlcy9zZXJ2aWNlcy5qcGdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyA9IGdldFVybChyZXF1aXJlKFwiLi4vcmVzL3N1Y2N1bGVudEJ1cnN0LmpwZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX185X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvbW9yZUNsYXNzZXMuanBnXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzEwX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9yZXMvbW9yZVJlc291cmNlcy5qcGdcIikpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdk1lbnUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYmFja2Ryb3Age1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uaGVyby1jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogODV2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm8tY29udGVudCBibG9ja3F1b3RlIHtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi5oZXJvLWNvbnRlbnQgaDEge1xcbiAgY29sb3I6ICNGRkZGRkY7XFxufVxcblxcbmJsb2NrcXVvdGUgZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbn1cXG5cXG4ubWVldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FCRDBEQTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuXFxufVxcblxcblxcblxcblxcbi5wcm9maWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZmlsZVBob3RvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIG1pbi13aWR0aDogMDtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuLmJpbyB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uYmlvIC5iaW9UaXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5iaW8gLmJpb1N1YnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJpbyBwIHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIC8qIHBhZGRpbmc6IDBweCAzMHB4OyAqL1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLm1lZXQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmJpbywgLnByb2ZpbGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ucHJhY3RpY2VBcmVhcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XFxufVxcblxcbi5wcmFjdGljZUFyZWFzIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJhY3RpY2VBcmVhcyAuYXJlYXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJhY3RpY2VBcmVhcyAuYXJlYXM+LmFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMCAyOTBweDtcXG4gIG1heC13aWR0aDogMjkwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgYmFja2dyb3VuZDogI0Y3RjdGNztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgMzBweCAzMHB4IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hcmVhSW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4uYXJlYUVhdGluZ0NvbmNlcm5zIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTE5JTtcXG5cXG59XFxuXFxuLmFyZWFMaWZlc3R5bGUge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxufVxcblxcbi5hcmVhTWVkaWNhbFByb2JsZW1zIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTIwJTtcXG5cXG59XFxuXFxuLmFyZWFSZWxhdGlvbnNoaXBzIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyArIFwiKSAgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXG59XFxuXFxuLmFyZWFTdHJlc3Mge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX181X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxufVxcblxcbi5hcmVhVHJhbnNpdGlvbnMge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX182X19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5hcmVhVGV4dCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbiAgbWF4LWhlaWdodDogMTIwcHg7XFxufVxcblxcbi5hcmVhVGV4dCBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG4uYXJlYU92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIGhlaWdodDogMjYwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbi5zZXJ2aWNlcyB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRUVDMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZXJ2aWNlc0Rlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5zZXJ2aWNlc0ltYWdlIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5zZXJ2aWNlc0Rlc2NyaXB0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuc2VydmljZXNJbWFnZSB7XFxuICAgIHdpZHRoOiAwJTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5oZXJvLWNvbnRlbnQgYmxvY2txdW90ZSBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxufVxcblxcbi5idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzlGRURENztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxMDBtcyBlYXNlO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTc4LCAyMzMsIDIxNyk7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXG59XFxuXFxuLnJlYWRNb3JlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNsYXNzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcXG59XFxuXFxuXFxuLmNvbnRhY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLmNvbnRhY3QgZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG5cXG4uZ3JvdXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc1NzU3NTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogTEFCRUwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxubGFiZWwge1xcbiAgY29sb3I6ICM5OTk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBsZWZ0OiA1cHg7XFxuICB0b3A6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG5pbnB1dDpmb2N1c35sYWJlbCxcXG5pbnB1dDp2YWxpZH5sYWJlbCB7XFxuICB0b3A6IC0yMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICM1MjY0QUU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnRleHRhcmVhOmZvY3VzIH5sYWJlbCxcXG50ZXh0YXJlYTp2YWxpZCB+bGFiZWwge1xcbiAgdG9wOiAtMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNTI2NEFFO1xcbn1cXG5cXG4vKiBUT0RPIGxlYXJuIHRoaXMgKi9cXG5cXG4vKiBCT1RUT00gQkFSUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8gXFxuLmJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmJhcjpiZWZvcmUsXFxuLmJhcjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDA7XFxuICBib3R0b206IDFweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6ICM1MjY0QUU7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcbn1cXG5cXG4uYmFyOmJlZm9yZSB7XFxuICBsZWZ0OiA1MCU7XFxufVxcblxcbi5iYXI6YWZ0ZXIge1xcbiAgcmlnaHQ6IDUwJTtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxuaW5wdXQ6Zm9jdXN+LmJhcjpiZWZvcmUsXFxuaW5wdXQ6Zm9jdXN+LmJhcjphZnRlciB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4vKiBhY3RpdmUgc3RhdGUgKi9cXG50ZXh0YXJlYTpmb2N1c34uYmFyOmJlZm9yZSxcXG50ZXh0YXJlYTpmb2N1c34uYmFyOmFmdGVyIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi8qIEhJR0hMSUdIVEVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaGlnaGxpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgdG9wOiAyNSU7XFxuICBsZWZ0OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xcbmlucHV0OmZvY3Vzfi5oaWdobGlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgLW1vei1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbiAgYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXG59XFxuXFxuLyogYWN0aXZlIHN0YXRlICovXFxudGV4dGFyZWE6Zm9jdXN+LmhpZ2hsaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxuICAtbW96LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcbn1cXG5cXG4vKiBBTklNQVRJT05TID09PT09PT09PT09PT09PT0gKi9cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZDogIzUyNjRBRTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG5ALW1vei1rZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxuICBmcm9tIHtcXG4gICAgYmFja2dyb3VuZDogIzUyNjRBRTtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcbiAgZnJvbSB7XFxuICAgIGJhY2tncm91bmQ6ICM1MjY0QUU7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIH1cXG59XFxuXFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFREVBRTU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uZm9vdGVyID4gZGl2IHtcXG4gIGhlaWdodDogNjVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9vdGVyID4gZGl2ID4gc3BhbiB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZm9vdGVyID4gZGl2ID4gc3Bhbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuXFxuLmxpbms6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogLTJweDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjRURFQUU1O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2l0aW9uOiAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLmxpbms6aG92ZXI6YmVmb3JlLFxcbi5saW5rOmZvY3VzOmJlZm9yZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5uYXZNZW51OmJlZm9yZSB7XFxuICBib3R0b206IC01cHggIWltcG9ydGFudDtcXG59XFxuXFxuLm1vcmVTZXJ2aWNlcyB7XFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX184X19fICsgXCIpO1xcbn1cXG5cXG4ubW9yZUNsYXNzZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyArIFwiKTtcXG59XFxuXFxuLm1vcmVSZXNvdXJjZXMge1xcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgbm8tcmVwZWF0IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTBfX18gKyBcIik7XFxufVxcblxcblxcblxcbi8qIFxcbi5hYm91dCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3Jlcy9hYm91dC5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVscCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3Jlcy9oZWxwLmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zZXJ2aWNlcyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3Jlcy9zZXJ2aWNlcy5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uY2xhc3NlcyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3Jlcy9jbGFzc2VzLmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5jb250YWN0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcmVzL2NvbnRhY3QuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnJlc291cmNlcyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3Jlcy9yZXNvdXJjZXMuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59ICovXFxuXFxuLnNpZ25hdHVyZSB7XFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLm5hdk1lbnU6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5wYWdlLXRpdGxlIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLnBhZ2UtdGl0bGUgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kOiAjRjdGN0Y3O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luOiA1MHB4IDE1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uY2FyZCAqIHtcXG4gIGNvbG9yOiAjMjIyMjIyO1xcbn1cXG5cXG4uY2FyZC1ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyMjIyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2FyZC0xIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXG59XFxuXFxuLmNhcmQtMiB7XFxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcblxcbi5jYXJkLTMge1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxufVxcblxcbi5jYXJkLTQge1xcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcXG59XFxuXFxuLmNhcmQtNSB7XFxuICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsIDAsIDAsIDAuMzApLCAwIDE1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICB6LWluZGV4OiAtMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL2VhdGluZ2NvbmNlcm5zLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9oZXJvLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9saWZlc3R5bGUyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9tZWRpY2FscHJvYmxlbXMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL21vcmVDbGFzc2VzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9tb3JlUmVzb3VyY2VzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9yZWxhdGlvbnNoaXBzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkaXN0L3Jlcy9zZXJ2aWNlcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvc3RyZXNzbWFuYWdlbWVudC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGlzdC9yZXMvc3VjY3VsZW50QnVyc3QuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRpc3QvcmVzL3RyYW5zaXRpb25zLmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuLy8gVE9ETzogYWNjZXNzaWJpbGl0eVxuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IHtcbiAgICAgICAgbmFtZTogJ2hvbWUnLFxuICAgICAgICBzY3JvbGxUbzogbnVsbFxuICAgICAgfSxcbiAgICAgIHNob3dIYW1idXJnZXI6IGZhbHNlLFxuICAgICAgc2hvd0RyYXdlcjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBpZiAod2lkdGggPiA3NTApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RHJhd2VyOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dEcmF3ZXI6IGZhbHNlLFxuICAgICAgICBzaG93SGFtYnVyZ2VyOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2hvd0hhbWJ1cmdlclxuICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGlmICh3aWR0aCA+IDc1MCAmJiBzaG93SGFtYnVyZ2VyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHNob3dEcmF3ZXI6IGZhbHNlLFxuICAgICAgICAgIHNob3dIYW1idXJnZXI6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aCA8IDc1MCAmJiAhc2hvd0hhbWJ1cmdlcikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzaG93SGFtYnVyZ2VyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTmF2ID0gKHRhcmdldCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlOiB0YXJnZXQgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGVtcGxhdGVTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgZm9udEZhbWlseTogJ1JvYm90bywgc2Fucy1zZXJpZidcbiAgICB9O1xuXG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgbmFtZVxuICAgIH0gPSBwYWdlO1xuXG4gICAgbGV0IGNvbnRlbnQgPSA8ZGl2IC8+O1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdob21lJzpcbiAgICAgICAgY29udGVudCA9IDxIb21lIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn0gLz5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwcmFjdGljZSc6XG4gICAgICAgIGNvbnRlbnQgPSA8UHJhY3RpY2VBcmVhcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZXJ2aWNlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8U2VydmljZXMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xhc3Nlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8Q2xhc3NlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXNvdXJjZXMnOlxuICAgICAgICBjb250ZW50ID0gPFJlc291cmNlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkb2NzJzpcbiAgICAgICAgY29udGVudCA9IDxDbGllbnREb2N1bWVudHMgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmVlcyc6XG4gICAgICAgIGNvbnRlbnQgPSA8RmVlcyAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3RlbXBsYXRlU3R5bGV9XG4gICAgICA+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBzaG93SGFtYnVyZ2VyPXt0aGlzLnN0YXRlLnNob3dIYW1idXJnZXJ9XG4gICAgICAgICAgYWN0aXZlPXtuYW1lfVxuICAgICAgICAgIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJvZHlcbiAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICA+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvQm9keT5cbiAgICAgICAgPEZvb3RlclxuICAgICAgICAgIG9uTmF2PXt0aGlzLmhhbmRsZU5hdn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhZ2Uuc2Nyb2xsVG8pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvcCcpLnNjcm9sbEludG9WaWV3KCksIDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYWdlXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFnZS5zY3JvbGxUbyAhPT0gbnVsbCB8fCBwYWdlLnNjcm9sbFRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2YgcGFnZS5zY3JvbGxUbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYWdlLnNjcm9sbFRvKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pLCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwYWdlLnNjcm9sbFRvID09PSAnbnVtYmVyJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCBwYWdlLnNjcm9sbFRvKSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGJvZHlTdHlsZSA9IHtcbiAgICAgIG1pbkhlaWdodDogYGNhbGMoMTAwdmggLSAxMjVweClgXG4gICAgfTtcblxuICAgIGNvbnN0IG4gPSBwYWdlLm5hbWU7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNuKHtcbiAgICAgICdtb3JlU2VydmljZXMnOiBuID09PSAnc2VydmljZXMnLFxuICAgICAgJ21vcmVSZXNvdXJjZXMnOiBuID09PSAncmVzb3VyY2VzJyxcbiAgICAgICdtb3JlRG9jdW1lbnRzJzogbiA9PT0gJ2RvY3MnLFxuICAgICAgJ21vcmVGZWVzJzogbiA9PT0gJ2ZlZXMnLFxuICAgICAgJ21vcmVDbGFzc2VzJzogbiA9PT0gJ2NsYXNzZXMnLFxuICAgICAgJ21vcmVQcmFjdGljZSc6IG4gPT09ICdwcmFjdGljZSdcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgc3R5bGU9e2JvZHlTdHlsZX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgaW5saW5lU3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgbGVmdDogMCxcbiAgICB0b3A6IDAsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0VERUFFNScsXG4gICAgYm94U2hhZG93OiAnMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpJyxcbiAgICB6SW5kZXg6IDEwLFxuICB9O1xuXG4gIGNvbnN0IG1lbnVTdHlsZSA9IHtcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBvbk5hdixcbiAgICBzaG93SGFtYnVyZ2VyXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCByZW5kZXJIYW1idXJnZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItbmF2IGhlYWRlci1oYW1idXJnZXInIHN0eWxlPXt7bWFyZ2luTGVmdDogMjB9fT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjM0XCIgaGVpZ2h0PVwiMzRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+PHBhdGggZmlsbD1cIiMwMDAwMDBcIiBkPVwiTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6XCIgLz48L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHNob3dIYW1idXJnZXIpXG5cbiAgaWYgKHNob3dIYW1idXJnZXIpIHtcbiAgICBpbmxpbmVTdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17aW5saW5lU3R5bGV9XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJIYW1idXJnZXIoKX1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ3RvcCcgfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdzaWduYXR1cmUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2hvbWUnIH0pfVxuICAgICAgICAgIHN0eWxlPXt7Li4ubWVudVN0eWxlLCBtYXJnaW5SaWdodDogMjAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFN0ZXBoYW5pZSBTbWl0aCwgUHN5LkQuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e2lubGluZVN0eWxlfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnaG9tZScsIHNjcm9sbFRvOiAndG9wJyB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdzaWduYXR1cmUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2hvbWUnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBTdGVwaGFuaWUgU21pdGgsIFBzeS5ELlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ21lZXQnIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdoZWxwJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgTWVldCBEci4gU21pdGhcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdob21lJywgc2Nyb2xsVG86ICdwcmFjdGljZScgfSl9XG4gICAgICAgIGNsYXNzTmFtZT17Y24oJ25hdk1lbnUnLCAnbGluaycsIHsgJ25hdk1lbnUtLWFjdGl2ZSc6IGFjdGl2ZSA9PT0gJ2hlbHAnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBQcmFjdGljZSBBcmVhc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ3NlcnZpY2VzJyB9KX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbignbmF2TWVudScsICdsaW5rJywgeyAnbmF2TWVudS0tYWN0aXZlJzogYWN0aXZlID09PSAnc2VydmljZXMnIH0pfVxuICAgICAgICBzdHlsZT17bWVudVN0eWxlfVxuICAgICAgPlxuICAgICAgICBTZXJ2aWNlc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ2NsYXNzZXMnIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdjbGFzc2VzJyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgQ2xhc3Nlc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2hvbWUnLCBzY3JvbGxUbzogJ2NvbnRhY3QnIH0pfVxuICAgICAgICBjbGFzc05hbWU9e2NuKCduYXZNZW51JywgJ2xpbmsnLCB7ICduYXZNZW51LS1hY3RpdmUnOiBhY3RpdmUgPT09ICdjb250YWN0JyB9KX1cbiAgICAgICAgc3R5bGU9e21lbnVTdHlsZX1cbiAgICAgID5cbiAgICAgICAgQ29udGFjdFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uTmF2XG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2Zvb3RlcidcbiAgICA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgID5cbiAgICAgICAgICBTdGVwaGFuaWUgU21pdGgsIFBzeS5ELlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAgICAgICAgPlxuICAgICAgICAgIEFsaGFtYnJhIEJsdmRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgPlxuICAgICAgICAgICg5MTYpIDU1NS01NTU1XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xpbmsnXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAncmVzb3VyY2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgID5BZGRpdGlvbmFsIFJlc291cmNlczwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsaW5rJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2RvY3MnLCBzY3JvbGxUbzogMCB9KX0+Q2xpZW50IERvY3VtZW50czwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsaW5rJ1xuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ2ZlZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgPkZlZXMgZm9yIFNlcnZpY2VzPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uTmF2XG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JhY2tkcm9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8nIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50JyBpZD0ndG9wJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8tY29udGVudCc+XG4gICAgICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgIFwiQW5kIHRoZSBkYXkgY2FtZSB3aGVuIHRoZSByaXNrIHRvIHJlbWFpbiB0aWdodCBhcyBhIGJ1ZCB3YXMgbW9yZSBwYWluZnVsIHRoYW4gdGhlIHJpc2sgaXQgdG9vayB0byBibG9zc29tLlwiXG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8Zm9vdGVyPi0gQW5haXMgTmluXG4gICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWV0IGNhcmQtMicgaWQ9J21lZXQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlJz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdwcm9maWxlUGhvdG8gY2FyZC0xJyBzcmM9J3Jlcy9wcm9maWxlLmpwZycgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmlvJz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2Jpb1RpdGxlJz5cbiAgICAgICAgICAgICAgTWVldCBEci4gU3RlcGhhbmllIFNtaXRoXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdiaW9TdWJ0aXRsZSc+XG4gICAgICAgICAgICAgIENsaW5pY2FsIFBzeWNob2xvZ2lzdFxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAge21lZXRTdGVwaH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmFjdGljZUFyZWFzJyBpZD0ncHJhY3RpY2UnPlxuICAgICAgICAgIDxoMj5QcmFjdGljZSBBcmVhczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhRWF0aW5nQ29uY2VybnMnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIEVhdGluZzxiciAvPiBDb25jZXJuc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYUxpZmVzdHlsZScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgTGlmZXN0eWxlPGJyIC8+IENoYW5nZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWEgY2FyZC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFPdmVybGF5JyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYUltYWdlIGFyZWFUcmFuc2l0aW9ucycgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFUZXh0Jz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgTGlmZTxiciAvPiBUcmFuc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYSBjYXJkLTEnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYU92ZXJsYXknIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhSW1hZ2UgYXJlYVJlbGF0aW9uc2hpcHMnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhVGV4dCc+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFJlbGF0aW9uc2hpcDxiciAvPiBDaGFsbGVuZ2VzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhTWVkaWNhbFByb2JsZW1zJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBNZWRpY2FsPGJyIC8+IFByb2JsZW1zXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhIGNhcmQtMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcmVhT3ZlcmxheScgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FyZWFJbWFnZSBhcmVhU3RyZXNzJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJlYVRleHQnPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBTdHJlc3M8YnIgLz4gTWFuYWdlbWVudFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWRNb3JlJz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdyZWFkTW9yZSBidXR0b24nIG9uQ2xpY2s9eygpID0+IG9uTmF2KHsgbmFtZTogJ3ByYWN0aWNlJywgc2Nyb2xsVG86IDAgfSl9PlxuICAgICAgICAgICAgICBSRUFEIE1PUkVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2VzIGNhcmQtMicgaWQ9J3NlcnZpY2VzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXNEZXNjcmlwdGlvbic+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIFNlcnZpY2VzXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gYXVjdG9yIGJpYmVuZHVtIHF1YW0gYXQgZWZmaWNpdHVyLiBTZWQgcGhhcmV0cmEgaWQgdmVsaXQgbmVjIGVsZW1lbnR1bS4gTW9yYmkgdGluY2lkdW50IHNhcGllbiBuaXNpLCBuZWMgcG9ydHRpdG9yIGF1Z3VlIHNlbXBlciBhYy4gVmVzdGlidWx1bSBwdWx2aW5hciBjdXJzdXMgdXJuYSwgaWQgdmFyaXVzIG1hdXJpcyBwZWxsZW50ZXNxdWUgaW4uIEFlbmVhbiBhYyBuZXF1ZSBwdXJ1cy4gU2VkIGVnZXN0YXMgY29uc2VjdGV0dXIgaXBzdW0uIENyYXMgbm9uIHNlbXBlciBsaWd1bGEsIHF1aXMgc3VzY2lwaXQgb2Rpby4gQ3JhcyBkaWN0dW0gcGhhcmV0cmEgYXVjdG9yLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVhZE1vcmUnIHN0eWxlPXt7IG1hcmdpblRvcDogJ2F1dG8nLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnIH19PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25OYXYoeyBuYW1lOiAnc2VydmljZXMnLCBzY3JvbGxUbzogMCB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJFQUQgTU9SRVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlc0ltYWdlJz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjbGFzc2VzJyBpZD0nY2xhc3Nlcyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NsYXNzZXNEZXNjcmlwdGlvbic+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIE1vb2QgJiBGb29kXG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgR2V0IGluIG15IGJlbGx5XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFkTW9yZScgc3R5bGU9e3sgbWFyZ2luVG9wOiAnYXV0bycsIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcgfX0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbk5hdih7IG5hbWU6ICdjbGFzc2VzJywgc2Nyb2xsVG86IDAgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSRUFEIE1PUkVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0IGNhcmQtMicgaWQ9J2NvbnRhY3QnPlxuICAgICAgICAgIDxoMj5DaGFuZ2UgYmVnaW5zIHRvZGF5PC9oMj5cbiAgICAgICAgICA8aDM+UmVxdWVzdCBhIGNvbnN1bHRhdGlvbjwvaDM+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwaG9uZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsPlBob25lPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPGxhYmVsPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J3JlYWRNb3JlJz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24nPlNFTkQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLyoqIEhvbWUgKi9cblxuXG4vKiogUGFnZXMgKi9cblxuY29uc3QgUHJhY3RpY2VBcmVhcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPSdQcmFjdGljZSBBcmVhcydcbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17cHJhY3RpY2VBcmVhc31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPSdTZXJ2aWNlcydcbiAgICAgIC8+XG4gICAgICA8Q2FyZDFcbiAgICAgICAgYm9keT17c2VydmljZXN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbmNvbnN0IENsYXNzZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFBhZ2VUaXRsZVxuICAgICAgICB0aXRsZT17J0NsYXNzZXMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtjbGFzc2VzfVxuICAgICAgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuXG4gICk7XG59XG5cbmNvbnN0IENsaWVudERvY3VtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnQ2xpZW50IERvY3VtZW50cyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIGJvZHk9e2NsaWVudERvY3VtZW50c31cbiAgICAgIC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuY29uc3QgUmVzb3VyY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxQYWdlVGl0bGVcbiAgICAgICAgdGl0bGU9eydSZXNvdXJjZXMnfVxuICAgICAgLz5cbiAgICAgIDxDYXJkMVxuICAgICAgICBib2R5PXtyZXNvdXJjZXN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgKTtcbn1cblxuY29uc3QgRmVlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UGFnZVRpdGxlXG4gICAgICAgIHRpdGxlPXsnRmVlcyd9XG4gICAgICAvPlxuICAgICAgPENhcmQxXG4gICAgICAgIGJvZHk9e2ZlZXN9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgKTtcbn1cblxuXG5cbi8qKiBQYWdlcyBjb250ZW50cyAqL1xuXG5jb25zdCBtZWV0U3RlcGggPSAoXG4gIDxwPlxuICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIERvbmVjIHRlbXB1cyBlbGl0IGVnZXQgb3JjaSBwZWxsZW50ZXNxdWUsIG5lYyBmaW5pYnVzIGRvbG9yIGxhb3JlZXQuIEV0aWFtIGVuaW0gZXgsIHNvZGFsZXMgaWQgdG9ydG9yIHZlbCwgdmVzdGlidWx1bSB2ZWhpY3VsYSB2ZWxpdC4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gSW50ZWdlciB2aXRhZSBpcHN1bSBldCBtaSBzZW1wZXIgYWxpcXVhbS4gVml2YW11cyBlZ2V0IGdyYXZpZGEgc2VtLCBldCBjb25zZWN0ZXR1ciBlbGl0LiBWaXZhbXVzIHV0IGNvbnNlcXVhdCBtYWduYS4gTWFlY2VuYXMgaW4ganVzdG8gbWF4aW11cywgbWF0dGlzIG5pc2wgdml0YWUsIHZlbmVuYXRpcyBlbGl0LiBJbnRlZ2VyIGV1IGlwc3VtIG1hc3NhLiBTZWQgc2FnaXR0aXMgbGFjdXMgdmVsIGN1cnN1cyB0ZW1wb3IuIENyYXMgaWQgZWdlc3RhcyB0dXJwaXMuXG4gIDwvcD5cbik7XG5cbmNvbnN0IHByYWN0aWNlQXJlYXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8aDM+RWF0aW5nIENvbmNlcm5zPC9oMz5cbiAgICA8cD5cbiAgICAgIEluZGl2aWR1YWxzIG5vdGljaW5nIG1pbmRsZXNzLCBzdHJlc3MsIGVtb3Rpb25hbCwgb3IgYmluZ2UgZWF0aW5nIGJlaGF2aW9ycyBhcmUgd2VsY29tZSB0byBjb25zaWRlciBib3RoIGluZGl2aWR1YWwgYW5kIGNsYXNzLWJhc2VkIHRoZXJhcGllcyB3aXRoIG1lLiBNeSBhcHByb2FjaCB0byB0aGVzZSBjb25jZXJucyByZWNvZ25pemVzIHRoZSBjb21wbGV4IHJvbGUgZWF0aW5nIGNhbiBwbGF5IGFzIGEgbWVjaGFuaXNtIG9mIGNvcGluZyBmb3IgaW5kaXZpZHVhbCwgZmFtaWx5LCBhbmQgY3VsdHVyYWxseSBzeXN0ZW1pYyBpc3N1ZXMuIFdlIHdvcmsgdG9nZXRoZXIgdG8gYWNrbm93bGVkZ2UgdGhlIGZ1bGxuZXNzIG9mIHRoaXMgcm9sZSBhcyB3ZWxsIGFzIGl0J3MgaGlzdG9yeSwgd2hpbGUgaG9ub3JpbmcgdGhlIGRlc2lyZSB0aGF0IG1heSBleGlzdCB0byBjaGFuZ2UuIFRocm91Z2ggb3VyIHdvcmsgd2UgY2FuIGJlZ2luIHRvIGRldmVsb3AgbmV3IGFuZCBoZWFsdGhpZXIgY29waW5nIHN0cmF0ZWdpZXMgYXMgYSBuYXR1cmFsIG91dGNvbWUgb2YgaW5jcmVhc2VkIGF3YXJlbmVzcyBhbmQgc2VsZi1jb21wYXNzaW9uLiBJIHRhaWxvciBteSBhcHByb2FjaCB0byB0aGUgbmVlZHMgYW5kIHN0eWxlIG9mIHRoZSBpbmRpdmlkdWFsIHdpdGggd2hvbSBJIGFtIHdvcmtpbmcuXG48L3A+XG5cbiAgICA8aDM+TGlmZXN0eWxlIENoYW5nZXM8L2gzPlxuXG4gICAgPHA+XG4gICAgICBNb3N0IG9mIHVzIGNhbiByZWxhdGUgdG8gdGhlIHJ1bm5pbmcgbWVudGFsIGxpc3Qgb2YgdGhpbmdzIHdlIGtub3cgd2UgXCJzaG91bGRcIiBiZSBkb2luZyBpbiBvcmRlciB0byBiZSBoZWFsdGhpZXIuIE1heWJlIHRoaXMgaXMgbW92aW5nIG91ciBib2RpZXMgbW9yZSwgZWF0aW5nIGRpZmZlcmVudGx5LCBpbXByb3ZpbmcgIHNsZWVwIGhhYml0cywgb3IgZGlzY29ubmVjdGluZyBmcm9tIHRlY2hub2xvZ3kuIE1heWJlIGl0IGNvdWxkIGJlIHRoZXNlIHRoaW5ncyBwbHVzIG1hbnkgbW9yZSEgV2hpbGUgY2VydGFpbmx5IGV4Y2VsbGVudCBoYWJpdHMsIGxvb2tpbmcgYXQgYSBsaXN0IG9mIHBlcnNvbmFsIHdlbGxuZXNzIFwidG8gZG9zXCIgY2FuIGJlIG92ZXJ3aGVsbWluZy4gSW4gZmFjdCwgd2Ugb2Z0ZW4gYXZvaWQgdGhpbmtpbmcgYWJvdXQgdGhlc2UgaGVhbHRoeSBsaXZpbmcgaXRlbXMgYmVjYXVzZSBpdCBjYW4gZmVlbCBob3BlbGVzcy4gVG9nZXRoZXIgd2UgY2FuIGNyZWF0ZSBhIHBsYW4gb2Ygc21hbGwgc3RlcHMgdG8gd29yayB0b3dhcmRzIGNvbm5lY3RpbmcgYmVoYXZpb3IgY2hhbmdlcyB3aXRoIHlvdXIgZGVlcGVzdCB2YWx1ZXMuIFRoaW5ncyB0aGF0IG1heSBoYXZlIGZlbHQgZm9yY2VkIGluIHRoZSBwYXN0IGNhbiBiZWNvbWUgdGhpbmdzIHdlIGFyZSBlYWdlciBmb3IuIEkgd2lsbCBsZXZlcmFnZSBteSB0cmFpbmluZyBpbiBMaWZlc3R5bGUgTWVkaWNpbmUgdG8gaGVscCBzZXQgbWFuYWdlYWJsZSBhbmQgcmVzZWFyY2ggc3VwcG9ydGVkIGFpbXMgdG8gcHJvZHVjZSByZWFsIGltcHJvdmVtZW50cyBpbiB5b3VyIGhlYWx0aC5cbjwvcD5cblxuICAgIDxoMz5QaGFzZSBvZiBMaWZlIElzc3Vlcy9MaWZlIFRyYW5zaXRpb25zPC9oMz5cbiAgICA8cD5cbiAgICAgIFRob3VnaCB0aGUgcGhyYXNlLCBcInRoZSBvbmx5IHRoaW5nIGNvbnN0YW50IGlzIGNoYW5nZVwiIGlzIG9uZSBmYW1pbGlhciB0byBtYW55IG9mIHVzLCB0aGlzIGNhbiBiZSBsaXR0bGUgY29tZm9ydCBkdXJpbmcgdGhlIHR1cm1vaWwgb2YgYSBzaWduaWZpY2FudCB0cmFuc2l0aW9uLiBDaGFuZ2VzIGluIGxpZmUgY2lyY3Vtc3RhbmNlcyBjYW4gaW1wYWN0IHVzIG9uIGV2ZXJ5IGxldmVsIG9mIG91ciBiZWluZyBhbmQgZXh0ZXJuYWwgbGlmZS4gU2Vla2luZyB0aGVyYXB5IGR1cmluZyB0aGVzZSB0aW1lcyBjYW4gYmUgYm90aCBhbmNob3IgYW5kIGd1aWRlIGxpZ2h0LiBJIHdpbGwgc3VwcG9ydCB5b3UgdG8gcHJvY2VzcyB0aGUgbG9zcyBvZiBob3cgdGhpbmdzIGhhdmUgYmVlbi4gV2hlbiB5b3UgYXJlIHJlYWR5LCB3ZSB3aWxsIHNldCBjb25zY2lvdXNseSBkZXZlbG9wZWQgZ29hbHMgZm9yIHRoZSBwaGFzZSBvZiBsaWZlIHRoYXQgeW91IGZpbmQgeW91cnNlbGYgaW4gbm93LiBXZSB3aWxsIHdvcmsgdG9nZXRoZXIgdG8gaWRlbnRpZnkgaGVhbHRoeSBjb3JlIGNvbXBvbmVudHMgb2Ygd2hvIHlvdSBhcmUgZXZvbHZpbmcgdG8gYmUgYW5kIGNlbnRlciBvdXIgYXR0ZW50aW9uIHRvIG51cnR1cmUgdGhpcyBncm93dGguIFRoZXJlIGlzIG5vIHNldCB0aW1lbGluZSBvZiBob3cgbG9uZyBhbiBhZGp1c3RtZW50IHBlcmlvZCBsYXN0cy4gSSB3aWxsIGhlbHAgeW91IHRvIG1vdmUgaW50byB0aGUgbmV4dCBwYXJ0IG9mIHlvdXIgbGlmZSBpbiB0aGUgaGVhbHRoZnVsIHdheXMsIGFzIHF1aWNrbHkgYXMgaXMgcmVhc29uYWJsZSwgYW5kIGluIGNvbXBsZXRlIHJlc3BlY3QgZm9yIHlvdXIgb3duIHBhY2UuXG48L3A+XG5cbiAgICA8aDM+UmVsYXRpb25zaGlwIENoYWxsZW5nZXM8L2gzPlxuICAgIDxwPlxuICAgICAgUm9tYW50aWMsIGZhbWlseSwgc29jaWFsLCBhbmQgb2NjdXBhdGlvbmFsIHJlbGF0aW9uc2hpcHMgY2FuIGFsbCBiZSBzb3VyY2VzIG9mIHNpZ25pZmljYW50IHBsZWFzdXJlIGFuZCBjb25zZXF1ZW50bHksIHNpZ25pZmljYW50IHBhaW4uIFRoZXJlIGFyZSBhIG11bHRpdHVkZSBvZiByZWFzb25zIHJlbGF0aW9uc2hpcHMgY2FuIGJlY29tZSB0cm91YmxlZC4gTWFueSBvZiB0aGUgcm9vdHMgb2YgdGhlc2UgcmVhc29ucyBjYW4gYmUgdHJhY2VkIHRvIGNvbW11bmljYXRpb24gY2xhcml0eS4gV2hpbGUgd2UgY2Fubm90IGNoYW5nZSBvdGhlciBwZW9wbGUsIHdlIGNhbiBpZGVudGlmeSBwZXJzb25hbCBxdWFsaXRpZXMgaW4gb3Vyc2VsdmVzIHRoYXQgd2Ugd2lzaCB0byBjaGFuZ2UgZm9yIHRoZSB3ZWxsYmVpbmcgb2YgYSBjdXJyZW50IG9yIGZ1dHVyZSByZWxhdGlvbnNoaXAuIFdvcmtpbmcgdG93YXJkcyBpZGVudGlmeWluZyB0aGVzZSBhcmVhcywgY3JlYXRpbmcgbWluZGZ1bCBhd2FyZW5lc3MgYXJvdW5kIHRoZW0sIGFuZCBtYWtpbmcgdmFsdWVzIGJhc2VkIGNoYW5nZXMgY2FuIHByb3ZpZGUgYm90aCBwZXJzb25hbCBiZW5lZml0cyBhbmQgaW1wcm92ZW1lbnRzIHRvIHRoZSByZWxhdGlvbnNoaXAuIFdlIGNhbiB3b3JrIHRvZ2V0aGVyIHRvIGlkZW50aWZ5IGFuZCBvcHRpbWl6ZSB0aGVzZSBjaGFuZ2VzIGluIGEgY29tcGFzc2lvbmF0ZSBhbmQgcmVzcGVjdGZ1bCBlbnZpcm9ubWVudCB3aGlsZSBwcmlvcml0aXppbmcgZWZmZWN0aXZlIGFuZCBjbGVhciBjb21tdW5pY2F0aW9uIGFzIHRoZSBjb3JuZXJzdG9uZSB0byBpbXByb3ZlZCByZWxhdGlvbnNoaXBzLlxuPC9wPlxuICAgIDxoMz5NZWRpY2FsIFByb2JsZW1zPC9oMz5cbiAgICA8cD5cbiAgICAgIFRoZXJlIGlzIG5vIGRvdWJ0IHRoYXQgb3VyIHBoeXNpY2FsIHdlbGxiZWluZyBpbXBhY3RzIG91ciBwc3ljaG9sb2dpY2FsIHdlbGxiZWluZyBhbmQgdmljZSB2ZXJzYS4gV2hldGhlciB5b3UgYXJlIGxvb2tpbmcgZm9yIHN1cHBvcnQgaW4gaW1wcm92aW5nIHlvdXIgbWFuYWdlbWVudCBvZiBhIG1lZGljYWwgcHJvYmxlbSwgaGFuZGxpbmcgdGhlIHN0cmVzcyBhcm91bmQgaXQsIG9yIGJlbGlldmUgdGhlcmUgbWF5IGJlIGxpZmVzdHlsZSBjaGFuZ2VzIHRoYXQgd2lsbCByZXZlcnNlIHRoZSBjb25kaXRpb24sIEkgd291bGQgYmUgaGFwcHkgdG8gc3VwcG9ydCB0aGlzIGFzcGVjdCBvZiB5b3VyIGhlYWx0aC4gSSBhbSBhIHRyYWluZWQgaGVhbHRoIHBzeWNob2xvZ2lzdCBhbmQgd29yayByZWd1bGFybHkgd2l0aCBib3RoIGNocm9uaWMgYW5kIGFjdXRlIG1lZGljYWwgY29uZGl0aW9ucy4gSSBoYXZlIHBlcnNvbmFsIGFuZCBwcm9mZXNzaW9uYWwgZXhwZXJpZW5jZSB3aXRoIHRoZSBpbXBhY3RzIHBoeXNpY2FsIGhlYWx0aCBjYW4gaGF2ZSBub3Qgb25seSBvbiBvbmVzZWxmLCBidXQgYWxzbyBvbiB0aG9zZSBhcm91bmQgdXMuIEkgYmVsaWV2ZSBzdXBwb3J0IGNhbiBtYWtlIGEgc3Vic3RhbnRpdmUgZGlmZmVyZW5jZSBpbiBtYW5hZ2luZyBhIGhlYWx0aCBjb25jZXJuIGFzIHdlbGwgYXMgdGhlIGVtb3Rpb25hbCBhbmQgc29jaWFsIGltcGFjdHMgb2YgdGhpcy4gSSB3aWxsIHdvcmsgd2l0aCB5b3UgdG8gYWNjZXB0IHRob3NlIHJlYWxpdGllcyB0aGF0IGFyZSB1bmNoYW5naW5nIGFzIHdlbGwgYXMgcmVjb2duaXplIG9wcG9ydHVuaXRpZXMgZm9yIHBvc2l0aXZlIGdyb3d0aC5cbjwvcD5cbiAgICA8aDM+RXhjZXB0aW9ucyB0byB0aGUgYWJvdmU8L2gzPlxuICAgIDxwPlxuICAgICAgRHVlIHRvIHRoZSBwYXJ0IHRpbWUgbmF0dXJlIG9mIG15IHByaXZhdGUgcHJhY3RpY2UsIEkgYW0gdW5mb3J0dW5hdGVseSB1bmFibGUgYXQgdGhpcyB0aW1lIHRvIHdvcmsgd2l0aCB0aG9zZSB3aG8gaGF2ZSBhY3RpdmUgYW5kIGFjdXRlIHN1aWNpZGFsIG9yIGhvbWljaWRhbCB0aG91Z2h0cyBvciBhcmUgZW5nYWdpbmcgaW4gc2VsZi1oYXJtaW5nIGJlaGF2aW9ycy4gV2hpbGUgaXQgaXMgbm90IHVuY29tbW9uIGZvciB0aGVzZSB0aG91Z2h0cyBvciBiZWhhdmlvcnMgdG8gYmUgcGFydCBvZiB0aGUgbGl2ZXMgb2YgdGhvc2Ugd2hvIGZhbGwgaW50byBvbmUgb3IgbW9yZSBvZiB0aGUgY2F0ZWdvcmllcyBhYm92ZSwgSSBhbSB1bmFibGUgdG8gYmUgYXZhaWxhYmxlIHdpdGggdGhlIGNvbnNpc3RlbmN5IG9yIHJlZ3VsYXJpdHkgdGhhdCBpcyBuZWVkZWQgdG8gaGVscCBzdXBwb3J0IGFjdGl2ZSBhbmQgYWN1dGUgc2FmZXR5IGNvbmNlcm5zLiBTaG91bGQgYW4gYWN0aXZlIGFuZCBhY3V0ZSBzYWZldHkgY29uY2VybiBvY2N1ciBkdXJpbmcgb3VyIHdvcmsgdG9nZXRoZXIsIEkgd2lsbCB3b3JrIHRvZ2V0aGVyIHdpdGggeW91IHRvIGZpbmQgYXBwcm9wcmlhdGUgY2FyZSB0aGF0IGNhbiBtZWV0IHlvdXIgbmVlZHMuIEl0IGlzIGxpa2VseSB0aGF0IHdpdGggc3RhYmlsaXphdGlvbiB0aGVyZSBpcyBwb3RlbnRpYWwgdG8gcmV0dXJuIHRvIG91ciB3b3JrIHRvZ2V0aGVyIGlmIHRoYXQgaXMgZGV0ZXJtaW5lZCB0byBiZSBpbiB5b3VyIGJlc3QgaW50ZXJlc3QuIEkgYW0gaGFwcHkgdG8gZGlzY3VzcyB0aGlzIGluIGZ1cnRoZXIgZGV0YWlsIGFuZCB3ZWxjb21lIGFueSBxdWVzdGlvbnMgb3IgY29uY2VybnMuXG4gICAgPC9wPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3Qgc2VydmljZXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8cD5cbiAgICAgIEkgcHJvdmlkZSBib3RoIGluZGl2aWR1YWwgdGhlcmFweSBhcHBvaW50bWVudHMgYXMgd2VsbCBhcyBjbGFzc2VzLlxuICAgIDwvcD5cbiAgICA8aDM+VGVsZXBob25lIENvbnN1bHQ8L2gzPlxuICAgIDxwPlxuICAgICAgQXMgb3VyIGZpcnN0IGNvbnRhY3QgZm9yIGVpdGhlciBvZiB0aGVzZSBzZXJ2aWNlcyBJIG9mZmVyIGEgY29tcGxlbWVudGFyeSAxNS1taW51dGUgcGhvbmUgY29uc3VsdGF0aW9uLiBUaGlzIGlzIGFuIG9wcG9ydHVuaXR5IGZvciB1cyB0byBjb25uZWN0IGFib3V0IHRoZSBpc3N1ZXMgdGhhdCBicmluZyB5b3UgaW50byBjYXJlLCBhbmQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgd29ya2luZyB0b2dldGhlciBpcyB0aGUgYmVzdCBmaXQgZm9yIHlvdXIgbmVlZHMuIEkgY2FuIGFuc3dlciBhbnkgcXVlc3Rpb25zIHRoYXQgeW91IG1heSBoYXZlIGFib3V0IGNvbWluZyBpbnRvIGNhcmUgYW5kIHNldCB1cCB5b3VyIGZpcnN0IGFwcG9pbnRtZW50IG9yIGNsYXNzLjxiciAvPlxuICAgICAgey8qIDxpPjE1LW1pbiBpbml0aWFsIHRlbGVwaG9uZSBjb25zdWx0JiN4MjAxNDsgZnJlZSBvZiBjaGFyZ2U8L2k+ICovfVxuICAgIDwvcD5cbiAgICA8aDM+SW5pdGlhbCBBcHBvaW50bWVudDwvaDM+XG4gICAgPHA+XG4gICAgICBBbiBpbml0aWFsIGluZGl2aWR1YWwgdGhlcmFweSBhcHBvaW50bWVudCBpcyBhIDYwLW1pbnV0ZSBhcHBvaW50bWVudC4gRHVyaW5nIHRoaXMgYXBwb2ludG1lbnQgSSB3aWxsIHJldmlldyB5b3VyIGNvbXBsZXRlIGludGFrZSBmb3JtIHdpdGggeW91IHRvIGVuc3VyZSB0aGF0IEkgaGF2ZSBhbiBhcHByb3ByaWF0ZSB1bmRlcnN0YW5kaW5nIG9mIHNvbWUgb2YgeW91ciBoaXN0b3J5LCB3aGF0IGJyaW5ncyB5b3UgaW50byBjYXJlLCBhbmQgeW91ciBnb2FscyBmb3Igb3VyIHdvcmsgdG9nZXRoZXIuIFdlIHdpbGwgYWxzbyB1c2UgdGhpcyBhcHBvaW50bWVudCB0byBjcmVhdGUgc29tZSBpbml0aWFsIGdvYWxzIGZvciBjYXJlIGFuZCB0byBzZXQgdXAgb3VyIGV4cGVjdGF0aW9ucyBmb3IgdHJlYXRtZW50LlxuICAgICAgPGJyIC8+XG4gICAgICB7LyogPGk+NjAtbWluIGluaXRpYWwgaW5kaXZpZHVhbCBhcHBvaW50bWVudCYjeDIwMTQ7ICQxNTAgKjwvaT4gKi99XG4gICAgPC9wPlxuICAgIDxoMz5SZXR1cm4gQXBwb2ludG1lbnRzPC9oMz5cbiAgICA8cD5cbiAgICAgIFJldHVybiBhcHBvaW50bWVudHMgYXJlIDUwLW1pbnV0ZSBhcHBvaW50bWVudHMuIER1cmluZyByZXR1cm4gYXBwb2ludG1lbnRzIHdlIHdpbGwgd29yayB0b2dldGhlciBvbiB5b3VyIGdvYWxzIGFuZCBJIHdpbGwgc3VwcG9ydCB5b3UgdGhyb3VnaCB0aGUgcHJvY2Vzcy4gV2Ugd2lsbCByZWd1bGFybHkgY2hlY2sgaW4gYWJvdXQgdGhlIHByb2dyZXNzIG9mIGNhcmUgYW5kIG1ha2UgYWRqdXN0bWVudHMgYXMgbmVlZGVkIHRvIGVuc3VyZSB0aGF0IHdlIGFyZSB3b3JraW5nIGVmZmVjdGl2ZWx5IHRvZ2V0aGVyLlxuICAgICAgPGJyIC8+XG4gICAgICB7LyogPGk+NTAtbWluIHJldHVybiBpbmRpdmlkdWFsIGFwcG9pbnRtZW50JiN4MjAxNDsgJDE1MCAqPC9pPiAqL31cbiAgICA8L3A+XG4gICAgPGgzPkNsYXNzZXM8L2gzPlxuICAgIDxwPlxuICAgICAgQ2xhc3NlcyBhcmUgOTAgbWludXRlcyBpbiBsZW5ndGguIER1ZSB0byBzcGFjZSBuZWVkZWQsIGNsYXNzZXMgYXJlIGhlbGQgYXQgYSBuZWFyYnkgbG9jYXRpb24gc2VwYXJhdGUgZnJvbSB0aGUgbWFpbiB0aGVyYXB5IG9mZmljZS4gTW9yZSBpbmZvcm1hdGlvbiBhYm91dCBjbGFzcyBhbmQgY2xhc3MgY29udGVudCBjYW4gYmUgZm91bmQgdW5kZXIgdGhlIFwiQ2xhc3Nlc1wiIHRhYi4gVGhvdWdoIGNsYXNzZXMgdGFrZSBwbGFjZSBvdmVyIDQgc2Vzc2lvbnMsIHRoZSBmdWxsIGZlZSBtdXN0IGJlIHBhaWQgaW4gYWR2YW5jZSBvZiB0aGUgZmlyc3Qgc2Vzc2lvbi4gQWZ0ZXIgdGhpcyBwYXltZW50LCBubyBhZGRpdGlvbmFsIGNoYXJnZXMgYXJlIGluY3VycmVkIGZvciB0aGUgcmVtYWluZGVyIG9mIHRoZSBjbGFzc2VzIHVubGVzcyBhbiBhZGRpdGlvbmFsIHNlcnZpY2UgaXMgcmVxdWVzdGVkIG9yIHByb3ZpZGVkLlxuICAgICAgPGJyIC8+XG4gICAgICB7LyogPGk+NC1zZXNzaW9uICgzNjAtbWluKSBjbGFzcyBzZXJpZXMmI3gyMDE0OyAkMTYwICo8L2k+ICovfVxuICAgIDwvcD5cbiAgICA8aDM+VGVsZU1lbnRhbCBIZWFsdGg8L2gzPlxuICAgIDxwPlxuICAgICAgT24gb2NjYXNpb24gaXQgbWF5IGJlIGluZGljYXRlZCBmb3IgdXMgdG8gZW5nYWdlIGluIHRlbGUtaGVhbHRoIGVpdGhlciBvdmVyIHRoZSBwaG9uZSBvciB0aHJvdWdoIHZpZGVvIGNvbW11bmljYXRpb24uIFRoZXNlIHNlcnZpY2VzIGFyZSBvZmZlcmVkIHRvIGluZGl2aWR1YWxzIG9ubHkgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gaW5pdGlhbGx5IGVzdGFibGlzaGVkIGluLXBlcnNvbiB0aHJvdWdoIGF0IGxlYXN0IG9uZSBpbi1wZXJzb24gYXBwb2ludG1lbnQuIER1ZSB0byBsaWNlbnNpbmcgcmVxdWlyZW1lbnRzLCBJIGFtIHVuYWJsZSB0byBwcm92aWRlIHRoZXNlIHNlcnZpY2VzIHRvIGFueW9uZSBvdXQtb2Ytc3RhdGUgb3IgY291bnRyeSBhdCB0aGUgdGltZSBvZiBzZXJ2aWNlLiBUaGVyZSBhcmUgYSB2YXJpZXR5IG9mIHBsYXRmb3JtcyBhdmFpbGFibGUgZm9yIHRoaXMgc2VydmljZSBhbmQsIHRob3VnaCBjb252ZW5pZW50LCBpdCBpcyBpbXBvcnRhbnQgdG8gYmUgYXdhcmUgdGhhdCB0aGV5IGFyZSBub3QgSElQQUEgY29tcGxpYW50LiBDb21wbGV0aW5nIHRoZSBJbmZvcm1lZCBDb25zZW50IGZvcm0gYWNrbm93bGVkZ2VzIHlvdXIgdW5kZXJzdGFuZGluZyBvZiB0aGlzIGFuZCBhY2NlcHRhbmNlIG9mIHRoZSByaXNrIHNob3VsZCB3ZSB1dGlsaXplIHRoaXMgZm9ybWF0IG9mIGNhcmUuXG4gICAgICA8YnIgLz5cbiAgICAgIHsvKiA8aT41IHRvIDI1IG1pbnV0ZXMmI3gyMDE0OyAkNzUgKjwvaT48YnIgLz4gKi99XG4gICAgICB7LyogPGk+MjYtNTAgbWludXRlcyYjeDIwMTQ7ICQxNTAgKjwvaT4gKi99XG4gICAgPC9wPlxuICAgIDxiciAvPlxuICAgIDxwPlxuICAgICAgPGk+XG4gICAgICAgICogWW91IHdpbGwgYmUgZXhwZWN0ZWQgdG8gcGF5IGZvciBlYWNoIHNlc3Npb24gYmVmb3JlL2F0IHRoZSBzdGFydCBvZiBzZXNzaW9uLCB1bmxlc3Mgd2UgYWdyZWUgb3RoZXJ3aXNlLiBQYXltZW50IG1heSBiZSBtYWRlIHRocm91Z2ggY2FzaCwgY2hlY2ssIG9yIEhJUEFBIGNvbXBsaWFudCBhcHBsaWNhdGlvbi4gVXNlIG9mIHRoZSBISVBBQSBjb21wbGlhbnQgYXBwbGljYXRpb24gaW5jdXJzIGFuIGFkZGl0aW9uYWwgJDUgY2hhcmdlLiBJIGFtIGFuIFwib3V0IG9mIG5ldHdvcmsgcHJvdmlkZXJcIiBmb3IgaW5zdXJhbmNlIG5ldHdvcmtzIGJ1dCB3aWxsIHByb3ZpZGUgeW91IGEgU3VwZXJiaWxsIHdoaWNoIHlvdSBtYXkgdXNlIHRvIHJlcXVlc3QgcmVpbWJ1cnNlbWVudC5cbiAgICAgIDwvaT5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBmZWVzID0gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHA+XG4gICAgICBQbGVhc2Ugbm90ZSB0aGF0IHlvdSB3aWxsIGJlIGV4cGVjdGVkIHRvIHBheSBmb3IgZWFjaCBzZXNzaW9uIGJlZm9yZS9hdCB0aGUgc3RhcnQgb2Ygc2Vzc2lvbiwgdW5sZXNzIHdlIGFncmVlIG90aGVyd2lzZS4gUGF5bWVudCBtYXkgYmUgbWFkZSB0aHJvdWdoIGNhc2gsIGNoZWNrLCBvciBISVBBQSBjb21wbGlhbnQgYXBwbGljYXRpb24uIFVzZSBvZiB0aGUgSElQQUEgY29tcGxpYW50IGFwcGxpY2F0aW9uIGluY3VycyBhbiBhZGRpdGlvbmFsICQ1IGNoYXJnZS4gSSBhbSBhbiBcIm91dCBvZiBuZXR3b3JrIHByb3ZpZGVyXCIgZm9yIGluc3VyYW5jZSBuZXR3b3JrcyBidXQgd2lsbCBwcm92aWRlIHlvdSBhIFN1cGVyYmlsbCB3aGljaCB5b3UgbWF5IHVzZSB0byByZXF1ZXN0IHJlaW1idXJzZW1lbnQuXG4gICAgPC9wPlxuICAgIDxoMz5UZWxlcGhvbmUgQ29uc3VsdDwvaDM+XG4gICAgPHA+XG4gICAgICA8aT4xNS1taW4gaW5pdGlhbCB0ZWxlcGhvbmUgY29uc3VsdCYjeDIwMTQ7IGZyZWUgb2YgY2hhcmdlPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+SW5pdGlhbCBBcHBvaW50bWVudDwvaDM+XG4gICAgPHA+XG4gICAgICA8aT42MC1taW4gaW5pdGlhbCBpbmRpdmlkdWFsIGFwcG9pbnRtZW50JiN4MjAxNDsgJDE1MDwvaT5cbiAgICA8L3A+XG4gICAgPGgzPlJldHVybiBBcHBvaW50bWVudHM8L2gzPlxuICAgIDxwPlxuICAgICAgPGk+NTAtbWluIHJldHVybiBpbmRpdmlkdWFsIGFwcG9pbnRtZW50JiN4MjAxNDsgJDE1MDwvaT5cbiAgICA8L3A+XG4gICAgPGgzPkNsYXNzZXM8L2gzPlxuICAgIDxwPlxuICAgICAgPGk+NC1zZXNzaW9uICgzNjAtbWluKSBjbGFzcyBzZXJpZXMmI3gyMDE0OyAkMTYwPC9pPlxuICAgIDwvcD5cbiAgICA8aDM+VGVsZU1lbnRhbCBIZWFsdGg8L2gzPlxuICAgIDxwPlxuICAgICAgPGk+NSB0byAyNSBtaW51dGVzJiN4MjAxNDsgJDc1PC9pPjxiciAvPlxuICAgICAgPGk+MjYtNTAgbWludXRlcyYjeDIwMTQ7ICQxNTA8L2k+XG4gICAgPC9wPlxuICAgIDxiciAvPlxuICAgIDxwPlxuICAgICAgPGk+XG4gICAgICA8L2k+XG4gICAgPC9wPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgY2xhc3NlcyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxoMz5cbiAgICAgIE1vb2QgJiBGb29kXG4gICAgPC9oMz5cbiAgICA8cD5cbiAgICAgIE1vb2QgJiBGb29kIGlzIGEgY2xhc3MgZGVzaWduZWQgZm9yIGluZGl2aWR1YWxzIHN0cnVnZ2xpbmcgd2l0aCBvdmVyZWF0aW5nLCBtaW5kbGVzcyBlYXRpbmcsIHN0cmVzcyBlYXRpbmcsIGVtb3Rpb25hbCBlYXRpbmcsIHNoYW1lIGFyb3VuZCBlYXRpbmcsIG9yIGJpbmdlIGVhdGluZy4gVGhlIGNvdXJzZSBpcyBzdHJ1Y3R1cmVkIGludG8gNCBjbGFzc2VzIGVhY2ggbGFzdGluZyA5MCBtaW51dGVzLiBUaGUgY2xhc3MgY2VudGVycyBvbiBwcmVzZW50ZWQgbWF0ZXJpYWwgdGhvdWdoIHF1ZXN0aW9ucyBhbmQgcGFydGljaXBhdGlvbiBhcmUgd2VsY29tZSBhbmQgZW5jb3VyYWdlZC4gQ2xhc3MgbWF0ZXJpYWxzIGFsc28gaW5jbHVkZSBoYW5kb3V0cyBhbmQgYXQtaG9tZSBwcmFjdGljZSBleGVyY2lzZXMuIER1cmluZyB0aGUgY291cnNlIG9mIHRoZSBjbGFzc2VzIHdlIHdpbGwgY292ZXIgdG9waWNzIGluY2x1ZGluZzogd2hhdCBlbW90aW9uYWwgZWF0aW5nIGlzLCBjdWx0dXJhbCBpbXBsaWNhdGlvbnMsIGVudmlyb25tZW50YWwgaW1wYWN0cywgc2V0IHBvaW50IHRoZW9yeSwgZW1vdGlvbmFsIHZzIHBoeXNpY2FsIGh1bmdlciwgYmluZ2UgZWF0aW5nIGN5Y2xlLCBpbnRlcnBlcnNvbmFsIGR5bmFtaWNzIGFyb3VuZCBmb29kLCBzZWxmLXRhbGssIGJlaGF2aW9yIGFuYWx5c2lzICYgYmVoYXZpb3IgY2hhbmdlLCBtaW5kZnVsIGVhdGluZywgbG92aW5nIGxpbWl0cywgc2VsZi1jb21wYXNzaW9uLCBtYW5hZ2luZyBkaWZmaWN1bHQgZW1vdGlvbnMsIGhhYml0IGZvcm1hdGlvbiwgc3RhZ2VzIG9mIGNoYW5nZSwgYW5kIGhlYWx0aHkgZWF0aW5nIGd1aWRlbGluZXMuIEJ5IHRoZSBlbmQgb2YgdGhlIGNsYXNzIHNlcmllcyBwYXJ0aWNpcGFudHMgd2lsbCBiZSBhYmxlIHRvIHJlY29nbml6ZSBvcHBvcnR1bml0aWVzIGZvciwgcHJlcGFyZSBmb3IsIGFuZCBtYWtlIHBvc2l0aXZlIGNoYW5nZXMgaW4gdGhlaXIgcmVsYXRpb25zaGlwcyB3aXRoIHRoZW1zZWx2ZXMsIGZvb2QsIGFuZCB0aGVpciBlbnZpcm9ubWVudC5cbiAgICA8L3A+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCByZXNvdXJjZXMgPSAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8cD5cbiAgICAgIFRoZSBiZWxvdyBhcmUgcmVzb3VyY2VzIHRoYXQgSSBmaW5kIHRvIGJlIGNsaW5pY2FsbHkgdmFsdWFibGUuIEkgaGF2ZSBubyBhZmZpbGlhdGlvbiB3aXRoIGFueSBvZiB0aGUgaW5kaXZpZHVhbHMgb3IgZW50aXRpZXMgaW5kaWNhdGVkIGJlbG93LiBUaGVzZSByZXNvdXJjZXMgYXJlIHByb3ZpZGVkIHB1cmVseSBkdWUgdG8gbXkgcGVyY2VwdGlvbiBvZiB0aGVpciBjbGluaWNhbCBiZW5lZml0LiBJIHJlY2VpdmUgbm8gY29tcGVuc2F0aW9uIG9mIGFueSBraW5kIGZvciBzaGFyaW5nIHRoZXNlIHJlc291cmNlcy5cbiAgICA8L3A+XG4gICAgPGgzPldlYnBhZ2VzPC9oMz5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2FueGlldHljYW5hZGEuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkFueGlldHkgQ2FuYWRhPC9hPiBpcyBhbiBleGNlbGxlbnQgd2ViIHJlc291cmNlIGZvciBldmlkZW5jZSBiYXNlZCBpbmZvcm1hdGlvbiBhYm91dCBhbnhpZXR5LiBUaGUgd2Vic2l0ZSBpcyB3cml0dGVuIGluIGNsZWFyIGxhbmd1YWdlIHRoYXQgaXMgdGhvdWdodGZ1bCwgZWFzeSB0byB1bmRlcnN0YW5kLCBhbmQgaGVscGZ1bC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXBzLmFueGlldHljYW5hZGEuY29tL2NvdXJzZXMvbXktYW54aWV0eS1wbGFuLW1hcC1mb3ItYWR1bHRzL1wiIHRhcmdldD1cIl9ibGFua1wiPk15IEFueGlldHkgUGxhbjwvYT4gaXMgdGhlIG9ubGluZSBjb3Vyc2UgYXNzb2NpYXRlZCB3aXRoIEFueGlldHkgQ2FuYWRhLiBJdCBpcyBhIGZyZWUgY291cnNlIHRoYXQgcHJvdmlkZXMgZXhjZWxsZW50IGluZm9ybWF0aW9uIGluIGFkZGl0aW9uIHRvIHByYWN0aWNhbCB0b29scyBhbmQgcHJhY3RpY2VzIGZvciBtYW5hZ2luZyBhbnhpZXR5IGFuZCBhbnhpZXR5LWJhc2VkIGNvbmRpdGlvbnMuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+QnJlbmUgQnJvd248L2E+IGlzIGFuIGF1dGhvciwgcmVzZWFyY2hlciwgYW5kIHNwZWFrZXIgdGhhdCBJIGhpZ2hseSByZWNvbW1lbmQuIFRoZSBsaW5rIGlzIHRvIGhlciBtYWluIHdlYnBhZ2UuIEJlbG93IGFyZSBzcGVjaWZpYyByZXNvdXJjZXMgb2YgaGVycyB0aGF0IEkgcmVjb21tZW5kLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dnc2MuYmVya2VsZXkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBHcmVhdGVyIEdvb2QgU2NpZW5jZSBDZW50ZXI8L2E+LSBCZXJrZWxleSBpcyBhIGNlbnRlciBvZiByZXNlYXJjaCBhbmQgaW5ub3ZhdGlvbiBmb2N1c2luZyBvbiBtYWtpbmcgcG9zaXRpdml0eSBhbmQgcG9zaXRpdmUgY2hhbmdlIGFjY2Vzc2libGUgdG8gYWxsLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5lZHgub3JnL2NvdXJzZS90aGUtc2NpZW5jZS1vZi1oYXBwaW5lc3MtMFwiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBTY2llbmNlIG9mIEhhcHBpbmVzczwvYT4gaXMgdGhlIG9ubGluZSBjb3Vyc2UgZnJvbSB0aGUgR3JlYXRlciBHb29kIFNjaWVuY2UgQ2VudGVyLiBJdCBpcyBhIGZyZWUgOC13ZWVrIGNvdXJzZSB0aGF0IHByb3ZpZGVzIHRvb2xzIHRvIGhhcHBpZXIgZXhwZXJpZW5jZXMgYW5kIGdyZWF0ZXIgbWVhbmluZyBpbiBsaWZlLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dnaWEuYmVya2VsZXkuZWR1L1wiIHRhcmdldD1cIl9ibGFua1wiPkdyZWF0ZXIgR29vZCBpbiBBY3Rpb248L2E+IHByb3ZpZGVzIGRvYWJsZSBwcmFjdGljZXMgZm9yIG1ha2luZyBjb25jcmV0ZSBhbmQgaW1wYWN0ZnVsIHBvc2l0aXZlIGNoYW5nZXNcbiAgICA8L3A+XG5cbiAgICA8aDM+VmlkZW9zPC9oMz5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50ZWQuY29tL3RhbGtzL2JyZW5lX2Jyb3duX29uX3Z1bG5lcmFiaWxpdHk/dXRtX2NhbXBhaWduPXRlZHNwcmVhZCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dGVkY29tc2hhcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgUG93ZXIgb2YgVnVsbmVyYWJpbGl0eS0gQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRlZC5jb20vdGFsa3MvYnJlbmVfYnJvd25fbGlzdGVuaW5nX3RvX3NoYW1lP3V0bV9jYW1wYWlnbj10ZWRzcHJlYWQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXRlZGNvbXNoYXJlXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGlzdGVuaW5nIHRvIFNoYW1lLSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzI2MTM0ODcwOVwiIHRhcmdldD1cIl9ibGFua1wiPlN1cGVyU291bCBTZXNzaW9uczogVGhlIEFuYXRvbXkgb2YgVHJ1c3QtIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL3ZpZGVvcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5BZGRpdGlvbmFsIEJyZW5lIEJyb3duPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3lvdXR1LmJlL0l2dFpCVVNwbHI0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIFNwYWNlIEJldHdlZW4gU2VsZi1Fc3RlZW0gYW5kIFNlbGYtQ29tcGFzc2lvbi0gS3Jpc3RpbiBOZWZmPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3NlbGYtY29tcGFzc2lvbi5vcmcvdmlkZW9zL1wiIHRhcmdldD1cIl9ibGFua1wiPkFkZGl0aW9uYWwgS3Jpc3RpbiBOZWZmPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50ZWQuY29tL3RhbGtzL3NhbmRyYV9hYW1vZHRfd2h5X2RpZXRpbmdfZG9lc25fdF91c3VhbGx5X3dvcms/dXRtX2NhbXBhaWduPXRlZHNwcmVhZCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dGVkY29tc2hhcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5XaHkgRGlldGluZyBEb2Vzbid0IFVzdWFsbHkgV29yay0gU2FuZHJhIEFhbW9kdDwvYT48YnIgLz5cblxuICAgIDxoMz5BdWRpbyBSZWNvcmRpbmdzPC9oMz5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL2NlbnRlcmZvcm1zYy5vcmcvcHJhY3RpY2UtbXNjL2d1aWRlZC1tZWRpdGF0aW9ucy1hbmQtZXhlcmNpc2VzL1wiIHRhcmdldD1cIl9ibGFua1wiPk1pbmRmdWwgU2VsZiBDb21wYXNzaW9uIE1lZGl0YXRpb25zPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy51Y2xhaGVhbHRoLm9yZy9tYXJjL21pbmRmdWwtbWVkaXRhdGlvbnNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5VQ0xBIE1lZGl0YXRpb25zIChBbHNvIGF2YWlsYWJsZSBpbiBTcGFuaXNoISk8L2E+PGJyIC8+XG5cbiAgICA8aDM+Qm9va3M8L2gzPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2dlbmVlbnJvdGguY29tL2Jvb2tzL1wiIHRhcmdldD1cIl9ibGFua1wiPldvbWVuLCBGb29kLCBhbmQgR29kIGJ5IEdlbmVlbiBSb3RoPC9hPjxiciAvPlxuICAgIDxhIGhyZWY9XCJodHRwczovL2JyZW5lYnJvd24uY29tL2Jvb2tzLWF1ZGlvL1wiIHRhcmdldD1cIl9ibGFua1wiPlRoZSBHaWZ0cyBvZiBJbXBlcmZlY3Rpb24gYnkgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vYm9va3MtYXVkaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RGFyaW5nIEdyZWF0bHkgYnkgQnJlbmUgQnJvd248L2E+PGJyIC8+XG4gICAgPGEgaHJlZj1cImh0dHBzOi8vYnJlbmVicm93bi5jb20vYm9va3MtYXVkaW8vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UmlzaW5nIFN0cm9uZyBieSBCcmVuZSBCcm93bjwvYT48YnIgLz5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IGNsaWVudERvY3VtZW50cyA9IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxwPlxuICAgICAgVGhlIGZvbGxvd2luZyBmb3JtcyBhcmUgZm9yIHlvdXIgcmV2aWV3LiBJZiB3ZSBoYXZlIHNjaGVkdWxlZCBhbiBpbi1wZXJzb24gYXBwb2ludG1lbnQsIHBsZWFzZSByZWFkIGNhcmVmdWxseSBlYWNoIG9mIHRoZSBmb3JtcyBiZWxvdy4gUGxlYXNlIHByaW50LCBjb21wbGV0ZSwgYW5kIGJyaW5nIHRoZSBmaXJzdCB0aHJlZSBmb3JtcyB0byBvdXIgZmlyc3QgYXBwb2ludG1lbnQuIFdlIHdpbGwgcmV2aWV3IHRoZW0gdG9nZXRoZXIuIElmIHlvdSB3b3VsZCBsaWtlIGZvciB5b3VyIGhlYWx0aCBpbmZvcm1hdGlvbiB0byBiZSBzaGFyZWQgd2l0aCBhbm90aGVyIGluZGl2aWR1YWwgb3IgZ3JvdXAsIG9yIHdvdWxkIGxpa2UgbWUgdG8gZ2F0aGVyIGluZm9ybWF0aW9uIGZyb20gdGhlbSwgcGxlYXNlIHByaW50LCBjb21wbGV0ZSwgYW5kIGJyaW5nIHRoZSBSZWxlYXNlIG9mIEluZm9ybWF0aW9uIGZvcm0gdG8geW91ciBuZXh0IGFwcG9pbnRtZW50LlxuICAgIDwvcD5cbiAgICA8dWw+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGhyZWY9XCIuL3Jlcy9JbmZvcm1lZCBDb25zZW50LnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPkluZm9ybWVkIENvbnNlbnQ8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvSW50YWtlIEZvcm0ucGRmXCIgZG93bmxvYWQgdGFyZ2V0PVwiX2JsYW5rXCI+SW50YWtlIEZvcm08L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBocmVmPVwiLi9yZXMvUmVjZWlwdCBvZiBGb3Jtcy5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5SZWNlaXB0IG9mIEZvcm1zPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL1ByaXZhY3kgUG9saWN5LnBkZlwiIGRvd25sb2FkIHRhcmdldD1cIl9ibGFua1wiPlByaXZhY3kgUG9saWN5PC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgaHJlZj1cIi4vcmVzL1JPSS5wZGZcIiBkb3dubG9hZCB0YXJnZXQ9XCJfYmxhbmtcIj5SZWxlYXNlIG9mIEluZm9ybWF0aW9uPC9hPlxuICAgICAgPC9saT5cblxuICAgIDwvdWw+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5cblxuY29uc3QgQ2FyZDEgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBwcm9wcy50aXRsZSA/XG4gICAgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtdGl0bGUnPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICApIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPSdjYXJkIGNhcmQtMSdcbiAgICA+XG4gICAgICB7dGl0bGV9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cbiAgICAgICAge3Byb3BzLmJvZHl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cblxuXG5jb25zdCBQYWdlVGl0bGUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZS10aXRsZScgaWQ9J3RvcCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vQXBwJztcblxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJztcblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IFxuIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyJdLCJzb3VyY2VSb290IjoiIn0=