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

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/fonts.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/fonts.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/drawing-options-panel/drawing-options-panel.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/drawing-options-panel/drawing-options-panel.scss ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dropdown-form/dropdown-form.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dropdown-form/dropdown-form.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/task/task.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/task/task.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/undo-button/undo-button.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/undo-button/undo-button.scss ***!
  \****************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
	"./data/russia.jpg": "./src/data/russia.jpg",
	"./data/world.svg": "./src/data/world.svg"
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

/***/ "./src/assets/Events/Event.ts":
/*!************************************!*\
  !*** ./src/assets/Events/Event.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor() {
        this.handlers = new Array();
        this.invoke = (args) => {
            this.handlers.forEach((eventHandler) => eventHandler(args));
        };
        this.subscribe = (handler) => {
            this.handlers.push(handler);
        };
        this.unsubscribe = (handler) => {
            const index = this.handlers.indexOf(handler);
            if (index > -1) {
                this.handlers.splice(index, 1);
            }
        };
    }
}
exports.default = Event;


/***/ }),

/***/ "./src/assets/Events/EventArgs.ts":
/*!****************************************!*\
  !*** ./src/assets/Events/EventArgs.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class EventArgs {
    constructor(data) {
        this.data = data;
    }
}
exports.default = EventArgs;


/***/ }),

/***/ "./src/assets/LinkedList/iterator.ts":
/*!*******************************************!*\
  !*** ./src/assets/LinkedList/iterator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Iterator {
    constructor(list) {
        this.list = list;
        this.current = this.list.tail;
        this.isDone = false;
    }
    next() {
        let result;
        if (this.list.head === undefined || this.list.tail === undefined) {
            result = {
                value: undefined,
                done: true,
            };
        }
        else {
            result = {
                value: this.current,
                done: this.isDone,
            };
            if (this.isDone)
                return result;
            this.current = this.current.next;
            this.isDone = this.current === undefined;
        }
        return result;
    }
}
exports.default = Iterator;


/***/ }),

/***/ "./src/assets/LinkedList/linked-list.ts":
/*!**********************************************!*\
  !*** ./src/assets/LinkedList/linked-list.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iterator_1 = __importDefault(__webpack_require__(/*! ./iterator */ "./src/assets/LinkedList/iterator.ts"));
class LinkedList {
    constructor() {
        this.initialize();
    }
    get length() {
        let result = 0;
        for (let item of this) {
            result += 1;
        }
        return result;
    }
    initialize() {
        this.head = undefined;
        this.tail = this.head;
    }
    add(value) {
        if (this.head === undefined || this.tail === undefined) {
            const link = {
                next: undefined,
                previous: undefined,
                value,
            };
            this.head = link;
            this.tail = this.head;
        }
        else {
            const link = {
                next: undefined,
                previous: this.head,
                value,
            };
            this.head.next = link;
            this.head = this.head.next;
        }
    }
    removeLast() {
        if (this.head) {
            const lastLink = this.head;
            this.head = this.head.previous;
            if (this.head)
                this.head.next = undefined;
            return lastLink.value;
        }
        return null;
    }
    removeFirst() {
        if (this.tail) {
            const firstLink = this.tail;
            this.tail = this.tail.next;
            if (this.tail)
                this.tail.previous = undefined;
            return firstLink.value;
        }
        return null;
    }
    [Symbol.iterator]() {
        return new iterator_1.default(this);
    }
}
exports.default = LinkedList;


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

/***/ "./src/assets/constants.ts":
/*!*********************************!*\
  !*** ./src/assets/constants.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants = {
    OPACITY: 0.9,
    BRUSH_RADIUS: 3,
};
exports.default = constants;


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

/***/ "./src/assets/vector.ts":
/*!******************************!*\
  !*** ./src/assets/vector.ts ***!
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

/***/ "./src/compilationOptions.ts":
/*!***********************************!*\
  !*** ./src/compilationOptions.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const compilationOptions = {
    forGithubPages: true,
};
exports.default = compilationOptions;


/***/ }),

/***/ "./src/components/drawing-options-panel/drawing-options-panel.scss":
/*!*************************************************************************!*\
  !*** ./src/components/drawing-options-panel/drawing-options-panel.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./drawing-options-panel.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/drawing-options-panel/drawing-options-panel.scss");

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

/***/ "./src/components/drawing-options-panel/drawing-options-panel.ts":
/*!***********************************************************************!*\
  !*** ./src/components/drawing-options-panel/drawing-options-panel.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(__webpack_require__(/*! ../../assets/constants */ "./src/assets/constants.ts"));
const brush_type_1 = __importDefault(__webpack_require__(/*! ../task/brush-type */ "./src/components/task/brush-type.ts"));
__webpack_require__(/*! ./drawing-options-panel.scss */ "./src/components/drawing-options-panel/drawing-options-panel.scss");
class DrawingOptionsPanel {
    constructor(container, task) {
        this.handleRadioClick = (event) => {
            const target = (event.target);
            const { name } = target.dataset;
            switch (name) {
                case 'brush': {
                    this.task.toolsManager.brushType = brush_type_1.default.brush;
                    break;
                }
                case 'eraser': {
                    this.task.toolsManager.brushType = brush_type_1.default.eraser;
                    break;
                }
                default: {
                    this.task.toolsManager.brushType = brush_type_1.default.brush;
                    break;
                }
            }
        };
        this.handleOpacityInput = (event) => {
            const target = (event.target);
            this.task.toolsManager.opacity = Number.parseFloat(target.value);
            if (this.task.toolsManager.opacity < 0) {
                target.value = '0';
                this.task.toolsManager.opacity = 0;
            }
            else if (this.task.toolsManager.opacity > 1) {
                target.value = '1';
                this.task.toolsManager.opacity = 1;
            }
        };
        this.handleBrushSizeInput = (event) => {
            const target = (event.target);
            this.task.toolsManager.brushRadius = Number.parseInt(target.value, 10);
            if (this.task.toolsManager.brushRadius < 1) {
                target.value = '1';
                this.task.toolsManager.brushRadius = 1;
            }
            else if (this.task.toolsManager.brushRadius > 100) {
                target.value = '100';
                this.task.toolsManager.brushRadius = 100;
            }
        };
        this.handleOpacityChange = (event) => {
            const target = (event.target);
            const value = Number.parseFloat(target.value);
            if (value !== undefined && !Number.isNaN(value)) {
                this.task.toolsManager.opacity = value;
                target.value = `${value}`;
            }
            else {
                this.task.toolsManager.opacity = 1;
                target.value = '1';
            }
        };
        this.handleBrushSizeChange = (event) => {
            const target = (event.target);
            const value = Number.parseFloat(target.value);
            if (value !== undefined && !Number.isNaN(value)) {
                this.task.toolsManager.brushRadius = value;
                target.value = `${value}`;
            }
            else {
                this.task.toolsManager.brushRadius = 1;
                target.value = '1';
            }
        };
        this.container = container;
        this.task = task;
        this.initialize();
        this.setEventsHandlers();
        this.brush.checked = true;
        this.opacityInput.value = `${constants_1.default.OPACITY}`;
        this.brushSizeInput.value = `${constants_1.default.BRUSH_RADIUS}`;
    }
    initialize() {
        this.eraser = this.container.querySelector('.drawing-options-panel__eraser');
        this.brush = this.container.querySelector('.drawing-options-panel__brush');
        this.opacityInput = this.container.querySelector('.drawing-options-panel__opacity-input');
        this.brushSizeInput = this.container.querySelector('.drawing-options-panel__brush-size-input');
    }
    setEventsHandlers() {
        this.eraser.addEventListener('click', this.handleRadioClick);
        this.brush.addEventListener('click', this.handleRadioClick);
        this.opacityInput.addEventListener('input', this.handleOpacityInput);
        this.brushSizeInput.addEventListener('input', this.handleBrushSizeInput);
        this.opacityInput.addEventListener('change', this.handleOpacityChange);
        this.brushSizeInput.addEventListener('change', this.handleBrushSizeChange);
    }
}
exports.default = DrawingOptionsPanel;


/***/ }),

/***/ "./src/components/dropdown-form/dropdown-form.scss":
/*!*********************************************************!*\
  !*** ./src/components/dropdown-form/dropdown-form.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./dropdown-form.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/dropdown-form/dropdown-form.scss");

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

/***/ "./src/components/dropdown-form/dropdown-form.ts":
/*!*******************************************************!*\
  !*** ./src/components/dropdown-form/dropdown-form.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./dropdown-form.scss */ "./src/components/dropdown-form/dropdown-form.scss");
class DropdownForm {
    constructor(container) {
        this.isOpened = false;
        this.handleArrowClick = () => {
            this.isOpened = !this.isOpened;
            this.updateState();
        };
        this.handleDropdownLeave = (event) => {
            const target = (event.target);
            const dropwdown = target.closest('.dropdown-form');
            if (!dropwdown) {
                this.isOpened = false;
                this.updateState();
            }
        };
        this.container = container;
        this.initialize();
        this.setEventsHandlers();
        this.updateState();
    }
    initialize() {
        this.dropButton = this.container.querySelector('.dropdown-form__drop-button');
        this.arrow = this.container.querySelector('.dropdown-form__arrow');
        this.form = this.container.querySelector('.dropdown-form__form');
    }
    setEventsHandlers() {
        this.dropButton.addEventListener('click', this.handleArrowClick);
        document.addEventListener('click', this.handleDropdownLeave);
    }
    updateState() {
        this.dropButton.classList.toggle('dropdown-form__drop-button_opened', this.isOpened);
        this.arrow.classList.toggle('dropdown-form__arrow_opened', this.isOpened);
        this.form.classList.toggle('dropdown-form__form_opened', this.isOpened);
    }
}
exports.default = DropdownForm;


/***/ }),

/***/ "./src/components/task/brush-type.ts":
/*!*******************************************!*\
  !*** ./src/components/task/brush-type.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BrushType;
(function (BrushType) {
    BrushType[BrushType["brush"] = 0] = "brush";
    BrushType[BrushType["eraser"] = 1] = "eraser";
})(BrushType || (BrushType = {}));
exports.default = BrushType;


/***/ }),

/***/ "./src/components/task/canvas-manager.ts":
/*!***********************************************!*\
  !*** ./src/components/task/canvas-manager.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vector_1 = __importDefault(__webpack_require__(/*! ../../assets/Vector */ "./src/assets/Vector.ts"));
const brush_type_1 = __importDefault(__webpack_require__(/*! ./brush-type */ "./src/components/task/brush-type.ts"));
class CanvasManager {
    constructor(canvas, width, height) {
        this.setSize = () => {
            this.canvas.width = this.width;
            this.canvas.height = this.height;
        };
        this.erase = (position, brushRadius) => {
            this.context.clearRect(position.x - brushRadius, position.y - brushRadius, brushRadius * 2, brushRadius * 2);
        };
        this.beginDrawing = (position, brushRadius) => {
            if (brushRadius < 20) {
                this.context.beginPath();
                const color = 'rgba(0, 0, 0, 1)';
                this.context.strokeStyle = color;
                this.context.lineWidth = brushRadius * 2;
                this.context.lineCap = 'round';
                this.context.lineTo(position.x, position.y);
                this.context.stroke();
            }
            else {
                const color = 'rgba(0, 0, 0, 1)';
                this.context.fillStyle = color;
                this.context.beginPath();
                this.context.arc(position.x, position.y, brushRadius, 0, Math.PI * 2);
                this.context.fill();
            }
        };
        this.continuousDrawing = (position, brushRadius) => {
            if (brushRadius < 20) {
                const color = 'rgba(0, 0, 0, 1)';
                this.context.strokeStyle = color;
                this.context.lineWidth = brushRadius * 2;
                this.context.lineCap = 'round';
                this.context.lineTo(position.x, position.y);
                this.context.stroke();
            }
            else {
                const color = 'rgba(0, 0, 0, 1)';
                this.context.fillStyle = color;
                this.context.beginPath();
                this.context.arc(position.x, position.y, brushRadius, 0, Math.PI * 2);
                this.context.fill();
            }
        };
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.width = width;
        this.height = height;
        this.initialaze();
    }
    initialaze() {
        /* this.width = document.documentElement.clientWidth;
        this.height = document.documentElement.clientHeight; */
        this.setSize();
    }
    drawImage(object) {
        if (object.isImageLoaded) {
            // точка вращения относительно канваса
            const x = object.position.x + object.size.width / 2;
            const y = object.position.y + object.size.height / 2;
            // центр объекта относительно самого себя
            const objCenterX = -object.size.width / 2;
            const objCenterY = -object.size.height / 2;
            this.context.setTransform(1, 0, 0, 1, x, y);
            this.context.rotate(object.angle);
            this.context.drawImage(object.image, objCenterX, objCenterY, object.size.width, object.size.height);
            this.context.resetTransform();
        }
        else { // заглушка, до подгрузки изображения
            const position = new Vector_1.default(object.position.x, object.position.y);
            this.drawSquare(position, object.size, 'rgb(12, 123, 222)');
        }
    }
    drawSquare(position, size, color) {
        this.context.fillStyle = color;
        this.context.fillRect(position.x, position.y, size.width, size.height);
    }
    drawBrush(position, brushRadius, brushType) {
        this.context.clearRect(0, 0, this.width, this.height);
        if (brushType === brush_type_1.default.brush) {
            const color = 'rgba(0, 0, 0, 1)';
            this.context.fillStyle = color;
            this.context.lineWidth = 1;
            this.context.beginPath();
            this.context.arc(position.x, position.y, brushRadius, 0, Math.PI * 2);
            this.context.closePath();
            this.context.stroke();
        }
        else if (brushType === brush_type_1.default.eraser) {
            this.context.beginPath();
            this.context.rect(position.x - brushRadius, position.y - brushRadius, brushRadius * 2, brushRadius * 2);
            this.context.closePath();
            this.context.strokeStyle = 'black';
            this.context.stroke();
        }
    }
}
exports.default = CanvasManager;


/***/ }),

/***/ "./src/components/task/contour-map.ts":
/*!********************************************!*\
  !*** ./src/components/task/contour-map.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vector_1 = __importDefault(__webpack_require__(/*! ../../assets/vector */ "./src/assets/vector.ts"));
class ContourMap {
    constructor(imageSrc, size) {
        this.position = new vector_1.default(0, 0);
        this.size = new vector_1.default(0, 0);
        this.angle = 0;
        this.isImageLoaded = false;
        this.size = size;
        this.image = new Image();
        this.image.src = imageSrc;
        this.image.onload = () => {
            this.isImageLoaded = true;
        };
    }
    /* public initialize(): void {
    }
  
    public update(isSelected: boolean, gameTime: DOMHighResTimeStamp): void {
    } */
    draw(canvas) {
        if (!this.isImageLoaded) {
            const timerId = setInterval(() => {
                if (this.isImageLoaded) {
                    clearInterval(timerId);
                }
                canvas.drawImage(this);
            }, 500);
        }
        else {
            canvas.drawImage(this);
        }
    }
}
exports.default = ContourMap;


/***/ }),

/***/ "./src/components/task/task.scss":
/*!***************************************!*\
  !*** ./src/components/task/task.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./task.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/task/task.scss");

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

/***/ "./src/components/task/task.ts":
/*!*************************************!*\
  !*** ./src/components/task/task.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
const file_saver_1 = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
const constants_1 = __importDefault(__webpack_require__(/*! ../../assets/constants */ "./src/assets/constants.ts"));
const Vector_1 = __importDefault(__webpack_require__(/*! ../../assets/Vector */ "./src/assets/Vector.ts"));
const Event_1 = __importDefault(__webpack_require__(/*! ../../assets/Events/Event */ "./src/assets/Events/Event.ts"));
const compilationOptions_1 = __importDefault(__webpack_require__(/*! ../../compilationOptions */ "./src/compilationOptions.ts"));
const dropdown_form_1 = __importDefault(__webpack_require__(/*! ../dropdown-form/dropdown-form */ "./src/components/dropdown-form/dropdown-form.ts"));
const drawing_options_panel_1 = __importDefault(__webpack_require__(/*! ../drawing-options-panel/drawing-options-panel */ "./src/components/drawing-options-panel/drawing-options-panel.ts"));
const canvas_manager_1 = __importDefault(__webpack_require__(/*! ./canvas-manager */ "./src/components/task/canvas-manager.ts"));
const contour_map_1 = __importDefault(__webpack_require__(/*! ./contour-map */ "./src/components/task/contour-map.ts"));
const tools_manager_1 = __importDefault(__webpack_require__(/*! ./tools-manager */ "./src/components/task/tools-manager.ts"));
const EventArgs_1 = __importDefault(__webpack_require__(/*! ../../assets/Events/EventArgs */ "./src/assets/Events/EventArgs.ts"));
const undo_button_1 = __importDefault(__webpack_require__(/*! ../undo-button/undo-button */ "./src/components/undo-button/undo-button.ts"));
__webpack_require__(/*! ./task.scss */ "./src/components/task/task.scss");
class Task {
    constructor(container) {
        this.onStartDrawing = new Event_1.default();
        this.onContinuingDrawing = new Event_1.default();
        this.onDrawingEnding = new Event_1.default();
        this.onMouseOver = new Event_1.default();
        this.onMouseMove = new Event_1.default();
        this.onMouseOut = new Event_1.default();
        this.isDoubleTouch = false;
        this.touchIdentifier = -1;
        this.handleStartDrawing = (event) => {
            if (event instanceof TouchEvent) {
                if (event.changedTouches[0].identifier > 0)
                    return;
                if (!this.isDoubleTouch) {
                    this.isDoubleTouch = true;
                    setTimeout(() => {
                        this.isDoubleTouch = false;
                    }, 300);
                    return;
                }
                event.preventDefault();
            }
            if (event instanceof MouseEvent && this.isDoubleTouch)
                return;
            this.cursorCanvasManager.canvas.addEventListener('mousemove', this.handleContinuingDrawing);
            this.cursorCanvasManager.canvas.addEventListener('mouseup', this.handleEndDrawing);
            this.cursorCanvasManager.canvas.addEventListener('touchmove', this.handleContinuingDrawing);
            this.cursorCanvasManager.canvas.addEventListener('touchend', this.handleEndDrawing);
            this.onStartDrawing.invoke(new EventArgs_1.default({
                mousePosition: this.calculateMousePositionInsideCanvases(event),
                button: event.button,
            }));
        };
        this.handleContinuingDrawing = (event) => {
            this.onContinuingDrawing.invoke(new EventArgs_1.default({
                mousePosition: this.calculateMousePositionInsideCanvases(event),
                button: event.button,
            }));
        };
        this.handleEndDrawing = (event) => {
            this.cursorCanvasManager.canvas.removeEventListener('mousemove', this.handleContinuingDrawing);
            this.cursorCanvasManager.canvas.removeEventListener('mouseup', this.handleEndDrawing);
            this.cursorCanvasManager.canvas.removeEventListener('touchmove', this.handleContinuingDrawing);
            this.cursorCanvasManager.canvas.removeEventListener('touchend', this.handleEndDrawing);
            this.onDrawingEnding.invoke(new EventArgs_1.default({
                mousePosition: this.calculateMousePositionInsideCanvases(event),
                button: event.button,
            }));
        };
        this.handleCanvasMouseOver = (event) => {
            if (event instanceof MouseEvent && this.isDoubleTouch)
                return;
            this.cursorCanvasManager.canvas.addEventListener('mousemove', this.handleCanvasMouseMove);
            this.cursorCanvasManager.canvas.addEventListener('mouseout', this.handleCanvasMouseOut);
            this.onMouseOver.invoke(new EventArgs_1.default({
                mousePosition: this.calculateMousePositionInsideCanvases(event),
                button: event.button,
            }));
        };
        this.handleCanvasMouseMove = (event) => {
            this.onMouseMove.invoke(new EventArgs_1.default({
                mousePosition: this.calculateMousePositionInsideCanvases(event),
                button: event.button,
            }));
        };
        this.handleCanvasMouseOut = (event) => {
            this.cursorCanvasManager.canvas.removeEventListener('mousemove', this.handleCanvasMouseMove);
            this.cursorCanvasManager.canvas.removeEventListener('mouseout', this.handleCanvasMouseOut);
            this.onMouseOut.invoke(new EventArgs_1.default({
                mousePosition: this.calculateMousePositionInsideCanvases(event),
                button: event.button,
            }));
        };
        this.container = container;
        this.initialize();
        this.setEventsHandlers();
        const mapSize = new Vector_1.default(this.canvasWidth, this.canvasHeight);
        this.map = new contour_map_1.default(`${compilationOptions_1.default.forGithubPages ? '/GeographyTasks' : ''}/src/data/russia.jpg`, mapSize);
        this.map.draw(this.mapCanvasManager);
        this.toolsManager = new tools_manager_1.default(this);
        this.undoButton = new undo_button_1.default(this);
        this.tempCanvasManager.canvas.style.opacity = `${constants_1.default.OPACITY}`;
    }
    initialize() {
        // eslint-disable-next-line no-mixed-operators
        let biggestSide = document.documentElement.clientWidth > document.documentElement.clientHeight ? document.documentElement.clientWidth : document.documentElement.clientHeight;
        if (biggestSide < 1000)
            biggestSide = 1000;
        this.canvasWidth = biggestSide - biggestSide * 0.0;
        this.canvasHeight = biggestSide * 0.5;
        this.canvasesContainer = (this.container.querySelector('.task__canvases'));
        this.canvasesContainer.style.height = `${biggestSide * 0.5}px`;
        const mapCanvas = (this.container.querySelector('.task__map-canvas'));
        this.mapCanvasManager = new canvas_manager_1.default(mapCanvas, this.canvasWidth, this.canvasHeight);
        const resultCanvas = (this.container.querySelector('.task__result-canvas'));
        this.resultCanvasManager = new canvas_manager_1.default(resultCanvas, this.canvasWidth, this.canvasHeight);
        const tempCanvas = (this.container.querySelector('.task__temp-canvas'));
        this.tempCanvasManager = new canvas_manager_1.default(tempCanvas, this.canvasWidth, this.canvasHeight);
        const cursorCanvas = (this.container.querySelector('.task__cursor-canvas'));
        this.cursorCanvasManager = new canvas_manager_1.default(cursorCanvas, this.canvasWidth, this.canvasHeight);
        const dropdownFormContainer = (this.container.querySelector('.task__dropdown-form'));
        this.dropdownForm = new dropdown_form_1.default(dropdownFormContainer);
        this.saveButton = this.container.querySelector('.dropdown-form__save-button');
        const drawingOptionsPanelContainer = (this.container.querySelector('.task__drawing-options-panel'));
        this.drawingOptionsPanel = new drawing_options_panel_1.default(drawingOptionsPanelContainer, this);
        this.trySetDrawingFromLocalStorage();
    }
    initializeCanvases() {
    }
    trySetDrawingFromLocalStorage() {
        const lastDrawing = localStorage.getItem('lastDrawing');
        if (lastDrawing) {
            const img = new Image();
            img.src = lastDrawing;
            img.onload = () => {
                this.resultCanvasManager.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                this.resultCanvasManager.context.globalAlpha = 1;
                this.resultCanvasManager.context.drawImage(img, 0, 0);
            };
        }
    }
    setEventsHandlers() {
        this.cursorCanvasManager.canvas.ondragstart = () => false;
        this.cursorCanvasManager.canvas.addEventListener('mousedown', this.handleStartDrawing);
        this.cursorCanvasManager.canvas.addEventListener('touchstart', this.handleStartDrawing);
        this.cursorCanvasManager.canvas.addEventListener('mouseover', this.handleCanvasMouseOver);
        // eslint-disable-next-line fsd/no-function-declaration-in-event-listener
        this.saveButton.addEventListener('click', () => {
            const can3 = document.createElement('canvas');
            can3.width = this.mapCanvasManager.width;
            can3.height = this.mapCanvasManager.height;
            const ctx3 = can3.getContext('2d');
            ctx3.drawImage(this.mapCanvasManager.canvas, 0, 0);
            ctx3.globalAlpha = 0.5;
            ctx3.drawImage(this.resultCanvasManager.canvas, 0, 0);
            ctx3.globalAlpha = 1;
            let blobImage;
            can3.toBlob((blob) => {
                blobImage = blob;
            });
            const timerId = setInterval(() => {
                if (blobImage) {
                    clearInterval(timerId);
                    file_saver_1.saveAs(blobImage, 'pretty image.png');
                }
            }, 500);
        });
    }
    extractMousePosition(event) {
        let x;
        let y;
        if (event instanceof TouchEvent) {
            x = event.changedTouches[0].pageX - window.pageXOffset;
            y = event.changedTouches[0].pageY - window.pageYOffset;
        }
        else if (event instanceof MouseEvent) {
            x = event.clientX;
            y = event.clientY;
        }
        return new Vector_1.default(x, y);
    }
    calculateMousePositionInsideCanvases(event) {
        const positionInDocument = this.extractMousePosition(event);
        const containerBoundingRect = this.mapCanvasManager.canvas.getBoundingClientRect();
        const containerCoord = new Vector_1.default(containerBoundingRect.x, containerBoundingRect.y);
        return positionInDocument.subtract(containerCoord);
    }
}
exports.default = Task;


/***/ }),

/***/ "./src/components/task/tools-manager.ts":
/*!**********************************************!*\
  !*** ./src/components/task/tools-manager.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(__webpack_require__(/*! ../../assets/constants */ "./src/assets/constants.ts"));
const brush_type_1 = __importDefault(__webpack_require__(/*! ./brush-type */ "./src/components/task/brush-type.ts"));
class ToolsManager {
    constructor(task) {
        this.brushRadius = constants_1.default.BRUSH_RADIUS;
        this.opacity = constants_1.default.OPACITY;
        this.brushType = brush_type_1.default.brush;
        this.setEventsHandlers = () => {
            this.task.onStartDrawing.subscribe(this.mouseDown);
            this.task.onContinuingDrawing.subscribe(this.mouseMove);
            this.task.onDrawingEnding.subscribe(this.mouseUp);
            this.task.onMouseOver.subscribe(this.mouseOver);
            this.task.onMouseMove.subscribe(this.mouseOver);
            this.task.onMouseOver.subscribe(this.mouseOut);
        };
        this.mouseDown = (args) => {
            this.task.tempCanvasManager.canvas.style.opacity = `${this.opacity}`;
            if (this.brushType === brush_type_1.default.brush)
                this.task.tempCanvasManager.beginDrawing(args.data.mousePosition, this.brushRadius);
            else if (this.brushType === brush_type_1.default.eraser)
                this.task.resultCanvasManager.erase(args.data.mousePosition, this.brushRadius);
        };
        this.mouseMove = (args) => {
            if (this.brushType === brush_type_1.default.brush)
                this.task.tempCanvasManager.continuousDrawing(args.data.mousePosition, this.brushRadius);
            else if (this.brushType === brush_type_1.default.eraser)
                this.task.resultCanvasManager.erase(args.data.mousePosition, this.brushRadius);
        };
        this.mouseUp = () => {
            this.task.resultCanvasManager.context.globalAlpha = this.opacity;
            this.task.resultCanvasManager.context.drawImage(this.task.tempCanvasManager.canvas, 0, 0);
            this.task.tempCanvasManager.context.clearRect(0, 0, this.task.resultCanvasManager.width, this.task.resultCanvasManager.height);
        };
        this.mouseOver = (args) => {
            this.task.cursorCanvasManager.drawBrush(args.data.mousePosition, this.brushRadius, this.brushType);
        };
        this.mouseOut = () => {
            this.task.cursorCanvasManager.context.clearRect(0, 0, this.task.cursorCanvasManager.width, this.task.cursorCanvasManager.height);
        };
        this.task = task;
        this.initialize();
        this.setEventsHandlers();
    }
    initialize() {
    }
}
exports.default = ToolsManager;


/***/ }),

/***/ "./src/components/undo-button/undo-button.scss":
/*!*****************************************************!*\
  !*** ./src/components/undo-button/undo-button.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./undo-button.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/undo-button/undo-button.scss");

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

/***/ "./src/components/undo-button/undo-button.ts":
/*!***************************************************!*\
  !*** ./src/components/undo-button/undo-button.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-useless-return */
const linked_list_1 = __importDefault(__webpack_require__(/*! ../../assets/LinkedList/linked-list */ "./src/assets/LinkedList/linked-list.ts"));
__webpack_require__(/*! ./undo-button.scss */ "./src/components/undo-button/undo-button.scss");
class UndoButton {
    constructor(task) {
        this.handleButtonClick = () => {
            this.undo();
        };
        this.saveLastDrawingState = () => {
            /* this.task.resultCanvasManager.canvas.toBlob((blob: Blob) => {
              this.drawingStates.add(blob);
            }); */
            const imageDataURL = this.task.resultCanvasManager.canvas.toDataURL('image/png');
            this.drawingStates.add(imageDataURL);
        };
        this.saveToLocalStorage = () => {
            const image = this.task.resultCanvasManager.canvas.toDataURL('image/png');
            localStorage.setItem('lastDrawing', image);
        };
        this.task = task;
        this.drawingStates = new linked_list_1.default();
        this.initialize();
        this.setEventsHandlers();
        this.saveLastDrawingState();
    }
    initialize() {
        this.button = this.task.container.querySelector('.undo-button');
    }
    setEventsHandlers() {
        this.button.addEventListener('click', this.handleButtonClick);
        this.task.onDrawingEnding.subscribe(this.saveLastDrawingState);
        this.task.onDrawingEnding.subscribe(this.saveToLocalStorage);
    }
    undo() {
        const { length } = this.drawingStates;
        if (length <= 1)
            return;
        this.drawingStates.removeLast();
        const img = new Image();
        img.src = /* URL.createObjectURL(this.drawingStates.head.value) */ this.drawingStates.head.value;
        img.onload = () => {
            this.task.resultCanvasManager.context.clearRect(0, 0, this.task.canvasWidth, this.task.canvasHeight);
            this.task.resultCanvasManager.context.globalAlpha = 1;
            this.task.resultCanvasManager.context.drawImage(img, 0, 0);
            this.saveToLocalStorage();
        };
    }
}
exports.default = UndoButton;


/***/ }),

/***/ "./src/data/russia.jpg":
/*!*****************************!*\
  !*** ./src/data/russia.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/data/russia.jpg");

/***/ }),

/***/ "./src/data/world.svg":
/*!****************************!*\
  !*** ./src/data/world.svg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "src/data/world.svg");

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
const task_1 = __importDefault(__webpack_require__(/*! ../../components/task/task */ "./src/components/task/task.ts"));
__webpack_require__(/*! ../base/base */ "./src/pages/base/base.ts");
__webpack_require__(/*! ./demo.scss */ "./src/pages/demo/demo.scss");
const container = document.querySelector('.demo');
const task = new task_1.default(container);


/***/ })

/******/ });
//# sourceMappingURL=demo.js.map?v=2cbe2d05e5d238ea5589