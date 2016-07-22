webpackJsonp([8,10],{

/***/ 7:
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

/***/ 8:
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

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(50)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\paperManage.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(56)
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

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var head = __webpack_require__(51);
	__webpack_require__(53);
	module.exports = {
	    template: '.paperManage',
	    components: {
	        tophead: head
	    }
	};

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(52)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\head.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
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

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(53);
	exports.default = {
	    template: "#head"
	};

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
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

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".paperManage {\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\n.paperManage a {\n  text-decoration: none;\n}\n.paperManage li {\n  list-style: none;\n}\n.paperManage .formhead a:hover {\n  text-decoration: none;\n  color: white;\n  background: blue;\n}\n.paperManage {\n  font-style: normal;\n}\n.paperManage .head {\n  width: 100%;\n  padding-left: 10px;\n  background: deepskyblue;\n  color: white;\n  text-align: left;\n  height: 50px;\n  line-height: 50px;\n  font-size: 18px;\n}\n.paperManage .xian {\n  font-weight: bold;\n  color: blue;\n  margin-right: 3px;\n}\n.paperManage .form {\n  width: 100%;\n}\n.paperManage .formhead {\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n  overflow: hidden;\n  zoom: 1;\n}\n.paperManage .formhead span,\n.formhead select,\n.formhead a {\n  height: 30px;\n  vertical-align: middle;\n  display: inline-block;\n  line-height: 30px;\n  margin-right: 5px;\n  font-weight: bold;\n}\n.paperManage .formhead select {\n  width: 100px;\n}\n.paperManage .lookbtn {\n  width: 100px;\n  height: 30px;\n  text-decoration: none;\n  color: blue;\n  background: deepskyblue;\n  border-radius: 14px;\n  line-height: 30px;\n  text-align: center;\n  color: white;\n}\n.paperManage .look:after {\n  clear: both;\n}\n.paperManage .usernews {\n  margin: 0 auto;\n  height: auto;\n  overflow: hidden;\n  width: 90%;\n  position: relative;\n}\n.paperManage .usernews li {\n  float: left;\n  margin-right: 8px;\n  background: deepskyblue;\n  border-radius: 5px;\n  color: white;\n  text-align: center;\n  transition: all 0.1s linear;\n  width: 11%;\n  height: 30px;\n  line-height: 30px;\n  position: re;\n}\n.paperManage .usernews li:hover {\n  transform: rotate(2deg);\n  cursor: pointer;\n}\n.paperManage .usernews li a {\n  color: white;\n}\n.paperManage .usernews .show-usernews {\n  position: absolute;\n  left: 0;\n  top: 30px;\n  width: 100%;\n  padding: 5px;\n  background: yellow;\n  height: 100px;\n}\n.paperManage .looktest {\n  color: orangered;\n  cursor: pointer;\n}\n.paperManage .look-test {\n  cursor: pointer;\n  font-style: normal;\n}\n.paperManage .look-test:hover {\n  color: deepskyblue;\n}\n.paperManage .testbody {\n  margin-top: 10px;\n  border-top: 1px solid deepskyblue;\n  padding: 20px;\n}\n.paperManage .testbody li {\n  margin-bottom: 5px;\n  display: block;\n  overflow: hidden;\n  zoom: 1;\n  padding: 5px;\n}\n.paperManage .testbody li i {\n  border-bottom: 5px solid cornflowerblue;\n  heihgt: 30px;\n  background: lightskyblue;\n  border-radius: 10px;\n  line-height: 30px;\n  width: 100px;\n  display: inline-block;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n}\n.paperManage .testbody li div {\n  padding: 5px 0;\n  margin-top: 10px;\n  color: black;\n  background: white;\n}\n.submitp {\n  width: 100px;\n  margin: 0 auto;\n}\n.pass,\n.back {\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n  border-radius: 100%;\n  margin: 0 auto;\n  font-size: 14px;\n  color: darkblue;\n  line-height: 36px;\n  text-align: center;\n  background: white;\n  border: 2px solid deepskyblue;\n  cursor: pointer;\n}\n.pass:hover,\n.back:hover {\n  border: 2px solid orangered;\n  background: moccasin;\n  color: red;\n}\n\n/*# sourceMappingURL=maps/paperManage.css.map */\n", ""]);
	
	// exports


/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <p class=\"head\"><span class=\"xian\" >|</span>试题一审</p>\n</div>\n";

/***/ },

/***/ 56:
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"paperManage\">\n    <tophead></tophead>\n    <form class=\"form\">\n        <div class=\"overflow formhead\">\n            <span>科目</span>\n            <select class=\"selectSub \">\n                <option>语文</option>\n            </select>\n            <a href=\"javascript:void(0)\" class=\"lookbtn\" >获取试题</a>\n        </div>\n        <ul class=\"usernews\">\n            <li><i>试题：</i><span></span></li>\n            <li><i>科目：</i><span></span></li>\n            <li><i>年级：</i><span></span></li>\n            <li><i>状态：</i><span></span></li>\n            <li><i>一审意见：</i><span></span></li>\n            <li><i>二审意见：</i><span></span></li>\n            <li><i>所属试卷：</i><span></span></li>\n            <li> <i  class=\"looktest\">查看试卷</i></li>\n        </ul>\n        <ul class=\"testbody\">\n            <li>\n                <i class=\"i_btm\">原题</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">属性</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">题文</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">选项</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">解析</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <i class=\"i_btm\">点评</i>\n                <div>内容占位</div>\n            </li>\n            <li>\n                <p class=\"submitp\"><span class=\"pass\">通过</span>  <span class=\"back\">退回</span></p>\n                <i class=\"i_btm\">原因</i>\n                <div class=\"comment\">内容占位</div>\n            </li>\n        </ul>\n    </form>\n </div>\n";

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzP2RhMDQqKioiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzP2I5ODAqKiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXBlck1hbmFnZS52dWUiLCJ3ZWJwYWNrOi8vL3BhcGVyTWFuYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkLnZ1ZSIsIndlYnBhY2s6Ly8vaGVhZC52dWUiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL2Nzcy9wYXBlck1hbmFnZS5jc3M/NTRkOSIsIndlYnBhY2s6Ly8vLi9idW5kbGUvY3NzL3BhcGVyTWFuYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkLnZ1ZT9hMDVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcGVyTWFuYWdlLnZ1ZT9lN2EwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EseUNBQXdDLGdCQUFnQjtBQUN4RCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNB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QTBCLHVCQUF1QixpQkFBaUIsc0JBQXNCLEdBQUcsaUNBQWlDLG1CQUFtQixxQkFBcUIsaUJBQWlCLHNCQUFzQixHQUFHLFlBQVksaUJBQWlCLG1CQUFtQixHQUFHLGlCQUFpQixnQkFBZ0IsaUJBQWlCLDBCQUEwQix3QkFBd0IsbUJBQW1CLG9CQUFvQixvQkFBb0Isc0JBQXNCLHVCQUF1QixzQkFBc0Isa0NBQWtDLG9CQUFvQixHQUFHLDZCQUE2QixnQ0FBZ0MseUJBQXlCLGVBQWUsR0FBRzs7QUFFbHFHOzs7Ozs7OztBQ1BBLG9HOzs7Ozs7O0FDQUEsd3ZEIiwiZmlsZSI6IjguY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgNSA2IDcgOCA5XG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDUgNyA4IDlcbiAqKi8iLCJ2YXIgX192dWVfc2NyaXB0X18sIF9fdnVlX3RlbXBsYXRlX19cbl9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lczIwMTUmcGx1Z2luc1tdPXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYXBlck1hbmFnZS52dWVcIilcbmlmIChfX3Z1ZV9zY3JpcHRfXyAmJlxuICAgIF9fdnVlX3NjcmlwdF9fLl9fZXNNb2R1bGUgJiZcbiAgICBPYmplY3Qua2V5cyhfX3Z1ZV9zY3JpcHRfXykubGVuZ3RoID4gMSkge1xuICBjb25zb2xlLndhcm4oXCJbdnVlLWxvYWRlcl0gc3JjXFxcXGNvbXBvbmVudHNcXFxccGFwZXJNYW5hZ2UudnVlOiBuYW1lZCBleHBvcnRzIGluICoudnVlIGZpbGVzIGFyZSBpZ25vcmVkLlwiKX1cbl9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtaHRtbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcGFwZXJNYW5hZ2UudnVlXCIpXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX3NjcmlwdF9fIHx8IHt9XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG5pZiAoX192dWVfdGVtcGxhdGVfXykge1xuKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgfHwgKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgPSB7fSkpIDogbW9kdWxlLmV4cG9ydHMpLnRlbXBsYXRlID0gX192dWVfdGVtcGxhdGVfX1xufVxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIHZhciBpZCA9IFwiX3YtOGU0ZWUyZjAvcGFwZXJNYW5hZ2UudnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgX192dWVfdGVtcGxhdGVfXylcbiAgfVxufSkoKX1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcGFwZXJNYW5hZ2UudnVlXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gOFxuICoqLyIsIlxyXG48dGVtcGxhdGUgPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhcGVyTWFuYWdlXCI+XHJcbiAgICAgICAgPHRvcGhlYWQ+PC90b3BoZWFkPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3cgZm9ybWhlYWRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuenkeebrjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJzZWxlY3RTdWIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7or63mloc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwibG9va2J0blwiID7ojrflj5bor5Xpopg8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ1c2VybmV3c1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpPuivlemimO+8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48aT7np5Hnm67vvJo8L2k+PHNwYW4+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGk+5bm057qn77yaPC9pPjxzcGFuPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpPueKtuaAge+8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48aT7kuIDlrqHmhI/op4HvvJo8L2k+PHNwYW4+PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGk+5LqM5a6h5oSP6KeB77yaPC9pPjxzcGFuPjwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpPuaJgOWxnuivleWNt++8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4gPGkgIGNsYXNzPVwibG9va3Rlc3RcIj7mn6XnnIvor5Xljbc8L2k+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwidGVzdGJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImlfYnRtXCI+5Y6f6aKYPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+5YaF5a655Y2g5L2NPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaV9idG1cIj7lsZ7mgKc8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7lhoXlrrnljaDkvY08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpX2J0bVwiPumimOaWhzwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuWGheWuueWNoOS9jTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImlfYnRtXCI+6YCJ6aG5PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+5YaF5a655Y2g5L2NPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaV9idG1cIj7op6PmnpA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7lhoXlrrnljaDkvY08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpX2J0bVwiPueCueivhDwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuWGheWuueWNoOS9jTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN1Ym1pdHBcIj48c3BhbiBjbGFzcz1cInBhc3NcIj7pgJrov4c8L3NwYW4+ICA8c3BhbiBjbGFzcz1cImJhY2tcIj7pgIDlm548L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaV9idG1cIj7ljp/lm6A8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj7lhoXlrrnljaDkvY08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgdmFyIGhlYWQ9cmVxdWlyZShcImhlYWQudnVlXCIpO1xyXG4gICAgcmVxdWlyZShcIi4uLy4uL2J1bmRsZS9jc3MvcGFwZXJNYW5hZ2UuY3NzXCIpO1xyXG4gICAgbW9kdWxlLmV4cG9ydHM9e1xyXG4gICAgICAgIHRlbXBsYXRlOiAnLnBhcGVyTWFuYWdlJyxcclxuICAgICAgICBjb21wb25lbnRzOntcclxuICAgICAgICAgICAgdG9waGVhZDpoZWFkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHBhcGVyTWFuYWdlLnZ1ZT8xNjAzZWUyM1xuICoqLyIsInZhciBfX3Z1ZV9zY3JpcHRfXywgX192dWVfdGVtcGxhdGVfX1xuX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWVzMjAxNSZwbHVnaW5zW109dHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2hlYWQudnVlXCIpXG5pZiAoX192dWVfc2NyaXB0X18gJiZcbiAgICBfX3Z1ZV9zY3JpcHRfXy5fX2VzTW9kdWxlICYmXG4gICAgT2JqZWN0LmtleXMoX192dWVfc2NyaXB0X18pLmxlbmd0aCA+IDEpIHtcbiAgY29uc29sZS53YXJuKFwiW3Z1ZS1sb2FkZXJdIHNyY1xcXFxjb21wb25lbnRzXFxcXGhlYWQudnVlOiBuYW1lZCBleHBvcnRzIGluICoudnVlIGZpbGVzIGFyZSBpZ25vcmVkLlwiKX1cbl9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtaHRtbC1sb2FkZXIhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaGVhZC52dWVcIilcbm1vZHVsZS5leHBvcnRzID0gX192dWVfc2NyaXB0X18gfHwge31cbmlmIChtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHRcbmlmIChfX3Z1ZV90ZW1wbGF0ZV9fKSB7XG4odHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcImZ1bmN0aW9uXCIgPyAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyB8fCAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyA9IHt9KSkgOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUgPSBfX3Z1ZV90ZW1wbGF0ZV9fXG59XG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7ICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgdmFyIGlkID0gXCJfdi0wYWMwZTJmOS9oZWFkLnZ1ZVwiXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChpZCwgbW9kdWxlLmV4cG9ydHMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnVwZGF0ZShpZCwgbW9kdWxlLmV4cG9ydHMsIF9fdnVlX3RlbXBsYXRlX18pXG4gIH1cbn0pKCl9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2hlYWQudnVlXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gOCA5XG4gKiovIiwiPHRlbXBsYXRlIGlkPVwiaGVhZFwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImhlYWRcIj48c3BhbiBjbGFzcz1cInhpYW5cIiA+fDwvc3Bhbj7or5XpopjkuIDlrqE8L3A+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIHJlcXVpcmUoXCIuLi8uLi9idW5kbGUvY3NzL3BhcGVyTWFuYWdlLmNzc1wiKTtcclxuICAgIGV4cG9ydCBkZWZhdWx0e1xyXG4gICAgICAgIHRlbXBsYXRlOlwiI2hlYWRcIlxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogaGVhZC52dWU/NzQ1OGYxYTJcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BhcGVyTWFuYWdlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wYXBlck1hbmFnZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wYXBlck1hbmFnZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9idW5kbGUvY3NzL3BhcGVyTWFuYWdlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDggOVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhcGVyTWFuYWdlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiXFxcXDVGQUVcXFxcOEY2RlxcXFw5NkM1XFxcXDlFRDFcXFwiO1xcbn1cXG4ucGFwZXJNYW5hZ2UgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5wYXBlck1hbmFnZSBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ucGFwZXJNYW5hZ2UgLmZvcm1oZWFkIGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuLnBhcGVyTWFuYWdlIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLnBhcGVyTWFuYWdlIC5oZWFkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogZGVlcHNreWJsdWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5wYXBlck1hbmFnZSAueGlhbiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBibHVlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxufVxcbi5wYXBlck1hbmFnZSAuZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBhcGVyTWFuYWdlIC5mb3JtaGVhZCB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6b29tOiAxO1xcbn1cXG4ucGFwZXJNYW5hZ2UgLmZvcm1oZWFkIHNwYW4sXFxuLmZvcm1oZWFkIHNlbGVjdCxcXG4uZm9ybWhlYWQgYSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucGFwZXJNYW5hZ2UgLmZvcm1oZWFkIHNlbGVjdCB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcbi5wYXBlck1hbmFnZSAubG9va2J0biB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGJhY2tncm91bmQ6IGRlZXBza3libHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucGFwZXJNYW5hZ2UgLmxvb2s6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5wYXBlck1hbmFnZSAudXNlcm5ld3Mge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDkwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnBhcGVyTWFuYWdlIC51c2VybmV3cyBsaSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZDogZGVlcHNreWJsdWU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XFxuICB3aWR0aDogMTElO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBwb3NpdGlvbjogcmU7XFxufVxcbi5wYXBlck1hbmFnZSAudXNlcm5ld3MgbGk6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYXBlck1hbmFnZSAudXNlcm5ld3MgbGkgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wYXBlck1hbmFnZSAudXNlcm5ld3MgLnNob3ctdXNlcm5ld3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZDogeWVsbG93O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuLnBhcGVyTWFuYWdlIC5sb29rdGVzdCB7XFxuICBjb2xvcjogb3JhbmdlcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucGFwZXJNYW5hZ2UgLmxvb2stdGVzdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5wYXBlck1hbmFnZSAubG9vay10ZXN0OmhvdmVyIHtcXG4gIGNvbG9yOiBkZWVwc2t5Ymx1ZTtcXG59XFxuLnBhcGVyTWFuYWdlIC50ZXN0Ym9keSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGRlZXBza3libHVlO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLnBhcGVyTWFuYWdlIC50ZXN0Ym9keSBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6b29tOiAxO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4ucGFwZXJNYW5hZ2UgLnRlc3Rib2R5IGxpIGkge1xcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xcbiAgaGVpaGd0OiAzMHB4O1xcbiAgYmFja2dyb3VuZDogbGlnaHRza3libHVlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5wYXBlck1hbmFnZSAudGVzdGJvZHkgbGkgZGl2IHtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG4uc3VibWl0cCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLnBhc3MsXFxuLmJhY2sge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogZGFya2JsdWU7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgZGVlcHNreWJsdWU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wYXNzOmhvdmVyLFxcbi5iYWNrOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZXJlZDtcXG4gIGJhY2tncm91bmQ6IG1vY2Nhc2luO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bWFwcy9wYXBlck1hbmFnZS5jc3MubWFwICovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL2J1bmRsZS9jc3MvcGFwZXJNYW5hZ2UuY3NzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gOCA5XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxkaXY+XFxuICAgIDxwIGNsYXNzPVxcXCJoZWFkXFxcIj48c3BhbiBjbGFzcz1cXFwieGlhblxcXCIgPnw8L3NwYW4+6K+V6aKY5LiA5a6hPC9wPlxcbjwvZGl2PlxcblwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1odG1sLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvaGVhZC52dWVcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSA4IDlcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuXFxuPGRpdiBjbGFzcz1cXFwicGFwZXJNYW5hZ2VcXFwiPlxcbiAgICA8dG9waGVhZD48L3RvcGhlYWQ+XFxuICAgIDxmb3JtIGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm92ZXJmbG93IGZvcm1oZWFkXFxcIj5cXG4gICAgICAgICAgICA8c3Bhbj7np5Hnm648L3NwYW4+XFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwic2VsZWN0U3ViIFxcXCI+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24+6K+t5paHPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApXFxcIiBjbGFzcz1cXFwibG9va2J0blxcXCIgPuiOt+WPluivlemimDwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJ1c2VybmV3c1xcXCI+XFxuICAgICAgICAgICAgPGxpPjxpPuivlemimO+8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cXG4gICAgICAgICAgICA8bGk+PGk+56eR55uu77yaPC9pPjxzcGFuPjwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgIDxsaT48aT7lubTnuqfvvJo8L2k+PHNwYW4+PC9zcGFuPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxpPueKtuaAge+8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cXG4gICAgICAgICAgICA8bGk+PGk+5LiA5a6h5oSP6KeB77yaPC9pPjxzcGFuPjwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgIDxsaT48aT7kuozlrqHmhI/op4HvvJo8L2k+PHNwYW4+PC9zcGFuPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxpPuaJgOWxnuivleWNt++8mjwvaT48c3Bhbj48L3NwYW4+PC9saT5cXG4gICAgICAgICAgICA8bGk+IDxpICBjbGFzcz1cXFwibG9va3Rlc3RcXFwiPuafpeeci+ivleWNtzwvaT48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwidGVzdGJvZHlcXFwiPlxcbiAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImlfYnRtXFxcIj7ljp/popg8L2k+XFxuICAgICAgICAgICAgICAgIDxkaXY+5YaF5a655Y2g5L2NPC9kaXY+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJpX2J0bVxcXCI+5bGe5oCnPC9pPlxcbiAgICAgICAgICAgICAgICA8ZGl2PuWGheWuueWNoOS9jTwvZGl2PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaV9idG1cXFwiPumimOaWhzwvaT5cXG4gICAgICAgICAgICAgICAgPGRpdj7lhoXlrrnljaDkvY08L2Rpdj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImlfYnRtXFxcIj7pgInpobk8L2k+XFxuICAgICAgICAgICAgICAgIDxkaXY+5YaF5a655Y2g5L2NPC9kaXY+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJpX2J0bVxcXCI+6Kej5p6QPC9pPlxcbiAgICAgICAgICAgICAgICA8ZGl2PuWGheWuueWNoOS9jTwvZGl2PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiaV9idG1cXFwiPueCueivhDwvaT5cXG4gICAgICAgICAgICAgICAgPGRpdj7lhoXlrrnljaDkvY08L2Rpdj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN1Ym1pdHBcXFwiPjxzcGFuIGNsYXNzPVxcXCJwYXNzXFxcIj7pgJrov4c8L3NwYW4+ICA8c3BhbiBjbGFzcz1cXFwiYmFja1xcXCI+6YCA5ZuePC9zcGFuPjwvcD5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImlfYnRtXFxcIj7ljp/lm6A8L2k+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbW1lbnRcXFwiPuWGheWuueWNoOS9jTwvZGl2PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L2Zvcm0+XFxuIDwvZGl2PlxcblwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1odG1sLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvcGFwZXJNYW5hZ2UudnVlXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gOFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=