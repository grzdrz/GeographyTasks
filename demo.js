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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/demo/demo.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/fonts.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/fonts.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/base/base.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/base/base.scss ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/demo/demo.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/demo/demo.scss ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/task/task.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/task/task.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src sync recursive \\.(ttf|eot|woff|woff2|svg|png|jpg)$":
/*!******************************************************!*\
  !*** ./src sync \.(ttf|eot|woff|woff2|svg|png|jpg)$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./assets/fonts/MaterialIcons/MaterialIcons-Regular.eot": "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.eot",
	"./assets/fonts/MaterialIcons/MaterialIcons-Regular.svg": "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.svg",
	"./assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf": "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf",
	"./assets/fonts/MaterialIcons/MaterialIcons-Regular.woff": "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff",
	"./assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2": "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2",
	"./assets/fonts/Merriweather/merriweather-300.eot": "./src/assets/fonts/Merriweather/merriweather-300.eot",
	"./assets/fonts/Merriweather/merriweather-300.svg": "./src/assets/fonts/Merriweather/merriweather-300.svg",
	"./assets/fonts/Merriweather/merriweather-300.ttf": "./src/assets/fonts/Merriweather/merriweather-300.ttf",
	"./assets/fonts/Merriweather/merriweather-300.woff": "./src/assets/fonts/Merriweather/merriweather-300.woff",
	"./assets/fonts/Merriweather/merriweather-300.woff2": "./src/assets/fonts/Merriweather/merriweather-300.woff2",
	"./assets/fonts/Merriweather/merriweather-bold.eot": "./src/assets/fonts/Merriweather/merriweather-bold.eot",
	"./assets/fonts/Merriweather/merriweather-bold.svg": "./src/assets/fonts/Merriweather/merriweather-bold.svg",
	"./assets/fonts/Merriweather/merriweather-bold.ttf": "./src/assets/fonts/Merriweather/merriweather-bold.ttf",
	"./assets/fonts/Merriweather/merriweather-bold.woff": "./src/assets/fonts/Merriweather/merriweather-bold.woff",
	"./assets/fonts/Merriweather/merriweather-bold.woff2": "./src/assets/fonts/Merriweather/merriweather-bold.woff2",
	"./assets/fonts/Merriweather/merriweather-regular.eot": "./src/assets/fonts/Merriweather/merriweather-regular.eot",
	"./assets/fonts/Merriweather/merriweather-regular.svg": "./src/assets/fonts/Merriweather/merriweather-regular.svg",
	"./assets/fonts/Merriweather/merriweather-regular.ttf": "./src/assets/fonts/Merriweather/merriweather-regular.ttf",
	"./assets/fonts/Merriweather/merriweather-regular.woff": "./src/assets/fonts/Merriweather/merriweather-regular.woff",
	"./assets/fonts/Merriweather/merriweather-regular.woff2": "./src/assets/fonts/Merriweather/merriweather-regular.woff2",
	"./data/images/world.svg": "./src/data/images/world.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive \\.(ttf|eot|woff|woff2|svg|png|jpg)$";

/***/ }),

/***/ "./src/assets/Vector.ts":
/*!******************************!*\
  !*** ./src/assets/Vector.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
class Vector {
    constructor(x, y) {
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    get width() {
        return this._x;
    }
    set width(value) {
        this._x = value;
    }
    get height() {
        return this._y;
    }
    set height(value) {
        this._y = value;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    sum(vector) {
        return new Vector(this._x + vector.x, this._y + vector.y);
    }
    sumNumber(number) {
        return new Vector(this._x + number, this._y + number);
    }
    subtract(vector) {
        return new Vector(this._x - vector.x, this._y - vector.y);
    }
    multiplyByNumber(number) {
        return new Vector(this._x * number, this._y * number);
    }
    calculateScalarProduct(vector) {
        return this._x * vector.x + this._y * vector.y;
    }
    calculateVectorProjectionOnTargetVector(targetVector) {
        return this.calculateScalarProduct(targetVector) / targetVector.length;
    }
    get length() {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }
    static calculateVector(length, angle) {
        const cos = Number.parseFloat(Math.cos(angle).toFixed(6));
        const sin = Number.parseFloat(Math.sin(angle).toFixed(6));
        return new Vector(length * cos, length * sin);
    }
    rotateVector(angleInRad) {
        const newX = this._x * Math.cos(angleInRad) - this._y * Math.sin(angleInRad);
        const newY = this._x * Math.sin(angleInRad) + this._y * Math.cos(angleInRad);
        return new Vector(newX, newY);
    }
}
exports.default = Vector;


/***/ }),

/***/ "./src/assets/fonts.scss":
/*!*******************************!*\
  !*** ./src/assets/fonts.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./fonts.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/fonts.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.eot":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.eot ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/MaterialIcons/MaterialIcons-Regular.eot");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.svg":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.svg ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/MaterialIcons/MaterialIcons-Regular.svg");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/MaterialIcons/MaterialIcons-Regular.ttf");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff");

/***/ }),

/***/ "./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2 ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/MaterialIcons/MaterialIcons-Regular.woff2");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-300.eot":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-300.eot ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-300.eot");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-300.svg":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-300.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-300.svg");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-300.ttf":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-300.ttf ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-300.ttf");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-300.woff":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-300.woff ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-300.woff");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-300.woff2":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-300.woff2 ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-300.woff2");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-bold.eot":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-bold.eot ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-bold.eot");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-bold.svg":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-bold.svg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-bold.svg");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-bold.ttf":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-bold.ttf ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-bold.ttf");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-bold.woff":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-bold.woff ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-bold.woff");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-bold.woff2":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-bold.woff2 ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-bold.woff2");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-regular.eot":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-regular.eot ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-regular.eot");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-regular.svg":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-regular.svg ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-regular.svg");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-regular.ttf":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-regular.ttf ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-regular.ttf");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-regular.woff":
/*!*****************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-regular.woff ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-regular.woff");

/***/ }),

/***/ "./src/assets/fonts/Merriweather/merriweather-regular.woff2":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/Merriweather/merriweather-regular.woff2 ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/assets/fonts/Merriweather/merriweather-regular.woff2");

/***/ }),

/***/ "./src/data/images/world.svg":
/*!***********************************!*\
  !*** ./src/data/images/world.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/data/images/world.svg");

/***/ }),

/***/ "./src/pages/base/base.scss":
/*!**********************************!*\
  !*** ./src/pages/base/base.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/base/base.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/base/base.ts":
/*!********************************!*\
  !*** ./src/pages/base/base.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../../assets/fonts.scss */ "./src/assets/fonts.scss");
__webpack_require__(/*! ./base.scss */ "./src/pages/base/base.scss");
__webpack_require__("./src sync recursive \\.(ttf|eot|woff|woff2|svg|png|jpg)$");


/***/ }),

/***/ "./src/pages/demo/demo.scss":
/*!**********************************!*\
  !*** ./src/pages/demo/demo.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./demo.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/demo/demo.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/demo/demo.ts":
/*!********************************!*\
  !*** ./src/pages/demo/demo.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
const task_1 = __importDefault(__webpack_require__(/*! ../../task/task */ "./src/task/task.ts"));
__webpack_require__(/*! ../base/base */ "./src/pages/base/base.ts");
__webpack_require__(/*! ./demo.scss */ "./src/pages/demo/demo.scss");
const container = document.querySelector('.demo');
const task = new task_1.default(container);


/***/ }),

/***/ "./src/task/task.scss":
/*!****************************!*\
  !*** ./src/task/task.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./task.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/task/task.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/task/task.ts":
/*!**************************!*\
  !*** ./src/task/task.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector_1 = __importDefault(__webpack_require__(/*! ../assets/Vector */ "./src/assets/Vector.ts"));
__webpack_require__(/*! ./task.scss */ "./src/task/task.scss");
class Task {
    /* public baseWidth: number;
    public baseHeight: number; */
    constructor(container) {
        this.handlePathClick = (event) => {
            this.countries.forEach((path) => {
                path.style.fill = 'rgb(78, 92, 124)';
                /* path.style.transform = 'scale(1, 1)'; */
            });
            const target = event.target;
            target.style.fill = 'red';
            /* target.style.transform = 'scale(1.2, 1.2)'; */
        };
        this.handleMouseDown = (event) => {
            document.addEventListener('mousemove', this.handleMouseMove);
            document.addEventListener('mouseup', this.handleMouseUp);
            document.addEventListener('touchmove', this.handleMouseMove);
            document.addEventListener('touchend', this.handleMouseUp);
            const position = this.calculateMousePosition(event);
            this.canvasManager.beginDrawing(position);
        };
        this.handleMouseMove = (event) => {
            const position = this.calculateMousePosition(event);
            this.canvasManager.draw(position);
        };
        this.handleMouseUp = () => {
            document.removeEventListener('mousemove', this.handleMouseMove);
            document.removeEventListener('mouseup', this.handleMouseUp);
            document.removeEventListener('touchmove', this.handleMouseMove);
            document.removeEventListener('touchend', this.handleMouseUp);
            this.canvasManager.endDrawing();
        };
        this.container = container;
        this.initialize();
        this.setEventsHandlers();
        /* this.setSize(); */
    }
    initialize() {
        /* const canvas = this.container.querySelector('canvas');
        this.canvasManager = new CanvasManager(canvas); */
        this.svg = this.container.querySelector('svg');
        this.countries = [...this.container.querySelectorAll('path')];
        this.countries.forEach((path) => {
            path.style.fill = 'rgb(78, 92, 124)';
        });
    }
    setEventsHandlers() {
        /* this.canvasManager.canvas.ondragstart = () => false;
        this.canvasManager.canvas.addEventListener('mousedown', this.handleMouseDown);
        this.canvasManager.canvas.addEventListener('touchstart', this.handleMouseDown); */
        this.countries.forEach((path) => {
            path.addEventListener('click', this.handlePathClick);
        });
    }
    setSize() {
        const { kx, ky } = this.calculateScaleCoefficient(this.mapContainer.clientWidth, this.mapContainer.clientHeight);
        this.svg.style.transform = `scale(${kx}, ${kx})`;
        this.countries.forEach((path) => {
            path.style.transform = `scale(${kx}, ${kx})`;
        });
    }
    calculateScaleCoefficient(width, height) {
        const kx = width / this.svg.clientWidth;
        const ky = height / this.svg.clientHeight;
        return { kx, ky };
    }
    calculateMousePosition(event) {
        let x;
        let y;
        if (event instanceof TouchEvent) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
        }
        else if (event instanceof MouseEvent) {
            x = event.clientX;
            y = event.clientY;
        }
        return new Vector_1.default(x, y);
    }
}
exports.default = Task;


/***/ })

/******/ });
//# sourceMappingURL=demo.js.map?v=933575c51408e078edc7