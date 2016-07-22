webpackJsonp([13,8],{

/***/ 20:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(43)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\paperManage.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8e4ee2f0/paperManage.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var head = __webpack_require__(49);
	__webpack_require__(46);
	module.exports = {
	    template: '.paperManage',
	    components: {
	        tophead: head
	    }
	};

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./paperManage.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./paperManage.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".paperManage {\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\n.paperManage a {\n  text-decoration: none;\n}\n.paperManage li {\n  list-style: none;\n}\n.paperManage .formhead a:hover {\n  text-decoration: none;\n  color: white;\n  background: blue;\n}\n.paperManage {\n  font-style: normal;\n}\n.paperManage .head {\n  width: 100%;\n  padding-left: 10px;\n  background: deepskyblue;\n  color: white;\n  text-align: left;\n  height: 50px;\n  line-height: 50px;\n  font-size: 18px;\n}\n.paperManage .xian {\n  font-weight: bold;\n  color: blue;\n  margin-right: 3px;\n}\n.paperManage .form {\n  width: 100%;\n}\n.paperManage .formhead {\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  overflow: hidden;\n  zoom: 1;\n}\n.paperManage .formhead span,\n.formhead select,\n.formhead a {\n  height: 30px;\n  vertical-align: middle;\n  display: inline-block;\n  line-height: 30px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n.paperManage .formhead select {\n  width: 100px;\n}\n.paperManage .lookbtn {\n  width: 100px;\n  height: 30px;\n  text-decoration: none;\n  color: blue;\n  background: deepskyblue;\n  border-radius: 14px;\n  line-height: 30px;\n  text-align: center;\n  color: white;\n}\n.paperManage .look:after {\n  clear: both;\n}\n.paperManage .usernews {\n  margin: 0 auto;\n  height: auto;\n  overflow: hidden;\n  width: 90%;\n  position: relative;\n}\n.paperManage .usernews li {\n  float: left;\n  margin-right: 8px;\n  background: deepskyblue;\n  border-radius: 5px;\n  color: white;\n  text-align: center;\n  transition: all 0.1s linear;\n  width: 11%;\n  height: 30px;\n  line-height: 30px;\n  position: re;\n}\n.paperManage .usernews li:hover {\n  transform: rotate(2deg);\n  cursor: pointer;\n}\n.paperManage .usernews li a {\n  color: white;\n}\n.paperManage .usernews .show-usernews {\n  position: absolute;\n  left: 0;\n  top: 30px;\n  width: 100%;\n  padding: 5px;\n  background: yellow;\n  height: 100px;\n}\n.paperManage .looktest {\n  color: orangered;\n  cursor: pointer;\n}\n.paperManage .look-test {\n  cursor: pointer;\n  font-style: normal;\n}\n.paperManage .look-test:hover {\n  color: deepskyblue;\n}\n.paperManage .testbody {\n  margin-top: 10px;\n  border-top: 1px solid deepskyblue;\n  padding: 20px;\n}\n.paperManage .testbody li {\n  margin-bottom: 5px;\n  display: block;\n  overflow: hidden;\n  zoom: 1;\n  padding: 5px;\n}\n.paperManage .testbody li i {\n  border-bottom: 5px solid cornflowerblue;\n  heihgt: 30px;\n  background: lightskyblue;\n  border-radius: 10px;\n  line-height: 30px;\n  width: 100px;\n  display: inline-block;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n}\n.paperManage .testbody li div {\n  padding: 5px 0;\n  margin-top: 10px;\n  color: black;\n  background: white;\n}\n.submitp {\n  width: 100px;\n  margin: 0 auto;\n}\n.pass,\n.back {\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n  border-radius: 100%;\n  margin: 0 auto;\n  font-size: 14px;\n  color: darkblue;\n  line-height: 36px;\n  text-align: center;\n  background: white;\n  border: 2px solid deepskyblue;\n  cursor: pointer;\n}\n.pass:hover,\n.back:hover {\n  border: 2px solid orangered;\n  background: moccasin;\n  color: red;\n}\n\n/*# sourceMappingURL=maps/paperManage.css.map */\n", ""]);
	
	// exports


/***/ },

/***/ 48:
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"paperManage\">\n    <tophead></tophead>\n    <form class=\"form\">\n        <div class=\"overflow formhead\">\n            <span>科目</span>\n            <select class=\"selectSub \">\n                <option>语文</option>\n            </select>\n            <a href=\"javascript:void(0)\" class=\"lookbtn\" >获取试题</a>\n        </div>\n        <ul class=\"usernews\">\n            <li><i>试题：</i><span></span></li>\n            <li><i>科目：</i><span></span></li>\n            <li><i>年级：</i><span></span></li>\n            <li><i>状态：</i><span></span></li>\n            <li><i>一审意见：</i><span></span></li>\n            <li><i>二审意见：</i><span></span></li>\n            <li><i>所属试卷：</i><span></span></li>\n            <li> <i  class=\"looktest\">查看试卷</i></li>\n        </ul>\n        <ul class=\"testbody\">\n            <li>\n                <i class=\"i_btm\">原题</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">属性</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">题文</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">选项</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">解析</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">点评</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <p class=\"submitp\"><span class=\"pass\">通过</span>  <span class=\"back\">退回</span></p>\n                <i class=\"i_btm\">原因</i>\n                <div class=\"comment\">内容占位</div>\n            </li>\n        </ul>\n    </form>\n </div>\n";

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(50)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\head.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(51)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0ac0e2f9/head.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(46);
	exports.default = {
	    template: "#head"
	};

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <p class=\"head\"><span class=\"xian\" >|</span>试题一审</p>\n</div>\n";

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzP2RhMDQiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzP2I5ODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFwZXJNYW5hZ2UudnVlIiwid2VicGFjazovLy9wYXBlck1hbmFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL2Nzcy9wYXBlck1hbmFnZS5jc3M/NTRkOSIsIndlYnBhY2s6Ly8vLi9idW5kbGUvY3NzL3BhcGVyTWFuYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXBlck1hbmFnZS52dWU/ZTdhMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkLnZ1ZSIsIndlYnBhY2s6Ly8vaGVhZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZC52dWU/YTA1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFF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QixnQ0FBZ0MseUJBQXlCLGVBQWUsR0FBRzs7QUFFbHFHOzs7Ozs7OztBQ1BBLHd2RDs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQStGO0FBQy9GO0FBQ0EsYUFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUMsSTs7Ozs7Ozs7Ozs7OztBQ2hCRCxxQkFDQTs7ZUFFQTtBQURBLEc7Ozs7Ozs7QUNSQSxvRyIsImZpbGUiOiIxMy5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEwIDExIDEyIDEzIDE0XG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTAgMTIgMTMgMTRcbiAqKi8iLCJ2YXIgX192dWVfc2NyaXB0X18sIF9fdnVlX3RlbXBsYXRlX19cbl9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lczIwMTUmcGx1Z2luc1tdPXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYXBlck1hbmFnZS52dWVcIilcbmlmIChfX3Z1ZV9zY3JpcHRfXyAmJlxuICAgIF9fdnVlX3NjcmlwdF9fLl9fZXNNb2R1bGUgJiZcbiAgICBPYmplY3Qua2V5cyhfX3Z1ZV9zY3JpcHRfXykubGVuZ3RoID4gMSkge1xuICBjb25zb2xlLndhcm4oXCJbdnVlLWxvYWRlcl0gc3JjXFxcXGNvbXBvbmVudHNcXFxccGFwZXJNYW5hZ2UudnVlOiBuYW1lZCBleHBvcnRzIGluICoudnVlIGZpbGVzIGFyZSBpZ25vcmVkLlwiKX1cbl9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtaHRtbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFwZXJNYW5hZ2UudnVlXCIpXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX3NjcmlwdF9fIHx8IHt9XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG5pZiAoX192dWVfdGVtcGxhdGVfXykge1xuKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgfHwgKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgPSB7fSkpIDogbW9kdWxlLmV4cG9ydHMpLnRlbXBsYXRlID0gX192dWVfdGVtcGxhdGVfX1xufVxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIHZhciBpZCA9IFwiX3YtOGU0ZWUyZjAvcGFwZXJNYW5hZ2UudnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgX192dWVfdGVtcGxhdGVfXylcbiAgfVxufSkoKX1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcGFwZXJNYW5hZ2UudnVlXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTNcbiAqKi8iLCJcclxuPHRlbXBsYXRlID5cclxuICAgIDxkaXYgY2xhc3M9XCJwYXBlck1hbmFnZVwiPlxyXG4gICAgICAgIDx0b3BoZWFkPjwvdG9waGVhZD5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJmbG93IGZvcm1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7np5Hnm648L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0U3ViIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+6K+t5paHPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImxvb2tidG5cIiA+6I635Y+W6K+V6aKYPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidXNlcm5ld3NcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48aT7or5XpopjvvJo8L2k+PHNwYW4+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGk+56eR55uu77yaPC9pPjxzcGFuPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpPuW5tOe6p++8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48aT7nirbmgIHvvJo8L2k+PHNwYW4+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGk+5LiA5a6h5oSP6KeB77yaPC9pPjxzcGFuPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpPuS6jOWuoeaEj+inge+8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48aT7miYDlsZ7or5XljbfvvJo8L2k+PHNwYW4+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+IDxpICBjbGFzcz1cImxvb2t0ZXN0XCI+5p+l55yL6K+V5Y23PC9pPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInRlc3Rib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpX2J0bVwiPuWOn+mimDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuWGheWuueWNoOS9jTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImlfYnRtXCI+5bGe5oCnPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+5YaF5a655Y2g5L2NPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaV9idG1cIj7popjmloc8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7lhoXlrrnljaDkvY08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpX2J0bVwiPumAiemhuTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuWGheWuueWNoOS9jTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImlfYnRtXCI+6Kej5p6QPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+5YaF5a655Y2g5L2NPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaV9idG1cIj7ngrnor4Q8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7lhoXlrrnljaDkvY08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdWJtaXRwXCI+PHNwYW4gY2xhc3M9XCJwYXNzXCI+6YCa6L+HPC9zcGFuPiAgPHNwYW4gY2xhc3M9XCJiYWNrXCI+6YCA5ZuePC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImlfYnRtXCI+5Y6f5ZugPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCI+5YaF5a655Y2g5L2NPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIHZhciBoZWFkPXJlcXVpcmUoXCJoZWFkLnZ1ZVwiKTtcclxuICAgIHJlcXVpcmUoXCIuLi8uLi9idW5kbGUvY3NzL3BhcGVyTWFuYWdlLmNzc1wiKTtcclxuICAgIG1vZHVsZS5leHBvcnRzPXtcclxuICAgICAgICB0ZW1wbGF0ZTogJy5wYXBlck1hbmFnZScsXHJcbiAgICAgICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgICAgIHRvcGhlYWQ6aGVhZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBwYXBlck1hbmFnZS52dWU/MTYwM2VlMjNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BhcGVyTWFuYWdlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wYXBlck1hbmFnZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wYXBlck1hbmFnZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9idW5kbGUvY3NzL3BhcGVyTWFuYWdlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDEzIDE0XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGFwZXJNYW5hZ2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJcXFxcNUZBRVxcXFw4RjZGXFxcXDk2QzVcXFxcOUVEMVxcXCI7XFxufVxcbi5wYXBlck1hbmFnZSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnBhcGVyTWFuYWdlIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5wYXBlck1hbmFnZSAuZm9ybWhlYWQgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG4ucGFwZXJNYW5hZ2Uge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4ucGFwZXJNYW5hZ2UgLmhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBkZWVwc2t5Ymx1ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLnBhcGVyTWFuYWdlIC54aWFuIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGJsdWU7XFxuICBtYXJnaW4tcmlnaHQ6IDNweDtcXG59XFxuLnBhcGVyTWFuYWdlIC5mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGFwZXJNYW5hZ2UgLmZvcm1oZWFkIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHpvb206IDE7XFxufVxcbi5wYXBlck1hbmFnZSAuZm9ybWhlYWQgc3BhbixcXG4uZm9ybWhlYWQgc2VsZWN0LFxcbi5mb3JtaGVhZCBhIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5wYXBlck1hbmFnZSAuZm9ybWhlYWQgc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuLnBhcGVyTWFuYWdlIC5sb29rYnRuIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibHVlO1xcbiAgYmFja2dyb3VuZDogZGVlcHNreWJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wYXBlck1hbmFnZSAubG9vazphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLnBhcGVyTWFuYWdlIC51c2VybmV3cyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogOTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucGFwZXJNYW5hZ2UgLnVzZXJuZXdzIGxpIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBiYWNrZ3JvdW5kOiBkZWVwc2t5Ymx1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcXG4gIHdpZHRoOiAxMSU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHBvc2l0aW9uOiByZTtcXG59XFxuLnBhcGVyTWFuYWdlIC51c2VybmV3cyBsaTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBhcGVyTWFuYWdlIC51c2VybmV3cyBsaSBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnBhcGVyTWFuYWdlIC51c2VybmV3cyAuc2hvdy11c2VybmV3cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4ucGFwZXJNYW5hZ2UgLmxvb2t0ZXN0IHtcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYXBlck1hbmFnZSAubG9vay10ZXN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLnBhcGVyTWFuYWdlIC5sb29rLXRlc3Q6aG92ZXIge1xcbiAgY29sb3I6IGRlZXBza3libHVlO1xcbn1cXG4ucGFwZXJNYW5hZ2UgLnRlc3Rib2R5IHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZGVlcHNreWJsdWU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4ucGFwZXJNYW5hZ2UgLnRlc3Rib2R5IGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHpvb206IDE7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcbi5wYXBlck1hbmFnZSAudGVzdGJvZHkgbGkgaSB7XFxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgY29ybmZsb3dlcmJsdWU7XFxuICBoZWloZ3Q6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaWdodHNreWJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnBhcGVyTWFuYWdlIC50ZXN0Ym9keSBsaSBkaXYge1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbi5zdWJtaXRwIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ucGFzcyxcXG4uYmFjayB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBkZWVwc2t5Ymx1ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBhc3M6aG92ZXIsXFxuLmJhY2s6aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlcmVkO1xcbiAgYmFja2dyb3VuZDogbW9jY2FzaW47XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1tYXBzL3BhcGVyTWFuYWdlLmNzcy5tYXAgKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYnVuZGxlL2Nzcy9wYXBlck1hbmFnZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxMyAxNFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG5cXG48ZGl2IGNsYXNzPVxcXCJwYXBlck1hbmFnZVxcXCI+XFxuICAgIDx0b3BoZWFkPjwvdG9waGVhZD5cXG4gICAgPGZvcm0gY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwib3ZlcmZsb3cgZm9ybWhlYWRcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuPuenkeebrjwvc3Bhbj5cXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJzZWxlY3RTdWIgXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7or63mloc8L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMClcXFwiIGNsYXNzPVxcXCJsb29rYnRuXFxcIiA+6I635Y+W6K+V6aKYPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInVzZXJuZXdzXFxcIj5cXG4gICAgICAgICAgICA8bGk+PGk+6K+V6aKY77yaPC9pPjxzcGFuPjwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgIDxsaT48aT7np5Hnm67vvJo8L2k+PHNwYW4+PC9zcGFuPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxpPuW5tOe6p++8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cXG4gICAgICAgICAgICA8bGk+PGk+54q25oCB77yaPC9pPjxzcGFuPjwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgIDxsaT48aT7kuIDlrqHmhI/op4HvvJo8L2k+PHNwYW4+PC9zcGFuPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxpPuS6jOWuoeaEj+inge+8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cXG4gICAgICAgICAgICA8bGk+PGk+5omA5bGe6K+V5Y2377yaPC9pPjxzcGFuPjwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgIDxsaT4gPGkgIGNsYXNzPVxcXCJsb29rdGVzdFxcXCI+5p+l55yL6K+V5Y23PC9pPjwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJ0ZXN0Ym9keVxcXCI+XFxuICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaV9idG1cXFwiPuWOn+mimDwvaT5cXG4gICAgICAgICAgICAgICAgPGRpdj7lhoXlrrnljaDkvY08L2Rpdj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImlfYnRtXFxcIj7lsZ7mgKc8L2k+XFxuICAgICAgICAgICAgICAgIDxkaXY+5YaF5a655Y2g5L2NPC9kaXY+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJpX2J0bVxcXCI+6aKY5paHPC9pPlxcbiAgICAgICAgICAgICAgICA8ZGl2PuWGheWuueWNoOS9jTwvZGl2PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaV9idG1cXFwiPumAiemhuTwvaT5cXG4gICAgICAgICAgICAgICAgPGRpdj7lhoXlrrnljaDkvY08L2Rpdj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImlfYnRtXFxcIj7op6PmnpA8L2k+XFxuICAgICAgICAgICAgICAgIDxkaXY+5YaF5a655Y2g5L2NPC9kaXY+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJpX2J0bVxcXCI+54K56K+EPC9pPlxcbiAgICAgICAgICAgICAgICA8ZGl2PuWGheWuueWNoOS9jTwvZGl2PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic3VibWl0cFxcXCI+PHNwYW4gY2xhc3M9XFxcInBhc3NcXFwiPumAmui/hzwvc3Bhbj4gIDxzcGFuIGNsYXNzPVxcXCJiYWNrXFxcIj7pgIDlm548L3NwYW4+PC9wPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaV9idG1cXFwiPuWOn+WboDwvaT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29tbWVudFxcXCI+5YaF5a655Y2g5L2NPC9kaXY+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZm9ybT5cXG4gPC9kaXY+XFxuXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLWh0bWwtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9wYXBlck1hbmFnZS52dWVcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxM1xuICoqLyIsInZhciBfX3Z1ZV9zY3JpcHRfXywgX192dWVfdGVtcGxhdGVfX1xuX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWVzMjAxNSZwbHVnaW5zW109dHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2hlYWQudnVlXCIpXG5pZiAoX192dWVfc2NyaXB0X18gJiZcbiAgICBfX3Z1ZV9zY3JpcHRfXy5fX2VzTW9kdWxlICYmXG4gICAgT2JqZWN0LmtleXMoX192dWVfc2NyaXB0X18pLmxlbmd0aCA+IDEpIHtcbiAgY29uc29sZS53YXJuKFwiW3Z1ZS1sb2FkZXJdIHNyY1xcXFxjb21wb25lbnRzXFxcXGhlYWQudnVlOiBuYW1lZCBleHBvcnRzIGluICoudnVlIGZpbGVzIGFyZSBpZ25vcmVkLlwiKX1cbl9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtaHRtbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaGVhZC52dWVcIilcbm1vZHVsZS5leHBvcnRzID0gX192dWVfc2NyaXB0X18gfHwge31cbmlmIChtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHRcbmlmIChfX3Z1ZV90ZW1wbGF0ZV9fKSB7XG4odHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcImZ1bmN0aW9uXCIgPyAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyB8fCAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyA9IHt9KSkgOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUgPSBfX3Z1ZV90ZW1wbGF0ZV9fXG59XG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7ICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgdmFyIGlkID0gXCJfdi0wYWMwZTJmOS9oZWFkLnZ1ZVwiXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChpZCwgbW9kdWxlLmV4cG9ydHMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnVwZGF0ZShpZCwgbW9kdWxlLmV4cG9ydHMsIF9fdnVlX3RlbXBsYXRlX18pXG4gIH1cbn0pKCl9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2hlYWQudnVlXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iLCI8dGVtcGxhdGUgaWQ9XCJoZWFkXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZFwiPjxzcGFuIGNsYXNzPVwieGlhblwiID58PC9zcGFuPuivlemimOS4gOWuoTwvcD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgcmVxdWlyZShcIi4uLy4uL2J1bmRsZS9jc3MvcGFwZXJNYW5hZ2UuY3NzXCIpO1xyXG4gICAgZXhwb3J0IGRlZmF1bHR7XHJcbiAgICAgICAgdGVtcGxhdGU6XCIjaGVhZFwiXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBoZWFkLnZ1ZT83NDU4ZjFhMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2PlxcbiAgICA8cCBjbGFzcz1cXFwiaGVhZFxcXCI+PHNwYW4gY2xhc3M9XFxcInhpYW5cXFwiID58PC9zcGFuPuivlemimOS4gOWuoTwvcD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2hlYWQudnVlXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTMgMTRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9