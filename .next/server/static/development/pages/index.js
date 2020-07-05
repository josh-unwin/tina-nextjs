module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/index.js": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_tinacms_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-tinacms-github */ "next-tinacms-github");
/* harmony import */ var next_tinacms_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_tinacms_github__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_tinacms_github__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tinacms-github */ "react-tinacms-github");
/* harmony import */ var react_tinacms_github__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_tinacms_github__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/joshunwin/code/josh-unwin/tina-nextjs/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/*
 ** Import helpers and GetStaticProps type
 */



function Home({
  file,
  preview
}) {
  const formOptions = {
    label: 'Home Page',
    fields: [{
      name: 'title',
      component: 'text'
    }]
  };
  /*
   ** Register a JSON Tina Form
   */

  const [data, form] = Object(react_tinacms_github__WEBPACK_IMPORTED_MODULE_4__["useGithubJsonForm"])(file, formOptions);
  Object(react_tinacms_github__WEBPACK_IMPORTED_MODULE_4__["useGithubToolbarPlugins"])();
  return __jsx("div", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]) + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]) + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, data.title), __jsx("p", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]) + " " + "description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Get started by editing ", __jsx("code", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 34
    }
  }, "pages/index.js"), ". Hello"), __jsx("div", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]) + " " + "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://nextjs.org/docs",
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Documentation \u2192"), __jsx("p", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "Find in-depth information about Next.js features and API.")), __jsx("a", {
    href: "https://nextjs.org/learn",
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Learn \u2192"), __jsx("p", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Learn about Next.js in an interactive course with quizzes!")), __jsx("a", {
    href: "https://github.com/zeit/next.js/tree/master/examples",
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Examples \u2192"), __jsx("p", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Discover and deploy boilerplate example Next.js projects.")), __jsx("a", {
    href: "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]) + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Deploy \u2192"), __jsx("p", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Instantly deploy your Next.js site to a public URL with Vercel.")))), __jsx("footer", {
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Powered by ", __jsx("img", {
    src: "/zeit.svg",
    alt: "ZEIT Logo",
    className: "jsx-3379920139 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1759177446", [preview && 'red']]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 22
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1759177446",
    dynamic: [preview && 'red'],
    __self: this
  }, `.container.__jsx-style-dynamic-selector{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.__jsx-style-dynamic-selector{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.__jsx-style-dynamic-selector{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{margin-left:0.5rem;}footer.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.__jsx-style-dynamic-selector{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover,.title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:focus,.title.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.__jsx-style-dynamic-selector{margin:0;line-height:1.15;font-size:4rem;color:${preview && 'red'};}.title.__jsx-style-dynamic-selector,.description.__jsx-style-dynamic-selector{text-align:center;}.description.__jsx-style-dynamic-selector{line-height:1.5;font-size:1.5rem;}code.__jsx-style-dynamic-selector{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.__jsx-style-dynamic-selector{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.__jsx-style-dynamic-selector:hover,.card.__jsx-style-dynamic-selector:focus,.card.__jsx-style-dynamic-selector:active{color:#0070f3;border-color:#0070f3;}.card.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:0 0 1rem 0;font-size:1.5rem;}.card.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:0;font-size:1.25rem;line-height:1.5;}@media (max-width:600px){.grid.__jsx-style-dynamic-selector{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodW53aW4vY29kZS9qb3NoLXVud2luL3RpbmEtbmV4dGpzL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmtCLEFBRzRCLEFBU0YsQUFTSixBQVNRLEFBSU4sQUFNQyxBQUtBLEFBT1ksQUFJakIsQUFRUyxBQUlGLEFBS0csQUFTTixBQVVELEFBY0UsQUFLSSxBQUtULEFBT0ksU0FsRUksQUE0REMsRUEvRkwsQUFzR1csQ0EvQlQsRUFwRE0sQUFLQSxBQTZEQSxDQTlGZCxDQXdEVSxDQWpFQSxDQTZEbkIsQUErQ21CLENBakZuQixBQTJDb0IsS0FuRFcsRUFtQ2QsQ0E0REMsTUFoRGxCLENBakVlLENBdUdmLEFBS0EsRUF0Q2tCLElBaEJtQixFQTREckMsS0F6R2UsS0FVQSxBQW9ESSxPQXZCbkIsSUFYQSxBQUtBLE1BK0JzRSxJQTNDN0MsQUFnREosRUF2QnJCLEVBa0NpQixXQStCZixJQTlCZ0IsZUF6Rk0sQ0EwRlIsYUFqRlEsQ0FrRkQsSUF4RUUsd0NBMkRBLE1BaERKLEFBOERNLGFBM0ZGLEtBd0V6QixPQW9CcUIsRUFuRkksaUJBb0Y4QixTQTFFbEMsd0NBV3JCLEFBZ0RpQixtQkE3RUksY0FTQSxvQkFVckIsSUE0RGtCLE1BY2xCLFVBYmtCLGdCQUNsQix1QkFoRkEsY0FTQSIsImZpbGUiOiIvVXNlcnMvam9zaHVud2luL2NvZGUvam9zaC11bndpbi90aW5hLW5leHRqcy9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vKlxuICoqIEltcG9ydCBoZWxwZXJzIGFuZCBHZXRTdGF0aWNQcm9wcyB0eXBlXG4gKi9cbmltcG9ydCB7IGdldEdpdGh1YlByZXZpZXdQcm9wcywgcGFyc2VKc29uIH0gZnJvbSAnbmV4dC10aW5hY21zLWdpdGh1YidcbmltcG9ydCB7XG4gIHVzZUdpdGh1Ykpzb25Gb3JtLFxuICB1c2VHaXRodWJUb29sYmFyUGx1Z2lucyxcbn0gZnJvbSAncmVhY3QtdGluYWNtcy1naXRodWInXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBmaWxlLCBwcmV2aWV3IH0pIHtcbiAgY29uc3QgZm9ybU9wdGlvbnMgPSB7XG4gICAgbGFiZWw6ICdIb21lIFBhZ2UnLFxuICAgIGZpZWxkczogW3sgbmFtZTogJ3RpdGxlJywgY29tcG9uZW50OiAndGV4dCcgfV0sXG4gIH1cblxuICAvKlxuICAgKiogUmVnaXN0ZXIgYSBKU09OIFRpbmEgRm9ybVxuICAgKi9cbiAgY29uc3QgW2RhdGEsIGZvcm1dID0gdXNlR2l0aHViSnNvbkZvcm0oZmlsZSwgZm9ybU9wdGlvbnMpXG5cbiAgdXNlR2l0aHViVG9vbGJhclBsdWdpbnMoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgey8qXG4gICAgICAgICAgICoqIFJlbmRlciB0aGUgdGl0bGUgZnJvbSBgaG9tZS5qc29uYFxuICAgICAgICAgICAqL31cbiAgICAgICAgICB7ZGF0YS50aXRsZX1cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmcgPGNvZGU+cGFnZXMvaW5kZXguanM8L2NvZGU+LiBIZWxsb1xuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGgzPkRvY3VtZW50YXRpb24gJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGgzPkxlYXJuICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5MZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoIHF1aXp6ZXMhPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy90cmVlL21hc3Rlci9leGFtcGxlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDM+RXhhbXBsZXMgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPkRpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzIHByb2plY3RzLjwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS9pbXBvcnQ/ZmlsdGVyPW5leHQuanMmdXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPkRlcGxveSAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vemVpdC5jbz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvemVpdC5zdmdcIiBhbHQ9XCJaRUlUIExvZ29cIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgICBjb2xvcjogJHtwcmV2aWV3ICYmICdyZWQnfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQ6aG92ZXIsXG4gICAgICAgIC5jYXJkOmZvY3VzLFxuICAgICAgICAuY2FyZDphY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vKlxuICoqIEZldGNoIGRhdGEgd2l0aCBnZXRTdGF0aWNQcm9wcyBiYXNlZCBvbiAncHJldmlldycgbW9kZVxuICovXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgZnVuY3Rpb24gKHtcbiAgcHJldmlldyxcbiAgcHJldmlld0RhdGEsXG59KSB7XG4gIGlmIChwcmV2aWV3KSB7XG4gICAgcmV0dXJuIGdldEdpdGh1YlByZXZpZXdQcm9wcyh7XG4gICAgICAuLi5wcmV2aWV3RGF0YSxcbiAgICAgIGZpbGVSZWxhdGl2ZVBhdGg6ICdjb250ZW50L2hvbWUuanNvbicsXG4gICAgICBwYXJzZTogcGFyc2VKc29uLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc291cmNlUHJvdmlkZXI6IG51bGwsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIHByZXZpZXc6IGZhbHNlLFxuICAgICAgZmlsZToge1xuICAgICAgICBmaWxlUmVsYXRpdmVQYXRoOiAnY29udGVudC9ob21lLmpzb24nLFxuICAgICAgICBkYXRhOiAoYXdhaXQgaW1wb3J0KCcuLi9jb250ZW50L2hvbWUuanNvbicpKS5kZWZhdWx0LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59XG4iXX0= */
/*@ sourceURL=/Users/joshunwin/code/josh-unwin/tina-nextjs/pages/index.tsx */`), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NodW53aW4vY29kZS9qb3NoLXVud2luL3RpbmEtbmV4dGpzL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTnlCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiL1VzZXJzL2pvc2h1bndpbi9jb2RlL2pvc2gtdW53aW4vdGluYS1uZXh0anMvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLypcbiAqKiBJbXBvcnQgaGVscGVycyBhbmQgR2V0U3RhdGljUHJvcHMgdHlwZVxuICovXG5pbXBvcnQgeyBnZXRHaXRodWJQcmV2aWV3UHJvcHMsIHBhcnNlSnNvbiB9IGZyb20gJ25leHQtdGluYWNtcy1naXRodWInXG5pbXBvcnQge1xuICB1c2VHaXRodWJKc29uRm9ybSxcbiAgdXNlR2l0aHViVG9vbGJhclBsdWdpbnMsXG59IGZyb20gJ3JlYWN0LXRpbmFjbXMtZ2l0aHViJ1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZmlsZSwgcHJldmlldyB9KSB7XG4gIGNvbnN0IGZvcm1PcHRpb25zID0ge1xuICAgIGxhYmVsOiAnSG9tZSBQYWdlJyxcbiAgICBmaWVsZHM6IFt7IG5hbWU6ICd0aXRsZScsIGNvbXBvbmVudDogJ3RleHQnIH1dLFxuICB9XG5cbiAgLypcbiAgICoqIFJlZ2lzdGVyIGEgSlNPTiBUaW5hIEZvcm1cbiAgICovXG4gIGNvbnN0IFtkYXRhLCBmb3JtXSA9IHVzZUdpdGh1Ykpzb25Gb3JtKGZpbGUsIGZvcm1PcHRpb25zKVxuXG4gIHVzZUdpdGh1YlRvb2xiYXJQbHVnaW5zKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIHsvKlxuICAgICAgICAgICAqKiBSZW5kZXIgdGhlIHRpdGxlIGZyb20gYGhvbWUuanNvbmBcbiAgICAgICAgICAgKi99XG4gICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5nIDxjb2RlPnBhZ2VzL2luZGV4LmpzPC9jb2RlPi4gSGVsbG9cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jc1wiIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoMz5Eb2N1bWVudGF0aW9uICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5GaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFyblwiIGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgIDxoMz5MZWFybiAmcmFycjs8L2gzPlxuICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgzPkV4YW1wbGVzICZyYXJyOzwvaDM+XG4gICAgICAgICAgICA8cD5EaXNjb3ZlciBhbmQgZGVwbG95IGJvaWxlcnBsYXRlIGV4YW1wbGUgTmV4dC5qcyBwcm9qZWN0cy48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vaW1wb3J0P2ZpbHRlcj1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMz5EZXBsb3kgJnJhcnI7PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3plaXQuY28/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5IDxpbWcgc3JjPVwiL3plaXQuc3ZnXCIgYWx0PVwiWkVJVCBMb2dvXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgY29sb3I6ICR7cHJldmlldyAmJiAncmVkJ307XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLypcbiAqKiBGZXRjaCBkYXRhIHdpdGggZ2V0U3RhdGljUHJvcHMgYmFzZWQgb24gJ3ByZXZpZXcnIG1vZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICh7XG4gIHByZXZpZXcsXG4gIHByZXZpZXdEYXRhLFxufSkge1xuICBpZiAocHJldmlldykge1xuICAgIHJldHVybiBnZXRHaXRodWJQcmV2aWV3UHJvcHMoe1xuICAgICAgLi4ucHJldmlld0RhdGEsXG4gICAgICBmaWxlUmVsYXRpdmVQYXRoOiAnY29udGVudC9ob21lLmpzb24nLFxuICAgICAgcGFyc2U6IHBhcnNlSnNvbixcbiAgICB9KVxuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHNvdXJjZVByb3ZpZGVyOiBudWxsLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBwcmV2aWV3OiBmYWxzZSxcbiAgICAgIGZpbGU6IHtcbiAgICAgICAgZmlsZVJlbGF0aXZlUGF0aDogJ2NvbnRlbnQvaG9tZS5qc29uJyxcbiAgICAgICAgZGF0YTogKGF3YWl0IGltcG9ydCgnLi4vY29udGVudC9ob21lLmpzb24nKSkuZGVmYXVsdCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/joshunwin/code/josh-unwin/tina-nextjs/pages/index.tsx */"));
}
/*
 ** Fetch data with getStaticProps based on 'preview' mode
 */

const getStaticProps = async function ({
  preview,
  previewData
}) {
  if (preview) {
    return Object(next_tinacms_github__WEBPACK_IMPORTED_MODULE_3__["getGithubPreviewProps"])(_objectSpread({}, previewData, {
      fileRelativePath: 'content/home.json',
      parse: next_tinacms_github__WEBPACK_IMPORTED_MODULE_3__["parseJson"]
    }));
  }

  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ../content/home.json */ "./content/home.json", 3))).default
      }
    }
  };
};

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshunwin/code/josh-unwin/tina-nextjs/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "next-tinacms-github":
/*!**************************************!*\
  !*** external "next-tinacms-github" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-tinacms-github");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tinacms-github":
/*!***************************************!*\
  !*** external "react-tinacms-github" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tinacms-github");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map