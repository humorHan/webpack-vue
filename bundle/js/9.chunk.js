webpackJsonp([9,12],{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(17)
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\common\\ContentHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8e7326a4/ContentHeader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ContentHeader.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ContentHeader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n  .content{\n      background: #ffffff !important;\n  }\n.content-header{\n    padding: 15px !important;\n    border-bottom: 2px solid #d2d6de;\n}\n", "", {"version":3,"sources":["/./src/components/common/ContentHeader.vue?62ba1e5a"],"names":[],"mappings":";;;;;;;;;;;;;EAaA;MACA,+BAAA;GACA;AACA;IACA,yBAAA;IACA,iCAAA;CACA","file":"ContentHeader.vue","sourcesContent":["<template>\r\n    <section class=\"content-header\" >\r\n        <h1>\r\n            {{modlename}}\r\n            <small>{{pagename}}</small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n            <li><a href={{pageurl}}><i class=\"fa fa-dashboard\"></i>{{modlename}} </a></li>\r\n            <li class=\"active\">{{pagename}}</li>\r\n        </ol>\r\n    </section>\r\n</template>\r\n<style>\r\n    .content{\r\n        background: #ffffff !important;\r\n    }\r\n  .content-header{\r\n      padding: 15px !important;\r\n      border-bottom: 2px solid #d2d6de;\r\n  }\r\n</style>\r\n<script>\r\n    module.exports={\r\n        props:{\r\n            modlename:{type:String,default:'试卷管理'},\r\n            pagename:{type:String,default:'试卷查重'},\r\n            pageurl:{type:String,default:'#/demo'},\r\n        },\r\n        components:{\r\n        }\r\n\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 19:
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

/***/ 20:
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
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
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
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },

/***/ 21:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	    props: {
	        modlename: { type: String, default: '试卷管理' },
	        pagename: { type: String, default: '试卷查重' },
	        pageurl: { type: String, default: '#/demo' }
	    },
	    components: {}
	
	};

/***/ },

/***/ 22:
/***/ function(module, exports) {

	module.exports = "\n<section class=\"content-header\" >\n    <h1>\n        {{modlename}}\n        <small>{{pagename}}</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n        <li><a href={{pageurl}}><i class=\"fa fa-dashboard\"></i>{{modlename}} </a></li>\n        <li class=\"active\">{{pagename}}</li>\n    </ol>\n</section>\n";

/***/ },

/***/ 25:
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

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\question\\paperList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(57)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5a23512d/paperList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var head = __webpack_require__(16);
	__webpack_require__(54);
	var resource = __webpack_require__(56);
	module.exports = {
	    template: ".paperList",
	    components: {
	        "tophead": head
	    },
	    data: function data() {
	        return {
	            one: '试题管理',
	            two: "试题列表",
	            three: "#/paperList",
	            subjects: resource.r_subjectList
	        };
	    }
	};

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(25)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./paperList.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./paperList.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".paperList {\n  font-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\n}\n.paperList .headname {\n  font-size: 20px;\n  text-align: center;\n  line-height: 50px;\n  margin-top: 20px;\n  color: black;\n}\n.paperList .paperBody {\n  width: 88%;\n  margin: 20px auto;\n}\n.paperList .paperBody .listone {\n  width: 100%;\n  overflow: hidden;\n  zoom: 1;\n  text-align: center;\n  -webkit-perspective: 1200px;\n  -moz-perspective: 1200px;\n  -ms-perspective: 1200px;\n  -o-perspective: 1200px;\n  perspective: 1200px;\n}\n.paperList .paperBody .listone .listcontent {\n  width: 18%;\n  height: 150px;\n  background: seashell;\n  margin-right: 2%;\n  float: left;\n  margin-bottom: 20px;\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  transition: all 0.6s linear;\n}\n.paperList .paperBody .listone .listcontent:hover {\n  -webkit-transform: rotateY(360deg) scale(0.88);\n}\n.paperList .paperBody .listone .listcontent a {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  height: 150px;\n  line-height: 150px;\n  font-size: 25px;\n}\n.paperList .paperBody .listone .listcontent h2 {\n  height: 40px;\n  line-height: 40px;\n  border-bottom: 1px solid #b0e1ef;\n  font-size: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.paperList .paperBody .listone .listcontent .text {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=maps/paperList.css.map */\n", ""]);
	
	// exports


/***/ },

/***/ 56:
/***/ function(module, exports) {

	/**
	 * Created by yangjin on 2016/7/21.
	 */
	//下拉选单数据集
	/*
	 科目
	 */
	module.exports= {
	        r_subjectList: [
	            {id: '01', name: '语文'},
	            {id: '02', name: '数学'},
	            {id: '03', name: '英语'},
	            {id: '04', name: '物理'},
	            {id: '05', name: '化学'},
	            {id: '06', name: '地理'},
	            {id: '07', name: '历史'},
	            {id: '08', name: '政治'},
	            {id: '09', name: '生物'},
	            {id: '10', name: '科学'},
	            {id: '11', name: '理综'},
	            {id: '12', name: '文综'},
	            {id: '13', name: '历史与社会'},
	            {id: '14', name: '奥数'}]
	}
	//function Resource_subStatebyid(id, idlist) {
	//    var Datalist = [
	//        { id: '01', name: '语文' },
	//        { id: '02', name: '数学' },
	//        { id: '03', name: '英语' },
	//        { id: '04', name: '物理' },
	//        { id: '05', name: '化学' },
	//        { id: '06', name: '地理' },
	//        { id: '07', name: '历史' },
	//        { id: '08', name: '政治' },
	//        { id: '09', name: '生物' },
	//        { id: '10', name: '科学' },
	//        { id: '11', name: '理综' },
	//        { id: '12', name: '文综' },
	//        { id: '13', name: '历史与社会' },
	//        { id: '14', name: '奥数' }];
	//    Addsubvalue(id, Datalist, idlist);
	//}
	//function Addsubvalue(id, Datalist, idlist) {
	//    var eduData = Datalist
	//    var dataLength = eduData.length;
	//    var i;
	//    var objOption = document.getElementById(id);
	//    var num=0;
	//    if (objOption) {
	//        for (i = 0; i < dataLength; i++) {
	//            if (idlist.indexOf(eduData[i].id) >= 0) {
	//                objOption.options[num] = new Option(eduData[i].name, eduData[i].id);
	//                num++;
	//            }
	//        }
	//    }
	//}
	//
	//
	///*
	// 试卷状态
	// */
	//function Resource_PaperState(id, sid) {
	//    var Datalist = [
	//        { id: 0, name: '上传成功' },
	//        { id: 1, name: '转html失败' },
	//        { id: 2, name: '转html成功' },
	//        { id: 3, name: '试卷重复' },
	//        { id: 4, name: '等待审核' },
	//        { id: 5, name: '审核未通过' },
	//        { id: 6, name: '审核通过' },
	//        { id: 7, name: '拆分失败' },
	//        { id: 8, name: '拆分成功' },
	//        { id: 9, name: '录入完成' },
	//        { id: 10, name: '放出失败' },
	//        { id: 11, name: '放出成功' }];
	//
	//    AddSelectvalue(id, Datalist, sid);
	//}
	//
	///*
	// 试题状态
	// */
	//function Resource_QuestionStates(id, sid) {
	//    var Datalist = [
	//        { id: 0, name: '拆分入库' },
	//        { id: 1, name: '试题去重' },
	//        { id: 2, name: '等待编辑' },
	//        { id: 3, name: '绑定编辑' },
	//        { id: 4, name: '等待一审' },
	//        { id: 5, name: '一审获取' },
	//        { id: 6, name: '一审退回' },
	//        { id: 7, name: '等待二审' },
	//        { id: 8, name: '二审退回' },
	//        { id: 9, name: '审核通过' }];
	//
	//    AddSelectvalue(id, Datalist, sid);
	//}
	//
	//
	//
	//
	//var DatalistSubj = [{ id: '01', name: '语文' }, { id: '02', name: '数学' }, { id: '03', name: '英语' }, { id: '04', name: '物理' }, { id: '05', name: '化学' }, { id: '06', name: '地理' }, { id: '07', name: '历史' }, { id: '08', name: '政治' }, { id: '09', name: '生物' }, { id: '10', name: '科学' }, { id: '11', name: '理综' }, { id: '12', name: '文综' }, { id: '13', name: '历史与社会' }, {id:'14',name:'奥数'}];
	////科目
	////function ResourceSubj(id, sid) {
	////    AddSelectvalue(id, DatalistSubj, sid);
	////}
	//
	////获取科目
	//function ResourceGetSubjByID(id) {
	//    for (var i = 0; i < DatalistSubj.length; i++) {
	//        if (DatalistSubj[i].id == id) {
	//            return DatalistSubj[i].name;
	//        }
	//    }
	//    return id;
	//}
	//
	//
	///*
	// 每显示数量
	// */
	//function Resource_page(id, sid) {
	//    var Datalist = [{ id: 10, name: '10' }, { id: 20, name: '20' }];
	//    AddSelectvalue(id, Datalist, sid);
	//}
	//
	///*
	// 试题统计
	// */
	//function Resource_Question_page(id, sid) {
	//    var Datalist = [{ id: 10, name: '10' }, { id: 20, name: '20' }, { id: 50, name: '50' }, { id: 100, name: '100' }, { id: 200, name: '200' }];
	//    AddSelectvalue(id, Datalist, sid);
	//}
	///*
	// 学制填充的
	// */
	////function ResourceEduData(id, sid) {
	////    var Datalist = [{ id: 0, name: '六三' }, { id: 1, name: '五四' }];
	////    AddSelectvalue(id, Datalist, sid);
	////}
	//
	///*
	// 年级
	// */
	//function ResourceClass(id, sid) {
	//    var Datalist = [{ id: 'x', name: '小学' }, { id: 'c', name: '初中' }, { id: 'g', name: '高中' }];
	//    AddSelectvalue(id, Datalist, sid);
	//}
	//
	//
	//var DatalistGrade = [{ id: '', name: '不限年级' }, { id: 'x1', name: '一年级' }, { id: 'x2', name: '二年级' }, { id: 'x3', name: '三年级' }, { id: 'x4', name: '四年级' }, { id: 'x5', name: '五年级' }, { id: 'x6', name: '六年级' }, { id: 'c1', name: '七年级' }, { id: 'c2', name: '八年级' }, { id: 'c3', name: '九年级' }, { id: 'g1', name: '高一' }, { id: 'g2', name: '高二' }, { id: 'g3', name: '高三' }];
	///*
	// 小年级对象
	// */
	////function ResourceGradeData(id, sid) {
	////    AddSelectvalue(id, DatalistGrade, sid);
	////}
	///*
	// 小年级对象
	// */
	//function ResourceGetGradeById(id) {
	//    for (var i = 0; i < DatalistGrade.length; i++) {
	//        if (DatalistGrade[i].id == id) {
	//            return DatalistGrade[i].name;
	//        }
	//    }
	//    return id;
	//}
	///*
	// 性别 id 控件iD，sid：默认值的id
	// */
	//function Resource_Sex(id, sid) {
	//    var Datalist = [{ id: '男', name: '男' }, { id: '女', name: '女' }];
	//    AddSelectvalue(id, Datalist, sid);
	//}
	//
	//////内外部用户 id 控件iD，sid：默认值的id
	//function Resource_type(id, sid) {
	//    var Datalist = [{ id: '0', name: '内部用户' }, { id: '1', name: '外部用户' }];
	//    AddSelectvalue(id, Datalist, sid);
	//}
	//
	////公共方法
	////给select 对象填充数据
	//function AddSelectvalue(id, Datalist, sid) {
	//    var eduData = Datalist
	//    var dataLength = eduData.length;
	//    var i;
	//    var objOption = document.getElementById(id);
	//    if (objOption) {
	//        for (i = 0; i < dataLength; i++) {
	//            objOption.options[i] = new Option(eduData[i].name, eduData[i].id);
	//            if (eduData[i].id == sid) {
	//                objOption.options[i].selected = "selected";
	//            }
	//        }
	//    }
	//}
	//
	///*
	// 大年级填充对象
	// */
	//function ResourceBGradeData(id, sid) {
	//    var Data = [{ id: 'x', name: '小学' }, { id: 'c', name: '初中' }, { id: 'g', name: '高中' }];
	//    AddSelectvalue(id, Data, sid);
	//}
	//
	///*
	// 学校级别 1.国家级 2.省级   3.地市级 4.县市级
	// */
	//function ResourceSchoolLevel(id, sid) {
	//    var Data = [{ id: '0', name: '--请选择--' }, { id: '1', name: '国家级' }, { id: '2', name: '省级' }, { id: '3', name: '地市级' }, { id: '4', name: '县市级' }];
	//    AddSelectvalue(id, Data, sid);
	//}
	//
	///*
	// 学科
	// */
	//function ResourceSubject(id, sid) {
	//    AddSelectvalue(id, DatalistSubj, sid);
	//}
	//
	////试卷适用的上下学期 0 上学期 1 下学期 2 全一册
	//function ResourceTerm(id, sid) {
	//    var Data = [
	//        { id: '0', name: '上学期' },
	//        { id: '1', name: '下学期' },
	//        { id: '2', name: '全一册' }
	//    ];
	//    AddSelectvalue(id, Data, sid);
	//}
	//function ResourceTermpaper(id, sid) {
	//    var Data = [
	//        { id: '0', name: '上学期' },
	//        { id: '1', name: '下学期' }//,
	//        //{ id: '2', name: '全一册' }
	//    ];
	//    AddSelectvalue(id, Data, sid);
	//}
	///// 试卷类型
	//function ResourcePaperType(id, sid) {
	//    var Data = [
	//        { id: '1', name: '期中' },
	//        { id: '2', name: '期末' },
	//        { id: '3', name: '模拟' },
	//        { id: '4', name: '同步' },
	//        { id: '5', name: '专项' },
	//        { id: '6', name: '月考' },
	//        { id: '7', name: '中考' },
	//        { id: '8', name: '竞赛' },
	//        { id: '9', name: '高考' },
	//        { id: '10', name: '小考' },
	//        { id: '11', name: '会考' }
	//    ];
	//    AddSelectvalue(id, Data, sid);
	//}
	//
	///// 试卷类型
	//function Resourcewl(id, sid) {
	//    var Data = [
	//        { id: '1', name: '文科' },
	//        { id: '0', name: '理科' },
	//        { id: '2', name: '不分文理科' }
	//    ];
	//    AddSelectvalue(id, Data, sid);
	//}
	//
	///// 试卷类型
	//function ResourcePFrom(id, sid) {
	//    var Data = [
	//        { id: '0', name: '内部录入' },
	//        { id: '1', name: '兼职录入' },
	//        { id: '2', name: '机构' },
	//        { id: '3', name: '课本' }
	//    ];
	//    AddSelectvalue(id, Data, sid);
	//}
	//
	//
	//function AddAllAelect(ID, value) {
	//    $("#" + ID + "").prepend("<option value='' selected='selected' >全部</option>");
	//
	//    $("#" + ID + "").val(value);
	//
	//}
	//
	///// 根据学段更新学科
	//function ChangeSubjectListByGrade(gradeList, subjectList) {
	//    var grade = $(gradeList).val();
	//    switch (grade) {
	//        case 'x':
	//            $(subjectList + " option[value='04']").remove();
	//            $(subjectList + " option[value='05']").remove();
	//            $(subjectList + " option[value='06']").remove();
	//            $(subjectList + " option[value='07']").remove();
	//            $(subjectList + " option[value='08']").remove();
	//            $(subjectList + " option[value='09']").remove();
	//            $(subjectList + " option[value='10']").remove();
	//            $(subjectList + " option[value='11']").remove();
	//            $(subjectList + " option[value='12']").remove();
	//            break;
	//        case 'c':
	//            $(subjectList + " option[value='11']").remove();
	//            $(subjectList + " option[value='12']").remove();
	//            break;
	//        case 'g':
	//            $(subjectList + " option[value='10']").remove();
	//            $(subjectList + " option[value='11']").remove();
	//            $(subjectList + " option[value='12']").remove();
	//            break;
	//        default:
	//            break;
	//    }
	//}
	//
	///// 试题录入方式
	//function ResourceQuesEntryState(id, sid) {
	//    var Data = [
	//        { id: '-1', name: '所有' },
	//        { id: '0', name: '老师录入' },
	//        { id: '1', name: '机器处理' },
	//        { id: '100', name: '保留老题' }
	//    ];
	//    AddSelectvalue(id, Data, sid);
	//}
	///// 试题录入方式
	//function ResourcePaperEntryState(id, sid) {
	//    var Data = [
	//        { id: '-1', name: '所有' },
	//        { id: '0', name: '老师录入' },
	//        { id: '1', name: '其他' }
	//    ];
	//    AddSelectvalue(id, Data, sid);
	//}
	//


/***/ },

/***/ 57:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"paperList\">\n     <tophead :modlename=\"one\" :pagename=\"two\"  :pageurl=\"three\"></tophead>\n     <h5 class=\"headname\">点击查询科目</h5>\n     <ul class=\"paperBody\">\n            <li class=\"listone\">\n                <div class=\"listcontent\" v-for=\"subject in subjects\">\n                    <!--<a href=\"#/paperList-getpaper/:{{subject.id}}\">  {{subject.name}}</a>-->\n                    <a href=\"#/paperList-getpaper/{{subject.id}}\">  {{subject.name}}</a>\n                </div>\n            </li>\n     </ul>\n</div>\n";

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGVudEhlYWRlci52dWU/YTA0YSoqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50SGVhZGVyLnZ1ZT8zZTM2KioqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50SGVhZGVyLnZ1ZT83YmYwKioqIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanM/ZGEwNCoqKiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzP2MyZmMqKiIsIndlYnBhY2s6Ly8vQ29udGVudEhlYWRlci52dWU/YTZhZSoqIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50SGVhZGVyLnZ1ZT9mOTA1KioqIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcz9iOTgwKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcXVlc3Rpb24vcGFwZXJMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vcGFwZXJMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9idW5kbGUvY3NzL3BhcGVyTGlzdC5jc3M/ZDFhYyIsIndlYnBhY2s6Ly8vLi9idW5kbGUvY3NzL3BhcGVyTGlzdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlcC91dGlsL1Jlc291cmNlRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9xdWVzdGlvbi9wYXBlckxpc3QudnVlPzIwMzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQStGO0FBQy9GO0FBQ0EsYUFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUMsSTs7Ozs7OztBQ3ZCRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGdFQUErRCx1Q0FBdUMsS0FBSyxrQkFBa0IsK0JBQStCLHVDQUF1QyxHQUFHLFVBQVUsa0hBQWtILEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLDJJQUEySSxXQUFXLHlCQUF5QixVQUFVLDRGQUE0RixTQUFTLG9DQUFvQyxXQUFXLGlEQUFpRCxVQUFVLG1GQUFtRiwyQ0FBMkMsU0FBUyxzQkFBc0IsbUNBQW1DLDJDQUEyQyxPQUFPLGdEQUFnRCxtQkFBbUIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsY0FBYyx5QkFBeUIsYUFBYSxhQUFhLDhDQUE4Qzs7QUFFajBDOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxtQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBLFNBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxrQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0EsaUNBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqTUE7OzZDQUdBOzRDQUNBOzJDQUVBO0FBSkE7aUJBT0E7O0FBUkEsRzs7Ozs7OztBQ3ZCQSw4RUFBNkUsV0FBVyxtQkFBbUIsVUFBVSwwRUFBMEUsU0FBUyxvQ0FBb0MsV0FBVywyQ0FBMkMsVUFBVSxnQzs7Ozs7OztBQ0E1UztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0EsbUJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxTQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBLGlDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDs7QUFFQSw4QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQStGO0FBQy9GO0FBQ0EsYUFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUMsSTs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUNBO0FBQ0E7ZUFFQTs7b0JBR0E7QUFGQTsyQkFHQTs7a0JBRUE7a0JBQ0E7b0JBQ0E7Z0NBRUE7QUFMQTtBQU1BO0FBWkEsRzs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLHVDQUFzQyw4Q0FBOEMsR0FBRyx3QkFBd0Isb0JBQW9CLHVCQUF1QixzQkFBc0IscUJBQXFCLGlCQUFpQixHQUFHLHlCQUF5QixlQUFlLHNCQUFzQixHQUFHLGtDQUFrQyxnQkFBZ0IscUJBQXFCLFlBQVksdUJBQXVCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLDJCQUEyQix3QkFBd0IsR0FBRywrQ0FBK0MsZUFBZSxrQkFBa0IseUJBQXlCLHFCQUFxQixnQkFBZ0Isd0JBQXdCLHlDQUF5QyxzQ0FBc0MscUNBQXFDLG9DQUFvQyxpQ0FBaUMsZ0NBQWdDLEdBQUcscURBQXFELG1EQUFtRCxHQUFHLGlEQUFpRCwwQkFBMEIsZ0JBQWdCLGlCQUFpQixrQkFBa0IsdUJBQXVCLG9CQUFvQixHQUFHLGtEQUFrRCxpQkFBaUIsc0JBQXNCLHFDQUFxQyxvQkFBb0IscUJBQXFCLDRCQUE0Qix3QkFBd0IsR0FBRyxxREFBcUQsa0JBQWtCLEdBQUc7O0FBRXA5Qzs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHFCQUFxQjtBQUNsQyxjQUFhLHdCQUF3QjtBQUNyQyxjQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLDBCQUEwQjtBQUNyQyxZQUFXLHVCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHlCQUF5QjtBQUNwQyxZQUFXLHlCQUF5QjtBQUNwQyxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHVCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHNCQUFzQjtBQUNqQyxZQUFXLHNCQUFzQjtBQUNq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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxzQkFBc0I7QUFDakMsWUFBVyxzQkFBc0I7QUFDakMsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyx3QkFBd0I7QUFDbkMsWUFBVyx3QkFBd0I7QUFDbkMsWUFBVyxzQkFBc0I7QUFDakMsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLHVCQUF1QjtBQUNsQyxZQUFXLHdCQUF3QjtBQUNuQyxZQUFXLHdCQUF3QjtBQUNuQyxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyx1QkFBdUI7QUFDbEMsWUFBVyx3QkFBd0I7QUFDbkMsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9VQSxvWEFBbVgsWUFBWSxPQUFPLGNBQWMsOERBQThELFlBQVksT0FBTyxjQUFjLHVFIiwiZmlsZSI6IjkuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfc2NyaXB0X18sIF9fdnVlX3RlbXBsYXRlX19cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vQ29udGVudEhlYWRlci52dWVcIilcbl9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lczIwMTUmcGx1Z2luc1tdPXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db250ZW50SGVhZGVyLnZ1ZVwiKVxuaWYgKF9fdnVlX3NjcmlwdF9fICYmXG4gICAgX192dWVfc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fdnVlX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIlt2dWUtbG9hZGVyXSBzcmNcXFxcY29tcG9uZW50c1xcXFxjb21tb25cXFxcQ29udGVudEhlYWRlci52dWU6IG5hbWVkIGV4cG9ydHMgaW4gKi52dWUgZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1odG1sLWxvYWRlciEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db250ZW50SGVhZGVyLnZ1ZVwiKVxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9zY3JpcHRfXyB8fCB7fVxuaWYgKG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdFxuaWYgKF9fdnVlX3RlbXBsYXRlX18pIHtcbih0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwiZnVuY3Rpb25cIiA/IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zIHx8IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zID0ge30pKSA6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSA9IF9fdnVlX3RlbXBsYXRlX19cbn1cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHsgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICB2YXIgaWQgPSBcIl92LThlNzMyNmE0L0NvbnRlbnRIZWFkZXIudnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgX192dWVfdGVtcGxhdGVfXylcbiAgfVxufSkoKX1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRIZWFkZXIudnVlXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gNSA2IDggOSAxMVxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9Db250ZW50SGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlJmluZGV4PTAhLi9Db250ZW50SGVhZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vQ29udGVudEhlYWRlci52dWVcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRIZWFkZXIudnVlXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gNSA2IDggOSAxMVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuICAuY29udGVudHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxuICB9XFxuLmNvbnRlbnQtaGVhZGVye1xcbiAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJkNmRlO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRIZWFkZXIudnVlPzYyYmExZTVhXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Ozs7Ozs7Ozs7Ozs7RUFhQTtNQUNBLCtCQUFBO0dBQ0E7QUFDQTtJQUNBLHlCQUFBO0lBQ0EsaUNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ29udGVudEhlYWRlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudC1oZWFkZXJcXFwiID5cXHJcXG4gICAgICAgIDxoMT5cXHJcXG4gICAgICAgICAgICB7e21vZGxlbmFtZX19XFxyXFxuICAgICAgICAgICAgPHNtYWxsPnt7cGFnZW5hbWV9fTwvc21hbGw+XFxyXFxuICAgICAgICA8L2gxPlxcclxcbiAgICAgICAgPG9sIGNsYXNzPVxcXCJicmVhZGNydW1iXFxcIj5cXHJcXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj17e3BhZ2V1cmx9fT48aSBjbGFzcz1cXFwiZmEgZmEtZGFzaGJvYXJkXFxcIj48L2k+e3ttb2RsZW5hbWV9fSA8L2E+PC9saT5cXHJcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCI+e3twYWdlbmFtZX19PC9saT5cXHJcXG4gICAgICAgIDwvb2w+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzdHlsZT5cXHJcXG4gICAgLmNvbnRlbnR7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIC5jb250ZW50LWhlYWRlcntcXHJcXG4gICAgICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmQ2ZGU7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cXHJcXG48c2NyaXB0PlxcclxcbiAgICBtb2R1bGUuZXhwb3J0cz17XFxyXFxuICAgICAgICBwcm9wczp7XFxyXFxuICAgICAgICAgICAgbW9kbGVuYW1lOnt0eXBlOlN0cmluZyxkZWZhdWx0Oifor5XljbfnrqHnkIYnfSxcXHJcXG4gICAgICAgICAgICBwYWdlbmFtZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDon6K+V5Y235p+l6YeNJ30sXFxyXFxuICAgICAgICAgICAgcGFnZXVybDp7dHlwZTpTdHJpbmcsZGVmYXVsdDonIy9kZW1vJ30sXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcG9uZW50czp7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRIZWFkZXIudnVlXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gNSA2IDggOSAxMVxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggOSAxMCAxMVxuICoqLyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmIChtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG5cdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLXN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSA1IDYgOCA5IDExXG4gKiovIiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjb250ZW50LWhlYWRlclwiID5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIHt7bW9kbGVuYW1lfX1cclxuICAgICAgICAgICAgPHNtYWxsPnt7cGFnZW5hbWV9fTwvc21hbGw+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPXt7cGFnZXVybH19PjxpIGNsYXNzPVwiZmEgZmEtZGFzaGJvYXJkXCI+PC9pPnt7bW9kbGVuYW1lfX0gPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPnt7cGFnZW5hbWV9fTwvbGk+XHJcbiAgICAgICAgPC9vbD5cclxuICAgIDwvc2VjdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIC5jb250ZW50LWhlYWRlcntcclxuICAgICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZDZkZTtcclxuICB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBtb2R1bGUuZXhwb3J0cz17XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICBtb2RsZW5hbWU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6J+ivleWNt+euoeeQhid9LFxyXG4gICAgICAgICAgICBwYWdlbmFtZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDon6K+V5Y235p+l6YeNJ30sXHJcbiAgICAgICAgICAgIHBhZ2V1cmw6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6JyMvZGVtbyd9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIENvbnRlbnRIZWFkZXIudnVlPzYyYmExZTVhXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50LWhlYWRlclxcXCIgPlxcbiAgICA8aDE+XFxuICAgICAgICB7e21vZGxlbmFtZX19XFxuICAgICAgICA8c21hbGw+e3twYWdlbmFtZX19PC9zbWFsbD5cXG4gICAgPC9oMT5cXG4gICAgPG9sIGNsYXNzPVxcXCJicmVhZGNydW1iXFxcIj5cXG4gICAgICAgIDxsaT48YSBocmVmPXt7cGFnZXVybH19PjxpIGNsYXNzPVxcXCJmYSBmYS1kYXNoYm9hcmRcXFwiPjwvaT57e21vZGxlbmFtZX19IDwvYT48L2xpPlxcbiAgICAgICAgPGxpIGNsYXNzPVxcXCJhY3RpdmVcXFwiPnt7cGFnZW5hbWV9fTwvbGk+XFxuICAgIDwvb2w+XFxuPC9zZWN0aW9uPlxcblwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1odG1sLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRIZWFkZXIudnVlXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gNSA2IDggOSAxMVxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDUgNyA4IDkgMTAgMTFcbiAqKi8iLCJ2YXIgX192dWVfc2NyaXB0X18sIF9fdnVlX3RlbXBsYXRlX19cbl9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lczIwMTUmcGx1Z2luc1tdPXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYXBlckxpc3QudnVlXCIpXG5pZiAoX192dWVfc2NyaXB0X18gJiZcbiAgICBfX3Z1ZV9zY3JpcHRfXy5fX2VzTW9kdWxlICYmXG4gICAgT2JqZWN0LmtleXMoX192dWVfc2NyaXB0X18pLmxlbmd0aCA+IDEpIHtcbiAgY29uc29sZS53YXJuKFwiW3Z1ZS1sb2FkZXJdIHNyY1xcXFxjb21wb25lbnRzXFxcXHF1ZXN0aW9uXFxcXHBhcGVyTGlzdC52dWU6IG5hbWVkIGV4cG9ydHMgaW4gKi52dWUgZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1odG1sLWxvYWRlciEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wYXBlckxpc3QudnVlXCIpXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX3NjcmlwdF9fIHx8IHt9XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG5pZiAoX192dWVfdGVtcGxhdGVfXykge1xuKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgfHwgKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgPSB7fSkpIDogbW9kdWxlLmV4cG9ydHMpLnRlbXBsYXRlID0gX192dWVfdGVtcGxhdGVfX1xufVxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIHZhciBpZCA9IFwiX3YtNWEyMzUxMmQvcGFwZXJMaXN0LnZ1ZVwiXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChpZCwgbW9kdWxlLmV4cG9ydHMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnVwZGF0ZShpZCwgbW9kdWxlLmV4cG9ydHMsIF9fdnVlX3RlbXBsYXRlX18pXG4gIH1cbn0pKCl9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL3F1ZXN0aW9uL3BhcGVyTGlzdC52dWVcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSA5XG4gKiovIiwiPHRlbXBsYXRlID5cclxuICAgIDxkaXYgY2xhc3M9XCJwYXBlckxpc3RcIj5cclxuICAgICAgICAgPHRvcGhlYWQgOm1vZGxlbmFtZT1cIm9uZVwiIDpwYWdlbmFtZT1cInR3b1wiICA6cGFnZXVybD1cInRocmVlXCI+PC90b3BoZWFkPlxyXG4gICAgICAgICA8aDUgY2xhc3M9XCJoZWFkbmFtZVwiPueCueWHu+afpeivouenkeebrjwvaDU+XHJcbiAgICAgICAgIDx1bCBjbGFzcz1cInBhcGVyQm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdG9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0Y29udGVudFwiIHYtZm9yPVwic3ViamVjdCBpbiBzdWJqZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGEgaHJlZj1cIiMvcGFwZXJMaXN0LWdldHBhcGVyLzp7e3N1YmplY3QuaWR9fVwiPiAge3tzdWJqZWN0Lm5hbWV9fTwvYT4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiMvcGFwZXJMaXN0LWdldHBhcGVyL3t7c3ViamVjdC5pZH19XCI+ICB7e3N1YmplY3QubmFtZX19PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gICAgdmFyIGhlYWQ9cmVxdWlyZShcImNvbW1vbi9Db250ZW50SGVhZGVyLnZ1ZVwiKTtcclxuICAgIHJlcXVpcmUoXCIuLi8uLi8uLi9idW5kbGUvY3NzL3BhcGVyTGlzdC5jc3NcIik7XHJcbiAgICB2YXIgcmVzb3VyY2U9cmVxdWlyZShcInV0aWwvUmVzb3VyY2VEYXRhLmpzXCIpO1xyXG4gICAgbW9kdWxlLmV4cG9ydHM9e1xyXG4gICAgICAgIHRlbXBsYXRlOlwiLnBhcGVyTGlzdFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6e1xyXG4gICAgICAgICAgICBcInRvcGhlYWRcIjpoZWFkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIG9uZTon6K+V6aKY566h55CGJyxcclxuICAgICAgICAgICAgICAgIHR3bzpcIuivlemimOWIl+ihqFwiLFxyXG4gICAgICAgICAgICAgICAgdGhyZWU6XCIjL3BhcGVyTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgc3ViamVjdHM6cmVzb3VyY2Uucl9zdWJqZWN0TGlzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogcGFwZXJMaXN0LnZ1ZT80ODFlNTNlZFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFwZXJMaXN0LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wYXBlckxpc3QuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFwZXJMaXN0LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2J1bmRsZS9jc3MvcGFwZXJMaXN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDlcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYXBlckxpc3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJcXFxcNUZBRVxcXFw4RjZGXFxcXDk2QzVcXFxcOUVEMVxcXCI7XFxufVxcbi5wYXBlckxpc3QgLmhlYWRuYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnBhcGVyTGlzdCAucGFwZXJCb2R5IHtcXG4gIHdpZHRoOiA4OCU7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG59XFxuLnBhcGVyTGlzdCAucGFwZXJCb2R5IC5saXN0b25lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHpvb206IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMjAwcHg7XFxuICAtbW96LXBlcnNwZWN0aXZlOiAxMjAwcHg7XFxuICAtbXMtcGVyc3BlY3RpdmU6IDEyMDBweDtcXG4gIC1vLXBlcnNwZWN0aXZlOiAxMjAwcHg7XFxuICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xcbn1cXG4ucGFwZXJMaXN0IC5wYXBlckJvZHkgLmxpc3RvbmUgLmxpc3Rjb250ZW50IHtcXG4gIHdpZHRoOiAxOCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYmFja2dyb3VuZDogc2Vhc2hlbGw7XFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLW1zLXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtby10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGxpbmVhcjtcXG59XFxuLnBhcGVyTGlzdCAucGFwZXJCb2R5IC5saXN0b25lIC5saXN0Y29udGVudDpob3ZlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpIHNjYWxlKDAuODgpO1xcbn1cXG4ucGFwZXJMaXN0IC5wYXBlckJvZHkgLmxpc3RvbmUgLmxpc3Rjb250ZW50IGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE1MHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbn1cXG4ucGFwZXJMaXN0IC5wYXBlckJvZHkgLmxpc3RvbmUgLmxpc3Rjb250ZW50IGgyIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiMGUxZWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ucGFwZXJMaXN0IC5wYXBlckJvZHkgLmxpc3RvbmUgLmxpc3Rjb250ZW50IC50ZXh0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW1hcHMvcGFwZXJMaXN0LmNzcy5tYXAgKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYnVuZGxlL2Nzcy9wYXBlckxpc3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gOVxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHlhbmdqaW4gb24gMjAxNi83LzIxLlxyXG4gKi9cclxuLy/kuIvmi4npgInljZXmlbDmja7pm4ZcclxuLypcclxuIOenkeebrlxyXG4gKi9cclxubW9kdWxlLmV4cG9ydHM9IHtcclxuICAgICAgICByX3N1YmplY3RMaXN0OiBbXHJcbiAgICAgICAgICAgIHtpZDogJzAxJywgbmFtZTogJ+ivreaWhyd9LFxyXG4gICAgICAgICAgICB7aWQ6ICcwMicsIG5hbWU6ICfmlbDlraYnfSxcclxuICAgICAgICAgICAge2lkOiAnMDMnLCBuYW1lOiAn6Iux6K+tJ30sXHJcbiAgICAgICAgICAgIHtpZDogJzA0JywgbmFtZTogJ+eJqeeQhid9LFxyXG4gICAgICAgICAgICB7aWQ6ICcwNScsIG5hbWU6ICfljJblraYnfSxcclxuICAgICAgICAgICAge2lkOiAnMDYnLCBuYW1lOiAn5Zyw55CGJ30sXHJcbiAgICAgICAgICAgIHtpZDogJzA3JywgbmFtZTogJ+WOhuWPsid9LFxyXG4gICAgICAgICAgICB7aWQ6ICcwOCcsIG5hbWU6ICfmlL/msrsnfSxcclxuICAgICAgICAgICAge2lkOiAnMDknLCBuYW1lOiAn55Sf54mpJ30sXHJcbiAgICAgICAgICAgIHtpZDogJzEwJywgbmFtZTogJ+enkeWtpid9LFxyXG4gICAgICAgICAgICB7aWQ6ICcxMScsIG5hbWU6ICfnkIbnu7wnfSxcclxuICAgICAgICAgICAge2lkOiAnMTInLCBuYW1lOiAn5paH57u8J30sXHJcbiAgICAgICAgICAgIHtpZDogJzEzJywgbmFtZTogJ+WOhuWPsuS4juekvuS8mid9LFxyXG4gICAgICAgICAgICB7aWQ6ICcxNCcsIG5hbWU6ICflpaXmlbAnfV1cclxufVxyXG4vL2Z1bmN0aW9uIFJlc291cmNlX3N1YlN0YXRlYnlpZChpZCwgaWRsaXN0KSB7XHJcbi8vICAgIHZhciBEYXRhbGlzdCA9IFtcclxuLy8gICAgICAgIHsgaWQ6ICcwMScsIG5hbWU6ICfor63mlocnIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMDInLCBuYW1lOiAn5pWw5a2mJyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzAzJywgbmFtZTogJ+iLseivrScgfSxcclxuLy8gICAgICAgIHsgaWQ6ICcwNCcsIG5hbWU6ICfniannkIYnIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMDUnLCBuYW1lOiAn5YyW5a2mJyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzA2JywgbmFtZTogJ+WcsOeQhicgfSxcclxuLy8gICAgICAgIHsgaWQ6ICcwNycsIG5hbWU6ICfljoblj7InIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMDgnLCBuYW1lOiAn5pS/5rK7JyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzA5JywgbmFtZTogJ+eUn+eJqScgfSxcclxuLy8gICAgICAgIHsgaWQ6ICcxMCcsIG5hbWU6ICfnp5HlraYnIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMTEnLCBuYW1lOiAn55CG57u8JyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzEyJywgbmFtZTogJ+aWh+e7vCcgfSxcclxuLy8gICAgICAgIHsgaWQ6ICcxMycsIG5hbWU6ICfljoblj7LkuI7npL7kvJonIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMTQnLCBuYW1lOiAn5aWl5pWwJyB9XTtcclxuLy8gICAgQWRkc3VidmFsdWUoaWQsIERhdGFsaXN0LCBpZGxpc3QpO1xyXG4vL31cclxuLy9mdW5jdGlvbiBBZGRzdWJ2YWx1ZShpZCwgRGF0YWxpc3QsIGlkbGlzdCkge1xyXG4vLyAgICB2YXIgZWR1RGF0YSA9IERhdGFsaXN0XHJcbi8vICAgIHZhciBkYXRhTGVuZ3RoID0gZWR1RGF0YS5sZW5ndGg7XHJcbi8vICAgIHZhciBpO1xyXG4vLyAgICB2YXIgb2JqT3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4vLyAgICB2YXIgbnVtPTA7XHJcbi8vICAgIGlmIChvYmpPcHRpb24pIHtcclxuLy8gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICBpZiAoaWRsaXN0LmluZGV4T2YoZWR1RGF0YVtpXS5pZCkgPj0gMCkge1xyXG4vLyAgICAgICAgICAgICAgICBvYmpPcHRpb24ub3B0aW9uc1tudW1dID0gbmV3IE9wdGlvbihlZHVEYXRhW2ldLm5hbWUsIGVkdURhdGFbaV0uaWQpO1xyXG4vLyAgICAgICAgICAgICAgICBudW0rKztcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICB9XHJcbi8vICAgIH1cclxuLy99XHJcbi8vXHJcbi8vXHJcbi8vLypcclxuLy8g6K+V5Y2354q25oCBXHJcbi8vICovXHJcbi8vZnVuY3Rpb24gUmVzb3VyY2VfUGFwZXJTdGF0ZShpZCwgc2lkKSB7XHJcbi8vICAgIHZhciBEYXRhbGlzdCA9IFtcclxuLy8gICAgICAgIHsgaWQ6IDAsIG5hbWU6ICfkuIrkvKDmiJDlip8nIH0sXHJcbi8vICAgICAgICB7IGlkOiAxLCBuYW1lOiAn6L2saHRtbOWksei0pScgfSxcclxuLy8gICAgICAgIHsgaWQ6IDIsIG5hbWU6ICfovaxodG1s5oiQ5YqfJyB9LFxyXG4vLyAgICAgICAgeyBpZDogMywgbmFtZTogJ+ivleWNt+mHjeWkjScgfSxcclxuLy8gICAgICAgIHsgaWQ6IDQsIG5hbWU6ICfnrYnlvoXlrqHmoLgnIH0sXHJcbi8vICAgICAgICB7IGlkOiA1LCBuYW1lOiAn5a6h5qC45pyq6YCa6L+HJyB9LFxyXG4vLyAgICAgICAgeyBpZDogNiwgbmFtZTogJ+WuoeaguOmAmui/hycgfSxcclxuLy8gICAgICAgIHsgaWQ6IDcsIG5hbWU6ICfmi4bliIblpLHotKUnIH0sXHJcbi8vICAgICAgICB7IGlkOiA4LCBuYW1lOiAn5ouG5YiG5oiQ5YqfJyB9LFxyXG4vLyAgICAgICAgeyBpZDogOSwgbmFtZTogJ+W9leWFpeWujOaIkCcgfSxcclxuLy8gICAgICAgIHsgaWQ6IDEwLCBuYW1lOiAn5pS+5Ye65aSx6LSlJyB9LFxyXG4vLyAgICAgICAgeyBpZDogMTEsIG5hbWU6ICfmlL7lh7rmiJDlip8nIH1dO1xyXG4vL1xyXG4vLyAgICBBZGRTZWxlY3R2YWx1ZShpZCwgRGF0YWxpc3QsIHNpZCk7XHJcbi8vfVxyXG4vL1xyXG4vLy8qXHJcbi8vIOivlemimOeKtuaAgVxyXG4vLyAqL1xyXG4vL2Z1bmN0aW9uIFJlc291cmNlX1F1ZXN0aW9uU3RhdGVzKGlkLCBzaWQpIHtcclxuLy8gICAgdmFyIERhdGFsaXN0ID0gW1xyXG4vLyAgICAgICAgeyBpZDogMCwgbmFtZTogJ+aLhuWIhuWFpeW6kycgfSxcclxuLy8gICAgICAgIHsgaWQ6IDEsIG5hbWU6ICfor5Xpopjljrvph40nIH0sXHJcbi8vICAgICAgICB7IGlkOiAyLCBuYW1lOiAn562J5b6F57yW6L6RJyB9LFxyXG4vLyAgICAgICAgeyBpZDogMywgbmFtZTogJ+e7keWumue8lui+kScgfSxcclxuLy8gICAgICAgIHsgaWQ6IDQsIG5hbWU6ICfnrYnlvoXkuIDlrqEnIH0sXHJcbi8vICAgICAgICB7IGlkOiA1LCBuYW1lOiAn5LiA5a6h6I635Y+WJyB9LFxyXG4vLyAgICAgICAgeyBpZDogNiwgbmFtZTogJ+S4gOWuoemAgOWbnicgfSxcclxuLy8gICAgICAgIHsgaWQ6IDcsIG5hbWU6ICfnrYnlvoXkuozlrqEnIH0sXHJcbi8vICAgICAgICB7IGlkOiA4LCBuYW1lOiAn5LqM5a6h6YCA5ZueJyB9LFxyXG4vLyAgICAgICAgeyBpZDogOSwgbmFtZTogJ+WuoeaguOmAmui/hycgfV07XHJcbi8vXHJcbi8vICAgIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhbGlzdCwgc2lkKTtcclxuLy99XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vdmFyIERhdGFsaXN0U3ViaiA9IFt7IGlkOiAnMDEnLCBuYW1lOiAn6K+t5paHJyB9LCB7IGlkOiAnMDInLCBuYW1lOiAn5pWw5a2mJyB9LCB7IGlkOiAnMDMnLCBuYW1lOiAn6Iux6K+tJyB9LCB7IGlkOiAnMDQnLCBuYW1lOiAn54mp55CGJyB9LCB7IGlkOiAnMDUnLCBuYW1lOiAn5YyW5a2mJyB9LCB7IGlkOiAnMDYnLCBuYW1lOiAn5Zyw55CGJyB9LCB7IGlkOiAnMDcnLCBuYW1lOiAn5Y6G5Y+yJyB9LCB7IGlkOiAnMDgnLCBuYW1lOiAn5pS/5rK7JyB9LCB7IGlkOiAnMDknLCBuYW1lOiAn55Sf54mpJyB9LCB7IGlkOiAnMTAnLCBuYW1lOiAn56eR5a2mJyB9LCB7IGlkOiAnMTEnLCBuYW1lOiAn55CG57u8JyB9LCB7IGlkOiAnMTInLCBuYW1lOiAn5paH57u8JyB9LCB7IGlkOiAnMTMnLCBuYW1lOiAn5Y6G5Y+y5LiO56S+5LyaJyB9LCB7aWQ6JzE0JyxuYW1lOiflpaXmlbAnfV07XHJcbi8vLy/np5Hnm65cclxuLy8vL2Z1bmN0aW9uIFJlc291cmNlU3ViaihpZCwgc2lkKSB7XHJcbi8vLy8gICAgQWRkU2VsZWN0dmFsdWUoaWQsIERhdGFsaXN0U3Viaiwgc2lkKTtcclxuLy8vL31cclxuLy9cclxuLy8vL+iOt+WPluenkeebrlxyXG4vL2Z1bmN0aW9uIFJlc291cmNlR2V0U3ViakJ5SUQoaWQpIHtcclxuLy8gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBEYXRhbGlzdFN1YmoubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgIGlmIChEYXRhbGlzdFN1YmpbaV0uaWQgPT0gaWQpIHtcclxuLy8gICAgICAgICAgICByZXR1cm4gRGF0YWxpc3RTdWJqW2ldLm5hbWU7XHJcbi8vICAgICAgICB9XHJcbi8vICAgIH1cclxuLy8gICAgcmV0dXJuIGlkO1xyXG4vL31cclxuLy9cclxuLy9cclxuLy8vKlxyXG4vLyDmr4/mmL7npLrmlbDph49cclxuLy8gKi9cclxuLy9mdW5jdGlvbiBSZXNvdXJjZV9wYWdlKGlkLCBzaWQpIHtcclxuLy8gICAgdmFyIERhdGFsaXN0ID0gW3sgaWQ6IDEwLCBuYW1lOiAnMTAnIH0sIHsgaWQ6IDIwLCBuYW1lOiAnMjAnIH1dO1xyXG4vLyAgICBBZGRTZWxlY3R2YWx1ZShpZCwgRGF0YWxpc3QsIHNpZCk7XHJcbi8vfVxyXG4vL1xyXG4vLy8qXHJcbi8vIOivlemimOe7n+iuoVxyXG4vLyAqL1xyXG4vL2Z1bmN0aW9uIFJlc291cmNlX1F1ZXN0aW9uX3BhZ2UoaWQsIHNpZCkge1xyXG4vLyAgICB2YXIgRGF0YWxpc3QgPSBbeyBpZDogMTAsIG5hbWU6ICcxMCcgfSwgeyBpZDogMjAsIG5hbWU6ICcyMCcgfSwgeyBpZDogNTAsIG5hbWU6ICc1MCcgfSwgeyBpZDogMTAwLCBuYW1lOiAnMTAwJyB9LCB7IGlkOiAyMDAsIG5hbWU6ICcyMDAnIH1dO1xyXG4vLyAgICBBZGRTZWxlY3R2YWx1ZShpZCwgRGF0YWxpc3QsIHNpZCk7XHJcbi8vfVxyXG4vLy8qXHJcbi8vIOWtpuWItuWhq+WFheeahFxyXG4vLyAqL1xyXG4vLy8vZnVuY3Rpb24gUmVzb3VyY2VFZHVEYXRhKGlkLCBzaWQpIHtcclxuLy8vLyAgICB2YXIgRGF0YWxpc3QgPSBbeyBpZDogMCwgbmFtZTogJ+WFreS4iScgfSwgeyBpZDogMSwgbmFtZTogJ+S6lOWbmycgfV07XHJcbi8vLy8gICAgQWRkU2VsZWN0dmFsdWUoaWQsIERhdGFsaXN0LCBzaWQpO1xyXG4vLy8vfVxyXG4vL1xyXG4vLy8qXHJcbi8vIOW5tOe6p1xyXG4vLyAqL1xyXG4vL2Z1bmN0aW9uIFJlc291cmNlQ2xhc3MoaWQsIHNpZCkge1xyXG4vLyAgICB2YXIgRGF0YWxpc3QgPSBbeyBpZDogJ3gnLCBuYW1lOiAn5bCP5a2mJyB9LCB7IGlkOiAnYycsIG5hbWU6ICfliJ3kuK0nIH0sIHsgaWQ6ICdnJywgbmFtZTogJ+mrmOS4rScgfV07XHJcbi8vICAgIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhbGlzdCwgc2lkKTtcclxuLy99XHJcbi8vXHJcbi8vXHJcbi8vdmFyIERhdGFsaXN0R3JhZGUgPSBbeyBpZDogJycsIG5hbWU6ICfkuI3pmZDlubTnuqcnIH0sIHsgaWQ6ICd4MScsIG5hbWU6ICfkuIDlubTnuqcnIH0sIHsgaWQ6ICd4MicsIG5hbWU6ICfkuozlubTnuqcnIH0sIHsgaWQ6ICd4MycsIG5hbWU6ICfkuInlubTnuqcnIH0sIHsgaWQ6ICd4NCcsIG5hbWU6ICflm5vlubTnuqcnIH0sIHsgaWQ6ICd4NScsIG5hbWU6ICfkupTlubTnuqcnIH0sIHsgaWQ6ICd4NicsIG5hbWU6ICflha3lubTnuqcnIH0sIHsgaWQ6ICdjMScsIG5hbWU6ICfkuIPlubTnuqcnIH0sIHsgaWQ6ICdjMicsIG5hbWU6ICflhavlubTnuqcnIH0sIHsgaWQ6ICdjMycsIG5hbWU6ICfkuZ3lubTnuqcnIH0sIHsgaWQ6ICdnMScsIG5hbWU6ICfpq5jkuIAnIH0sIHsgaWQ6ICdnMicsIG5hbWU6ICfpq5jkuownIH0sIHsgaWQ6ICdnMycsIG5hbWU6ICfpq5jkuIknIH1dO1xyXG4vLy8qXHJcbi8vIOWwj+W5tOe6p+WvueixoVxyXG4vLyAqL1xyXG4vLy8vZnVuY3Rpb24gUmVzb3VyY2VHcmFkZURhdGEoaWQsIHNpZCkge1xyXG4vLy8vICAgIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhbGlzdEdyYWRlLCBzaWQpO1xyXG4vLy8vfVxyXG4vLy8qXHJcbi8vIOWwj+W5tOe6p+WvueixoVxyXG4vLyAqL1xyXG4vL2Z1bmN0aW9uIFJlc291cmNlR2V0R3JhZGVCeUlkKGlkKSB7XHJcbi8vICAgIGZvciAodmFyIGkgPSAwOyBpIDwgRGF0YWxpc3RHcmFkZS5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgaWYgKERhdGFsaXN0R3JhZGVbaV0uaWQgPT0gaWQpIHtcclxuLy8gICAgICAgICAgICByZXR1cm4gRGF0YWxpc3RHcmFkZVtpXS5uYW1lO1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICB9XHJcbi8vICAgIHJldHVybiBpZDtcclxuLy99XHJcbi8vLypcclxuLy8g5oCn5YirIGlkIOaOp+S7tmlE77yMc2lk77ya6buY6K6k5YC855qEaWRcclxuLy8gKi9cclxuLy9mdW5jdGlvbiBSZXNvdXJjZV9TZXgoaWQsIHNpZCkge1xyXG4vLyAgICB2YXIgRGF0YWxpc3QgPSBbeyBpZDogJ+eUtycsIG5hbWU6ICfnlLcnIH0sIHsgaWQ6ICflpbMnLCBuYW1lOiAn5aWzJyB9XTtcclxuLy8gICAgQWRkU2VsZWN0dmFsdWUoaWQsIERhdGFsaXN0LCBzaWQpO1xyXG4vL31cclxuLy9cclxuLy8vLy8v5YaF5aSW6YOo55So5oi3IGlkIOaOp+S7tmlE77yMc2lk77ya6buY6K6k5YC855qEaWRcclxuLy9mdW5jdGlvbiBSZXNvdXJjZV90eXBlKGlkLCBzaWQpIHtcclxuLy8gICAgdmFyIERhdGFsaXN0ID0gW3sgaWQ6ICcwJywgbmFtZTogJ+WGhemDqOeUqOaItycgfSwgeyBpZDogJzEnLCBuYW1lOiAn5aSW6YOo55So5oi3JyB9XTtcclxuLy8gICAgQWRkU2VsZWN0dmFsdWUoaWQsIERhdGFsaXN0LCBzaWQpO1xyXG4vL31cclxuLy9cclxuLy8vL+WFrOWFseaWueazlVxyXG4vLy8v57uZc2VsZWN0IOWvueixoeWhq+WFheaVsOaNrlxyXG4vL2Z1bmN0aW9uIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhbGlzdCwgc2lkKSB7XHJcbi8vICAgIHZhciBlZHVEYXRhID0gRGF0YWxpc3RcclxuLy8gICAgdmFyIGRhdGFMZW5ndGggPSBlZHVEYXRhLmxlbmd0aDtcclxuLy8gICAgdmFyIGk7XHJcbi8vICAgIHZhciBvYmpPcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbi8vICAgIGlmIChvYmpPcHRpb24pIHtcclxuLy8gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhTGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICBvYmpPcHRpb24ub3B0aW9uc1tpXSA9IG5ldyBPcHRpb24oZWR1RGF0YVtpXS5uYW1lLCBlZHVEYXRhW2ldLmlkKTtcclxuLy8gICAgICAgICAgICBpZiAoZWR1RGF0YVtpXS5pZCA9PSBzaWQpIHtcclxuLy8gICAgICAgICAgICAgICAgb2JqT3B0aW9uLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSBcInNlbGVjdGVkXCI7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICB9XHJcbi8vfVxyXG4vL1xyXG4vLy8qXHJcbi8vIOWkp+W5tOe6p+Whq+WFheWvueixoVxyXG4vLyAqL1xyXG4vL2Z1bmN0aW9uIFJlc291cmNlQkdyYWRlRGF0YShpZCwgc2lkKSB7XHJcbi8vICAgIHZhciBEYXRhID0gW3sgaWQ6ICd4JywgbmFtZTogJ+Wwj+WtpicgfSwgeyBpZDogJ2MnLCBuYW1lOiAn5Yid5LitJyB9LCB7IGlkOiAnZycsIG5hbWU6ICfpq5jkuK0nIH1dO1xyXG4vLyAgICBBZGRTZWxlY3R2YWx1ZShpZCwgRGF0YSwgc2lkKTtcclxuLy99XHJcbi8vXHJcbi8vLypcclxuLy8g5a2m5qCh57qn5YirIDEu5Zu95a6257qnIDIu55yB57qnICAgMy7lnLDluILnuqcgNC7ljr/luILnuqdcclxuLy8gKi9cclxuLy9mdW5jdGlvbiBSZXNvdXJjZVNjaG9vbExldmVsKGlkLCBzaWQpIHtcclxuLy8gICAgdmFyIERhdGEgPSBbeyBpZDogJzAnLCBuYW1lOiAnLS3or7fpgInmi6ktLScgfSwgeyBpZDogJzEnLCBuYW1lOiAn5Zu95a6257qnJyB9LCB7IGlkOiAnMicsIG5hbWU6ICfnnIHnuqcnIH0sIHsgaWQ6ICczJywgbmFtZTogJ+WcsOW4gue6pycgfSwgeyBpZDogJzQnLCBuYW1lOiAn5Y6/5biC57qnJyB9XTtcclxuLy8gICAgQWRkU2VsZWN0dmFsdWUoaWQsIERhdGEsIHNpZCk7XHJcbi8vfVxyXG4vL1xyXG4vLy8qXHJcbi8vIOWtpuenkVxyXG4vLyAqL1xyXG4vL2Z1bmN0aW9uIFJlc291cmNlU3ViamVjdChpZCwgc2lkKSB7XHJcbi8vICAgIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhbGlzdFN1YmosIHNpZCk7XHJcbi8vfVxyXG4vL1xyXG4vLy8v6K+V5Y236YCC55So55qE5LiK5LiL5a2m5pyfIDAg5LiK5a2m5pyfIDEg5LiL5a2m5pyfIDIg5YWo5LiA5YaMXHJcbi8vZnVuY3Rpb24gUmVzb3VyY2VUZXJtKGlkLCBzaWQpIHtcclxuLy8gICAgdmFyIERhdGEgPSBbXHJcbi8vICAgICAgICB7IGlkOiAnMCcsIG5hbWU6ICfkuIrlrabmnJ8nIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMScsIG5hbWU6ICfkuIvlrabmnJ8nIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMicsIG5hbWU6ICflhajkuIDlhownIH1cclxuLy8gICAgXTtcclxuLy8gICAgQWRkU2VsZWN0dmFsdWUoaWQsIERhdGEsIHNpZCk7XHJcbi8vfVxyXG4vL2Z1bmN0aW9uIFJlc291cmNlVGVybXBhcGVyKGlkLCBzaWQpIHtcclxuLy8gICAgdmFyIERhdGEgPSBbXHJcbi8vICAgICAgICB7IGlkOiAnMCcsIG5hbWU6ICfkuIrlrabmnJ8nIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMScsIG5hbWU6ICfkuIvlrabmnJ8nIH0vLyxcclxuLy8gICAgICAgIC8veyBpZDogJzInLCBuYW1lOiAn5YWo5LiA5YaMJyB9XHJcbi8vICAgIF07XHJcbi8vICAgIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhLCBzaWQpO1xyXG4vL31cclxuLy8vLy8g6K+V5Y2357G75Z6LXHJcbi8vZnVuY3Rpb24gUmVzb3VyY2VQYXBlclR5cGUoaWQsIHNpZCkge1xyXG4vLyAgICB2YXIgRGF0YSA9IFtcclxuLy8gICAgICAgIHsgaWQ6ICcxJywgbmFtZTogJ+acn+S4rScgfSxcclxuLy8gICAgICAgIHsgaWQ6ICcyJywgbmFtZTogJ+acn+acqycgfSxcclxuLy8gICAgICAgIHsgaWQ6ICczJywgbmFtZTogJ+aooeaLnycgfSxcclxuLy8gICAgICAgIHsgaWQ6ICc0JywgbmFtZTogJ+WQjOatpScgfSxcclxuLy8gICAgICAgIHsgaWQ6ICc1JywgbmFtZTogJ+S4k+mhuScgfSxcclxuLy8gICAgICAgIHsgaWQ6ICc2JywgbmFtZTogJ+aciOiAgycgfSxcclxuLy8gICAgICAgIHsgaWQ6ICc3JywgbmFtZTogJ+S4reiAgycgfSxcclxuLy8gICAgICAgIHsgaWQ6ICc4JywgbmFtZTogJ+ernui1mycgfSxcclxuLy8gICAgICAgIHsgaWQ6ICc5JywgbmFtZTogJ+mrmOiAgycgfSxcclxuLy8gICAgICAgIHsgaWQ6ICcxMCcsIG5hbWU6ICflsI/ogIMnIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMTEnLCBuYW1lOiAn5Lya6ICDJyB9XHJcbi8vICAgIF07XHJcbi8vICAgIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhLCBzaWQpO1xyXG4vL31cclxuLy9cclxuLy8vLy8g6K+V5Y2357G75Z6LXHJcbi8vZnVuY3Rpb24gUmVzb3VyY2V3bChpZCwgc2lkKSB7XHJcbi8vICAgIHZhciBEYXRhID0gW1xyXG4vLyAgICAgICAgeyBpZDogJzEnLCBuYW1lOiAn5paH56eRJyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzAnLCBuYW1lOiAn55CG56eRJyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzInLCBuYW1lOiAn5LiN5YiG5paH55CG56eRJyB9XHJcbi8vICAgIF07XHJcbi8vICAgIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhLCBzaWQpO1xyXG4vL31cclxuLy9cclxuLy8vLy8g6K+V5Y2357G75Z6LXHJcbi8vZnVuY3Rpb24gUmVzb3VyY2VQRnJvbShpZCwgc2lkKSB7XHJcbi8vICAgIHZhciBEYXRhID0gW1xyXG4vLyAgICAgICAgeyBpZDogJzAnLCBuYW1lOiAn5YaF6YOo5b2V5YWlJyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzEnLCBuYW1lOiAn5YW86IGM5b2V5YWlJyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzInLCBuYW1lOiAn5py65p6EJyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzMnLCBuYW1lOiAn6K++5pysJyB9XHJcbi8vICAgIF07XHJcbi8vICAgIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhLCBzaWQpO1xyXG4vL31cclxuLy9cclxuLy9cclxuLy9mdW5jdGlvbiBBZGRBbGxBZWxlY3QoSUQsIHZhbHVlKSB7XHJcbi8vICAgICQoXCIjXCIgKyBJRCArIFwiXCIpLnByZXBlbmQoXCI8b3B0aW9uIHZhbHVlPScnIHNlbGVjdGVkPSdzZWxlY3RlZCcgPuWFqOmDqDwvb3B0aW9uPlwiKTtcclxuLy9cclxuLy8gICAgJChcIiNcIiArIElEICsgXCJcIikudmFsKHZhbHVlKTtcclxuLy9cclxuLy99XHJcbi8vXHJcbi8vLy8vIOagueaNruWtpuauteabtOaWsOWtpuenkVxyXG4vL2Z1bmN0aW9uIENoYW5nZVN1YmplY3RMaXN0QnlHcmFkZShncmFkZUxpc3QsIHN1YmplY3RMaXN0KSB7XHJcbi8vICAgIHZhciBncmFkZSA9ICQoZ3JhZGVMaXN0KS52YWwoKTtcclxuLy8gICAgc3dpdGNoIChncmFkZSkge1xyXG4vLyAgICAgICAgY2FzZSAneCc6XHJcbi8vICAgICAgICAgICAgJChzdWJqZWN0TGlzdCArIFwiIG9wdGlvblt2YWx1ZT0nMDQnXVwiKS5yZW1vdmUoKTtcclxuLy8gICAgICAgICAgICAkKHN1YmplY3RMaXN0ICsgXCIgb3B0aW9uW3ZhbHVlPScwNSddXCIpLnJlbW92ZSgpO1xyXG4vLyAgICAgICAgICAgICQoc3ViamVjdExpc3QgKyBcIiBvcHRpb25bdmFsdWU9JzA2J11cIikucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgICAgJChzdWJqZWN0TGlzdCArIFwiIG9wdGlvblt2YWx1ZT0nMDcnXVwiKS5yZW1vdmUoKTtcclxuLy8gICAgICAgICAgICAkKHN1YmplY3RMaXN0ICsgXCIgb3B0aW9uW3ZhbHVlPScwOCddXCIpLnJlbW92ZSgpO1xyXG4vLyAgICAgICAgICAgICQoc3ViamVjdExpc3QgKyBcIiBvcHRpb25bdmFsdWU9JzA5J11cIikucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgICAgJChzdWJqZWN0TGlzdCArIFwiIG9wdGlvblt2YWx1ZT0nMTAnXVwiKS5yZW1vdmUoKTtcclxuLy8gICAgICAgICAgICAkKHN1YmplY3RMaXN0ICsgXCIgb3B0aW9uW3ZhbHVlPScxMSddXCIpLnJlbW92ZSgpO1xyXG4vLyAgICAgICAgICAgICQoc3ViamVjdExpc3QgKyBcIiBvcHRpb25bdmFsdWU9JzEyJ11cIikucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICBjYXNlICdjJzpcclxuLy8gICAgICAgICAgICAkKHN1YmplY3RMaXN0ICsgXCIgb3B0aW9uW3ZhbHVlPScxMSddXCIpLnJlbW92ZSgpO1xyXG4vLyAgICAgICAgICAgICQoc3ViamVjdExpc3QgKyBcIiBvcHRpb25bdmFsdWU9JzEyJ11cIikucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICBjYXNlICdnJzpcclxuLy8gICAgICAgICAgICAkKHN1YmplY3RMaXN0ICsgXCIgb3B0aW9uW3ZhbHVlPScxMCddXCIpLnJlbW92ZSgpO1xyXG4vLyAgICAgICAgICAgICQoc3ViamVjdExpc3QgKyBcIiBvcHRpb25bdmFsdWU9JzExJ11cIikucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgICAgJChzdWJqZWN0TGlzdCArIFwiIG9wdGlvblt2YWx1ZT0nMTInXVwiKS5yZW1vdmUoKTtcclxuLy8gICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgIH1cclxuLy99XHJcbi8vXHJcbi8vLy8vIOivlemimOW9leWFpeaWueW8j1xyXG4vL2Z1bmN0aW9uIFJlc291cmNlUXVlc0VudHJ5U3RhdGUoaWQsIHNpZCkge1xyXG4vLyAgICB2YXIgRGF0YSA9IFtcclxuLy8gICAgICAgIHsgaWQ6ICctMScsIG5hbWU6ICfmiYDmnIknIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMCcsIG5hbWU6ICfogIHluIjlvZXlhaUnIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMScsIG5hbWU6ICfmnLrlmajlpITnkIYnIH0sXHJcbi8vICAgICAgICB7IGlkOiAnMTAwJywgbmFtZTogJ+S/neeVmeiAgemimCcgfVxyXG4vLyAgICBdO1xyXG4vLyAgICBBZGRTZWxlY3R2YWx1ZShpZCwgRGF0YSwgc2lkKTtcclxuLy99XHJcbi8vLy8vIOivlemimOW9leWFpeaWueW8j1xyXG4vL2Z1bmN0aW9uIFJlc291cmNlUGFwZXJFbnRyeVN0YXRlKGlkLCBzaWQpIHtcclxuLy8gICAgdmFyIERhdGEgPSBbXHJcbi8vICAgICAgICB7IGlkOiAnLTEnLCBuYW1lOiAn5omA5pyJJyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzAnLCBuYW1lOiAn6ICB5biI5b2V5YWlJyB9LFxyXG4vLyAgICAgICAgeyBpZDogJzEnLCBuYW1lOiAn5YW25LuWJyB9XHJcbi8vICAgIF07XHJcbi8vICAgIEFkZFNlbGVjdHZhbHVlKGlkLCBEYXRhLCBzaWQpO1xyXG4vL31cclxuLy9cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9kZXAvdXRpbC9SZXNvdXJjZURhdGEuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSA5XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxkaXYgY2xhc3M9XFxcInBhcGVyTGlzdFxcXCI+XFxuICAgICA8dG9waGVhZCA6bW9kbGVuYW1lPVxcXCJvbmVcXFwiIDpwYWdlbmFtZT1cXFwidHdvXFxcIiAgOnBhZ2V1cmw9XFxcInRocmVlXFxcIj48L3RvcGhlYWQ+XFxuICAgICA8aDUgY2xhc3M9XFxcImhlYWRuYW1lXFxcIj7ngrnlh7vmn6Xor6Lnp5Hnm648L2g1PlxcbiAgICAgPHVsIGNsYXNzPVxcXCJwYXBlckJvZHlcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibGlzdG9uZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxpc3Rjb250ZW50XFxcIiB2LWZvcj1cXFwic3ViamVjdCBpbiBzdWJqZWN0c1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGEgaHJlZj1cXFwiIy9wYXBlckxpc3QtZ2V0cGFwZXIvOnt7c3ViamVjdC5pZH19XFxcIj4gIHt7c3ViamVjdC5uYW1lfX08L2E+LS0+XFxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjL3BhcGVyTGlzdC1nZXRwYXBlci97e3N1YmplY3QuaWR9fVxcXCI+ICB7e3N1YmplY3QubmFtZX19PC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgPC91bD5cXG48L2Rpdj5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3F1ZXN0aW9uL3BhcGVyTGlzdC52dWVcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSA5XG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==