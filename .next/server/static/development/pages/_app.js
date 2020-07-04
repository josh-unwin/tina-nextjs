module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7OztBQWVBOzs7OztBQUlBLGtDQUFrQztBQUFBO0FBQWxDO0FBQWtDLENBQWxDLEVBR3lDO0FBQ3ZDLFFBQU1BLFNBQVMsR0FBRyxNQUFNLDJDQUF4QixHQUF3QixDQUF4QjtBQUNBLFNBQU87QUFBUDtBQUFPLEdBQVA7QUFHYTs7QUFBQSxrQkFBMkNDLGVBQU1DLFNBQWpELENBR2I7QUFJQTtBQUNBO0FBQ0E7QUFDQUMsbUJBQWlCLG9CQUE0QztBQUMzRDtBQUdGQzs7QUFBQUEsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFxRCxLQUEzRDtBQUdBLHdCQUNFLHFFQUdJO0FBQ0E7QUFDSSxNQUFFQyxPQUFPLElBQVQsV0FBd0I7QUFBRUMsU0FBRyxFQUFFQyxTQUFTLENBQXhDLE1BQXdDO0FBQWhCLEtBQXhCLEdBTlYsRUFDRSxFQURGO0FBZkY7O0FBQUE7OztBQUhtQkMsRyxDQUlaQyxtQkFKWUQsR0FJVUUsa0JBSlZGO0FBQUFBLEcsQ0FLWkcsZUFMWUgsR0FLTUUsa0JBTE5GO0FBK0JyQjtBQUNBOztBQUVBLFVBQTJDO0FBQ3pDSSxlQUFhLEdBQUcscUJBQVMsTUFBTTtBQUM3QkMsV0FBTyxDQUFQQTtBQURGRCxHQUFnQixDQUFoQkE7QUFNQUUsU0FBTyxHQUFHLHFCQUFTLE1BQU07QUFDdkJELFdBQU8sQ0FBUEE7QUFERkMsR0FBVSxDQUFWQTtBQU9GLEMsQ0FBQTs7O0FBQ08sc0JBQTJCO0FBQ2hDLFlBQTJDRixhQUFhO0FBQ3hELFNBQU9HLENBQUMsQ0FBUjtBQUdLOztBQUFBLDJCQUFtQztBQUN4QztBQUNBLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBTztBQUNMLGdCQUFZO0FBQ1YsZ0JBQTJDRCxPQUFPO0FBQ2xEO0FBSEc7O0FBS0wsbUJBQWU7QUFDYixnQkFBMkNBLE9BQU87QUFDbEQ7QUFQRzs7QUFTTCxpQkFBYTtBQUNYLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVhHOztBQWFMRSxRQUFJLEVBQUUsTUFBTTtBQUNWLGdCQUEyQ0YsT0FBTztBQUNsREcsWUFBTSxDQUFOQTtBQWZHO0FBaUJMQyxRQUFJLEVBQUUsYUFBOEI7QUFDbEMsZ0JBQTJDSixPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsVUFBUCxFQUFPQSxDQUFQO0FBbkJHO0FBcUJMRSxVQUFNLEVBQUUsY0FBK0I7QUFDckMsZ0JBQTJDTCxPQUFPO0FBQ2xELFlBQU1NLFNBQVMsR0FBR0MsRUFBRSxVQUFwQjtBQUNBLFlBQU1DLE9BQU8sR0FBR0QsRUFBRSxJQUFsQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsZ0JBQVAsT0FBT0EsQ0FBUDtBQTFCRztBQTRCTE0sV0FBTyxFQUFFLGFBQThCO0FBQ3JDLGdCQUEyQ1QsT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLGFBQVAsRUFBT0EsQ0FBUDtBQTlCRztBQWdDTE8sYUFBUyxFQUFFLGNBQStCO0FBQ3hDLGdCQUEyQ1YsT0FBTztBQUNsRCxZQUFNVyxZQUFZLEdBQUdKLEVBQUUsVUFBdkI7QUFDQSxZQUFNSyxVQUFVLEdBQUdMLEVBQUUsSUFBckI7QUFFQSxhQUFPSixNQUFNLENBQU5BLHNCQUFQLFVBQU9BLENBQVA7QUFyQ0o7QUFBTyxHQUFQO0FBd0NEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/MDJiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default, EditLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Site; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditLink\", function() { return EditLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tinacms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tinacms */ \"tinacms\");\n/* harmony import */ var tinacms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tinacms__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_tinacms_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tinacms-github */ \"react-tinacms-github\");\n/* harmony import */ var react_tinacms_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tinacms_github__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/joshunwin/code/josh-unwin/tina-nextjs/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Site extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {\n  constructor(props) {\n    super(props);\n    /**\n     * 1. Create the TinaCMS instance\n     */\n\n    _defineProperty(this, \"cms\", void 0);\n\n    this.cms = new tinacms__WEBPACK_IMPORTED_MODULE_2__[\"TinaCMS\"]({\n      enabled: props.pageProps.preview,\n      apis: {\n        /**\n         * 2. Register the GithubClient\n         */\n        github: new react_tinacms_github__WEBPACK_IMPORTED_MODULE_3__[\"GithubClient\"]({\n          proxy: '/api/proxy-github',\n          authCallbackRoute: '/api/create-github-access-token',\n          clientId: \"ca178947b355d173fd67\",\n          baseRepoFullName: \"josh-unwin/tina-nextjs\" // e.g: tinacms/tinacms.org,\n\n        })\n      },\n\n      /**\n       * 3. Use the Sidebar and Toolbar\n       */\n      sidebar: props.pageProps.preview,\n      toolbar: props.pageProps.preview\n    });\n  }\n\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return (\n      /**\n       * 4. Wrap the page Component with the Tina and Github providers\n       */\n      __jsx(tinacms__WEBPACK_IMPORTED_MODULE_2__[\"TinaProvider\"], {\n        cms: this.cms,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }\n      }, __jsx(react_tinacms_github__WEBPACK_IMPORTED_MODULE_3__[\"TinacmsGithubProvider\"], {\n        onLogin: onLogin,\n        onLogout: onLogout,\n        error: pageProps.error,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 9\n        }\n      }, __jsx(EditLink, {\n        cms: this.cms,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }\n      }), __jsx(Component, _extends({}, pageProps, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }\n      }))))\n    );\n  }\n\n}\n\nconst onLogin = () => {\n  const token = localStorage.getItem('tinacms-github-token') || null;\n  const headers = new Headers();\n\n  if (token) {\n    headers.append('Authorization', 'Bearer ' + token);\n  }\n\n  return fetch(`/api/preview`, {\n    headers: headers\n  }).then(() => {\n    window.location.href = window.location.pathname;\n  });\n};\n\nconst onLogout = () => {\n  return fetch(`/api/reset-preview`).then(() => {\n    window.location.reload();\n  });\n};\n\nconst EditLink = ({\n  cms\n}) => {\n  return __jsx(\"button\", {\n    onClick: () => cms.toggle(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, cms.enabled ? 'Exit Edit Mode' : 'Edit This Site');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIlNpdGUiLCJBcHAiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY21zIiwiVGluYUNNUyIsImVuYWJsZWQiLCJwYWdlUHJvcHMiLCJwcmV2aWV3IiwiYXBpcyIsImdpdGh1YiIsIkdpdGh1YkNsaWVudCIsInByb3h5IiwiYXV0aENhbGxiYWNrUm91dGUiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJiYXNlUmVwb0Z1bGxOYW1lIiwic2lkZWJhciIsInRvb2xiYXIiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJvbkxvZ2luIiwib25Mb2dvdXQiLCJlcnJvciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiZmV0Y2giLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicGF0aG5hbWUiLCJyZWxvYWQiLCJFZGl0TGluayIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLElBQU4sU0FBbUJDLCtDQUFuQixDQUF1QjtBQUdwQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBOzs7O0FBRmlCOztBQUtqQixTQUFLQyxHQUFMLEdBQVcsSUFBSUMsK0NBQUosQ0FBWTtBQUNyQkMsYUFBTyxFQUFFSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0JDLE9BREo7QUFFckJDLFVBQUksRUFBRTtBQUNKOzs7QUFHQUMsY0FBTSxFQUFFLElBQUlDLGlFQUFKLENBQWlCO0FBQ3ZCQyxlQUFLLEVBQUUsbUJBRGdCO0FBRXZCQywyQkFBaUIsRUFBRSxpQ0FGSTtBQUd2QkMsa0JBQVEsRUFBRUMsc0JBSGE7QUFJdkJDLDBCQUFnQixFQUFFRCx3QkFKSyxDQUl1Qjs7QUFKdkIsU0FBakI7QUFKSixPQUZlOztBQWFyQjs7O0FBR0FFLGFBQU8sRUFBRWQsS0FBSyxDQUFDSSxTQUFOLENBQWdCQyxPQWhCSjtBQWlCckJVLGFBQU8sRUFBRWYsS0FBSyxDQUFDSSxTQUFOLENBQWdCQztBQWpCSixLQUFaLENBQVg7QUFtQkQ7O0FBRURXLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUMsZUFBRjtBQUFhYjtBQUFiLFFBQTJCLEtBQUtKLEtBQXRDO0FBQ0E7QUFDRTs7O0FBR0EsWUFBQyxvREFBRDtBQUFjLFdBQUcsRUFBRSxLQUFLQyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywwRUFBRDtBQUNFLGVBQU8sRUFBRWlCLE9BRFg7QUFFRSxnQkFBUSxFQUFFQyxRQUZaO0FBR0UsYUFBSyxFQUFFZixTQUFTLENBQUNnQixLQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUUsTUFBQyxRQUFEO0FBQVUsV0FBRyxFQUFFLEtBQUtuQixHQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkYsRUFTRSxNQUFDLFNBQUQsZUFBZUcsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBVEYsQ0FERjtBQUpGO0FBa0JEOztBQWpEbUM7O0FBcUR0QyxNQUFNYyxPQUFPLEdBQUcsTUFBTTtBQUNyQixRQUFNRyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixzQkFBckIsS0FBZ0QsSUFBOUQ7QUFDQyxRQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixFQUFoQjs7QUFFQSxNQUFJSixLQUFKLEVBQVc7QUFDVEcsV0FBTyxDQUFDRSxNQUFSLENBQWUsZUFBZixFQUFnQyxZQUFZTCxLQUE1QztBQUNEOztBQUVELFNBQU9NLEtBQUssQ0FBRSxjQUFGLEVBQWlCO0FBQUVILFdBQU8sRUFBRUE7QUFBWCxHQUFqQixDQUFMLENBQTRDSSxJQUE1QyxDQUFpRCxNQUFNO0FBQzVEQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCRixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JFLFFBQXZDO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FYRDs7QUFhQSxNQUFNYixRQUFRLEdBQUcsTUFBTTtBQUNyQixTQUFPUSxLQUFLLENBQUUsb0JBQUYsQ0FBTCxDQUE0QkMsSUFBNUIsQ0FBaUMsTUFBTTtBQUM1Q0MsVUFBTSxDQUFDQyxRQUFQLENBQWdCRyxNQUFoQjtBQUNELEdBRk0sQ0FBUDtBQUdELENBSkQ7O0FBVU8sTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBRWpDO0FBQUYsQ0FBRCxLQUE0QjtBQUNsRCxTQUNFO0FBQVEsV0FBTyxFQUFFLE1BQU1BLEdBQUcsQ0FBQ2tDLE1BQUosRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbEMsR0FBRyxDQUFDRSxPQUFKLEdBQWMsZ0JBQWQsR0FBaUMsZ0JBRHBDLENBREY7QUFLRCxDQU5NIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgVGluYUNNUywgVGluYVByb3ZpZGVyIH0gZnJvbSAndGluYWNtcydcbmltcG9ydCB7IEdpdGh1YkNsaWVudCwgVGluYWNtc0dpdGh1YlByb3ZpZGVyIH0gZnJvbSAncmVhY3QtdGluYWNtcy1naXRodWInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpdGUgZXh0ZW5kcyBBcHAge1xuICBjbXM6IFRpbmFDTVNcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIC8qKlxuICAgICAqIDEuIENyZWF0ZSB0aGUgVGluYUNNUyBpbnN0YW5jZVxuICAgICAqL1xuICAgIHRoaXMuY21zID0gbmV3IFRpbmFDTVMoe1xuICAgICAgZW5hYmxlZDogcHJvcHMucGFnZVByb3BzLnByZXZpZXcsXG4gICAgICBhcGlzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAyLiBSZWdpc3RlciB0aGUgR2l0aHViQ2xpZW50XG4gICAgICAgICAqL1xuICAgICAgICBnaXRodWI6IG5ldyBHaXRodWJDbGllbnQoe1xuICAgICAgICAgIHByb3h5OiAnL2FwaS9wcm94eS1naXRodWInLFxuICAgICAgICAgIGF1dGhDYWxsYmFja1JvdXRlOiAnL2FwaS9jcmVhdGUtZ2l0aHViLWFjY2Vzcy10b2tlbicsXG4gICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9DTElFTlRfSUQsXG4gICAgICAgICAgYmFzZVJlcG9GdWxsTmFtZTogcHJvY2Vzcy5lbnYuUkVQT19GVUxMX05BTUUsIC8vIGUuZzogdGluYWNtcy90aW5hY21zLm9yZyxcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiAzLiBVc2UgdGhlIFNpZGViYXIgYW5kIFRvb2xiYXJcbiAgICAgICAqL1xuICAgICAgc2lkZWJhcjogcHJvcHMucGFnZVByb3BzLnByZXZpZXcsXG4gICAgICB0b29sYmFyOiBwcm9wcy5wYWdlUHJvcHMucHJldmlldyxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgLyoqXG4gICAgICAgKiA0LiBXcmFwIHRoZSBwYWdlIENvbXBvbmVudCB3aXRoIHRoZSBUaW5hIGFuZCBHaXRodWIgcHJvdmlkZXJzXG4gICAgICAgKi9cbiAgICAgIDxUaW5hUHJvdmlkZXIgY21zPXt0aGlzLmNtc30+XG4gICAgICAgIDxUaW5hY21zR2l0aHViUHJvdmlkZXJcbiAgICAgICAgICBvbkxvZ2luPXtvbkxvZ2lufVxuICAgICAgICAgIG9uTG9nb3V0PXtvbkxvZ291dH1cbiAgICAgICAgICBlcnJvcj17cGFnZVByb3BzLmVycm9yfVxuICAgICAgICA+XG4gICAgICAgICAgey8qKlxuICAgICAgICAgICAqIDUuIEFkZCBhIGJ1dHRvbiBmb3IgZW50ZXJpbmcgUHJldmlldy9FZGl0IE1vZGVcbiAgICAgICAgICAgKi99XG4gICAgICAgICAgPEVkaXRMaW5rIGNtcz17dGhpcy5jbXN9IC8+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1RpbmFjbXNHaXRodWJQcm92aWRlcj5cbiAgICAgIDwvVGluYVByb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5cbmNvbnN0IG9uTG9naW4gPSAoKSA9PiB7XG5cdGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RpbmFjbXMtZ2l0aHViLXRva2VuJykgfHwgbnVsbFxuICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuXG4gIGlmICh0b2tlbikge1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdG9rZW4pXG4gIH1cblxuICByZXR1cm4gZmV0Y2goYC9hcGkvcHJldmlld2AsIHsgaGVhZGVyczogaGVhZGVycyB9KS50aGVuKCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICB9KVxufVxuXG5jb25zdCBvbkxvZ291dCA9ICgpID0+IHtcbiAgcmV0dXJuIGZldGNoKGAvYXBpL3Jlc2V0LXByZXZpZXdgKS50aGVuKCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfSlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0TGlua1Byb3BzIHtcbiAgY21zOiBUaW5hQ01TXG59XG5cbmV4cG9ydCBjb25zdCBFZGl0TGluayA9ICh7IGNtcyB9OiBFZGl0TGlua1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbXMudG9nZ2xlKCl9PlxuICAgICAge2Ntcy5lbmFibGVkID8gJ0V4aXQgRWRpdCBNb2RlJyA6ICdFZGl0IFRoaXMgU2l0ZSd9XG4gICAgPC9idXR0b24+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-tinacms-github":
/*!***************************************!*\
  !*** external "react-tinacms-github" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-tinacms-github\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10aW5hY21zLWdpdGh1YlwiP2VmZTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtdGluYWNtcy1naXRodWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10aW5hY21zLWdpdGh1YlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-tinacms-github\n");

/***/ }),

/***/ "tinacms":
/*!**************************!*\
  !*** external "tinacms" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tinacms\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aW5hY21zXCI/NmM5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0aW5hY21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGluYWNtc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///tinacms\n");

/***/ })

/******/ });