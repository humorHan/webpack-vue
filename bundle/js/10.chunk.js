webpackJsonp([10,8],[
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\paperManage_uploadStatistics.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-762708ea/paperManage_uploadStatistics.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var area = __webpack_require__(12);
	var tab = __webpack_require__(15);
	__webpack_require__(18);
	__webpack_require__(22);
	__webpack_require__(23);
	
	module.exports = {
	  template: '#tpl',
	  props: ['nameFromIndex', 'flag'],
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
	      id: '',
	      tableData: ''
	    };
	  },
	  components: {
	    "are": area,
	    "tab": tab
	  },
	  ready: function ready() {
	    $(function () {
	      $(".Wdate").datepicker({
	        autoclose: true,
	        clearBtn: true,
	        todayBtn: true,
	        format: "yyyy-mm-dd"
	      });
	    });
	  },
	  methods: {
	    search: function search() {
	      this.tableData = [1, 2, 3, 4, 5];
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\area.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2c1a71b4/area.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n<select v-on:click=\"cityFun\" class=\"mr20 w100\">\n    <option v-for=\"item in province\">{{item.p_Name}}</option>\n</select>\n<select v-on:click=\"countryFun\" class=\"mr20 w100\">\n    <option v-for=\"item in city\">{{item.p_Name}}</option>\n</select>\n<select class=\"w100\">\n    <option v-for=\"item in country\">{{item.p_Name}}</option>\n</select>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(17)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-330155f6/table.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	    template: '#table',
	    props: ["tableData"]
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\n<table>\n    <tr>\n        <td v-for=\"item of tableData\">\n            {{item}}\n        </td>\n    </tr>\n</table>\n";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Datepicker for Bootstrap\r\n *\r\n * Copyright 2012 Stefan Petre\r\n * Improvements by Andrew Rowls\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n */\r\n.datepicker {\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n  direction: ltr;\r\n  /*.dow {\r\n\t\tborder-top: 1px solid #ddd !important;\r\n\t}*/\r\n}\r\n.datepicker-inline {\r\n  width: 100%;\r\n}\r\n.datepicker.datepicker-rtl {\r\n  direction: rtl;\r\n}\r\n.datepicker.datepicker-rtl table tr td span {\r\n  float: right;\r\n}\r\n.datepicker-dropdown {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.datepicker-dropdown:before {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 7px solid transparent;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-top: 0;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  position: absolute;\r\n}\r\n.datepicker-dropdown:after {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #fff;\r\n  border-top: 0;\r\n  position: absolute;\r\n}\r\n.datepicker-dropdown.datepicker-orient-left:before {\r\n  left: 6px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-left:after {\r\n  left: 7px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-right:before {\r\n  right: 6px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-right:after {\r\n  right: 7px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-top:before {\r\n  top: -7px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-top:after {\r\n  top: -6px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-bottom:before {\r\n  bottom: -7px;\r\n  border-bottom: 0;\r\n  border-top: 7px solid #999;\r\n}\r\n.datepicker-dropdown.datepicker-orient-bottom:after {\r\n  bottom: -6px;\r\n  border-bottom: 0;\r\n  border-top: 6px solid #fff;\r\n}\r\n.datepicker > div {\r\n  display: none;\r\n}\r\n.datepicker.days div.datepicker-days {\r\n  display: block;\r\n}\r\n.datepicker.months div.datepicker-months {\r\n  display: block;\r\n}\r\n.datepicker.years div.datepicker-years {\r\n  display: block;\r\n}\r\n.datepicker table {\r\n  margin: 0;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.datepicker table tr td,\r\n.datepicker table tr th {\r\n  text-align: center;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 4px;\r\n  border: none;\r\n}\r\n.table-striped .datepicker table tr td,\r\n.table-striped .datepicker table tr th {\r\n  background-color: transparent;\r\n}\r\n.datepicker table tr td.day:hover,\r\n.datepicker table tr td.day.focused {\r\n  background: rgba(0,0,0,0.2);\r\n  cursor: pointer;\r\n}\r\n.datepicker table tr td.old,\r\n.datepicker table tr td.new {\r\n  color: #777;\r\n}\r\n.datepicker table tr td.disabled,\r\n.datepicker table tr td.disabled:hover {\r\n  background: none;\r\n  color: #444;\r\n  cursor: default;\r\n}\r\n.datepicker table tr td.today,\r\n.datepicker table tr td.today:hover,\r\n.datepicker table tr td.today.disabled,\r\n.datepicker table tr td.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #ffb733;\r\n}\r\n.datepicker table tr td.today:hover,\r\n.datepicker table tr td.today:hover:hover,\r\n.datepicker table tr td.today.disabled:hover,\r\n.datepicker table tr td.today.disabled:hover:hover,\r\n.datepicker table tr td.today:focus,\r\n.datepicker table tr td.today:hover:focus,\r\n.datepicker table tr td.today.disabled:focus,\r\n.datepicker table tr td.today.disabled:hover:focus,\r\n.datepicker table tr td.today:active,\r\n.datepicker table tr td.today:hover:active,\r\n.datepicker table tr td.today.disabled:active,\r\n.datepicker table tr td.today.disabled:hover:active,\r\n.datepicker table tr td.today.active,\r\n.datepicker table tr td.today:hover.active,\r\n.datepicker table tr td.today.disabled.active,\r\n.datepicker table tr td.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.today,\r\n.open .dropdown-toggle.datepicker table tr td.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #f59e00;\r\n}\r\n.datepicker table tr td.today:active,\r\n.datepicker table tr td.today:hover:active,\r\n.datepicker table tr td.today.disabled:active,\r\n.datepicker table tr td.today.disabled:hover:active,\r\n.datepicker table tr td.today.active,\r\n.datepicker table tr td.today:hover.active,\r\n.datepicker table tr td.today.disabled.active,\r\n.datepicker table tr td.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.today,\r\n.open .dropdown-toggle.datepicker table tr td.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.today.disabled,\r\n.datepicker table tr td.today:hover.disabled,\r\n.datepicker table tr td.today.disabled.disabled,\r\n.datepicker table tr td.today.disabled:hover.disabled,\r\n.datepicker table tr td.today[disabled],\r\n.datepicker table tr td.today:hover[disabled],\r\n.datepicker table tr td.today.disabled[disabled],\r\n.datepicker table tr td.today.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.today,\r\nfieldset[disabled] .datepicker table tr td.today:hover,\r\nfieldset[disabled] .datepicker table tr td.today.disabled,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover,\r\n.datepicker table tr td.today.disabled:hover,\r\n.datepicker table tr td.today:hover.disabled:hover,\r\n.datepicker table tr td.today.disabled.disabled:hover,\r\n.datepicker table tr td.today.disabled:hover.disabled:hover,\r\n.datepicker table tr td.today[disabled]:hover,\r\n.datepicker table tr td.today:hover[disabled]:hover,\r\n.datepicker table tr td.today.disabled[disabled]:hover,\r\n.datepicker table tr td.today.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.today:hover,\r\nfieldset[disabled] .datepicker table tr td.today:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover:hover,\r\n.datepicker table tr td.today.disabled:focus,\r\n.datepicker table tr td.today:hover.disabled:focus,\r\n.datepicker table tr td.today.disabled.disabled:focus,\r\n.datepicker table tr td.today.disabled:hover.disabled:focus,\r\n.datepicker table tr td.today[disabled]:focus,\r\n.datepicker table tr td.today:hover[disabled]:focus,\r\n.datepicker table tr td.today.disabled[disabled]:focus,\r\n.datepicker table tr td.today.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.today:focus,\r\nfieldset[disabled] .datepicker table tr td.today:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover:focus,\r\n.datepicker table tr td.today.disabled:active,\r\n.datepicker table tr td.today:hover.disabled:active,\r\n.datepicker table tr td.today.disabled.disabled:active,\r\n.datepicker table tr td.today.disabled:hover.disabled:active,\r\n.datepicker table tr td.today[disabled]:active,\r\n.datepicker table tr td.today:hover[disabled]:active,\r\n.datepicker table tr td.today.disabled[disabled]:active,\r\n.datepicker table tr td.today.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.today:active,\r\nfieldset[disabled] .datepicker table tr td.today:hover:active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover:active,\r\n.datepicker table tr td.today.disabled.active,\r\n.datepicker table tr td.today:hover.disabled.active,\r\n.datepicker table tr td.today.disabled.disabled.active,\r\n.datepicker table tr td.today.disabled:hover.disabled.active,\r\n.datepicker table tr td.today[disabled].active,\r\n.datepicker table tr td.today:hover[disabled].active,\r\n.datepicker table tr td.today.disabled[disabled].active,\r\n.datepicker table tr td.today.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.today.active,\r\nfieldset[disabled] .datepicker table tr td.today:hover.active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover.active {\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #ffb733;\r\n}\r\n.datepicker table tr td.today:hover:hover {\r\n  color: #000;\r\n}\r\n.datepicker table tr td.today.active:hover {\r\n  color: #fff;\r\n}\r\n.datepicker table tr td.range,\r\n.datepicker table tr td.range:hover,\r\n.datepicker table tr td.range.disabled,\r\n.datepicker table tr td.range.disabled:hover {\r\n  background: rgba(0,0,0,0.2);\r\n  border-radius: 0;\r\n}\r\n.datepicker table tr td.range.today,\r\n.datepicker table tr td.range.today:hover,\r\n.datepicker table tr td.range.today.disabled,\r\n.datepicker table tr td.range.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #f1a417;\r\n  border-radius: 0;\r\n}\r\n.datepicker table tr td.range.today:hover,\r\n.datepicker table tr td.range.today:hover:hover,\r\n.datepicker table tr td.range.today.disabled:hover,\r\n.datepicker table tr td.range.today.disabled:hover:hover,\r\n.datepicker table tr td.range.today:focus,\r\n.datepicker table tr td.range.today:hover:focus,\r\n.datepicker table tr td.range.today.disabled:focus,\r\n.datepicker table tr td.range.today.disabled:hover:focus,\r\n.datepicker table tr td.range.today:active,\r\n.datepicker table tr td.range.today:hover:active,\r\n.datepicker table tr td.range.today.disabled:active,\r\n.datepicker table tr td.range.today.disabled:hover:active,\r\n.datepicker table tr td.range.today.active,\r\n.datepicker table tr td.range.today:hover.active,\r\n.datepicker table tr td.range.today.disabled.active,\r\n.datepicker table tr td.range.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.range.today,\r\n.open .dropdown-toggle.datepicker table tr td.range.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #bf800c;\r\n}\r\n.datepicker table tr td.range.today:active,\r\n.datepicker table tr td.range.today:hover:active,\r\n.datepicker table tr td.range.today.disabled:active,\r\n.datepicker table tr td.range.today.disabled:hover:active,\r\n.datepicker table tr td.range.today.active,\r\n.datepicker table tr td.range.today:hover.active,\r\n.datepicker table tr td.range.today.disabled.active,\r\n.datepicker table tr td.range.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.range.today,\r\n.open .dropdown-toggle.datepicker table tr td.range.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.range.today.disabled,\r\n.datepicker table tr td.range.today:hover.disabled,\r\n.datepicker table tr td.range.today.disabled.disabled,\r\n.datepicker table tr td.range.today.disabled:hover.disabled,\r\n.datepicker table tr td.range.today[disabled],\r\n.datepicker table tr td.range.today:hover[disabled],\r\n.datepicker table tr td.range.today.disabled[disabled],\r\n.datepicker table tr td.range.today.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.range.today,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover,\r\n.datepicker table tr td.range.today.disabled:hover,\r\n.datepicker table tr td.range.today:hover.disabled:hover,\r\n.datepicker table tr td.range.today.disabled.disabled:hover,\r\n.datepicker table tr td.range.today.disabled:hover.disabled:hover,\r\n.datepicker table tr td.range.today[disabled]:hover,\r\n.datepicker table tr td.range.today:hover[disabled]:hover,\r\n.datepicker table tr td.range.today.disabled[disabled]:hover,\r\n.datepicker table tr td.range.today.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover:hover,\r\n.datepicker table tr td.range.today.disabled:focus,\r\n.datepicker table tr td.range.today:hover.disabled:focus,\r\n.datepicker table tr td.range.today.disabled.disabled:focus,\r\n.datepicker table tr td.range.today.disabled:hover.disabled:focus,\r\n.datepicker table tr td.range.today[disabled]:focus,\r\n.datepicker table tr td.range.today:hover[disabled]:focus,\r\n.datepicker table tr td.range.today.disabled[disabled]:focus,\r\n.datepicker table tr td.range.today.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover:focus,\r\n.datepicker table tr td.range.today.disabled:active,\r\n.datepicker table tr td.range.today:hover.disabled:active,\r\n.datepicker table tr td.range.today.disabled.disabled:active,\r\n.datepicker table tr td.range.today.disabled:hover.disabled:active,\r\n.datepicker table tr td.range.today[disabled]:active,\r\n.datepicker table tr td.range.today:hover[disabled]:active,\r\n.datepicker table tr td.range.today.disabled[disabled]:active,\r\n.datepicker table tr td.range.today.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.range.today:active,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover:active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover:active,\r\n.datepicker table tr td.range.today.disabled.active,\r\n.datepicker table tr td.range.today:hover.disabled.active,\r\n.datepicker table tr td.range.today.disabled.disabled.active,\r\n.datepicker table tr td.range.today.disabled:hover.disabled.active,\r\n.datepicker table tr td.range.today[disabled].active,\r\n.datepicker table tr td.range.today:hover[disabled].active,\r\n.datepicker table tr td.range.today.disabled[disabled].active,\r\n.datepicker table tr td.range.today.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.range.today.active,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover.active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover.active {\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #f1a417;\r\n}\r\n.datepicker table tr td.selected,\r\n.datepicker table tr td.selected:hover,\r\n.datepicker table tr td.selected.disabled,\r\n.datepicker table tr td.selected.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #555555;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.datepicker table tr td.selected:hover,\r\n.datepicker table tr td.selected:hover:hover,\r\n.datepicker table tr td.selected.disabled:hover,\r\n.datepicker table tr td.selected.disabled:hover:hover,\r\n.datepicker table tr td.selected:focus,\r\n.datepicker table tr td.selected:hover:focus,\r\n.datepicker table tr td.selected.disabled:focus,\r\n.datepicker table tr td.selected.disabled:hover:focus,\r\n.datepicker table tr td.selected:active,\r\n.datepicker table tr td.selected:hover:active,\r\n.datepicker table tr td.selected.disabled:active,\r\n.datepicker table tr td.selected.disabled:hover:active,\r\n.datepicker table tr td.selected.active,\r\n.datepicker table tr td.selected:hover.active,\r\n.datepicker table tr td.selected.disabled.active,\r\n.datepicker table tr td.selected.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.selected,\r\n.open .dropdown-toggle.datepicker table tr td.selected:hover,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #373737;\r\n}\r\n.datepicker table tr td.selected:active,\r\n.datepicker table tr td.selected:hover:active,\r\n.datepicker table tr td.selected.disabled:active,\r\n.datepicker table tr td.selected.disabled:hover:active,\r\n.datepicker table tr td.selected.active,\r\n.datepicker table tr td.selected:hover.active,\r\n.datepicker table tr td.selected.disabled.active,\r\n.datepicker table tr td.selected.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.selected,\r\n.open .dropdown-toggle.datepicker table tr td.selected:hover,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.selected.disabled,\r\n.datepicker table tr td.selected:hover.disabled,\r\n.datepicker table tr td.selected.disabled.disabled,\r\n.datepicker table tr td.selected.disabled:hover.disabled,\r\n.datepicker table tr td.selected[disabled],\r\n.datepicker table tr td.selected:hover[disabled],\r\n.datepicker table tr td.selected.disabled[disabled],\r\n.datepicker table tr td.selected.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.selected,\r\nfieldset[disabled] .datepicker table tr td.selected:hover,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover,\r\n.datepicker table tr td.selected.disabled:hover,\r\n.datepicker table tr td.selected:hover.disabled:hover,\r\n.datepicker table tr td.selected.disabled.disabled:hover,\r\n.datepicker table tr td.selected.disabled:hover.disabled:hover,\r\n.datepicker table tr td.selected[disabled]:hover,\r\n.datepicker table tr td.selected:hover[disabled]:hover,\r\n.datepicker table tr td.selected.disabled[disabled]:hover,\r\n.datepicker table tr td.selected.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.selected:hover,\r\nfieldset[disabled] .datepicker table tr td.selected:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover:hover,\r\n.datepicker table tr td.selected.disabled:focus,\r\n.datepicker table tr td.selected:hover.disabled:focus,\r\n.datepicker table tr td.selected.disabled.disabled:focus,\r\n.datepicker table tr td.selected.disabled:hover.disabled:focus,\r\n.datepicker table tr td.selected[disabled]:focus,\r\n.datepicker table tr td.selected:hover[disabled]:focus,\r\n.datepicker table tr td.selected.disabled[disabled]:focus,\r\n.datepicker table tr td.selected.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.selected:focus,\r\nfieldset[disabled] .datepicker table tr td.selected:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover:focus,\r\n.datepicker table tr td.selected.disabled:active,\r\n.datepicker table tr td.selected:hover.disabled:active,\r\n.datepicker table tr td.selected.disabled.disabled:active,\r\n.datepicker table tr td.selected.disabled:hover.disabled:active,\r\n.datepicker table tr td.selected[disabled]:active,\r\n.datepicker table tr td.selected:hover[disabled]:active,\r\n.datepicker table tr td.selected.disabled[disabled]:active,\r\n.datepicker table tr td.selected.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.selected:active,\r\nfieldset[disabled] .datepicker table tr td.selected:hover:active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover:active,\r\n.datepicker table tr td.selected.disabled.active,\r\n.datepicker table tr td.selected:hover.disabled.active,\r\n.datepicker table tr td.selected.disabled.disabled.active,\r\n.datepicker table tr td.selected.disabled:hover.disabled.active,\r\n.datepicker table tr td.selected[disabled].active,\r\n.datepicker table tr td.selected:hover[disabled].active,\r\n.datepicker table tr td.selected.disabled[disabled].active,\r\n.datepicker table tr td.selected.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.selected.active,\r\nfieldset[disabled] .datepicker table tr td.selected:hover.active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover.active {\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #555555;\r\n}\r\n.datepicker table tr td.active,\r\n.datepicker table tr td.active:hover,\r\n.datepicker table tr td.active.disabled,\r\n.datepicker table tr td.active.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #357ebd;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.datepicker table tr td.active:hover,\r\n.datepicker table tr td.active:hover:hover,\r\n.datepicker table tr td.active.disabled:hover,\r\n.datepicker table tr td.active.disabled:hover:hover,\r\n.datepicker table tr td.active:focus,\r\n.datepicker table tr td.active:hover:focus,\r\n.datepicker table tr td.active.disabled:focus,\r\n.datepicker table tr td.active.disabled:hover:focus,\r\n.datepicker table tr td.active:active,\r\n.datepicker table tr td.active:hover:active,\r\n.datepicker table tr td.active.disabled:active,\r\n.datepicker table tr td.active.disabled:hover:active,\r\n.datepicker table tr td.active.active,\r\n.datepicker table tr td.active:hover.active,\r\n.datepicker table tr td.active.disabled.active,\r\n.datepicker table tr td.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.active,\r\n.open .dropdown-toggle.datepicker table tr td.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.5);\r\n  border-color: #285e8e;\r\n}\r\n.datepicker table tr td.active:active,\r\n.datepicker table tr td.active:hover:active,\r\n.datepicker table tr td.active.disabled:active,\r\n.datepicker table tr td.active.disabled:hover:active,\r\n.datepicker table tr td.active.active,\r\n.datepicker table tr td.active:hover.active,\r\n.datepicker table tr td.active.disabled.active,\r\n.datepicker table tr td.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.active,\r\n.open .dropdown-toggle.datepicker table tr td.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.active.disabled,\r\n.datepicker table tr td.active:hover.disabled,\r\n.datepicker table tr td.active.disabled.disabled,\r\n.datepicker table tr td.active.disabled:hover.disabled,\r\n.datepicker table tr td.active[disabled],\r\n.datepicker table tr td.active:hover[disabled],\r\n.datepicker table tr td.active.disabled[disabled],\r\n.datepicker table tr td.active.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.active,\r\nfieldset[disabled] .datepicker table tr td.active:hover,\r\nfieldset[disabled] .datepicker table tr td.active.disabled,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover,\r\n.datepicker table tr td.active.disabled:hover,\r\n.datepicker table tr td.active:hover.disabled:hover,\r\n.datepicker table tr td.active.disabled.disabled:hover,\r\n.datepicker table tr td.active.disabled:hover.disabled:hover,\r\n.datepicker table tr td.active[disabled]:hover,\r\n.datepicker table tr td.active:hover[disabled]:hover,\r\n.datepicker table tr td.active.disabled[disabled]:hover,\r\n.datepicker table tr td.active.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.active:hover,\r\nfieldset[disabled] .datepicker table tr td.active:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover:hover,\r\n.datepicker table tr td.active.disabled:focus,\r\n.datepicker table tr td.active:hover.disabled:focus,\r\n.datepicker table tr td.active.disabled.disabled:focus,\r\n.datepicker table tr td.active.disabled:hover.disabled:focus,\r\n.datepicker table tr td.active[disabled]:focus,\r\n.datepicker table tr td.active:hover[disabled]:focus,\r\n.datepicker table tr td.active.disabled[disabled]:focus,\r\n.datepicker table tr td.active.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.active:focus,\r\nfieldset[disabled] .datepicker table tr td.active:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover:focus,\r\n.datepicker table tr td.active.disabled:active,\r\n.datepicker table tr td.active:hover.disabled:active,\r\n.datepicker table tr td.active.disabled.disabled:active,\r\n.datepicker table tr td.active.disabled:hover.disabled:active,\r\n.datepicker table tr td.active[disabled]:active,\r\n.datepicker table tr td.active:hover[disabled]:active,\r\n.datepicker table tr td.active.disabled[disabled]:active,\r\n.datepicker table tr td.active.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.active:active,\r\nfieldset[disabled] .datepicker table tr td.active:hover:active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover:active,\r\n.datepicker table tr td.active.disabled.active,\r\n.datepicker table tr td.active:hover.disabled.active,\r\n.datepicker table tr td.active.disabled.disabled.active,\r\n.datepicker table tr td.active.disabled:hover.disabled.active,\r\n.datepicker table tr td.active[disabled].active,\r\n.datepicker table tr td.active:hover[disabled].active,\r\n.datepicker table tr td.active.disabled[disabled].active,\r\n.datepicker table tr td.active.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.active.active,\r\nfieldset[disabled] .datepicker table tr td.active:hover.active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover.active {\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n}\r\n.datepicker table tr td span {\r\n  display: block;\r\n  width: 23%;\r\n  height: 54px;\r\n  line-height: 54px;\r\n  float: left;\r\n  margin: 1%;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.datepicker table tr td span:hover {\r\n  background: rgba(0,0,0,0.2);\r\n}\r\n.datepicker table tr td span.disabled,\r\n.datepicker table tr td span.disabled:hover {\r\n  background: none;\r\n  color: #444;\r\n  cursor: default;\r\n}\r\n.datepicker table tr td span.active,\r\n.datepicker table tr td span.active:hover,\r\n.datepicker table tr td span.active.disabled,\r\n.datepicker table tr td span.active.disabled:hover {\r\n  color: #ffffff;\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.datepicker table tr td span.active:hover,\r\n.datepicker table tr td span.active:hover:hover,\r\n.datepicker table tr td span.active.disabled:hover,\r\n.datepicker table tr td span.active.disabled:hover:hover,\r\n.datepicker table tr td span.active:focus,\r\n.datepicker table tr td span.active:hover:focus,\r\n.datepicker table tr td span.active.disabled:focus,\r\n.datepicker table tr td span.active.disabled:hover:focus,\r\n.datepicker table tr td span.active:active,\r\n.datepicker table tr td span.active:hover:active,\r\n.datepicker table tr td span.active.disabled:active,\r\n.datepicker table tr td span.active.disabled:hover:active,\r\n.datepicker table tr td span.active.active,\r\n.datepicker table tr td span.active:hover.active,\r\n.datepicker table tr td span.active.disabled.active,\r\n.datepicker table tr td span.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled:hover {\r\n  color: #ffffff;\r\n  background-color: #3276b1;\r\n  border-color: #285e8e;\r\n}\r\n.datepicker table tr td span.active:active,\r\n.datepicker table tr td span.active:hover:active,\r\n.datepicker table tr td span.active.disabled:active,\r\n.datepicker table tr td span.active.disabled:hover:active,\r\n.datepicker table tr td span.active.active,\r\n.datepicker table tr td span.active:hover.active,\r\n.datepicker table tr td span.active.disabled.active,\r\n.datepicker table tr td span.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td span.active.disabled,\r\n.datepicker table tr td span.active:hover.disabled,\r\n.datepicker table tr td span.active.disabled.disabled,\r\n.datepicker table tr td span.active.disabled:hover.disabled,\r\n.datepicker table tr td span.active[disabled],\r\n.datepicker table tr td span.active:hover[disabled],\r\n.datepicker table tr td span.active.disabled[disabled],\r\n.datepicker table tr td span.active.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td span.active,\r\nfieldset[disabled] .datepicker table tr td span.active:hover,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover,\r\n.datepicker table tr td span.active.disabled:hover,\r\n.datepicker table tr td span.active:hover.disabled:hover,\r\n.datepicker table tr td span.active.disabled.disabled:hover,\r\n.datepicker table tr td span.active.disabled:hover.disabled:hover,\r\n.datepicker table tr td span.active[disabled]:hover,\r\n.datepicker table tr td span.active:hover[disabled]:hover,\r\n.datepicker table tr td span.active.disabled[disabled]:hover,\r\n.datepicker table tr td span.active.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td span.active:hover,\r\nfieldset[disabled] .datepicker table tr td span.active:hover:hover,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover:hover,\r\n.datepicker table tr td span.active.disabled:focus,\r\n.datepicker table tr td span.active:hover.disabled:focus,\r\n.datepicker table tr td span.active.disabled.disabled:focus,\r\n.datepicker table tr td span.active.disabled:hover.disabled:focus,\r\n.datepicker table tr td span.active[disabled]:focus,\r\n.datepicker table tr td span.active:hover[disabled]:focus,\r\n.datepicker table tr td span.active.disabled[disabled]:focus,\r\n.datepicker table tr td span.active.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td span.active:focus,\r\nfieldset[disabled] .datepicker table tr td span.active:hover:focus,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover:focus,\r\n.datepicker table tr td span.active.disabled:active,\r\n.datepicker table tr td span.active:hover.disabled:active,\r\n.datepicker table tr td span.active.disabled.disabled:active,\r\n.datepicker table tr td span.active.disabled:hover.disabled:active,\r\n.datepicker table tr td span.active[disabled]:active,\r\n.datepicker table tr td span.active:hover[disabled]:active,\r\n.datepicker table tr td span.active.disabled[disabled]:active,\r\n.datepicker table tr td span.active.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td span.active:active,\r\nfieldset[disabled] .datepicker table tr td span.active:hover:active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover:active,\r\n.datepicker table tr td span.active.disabled.active,\r\n.datepicker table tr td span.active:hover.disabled.active,\r\n.datepicker table tr td span.active.disabled.disabled.active,\r\n.datepicker table tr td span.active.disabled:hover.disabled.active,\r\n.datepicker table tr td span.active[disabled].active,\r\n.datepicker table tr td span.active:hover[disabled].active,\r\n.datepicker table tr td span.active.disabled[disabled].active,\r\n.datepicker table tr td span.active.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td span.active.active,\r\nfieldset[disabled] .datepicker table tr td span.active:hover.active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled.active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover.active {\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n}\r\n.datepicker table tr td span.old,\r\n.datepicker table tr td span.new {\r\n  color: #444;\r\n}\r\n.datepicker th.datepicker-switch {\r\n  width: 145px;\r\n}\r\n.datepicker thead tr:first-child th,\r\n.datepicker tfoot tr th {\r\n  cursor: pointer;\r\n}\r\n.datepicker thead tr:first-child th:hover,\r\n.datepicker tfoot tr th:hover {\r\n  background: rgba(0,0,0,0.2);\r\n}\r\n.datepicker .cw {\r\n  font-size: 10px;\r\n  width: 12px;\r\n  padding: 0 2px 0 5px;\r\n  vertical-align: middle;\r\n}\r\n.datepicker thead tr:first-child th.cw {\r\n  cursor: default;\r\n  background-color: transparent;\r\n}\r\n.input-group.date .input-group-addon i {\r\n  cursor: pointer;\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n.input-daterange input {\r\n  text-align: center;\r\n}\r\n.input-daterange input:first-child {\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n.input-daterange input:last-child {\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n.input-daterange .input-group-addon {\r\n  width: auto;\r\n  min-width: 16px;\r\n  padding: 4px 5px;\r\n  font-weight: normal;\r\n  line-height: 1.428571429;\r\n  text-align: center;\r\n  text-shadow: 0 1px 0 #fff;\r\n  vertical-align: middle;\r\n  background-color: #eeeeee;\r\n  border: solid #cccccc;\r\n  border-width: 1px 0;\r\n  margin-left: -5px;\r\n  margin-right: -5px;\r\n}\r\n.datepicker.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  float: left;\r\n  display: none;\r\n  min-width: 160px;\r\n  list-style: none;\r\n  background-color: #ffffff;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding;\r\n  background-clip: padding-box;\r\n  *border-right-width: 2px;\r\n  *border-bottom-width: 2px;\r\n  color: #333333;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  line-height: 1.428571429;\r\n}\r\n.datepicker.dropdown-menu th,\r\n.datepicker.dropdown-menu td {\r\n  padding: 4px 5px;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./paperManage_uploadStatistics_css.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./paperManage_uploadStatistics_css.css");
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

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, "\n/*# sourceMappingURL=maps/paperManage_uploadStatistics_css.css.map */\n", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"paperManage_uploadStatistics\">\n    <div class=\"title-wrapper\">\n        <div class=\"title\" v-bind:class=\"flag ? '123': '345'\">{{nameFromIndex}}</div>\n        <div class=\"title-bg\"></div>\n    </div>\n    <div class=\"content\">\n        <div class=\"time\">\n            <div class=\"form-group \">\n                <label>年份:</label>\n                <div class=\"input-group date\">\n                    <div class=\"input-group-addon\">\n                        <i class=\"fa fa-calendar fa-0.5x\"></i>\n                    </div>\n                    <input type=\"text\" class=\"form-control pull-right Wdate input\" id=\"dateYear\" />\n                </div>\n            </div>\n            <input v-model=\"bigTime\" class=\"Wdate input mr20\" type=\"text\" id=\"bigTime\" />\n            上传时间\n            <input v-model=\"startTime\" class=\"Wdate input\" type=\"text\" id=\"startTime\" />\n            到\n            <input v-model=\"endTime\" class=\"Wdate input mr20\" type=\"text\" id=\"endTime\" />\n            审核时间\n            <input v-model=\"sTime\" class=\"Wdate input\" type=\"text\" id=\"sTime\" />\n            到\n            <input v-model=\"eTime\" class=\"Wdate input\" type=\"text\" id=\"eTime\" />\n        </div>\n        <div class=\"second\">\n            状态\n            <select class=\"status select mr20\" v-model=\"status\">\n                <option selected=\"\">全部</option>\n                <option>待审核</option>\n            </select>\n            科目\n            <select class=\"subject select mr20\" v-model=\"subject\">\n                <option selected=\"\">语文</option>\n                <option>数学</option>\n                <option>英语</option>\n            </select>\n            年级\n            <select class=\"grade select mr20\" v-model=\"grade\">\n                <option selected=\"\">全部</option>\n                <option>一年级</option>\n                <option>二年级</option>\n                <option>三年级</option>\n            </select>\n            上传人\n            <input type=\"text\" class=\"input\" v-model=\"person\" placeholder=\"请输入上传人的名称\">\n        </div>\n        <div class=\"area\">\n            地区\n            <are></are>\n        </div>\n        <div class=\"paper\">\n            试卷类型\n            <select class=\"mr20 select\" v-model=\"type\">\n                <option selected=\"\">全部</option>\n                <option>期中</option>\n                <option>期末</option>\n            </select>\n            试卷名称\n            <input class=\"mr20 input\" placeholder=\"请输入要查询的试卷名称\" v-model=\"name\">\n            试卷ID\n            <input class=\"mr20 input\" placeholder=\"请输入要查询的试卷ID\" v-model=\"id\">\n            <span class=\"search\" @click=\"search\">查询</span>\n        </div>\n        <tab :table-data=\"tableData\"></tab>\n    </div>\n</div>\n";

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzLnZ1ZSIsIndlYnBhY2s6Ly8vcGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXJlYS52dWUiLCJ3ZWJwYWNrOi8vL2FyZWEudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FyZWEudnVlPzdlMzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudnVlIiwid2VicGFjazovLy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudnVlPzdkMmMiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL3BsdWdpbnMvZGF0ZXBpY2tlci9kYXRlcGlja2VyMy5jc3M/YTI0MyIsIndlYnBhY2s6Ly8vLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2RhdGVwaWNrZXIzLmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmpzIiwid2VicGFjazovLy8uL2J1bmRsZS9jc3MvcGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljc19jc3MuY3NzPzhmMTEiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlL2Nzcy9wYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzX2Nzcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljcy52dWU/YWY2OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQStGO0FBQy9GO0FBQ0EsYUFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUMsSTs7Ozs7Ozs7QUNxREQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTthQUVBOzRCQUNBO3lCQUNBOztnQkFFQTtrQkFDQTtnQkFDQTtjQUNBO2NBQ0E7ZUFDQTtnQkFDQTtjQUNBO2VBQ0E7YUFDQTthQUNBO1dBQ0E7a0JBRUE7QUFkQTtBQWVBOztZQUVBO1lBRUE7QUFIQTsyQkFJQTttQkFDQTs7b0JBRUE7bUJBQ0E7bUJBQ0E7aUJBRUE7QUFMQTtBQU1BO0FBQ0E7OytCQUdBO3FDQUNBO0FBRUE7QUFMQTtBQWxDQSxHOzs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBK0Y7QUFDL0Y7QUFDQSxhQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQyxJOzs7Ozs7OztBQ1REO0FBQ0E7ZUFFQTsyQkFDQTs7O3lCQU1BO0FBSEEsY0FEQTs7eUJBU0E7QUFIQSxjQURBOzt5QkFVQTtBQUpBLGNBREE7QUFYQTtBQWlCQTs2QkFTQSxDQUNBOztxQ0FZQSxDQUNBOzJDQVVBLENBRUE7QUF4QkE7QUEvQkEsRzs7Ozs7O0FDZkEsbUhBQWtILGFBQWEsbUhBQW1ILGFBQWEsdUZBQXVGLGFBQWEsd0I7Ozs7OztBQ0FuVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUErRjtBQUMvRjtBQUNBLGFBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDLEk7Ozs7Ozs7O0FDWkQ7ZUFFQTthQUNBO0FBRkEsRzs7Ozs7O0FDWEEsZ0dBQStGLE1BQU0sd0M7Ozs7OztBQ0FyRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0Esb1FBQW1RLG1CQUFtQix5QkFBeUIscUJBQXFCLGNBQWMsOENBQThDLE9BQU8sT0FBTyx3QkFBd0Isa0JBQWtCLEtBQUssZ0NBQWdDLHFCQUFxQixLQUFLLGlEQUFpRCxtQkFBbUIsS0FBSywwQkFBMEIsYUFBYSxjQUFjLEtBQUssaUNBQWlDLGtCQUFrQiw0QkFBNEIseUNBQXlDLDBDQUEwQyxvQ0FBb0Msb0JBQW9CLDhDQUE4Qyx5QkFBeUIsS0FBSyxnQ0FBZ0Msa0JBQWtCLDRCQUE0Qix5Q0FBeUMsMENBQTBDLG9DQUFvQyxvQkFBb0IseUJBQXlCLEtBQUssd0RBQXdELGdCQUFnQixLQUFLLHVEQUF1RCxnQkFBZ0IsS0FBSyx5REFBeUQsaUJBQWlCLEtBQUssd0RBQXdELGlCQUFpQixLQUFLLHVEQUF1RCxnQkFBZ0IsS0FBSyxzREFBc0QsZ0JBQWdCLEtBQUssMERBQTBELG1CQUFtQix1QkFBdUIsaUNBQWlDLEtBQUsseURBQXlELG1CQUFtQix1QkFBdUIsaUNBQWlDLEtBQUssdUJBQXVCLG9CQUFvQixLQUFLLDBDQUEwQyxxQkFBcUIsS0FBSyw4Q0FBOEMscUJBQXFCLEtBQUssNENBQTRDLHFCQUFxQixLQUFLLHVCQUF1QixnQkFBZ0Isa0NBQWtDLGdDQUFnQywrQkFBK0IsNkJBQTZCLDRCQUE0Qix3QkFBd0IsS0FBSyx5REFBeUQseUJBQXlCLGtCQUFrQixtQkFBbUIseUJBQXlCLG1CQUFtQixLQUFLLHVGQUF1RixvQ0FBb0MsS0FBSywrRUFBK0Usa0NBQWtDLHNCQUFzQixLQUFLLGlFQUFpRSxrQkFBa0IsS0FBSyxpRkFBaUYsdUJBQXVCLGtCQUFrQixzQkFBc0IsS0FBSyx1S0FBdUsscUJBQXFCLGtDQUFrQyw0QkFBNEIsS0FBSywrL0JBQSsvQixxQkFBcUIsa0NBQWtDLDRCQUE0QixLQUFLLG1vQkFBbW9CLDZCQUE2QixLQUFLLDIrR0FBMitHLGtDQUFrQyw0QkFBNEIsS0FBSywrQ0FBK0Msa0JBQWtCLEtBQUssZ0RBQWdELGtCQUFrQixLQUFLLHVLQUF1SyxrQ0FBa0MsdUJBQXVCLEtBQUssK0xBQStMLHFCQUFxQixrQ0FBa0MsNEJBQTRCLHVCQUF1QixLQUFLLHVuQ0FBdW5DLHFCQUFxQixrQ0FBa0MsNEJBQTRCLEtBQUssMnNCQUEyc0IsNkJBQTZCLEtBQUssbTFIQUFtMUgsa0NBQWtDLDRCQUE0QixLQUFLLG1MQUFtTCxxQkFBcUIsa0NBQWtDLDRCQUE0QixnREFBZ0QsS0FBSywyakNBQTJqQyxxQkFBcUIsa0NBQWtDLDRCQUE0QixLQUFLLHVxQkFBdXFCLDZCQUE2QixLQUFLLCtwSEFBK3BILGtDQUFrQyw0QkFBNEIsS0FBSywyS0FBMksscUJBQXFCLGtDQUFrQyw0QkFBNEIsZ0RBQWdELEtBQUssbWhDQUFtaEMscUJBQXFCLGtDQUFrQyw0QkFBNEIsS0FBSywrb0JBQStvQiw2QkFBNkIsS0FBSyx1aUhBQXVpSCxnQ0FBZ0MsNEJBQTRCLEtBQUssa0NBQWtDLHFCQUFxQixpQkFBaUIsbUJBQW1CLHdCQUF3QixrQkFBa0IsaUJBQWlCLHNCQUFzQix5QkFBeUIsS0FBSyx3Q0FBd0Msa0NBQWtDLEtBQUssMkZBQTJGLHVCQUF1QixrQkFBa0Isc0JBQXNCLEtBQUssK0xBQStMLHFCQUFxQixnQ0FBZ0MsNEJBQTRCLGdEQUFnRCxLQUFLLHVuQ0FBdW5DLHFCQUFxQixnQ0FBZ0MsNEJBQTRCLEtBQUssMnNCQUEyc0IsNkJBQTZCLEtBQUssbTFIQUFtMUgsZ0NBQWdDLDRCQUE0QixLQUFLLDJFQUEyRSxrQkFBa0IsS0FBSyxzQ0FBc0MsbUJBQW1CLEtBQUsscUVBQXFFLHNCQUFzQixLQUFLLGlGQUFpRixrQ0FBa0MsS0FBSyxxQkFBcUIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsNkJBQTZCLEtBQUssNENBQTRDLHNCQUFzQixvQ0FBb0MsS0FBSyw0Q0FBNEMsc0JBQXNCLGtCQUFrQixtQkFBbUIsS0FBSyw0QkFBNEIseUJBQXlCLEtBQUssd0NBQXdDLGlDQUFpQyxLQUFLLHVDQUF1QyxpQ0FBaUMsS0FBSyx5Q0FBeUMsa0JBQWtCLHNCQUFzQix1QkFBdUIsMEJBQTBCLCtCQUErQix5QkFBeUIsZ0NBQWdDLDZCQUE2QixnQ0FBZ0MsNEJBQTRCLDBCQUEwQix3QkFBd0IseUJBQXlCLEtBQUssK0JBQStCLHlCQUF5QixnQkFBZ0IsY0FBYyxvQkFBb0Isa0JBQWtCLG9CQUFvQix1QkFBdUIsdUJBQXVCLGdDQUFnQyw2QkFBNkIsMkNBQTJDLHlCQUF5Qix3REFBd0QscURBQXFELGdEQUFnRCwyQ0FBMkMsb0NBQW9DLG1DQUFtQywrQkFBK0IsZ0NBQWdDLHFCQUFxQixvRUFBb0Usc0JBQXNCLCtCQUErQixLQUFLLG1FQUFtRSx1QkFBdUIsS0FBSzs7QUFFOXltQzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLHlDQUF3QyxnQkFBZ0I7QUFDeEQsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBLG1CQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0EsU0FBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLGtCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQSxpQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7O0FBRUEsOEJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDclBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7OztBQUdGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF3QjtBQUN4QjtBQUNBLGdDQUErQjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixxQkFBb0I7QUFDcEI7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSw2QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTixNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ04sTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ04sTUFBSztBQUNMO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxLQUFJO0FBQ0osSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRzs7QUFFSDtBQUNBLDJCQUEwQixxQkFBcUI7QUFDL0M7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSwyQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsMkJBQTBCLHVDQUF1QztBQUNqRTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0Esb0JBQW1CLFFBQVE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQSxzQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0E7QUFDQSxzQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQSxzQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQSxzQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0E7QUFDQSxzQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQSxzQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0Esb0NBQW1DLFlBQVksRUFBRTtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCO0FBQ0E7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSwrQ0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsVUFBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7QUFFRixFQUFDOzs7Ozs7O0FDdG9ERDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGlDQUFnQyxVQUFVLEVBQUU7QUFDNUMsRTs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNQQSwwS0FBeUssZUFBZSxpbkYiLCJmaWxlIjoiMTAuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX192dWVfc2NyaXB0X18sIF9fdnVlX3RlbXBsYXRlX19cbl9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lczIwMTUmcGx1Z2luc1tdPXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzLnZ1ZVwiKVxuaWYgKF9fdnVlX3NjcmlwdF9fICYmXG4gICAgX192dWVfc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fdnVlX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIlt2dWUtbG9hZGVyXSBzcmNcXFxcY29tcG9uZW50c1xcXFxwYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzLnZ1ZTogbmFtZWQgZXhwb3J0cyBpbiAqLnZ1ZSBmaWxlcyBhcmUgaWdub3JlZC5cIil9XG5fX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWh0bWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3BhcGVyTWFuYWdlX3VwbG9hZFN0YXRpc3RpY3MudnVlXCIpXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX3NjcmlwdF9fIHx8IHt9XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG5pZiAoX192dWVfdGVtcGxhdGVfXykge1xuKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgfHwgKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgPSB7fSkpIDogbW9kdWxlLmV4cG9ydHMpLnRlbXBsYXRlID0gX192dWVfdGVtcGxhdGVfX1xufVxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIHZhciBpZCA9IFwiX3YtNzYyNzA4ZWEvcGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljcy52dWVcIlxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZS5leHBvcnRzKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS51cGRhdGUoaWQsIG1vZHVsZS5leHBvcnRzLCBfX3Z1ZV90ZW1wbGF0ZV9fKVxuICB9XG59KSgpfVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9wYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDEwXG4gKiovIiwiPHRlbXBsYXRlIGlkPVwidHBsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiIHYtYmluZDpjbGFzcz1cImZsYWcgPyAnMTIzJzogJzM0NSdcIj57e25hbWVGcm9tSW5kZXh9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtYmdcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPuW5tOS7vTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhciBmYS0wLjV4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodCBXZGF0ZSBpbnB1dFwiIGlkPVwiZGF0ZVllYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImJpZ1RpbWVcIiBjbGFzcz1cIldkYXRlIGlucHV0IG1yMjBcIiB0eXBlPVwidGV4dFwiIGlkPVwiYmlnVGltZVwiIC8+XHJcbiAgICAgICAgICAgICAgICDkuIrkvKDml7bpl7RcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwic3RhcnRUaW1lXCIgY2xhc3M9XCJXZGF0ZSBpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzdGFydFRpbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAg5YiwXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImVuZFRpbWVcIiBjbGFzcz1cIldkYXRlIGlucHV0IG1yMjBcIiB0eXBlPVwidGV4dFwiIGlkPVwiZW5kVGltZVwiIC8+XHJcbiAgICAgICAgICAgICAgICDlrqHmoLjml7bpl7RcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwic1RpbWVcIiBjbGFzcz1cIldkYXRlIGlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInNUaW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIOWIsFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJlVGltZVwiIGNsYXNzPVwiV2RhdGUgaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwiZVRpbWVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZFwiPlxyXG4gICAgICAgICAgICAgICAg54q25oCBXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic3RhdHVzIHNlbGVjdCBtcjIwXCIgdi1tb2RlbD1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7lhajpg6g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPuW+heWuoeaguDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICDnp5Hnm65cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJzdWJqZWN0IHNlbGVjdCBtcjIwXCIgdi1tb2RlbD1cInN1YmplY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+6K+t5paHPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7mlbDlraY8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPuiLseivrTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICDlubTnuqdcclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJncmFkZSBzZWxlY3QgbXIyMFwiIHYtbW9kZWw9XCJncmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XCJcIj7lhajpg6g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPuS4gOW5tOe6pzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+5LqM5bm057qnPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7kuInlubTnuqc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAg5LiK5Lyg5Lq6XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0XCIgdi1tb2RlbD1cInBlcnNvblwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5LiK5Lyg5Lq655qE5ZCN56ewXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAg5Zyw5Yy6XHJcbiAgICAgICAgICAgICAgICA8YXJlPjwvYXJlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyXCI+XHJcbiAgICAgICAgICAgICAgICDor5XljbfnsbvlnotcclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJtcjIwIHNlbGVjdFwiIHYtbW9kZWw9XCJ0eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPuWFqOmDqDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24+5pyf5LitPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj7mnJ/mnKs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAg6K+V5Y235ZCN56ewXHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJtcjIwIGlucHV0XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXopoHmn6Xor6LnmoTor5XljbflkI3np7BcIiB2LW1vZGVsPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAg6K+V5Y23SURcclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1yMjAgaW5wdXRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeimgeafpeivoueahOivleWNt0lEXCIgdi1tb2RlbD1cImlkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlYXJjaFwiIEBjbGljaz1cInNlYXJjaFwiPuafpeivojwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx0YWIgOnRhYmxlLWRhdGE9XCJ0YWJsZURhdGFcIj48L3RhYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPCEtLSB2LeeahOWAvOW/hemhu+aYr+ihqOi+vuW8j+S4jeiDveaYr+W4puino+aekOeahOmCo+enjXt7fX0gIC0tPlxyXG48IS0t6K+35rGCYWpheOaVsOaNri0tPlxyXG5cclxuPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbiAgdmFyIGFyZWEgPSByZXF1aXJlKFwiLi9hcmVhLnZ1ZVwiKTtcclxuICB2YXIgdGFiID0gcmVxdWlyZShcIi4vdGFibGUudnVlXCIpO1xyXG4gIHJlcXVpcmUoJy4uLy4uL2J1bmRsZS9wbHVnaW5zL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcjMuY3NzJyk7XHJcbiAgcmVxdWlyZSgnLi4vLi4vYnVuZGxlL3BsdWdpbnMvZGF0ZXBpY2tlci9ib290c3RyYXAtZGF0ZXBpY2tlci5qcycpO1xyXG4gIHJlcXVpcmUoXCIuLi8uLi9idW5kbGUvY3NzL3BhcGVyTWFuYWdlX3VwbG9hZFN0YXRpc3RpY3NfY3NzLmNzc1wiKTtcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgIHRlbXBsYXRlOiAnI3RwbCcsXHJcbiAgICAgIHByb3BzOiBbJ25hbWVGcm9tSW5kZXgnLCdmbGFnJ10sXHJcbiAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYmlnVGltZTonJyxcclxuICAgICAgICAgIHN0YXJ0VGltZTonJyxcclxuICAgICAgICAgIGVuZFRpbWU6JycsXHJcbiAgICAgICAgICBzVGltZTogJycsXHJcbiAgICAgICAgICBlVGltZTogJycsXHJcbiAgICAgICAgICBzdGF0dXM6JycsXHJcbiAgICAgICAgICBzdWJqZWN0OicnLFxyXG4gICAgICAgICAgZ3JhZGU6JycsXHJcbiAgICAgICAgICBwZXJzb246JycsXHJcbiAgICAgICAgICB0eXBlOicnLFxyXG4gICAgICAgICAgbmFtZTonJyxcclxuICAgICAgICAgIGlkOicnLFxyXG4gICAgICAgICAgdGFibGVEYXRhOicnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOntcclxuICAgICAgICBcImFyZVwiOiBhcmVhLFxyXG4gICAgICAgIFwidGFiXCI6IHRhYlxyXG4gICAgICB9LFxyXG4gICAgICByZWFkeTpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJChcIi5XZGF0ZVwiKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICBjbGVhckJ0bjogdHJ1ZSxcclxuICAgICAgICAgICAgdG9kYXlCdG46IHRydWUsXHJcbiAgICAgICAgICAgIGZvcm1hdDogXCJ5eXl5LW1tLWRkXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzZWFyY2g6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAvL+W4puS4iuWPguaVsFxyXG4gICAgICAgICAgdGhpcy50YWJsZURhdGEgPSBbMSwyLDMsNCw1XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH07XHJcbjwvc2NyaXB0PlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHBhcGVyTWFuYWdlX3VwbG9hZFN0YXRpc3RpY3MudnVlPzIwM2MyNTQ2XG4gKiovIiwidmFyIF9fdnVlX3NjcmlwdF9fLCBfX3Z1ZV90ZW1wbGF0ZV9fXG5fX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZXMyMDE1JnBsdWdpbnNbXT10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXJlYS52dWVcIilcbmlmIChfX3Z1ZV9zY3JpcHRfXyAmJlxuICAgIF9fdnVlX3NjcmlwdF9fLl9fZXNNb2R1bGUgJiZcbiAgICBPYmplY3Qua2V5cyhfX3Z1ZV9zY3JpcHRfXykubGVuZ3RoID4gMSkge1xuICBjb25zb2xlLndhcm4oXCJbdnVlLWxvYWRlcl0gc3JjXFxcXGNvbXBvbmVudHNcXFxcYXJlYS52dWU6IG5hbWVkIGV4cG9ydHMgaW4gKi52dWUgZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1odG1sLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcmVhLnZ1ZVwiKVxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9zY3JpcHRfXyB8fCB7fVxuaWYgKG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdFxuaWYgKF9fdnVlX3RlbXBsYXRlX18pIHtcbih0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwiZnVuY3Rpb25cIiA/IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zIHx8IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zID0ge30pKSA6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSA9IF9fdnVlX3RlbXBsYXRlX19cbn1cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHsgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICB2YXIgaWQgPSBcIl92LTJjMWE3MWI0L2FyZWEudnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgX192dWVfdGVtcGxhdGVfXylcbiAgfVxufSkoKX1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvYXJlYS52dWVcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxMFxuICoqLyIsIjx0ZW1wbGF0ZSBpZD1cImFyZWFcIj5cclxuICAgIDxzZWxlY3Qgdi1vbjpjbGljaz1cImNpdHlGdW5cIiBjbGFzcz1cIm1yMjAgdzEwMFwiPlxyXG4gICAgICAgIDxvcHRpb24gdi1mb3I9XCJpdGVtIGluIHByb3ZpbmNlXCI+e3tpdGVtLnBfTmFtZX19PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuICAgIDxzZWxlY3Qgdi1vbjpjbGljaz1cImNvdW50cnlGdW5cIiBjbGFzcz1cIm1yMjAgdzEwMFwiPlxyXG4gICAgICAgIDxvcHRpb24gdi1mb3I9XCJpdGVtIGluIGNpdHlcIj57e2l0ZW0ucF9OYW1lfX08L29wdGlvbj5cclxuICAgIDwvc2VsZWN0PlxyXG4gICAgPHNlbGVjdCBjbGFzcz1cIncxMDBcIj5cclxuICAgICAgICA8b3B0aW9uIHYtZm9yPVwiaXRlbSBpbiBjb3VudHJ5XCI+e3tpdGVtLnBfTmFtZX19PC9vcHRpb24+XHJcbiAgICA8L3NlbGVjdD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICB2YXIgZmxhZzEsZmxhZzI7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICB0ZW1wbGF0ZTogJyNhcmVhJyxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcHJvdmluY2U6W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcF9OYW1lOiAn5LiN6ZmQ55yB5Lu9J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjaXR5OltcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBfTmFtZTogJ+S4jemZkOWfjuW4gidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTpbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwX05hbWU6ICfkuI3pmZDljLrljr8nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkeTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgLy90aGlzLiRodHRwLmdldChcIi4uL2NvbmZpZy9wcm92aW5jZS1kYXRhLmpzb25cIikudGhlbihmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgLy8gICAgZGF0YS5kYXRhLnJldmVyc2UoKS5wdXNoKHtcclxuICAgICAgICAgICAgLy8gICAgICAgIHBfTmFtZTogJ+S4jemZkOecgeS7vSdcclxuICAgICAgICAgICAgLy8gICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgIGZsYWcxID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgdGhpcy5wcm92aW5jZT0gZGF0YS5kYXRhLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgLy8gICAgLy9jb25zb2xlLmxvZyh0aGlzLiRkYXRhKTtcclxuICAgICAgICAgICAgLy99KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgY2l0eUZ1bjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy4kaHR0cC5nZXQoXCIuLi9jb25maWcvY2l0eS1kYXRhLmpzb25cIikudGhlbihmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIC8vICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBpZiAoZmxhZzEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICBkYXRhLmRhdGEucmV2ZXJzZSgpLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBwX05hbWU6ICfkuI3pmZDln47luIInXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgZmxhZzIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuY2l0eSA9IGRhdGEuZGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAvL30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb3VudHJ5RnVuOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLiRodHRwLmdldChcIi4uL2NvbmZpZy9jb3VudHJ5LWRhdGEuanNvblwiKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIGlmIChmbGFnMikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIGRhdGEuZGF0YS5yZXZlcnNlKCkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgIHBfTmFtZTogJ+S4jemZkOWMuuWOvydcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLmNvdW50cnk9IGRhdGEuZGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAvL30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcmVhLnZ1ZT8yOTM3M2U3OVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48c2VsZWN0IHYtb246Y2xpY2s9XFxcImNpdHlGdW5cXFwiIGNsYXNzPVxcXCJtcjIwIHcxMDBcXFwiPlxcbiAgICA8b3B0aW9uIHYtZm9yPVxcXCJpdGVtIGluIHByb3ZpbmNlXFxcIj57e2l0ZW0ucF9OYW1lfX08L29wdGlvbj5cXG48L3NlbGVjdD5cXG48c2VsZWN0IHYtb246Y2xpY2s9XFxcImNvdW50cnlGdW5cXFwiIGNsYXNzPVxcXCJtcjIwIHcxMDBcXFwiPlxcbiAgICA8b3B0aW9uIHYtZm9yPVxcXCJpdGVtIGluIGNpdHlcXFwiPnt7aXRlbS5wX05hbWV9fTwvb3B0aW9uPlxcbjwvc2VsZWN0PlxcbjxzZWxlY3QgY2xhc3M9XFxcIncxMDBcXFwiPlxcbiAgICA8b3B0aW9uIHYtZm9yPVxcXCJpdGVtIGluIGNvdW50cnlcXFwiPnt7aXRlbS5wX05hbWV9fTwvb3B0aW9uPlxcbjwvc2VsZWN0PlxcblwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1odG1sLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvYXJlYS52dWVcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAxMFxuICoqLyIsInZhciBfX3Z1ZV9zY3JpcHRfXywgX192dWVfdGVtcGxhdGVfX1xuX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWVzMjAxNSZwbHVnaW5zW109dHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3RhYmxlLnZ1ZVwiKVxuaWYgKF9fdnVlX3NjcmlwdF9fICYmXG4gICAgX192dWVfc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fdnVlX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIlt2dWUtbG9hZGVyXSBzcmNcXFxcY29tcG9uZW50c1xcXFx0YWJsZS52dWU6IG5hbWVkIGV4cG9ydHMgaW4gKi52dWUgZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1odG1sLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi90YWJsZS52dWVcIilcbm1vZHVsZS5leHBvcnRzID0gX192dWVfc2NyaXB0X18gfHwge31cbmlmIChtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHRcbmlmIChfX3Z1ZV90ZW1wbGF0ZV9fKSB7XG4odHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcImZ1bmN0aW9uXCIgPyAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyB8fCAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyA9IHt9KSkgOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUgPSBfX3Z1ZV90ZW1wbGF0ZV9fXG59XG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7ICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgdmFyIGlkID0gXCJfdi0zMzAxNTVmNi90YWJsZS52dWVcIlxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZS5leHBvcnRzKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS51cGRhdGUoaWQsIG1vZHVsZS5leHBvcnRzLCBfX3Z1ZV90ZW1wbGF0ZV9fKVxuICB9XG59KSgpfVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy90YWJsZS52dWVcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMFxuICoqLyIsIjx0ZW1wbGF0ZSBpZD1cInRhYmxlXCI+XHJcbiAgICA8dGFibGU+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQgdi1mb3I9XCJpdGVtIG9mIHRhYmxlRGF0YVwiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgPC90YWJsZT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIHRlbXBsYXRlOiAnI3RhYmxlJyxcclxuICAgICAgICBwcm9wczogW1widGFibGVEYXRhXCJdXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHRhYmxlLnZ1ZT84NjRkYzQyY1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48dGFibGU+XFxuICAgIDx0cj5cXG4gICAgICAgIDx0ZCB2LWZvcj1cXFwiaXRlbSBvZiB0YWJsZURhdGFcXFwiPlxcbiAgICAgICAgICAgIHt7aXRlbX19XFxuICAgICAgICA8L3RkPlxcbiAgICA8L3RyPlxcbjwvdGFibGU+XFxuXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLWh0bWwtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy90YWJsZS52dWVcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxMFxuICoqLyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZGF0ZXBpY2tlcjMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2RhdGVwaWNrZXIzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2RhdGVwaWNrZXIzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2J1bmRsZS9wbHVnaW5zL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcjMuY3NzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTBcbiAqKi8iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIVxcclxcbiAqIERhdGVwaWNrZXIgZm9yIEJvb3RzdHJhcFxcclxcbiAqXFxyXFxuICogQ29weXJpZ2h0IDIwMTIgU3RlZmFuIFBldHJlXFxyXFxuICogSW1wcm92ZW1lbnRzIGJ5IEFuZHJldyBSb3dsc1xcclxcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSB2Mi4wXFxyXFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxyXFxuICpcXHJcXG4gKi9cXHJcXG4uZGF0ZXBpY2tlciB7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBkaXJlY3Rpb246IGx0cjtcXHJcXG4gIC8qLmRvdyB7XFxyXFxuXFx0XFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcXHJcXG5cXHR9Ki9cXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItaW5saW5lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci5kYXRlcGlja2VyLXJ0bCB7XFxyXFxuICBkaXJlY3Rpb246IHJ0bDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIuZGF0ZXBpY2tlci1ydGwgdGFibGUgdHIgdGQgc3BhbiB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyLXRvcDogMDtcXHJcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd246YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci10b3A6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duLmRhdGVwaWNrZXItb3JpZW50LWxlZnQ6YmVmb3JlIHtcXHJcXG4gIGxlZnQ6IDZweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24uZGF0ZXBpY2tlci1vcmllbnQtbGVmdDphZnRlciB7XFxyXFxuICBsZWZ0OiA3cHg7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duLmRhdGVwaWNrZXItb3JpZW50LXJpZ2h0OmJlZm9yZSB7XFxyXFxuICByaWdodDogNnB4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci1kcm9wZG93bi5kYXRlcGlja2VyLW9yaWVudC1yaWdodDphZnRlciB7XFxyXFxuICByaWdodDogN3B4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci1kcm9wZG93bi5kYXRlcGlja2VyLW9yaWVudC10b3A6YmVmb3JlIHtcXHJcXG4gIHRvcDogLTdweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24uZGF0ZXBpY2tlci1vcmllbnQtdG9wOmFmdGVyIHtcXHJcXG4gIHRvcDogLTZweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24uZGF0ZXBpY2tlci1vcmllbnQtYm90dG9tOmJlZm9yZSB7XFxyXFxuICBib3R0b206IC03cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICM5OTk7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duLmRhdGVwaWNrZXItb3JpZW50LWJvdHRvbTphZnRlciB7XFxyXFxuICBib3R0b206IC02cHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAwO1xcclxcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLmRheXMgZGl2LmRhdGVwaWNrZXItZGF5cyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIubW9udGhzIGRpdi5kYXRlcGlja2VyLW1vbnRocyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIueWVhcnMgZGl2LmRhdGVwaWNrZXIteWVhcnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRoIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4udGFibGUtc3RyaXBlZCAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCxcXHJcXG4udGFibGUtc3RyaXBlZCAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0aCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuZGF5OmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmRheS5mb2N1c2VkIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQub2xkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLm5ldyB7XFxyXFxuICBjb2xvcjogIzc3NztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmYjczMztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXksXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICNmNTllMDA7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5W2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcltkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXksXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZCxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXlbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXI6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheVtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlcjpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheVtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5W2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXJbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICNmZmI3MzM7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5hY3RpdmU6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZjFhNDE3O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXksXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICNiZjgwMGM7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5W2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcltkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXksXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZCxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXlbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXI6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheVtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlcjpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheVtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5W2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXJbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICNmMWE0MTc7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNTU1NTU1O1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMzczNzM3O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZC5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZFtkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXJbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0sXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcltkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWRbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWRbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZFtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcjphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3Zlci5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWRbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjNTU1NTU1O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICMzNTdlYmQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzI4NWU4ZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZVtkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0sXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZC5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXI6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmVbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlcjpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZC5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmVbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlci5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZVtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XFxyXFxuICBib3JkZXItY29sb3I6ICMzNTdlYmQ7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMjMlO1xcclxcbiAgaGVpZ2h0OiA1NHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIG1hcmdpbjogMSU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjhiY2E7XFxyXFxuICBib3JkZXItY29sb3I6ICMzNTdlYmQ7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3NmIxO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjg1ZThlO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZC5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZVtkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXJbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0sXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmVbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmVbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcjphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlci5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZVtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzM1N2ViZDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5vbGQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5uZXcge1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRoLmRhdGVwaWNrZXItc3dpdGNoIHtcXHJcXG4gIHdpZHRoOiAxNDVweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGhlYWQgdHI6Zmlyc3QtY2hpbGQgdGgsXFxyXFxuLmRhdGVwaWNrZXIgdGZvb3QgdHIgdGgge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0Zm9vdCB0ciB0aDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIC5jdyB7XFxyXFxuICBmb250LXNpemU6IDEwcHg7XFxyXFxuICB3aWR0aDogMTJweDtcXHJcXG4gIHBhZGRpbmc6IDAgMnB4IDAgNXB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGhlYWQgdHI6Zmlyc3QtY2hpbGQgdGguY3cge1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5pbnB1dC1ncm91cC5kYXRlIC5pbnB1dC1ncm91cC1hZGRvbiBpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG4uaW5wdXQtZGF0ZXJhbmdlIGlucHV0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmlucHV0LWRhdGVyYW5nZSBpbnB1dDpmaXJzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXHJcXG59XFxyXFxuLmlucHV0LWRhdGVyYW5nZSBpbnB1dDpsYXN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcclxcbn1cXHJcXG4uaW5wdXQtZGF0ZXJhbmdlIC5pbnB1dC1ncm91cC1hZGRvbiB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDRweCA1cHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAjY2NjY2NjO1xcclxcbiAgYm9yZGVyLXdpZHRoOiAxcHggMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci5kcm9wZG93bi1tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgbWluLXdpZHRoOiAxNjBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICAqYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XFxyXFxuICAqYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIuZHJvcGRvd24tbWVudSB0aCxcXHJcXG4uZGF0ZXBpY2tlci5kcm9wZG93bi1tZW51IHRkIHtcXHJcXG4gIHBhZGRpbmc6IDRweCA1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIhLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2RhdGVwaWNrZXIzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTAgMTEgMTIgMTMgMTRcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcclxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcclxuXHRcdHZhciBtZW1vO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHR9O1xyXG5cdH0sXHJcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XHJcblx0fSksXHJcblx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuXHR9KSxcclxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcclxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XHJcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XHJcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcclxuXHR9XHJcblxyXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxyXG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cclxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xyXG5cclxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcclxuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYobmV3TGlzdCkge1xyXG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xyXG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcclxuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0aWYoZG9tU3R5bGUpIHtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0dmFyIHN0eWxlcyA9IFtdO1xyXG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG5cdFx0dmFyIGlkID0gaXRlbVswXTtcclxuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xyXG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXHJcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcclxuXHR9XHJcblx0cmV0dXJuIHN0eWxlcztcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xyXG5cdHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKTtcclxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcclxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xyXG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcclxuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcclxuXHRpZihpZHggPj0gMCkge1xyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XHJcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xyXG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XHJcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcclxuXHJcblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcclxuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xyXG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XHJcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XHJcblx0XHR9O1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR1cGRhdGUob2JqKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xyXG5cdFx0aWYobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmVtb3ZlKCk7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XHJcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XHJcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcclxuXHJcblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcclxuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xyXG5cclxuXHRpZihtZWRpYSkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxyXG5cdH1cclxuXHJcblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0aWYoc291cmNlTWFwKSB7XHJcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxyXG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdH1cclxuXHJcblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XHJcblxyXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcblx0aWYob2xkU3JjKVxyXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxMCAxMiAxMyAxNFxuICoqLyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBib290c3RyYXAtZGF0ZXBpY2tlci5qc1xyXG4gKiBSZXBvOiBodHRwczovL2dpdGh1Yi5jb20vZXRlcm5pY29kZS9ib290c3RyYXAtZGF0ZXBpY2tlci9cclxuICogRGVtbzogaHR0cDovL2V0ZXJuaWNvZGUuZ2l0aHViLmlvL2Jvb3RzdHJhcC1kYXRlcGlja2VyL1xyXG4gKiBEb2NzOiBodHRwOi8vYm9vdHN0cmFwLWRhdGVwaWNrZXIucmVhZHRoZWRvY3Mub3JnL1xyXG4gKiBGb3JrZWQgZnJvbSBodHRwOi8vd3d3LmV5ZWNvbi5yby9ib290c3RyYXAtZGF0ZXBpY2tlclxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogU3RhcnRlZCBieSBTdGVmYW4gUGV0cmU7IGltcHJvdmVtZW50cyBieSBBbmRyZXcgUm93bHMgKyBjb250cmlidXRvcnNcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4oZnVuY3Rpb24oJCwgdW5kZWZpbmVkKXtcclxuXHJcblx0dmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG5cdGZ1bmN0aW9uIFVUQ0RhdGUoKXtcclxuXHRcdHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShEYXRlLCBhcmd1bWVudHMpKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gVVRDVG9kYXkoKXtcclxuXHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblx0XHRyZXR1cm4gVVRDRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBhbGlhcyhtZXRob2Qpe1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiB0aGlzW21ldGhvZF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHR2YXIgRGF0ZUFycmF5ID0gKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgZXh0cmFzID0ge1xyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKGkpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNsaWNlKGkpWzBdO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb250YWluczogZnVuY3Rpb24oZCl7XHJcblx0XHRcdFx0Ly8gQXJyYXkuaW5kZXhPZiBpcyBub3QgY3Jvc3MtYnJvd3NlcjtcclxuXHRcdFx0XHQvLyAkLmluQXJyYXkgZG9lc24ndCB3b3JrIHdpdGggRGF0ZXNcclxuXHRcdFx0XHR2YXIgdmFsID0gZCAmJiBkLnZhbHVlT2YoKTtcclxuXHRcdFx0XHRmb3IgKHZhciBpPTAsIGw9dGhpcy5sZW5ndGg7IGkgPCBsOyBpKyspXHJcblx0XHRcdFx0XHRpZiAodGhpc1tpXS52YWx1ZU9mKCkgPT09IHZhbClcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGk7XHJcblx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZW1vdmU6IGZ1bmN0aW9uKGkpe1xyXG5cdFx0XHRcdHRoaXMuc3BsaWNlKGksMSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlcGxhY2U6IGZ1bmN0aW9uKG5ld19hcnJheSl7XHJcblx0XHRcdFx0aWYgKCFuZXdfYXJyYXkpXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0aWYgKCEkLmlzQXJyYXkobmV3X2FycmF5KSlcclxuXHRcdFx0XHRcdG5ld19hcnJheSA9IFtuZXdfYXJyYXldO1xyXG5cdFx0XHRcdHRoaXMuY2xlYXIoKTtcclxuXHRcdFx0XHR0aGlzLnB1c2guYXBwbHkodGhpcywgbmV3X2FycmF5KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xlYXI6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dGhpcy5zcGxpY2UoMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvcHk6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dmFyIGEgPSBuZXcgRGF0ZUFycmF5KCk7XHJcblx0XHRcdFx0YS5yZXBsYWNlKHRoaXMpO1xyXG5cdFx0XHRcdHJldHVybiBhO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgYSA9IFtdO1xyXG5cdFx0XHRhLnB1c2guYXBwbHkoYSwgYXJndW1lbnRzKTtcclxuXHRcdFx0JC5leHRlbmQoYSwgZXh0cmFzKTtcclxuXHRcdFx0cmV0dXJuIGE7XHJcblx0XHR9O1xyXG5cdH0pKCk7XHJcblxyXG5cclxuXHQvLyBQaWNrZXIgb2JqZWN0XHJcblxyXG5cdHZhciBEYXRlcGlja2VyID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucyl7XHJcblx0XHR0aGlzLmRhdGVzID0gbmV3IERhdGVBcnJheSgpO1xyXG5cdFx0dGhpcy52aWV3RGF0ZSA9IFVUQ1RvZGF5KCk7XHJcblx0XHR0aGlzLmZvY3VzRGF0ZSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcblx0XHR0aGlzLmlzSW5saW5lID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzSW5wdXQgPSB0aGlzLmVsZW1lbnQuaXMoJ2lucHV0Jyk7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMuZWxlbWVudC5pcygnLmRhdGUnKSA/IHRoaXMuZWxlbWVudC5maW5kKCcuYWRkLW9uLCAuaW5wdXQtZ3JvdXAtYWRkb24sIC5idG4nKSA6IGZhbHNlO1xyXG5cdFx0dGhpcy5oYXNJbnB1dCA9IHRoaXMuY29tcG9uZW50ICYmIHRoaXMuZWxlbWVudC5maW5kKCdpbnB1dCcpLmxlbmd0aDtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudCAmJiB0aGlzLmNvbXBvbmVudC5sZW5ndGggPT09IDApXHJcblx0XHRcdHRoaXMuY29tcG9uZW50ID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5waWNrZXIgPSAkKERQR2xvYmFsLnRlbXBsYXRlKTtcclxuXHRcdHRoaXMuX2J1aWxkRXZlbnRzKCk7XHJcblx0XHR0aGlzLl9hdHRhY2hFdmVudHMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5pc0lubGluZSl7XHJcblx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLWlubGluZScpLmFwcGVuZFRvKHRoaXMuZWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItZHJvcGRvd24gZHJvcGRvd24tbWVudScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLm8ucnRsKXtcclxuXHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItcnRsJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy52aWV3TW9kZSA9IHRoaXMuby5zdGFydFZpZXc7XHJcblxyXG5cdFx0aWYgKHRoaXMuby5jYWxlbmRhcldlZWtzKVxyXG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCd0Zm9vdCB0aC50b2RheScpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjb2xzcGFuJywgZnVuY3Rpb24oaSwgdmFsKXtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQodmFsKSArIDE7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuX2FsbG93X3VwZGF0ZSA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuc2V0U3RhcnREYXRlKHRoaXMuX28uc3RhcnREYXRlKTtcclxuXHRcdHRoaXMuc2V0RW5kRGF0ZSh0aGlzLl9vLmVuZERhdGUpO1xyXG5cdFx0dGhpcy5zZXREYXlzT2ZXZWVrRGlzYWJsZWQodGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZCk7XHJcblxyXG5cdFx0dGhpcy5maWxsRG93KCk7XHJcblx0XHR0aGlzLmZpbGxNb250aHMoKTtcclxuXHJcblx0XHR0aGlzLl9hbGxvd191cGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHR0aGlzLnNob3dNb2RlKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNJbmxpbmUpe1xyXG5cdFx0XHR0aGlzLnNob3coKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHREYXRlcGlja2VyLnByb3RvdHlwZSA9IHtcclxuXHRcdGNvbnN0cnVjdG9yOiBEYXRlcGlja2VyLFxyXG5cclxuXHRcdF9wcm9jZXNzX29wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpe1xyXG5cdFx0XHQvLyBTdG9yZSByYXcgb3B0aW9ucyBmb3IgcmVmZXJlbmNlXHJcblx0XHRcdHRoaXMuX28gPSAkLmV4dGVuZCh7fSwgdGhpcy5fbywgb3B0cyk7XHJcblx0XHRcdC8vIFByb2Nlc3NlZCBvcHRpb25zXHJcblx0XHRcdHZhciBvID0gdGhpcy5vID0gJC5leHRlbmQoe30sIHRoaXMuX28pO1xyXG5cclxuXHRcdFx0Ly8gQ2hlY2sgaWYgXCJkZS1ERVwiIHN0eWxlIGRhdGUgaXMgYXZhaWxhYmxlLCBpZiBub3QgbGFuZ3VhZ2Ugc2hvdWxkXHJcblx0XHRcdC8vIGZhbGxiYWNrIHRvIDIgbGV0dGVyIGNvZGUgZWcgXCJkZVwiXHJcblx0XHRcdHZhciBsYW5nID0gby5sYW5ndWFnZTtcclxuXHRcdFx0aWYgKCFkYXRlc1tsYW5nXSl7XHJcblx0XHRcdFx0bGFuZyA9IGxhbmcuc3BsaXQoJy0nKVswXTtcclxuXHRcdFx0XHRpZiAoIWRhdGVzW2xhbmddKVxyXG5cdFx0XHRcdFx0bGFuZyA9IGRlZmF1bHRzLmxhbmd1YWdlO1xyXG5cdFx0XHR9XHJcblx0XHRcdG8ubGFuZ3VhZ2UgPSBsYW5nO1xyXG5cclxuXHRcdFx0c3dpdGNoIChvLnN0YXJ0Vmlldyl7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdGNhc2UgJ2RlY2FkZSc6XHJcblx0XHRcdFx0XHRvLnN0YXJ0VmlldyA9IDI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0Y2FzZSAneWVhcic6XHJcblx0XHRcdFx0XHRvLnN0YXJ0VmlldyA9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0by5zdGFydFZpZXcgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2l0Y2ggKG8ubWluVmlld01vZGUpe1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRjYXNlICdtb250aHMnOlxyXG5cdFx0XHRcdFx0by5taW5WaWV3TW9kZSA9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0Y2FzZSAneWVhcnMnOlxyXG5cdFx0XHRcdFx0by5taW5WaWV3TW9kZSA9IDI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0by5taW5WaWV3TW9kZSA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG8uc3RhcnRWaWV3ID0gTWF0aC5tYXgoby5zdGFydFZpZXcsIG8ubWluVmlld01vZGUpO1xyXG5cclxuXHRcdFx0Ly8gdHJ1ZSwgZmFsc2UsIG9yIE51bWJlciA+IDBcclxuXHRcdFx0aWYgKG8ubXVsdGlkYXRlICE9PSB0cnVlKXtcclxuXHRcdFx0XHRvLm11bHRpZGF0ZSA9IE51bWJlcihvLm11bHRpZGF0ZSkgfHwgZmFsc2U7XHJcblx0XHRcdFx0aWYgKG8ubXVsdGlkYXRlICE9PSBmYWxzZSlcclxuXHRcdFx0XHRcdG8ubXVsdGlkYXRlID0gTWF0aC5tYXgoMCwgby5tdWx0aWRhdGUpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG8ubXVsdGlkYXRlID0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRvLm11bHRpZGF0ZVNlcGFyYXRvciA9IFN0cmluZyhvLm11bHRpZGF0ZVNlcGFyYXRvcik7XHJcblxyXG5cdFx0XHRvLndlZWtTdGFydCAlPSA3O1xyXG5cdFx0XHRvLndlZWtFbmQgPSAoKG8ud2Vla1N0YXJ0ICsgNikgJSA3KTtcclxuXHJcblx0XHRcdHZhciBmb3JtYXQgPSBEUEdsb2JhbC5wYXJzZUZvcm1hdChvLmZvcm1hdCk7XHJcblx0XHRcdGlmIChvLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5KXtcclxuXHRcdFx0XHRpZiAoISFvLnN0YXJ0RGF0ZSl7XHJcblx0XHRcdFx0XHRpZiAoby5zdGFydERhdGUgaW5zdGFuY2VvZiBEYXRlKVxyXG5cdFx0XHRcdFx0XHRvLnN0YXJ0RGF0ZSA9IHRoaXMuX2xvY2FsX3RvX3V0Yyh0aGlzLl96ZXJvX3RpbWUoby5zdGFydERhdGUpKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0by5zdGFydERhdGUgPSBEUEdsb2JhbC5wYXJzZURhdGUoby5zdGFydERhdGUsIGZvcm1hdCwgby5sYW5ndWFnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0by5zdGFydERhdGUgPSAtSW5maW5pdHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChvLmVuZERhdGUgIT09IEluZmluaXR5KXtcclxuXHRcdFx0XHRpZiAoISFvLmVuZERhdGUpe1xyXG5cdFx0XHRcdFx0aWYgKG8uZW5kRGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcblx0XHRcdFx0XHRcdG8uZW5kRGF0ZSA9IHRoaXMuX2xvY2FsX3RvX3V0Yyh0aGlzLl96ZXJvX3RpbWUoby5lbmREYXRlKSk7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdG8uZW5kRGF0ZSA9IERQR2xvYmFsLnBhcnNlRGF0ZShvLmVuZERhdGUsIGZvcm1hdCwgby5sYW5ndWFnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0by5lbmREYXRlID0gSW5maW5pdHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRvLmRheXNPZldlZWtEaXNhYmxlZCA9IG8uZGF5c09mV2Vla0Rpc2FibGVkfHxbXTtcclxuXHRcdFx0aWYgKCEkLmlzQXJyYXkoby5kYXlzT2ZXZWVrRGlzYWJsZWQpKVxyXG5cdFx0XHRcdG8uZGF5c09mV2Vla0Rpc2FibGVkID0gby5kYXlzT2ZXZWVrRGlzYWJsZWQuc3BsaXQoL1ssXFxzXSovKTtcclxuXHRcdFx0by5kYXlzT2ZXZWVrRGlzYWJsZWQgPSAkLm1hcChvLmRheXNPZldlZWtEaXNhYmxlZCwgZnVuY3Rpb24oZCl7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KGQsIDEwKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR2YXIgcGxjID0gU3RyaW5nKG8ub3JpZW50YXRpb24pLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvZyksXHJcblx0XHRcdFx0X3BsYyA9IG8ub3JpZW50YXRpb24udG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0cGxjID0gJC5ncmVwKHBsYywgZnVuY3Rpb24od29yZCl7XHJcblx0XHRcdFx0cmV0dXJuICgvXmF1dG98bGVmdHxyaWdodHx0b3B8Ym90dG9tJC8pLnRlc3Qod29yZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRvLm9yaWVudGF0aW9uID0ge3g6ICdhdXRvJywgeTogJ2F1dG8nfTtcclxuXHRcdFx0aWYgKCFfcGxjIHx8IF9wbGMgPT09ICdhdXRvJylcclxuXHRcdFx0XHQ7IC8vIG5vIGFjdGlvblxyXG5cdFx0XHRlbHNlIGlmIChwbGMubGVuZ3RoID09PSAxKXtcclxuXHRcdFx0XHRzd2l0Y2ggKHBsY1swXSl7XHJcblx0XHRcdFx0XHRjYXNlICd0b3AnOlxyXG5cdFx0XHRcdFx0Y2FzZSAnYm90dG9tJzpcclxuXHRcdFx0XHRcdFx0by5vcmllbnRhdGlvbi55ID0gcGxjWzBdO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxyXG5cdFx0XHRcdFx0XHRvLm9yaWVudGF0aW9uLnggPSBwbGNbMF07XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRfcGxjID0gJC5ncmVwKHBsYywgZnVuY3Rpb24od29yZCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gKC9ebGVmdHxyaWdodCQvKS50ZXN0KHdvcmQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdG8ub3JpZW50YXRpb24ueCA9IF9wbGNbMF0gfHwgJ2F1dG8nO1xyXG5cclxuXHRcdFx0XHRfcGxjID0gJC5ncmVwKHBsYywgZnVuY3Rpb24od29yZCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gKC9edG9wfGJvdHRvbSQvKS50ZXN0KHdvcmQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdG8ub3JpZW50YXRpb24ueSA9IF9wbGNbMF0gfHwgJ2F1dG8nO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0X2V2ZW50czogW10sXHJcblx0XHRfc2Vjb25kYXJ5RXZlbnRzOiBbXSxcclxuXHRcdF9hcHBseUV2ZW50czogZnVuY3Rpb24oZXZzKXtcclxuXHRcdFx0Zm9yICh2YXIgaT0wLCBlbCwgY2gsIGV2OyBpIDwgZXZzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRlbCA9IGV2c1tpXVswXTtcclxuXHRcdFx0XHRpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMil7XHJcblx0XHRcdFx0XHRjaCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdGV2ID0gZXZzW2ldWzFdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChldnNbaV0ubGVuZ3RoID09PSAzKXtcclxuXHRcdFx0XHRcdGNoID0gZXZzW2ldWzFdO1xyXG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMl07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsLm9uKGV2LCBjaCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRfdW5hcHBseUV2ZW50czogZnVuY3Rpb24oZXZzKXtcclxuXHRcdFx0Zm9yICh2YXIgaT0wLCBlbCwgZXYsIGNoOyBpIDwgZXZzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRlbCA9IGV2c1tpXVswXTtcclxuXHRcdFx0XHRpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMil7XHJcblx0XHRcdFx0XHRjaCA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdGV2ID0gZXZzW2ldWzFdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChldnNbaV0ubGVuZ3RoID09PSAzKXtcclxuXHRcdFx0XHRcdGNoID0gZXZzW2ldWzFdO1xyXG5cdFx0XHRcdFx0ZXYgPSBldnNbaV1bMl07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsLm9mZihldiwgY2gpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0X2J1aWxkRXZlbnRzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZiAodGhpcy5pc0lucHV0KXsgLy8gc2luZ2xlIGlucHV0XHJcblx0XHRcdFx0dGhpcy5fZXZlbnRzID0gW1xyXG5cdFx0XHRcdFx0W3RoaXMuZWxlbWVudCwge1xyXG5cdFx0XHRcdFx0XHRmb2N1czogJC5wcm94eSh0aGlzLnNob3csIHRoaXMpLFxyXG5cdFx0XHRcdFx0XHRrZXl1cDogJC5wcm94eShmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRcdFx0XHRpZiAoJC5pbkFycmF5KGUua2V5Q29kZSwgWzI3LDM3LDM5LDM4LDQwLDMyLDEzLDldKSA9PT0gLTEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0XHRcdFx0a2V5ZG93bjogJC5wcm94eSh0aGlzLmtleWRvd24sIHRoaXMpXHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdF07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb21wb25lbnQgJiYgdGhpcy5oYXNJbnB1dCl7IC8vIGNvbXBvbmVudDogaW5wdXQgKyBidXR0b25cclxuXHRcdFx0XHR0aGlzLl9ldmVudHMgPSBbXHJcblx0XHRcdFx0XHQvLyBGb3IgY29tcG9uZW50cyB0aGF0IGFyZSBub3QgcmVhZG9ubHksIGFsbG93IGtleWJvYXJkIG5hdlxyXG5cdFx0XHRcdFx0W3RoaXMuZWxlbWVudC5maW5kKCdpbnB1dCcpLCB7XHJcblx0XHRcdFx0XHRcdGZvY3VzOiAkLnByb3h5KHRoaXMuc2hvdywgdGhpcyksXHJcblx0XHRcdFx0XHRcdGtleXVwOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkLmluQXJyYXkoZS5rZXlDb2RlLCBbMjcsMzcsMzksMzgsNDAsMzIsMTMsOV0pID09PSAtMSlcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHRcdFx0XHRrZXlkb3duOiAkLnByb3h5KHRoaXMua2V5ZG93biwgdGhpcylcclxuXHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0W3RoaXMuY29tcG9uZW50LCB7XHJcblx0XHRcdFx0XHRcdGNsaWNrOiAkLnByb3h5KHRoaXMuc2hvdywgdGhpcylcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0XTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmVsZW1lbnQuaXMoJ2RpdicpKXsgIC8vIGlubGluZSBkYXRlcGlja2VyXHJcblx0XHRcdFx0dGhpcy5pc0lubGluZSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5fZXZlbnRzID0gW1xyXG5cdFx0XHRcdFx0W3RoaXMuZWxlbWVudCwge1xyXG5cdFx0XHRcdFx0XHRjbGljazogJC5wcm94eSh0aGlzLnNob3csIHRoaXMpXHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdF07XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fZXZlbnRzLnB1c2goXHJcblx0XHRcdFx0Ly8gQ29tcG9uZW50OiBsaXN0ZW4gZm9yIGJsdXIgb24gZWxlbWVudCBkZXNjZW5kYW50c1xyXG5cdFx0XHRcdFt0aGlzLmVsZW1lbnQsICcqJywge1xyXG5cdFx0XHRcdFx0Ymx1cjogJC5wcm94eShmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5fZm9jdXNlZF9mcm9tID0gZS50YXJnZXQ7XHJcblx0XHRcdFx0XHR9LCB0aGlzKVxyXG5cdFx0XHRcdH1dLFxyXG5cdFx0XHRcdC8vIElucHV0OiBsaXN0ZW4gZm9yIGJsdXIgb24gZWxlbWVudFxyXG5cdFx0XHRcdFt0aGlzLmVsZW1lbnQsIHtcclxuXHRcdFx0XHRcdGJsdXI6ICQucHJveHkoZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2ZvY3VzZWRfZnJvbSA9IGUudGFyZ2V0O1xyXG5cdFx0XHRcdFx0fSwgdGhpcylcclxuXHRcdFx0XHR9XVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0dGhpcy5fc2Vjb25kYXJ5RXZlbnRzID0gW1xyXG5cdFx0XHRcdFt0aGlzLnBpY2tlciwge1xyXG5cdFx0XHRcdFx0Y2xpY2s6ICQucHJveHkodGhpcy5jbGljaywgdGhpcylcclxuXHRcdFx0XHR9XSxcclxuXHRcdFx0XHRbJCh3aW5kb3cpLCB7XHJcblx0XHRcdFx0XHRyZXNpemU6ICQucHJveHkodGhpcy5wbGFjZSwgdGhpcylcclxuXHRcdFx0XHR9XSxcclxuXHRcdFx0XHRbJChkb2N1bWVudCksIHtcclxuXHRcdFx0XHRcdCdtb3VzZWRvd24gdG91Y2hzdGFydCc6ICQucHJveHkoZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRcdC8vIENsaWNrZWQgb3V0c2lkZSB0aGUgZGF0ZXBpY2tlciwgaGlkZSBpdFxyXG5cdFx0XHRcdFx0XHRpZiAoIShcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmVsZW1lbnQuaXMoZS50YXJnZXQpIHx8XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoZS50YXJnZXQpLmxlbmd0aCB8fFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmlzKGUudGFyZ2V0KSB8fFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoZS50YXJnZXQpLmxlbmd0aFxyXG5cdFx0XHRcdFx0XHQpKXtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSwgdGhpcylcclxuXHRcdFx0XHR9XVxyXG5cdFx0XHRdO1xyXG5cdFx0fSxcclxuXHRcdF9hdHRhY2hFdmVudHM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9ldmVudHMpO1xyXG5cdFx0fSxcclxuXHRcdF9kZXRhY2hFdmVudHM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRoaXMuX3VuYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKTtcclxuXHRcdH0sXHJcblx0XHRfYXR0YWNoU2Vjb25kYXJ5RXZlbnRzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5fYXBwbHlFdmVudHModGhpcy5fc2Vjb25kYXJ5RXZlbnRzKTtcclxuXHRcdH0sXHJcblx0XHRfZGV0YWNoU2Vjb25kYXJ5RXZlbnRzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLl91bmFwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0X3RyaWdnZXI6IGZ1bmN0aW9uKGV2ZW50LCBhbHRkYXRlKXtcclxuXHRcdFx0dmFyIGRhdGUgPSBhbHRkYXRlIHx8IHRoaXMuZGF0ZXMuZ2V0KC0xKSxcclxuXHRcdFx0XHRsb2NhbF9kYXRlID0gdGhpcy5fdXRjX3RvX2xvY2FsKGRhdGUpO1xyXG5cclxuXHRcdFx0dGhpcy5lbGVtZW50LnRyaWdnZXIoe1xyXG5cdFx0XHRcdHR5cGU6IGV2ZW50LFxyXG5cdFx0XHRcdGRhdGU6IGxvY2FsX2RhdGUsXHJcblx0XHRcdFx0ZGF0ZXM6ICQubWFwKHRoaXMuZGF0ZXMsIHRoaXMuX3V0Y190b19sb2NhbCksXHJcblx0XHRcdFx0Zm9ybWF0OiAkLnByb3h5KGZ1bmN0aW9uKGl4LCBmb3JtYXQpe1xyXG5cdFx0XHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApe1xyXG5cdFx0XHRcdFx0XHRpeCA9IHRoaXMuZGF0ZXMubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHRcdFx0Zm9ybWF0ID0gdGhpcy5vLmZvcm1hdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBpeCA9PT0gJ3N0cmluZycpe1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQgPSBpeDtcclxuXHRcdFx0XHRcdFx0aXggPSB0aGlzLmRhdGVzLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmb3JtYXQgPSBmb3JtYXQgfHwgdGhpcy5vLmZvcm1hdDtcclxuXHRcdFx0XHRcdHZhciBkYXRlID0gdGhpcy5kYXRlcy5nZXQoaXgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIERQR2xvYmFsLmZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCB0aGlzLm8ubGFuZ3VhZ2UpO1xyXG5cdFx0XHRcdH0sIHRoaXMpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzaG93OiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNJbmxpbmUpXHJcblx0XHRcdFx0dGhpcy5waWNrZXIuYXBwZW5kVG8oJ2JvZHknKTtcclxuXHRcdFx0dGhpcy5waWNrZXIuc2hvdygpO1xyXG5cdFx0XHR0aGlzLnBsYWNlKCk7XHJcblx0XHRcdHRoaXMuX2F0dGFjaFNlY29uZGFyeUV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLl90cmlnZ2VyKCdzaG93Jyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGhpZGU6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmICh0aGlzLmlzSW5saW5lKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0aWYgKCF0aGlzLnBpY2tlci5pcygnOnZpc2libGUnKSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcclxuXHRcdFx0dGhpcy5waWNrZXIuaGlkZSgpLmRldGFjaCgpO1xyXG5cdFx0XHR0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKTtcclxuXHRcdFx0dGhpcy52aWV3TW9kZSA9IHRoaXMuby5zdGFydFZpZXc7XHJcblx0XHRcdHRoaXMuc2hvd01vZGUoKTtcclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLm8uZm9yY2VQYXJzZSAmJlxyXG5cdFx0XHRcdChcclxuXHRcdFx0XHRcdHRoaXMuaXNJbnB1dCAmJiB0aGlzLmVsZW1lbnQudmFsKCkgfHxcclxuXHRcdFx0XHRcdHRoaXMuaGFzSW5wdXQgJiYgdGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0JykudmFsKClcclxuXHRcdFx0XHQpXHJcblx0XHRcdClcclxuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ2hpZGUnKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdFx0dGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMuX2RldGFjaFNlY29uZGFyeUV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLnBpY2tlci5yZW1vdmUoKTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZXBpY2tlcjtcclxuXHRcdFx0aWYgKCF0aGlzLmlzSW5wdXQpe1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0X3V0Y190b19sb2NhbDogZnVuY3Rpb24odXRjKXtcclxuXHRcdFx0cmV0dXJuIHV0YyAmJiBuZXcgRGF0ZSh1dGMuZ2V0VGltZSgpICsgKHV0Yy5nZXRUaW1lem9uZU9mZnNldCgpKjYwMDAwKSk7XHJcblx0XHR9LFxyXG5cdFx0X2xvY2FsX3RvX3V0YzogZnVuY3Rpb24obG9jYWwpe1xyXG5cdFx0XHRyZXR1cm4gbG9jYWwgJiYgbmV3IERhdGUobG9jYWwuZ2V0VGltZSgpIC0gKGxvY2FsLmdldFRpbWV6b25lT2Zmc2V0KCkqNjAwMDApKTtcclxuXHRcdH0sXHJcblx0XHRfemVyb190aW1lOiBmdW5jdGlvbihsb2NhbCl7XHJcblx0XHRcdHJldHVybiBsb2NhbCAmJiBuZXcgRGF0ZShsb2NhbC5nZXRGdWxsWWVhcigpLCBsb2NhbC5nZXRNb250aCgpLCBsb2NhbC5nZXREYXRlKCkpO1xyXG5cdFx0fSxcclxuXHRcdF96ZXJvX3V0Y190aW1lOiBmdW5jdGlvbih1dGMpe1xyXG5cdFx0XHRyZXR1cm4gdXRjICYmIG5ldyBEYXRlKERhdGUuVVRDKHV0Yy5nZXRVVENGdWxsWWVhcigpLCB1dGMuZ2V0VVRDTW9udGgoKSwgdXRjLmdldFVUQ0RhdGUoKSkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXREYXRlczogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuICQubWFwKHRoaXMuZGF0ZXMsIHRoaXMuX3V0Y190b19sb2NhbCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldFVUQ0RhdGVzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5kYXRlcywgZnVuY3Rpb24oZCl7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0RGF0ZTogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3V0Y190b19sb2NhbCh0aGlzLmdldFVUQ0RhdGUoKSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldFVUQ0RhdGU6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiBuZXcgRGF0ZSh0aGlzLmRhdGVzLmdldCgtMSkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRlczogZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGFyZ3MgPSAkLmlzQXJyYXkoYXJndW1lbnRzWzBdKSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cztcclxuXHRcdFx0dGhpcy51cGRhdGUuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcclxuXHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRVVENEYXRlczogZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGFyZ3MgPSAkLmlzQXJyYXkoYXJndW1lbnRzWzBdKSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cztcclxuXHRcdFx0dGhpcy51cGRhdGUuYXBwbHkodGhpcywgJC5tYXAoYXJncywgdGhpcy5fdXRjX3RvX2xvY2FsKSk7XHJcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcclxuXHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRlOiBhbGlhcygnc2V0RGF0ZXMnKSxcclxuXHRcdHNldFVUQ0RhdGU6IGFsaWFzKCdzZXRVVENEYXRlcycpLFxyXG5cclxuXHRcdHNldFZhbHVlOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgZm9ybWF0dGVkID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKCk7XHJcblx0XHRcdGlmICghdGhpcy5pc0lucHV0KXtcclxuXHRcdFx0XHRpZiAodGhpcy5jb21wb25lbnQpe1xyXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0JykudmFsKGZvcm1hdHRlZCkuY2hhbmdlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudC52YWwoZm9ybWF0dGVkKS5jaGFuZ2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRGb3JtYXR0ZWREYXRlOiBmdW5jdGlvbihmb3JtYXQpe1xyXG5cdFx0XHRpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0Zm9ybWF0ID0gdGhpcy5vLmZvcm1hdDtcclxuXHJcblx0XHRcdHZhciBsYW5nID0gdGhpcy5vLmxhbmd1YWdlO1xyXG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5kYXRlcywgZnVuY3Rpb24oZCl7XHJcblx0XHRcdFx0cmV0dXJuIERQR2xvYmFsLmZvcm1hdERhdGUoZCwgZm9ybWF0LCBsYW5nKTtcclxuXHRcdFx0fSkuam9pbih0aGlzLm8ubXVsdGlkYXRlU2VwYXJhdG9yKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0U3RhcnREYXRlOiBmdW5jdGlvbihzdGFydERhdGUpe1xyXG5cdFx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMoe3N0YXJ0RGF0ZTogc3RhcnREYXRlfSk7XHJcblx0XHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHRcdHRoaXMudXBkYXRlTmF2QXJyb3dzKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldEVuZERhdGU6IGZ1bmN0aW9uKGVuZERhdGUpe1xyXG5cdFx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2VuZERhdGU6IGVuZERhdGV9KTtcclxuXHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdFx0dGhpcy51cGRhdGVOYXZBcnJvd3MoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF5c09mV2Vla0Rpc2FibGVkOiBmdW5jdGlvbihkYXlzT2ZXZWVrRGlzYWJsZWQpe1xyXG5cdFx0XHR0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RheXNPZldlZWtEaXNhYmxlZDogZGF5c09mV2Vla0Rpc2FibGVkfSk7XHJcblx0XHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHRcdHRoaXMudXBkYXRlTmF2QXJyb3dzKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHBsYWNlOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZiAodGhpcy5pc0lubGluZSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHZhciBjYWxlbmRhcldpZHRoID0gdGhpcy5waWNrZXIub3V0ZXJXaWR0aCgpLFxyXG5cdFx0XHRcdGNhbGVuZGFySGVpZ2h0ID0gdGhpcy5waWNrZXIub3V0ZXJIZWlnaHQoKSxcclxuXHRcdFx0XHR2aXN1YWxQYWRkaW5nID0gMTAsXHJcblx0XHRcdFx0d2luZG93V2lkdGggPSAkd2luZG93LndpZHRoKCksXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKSxcclxuXHRcdFx0XHRzY3JvbGxUb3AgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdFx0dmFyIHpJbmRleCA9IHBhcnNlSW50KHRoaXMuZWxlbWVudC5wYXJlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5jc3MoJ3otaW5kZXgnKSAhPT0gJ2F1dG8nO1xyXG5cdFx0XHRcdH0pLmZpcnN0KCkuY3NzKCd6LWluZGV4JykpKzEwO1xyXG5cdFx0XHR2YXIgb2Zmc2V0ID0gdGhpcy5jb21wb25lbnQgPyB0aGlzLmNvbXBvbmVudC5wYXJlbnQoKS5vZmZzZXQoKSA6IHRoaXMuZWxlbWVudC5vZmZzZXQoKTtcclxuXHRcdFx0dmFyIGhlaWdodCA9IHRoaXMuY29tcG9uZW50ID8gdGhpcy5jb21wb25lbnQub3V0ZXJIZWlnaHQodHJ1ZSkgOiB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoZmFsc2UpO1xyXG5cdFx0XHR2YXIgd2lkdGggPSB0aGlzLmNvbXBvbmVudCA/IHRoaXMuY29tcG9uZW50Lm91dGVyV2lkdGgodHJ1ZSkgOiB0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aChmYWxzZSk7XHJcblx0XHRcdHZhciBsZWZ0ID0gb2Zmc2V0LmxlZnQsXHJcblx0XHRcdFx0dG9wID0gb2Zmc2V0LnRvcDtcclxuXHJcblx0XHRcdHRoaXMucGlja2VyLnJlbW92ZUNsYXNzKFxyXG5cdFx0XHRcdCdkYXRlcGlja2VyLW9yaWVudC10b3AgZGF0ZXBpY2tlci1vcmllbnQtYm90dG9tICcrXHJcblx0XHRcdFx0J2RhdGVwaWNrZXItb3JpZW50LXJpZ2h0IGRhdGVwaWNrZXItb3JpZW50LWxlZnQnXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5vLm9yaWVudGF0aW9uLnggIT09ICdhdXRvJyl7XHJcblx0XHRcdFx0dGhpcy5waWNrZXIuYWRkQ2xhc3MoJ2RhdGVwaWNrZXItb3JpZW50LScgKyB0aGlzLm8ub3JpZW50YXRpb24ueCk7XHJcblx0XHRcdFx0aWYgKHRoaXMuby5vcmllbnRhdGlvbi54ID09PSAncmlnaHQnKVxyXG5cdFx0XHRcdFx0bGVmdCAtPSBjYWxlbmRhcldpZHRoIC0gd2lkdGg7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gYXV0byB4IG9yaWVudGF0aW9uIGlzIGJlc3QtcGxhY2VtZW50OiBpZiBpdCBjcm9zc2VzIGEgd2luZG93XHJcblx0XHRcdC8vIGVkZ2UsIGZ1ZGdlIGl0IHNpZGV3YXlzXHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdC8vIERlZmF1bHQgdG8gbGVmdFxyXG5cdFx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC1sZWZ0Jyk7XHJcblx0XHRcdFx0aWYgKG9mZnNldC5sZWZ0IDwgMClcclxuXHRcdFx0XHRcdGxlZnQgLT0gb2Zmc2V0LmxlZnQgLSB2aXN1YWxQYWRkaW5nO1xyXG5cdFx0XHRcdGVsc2UgaWYgKG9mZnNldC5sZWZ0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvd1dpZHRoKVxyXG5cdFx0XHRcdFx0bGVmdCA9IHdpbmRvd1dpZHRoIC0gY2FsZW5kYXJXaWR0aCAtIHZpc3VhbFBhZGRpbmc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGF1dG8geSBvcmllbnRhdGlvbiBpcyBiZXN0LXNpdHVhdGlvbjogdG9wIG9yIGJvdHRvbSwgbm8gZnVkZ2luZyxcclxuXHRcdFx0Ly8gZGVjaXNpb24gYmFzZWQgb24gd2hpY2ggc2hvd3MgbW9yZSBvZiB0aGUgY2FsZW5kYXJcclxuXHRcdFx0dmFyIHlvcmllbnQgPSB0aGlzLm8ub3JpZW50YXRpb24ueSxcclxuXHRcdFx0XHR0b3Bfb3ZlcmZsb3csIGJvdHRvbV9vdmVyZmxvdztcclxuXHRcdFx0aWYgKHlvcmllbnQgPT09ICdhdXRvJyl7XHJcblx0XHRcdFx0dG9wX292ZXJmbG93ID0gLXNjcm9sbFRvcCArIG9mZnNldC50b3AgLSBjYWxlbmRhckhlaWdodDtcclxuXHRcdFx0XHRib3R0b21fb3ZlcmZsb3cgPSBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQgLSAob2Zmc2V0LnRvcCArIGhlaWdodCArIGNhbGVuZGFySGVpZ2h0KTtcclxuXHRcdFx0XHRpZiAoTWF0aC5tYXgodG9wX292ZXJmbG93LCBib3R0b21fb3ZlcmZsb3cpID09PSBib3R0b21fb3ZlcmZsb3cpXHJcblx0XHRcdFx0XHR5b3JpZW50ID0gJ3RvcCc7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0eW9yaWVudCA9ICdib3R0b20nO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC0nICsgeW9yaWVudCk7XHJcblx0XHRcdGlmICh5b3JpZW50ID09PSAndG9wJylcclxuXHRcdFx0XHR0b3AgKz0gaGVpZ2h0O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dG9wIC09IGNhbGVuZGFySGVpZ2h0ICsgcGFyc2VJbnQodGhpcy5waWNrZXIuY3NzKCdwYWRkaW5nLXRvcCcpKTtcclxuXHJcblx0XHRcdHRoaXMucGlja2VyLmNzcyh7XHJcblx0XHRcdFx0dG9wOiB0b3AsXHJcblx0XHRcdFx0bGVmdDogbGVmdCxcclxuXHRcdFx0XHR6SW5kZXg6IHpJbmRleFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X2FsbG93X3VwZGF0ZTogdHJ1ZSxcclxuXHRcdHVwZGF0ZTogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYgKCF0aGlzLl9hbGxvd191cGRhdGUpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0dmFyIG9sZERhdGVzID0gdGhpcy5kYXRlcy5jb3B5KCksXHJcblx0XHRcdFx0ZGF0ZXMgPSBbXSxcclxuXHRcdFx0XHRmcm9tQXJncyA9IGZhbHNlO1xyXG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCl7XHJcblx0XHRcdFx0JC5lYWNoKGFyZ3VtZW50cywgJC5wcm94eShmdW5jdGlvbihpLCBkYXRlKXtcclxuXHRcdFx0XHRcdGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcclxuXHRcdFx0XHRcdFx0ZGF0ZSA9IHRoaXMuX2xvY2FsX3RvX3V0YyhkYXRlKTtcclxuXHRcdFx0XHRcdGRhdGVzLnB1c2goZGF0ZSk7XHJcblx0XHRcdFx0fSwgdGhpcykpO1xyXG5cdFx0XHRcdGZyb21BcmdzID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRkYXRlcyA9IHRoaXMuaXNJbnB1dFxyXG5cdFx0XHRcdFx0XHQ/IHRoaXMuZWxlbWVudC52YWwoKVxyXG5cdFx0XHRcdFx0XHQ6IHRoaXMuZWxlbWVudC5kYXRhKCdkYXRlJykgfHwgdGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0JykudmFsKCk7XHJcblx0XHRcdFx0aWYgKGRhdGVzICYmIHRoaXMuby5tdWx0aWRhdGUpXHJcblx0XHRcdFx0XHRkYXRlcyA9IGRhdGVzLnNwbGl0KHRoaXMuby5tdWx0aWRhdGVTZXBhcmF0b3IpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGRhdGVzID0gW2RhdGVzXTtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkYXRlcyA9ICQubWFwKGRhdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGRhdGUpe1xyXG5cdFx0XHRcdHJldHVybiBEUEdsb2JhbC5wYXJzZURhdGUoZGF0ZSwgdGhpcy5vLmZvcm1hdCwgdGhpcy5vLmxhbmd1YWdlKTtcclxuXHRcdFx0fSwgdGhpcykpO1xyXG5cdFx0XHRkYXRlcyA9ICQuZ3JlcChkYXRlcywgJC5wcm94eShmdW5jdGlvbihkYXRlKXtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0ZGF0ZSA8IHRoaXMuby5zdGFydERhdGUgfHxcclxuXHRcdFx0XHRcdGRhdGUgPiB0aGlzLm8uZW5kRGF0ZSB8fFxyXG5cdFx0XHRcdFx0IWRhdGVcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LCB0aGlzKSwgdHJ1ZSk7XHJcblx0XHRcdHRoaXMuZGF0ZXMucmVwbGFjZShkYXRlcyk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5kYXRlcy5sZW5ndGgpXHJcblx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZXMuZ2V0KC0xKSk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMudmlld0RhdGUgPCB0aGlzLm8uc3RhcnREYXRlKVxyXG5cdFx0XHRcdHRoaXMudmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLm8uc3RhcnREYXRlKTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy52aWV3RGF0ZSA+IHRoaXMuby5lbmREYXRlKVxyXG5cdFx0XHRcdHRoaXMudmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLm8uZW5kRGF0ZSk7XHJcblxyXG5cdFx0XHRpZiAoZnJvbUFyZ3Mpe1xyXG5cdFx0XHRcdC8vIHNldHRpbmcgZGF0ZSBieSBjbGlja2luZ1xyXG5cdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChkYXRlcy5sZW5ndGgpe1xyXG5cdFx0XHRcdC8vIHNldHRpbmcgZGF0ZSBieSB0eXBpbmdcclxuXHRcdFx0XHRpZiAoU3RyaW5nKG9sZERhdGVzKSAhPT0gU3RyaW5nKHRoaXMuZGF0ZXMpKVxyXG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghdGhpcy5kYXRlcy5sZW5ndGggJiYgb2xkRGF0ZXMubGVuZ3RoKVxyXG5cdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NsZWFyRGF0ZScpO1xyXG5cclxuXHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbGxEb3c6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBkb3dDbnQgPSB0aGlzLm8ud2Vla1N0YXJ0LFxyXG5cdFx0XHRcdGh0bWwgPSAnPHRyPic7XHJcblx0XHRcdGlmICh0aGlzLm8uY2FsZW5kYXJXZWVrcyl7XHJcblx0XHRcdFx0dmFyIGNlbGwgPSAnPHRoIGNsYXNzPVwiY3dcIj4mbmJzcDs8L3RoPic7XHJcblx0XHRcdFx0aHRtbCArPSBjZWxsO1xyXG5cdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLWRheXMgdGhlYWQgdHI6Zmlyc3QtY2hpbGQnKS5wcmVwZW5kKGNlbGwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHdoaWxlIChkb3dDbnQgPCB0aGlzLm8ud2Vla1N0YXJ0ICsgNyl7XHJcblx0XHRcdFx0aHRtbCArPSAnPHRoIGNsYXNzPVwiZG93XCI+JytkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLmRheXNNaW5bKGRvd0NudCsrKSU3XSsnPC90aD4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGh0bWwgKz0gJzwvdHI+JztcclxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItZGF5cyB0aGVhZCcpLmFwcGVuZChodG1sKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZmlsbE1vbnRoczogZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGh0bWwgPSAnJyxcclxuXHRcdFx0aSA9IDA7XHJcblx0XHRcdHdoaWxlIChpIDwgMTIpe1xyXG5cdFx0XHRcdGh0bWwgKz0gJzxzcGFuIGNsYXNzPVwibW9udGhcIj4nK2RhdGVzW3RoaXMuby5sYW5ndWFnZV0ubW9udGhzU2hvcnRbaSsrXSsnPC9zcGFuPic7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItbW9udGhzIHRkJykuaHRtbChodG1sKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0UmFuZ2U6IGZ1bmN0aW9uKHJhbmdlKXtcclxuXHRcdFx0aWYgKCFyYW5nZSB8fCAhcmFuZ2UubGVuZ3RoKVxyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnJhbmdlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5yYW5nZSA9ICQubWFwKHJhbmdlLCBmdW5jdGlvbihkKXtcclxuXHRcdFx0XHRcdHJldHVybiBkLnZhbHVlT2YoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldENsYXNzTmFtZXM6IGZ1bmN0aW9uKGRhdGUpe1xyXG5cdFx0XHR2YXIgY2xzID0gW10sXHJcblx0XHRcdFx0eWVhciA9IHRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSxcclxuXHRcdFx0XHRtb250aCA9IHRoaXMudmlld0RhdGUuZ2V0VVRDTW9udGgoKSxcclxuXHRcdFx0XHR0b2RheSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdGlmIChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPCB5ZWFyIHx8IChkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPT09IHllYXIgJiYgZGF0ZS5nZXRVVENNb250aCgpIDwgbW9udGgpKXtcclxuXHRcdFx0XHRjbHMucHVzaCgnb2xkJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZGF0ZS5nZXRVVENGdWxsWWVhcigpID4geWVhciB8fCAoZGF0ZS5nZXRVVENGdWxsWWVhcigpID09PSB5ZWFyICYmIGRhdGUuZ2V0VVRDTW9udGgoKSA+IG1vbnRoKSl7XHJcblx0XHRcdFx0Y2xzLnB1c2goJ25ldycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmZvY3VzRGF0ZSAmJiBkYXRlLnZhbHVlT2YoKSA9PT0gdGhpcy5mb2N1c0RhdGUudmFsdWVPZigpKVxyXG5cdFx0XHRcdGNscy5wdXNoKCdmb2N1c2VkJyk7XHJcblx0XHRcdC8vIENvbXBhcmUgaW50ZXJuYWwgVVRDIGRhdGUgd2l0aCBsb2NhbCB0b2RheSwgbm90IFVUQyB0b2RheVxyXG5cdFx0XHRpZiAodGhpcy5vLnRvZGF5SGlnaGxpZ2h0ICYmXHJcblx0XHRcdFx0ZGF0ZS5nZXRVVENGdWxsWWVhcigpID09PSB0b2RheS5nZXRGdWxsWWVhcigpICYmXHJcblx0XHRcdFx0ZGF0ZS5nZXRVVENNb250aCgpID09PSB0b2RheS5nZXRNb250aCgpICYmXHJcblx0XHRcdFx0ZGF0ZS5nZXRVVENEYXRlKCkgPT09IHRvZGF5LmdldERhdGUoKSl7XHJcblx0XHRcdFx0Y2xzLnB1c2goJ3RvZGF5Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMuZGF0ZXMuY29udGFpbnMoZGF0ZSkgIT09IC0xKVxyXG5cdFx0XHRcdGNscy5wdXNoKCdhY3RpdmUnKTtcclxuXHRcdFx0aWYgKGRhdGUudmFsdWVPZigpIDwgdGhpcy5vLnN0YXJ0RGF0ZSB8fCBkYXRlLnZhbHVlT2YoKSA+IHRoaXMuby5lbmREYXRlIHx8XHJcblx0XHRcdFx0JC5pbkFycmF5KGRhdGUuZ2V0VVRDRGF5KCksIHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpICE9PSAtMSl7XHJcblx0XHRcdFx0Y2xzLnB1c2goJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMucmFuZ2Upe1xyXG5cdFx0XHRcdGlmIChkYXRlID4gdGhpcy5yYW5nZVswXSAmJiBkYXRlIDwgdGhpcy5yYW5nZVt0aGlzLnJhbmdlLmxlbmd0aC0xXSl7XHJcblx0XHRcdFx0XHRjbHMucHVzaCgncmFuZ2UnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCQuaW5BcnJheShkYXRlLnZhbHVlT2YoKSwgdGhpcy5yYW5nZSkgIT09IC0xKXtcclxuXHRcdFx0XHRcdGNscy5wdXNoKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY2xzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRmaWxsOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgZCA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUpLFxyXG5cdFx0XHRcdHllYXIgPSBkLmdldFVUQ0Z1bGxZZWFyKCksXHJcblx0XHRcdFx0bW9udGggPSBkLmdldFVUQ01vbnRoKCksXHJcblx0XHRcdFx0c3RhcnRZZWFyID0gdGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ID8gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpIDogLUluZmluaXR5LFxyXG5cdFx0XHRcdHN0YXJ0TW9udGggPSB0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgPyB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCkgOiAtSW5maW5pdHksXHJcblx0XHRcdFx0ZW5kWWVhciA9IHRoaXMuby5lbmREYXRlICE9PSBJbmZpbml0eSA/IHRoaXMuby5lbmREYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiBJbmZpbml0eSxcclxuXHRcdFx0XHRlbmRNb250aCA9IHRoaXMuby5lbmREYXRlICE9PSBJbmZpbml0eSA/IHRoaXMuby5lbmREYXRlLmdldFVUQ01vbnRoKCkgOiBJbmZpbml0eSxcclxuXHRcdFx0XHR0b2RheXR4dCA9IGRhdGVzW3RoaXMuby5sYW5ndWFnZV0udG9kYXkgfHwgZGF0ZXNbJ2VuJ10udG9kYXkgfHwgJycsXHJcblx0XHRcdFx0Y2xlYXJ0eHQgPSBkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLmNsZWFyIHx8IGRhdGVzWydlbiddLmNsZWFyIHx8ICcnLFxyXG5cdFx0XHRcdHRvb2x0aXA7XHJcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLWRheXMgdGhlYWQgdGguZGF0ZXBpY2tlci1zd2l0Y2gnKVxyXG5cdFx0XHRcdFx0XHQudGV4dChkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1ttb250aF0rJyAnK3llYXIpO1xyXG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCd0Zm9vdCB0aC50b2RheScpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRvZGF5dHh0KVxyXG5cdFx0XHRcdFx0XHQudG9nZ2xlKHRoaXMuby50b2RheUJ0biAhPT0gZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCd0Zm9vdCB0aC5jbGVhcicpXHJcblx0XHRcdFx0XHRcdC50ZXh0KGNsZWFydHh0KVxyXG5cdFx0XHRcdFx0XHQudG9nZ2xlKHRoaXMuby5jbGVhckJ0biAhPT0gZmFsc2UpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU5hdkFycm93cygpO1xyXG5cdFx0XHR0aGlzLmZpbGxNb250aHMoKTtcclxuXHRcdFx0dmFyIHByZXZNb250aCA9IFVUQ0RhdGUoeWVhciwgbW9udGgtMSwgMjgpLFxyXG5cdFx0XHRcdGRheSA9IERQR2xvYmFsLmdldERheXNJbk1vbnRoKHByZXZNb250aC5nZXRVVENGdWxsWWVhcigpLCBwcmV2TW9udGguZ2V0VVRDTW9udGgoKSk7XHJcblx0XHRcdHByZXZNb250aC5zZXRVVENEYXRlKGRheSk7XHJcblx0XHRcdHByZXZNb250aC5zZXRVVENEYXRlKGRheSAtIChwcmV2TW9udGguZ2V0VVRDRGF5KCkgLSB0aGlzLm8ud2Vla1N0YXJ0ICsgNyklNyk7XHJcblx0XHRcdHZhciBuZXh0TW9udGggPSBuZXcgRGF0ZShwcmV2TW9udGgpO1xyXG5cdFx0XHRuZXh0TW9udGguc2V0VVRDRGF0ZShuZXh0TW9udGguZ2V0VVRDRGF0ZSgpICsgNDIpO1xyXG5cdFx0XHRuZXh0TW9udGggPSBuZXh0TW9udGgudmFsdWVPZigpO1xyXG5cdFx0XHR2YXIgaHRtbCA9IFtdO1xyXG5cdFx0XHR2YXIgY2xzTmFtZTtcclxuXHRcdFx0d2hpbGUgKHByZXZNb250aC52YWx1ZU9mKCkgPCBuZXh0TW9udGgpe1xyXG5cdFx0XHRcdGlmIChwcmV2TW9udGguZ2V0VVRDRGF5KCkgPT09IHRoaXMuby53ZWVrU3RhcnQpe1xyXG5cdFx0XHRcdFx0aHRtbC5wdXNoKCc8dHI+Jyk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5vLmNhbGVuZGFyV2Vla3Mpe1xyXG5cdFx0XHRcdFx0XHQvLyBJU08gODYwMTogRmlyc3Qgd2VlayBjb250YWlucyBmaXJzdCB0aHVyc2RheS5cclxuXHRcdFx0XHRcdFx0Ly8gSVNPIGFsc28gc3RhdGVzIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgYnV0IHdlIGNhbiBiZSBtb3JlIGFic3RyYWN0IGhlcmUuXHJcblx0XHRcdFx0XHRcdHZhclxyXG5cdFx0XHRcdFx0XHRcdC8vIFN0YXJ0IG9mIGN1cnJlbnQgd2VlazogYmFzZWQgb24gd2Vla3N0YXJ0L2N1cnJlbnQgZGF0ZVxyXG5cdFx0XHRcdFx0XHRcdHdzID0gbmV3IERhdGUoK3ByZXZNb250aCArICh0aGlzLm8ud2Vla1N0YXJ0IC0gcHJldk1vbnRoLmdldFVUQ0RheSgpIC0gNykgJSA3ICogODY0ZTUpLFxyXG5cdFx0XHRcdFx0XHRcdC8vIFRodXJzZGF5IG9mIHRoaXMgd2Vla1xyXG5cdFx0XHRcdFx0XHRcdHRoID0gbmV3IERhdGUoTnVtYmVyKHdzKSArICg3ICsgNCAtIHdzLmdldFVUQ0RheSgpKSAlIDcgKiA4NjRlNSksXHJcblx0XHRcdFx0XHRcdFx0Ly8gRmlyc3QgVGh1cnNkYXkgb2YgeWVhciwgeWVhciBmcm9tIHRodXJzZGF5XHJcblx0XHRcdFx0XHRcdFx0eXRoID0gbmV3IERhdGUoTnVtYmVyKHl0aCA9IFVUQ0RhdGUodGguZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpICsgKDcgKyA0IC0geXRoLmdldFVUQ0RheSgpKSU3Kjg2NGU1KSxcclxuXHRcdFx0XHRcdFx0XHQvLyBDYWxlbmRhciB3ZWVrOiBtcyBiZXR3ZWVuIHRodXJzZGF5cywgZGl2IG1zIHBlciBkYXksIGRpdiA3IGRheXNcclxuXHRcdFx0XHRcdFx0XHRjYWxXZWVrID0gICh0aCAtIHl0aCkgLyA4NjRlNSAvIDcgKyAxO1xyXG5cdFx0XHRcdFx0XHRodG1sLnB1c2goJzx0ZCBjbGFzcz1cImN3XCI+JysgY2FsV2VlayArJzwvdGQ+Jyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjbHNOYW1lID0gdGhpcy5nZXRDbGFzc05hbWVzKHByZXZNb250aCk7XHJcblx0XHRcdFx0Y2xzTmFtZS5wdXNoKCdkYXknKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuby5iZWZvcmVTaG93RGF5ICE9PSAkLm5vb3Ape1xyXG5cdFx0XHRcdFx0dmFyIGJlZm9yZSA9IHRoaXMuby5iZWZvcmVTaG93RGF5KHRoaXMuX3V0Y190b19sb2NhbChwcmV2TW9udGgpKTtcclxuXHRcdFx0XHRcdGlmIChiZWZvcmUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge307XHJcblx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YoYmVmb3JlKSA9PT0gJ2Jvb2xlYW4nKVxyXG5cdFx0XHRcdFx0XHRiZWZvcmUgPSB7ZW5hYmxlZDogYmVmb3JlfTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZihiZWZvcmUpID09PSAnc3RyaW5nJylcclxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2NsYXNzZXM6IGJlZm9yZX07XHJcblx0XHRcdFx0XHRpZiAoYmVmb3JlLmVuYWJsZWQgPT09IGZhbHNlKVxyXG5cdFx0XHRcdFx0XHRjbHNOYW1lLnB1c2goJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0XHRpZiAoYmVmb3JlLmNsYXNzZXMpXHJcblx0XHRcdFx0XHRcdGNsc05hbWUgPSBjbHNOYW1lLmNvbmNhdChiZWZvcmUuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pKTtcclxuXHRcdFx0XHRcdGlmIChiZWZvcmUudG9vbHRpcClcclxuXHRcdFx0XHRcdFx0dG9vbHRpcCA9IGJlZm9yZS50b29sdGlwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y2xzTmFtZSA9ICQudW5pcXVlKGNsc05hbWUpO1xyXG5cdFx0XHRcdGh0bWwucHVzaCgnPHRkIGNsYXNzPVwiJytjbHNOYW1lLmpvaW4oJyAnKSsnXCInICsgKHRvb2x0aXAgPyAnIHRpdGxlPVwiJyt0b29sdGlwKydcIicgOiAnJykgKyAnPicrcHJldk1vbnRoLmdldFVUQ0RhdGUoKSArICc8L3RkPicpO1xyXG5cdFx0XHRcdGlmIChwcmV2TW9udGguZ2V0VVRDRGF5KCkgPT09IHRoaXMuby53ZWVrRW5kKXtcclxuXHRcdFx0XHRcdGh0bWwucHVzaCgnPC90cj4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cHJldk1vbnRoLnNldFVUQ0RhdGUocHJldk1vbnRoLmdldFVUQ0RhdGUoKSsxKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1kYXlzIHRib2R5JykuZW1wdHkoKS5hcHBlbmQoaHRtbC5qb2luKCcnKSk7XHJcblxyXG5cdFx0XHR2YXIgbW9udGhzID0gdGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItbW9udGhzJylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJ3RoOmVxKDEpJylcclxuXHRcdFx0XHRcdFx0XHQudGV4dCh5ZWFyKVxyXG5cdFx0XHRcdFx0XHRcdC5lbmQoKVxyXG5cdFx0XHRcdFx0XHQuZmluZCgnc3BhbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdCQuZWFjaCh0aGlzLmRhdGVzLCBmdW5jdGlvbihpLCBkKXtcclxuXHRcdFx0XHRpZiAoZC5nZXRVVENGdWxsWWVhcigpID09PSB5ZWFyKVxyXG5cdFx0XHRcdFx0bW9udGhzLmVxKGQuZ2V0VVRDTW9udGgoKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICh5ZWFyIDwgc3RhcnRZZWFyIHx8IHllYXIgPiBlbmRZZWFyKXtcclxuXHRcdFx0XHRtb250aHMuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHllYXIgPT09IHN0YXJ0WWVhcil7XHJcblx0XHRcdFx0bW9udGhzLnNsaWNlKDAsIHN0YXJ0TW9udGgpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh5ZWFyID09PSBlbmRZZWFyKXtcclxuXHRcdFx0XHRtb250aHMuc2xpY2UoZW5kTW9udGgrMSkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGh0bWwgPSAnJztcclxuXHRcdFx0eWVhciA9IHBhcnNlSW50KHllYXIvMTAsIDEwKSAqIDEwO1xyXG5cdFx0XHR2YXIgeWVhckNvbnQgPSB0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci15ZWFycycpXHJcblx0XHRcdFx0XHRcdFx0XHQuZmluZCgndGg6ZXEoMSknKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCh5ZWFyICsgJy0nICsgKHllYXIgKyA5KSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmVuZCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuZmluZCgndGQnKTtcclxuXHRcdFx0eWVhciAtPSAxO1xyXG5cdFx0XHR2YXIgeWVhcnMgPSAkLm1hcCh0aGlzLmRhdGVzLCBmdW5jdGlvbihkKXtcclxuXHRcdFx0XHRcdHJldHVybiBkLmdldFVUQ0Z1bGxZZWFyKCk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0Y2xhc3NlcztcclxuXHRcdFx0Zm9yICh2YXIgaSA9IC0xOyBpIDwgMTE7IGkrKyl7XHJcblx0XHRcdFx0Y2xhc3NlcyA9IFsneWVhciddO1xyXG5cdFx0XHRcdGlmIChpID09PSAtMSlcclxuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnb2xkJyk7XHJcblx0XHRcdFx0ZWxzZSBpZiAoaSA9PT0gMTApXHJcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ25ldycpO1xyXG5cdFx0XHRcdGlmICgkLmluQXJyYXkoeWVhciwgeWVhcnMpICE9PSAtMSlcclxuXHRcdFx0XHRcdGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7XHJcblx0XHRcdFx0aWYgKHllYXIgPCBzdGFydFllYXIgfHwgeWVhciA+IGVuZFllYXIpXHJcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyk7XHJcblx0XHRcdFx0aHRtbCArPSAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3Nlcy5qb2luKCcgJykgKyAnXCI+Jyt5ZWFyKyc8L3NwYW4+JztcclxuXHRcdFx0XHR5ZWFyICs9IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0eWVhckNvbnQuaHRtbChodG1sKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0dXBkYXRlTmF2QXJyb3dzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZiAoIXRoaXMuX2FsbG93X3VwZGF0ZSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHR2YXIgZCA9IG5ldyBEYXRlKHRoaXMudmlld0RhdGUpLFxyXG5cdFx0XHRcdHllYXIgPSBkLmdldFVUQ0Z1bGxZZWFyKCksXHJcblx0XHRcdFx0bW9udGggPSBkLmdldFVUQ01vbnRoKCk7XHJcblx0XHRcdHN3aXRjaCAodGhpcy52aWV3TW9kZSl7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuby5zdGFydERhdGUgIT09IC1JbmZpbml0eSAmJiB5ZWFyIDw9IHRoaXMuby5zdGFydERhdGUuZ2V0VVRDRnVsbFllYXIoKSAmJiBtb250aCA8PSB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCkpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKCcucHJldicpLmNzcyh7dmlzaWJpbGl0eTogJ2hpZGRlbid9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKCcucHJldicpLmNzcyh7dmlzaWJpbGl0eTogJ3Zpc2libGUnfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ICYmIHllYXIgPj0gdGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKSAmJiBtb250aCA+PSB0aGlzLm8uZW5kRGF0ZS5nZXRVVENNb250aCgpKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLm5leHQnKS5jc3Moe3Zpc2liaWxpdHk6ICdoaWRkZW4nfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLm5leHQnKS5jc3Moe3Zpc2liaWxpdHk6ICd2aXNpYmxlJ30pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdGlmICh0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgJiYgeWVhciA8PSB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCkpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKCcucHJldicpLmNzcyh7dmlzaWJpbGl0eTogJ2hpZGRlbid9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKCcucHJldicpLmNzcyh7dmlzaWJpbGl0eTogJ3Zpc2libGUnfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5vLmVuZERhdGUgIT09IEluZmluaXR5ICYmIHllYXIgPj0gdGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKSl7XHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5uZXh0JykuY3NzKHt2aXNpYmlsaXR5OiAnaGlkZGVuJ30pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5uZXh0JykuY3NzKHt2aXNpYmlsaXR5OiAndmlzaWJsZSd9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsaWNrOiBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnc3BhbiwgdGQsIHRoJyksXHJcblx0XHRcdFx0eWVhciwgbW9udGgsIGRheTtcclxuXHRcdFx0aWYgKHRhcmdldC5sZW5ndGggPT09IDEpe1xyXG5cdFx0XHRcdHN3aXRjaCAodGFyZ2V0WzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe1xyXG5cdFx0XHRcdFx0Y2FzZSAndGgnOlxyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHRhcmdldFswXS5jbGFzc05hbWUpe1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2RhdGVwaWNrZXItc3dpdGNoJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd01vZGUoMSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICdwcmV2JzpcclxuXHRcdFx0XHRcdFx0XHRjYXNlICduZXh0JzpcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBkaXIgPSBEUEdsb2JhbC5tb2Rlc1t0aGlzLnZpZXdNb2RlXS5uYXZTdGVwICogKHRhcmdldFswXS5jbGFzc05hbWUgPT09ICdwcmV2JyA/IC0xIDogMSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMudmlld01vZGUpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMubW92ZU1vbnRoKHRoaXMudmlld0RhdGUsIGRpcik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlTW9udGgnLCB0aGlzLnZpZXdEYXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMubW92ZVllYXIodGhpcy52aWV3RGF0ZSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy52aWV3TW9kZSA9PT0gMSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZVllYXInLCB0aGlzLnZpZXdEYXRlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAndG9kYXknOlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0ZSA9IFVUQ0RhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCAwLCAwLCAwKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dNb2RlKC0yKTtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciB3aGljaCA9IHRoaXMuby50b2RheUJ0biA9PT0gJ2xpbmtlZCcgPyBudWxsIDogJ3ZpZXcnO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fc2V0RGF0ZShkYXRlLCB3aGljaCk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICdjbGVhcic6XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZWxlbWVudDtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLmlzSW5wdXQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNlIGlmICh0aGlzLmNvbXBvbmVudClcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudC5maW5kKCdpbnB1dCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQudmFsKFwiXCIpLmNoYW5nZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLm8uYXV0b2Nsb3NlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc3Bhbic6XHJcblx0XHRcdFx0XHRcdGlmICghdGFyZ2V0LmlzKCcuZGlzYWJsZWQnKSl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy52aWV3RGF0ZS5zZXRVVENEYXRlKDEpO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0YXJnZXQuaXMoJy5tb250aCcpKXtcclxuXHRcdFx0XHRcdFx0XHRcdGRheSA9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHRtb250aCA9IHRhcmdldC5wYXJlbnQoKS5maW5kKCdzcGFuJykuaW5kZXgodGFyZ2V0KTtcclxuXHRcdFx0XHRcdFx0XHRcdHllYXIgPSB0aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlLnNldFVUQ01vbnRoKG1vbnRoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZU1vbnRoJywgdGhpcy52aWV3RGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vLm1pblZpZXdNb2RlID09PSAxKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fc2V0RGF0ZShVVENEYXRlKHllYXIsIG1vbnRoLCBkYXkpKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXkgPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0bW9udGggPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0eWVhciA9IHBhcnNlSW50KHRhcmdldC50ZXh0KCksIDEwKXx8MDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudmlld0RhdGUuc2V0VVRDRnVsbFllYXIoeWVhcik7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VZZWFyJywgdGhpcy52aWV3RGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vLm1pblZpZXdNb2RlID09PSAyKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5fc2V0RGF0ZShVVENEYXRlKHllYXIsIG1vbnRoLCBkYXkpKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93TW9kZSgtMSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICd0ZCc6XHJcblx0XHRcdFx0XHRcdGlmICh0YXJnZXQuaXMoJy5kYXknKSAmJiAhdGFyZ2V0LmlzKCcuZGlzYWJsZWQnKSl7XHJcblx0XHRcdFx0XHRcdFx0ZGF5ID0gcGFyc2VJbnQodGFyZ2V0LnRleHQoKSwgMTApfHwxO1xyXG5cdFx0XHRcdFx0XHRcdHllYXIgPSB0aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XHJcblx0XHRcdFx0XHRcdFx0bW9udGggPSB0aGlzLnZpZXdEYXRlLmdldFVUQ01vbnRoKCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRhcmdldC5pcygnLm9sZCcpKXtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChtb250aCA9PT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1vbnRoID0gMTE7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHllYXIgLT0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtb250aCAtPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmICh0YXJnZXQuaXMoJy5uZXcnKSl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobW9udGggPT09IDExKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bW9udGggPSAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR5ZWFyICs9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bW9udGggKz0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5fc2V0RGF0ZShVVENEYXRlKHllYXIsIG1vbnRoLCBkYXkpKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpICYmIHRoaXMuX2ZvY3VzZWRfZnJvbSl7XHJcblx0XHRcdFx0JCh0aGlzLl9mb2N1c2VkX2Zyb20pLmZvY3VzKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVsZXRlIHRoaXMuX2ZvY3VzZWRfZnJvbTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X3RvZ2dsZV9tdWx0aWRhdGU6IGZ1bmN0aW9uKGRhdGUpe1xyXG5cdFx0XHR2YXIgaXggPSB0aGlzLmRhdGVzLmNvbnRhaW5zKGRhdGUpO1xyXG5cdFx0XHRpZiAoIWRhdGUpe1xyXG5cdFx0XHRcdHRoaXMuZGF0ZXMuY2xlYXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChpeCAhPT0gLTEpe1xyXG5cdFx0XHRcdHRoaXMuZGF0ZXMucmVtb3ZlKGl4KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmRhdGVzLnB1c2goZGF0ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLm8ubXVsdGlkYXRlID09PSAnbnVtYmVyJylcclxuXHRcdFx0XHR3aGlsZSAodGhpcy5kYXRlcy5sZW5ndGggPiB0aGlzLm8ubXVsdGlkYXRlKVxyXG5cdFx0XHRcdFx0dGhpcy5kYXRlcy5yZW1vdmUoMCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9zZXREYXRlOiBmdW5jdGlvbihkYXRlLCB3aGljaCl7XHJcblx0XHRcdGlmICghd2hpY2ggfHwgd2hpY2ggPT09ICdkYXRlJylcclxuXHRcdFx0XHR0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGRhdGUgJiYgbmV3IERhdGUoZGF0ZSkpO1xyXG5cdFx0XHRpZiAoIXdoaWNoIHx8IHdoaWNoICA9PT0gJ3ZpZXcnKVxyXG5cdFx0XHRcdHRoaXMudmlld0RhdGUgPSBkYXRlICYmIG5ldyBEYXRlKGRhdGUpO1xyXG5cclxuXHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xyXG5cdFx0XHR2YXIgZWxlbWVudDtcclxuXHRcdFx0aWYgKHRoaXMuaXNJbnB1dCl7XHJcblx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmNvbXBvbmVudCl7XHJcblx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudC5maW5kKCdpbnB1dCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChlbGVtZW50KXtcclxuXHRcdFx0XHRlbGVtZW50LmNoYW5nZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLm8uYXV0b2Nsb3NlICYmICghd2hpY2ggfHwgd2hpY2ggPT09ICdkYXRlJykpe1xyXG5cdFx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG1vdmVNb250aDogZnVuY3Rpb24oZGF0ZSwgZGlyKXtcclxuXHRcdFx0aWYgKCFkYXRlKVxyXG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XHJcblx0XHRcdGlmICghZGlyKVxyXG5cdFx0XHRcdHJldHVybiBkYXRlO1xyXG5cdFx0XHR2YXIgbmV3X2RhdGUgPSBuZXcgRGF0ZShkYXRlLnZhbHVlT2YoKSksXHJcblx0XHRcdFx0ZGF5ID0gbmV3X2RhdGUuZ2V0VVRDRGF0ZSgpLFxyXG5cdFx0XHRcdG1vbnRoID0gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKSxcclxuXHRcdFx0XHRtYWcgPSBNYXRoLmFicyhkaXIpLFxyXG5cdFx0XHRcdG5ld19tb250aCwgdGVzdDtcclxuXHRcdFx0ZGlyID0gZGlyID4gMCA/IDEgOiAtMTtcclxuXHRcdFx0aWYgKG1hZyA9PT0gMSl7XHJcblx0XHRcdFx0dGVzdCA9IGRpciA9PT0gLTFcclxuXHRcdFx0XHRcdC8vIElmIGdvaW5nIGJhY2sgb25lIG1vbnRoLCBtYWtlIHN1cmUgbW9udGggaXMgbm90IGN1cnJlbnQgbW9udGhcclxuXHRcdFx0XHRcdC8vIChlZywgTWFyIDMxIC0+IEZlYiAzMSA9PSBGZWIgMjgsIG5vdCBNYXIgMDIpXHJcblx0XHRcdFx0XHQ/IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdHJldHVybiBuZXdfZGF0ZS5nZXRVVENNb250aCgpID09PSBtb250aDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIElmIGdvaW5nIGZvcndhcmQgb25lIG1vbnRoLCBtYWtlIHN1cmUgbW9udGggaXMgYXMgZXhwZWN0ZWRcclxuXHRcdFx0XHRcdC8vIChlZywgSmFuIDMxIC0+IEZlYiAzMSA9PSBGZWIgMjgsIG5vdCBNYXIgMDIpXHJcblx0XHRcdFx0XHQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdHJldHVybiBuZXdfZGF0ZS5nZXRVVENNb250aCgpICE9PSBuZXdfbW9udGg7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdG5ld19tb250aCA9IG1vbnRoICsgZGlyO1xyXG5cdFx0XHRcdG5ld19kYXRlLnNldFVUQ01vbnRoKG5ld19tb250aCk7XHJcblx0XHRcdFx0Ly8gRGVjIC0+IEphbiAoMTIpIG9yIEphbiAtPiBEZWMgKC0xKSAtLSBsaW1pdCBleHBlY3RlZCBkYXRlIHRvIDAtMTFcclxuXHRcdFx0XHRpZiAobmV3X21vbnRoIDwgMCB8fCBuZXdfbW9udGggPiAxMSlcclxuXHRcdFx0XHRcdG5ld19tb250aCA9IChuZXdfbW9udGggKyAxMikgJSAxMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHQvLyBGb3IgbWFnbml0dWRlcyA+MSwgbW92ZSBvbmUgbW9udGggYXQgYSB0aW1lLi4uXHJcblx0XHRcdFx0Zm9yICh2YXIgaT0wOyBpIDwgbWFnOyBpKyspXHJcblx0XHRcdFx0XHQvLyAuLi53aGljaCBtaWdodCBkZWNyZWFzZSB0aGUgZGF5IChlZywgSmFuIDMxIHRvIEZlYiAyOCwgZXRjKS4uLlxyXG5cdFx0XHRcdFx0bmV3X2RhdGUgPSB0aGlzLm1vdmVNb250aChuZXdfZGF0ZSwgZGlyKTtcclxuXHRcdFx0XHQvLyAuLi50aGVuIHJlc2V0IHRoZSBkYXksIGtlZXBpbmcgaXQgaW4gdGhlIG5ldyBtb250aFxyXG5cdFx0XHRcdG5ld19tb250aCA9IG5ld19kYXRlLmdldFVUQ01vbnRoKCk7XHJcblx0XHRcdFx0bmV3X2RhdGUuc2V0VVRDRGF0ZShkYXkpO1xyXG5cdFx0XHRcdHRlc3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIG5ld19tb250aCAhPT0gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIENvbW1vbiBkYXRlLXJlc2V0dGluZyBsb29wIC0tIGlmIGRhdGUgaXMgYmV5b25kIGVuZCBvZiBtb250aCwgbWFrZSBpdFxyXG5cdFx0XHQvLyBlbmQgb2YgbW9udGhcclxuXHRcdFx0d2hpbGUgKHRlc3QoKSl7XHJcblx0XHRcdFx0bmV3X2RhdGUuc2V0VVRDRGF0ZSgtLWRheSk7XHJcblx0XHRcdFx0bmV3X2RhdGUuc2V0VVRDTW9udGgobmV3X21vbnRoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gbmV3X2RhdGU7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1vdmVZZWFyOiBmdW5jdGlvbihkYXRlLCBkaXIpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tb3ZlTW9udGgoZGF0ZSwgZGlyKjEyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGF0ZVdpdGhpblJhbmdlOiBmdW5jdGlvbihkYXRlKXtcclxuXHRcdFx0cmV0dXJuIGRhdGUgPj0gdGhpcy5vLnN0YXJ0RGF0ZSAmJiBkYXRlIDw9IHRoaXMuby5lbmREYXRlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRrZXlkb3duOiBmdW5jdGlvbihlKXtcclxuXHRcdFx0aWYgKHRoaXMucGlja2VyLmlzKCc6bm90KDp2aXNpYmxlKScpKXtcclxuXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAyNykgLy8gYWxsb3cgZXNjYXBlIHRvIGhpZGUgYW5kIHJlLXNob3cgcGlja2VyXHJcblx0XHRcdFx0XHR0aGlzLnNob3coKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGRhdGVDaGFuZ2VkID0gZmFsc2UsXHJcblx0XHRcdFx0ZGlyLCBuZXdEYXRlLCBuZXdWaWV3RGF0ZSxcclxuXHRcdFx0XHRmb2N1c0RhdGUgPSB0aGlzLmZvY3VzRGF0ZSB8fCB0aGlzLnZpZXdEYXRlO1xyXG5cdFx0XHRzd2l0Y2ggKGUua2V5Q29kZSl7XHJcblx0XHRcdFx0Y2FzZSAyNzogLy8gZXNjYXBlXHJcblx0XHRcdFx0XHRpZiAodGhpcy5mb2N1c0RhdGUpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLmRhdGVzLmdldCgtMSkgfHwgdGhpcy52aWV3RGF0ZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAzNzogLy8gbGVmdFxyXG5cdFx0XHRcdGNhc2UgMzk6IC8vIHJpZ2h0XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuby5rZXlib2FyZE5hdmlnYXRpb24pXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGlyID0gZS5rZXlDb2RlID09PSAzNyA/IC0xIDogMTtcclxuXHRcdFx0XHRcdGlmIChlLmN0cmxLZXkpe1xyXG5cdFx0XHRcdFx0XHRuZXdEYXRlID0gdGhpcy5tb3ZlWWVhcih0aGlzLmRhdGVzLmdldCgtMSkgfHwgVVRDVG9kYXkoKSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSB0aGlzLm1vdmVZZWFyKGZvY3VzRGF0ZSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlWWVhcicsIHRoaXMudmlld0RhdGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoZS5zaGlmdEtleSl7XHJcblx0XHRcdFx0XHRcdG5ld0RhdGUgPSB0aGlzLm1vdmVNb250aCh0aGlzLmRhdGVzLmdldCgtMSkgfHwgVVRDVG9kYXkoKSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSB0aGlzLm1vdmVNb250aChmb2N1c0RhdGUsIGRpcik7XHJcblx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZU1vbnRoJywgdGhpcy52aWV3RGF0ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0bmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCBVVENUb2RheSgpKTtcclxuXHRcdFx0XHRcdFx0bmV3RGF0ZS5zZXRVVENEYXRlKG5ld0RhdGUuZ2V0VVRDRGF0ZSgpICsgZGlyKTtcclxuXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSBuZXcgRGF0ZShmb2N1c0RhdGUpO1xyXG5cdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZS5zZXRVVENEYXRlKGZvY3VzRGF0ZS5nZXRVVENEYXRlKCkgKyBkaXIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGF0ZVdpdGhpblJhbmdlKG5ld0RhdGUpKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5mb2N1c0RhdGUgPSB0aGlzLnZpZXdEYXRlID0gbmV3Vmlld0RhdGU7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMzg6IC8vIHVwXHJcblx0XHRcdFx0Y2FzZSA0MDogLy8gZG93blxyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9uKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRpciA9IGUua2V5Q29kZSA9PT0gMzggPyAtMSA6IDE7XHJcblx0XHRcdFx0XHRpZiAoZS5jdHJsS2V5KXtcclxuXHRcdFx0XHRcdFx0bmV3RGF0ZSA9IHRoaXMubW92ZVllYXIodGhpcy5kYXRlcy5nZXQoLTEpIHx8IFVUQ1RvZGF5KCksIGRpcik7XHJcblx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlWWVhcihmb2N1c0RhdGUsIGRpcik7XHJcblx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZVllYXInLCB0aGlzLnZpZXdEYXRlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKGUuc2hpZnRLZXkpe1xyXG5cdFx0XHRcdFx0XHRuZXdEYXRlID0gdGhpcy5tb3ZlTW9udGgodGhpcy5kYXRlcy5nZXQoLTEpIHx8IFVUQ1RvZGF5KCksIGRpcik7XHJcblx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlTW9udGgoZm9jdXNEYXRlLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VNb250aCcsIHRoaXMudmlld0RhdGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5ld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVzLmdldCgtMSkgfHwgVVRDVG9kYXkoKSk7XHJcblx0XHRcdFx0XHRcdG5ld0RhdGUuc2V0VVRDRGF0ZShuZXdEYXRlLmdldFVUQ0RhdGUoKSArIGRpciAqIDcpO1xyXG5cdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZSA9IG5ldyBEYXRlKGZvY3VzRGF0ZSk7XHJcblx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlLnNldFVUQ0RhdGUoZm9jdXNEYXRlLmdldFVUQ0RhdGUoKSArIGRpciAqIDcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGF0ZVdpdGhpblJhbmdlKG5ld0RhdGUpKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5mb2N1c0RhdGUgPSB0aGlzLnZpZXdEYXRlID0gbmV3Vmlld0RhdGU7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMzI6IC8vIHNwYWNlYmFyXHJcblx0XHRcdFx0XHQvLyBTcGFjZWJhciBpcyB1c2VkIGluIG1hbnVhbGx5IHR5cGluZyBkYXRlcyBpbiBzb21lIGZvcm1hdHMuXHJcblx0XHRcdFx0XHQvLyBBcyBzdWNoLCBpdHMgYmVoYXZpb3Igc2hvdWxkIG5vdCBiZSBoaWphY2tlZC5cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTM6IC8vIGVudGVyXHJcblx0XHRcdFx0XHRmb2N1c0RhdGUgPSB0aGlzLmZvY3VzRGF0ZSB8fCB0aGlzLmRhdGVzLmdldCgtMSkgfHwgdGhpcy52aWV3RGF0ZTtcclxuXHRcdFx0XHRcdHRoaXMuX3RvZ2dsZV9tdWx0aWRhdGUoZm9jdXNEYXRlKTtcclxuXHRcdFx0XHRcdGRhdGVDaGFuZ2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gbnVsbDtcclxuXHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLmRhdGVzLmdldCgtMSkgfHwgdGhpcy52aWV3RGF0ZTtcclxuXHRcdFx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMucGlja2VyLmlzKCc6dmlzaWJsZScpKXtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5vLmF1dG9jbG9zZSlcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgOTogLy8gdGFiXHJcblx0XHRcdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IG51bGw7XHJcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XHJcblx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdFx0XHRcdHRoaXMuaGlkZSgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRhdGVDaGFuZ2VkKXtcclxuXHRcdFx0XHRpZiAodGhpcy5kYXRlcy5sZW5ndGgpXHJcblx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2xlYXJEYXRlJyk7XHJcblx0XHRcdFx0dmFyIGVsZW1lbnQ7XHJcblx0XHRcdFx0aWYgKHRoaXMuaXNJbnB1dCl7XHJcblx0XHRcdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmICh0aGlzLmNvbXBvbmVudCl7XHJcblx0XHRcdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50LmZpbmQoJ2lucHV0Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChlbGVtZW50KXtcclxuXHRcdFx0XHRcdGVsZW1lbnQuY2hhbmdlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHNob3dNb2RlOiBmdW5jdGlvbihkaXIpe1xyXG5cdFx0XHRpZiAoZGlyKXtcclxuXHRcdFx0XHR0aGlzLnZpZXdNb2RlID0gTWF0aC5tYXgodGhpcy5vLm1pblZpZXdNb2RlLCBNYXRoLm1pbigyLCB0aGlzLnZpZXdNb2RlICsgZGlyKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5waWNrZXJcclxuXHRcdFx0XHQuZmluZCgnPmRpdicpXHJcblx0XHRcdFx0LmhpZGUoKVxyXG5cdFx0XHRcdC5maWx0ZXIoJy5kYXRlcGlja2VyLScrRFBHbG9iYWwubW9kZXNbdGhpcy52aWV3TW9kZV0uY2xzTmFtZSlcclxuXHRcdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuXHRcdFx0dGhpcy51cGRhdGVOYXZBcnJvd3MoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR2YXIgRGF0ZVJhbmdlUGlja2VyID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucyl7XHJcblx0XHR0aGlzLmVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG5cdFx0dGhpcy5pbnB1dHMgPSAkLm1hcChvcHRpb25zLmlucHV0cywgZnVuY3Rpb24oaSl7XHJcblx0XHRcdHJldHVybiBpLmpxdWVyeSA/IGlbMF0gOiBpO1xyXG5cdFx0fSk7XHJcblx0XHRkZWxldGUgb3B0aW9ucy5pbnB1dHM7XHJcblxyXG5cdFx0JCh0aGlzLmlucHV0cylcclxuXHRcdFx0LmRhdGVwaWNrZXIob3B0aW9ucylcclxuXHRcdFx0LmJpbmQoJ2NoYW5nZURhdGUnLCAkLnByb3h5KHRoaXMuZGF0ZVVwZGF0ZWQsIHRoaXMpKTtcclxuXHJcblx0XHR0aGlzLnBpY2tlcnMgPSAkLm1hcCh0aGlzLmlucHV0cywgZnVuY3Rpb24oaSl7XHJcblx0XHRcdHJldHVybiAkKGkpLmRhdGEoJ2RhdGVwaWNrZXInKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy51cGRhdGVEYXRlcygpO1xyXG5cdH07XHJcblx0RGF0ZVJhbmdlUGlja2VyLnByb3RvdHlwZSA9IHtcclxuXHRcdHVwZGF0ZURhdGVzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLmRhdGVzID0gJC5tYXAodGhpcy5waWNrZXJzLCBmdW5jdGlvbihpKXtcclxuXHRcdFx0XHRyZXR1cm4gaS5nZXRVVENEYXRlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVJhbmdlcygpO1xyXG5cdFx0fSxcclxuXHRcdHVwZGF0ZVJhbmdlczogZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIHJhbmdlID0gJC5tYXAodGhpcy5kYXRlcywgZnVuY3Rpb24oZCl7XHJcblx0XHRcdFx0cmV0dXJuIGQudmFsdWVPZigpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JC5lYWNoKHRoaXMucGlja2VycywgZnVuY3Rpb24oaSwgcCl7XHJcblx0XHRcdFx0cC5zZXRSYW5nZShyYW5nZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGRhdGVVcGRhdGVkOiBmdW5jdGlvbihlKXtcclxuXHRcdFx0Ly8gYHRoaXMudXBkYXRpbmdgIGlzIGEgd29ya2Fyb3VuZCBmb3IgcHJldmVudGluZyBpbmZpbml0ZSByZWN1cnNpb25cclxuXHRcdFx0Ly8gYmV0d2VlbiBgY2hhbmdlRGF0ZWAgdHJpZ2dlcmluZyBhbmQgYHNldFVUQ0RhdGVgIGNhbGxpbmcuICBVbnRpbFxyXG5cdFx0XHQvLyB0aGVyZSBpcyBhIGJldHRlciBtZWNoYW5pc20uXHJcblx0XHRcdGlmICh0aGlzLnVwZGF0aW5nKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dGhpcy51cGRhdGluZyA9IHRydWU7XHJcblxyXG5cdFx0XHR2YXIgZHAgPSAkKGUudGFyZ2V0KS5kYXRhKCdkYXRlcGlja2VyJyksXHJcblx0XHRcdFx0bmV3X2RhdGUgPSBkcC5nZXRVVENEYXRlKCksXHJcblx0XHRcdFx0aSA9ICQuaW5BcnJheShlLnRhcmdldCwgdGhpcy5pbnB1dHMpLFxyXG5cdFx0XHRcdGwgPSB0aGlzLmlucHV0cy5sZW5ndGg7XHJcblx0XHRcdGlmIChpID09PSAtMSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHQkLmVhY2godGhpcy5waWNrZXJzLCBmdW5jdGlvbihpLCBwKXtcclxuXHRcdFx0XHRpZiAoIXAuZ2V0VVRDRGF0ZSgpKVxyXG5cdFx0XHRcdFx0cC5zZXRVVENEYXRlKG5ld19kYXRlKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAobmV3X2RhdGUgPCB0aGlzLmRhdGVzW2ldKXtcclxuXHRcdFx0XHQvLyBEYXRlIGJlaW5nIG1vdmVkIGVhcmxpZXIvbGVmdFxyXG5cdFx0XHRcdHdoaWxlIChpID49IDAgJiYgbmV3X2RhdGUgPCB0aGlzLmRhdGVzW2ldKXtcclxuXHRcdFx0XHRcdHRoaXMucGlja2Vyc1tpLS1dLnNldFVUQ0RhdGUobmV3X2RhdGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChuZXdfZGF0ZSA+IHRoaXMuZGF0ZXNbaV0pe1xyXG5cdFx0XHRcdC8vIERhdGUgYmVpbmcgbW92ZWQgbGF0ZXIvcmlnaHRcclxuXHRcdFx0XHR3aGlsZSAoaSA8IGwgJiYgbmV3X2RhdGUgPiB0aGlzLmRhdGVzW2ldKXtcclxuXHRcdFx0XHRcdHRoaXMucGlja2Vyc1tpKytdLnNldFVUQ0RhdGUobmV3X2RhdGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnVwZGF0ZURhdGVzKCk7XHJcblxyXG5cdFx0XHRkZWxldGUgdGhpcy51cGRhdGluZztcclxuXHRcdH0sXHJcblx0XHRyZW1vdmU6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQubWFwKHRoaXMucGlja2VycywgZnVuY3Rpb24ocCl7IHAucmVtb3ZlKCk7IH0pO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIG9wdHNfZnJvbV9lbChlbCwgcHJlZml4KXtcclxuXHRcdC8vIERlcml2ZSBvcHRpb25zIGZyb20gZWxlbWVudCBkYXRhLWF0dHJzXHJcblx0XHR2YXIgZGF0YSA9ICQoZWwpLmRhdGEoKSxcclxuXHRcdFx0b3V0ID0ge30sIGlua2V5LFxyXG5cdFx0XHRyZXBsYWNlID0gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICcoW0EtWl0pJyk7XHJcblx0XHRwcmVmaXggPSBuZXcgUmVnRXhwKCdeJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpKTtcclxuXHRcdGZ1bmN0aW9uIHJlX2xvd2VyKF8sYSl7XHJcblx0XHRcdHJldHVybiBhLnRvTG93ZXJDYXNlKCk7XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBrZXkgaW4gZGF0YSlcclxuXHRcdFx0aWYgKHByZWZpeC50ZXN0KGtleSkpe1xyXG5cdFx0XHRcdGlua2V5ID0ga2V5LnJlcGxhY2UocmVwbGFjZSwgcmVfbG93ZXIpO1xyXG5cdFx0XHRcdG91dFtpbmtleV0gPSBkYXRhW2tleV07XHJcblx0XHRcdH1cclxuXHRcdHJldHVybiBvdXQ7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvcHRzX2Zyb21fbG9jYWxlKGxhbmcpe1xyXG5cdFx0Ly8gRGVyaXZlIG9wdGlvbnMgZnJvbSBsb2NhbGUgcGx1Z2luc1xyXG5cdFx0dmFyIG91dCA9IHt9O1xyXG5cdFx0Ly8gQ2hlY2sgaWYgXCJkZS1ERVwiIHN0eWxlIGRhdGUgaXMgYXZhaWxhYmxlLCBpZiBub3QgbGFuZ3VhZ2Ugc2hvdWxkXHJcblx0XHQvLyBmYWxsYmFjayB0byAyIGxldHRlciBjb2RlIGVnIFwiZGVcIlxyXG5cdFx0aWYgKCFkYXRlc1tsYW5nXSl7XHJcblx0XHRcdGxhbmcgPSBsYW5nLnNwbGl0KCctJylbMF07XHJcblx0XHRcdGlmICghZGF0ZXNbbGFuZ10pXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dmFyIGQgPSBkYXRlc1tsYW5nXTtcclxuXHRcdCQuZWFjaChsb2NhbGVfb3B0cywgZnVuY3Rpb24oaSxrKXtcclxuXHRcdFx0aWYgKGsgaW4gZClcclxuXHRcdFx0XHRvdXRba10gPSBkW2tdO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb3V0O1xyXG5cdH1cclxuXHJcblx0dmFyIG9sZCA9ICQuZm4uZGF0ZXBpY2tlcjtcclxuXHQkLmZuLmRhdGVwaWNrZXIgPSBmdW5jdGlvbihvcHRpb24pe1xyXG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG5cdFx0YXJncy5zaGlmdCgpO1xyXG5cdFx0dmFyIGludGVybmFsX3JldHVybjtcclxuXHRcdHRoaXMuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdGRhdGEgPSAkdGhpcy5kYXRhKCdkYXRlcGlja2VyJyksXHJcblx0XHRcdFx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnICYmIG9wdGlvbjtcclxuXHRcdFx0aWYgKCFkYXRhKXtcclxuXHRcdFx0XHR2YXIgZWxvcHRzID0gb3B0c19mcm9tX2VsKHRoaXMsICdkYXRlJyksXHJcblx0XHRcdFx0XHQvLyBQcmVsaW1pbmFyeSBvdGlvbnNcclxuXHRcdFx0XHRcdHhvcHRzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBlbG9wdHMsIG9wdGlvbnMpLFxyXG5cdFx0XHRcdFx0bG9jb3B0cyA9IG9wdHNfZnJvbV9sb2NhbGUoeG9wdHMubGFuZ3VhZ2UpLFxyXG5cdFx0XHRcdFx0Ly8gT3B0aW9ucyBwcmlvcml0eToganMgYXJncywgZGF0YS1hdHRycywgbG9jYWxlcywgZGVmYXVsdHNcclxuXHRcdFx0XHRcdG9wdHMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGxvY29wdHMsIGVsb3B0cywgb3B0aW9ucyk7XHJcblx0XHRcdFx0aWYgKCR0aGlzLmlzKCcuaW5wdXQtZGF0ZXJhbmdlJykgfHwgb3B0cy5pbnB1dHMpe1xyXG5cdFx0XHRcdFx0dmFyIHJvcHRzID0ge1xyXG5cdFx0XHRcdFx0XHRpbnB1dHM6IG9wdHMuaW5wdXRzIHx8ICR0aGlzLmZpbmQoJ2lucHV0JykudG9BcnJheSgpXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0JHRoaXMuZGF0YSgnZGF0ZXBpY2tlcicsIChkYXRhID0gbmV3IERhdGVSYW5nZVBpY2tlcih0aGlzLCAkLmV4dGVuZChvcHRzLCByb3B0cykpKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRoaXMuZGF0YSgnZGF0ZXBpY2tlcicsIChkYXRhID0gbmV3IERhdGVwaWNrZXIodGhpcywgb3B0cykpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb24gPT09ICdzdHJpbmcnICYmIHR5cGVvZiBkYXRhW29wdGlvbl0gPT09ICdmdW5jdGlvbicpe1xyXG5cdFx0XHRcdGludGVybmFsX3JldHVybiA9IGRhdGFbb3B0aW9uXS5hcHBseShkYXRhLCBhcmdzKTtcclxuXHRcdFx0XHRpZiAoaW50ZXJuYWxfcmV0dXJuICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYgKGludGVybmFsX3JldHVybiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gaW50ZXJuYWxfcmV0dXJuO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cclxuXHR2YXIgZGVmYXVsdHMgPSAkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMgPSB7XHJcblx0XHRhdXRvY2xvc2U6IGZhbHNlLFxyXG5cdFx0YmVmb3JlU2hvd0RheTogJC5ub29wLFxyXG5cdFx0Y2FsZW5kYXJXZWVrczogZmFsc2UsXHJcblx0XHRjbGVhckJ0bjogZmFsc2UsXHJcblx0XHRkYXlzT2ZXZWVrRGlzYWJsZWQ6IFtdLFxyXG5cdFx0ZW5kRGF0ZTogSW5maW5pdHksXHJcblx0XHRmb3JjZVBhcnNlOiB0cnVlLFxyXG5cdFx0Zm9ybWF0OiAnbW0vZGQveXl5eScsXHJcblx0XHRrZXlib2FyZE5hdmlnYXRpb246IHRydWUsXHJcblx0XHRsYW5ndWFnZTogJ2VuJyxcclxuXHRcdG1pblZpZXdNb2RlOiAwLFxyXG5cdFx0bXVsdGlkYXRlOiBmYWxzZSxcclxuXHRcdG11bHRpZGF0ZVNlcGFyYXRvcjogJywnLFxyXG5cdFx0b3JpZW50YXRpb246IFwiYXV0b1wiLFxyXG5cdFx0cnRsOiBmYWxzZSxcclxuXHRcdHN0YXJ0RGF0ZTogLUluZmluaXR5LFxyXG5cdFx0c3RhcnRWaWV3OiAwLFxyXG5cdFx0dG9kYXlCdG46IGZhbHNlLFxyXG5cdFx0dG9kYXlIaWdobGlnaHQ6IGZhbHNlLFxyXG5cdFx0d2Vla1N0YXJ0OiAwXHJcblx0fTtcclxuXHR2YXIgbG9jYWxlX29wdHMgPSAkLmZuLmRhdGVwaWNrZXIubG9jYWxlX29wdHMgPSBbXHJcblx0XHQnZm9ybWF0JyxcclxuXHRcdCdydGwnLFxyXG5cdFx0J3dlZWtTdGFydCdcclxuXHRdO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5Db25zdHJ1Y3RvciA9IERhdGVwaWNrZXI7XHJcblx0dmFyIGRhdGVzID0gJC5mbi5kYXRlcGlja2VyLmRhdGVzID0ge1xyXG5cdFx0ZW46IHtcclxuXHRcdFx0ZGF5czogW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiwgXCJTdW5kYXlcIl0sXHJcblx0XHRcdGRheXNTaG9ydDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdLFxyXG5cdFx0XHRkYXlzTWluOiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiLCBcIlN1XCJdLFxyXG5cdFx0XHRtb250aHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxyXG5cdFx0XHRtb250aHNTaG9ydDogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxyXG5cdFx0XHR0b2RheTogXCJUb2RheVwiLFxyXG5cdFx0XHRjbGVhcjogXCJDbGVhclwiXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIERQR2xvYmFsID0ge1xyXG5cdFx0bW9kZXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNsc05hbWU6ICdkYXlzJyxcclxuXHRcdFx0XHRuYXZGbmM6ICdNb250aCcsXHJcblx0XHRcdFx0bmF2U3RlcDogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y2xzTmFtZTogJ21vbnRocycsXHJcblx0XHRcdFx0bmF2Rm5jOiAnRnVsbFllYXInLFxyXG5cdFx0XHRcdG5hdlN0ZXA6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNsc05hbWU6ICd5ZWFycycsXHJcblx0XHRcdFx0bmF2Rm5jOiAnRnVsbFllYXInLFxyXG5cdFx0XHRcdG5hdlN0ZXA6IDEwXHJcblx0XHR9XSxcclxuXHRcdGlzTGVhcFllYXI6IGZ1bmN0aW9uKHllYXIpe1xyXG5cdFx0XHRyZXR1cm4gKCgoeWVhciAlIDQgPT09IDApICYmICh5ZWFyICUgMTAwICE9PSAwKSkgfHwgKHllYXIgJSA0MDAgPT09IDApKTtcclxuXHRcdH0sXHJcblx0XHRnZXREYXlzSW5Nb250aDogZnVuY3Rpb24oeWVhciwgbW9udGgpe1xyXG5cdFx0XHRyZXR1cm4gWzMxLCAoRFBHbG9iYWwuaXNMZWFwWWVhcih5ZWFyKSA/IDI5IDogMjgpLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9udGhdO1xyXG5cdFx0fSxcclxuXHRcdHZhbGlkUGFydHM6IC9kZD98REQ/fG1tP3xNTT98eXkoPzp5eSk/L2csXHJcblx0XHRub25wdW5jdHVhdGlvbjogL1teIC1cXC86LUBcXFtcXHUzNDAwLVxcdTlmZmYtYHstflxcdFxcblxccl0rL2csXHJcblx0XHRwYXJzZUZvcm1hdDogZnVuY3Rpb24oZm9ybWF0KXtcclxuXHRcdFx0Ly8gSUUgdHJlYXRzIFxcMCBhcyBhIHN0cmluZyBlbmQgaW4gaW5wdXRzICh0cnVuY2F0aW5nIHRoZSB2YWx1ZSksXHJcblx0XHRcdC8vIHNvIGl0J3MgYSBiYWQgZm9ybWF0IGRlbGltaXRlciwgYW55d2F5XHJcblx0XHRcdHZhciBzZXBhcmF0b3JzID0gZm9ybWF0LnJlcGxhY2UodGhpcy52YWxpZFBhcnRzLCAnXFwwJykuc3BsaXQoJ1xcMCcpLFxyXG5cdFx0XHRcdHBhcnRzID0gZm9ybWF0Lm1hdGNoKHRoaXMudmFsaWRQYXJ0cyk7XHJcblx0XHRcdGlmICghc2VwYXJhdG9ycyB8fCAhc2VwYXJhdG9ycy5sZW5ndGggfHwgIXBhcnRzIHx8IHBhcnRzLmxlbmd0aCA9PT0gMCl7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIGZvcm1hdC5cIik7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHtzZXBhcmF0b3JzOiBzZXBhcmF0b3JzLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fSxcclxuXHRcdHBhcnNlRGF0ZTogZnVuY3Rpb24oZGF0ZSwgZm9ybWF0LCBsYW5ndWFnZSl7XHJcblx0XHRcdGlmICghZGF0ZSlcclxuXHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0XHRpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcblx0XHRcdFx0cmV0dXJuIGRhdGU7XHJcblx0XHRcdGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJylcclxuXHRcdFx0XHRmb3JtYXQgPSBEUEdsb2JhbC5wYXJzZUZvcm1hdChmb3JtYXQpO1xyXG5cdFx0XHR2YXIgcGFydF9yZSA9IC8oW1xcLStdXFxkKykoW2Rtd3ldKS8sXHJcblx0XHRcdFx0cGFydHMgPSBkYXRlLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9nKSxcclxuXHRcdFx0XHRwYXJ0LCBkaXIsIGk7XHJcblx0XHRcdGlmICgvXltcXC0rXVxcZCtbZG13eV0oW1xccyxdK1tcXC0rXVxcZCtbZG13eV0pKiQvLnRlc3QoZGF0ZSkpe1xyXG5cdFx0XHRcdGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdGZvciAoaT0wOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0cGFydCA9IHBhcnRfcmUuZXhlYyhwYXJ0c1tpXSk7XHJcblx0XHRcdFx0XHRkaXIgPSBwYXJzZUludChwYXJ0WzFdKTtcclxuXHRcdFx0XHRcdHN3aXRjaCAocGFydFsyXSl7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ2QnOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpcik7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ20nOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGUgPSBEYXRlcGlja2VyLnByb3RvdHlwZS5tb3ZlTW9udGguY2FsbChEYXRlcGlja2VyLnByb3RvdHlwZSwgZGF0ZSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAndyc6XHJcblx0XHRcdFx0XHRcdFx0ZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlyICogNyk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3knOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGUgPSBEYXRlcGlja2VyLnByb3RvdHlwZS5tb3ZlWWVhci5jYWxsKERhdGVwaWNrZXIucHJvdG90eXBlLCBkYXRlLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gVVRDRGF0ZShkYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRhdGUuZ2V0VVRDTW9udGgoKSwgZGF0ZS5nZXRVVENEYXRlKCksIDAsIDAsIDApO1xyXG5cdFx0XHR9XHJcblx0XHRcdHBhcnRzID0gZGF0ZSAmJiBkYXRlLm1hdGNoKHRoaXMubm9ucHVuY3R1YXRpb24pIHx8IFtdO1xyXG5cdFx0XHRkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0dmFyIHBhcnNlZCA9IHt9LFxyXG5cdFx0XHRcdHNldHRlcnNfb3JkZXIgPSBbJ3l5eXknLCAneXknLCAnTScsICdNTScsICdtJywgJ21tJywgJ2QnLCAnZGQnXSxcclxuXHRcdFx0XHRzZXR0ZXJzX21hcCA9IHtcclxuXHRcdFx0XHRcdHl5eXk6IGZ1bmN0aW9uKGQsdil7XHJcblx0XHRcdFx0XHRcdHJldHVybiBkLnNldFVUQ0Z1bGxZZWFyKHYpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHl5OiBmdW5jdGlvbihkLHYpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZC5zZXRVVENGdWxsWWVhcigyMDAwK3YpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG06IGZ1bmN0aW9uKGQsdil7XHJcblx0XHRcdFx0XHRcdGlmIChpc05hTihkKSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZDtcclxuXHRcdFx0XHRcdFx0diAtPSAxO1xyXG5cdFx0XHRcdFx0XHR3aGlsZSAodiA8IDApIHYgKz0gMTI7XHJcblx0XHRcdFx0XHRcdHYgJT0gMTI7XHJcblx0XHRcdFx0XHRcdGQuc2V0VVRDTW9udGgodik7XHJcblx0XHRcdFx0XHRcdHdoaWxlIChkLmdldFVUQ01vbnRoKCkgIT09IHYpXHJcblx0XHRcdFx0XHRcdFx0ZC5zZXRVVENEYXRlKGQuZ2V0VVRDRGF0ZSgpLTEpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZDtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkOiBmdW5jdGlvbihkLHYpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZC5zZXRVVENEYXRlKHYpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dmFsLCBmaWx0ZXJlZDtcclxuXHRcdFx0c2V0dGVyc19tYXBbJ00nXSA9IHNldHRlcnNfbWFwWydNTSddID0gc2V0dGVyc19tYXBbJ21tJ10gPSBzZXR0ZXJzX21hcFsnbSddO1xyXG5cdFx0XHRzZXR0ZXJzX21hcFsnZGQnXSA9IHNldHRlcnNfbWFwWydkJ107XHJcblx0XHRcdGRhdGUgPSBVVENEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgMCwgMCwgMCk7XHJcblx0XHRcdHZhciBmcGFydHMgPSBmb3JtYXQucGFydHMuc2xpY2UoKTtcclxuXHRcdFx0Ly8gUmVtb3ZlIG5vb3AgcGFydHNcclxuXHRcdFx0aWYgKHBhcnRzLmxlbmd0aCAhPT0gZnBhcnRzLmxlbmd0aCl7XHJcblx0XHRcdFx0ZnBhcnRzID0gJChmcGFydHMpLmZpbHRlcihmdW5jdGlvbihpLHApe1xyXG5cdFx0XHRcdFx0cmV0dXJuICQuaW5BcnJheShwLCBzZXR0ZXJzX29yZGVyKSAhPT0gLTE7XHJcblx0XHRcdFx0fSkudG9BcnJheSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIFByb2Nlc3MgcmVtYWluZGVyXHJcblx0XHRcdGZ1bmN0aW9uIG1hdGNoX3BhcnQoKXtcclxuXHRcdFx0XHR2YXIgbSA9IHRoaXMuc2xpY2UoMCwgcGFydHNbaV0ubGVuZ3RoKSxcclxuXHRcdFx0XHRcdHAgPSBwYXJ0c1tpXS5zbGljZSgwLCBtLmxlbmd0aCk7XHJcblx0XHRcdFx0cmV0dXJuIG0gPT09IHA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHBhcnRzLmxlbmd0aCA9PT0gZnBhcnRzLmxlbmd0aCl7XHJcblx0XHRcdFx0dmFyIGNudDtcclxuXHRcdFx0XHRmb3IgKGk9MCwgY250ID0gZnBhcnRzLmxlbmd0aDsgaSA8IGNudDsgaSsrKXtcclxuXHRcdFx0XHRcdHZhbCA9IHBhcnNlSW50KHBhcnRzW2ldLCAxMCk7XHJcblx0XHRcdFx0XHRwYXJ0ID0gZnBhcnRzW2ldO1xyXG5cdFx0XHRcdFx0aWYgKGlzTmFOKHZhbCkpe1xyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHBhcnQpe1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ01NJzpcclxuXHRcdFx0XHRcdFx0XHRcdGZpbHRlcmVkID0gJChkYXRlc1tsYW5ndWFnZV0ubW9udGhzKS5maWx0ZXIobWF0Y2hfcGFydCk7XHJcblx0XHRcdFx0XHRcdFx0XHR2YWwgPSAkLmluQXJyYXkoZmlsdGVyZWRbMF0sIGRhdGVzW2xhbmd1YWdlXS5tb250aHMpICsgMTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ00nOlxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsdGVyZWQgPSAkKGRhdGVzW2xhbmd1YWdlXS5tb250aHNTaG9ydCkuZmlsdGVyKG1hdGNoX3BhcnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsID0gJC5pbkFycmF5KGZpbHRlcmVkWzBdLCBkYXRlc1tsYW5ndWFnZV0ubW9udGhzU2hvcnQpICsgMTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwYXJzZWRbcGFydF0gPSB2YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBfZGF0ZSwgcztcclxuXHRcdFx0XHRmb3IgKGk9MDsgaSA8IHNldHRlcnNfb3JkZXIubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRcdFx0cyA9IHNldHRlcnNfb3JkZXJbaV07XHJcblx0XHRcdFx0XHRpZiAocyBpbiBwYXJzZWQgJiYgIWlzTmFOKHBhcnNlZFtzXSkpe1xyXG5cdFx0XHRcdFx0XHRfZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cdFx0XHRcdFx0XHRzZXR0ZXJzX21hcFtzXShfZGF0ZSwgcGFyc2VkW3NdKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFpc05hTihfZGF0ZSkpXHJcblx0XHRcdFx0XHRcdFx0ZGF0ZSA9IF9kYXRlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZGF0ZTtcclxuXHRcdH0sXHJcblx0XHRmb3JtYXREYXRlOiBmdW5jdGlvbihkYXRlLCBmb3JtYXQsIGxhbmd1YWdlKXtcclxuXHRcdFx0aWYgKCFkYXRlKVxyXG5cdFx0XHRcdHJldHVybiAnJztcclxuXHRcdFx0aWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKVxyXG5cdFx0XHRcdGZvcm1hdCA9IERQR2xvYmFsLnBhcnNlRm9ybWF0KGZvcm1hdCk7XHJcblx0XHRcdHZhciB2YWwgPSB7XHJcblx0XHRcdFx0ZDogZGF0ZS5nZXRVVENEYXRlKCksXHJcblx0XHRcdFx0RDogZGF0ZXNbbGFuZ3VhZ2VdLmRheXNTaG9ydFtkYXRlLmdldFVUQ0RheSgpXSxcclxuXHRcdFx0XHRERDogZGF0ZXNbbGFuZ3VhZ2VdLmRheXNbZGF0ZS5nZXRVVENEYXkoKV0sXHJcblx0XHRcdFx0bTogZGF0ZS5nZXRVVENNb250aCgpICsgMSxcclxuXHRcdFx0XHRNOiBkYXRlc1tsYW5ndWFnZV0ubW9udGhzU2hvcnRbZGF0ZS5nZXRVVENNb250aCgpXSxcclxuXHRcdFx0XHRNTTogZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRoc1tkYXRlLmdldFVUQ01vbnRoKCldLFxyXG5cdFx0XHRcdHl5OiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkudG9TdHJpbmcoKS5zdWJzdHJpbmcoMiksXHJcblx0XHRcdFx0eXl5eTogZGF0ZS5nZXRVVENGdWxsWWVhcigpXHJcblx0XHRcdH07XHJcblx0XHRcdHZhbC5kZCA9ICh2YWwuZCA8IDEwID8gJzAnIDogJycpICsgdmFsLmQ7XHJcblx0XHRcdHZhbC5tbSA9ICh2YWwubSA8IDEwID8gJzAnIDogJycpICsgdmFsLm07XHJcblx0XHRcdGRhdGUgPSBbXTtcclxuXHRcdFx0dmFyIHNlcHMgPSAkLmV4dGVuZChbXSwgZm9ybWF0LnNlcGFyYXRvcnMpO1xyXG5cdFx0XHRmb3IgKHZhciBpPTAsIGNudCA9IGZvcm1hdC5wYXJ0cy5sZW5ndGg7IGkgPD0gY250OyBpKyspe1xyXG5cdFx0XHRcdGlmIChzZXBzLmxlbmd0aClcclxuXHRcdFx0XHRcdGRhdGUucHVzaChzZXBzLnNoaWZ0KCkpO1xyXG5cdFx0XHRcdGRhdGUucHVzaCh2YWxbZm9ybWF0LnBhcnRzW2ldXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGRhdGUuam9pbignJyk7XHJcblx0XHR9LFxyXG5cdFx0aGVhZFRlbXBsYXRlOiAnPHRoZWFkPicrXHJcblx0XHRcdFx0XHRcdFx0Jzx0cj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjbGFzcz1cInByZXZcIj4mbGFxdW87PC90aD4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjb2xzcGFuPVwiNVwiIGNsYXNzPVwiZGF0ZXBpY2tlci1zd2l0Y2hcIj48L3RoPicrXHJcblx0XHRcdFx0XHRcdFx0XHQnPHRoIGNsYXNzPVwibmV4dFwiPiZyYXF1bzs8L3RoPicrXHJcblx0XHRcdFx0XHRcdFx0JzwvdHI+JytcclxuXHRcdFx0XHRcdFx0JzwvdGhlYWQ+JyxcclxuXHRcdGNvbnRUZW1wbGF0ZTogJzx0Ym9keT48dHI+PHRkIGNvbHNwYW49XCI3XCI+PC90ZD48L3RyPjwvdGJvZHk+JyxcclxuXHRcdGZvb3RUZW1wbGF0ZTogJzx0Zm9vdD4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8dHI+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cInRvZGF5XCI+PC90aD4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8L3RyPicrXHJcblx0XHRcdFx0XHRcdFx0Jzx0cj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiY2xlYXJcIj48L3RoPicrXHJcblx0XHRcdFx0XHRcdFx0JzwvdHI+JytcclxuXHRcdFx0XHRcdFx0JzwvdGZvb3Q+J1xyXG5cdH07XHJcblx0RFBHbG9iYWwudGVtcGxhdGUgPSAnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXJcIj4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1kYXlzXCI+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1jb25kZW5zZWRcIj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5oZWFkVGVtcGxhdGUrXHJcblx0XHRcdFx0XHRcdFx0XHRcdCc8dGJvZHk+PC90Ym9keT4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5mb290VGVtcGxhdGUrXHJcblx0XHRcdFx0XHRcdFx0XHQnPC90YWJsZT4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1tb250aHNcIj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0Jzx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWNvbmRlbnNlZFwiPicrXHJcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmhlYWRUZW1wbGF0ZStcclxuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuY29udFRlbXBsYXRlK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5mb290VGVtcGxhdGUrXHJcblx0XHRcdFx0XHRcdFx0XHQnPC90YWJsZT4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci15ZWFyc1wiPicrXHJcblx0XHRcdFx0XHRcdFx0XHQnPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtY29uZGVuc2VkXCI+JytcclxuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5jb250VGVtcGxhdGUrXHJcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmZvb3RUZW1wbGF0ZStcclxuXHRcdFx0XHRcdFx0XHRcdCc8L3RhYmxlPicrXHJcblx0XHRcdFx0XHRcdFx0JzwvZGl2PicrXHJcblx0XHRcdFx0XHRcdCc8L2Rpdj4nO1xyXG5cclxuXHQkLmZuLmRhdGVwaWNrZXIuRFBHbG9iYWwgPSBEUEdsb2JhbDtcclxuXHJcblxyXG5cdC8qIERBVEVQSUNLRVIgTk8gQ09ORkxJQ1RcclxuXHQqID09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblx0JC5mbi5kYXRlcGlja2VyLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpe1xyXG5cdFx0JC5mbi5kYXRlcGlja2VyID0gb2xkO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblxyXG5cdC8qIERBVEVQSUNLRVIgREFUQS1BUElcclxuXHQqID09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuXHQkKGRvY3VtZW50KS5vbihcclxuXHRcdCdmb2N1cy5kYXRlcGlja2VyLmRhdGEtYXBpIGNsaWNrLmRhdGVwaWNrZXIuZGF0YS1hcGknLFxyXG5cdFx0J1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyXCJdJyxcclxuXHRcdGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YSgnZGF0ZXBpY2tlcicpKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQvLyBjb21wb25lbnQgY2xpY2sgcmVxdWlyZXMgdXMgdG8gZXhwbGljaXRseSBzaG93IGl0XHJcblx0XHRcdCR0aGlzLmRhdGVwaWNrZXIoJ3Nob3cnKTtcclxuXHRcdH1cclxuXHQpO1xyXG5cdCQoZnVuY3Rpb24oKXtcclxuXHRcdCQoJ1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyLWlubGluZVwiXScpLmRhdGVwaWNrZXIoKTtcclxuXHR9KTtcclxuXHJcbn0od2luZG93LmpRdWVyeSkpO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYnVuZGxlL3BsdWdpbnMvZGF0ZXBpY2tlci9ib290c3RyYXAtZGF0ZXBpY2tlci5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDEwXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzX2Nzcy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljc19jc3MuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljc19jc3MuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYnVuZGxlL2Nzcy9wYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzX2Nzcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAxMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bWFwcy9wYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzX2Nzcy5jc3MubWFwICovXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL2J1bmRsZS9jc3MvcGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljc19jc3MuY3NzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGRpdiBjbGFzcz1cXFwicGFwZXJNYW5hZ2VfdXBsb2FkU3RhdGlzdGljc1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlLXdyYXBwZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGl0bGVcXFwiIHYtYmluZDpjbGFzcz1cXFwiZmxhZyA/ICcxMjMnOiAnMzQ1J1xcXCI+e3tuYW1lRnJvbUluZGV4fX08L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlLWJnXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+5bm05Lu9OjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGRhdGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhciBmYS0wLjV4XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHB1bGwtcmlnaHQgV2RhdGUgaW5wdXRcXFwiIGlkPVxcXCJkYXRlWWVhclxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImJpZ1RpbWVcXFwiIGNsYXNzPVxcXCJXZGF0ZSBpbnB1dCBtcjIwXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiYmlnVGltZVxcXCIgLz5cXG4gICAgICAgICAgICDkuIrkvKDml7bpl7RcXG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwic3RhcnRUaW1lXFxcIiBjbGFzcz1cXFwiV2RhdGUgaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIGlkPVxcXCJzdGFydFRpbWVcXFwiIC8+XFxuICAgICAgICAgICAg5YiwXFxuICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImVuZFRpbWVcXFwiIGNsYXNzPVxcXCJXZGF0ZSBpbnB1dCBtcjIwXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZW5kVGltZVxcXCIgLz5cXG4gICAgICAgICAgICDlrqHmoLjml7bpl7RcXG4gICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cXFwic1RpbWVcXFwiIGNsYXNzPVxcXCJXZGF0ZSBpbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgaWQ9XFxcInNUaW1lXFxcIiAvPlxcbiAgICAgICAgICAgIOWIsFxcbiAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVxcXCJlVGltZVxcXCIgY2xhc3M9XFxcIldkYXRlIGlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwiZVRpbWVcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY29uZFxcXCI+XFxuICAgICAgICAgICAg54q25oCBXFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwic3RhdHVzIHNlbGVjdCBtcjIwXFxcIiB2LW1vZGVsPVxcXCJzdGF0dXNcXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVxcXCJcXFwiPuWFqOmDqDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uPuW+heWuoeaguDwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgIOenkeebrlxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcInN1YmplY3Qgc2VsZWN0IG1yMjBcXFwiIHYtbW9kZWw9XFxcInN1YmplY3RcXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVxcXCJcXFwiPuivreaWhzwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uPuaVsOWtpjwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uPuiLseivrTwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgIOW5tOe6p1xcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImdyYWRlIHNlbGVjdCBtcjIwXFxcIiB2LW1vZGVsPVxcXCJncmFkZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ9XFxcIlxcXCI+5YWo6YOoPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24+5LiA5bm057qnPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24+5LqM5bm057qnPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24+5LiJ5bm057qnPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAg5LiK5Lyg5Lq6XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJpbnB1dFxcXCIgdi1tb2RlbD1cXFwicGVyc29uXFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+36L6T5YWl5LiK5Lyg5Lq655qE5ZCN56ewXFxcIj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYXJlYVxcXCI+XFxuICAgICAgICAgICAg5Zyw5Yy6XFxuICAgICAgICAgICAgPGFyZT48L2FyZT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFwZXJcXFwiPlxcbiAgICAgICAgICAgIOivleWNt+exu+Wei1xcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcIm1yMjAgc2VsZWN0XFxcIiB2LW1vZGVsPVxcXCJ0eXBlXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cXFwiXFxcIj7lhajpg6g8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7mnJ/kuK08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbj7mnJ/mnKs8L29wdGlvbj5cXG4gICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICDor5XljbflkI3np7BcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcIm1yMjAgaW5wdXRcXFwiIHBsYWNlaG9sZGVyPVxcXCLor7fovpPlhaXopoHmn6Xor6LnmoTor5XljbflkI3np7BcXFwiIHYtbW9kZWw9XFxcIm5hbWVcXFwiPlxcbiAgICAgICAgICAgIOivleWNt0lEXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJtcjIwIGlucHV0XFxcIiBwbGFjZWhvbGRlcj1cXFwi6K+36L6T5YWl6KaB5p+l6K+i55qE6K+V5Y23SURcXFwiIHYtbW9kZWw9XFxcImlkXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2VhcmNoXFxcIiBAY2xpY2s9XFxcInNlYXJjaFxcXCI+5p+l6K+iPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8dGFiIDp0YWJsZS1kYXRhPVxcXCJ0YWJsZURhdGFcXFwiPjwvdGFiPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3BhcGVyTWFuYWdlX3VwbG9hZFN0YXRpc3RpY3MudnVlXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMTBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9