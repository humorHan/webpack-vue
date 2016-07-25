webpackJsonp([7,12],{

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

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "56bed630e83a75bd9f705e2b7bafc632.png";

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\select\\choseQuestion.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4d28f3bb/choseQuestion.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(38);
	var list = __webpack_require__(40);
	var tree = __webpack_require__(43);
	module.exports = {
	    template: '#tpl',
	    data: function data() {
	        return {
	            treeData: {},
	            treeRoot: ''
	        };
	    },
	    components: {
	        "tree": tree,
	        "list": list
	    },
	    methods: {
	        tabOne: function tabOne() {
	            $('.choseTab-one').removeClass('choseTab-visited1').addClass('choseTab-active');
	            $('.choseTab-two').removeClass('choseTab-active').addClass('choseTab-visited');
	            $('.choseTab-show').html('this is first ');
	        },
	        tabTwo: function tabTwo() {
	            $('.choseTab-two').removeClass('choseTab-visited').addClass('choseTab-active');
	            $('.choseTab-one').removeClass('choseTab-active').addClass('choseTab-visited1');
	            $('.choseTab-show').html('this is second ');
	        },
	        'msg': function msg() {
	            console.log('this is child-msg');
	        }
	    },
	    events: {
	        'child-msg': function childMsg(e) {
	            console.log(e);
	        },
	        'treeMessage': function treeMessage(e) {
	            console.log(e);
	        }
	
	    },
	    beforeCompile: function beforeCompile() {
	        this.treeData = function () {
	            var item = [{ "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 93, "f_pointid": "0x0000", "f_parent": "", "f_name": "六三制小学语文", "f_nameP": "六三制小学语文", "f_sec": -1 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 94, "f_pointid": "0x000001", "f_parent": "0x0000", "f_name": "基础知识积累与运用", "f_nameP": "基础知识积累与运用", "f_sec": -1 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 95, "f_pointid": "0x00000101", "f_parent": "0x000001", "f_name": "字词", "f_nameP": "字词", "f_sec": 0 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 96, "f_pointid": "0x0000010101", "f_parent": "0x00000101", "f_name": "字母", "f_nameP": "字母（0/0/0）", "f_sec": 1 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 97, "f_pointid": "0x0000010102", "f_parent": "0x00000101", "f_name": "拼音", "f_nameP": "拼音（0/0/0）", "f_sec": 2 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 98, "f_pointid": "0x0000010103", "f_parent": "0x00000101", "f_name": "多音字辨析", "f_nameP": "多音字辨析（0/0/0）", "f_sec": 3 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 99, "f_pointid": "0x0000010104", "f_parent": "0x00000101", "f_name": "同音字辨析", "f_nameP": "同音字辨析（0/0/0）", "f_sec": 4 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 100, "f_pointid": "0x0000010105", "f_parent": "0x00000101", "f_name": "汉字的结构", "f_nameP": "汉字的结构（0/0/0）", "f_sec": 5 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 101, "f_pointid": "0x0000010106", "f_parent": "0x00000101", "f_name": "形近字辨析", "f_nameP": "形近字辨析（0/0/0）", "f_sec": 6 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 102, "f_pointid": "0x0000010107", "f_parent": "0x00000101", "f_name": "改正错别字", "f_nameP": "改正错别字（0/0/0）", "f_sec": 7 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 103, "f_pointid": "0x0000010108", "f_parent": "0x00000101", "f_name": "写字", "f_nameP": "写字（0/0/0）", "f_sec": 8 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 104, "f_pointid": "0x0000010109", "f_parent": "0x00000101", "f_name": "成语", "f_nameP": "成语（0/0/0）", "f_sec": 14 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 105, "f_pointid": "0x0000010110", "f_parent": "0x00000101", "f_name": "感情色彩", "f_nameP": "感情色彩（0/0/0）", "f_sec": 15 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 106, "f_pointid": "0x0000010111", "f_parent": "0x00000101", "f_name": "近义词，反义词", "f_nameP": "近义词，反义词（0/0/0）", "f_sec": 16 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 107, "f_pointid": "0x0000010112", "f_parent": "0x00000101", "f_name": "辨析解释词义，辨析解释字义", "f_nameP": "辨析解释词义，辨析解释字义（0/0/0）", "f_sec": 17 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 108, "f_pointid": "0x0000010113", "f_parent": "0x00000101", "f_name": "词语搭配", "f_nameP": "词语搭配（0/0/0）", "f_sec": 43 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 109, "f_pointid": "0x0000010114", "f_parent": "0x00000101", "f_name": "关联词语", "f_nameP": "关联词语（0/0/0）", "f_sec": 44 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 110, "f_pointid": "0x0000010115", "f_parent": "0x00000101", "f_name": "词语的结构", "f_nameP": "词语的结构（0/0/0）", "f_sec": 19 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 111, "f_pointid": "0x0000010116", "f_parent": "0x00000101", "f_name": "排列词序", "f_nameP": "排列词序（0/0/0）", "f_sec": 20 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 112, "f_pointid": "0x0000010117", "f_parent": "0x00000101", "f_name": "组词", "f_nameP": "组词（0/0/0）", "f_sec": 21 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 113, "f_pointid": "0x0000010118", "f_parent": "0x00000101", "f_name": "词性", "f_nameP": "词性（0/0/0）", "f_sec": 38 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 114, "f_pointid": "0x0000010119", "f_parent": "0x00000101", "f_name": "词语的分类", "f_nameP": "词语的分类（0/0/0）", "f_sec": 39 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 115, "f_pointid": "0x0000010120", "f_parent": "0x00000101", "f_name": "查字典", "f_nameP": "查字典（0/0/0）", "f_sec": 9 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 116, "f_pointid": "0x00000102", "f_parent": "0x000001", "f_name": "句子", "f_nameP": "句子", "f_sec": 0 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 117, "f_pointid": "0x0000010201", "f_parent": "0x00000102", "f_name": "造句", "f_nameP": "造句（0/0/0）", "f_sec": 22 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 118, "f_pointid": "0x0000010202", "f_parent": "0x00000102", "f_name": "仿写句子", "f_nameP": "仿写句子（0/0/0）", "f_sec": 23 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 119, "f_pointid": "0x0000010203", "f_parent": "0x00000102", "f_name": "扩写句子", "f_nameP": "扩写句子（0/0/0）", "f_sec": 24 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 120, "f_pointid": "0x0000010204", "f_parent": "0x00000102", "f_name": "改写句子", "f_nameP": "改写句子（0/0/0）", "f_sec": 25 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 121, "f_pointid": "0x0000010205", "f_parent": "0x00000102", "f_name": "补充句子", "f_nameP": "补充句子（0/0/0）", "f_sec": 26 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 122, "f_pointid": "0x0000010206", "f_parent": "0x00000102", "f_name": "连词成句", "f_nameP": "连词成句（0/0/0）", "f_sec": 27 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 123, "f_pointid": "0x0000010207", "f_parent": "0x00000102", "f_name": "缩写句子", "f_nameP": "缩写句子（0/0/0）", "f_sec": 28 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 124, "f_pointid": "0x0000010208", "f_parent": "0x00000102", "f_name": "理解句子", "f_nameP": "理解句子（0/0/0）", "f_sec": 29 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 125, "f_pointid": "0x0000010209", "f_parent": "0x00000102", "f_name": "排列句子顺序", "f_nameP": "排列句子顺序（0/0/0）", "f_sec": 30 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 126, "f_pointid": "0x0000010210", "f_parent": "0x00000102", "f_name": "翻译句子", "f_nameP": "翻译句子（0/0/0）", "f_sec": 31 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 127, "f_pointid": "0x0000010211", "f_parent": "0x00000102", "f_name": "重音", "f_nameP": "重音（0/0/0）", "f_sec": 32 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 128, "f_pointid": "0x0000010212", "f_parent": "0x00000102", "f_name": "病句辨析", "f_nameP": "病句辨析（0/0/0）", "f_sec": 33 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 129, "f_pointid": "0x0000010213", "f_parent": "0x00000102", "f_name": "修辞方法", "f_nameP": "修辞方法（0/0/0）", "f_sec": 34 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 130, "f_pointid": "0x0000010214", "f_parent": "0x00000102", "f_name": "句式", "f_nameP": "句式（0/0/0）", "f_sec": 35 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 131, "f_pointid": "0x0000010215", "f_parent": "0x00000102", "f_name": "对联", "f_nameP": "对联（0/0/0）", "f_sec": 37 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 132, "f_pointid": "0x0000010216", "f_parent": "0x00000102", "f_name": "标点符号", "f_nameP": "标点符号（0/0/0）", "f_sec": 12 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 133, "f_pointid": "0x0000010217", "f_parent": "0x00000102", "f_name": "语句停顿", "f_nameP": "语句停顿（0/0/0）", "f_sec": 13 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 134, "f_pointid": "0x0000010218", "f_parent": "0x00000102", "f_name": "书写格式", "f_nameP": "书写格式（0/0/0）", "f_sec": 10 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 135, "f_pointid": "0x0000010219", "f_parent": "0x00000102", "f_name": "说明方法", "f_nameP": "说明方法（0/0/0）", "f_sec": 40 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 136, "f_pointid": "0x0000010220", "f_parent": "0x00000102", "f_name": "描写方法", "f_nameP": "描写方法（0/0/0）", "f_sec": 41 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 137, "f_pointid": "0x0000010221", "f_parent": "0x00000102", "f_name": "语气", "f_nameP": "语气（0/0/0）", "f_sec": 42 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 138, "f_pointid": "0x00000103", "f_parent": "0x000001", "f_name": "识记", "f_nameP": "识记", "f_sec": 0 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 139, "f_pointid": "0x0000010301", "f_parent": "0x00000103", "f_name": "诗词默写", "f_nameP": "诗词默写（0/0/0）", "f_sec": 36 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 140, "f_pointid": "0x0000010302", "f_parent": "0x00000103", "f_name": "文史常识", "f_nameP": "文史常识（0/0/0）", "f_sec": 11 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 141, "f_pointid": "0x0000010303", "f_parent": "0x00000103", "f_name": "歇后语，谚语，俗语，名言警句，格言", "f_nameP": "歇后语，谚语，俗语，名言警句，格言（0/0/0）", "f_sec": 18 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 142, "f_pointid": "0x0000010304", "f_parent": "0x00000103", "f_name": "课文理解，课文背诵", "f_nameP": "课文理解，课文背诵（0/0/0）", "f_sec": 45 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 143, "f_pointid": "0x000002", "f_parent": "0x0000", "f_name": "语言表达及应用", "f_nameP": "语言表达及应用", "f_sec": 0 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 144, "f_pointid": "0x00000201", "f_parent": "0x000002", "f_name": "口语交际，情景写话", "f_nameP": "口语交际，情景写话（0/0/0）", "f_sec": 46 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 145, "f_pointid": "0x00000202", "f_parent": "0x000002", "f_name": "实践活动", "f_nameP": "实践活动（0/0/0）", "f_sec": 47 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 146, "f_pointid": "0x00000203", "f_parent": "0x000002", "f_name": "综合读写", "f_nameP": "综合读写（0/0/0）", "f_sec": 48 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 147, "f_pointid": "0x000003", "f_parent": "0x0000", "f_name": "阅读理解及鉴赏", "f_nameP": "阅读理解及鉴赏", "f_sec": 0 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 148, "f_pointid": "0x00000301", "f_parent": "0x000003", "f_name": "诗词鉴赏", "f_nameP": "诗词鉴赏（0/0/0）", "f_sec": 49 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 149, "f_pointid": "0x00000302", "f_parent": "0x000003", "f_name": "文言文阅读", "f_nameP": "文言文阅读（0/0/0）", "f_sec": 50 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 150, "f_pointid": "0x00000303", "f_parent": "0x000003", "f_name": "现代文阅读", "f_nameP": "现代文阅读（0/0/0）", "f_sec": 51 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 151, "f_pointid": "0x000004", "f_parent": "0x0000", "f_name": "写作", "f_nameP": "写作", "f_sec": 0 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 152, "f_pointid": "0x00000401", "f_parent": "0x000004", "f_name": "看图写话", "f_nameP": "看图写话（0/0/0）", "f_sec": 52 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 153, "f_pointid": "0x00000402", "f_parent": "0x000004", "f_name": "应用文", "f_nameP": "应用文（0/0/0）", "f_sec": 53 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 154, "f_pointid": "0x00000403", "f_parent": "0x000004", "f_name": "小练笔", "f_nameP": "小练笔（0/0/0）", "f_sec": 54 }, { "Num1": 0, "Num2": 0, "Num3": 0, "f_IsLevel": false, "f_id": 155, "f_pointid": "0x00000404", "f_parent": "0x000004", "f_name": "大作文", "f_nameP": "大作文（0/0/0）", "f_sec": 55 }];
	            var obj = {};
	            for (var i = 0; i < item.length; i++) {
	                if (obj[item[i].f_parent]) {
	                    obj[item[i].f_parent].push(item[i]);
	                } else {
	                    obj[item[i].f_parent] = [];
	                    obj[item[i].f_parent].push(item[i]);
	                }
	            }
	
	            return obj;
	        }();
	    }
	};

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(25)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./choseQuestion.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./choseQuestion.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".choseQuestion-tree {\n  width: 258px;\n  height: 900px;\n  float: left;\n  background: #4b93b4;\n  overflow: auto ;\n}\n.choseQuestion-tree li {\n  padding-left: 15px;\n  color: #e4ecef;\n  font-weight: 800;\n  font-size: 16px;\n  padding-top: 13px;\n}\n.choseQuestion-tree li div {\n  overflow: hidden;\n}\n.choseQuestion-tree i {\n  display: block;\n  width: 22px;\n  height: 22px;\n  background: url(" + __webpack_require__(29) + ") -102px -494px;\n  margin-right: 5px;\n  margin-top: 4px ;\n}\n.choseQuestion-tree p {\n  padding: 5px 10px;\n  background: #447c96;\n  border-radius: 5px;\n}\n.choseQuestion-content {\n  height: 880px;\n  margin-left: 258px;\n  padding: 10px;\n}\n.choseQuestion-content .question-show {\n  height: 880px;\n  overflow-y: auto ;\n}\n.choseQuestion-content .tab {\n  width: 100%;\n  height: 40px;\n  position: relative;\n  background: #e4ecef;\n  font-size: 16px;\n}\n.choseQuestion-content .tab p {\n  width: 100%;\n  height: 40px;\n}\n.choseQuestion-content .choseTab-one {\n  width: 145px;\n  height: 41px;\n  border: 1px solid #ccc;\n  border-bottom: 1px solid #fff;\n  padding: 0 15px;\n  border-radius: 25px 25px 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.choseQuestion-content .choseTab-two {\n  width: 145px;\n  height: 41px;\n  padding: 0 15px;\n  border: 1px solid #ccc;\n  border-bottom: 1px solid #fff;\n  border-radius: 25px 25px 0 0;\n  background: #deecfc;\n  position: absolute;\n  top: 0;\n  left: 105px;\n}\n.choseQuestion-content .choseTab-show {\n  width: 100%;\n  min-height: 840px;\n  border: 1px solid #ccc;\n  background: #fff;\n  border-radius: 0 25px 25px 25px;\n}\n.choseTab-active {\n  height: 41px;\n  z-index: 100;\n  line-height: 40px;\n  text-align: center;\n  background: #fff !important;\n}\n.choseTab-active p {\n  border-bottom: 1px solid #ccc;\n  margin-left: 0;\n}\n.choseTab-visited {\n  height: 41px;\n  line-height: 41px;\n  text-align: center;\n  background: #deecfc;\n}\n.choseTab-visited p {\n  margin-left: 17px ;\n  border-bottom: none ;\n}\n.choseTab-visited1 {\n  height: 41px;\n  line-height: 41px;\n  text-align: center;\n  background: #deecfc;\n}\n.choseTab-visited1 p {\n  margin-right: 17px ;\n  border-bottom: none;\n}\n.choseQuestion-tree::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n.choseQuestion-tree::-webkit-scrollbar-button {\n  background: #4689a8;\n}\n.choseQuestion-tree::-webkit-scrollbar-track {\n  background: #4689a8;\n}\n.choseQuestion-tree::-webkit-scrollbar-track-piece {\n  background: #4689a8;\n}\n.choseQuestion-tree::-webkit-scrollbar-thumb {\n  background: #5da2c2;\n  border-radius: 4px;\n  height: 100px;\n}\n.choseQuestion-tree::-webkit-scrollbar-corner {\n  background: #4689a8;\n}\n.choseQuestion-tree::-webkit-resizer {\n  background: #4689a8;\n}\n\n/*# sourceMappingURL=maps/choseQuestion.css.map */\n", ""]);
	
	// exports


/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\select\\choseQuestion_list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-eb1ddb5c/choseQuestion_list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 41:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	    template: '#tpl',
	    methods: {
	        news: function news() {
	            this.$dispatch('child-msg', '13445');
	        }
	    }
	};

/***/ },

/***/ 42:
/***/ function(module, exports) {

	module.exports = "\n<div id=\"2346\" @click=\"news\">\n    点我点我点我\n</div>\n";

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\common\\tree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-85183734/tree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 44:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	    template: '#tree',
	    name: 'tree',
	    data: function data() {
	        return {
	            self: ''
	        };
	    },
	    props: {
	        model: Object,
	        root: String
	    },
	    computed: {
	        isFolder: function isFolder() {
	            return Boolean(this.model[this.root]);
	        }
	    },
	    methods: {
	        toggle: function toggle(e) {
	            e.stopPropagation();
	            if (this.isFolder) {
	                var ev = e.currentTarget;
	                var value = ev.nextElementSibling.style.display;
	                if (value == 'none') {
	                    ev.nextElementSibling.style.display = 'block';
	                } else {
	                    ev.nextElementSibling.style.display = 'none';
	                }
	                this.$dispatch('treeMessage', {
	                    'parent': this.root,
	                    'self': this.f_pointid });
	            }
	
	            if (!this.isFolder) {
	                this.$dispatch('treeMessage', {
	                    'parent': this.f_parent,
	                    'self': this.f_pointid });
	                console.log(111);
	            }
	        }
	    }
	};

/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = "\n<li v-for=\"item in model[root]\">\n    <div @click=\"toggle\">\n        <i class=\"fr-left\"></i>\n        <p class=\"fr-left\" id=\"{{item.f_pointid}}\">{{ item.f_name }}</p>\n    </div>\n    <ul v-if=\"isFolder\" style=\"display: none\">\n        <tree  :model=\"model\" :root=\"item.f_pointid\"></tree>\n    </ul>\n</li>\n";

/***/ },

/***/ 46:
/***/ function(module, exports) {

	module.exports = "\n<div>\n    <ul class=\"choseQuestion-tree\">\n        <tree :model=\"treeData\" :root=\"treeRoot\"></tree>\n    </ul>\n    <div class=\"choseQuestion-content\">\n        <div class=\"question-show\">\n            <div class=\"tab\">\n                <div class=\"choseTab-one choseTab-active\" @click=\"tabOne\">\n                    <p class=\"konwPoint-tap\">字母ID</p>\n                </div>\n                <div class=\"choseTab-two choseTab-visited\" @click=\"tabTwo\">\n                    <p>统计--选题</p>\n                </div>\n            </div>\n            <div class=\"choseTab-show\">\n                <list @child-msg=\"msg(e)\"></list>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzP2RhMDQqIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcz9iOTgwIiwid2VicGFjazovLy8uL2J1bmRsZS9pbWcvaWNvbi5wbmc/NDRjYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWxlY3QvY2hvc2VRdWVzdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL2Nob3NlUXVlc3Rpb24udnVlIiwid2VicGFjazovLy8uL2J1bmRsZS9jc3MvY2hvc2VRdWVzdGlvbi5jc3M/YzViOSIsIndlYnBhY2s6Ly8vLi9idW5kbGUvY3NzL2Nob3NlUXVlc3Rpb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9jaG9zZVF1ZXN0aW9uX2xpc3QudnVlIiwid2VicGFjazovLy9jaG9zZVF1ZXN0aW9uX2xpc3QudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9jaG9zZVF1ZXN0aW9uX2xpc3QudnVlP2U1NWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL3RyZWUudnVlIiwid2VicGFjazovLy90cmVlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vdHJlZS52dWU/MGEzNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWxlY3QvY2hvc2VRdWVzdGlvbi52dWU/MDViOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFD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QUFDQTtBQUVBO0FBekJBO0FBakJBLEc7Ozs7Ozs7QUNiQSw2SkFBNEosZ0JBQWdCLEtBQUssZUFBZSw0Sjs7Ozs7OztBQ0FoTSwwdEIiLCJmaWxlIjoiNy5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDUgNiA3IDggOSAxMCAxMVxuICoqLyIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDUgNyA4IDkgMTAgMTFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NmJlZDYzMGU4M2E3NWJkOWY3MDVlMmI3YmFmYzYzMi5wbmdcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYnVuZGxlL2ltZy9pY29uLnBuZ1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDUgN1xuICoqLyIsInZhciBfX3Z1ZV9zY3JpcHRfXywgX192dWVfdGVtcGxhdGVfX1xuX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWVzMjAxNSZwbHVnaW5zW109dHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2Nob3NlUXVlc3Rpb24udnVlXCIpXG5pZiAoX192dWVfc2NyaXB0X18gJiZcbiAgICBfX3Z1ZV9zY3JpcHRfXy5fX2VzTW9kdWxlICYmXG4gICAgT2JqZWN0LmtleXMoX192dWVfc2NyaXB0X18pLmxlbmd0aCA+IDEpIHtcbiAgY29uc29sZS53YXJuKFwiW3Z1ZS1sb2FkZXJdIHNyY1xcXFxjb21wb25lbnRzXFxcXHNlbGVjdFxcXFxjaG9zZVF1ZXN0aW9uLnZ1ZTogbmFtZWQgZXhwb3J0cyBpbiAqLnZ1ZSBmaWxlcyBhcmUgaWdub3JlZC5cIil9XG5fX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWh0bWwtbG9hZGVyIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Nob3NlUXVlc3Rpb24udnVlXCIpXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX3NjcmlwdF9fIHx8IHt9XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG5pZiAoX192dWVfdGVtcGxhdGVfXykge1xuKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgfHwgKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgPSB7fSkpIDogbW9kdWxlLmV4cG9ydHMpLnRlbXBsYXRlID0gX192dWVfdGVtcGxhdGVfX1xufVxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIHZhciBpZCA9IFwiX3YtNGQyOGYzYmIvY2hvc2VRdWVzdGlvbi52dWVcIlxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZS5leHBvcnRzKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS51cGRhdGUoaWQsIG1vZHVsZS5leHBvcnRzLCBfX3Z1ZV90ZW1wbGF0ZV9fKVxuICB9XG59KSgpfVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zZWxlY3QvY2hvc2VRdWVzdGlvbi52dWVcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSA3XG4gKiovIiwiPHRlbXBsYXRlIGlkPVwidHBsXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImNob3NlUXVlc3Rpb24tdHJlZVwiPlxyXG4gICAgICAgICAgICA8dHJlZSA6bW9kZWw9XCJ0cmVlRGF0YVwiIDpyb290PVwidHJlZVJvb3RcIj48L3RyZWU+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvc2VRdWVzdGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi1zaG93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob3NlVGFiLW9uZSBjaG9zZVRhYi1hY3RpdmVcIiBAY2xpY2s9XCJ0YWJPbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJrb253UG9pbnQtdGFwXCI+5a2X5q+NSUQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob3NlVGFiLXR3byBjaG9zZVRhYi12aXNpdGVkXCIgQGNsaWNrPVwidGFiVHdvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPue7n+iuoS0t6YCJ6aKYPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvc2VUYWItc2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaXN0IEBjaGlsZC1tc2c9XCJtc2coZSlcIj48L2xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIHJlcXVpcmUoJy4uLy4uLy4uL2J1bmRsZS9jc3MvY2hvc2VRdWVzdGlvbi5jc3MnKTtcclxuICAgIHZhciBsaXN0PXJlcXVpcmUoJy4vY2hvc2VRdWVzdGlvbl9saXN0LnZ1ZScpO1xyXG4gICAgdmFyIHRyZWU9cmVxdWlyZSgnLi8uLi9jb21tb24vdHJlZS52dWUnKTtcclxuICAgIG1vZHVsZS5leHBvcnRzPXtcclxuICAgICAgICB0ZW1wbGF0ZTonI3RwbCcsXHJcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHJlZURhdGE6e30sXHJcbiAgICAgICAgICAgICAgICB0cmVlUm9vdDonJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOntcclxuICAgICAgICAgIFwidHJlZVwiOnRyZWUsXHJcbiAgICAgICAgICAgXCJsaXN0XCI6bGlzdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczp7XHJcbiAgICAgICAgICAgIHRhYk9uZTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCgnLmNob3NlVGFiLW9uZScpLnJlbW92ZUNsYXNzKCdjaG9zZVRhYi12aXNpdGVkMScpLmFkZENsYXNzKCdjaG9zZVRhYi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQoJy5jaG9zZVRhYi10d28nKS5yZW1vdmVDbGFzcygnY2hvc2VUYWItYWN0aXZlJykuYWRkQ2xhc3MoJ2Nob3NlVGFiLXZpc2l0ZWQnKTtcclxuICAgICAgICAgICAgICAgICQoJy5jaG9zZVRhYi1zaG93JykuaHRtbCgndGhpcyBpcyBmaXJzdCAnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGFiVHdvOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2hvc2VUYWItdHdvJykucmVtb3ZlQ2xhc3MoJ2Nob3NlVGFiLXZpc2l0ZWQnKS5hZGRDbGFzcygnY2hvc2VUYWItYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2hvc2VUYWItb25lJykucmVtb3ZlQ2xhc3MoJ2Nob3NlVGFiLWFjdGl2ZScpLmFkZENsYXNzKCdjaG9zZVRhYi12aXNpdGVkMScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmNob3NlVGFiLXNob3cnKS5odG1sKCd0aGlzIGlzIHNlY29uZCAnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ21zZyc6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIGNoaWxkLW1zZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBldmVudHM6e1xyXG4gICAgICAgICAgICAnY2hpbGQtbXNnJzpmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndHJlZU1lc3NhZ2UnOmZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiZWZvcmVDb21waWxlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8v6K+35rGC55uu5b2V57uT5p6E5pWw5o2u6Kej5p6QXHJcbiAgICAgICAgICAgIHRoaXMudHJlZURhdGE9ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtPVt7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjo5MyxcImZfcG9pbnRpZFwiOlwiMHgwMDAwXCIsXCJmX3BhcmVudFwiOlwiXCIsXCJmX25hbWVcIjpcIuWFreS4ieWItuWwj+WtpuivreaWh1wiLFwiZl9uYW1lUFwiOlwi5YWt5LiJ5Yi25bCP5a2m6K+t5paHXCIsXCJmX3NlY1wiOi0xfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjo5NCxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDFcIixcImZfcGFyZW50XCI6XCIweDAwMDBcIixcImZfbmFtZVwiOlwi5Z+656GA55+l6K+G56ev57Sv5LiO6L+Q55SoXCIsXCJmX25hbWVQXCI6XCLln7rnoYDnn6Xor4bnp6/ntK/kuI7ov5DnlKhcIixcImZfc2VjXCI6LTF9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjk1LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAxXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDFcIixcImZfbmFtZVwiOlwi5a2X6K+NXCIsXCJmX25hbWVQXCI6XCLlrZfor41cIixcImZfc2VjXCI6MH0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6OTYsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDEwMVwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi5a2X5q+NXCIsXCJmX25hbWVQXCI6XCLlrZfmr43vvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjoxfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjo5NyxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMTAyXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMVwiLFwiZl9uYW1lXCI6XCLmi7zpn7NcIixcImZfbmFtZVBcIjpcIuaLvOmfs++8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjJ9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjk4LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAxMDNcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAxXCIsXCJmX25hbWVcIjpcIuWkmumfs+Wtl+i+qOaekFwiLFwiZl9uYW1lUFwiOlwi5aSa6Z+z5a2X6L6o5p6Q77yIMC8wLzDvvIlcIixcImZfc2VjXCI6M30se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6OTksXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDEwNFwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi5ZCM6Z+z5a2X6L6o5p6QXCIsXCJmX25hbWVQXCI6XCLlkIzpn7PlrZfovqjmnpDvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjo0fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMDAsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDEwNVwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi5rGJ5a2X55qE57uT5p6EXCIsXCJmX25hbWVQXCI6XCLmsYnlrZfnmoTnu5PmnoTvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjo1fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMDEsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDEwNlwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi5b2i6L+R5a2X6L6o5p6QXCIsXCJmX25hbWVQXCI6XCLlvaLov5HlrZfovqjmnpDvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjo2fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMDIsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDEwN1wiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi5pS55q2j6ZSZ5Yir5a2XXCIsXCJmX25hbWVQXCI6XCLmlLnmraPplJnliKvlrZfvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjo3fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMDMsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDEwOFwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi5YaZ5a2XXCIsXCJmX25hbWVQXCI6XCLlhpnlrZfvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjo4fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMDQsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDEwOVwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi5oiQ6K+tXCIsXCJmX25hbWVQXCI6XCLmiJDor63vvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjoxNH0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTA1LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAxMTBcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAxXCIsXCJmX25hbWVcIjpcIuaEn+aDheiJsuW9qVwiLFwiZl9uYW1lUFwiOlwi5oSf5oOF6Imy5b2p77yIMC8wLzDvvIlcIixcImZfc2VjXCI6MTV9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEwNixcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMTExXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMVwiLFwiZl9uYW1lXCI6XCLov5HkuYnor43vvIzlj43kuYnor41cIixcImZfbmFtZVBcIjpcIui/keS5ieivje+8jOWPjeS5ieivje+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjE2fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMDcsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDExMlwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi6L6o5p6Q6Kej6YeK6K+N5LmJ77yM6L6o5p6Q6Kej6YeK5a2X5LmJXCIsXCJmX25hbWVQXCI6XCLovqjmnpDop6Pph4ror43kuYnvvIzovqjmnpDop6Pph4rlrZfkuYnvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjoxN30se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTA4LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAxMTNcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAxXCIsXCJmX25hbWVcIjpcIuivjeivreaQremFjVwiLFwiZl9uYW1lUFwiOlwi6K+N6K+t5pCt6YWN77yIMC8wLzDvvIlcIixcImZfc2VjXCI6NDN9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEwOSxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMTE0XCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMVwiLFwiZl9uYW1lXCI6XCLlhbPogZTor43or61cIixcImZfbmFtZVBcIjpcIuWFs+iBlOivjeivre+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjQ0fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMTAsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDExNVwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi6K+N6K+t55qE57uT5p6EXCIsXCJmX25hbWVQXCI6XCLor43or63nmoTnu5PmnoTvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjoxOX0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTExLFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAxMTZcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAxXCIsXCJmX25hbWVcIjpcIuaOkuWIl+ivjeW6j1wiLFwiZl9uYW1lUFwiOlwi5o6S5YiX6K+N5bqP77yIMC8wLzDvvIlcIixcImZfc2VjXCI6MjB9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjExMixcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMTE3XCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMVwiLFwiZl9uYW1lXCI6XCLnu4Tor41cIixcImZfbmFtZVBcIjpcIue7hOivje+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjIxfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMTMsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDExOFwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDFcIixcImZfbmFtZVwiOlwi6K+N5oCnXCIsXCJmX25hbWVQXCI6XCLor43mgKfvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjozOH0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTE0LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAxMTlcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAxXCIsXCJmX25hbWVcIjpcIuivjeivreeahOWIhuexu1wiLFwiZl9uYW1lUFwiOlwi6K+N6K+t55qE5YiG57G777yIMC8wLzDvvIlcIixcImZfc2VjXCI6Mzl9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjExNSxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMTIwXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMVwiLFwiZl9uYW1lXCI6XCLmn6XlrZflhbhcIixcImZfbmFtZVBcIjpcIuafpeWtl+WFuO+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjl9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjExNixcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMlwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxXCIsXCJmX25hbWVcIjpcIuWPpeWtkFwiLFwiZl9uYW1lUFwiOlwi5Y+l5a2QXCIsXCJmX3NlY1wiOjB9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjExNyxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMjAxXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMlwiLFwiZl9uYW1lXCI6XCLpgKDlj6VcIixcImZfbmFtZVBcIjpcIumAoOWPpe+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjIyfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMTgsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDIwMlwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDJcIixcImZfbmFtZVwiOlwi5Lu/5YaZ5Y+l5a2QXCIsXCJmX25hbWVQXCI6XCLku7/lhpnlj6XlrZDvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjoyM30se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTE5LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAyMDNcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAyXCIsXCJmX25hbWVcIjpcIuaJqeWGmeWPpeWtkFwiLFwiZl9uYW1lUFwiOlwi5omp5YaZ5Y+l5a2Q77yIMC8wLzDvvIlcIixcImZfc2VjXCI6MjR9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEyMCxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMjA0XCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMlwiLFwiZl9uYW1lXCI6XCLmlLnlhpnlj6XlrZBcIixcImZfbmFtZVBcIjpcIuaUueWGmeWPpeWtkO+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjI1fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMjEsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDIwNVwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDJcIixcImZfbmFtZVwiOlwi6KGl5YWF5Y+l5a2QXCIsXCJmX25hbWVQXCI6XCLooaXlhYXlj6XlrZDvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjoyNn0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTIyLFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAyMDZcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAyXCIsXCJmX25hbWVcIjpcIui/nuivjeaIkOWPpVwiLFwiZl9uYW1lUFwiOlwi6L+e6K+N5oiQ5Y+l77yIMC8wLzDvvIlcIixcImZfc2VjXCI6Mjd9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEyMyxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMjA3XCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMlwiLFwiZl9uYW1lXCI6XCLnvKnlhpnlj6XlrZBcIixcImZfbmFtZVBcIjpcIue8qeWGmeWPpeWtkO+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjI4fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMjQsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDIwOFwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDJcIixcImZfbmFtZVwiOlwi55CG6Kej5Y+l5a2QXCIsXCJmX25hbWVQXCI6XCLnkIbop6Plj6XlrZDvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjoyOX0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTI1LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAyMDlcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAyXCIsXCJmX25hbWVcIjpcIuaOkuWIl+WPpeWtkOmhuuW6j1wiLFwiZl9uYW1lUFwiOlwi5o6S5YiX5Y+l5a2Q6aG65bqP77yIMC8wLzDvvIlcIixcImZfc2VjXCI6MzB9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEyNixcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMjEwXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMlwiLFwiZl9uYW1lXCI6XCLnv7vor5Hlj6XlrZBcIixcImZfbmFtZVBcIjpcIue/u+ivkeWPpeWtkO+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjMxfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMjcsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDIxMVwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDJcIixcImZfbmFtZVwiOlwi6YeN6Z+zXCIsXCJmX25hbWVQXCI6XCLph43pn7PvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjozMn0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTI4LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAyMTJcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAyXCIsXCJmX25hbWVcIjpcIueXheWPpei+qOaekFwiLFwiZl9uYW1lUFwiOlwi55eF5Y+l6L6o5p6Q77yIMC8wLzDvvIlcIixcImZfc2VjXCI6MzN9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEyOSxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMjEzXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMlwiLFwiZl9uYW1lXCI6XCLkv67ovp7mlrnms5VcIixcImZfbmFtZVBcIjpcIuS/rui+nuaWueazle+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjM0fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMzAsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDIxNFwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDJcIixcImZfbmFtZVwiOlwi5Y+l5byPXCIsXCJmX25hbWVQXCI6XCLlj6XlvI/vvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjozNX0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTMxLFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAyMTVcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAyXCIsXCJmX25hbWVcIjpcIuWvueiBlFwiLFwiZl9uYW1lUFwiOlwi5a+56IGU77yIMC8wLzDvvIlcIixcImZfc2VjXCI6Mzd9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEzMixcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMjE2XCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMlwiLFwiZl9uYW1lXCI6XCLmoIfngrnnrKblj7dcIixcImZfbmFtZVBcIjpcIuagh+eCueespuWPt++8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjEyfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMzMsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDIxN1wiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDJcIixcImZfbmFtZVwiOlwi6K+t5Y+l5YGc6aG/XCIsXCJmX25hbWVQXCI6XCLor63lj6XlgZzpob/vvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjoxM30se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTM0LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAyMThcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAyXCIsXCJmX25hbWVcIjpcIuS5puWGmeagvOW8j1wiLFwiZl9uYW1lUFwiOlwi5Lmm5YaZ5qC85byP77yIMC8wLzDvvIlcIixcImZfc2VjXCI6MTB9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEzNSxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMjE5XCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwMlwiLFwiZl9uYW1lXCI6XCLor7TmmI7mlrnms5VcIixcImZfbmFtZVBcIjpcIuivtOaYjuaWueazle+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjQwfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxMzYsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDIyMFwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDJcIixcImZfbmFtZVwiOlwi5o+P5YaZ5pa55rOVXCIsXCJmX25hbWVQXCI6XCLmj4/lhpnmlrnms5XvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjo0MX0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTM3LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAyMjFcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAyXCIsXCJmX25hbWVcIjpcIuivreawlFwiLFwiZl9uYW1lUFwiOlwi6K+t5rCU77yIMC8wLzDvvIlcIixcImZfc2VjXCI6NDJ9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEzOCxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwM1wiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxXCIsXCJmX25hbWVcIjpcIuivhuiusFwiLFwiZl9uYW1lUFwiOlwi6K+G6K6wXCIsXCJmX3NlY1wiOjB9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjEzOSxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMzAxXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwM1wiLFwiZl9uYW1lXCI6XCLor5for43pu5jlhplcIixcImZfbmFtZVBcIjpcIuivl+ivjem7mOWGme+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjM2fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxNDAsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAxMDMwMlwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAxMDNcIixcImZfbmFtZVwiOlwi5paH5Y+y5bi46K+GXCIsXCJmX25hbWVQXCI6XCLmloflj7LluLjor4bvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjoxMX0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTQxLFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMTAzMDNcIixcImZfcGFyZW50XCI6XCIweDAwMDAwMTAzXCIsXCJmX25hbWVcIjpcIuath+WQjuivre+8jOiwmuivre+8jOS/l+ivre+8jOWQjeiogOitpuWPpe+8jOagvOiogFwiLFwiZl9uYW1lUFwiOlwi5q2H5ZCO6K+t77yM6LCa6K+t77yM5L+X6K+t77yM5ZCN6KiA6K2m5Y+l77yM5qC86KiA77yIMC8wLzDvvIlcIixcImZfc2VjXCI6MTh9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjE0MixcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDEwMzA0XCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDEwM1wiLFwiZl9uYW1lXCI6XCLor77mlofnkIbop6PvvIzor77mlofog4zor7VcIixcImZfbmFtZVBcIjpcIuivvuaWh+eQhuino++8jOivvuaWh+iDjOivte+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjQ1fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxNDMsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDAyXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwXCIsXCJmX25hbWVcIjpcIuivreiogOihqOi+vuWPiuW6lOeUqFwiLFwiZl9uYW1lUFwiOlwi6K+t6KiA6KGo6L6+5Y+K5bqU55SoXCIsXCJmX3NlY1wiOjB9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjE0NCxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDIwMVwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAyXCIsXCJmX25hbWVcIjpcIuWPo+ivreS6pOmZhe+8jOaDheaZr+WGmeivnVwiLFwiZl9uYW1lUFwiOlwi5Y+j6K+t5Lqk6ZmF77yM5oOF5pmv5YaZ6K+d77yIMC8wLzDvvIlcIixcImZfc2VjXCI6NDZ9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjE0NSxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDIwMlwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAyXCIsXCJmX25hbWVcIjpcIuWunui3tea0u+WKqFwiLFwiZl9uYW1lUFwiOlwi5a6e6Le15rS75Yqo77yIMC8wLzDvvIlcIixcImZfc2VjXCI6NDd9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjE0NixcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDIwM1wiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMDAyXCIsXCJmX25hbWVcIjpcIue7vOWQiOivu+WGmVwiLFwiZl9uYW1lUFwiOlwi57u85ZCI6K+75YaZ77yIMC8wLzDvvIlcIixcImZfc2VjXCI6NDh9LHtcIk51bTFcIjowLFwiTnVtMlwiOjAsXCJOdW0zXCI6MCxcImZfSXNMZXZlbFwiOmZhbHNlLFwiZl9pZFwiOjE0NyxcImZfcG9pbnRpZFwiOlwiMHgwMDAwMDNcIixcImZfcGFyZW50XCI6XCIweDAwMDBcIixcImZfbmFtZVwiOlwi6ZiF6K+755CG6Kej5Y+K6Ym06LWPXCIsXCJmX25hbWVQXCI6XCLpmIXor7vnkIbop6Plj4rpibTotY9cIixcImZfc2VjXCI6MH0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTQ4LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMzAxXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDNcIixcImZfbmFtZVwiOlwi6K+X6K+N6Ym06LWPXCIsXCJmX25hbWVQXCI6XCLor5for43pibTotY/vvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjo0OX0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTQ5LFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMzAyXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDNcIixcImZfbmFtZVwiOlwi5paH6KiA5paH6ZiF6K+7XCIsXCJmX25hbWVQXCI6XCLmlofoqIDmlofpmIXor7vvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjo1MH0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTUwLFwiZl9wb2ludGlkXCI6XCIweDAwMDAwMzAzXCIsXCJmX3BhcmVudFwiOlwiMHgwMDAwMDNcIixcImZfbmFtZVwiOlwi546w5Luj5paH6ZiF6K+7XCIsXCJmX25hbWVQXCI6XCLnjrDku6PmlofpmIXor7vvvIgwLzAvMO+8iVwiLFwiZl9zZWNcIjo1MX0se1wiTnVtMVwiOjAsXCJOdW0yXCI6MCxcIk51bTNcIjowLFwiZl9Jc0xldmVsXCI6ZmFsc2UsXCJmX2lkXCI6MTUxLFwiZl9wb2ludGlkXCI6XCIweDAwMDAwNFwiLFwiZl9wYXJlbnRcIjpcIjB4MDAwMFwiLFwiZl9uYW1lXCI6XCLlhpnkvZxcIixcImZfbmFtZVBcIjpcIuWGmeS9nFwiLFwiZl9zZWNcIjowfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxNTIsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDA0MDFcIixcImZfcGFyZW50XCI6XCIweDAwMDAwNFwiLFwiZl9uYW1lXCI6XCLnnIvlm77lhpnor51cIixcImZfbmFtZVBcIjpcIueci+WbvuWGmeivne+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjUyfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxNTMsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDA0MDJcIixcImZfcGFyZW50XCI6XCIweDAwMDAwNFwiLFwiZl9uYW1lXCI6XCLlupTnlKjmlodcIixcImZfbmFtZVBcIjpcIuW6lOeUqOaWh++8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjUzfSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxNTQsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDA0MDNcIixcImZfcGFyZW50XCI6XCIweDAwMDAwNFwiLFwiZl9uYW1lXCI6XCLlsI/nu4PnrJRcIixcImZfbmFtZVBcIjpcIuWwj+e7g+eslO+8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjU0fSx7XCJOdW0xXCI6MCxcIk51bTJcIjowLFwiTnVtM1wiOjAsXCJmX0lzTGV2ZWxcIjpmYWxzZSxcImZfaWRcIjoxNTUsXCJmX3BvaW50aWRcIjpcIjB4MDAwMDA0MDRcIixcImZfcGFyZW50XCI6XCIweDAwMDAwNFwiLFwiZl9uYW1lXCI6XCLlpKfkvZzmlodcIixcImZfbmFtZVBcIjpcIuWkp+S9nOaWh++8iDAvMC8w77yJXCIsXCJmX3NlY1wiOjU1fV07XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqPXt9O1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxpdGVtLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9ialtpdGVtW2ldLmZfcGFyZW50XSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtpdGVtW2ldLmZfcGFyZW50XS5wdXNoKGl0ZW1baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbaXRlbVtpXS5mX3BhcmVudF09W107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtpdGVtW2ldLmZfcGFyZW50XS5wdXNoKGl0ZW1baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqIDtcclxuICAgICAgICAgICAgfSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjaG9zZVF1ZXN0aW9uLnZ1ZT8zMmI0NWMyMlxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2hvc2VRdWVzdGlvbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY2hvc2VRdWVzdGlvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jaG9zZVF1ZXN0aW9uLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2J1bmRsZS9jc3MvY2hvc2VRdWVzdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSA3XG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hvc2VRdWVzdGlvbi10cmVlIHtcXG4gIHdpZHRoOiAyNThweDtcXG4gIGhlaWdodDogOTAwcHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJhY2tncm91bmQ6ICM0YjkzYjQ7XFxuICBvdmVyZmxvdzogYXV0byA7XFxufVxcbi5jaG9zZVF1ZXN0aW9uLXRyZWUgbGkge1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgY29sb3I6ICNlNGVjZWY7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZy10b3A6IDEzcHg7XFxufVxcbi5jaG9zZVF1ZXN0aW9uLXRyZWUgbGkgZGl2IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jaG9zZVF1ZXN0aW9uLXRyZWUgaSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMnB4O1xcbiAgaGVpZ2h0OiAyMnB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9pY29uLnBuZ1wiKSArIFwiKSAtMTAycHggLTQ5NHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiA0cHggO1xcbn1cXG4uY2hvc2VRdWVzdGlvbi10cmVlIHAge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjNDQ3Yzk2O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uY2hvc2VRdWVzdGlvbi1jb250ZW50IHtcXG4gIGhlaWdodDogODgwcHg7XFxuICBtYXJnaW4tbGVmdDogMjU4cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uY2hvc2VRdWVzdGlvbi1jb250ZW50IC5xdWVzdGlvbi1zaG93IHtcXG4gIGhlaWdodDogODgwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvIDtcXG59XFxuLmNob3NlUXVlc3Rpb24tY29udGVudCAudGFiIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2U0ZWNlZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmNob3NlUXVlc3Rpb24tY29udGVudCAudGFiIHAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcbi5jaG9zZVF1ZXN0aW9uLWNvbnRlbnQgLmNob3NlVGFiLW9uZSB7XFxuICB3aWR0aDogMTQ1cHg7XFxuICBoZWlnaHQ6IDQxcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLmNob3NlUXVlc3Rpb24tY29udGVudCAuY2hvc2VUYWItdHdvIHtcXG4gIHdpZHRoOiAxNDVweDtcXG4gIGhlaWdodDogNDFweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XFxuICBiYWNrZ3JvdW5kOiAjZGVlY2ZjO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMTA1cHg7XFxufVxcbi5jaG9zZVF1ZXN0aW9uLWNvbnRlbnQgLmNob3NlVGFiLXNob3cge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA4NDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMCAyNXB4IDI1cHggMjVweDtcXG59XFxuLmNob3NlVGFiLWFjdGl2ZSB7XFxuICBoZWlnaHQ6IDQxcHg7XFxuICB6LWluZGV4OiAxMDA7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcXG59XFxuLmNob3NlVGFiLWFjdGl2ZSBwIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5jaG9zZVRhYi12aXNpdGVkIHtcXG4gIGhlaWdodDogNDFweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2RlZWNmYztcXG59XFxuLmNob3NlVGFiLXZpc2l0ZWQgcCB7XFxuICBtYXJnaW4tbGVmdDogMTdweCA7XFxuICBib3JkZXItYm90dG9tOiBub25lIDtcXG59XFxuLmNob3NlVGFiLXZpc2l0ZWQxIHtcXG4gIGhlaWdodDogNDFweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2RlZWNmYztcXG59XFxuLmNob3NlVGFiLXZpc2l0ZWQxIHAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4IDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5jaG9zZVF1ZXN0aW9uLXRyZWU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG4uY2hvc2VRdWVzdGlvbi10cmVlOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzQ2ODlhODtcXG59XFxuLmNob3NlUXVlc3Rpb24tdHJlZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogIzQ2ODlhODtcXG59XFxuLmNob3NlUXVlc3Rpb24tdHJlZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xcbiAgYmFja2dyb3VuZDogIzQ2ODlhODtcXG59XFxuLmNob3NlUXVlc3Rpb24tdHJlZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogIzVkYTJjMjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbi5jaG9zZVF1ZXN0aW9uLXRyZWU6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuICBiYWNrZ3JvdW5kOiAjNDY4OWE4O1xcbn1cXG4uY2hvc2VRdWVzdGlvbi10cmVlOjotd2Via2l0LXJlc2l6ZXIge1xcbiAgYmFja2dyb3VuZDogIzQ2ODlhODtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bWFwcy9jaG9zZVF1ZXN0aW9uLmNzcy5tYXAgKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYnVuZGxlL2Nzcy9jaG9zZVF1ZXN0aW9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDdcbiAqKi8iLCJ2YXIgX192dWVfc2NyaXB0X18sIF9fdnVlX3RlbXBsYXRlX19cbl9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lczIwMTUmcGx1Z2luc1tdPXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jaG9zZVF1ZXN0aW9uX2xpc3QudnVlXCIpXG5pZiAoX192dWVfc2NyaXB0X18gJiZcbiAgICBfX3Z1ZV9zY3JpcHRfXy5fX2VzTW9kdWxlICYmXG4gICAgT2JqZWN0LmtleXMoX192dWVfc2NyaXB0X18pLmxlbmd0aCA+IDEpIHtcbiAgY29uc29sZS53YXJuKFwiW3Z1ZS1sb2FkZXJdIHNyY1xcXFxjb21wb25lbnRzXFxcXHNlbGVjdFxcXFxjaG9zZVF1ZXN0aW9uX2xpc3QudnVlOiBuYW1lZCBleHBvcnRzIGluICoudnVlIGZpbGVzIGFyZSBpZ25vcmVkLlwiKX1cbl9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtaHRtbC1sb2FkZXIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2hvc2VRdWVzdGlvbl9saXN0LnZ1ZVwiKVxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9zY3JpcHRfXyB8fCB7fVxuaWYgKG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdFxuaWYgKF9fdnVlX3RlbXBsYXRlX18pIHtcbih0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwiZnVuY3Rpb25cIiA/IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zIHx8IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zID0ge30pKSA6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSA9IF9fdnVlX3RlbXBsYXRlX19cbn1cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHsgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICB2YXIgaWQgPSBcIl92LWViMWRkYjVjL2Nob3NlUXVlc3Rpb25fbGlzdC52dWVcIlxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZS5leHBvcnRzKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS51cGRhdGUoaWQsIG1vZHVsZS5leHBvcnRzLCBfX3Z1ZV90ZW1wbGF0ZV9fKVxuICB9XG59KSgpfVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zZWxlY3QvY2hvc2VRdWVzdGlvbl9saXN0LnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDdcbiAqKi8iLCI8dGVtcGxhdGUgaWQ9XCJ0cGxcIj5cclxuICAgIDxkaXYgaWQ9XCIyMzQ2XCIgQGNsaWNrPVwibmV3c1wiPlxyXG4gICAgICAgIOeCueaIkeeCueaIkeeCueaIkVxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHM9e1xyXG4gICAgICAgIHRlbXBsYXRlOicjdHBsJyxcclxuICAgICAgICBtZXRob2RzOntcclxuICAgICAgICAgICAgbmV3czpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ2NoaWxkLW1zZycsICcxMzQ0NScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2hvc2VRdWVzdGlvbl9saXN0LnZ1ZT9iY2FhZmZhMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48ZGl2IGlkPVxcXCIyMzQ2XFxcIiBAY2xpY2s9XFxcIm5ld3NcXFwiPlxcbiAgICDngrnmiJHngrnmiJHngrnmiJFcXG48L2Rpdj5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3NlbGVjdC9jaG9zZVF1ZXN0aW9uX2xpc3QudnVlXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gN1xuICoqLyIsInZhciBfX3Z1ZV9zY3JpcHRfXywgX192dWVfdGVtcGxhdGVfX1xuX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWVzMjAxNSZwbHVnaW5zW109dHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RyZWUudnVlXCIpXG5pZiAoX192dWVfc2NyaXB0X18gJiZcbiAgICBfX3Z1ZV9zY3JpcHRfXy5fX2VzTW9kdWxlICYmXG4gICAgT2JqZWN0LmtleXMoX192dWVfc2NyaXB0X18pLmxlbmd0aCA+IDEpIHtcbiAgY29uc29sZS53YXJuKFwiW3Z1ZS1sb2FkZXJdIHNyY1xcXFxjb21wb25lbnRzXFxcXGNvbW1vblxcXFx0cmVlLnZ1ZTogbmFtZWQgZXhwb3J0cyBpbiAqLnZ1ZSBmaWxlcyBhcmUgaWdub3JlZC5cIil9XG5fX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWh0bWwtbG9hZGVyIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RyZWUudnVlXCIpXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX3NjcmlwdF9fIHx8IHt9XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG5pZiAoX192dWVfdGVtcGxhdGVfXykge1xuKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgfHwgKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgPSB7fSkpIDogbW9kdWxlLmV4cG9ydHMpLnRlbXBsYXRlID0gX192dWVfdGVtcGxhdGVfX1xufVxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIHZhciBpZCA9IFwiX3YtODUxODM3MzQvdHJlZS52dWVcIlxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZS5leHBvcnRzKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS51cGRhdGUoaWQsIG1vZHVsZS5leHBvcnRzLCBfX3Z1ZV90ZW1wbGF0ZV9fKVxuICB9XG59KSgpfVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9jb21tb24vdHJlZS52dWVcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSA3XG4gKiovIiwiPHRlbXBsYXRlIGlkPVwidHJlZVwiPlxyXG4gICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBtb2RlbFtyb290XVwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZnItbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmci1sZWZ0XCIgaWQ9XCJ7e2l0ZW0uZl9wb2ludGlkfX1cIj57eyBpdGVtLmZfbmFtZSB9fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dWwgdi1pZj1cImlzRm9sZGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XHJcbiAgICAgICAgICAgIDx0cmVlICA6bW9kZWw9XCJtb2RlbFwiIDpyb290PVwiaXRlbS5mX3BvaW50aWRcIj48L3RyZWU+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbGk+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBtb2R1bGUuZXhwb3J0cz17XHJcbiAgICAgICAgdGVtcGxhdGU6JyN0cmVlJyxcclxuICAgICAgICBuYW1lOid0cmVlJyxcclxuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHNlbGY6JydcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgbW9kZWw6T2JqZWN0LFxyXG4gICAgICAgICAgICByb290OlN0cmluZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6e1xyXG4gICAgICAgICAgICBpc0ZvbGRlcjpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5tb2RlbFt0aGlzLnJvb3RdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczp7XHJcbiAgICAgICAgICAgIHRvZ2dsZTpmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldj1lLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlPWV2Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlID09ICdub25lJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5PSdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ3RyZWVNZXNzYWdlJyx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYXJlbnQnOnRoaXMucm9vdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbGYnOnRoaXMuZl9wb2ludGlkfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNGb2xkZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCd0cmVlTWVzc2FnZScse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAncGFyZW50Jzp0aGlzLmZfcGFyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2VsZic6dGhpcy5mX3BvaW50aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxMTEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogdHJlZS52dWU/NWExMGUzM2JcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGxpIHYtZm9yPVxcXCJpdGVtIGluIG1vZGVsW3Jvb3RdXFxcIj5cXG4gICAgPGRpdiBAY2xpY2s9XFxcInRvZ2dsZVxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZnItbGVmdFxcXCI+PC9pPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImZyLWxlZnRcXFwiIGlkPVxcXCJ7e2l0ZW0uZl9wb2ludGlkfX1cXFwiPnt7IGl0ZW0uZl9uYW1lIH19PC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPHVsIHYtaWY9XFxcImlzRm9sZGVyXFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZVxcXCI+XFxuICAgICAgICA8dHJlZSAgOm1vZGVsPVxcXCJtb2RlbFxcXCIgOnJvb3Q9XFxcIml0ZW0uZl9wb2ludGlkXFxcIj48L3RyZWU+XFxuICAgIDwvdWw+XFxuPC9saT5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbi90cmVlLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDdcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGRpdj5cXG4gICAgPHVsIGNsYXNzPVxcXCJjaG9zZVF1ZXN0aW9uLXRyZWVcXFwiPlxcbiAgICAgICAgPHRyZWUgOm1vZGVsPVxcXCJ0cmVlRGF0YVxcXCIgOnJvb3Q9XFxcInRyZWVSb290XFxcIj48L3RyZWU+XFxuICAgIDwvdWw+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNob3NlUXVlc3Rpb24tY29udGVudFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJxdWVzdGlvbi1zaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaG9zZVRhYi1vbmUgY2hvc2VUYWItYWN0aXZlXFxcIiBAY2xpY2s9XFxcInRhYk9uZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwia29ud1BvaW50LXRhcFxcXCI+5a2X5q+NSUQ8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaG9zZVRhYi10d28gY2hvc2VUYWItdmlzaXRlZFxcXCIgQGNsaWNrPVxcXCJ0YWJUd29cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHA+57uf6K6hLS3pgInpopg8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNob3NlVGFiLXNob3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGlzdCBAY2hpbGQtbXNnPVxcXCJtc2coZSlcXFwiPjwvbGlzdD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3NlbGVjdC9jaG9zZVF1ZXN0aW9uLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDdcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9