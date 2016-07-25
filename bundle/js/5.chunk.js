webpackJsonp([5,12],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\paper\\upload-statistics.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-69cb05d4/upload-statistics.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var area = __webpack_require__(13);
	var crumbVue = __webpack_require__(16);
	__webpack_require__(23);
	__webpack_require__(26);
	__webpack_require__(27);
	
	module.exports = {
	    template: '#tpl',
	    data: function data() {
	        return {
	            bigTime: '',
	            startTime: '',
	            endTime: '',
	            sTime: '',
	            eTime: '',
	            status: '',
	            subject: '',
	            grade: '',
	            person: '',
	            type: '',
	            name: '',
	            id: ''
	        };
	    },
	    components: {
	        "are": area,
	        "crumb": crumbVue
	    },
	    ready: function ready() {
	        $(function () {
	            $(".Wdate").datepicker({
	                autoclose: true,
	                clearBtn: true,
	                todayBtn: 'linked',
	                format: "yyyy-mm-dd"
	            });
	        });
	    },
	    methods: {
	        search: function search() {}
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\paper\\area.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-249df2b6/area.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	var flag1, flag2;
	module.exports = {
	    template: '#area',
	    data: function data() {
	        return {
	            province: [{
	                p_Name: '不限省份'
	            }],
	            city: [{
	                p_Name: '不限城市'
	            }],
	            country: [{
	                p_Name: '不限区县'
	            }]
	        };
	    },
	    ready: function ready() {},
	    methods: {
	        cityFun: function cityFun() {},
	        countryFun: function countryFun() {}
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<select v-on:click=\"cityFun\" class=\"select ml5r15\">\n    <option v-for=\"item in province\">{{item.p_Name}}</option>\n</select>\n<select v-on:click=\"countryFun\" class=\"select mr15\">\n    <option v-for=\"item in city\">{{item.p_Name}}</option>\n</select>\n<select class=\"select\">\n    <option v-for=\"item in country\">{{item.p_Name}}</option>\n</select>\n";

/***/ },
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n  .content{\n      background: #ffffff !important;\n  }\n.content-header{\n    padding: 15px !important;\n    border-bottom: 2px solid #d2d6de;\n}\n", "", {"version":3,"sources":["/./src/components/common/ContentHeader.vue?62ba1e5a"],"names":[],"mappings":";;;;;;;;;;;;;EAaA;MACA,+BAAA;GACA;AACA;IACA,yBAAA;IACA,iCAAA;CACA","file":"ContentHeader.vue","sourcesContent":["<template>\r\n    <section class=\"content-header\" >\r\n        <h1>\r\n            {{modlename}}\r\n            <small>{{pagename}}</small>\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n            <li><a href={{pageurl}}><i class=\"fa fa-dashboard\"></i>{{modlename}} </a></li>\r\n            <li class=\"active\">{{pagename}}</li>\r\n        </ol>\r\n    </section>\r\n</template>\r\n<style>\r\n    .content{\r\n        background: #ffffff !important;\r\n    }\r\n  .content-header{\r\n      padding: 15px !important;\r\n      border-bottom: 2px solid #d2d6de;\r\n  }\r\n</style>\r\n<script>\r\n    module.exports={\r\n        props:{\r\n            modlename:{type:String,default:'试卷管理'},\r\n            pagename:{type:String,default:'试卷查重'},\r\n            pageurl:{type:String,default:'#/demo'},\r\n        },\r\n        components:{\r\n        }\r\n\r\n    }\r\n</script>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n<section class=\"content-header\" >\n    <h1>\n        {{modlename}}\n        <small>{{pagename}}</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n        <li><a href={{pageurl}}><i class=\"fa fa-dashboard\"></i>{{modlename}} </a></li>\n        <li class=\"active\">{{pagename}}</li>\n    </ol>\n</section>\n";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(25)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./datepicker3.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./datepicker3.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Datepicker for Bootstrap\r\n *\r\n * Copyright 2012 Stefan Petre\r\n * Improvements by Andrew Rowls\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n */\r\n.datepicker {\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n  direction: ltr;\r\n  /*.dow {\r\n\t\tborder-top: 1px solid #ddd !important;\r\n\t}*/\r\n}\r\n.datepicker-inline {\r\n  width: 100%;\r\n}\r\n.datepicker.datepicker-rtl {\r\n  direction: rtl;\r\n}\r\n.datepicker.datepicker-rtl table tr td span {\r\n  float: right;\r\n}\r\n.datepicker-dropdown {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.datepicker-dropdown:before {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 7px solid transparent;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-top: 0;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  position: absolute;\r\n}\r\n.datepicker-dropdown:after {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #fff;\r\n  border-top: 0;\r\n  position: absolute;\r\n}\r\n.datepicker-dropdown.datepicker-orient-left:before {\r\n  left: 6px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-left:after {\r\n  left: 7px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-right:before {\r\n  right: 6px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-right:after {\r\n  right: 7px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-top:before {\r\n  top: -7px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-top:after {\r\n  top: -6px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-bottom:before {\r\n  bottom: -7px;\r\n  border-bottom: 0;\r\n  border-top: 7px solid #999;\r\n}\r\n.datepicker-dropdown.datepicker-orient-bottom:after {\r\n  bottom: -6px;\r\n  border-bottom: 0;\r\n  border-top: 6px solid #fff;\r\n}\r\n.datepicker > div {\r\n  display: none;\r\n}\r\n.datepicker.days div.datepicker-days {\r\n  display: block;\r\n}\r\n.datepicker.months div.datepicker-months {\r\n  display: block;\r\n}\r\n.datepicker.years div.datepicker-years {\r\n  display: block;\r\n}\r\n.datepicker table {\r\n  margin: 0;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.datepicker table tr td,\r\n.datepicker table tr th {\r\n  text-align: center;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 4px;\r\n  border: none;\r\n}\r\n.table-striped .datepicker table tr td,\r\n.table-striped .datepicker table tr th {\r\n  background-color: transparent;\r\n}\r\n.datepicker table tr td.day:hover,\r\n.datepicker table tr td.day.focused {\r\n  background: rgba(0,0,0,0.2);\r\n  cursor: pointer;\r\n}\r\n.datepicker table tr td.old,\r\n.datepicker table tr td.new {\r\n  color: #777;\r\n}\r\n.datepicker table tr td.disabled,\r\n.datepicker table tr td.disabled:hover {\r\n  background: none;\r\n  color: #444;\r\n  cursor: default;\r\n}\r\n.datepicker table tr td.today,\r\n.datepicker table tr td.today:hover,\r\n.datepicker table tr td.today.disabled,\r\n.datepicker table tr td.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #ffb733;\r\n}\r\n.datepicker table tr td.today:hover,\r\n.datepicker table tr td.today:hover:hover,\r\n.datepicker table tr td.today.disabled:hover,\r\n.datepicker table tr td.today.disabled:hover:hover,\r\n.datepicker table tr td.today:focus,\r\n.datepicker table tr td.today:hover:focus,\r\n.datepicker table tr td.today.disabled:focus,\r\n.datepicker table tr td.today.disabled:hover:focus,\r\n.datepicker table tr td.today:active,\r\n.datepicker table tr td.today:hover:active,\r\n.datepicker table tr td.today.disabled:active,\r\n.datepicker table tr td.today.disabled:hover:active,\r\n.datepicker table tr td.today.active,\r\n.datepicker table tr td.today:hover.active,\r\n.datepicker table tr td.today.disabled.active,\r\n.datepicker table tr td.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.today,\r\n.open .dropdown-toggle.datepicker table tr td.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #f59e00;\r\n}\r\n.datepicker table tr td.today:active,\r\n.datepicker table tr td.today:hover:active,\r\n.datepicker table tr td.today.disabled:active,\r\n.datepicker table tr td.today.disabled:hover:active,\r\n.datepicker table tr td.today.active,\r\n.datepicker table tr td.today:hover.active,\r\n.datepicker table tr td.today.disabled.active,\r\n.datepicker table tr td.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.today,\r\n.open .dropdown-toggle.datepicker table tr td.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.today.disabled,\r\n.datepicker table tr td.today:hover.disabled,\r\n.datepicker table tr td.today.disabled.disabled,\r\n.datepicker table tr td.today.disabled:hover.disabled,\r\n.datepicker table tr td.today[disabled],\r\n.datepicker table tr td.today:hover[disabled],\r\n.datepicker table tr td.today.disabled[disabled],\r\n.datepicker table tr td.today.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.today,\r\nfieldset[disabled] .datepicker table tr td.today:hover,\r\nfieldset[disabled] .datepicker table tr td.today.disabled,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover,\r\n.datepicker table tr td.today.disabled:hover,\r\n.datepicker table tr td.today:hover.disabled:hover,\r\n.datepicker table tr td.today.disabled.disabled:hover,\r\n.datepicker table tr td.today.disabled:hover.disabled:hover,\r\n.datepicker table tr td.today[disabled]:hover,\r\n.datepicker table tr td.today:hover[disabled]:hover,\r\n.datepicker table tr td.today.disabled[disabled]:hover,\r\n.datepicker table tr td.today.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.today:hover,\r\nfieldset[disabled] .datepicker table tr td.today:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover:hover,\r\n.datepicker table tr td.today.disabled:focus,\r\n.datepicker table tr td.today:hover.disabled:focus,\r\n.datepicker table tr td.today.disabled.disabled:focus,\r\n.datepicker table tr td.today.disabled:hover.disabled:focus,\r\n.datepicker table tr td.today[disabled]:focus,\r\n.datepicker table tr td.today:hover[disabled]:focus,\r\n.datepicker table tr td.today.disabled[disabled]:focus,\r\n.datepicker table tr td.today.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.today:focus,\r\nfieldset[disabled] .datepicker table tr td.today:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover:focus,\r\n.datepicker table tr td.today.disabled:active,\r\n.datepicker table tr td.today:hover.disabled:active,\r\n.datepicker table tr td.today.disabled.disabled:active,\r\n.datepicker table tr td.today.disabled:hover.disabled:active,\r\n.datepicker table tr td.today[disabled]:active,\r\n.datepicker table tr td.today:hover[disabled]:active,\r\n.datepicker table tr td.today.disabled[disabled]:active,\r\n.datepicker table tr td.today.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.today:active,\r\nfieldset[disabled] .datepicker table tr td.today:hover:active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover:active,\r\n.datepicker table tr td.today.disabled.active,\r\n.datepicker table tr td.today:hover.disabled.active,\r\n.datepicker table tr td.today.disabled.disabled.active,\r\n.datepicker table tr td.today.disabled:hover.disabled.active,\r\n.datepicker table tr td.today[disabled].active,\r\n.datepicker table tr td.today:hover[disabled].active,\r\n.datepicker table tr td.today.disabled[disabled].active,\r\n.datepicker table tr td.today.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.today.active,\r\nfieldset[disabled] .datepicker table tr td.today:hover.active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover.active {\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #ffb733;\r\n}\r\n.datepicker table tr td.today:hover:hover {\r\n  color: #000;\r\n}\r\n.datepicker table tr td.today.active:hover {\r\n  color: #fff;\r\n}\r\n.datepicker table tr td.range,\r\n.datepicker table tr td.range:hover,\r\n.datepicker table tr td.range.disabled,\r\n.datepicker table tr td.range.disabled:hover {\r\n  background: rgba(0,0,0,0.2);\r\n  border-radius: 0;\r\n}\r\n.datepicker table tr td.range.today,\r\n.datepicker table tr td.range.today:hover,\r\n.datepicker table tr td.range.today.disabled,\r\n.datepicker table tr td.range.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #f1a417;\r\n  border-radius: 0;\r\n}\r\n.datepicker table tr td.range.today:hover,\r\n.datepicker table tr td.range.today:hover:hover,\r\n.datepicker table tr td.range.today.disabled:hover,\r\n.datepicker table tr td.range.today.disabled:hover:hover,\r\n.datepicker table tr td.range.today:focus,\r\n.datepicker table tr td.range.today:hover:focus,\r\n.datepicker table tr td.range.today.disabled:focus,\r\n.datepicker table tr td.range.today.disabled:hover:focus,\r\n.datepicker table tr td.range.today:active,\r\n.datepicker table tr td.range.today:hover:active,\r\n.datepicker table tr td.range.today.disabled:active,\r\n.datepicker table tr td.range.today.disabled:hover:active,\r\n.datepicker table tr td.range.today.active,\r\n.datepicker table tr td.range.today:hover.active,\r\n.datepicker table tr td.range.today.disabled.active,\r\n.datepicker table tr td.range.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.range.today,\r\n.open .dropdown-toggle.datepicker table tr td.range.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #bf800c;\r\n}\r\n.datepicker table tr td.range.today:active,\r\n.datepicker table tr td.range.today:hover:active,\r\n.datepicker table tr td.range.today.disabled:active,\r\n.datepicker table tr td.range.today.disabled:hover:active,\r\n.datepicker table tr td.range.today.active,\r\n.datepicker table tr td.range.today:hover.active,\r\n.datepicker table tr td.range.today.disabled.active,\r\n.datepicker table tr td.range.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.range.today,\r\n.open .dropdown-toggle.datepicker table tr td.range.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.range.today.disabled,\r\n.datepicker table tr td.range.today:hover.disabled,\r\n.datepicker table tr td.range.today.disabled.disabled,\r\n.datepicker table tr td.range.today.disabled:hover.disabled,\r\n.datepicker table tr td.range.today[disabled],\r\n.datepicker table tr td.range.today:hover[disabled],\r\n.datepicker table tr td.range.today.disabled[disabled],\r\n.datepicker table tr td.range.today.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.range.today,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover,\r\n.datepicker table tr td.range.today.disabled:hover,\r\n.datepicker table tr td.range.today:hover.disabled:hover,\r\n.datepicker table tr td.range.today.disabled.disabled:hover,\r\n.datepicker table tr td.range.today.disabled:hover.disabled:hover,\r\n.datepicker table tr td.range.today[disabled]:hover,\r\n.datepicker table tr td.range.today:hover[disabled]:hover,\r\n.datepicker table tr td.range.today.disabled[disabled]:hover,\r\n.datepicker table tr td.range.today.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover:hover,\r\n.datepicker table tr td.range.today.disabled:focus,\r\n.datepicker table tr td.range.today:hover.disabled:focus,\r\n.datepicker table tr td.range.today.disabled.disabled:focus,\r\n.datepicker table tr td.range.today.disabled:hover.disabled:focus,\r\n.datepicker table tr td.range.today[disabled]:focus,\r\n.datepicker table tr td.range.today:hover[disabled]:focus,\r\n.datepicker table tr td.range.today.disabled[disabled]:focus,\r\n.datepicker table tr td.range.today.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover:focus,\r\n.datepicker table tr td.range.today.disabled:active,\r\n.datepicker table tr td.range.today:hover.disabled:active,\r\n.datepicker table tr td.range.today.disabled.disabled:active,\r\n.datepicker table tr td.range.today.disabled:hover.disabled:active,\r\n.datepicker table tr td.range.today[disabled]:active,\r\n.datepicker table tr td.range.today:hover[disabled]:active,\r\n.datepicker table tr td.range.today.disabled[disabled]:active,\r\n.datepicker table tr td.range.today.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.range.today:active,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover:active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover:active,\r\n.datepicker table tr td.range.today.disabled.active,\r\n.datepicker table tr td.range.today:hover.disabled.active,\r\n.datepicker table tr td.range.today.disabled.disabled.active,\r\n.datepicker table tr td.range.today.disabled:hover.disabled.active,\r\n.datepicker table tr td.range.today[disabled].active,\r\n.datepicker table tr td.range.today:hover[disabled].active,\r\n.datepicker table tr td.range.today.disabled[disabled].active,\r\n.datepicker table tr td.range.today.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.range.today.active,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover.active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover.active {\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #f1a417;\r\n}\r\n.datepicker table tr td.selected,\r\n.datepicker table tr td.selected:hover,\r\n.datepicker table tr td.selected.disabled,\r\n.datepicker table tr td.selected.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #555555;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.datepicker table tr td.selected:hover,\r\n.datepicker table tr td.selected:hover:hover,\r\n.datepicker table tr td.selected.disabled:hover,\r\n.datepicker table tr td.selected.disabled:hover:hover,\r\n.datepicker table tr td.selected:focus,\r\n.datepicker table tr td.selected:hover:focus,\r\n.datepicker table tr td.selected.disabled:focus,\r\n.datepicker table tr td.selected.disabled:hover:focus,\r\n.datepicker table tr td.selected:active,\r\n.datepicker table tr td.selected:hover:active,\r\n.datepicker table tr td.selected.disabled:active,\r\n.datepicker table tr td.selected.disabled:hover:active,\r\n.datepicker table tr td.selected.active,\r\n.datepicker table tr td.selected:hover.active,\r\n.datepicker table tr td.selected.disabled.active,\r\n.datepicker table tr td.selected.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.selected,\r\n.open .dropdown-toggle.datepicker table tr td.selected:hover,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #373737;\r\n}\r\n.datepicker table tr td.selected:active,\r\n.datepicker table tr td.selected:hover:active,\r\n.datepicker table tr td.selected.disabled:active,\r\n.datepicker table tr td.selected.disabled:hover:active,\r\n.datepicker table tr td.selected.active,\r\n.datepicker table tr td.selected:hover.active,\r\n.datepicker table tr td.selected.disabled.active,\r\n.datepicker table tr td.selected.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.selected,\r\n.open .dropdown-toggle.datepicker table tr td.selected:hover,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.selected.disabled,\r\n.datepicker table tr td.selected:hover.disabled,\r\n.datepicker table tr td.selected.disabled.disabled,\r\n.datepicker table tr td.selected.disabled:hover.disabled,\r\n.datepicker table tr td.selected[disabled],\r\n.datepicker table tr td.selected:hover[disabled],\r\n.datepicker table tr td.selected.disabled[disabled],\r\n.datepicker table tr td.selected.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.selected,\r\nfieldset[disabled] .datepicker table tr td.selected:hover,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover,\r\n.datepicker table tr td.selected.disabled:hover,\r\n.datepicker table tr td.selected:hover.disabled:hover,\r\n.datepicker table tr td.selected.disabled.disabled:hover,\r\n.datepicker table tr td.selected.disabled:hover.disabled:hover,\r\n.datepicker table tr td.selected[disabled]:hover,\r\n.datepicker table tr td.selected:hover[disabled]:hover,\r\n.datepicker table tr td.selected.disabled[disabled]:hover,\r\n.datepicker table tr td.selected.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.selected:hover,\r\nfieldset[disabled] .datepicker table tr td.selected:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover:hover,\r\n.datepicker table tr td.selected.disabled:focus,\r\n.datepicker table tr td.selected:hover.disabled:focus,\r\n.datepicker table tr td.selected.disabled.disabled:focus,\r\n.datepicker table tr td.selected.disabled:hover.disabled:focus,\r\n.datepicker table tr td.selected[disabled]:focus,\r\n.datepicker table tr td.selected:hover[disabled]:focus,\r\n.datepicker table tr td.selected.disabled[disabled]:focus,\r\n.datepicker table tr td.selected.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.selected:focus,\r\nfieldset[disabled] .datepicker table tr td.selected:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover:focus,\r\n.datepicker table tr td.selected.disabled:active,\r\n.datepicker table tr td.selected:hover.disabled:active,\r\n.datepicker table tr td.selected.disabled.disabled:active,\r\n.datepicker table tr td.selected.disabled:hover.disabled:active,\r\n.datepicker table tr td.selected[disabled]:active,\r\n.datepicker table tr td.selected:hover[disabled]:active,\r\n.datepicker table tr td.selected.disabled[disabled]:active,\r\n.datepicker table tr td.selected.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.selected:active,\r\nfieldset[disabled] .datepicker table tr td.selected:hover:active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover:active,\r\n.datepicker table tr td.selected.disabled.active,\r\n.datepicker table tr td.selected:hover.disabled.active,\r\n.datepicker table tr td.selected.disabled.disabled.active,\r\n.datepicker table tr td.selected.disabled:hover.disabled.active,\r\n.datepicker table tr td.selected[disabled].active,\r\n.datepicker table tr td.selected:hover[disabled].active,\r\n.datepicker table tr td.selected.disabled[disabled].active,\r\n.datepicker table tr td.selected.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.selected.active,\r\nfieldset[disabled] .datepicker table tr td.selected:hover.active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover.active {\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #555555;\r\n}\r\n.datepicker table tr td.active,\r\n.datepicker table tr td.active:hover,\r\n.datepicker table tr td.active.disabled,\r\n.datepicker table tr td.active.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #357ebd;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.datepicker table tr td.active:hover,\r\n.datepicker table tr td.active:hover:hover,\r\n.datepicker table tr td.active.disabled:hover,\r\n.datepicker table tr td.active.disabled:hover:hover,\r\n.datepicker table tr td.active:focus,\r\n.datepicker table tr td.active:hover:focus,\r\n.datepicker table tr td.active.disabled:focus,\r\n.datepicker table tr td.active.disabled:hover:focus,\r\n.datepicker table tr td.active:active,\r\n.datepicker table tr td.active:hover:active,\r\n.datepicker table tr td.active.disabled:active,\r\n.datepicker table tr td.active.disabled:hover:active,\r\n.datepicker table tr td.active.active,\r\n.datepicker table tr td.active:hover.active,\r\n.datepicker table tr td.active.disabled.active,\r\n.datepicker table tr td.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.active,\r\n.open .dropdown-toggle.datepicker table tr td.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.5);\r\n  border-color: #285e8e;\r\n}\r\n.datepicker table tr td.active:active,\r\n.datepicker table tr td.active:hover:active,\r\n.datepicker table tr td.active.disabled:active,\r\n.datepicker table tr td.active.disabled:hover:active,\r\n.datepicker table tr td.active.active,\r\n.datepicker table tr td.active:hover.active,\r\n.datepicker table tr td.active.disabled.active,\r\n.datepicker table tr td.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.active,\r\n.open .dropdown-toggle.datepicker table tr td.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.active.disabled,\r\n.datepicker table tr td.active:hover.disabled,\r\n.datepicker table tr td.active.disabled.disabled,\r\n.datepicker table tr td.active.disabled:hover.disabled,\r\n.datepicker table tr td.active[disabled],\r\n.datepicker table tr td.active:hover[disabled],\r\n.datepicker table tr td.active.disabled[disabled],\r\n.datepicker table tr td.active.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.active,\r\nfieldset[disabled] .datepicker table tr td.active:hover,\r\nfieldset[disabled] .datepicker table tr td.active.disabled,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover,\r\n.datepicker table tr td.active.disabled:hover,\r\n.datepicker table tr td.active:hover.disabled:hover,\r\n.datepicker table tr td.active.disabled.disabled:hover,\r\n.datepicker table tr td.active.disabled:hover.disabled:hover,\r\n.datepicker table tr td.active[disabled]:hover,\r\n.datepicker table tr td.active:hover[disabled]:hover,\r\n.datepicker table tr td.active.disabled[disabled]:hover,\r\n.datepicker table tr td.active.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.active:hover,\r\nfieldset[disabled] .datepicker table tr td.active:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover:hover,\r\n.datepicker table tr td.active.disabled:focus,\r\n.datepicker table tr td.active:hover.disabled:focus,\r\n.datepicker table tr td.active.disabled.disabled:focus,\r\n.datepicker table tr td.active.disabled:hover.disabled:focus,\r\n.datepicker table tr td.active[disabled]:focus,\r\n.datepicker table tr td.active:hover[disabled]:focus,\r\n.datepicker table tr td.active.disabled[disabled]:focus,\r\n.datepicker table tr td.active.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.active:focus,\r\nfieldset[disabled] .datepicker table tr td.active:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover:focus,\r\n.datepicker table tr td.active.disabled:active,\r\n.datepicker table tr td.active:hover.disabled:active,\r\n.datepicker table tr td.active.disabled.disabled:active,\r\n.datepicker table tr td.active.disabled:hover.disabled:active,\r\n.datepicker table tr td.active[disabled]:active,\r\n.datepicker table tr td.active:hover[disabled]:active,\r\n.datepicker table tr td.active.disabled[disabled]:active,\r\n.datepicker table tr td.active.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.active:active,\r\nfieldset[disabled] .datepicker table tr td.active:hover:active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover:active,\r\n.datepicker table tr td.active.disabled.active,\r\n.datepicker table tr td.active:hover.disabled.active,\r\n.datepicker table tr td.active.disabled.disabled.active,\r\n.datepicker table tr td.active.disabled:hover.disabled.active,\r\n.datepicker table tr td.active[disabled].active,\r\n.datepicker table tr td.active:hover[disabled].active,\r\n.datepicker table tr td.active.disabled[disabled].active,\r\n.datepicker table tr td.active.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.active.active,\r\nfieldset[disabled] .datepicker table tr td.active:hover.active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover.active {\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n}\r\n.datepicker table tr td span {\r\n  display: block;\r\n  width: 23%;\r\n  height: 54px;\r\n  line-height: 54px;\r\n  float: left;\r\n  margin: 1%;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.datepicker table tr td span:hover {\r\n  background: rgba(0,0,0,0.2);\r\n}\r\n.datepicker table tr td span.disabled,\r\n.datepicker table tr td span.disabled:hover {\r\n  background: none;\r\n  color: #444;\r\n  cursor: default;\r\n}\r\n.datepicker table tr td span.active,\r\n.datepicker table tr td span.active:hover,\r\n.datepicker table tr td span.active.disabled,\r\n.datepicker table tr td span.active.disabled:hover {\r\n  color: #ffffff;\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.datepicker table tr td span.active:hover,\r\n.datepicker table tr td span.active:hover:hover,\r\n.datepicker table tr td span.active.disabled:hover,\r\n.datepicker table tr td span.active.disabled:hover:hover,\r\n.datepicker table tr td span.active:focus,\r\n.datepicker table tr td span.active:hover:focus,\r\n.datepicker table tr td span.active.disabled:focus,\r\n.datepicker table tr td span.active.disabled:hover:focus,\r\n.datepicker table tr td span.active:active,\r\n.datepicker table tr td span.active:hover:active,\r\n.datepicker table tr td span.active.disabled:active,\r\n.datepicker table tr td span.active.disabled:hover:active,\r\n.datepicker table tr td span.active.active,\r\n.datepicker table tr td span.active:hover.active,\r\n.datepicker table tr td span.active.disabled.active,\r\n.datepicker table tr td span.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled:hover {\r\n  color: #ffffff;\r\n  background-color: #3276b1;\r\n  border-color: #285e8e;\r\n}\r\n.datepicker table tr td span.active:active,\r\n.datepicker table tr td span.active:hover:active,\r\n.datepicker table tr td span.active.disabled:active,\r\n.datepicker table tr td span.active.disabled:hover:active,\r\n.datepicker table tr td span.active.active,\r\n.datepicker table tr td span.active:hover.active,\r\n.datepicker table tr td span.active.disabled.active,\r\n.datepicker table tr td span.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td span.active.disabled,\r\n.datepicker table tr td span.active:hover.disabled,\r\n.datepicker table tr td span.active.disabled.disabled,\r\n.datepicker table tr td span.active.disabled:hover.disabled,\r\n.datepicker table tr td span.active[disabled],\r\n.datepicker table tr td span.active:hover[disabled],\r\n.datepicker table tr td span.active.disabled[disabled],\r\n.datepicker table tr td span.active.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td span.active,\r\nfieldset[disabled] .datepicker table tr td span.active:hover,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover,\r\n.datepicker table tr td span.active.disabled:hover,\r\n.datepicker table tr td span.active:hover.disabled:hover,\r\n.datepicker table tr td span.active.disabled.disabled:hover,\r\n.datepicker table tr td span.active.disabled:hover.disabled:hover,\r\n.datepicker table tr td span.active[disabled]:hover,\r\n.datepicker table tr td span.active:hover[disabled]:hover,\r\n.datepicker table tr td span.active.disabled[disabled]:hover,\r\n.datepicker table tr td span.active.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td span.active:hover,\r\nfieldset[disabled] .datepicker table tr td span.active:hover:hover,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover:hover,\r\n.datepicker table tr td span.active.disabled:focus,\r\n.datepicker table tr td span.active:hover.disabled:focus,\r\n.datepicker table tr td span.active.disabled.disabled:focus,\r\n.datepicker table tr td span.active.disabled:hover.disabled:focus,\r\n.datepicker table tr td span.active[disabled]:focus,\r\n.datepicker table tr td span.active:hover[disabled]:focus,\r\n.datepicker table tr td span.active.disabled[disabled]:focus,\r\n.datepicker table tr td span.active.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td span.active:focus,\r\nfieldset[disabled] .datepicker table tr td span.active:hover:focus,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover:focus,\r\n.datepicker table tr td span.active.disabled:active,\r\n.datepicker table tr td span.active:hover.disabled:active,\r\n.datepicker table tr td span.active.disabled.disabled:active,\r\n.datepicker table tr td span.active.disabled:hover.disabled:active,\r\n.datepicker table tr td span.active[disabled]:active,\r\n.datepicker table tr td span.active:hover[disabled]:active,\r\n.datepicker table tr td span.active.disabled[disabled]:active,\r\n.datepicker table tr td span.active.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td span.active:active,\r\nfieldset[disabled] .datepicker table tr td span.active:hover:active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover:active,\r\n.datepicker table tr td span.active.disabled.active,\r\n.datepicker table tr td span.active:hover.disabled.active,\r\n.datepicker table tr td span.active.disabled.disabled.active,\r\n.datepicker table tr td span.active.disabled:hover.disabled.active,\r\n.datepicker table tr td span.active[disabled].active,\r\n.datepicker table tr td span.active:hover[disabled].active,\r\n.datepicker table tr td span.active.disabled[disabled].active,\r\n.datepicker table tr td span.active.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td span.active.active,\r\nfieldset[disabled] .datepicker table tr td span.active:hover.active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled.active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover.active {\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n}\r\n.datepicker table tr td span.old,\r\n.datepicker table tr td span.new {\r\n  color: #444;\r\n}\r\n.datepicker th.datepicker-switch {\r\n  width: 145px;\r\n}\r\n.datepicker thead tr:first-child th,\r\n.datepicker tfoot tr th {\r\n  cursor: pointer;\r\n}\r\n.datepicker thead tr:first-child th:hover,\r\n.datepicker tfoot tr th:hover {\r\n  background: rgba(0,0,0,0.2);\r\n}\r\n.datepicker .cw {\r\n  font-size: 10px;\r\n  width: 12px;\r\n  padding: 0 2px 0 5px;\r\n  vertical-align: middle;\r\n}\r\n.datepicker thead tr:first-child th.cw {\r\n  cursor: default;\r\n  background-color: transparent;\r\n}\r\n.input-group.date .input-group-addon i {\r\n  cursor: pointer;\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n.input-daterange input {\r\n  text-align: center;\r\n}\r\n.input-daterange input:first-child {\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n.input-daterange input:last-child {\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n.input-daterange .input-group-addon {\r\n  width: auto;\r\n  min-width: 16px;\r\n  padding: 4px 5px;\r\n  font-weight: normal;\r\n  line-height: 1.428571429;\r\n  text-align: center;\r\n  text-shadow: 0 1px 0 #fff;\r\n  vertical-align: middle;\r\n  background-color: #eeeeee;\r\n  border: solid #cccccc;\r\n  border-width: 1px 0;\r\n  margin-left: -5px;\r\n  margin-right: -5px;\r\n}\r\n.datepicker.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  float: left;\r\n  display: none;\r\n  min-width: 160px;\r\n  list-style: none;\r\n  background-color: #ffffff;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding;\r\n  background-clip: padding-box;\r\n  *border-right-width: 2px;\r\n  *border-bottom-width: 2px;\r\n  color: #333333;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  line-height: 1.428571429;\r\n}\r\n.datepicker.dropdown-menu th,\r\n.datepicker.dropdown-menu td {\r\n  padding: 4px 5px;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	/* =========================================================
	 * bootstrap-datepicker.js
	 * Repo: https://github.com/eternicode/bootstrap-datepicker/
	 * Demo: http://eternicode.github.io/bootstrap-datepicker/
	 * Docs: http://bootstrap-datepicker.readthedocs.org/
	 * Forked from http://www.eyecon.ro/bootstrap-datepicker
	 * =========================================================
	 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 * ========================================================= */
	
	(function($, undefined){
	
		var $window = $(window);
	
		function UTCDate(){
			return new Date(Date.UTC.apply(Date, arguments));
		}
		function UTCToday(){
			var today = new Date();
			return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
		}
		function alias(method){
			return function(){
				return this[method].apply(this, arguments);
			};
		}
	
		var DateArray = (function(){
			var extras = {
				get: function(i){
					return this.slice(i)[0];
				},
				contains: function(d){
					// Array.indexOf is not cross-browser;
					// $.inArray doesn't work with Dates
					var val = d && d.valueOf();
					for (var i=0, l=this.length; i < l; i++)
						if (this[i].valueOf() === val)
							return i;
					return -1;
				},
				remove: function(i){
					this.splice(i,1);
				},
				replace: function(new_array){
					if (!new_array)
						return;
					if (!$.isArray(new_array))
						new_array = [new_array];
					this.clear();
					this.push.apply(this, new_array);
				},
				clear: function(){
					this.splice(0);
				},
				copy: function(){
					var a = new DateArray();
					a.replace(this);
					return a;
				}
			};
	
			return function(){
				var a = [];
				a.push.apply(a, arguments);
				$.extend(a, extras);
				return a;
			};
		})();
	
	
		// Picker object
	
		var Datepicker = function(element, options){
			this.dates = new DateArray();
			this.viewDate = UTCToday();
			this.focusDate = null;
	
			this._process_options(options);
	
			this.element = $(element);
			this.isInline = false;
			this.isInput = this.element.is('input');
			this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
			this.hasInput = this.component && this.element.find('input').length;
			if (this.component && this.component.length === 0)
				this.component = false;
	
			this.picker = $(DPGlobal.template);
			this._buildEvents();
			this._attachEvents();
	
			if (this.isInline){
				this.picker.addClass('datepicker-inline').appendTo(this.element);
			}
			else {
				this.picker.addClass('datepicker-dropdown dropdown-menu');
			}
	
			if (this.o.rtl){
				this.picker.addClass('datepicker-rtl');
			}
	
			this.viewMode = this.o.startView;
	
			if (this.o.calendarWeeks)
				this.picker.find('tfoot th.today')
							.attr('colspan', function(i, val){
								return parseInt(val) + 1;
							});
	
			this._allow_update = false;
	
			this.setStartDate(this._o.startDate);
			this.setEndDate(this._o.endDate);
			this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
	
			this.fillDow();
			this.fillMonths();
	
			this._allow_update = true;
	
			this.update();
			this.showMode();
	
			if (this.isInline){
				this.show();
			}
		};
	
		Datepicker.prototype = {
			constructor: Datepicker,
	
			_process_options: function(opts){
				// Store raw options for reference
				this._o = $.extend({}, this._o, opts);
				// Processed options
				var o = this.o = $.extend({}, this._o);
	
				// Check if "de-DE" style date is available, if not language should
				// fallback to 2 letter code eg "de"
				var lang = o.language;
				if (!dates[lang]){
					lang = lang.split('-')[0];
					if (!dates[lang])
						lang = defaults.language;
				}
				o.language = lang;
	
				switch (o.startView){
					case 2:
					case 'decade':
						o.startView = 2;
						break;
					case 1:
					case 'year':
						o.startView = 1;
						break;
					default:
						o.startView = 0;
				}
	
				switch (o.minViewMode){
					case 1:
					case 'months':
						o.minViewMode = 1;
						break;
					case 2:
					case 'years':
						o.minViewMode = 2;
						break;
					default:
						o.minViewMode = 0;
				}
	
				o.startView = Math.max(o.startView, o.minViewMode);
	
				// true, false, or Number > 0
				if (o.multidate !== true){
					o.multidate = Number(o.multidate) || false;
					if (o.multidate !== false)
						o.multidate = Math.max(0, o.multidate);
					else
						o.multidate = 1;
				}
				o.multidateSeparator = String(o.multidateSeparator);
	
				o.weekStart %= 7;
				o.weekEnd = ((o.weekStart + 6) % 7);
	
				var format = DPGlobal.parseFormat(o.format);
				if (o.startDate !== -Infinity){
					if (!!o.startDate){
						if (o.startDate instanceof Date)
							o.startDate = this._local_to_utc(this._zero_time(o.startDate));
						else
							o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
					}
					else {
						o.startDate = -Infinity;
					}
				}
				if (o.endDate !== Infinity){
					if (!!o.endDate){
						if (o.endDate instanceof Date)
							o.endDate = this._local_to_utc(this._zero_time(o.endDate));
						else
							o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
					}
					else {
						o.endDate = Infinity;
					}
				}
	
				o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
				if (!$.isArray(o.daysOfWeekDisabled))
					o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
				o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
					return parseInt(d, 10);
				});
	
				var plc = String(o.orientation).toLowerCase().split(/\s+/g),
					_plc = o.orientation.toLowerCase();
				plc = $.grep(plc, function(word){
					return (/^auto|left|right|top|bottom$/).test(word);
				});
				o.orientation = {x: 'auto', y: 'auto'};
				if (!_plc || _plc === 'auto')
					; // no action
				else if (plc.length === 1){
					switch (plc[0]){
						case 'top':
						case 'bottom':
							o.orientation.y = plc[0];
							break;
						case 'left':
						case 'right':
							o.orientation.x = plc[0];
							break;
					}
				}
				else {
					_plc = $.grep(plc, function(word){
						return (/^left|right$/).test(word);
					});
					o.orientation.x = _plc[0] || 'auto';
	
					_plc = $.grep(plc, function(word){
						return (/^top|bottom$/).test(word);
					});
					o.orientation.y = _plc[0] || 'auto';
				}
			},
			_events: [],
			_secondaryEvents: [],
			_applyEvents: function(evs){
				for (var i=0, el, ch, ev; i < evs.length; i++){
					el = evs[i][0];
					if (evs[i].length === 2){
						ch = undefined;
						ev = evs[i][1];
					}
					else if (evs[i].length === 3){
						ch = evs[i][1];
						ev = evs[i][2];
					}
					el.on(ev, ch);
				}
			},
			_unapplyEvents: function(evs){
				for (var i=0, el, ev, ch; i < evs.length; i++){
					el = evs[i][0];
					if (evs[i].length === 2){
						ch = undefined;
						ev = evs[i][1];
					}
					else if (evs[i].length === 3){
						ch = evs[i][1];
						ev = evs[i][2];
					}
					el.off(ev, ch);
				}
			},
			_buildEvents: function(){
				if (this.isInput){ // single input
					this._events = [
						[this.element, {
							focus: $.proxy(this.show, this),
							keyup: $.proxy(function(e){
								if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
									this.update();
							}, this),
							keydown: $.proxy(this.keydown, this)
						}]
					];
				}
				else if (this.component && this.hasInput){ // component: input + button
					this._events = [
						// For components that are not readonly, allow keyboard nav
						[this.element.find('input'), {
							focus: $.proxy(this.show, this),
							keyup: $.proxy(function(e){
								if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)
									this.update();
							}, this),
							keydown: $.proxy(this.keydown, this)
						}],
						[this.component, {
							click: $.proxy(this.show, this)
						}]
					];
				}
				else if (this.element.is('div')){  // inline datepicker
					this.isInline = true;
				}
				else {
					this._events = [
						[this.element, {
							click: $.proxy(this.show, this)
						}]
					];
				}
				this._events.push(
					// Component: listen for blur on element descendants
					[this.element, '*', {
						blur: $.proxy(function(e){
							this._focused_from = e.target;
						}, this)
					}],
					// Input: listen for blur on element
					[this.element, {
						blur: $.proxy(function(e){
							this._focused_from = e.target;
						}, this)
					}]
				);
	
				this._secondaryEvents = [
					[this.picker, {
						click: $.proxy(this.click, this)
					}],
					[$(window), {
						resize: $.proxy(this.place, this)
					}],
					[$(document), {
						'mousedown touchstart': $.proxy(function(e){
							// Clicked outside the datepicker, hide it
							if (!(
								this.element.is(e.target) ||
								this.element.find(e.target).length ||
								this.picker.is(e.target) ||
								this.picker.find(e.target).length
							)){
								this.hide();
							}
						}, this)
					}]
				];
			},
			_attachEvents: function(){
				this._detachEvents();
				this._applyEvents(this._events);
			},
			_detachEvents: function(){
				this._unapplyEvents(this._events);
			},
			_attachSecondaryEvents: function(){
				this._detachSecondaryEvents();
				this._applyEvents(this._secondaryEvents);
			},
			_detachSecondaryEvents: function(){
				this._unapplyEvents(this._secondaryEvents);
			},
			_trigger: function(event, altdate){
				var date = altdate || this.dates.get(-1),
					local_date = this._utc_to_local(date);
	
				this.element.trigger({
					type: event,
					date: local_date,
					dates: $.map(this.dates, this._utc_to_local),
					format: $.proxy(function(ix, format){
						if (arguments.length === 0){
							ix = this.dates.length - 1;
							format = this.o.format;
						}
						else if (typeof ix === 'string'){
							format = ix;
							ix = this.dates.length - 1;
						}
						format = format || this.o.format;
						var date = this.dates.get(ix);
						return DPGlobal.formatDate(date, format, this.o.language);
					}, this)
				});
			},
	
			show: function(){
				if (!this.isInline)
					this.picker.appendTo('body');
				this.picker.show();
				this.place();
				this._attachSecondaryEvents();
				this._trigger('show');
			},
	
			hide: function(){
				if (this.isInline)
					return;
				if (!this.picker.is(':visible'))
					return;
				this.focusDate = null;
				this.picker.hide().detach();
				this._detachSecondaryEvents();
				this.viewMode = this.o.startView;
				this.showMode();
	
				if (
					this.o.forceParse &&
					(
						this.isInput && this.element.val() ||
						this.hasInput && this.element.find('input').val()
					)
				)
					this.setValue();
				this._trigger('hide');
			},
	
			remove: function(){
				this.hide();
				this._detachEvents();
				this._detachSecondaryEvents();
				this.picker.remove();
				delete this.element.data().datepicker;
				if (!this.isInput){
					delete this.element.data().date;
				}
			},
	
			_utc_to_local: function(utc){
				return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
			},
			_local_to_utc: function(local){
				return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
			},
			_zero_time: function(local){
				return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
			},
			_zero_utc_time: function(utc){
				return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
			},
	
			getDates: function(){
				return $.map(this.dates, this._utc_to_local);
			},
	
			getUTCDates: function(){
				return $.map(this.dates, function(d){
					return new Date(d);
				});
			},
	
			getDate: function(){
				return this._utc_to_local(this.getUTCDate());
			},
	
			getUTCDate: function(){
				return new Date(this.dates.get(-1));
			},
	
			setDates: function(){
				var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
				this.update.apply(this, args);
				this._trigger('changeDate');
				this.setValue();
			},
	
			setUTCDates: function(){
				var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
				this.update.apply(this, $.map(args, this._utc_to_local));
				this._trigger('changeDate');
				this.setValue();
			},
	
			setDate: alias('setDates'),
			setUTCDate: alias('setUTCDates'),
	
			setValue: function(){
				var formatted = this.getFormattedDate();
				if (!this.isInput){
					if (this.component){
						this.element.find('input').val(formatted).change();
					}
				}
				else {
					this.element.val(formatted).change();
				}
			},
	
			getFormattedDate: function(format){
				if (format === undefined)
					format = this.o.format;
	
				var lang = this.o.language;
				return $.map(this.dates, function(d){
					return DPGlobal.formatDate(d, format, lang);
				}).join(this.o.multidateSeparator);
			},
	
			setStartDate: function(startDate){
				this._process_options({startDate: startDate});
				this.update();
				this.updateNavArrows();
			},
	
			setEndDate: function(endDate){
				this._process_options({endDate: endDate});
				this.update();
				this.updateNavArrows();
			},
	
			setDaysOfWeekDisabled: function(daysOfWeekDisabled){
				this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
				this.update();
				this.updateNavArrows();
			},
	
			place: function(){
				if (this.isInline)
					return;
				var calendarWidth = this.picker.outerWidth(),
					calendarHeight = this.picker.outerHeight(),
					visualPadding = 10,
					windowWidth = $window.width(),
					windowHeight = $window.height(),
					scrollTop = $window.scrollTop();
	
				var zIndex = parseInt(this.element.parents().filter(function(){
						return $(this).css('z-index') !== 'auto';
					}).first().css('z-index'))+10;
				var offset = this.component ? this.component.parent().offset() : this.element.offset();
				var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
				var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
				var left = offset.left,
					top = offset.top;
	
				this.picker.removeClass(
					'datepicker-orient-top datepicker-orient-bottom '+
					'datepicker-orient-right datepicker-orient-left'
				);
	
				if (this.o.orientation.x !== 'auto'){
					this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
					if (this.o.orientation.x === 'right')
						left -= calendarWidth - width;
				}
				// auto x orientation is best-placement: if it crosses a window
				// edge, fudge it sideways
				else {
					// Default to left
					this.picker.addClass('datepicker-orient-left');
					if (offset.left < 0)
						left -= offset.left - visualPadding;
					else if (offset.left + calendarWidth > windowWidth)
						left = windowWidth - calendarWidth - visualPadding;
				}
	
				// auto y orientation is best-situation: top or bottom, no fudging,
				// decision based on which shows more of the calendar
				var yorient = this.o.orientation.y,
					top_overflow, bottom_overflow;
				if (yorient === 'auto'){
					top_overflow = -scrollTop + offset.top - calendarHeight;
					bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
					if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)
						yorient = 'top';
					else
						yorient = 'bottom';
				}
				this.picker.addClass('datepicker-orient-' + yorient);
				if (yorient === 'top')
					top += height;
				else
					top -= calendarHeight + parseInt(this.picker.css('padding-top'));
	
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			},
	
			_allow_update: true,
			update: function(){
				if (!this._allow_update)
					return;
	
				var oldDates = this.dates.copy(),
					dates = [],
					fromArgs = false;
				if (arguments.length){
					$.each(arguments, $.proxy(function(i, date){
						if (date instanceof Date)
							date = this._local_to_utc(date);
						dates.push(date);
					}, this));
					fromArgs = true;
				}
				else {
					dates = this.isInput
							? this.element.val()
							: this.element.data('date') || this.element.find('input').val();
					if (dates && this.o.multidate)
						dates = dates.split(this.o.multidateSeparator);
					else
						dates = [dates];
					delete this.element.data().date;
				}
	
				dates = $.map(dates, $.proxy(function(date){
					return DPGlobal.parseDate(date, this.o.format, this.o.language);
				}, this));
				dates = $.grep(dates, $.proxy(function(date){
					return (
						date < this.o.startDate ||
						date > this.o.endDate ||
						!date
					);
				}, this), true);
				this.dates.replace(dates);
	
				if (this.dates.length)
					this.viewDate = new Date(this.dates.get(-1));
				else if (this.viewDate < this.o.startDate)
					this.viewDate = new Date(this.o.startDate);
				else if (this.viewDate > this.o.endDate)
					this.viewDate = new Date(this.o.endDate);
	
				if (fromArgs){
					// setting date by clicking
					this.setValue();
				}
				else if (dates.length){
					// setting date by typing
					if (String(oldDates) !== String(this.dates))
						this._trigger('changeDate');
				}
				if (!this.dates.length && oldDates.length)
					this._trigger('clearDate');
	
				this.fill();
			},
	
			fillDow: function(){
				var dowCnt = this.o.weekStart,
					html = '<tr>';
				if (this.o.calendarWeeks){
					var cell = '<th class="cw">&nbsp;</th>';
					html += cell;
					this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
				}
				while (dowCnt < this.o.weekStart + 7){
					html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
				}
				html += '</tr>';
				this.picker.find('.datepicker-days thead').append(html);
			},
	
			fillMonths: function(){
				var html = '',
				i = 0;
				while (i < 12){
					html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';
				}
				this.picker.find('.datepicker-months td').html(html);
			},
	
			setRange: function(range){
				if (!range || !range.length)
					delete this.range;
				else
					this.range = $.map(range, function(d){
						return d.valueOf();
					});
				this.fill();
			},
	
			getClassNames: function(date){
				var cls = [],
					year = this.viewDate.getUTCFullYear(),
					month = this.viewDate.getUTCMonth(),
					today = new Date();
				if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
					cls.push('old');
				}
				else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
					cls.push('new');
				}
				if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
					cls.push('focused');
				// Compare internal UTC date with local today, not UTC today
				if (this.o.todayHighlight &&
					date.getUTCFullYear() === today.getFullYear() &&
					date.getUTCMonth() === today.getMonth() &&
					date.getUTCDate() === today.getDate()){
					cls.push('today');
				}
				if (this.dates.contains(date) !== -1)
					cls.push('active');
				if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||
					$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){
					cls.push('disabled');
				}
				if (this.range){
					if (date > this.range[0] && date < this.range[this.range.length-1]){
						cls.push('range');
					}
					if ($.inArray(date.valueOf(), this.range) !== -1){
						cls.push('selected');
					}
				}
				return cls;
			},
	
			fill: function(){
				var d = new Date(this.viewDate),
					year = d.getUTCFullYear(),
					month = d.getUTCMonth(),
					startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
					startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
					endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
					endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
					todaytxt = dates[this.o.language].today || dates['en'].today || '',
					cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
					tooltip;
				this.picker.find('.datepicker-days thead th.datepicker-switch')
							.text(dates[this.o.language].months[month]+' '+year);
				this.picker.find('tfoot th.today')
							.text(todaytxt)
							.toggle(this.o.todayBtn !== false);
				this.picker.find('tfoot th.clear')
							.text(cleartxt)
							.toggle(this.o.clearBtn !== false);
				this.updateNavArrows();
				this.fillMonths();
				var prevMonth = UTCDate(year, month-1, 28),
					day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
				prevMonth.setUTCDate(day);
				prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
				var nextMonth = new Date(prevMonth);
				nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
				nextMonth = nextMonth.valueOf();
				var html = [];
				var clsName;
				while (prevMonth.valueOf() < nextMonth){
					if (prevMonth.getUTCDay() === this.o.weekStart){
						html.push('<tr>');
						if (this.o.calendarWeeks){
							// ISO 8601: First week contains first thursday.
							// ISO also states week starts on Monday, but we can be more abstract here.
							var
								// Start of current week: based on weekstart/current date
								ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
								// Thursday of this week
								th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
								// First Thursday of year, year from thursday
								yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
								// Calendar week: ms between thursdays, div ms per day, div 7 days
								calWeek =  (th - yth) / 864e5 / 7 + 1;
							html.push('<td class="cw">'+ calWeek +'</td>');
	
						}
					}
					clsName = this.getClassNames(prevMonth);
					clsName.push('day');
	
					if (this.o.beforeShowDay !== $.noop){
						var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
						if (before === undefined)
							before = {};
						else if (typeof(before) === 'boolean')
							before = {enabled: before};
						else if (typeof(before) === 'string')
							before = {classes: before};
						if (before.enabled === false)
							clsName.push('disabled');
						if (before.classes)
							clsName = clsName.concat(before.classes.split(/\s+/));
						if (before.tooltip)
							tooltip = before.tooltip;
					}
	
					clsName = $.unique(clsName);
					html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
					if (prevMonth.getUTCDay() === this.o.weekEnd){
						html.push('</tr>');
					}
					prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
				}
				this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
	
				var months = this.picker.find('.datepicker-months')
							.find('th:eq(1)')
								.text(year)
								.end()
							.find('span').removeClass('active');
	
				$.each(this.dates, function(i, d){
					if (d.getUTCFullYear() === year)
						months.eq(d.getUTCMonth()).addClass('active');
				});
	
				if (year < startYear || year > endYear){
					months.addClass('disabled');
				}
				if (year === startYear){
					months.slice(0, startMonth).addClass('disabled');
				}
				if (year === endYear){
					months.slice(endMonth+1).addClass('disabled');
				}
	
				html = '';
				year = parseInt(year/10, 10) * 10;
				var yearCont = this.picker.find('.datepicker-years')
									.find('th:eq(1)')
										.text(year + '-' + (year + 9))
										.end()
									.find('td');
				year -= 1;
				var years = $.map(this.dates, function(d){
						return d.getUTCFullYear();
					}),
					classes;
				for (var i = -1; i < 11; i++){
					classes = ['year'];
					if (i === -1)
						classes.push('old');
					else if (i === 10)
						classes.push('new');
					if ($.inArray(year, years) !== -1)
						classes.push('active');
					if (year < startYear || year > endYear)
						classes.push('disabled');
					html += '<span class="' + classes.join(' ') + '">'+year+'</span>';
					year += 1;
				}
				yearCont.html(html);
			},
	
			updateNavArrows: function(){
				if (!this._allow_update)
					return;
	
				var d = new Date(this.viewDate),
					year = d.getUTCFullYear(),
					month = d.getUTCMonth();
				switch (this.viewMode){
					case 0:
						if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
							this.picker.find('.prev').css({visibility: 'hidden'});
						}
						else {
							this.picker.find('.prev').css({visibility: 'visible'});
						}
						if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
							this.picker.find('.next').css({visibility: 'hidden'});
						}
						else {
							this.picker.find('.next').css({visibility: 'visible'});
						}
						break;
					case 1:
					case 2:
						if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){
							this.picker.find('.prev').css({visibility: 'hidden'});
						}
						else {
							this.picker.find('.prev').css({visibility: 'visible'});
						}
						if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){
							this.picker.find('.next').css({visibility: 'hidden'});
						}
						else {
							this.picker.find('.next').css({visibility: 'visible'});
						}
						break;
				}
			},
	
			click: function(e){
				e.preventDefault();
				var target = $(e.target).closest('span, td, th'),
					year, month, day;
				if (target.length === 1){
					switch (target[0].nodeName.toLowerCase()){
						case 'th':
							switch (target[0].className){
								case 'datepicker-switch':
									this.showMode(1);
									break;
								case 'prev':
								case 'next':
									var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);
									switch (this.viewMode){
										case 0:
											this.viewDate = this.moveMonth(this.viewDate, dir);
											this._trigger('changeMonth', this.viewDate);
											break;
										case 1:
										case 2:
											this.viewDate = this.moveYear(this.viewDate, dir);
											if (this.viewMode === 1)
												this._trigger('changeYear', this.viewDate);
											break;
									}
									this.fill();
									break;
								case 'today':
									var date = new Date();
									date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
	
									this.showMode(-2);
									var which = this.o.todayBtn === 'linked' ? null : 'view';
									this._setDate(date, which);
									break;
								case 'clear':
									var element;
									if (this.isInput)
										element = this.element;
									else if (this.component)
										element = this.element.find('input');
									if (element)
										element.val("").change();
									this.update();
									this._trigger('changeDate');
									if (this.o.autoclose)
										this.hide();
									break;
							}
							break;
						case 'span':
							if (!target.is('.disabled')){
								this.viewDate.setUTCDate(1);
								if (target.is('.month')){
									day = 1;
									month = target.parent().find('span').index(target);
									year = this.viewDate.getUTCFullYear();
									this.viewDate.setUTCMonth(month);
									this._trigger('changeMonth', this.viewDate);
									if (this.o.minViewMode === 1){
										this._setDate(UTCDate(year, month, day));
									}
								}
								else {
									day = 1;
									month = 0;
									year = parseInt(target.text(), 10)||0;
									this.viewDate.setUTCFullYear(year);
									this._trigger('changeYear', this.viewDate);
									if (this.o.minViewMode === 2){
										this._setDate(UTCDate(year, month, day));
									}
								}
								this.showMode(-1);
								this.fill();
							}
							break;
						case 'td':
							if (target.is('.day') && !target.is('.disabled')){
								day = parseInt(target.text(), 10)||1;
								year = this.viewDate.getUTCFullYear();
								month = this.viewDate.getUTCMonth();
								if (target.is('.old')){
									if (month === 0){
										month = 11;
										year -= 1;
									}
									else {
										month -= 1;
									}
								}
								else if (target.is('.new')){
									if (month === 11){
										month = 0;
										year += 1;
									}
									else {
										month += 1;
									}
								}
								this._setDate(UTCDate(year, month, day));
							}
							break;
					}
				}
				if (this.picker.is(':visible') && this._focused_from){
					$(this._focused_from).focus();
				}
				delete this._focused_from;
			},
	
			_toggle_multidate: function(date){
				var ix = this.dates.contains(date);
				if (!date){
					this.dates.clear();
				}
				else if (ix !== -1){
					this.dates.remove(ix);
				}
				else {
					this.dates.push(date);
				}
				if (typeof this.o.multidate === 'number')
					while (this.dates.length > this.o.multidate)
						this.dates.remove(0);
			},
	
			_setDate: function(date, which){
				if (!which || which === 'date')
					this._toggle_multidate(date && new Date(date));
				if (!which || which  === 'view')
					this.viewDate = date && new Date(date);
	
				this.fill();
				this.setValue();
				this._trigger('changeDate');
				var element;
				if (this.isInput){
					element = this.element;
				}
				else if (this.component){
					element = this.element.find('input');
				}
				if (element){
					element.change();
				}
				if (this.o.autoclose && (!which || which === 'date')){
					this.hide();
				}
			},
	
			moveMonth: function(date, dir){
				if (!date)
					return undefined;
				if (!dir)
					return date;
				var new_date = new Date(date.valueOf()),
					day = new_date.getUTCDate(),
					month = new_date.getUTCMonth(),
					mag = Math.abs(dir),
					new_month, test;
				dir = dir > 0 ? 1 : -1;
				if (mag === 1){
					test = dir === -1
						// If going back one month, make sure month is not current month
						// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
						? function(){
							return new_date.getUTCMonth() === month;
						}
						// If going forward one month, make sure month is as expected
						// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
						: function(){
							return new_date.getUTCMonth() !== new_month;
						};
					new_month = month + dir;
					new_date.setUTCMonth(new_month);
					// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
					if (new_month < 0 || new_month > 11)
						new_month = (new_month + 12) % 12;
				}
				else {
					// For magnitudes >1, move one month at a time...
					for (var i=0; i < mag; i++)
						// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
						new_date = this.moveMonth(new_date, dir);
					// ...then reset the day, keeping it in the new month
					new_month = new_date.getUTCMonth();
					new_date.setUTCDate(day);
					test = function(){
						return new_month !== new_date.getUTCMonth();
					};
				}
				// Common date-resetting loop -- if date is beyond end of month, make it
				// end of month
				while (test()){
					new_date.setUTCDate(--day);
					new_date.setUTCMonth(new_month);
				}
				return new_date;
			},
	
			moveYear: function(date, dir){
				return this.moveMonth(date, dir*12);
			},
	
			dateWithinRange: function(date){
				return date >= this.o.startDate && date <= this.o.endDate;
			},
	
			keydown: function(e){
				if (this.picker.is(':not(:visible)')){
					if (e.keyCode === 27) // allow escape to hide and re-show picker
						this.show();
					return;
				}
				var dateChanged = false,
					dir, newDate, newViewDate,
					focusDate = this.focusDate || this.viewDate;
				switch (e.keyCode){
					case 27: // escape
						if (this.focusDate){
							this.focusDate = null;
							this.viewDate = this.dates.get(-1) || this.viewDate;
							this.fill();
						}
						else
							this.hide();
						e.preventDefault();
						break;
					case 37: // left
					case 39: // right
						if (!this.o.keyboardNavigation)
							break;
						dir = e.keyCode === 37 ? -1 : 1;
						if (e.ctrlKey){
							newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
							newViewDate = this.moveYear(focusDate, dir);
							this._trigger('changeYear', this.viewDate);
						}
						else if (e.shiftKey){
							newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
							newViewDate = this.moveMonth(focusDate, dir);
							this._trigger('changeMonth', this.viewDate);
						}
						else {
							newDate = new Date(this.dates.get(-1) || UTCToday());
							newDate.setUTCDate(newDate.getUTCDate() + dir);
							newViewDate = new Date(focusDate);
							newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
						}
						if (this.dateWithinRange(newDate)){
							this.focusDate = this.viewDate = newViewDate;
							this.setValue();
							this.fill();
							e.preventDefault();
						}
						break;
					case 38: // up
					case 40: // down
						if (!this.o.keyboardNavigation)
							break;
						dir = e.keyCode === 38 ? -1 : 1;
						if (e.ctrlKey){
							newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
							newViewDate = this.moveYear(focusDate, dir);
							this._trigger('changeYear', this.viewDate);
						}
						else if (e.shiftKey){
							newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
							newViewDate = this.moveMonth(focusDate, dir);
							this._trigger('changeMonth', this.viewDate);
						}
						else {
							newDate = new Date(this.dates.get(-1) || UTCToday());
							newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
							newViewDate = new Date(focusDate);
							newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
						}
						if (this.dateWithinRange(newDate)){
							this.focusDate = this.viewDate = newViewDate;
							this.setValue();
							this.fill();
							e.preventDefault();
						}
						break;
					case 32: // spacebar
						// Spacebar is used in manually typing dates in some formats.
						// As such, its behavior should not be hijacked.
						break;
					case 13: // enter
						focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
						this._toggle_multidate(focusDate);
						dateChanged = true;
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.setValue();
						this.fill();
						if (this.picker.is(':visible')){
							e.preventDefault();
							if (this.o.autoclose)
								this.hide();
						}
						break;
					case 9: // tab
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
						this.hide();
						break;
				}
				if (dateChanged){
					if (this.dates.length)
						this._trigger('changeDate');
					else
						this._trigger('clearDate');
					var element;
					if (this.isInput){
						element = this.element;
					}
					else if (this.component){
						element = this.element.find('input');
					}
					if (element){
						element.change();
					}
				}
			},
	
			showMode: function(dir){
				if (dir){
					this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
				}
				this.picker
					.find('>div')
					.hide()
					.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)
						.css('display', 'block');
				this.updateNavArrows();
			}
		};
	
		var DateRangePicker = function(element, options){
			this.element = $(element);
			this.inputs = $.map(options.inputs, function(i){
				return i.jquery ? i[0] : i;
			});
			delete options.inputs;
	
			$(this.inputs)
				.datepicker(options)
				.bind('changeDate', $.proxy(this.dateUpdated, this));
	
			this.pickers = $.map(this.inputs, function(i){
				return $(i).data('datepicker');
			});
			this.updateDates();
		};
		DateRangePicker.prototype = {
			updateDates: function(){
				this.dates = $.map(this.pickers, function(i){
					return i.getUTCDate();
				});
				this.updateRanges();
			},
			updateRanges: function(){
				var range = $.map(this.dates, function(d){
					return d.valueOf();
				});
				$.each(this.pickers, function(i, p){
					p.setRange(range);
				});
			},
			dateUpdated: function(e){
				// `this.updating` is a workaround for preventing infinite recursion
				// between `changeDate` triggering and `setUTCDate` calling.  Until
				// there is a better mechanism.
				if (this.updating)
					return;
				this.updating = true;
	
				var dp = $(e.target).data('datepicker'),
					new_date = dp.getUTCDate(),
					i = $.inArray(e.target, this.inputs),
					l = this.inputs.length;
				if (i === -1)
					return;
	
				$.each(this.pickers, function(i, p){
					if (!p.getUTCDate())
						p.setUTCDate(new_date);
				});
	
				if (new_date < this.dates[i]){
					// Date being moved earlier/left
					while (i >= 0 && new_date < this.dates[i]){
						this.pickers[i--].setUTCDate(new_date);
					}
				}
				else if (new_date > this.dates[i]){
					// Date being moved later/right
					while (i < l && new_date > this.dates[i]){
						this.pickers[i++].setUTCDate(new_date);
					}
				}
				this.updateDates();
	
				delete this.updating;
			},
			remove: function(){
				$.map(this.pickers, function(p){ p.remove(); });
				delete this.element.data().datepicker;
			}
		};
	
		function opts_from_el(el, prefix){
			// Derive options from element data-attrs
			var data = $(el).data(),
				out = {}, inkey,
				replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
			prefix = new RegExp('^' + prefix.toLowerCase());
			function re_lower(_,a){
				return a.toLowerCase();
			}
			for (var key in data)
				if (prefix.test(key)){
					inkey = key.replace(replace, re_lower);
					out[inkey] = data[key];
				}
			return out;
		}
	
		function opts_from_locale(lang){
			// Derive options from locale plugins
			var out = {};
			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					return;
			}
			var d = dates[lang];
			$.each(locale_opts, function(i,k){
				if (k in d)
					out[k] = d[k];
			});
			return out;
		}
	
		var old = $.fn.datepicker;
		$.fn.datepicker = function(option){
			var args = Array.apply(null, arguments);
			args.shift();
			var internal_return;
			this.each(function(){
				var $this = $(this),
					data = $this.data('datepicker'),
					options = typeof option === 'object' && option;
				if (!data){
					var elopts = opts_from_el(this, 'date'),
						// Preliminary otions
						xopts = $.extend({}, defaults, elopts, options),
						locopts = opts_from_locale(xopts.language),
						// Options priority: js args, data-attrs, locales, defaults
						opts = $.extend({}, defaults, locopts, elopts, options);
					if ($this.is('.input-daterange') || opts.inputs){
						var ropts = {
							inputs: opts.inputs || $this.find('input').toArray()
						};
						$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));
					}
					else {
						$this.data('datepicker', (data = new Datepicker(this, opts)));
					}
				}
				if (typeof option === 'string' && typeof data[option] === 'function'){
					internal_return = data[option].apply(data, args);
					if (internal_return !== undefined)
						return false;
				}
			});
			if (internal_return !== undefined)
				return internal_return;
			else
				return this;
		};
	
		var defaults = $.fn.datepicker.defaults = {
			autoclose: false,
			beforeShowDay: $.noop,
			calendarWeeks: false,
			clearBtn: false,
			daysOfWeekDisabled: [],
			endDate: Infinity,
			forceParse: true,
			format: 'mm/dd/yyyy',
			keyboardNavigation: true,
			language: 'en',
			minViewMode: 0,
			multidate: false,
			multidateSeparator: ',',
			orientation: "auto",
			rtl: false,
			startDate: -Infinity,
			startView: 0,
			todayBtn: false,
			todayHighlight: false,
			weekStart: 0
		};
		var locale_opts = $.fn.datepicker.locale_opts = [
			'format',
			'rtl',
			'weekStart'
		];
		$.fn.datepicker.Constructor = Datepicker;
		var dates = $.fn.datepicker.dates = {
			en: {
				days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
				daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				today: "Today",
				clear: "Clear"
			}
		};
	
		var DPGlobal = {
			modes: [
				{
					clsName: 'days',
					navFnc: 'Month',
					navStep: 1
				},
				{
					clsName: 'months',
					navFnc: 'FullYear',
					navStep: 1
				},
				{
					clsName: 'years',
					navFnc: 'FullYear',
					navStep: 10
			}],
			isLeapYear: function(year){
				return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
			},
			getDaysInMonth: function(year, month){
				return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
			},
			validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
			nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
			parseFormat: function(format){
				// IE treats \0 as a string end in inputs (truncating the value),
				// so it's a bad format delimiter, anyway
				var separators = format.replace(this.validParts, '\0').split('\0'),
					parts = format.match(this.validParts);
				if (!separators || !separators.length || !parts || parts.length === 0){
					throw new Error("Invalid date format.");
				}
				return {separators: separators, parts: parts};
			},
			parseDate: function(date, format, language){
				if (!date)
					return undefined;
				if (date instanceof Date)
					return date;
				if (typeof format === 'string')
					format = DPGlobal.parseFormat(format);
				var part_re = /([\-+]\d+)([dmwy])/,
					parts = date.match(/([\-+]\d+)([dmwy])/g),
					part, dir, i;
				if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
					date = new Date();
					for (i=0; i < parts.length; i++){
						part = part_re.exec(parts[i]);
						dir = parseInt(part[1]);
						switch (part[2]){
							case 'd':
								date.setUTCDate(date.getUTCDate() + dir);
								break;
							case 'm':
								date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
								break;
							case 'w':
								date.setUTCDate(date.getUTCDate() + dir * 7);
								break;
							case 'y':
								date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
								break;
						}
					}
					return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
				}
				parts = date && date.match(this.nonpunctuation) || [];
				date = new Date();
				var parsed = {},
					setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
					setters_map = {
						yyyy: function(d,v){
							return d.setUTCFullYear(v);
						},
						yy: function(d,v){
							return d.setUTCFullYear(2000+v);
						},
						m: function(d,v){
							if (isNaN(d))
								return d;
							v -= 1;
							while (v < 0) v += 12;
							v %= 12;
							d.setUTCMonth(v);
							while (d.getUTCMonth() !== v)
								d.setUTCDate(d.getUTCDate()-1);
							return d;
						},
						d: function(d,v){
							return d.setUTCDate(v);
						}
					},
					val, filtered;
				setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
				setters_map['dd'] = setters_map['d'];
				date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
				var fparts = format.parts.slice();
				// Remove noop parts
				if (parts.length !== fparts.length){
					fparts = $(fparts).filter(function(i,p){
						return $.inArray(p, setters_order) !== -1;
					}).toArray();
				}
				// Process remainder
				function match_part(){
					var m = this.slice(0, parts[i].length),
						p = parts[i].slice(0, m.length);
					return m === p;
				}
				if (parts.length === fparts.length){
					var cnt;
					for (i=0, cnt = fparts.length; i < cnt; i++){
						val = parseInt(parts[i], 10);
						part = fparts[i];
						if (isNaN(val)){
							switch (part){
								case 'MM':
									filtered = $(dates[language].months).filter(match_part);
									val = $.inArray(filtered[0], dates[language].months) + 1;
									break;
								case 'M':
									filtered = $(dates[language].monthsShort).filter(match_part);
									val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
									break;
							}
						}
						parsed[part] = val;
					}
					var _date, s;
					for (i=0; i < setters_order.length; i++){
						s = setters_order[i];
						if (s in parsed && !isNaN(parsed[s])){
							_date = new Date(date);
							setters_map[s](_date, parsed[s]);
							if (!isNaN(_date))
								date = _date;
						}
					}
				}
				return date;
			},
			formatDate: function(date, format, language){
				if (!date)
					return '';
				if (typeof format === 'string')
					format = DPGlobal.parseFormat(format);
				var val = {
					d: date.getUTCDate(),
					D: dates[language].daysShort[date.getUTCDay()],
					DD: dates[language].days[date.getUTCDay()],
					m: date.getUTCMonth() + 1,
					M: dates[language].monthsShort[date.getUTCMonth()],
					MM: dates[language].months[date.getUTCMonth()],
					yy: date.getUTCFullYear().toString().substring(2),
					yyyy: date.getUTCFullYear()
				};
				val.dd = (val.d < 10 ? '0' : '') + val.d;
				val.mm = (val.m < 10 ? '0' : '') + val.m;
				date = [];
				var seps = $.extend([], format.separators);
				for (var i=0, cnt = format.parts.length; i <= cnt; i++){
					if (seps.length)
						date.push(seps.shift());
					date.push(val[format.parts[i]]);
				}
				return date.join('');
			},
			headTemplate: '<thead>'+
								'<tr>'+
									'<th class="prev">&laquo;</th>'+
									'<th colspan="5" class="datepicker-switch"></th>'+
									'<th class="next">&raquo;</th>'+
								'</tr>'+
							'</thead>',
			contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
			footTemplate: '<tfoot>'+
								'<tr>'+
									'<th colspan="7" class="today"></th>'+
								'</tr>'+
								'<tr>'+
									'<th colspan="7" class="clear"></th>'+
								'</tr>'+
							'</tfoot>'
		};
		DPGlobal.template = '<div class="datepicker">'+
								'<div class="datepicker-days">'+
									'<table class="table table-condensed">'+
										DPGlobal.headTemplate+
										'<tbody></tbody>'+
										DPGlobal.footTemplate+
									'</table>'+
								'</div>'+
								'<div class="datepicker-months">'+
									'<table class="table table-condensed">'+
										DPGlobal.headTemplate+
										DPGlobal.contTemplate+
										DPGlobal.footTemplate+
									'</table>'+
								'</div>'+
								'<div class="datepicker-years">'+
									'<table class="table table-condensed">'+
										DPGlobal.headTemplate+
										DPGlobal.contTemplate+
										DPGlobal.footTemplate+
									'</table>'+
								'</div>'+
							'</div>';
	
		$.fn.datepicker.DPGlobal = DPGlobal;
	
	
		/* DATEPICKER NO CONFLICT
		* =================== */
	
		$.fn.datepicker.noConflict = function(){
			$.fn.datepicker = old;
			return this;
		};
	
	
		/* DATEPICKER DATA-API
		* ================== */
	
		$(document).on(
			'focus.datepicker.data-api click.datepicker.data-api',
			'[data-provide="datepicker"]',
			function(e){
				var $this = $(this);
				if ($this.data('datepicker'))
					return;
				e.preventDefault();
				// component click requires us to explicitly show it
				$this.datepicker('show');
			}
		);
		$(function(){
			$('[data-provide="datepicker-inline"]').datepicker();
		});
	
	}(window.jQuery));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(25)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./upload-statistics.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./upload-statistics.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".paperManage_uploadStatistics .crumb {\n  color: #347897;\n  height: 60px;\n  line-height: 60px;\n  border-bottom: 2px solid #ccd4d7;\n  padding-left: 20px;\n}\n.paperManage_uploadStatistics .filter {\n  text-align: center;\n  margin: 15px 20px 0;\n}\n.paperManage_uploadStatistics .filter > div {\n  line-height: 50px;\n}\n.paperManage_uploadStatistics .filter .search {\n  cursor: pointer;\n  display: inline-block;\n  border-radius: 5px;\n  background: #f29a76;\n  color: #ffffff;\n  height: 30px;\n  line-height: 30px;\n  width: 100px;\n}\n.paperManage_uploadStatistics .filter .search .search-bg {\n  vertical-align: middle;\n  margin-right: 10px;\n  display: inline-block;\n  height: 18px;\n  width: 18px;\n  background: url(" + __webpack_require__(29) + ") -60px -130px no-repeat;\n}\n.paperManage_uploadStatistics .filter .mlr5 {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.paperManage_uploadStatistics .filter .ml5r15 {\n  margin-left: 5px;\n  margin-right: 15px;\n}\n.paperManage_uploadStatistics .filter .f12 {\n  font-size: 12px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.paperManage_uploadStatistics .filter .mr15 {\n  margin-right: 15px;\n}\n#wrapper .paperManage_uploadStatistics .filter .date-picker {\n  width: 100px;\n}\n\n/*# sourceMappingURL=maps/upload-statistics.css.map */\n", ""]);
	
	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "56bed630e83a75bd9f705e2b7bafc632.png";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"paperManage_uploadStatistics\">\n    <crumb modlename=\"试卷管理\" pagename=\"上传统计\"></crumb>\n\n    <div class=\"filter form-inline\">\n        <div class=\"time\">\n            <div class=\"form-group\">\n                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp年份\n                <div class=\"input-group date ml5r15\">\n                    <div class=\"input-group-addon\">\n                        <i class=\"fa fa-calendar fa-0.5x\"></i>\n                    </div>\n                    <input v-model=\"bigTime\" type=\"text\" class=\"input form-control pull-right Wdate date-picker\"/>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                上传时间\n                <div class=\"input-group date mlr5\">\n                    <div class=\"input-group-addon\">\n                        <i class=\"fa fa-calendar fa-0.5x\"></i>\n                    </div>\n                    <input v-model=\"startTime\" type=\"text\" class=\"form-control pull-right Wdate input date-picker\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                到\n                <div class=\"input-group date ml5r15\">\n                    <div class=\"input-group-addon\">\n                        <i class=\"fa fa-calendar fa-0.5x\"></i>\n                    </div>\n                    <input v-model=\"endTime\" type=\"text\" class=\"form-control pull-right Wdate input date-picker\"/>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                审核时间\n                <div class=\"input-group date mlr5\">\n                    <div class=\"input-group-addon\">\n                        <i class=\"fa fa-calendar fa-0.5x\"></i>\n                    </div>\n                    <input v-model=\"sTime\" type=\"text\" class=\"form-control pull-right Wdate input date-picker\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                到\n                <div class=\"input-group date ml5r15\">\n                    <div class=\"input-group-addon\">\n                        <i class=\"fa fa-calendar fa-0.5x\"></i>\n                    </div>\n                    <input v-model=\"eTime\" type=\"text\" class=\"form-control pull-right Wdate input date-picker\"/>\n                </div>\n            </div>\n        </div>\n        <div class=\"second\">\n            科目\n            <select class=\"subject select ml5r15\" v-model=\"subject\">\n                <option selected=\"\">语文</option>\n                <option>数学</option>\n                <option>英语</option>\n            </select>\n            年级\n            <select class=\"grade select ml5r15\" v-model=\"grade\">\n                <option selected=\"\">全部</option>\n                <option>一年级</option>\n                <option>二年级</option>\n                <option>三年级</option>\n            </select>\n            上传人\n            <input style=\"width: 215px;\" type=\"text\" class=\"input ml5r15 f12\" v-model=\"person\" placeholder=\"请输入上传人的名称\">\n\n            地区\n            <are></are>\n        </div>\n        <div class=\"paper\">\n            状态\n            <select class=\"status select ml5r15\" v-model=\"status\">\n                <option selected=\"\">全部</option>\n                <option>待审核</option>\n            </select>\n            试卷类型\n            <select class=\"select ml5r15\" v-model=\"type\">\n                <option selected=\"\">全部</option>\n                <option>期中</option>\n                <option>期末</option>\n            </select>\n            试卷名称\n            <input style=\"width: 173px;\" class=\"input ml5r15 f12\" placeholder=\"请输入要查询的试卷名称\" v-model=\"name\">\n            试卷ID\n            <input style=\"width: 207px;\" class=\"input ml5r15 f12\" placeholder=\"请输入要查询的试卷ID\" v-model=\"id\">\n            <div class=\"search\" @click=\"search\">\n                <span class=\"search-bg\"></span>\n                <span>查询</span>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXBlci91cGxvYWQtc3RhdGlzdGljcy52dWUiLCJ3ZWJwYWNrOi8vL3VwbG9hZC1zdGF0aXN0aWNzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXBlci9hcmVhLnZ1ZSIsIndlYnBhY2s6Ly8vYXJlYS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFwZXIvYXJlYS52dWU/OWIwNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGVudEhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRIZWFkZXIudnVlPzNlMzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0NvbnRlbnRIZWFkZXIudnVlPzdiZjAiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy9Db250ZW50SGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGVudEhlYWRlci52dWU/ZjkwNSIsIndlYnBhY2s6Ly8vLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2RhdGVwaWNrZXIzLmNzcz9hMjQzIiwid2VicGFjazovLy8uL2J1bmRsZS9wbHVnaW5zL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcjMuY3NzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmpzIiwid2VicGFjazovLy8uL2J1bmRsZS9jc3MvdXBsb2FkLXN0YXRpc3RpY3MuY3NzP2VjYzUiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL2Nzcy91cGxvYWQtc3RhdGlzdGljcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL2ltZy9pY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXBlci91cGxvYWQtc3RhdGlzdGljcy52dWU/YzNjZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUErRjtBQUMvRjtBQUNBLGFBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDLEk7Ozs7Ozs7O0FDaUZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7ZUFFQTsyQkFDQTs7c0JBRUE7d0JBQ0E7c0JBQ0E7b0JBQ0E7b0JBQ0E7cUJBQ0E7c0JBQ0E7b0JBQ0E7cUJBQ0E7bUJBQ0E7bUJBQ0E7aUJBRUE7QUFiQTtBQWNBOztnQkFFQTtrQkFFQTtBQUhBOzZCQUlBO3VCQUNBOzs0QkFFQTsyQkFDQTsyQkFDQTt5QkFFQTtBQUxBO0FBTUE7QUFDQTs7bUNBSUEsQ0FFQTtBQUxBO0FBaENBLEc7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUErRjtBQUMvRjtBQUNBLGFBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDLEk7Ozs7Ozs7O0FDVEQ7QUFDQTtlQUVBOzJCQUNBOzs7eUJBTUE7QUFIQSxjQURBOzt5QkFTQTtBQUhBLGNBREE7O3lCQVVBO0FBSkEsY0FEQTtBQVhBO0FBaUJBOzZCQVNBLENBQ0E7O3FDQVlBLENBQ0E7MkNBVUEsQ0FFQTtBQXhCQTtBQS9CQSxHOzs7Ozs7QUNmQSx1SEFBc0gsYUFBYSxxSEFBcUgsYUFBYSx5RkFBeUYsYUFBYSx3Qjs7Ozs7O0FDQTNXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBK0Y7QUFDL0Y7QUFDQSxhQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQyxJOzs7Ozs7QUN2QkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBMEY7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLGdFQUErRCx1Q0FBdUMsS0FBSyxrQkFBa0IsK0JBQStCLHVDQUF1QyxHQUFHLFVBQVUsa0hBQWtILEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLDJJQUEySSxXQUFXLHlCQUF5QixVQUFVLDRGQUE0RixTQUFTLG9DQUFvQyxXQUFXLGlEQUFpRCxVQUFVLG1GQUFtRiwyQ0FBMkMsU0FBUyxzQkFBc0IsbUNBQW1DLDJDQUEyQyxPQUFPLGdEQUFnRCxtQkFBbUIsMkJBQTJCLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDBCQUEwQiw2QkFBNkIsY0FBYyx5QkFBeUIsYUFBYSxhQUFhLDhDQUE4Qzs7QUFFajBDOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EseUNBQXdDLGdCQUFnQjtBQUN4RCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0EsbUJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxTQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBLGlDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNqTUE7OzZDQUdBOzRDQUNBOzJDQUVBO0FBSkE7aUJBT0E7O0FBUkEsRzs7Ozs7O0FDdkJBLDhFQUE2RSxXQUFXLG1CQUFtQixVQUFVLDBFQUEwRSxTQUFTLG9DQUFvQyxXQUFXLDJDQUEyQyxVQUFVLGdDOzs7Ozs7QUNBNVM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEU7Ozs7OztBQ3BCQTtBQUNBOzs7QUFHQTtBQUNBLG9RQUFtUSxtQkFBbUIseUJBQXlCLHFCQUFxQixjQUFjLDhDQUE4QyxPQUFPLE9BQU8sd0JBQXdCLGtCQUFrQixLQUFLLGdDQUFnQyxxQkFBcUIsS0FBSyxpREFBaUQsbUJBQW1CLEtBQUssMEJBQTBCLGFBQWEsY0FBYyxLQUFLLGlDQUFpQyxrQkFBa0IsNEJBQTRCLHlDQUF5QywwQ0FBMEMsb0NBQW9DLG9CQUFvQiw4Q0FBOEMseUJBQXlCLEtBQUssZ0NBQWdDLGtCQUFrQiw0QkFBNEIseUNBQXlDLDBDQUEwQyxvQ0FBb0Msb0JBQW9CLHlCQUF5QixLQUFLLHdEQUF3RCxnQkFBZ0IsS0FBSyx1REFBdUQsZ0JBQWdCLEtBQUsseURBQXlELGlCQUFpQixLQUFLLHdEQUF3RCxpQkFBaUIsS0FBSyx1REFBdUQsZ0JBQWdCLEtBQUssc0RBQXNELGdCQUFnQixLQUFLLDBEQUEwRCxtQkFBbUIsdUJBQXVCLGlDQUFpQyxLQUFLLHlEQUF5RCxtQkFBbUIsdUJBQXVCLGlDQUFpQyxLQUFLLHVCQUF1QixvQkFBb0IsS0FBSywwQ0FBMEMscUJBQXFCLEtBQUssOENBQThDLHFCQUFxQixLQUFLLDRDQUE0QyxxQkFBcUIsS0FBSyx1QkFBdUIsZ0JBQWdCLGtDQUFrQyxnQ0FBZ0MsK0JBQStCLDZCQUE2Qiw0QkFBNEIsd0JBQXdCLEtBQUsseURBQXlELHlCQUF5QixrQkFBa0IsbUJBQW1CLHlCQUF5QixtQkFBbUIsS0FBSyx1RkFBdUYsb0NBQW9DLEtBQUssK0VBQStFLGtDQUFrQyxzQkFBc0IsS0FBSyxpRUFBaUUsa0JBQWtCLEtBQUssaUZBQWlGLHVCQUF1QixrQkFBa0Isc0JBQXNCLEtBQUssdUtBQXVLLHFCQUFxQixrQ0FBa0MsNEJBQTRCLEtBQUssKy9CQUErL0IscUJBQXFCLGtDQUFrQyw0QkFBNEIsS0FBSyxtb0JBQW1vQiw2QkFBNkIsS0FBSywyK0dBQTIrRyxrQ0FBa0MsNEJBQTRCLEtBQUssK0NBQStDLGtCQUFrQixLQUFLLGdEQUFnRCxrQkFBa0IsS0FBSyx1S0FBdUssa0NBQWtDLHVCQUF1QixLQUFLLCtMQUErTCxxQkFBcUIsa0NBQWtDLDRCQUE0Qix1QkFBdUIsS0FBSyx1bkNBQXVuQyxxQkFBcUIsa0NBQWtDLDRCQUE0QixLQUFLLDJzQkFBMnNCLDZCQUE2QixLQUFLLG0xSEFBbTFILGtDQUFrQyw0QkFBNEIsS0FBSyxtTEFBbUwscUJBQXFCLGtDQUFrQyw0QkFBNEIsZ0RBQWdELEtBQUssMmpDQUEyakMscUJBQXFCLGtDQUFrQyw0QkFBNEIsS0FBSyx1cUJBQXVxQiw2QkFBNkIsS0FBSywrcEhBQStwSCxrQ0FBa0MsNEJBQTRCLEtBQUssMktBQTJLLHFCQUFxQixrQ0FBa0MsNEJBQTRCLGdEQUFnRCxLQUFLLG1oQ0FBbWhDLHFCQUFxQixrQ0FBa0MsNEJBQTRCLEtBQUssK29CQUErb0IsNkJBQTZCLEtBQUssdWlIQUF1aUgsZ0NBQWdDLDRCQUE0QixLQUFLLGtDQUFrQyxxQkFBcUIsaUJBQWlCLG1CQUFtQix3QkFBd0Isa0JBQWtCLGlCQUFpQixzQkFBc0IseUJBQXlCLEtBQUssd0NBQXdDLGtDQUFrQyxLQUFLLDJGQUEyRix1QkFBdUIsa0JBQWtCLHNCQUFzQixLQUFLLCtMQUErTCxxQkFBcUIsZ0NBQWdDLDRCQUE0QixnREFBZ0QsS0FBSyx1bkNBQXVuQyxxQkFBcUIsZ0NBQWdDLDRCQUE0QixLQUFLLDJzQkFBMnNCLDZCQUE2QixLQUFLLG0xSEFBbTFILGdDQUFnQyw0QkFBNEIsS0FBSywyRUFBMkUsa0JBQWtCLEtBQUssc0NBQXNDLG1CQUFtQixLQUFLLHFFQUFxRSxzQkFBc0IsS0FBSyxpRkFBaUYsa0NBQWtDLEtBQUsscUJBQXFCLHNCQUFzQixrQkFBa0IsMkJBQTJCLDZCQUE2QixLQUFLLDRDQUE0QyxzQkFBc0Isb0NBQW9DLEtBQUssNENBQTRDLHNCQUFzQixrQkFBa0IsbUJBQW1CLEtBQUssNEJBQTRCLHlCQUF5QixLQUFLLHdDQUF3QyxpQ0FBaUMsS0FBSyx1Q0FBdUMsaUNBQWlDLEtBQUsseUNBQXlDLGtCQUFrQixzQkFBc0IsdUJBQXVCLDBCQUEwQiwrQkFBK0IseUJBQXlCLGdDQUFnQyw2QkFBNkIsZ0NBQWdDLDRCQUE0QiwwQkFBMEIsd0JBQXdCLHlCQUF5QixLQUFLLCtCQUErQix5QkFBeUIsZ0JBQWdCLGNBQWMsb0JBQW9CLGtCQUFrQixvQkFBb0IsdUJBQXVCLHVCQUF1QixnQ0FBZ0MsNkJBQTZCLDJDQUEyQyx5QkFBeUIsd0RBQXdELHFEQUFxRCxnREFBZ0QsMkNBQTJDLG9DQUFvQyxtQ0FBbUMsK0JBQStCLGdDQUFnQyxxQkFBcUIsb0VBQW9FLHNCQUFzQiwrQkFBK0IsS0FBSyxtRUFBbUUsdUJBQXVCLEtBQUs7O0FBRTl5bUM7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0EsbUJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxTQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBLGlDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDs7QUFFQSw4QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7O0FBR0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCO0FBQ0EsZ0NBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLHFCQUFvQjtBQUNwQjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLDZCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTixNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTixNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEtBQUk7QUFDSixJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHOztBQUVIO0FBQ0EsMkJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLDJCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSwyQkFBMEIsdUNBQXVDO0FBQ2pFO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxvQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBLHNDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBLHNDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBLHNDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBLHNDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBLHNDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBLHNDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQSxvQ0FBbUMsWUFBWSxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEI7QUFDQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLCtDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLEVBQUM7Ozs7Ozs7QUN0b0REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxpRUFBZ0UsbUJBQW1CLGlCQUFpQixzQkFBc0IscUNBQXFDLHVCQUF1QixHQUFHLHlDQUF5Qyx1QkFBdUIsd0JBQXdCLEdBQUcsK0NBQStDLHNCQUFzQixHQUFHLGlEQUFpRCxvQkFBb0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLGlCQUFpQixzQkFBc0IsaUJBQWlCLEdBQUcsNERBQTRELDJCQUEyQix1QkFBdUIsMEJBQTBCLGlCQUFpQixnQkFBZ0IsNEVBQXlGLEdBQUcsK0NBQStDLHFCQUFxQixzQkFBc0IsR0FBRyxpREFBaUQscUJBQXFCLHVCQUF1QixHQUFHLDhDQUE4QyxvQkFBb0Isc0JBQXNCLHVCQUF1QixHQUFHLCtDQUErQyx1QkFBdUIsR0FBRywrREFBK0QsaUJBQWlCLEdBQUc7O0FBRXh3Qzs7Ozs7OztBQ1BBLGlGOzs7Ozs7QUNBQSw0N0ZBQTI3Riw0cEJBQTRwQix1SUFBdUksK1EiLCJmaWxlIjoiNS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX3Z1ZV9zY3JpcHRfXywgX192dWVfdGVtcGxhdGVfX1xuX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWVzMjAxNSZwbHVnaW5zW109dHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3VwbG9hZC1zdGF0aXN0aWNzLnZ1ZVwiKVxuaWYgKF9fdnVlX3NjcmlwdF9fICYmXG4gICAgX192dWVfc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fdnVlX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIlt2dWUtbG9hZGVyXSBzcmNcXFxcY29tcG9uZW50c1xcXFxwYXBlclxcXFx1cGxvYWQtc3RhdGlzdGljcy52dWU6IG5hbWVkIGV4cG9ydHMgaW4gKi52dWUgZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1odG1sLWxvYWRlciEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91cGxvYWQtc3RhdGlzdGljcy52dWVcIilcbm1vZHVsZS5leHBvcnRzID0gX192dWVfc2NyaXB0X18gfHwge31cbmlmIChtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHRcbmlmIChfX3Z1ZV90ZW1wbGF0ZV9fKSB7XG4odHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcImZ1bmN0aW9uXCIgPyAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyB8fCAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyA9IHt9KSkgOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUgPSBfX3Z1ZV90ZW1wbGF0ZV9fXG59XG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7ICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgdmFyIGlkID0gXCJfdi02OWNiMDVkNC91cGxvYWQtc3RhdGlzdGljcy52dWVcIlxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZS5leHBvcnRzKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS51cGRhdGUoaWQsIG1vZHVsZS5leHBvcnRzLCBfX3Z1ZV90ZW1wbGF0ZV9fKVxuICB9XG59KSgpfVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9wYXBlci91cGxvYWQtc3RhdGlzdGljcy52dWVcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIiwiPHRlbXBsYXRlIGlkPVwidHBsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljc1wiPlxyXG4gICAgICAgIDxjcnVtYiBtb2RsZW5hbWU9XCLor5XljbfnrqHnkIZcIiBwYWdlbmFtZT1cIuS4iuS8oOe7n+iuoVwiPjwvY3J1bWI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXIgZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3AmbmJzcCZuYnNwJm5ic3AmbmJzcCZuYnNw5bm05Lu9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRhdGUgbWw1cjE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhciBmYS0wLjV4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJiaWdUaW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IGZvcm0tY29udHJvbCBwdWxsLXJpZ2h0IFdkYXRlIGRhdGUtcGlja2VyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICDkuIrkvKDml7bpl7RcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZGF0ZSBtbHI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhciBmYS0wLjV4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJzdGFydFRpbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHB1bGwtcmlnaHQgV2RhdGUgaW5wdXQgZGF0ZS1waWNrZXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg5YiwXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRhdGUgbWw1cjE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhciBmYS0wLjV4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJlbmRUaW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBwdWxsLXJpZ2h0IFdkYXRlIGlucHV0IGRhdGUtcGlja2VyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICDlrqHmoLjml7bpl7RcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZGF0ZSBtbHI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhciBmYS0wLjV4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJzVGltZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodCBXZGF0ZSBpbnB1dCBkYXRlLXBpY2tlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICDliLBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZGF0ZSBtbDVyMTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyIGZhLTAuNXhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImVUaW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBwdWxsLXJpZ2h0IFdkYXRlIGlucHV0IGRhdGUtcGlja2VyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kXCI+XHJcbiAgICAgICAgICAgICAgICDnp5Hnm65cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJzdWJqZWN0IHNlbGVjdCBtbDVyMTVcIiB2LW1vZGVsPVwic3ViamVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7or63mloc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPuaVsOWtpjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+6Iux6K+tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIOW5tOe6p1xyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImdyYWRlIHNlbGVjdCBtbDVyMTVcIiB2LW1vZGVsPVwiZ3JhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+5YWo6YOoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7kuIDlubTnuqc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPuS6jOW5tOe6pzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+5LiJ5bm057qnPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIOS4iuS8oOS6ulxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPVwid2lkdGg6IDIxNXB4O1wiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBtbDVyMTUgZjEyXCIgdi1tb2RlbD1cInBlcnNvblwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5LiK5Lyg5Lq655qE5ZCN56ewXCI+XHJcblxyXG4gICAgICAgICAgICAgICAg5Zyw5Yy6XHJcbiAgICAgICAgICAgICAgICA8YXJlPjwvYXJlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyXCI+XHJcbiAgICAgICAgICAgICAgICDnirbmgIFcclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJzdGF0dXMgc2VsZWN0IG1sNXIxNVwiIHYtbW9kZWw9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+5YWo6YOoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7lvoXlrqHmoLg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAg6K+V5Y2357G75Z6LXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0IG1sNXIxNVwiIHYtbW9kZWw9XCJ0eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPuWFqOmDqDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+5pyf5LitPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7mnJ/mnKs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAg6K+V5Y235ZCN56ewXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9XCJ3aWR0aDogMTczcHg7XCIgY2xhc3M9XCJpbnB1dCBtbDVyMTUgZjEyXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXopoHmn6Xor6LnmoTor5XljbflkI3np7BcIiB2LW1vZGVsPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAg6K+V5Y23SURcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT1cIndpZHRoOiAyMDdweDtcIiBjbGFzcz1cImlucHV0IG1sNXIxNSBmMTJcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeimgeafpeivoueahOivleWNt0lEXCIgdi1tb2RlbD1cImlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoXCIgQGNsaWNrPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWFyY2gtYmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+5p+l6K+iPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48IS0tIHYt55qE5YC85b+F6aG75piv6KGo6L6+5byP5LiN6IO95piv5bim6Kej5p6Q55qE6YKj56eNe3t9fSAgLS0+XHJcbjwhLS3or7fmsYJhamF45pWw5o2uLS0+XHJcblxyXG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cclxuICAgIHZhciBhcmVhID0gcmVxdWlyZShcInBhcGVyL2FyZWEudnVlXCIpO1xyXG4gICAgdmFyIGNydW1iVnVlPXJlcXVpcmUoXCJjb21tb24vQ29udGVudEhlYWRlci52dWVcIik7XHJcbiAgICByZXF1aXJlKCcuLi8uLi8uLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2RhdGVwaWNrZXIzLmNzcycpO1xyXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vYnVuZGxlL3BsdWdpbnMvZGF0ZXBpY2tlci9ib290c3RyYXAtZGF0ZXBpY2tlci5qcycpO1xyXG4gICAgcmVxdWlyZShcIi4uLy4uLy4uL2J1bmRsZS9jc3MvdXBsb2FkLXN0YXRpc3RpY3MuY3NzXCIpO1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnI3RwbCcsXHJcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYmlnVGltZTonJyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTonJyxcclxuICAgICAgICAgICAgICAgIGVuZFRpbWU6JycsXHJcbiAgICAgICAgICAgICAgICBzVGltZTogJycsXHJcbiAgICAgICAgICAgICAgICBlVGltZTogJycsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6JycsXHJcbiAgICAgICAgICAgICAgICBzdWJqZWN0OicnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6JycsXHJcbiAgICAgICAgICAgICAgICBwZXJzb246JycsXHJcbiAgICAgICAgICAgICAgICB0eXBlOicnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTonJyxcclxuICAgICAgICAgICAgICAgIGlkOicnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6e1xyXG4gICAgICAgICAgICBcImFyZVwiOiBhcmVhLFxyXG4gICAgICAgICAgICBcImNydW1iXCI6IGNydW1iVnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkeTpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQoXCIuV2RhdGVcIikuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyQnRuOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZGF5QnRuOiAnbGlua2VkJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwieXl5eS1tbS1kZFwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgc2VhcmNoOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgLy/luKbkuIrlj4LmlbBcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy4kY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogdXBsb2FkLXN0YXRpc3RpY3MudnVlP2ExZGEyZTkyXG4gKiovIiwidmFyIF9fdnVlX3NjcmlwdF9fLCBfX3Z1ZV90ZW1wbGF0ZV9fXG5fX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZXMyMDE1JnBsdWdpbnNbXT10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXJlYS52dWVcIilcbmlmIChfX3Z1ZV9zY3JpcHRfXyAmJlxuICAgIF9fdnVlX3NjcmlwdF9fLl9fZXNNb2R1bGUgJiZcbiAgICBPYmplY3Qua2V5cyhfX3Z1ZV9zY3JpcHRfXykubGVuZ3RoID4gMSkge1xuICBjb25zb2xlLndhcm4oXCJbdnVlLWxvYWRlcl0gc3JjXFxcXGNvbXBvbmVudHNcXFxccGFwZXJcXFxcYXJlYS52dWU6IG5hbWVkIGV4cG9ydHMgaW4gKi52dWUgZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1odG1sLWxvYWRlciEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcmVhLnZ1ZVwiKVxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9zY3JpcHRfXyB8fCB7fVxuaWYgKG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdFxuaWYgKF9fdnVlX3RlbXBsYXRlX18pIHtcbih0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwiZnVuY3Rpb25cIiA/IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zIHx8IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zID0ge30pKSA6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSA9IF9fdnVlX3RlbXBsYXRlX19cbn1cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHsgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICB2YXIgaWQgPSBcIl92LTI0OWRmMmI2L2FyZWEudnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgX192dWVfdGVtcGxhdGVfXylcbiAgfVxufSkoKX1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvcGFwZXIvYXJlYS52dWVcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIiwiPHRlbXBsYXRlIGlkPVwiYXJlYVwiPlxyXG4gICAgPHNlbGVjdCB2LW9uOmNsaWNrPVwiY2l0eUZ1blwiIGNsYXNzPVwic2VsZWN0IG1sNXIxNVwiPlxyXG4gICAgICAgIDxvcHRpb24gdi1mb3I9XCJpdGVtIGluIHByb3ZpbmNlXCI+e3tpdGVtLnBfTmFtZX19PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIDxzZWxlY3Qgdi1vbjpjbGljaz1cImNvdW50cnlGdW5cIiBjbGFzcz1cInNlbGVjdCBtcjE1XCI+XHJcbiAgICAgICAgPG9wdGlvbiB2LWZvcj1cIml0ZW0gaW4gY2l0eVwiPnt7aXRlbS5wX05hbWV9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgICAgPG9wdGlvbiB2LWZvcj1cIml0ZW0gaW4gY291bnRyeVwiPnt7aXRlbS5wX05hbWV9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgdmFyIGZsYWcxLGZsYWcyO1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgdGVtcGxhdGU6ICcjYXJlYScsXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHByb3ZpbmNlOltcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBfTmFtZTogJ+S4jemZkOecgeS7vSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY2l0eTpbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwX05hbWU6ICfkuI3pmZDln47luIInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcF9OYW1lOiAn5LiN6ZmQ5Yy65Y6/J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVhZHk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vdGhpcy4kaHR0cC5nZXQoXCIuLi9jb25maWcvcHJvdmluY2UtZGF0YS5qc29uXCIpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIC8vICAgIGRhdGEuZGF0YS5yZXZlcnNlKCkucHVzaCh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBwX05hbWU6ICfkuI3pmZDnnIHku70nXHJcbiAgICAgICAgICAgIC8vICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICBmbGFnMSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgIHRoaXMucHJvdmluY2U9IGRhdGEuZGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIC8vICAgIC8vY29uc29sZS5sb2codGhpcy4kZGF0YSk7XHJcbiAgICAgICAgICAgIC8vfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGNpdHlGdW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuJGh0dHAuZ2V0KFwiLi4vY29uZmlnL2NpdHktZGF0YS5qc29uXCIpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgaWYgKGZsYWcxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgZGF0YS5kYXRhLnJldmVyc2UoKS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgcF9OYW1lOiAn5LiN6ZmQ5Z+O5biCJ1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIGZsYWcyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLmNpdHkgPSBkYXRhLmRhdGEucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY291bnRyeUZ1bjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy4kaHR0cC5nZXQoXCIuLi9jb25maWcvY291bnRyeS1kYXRhLmpzb25cIikudGhlbihmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIC8vICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBpZiAoZmxhZzIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICBkYXRhLmRhdGEucmV2ZXJzZSgpLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBwX05hbWU6ICfkuI3pmZDljLrljr8nXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5jb3VudHJ5PSBkYXRhLmRhdGEucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgfVxyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXJlYS52dWU/MTYyNWZiNzhcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPHNlbGVjdCB2LW9uOmNsaWNrPVxcXCJjaXR5RnVuXFxcIiBjbGFzcz1cXFwic2VsZWN0IG1sNXIxNVxcXCI+XFxuICAgIDxvcHRpb24gdi1mb3I9XFxcIml0ZW0gaW4gcHJvdmluY2VcXFwiPnt7aXRlbS5wX05hbWV9fTwvb3B0aW9uPlxcbjwvc2VsZWN0PlxcbjxzZWxlY3Qgdi1vbjpjbGljaz1cXFwiY291bnRyeUZ1blxcXCIgY2xhc3M9XFxcInNlbGVjdCBtcjE1XFxcIj5cXG4gICAgPG9wdGlvbiB2LWZvcj1cXFwiaXRlbSBpbiBjaXR5XFxcIj57e2l0ZW0ucF9OYW1lfX08L29wdGlvbj5cXG48L3NlbGVjdD5cXG48c2VsZWN0IGNsYXNzPVxcXCJzZWxlY3RcXFwiPlxcbiAgICA8b3B0aW9uIHYtZm9yPVxcXCJpdGVtIGluIGNvdW50cnlcXFwiPnt7aXRlbS5wX05hbWV9fTwvb3B0aW9uPlxcbjwvc2VsZWN0PlxcblwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1odG1sLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvcGFwZXIvYXJlYS52dWVcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIiwidmFyIF9fdnVlX3NjcmlwdF9fLCBfX3Z1ZV90ZW1wbGF0ZV9fXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL0NvbnRlbnRIZWFkZXIudnVlXCIpXG5fX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZXMyMDE1JnBsdWdpbnNbXT10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29udGVudEhlYWRlci52dWVcIilcbmlmIChfX3Z1ZV9zY3JpcHRfXyAmJlxuICAgIF9fdnVlX3NjcmlwdF9fLl9fZXNNb2R1bGUgJiZcbiAgICBPYmplY3Qua2V5cyhfX3Z1ZV9zY3JpcHRfXykubGVuZ3RoID4gMSkge1xuICBjb25zb2xlLndhcm4oXCJbdnVlLWxvYWRlcl0gc3JjXFxcXGNvbXBvbmVudHNcXFxcY29tbW9uXFxcXENvbnRlbnRIZWFkZXIudnVlOiBuYW1lZCBleHBvcnRzIGluICoudnVlIGZpbGVzIGFyZSBpZ25vcmVkLlwiKX1cbl9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtaHRtbC1sb2FkZXIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29udGVudEhlYWRlci52dWVcIilcbm1vZHVsZS5leHBvcnRzID0gX192dWVfc2NyaXB0X18gfHwge31cbmlmIChtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHRcbmlmIChfX3Z1ZV90ZW1wbGF0ZV9fKSB7XG4odHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcImZ1bmN0aW9uXCIgPyAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyB8fCAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyA9IHt9KSkgOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUgPSBfX3Z1ZV90ZW1wbGF0ZV9fXG59XG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7ICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgdmFyIGlkID0gXCJfdi04ZTczMjZhNC9Db250ZW50SGVhZGVyLnZ1ZVwiXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChpZCwgbW9kdWxlLmV4cG9ydHMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnVwZGF0ZShpZCwgbW9kdWxlLmV4cG9ydHMsIF9fdnVlX3RlbXBsYXRlX18pXG4gIH1cbn0pKCl9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50SGVhZGVyLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDUgNiA4IDkgMTFcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vQ29udGVudEhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZSZpbmRleD0wIS4vQ29udGVudEhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL0NvbnRlbnRIZWFkZXIudnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50SGVhZGVyLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDUgNiA4IDkgMTFcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbiAgLmNvbnRlbnR7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbiAgfVxcbi5jb250ZW50LWhlYWRlcntcXG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZDZkZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50SGVhZGVyLnZ1ZT82MmJhMWU1YVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiOzs7Ozs7Ozs7Ozs7O0VBYUE7TUFDQSwrQkFBQTtHQUNBO0FBQ0E7SUFDQSx5QkFBQTtJQUNBLGlDQUFBO0NBQ0FcIixcImZpbGVcIjpcIkNvbnRlbnRIZWFkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnQtaGVhZGVyXFxcIiA+XFxyXFxuICAgICAgICA8aDE+XFxyXFxuICAgICAgICAgICAge3ttb2RsZW5hbWV9fVxcclxcbiAgICAgICAgICAgIDxzbWFsbD57e3BhZ2VuYW1lfX08L3NtYWxsPlxcclxcbiAgICAgICAgPC9oMT5cXHJcXG4gICAgICAgIDxvbCBjbGFzcz1cXFwiYnJlYWRjcnVtYlxcXCI+XFxyXFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9e3twYWdldXJsfX0+PGkgY2xhc3M9XFxcImZhIGZhLWRhc2hib2FyZFxcXCI+PC9pPnt7bW9kbGVuYW1lfX0gPC9hPjwvbGk+XFxyXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJhY3RpdmVcXFwiPnt7cGFnZW5hbWV9fTwvbGk+XFxyXFxuICAgICAgICA8L29sPlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c3R5bGU+XFxyXFxuICAgIC5jb250ZW50e1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICAuY29udGVudC1oZWFkZXJ7XFxyXFxuICAgICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJkNmRlO1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XFxyXFxuPHNjcmlwdD5cXHJcXG4gICAgbW9kdWxlLmV4cG9ydHM9e1xcclxcbiAgICAgICAgcHJvcHM6e1xcclxcbiAgICAgICAgICAgIG1vZGxlbmFtZTp7dHlwZTpTdHJpbmcsZGVmYXVsdDon6K+V5Y23566h55CGJ30sXFxyXFxuICAgICAgICAgICAgcGFnZW5hbWU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6J+ivleWNt+afpemHjSd9LFxcclxcbiAgICAgICAgICAgIHBhZ2V1cmw6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6JyMvZGVtbyd9LFxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGNvbXBvbmVudHM6e1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50SGVhZGVyLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDUgNiA4IDkgMTFcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDkgMTAgMTFcbiAqKi8iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuXHR9KSxcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZiAobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuXHRcdC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcblx0XHRjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLyc7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gNSA2IDggOSAxMVxuICoqLyIsIjx0ZW1wbGF0ZT5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudC1oZWFkZXJcIiA+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICB7e21vZGxlbmFtZX19XHJcbiAgICAgICAgICAgIDxzbWFsbD57e3BhZ2VuYW1lfX08L3NtYWxsPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj17e3BhZ2V1cmx9fT48aSBjbGFzcz1cImZhIGZhLWRhc2hib2FyZFwiPjwvaT57e21vZGxlbmFtZX19IDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJhY3RpdmVcIj57e3BhZ2VuYW1lfX08L2xpPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAuY29udGVudC1oZWFkZXJ7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmQ2ZGU7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG4gICAgbW9kdWxlLmV4cG9ydHM9e1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgbW9kbGVuYW1lOnt0eXBlOlN0cmluZyxkZWZhdWx0Oifor5XljbfnrqHnkIYnfSxcclxuICAgICAgICAgICAgcGFnZW5hbWU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6J+ivleWNt+afpemHjSd9LFxyXG4gICAgICAgICAgICBwYWdldXJsOnt0eXBlOlN0cmluZyxkZWZhdWx0OicjL2RlbW8nfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6e1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDb250ZW50SGVhZGVyLnZ1ZT82MmJhMWU1YVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudC1oZWFkZXJcXFwiID5cXG4gICAgPGgxPlxcbiAgICAgICAge3ttb2RsZW5hbWV9fVxcbiAgICAgICAgPHNtYWxsPnt7cGFnZW5hbWV9fTwvc21hbGw+XFxuICAgIDwvaDE+XFxuICAgIDxvbCBjbGFzcz1cXFwiYnJlYWRjcnVtYlxcXCI+XFxuICAgICAgICA8bGk+PGEgaHJlZj17e3BhZ2V1cmx9fT48aSBjbGFzcz1cXFwiZmEgZmEtZGFzaGJvYXJkXFxcIj48L2k+e3ttb2RsZW5hbWV9fSA8L2E+PC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIj57e3BhZ2VuYW1lfX08L2xpPlxcbiAgICA8L29sPlxcbjwvc2VjdGlvbj5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZW50SGVhZGVyLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDUgNiA4IDkgMTFcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2RhdGVwaWNrZXIzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9kYXRlcGlja2VyMy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9kYXRlcGlja2VyMy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2RhdGVwaWNrZXIzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDUgMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIVxcclxcbiAqIERhdGVwaWNrZXIgZm9yIEJvb3RzdHJhcFxcclxcbiAqXFxyXFxuICogQ29weXJpZ2h0IDIwMTIgU3RlZmFuIFBldHJlXFxyXFxuICogSW1wcm92ZW1lbnRzIGJ5IEFuZHJldyBSb3dsc1xcclxcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSB2Mi4wXFxyXFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxyXFxuICpcXHJcXG4gKi9cXHJcXG4uZGF0ZXBpY2tlciB7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBkaXJlY3Rpb246IGx0cjtcXHJcXG4gIC8qLmRvdyB7XFxyXFxuXFx0XFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcXHJcXG5cXHR9Ki9cXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItaW5saW5lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci5kYXRlcGlja2VyLXJ0bCB7XFxyXFxuICBkaXJlY3Rpb246IHJ0bDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIuZGF0ZXBpY2tlci1ydGwgdGFibGUgdHIgdGQgc3BhbiB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXRvcDogMDtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd246YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci10b3A6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duLmRhdGVwaWNrZXItb3JpZW50LWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGxlZnQ6IDZweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24uZGF0ZXBpY2tlci1vcmllbnQtbGVmdDphZnRlciB7XFxyXFxuICBsZWZ0OiA3cHg7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duLmRhdGVwaWNrZXItb3JpZW50LXJpZ2h0OmJlZm9yZSB7XFxyXFxuICByaWdodDogNnB4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci1kcm9wZG93bi5kYXRlcGlja2VyLW9yaWVudC1yaWdodDphZnRlciB7XFxyXFxuICByaWdodDogN3B4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci1kcm9wZG93bi5kYXRlcGlja2VyLW9yaWVudC10b3A6YmVmb3JlIHtcXHJcXG4gIHRvcDogLTdweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24uZGF0ZXBpY2tlci1vcmllbnQtdG9wOmFmdGVyIHtcXHJcXG4gIHRvcDogLTZweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24uZGF0ZXBpY2tlci1vcmllbnQtYm90dG9tOmJlZm9yZSB7XFxyXFxuICBib3R0b206IC03cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICM5OTk7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duLmRhdGVwaWNrZXItb3JpZW50LWJvdHRvbTphZnRlciB7XFxyXFxuICBib3R0b206IC02cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLmRheXMgZGl2LmRhdGVwaWNrZXItZGF5cyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIubW9udGhzIGRpdi5kYXRlcGlja2VyLW1vbnRocyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIueWVhcnMgZGl2LmRhdGVwaWNrZXIteWVhcnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRoIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4udGFibGUtc3RyaXBlZCAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCxcXHJcXG4udGFibGUtc3RyaXBlZCAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0aCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuZGF5OmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmRheS5mb2N1c2VkIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQub2xkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLm5ldyB7XFxyXFxuICBjb2xvcjogIzc3NztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmYjczMztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXksXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICNmNTllMDA7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5W2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcltkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXksXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZCxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXlbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXI6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheVtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlcjpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheVtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5W2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXJbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmI3MzM7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5hY3RpdmU6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZjFhNDE3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXksXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICNiZjgwMGM7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5W2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcltkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXksXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZCxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXlbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXI6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheVtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlcjpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheVtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5W2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXJbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICNmMWE0MTc7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNTU1NTU1O1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMzczNzM3O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZC5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZFtkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXJbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0sXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcltkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWRbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWRbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZFtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcjphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3Zlci5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWRbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNTU1NTU1O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICMzNTdlYmQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzI4NWU4ZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZVtkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0sXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZC5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXI6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmVbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlcjpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZC5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmVbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlci5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZVtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XFxyXFxuICBib3JkZXItY29sb3I6ICMzNTdlYmQ7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjMlO1xcclxcbiAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIG1hcmdpbjogMSU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XFxyXFxuICBib3JkZXItY29sb3I6ICMzNTdlYmQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3NmIxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjg1ZThlO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZC5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZVtkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXJbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0sXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmVbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmVbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcjphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlci5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZVtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzM1N2ViZDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5vbGQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5uZXcge1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRoLmRhdGVwaWNrZXItc3dpdGNoIHtcXHJcXG4gIHdpZHRoOiAxNDVweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGhlYWQgdHI6Zmlyc3QtY2hpbGQgdGgsXFxyXFxuLmRhdGVwaWNrZXIgdGZvb3QgdHIgdGgge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0Zm9vdCB0ciB0aDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIC5jdyB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB3aWR0aDogMTJweDtcXHJcXG4gIHBhZGRpbmc6IDAgMnB4IDAgNXB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGhlYWQgdHI6Zmlyc3QtY2hpbGQgdGguY3cge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5pbnB1dC1ncm91cC5kYXRlIC5pbnB1dC1ncm91cC1hZGRvbiBpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG4uaW5wdXQtZGF0ZXJhbmdlIGlucHV0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmlucHV0LWRhdGVyYW5nZSBpbnB1dDpmaXJzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXHJcXG59XFxyXFxuLmlucHV0LWRhdGVyYW5nZSBpbnB1dDpsYXN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcclxcbn1cXHJcXG4uaW5wdXQtZGF0ZXJhbmdlIC5pbnB1dC1ncm91cC1hZGRvbiB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDRweCA1cHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAjY2NjY2NjO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxcHggMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci5kcm9wZG93bi1tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgbWluLXdpZHRoOiAxNjBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAqYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XFxyXFxuICAqYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIuZHJvcGRvd24tbWVudSB0aCxcXHJcXG4uZGF0ZXBpY2tlci5kcm9wZG93bi1tZW51IHRkIHtcXHJcXG4gIHBhZGRpbmc6IDRweCA1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2RhdGVwaWNrZXIzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDUgMTBcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSA1IDcgOCA5IDEwIDExXG4gKiovIiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIGJvb3RzdHJhcC1kYXRlcGlja2VyLmpzXHJcbiAqIFJlcG86IGh0dHBzOi8vZ2l0aHViLmNvbS9ldGVybmljb2RlL2Jvb3RzdHJhcC1kYXRlcGlja2VyL1xyXG4gKiBEZW1vOiBodHRwOi8vZXRlcm5pY29kZS5naXRodWIuaW8vYm9vdHN0cmFwLWRhdGVwaWNrZXIvXHJcbiAqIERvY3M6IGh0dHA6Ly9ib290c3RyYXAtZGF0ZXBpY2tlci5yZWFkdGhlZG9jcy5vcmcvXHJcbiAqIEZvcmtlZCBmcm9tIGh0dHA6Ly93d3cuZXllY29uLnJvL2Jvb3RzdHJhcC1kYXRlcGlja2VyXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBTdGFydGVkIGJ5IFN0ZWZhbiBQZXRyZTsgaW1wcm92ZW1lbnRzIGJ5IEFuZHJldyBSb3dscyArIGNvbnRyaWJ1dG9yc1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbihmdW5jdGlvbigkLCB1bmRlZmluZWQpe1xyXG5cclxuXHR2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcclxuXHJcblx0ZnVuY3Rpb24gVVRDRGF0ZSgpe1xyXG5cdFx0cmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KERhdGUsIGFyZ3VtZW50cykpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBVVENUb2RheSgpe1xyXG5cdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHRcdHJldHVybiBVVENEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGFsaWFzKG1ldGhvZCl7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXNbbWV0aG9kXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHZhciBEYXRlQXJyYXkgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHZhciBleHRyYXMgPSB7XHJcblx0XHRcdGdldDogZnVuY3Rpb24oaSl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2xpY2UoaSlbMF07XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRhaW5zOiBmdW5jdGlvbihkKXtcclxuXHRcdFx0XHQvLyBBcnJheS5pbmRleE9mIGlzIG5vdCBjcm9zcy1icm93c2VyO1xyXG5cdFx0XHRcdC8vICQuaW5BcnJheSBkb2Vzbid0IHdvcmsgd2l0aCBEYXRlc1xyXG5cdFx0XHRcdHZhciB2YWwgPSBkICYmIGQudmFsdWVPZigpO1xyXG5cdFx0XHRcdGZvciAodmFyIGk9MCwgbD10aGlzLmxlbmd0aDsgaSA8IGw7IGkrKylcclxuXHRcdFx0XHRcdGlmICh0aGlzW2ldLnZhbHVlT2YoKSA9PT0gdmFsKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24oaSl7XHJcblx0XHRcdFx0dGhpcy5zcGxpY2UoaSwxKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVwbGFjZTogZnVuY3Rpb24obmV3X2FycmF5KXtcclxuXHRcdFx0XHRpZiAoIW5ld19hcnJheSlcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRpZiAoISQuaXNBcnJheShuZXdfYXJyYXkpKVxyXG5cdFx0XHRcdFx0bmV3X2FycmF5ID0gW25ld19hcnJheV07XHJcblx0XHRcdFx0dGhpcy5jbGVhcigpO1xyXG5cdFx0XHRcdHRoaXMucHVzaC5hcHBseSh0aGlzLCBuZXdfYXJyYXkpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGVhcjogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR0aGlzLnNwbGljZSgwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29weTogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgYSA9IG5ldyBEYXRlQXJyYXkoKTtcclxuXHRcdFx0XHRhLnJlcGxhY2UodGhpcyk7XHJcblx0XHRcdFx0cmV0dXJuIGE7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBhID0gW107XHJcblx0XHRcdGEucHVzaC5hcHBseShhLCBhcmd1bWVudHMpO1xyXG5cdFx0XHQkLmV4dGVuZChhLCBleHRyYXMpO1xyXG5cdFx0XHRyZXR1cm4gYTtcclxuXHRcdH07XHJcblx0fSkoKTtcclxuXHJcblxyXG5cdC8vIFBpY2tlciBvYmplY3RcclxuXHJcblx0dmFyIERhdGVwaWNrZXIgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKXtcclxuXHRcdHRoaXMuZGF0ZXMgPSBuZXcgRGF0ZUFycmF5KCk7XHJcblx0XHR0aGlzLnZpZXdEYXRlID0gVVRDVG9kYXkoKTtcclxuXHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMob3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50ID0gJChlbGVtZW50KTtcclxuXHRcdHRoaXMuaXNJbmxpbmUgPSBmYWxzZTtcclxuXHRcdHRoaXMuaXNJbnB1dCA9IHRoaXMuZWxlbWVudC5pcygnaW5wdXQnKTtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5lbGVtZW50LmlzKCcuZGF0ZScpID8gdGhpcy5lbGVtZW50LmZpbmQoJy5hZGQtb24sIC5pbnB1dC1ncm91cC1hZGRvbiwgLmJ0bicpIDogZmFsc2U7XHJcblx0XHR0aGlzLmhhc0lucHV0ID0gdGhpcy5jb21wb25lbnQgJiYgdGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0JykubGVuZ3RoO1xyXG5cdFx0aWYgKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuY29tcG9uZW50Lmxlbmd0aCA9PT0gMClcclxuXHRcdFx0dGhpcy5jb21wb25lbnQgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnBpY2tlciA9ICQoRFBHbG9iYWwudGVtcGxhdGUpO1xyXG5cdFx0dGhpcy5fYnVpbGRFdmVudHMoKTtcclxuXHRcdHRoaXMuX2F0dGFjaEV2ZW50cygpO1xyXG5cclxuXHRcdGlmICh0aGlzLmlzSW5saW5lKXtcclxuXHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItaW5saW5lJykuYXBwZW5kVG8odGhpcy5lbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1kcm9wZG93biBkcm9wZG93bi1tZW51Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuby5ydGwpe1xyXG5cdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1ydGwnKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZpZXdNb2RlID0gdGhpcy5vLnN0YXJ0VmlldztcclxuXHJcblx0XHRpZiAodGhpcy5vLmNhbGVuZGFyV2Vla3MpXHJcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJ3Rmb290IHRoLnRvZGF5JylcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NvbHNwYW4nLCBmdW5jdGlvbihpLCB2YWwpe1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBwYXJzZUludCh2YWwpICsgMTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5fYWxsb3dfdXBkYXRlID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5zZXRTdGFydERhdGUodGhpcy5fby5zdGFydERhdGUpO1xyXG5cdFx0dGhpcy5zZXRFbmREYXRlKHRoaXMuX28uZW5kRGF0ZSk7XHJcblx0XHR0aGlzLnNldERheXNPZldlZWtEaXNhYmxlZCh0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkKTtcclxuXHJcblx0XHR0aGlzLmZpbGxEb3coKTtcclxuXHRcdHRoaXMuZmlsbE1vbnRocygpO1xyXG5cclxuXHRcdHRoaXMuX2FsbG93X3VwZGF0ZSA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdHRoaXMuc2hvd01vZGUoKTtcclxuXHJcblx0XHRpZiAodGhpcy5pc0lubGluZSl7XHJcblx0XHRcdHRoaXMuc2hvdygpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdERhdGVwaWNrZXIucHJvdG90eXBlID0ge1xyXG5cdFx0Y29uc3RydWN0b3I6IERhdGVwaWNrZXIsXHJcblxyXG5cdFx0X3Byb2Nlc3Nfb3B0aW9uczogZnVuY3Rpb24ob3B0cyl7XHJcblx0XHRcdC8vIFN0b3JlIHJhdyBvcHRpb25zIGZvciByZWZlcmVuY2VcclxuXHRcdFx0dGhpcy5fbyA9ICQuZXh0ZW5kKHt9LCB0aGlzLl9vLCBvcHRzKTtcclxuXHRcdFx0Ly8gUHJvY2Vzc2VkIG9wdGlvbnNcclxuXHRcdFx0dmFyIG8gPSB0aGlzLm8gPSAkLmV4dGVuZCh7fSwgdGhpcy5fbyk7XHJcblxyXG5cdFx0XHQvLyBDaGVjayBpZiBcImRlLURFXCIgc3R5bGUgZGF0ZSBpcyBhdmFpbGFibGUsIGlmIG5vdCBsYW5ndWFnZSBzaG91bGRcclxuXHRcdFx0Ly8gZmFsbGJhY2sgdG8gMiBsZXR0ZXIgY29kZSBlZyBcImRlXCJcclxuXHRcdFx0dmFyIGxhbmcgPSBvLmxhbmd1YWdlO1xyXG5cdFx0XHRpZiAoIWRhdGVzW2xhbmddKXtcclxuXHRcdFx0XHRsYW5nID0gbGFuZy5zcGxpdCgnLScpWzBdO1xyXG5cdFx0XHRcdGlmICghZGF0ZXNbbGFuZ10pXHJcblx0XHRcdFx0XHRsYW5nID0gZGVmYXVsdHMubGFuZ3VhZ2U7XHJcblx0XHRcdH1cclxuXHRcdFx0by5sYW5ndWFnZSA9IGxhbmc7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKG8uc3RhcnRWaWV3KXtcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0Y2FzZSAnZGVjYWRlJzpcclxuXHRcdFx0XHRcdG8uc3RhcnRWaWV3ID0gMjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRjYXNlICd5ZWFyJzpcclxuXHRcdFx0XHRcdG8uc3RhcnRWaWV3ID0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRvLnN0YXJ0VmlldyA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN3aXRjaCAoby5taW5WaWV3TW9kZSl7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdGNhc2UgJ21vbnRocyc6XHJcblx0XHRcdFx0XHRvLm1pblZpZXdNb2RlID0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRjYXNlICd5ZWFycyc6XHJcblx0XHRcdFx0XHRvLm1pblZpZXdNb2RlID0gMjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRvLm1pblZpZXdNb2RlID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0by5zdGFydFZpZXcgPSBNYXRoLm1heChvLnN0YXJ0Vmlldywgby5taW5WaWV3TW9kZSk7XHJcblxyXG5cdFx0XHQvLyB0cnVlLCBmYWxzZSwgb3IgTnVtYmVyID4gMFxyXG5cdFx0XHRpZiAoby5tdWx0aWRhdGUgIT09IHRydWUpe1xyXG5cdFx0XHRcdG8ubXVsdGlkYXRlID0gTnVtYmVyKG8ubXVsdGlkYXRlKSB8fCBmYWxzZTtcclxuXHRcdFx0XHRpZiAoby5tdWx0aWRhdGUgIT09IGZhbHNlKVxyXG5cdFx0XHRcdFx0by5tdWx0aWRhdGUgPSBNYXRoLm1heCgwLCBvLm11bHRpZGF0ZSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0by5tdWx0aWRhdGUgPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdG8ubXVsdGlkYXRlU2VwYXJhdG9yID0gU3RyaW5nKG8ubXVsdGlkYXRlU2VwYXJhdG9yKTtcclxuXHJcblx0XHRcdG8ud2Vla1N0YXJ0ICU9IDc7XHJcblx0XHRcdG8ud2Vla0VuZCA9ICgoby53ZWVrU3RhcnQgKyA2KSAlIDcpO1xyXG5cclxuXHRcdFx0dmFyIGZvcm1hdCA9IERQR2xvYmFsLnBhcnNlRm9ybWF0KG8uZm9ybWF0KTtcclxuXHRcdFx0aWYgKG8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkpe1xyXG5cdFx0XHRcdGlmICghIW8uc3RhcnREYXRlKXtcclxuXHRcdFx0XHRcdGlmIChvLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcblx0XHRcdFx0XHRcdG8uc3RhcnREYXRlID0gdGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShvLnN0YXJ0RGF0ZSkpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRvLnN0YXJ0RGF0ZSA9IERQR2xvYmFsLnBhcnNlRGF0ZShvLnN0YXJ0RGF0ZSwgZm9ybWF0LCBvLmxhbmd1YWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRvLnN0YXJ0RGF0ZSA9IC1JbmZpbml0eTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKG8uZW5kRGF0ZSAhPT0gSW5maW5pdHkpe1xyXG5cdFx0XHRcdGlmICghIW8uZW5kRGF0ZSl7XHJcblx0XHRcdFx0XHRpZiAoby5lbmREYXRlIGluc3RhbmNlb2YgRGF0ZSlcclxuXHRcdFx0XHRcdFx0by5lbmREYXRlID0gdGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShvLmVuZERhdGUpKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0by5lbmREYXRlID0gRFBHbG9iYWwucGFyc2VEYXRlKG8uZW5kRGF0ZSwgZm9ybWF0LCBvLmxhbmd1YWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRvLmVuZERhdGUgPSBJbmZpbml0eTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG8uZGF5c09mV2Vla0Rpc2FibGVkID0gby5kYXlzT2ZXZWVrRGlzYWJsZWR8fFtdO1xyXG5cdFx0XHRpZiAoISQuaXNBcnJheShvLmRheXNPZldlZWtEaXNhYmxlZCkpXHJcblx0XHRcdFx0by5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBvLmRheXNPZldlZWtEaXNhYmxlZC5zcGxpdCgvWyxcXHNdKi8pO1xyXG5cdFx0XHRvLmRheXNPZldlZWtEaXNhYmxlZCA9ICQubWFwKG8uZGF5c09mV2Vla0Rpc2FibGVkLCBmdW5jdGlvbihkKXtcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQoZCwgMTApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHZhciBwbGMgPSBTdHJpbmcoby5vcmllbnRhdGlvbikudG9Mb3dlckNhc2UoKS5zcGxpdCgvXFxzKy9nKSxcclxuXHRcdFx0XHRfcGxjID0gby5vcmllbnRhdGlvbi50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHRwbGMgPSAkLmdyZXAocGxjLCBmdW5jdGlvbih3b3JkKXtcclxuXHRcdFx0XHRyZXR1cm4gKC9eYXV0b3xsZWZ0fHJpZ2h0fHRvcHxib3R0b20kLykudGVzdCh3b3JkKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdG8ub3JpZW50YXRpb24gPSB7eDogJ2F1dG8nLCB5OiAnYXV0byd9O1xyXG5cdFx0XHRpZiAoIV9wbGMgfHwgX3BsYyA9PT0gJ2F1dG8nKVxyXG5cdFx0XHRcdDsgLy8gbm8gYWN0aW9uXHJcblx0XHRcdGVsc2UgaWYgKHBsYy5sZW5ndGggPT09IDEpe1xyXG5cdFx0XHRcdHN3aXRjaCAocGxjWzBdKXtcclxuXHRcdFx0XHRcdGNhc2UgJ3RvcCc6XHJcblx0XHRcdFx0XHRjYXNlICdib3R0b20nOlxyXG5cdFx0XHRcdFx0XHRvLm9yaWVudGF0aW9uLnkgPSBwbGNbMF07XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0XHRcdG8ub3JpZW50YXRpb24ueCA9IHBsY1swXTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdF9wbGMgPSAkLmdyZXAocGxjLCBmdW5jdGlvbih3b3JkKXtcclxuXHRcdFx0XHRcdHJldHVybiAoL15sZWZ0fHJpZ2h0JC8pLnRlc3Qod29yZCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0by5vcmllbnRhdGlvbi54ID0gX3BsY1swXSB8fCAnYXV0byc7XHJcblxyXG5cdFx0XHRcdF9wbGMgPSAkLmdyZXAocGxjLCBmdW5jdGlvbih3b3JkKXtcclxuXHRcdFx0XHRcdHJldHVybiAoL150b3B8Ym90dG9tJC8pLnRlc3Qod29yZCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0by5vcmllbnRhdGlvbi55ID0gX3BsY1swXSB8fCAnYXV0byc7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRfZXZlbnRzOiBbXSxcclxuXHRcdF9zZWNvbmRhcnlFdmVudHM6IFtdLFxyXG5cdFx0X2FwcGx5RXZlbnRzOiBmdW5jdGlvbihldnMpe1xyXG5cdFx0XHRmb3IgKHZhciBpPTAsIGVsLCBjaCwgZXY7IGkgPCBldnMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGVsID0gZXZzW2ldWzBdO1xyXG5cdFx0XHRcdGlmIChldnNbaV0ubGVuZ3RoID09PSAyKXtcclxuXHRcdFx0XHRcdGNoID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGV2c1tpXS5sZW5ndGggPT09IDMpe1xyXG5cdFx0XHRcdFx0Y2ggPSBldnNbaV1bMV07XHJcblx0XHRcdFx0XHRldiA9IGV2c1tpXVsyXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWwub24oZXYsIGNoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdF91bmFwcGx5RXZlbnRzOiBmdW5jdGlvbihldnMpe1xyXG5cdFx0XHRmb3IgKHZhciBpPTAsIGVsLCBldiwgY2g7IGkgPCBldnMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdGVsID0gZXZzW2ldWzBdO1xyXG5cdFx0XHRcdGlmIChldnNbaV0ubGVuZ3RoID09PSAyKXtcclxuXHRcdFx0XHRcdGNoID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGV2c1tpXS5sZW5ndGggPT09IDMpe1xyXG5cdFx0XHRcdFx0Y2ggPSBldnNbaV1bMV07XHJcblx0XHRcdFx0XHRldiA9IGV2c1tpXVsyXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWwub2ZmKGV2LCBjaCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRfYnVpbGRFdmVudHM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmICh0aGlzLmlzSW5wdXQpeyAvLyBzaW5nbGUgaW5wdXRcclxuXHRcdFx0XHR0aGlzLl9ldmVudHMgPSBbXHJcblx0XHRcdFx0XHRbdGhpcy5lbGVtZW50LCB7XHJcblx0XHRcdFx0XHRcdGZvY3VzOiAkLnByb3h5KHRoaXMuc2hvdywgdGhpcyksXHJcblx0XHRcdFx0XHRcdGtleXVwOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkLmluQXJyYXkoZS5rZXlDb2RlLCBbMjcsMzcsMzksMzgsNDAsMzIsMTMsOV0pID09PSAtMSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHRcdFx0XHRrZXlkb3duOiAkLnByb3h5KHRoaXMua2V5ZG93biwgdGhpcylcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0XTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmNvbXBvbmVudCAmJiB0aGlzLmhhc0lucHV0KXsgLy8gY29tcG9uZW50OiBpbnB1dCArIGJ1dHRvblxyXG5cdFx0XHRcdHRoaXMuX2V2ZW50cyA9IFtcclxuXHRcdFx0XHRcdC8vIEZvciBjb21wb25lbnRzIHRoYXQgYXJlIG5vdCByZWFkb25seSwgYWxsb3cga2V5Ym9hcmQgbmF2XHJcblx0XHRcdFx0XHRbdGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0JyksIHtcclxuXHRcdFx0XHRcdFx0Zm9jdXM6ICQucHJveHkodGhpcy5zaG93LCB0aGlzKSxcclxuXHRcdFx0XHRcdFx0a2V5dXA6ICQucHJveHkoZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCQuaW5BcnJheShlLmtleUNvZGUsIFsyNywzNywzOSwzOCw0MCwzMiwxMyw5XSkgPT09IC0xKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdFx0XHRcdFx0fSwgdGhpcyksXHJcblx0XHRcdFx0XHRcdGtleWRvd246ICQucHJveHkodGhpcy5rZXlkb3duLCB0aGlzKVxyXG5cdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHRbdGhpcy5jb21wb25lbnQsIHtcclxuXHRcdFx0XHRcdFx0Y2xpY2s6ICQucHJveHkodGhpcy5zaG93LCB0aGlzKVxyXG5cdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuZWxlbWVudC5pcygnZGl2JykpeyAgLy8gaW5saW5lIGRhdGVwaWNrZXJcclxuXHRcdFx0XHR0aGlzLmlzSW5saW5lID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLl9ldmVudHMgPSBbXHJcblx0XHRcdFx0XHRbdGhpcy5lbGVtZW50LCB7XHJcblx0XHRcdFx0XHRcdGNsaWNrOiAkLnByb3h5KHRoaXMuc2hvdywgdGhpcylcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0XTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9ldmVudHMucHVzaChcclxuXHRcdFx0XHQvLyBDb21wb25lbnQ6IGxpc3RlbiBmb3IgYmx1ciBvbiBlbGVtZW50IGRlc2NlbmRhbnRzXHJcblx0XHRcdFx0W3RoaXMuZWxlbWVudCwgJyonLCB7XHJcblx0XHRcdFx0XHRibHVyOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9mb2N1c2VkX2Zyb20gPSBlLnRhcmdldDtcclxuXHRcdFx0XHRcdH0sIHRoaXMpXHJcblx0XHRcdFx0fV0sXHJcblx0XHRcdFx0Ly8gSW5wdXQ6IGxpc3RlbiBmb3IgYmx1ciBvbiBlbGVtZW50XHJcblx0XHRcdFx0W3RoaXMuZWxlbWVudCwge1xyXG5cdFx0XHRcdFx0Ymx1cjogJC5wcm94eShmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5fZm9jdXNlZF9mcm9tID0gZS50YXJnZXQ7XHJcblx0XHRcdFx0XHR9LCB0aGlzKVxyXG5cdFx0XHRcdH1dXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0aGlzLl9zZWNvbmRhcnlFdmVudHMgPSBbXHJcblx0XHRcdFx0W3RoaXMucGlja2VyLCB7XHJcblx0XHRcdFx0XHRjbGljazogJC5wcm94eSh0aGlzLmNsaWNrLCB0aGlzKVxyXG5cdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFskKHdpbmRvdyksIHtcclxuXHRcdFx0XHRcdHJlc2l6ZTogJC5wcm94eSh0aGlzLnBsYWNlLCB0aGlzKVxyXG5cdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFskKGRvY3VtZW50KSwge1xyXG5cdFx0XHRcdFx0J21vdXNlZG93biB0b3VjaHN0YXJ0JzogJC5wcm94eShmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRcdFx0Ly8gQ2xpY2tlZCBvdXRzaWRlIHRoZSBkYXRlcGlja2VyLCBoaWRlIGl0XHJcblx0XHRcdFx0XHRcdGlmICghKFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5pcyhlLnRhcmdldCkgfHxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZChlLnRhcmdldCkubGVuZ3RoIHx8XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuaXMoZS50YXJnZXQpIHx8XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuZmluZChlLnRhcmdldCkubGVuZ3RoXHJcblx0XHRcdFx0XHRcdCkpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCB0aGlzKVxyXG5cdFx0XHRcdH1dXHJcblx0XHRcdF07XHJcblx0XHR9LFxyXG5cdFx0X2F0dGFjaEV2ZW50czogZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX2V2ZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0X2RldGFjaEV2ZW50czogZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5fdW5hcHBseUV2ZW50cyh0aGlzLl9ldmVudHMpO1xyXG5cdFx0fSxcclxuXHRcdF9hdHRhY2hTZWNvbmRhcnlFdmVudHM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpO1xyXG5cdFx0fSxcclxuXHRcdF9kZXRhY2hTZWNvbmRhcnlFdmVudHM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fc2Vjb25kYXJ5RXZlbnRzKTtcclxuXHRcdH0sXHJcblx0XHRfdHJpZ2dlcjogZnVuY3Rpb24oZXZlbnQsIGFsdGRhdGUpe1xyXG5cdFx0XHR2YXIgZGF0ZSA9IGFsdGRhdGUgfHwgdGhpcy5kYXRlcy5nZXQoLTEpLFxyXG5cdFx0XHRcdGxvY2FsX2RhdGUgPSB0aGlzLl91dGNfdG9fbG9jYWwoZGF0ZSk7XHJcblxyXG5cdFx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlcih7XHJcblx0XHRcdFx0dHlwZTogZXZlbnQsXHJcblx0XHRcdFx0ZGF0ZTogbG9jYWxfZGF0ZSxcclxuXHRcdFx0XHRkYXRlczogJC5tYXAodGhpcy5kYXRlcywgdGhpcy5fdXRjX3RvX2xvY2FsKSxcclxuXHRcdFx0XHRmb3JtYXQ6ICQucHJveHkoZnVuY3Rpb24oaXgsIGZvcm1hdCl7XHJcblx0XHRcdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCl7XHJcblx0XHRcdFx0XHRcdGl4ID0gdGhpcy5kYXRlcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQgPSB0aGlzLm8uZm9ybWF0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGl4ID09PSAnc3RyaW5nJyl7XHJcblx0XHRcdFx0XHRcdGZvcm1hdCA9IGl4O1xyXG5cdFx0XHRcdFx0XHRpeCA9IHRoaXMuZGF0ZXMubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGZvcm1hdCA9IGZvcm1hdCB8fCB0aGlzLm8uZm9ybWF0O1xyXG5cdFx0XHRcdFx0dmFyIGRhdGUgPSB0aGlzLmRhdGVzLmdldChpeCk7XHJcblx0XHRcdFx0XHRyZXR1cm4gRFBHbG9iYWwuZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIHRoaXMuby5sYW5ndWFnZSk7XHJcblx0XHRcdFx0fSwgdGhpcylcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNob3c6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmICghdGhpcy5pc0lubGluZSlcclxuXHRcdFx0XHR0aGlzLnBpY2tlci5hcHBlbmRUbygnYm9keScpO1xyXG5cdFx0XHR0aGlzLnBpY2tlci5zaG93KCk7XHJcblx0XHRcdHRoaXMucGxhY2UoKTtcclxuXHRcdFx0dGhpcy5fYXR0YWNoU2Vjb25kYXJ5RXZlbnRzKCk7XHJcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ3Nob3cnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aGlkZTogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYgKHRoaXMuaXNJbmxpbmUpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRpZiAoIXRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xyXG5cdFx0XHR0aGlzLnBpY2tlci5oaWRlKCkuZGV0YWNoKCk7XHJcblx0XHRcdHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlID0gdGhpcy5vLnN0YXJ0VmlldztcclxuXHRcdFx0dGhpcy5zaG93TW9kZSgpO1xyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMuby5mb3JjZVBhcnNlICYmXHJcblx0XHRcdFx0KFxyXG5cdFx0XHRcdFx0dGhpcy5pc0lucHV0ICYmIHRoaXMuZWxlbWVudC52YWwoKSB8fFxyXG5cdFx0XHRcdFx0dGhpcy5oYXNJbnB1dCAmJiB0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXQnKS52YWwoKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KVxyXG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdFx0dGhpcy5fdHJpZ2dlcignaGlkZScpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRyZW1vdmU6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHR0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCk7XHJcblx0XHRcdHRoaXMucGlja2VyLnJlbW92ZSgpO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyO1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNJbnB1dCl7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRfdXRjX3RvX2xvY2FsOiBmdW5jdGlvbih1dGMpe1xyXG5cdFx0XHRyZXR1cm4gdXRjICYmIG5ldyBEYXRlKHV0Yy5nZXRUaW1lKCkgKyAodXRjLmdldFRpbWV6b25lT2Zmc2V0KCkqNjAwMDApKTtcclxuXHRcdH0sXHJcblx0XHRfbG9jYWxfdG9fdXRjOiBmdW5jdGlvbihsb2NhbCl7XHJcblx0XHRcdHJldHVybiBsb2NhbCAmJiBuZXcgRGF0ZShsb2NhbC5nZXRUaW1lKCkgLSAobG9jYWwuZ2V0VGltZXpvbmVPZmZzZXQoKSo2MDAwMCkpO1xyXG5cdFx0fSxcclxuXHRcdF96ZXJvX3RpbWU6IGZ1bmN0aW9uKGxvY2FsKXtcclxuXHRcdFx0cmV0dXJuIGxvY2FsICYmIG5ldyBEYXRlKGxvY2FsLmdldEZ1bGxZZWFyKCksIGxvY2FsLmdldE1vbnRoKCksIGxvY2FsLmdldERhdGUoKSk7XHJcblx0XHR9LFxyXG5cdFx0X3plcm9fdXRjX3RpbWU6IGZ1bmN0aW9uKHV0Yyl7XHJcblx0XHRcdHJldHVybiB1dGMgJiYgbmV3IERhdGUoRGF0ZS5VVEModXRjLmdldFVUQ0Z1bGxZZWFyKCksIHV0Yy5nZXRVVENNb250aCgpLCB1dGMuZ2V0VVRDRGF0ZSgpKSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldERhdGVzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5kYXRlcywgdGhpcy5fdXRjX3RvX2xvY2FsKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0VVRDRGF0ZXM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IERhdGUoZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXREYXRlOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fdXRjX3RvX2xvY2FsKHRoaXMuZ2V0VVRDRGF0ZSgpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0VVRDRGF0ZTogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIG5ldyBEYXRlKHRoaXMuZGF0ZXMuZ2V0KC0xKSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGVzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgYXJncyA9ICQuaXNBcnJheShhcmd1bWVudHNbMF0pID8gYXJndW1lbnRzWzBdIDogYXJndW1lbnRzO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xyXG5cdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFVUQ0RhdGVzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgYXJncyA9ICQuaXNBcnJheShhcmd1bWVudHNbMF0pID8gYXJndW1lbnRzWzBdIDogYXJndW1lbnRzO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZS5hcHBseSh0aGlzLCAkLm1hcChhcmdzLCB0aGlzLl91dGNfdG9fbG9jYWwpKTtcclxuXHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xyXG5cdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGU6IGFsaWFzKCdzZXREYXRlcycpLFxyXG5cdFx0c2V0VVRDRGF0ZTogYWxpYXMoJ3NldFVUQ0RhdGVzJyksXHJcblxyXG5cdFx0c2V0VmFsdWU6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBmb3JtYXR0ZWQgPSB0aGlzLmdldEZvcm1hdHRlZERhdGUoKTtcclxuXHRcdFx0aWYgKCF0aGlzLmlzSW5wdXQpe1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvbXBvbmVudCl7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXQnKS52YWwoZm9ybWF0dGVkKS5jaGFuZ2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50LnZhbChmb3JtYXR0ZWQpLmNoYW5nZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEZvcm1hdHRlZERhdGU6IGZ1bmN0aW9uKGZvcm1hdCl7XHJcblx0XHRcdGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRmb3JtYXQgPSB0aGlzLm8uZm9ybWF0O1xyXG5cclxuXHRcdFx0dmFyIGxhbmcgPSB0aGlzLm8ubGFuZ3VhZ2U7XHJcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcclxuXHRcdFx0XHRyZXR1cm4gRFBHbG9iYWwuZm9ybWF0RGF0ZShkLCBmb3JtYXQsIGxhbmcpO1xyXG5cdFx0XHR9KS5qb2luKHRoaXMuby5tdWx0aWRhdGVTZXBhcmF0b3IpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRTdGFydERhdGU6IGZ1bmN0aW9uKHN0YXJ0RGF0ZSl7XHJcblx0XHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7c3RhcnREYXRlOiBzdGFydERhdGV9KTtcclxuXHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdFx0dGhpcy51cGRhdGVOYXZBcnJvd3MoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RW5kRGF0ZTogZnVuY3Rpb24oZW5kRGF0ZSl7XHJcblx0XHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZW5kRGF0ZTogZW5kRGF0ZX0pO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU5hdkFycm93cygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXlzT2ZXZWVrRGlzYWJsZWQ6IGZ1bmN0aW9uKGRheXNPZldlZWtEaXNhYmxlZCl7XHJcblx0XHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF5c09mV2Vla0Rpc2FibGVkOiBkYXlzT2ZXZWVrRGlzYWJsZWR9KTtcclxuXHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdFx0dGhpcy51cGRhdGVOYXZBcnJvd3MoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cGxhY2U6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmICh0aGlzLmlzSW5saW5lKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dmFyIGNhbGVuZGFyV2lkdGggPSB0aGlzLnBpY2tlci5vdXRlcldpZHRoKCksXHJcblx0XHRcdFx0Y2FsZW5kYXJIZWlnaHQgPSB0aGlzLnBpY2tlci5vdXRlckhlaWdodCgpLFxyXG5cdFx0XHRcdHZpc3VhbFBhZGRpbmcgPSAxMCxcclxuXHRcdFx0XHR3aW5kb3dXaWR0aCA9ICR3aW5kb3cud2lkdGgoKSxcclxuXHRcdFx0XHR3aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpLFxyXG5cdFx0XHRcdHNjcm9sbFRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0XHR2YXIgekluZGV4ID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LnBhcmVudHMoKS5maWx0ZXIoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHJldHVybiAkKHRoaXMpLmNzcygnei1pbmRleCcpICE9PSAnYXV0byc7XHJcblx0XHRcdFx0fSkuZmlyc3QoKS5jc3MoJ3otaW5kZXgnKSkrMTA7XHJcblx0XHRcdHZhciBvZmZzZXQgPSB0aGlzLmNvbXBvbmVudCA/IHRoaXMuY29tcG9uZW50LnBhcmVudCgpLm9mZnNldCgpIDogdGhpcy5lbGVtZW50Lm9mZnNldCgpO1xyXG5cdFx0XHR2YXIgaGVpZ2h0ID0gdGhpcy5jb21wb25lbnQgPyB0aGlzLmNvbXBvbmVudC5vdXRlckhlaWdodCh0cnVlKSA6IHRoaXMuZWxlbWVudC5vdXRlckhlaWdodChmYWxzZSk7XHJcblx0XHRcdHZhciB3aWR0aCA9IHRoaXMuY29tcG9uZW50ID8gdGhpcy5jb21wb25lbnQub3V0ZXJXaWR0aCh0cnVlKSA6IHRoaXMuZWxlbWVudC5vdXRlcldpZHRoKGZhbHNlKTtcclxuXHRcdFx0dmFyIGxlZnQgPSBvZmZzZXQubGVmdCxcclxuXHRcdFx0XHR0b3AgPSBvZmZzZXQudG9wO1xyXG5cclxuXHRcdFx0dGhpcy5waWNrZXIucmVtb3ZlQ2xhc3MoXHJcblx0XHRcdFx0J2RhdGVwaWNrZXItb3JpZW50LXRvcCBkYXRlcGlja2VyLW9yaWVudC1ib3R0b20gJytcclxuXHRcdFx0XHQnZGF0ZXBpY2tlci1vcmllbnQtcmlnaHQgZGF0ZXBpY2tlci1vcmllbnQtbGVmdCdcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmICh0aGlzLm8ub3JpZW50YXRpb24ueCAhPT0gJ2F1dG8nKXtcclxuXHRcdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1vcmllbnQtJyArIHRoaXMuby5vcmllbnRhdGlvbi54KTtcclxuXHRcdFx0XHRpZiAodGhpcy5vLm9yaWVudGF0aW9uLnggPT09ICdyaWdodCcpXHJcblx0XHRcdFx0XHRsZWZ0IC09IGNhbGVuZGFyV2lkdGggLSB3aWR0aDtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBhdXRvIHggb3JpZW50YXRpb24gaXMgYmVzdC1wbGFjZW1lbnQ6IGlmIGl0IGNyb3NzZXMgYSB3aW5kb3dcclxuXHRcdFx0Ly8gZWRnZSwgZnVkZ2UgaXQgc2lkZXdheXNcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Ly8gRGVmYXVsdCB0byBsZWZ0XHJcblx0XHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LWxlZnQnKTtcclxuXHRcdFx0XHRpZiAob2Zmc2V0LmxlZnQgPCAwKVxyXG5cdFx0XHRcdFx0bGVmdCAtPSBvZmZzZXQubGVmdCAtIHZpc3VhbFBhZGRpbmc7XHJcblx0XHRcdFx0ZWxzZSBpZiAob2Zmc2V0LmxlZnQgKyBjYWxlbmRhcldpZHRoID4gd2luZG93V2lkdGgpXHJcblx0XHRcdFx0XHRsZWZ0ID0gd2luZG93V2lkdGggLSBjYWxlbmRhcldpZHRoIC0gdmlzdWFsUGFkZGluZztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYXV0byB5IG9yaWVudGF0aW9uIGlzIGJlc3Qtc2l0dWF0aW9uOiB0b3Agb3IgYm90dG9tLCBubyBmdWRnaW5nLFxyXG5cdFx0XHQvLyBkZWNpc2lvbiBiYXNlZCBvbiB3aGljaCBzaG93cyBtb3JlIG9mIHRoZSBjYWxlbmRhclxyXG5cdFx0XHR2YXIgeW9yaWVudCA9IHRoaXMuby5vcmllbnRhdGlvbi55LFxyXG5cdFx0XHRcdHRvcF9vdmVyZmxvdywgYm90dG9tX292ZXJmbG93O1xyXG5cdFx0XHRpZiAoeW9yaWVudCA9PT0gJ2F1dG8nKXtcclxuXHRcdFx0XHR0b3Bfb3ZlcmZsb3cgPSAtc2Nyb2xsVG9wICsgb2Zmc2V0LnRvcCAtIGNhbGVuZGFySGVpZ2h0O1xyXG5cdFx0XHRcdGJvdHRvbV9vdmVyZmxvdyA9IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCAtIChvZmZzZXQudG9wICsgaGVpZ2h0ICsgY2FsZW5kYXJIZWlnaHQpO1xyXG5cdFx0XHRcdGlmIChNYXRoLm1heCh0b3Bfb3ZlcmZsb3csIGJvdHRvbV9vdmVyZmxvdykgPT09IGJvdHRvbV9vdmVyZmxvdylcclxuXHRcdFx0XHRcdHlvcmllbnQgPSAndG9wJztcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR5b3JpZW50ID0gJ2JvdHRvbSc7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LScgKyB5b3JpZW50KTtcclxuXHRcdFx0aWYgKHlvcmllbnQgPT09ICd0b3AnKVxyXG5cdFx0XHRcdHRvcCArPSBoZWlnaHQ7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0b3AgLT0gY2FsZW5kYXJIZWlnaHQgKyBwYXJzZUludCh0aGlzLnBpY2tlci5jc3MoJ3BhZGRpbmctdG9wJykpO1xyXG5cclxuXHRcdFx0dGhpcy5waWNrZXIuY3NzKHtcclxuXHRcdFx0XHR0b3A6IHRvcCxcclxuXHRcdFx0XHRsZWZ0OiBsZWZ0LFxyXG5cdFx0XHRcdHpJbmRleDogekluZGV4XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfYWxsb3dfdXBkYXRlOiB0cnVlLFxyXG5cdFx0dXBkYXRlOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZiAoIXRoaXMuX2FsbG93X3VwZGF0ZSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR2YXIgb2xkRGF0ZXMgPSB0aGlzLmRhdGVzLmNvcHkoKSxcclxuXHRcdFx0XHRkYXRlcyA9IFtdLFxyXG5cdFx0XHRcdGZyb21BcmdzID0gZmFsc2U7XHJcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKXtcclxuXHRcdFx0XHQkLmVhY2goYXJndW1lbnRzLCAkLnByb3h5KGZ1bmN0aW9uKGksIGRhdGUpe1xyXG5cdFx0XHRcdFx0aWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKVxyXG5cdFx0XHRcdFx0XHRkYXRlID0gdGhpcy5fbG9jYWxfdG9fdXRjKGRhdGUpO1xyXG5cdFx0XHRcdFx0ZGF0ZXMucHVzaChkYXRlKTtcclxuXHRcdFx0XHR9LCB0aGlzKSk7XHJcblx0XHRcdFx0ZnJvbUFyZ3MgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGRhdGVzID0gdGhpcy5pc0lucHV0XHJcblx0XHRcdFx0XHRcdD8gdGhpcy5lbGVtZW50LnZhbCgpXHJcblx0XHRcdFx0XHRcdDogdGhpcy5lbGVtZW50LmRhdGEoJ2RhdGUnKSB8fCB0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXQnKS52YWwoKTtcclxuXHRcdFx0XHRpZiAoZGF0ZXMgJiYgdGhpcy5vLm11bHRpZGF0ZSlcclxuXHRcdFx0XHRcdGRhdGVzID0gZGF0ZXMuc3BsaXQodGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcik7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZGF0ZXMgPSBbZGF0ZXNdO1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRhdGVzID0gJC5tYXAoZGF0ZXMsICQucHJveHkoZnVuY3Rpb24oZGF0ZSl7XHJcblx0XHRcdFx0cmV0dXJuIERQR2xvYmFsLnBhcnNlRGF0ZShkYXRlLCB0aGlzLm8uZm9ybWF0LCB0aGlzLm8ubGFuZ3VhZ2UpO1xyXG5cdFx0XHR9LCB0aGlzKSk7XHJcblx0XHRcdGRhdGVzID0gJC5ncmVwKGRhdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGRhdGUpe1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRkYXRlIDwgdGhpcy5vLnN0YXJ0RGF0ZSB8fFxyXG5cdFx0XHRcdFx0ZGF0ZSA+IHRoaXMuby5lbmREYXRlIHx8XHJcblx0XHRcdFx0XHQhZGF0ZVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0sIHRoaXMpLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5kYXRlcy5yZXBsYWNlKGRhdGVzKTtcclxuXHJcblx0XHRcdGlmICh0aGlzLmRhdGVzLmxlbmd0aClcclxuXHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5kYXRlcy5nZXQoLTEpKTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy52aWV3RGF0ZSA8IHRoaXMuby5zdGFydERhdGUpXHJcblx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuby5zdGFydERhdGUpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLnZpZXdEYXRlID4gdGhpcy5vLmVuZERhdGUpXHJcblx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuby5lbmREYXRlKTtcclxuXHJcblx0XHRcdGlmIChmcm9tQXJncyl7XHJcblx0XHRcdFx0Ly8gc2V0dGluZyBkYXRlIGJ5IGNsaWNraW5nXHJcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGRhdGVzLmxlbmd0aCl7XHJcblx0XHRcdFx0Ly8gc2V0dGluZyBkYXRlIGJ5IHR5cGluZ1xyXG5cdFx0XHRcdGlmIChTdHJpbmcob2xkRGF0ZXMpICE9PSBTdHJpbmcodGhpcy5kYXRlcykpXHJcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF0aGlzLmRhdGVzLmxlbmd0aCAmJiBvbGREYXRlcy5sZW5ndGgpXHJcblx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2xlYXJEYXRlJyk7XHJcblxyXG5cdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZmlsbERvdzogZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGRvd0NudCA9IHRoaXMuby53ZWVrU3RhcnQsXHJcblx0XHRcdFx0aHRtbCA9ICc8dHI+JztcclxuXHRcdFx0aWYgKHRoaXMuby5jYWxlbmRhcldlZWtzKXtcclxuXHRcdFx0XHR2YXIgY2VsbCA9ICc8dGggY2xhc3M9XCJjd1wiPiZuYnNwOzwvdGg+JztcclxuXHRcdFx0XHRodG1sICs9IGNlbGw7XHJcblx0XHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItZGF5cyB0aGVhZCB0cjpmaXJzdC1jaGlsZCcpLnByZXBlbmQoY2VsbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0d2hpbGUgKGRvd0NudCA8IHRoaXMuby53ZWVrU3RhcnQgKyA3KXtcclxuXHRcdFx0XHRodG1sICs9ICc8dGggY2xhc3M9XCJkb3dcIj4nK2RhdGVzW3RoaXMuby5sYW5ndWFnZV0uZGF5c01pblsoZG93Q250KyspJTddKyc8L3RoPic7XHJcblx0XHRcdH1cclxuXHRcdFx0aHRtbCArPSAnPC90cj4nO1xyXG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1kYXlzIHRoZWFkJykuYXBwZW5kKGh0bWwpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRmaWxsTW9udGhzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgaHRtbCA9ICcnLFxyXG5cdFx0XHRpID0gMDtcclxuXHRcdFx0d2hpbGUgKGkgPCAxMil7XHJcblx0XHRcdFx0aHRtbCArPSAnPHNwYW4gY2xhc3M9XCJtb250aFwiPicrZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNTaG9ydFtpKytdKyc8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1tb250aHMgdGQnKS5odG1sKGh0bWwpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRSYW5nZTogZnVuY3Rpb24ocmFuZ2Upe1xyXG5cdFx0XHRpZiAoIXJhbmdlIHx8ICFyYW5nZS5sZW5ndGgpXHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMucmFuZ2U7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLnJhbmdlID0gJC5tYXAocmFuZ2UsIGZ1bmN0aW9uKGQpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGQudmFsdWVPZigpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0Q2xhc3NOYW1lczogZnVuY3Rpb24oZGF0ZSl7XHJcblx0XHRcdHZhciBjbHMgPSBbXSxcclxuXHRcdFx0XHR5ZWFyID0gdGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpLFxyXG5cdFx0XHRcdG1vbnRoID0gdGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpLFxyXG5cdFx0XHRcdHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0aWYgKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA8IHllYXIgfHwgKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA9PT0geWVhciAmJiBkYXRlLmdldFVUQ01vbnRoKCkgPCBtb250aCkpe1xyXG5cdFx0XHRcdGNscy5wdXNoKCdvbGQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiB5ZWFyIHx8IChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHllYXIgJiYgZGF0ZS5nZXRVVENNb250aCgpID4gbW9udGgpKXtcclxuXHRcdFx0XHRjbHMucHVzaCgnbmV3Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuZm9jdXNEYXRlICYmIGRhdGUudmFsdWVPZigpID09PSB0aGlzLmZvY3VzRGF0ZS52YWx1ZU9mKCkpXHJcblx0XHRcdFx0Y2xzLnB1c2goJ2ZvY3VzZWQnKTtcclxuXHRcdFx0Ly8gQ29tcGFyZSBpbnRlcm5hbCBVVEMgZGF0ZSB3aXRoIGxvY2FsIHRvZGF5LCBub3QgVVRDIHRvZGF5XHJcblx0XHRcdGlmICh0aGlzLm8udG9kYXlIaWdobGlnaHQgJiZcclxuXHRcdFx0XHRkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiZcclxuXHRcdFx0XHRkYXRlLmdldFVUQ01vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCkgJiZcclxuXHRcdFx0XHRkYXRlLmdldFVUQ0RhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpKXtcclxuXHRcdFx0XHRjbHMucHVzaCgndG9kYXknKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5kYXRlcy5jb250YWlucyhkYXRlKSAhPT0gLTEpXHJcblx0XHRcdFx0Y2xzLnB1c2goJ2FjdGl2ZScpO1xyXG5cdFx0XHRpZiAoZGF0ZS52YWx1ZU9mKCkgPCB0aGlzLm8uc3RhcnREYXRlIHx8IGRhdGUudmFsdWVPZigpID4gdGhpcy5vLmVuZERhdGUgfHxcclxuXHRcdFx0XHQkLmluQXJyYXkoZGF0ZS5nZXRVVENEYXkoKSwgdGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCkgIT09IC0xKXtcclxuXHRcdFx0XHRjbHMucHVzaCgnZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5yYW5nZSl7XHJcblx0XHRcdFx0aWYgKGRhdGUgPiB0aGlzLnJhbmdlWzBdICYmIGRhdGUgPCB0aGlzLnJhbmdlW3RoaXMucmFuZ2UubGVuZ3RoLTFdKXtcclxuXHRcdFx0XHRcdGNscy5wdXNoKCdyYW5nZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoJC5pbkFycmF5KGRhdGUudmFsdWVPZigpLCB0aGlzLnJhbmdlKSAhPT0gLTEpe1xyXG5cdFx0XHRcdFx0Y2xzLnB1c2goJ3NlbGVjdGVkJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBjbHM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbGw6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBkID0gbmV3IERhdGUodGhpcy52aWV3RGF0ZSksXHJcblx0XHRcdFx0eWVhciA9IGQuZ2V0VVRDRnVsbFllYXIoKSxcclxuXHRcdFx0XHRtb250aCA9IGQuZ2V0VVRDTW9udGgoKSxcclxuXHRcdFx0XHRzdGFydFllYXIgPSB0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgPyB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiAtSW5maW5pdHksXHJcblx0XHRcdFx0c3RhcnRNb250aCA9IHRoaXMuby5zdGFydERhdGUgIT09IC1JbmZpbml0eSA/IHRoaXMuby5zdGFydERhdGUuZ2V0VVRDTW9udGgoKSA6IC1JbmZpbml0eSxcclxuXHRcdFx0XHRlbmRZZWFyID0gdGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ID8gdGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKSA6IEluZmluaXR5LFxyXG5cdFx0XHRcdGVuZE1vbnRoID0gdGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ID8gdGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKSA6IEluZmluaXR5LFxyXG5cdFx0XHRcdHRvZGF5dHh0ID0gZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS50b2RheSB8fCBkYXRlc1snZW4nXS50b2RheSB8fCAnJyxcclxuXHRcdFx0XHRjbGVhcnR4dCA9IGRhdGVzW3RoaXMuby5sYW5ndWFnZV0uY2xlYXIgfHwgZGF0ZXNbJ2VuJ10uY2xlYXIgfHwgJycsXHJcblx0XHRcdFx0dG9vbHRpcDtcclxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItZGF5cyB0aGVhZCB0aC5kYXRlcGlja2VyLXN3aXRjaCcpXHJcblx0XHRcdFx0XHRcdC50ZXh0KGRhdGVzW3RoaXMuby5sYW5ndWFnZV0ubW9udGhzW21vbnRoXSsnICcreWVhcik7XHJcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJ3Rmb290IHRoLnRvZGF5JylcclxuXHRcdFx0XHRcdFx0LnRleHQodG9kYXl0eHQpXHJcblx0XHRcdFx0XHRcdC50b2dnbGUodGhpcy5vLnRvZGF5QnRuICE9PSBmYWxzZSk7XHJcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJ3Rmb290IHRoLmNsZWFyJylcclxuXHRcdFx0XHRcdFx0LnRleHQoY2xlYXJ0eHQpXHJcblx0XHRcdFx0XHRcdC50b2dnbGUodGhpcy5vLmNsZWFyQnRuICE9PSBmYWxzZSk7XHJcblx0XHRcdHRoaXMudXBkYXRlTmF2QXJyb3dzKCk7XHJcblx0XHRcdHRoaXMuZmlsbE1vbnRocygpO1xyXG5cdFx0XHR2YXIgcHJldk1vbnRoID0gVVRDRGF0ZSh5ZWFyLCBtb250aC0xLCAyOCksXHJcblx0XHRcdFx0ZGF5ID0gRFBHbG9iYWwuZ2V0RGF5c0luTW9udGgocHJldk1vbnRoLmdldFVUQ0Z1bGxZZWFyKCksIHByZXZNb250aC5nZXRVVENNb250aCgpKTtcclxuXHRcdFx0cHJldk1vbnRoLnNldFVUQ0RhdGUoZGF5KTtcclxuXHRcdFx0cHJldk1vbnRoLnNldFVUQ0RhdGUoZGF5IC0gKHByZXZNb250aC5nZXRVVENEYXkoKSAtIHRoaXMuby53ZWVrU3RhcnQgKyA3KSU3KTtcclxuXHRcdFx0dmFyIG5leHRNb250aCA9IG5ldyBEYXRlKHByZXZNb250aCk7XHJcblx0XHRcdG5leHRNb250aC5zZXRVVENEYXRlKG5leHRNb250aC5nZXRVVENEYXRlKCkgKyA0Mik7XHJcblx0XHRcdG5leHRNb250aCA9IG5leHRNb250aC52YWx1ZU9mKCk7XHJcblx0XHRcdHZhciBodG1sID0gW107XHJcblx0XHRcdHZhciBjbHNOYW1lO1xyXG5cdFx0XHR3aGlsZSAocHJldk1vbnRoLnZhbHVlT2YoKSA8IG5leHRNb250aCl7XHJcblx0XHRcdFx0aWYgKHByZXZNb250aC5nZXRVVENEYXkoKSA9PT0gdGhpcy5vLndlZWtTdGFydCl7XHJcblx0XHRcdFx0XHRodG1sLnB1c2goJzx0cj4nKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLm8uY2FsZW5kYXJXZWVrcyl7XHJcblx0XHRcdFx0XHRcdC8vIElTTyA4NjAxOiBGaXJzdCB3ZWVrIGNvbnRhaW5zIGZpcnN0IHRodXJzZGF5LlxyXG5cdFx0XHRcdFx0XHQvLyBJU08gYWxzbyBzdGF0ZXMgd2VlayBzdGFydHMgb24gTW9uZGF5LCBidXQgd2UgY2FuIGJlIG1vcmUgYWJzdHJhY3QgaGVyZS5cclxuXHRcdFx0XHRcdFx0dmFyXHJcblx0XHRcdFx0XHRcdFx0Ly8gU3RhcnQgb2YgY3VycmVudCB3ZWVrOiBiYXNlZCBvbiB3ZWVrc3RhcnQvY3VycmVudCBkYXRlXHJcblx0XHRcdFx0XHRcdFx0d3MgPSBuZXcgRGF0ZSgrcHJldk1vbnRoICsgKHRoaXMuby53ZWVrU3RhcnQgLSBwcmV2TW9udGguZ2V0VVRDRGF5KCkgLSA3KSAlIDcgKiA4NjRlNSksXHJcblx0XHRcdFx0XHRcdFx0Ly8gVGh1cnNkYXkgb2YgdGhpcyB3ZWVrXHJcblx0XHRcdFx0XHRcdFx0dGggPSBuZXcgRGF0ZShOdW1iZXIod3MpICsgKDcgKyA0IC0gd3MuZ2V0VVRDRGF5KCkpICUgNyAqIDg2NGU1KSxcclxuXHRcdFx0XHRcdFx0XHQvLyBGaXJzdCBUaHVyc2RheSBvZiB5ZWFyLCB5ZWFyIGZyb20gdGh1cnNkYXlcclxuXHRcdFx0XHRcdFx0XHR5dGggPSBuZXcgRGF0ZShOdW1iZXIoeXRoID0gVVRDRGF0ZSh0aC5nZXRVVENGdWxsWWVhcigpLCAwLCAxKSkgKyAoNyArIDQgLSB5dGguZ2V0VVRDRGF5KCkpJTcqODY0ZTUpLFxyXG5cdFx0XHRcdFx0XHRcdC8vIENhbGVuZGFyIHdlZWs6IG1zIGJldHdlZW4gdGh1cnNkYXlzLCBkaXYgbXMgcGVyIGRheSwgZGl2IDcgZGF5c1xyXG5cdFx0XHRcdFx0XHRcdGNhbFdlZWsgPSAgKHRoIC0geXRoKSAvIDg2NGU1IC8gNyArIDE7XHJcblx0XHRcdFx0XHRcdGh0bWwucHVzaCgnPHRkIGNsYXNzPVwiY3dcIj4nKyBjYWxXZWVrICsnPC90ZD4nKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNsc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZXMocHJldk1vbnRoKTtcclxuXHRcdFx0XHRjbHNOYW1lLnB1c2goJ2RheScpO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5vLmJlZm9yZVNob3dEYXkgIT09ICQubm9vcCl7XHJcblx0XHRcdFx0XHR2YXIgYmVmb3JlID0gdGhpcy5vLmJlZm9yZVNob3dEYXkodGhpcy5fdXRjX3RvX2xvY2FsKHByZXZNb250aCkpO1xyXG5cdFx0XHRcdFx0aWYgKGJlZm9yZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0XHRiZWZvcmUgPSB7fTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZihiZWZvcmUpID09PSAnYm9vbGVhbicpXHJcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHtlbmFibGVkOiBiZWZvcmV9O1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mKGJlZm9yZSkgPT09ICdzdHJpbmcnKVxyXG5cdFx0XHRcdFx0XHRiZWZvcmUgPSB7Y2xhc3NlczogYmVmb3JlfTtcclxuXHRcdFx0XHRcdGlmIChiZWZvcmUuZW5hYmxlZCA9PT0gZmFsc2UpXHJcblx0XHRcdFx0XHRcdGNsc05hbWUucHVzaCgnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRcdGlmIChiZWZvcmUuY2xhc3NlcylcclxuXHRcdFx0XHRcdFx0Y2xzTmFtZSA9IGNsc05hbWUuY29uY2F0KGJlZm9yZS5jbGFzc2VzLnNwbGl0KC9cXHMrLykpO1xyXG5cdFx0XHRcdFx0aWYgKGJlZm9yZS50b29sdGlwKVxyXG5cdFx0XHRcdFx0XHR0b29sdGlwID0gYmVmb3JlLnRvb2x0aXA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjbHNOYW1lID0gJC51bmlxdWUoY2xzTmFtZSk7XHJcblx0XHRcdFx0aHRtbC5wdXNoKCc8dGQgY2xhc3M9XCInK2Nsc05hbWUuam9pbignICcpKydcIicgKyAodG9vbHRpcCA/ICcgdGl0bGU9XCInK3Rvb2x0aXArJ1wiJyA6ICcnKSArICc+JytwcmV2TW9udGguZ2V0VVRDRGF0ZSgpICsgJzwvdGQ+Jyk7XHJcblx0XHRcdFx0aWYgKHByZXZNb250aC5nZXRVVENEYXkoKSA9PT0gdGhpcy5vLndlZWtFbmQpe1xyXG5cdFx0XHRcdFx0aHRtbC5wdXNoKCc8L3RyPicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwcmV2TW9udGguc2V0VVRDRGF0ZShwcmV2TW9udGguZ2V0VVRDRGF0ZSgpKzEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLWRheXMgdGJvZHknKS5lbXB0eSgpLmFwcGVuZChodG1sLmpvaW4oJycpKTtcclxuXHJcblx0XHRcdHZhciBtb250aHMgPSB0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1tb250aHMnKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgndGg6ZXEoMSknKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KHllYXIpXHJcblx0XHRcdFx0XHRcdFx0LmVuZCgpXHJcblx0XHRcdFx0XHRcdC5maW5kKCdzcGFuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0JC5lYWNoKHRoaXMuZGF0ZXMsIGZ1bmN0aW9uKGksIGQpe1xyXG5cdFx0XHRcdGlmIChkLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHllYXIpXHJcblx0XHRcdFx0XHRtb250aHMuZXEoZC5nZXRVVENNb250aCgpKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKHllYXIgPCBzdGFydFllYXIgfHwgeWVhciA+IGVuZFllYXIpe1xyXG5cdFx0XHRcdG1vbnRocy5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoeWVhciA9PT0gc3RhcnRZZWFyKXtcclxuXHRcdFx0XHRtb250aHMuc2xpY2UoMCwgc3RhcnRNb250aCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHllYXIgPT09IGVuZFllYXIpe1xyXG5cdFx0XHRcdG1vbnRocy5zbGljZShlbmRNb250aCsxKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aHRtbCA9ICcnO1xyXG5cdFx0XHR5ZWFyID0gcGFyc2VJbnQoeWVhci8xMCwgMTApICogMTA7XHJcblx0XHRcdHZhciB5ZWFyQ29udCA9IHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLXllYXJzJylcclxuXHRcdFx0XHRcdFx0XHRcdC5maW5kKCd0aDplcSgxKScpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHllYXIgKyAnLScgKyAoeWVhciArIDkpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuZW5kKClcclxuXHRcdFx0XHRcdFx0XHRcdC5maW5kKCd0ZCcpO1xyXG5cdFx0XHR5ZWFyIC09IDE7XHJcblx0XHRcdHZhciB5ZWFycyA9ICQubWFwKHRoaXMuZGF0ZXMsIGZ1bmN0aW9uKGQpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIGQuZ2V0VVRDRnVsbFllYXIoKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRjbGFzc2VzO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gLTE7IGkgPCAxMTsgaSsrKXtcclxuXHRcdFx0XHRjbGFzc2VzID0gWyd5ZWFyJ107XHJcblx0XHRcdFx0aWYgKGkgPT09IC0xKVxyXG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCdvbGQnKTtcclxuXHRcdFx0XHRlbHNlIGlmIChpID09PSAxMClcclxuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnbmV3Jyk7XHJcblx0XHRcdFx0aWYgKCQuaW5BcnJheSh5ZWFyLCB5ZWFycykgIT09IC0xKVxyXG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRpZiAoeWVhciA8IHN0YXJ0WWVhciB8fCB5ZWFyID4gZW5kWWVhcilcclxuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKTtcclxuXHRcdFx0XHRodG1sICs9ICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc2VzLmpvaW4oJyAnKSArICdcIj4nK3llYXIrJzwvc3Bhbj4nO1xyXG5cdFx0XHRcdHllYXIgKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHR5ZWFyQ29udC5odG1sKGh0bWwpO1xyXG5cdFx0fSxcclxuXHJcblx0XHR1cGRhdGVOYXZBcnJvd3M6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmICghdGhpcy5fYWxsb3dfdXBkYXRlKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdHZhciBkID0gbmV3IERhdGUodGhpcy52aWV3RGF0ZSksXHJcblx0XHRcdFx0eWVhciA9IGQuZ2V0VVRDRnVsbFllYXIoKSxcclxuXHRcdFx0XHRtb250aCA9IGQuZ2V0VVRDTW9udGgoKTtcclxuXHRcdFx0c3dpdGNoICh0aGlzLnZpZXdNb2RlKXtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRpZiAodGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ICYmIHllYXIgPD0gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpICYmIG1vbnRoIDw9IHRoaXMuby5zdGFydERhdGUuZ2V0VVRDTW9udGgoKSl7XHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5wcmV2JykuY3NzKHt2aXNpYmlsaXR5OiAnaGlkZGVuJ30pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5wcmV2JykuY3NzKHt2aXNpYmlsaXR5OiAndmlzaWJsZSd9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLm8uZW5kRGF0ZSAhPT0gSW5maW5pdHkgJiYgeWVhciA+PSB0aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpICYmIG1vbnRoID49IHRoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCkpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKCcubmV4dCcpLmNzcyh7dmlzaWJpbGl0eTogJ2hpZGRlbid9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKCcubmV4dCcpLmNzcyh7dmlzaWJpbGl0eTogJ3Zpc2libGUnfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuby5zdGFydERhdGUgIT09IC1JbmZpbml0eSAmJiB5ZWFyIDw9IHRoaXMuby5zdGFydERhdGUuZ2V0VVRDRnVsbFllYXIoKSl7XHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5wcmV2JykuY3NzKHt2aXNpYmlsaXR5OiAnaGlkZGVuJ30pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5wcmV2JykuY3NzKHt2aXNpYmlsaXR5OiAndmlzaWJsZSd9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLm8uZW5kRGF0ZSAhPT0gSW5maW5pdHkgJiYgeWVhciA+PSB0aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLm5leHQnKS5jc3Moe3Zpc2liaWxpdHk6ICdoaWRkZW4nfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLm5leHQnKS5jc3Moe3Zpc2liaWxpdHk6ICd2aXNpYmxlJ30pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xpY2s6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdzcGFuLCB0ZCwgdGgnKSxcclxuXHRcdFx0XHR5ZWFyLCBtb250aCwgZGF5O1xyXG5cdFx0XHRpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMSl7XHJcblx0XHRcdFx0c3dpdGNoICh0YXJnZXRbMF0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7XHJcblx0XHRcdFx0XHRjYXNlICd0aCc6XHJcblx0XHRcdFx0XHRcdHN3aXRjaCAodGFyZ2V0WzBdLmNsYXNzTmFtZSl7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnZGF0ZXBpY2tlci1zd2l0Y2gnOlxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93TW9kZSgxKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3ByZXYnOlxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25leHQnOlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGRpciA9IERQR2xvYmFsLm1vZGVzW3RoaXMudmlld01vZGVdLm5hdlN0ZXAgKiAodGFyZ2V0WzBdLmNsYXNzTmFtZSA9PT0gJ3ByZXYnID8gLTEgOiAxKTtcclxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAodGhpcy52aWV3TW9kZSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5tb3ZlTW9udGgodGhpcy52aWV3RGF0ZSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VNb250aCcsIHRoaXMudmlld0RhdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5tb3ZlWWVhcih0aGlzLnZpZXdEYXRlLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLnZpZXdNb2RlID09PSAxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlWWVhcicsIHRoaXMudmlld0RhdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICd0b2RheSc6XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRlID0gVVRDRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIDAsIDAsIDApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd01vZGUoLTIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHdoaWNoID0gdGhpcy5vLnRvZGF5QnRuID09PSAnbGlua2VkJyA/IG51bGwgOiAndmlldyc7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl9zZXREYXRlKGRhdGUsIHdoaWNoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2NsZWFyJzpcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBlbGVtZW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuaXNJbnB1dClcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcclxuXHRcdFx0XHRcdFx0XHRcdGVsc2UgaWYgKHRoaXMuY29tcG9uZW50KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudClcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC52YWwoXCJcIikuY2hhbmdlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuby5hdXRvY2xvc2UpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdzcGFuJzpcclxuXHRcdFx0XHRcdFx0aWYgKCF0YXJnZXQuaXMoJy5kaXNhYmxlZCcpKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlLnNldFVUQ0RhdGUoMSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRhcmdldC5pcygnLm1vbnRoJykpe1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5ID0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdG1vbnRoID0gdGFyZ2V0LnBhcmVudCgpLmZpbmQoJ3NwYW4nKS5pbmRleCh0YXJnZXQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0eWVhciA9IHRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudmlld0RhdGUuc2V0VVRDTW9udGgobW9udGgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlTW9udGgnLCB0aGlzLnZpZXdEYXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLm8ubWluVmlld01vZGUgPT09IDEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9zZXREYXRlKFVUQ0RhdGUoeWVhciwgbW9udGgsIGRheSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRheSA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRtb250aCA9IDA7XHJcblx0XHRcdFx0XHRcdFx0XHR5ZWFyID0gcGFyc2VJbnQodGFyZ2V0LnRleHQoKSwgMTApfHwwO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy52aWV3RGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZVllYXInLCB0aGlzLnZpZXdEYXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLm8ubWluVmlld01vZGUgPT09IDIpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl9zZXREYXRlKFVUQ0RhdGUoeWVhciwgbW9udGgsIGRheSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3dNb2RlKC0xKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3RkJzpcclxuXHRcdFx0XHRcdFx0aWYgKHRhcmdldC5pcygnLmRheScpICYmICF0YXJnZXQuaXMoJy5kaXNhYmxlZCcpKXtcclxuXHRcdFx0XHRcdFx0XHRkYXkgPSBwYXJzZUludCh0YXJnZXQudGV4dCgpLCAxMCl8fDE7XHJcblx0XHRcdFx0XHRcdFx0eWVhciA9IHRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKTtcclxuXHRcdFx0XHRcdFx0XHRtb250aCA9IHRoaXMudmlld0RhdGUuZ2V0VVRDTW9udGgoKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGFyZ2V0LmlzKCcub2xkJykpe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG1vbnRoID09PSAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bW9udGggPSAxMTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0eWVhciAtPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1vbnRoIC09IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2UgaWYgKHRhcmdldC5pcygnLm5ldycpKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChtb250aCA9PT0gMTEpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtb250aCA9IDA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHllYXIgKz0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtb250aCArPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9zZXREYXRlKFVUQ0RhdGUoeWVhciwgbW9udGgsIGRheSkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5waWNrZXIuaXMoJzp2aXNpYmxlJykgJiYgdGhpcy5fZm9jdXNlZF9mcm9tKXtcclxuXHRcdFx0XHQkKHRoaXMuX2ZvY3VzZWRfZnJvbSkuZm9jdXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWxldGUgdGhpcy5fZm9jdXNlZF9mcm9tO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfdG9nZ2xlX211bHRpZGF0ZTogZnVuY3Rpb24oZGF0ZSl7XHJcblx0XHRcdHZhciBpeCA9IHRoaXMuZGF0ZXMuY29udGFpbnMoZGF0ZSk7XHJcblx0XHRcdGlmICghZGF0ZSl7XHJcblx0XHRcdFx0dGhpcy5kYXRlcy5jbGVhcigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGl4ICE9PSAtMSl7XHJcblx0XHRcdFx0dGhpcy5kYXRlcy5yZW1vdmUoaXgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZGF0ZXMucHVzaChkYXRlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuby5tdWx0aWRhdGUgPT09ICdudW1iZXInKVxyXG5cdFx0XHRcdHdoaWxlICh0aGlzLmRhdGVzLmxlbmd0aCA+IHRoaXMuby5tdWx0aWRhdGUpXHJcblx0XHRcdFx0XHR0aGlzLmRhdGVzLnJlbW92ZSgwKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X3NldERhdGU6IGZ1bmN0aW9uKGRhdGUsIHdoaWNoKXtcclxuXHRcdFx0aWYgKCF3aGljaCB8fCB3aGljaCA9PT0gJ2RhdGUnKVxyXG5cdFx0XHRcdHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoZGF0ZSAmJiBuZXcgRGF0ZShkYXRlKSk7XHJcblx0XHRcdGlmICghd2hpY2ggfHwgd2hpY2ggID09PSAndmlldycpXHJcblx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IGRhdGUgJiYgbmV3IERhdGUoZGF0ZSk7XHJcblxyXG5cdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XHJcblx0XHRcdHZhciBlbGVtZW50O1xyXG5cdFx0XHRpZiAodGhpcy5pc0lucHV0KXtcclxuXHRcdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY29tcG9uZW50KXtcclxuXHRcdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVsZW1lbnQpe1xyXG5cdFx0XHRcdGVsZW1lbnQuY2hhbmdlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuby5hdXRvY2xvc2UgJiYgKCF3aGljaCB8fCB3aGljaCA9PT0gJ2RhdGUnKSl7XHJcblx0XHRcdFx0dGhpcy5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0bW92ZU1vbnRoOiBmdW5jdGlvbihkYXRlLCBkaXIpe1xyXG5cdFx0XHRpZiAoIWRhdGUpXHJcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdFx0aWYgKCFkaXIpXHJcblx0XHRcdFx0cmV0dXJuIGRhdGU7XHJcblx0XHRcdHZhciBuZXdfZGF0ZSA9IG5ldyBEYXRlKGRhdGUudmFsdWVPZigpKSxcclxuXHRcdFx0XHRkYXkgPSBuZXdfZGF0ZS5nZXRVVENEYXRlKCksXHJcblx0XHRcdFx0bW9udGggPSBuZXdfZGF0ZS5nZXRVVENNb250aCgpLFxyXG5cdFx0XHRcdG1hZyA9IE1hdGguYWJzKGRpciksXHJcblx0XHRcdFx0bmV3X21vbnRoLCB0ZXN0O1xyXG5cdFx0XHRkaXIgPSBkaXIgPiAwID8gMSA6IC0xO1xyXG5cdFx0XHRpZiAobWFnID09PSAxKXtcclxuXHRcdFx0XHR0ZXN0ID0gZGlyID09PSAtMVxyXG5cdFx0XHRcdFx0Ly8gSWYgZ29pbmcgYmFjayBvbmUgbW9udGgsIG1ha2Ugc3VyZSBtb250aCBpcyBub3QgY3VycmVudCBtb250aFxyXG5cdFx0XHRcdFx0Ly8gKGVnLCBNYXIgMzEgLT4gRmViIDMxID09IEZlYiAyOCwgbm90IE1hciAwMilcclxuXHRcdFx0XHRcdD8gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ld19kYXRlLmdldFVUQ01vbnRoKCkgPT09IG1vbnRoO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gSWYgZ29pbmcgZm9yd2FyZCBvbmUgbW9udGgsIG1ha2Ugc3VyZSBtb250aCBpcyBhcyBleHBlY3RlZFxyXG5cdFx0XHRcdFx0Ly8gKGVnLCBKYW4gMzEgLT4gRmViIDMxID09IEZlYiAyOCwgbm90IE1hciAwMilcclxuXHRcdFx0XHRcdDogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG5ld19kYXRlLmdldFVUQ01vbnRoKCkgIT09IG5ld19tb250aDtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0bmV3X21vbnRoID0gbW9udGggKyBkaXI7XHJcblx0XHRcdFx0bmV3X2RhdGUuc2V0VVRDTW9udGgobmV3X21vbnRoKTtcclxuXHRcdFx0XHQvLyBEZWMgLT4gSmFuICgxMikgb3IgSmFuIC0+IERlYyAoLTEpIC0tIGxpbWl0IGV4cGVjdGVkIGRhdGUgdG8gMC0xMVxyXG5cdFx0XHRcdGlmIChuZXdfbW9udGggPCAwIHx8IG5ld19tb250aCA+IDExKVxyXG5cdFx0XHRcdFx0bmV3X21vbnRoID0gKG5ld19tb250aCArIDEyKSAlIDEyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdC8vIEZvciBtYWduaXR1ZGVzID4xLCBtb3ZlIG9uZSBtb250aCBhdCBhIHRpbWUuLi5cclxuXHRcdFx0XHRmb3IgKHZhciBpPTA7IGkgPCBtYWc7IGkrKylcclxuXHRcdFx0XHRcdC8vIC4uLndoaWNoIG1pZ2h0IGRlY3JlYXNlIHRoZSBkYXkgKGVnLCBKYW4gMzEgdG8gRmViIDI4LCBldGMpLi4uXHJcblx0XHRcdFx0XHRuZXdfZGF0ZSA9IHRoaXMubW92ZU1vbnRoKG5ld19kYXRlLCBkaXIpO1xyXG5cdFx0XHRcdC8vIC4uLnRoZW4gcmVzZXQgdGhlIGRheSwga2VlcGluZyBpdCBpbiB0aGUgbmV3IG1vbnRoXHJcblx0XHRcdFx0bmV3X21vbnRoID0gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKTtcclxuXHRcdFx0XHRuZXdfZGF0ZS5zZXRVVENEYXRlKGRheSk7XHJcblx0XHRcdFx0dGVzdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gbmV3X21vbnRoICE9PSBuZXdfZGF0ZS5nZXRVVENNb250aCgpO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gQ29tbW9uIGRhdGUtcmVzZXR0aW5nIGxvb3AgLS0gaWYgZGF0ZSBpcyBiZXlvbmQgZW5kIG9mIG1vbnRoLCBtYWtlIGl0XHJcblx0XHRcdC8vIGVuZCBvZiBtb250aFxyXG5cdFx0XHR3aGlsZSAodGVzdCgpKXtcclxuXHRcdFx0XHRuZXdfZGF0ZS5zZXRVVENEYXRlKC0tZGF5KTtcclxuXHRcdFx0XHRuZXdfZGF0ZS5zZXRVVENNb250aChuZXdfbW9udGgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBuZXdfZGF0ZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bW92ZVllYXI6IGZ1bmN0aW9uKGRhdGUsIGRpcil7XHJcblx0XHRcdHJldHVybiB0aGlzLm1vdmVNb250aChkYXRlLCBkaXIqMTIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkYXRlV2l0aGluUmFuZ2U6IGZ1bmN0aW9uKGRhdGUpe1xyXG5cdFx0XHRyZXR1cm4gZGF0ZSA+PSB0aGlzLm8uc3RhcnREYXRlICYmIGRhdGUgPD0gdGhpcy5vLmVuZERhdGU7XHJcblx0XHR9LFxyXG5cclxuXHRcdGtleWRvd246IGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRpZiAodGhpcy5waWNrZXIuaXMoJzpub3QoOnZpc2libGUpJykpe1xyXG5cdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDI3KSAvLyBhbGxvdyBlc2NhcGUgdG8gaGlkZSBhbmQgcmUtc2hvdyBwaWNrZXJcclxuXHRcdFx0XHRcdHRoaXMuc2hvdygpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgZGF0ZUNoYW5nZWQgPSBmYWxzZSxcclxuXHRcdFx0XHRkaXIsIG5ld0RhdGUsIG5ld1ZpZXdEYXRlLFxyXG5cdFx0XHRcdGZvY3VzRGF0ZSA9IHRoaXMuZm9jdXNEYXRlIHx8IHRoaXMudmlld0RhdGU7XHJcblx0XHRcdHN3aXRjaCAoZS5rZXlDb2RlKXtcclxuXHRcdFx0XHRjYXNlIDI3OiAvLyBlc2NhcGVcclxuXHRcdFx0XHRcdGlmICh0aGlzLmZvY3VzRGF0ZSl7XHJcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCB0aGlzLnZpZXdEYXRlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0dGhpcy5oaWRlKCk7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDM3OiAvLyBsZWZ0XHJcblx0XHRcdFx0Y2FzZSAzOTogLy8gcmlnaHRcclxuXHRcdFx0XHRcdGlmICghdGhpcy5vLmtleWJvYXJkTmF2aWdhdGlvbilcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkaXIgPSBlLmtleUNvZGUgPT09IDM3ID8gLTEgOiAxO1xyXG5cdFx0XHRcdFx0aWYgKGUuY3RybEtleSl7XHJcblx0XHRcdFx0XHRcdG5ld0RhdGUgPSB0aGlzLm1vdmVZZWFyKHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCBVVENUb2RheSgpLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZSA9IHRoaXMubW92ZVllYXIoZm9jdXNEYXRlLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VZZWFyJywgdGhpcy52aWV3RGF0ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChlLnNoaWZ0S2V5KXtcclxuXHRcdFx0XHRcdFx0bmV3RGF0ZSA9IHRoaXMubW92ZU1vbnRoKHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCBVVENUb2RheSgpLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZSA9IHRoaXMubW92ZU1vbnRoKGZvY3VzRGF0ZSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlTW9udGgnLCB0aGlzLnZpZXdEYXRlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXdEYXRlID0gbmV3IERhdGUodGhpcy5kYXRlcy5nZXQoLTEpIHx8IFVUQ1RvZGF5KCkpO1xyXG5cdFx0XHRcdFx0XHRuZXdEYXRlLnNldFVUQ0RhdGUobmV3RGF0ZS5nZXRVVENEYXRlKCkgKyBkaXIpO1xyXG5cdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZSA9IG5ldyBEYXRlKGZvY3VzRGF0ZSk7XHJcblx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlLnNldFVUQ0RhdGUoZm9jdXNEYXRlLmdldFVUQ0RhdGUoKSArIGRpcik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRlV2l0aGluUmFuZ2UobmV3RGF0ZSkpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IHRoaXMudmlld0RhdGUgPSBuZXdWaWV3RGF0ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAzODogLy8gdXBcclxuXHRcdFx0XHRjYXNlIDQwOiAvLyBkb3duXHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuby5rZXlib2FyZE5hdmlnYXRpb24pXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGlyID0gZS5rZXlDb2RlID09PSAzOCA/IC0xIDogMTtcclxuXHRcdFx0XHRcdGlmIChlLmN0cmxLZXkpe1xyXG5cdFx0XHRcdFx0XHRuZXdEYXRlID0gdGhpcy5tb3ZlWWVhcih0aGlzLmRhdGVzLmdldCgtMSkgfHwgVVRDVG9kYXkoKSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSB0aGlzLm1vdmVZZWFyKGZvY3VzRGF0ZSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlWWVhcicsIHRoaXMudmlld0RhdGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoZS5zaGlmdEtleSl7XHJcblx0XHRcdFx0XHRcdG5ld0RhdGUgPSB0aGlzLm1vdmVNb250aCh0aGlzLmRhdGVzLmdldCgtMSkgfHwgVVRDVG9kYXkoKSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSB0aGlzLm1vdmVNb250aChmb2N1c0RhdGUsIGRpcik7XHJcblx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZU1vbnRoJywgdGhpcy52aWV3RGF0ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCBVVENUb2RheSgpKTtcclxuXHRcdFx0XHRcdFx0bmV3RGF0ZS5zZXRVVENEYXRlKG5ld0RhdGUuZ2V0VVRDRGF0ZSgpICsgZGlyICogNyk7XHJcblx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gbmV3IERhdGUoZm9jdXNEYXRlKTtcclxuXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUuc2V0VVRDRGF0ZShmb2N1c0RhdGUuZ2V0VVRDRGF0ZSgpICsgZGlyICogNyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYXRlV2l0aGluUmFuZ2UobmV3RGF0ZSkpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IHRoaXMudmlld0RhdGUgPSBuZXdWaWV3RGF0ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAzMjogLy8gc3BhY2ViYXJcclxuXHRcdFx0XHRcdC8vIFNwYWNlYmFyIGlzIHVzZWQgaW4gbWFudWFsbHkgdHlwaW5nIGRhdGVzIGluIHNvbWUgZm9ybWF0cy5cclxuXHRcdFx0XHRcdC8vIEFzIHN1Y2gsIGl0cyBiZWhhdmlvciBzaG91bGQgbm90IGJlIGhpamFja2VkLlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxMzogLy8gZW50ZXJcclxuXHRcdFx0XHRcdGZvY3VzRGF0ZSA9IHRoaXMuZm9jdXNEYXRlIHx8IHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCB0aGlzLnZpZXdEYXRlO1xyXG5cdFx0XHRcdFx0dGhpcy5fdG9nZ2xlX211bHRpZGF0ZShmb2N1c0RhdGUpO1xyXG5cdFx0XHRcdFx0ZGF0ZUNoYW5nZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCB0aGlzLnZpZXdEYXRlO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5waWNrZXIuaXMoJzp2aXNpYmxlJykpe1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLm8uYXV0b2Nsb3NlKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA5OiAvLyB0YWJcclxuXHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcclxuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLmRhdGVzLmdldCgtMSkgfHwgdGhpcy52aWV3RGF0ZTtcclxuXHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5oaWRlKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGF0ZUNoYW5nZWQpe1xyXG5cdFx0XHRcdGlmICh0aGlzLmRhdGVzLmxlbmd0aClcclxuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjbGVhckRhdGUnKTtcclxuXHRcdFx0XHR2YXIgZWxlbWVudDtcclxuXHRcdFx0XHRpZiAodGhpcy5pc0lucHV0KXtcclxuXHRcdFx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHRoaXMuY29tcG9uZW50KXtcclxuXHRcdFx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGVsZW1lbnQpe1xyXG5cdFx0XHRcdFx0ZWxlbWVudC5jaGFuZ2UoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c2hvd01vZGU6IGZ1bmN0aW9uKGRpcil7XHJcblx0XHRcdGlmIChkaXIpe1xyXG5cdFx0XHRcdHRoaXMudmlld01vZGUgPSBNYXRoLm1heCh0aGlzLm8ubWluVmlld01vZGUsIE1hdGgubWluKDIsIHRoaXMudmlld01vZGUgKyBkaXIpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnBpY2tlclxyXG5cdFx0XHRcdC5maW5kKCc+ZGl2JylcclxuXHRcdFx0XHQuaGlkZSgpXHJcblx0XHRcdFx0LmZpbHRlcignLmRhdGVwaWNrZXItJytEUEdsb2JhbC5tb2Rlc1t0aGlzLnZpZXdNb2RlXS5jbHNOYW1lKVxyXG5cdFx0XHRcdFx0LmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU5hdkFycm93cygpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciBEYXRlUmFuZ2VQaWNrZXIgPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKXtcclxuXHRcdHRoaXMuZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcblx0XHR0aGlzLmlucHV0cyA9ICQubWFwKG9wdGlvbnMuaW5wdXRzLCBmdW5jdGlvbihpKXtcclxuXHRcdFx0cmV0dXJuIGkuanF1ZXJ5ID8gaVswXSA6IGk7XHJcblx0XHR9KTtcclxuXHRcdGRlbGV0ZSBvcHRpb25zLmlucHV0cztcclxuXHJcblx0XHQkKHRoaXMuaW5wdXRzKVxyXG5cdFx0XHQuZGF0ZXBpY2tlcihvcHRpb25zKVxyXG5cdFx0XHQuYmluZCgnY2hhbmdlRGF0ZScsICQucHJveHkodGhpcy5kYXRlVXBkYXRlZCwgdGhpcykpO1xyXG5cclxuXHRcdHRoaXMucGlja2VycyA9ICQubWFwKHRoaXMuaW5wdXRzLCBmdW5jdGlvbihpKXtcclxuXHRcdFx0cmV0dXJuICQoaSkuZGF0YSgnZGF0ZXBpY2tlcicpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnVwZGF0ZURhdGVzKCk7XHJcblx0fTtcclxuXHREYXRlUmFuZ2VQaWNrZXIucHJvdG90eXBlID0ge1xyXG5cdFx0dXBkYXRlRGF0ZXM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuZGF0ZXMgPSAkLm1hcCh0aGlzLnBpY2tlcnMsIGZ1bmN0aW9uKGkpe1xyXG5cdFx0XHRcdHJldHVybiBpLmdldFVUQ0RhdGUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMudXBkYXRlUmFuZ2VzKCk7XHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlUmFuZ2VzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgcmFuZ2UgPSAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcclxuXHRcdFx0XHRyZXR1cm4gZC52YWx1ZU9mKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkLmVhY2godGhpcy5waWNrZXJzLCBmdW5jdGlvbihpLCBwKXtcclxuXHRcdFx0XHRwLnNldFJhbmdlKHJhbmdlKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0ZGF0ZVVwZGF0ZWQ6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHQvLyBgdGhpcy51cGRhdGluZ2AgaXMgYSB3b3JrYXJvdW5kIGZvciBwcmV2ZW50aW5nIGluZmluaXRlIHJlY3Vyc2lvblxyXG5cdFx0XHQvLyBiZXR3ZWVuIGBjaGFuZ2VEYXRlYCB0cmlnZ2VyaW5nIGFuZCBgc2V0VVRDRGF0ZWAgY2FsbGluZy4gIFVudGlsXHJcblx0XHRcdC8vIHRoZXJlIGlzIGEgYmV0dGVyIG1lY2hhbmlzbS5cclxuXHRcdFx0aWYgKHRoaXMudXBkYXRpbmcpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR0aGlzLnVwZGF0aW5nID0gdHJ1ZTtcclxuXHJcblx0XHRcdHZhciBkcCA9ICQoZS50YXJnZXQpLmRhdGEoJ2RhdGVwaWNrZXInKSxcclxuXHRcdFx0XHRuZXdfZGF0ZSA9IGRwLmdldFVUQ0RhdGUoKSxcclxuXHRcdFx0XHRpID0gJC5pbkFycmF5KGUudGFyZ2V0LCB0aGlzLmlucHV0cyksXHJcblx0XHRcdFx0bCA9IHRoaXMuaW5wdXRzLmxlbmd0aDtcclxuXHRcdFx0aWYgKGkgPT09IC0xKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdCQuZWFjaCh0aGlzLnBpY2tlcnMsIGZ1bmN0aW9uKGksIHApe1xyXG5cdFx0XHRcdGlmICghcC5nZXRVVENEYXRlKCkpXHJcblx0XHRcdFx0XHRwLnNldFVUQ0RhdGUobmV3X2RhdGUpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChuZXdfZGF0ZSA8IHRoaXMuZGF0ZXNbaV0pe1xyXG5cdFx0XHRcdC8vIERhdGUgYmVpbmcgbW92ZWQgZWFybGllci9sZWZ0XHJcblx0XHRcdFx0d2hpbGUgKGkgPj0gMCAmJiBuZXdfZGF0ZSA8IHRoaXMuZGF0ZXNbaV0pe1xyXG5cdFx0XHRcdFx0dGhpcy5waWNrZXJzW2ktLV0uc2V0VVRDRGF0ZShuZXdfZGF0ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKG5ld19kYXRlID4gdGhpcy5kYXRlc1tpXSl7XHJcblx0XHRcdFx0Ly8gRGF0ZSBiZWluZyBtb3ZlZCBsYXRlci9yaWdodFxyXG5cdFx0XHRcdHdoaWxlIChpIDwgbCAmJiBuZXdfZGF0ZSA+IHRoaXMuZGF0ZXNbaV0pe1xyXG5cdFx0XHRcdFx0dGhpcy5waWNrZXJzW2krK10uc2V0VVRDRGF0ZShuZXdfZGF0ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudXBkYXRlRGF0ZXMoKTtcclxuXHJcblx0XHRcdGRlbGV0ZSB0aGlzLnVwZGF0aW5nO1xyXG5cdFx0fSxcclxuXHRcdHJlbW92ZTogZnVuY3Rpb24oKXtcclxuXHRcdFx0JC5tYXAodGhpcy5waWNrZXJzLCBmdW5jdGlvbihwKXsgcC5yZW1vdmUoKTsgfSk7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGVwaWNrZXI7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gb3B0c19mcm9tX2VsKGVsLCBwcmVmaXgpe1xyXG5cdFx0Ly8gRGVyaXZlIG9wdGlvbnMgZnJvbSBlbGVtZW50IGRhdGEtYXR0cnNcclxuXHRcdHZhciBkYXRhID0gJChlbCkuZGF0YSgpLFxyXG5cdFx0XHRvdXQgPSB7fSwgaW5rZXksXHJcblx0XHRcdHJlcGxhY2UgPSBuZXcgUmVnRXhwKCdeJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpICsgJyhbQS1aXSknKTtcclxuXHRcdHByZWZpeCA9IG5ldyBSZWdFeHAoJ14nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0ZnVuY3Rpb24gcmVfbG93ZXIoXyxhKXtcclxuXHRcdFx0cmV0dXJuIGEudG9Mb3dlckNhc2UoKTtcclxuXHRcdH1cclxuXHRcdGZvciAodmFyIGtleSBpbiBkYXRhKVxyXG5cdFx0XHRpZiAocHJlZml4LnRlc3Qoa2V5KSl7XHJcblx0XHRcdFx0aW5rZXkgPSBrZXkucmVwbGFjZShyZXBsYWNlLCByZV9sb3dlcik7XHJcblx0XHRcdFx0b3V0W2lua2V5XSA9IGRhdGFba2V5XTtcclxuXHRcdFx0fVxyXG5cdFx0cmV0dXJuIG91dDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9wdHNfZnJvbV9sb2NhbGUobGFuZyl7XHJcblx0XHQvLyBEZXJpdmUgb3B0aW9ucyBmcm9tIGxvY2FsZSBwbHVnaW5zXHJcblx0XHR2YXIgb3V0ID0ge307XHJcblx0XHQvLyBDaGVjayBpZiBcImRlLURFXCIgc3R5bGUgZGF0ZSBpcyBhdmFpbGFibGUsIGlmIG5vdCBsYW5ndWFnZSBzaG91bGRcclxuXHRcdC8vIGZhbGxiYWNrIHRvIDIgbGV0dGVyIGNvZGUgZWcgXCJkZVwiXHJcblx0XHRpZiAoIWRhdGVzW2xhbmddKXtcclxuXHRcdFx0bGFuZyA9IGxhbmcuc3BsaXQoJy0nKVswXTtcclxuXHRcdFx0aWYgKCFkYXRlc1tsYW5nXSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR2YXIgZCA9IGRhdGVzW2xhbmddO1xyXG5cdFx0JC5lYWNoKGxvY2FsZV9vcHRzLCBmdW5jdGlvbihpLGspe1xyXG5cdFx0XHRpZiAoayBpbiBkKVxyXG5cdFx0XHRcdG91dFtrXSA9IGRba107XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBvdXQ7XHJcblx0fVxyXG5cclxuXHR2YXIgb2xkID0gJC5mbi5kYXRlcGlja2VyO1xyXG5cdCQuZm4uZGF0ZXBpY2tlciA9IGZ1bmN0aW9uKG9wdGlvbil7XHJcblx0XHR2YXIgYXJncyA9IEFycmF5LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcblx0XHRhcmdzLnNoaWZ0KCk7XHJcblx0XHR2YXIgaW50ZXJuYWxfcmV0dXJuO1xyXG5cdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0ZGF0YSA9ICR0aGlzLmRhdGEoJ2RhdGVwaWNrZXInKSxcclxuXHRcdFx0XHRvcHRpb25zID0gdHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgb3B0aW9uO1xyXG5cdFx0XHRpZiAoIWRhdGEpe1xyXG5cdFx0XHRcdHZhciBlbG9wdHMgPSBvcHRzX2Zyb21fZWwodGhpcywgJ2RhdGUnKSxcclxuXHRcdFx0XHRcdC8vIFByZWxpbWluYXJ5IG90aW9uc1xyXG5cdFx0XHRcdFx0eG9wdHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGVsb3B0cywgb3B0aW9ucyksXHJcblx0XHRcdFx0XHRsb2NvcHRzID0gb3B0c19mcm9tX2xvY2FsZSh4b3B0cy5sYW5ndWFnZSksXHJcblx0XHRcdFx0XHQvLyBPcHRpb25zIHByaW9yaXR5OiBqcyBhcmdzLCBkYXRhLWF0dHJzLCBsb2NhbGVzLCBkZWZhdWx0c1xyXG5cdFx0XHRcdFx0b3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgbG9jb3B0cywgZWxvcHRzLCBvcHRpb25zKTtcclxuXHRcdFx0XHRpZiAoJHRoaXMuaXMoJy5pbnB1dC1kYXRlcmFuZ2UnKSB8fCBvcHRzLmlucHV0cyl7XHJcblx0XHRcdFx0XHR2YXIgcm9wdHMgPSB7XHJcblx0XHRcdFx0XHRcdGlucHV0czogb3B0cy5pbnB1dHMgfHwgJHRoaXMuZmluZCgnaW5wdXQnKS50b0FycmF5KClcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHQkdGhpcy5kYXRhKCdkYXRlcGlja2VyJywgKGRhdGEgPSBuZXcgRGF0ZVJhbmdlUGlja2VyKHRoaXMsICQuZXh0ZW5kKG9wdHMsIHJvcHRzKSkpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHQkdGhpcy5kYXRhKCdkYXRlcGlja2VyJywgKGRhdGEgPSBuZXcgRGF0ZXBpY2tlcih0aGlzLCBvcHRzKSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGRhdGFbb3B0aW9uXSA9PT0gJ2Z1bmN0aW9uJyl7XHJcblx0XHRcdFx0aW50ZXJuYWxfcmV0dXJuID0gZGF0YVtvcHRpb25dLmFwcGx5KGRhdGEsIGFyZ3MpO1xyXG5cdFx0XHRcdGlmIChpbnRlcm5hbF9yZXR1cm4gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRpZiAoaW50ZXJuYWxfcmV0dXJuICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBpbnRlcm5hbF9yZXR1cm47XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cdHZhciBkZWZhdWx0cyA9ICQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cyA9IHtcclxuXHRcdGF1dG9jbG9zZTogZmFsc2UsXHJcblx0XHRiZWZvcmVTaG93RGF5OiAkLm5vb3AsXHJcblx0XHRjYWxlbmRhcldlZWtzOiBmYWxzZSxcclxuXHRcdGNsZWFyQnRuOiBmYWxzZSxcclxuXHRcdGRheXNPZldlZWtEaXNhYmxlZDogW10sXHJcblx0XHRlbmREYXRlOiBJbmZpbml0eSxcclxuXHRcdGZvcmNlUGFyc2U6IHRydWUsXHJcblx0XHRmb3JtYXQ6ICdtbS9kZC95eXl5JyxcclxuXHRcdGtleWJvYXJkTmF2aWdhdGlvbjogdHJ1ZSxcclxuXHRcdGxhbmd1YWdlOiAnZW4nLFxyXG5cdFx0bWluVmlld01vZGU6IDAsXHJcblx0XHRtdWx0aWRhdGU6IGZhbHNlLFxyXG5cdFx0bXVsdGlkYXRlU2VwYXJhdG9yOiAnLCcsXHJcblx0XHRvcmllbnRhdGlvbjogXCJhdXRvXCIsXHJcblx0XHRydGw6IGZhbHNlLFxyXG5cdFx0c3RhcnREYXRlOiAtSW5maW5pdHksXHJcblx0XHRzdGFydFZpZXc6IDAsXHJcblx0XHR0b2RheUJ0bjogZmFsc2UsXHJcblx0XHR0b2RheUhpZ2hsaWdodDogZmFsc2UsXHJcblx0XHR3ZWVrU3RhcnQ6IDBcclxuXHR9O1xyXG5cdHZhciBsb2NhbGVfb3B0cyA9ICQuZm4uZGF0ZXBpY2tlci5sb2NhbGVfb3B0cyA9IFtcclxuXHRcdCdmb3JtYXQnLFxyXG5cdFx0J3J0bCcsXHJcblx0XHQnd2Vla1N0YXJ0J1xyXG5cdF07XHJcblx0JC5mbi5kYXRlcGlja2VyLkNvbnN0cnVjdG9yID0gRGF0ZXBpY2tlcjtcclxuXHR2YXIgZGF0ZXMgPSAkLmZuLmRhdGVwaWNrZXIuZGF0ZXMgPSB7XHJcblx0XHRlbjoge1xyXG5cdFx0XHRkYXlzOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiLCBcIlN1bmRheVwiXSxcclxuXHRcdFx0ZGF5c1Nob3J0OiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl0sXHJcblx0XHRcdGRheXNNaW46IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCIsIFwiU3VcIl0sXHJcblx0XHRcdG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXHJcblx0XHRcdG1vbnRoc1Nob3J0OiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXHJcblx0XHRcdHRvZGF5OiBcIlRvZGF5XCIsXHJcblx0XHRcdGNsZWFyOiBcIkNsZWFyXCJcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgRFBHbG9iYWwgPSB7XHJcblx0XHRtb2RlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2xzTmFtZTogJ2RheXMnLFxyXG5cdFx0XHRcdG5hdkZuYzogJ01vbnRoJyxcclxuXHRcdFx0XHRuYXZTdGVwOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjbHNOYW1lOiAnbW9udGhzJyxcclxuXHRcdFx0XHRuYXZGbmM6ICdGdWxsWWVhcicsXHJcblx0XHRcdFx0bmF2U3RlcDogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2xzTmFtZTogJ3llYXJzJyxcclxuXHRcdFx0XHRuYXZGbmM6ICdGdWxsWWVhcicsXHJcblx0XHRcdFx0bmF2U3RlcDogMTBcclxuXHRcdH1dLFxyXG5cdFx0aXNMZWFwWWVhcjogZnVuY3Rpb24oeWVhcil7XHJcblx0XHRcdHJldHVybiAoKCh5ZWFyICUgNCA9PT0gMCkgJiYgKHllYXIgJSAxMDAgIT09IDApKSB8fCAoeWVhciAlIDQwMCA9PT0gMCkpO1xyXG5cdFx0fSxcclxuXHRcdGdldERheXNJbk1vbnRoOiBmdW5jdGlvbih5ZWFyLCBtb250aCl7XHJcblx0XHRcdHJldHVybiBbMzEsIChEUEdsb2JhbC5pc0xlYXBZZWFyKHllYXIpID8gMjkgOiAyOCksIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVttb250aF07XHJcblx0XHR9LFxyXG5cdFx0dmFsaWRQYXJ0czogL2RkP3xERD98bW0/fE1NP3x5eSg/Onl5KT8vZyxcclxuXHRcdG5vbnB1bmN0dWF0aW9uOiAvW14gLVxcLzotQFxcW1xcdTM0MDAtXFx1OWZmZi1gey1+XFx0XFxuXFxyXSsvZyxcclxuXHRcdHBhcnNlRm9ybWF0OiBmdW5jdGlvbihmb3JtYXQpe1xyXG5cdFx0XHQvLyBJRSB0cmVhdHMgXFwwIGFzIGEgc3RyaW5nIGVuZCBpbiBpbnB1dHMgKHRydW5jYXRpbmcgdGhlIHZhbHVlKSxcclxuXHRcdFx0Ly8gc28gaXQncyBhIGJhZCBmb3JtYXQgZGVsaW1pdGVyLCBhbnl3YXlcclxuXHRcdFx0dmFyIHNlcGFyYXRvcnMgPSBmb3JtYXQucmVwbGFjZSh0aGlzLnZhbGlkUGFydHMsICdcXDAnKS5zcGxpdCgnXFwwJyksXHJcblx0XHRcdFx0cGFydHMgPSBmb3JtYXQubWF0Y2godGhpcy52YWxpZFBhcnRzKTtcclxuXHRcdFx0aWYgKCFzZXBhcmF0b3JzIHx8ICFzZXBhcmF0b3JzLmxlbmd0aCB8fCAhcGFydHMgfHwgcGFydHMubGVuZ3RoID09PSAwKXtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4ge3NlcGFyYXRvcnM6IHNlcGFyYXRvcnMsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9LFxyXG5cdFx0cGFyc2VEYXRlOiBmdW5jdGlvbihkYXRlLCBmb3JtYXQsIGxhbmd1YWdlKXtcclxuXHRcdFx0aWYgKCFkYXRlKVxyXG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRcdGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcclxuXHRcdFx0XHRyZXR1cm4gZGF0ZTtcclxuXHRcdFx0aWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKVxyXG5cdFx0XHRcdGZvcm1hdCA9IERQR2xvYmFsLnBhcnNlRm9ybWF0KGZvcm1hdCk7XHJcblx0XHRcdHZhciBwYXJ0X3JlID0gLyhbXFwtK11cXGQrKShbZG13eV0pLyxcclxuXHRcdFx0XHRwYXJ0cyA9IGRhdGUubWF0Y2goLyhbXFwtK11cXGQrKShbZG13eV0pL2cpLFxyXG5cdFx0XHRcdHBhcnQsIGRpciwgaTtcclxuXHRcdFx0aWYgKC9eW1xcLStdXFxkK1tkbXd5XShbXFxzLF0rW1xcLStdXFxkK1tkbXd5XSkqJC8udGVzdChkYXRlKSl7XHJcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFx0Zm9yIChpPTA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRwYXJ0ID0gcGFydF9yZS5leGVjKHBhcnRzW2ldKTtcclxuXHRcdFx0XHRcdGRpciA9IHBhcnNlSW50KHBhcnRbMV0pO1xyXG5cdFx0XHRcdFx0c3dpdGNoIChwYXJ0WzJdKXtcclxuXHRcdFx0XHRcdFx0Y2FzZSAnZCc6XHJcblx0XHRcdFx0XHRcdFx0ZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlyKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnbSc6XHJcblx0XHRcdFx0XHRcdFx0ZGF0ZSA9IERhdGVwaWNrZXIucHJvdG90eXBlLm1vdmVNb250aC5jYWxsKERhdGVwaWNrZXIucHJvdG90eXBlLCBkYXRlLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd3JzpcclxuXHRcdFx0XHRcdFx0XHRkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaXIgKiA3KTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAneSc6XHJcblx0XHRcdFx0XHRcdFx0ZGF0ZSA9IERhdGVwaWNrZXIucHJvdG90eXBlLm1vdmVZZWFyLmNhbGwoRGF0ZXBpY2tlci5wcm90b3R5cGUsIGRhdGUsIGRpcik7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBVVENEYXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGF0ZS5nZXRVVENNb250aCgpLCBkYXRlLmdldFVUQ0RhdGUoKSwgMCwgMCwgMCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cGFydHMgPSBkYXRlICYmIGRhdGUubWF0Y2godGhpcy5ub25wdW5jdHVhdGlvbikgfHwgW107XHJcblx0XHRcdGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHR2YXIgcGFyc2VkID0ge30sXHJcblx0XHRcdFx0c2V0dGVyc19vcmRlciA9IFsneXl5eScsICd5eScsICdNJywgJ01NJywgJ20nLCAnbW0nLCAnZCcsICdkZCddLFxyXG5cdFx0XHRcdHNldHRlcnNfbWFwID0ge1xyXG5cdFx0XHRcdFx0eXl5eTogZnVuY3Rpb24oZCx2KXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGQuc2V0VVRDRnVsbFllYXIodik7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eXk6IGZ1bmN0aW9uKGQsdil7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkLnNldFVUQ0Z1bGxZZWFyKDIwMDArdik7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bTogZnVuY3Rpb24oZCx2KXtcclxuXHRcdFx0XHRcdFx0aWYgKGlzTmFOKGQpKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBkO1xyXG5cdFx0XHRcdFx0XHR2IC09IDE7XHJcblx0XHRcdFx0XHRcdHdoaWxlICh2IDwgMCkgdiArPSAxMjtcclxuXHRcdFx0XHRcdFx0diAlPSAxMjtcclxuXHRcdFx0XHRcdFx0ZC5zZXRVVENNb250aCh2KTtcclxuXHRcdFx0XHRcdFx0d2hpbGUgKGQuZ2V0VVRDTW9udGgoKSAhPT0gdilcclxuXHRcdFx0XHRcdFx0XHRkLnNldFVUQ0RhdGUoZC5nZXRVVENEYXRlKCktMSk7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGQ6IGZ1bmN0aW9uKGQsdil7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkLnNldFVUQ0RhdGUodik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR2YWwsIGZpbHRlcmVkO1xyXG5cdFx0XHRzZXR0ZXJzX21hcFsnTSddID0gc2V0dGVyc19tYXBbJ01NJ10gPSBzZXR0ZXJzX21hcFsnbW0nXSA9IHNldHRlcnNfbWFwWydtJ107XHJcblx0XHRcdHNldHRlcnNfbWFwWydkZCddID0gc2V0dGVyc19tYXBbJ2QnXTtcclxuXHRcdFx0ZGF0ZSA9IFVUQ0RhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCAwLCAwLCAwKTtcclxuXHRcdFx0dmFyIGZwYXJ0cyA9IGZvcm1hdC5wYXJ0cy5zbGljZSgpO1xyXG5cdFx0XHQvLyBSZW1vdmUgbm9vcCBwYXJ0c1xyXG5cdFx0XHRpZiAocGFydHMubGVuZ3RoICE9PSBmcGFydHMubGVuZ3RoKXtcclxuXHRcdFx0XHRmcGFydHMgPSAkKGZwYXJ0cykuZmlsdGVyKGZ1bmN0aW9uKGkscCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gJC5pbkFycmF5KHAsIHNldHRlcnNfb3JkZXIpICE9PSAtMTtcclxuXHRcdFx0XHR9KS50b0FycmF5KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gUHJvY2VzcyByZW1haW5kZXJcclxuXHRcdFx0ZnVuY3Rpb24gbWF0Y2hfcGFydCgpe1xyXG5cdFx0XHRcdHZhciBtID0gdGhpcy5zbGljZSgwLCBwYXJ0c1tpXS5sZW5ndGgpLFxyXG5cdFx0XHRcdFx0cCA9IHBhcnRzW2ldLnNsaWNlKDAsIG0ubGVuZ3RoKTtcclxuXHRcdFx0XHRyZXR1cm4gbSA9PT0gcDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocGFydHMubGVuZ3RoID09PSBmcGFydHMubGVuZ3RoKXtcclxuXHRcdFx0XHR2YXIgY250O1xyXG5cdFx0XHRcdGZvciAoaT0wLCBjbnQgPSBmcGFydHMubGVuZ3RoOyBpIDwgY250OyBpKyspe1xyXG5cdFx0XHRcdFx0dmFsID0gcGFyc2VJbnQocGFydHNbaV0sIDEwKTtcclxuXHRcdFx0XHRcdHBhcnQgPSBmcGFydHNbaV07XHJcblx0XHRcdFx0XHRpZiAoaXNOYU4odmFsKSl7XHJcblx0XHRcdFx0XHRcdHN3aXRjaCAocGFydCl7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnTU0nOlxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsdGVyZWQgPSAkKGRhdGVzW2xhbmd1YWdlXS5tb250aHMpLmZpbHRlcihtYXRjaF9wYXJ0KTtcclxuXHRcdFx0XHRcdFx0XHRcdHZhbCA9ICQuaW5BcnJheShmaWx0ZXJlZFswXSwgZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRocykgKyAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnTSc6XHJcblx0XHRcdFx0XHRcdFx0XHRmaWx0ZXJlZCA9ICQoZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRoc1Nob3J0KS5maWx0ZXIobWF0Y2hfcGFydCk7XHJcblx0XHRcdFx0XHRcdFx0XHR2YWwgPSAkLmluQXJyYXkoZmlsdGVyZWRbMF0sIGRhdGVzW2xhbmd1YWdlXS5tb250aHNTaG9ydCkgKyAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHBhcnNlZFtwYXJ0XSA9IHZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIF9kYXRlLCBzO1xyXG5cdFx0XHRcdGZvciAoaT0wOyBpIDwgc2V0dGVyc19vcmRlci5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0XHRzID0gc2V0dGVyc19vcmRlcltpXTtcclxuXHRcdFx0XHRcdGlmIChzIGluIHBhcnNlZCAmJiAhaXNOYU4ocGFyc2VkW3NdKSl7XHJcblx0XHRcdFx0XHRcdF9kYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcblx0XHRcdFx0XHRcdHNldHRlcnNfbWFwW3NdKF9kYXRlLCBwYXJzZWRbc10pO1xyXG5cdFx0XHRcdFx0XHRpZiAoIWlzTmFOKF9kYXRlKSlcclxuXHRcdFx0XHRcdFx0XHRkYXRlID0gX2RhdGU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBkYXRlO1xyXG5cdFx0fSxcclxuXHRcdGZvcm1hdERhdGU6IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCwgbGFuZ3VhZ2Upe1xyXG5cdFx0XHRpZiAoIWRhdGUpXHJcblx0XHRcdFx0cmV0dXJuICcnO1xyXG5cdFx0XHRpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpXHJcblx0XHRcdFx0Zm9ybWF0ID0gRFBHbG9iYWwucGFyc2VGb3JtYXQoZm9ybWF0KTtcclxuXHRcdFx0dmFyIHZhbCA9IHtcclxuXHRcdFx0XHRkOiBkYXRlLmdldFVUQ0RhdGUoKSxcclxuXHRcdFx0XHREOiBkYXRlc1tsYW5ndWFnZV0uZGF5c1Nob3J0W2RhdGUuZ2V0VVRDRGF5KCldLFxyXG5cdFx0XHRcdEREOiBkYXRlc1tsYW5ndWFnZV0uZGF5c1tkYXRlLmdldFVUQ0RheSgpXSxcclxuXHRcdFx0XHRtOiBkYXRlLmdldFVUQ01vbnRoKCkgKyAxLFxyXG5cdFx0XHRcdE06IGRhdGVzW2xhbmd1YWdlXS5tb250aHNTaG9ydFtkYXRlLmdldFVUQ01vbnRoKCldLFxyXG5cdFx0XHRcdE1NOiBkYXRlc1tsYW5ndWFnZV0ubW9udGhzW2RhdGUuZ2V0VVRDTW9udGgoKV0sXHJcblx0XHRcdFx0eXk6IGRhdGUuZ2V0VVRDRnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cmluZygyKSxcclxuXHRcdFx0XHR5eXl5OiBkYXRlLmdldFVUQ0Z1bGxZZWFyKClcclxuXHRcdFx0fTtcclxuXHRcdFx0dmFsLmRkID0gKHZhbC5kIDwgMTAgPyAnMCcgOiAnJykgKyB2YWwuZDtcclxuXHRcdFx0dmFsLm1tID0gKHZhbC5tIDwgMTAgPyAnMCcgOiAnJykgKyB2YWwubTtcclxuXHRcdFx0ZGF0ZSA9IFtdO1xyXG5cdFx0XHR2YXIgc2VwcyA9ICQuZXh0ZW5kKFtdLCBmb3JtYXQuc2VwYXJhdG9ycyk7XHJcblx0XHRcdGZvciAodmFyIGk9MCwgY250ID0gZm9ybWF0LnBhcnRzLmxlbmd0aDsgaSA8PSBjbnQ7IGkrKyl7XHJcblx0XHRcdFx0aWYgKHNlcHMubGVuZ3RoKVxyXG5cdFx0XHRcdFx0ZGF0ZS5wdXNoKHNlcHMuc2hpZnQoKSk7XHJcblx0XHRcdFx0ZGF0ZS5wdXNoKHZhbFtmb3JtYXQucGFydHNbaV1dKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZGF0ZS5qb2luKCcnKTtcclxuXHRcdH0sXHJcblx0XHRoZWFkVGVtcGxhdGU6ICc8dGhlYWQ+JytcclxuXHRcdFx0XHRcdFx0XHQnPHRyPicrXHJcblx0XHRcdFx0XHRcdFx0XHQnPHRoIGNsYXNzPVwicHJldlwiPiZsYXF1bzs8L3RoPicrXHJcblx0XHRcdFx0XHRcdFx0XHQnPHRoIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJkYXRlcGlja2VyLXN3aXRjaFwiPjwvdGg+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8dGggY2xhc3M9XCJuZXh0XCI+JnJhcXVvOzwvdGg+JytcclxuXHRcdFx0XHRcdFx0XHQnPC90cj4nK1xyXG5cdFx0XHRcdFx0XHQnPC90aGVhZD4nLFxyXG5cdFx0Y29udFRlbXBsYXRlOiAnPHRib2R5Pjx0cj48dGQgY29sc3Bhbj1cIjdcIj48L3RkPjwvdHI+PC90Ym9keT4nLFxyXG5cdFx0Zm9vdFRlbXBsYXRlOiAnPHRmb290PicrXHJcblx0XHRcdFx0XHRcdFx0Jzx0cj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwidG9kYXlcIj48L3RoPicrXHJcblx0XHRcdFx0XHRcdFx0JzwvdHI+JytcclxuXHRcdFx0XHRcdFx0XHQnPHRyPicrXHJcblx0XHRcdFx0XHRcdFx0XHQnPHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJjbGVhclwiPjwvdGg+JytcclxuXHRcdFx0XHRcdFx0XHQnPC90cj4nK1xyXG5cdFx0XHRcdFx0XHQnPC90Zm9vdD4nXHJcblx0fTtcclxuXHREUEdsb2JhbC50ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlclwiPicrXHJcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRheXNcIj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0Jzx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWNvbmRlbnNlZFwiPicrXHJcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmhlYWRUZW1wbGF0ZStcclxuXHRcdFx0XHRcdFx0XHRcdFx0Jzx0Ym9keT48L3Rib2R5PicrXHJcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmZvb3RUZW1wbGF0ZStcclxuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXHJcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXHJcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLW1vbnRoc1wiPicrXHJcblx0XHRcdFx0XHRcdFx0XHQnPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtY29uZGVuc2VkXCI+JytcclxuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5jb250VGVtcGxhdGUrXHJcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmZvb3RUZW1wbGF0ZStcclxuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXHJcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXHJcblx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXllYXJzXCI+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1jb25kZW5zZWRcIj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5oZWFkVGVtcGxhdGUrXHJcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmNvbnRUZW1wbGF0ZStcclxuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xyXG5cdFx0XHRcdFx0XHRcdFx0JzwvdGFibGU+JytcclxuXHRcdFx0XHRcdFx0XHQnPC9kaXY+JytcclxuXHRcdFx0XHRcdFx0JzwvZGl2Pic7XHJcblxyXG5cdCQuZm4uZGF0ZXBpY2tlci5EUEdsb2JhbCA9IERQR2xvYmFsO1xyXG5cclxuXHJcblx0LyogREFURVBJQ0tFUiBOTyBDT05GTElDVFxyXG5cdCogPT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuXHQkLmZuLmRhdGVwaWNrZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uKCl7XHJcblx0XHQkLmZuLmRhdGVwaWNrZXIgPSBvbGQ7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHJcblx0LyogREFURVBJQ0tFUiBEQVRBLUFQSVxyXG5cdCogPT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5cdCQoZG9jdW1lbnQpLm9uKFxyXG5cdFx0J2ZvY3VzLmRhdGVwaWNrZXIuZGF0YS1hcGkgY2xpY2suZGF0ZXBpY2tlci5kYXRhLWFwaScsXHJcblx0XHQnW2RhdGEtcHJvdmlkZT1cImRhdGVwaWNrZXJcIl0nLFxyXG5cdFx0ZnVuY3Rpb24oZSl7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKCdkYXRlcGlja2VyJykpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdC8vIGNvbXBvbmVudCBjbGljayByZXF1aXJlcyB1cyB0byBleHBsaWNpdGx5IHNob3cgaXRcclxuXHRcdFx0JHRoaXMuZGF0ZXBpY2tlcignc2hvdycpO1xyXG5cdFx0fVxyXG5cdCk7XHJcblx0JChmdW5jdGlvbigpe1xyXG5cdFx0JCgnW2RhdGEtcHJvdmlkZT1cImRhdGVwaWNrZXItaW5saW5lXCJdJykuZGF0ZXBpY2tlcigpO1xyXG5cdH0pO1xyXG5cclxufSh3aW5kb3cualF1ZXJ5KSk7XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gNSAxMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdXBsb2FkLXN0YXRpc3RpY3MuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VwbG9hZC1zdGF0aXN0aWNzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3VwbG9hZC1zdGF0aXN0aWNzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2J1bmRsZS9jc3MvdXBsb2FkLXN0YXRpc3RpY3MuY3NzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBhcGVyTWFuYWdlX3VwbG9hZFN0YXRpc3RpY3MgLmNydW1iIHtcXG4gIGNvbG9yOiAjMzQ3ODk3O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjZDRkNztcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLnBhcGVyTWFuYWdlX3VwbG9hZFN0YXRpc3RpY3MgLmZpbHRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDE1cHggMjBweCAwO1xcbn1cXG4ucGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljcyAuZmlsdGVyID4gZGl2IHtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG4ucGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljcyAuZmlsdGVyIC5zZWFyY2gge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogI2YyOWE3NjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcbi5wYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzIC5maWx0ZXIgLnNlYXJjaCAuc2VhcmNoLWJnIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB3aWR0aDogMThweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9idW5kbGUvaW1nL2ljb24ucG5nXCIpICsgXCIpIC02MHB4IC0xMzBweCBuby1yZXBlYXQ7XFxufVxcbi5wYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzIC5maWx0ZXIgLm1scjUge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ucGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljcyAuZmlsdGVyIC5tbDVyMTUge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuLnBhcGVyTWFuYWdlX3VwbG9hZFN0YXRpc3RpY3MgLmZpbHRlciAuZjEyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG4ucGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljcyAuZmlsdGVyIC5tcjE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG59XFxuI3dyYXBwZXIgLnBhcGVyTWFuYWdlX3VwbG9hZFN0YXRpc3RpY3MgLmZpbHRlciAuZGF0ZS1waWNrZXIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1tYXBzL3VwbG9hZC1zdGF0aXN0aWNzLmNzcy5tYXAgKi9cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vYnVuZGxlL2Nzcy91cGxvYWQtc3RhdGlzdGljcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSA1XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTZiZWQ2MzBlODNhNzViZDlmNzA1ZTJiN2JhZmM2MzIucG5nXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2J1bmRsZS9pbWcvaWNvbi5wbmdcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSA1IDdcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGRpdiBjbGFzcz1cXFwicGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljc1xcXCI+XFxuICAgIDxjcnVtYiBtb2RsZW5hbWU9XFxcIuivleWNt+euoeeQhlxcXCIgcGFnZW5hbWU9XFxcIuS4iuS8oOe7n+iuoVxcXCI+PC9jcnVtYj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyIGZvcm0taW5saW5lXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcCZuYnNwJm5ic3AmbmJzcCZuYnNwJm5ic3DlubTku71cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZSBtbDVyMTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhciBmYS0wLjV4XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJiaWdUaW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiaW5wdXQgZm9ybS1jb250cm9sIHB1bGwtcmlnaHQgV2RhdGUgZGF0ZS1waWNrZXJcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgIOS4iuS8oOaXtumXtFxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBkYXRlIG1scjVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhciBmYS0wLjV4XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJzdGFydFRpbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodCBXZGF0ZSBpbnB1dCBkYXRlLXBpY2tlclxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAg5YiwXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGUgbWw1cjE1XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2FsZW5kYXIgZmEtMC41eFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZW5kVGltZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBwdWxsLXJpZ2h0IFdkYXRlIGlucHV0IGRhdGUtcGlja2VyXFxcIi8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICDlrqHmoLjml7bpl7RcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZGF0ZSBtbHI1XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2FsZW5kYXIgZmEtMC41eFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwic1RpbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodCBXZGF0ZSBpbnB1dCBkYXRlLXBpY2tlclxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAg5YiwXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGUgbWw1cjE1XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2FsZW5kYXIgZmEtMC41eFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwiZVRpbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodCBXZGF0ZSBpbnB1dCBkYXRlLXBpY2tlclxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2Vjb25kXFxcIj5cXG4gICAgICAgICAgICDnp5Hnm65cXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJzdWJqZWN0IHNlbGVjdCBtbDVyMTVcXFwiIHYtbW9kZWw9XFxcInN1YmplY3RcXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVxcXCJcXFwiPuivreaWhzwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uPuaVsOWtpjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uPuiLseivrTwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgIOW5tOe6p1xcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImdyYWRlIHNlbGVjdCBtbDVyMTVcXFwiIHYtbW9kZWw9XFxcImdyYWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cXFwiXFxcIj7lhajpg6g8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7kuIDlubTnuqc8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7kuozlubTnuqc8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7kuInlubTnuqc8L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICDkuIrkvKDkurpcXG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9XFxcIndpZHRoOiAyMTVweDtcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJpbnB1dCBtbDVyMTUgZjEyXFxcIiB2LW1vZGVsPVxcXCJwZXJzb25cXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXkuIrkvKDkurrnmoTlkI3np7BcXFwiPlxcblxcbiAgICAgICAgICAgIOWcsOWMulxcbiAgICAgICAgICAgIDxhcmU+PC9hcmU+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhcGVyXFxcIj5cXG4gICAgICAgICAgICDnirbmgIFcXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJzdGF0dXMgc2VsZWN0IG1sNXIxNVxcXCIgdi1tb2RlbD1cXFwic3RhdHVzXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cXFwiXFxcIj7lhajpg6g8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7lvoXlrqHmoLg8L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICDor5XljbfnsbvlnotcXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJzZWxlY3QgbWw1cjE1XFxcIiB2LW1vZGVsPVxcXCJ0eXBlXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cXFwiXFxcIj7lhajpg6g8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7mnJ/kuK08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7mnJ/mnKs8L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICDor5XljbflkI3np7BcXG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9XFxcIndpZHRoOiAxNzNweDtcXFwiIGNsYXNzPVxcXCJpbnB1dCBtbDVyMTUgZjEyXFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+36L6T5YWl6KaB5p+l6K+i55qE6K+V5Y235ZCN56ewXFxcIiB2LW1vZGVsPVxcXCJuYW1lXFxcIj5cXG4gICAgICAgICAgICDor5XljbdJRFxcbiAgICAgICAgICAgIDxpbnB1dCBzdHlsZT1cXFwid2lkdGg6IDIwN3B4O1xcXCIgY2xhc3M9XFxcImlucHV0IG1sNXIxNSBmMTJcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXopoHmn6Xor6LnmoTor5XljbdJRFxcXCIgdi1tb2RlbD1cXFwiaWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlYXJjaFxcXCIgQGNsaWNrPVxcXCJzZWFyY2hcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2VhcmNoLWJnXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuPuafpeivojwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3BhcGVyL3VwbG9hZC1zdGF0aXN0aWNzLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9