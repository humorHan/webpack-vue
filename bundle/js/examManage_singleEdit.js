webpackJsonp([1,10],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	 var inputdata = __webpack_require__(3);
	 var subgradid = __webpack_require__(11);
	 var subgdata=['语文','数学','英语','物理','化学','地理','历史','政治','生物','科学','理综','文综','历史与社会','奥数'];
	 var gradclass=['全部','一年级','二年级','三年级','四年级','五年级','六年级','七年级','八年级','九年级','高一','高二'];
	var index = new Vue({
	    el: ".singheader",
	    data:{
	        subjctlist:subgdata,
	        gradlist:gradclass
	    },
	    components:{
	        "inputdate": inputdata,
	        "subgradid": subgradid
	    }
	});


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(4)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\input-date.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3ea5d0ac/input-date.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(5);
	__webpack_require__(9);
	module.exports = {
	    template: '#inputdate',
	    data: function data() {
	        return {
	            inputdate: ''
	        };
	    },
	    ready: function ready() {
	        $(function () {
	            $(".inputdate").datepicker({
	                autoclose: true,
	                clearBtn: true,
	                todayBtn: true,
	                startView: 2,
	                format: "yyyy-mm-dd"
	            });
	        });
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Datepicker for Bootstrap\r\n *\r\n * Copyright 2012 Stefan Petre\r\n * Improvements by Andrew Rowls\r\n * Licensed under the Apache License v2.0\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n */\r\n.datepicker {\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n  direction: ltr;\r\n  /*.dow {\r\n\t\tborder-top: 1px solid #ddd !important;\r\n\t}*/\r\n}\r\n.datepicker-inline {\r\n  width: 100%;\r\n}\r\n.datepicker.datepicker-rtl {\r\n  direction: rtl;\r\n}\r\n.datepicker.datepicker-rtl table tr td span {\r\n  float: right;\r\n}\r\n.datepicker-dropdown {\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.datepicker-dropdown:before {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 7px solid transparent;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-top: 0;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  position: absolute;\r\n}\r\n.datepicker-dropdown:after {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid #fff;\r\n  border-top: 0;\r\n  position: absolute;\r\n}\r\n.datepicker-dropdown.datepicker-orient-left:before {\r\n  left: 6px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-left:after {\r\n  left: 7px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-right:before {\r\n  right: 6px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-right:after {\r\n  right: 7px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-top:before {\r\n  top: -7px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-top:after {\r\n  top: -6px;\r\n}\r\n.datepicker-dropdown.datepicker-orient-bottom:before {\r\n  bottom: -7px;\r\n  border-bottom: 0;\r\n  border-top: 7px solid #999;\r\n}\r\n.datepicker-dropdown.datepicker-orient-bottom:after {\r\n  bottom: -6px;\r\n  border-bottom: 0;\r\n  border-top: 6px solid #fff;\r\n}\r\n.datepicker > div {\r\n  display: none;\r\n}\r\n.datepicker.days div.datepicker-days {\r\n  display: block;\r\n}\r\n.datepicker.months div.datepicker-months {\r\n  display: block;\r\n}\r\n.datepicker.years div.datepicker-years {\r\n  display: block;\r\n}\r\n.datepicker table {\r\n  margin: 0;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n.datepicker table tr td,\r\n.datepicker table tr th {\r\n  text-align: center;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 4px;\r\n  border: none;\r\n}\r\n.table-striped .datepicker table tr td,\r\n.table-striped .datepicker table tr th {\r\n  background-color: transparent;\r\n}\r\n.datepicker table tr td.day:hover,\r\n.datepicker table tr td.day.focused {\r\n  background: rgba(0,0,0,0.2);\r\n  cursor: pointer;\r\n}\r\n.datepicker table tr td.old,\r\n.datepicker table tr td.new {\r\n  color: #777;\r\n}\r\n.datepicker table tr td.disabled,\r\n.datepicker table tr td.disabled:hover {\r\n  background: none;\r\n  color: #444;\r\n  cursor: default;\r\n}\r\n.datepicker table tr td.today,\r\n.datepicker table tr td.today:hover,\r\n.datepicker table tr td.today.disabled,\r\n.datepicker table tr td.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #ffb733;\r\n}\r\n.datepicker table tr td.today:hover,\r\n.datepicker table tr td.today:hover:hover,\r\n.datepicker table tr td.today.disabled:hover,\r\n.datepicker table tr td.today.disabled:hover:hover,\r\n.datepicker table tr td.today:focus,\r\n.datepicker table tr td.today:hover:focus,\r\n.datepicker table tr td.today.disabled:focus,\r\n.datepicker table tr td.today.disabled:hover:focus,\r\n.datepicker table tr td.today:active,\r\n.datepicker table tr td.today:hover:active,\r\n.datepicker table tr td.today.disabled:active,\r\n.datepicker table tr td.today.disabled:hover:active,\r\n.datepicker table tr td.today.active,\r\n.datepicker table tr td.today:hover.active,\r\n.datepicker table tr td.today.disabled.active,\r\n.datepicker table tr td.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.today,\r\n.open .dropdown-toggle.datepicker table tr td.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #f59e00;\r\n}\r\n.datepicker table tr td.today:active,\r\n.datepicker table tr td.today:hover:active,\r\n.datepicker table tr td.today.disabled:active,\r\n.datepicker table tr td.today.disabled:hover:active,\r\n.datepicker table tr td.today.active,\r\n.datepicker table tr td.today:hover.active,\r\n.datepicker table tr td.today.disabled.active,\r\n.datepicker table tr td.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.today,\r\n.open .dropdown-toggle.datepicker table tr td.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.today.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.today.disabled,\r\n.datepicker table tr td.today:hover.disabled,\r\n.datepicker table tr td.today.disabled.disabled,\r\n.datepicker table tr td.today.disabled:hover.disabled,\r\n.datepicker table tr td.today[disabled],\r\n.datepicker table tr td.today:hover[disabled],\r\n.datepicker table tr td.today.disabled[disabled],\r\n.datepicker table tr td.today.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.today,\r\nfieldset[disabled] .datepicker table tr td.today:hover,\r\nfieldset[disabled] .datepicker table tr td.today.disabled,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover,\r\n.datepicker table tr td.today.disabled:hover,\r\n.datepicker table tr td.today:hover.disabled:hover,\r\n.datepicker table tr td.today.disabled.disabled:hover,\r\n.datepicker table tr td.today.disabled:hover.disabled:hover,\r\n.datepicker table tr td.today[disabled]:hover,\r\n.datepicker table tr td.today:hover[disabled]:hover,\r\n.datepicker table tr td.today.disabled[disabled]:hover,\r\n.datepicker table tr td.today.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.today:hover,\r\nfieldset[disabled] .datepicker table tr td.today:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover:hover,\r\n.datepicker table tr td.today.disabled:focus,\r\n.datepicker table tr td.today:hover.disabled:focus,\r\n.datepicker table tr td.today.disabled.disabled:focus,\r\n.datepicker table tr td.today.disabled:hover.disabled:focus,\r\n.datepicker table tr td.today[disabled]:focus,\r\n.datepicker table tr td.today:hover[disabled]:focus,\r\n.datepicker table tr td.today.disabled[disabled]:focus,\r\n.datepicker table tr td.today.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.today:focus,\r\nfieldset[disabled] .datepicker table tr td.today:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover:focus,\r\n.datepicker table tr td.today.disabled:active,\r\n.datepicker table tr td.today:hover.disabled:active,\r\n.datepicker table tr td.today.disabled.disabled:active,\r\n.datepicker table tr td.today.disabled:hover.disabled:active,\r\n.datepicker table tr td.today[disabled]:active,\r\n.datepicker table tr td.today:hover[disabled]:active,\r\n.datepicker table tr td.today.disabled[disabled]:active,\r\n.datepicker table tr td.today.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.today:active,\r\nfieldset[disabled] .datepicker table tr td.today:hover:active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover:active,\r\n.datepicker table tr td.today.disabled.active,\r\n.datepicker table tr td.today:hover.disabled.active,\r\n.datepicker table tr td.today.disabled.disabled.active,\r\n.datepicker table tr td.today.disabled:hover.disabled.active,\r\n.datepicker table tr td.today[disabled].active,\r\n.datepicker table tr td.today:hover[disabled].active,\r\n.datepicker table tr td.today.disabled[disabled].active,\r\n.datepicker table tr td.today.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.today.active,\r\nfieldset[disabled] .datepicker table tr td.today:hover.active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.today.disabled:hover.active {\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #ffb733;\r\n}\r\n.datepicker table tr td.today:hover:hover {\r\n  color: #000;\r\n}\r\n.datepicker table tr td.today.active:hover {\r\n  color: #fff;\r\n}\r\n.datepicker table tr td.range,\r\n.datepicker table tr td.range:hover,\r\n.datepicker table tr td.range.disabled,\r\n.datepicker table tr td.range.disabled:hover {\r\n  background: rgba(0,0,0,0.2);\r\n  border-radius: 0;\r\n}\r\n.datepicker table tr td.range.today,\r\n.datepicker table tr td.range.today:hover,\r\n.datepicker table tr td.range.today.disabled,\r\n.datepicker table tr td.range.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #f1a417;\r\n  border-radius: 0;\r\n}\r\n.datepicker table tr td.range.today:hover,\r\n.datepicker table tr td.range.today:hover:hover,\r\n.datepicker table tr td.range.today.disabled:hover,\r\n.datepicker table tr td.range.today.disabled:hover:hover,\r\n.datepicker table tr td.range.today:focus,\r\n.datepicker table tr td.range.today:hover:focus,\r\n.datepicker table tr td.range.today.disabled:focus,\r\n.datepicker table tr td.range.today.disabled:hover:focus,\r\n.datepicker table tr td.range.today:active,\r\n.datepicker table tr td.range.today:hover:active,\r\n.datepicker table tr td.range.today.disabled:active,\r\n.datepicker table tr td.range.today.disabled:hover:active,\r\n.datepicker table tr td.range.today.active,\r\n.datepicker table tr td.range.today:hover.active,\r\n.datepicker table tr td.range.today.disabled.active,\r\n.datepicker table tr td.range.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.range.today,\r\n.open .dropdown-toggle.datepicker table tr td.range.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled:hover {\r\n  color: #000000;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #bf800c;\r\n}\r\n.datepicker table tr td.range.today:active,\r\n.datepicker table tr td.range.today:hover:active,\r\n.datepicker table tr td.range.today.disabled:active,\r\n.datepicker table tr td.range.today.disabled:hover:active,\r\n.datepicker table tr td.range.today.active,\r\n.datepicker table tr td.range.today:hover.active,\r\n.datepicker table tr td.range.today.disabled.active,\r\n.datepicker table tr td.range.today.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.range.today,\r\n.open .dropdown-toggle.datepicker table tr td.range.today:hover,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.range.today.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.range.today.disabled,\r\n.datepicker table tr td.range.today:hover.disabled,\r\n.datepicker table tr td.range.today.disabled.disabled,\r\n.datepicker table tr td.range.today.disabled:hover.disabled,\r\n.datepicker table tr td.range.today[disabled],\r\n.datepicker table tr td.range.today:hover[disabled],\r\n.datepicker table tr td.range.today.disabled[disabled],\r\n.datepicker table tr td.range.today.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.range.today,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover,\r\n.datepicker table tr td.range.today.disabled:hover,\r\n.datepicker table tr td.range.today:hover.disabled:hover,\r\n.datepicker table tr td.range.today.disabled.disabled:hover,\r\n.datepicker table tr td.range.today.disabled:hover.disabled:hover,\r\n.datepicker table tr td.range.today[disabled]:hover,\r\n.datepicker table tr td.range.today:hover[disabled]:hover,\r\n.datepicker table tr td.range.today.disabled[disabled]:hover,\r\n.datepicker table tr td.range.today.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover:hover,\r\n.datepicker table tr td.range.today.disabled:focus,\r\n.datepicker table tr td.range.today:hover.disabled:focus,\r\n.datepicker table tr td.range.today.disabled.disabled:focus,\r\n.datepicker table tr td.range.today.disabled:hover.disabled:focus,\r\n.datepicker table tr td.range.today[disabled]:focus,\r\n.datepicker table tr td.range.today:hover[disabled]:focus,\r\n.datepicker table tr td.range.today.disabled[disabled]:focus,\r\n.datepicker table tr td.range.today.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover:focus,\r\n.datepicker table tr td.range.today.disabled:active,\r\n.datepicker table tr td.range.today:hover.disabled:active,\r\n.datepicker table tr td.range.today.disabled.disabled:active,\r\n.datepicker table tr td.range.today.disabled:hover.disabled:active,\r\n.datepicker table tr td.range.today[disabled]:active,\r\n.datepicker table tr td.range.today:hover[disabled]:active,\r\n.datepicker table tr td.range.today.disabled[disabled]:active,\r\n.datepicker table tr td.range.today.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.range.today:active,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover:active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover:active,\r\n.datepicker table tr td.range.today.disabled.active,\r\n.datepicker table tr td.range.today:hover.disabled.active,\r\n.datepicker table tr td.range.today.disabled.disabled.active,\r\n.datepicker table tr td.range.today.disabled:hover.disabled.active,\r\n.datepicker table tr td.range.today[disabled].active,\r\n.datepicker table tr td.range.today:hover[disabled].active,\r\n.datepicker table tr td.range.today.disabled[disabled].active,\r\n.datepicker table tr td.range.today.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.range.today.active,\r\nfieldset[disabled] .datepicker table tr td.range.today:hover.active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.range.today.disabled:hover.active {\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #f1a417;\r\n}\r\n.datepicker table tr td.selected,\r\n.datepicker table tr td.selected:hover,\r\n.datepicker table tr td.selected.disabled,\r\n.datepicker table tr td.selected.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #555555;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.datepicker table tr td.selected:hover,\r\n.datepicker table tr td.selected:hover:hover,\r\n.datepicker table tr td.selected.disabled:hover,\r\n.datepicker table tr td.selected.disabled:hover:hover,\r\n.datepicker table tr td.selected:focus,\r\n.datepicker table tr td.selected:hover:focus,\r\n.datepicker table tr td.selected.disabled:focus,\r\n.datepicker table tr td.selected.disabled:hover:focus,\r\n.datepicker table tr td.selected:active,\r\n.datepicker table tr td.selected:hover:active,\r\n.datepicker table tr td.selected.disabled:active,\r\n.datepicker table tr td.selected.disabled:hover:active,\r\n.datepicker table tr td.selected.active,\r\n.datepicker table tr td.selected:hover.active,\r\n.datepicker table tr td.selected.disabled.active,\r\n.datepicker table tr td.selected.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.selected,\r\n.open .dropdown-toggle.datepicker table tr td.selected:hover,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #373737;\r\n}\r\n.datepicker table tr td.selected:active,\r\n.datepicker table tr td.selected:hover:active,\r\n.datepicker table tr td.selected.disabled:active,\r\n.datepicker table tr td.selected.disabled:hover:active,\r\n.datepicker table tr td.selected.active,\r\n.datepicker table tr td.selected:hover.active,\r\n.datepicker table tr td.selected.disabled.active,\r\n.datepicker table tr td.selected.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.selected,\r\n.open .dropdown-toggle.datepicker table tr td.selected:hover,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.selected.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.selected.disabled,\r\n.datepicker table tr td.selected:hover.disabled,\r\n.datepicker table tr td.selected.disabled.disabled,\r\n.datepicker table tr td.selected.disabled:hover.disabled,\r\n.datepicker table tr td.selected[disabled],\r\n.datepicker table tr td.selected:hover[disabled],\r\n.datepicker table tr td.selected.disabled[disabled],\r\n.datepicker table tr td.selected.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.selected,\r\nfieldset[disabled] .datepicker table tr td.selected:hover,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover,\r\n.datepicker table tr td.selected.disabled:hover,\r\n.datepicker table tr td.selected:hover.disabled:hover,\r\n.datepicker table tr td.selected.disabled.disabled:hover,\r\n.datepicker table tr td.selected.disabled:hover.disabled:hover,\r\n.datepicker table tr td.selected[disabled]:hover,\r\n.datepicker table tr td.selected:hover[disabled]:hover,\r\n.datepicker table tr td.selected.disabled[disabled]:hover,\r\n.datepicker table tr td.selected.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.selected:hover,\r\nfieldset[disabled] .datepicker table tr td.selected:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover:hover,\r\n.datepicker table tr td.selected.disabled:focus,\r\n.datepicker table tr td.selected:hover.disabled:focus,\r\n.datepicker table tr td.selected.disabled.disabled:focus,\r\n.datepicker table tr td.selected.disabled:hover.disabled:focus,\r\n.datepicker table tr td.selected[disabled]:focus,\r\n.datepicker table tr td.selected:hover[disabled]:focus,\r\n.datepicker table tr td.selected.disabled[disabled]:focus,\r\n.datepicker table tr td.selected.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.selected:focus,\r\nfieldset[disabled] .datepicker table tr td.selected:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover:focus,\r\n.datepicker table tr td.selected.disabled:active,\r\n.datepicker table tr td.selected:hover.disabled:active,\r\n.datepicker table tr td.selected.disabled.disabled:active,\r\n.datepicker table tr td.selected.disabled:hover.disabled:active,\r\n.datepicker table tr td.selected[disabled]:active,\r\n.datepicker table tr td.selected:hover[disabled]:active,\r\n.datepicker table tr td.selected.disabled[disabled]:active,\r\n.datepicker table tr td.selected.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.selected:active,\r\nfieldset[disabled] .datepicker table tr td.selected:hover:active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover:active,\r\n.datepicker table tr td.selected.disabled.active,\r\n.datepicker table tr td.selected:hover.disabled.active,\r\n.datepicker table tr td.selected.disabled.disabled.active,\r\n.datepicker table tr td.selected.disabled:hover.disabled.active,\r\n.datepicker table tr td.selected[disabled].active,\r\n.datepicker table tr td.selected:hover[disabled].active,\r\n.datepicker table tr td.selected.disabled[disabled].active,\r\n.datepicker table tr td.selected.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.selected.active,\r\nfieldset[disabled] .datepicker table tr td.selected:hover.active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.selected.disabled:hover.active {\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #555555;\r\n}\r\n.datepicker table tr td.active,\r\n.datepicker table tr td.active:hover,\r\n.datepicker table tr td.active.disabled,\r\n.datepicker table tr td.active.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.2);\r\n  border-color: #357ebd;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.datepicker table tr td.active:hover,\r\n.datepicker table tr td.active:hover:hover,\r\n.datepicker table tr td.active.disabled:hover,\r\n.datepicker table tr td.active.disabled:hover:hover,\r\n.datepicker table tr td.active:focus,\r\n.datepicker table tr td.active:hover:focus,\r\n.datepicker table tr td.active.disabled:focus,\r\n.datepicker table tr td.active.disabled:hover:focus,\r\n.datepicker table tr td.active:active,\r\n.datepicker table tr td.active:hover:active,\r\n.datepicker table tr td.active.disabled:active,\r\n.datepicker table tr td.active.disabled:hover:active,\r\n.datepicker table tr td.active.active,\r\n.datepicker table tr td.active:hover.active,\r\n.datepicker table tr td.active.disabled.active,\r\n.datepicker table tr td.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.active,\r\n.open .dropdown-toggle.datepicker table tr td.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled:hover {\r\n  color: #ffffff;\r\n  background: rgba(0,0,0,0.5);\r\n  border-color: #285e8e;\r\n}\r\n.datepicker table tr td.active:active,\r\n.datepicker table tr td.active:hover:active,\r\n.datepicker table tr td.active.disabled:active,\r\n.datepicker table tr td.active.disabled:hover:active,\r\n.datepicker table tr td.active.active,\r\n.datepicker table tr td.active:hover.active,\r\n.datepicker table tr td.active.disabled.active,\r\n.datepicker table tr td.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td.active,\r\n.open .dropdown-toggle.datepicker table tr td.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td.active.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td.active.disabled,\r\n.datepicker table tr td.active:hover.disabled,\r\n.datepicker table tr td.active.disabled.disabled,\r\n.datepicker table tr td.active.disabled:hover.disabled,\r\n.datepicker table tr td.active[disabled],\r\n.datepicker table tr td.active:hover[disabled],\r\n.datepicker table tr td.active.disabled[disabled],\r\n.datepicker table tr td.active.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td.active,\r\nfieldset[disabled] .datepicker table tr td.active:hover,\r\nfieldset[disabled] .datepicker table tr td.active.disabled,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover,\r\n.datepicker table tr td.active.disabled:hover,\r\n.datepicker table tr td.active:hover.disabled:hover,\r\n.datepicker table tr td.active.disabled.disabled:hover,\r\n.datepicker table tr td.active.disabled:hover.disabled:hover,\r\n.datepicker table tr td.active[disabled]:hover,\r\n.datepicker table tr td.active:hover[disabled]:hover,\r\n.datepicker table tr td.active.disabled[disabled]:hover,\r\n.datepicker table tr td.active.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td.active:hover,\r\nfieldset[disabled] .datepicker table tr td.active:hover:hover,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover:hover,\r\n.datepicker table tr td.active.disabled:focus,\r\n.datepicker table tr td.active:hover.disabled:focus,\r\n.datepicker table tr td.active.disabled.disabled:focus,\r\n.datepicker table tr td.active.disabled:hover.disabled:focus,\r\n.datepicker table tr td.active[disabled]:focus,\r\n.datepicker table tr td.active:hover[disabled]:focus,\r\n.datepicker table tr td.active.disabled[disabled]:focus,\r\n.datepicker table tr td.active.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td.active:focus,\r\nfieldset[disabled] .datepicker table tr td.active:hover:focus,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover:focus,\r\n.datepicker table tr td.active.disabled:active,\r\n.datepicker table tr td.active:hover.disabled:active,\r\n.datepicker table tr td.active.disabled.disabled:active,\r\n.datepicker table tr td.active.disabled:hover.disabled:active,\r\n.datepicker table tr td.active[disabled]:active,\r\n.datepicker table tr td.active:hover[disabled]:active,\r\n.datepicker table tr td.active.disabled[disabled]:active,\r\n.datepicker table tr td.active.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td.active:active,\r\nfieldset[disabled] .datepicker table tr td.active:hover:active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover:active,\r\n.datepicker table tr td.active.disabled.active,\r\n.datepicker table tr td.active:hover.disabled.active,\r\n.datepicker table tr td.active.disabled.disabled.active,\r\n.datepicker table tr td.active.disabled:hover.disabled.active,\r\n.datepicker table tr td.active[disabled].active,\r\n.datepicker table tr td.active:hover[disabled].active,\r\n.datepicker table tr td.active.disabled[disabled].active,\r\n.datepicker table tr td.active.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td.active.active,\r\nfieldset[disabled] .datepicker table tr td.active:hover.active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled.active,\r\nfieldset[disabled] .datepicker table tr td.active.disabled:hover.active {\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n}\r\n.datepicker table tr td span {\r\n  display: block;\r\n  width: 23%;\r\n  height: 54px;\r\n  line-height: 54px;\r\n  float: left;\r\n  margin: 1%;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.datepicker table tr td span:hover {\r\n  background: rgba(0,0,0,0.2);\r\n}\r\n.datepicker table tr td span.disabled,\r\n.datepicker table tr td span.disabled:hover {\r\n  background: none;\r\n  color: #444;\r\n  cursor: default;\r\n}\r\n.datepicker table tr td span.active,\r\n.datepicker table tr td span.active:hover,\r\n.datepicker table tr td span.active.disabled,\r\n.datepicker table tr td span.active.disabled:hover {\r\n  color: #ffffff;\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.datepicker table tr td span.active:hover,\r\n.datepicker table tr td span.active:hover:hover,\r\n.datepicker table tr td span.active.disabled:hover,\r\n.datepicker table tr td span.active.disabled:hover:hover,\r\n.datepicker table tr td span.active:focus,\r\n.datepicker table tr td span.active:hover:focus,\r\n.datepicker table tr td span.active.disabled:focus,\r\n.datepicker table tr td span.active.disabled:hover:focus,\r\n.datepicker table tr td span.active:active,\r\n.datepicker table tr td span.active:hover:active,\r\n.datepicker table tr td span.active.disabled:active,\r\n.datepicker table tr td span.active.disabled:hover:active,\r\n.datepicker table tr td span.active.active,\r\n.datepicker table tr td span.active:hover.active,\r\n.datepicker table tr td span.active.disabled.active,\r\n.datepicker table tr td span.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled:hover {\r\n  color: #ffffff;\r\n  background-color: #3276b1;\r\n  border-color: #285e8e;\r\n}\r\n.datepicker table tr td span.active:active,\r\n.datepicker table tr td span.active:hover:active,\r\n.datepicker table tr td span.active.disabled:active,\r\n.datepicker table tr td span.active.disabled:hover:active,\r\n.datepicker table tr td span.active.active,\r\n.datepicker table tr td span.active:hover.active,\r\n.datepicker table tr td span.active.disabled.active,\r\n.datepicker table tr td span.active.disabled:hover.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active,\r\n.open .dropdown-toggle.datepicker table tr td span.active:hover,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled,\r\n.open .dropdown-toggle.datepicker table tr td span.active.disabled:hover {\r\n  background-image: none;\r\n}\r\n.datepicker table tr td span.active.disabled,\r\n.datepicker table tr td span.active:hover.disabled,\r\n.datepicker table tr td span.active.disabled.disabled,\r\n.datepicker table tr td span.active.disabled:hover.disabled,\r\n.datepicker table tr td span.active[disabled],\r\n.datepicker table tr td span.active:hover[disabled],\r\n.datepicker table tr td span.active.disabled[disabled],\r\n.datepicker table tr td span.active.disabled:hover[disabled],\r\nfieldset[disabled] .datepicker table tr td span.active,\r\nfieldset[disabled] .datepicker table tr td span.active:hover,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover,\r\n.datepicker table tr td span.active.disabled:hover,\r\n.datepicker table tr td span.active:hover.disabled:hover,\r\n.datepicker table tr td span.active.disabled.disabled:hover,\r\n.datepicker table tr td span.active.disabled:hover.disabled:hover,\r\n.datepicker table tr td span.active[disabled]:hover,\r\n.datepicker table tr td span.active:hover[disabled]:hover,\r\n.datepicker table tr td span.active.disabled[disabled]:hover,\r\n.datepicker table tr td span.active.disabled:hover[disabled]:hover,\r\nfieldset[disabled] .datepicker table tr td span.active:hover,\r\nfieldset[disabled] .datepicker table tr td span.active:hover:hover,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover:hover,\r\n.datepicker table tr td span.active.disabled:focus,\r\n.datepicker table tr td span.active:hover.disabled:focus,\r\n.datepicker table tr td span.active.disabled.disabled:focus,\r\n.datepicker table tr td span.active.disabled:hover.disabled:focus,\r\n.datepicker table tr td span.active[disabled]:focus,\r\n.datepicker table tr td span.active:hover[disabled]:focus,\r\n.datepicker table tr td span.active.disabled[disabled]:focus,\r\n.datepicker table tr td span.active.disabled:hover[disabled]:focus,\r\nfieldset[disabled] .datepicker table tr td span.active:focus,\r\nfieldset[disabled] .datepicker table tr td span.active:hover:focus,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:focus,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover:focus,\r\n.datepicker table tr td span.active.disabled:active,\r\n.datepicker table tr td span.active:hover.disabled:active,\r\n.datepicker table tr td span.active.disabled.disabled:active,\r\n.datepicker table tr td span.active.disabled:hover.disabled:active,\r\n.datepicker table tr td span.active[disabled]:active,\r\n.datepicker table tr td span.active:hover[disabled]:active,\r\n.datepicker table tr td span.active.disabled[disabled]:active,\r\n.datepicker table tr td span.active.disabled:hover[disabled]:active,\r\nfieldset[disabled] .datepicker table tr td span.active:active,\r\nfieldset[disabled] .datepicker table tr td span.active:hover:active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover:active,\r\n.datepicker table tr td span.active.disabled.active,\r\n.datepicker table tr td span.active:hover.disabled.active,\r\n.datepicker table tr td span.active.disabled.disabled.active,\r\n.datepicker table tr td span.active.disabled:hover.disabled.active,\r\n.datepicker table tr td span.active[disabled].active,\r\n.datepicker table tr td span.active:hover[disabled].active,\r\n.datepicker table tr td span.active.disabled[disabled].active,\r\n.datepicker table tr td span.active.disabled:hover[disabled].active,\r\nfieldset[disabled] .datepicker table tr td span.active.active,\r\nfieldset[disabled] .datepicker table tr td span.active:hover.active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled.active,\r\nfieldset[disabled] .datepicker table tr td span.active.disabled:hover.active {\r\n  background-color: #428bca;\r\n  border-color: #357ebd;\r\n}\r\n.datepicker table tr td span.old,\r\n.datepicker table tr td span.new {\r\n  color: #444;\r\n}\r\n.datepicker th.datepicker-switch {\r\n  width: 145px;\r\n}\r\n.datepicker thead tr:first-child th,\r\n.datepicker tfoot tr th {\r\n  cursor: pointer;\r\n}\r\n.datepicker thead tr:first-child th:hover,\r\n.datepicker tfoot tr th:hover {\r\n  background: rgba(0,0,0,0.2);\r\n}\r\n.datepicker .cw {\r\n  font-size: 10px;\r\n  width: 12px;\r\n  padding: 0 2px 0 5px;\r\n  vertical-align: middle;\r\n}\r\n.datepicker thead tr:first-child th.cw {\r\n  cursor: default;\r\n  background-color: transparent;\r\n}\r\n.input-group.date .input-group-addon i {\r\n  cursor: pointer;\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n.input-daterange input {\r\n  text-align: center;\r\n}\r\n.input-daterange input:first-child {\r\n  border-radius: 3px 0 0 3px;\r\n}\r\n.input-daterange input:last-child {\r\n  border-radius: 0 3px 3px 0;\r\n}\r\n.input-daterange .input-group-addon {\r\n  width: auto;\r\n  min-width: 16px;\r\n  padding: 4px 5px;\r\n  font-weight: normal;\r\n  line-height: 1.428571429;\r\n  text-align: center;\r\n  text-shadow: 0 1px 0 #fff;\r\n  vertical-align: middle;\r\n  background-color: #eeeeee;\r\n  border: solid #cccccc;\r\n  border-width: 1px 0;\r\n  margin-left: -5px;\r\n  margin-right: -5px;\r\n}\r\n.datepicker.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  float: left;\r\n  display: none;\r\n  min-width: 160px;\r\n  list-style: none;\r\n  background-color: #ffffff;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n  -webkit-background-clip: padding-box;\r\n  -moz-background-clip: padding;\r\n  background-clip: padding-box;\r\n  *border-right-width: 2px;\r\n  *border-bottom-width: 2px;\r\n  color: #333333;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  line-height: 1.428571429;\r\n}\r\n.datepicker.dropdown-menu th,\r\n.datepicker.dropdown-menu td {\r\n  padding: 4px 5px;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n<input v-model=\"inputdate\" class=\"inputdate\" type=\"text\" value=\"\"/>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\subject-grade.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-005c4e2d/subject-grade.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	    template: '#subgradid',
	    props: ['singlist'],
	    data: function data() {
	        return {
	            subgradid: this.singlist[0]
	        };
	    },
	    methods: {
	        get: function get() {
	            console.log(this.singlist);
	            console.log(this.singlist[0]);
	        }
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<select  v-model=\"subgradid\" class=\"subgradid\" v-bind:value=\"subgradid\">\n    <option  v-for=\"singlistdata in singlist\">{{singlistdata}}</option>\n</select>\n";

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZXhhbU1hbmFnZV9zaW5nbGVFZGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0LWRhdGUudnVlIiwid2VicGFjazovLy9pbnB1dC1kYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2RhdGVwaWNrZXIzLmNzcz9hMjQzIiwid2VicGFjazovLy8uL2J1bmRsZS9wbHVnaW5zL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcjMuY3NzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2J1bmRsZS9wbHVnaW5zL2RhdGVwaWNrZXIvYm9vdHN0cmFwLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5wdXQtZGF0ZS52dWU/MzJiMSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdWJqZWN0LWdyYWRlLnZ1ZSIsIndlYnBhY2s6Ly8vc3ViamVjdC1ncmFkZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3ViamVjdC1ncmFkZS52dWU/MzBjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDZEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBK0Y7QUFDL0Y7QUFDQSxhQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQyxJOzs7Ozs7OztBQ2REO0FBQ0E7QUFDQTtlQUVBOzJCQUNBOzt3QkFHQTtBQUZBO0FBR0E7NkJBQ0E7dUJBQ0E7OzRCQUVBOzJCQUNBOzJCQUNBOzRCQUNBO3lCQUVBO0FBTkE7QUFPQTtBQUNBO0FBakJBLEc7Ozs7OztBQ1hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxvUUFBbVEsbUJBQW1CLHlCQUF5QixxQkFBcUIsY0FBYyw4Q0FBOEMsT0FBTyxPQUFPLHdCQUF3QixrQkFBa0IsS0FBSyxnQ0FBZ0MscUJBQXFCLEtBQUssaURBQWlELG1CQUFtQixLQUFLLDBCQUEwQixhQUFhLGNBQWMsS0FBSyxpQ0FBaUMsa0JBQWtCLDRCQUE0Qix5Q0FBeUMsMENBQTBDLG9DQUFvQyxvQkFBb0IsOENBQThDLHlCQUF5QixLQUFLLGdDQUFnQyxrQkFBa0IsNEJBQTRCLHlDQUF5QywwQ0FBMEMsb0NBQW9DLG9CQUFvQix5QkFBeUIsS0FBSyx3REFBd0QsZ0JBQWdCLEtBQUssdURBQXVELGdCQUFnQixLQUFLLHlEQUF5RCxpQkFBaUIsS0FBSyx3REFBd0QsaUJBQWlCLEtBQUssdURBQXVELGdCQUFnQixLQUFLLHNEQUFzRCxnQkFBZ0IsS0FBSywwREFBMEQsbUJBQW1CLHVCQUF1QixpQ0FBaUMsS0FBSyx5REFBeUQsbUJBQW1CLHVCQUF1QixpQ0FBaUMsS0FBSyx1QkFBdUIsb0JBQW9CLEtBQUssMENBQTBDLHFCQUFxQixLQUFLLDhDQUE4QyxxQkFBcUIsS0FBSyw0Q0FBNEMscUJBQXFCLEtBQUssdUJBQXVCLGdCQUFnQixrQ0FBa0MsZ0NBQWdDLCtCQUErQiw2QkFBNkIsNEJBQTRCLHdCQUF3QixLQUFLLHlEQUF5RCx5QkFBeUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsbUJBQW1CLEtBQUssdUZBQXVGLG9DQUFvQyxLQUFLLCtFQUErRSxrQ0FBa0Msc0JBQXNCLEtBQUssaUVBQWlFLGtCQUFrQixLQUFLLGlGQUFpRix1QkFBdUIsa0JBQWtCLHNCQUFzQixLQUFLLHVLQUF1SyxxQkFBcUIsa0NBQWtDLDRCQUE0QixLQUFLLCsvQkFBKy9CLHFCQUFxQixrQ0FBa0MsNEJBQTRCLEtBQUssbW9CQUFtb0IsNkJBQTZCLEtBQUssMitHQUEyK0csa0NBQWtDLDRCQUE0QixLQUFLLCtDQUErQyxrQkFBa0IsS0FBSyxnREFBZ0Qsa0JBQWtCLEtBQUssdUtBQXVLLGtDQUFrQyx1QkFBdUIsS0FBSywrTEFBK0wscUJBQXFCLGtDQUFrQyw0QkFBNEIsdUJBQXVCLEtBQUssdW5DQUF1bkMscUJBQXFCLGtDQUFrQyw0QkFBNEIsS0FBSywyc0JBQTJzQiw2QkFBNkIsS0FBSyxtMUhBQW0xSCxrQ0FBa0MsNEJBQTRCLEtBQUssbUxBQW1MLHFCQUFxQixrQ0FBa0MsNEJBQTRCLGdEQUFnRCxLQUFLLDJqQ0FBMmpDLHFCQUFxQixrQ0FBa0MsNEJBQTRCLEtBQUssdXFCQUF1cUIsNkJBQTZCLEtBQUssK3BIQUErcEgsa0NBQWtDLDRCQUE0QixLQUFLLDJLQUEySyxxQkFBcUIsa0NBQWtDLDRCQUE0QixnREFBZ0QsS0FBSyxtaENBQW1oQyxxQkFBcUIsa0NBQWtDLDRCQUE0QixLQUFLLCtvQkFBK29CLDZCQUE2QixLQUFLLHVpSEFBdWlILGdDQUFnQyw0QkFBNEIsS0FBSyxrQ0FBa0MscUJBQXFCLGlCQUFpQixtQkFBbUIsd0JBQXdCLGtCQUFrQixpQkFBaUIsc0JBQXNCLHlCQUF5QixLQUFLLHdDQUF3QyxrQ0FBa0MsS0FBSywyRkFBMkYsdUJBQXVCLGtCQUFrQixzQkFBc0IsS0FBSywrTEFBK0wscUJBQXFCLGdDQUFnQyw0QkFBNEIsZ0RBQWdELEtBQUssdW5DQUF1bkMscUJBQXFCLGdDQUFnQyw0QkFBNEIsS0FBSywyc0JBQTJzQiw2QkFBNkIsS0FBSyxtMUhBQW0xSCxnQ0FBZ0MsNEJBQTRCLEtBQUssMkVBQTJFLGtCQUFrQixLQUFLLHNDQUFzQyxtQkFBbUIsS0FBSyxxRUFBcUUsc0JBQXNCLEtBQUssaUZBQWlGLGtDQUFrQyxLQUFLLHFCQUFxQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsS0FBSyw0Q0FBNEMsc0JBQXNCLG9DQUFvQyxLQUFLLDRDQUE0QyxzQkFBc0Isa0JBQWtCLG1CQUFtQixLQUFLLDRCQUE0Qix5QkFBeUIsS0FBSyx3Q0FBd0MsaUNBQWlDLEtBQUssdUNBQXVDLGlDQUFpQyxLQUFLLHlDQUF5QyxrQkFBa0Isc0JBQXNCLHVCQUF1QiwwQkFBMEIsK0JBQStCLHlCQUF5QixnQ0FBZ0MsNkJBQTZCLGdDQUFnQyw0QkFBNEIsMEJBQTBCLHdCQUF3Qix5QkFBeUIsS0FBSywrQkFBK0IseUJBQXlCLGdCQUFnQixjQUFjLG9CQUFvQixrQkFBa0Isb0JBQW9CLHVCQUF1Qix1QkFBdUIsZ0NBQWdDLDZCQUE2QiwyQ0FBMkMseUJBQXlCLHdEQUF3RCxxREFBcUQsZ0RBQWdELDJDQUEyQyxvQ0FBb0MsbUNBQW1DLCtCQUErQixnQ0FBZ0MscUJBQXFCLG9FQUFvRSxzQkFBc0IsK0JBQStCLEtBQUssbUVBQW1FLHVCQUF1QixLQUFLOztBQUU5eW1DOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EseUNBQXdDLGdCQUFnQjtBQUN4RCxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0EsbUJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxTQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBLGlDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RDtBQUN2RDs7QUFFQSw4QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTs7O0FBR0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXdCO0FBQ3hCO0FBQ0EsZ0NBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLHFCQUFvQjtBQUNwQjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLDZCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTixNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTixNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLEtBQUk7QUFDSixJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHOztBQUVIO0FBQ0EsMkJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBLDJCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQSwyQkFBMEIsdUNBQXVDO0FBQ2pFO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxvQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBLHNDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBLHNDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBLHNDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBLHNDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBLHNDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBLHNDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQSxvQ0FBbUMsWUFBWSxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0I7QUFDeEI7QUFDQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLCtDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLDBCQUEwQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxVQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGLEVBQUM7Ozs7Ozs7QUN0b0RELG9HOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUErRjtBQUMvRjtBQUNBLGFBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDLEk7Ozs7Ozs7O0FDWEQ7ZUFFQTthQUNBOzJCQUNBOztzQ0FHQTtBQUZBO0FBR0E7OzZCQUVBOzhCQUNBO3VDQUNBO0FBRUE7QUFMQTtBQVJBLEc7Ozs7OztBQ1pBLHVKQUFzSixjQUFjLHdCIiwiZmlsZSI6ImV4YW1NYW5hZ2Vfc2luZ2xlRWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiB2YXIgaW5wdXRkYXRhID0gcmVxdWlyZShcImlucHV0LWRhdGUudnVlXCIpO1xyXG4gdmFyIHN1YmdyYWRpZCA9IHJlcXVpcmUoXCJzdWJqZWN0LWdyYWRlLnZ1ZVwiKTtcclxuIHZhciBzdWJnZGF0YT1bJ+ivreaWhycsJ+aVsOWtpicsJ+iLseivrScsJ+eJqeeQhicsJ+WMluWtpicsJ+WcsOeQhicsJ+WOhuWPsicsJ+aUv+ayuycsJ+eUn+eJqScsJ+enkeWtpicsJ+eQhue7vCcsJ+aWh+e7vCcsJ+WOhuWPsuS4juekvuS8micsJ+WlpeaVsCddO1xyXG4gdmFyIGdyYWRjbGFzcz1bJ+WFqOmDqCcsJ+S4gOW5tOe6pycsJ+S6jOW5tOe6pycsJ+S4ieW5tOe6pycsJ+Wbm+W5tOe6pycsJ+S6lOW5tOe6pycsJ+WFreW5tOe6pycsJ+S4g+W5tOe6pycsJ+WFq+W5tOe6pycsJ+S5neW5tOe6pycsJ+mrmOS4gCcsJ+mrmOS6jCddO1xyXG52YXIgaW5kZXggPSBuZXcgVnVlKHtcclxuICAgIGVsOiBcIi5zaW5naGVhZGVyXCIsXHJcbiAgICBkYXRhOntcclxuICAgICAgICBzdWJqY3RsaXN0OnN1YmdkYXRhLFxyXG4gICAgICAgIGdyYWRsaXN0OmdyYWRjbGFzc1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6e1xyXG4gICAgICAgIFwiaW5wdXRkYXRlXCI6IGlucHV0ZGF0YSxcclxuICAgICAgICBcInN1YmdyYWRpZFwiOiBzdWJncmFkaWRcclxuICAgIH1cclxufSk7XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvZXhhbU1hbmFnZV9zaW5nbGVFZGl0LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIF9fdnVlX3NjcmlwdF9fLCBfX3Z1ZV90ZW1wbGF0ZV9fXG5fX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109ZXMyMDE1JnBsdWdpbnNbXT10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5wdXQtZGF0ZS52dWVcIilcbmlmIChfX3Z1ZV9zY3JpcHRfXyAmJlxuICAgIF9fdnVlX3NjcmlwdF9fLl9fZXNNb2R1bGUgJiZcbiAgICBPYmplY3Qua2V5cyhfX3Z1ZV9zY3JpcHRfXykubGVuZ3RoID4gMSkge1xuICBjb25zb2xlLndhcm4oXCJbdnVlLWxvYWRlcl0gc3JjXFxcXGNvbXBvbmVudHNcXFxcaW5wdXQtZGF0ZS52dWU6IG5hbWVkIGV4cG9ydHMgaW4gKi52dWUgZmlsZXMgYXJlIGlnbm9yZWQuXCIpfVxuX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1odG1sLWxvYWRlciEuLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnB1dC1kYXRlLnZ1ZVwiKVxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9zY3JpcHRfXyB8fCB7fVxuaWYgKG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUpIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdFxuaWYgKF9fdnVlX3RlbXBsYXRlX18pIHtcbih0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwiZnVuY3Rpb25cIiA/IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zIHx8IChtb2R1bGUuZXhwb3J0cy5vcHRpb25zID0ge30pKSA6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSA9IF9fdnVlX3RlbXBsYXRlX19cbn1cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHsgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICB2YXIgaWQgPSBcIl92LTNlYTVkMGFjL2lucHV0LWRhdGUudnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgX192dWVfdGVtcGxhdGVfXylcbiAgfVxufSkoKX1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvaW5wdXQtZGF0ZS52dWVcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCI8dGVtcGxhdGUgaWQ9XCJpbnB1dGRhdGVcIj5cclxuICAgIDxpbnB1dCB2LW1vZGVsPVwiaW5wdXRkYXRlXCIgY2xhc3M9XCJpbnB1dGRhdGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPCEtLSB2LeeahOWAvOW/hemhu+aYr+ihqOi+vuW8j+S4jeiDveaYr+W4puino+aekOeahOmCo+enjXt7fX0gIC0tPlxyXG48IS0t6K+35rGCYWpheOaVsOaNri0tPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIHJlcXVpcmUoJy4uLy4uL2J1bmRsZS9wbHVnaW5zL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcjMuY3NzJyk7XHJcbiAgICByZXF1aXJlKCcuLi8uLi9idW5kbGUvcGx1Z2lucy9kYXRlcGlja2VyL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmpzJyk7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICB0ZW1wbGF0ZTogJyNpbnB1dGRhdGUnLFxyXG4gICAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlucHV0ZGF0ZTonJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWFkeTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmlucHV0ZGF0ZVwiKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJCdG46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kYXlCdG46IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRWaWV3OjIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcInl5eXktbW0tZGRcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbjwvc2NyaXB0PlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGlucHV0LWRhdGUudnVlPzJlOGIyNGRhXG4gKiovIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9kYXRlcGlja2VyMy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZGF0ZXBpY2tlcjMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZGF0ZXBpY2tlcjMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYnVuZGxlL3BsdWdpbnMvZGF0ZXBpY2tlci9kYXRlcGlja2VyMy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgNVxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxyXFxuICogRGF0ZXBpY2tlciBmb3IgQm9vdHN0cmFwXFxyXFxuICpcXHJcXG4gKiBDb3B5cmlnaHQgMjAxMiBTdGVmYW4gUGV0cmVcXHJcXG4gKiBJbXByb3ZlbWVudHMgYnkgQW5kcmV3IFJvd2xzXFxyXFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIHYyLjBcXHJcXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXHJcXG4gKlxcclxcbiAqL1xcclxcbi5kYXRlcGlja2VyIHtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgLyouZG93IHtcXHJcXG5cXHRcXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZCAhaW1wb3J0YW50O1xcclxcblxcdH0qL1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci1pbmxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLmRhdGVwaWNrZXItcnRsIHtcXHJcXG4gIGRpcmVjdGlvbjogcnRsO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci5kYXRlcGlja2VyLXJ0bCB0YWJsZSB0ciB0ZCBzcGFuIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24ge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd246YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogN3B4IHNvbGlkICNjY2M7XFxyXFxuICBib3JkZXItdG9wOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci1kcm9wZG93bjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXRvcDogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24uZGF0ZXBpY2tlci1vcmllbnQtbGVmdDpiZWZvcmUge1xcclxcbiAgbGVmdDogNnB4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci1kcm9wZG93bi5kYXRlcGlja2VyLW9yaWVudC1sZWZ0OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDdweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24uZGF0ZXBpY2tlci1vcmllbnQtcmlnaHQ6YmVmb3JlIHtcXHJcXG4gIHJpZ2h0OiA2cHg7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duLmRhdGVwaWNrZXItb3JpZW50LXJpZ2h0OmFmdGVyIHtcXHJcXG4gIHJpZ2h0OiA3cHg7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLWRyb3Bkb3duLmRhdGVwaWNrZXItb3JpZW50LXRvcDpiZWZvcmUge1xcclxcbiAgdG9wOiAtN3B4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci1kcm9wZG93bi5kYXRlcGlja2VyLW9yaWVudC10b3A6YWZ0ZXIge1xcclxcbiAgdG9wOiAtNnB4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci1kcm9wZG93bi5kYXRlcGlja2VyLW9yaWVudC1ib3R0b206YmVmb3JlIHtcXHJcXG4gIGJvdHRvbTogLTdweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzk5OTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXItZHJvcGRvd24uZGF0ZXBpY2tlci1vcmllbnQtYm90dG9tOmFmdGVyIHtcXHJcXG4gIGJvdHRvbTogLTZweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDA7XFxyXFxuICBib3JkZXItdG9wOiA2cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgPiBkaXYge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIuZGF5cyBkaXYuZGF0ZXBpY2tlci1kYXlzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci5tb250aHMgZGl2LmRhdGVwaWNrZXItbW9udGhzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci55ZWFycyBkaXYuZGF0ZXBpY2tlci15ZWFycyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGgge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbi50YWJsZS1zdHJpcGVkIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLFxcclxcbi50YWJsZS1zdHJpcGVkIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRoIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5kYXk6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuZGF5LmZvY3VzZWQge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5vbGQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQubmV3IHtcXHJcXG4gIGNvbG9yOiAjNzc3O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZiNzMzO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2Y1OWUwMDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXksXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXlbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlci5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheVtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlcjpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5W2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5W2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5OmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXI6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXlbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC50b2RheTpob3Zlci5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmRpc2FibGVkLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXkuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmYjczMztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQudG9kYXk6aG92ZXI6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnRvZGF5LmFjdGl2ZTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2U6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXksXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICNmMWE0MTc7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2JmODAwYztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXksXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXlbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlci5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheVtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlcjpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5W2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWRbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5W2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXJbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZFtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5OmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXI6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXk6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXlbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3ZlcltkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5yYW5nZS50b2RheTpob3Zlci5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnJhbmdlLnRvZGF5LmRpc2FibGVkLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQucmFuZ2UudG9kYXkuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2YxYTQxNztcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICM1NTU1NTU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXI6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3Zlci5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICMzNzM3Mzc7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcltkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWRbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZCxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWRbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZFtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXI6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZC5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZFtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3Zlcjpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZFtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZDphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkOmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZC5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXJbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuc2VsZWN0ZWQ6aG92ZXIuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5zZWxlY3RlZC5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLnNlbGVjdGVkLmRpc2FibGVkOmhvdmVyLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICBib3JkZXItY29sb3I6ICM1NTU1NTU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzM1N2ViZDtcXHJcXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMjg1ZThlO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZC5kaXNhYmxlZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXJbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmVbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlcjpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZVtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZVtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmU6aG92ZXI6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQ6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZC5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQuYWN0aXZlLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZTpob3Zlci5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzM1N2ViZDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAyMyU7XFxyXFxuICBoZWlnaHQ6IDU0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogNTRweDtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgbWFyZ2luOiAxJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uZGlzYWJsZWQsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyOGJjYTtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzM1N2ViZDtcXHJcXG4gIHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlcjpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZSxcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjc2YjE7XFxyXFxuICBib3JkZXItY29sb3I6ICMyODVlOGU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5hY3RpdmUsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLFxcclxcbi5vcGVuIC5kcm9wZG93bi10b2dnbGUuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcixcXHJcXG4ub3BlbiAuZHJvcGRvd24tdG9nZ2xlLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQsXFxyXFxuLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZS5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlW2Rpc2FibGVkXSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcltkaXNhYmxlZF0sXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZCxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmVbZGlzYWJsZWRdOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyW2Rpc2FibGVkXTpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF06aG92ZXIsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXJbZGlzYWJsZWRdOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3ZlcixcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXI6aG92ZXIsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlcjpob3ZlcixcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZC5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3Zlci5kaXNhYmxlZDpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZVtkaXNhYmxlZF06Zm9jdXMsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXJbZGlzYWJsZWRdOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkW2Rpc2FibGVkXTpmb2N1cyxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmZvY3VzLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlcjpmb2N1cyxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6Zm9jdXMsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyOmZvY3VzLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTpob3Zlci5kaXNhYmxlZDphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLmRpc2FibGVkOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZVtkaXNhYmxlZF06YWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyW2Rpc2FibGVkXTphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWRbZGlzYWJsZWRdOmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcltkaXNhYmxlZF06YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZTphY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyOmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6YWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZDpob3ZlcjphY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlOmhvdmVyLmRpc2FibGVkLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZC5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmUuZGlzYWJsZWQ6aG92ZXIuZGlzYWJsZWQuYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXJbZGlzYWJsZWRdLmFjdGl2ZSxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZFtkaXNhYmxlZF0uYWN0aXZlLFxcclxcbi5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyW2Rpc2FibGVkXS5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmFjdGl2ZSxcXHJcXG5maWVsZHNldFtkaXNhYmxlZF0gLmRhdGVwaWNrZXIgdGFibGUgdHIgdGQgc3Bhbi5hY3RpdmU6aG92ZXIuYWN0aXZlLFxcclxcbmZpZWxkc2V0W2Rpc2FibGVkXSAuZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLmFjdGl2ZS5kaXNhYmxlZC5hY3RpdmUsXFxyXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5kYXRlcGlja2VyIHRhYmxlIHRyIHRkIHNwYW4uYWN0aXZlLmRpc2FibGVkOmhvdmVyLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4YmNhO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMzU3ZWJkO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLm9sZCxcXHJcXG4uZGF0ZXBpY2tlciB0YWJsZSB0ciB0ZCBzcGFuLm5ldyB7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgdGguZGF0ZXBpY2tlci1zd2l0Y2gge1xcclxcbiAgd2lkdGg6IDE0NXB4O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aCxcXHJcXG4uZGF0ZXBpY2tlciB0Zm9vdCB0ciB0aCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyIHRoZWFkIHRyOmZpcnN0LWNoaWxkIHRoOmhvdmVyLFxcclxcbi5kYXRlcGlja2VyIHRmb290IHRyIHRoOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG59XFxyXFxuLmRhdGVwaWNrZXIgLmN3IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIHdpZHRoOiAxMnB4O1xcclxcbiAgcGFkZGluZzogMCAycHggMCA1cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlciB0aGVhZCB0cjpmaXJzdC1jaGlsZCB0aC5jdyB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLmlucHV0LWdyb3VwLmRhdGUgLmlucHV0LWdyb3VwLWFkZG9uIGkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcbi5pbnB1dC1kYXRlcmFuZ2UgaW5wdXQge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uaW5wdXQtZGF0ZXJhbmdlIGlucHV0OmZpcnN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xcclxcbn1cXHJcXG4uaW5wdXQtZGF0ZXJhbmdlIGlucHV0Omxhc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxyXFxufVxcclxcbi5pbnB1dC1kYXRlcmFuZ2UgLmlucHV0LWdyb3VwLWFkZG9uIHtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWluLXdpZHRoOiAxNnB4O1xcclxcbiAgcGFkZGluZzogNHB4IDVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxyXFxuICBib3JkZXI6IHNvbGlkICNjY2NjY2M7XFxyXFxuICBib3JkZXItd2lkdGg6IDFweCAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC01cHg7XFxyXFxufVxcclxcbi5kYXRlcGlja2VyLmRyb3Bkb3duLW1lbnUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBtaW4td2lkdGg6IDE2MHB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gICpib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcXHJcXG4gICpib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxyXFxuICBjb2xvcjogIzMzMzMzMztcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xcclxcbn1cXHJcXG4uZGF0ZXBpY2tlci5kcm9wZG93bi1tZW51IHRoLFxcclxcbi5kYXRlcGlja2VyLmRyb3Bkb3duLW1lbnUgdGQge1xcclxcbiAgcGFkZGluZzogNHB4IDVweDtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlciEuL2J1bmRsZS9wbHVnaW5zL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcjMuY3NzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDVcbiAqKi8iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgNSA2IDcgOCA5XG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxudmFyIHN0eWxlc0luRG9tID0ge30sXHJcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHR2YXIgbWVtbztcclxuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdHJldHVybiBtZW1vO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdH0pLFxyXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XHJcblx0fSksXHJcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXHJcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXHJcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xyXG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xyXG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XHJcblx0fVxyXG5cclxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cclxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XHJcblxyXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXHJcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcclxuXHJcblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcclxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XHJcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdH1cclxuXHRcdGlmKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xyXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XHJcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcclxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdGlmKGRvbVN0eWxlKSB7XHJcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gW107XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xyXG5cdHZhciBzdHlsZXMgPSBbXTtcclxuXHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcclxuXHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcclxuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XHJcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcclxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxyXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XHJcblx0fVxyXG5cdHJldHVybiBzdHlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcclxuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XHJcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcclxuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xyXG5cdFx0XHRoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHR9XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XHJcblx0aWYoaWR4ID49IDApIHtcclxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xyXG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xyXG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcclxuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xyXG5cdHJldHVybiBsaW5rRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xyXG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcclxuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXHJcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxyXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xyXG5cdFx0fTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlKG9iaik7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcclxuXHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xyXG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XHJcblx0fTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcclxuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XHJcblxyXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHJcblx0aWYobWVkaWEpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHR9XHJcblxyXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcblxyXG5cdGlmKHNvdXJjZU1hcCkge1xyXG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcclxuXHR9XHJcblxyXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcclxuXHJcblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGlmKG9sZFNyYylcclxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcclxufVxyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxIDUgNyA4IDlcbiAqKi8iLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogYm9vdHN0cmFwLWRhdGVwaWNrZXIuanNcclxuICogUmVwbzogaHR0cHM6Ly9naXRodWIuY29tL2V0ZXJuaWNvZGUvYm9vdHN0cmFwLWRhdGVwaWNrZXIvXHJcbiAqIERlbW86IGh0dHA6Ly9ldGVybmljb2RlLmdpdGh1Yi5pby9ib290c3RyYXAtZGF0ZXBpY2tlci9cclxuICogRG9jczogaHR0cDovL2Jvb3RzdHJhcC1kYXRlcGlja2VyLnJlYWR0aGVkb2NzLm9yZy9cclxuICogRm9ya2VkIGZyb20gaHR0cDovL3d3dy5leWVjb24ucm8vYm9vdHN0cmFwLWRhdGVwaWNrZXJcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIFN0YXJ0ZWQgYnkgU3RlZmFuIFBldHJlOyBpbXByb3ZlbWVudHMgYnkgQW5kcmV3IFJvd2xzICsgY29udHJpYnV0b3JzXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuKGZ1bmN0aW9uKCQsIHVuZGVmaW5lZCl7XHJcblxyXG5cdHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuXHRmdW5jdGlvbiBVVENEYXRlKCl7XHJcblx0XHRyZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkoRGF0ZSwgYXJndW1lbnRzKSk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIFVUQ1RvZGF5KCl7XHJcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0cmV0dXJuIFVUQ0RhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpKTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gYWxpYXMobWV0aG9kKXtcclxuXHRcdHJldHVybiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gdGhpc1ttZXRob2RdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dmFyIERhdGVBcnJheSA9IChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGV4dHJhcyA9IHtcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbihpKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zbGljZShpKVswXTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGFpbnM6IGZ1bmN0aW9uKGQpe1xyXG5cdFx0XHRcdC8vIEFycmF5LmluZGV4T2YgaXMgbm90IGNyb3NzLWJyb3dzZXI7XHJcblx0XHRcdFx0Ly8gJC5pbkFycmF5IGRvZXNuJ3Qgd29yayB3aXRoIERhdGVzXHJcblx0XHRcdFx0dmFyIHZhbCA9IGQgJiYgZC52YWx1ZU9mKCk7XHJcblx0XHRcdFx0Zm9yICh2YXIgaT0wLCBsPXRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKVxyXG5cdFx0XHRcdFx0aWYgKHRoaXNbaV0udmFsdWVPZigpID09PSB2YWwpXHJcblx0XHRcdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbihpKXtcclxuXHRcdFx0XHR0aGlzLnNwbGljZShpLDEpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXBsYWNlOiBmdW5jdGlvbihuZXdfYXJyYXkpe1xyXG5cdFx0XHRcdGlmICghbmV3X2FycmF5KVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdGlmICghJC5pc0FycmF5KG5ld19hcnJheSkpXHJcblx0XHRcdFx0XHRuZXdfYXJyYXkgPSBbbmV3X2FycmF5XTtcclxuXHRcdFx0XHR0aGlzLmNsZWFyKCk7XHJcblx0XHRcdFx0dGhpcy5wdXNoLmFwcGx5KHRoaXMsIG5ld19hcnJheSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNsZWFyOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHRoaXMuc3BsaWNlKDApO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb3B5OiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciBhID0gbmV3IERhdGVBcnJheSgpO1xyXG5cdFx0XHRcdGEucmVwbGFjZSh0aGlzKTtcclxuXHRcdFx0XHRyZXR1cm4gYTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGEgPSBbXTtcclxuXHRcdFx0YS5wdXNoLmFwcGx5KGEsIGFyZ3VtZW50cyk7XHJcblx0XHRcdCQuZXh0ZW5kKGEsIGV4dHJhcyk7XHJcblx0XHRcdHJldHVybiBhO1xyXG5cdFx0fTtcclxuXHR9KSgpO1xyXG5cclxuXHJcblx0Ly8gUGlja2VyIG9iamVjdFxyXG5cclxuXHR2YXIgRGF0ZXBpY2tlciA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpe1xyXG5cdFx0dGhpcy5kYXRlcyA9IG5ldyBEYXRlQXJyYXkoKTtcclxuXHRcdHRoaXMudmlld0RhdGUgPSBVVENUb2RheSgpO1xyXG5cdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyhvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLmVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG5cdFx0dGhpcy5pc0lubGluZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pc0lucHV0ID0gdGhpcy5lbGVtZW50LmlzKCdpbnB1dCcpO1xyXG5cdFx0dGhpcy5jb21wb25lbnQgPSB0aGlzLmVsZW1lbnQuaXMoJy5kYXRlJykgPyB0aGlzLmVsZW1lbnQuZmluZCgnLmFkZC1vbiwgLmlucHV0LWdyb3VwLWFkZG9uLCAuYnRuJykgOiBmYWxzZTtcclxuXHRcdHRoaXMuaGFzSW5wdXQgPSB0aGlzLmNvbXBvbmVudCAmJiB0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXQnKS5sZW5ndGg7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQgJiYgdGhpcy5jb21wb25lbnQubGVuZ3RoID09PSAwKVxyXG5cdFx0XHR0aGlzLmNvbXBvbmVudCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMucGlja2VyID0gJChEUEdsb2JhbC50ZW1wbGF0ZSk7XHJcblx0XHR0aGlzLl9idWlsZEV2ZW50cygpO1xyXG5cdFx0dGhpcy5fYXR0YWNoRXZlbnRzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuaXNJbmxpbmUpe1xyXG5cdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1pbmxpbmUnKS5hcHBlbmRUbyh0aGlzLmVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLWRyb3Bkb3duIGRyb3Bkb3duLW1lbnUnKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5vLnJ0bCl7XHJcblx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLXJ0bCcpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmlld01vZGUgPSB0aGlzLm8uc3RhcnRWaWV3O1xyXG5cclxuXHRcdGlmICh0aGlzLm8uY2FsZW5kYXJXZWVrcylcclxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgndGZvb3QgdGgudG9kYXknKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY29sc3BhbicsIGZ1bmN0aW9uKGksIHZhbCl7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KHZhbCkgKyAxO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHR0aGlzLl9hbGxvd191cGRhdGUgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXJ0RGF0ZSh0aGlzLl9vLnN0YXJ0RGF0ZSk7XHJcblx0XHR0aGlzLnNldEVuZERhdGUodGhpcy5fby5lbmREYXRlKTtcclxuXHRcdHRoaXMuc2V0RGF5c09mV2Vla0Rpc2FibGVkKHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpO1xyXG5cclxuXHRcdHRoaXMuZmlsbERvdygpO1xyXG5cdFx0dGhpcy5maWxsTW9udGhzKCk7XHJcblxyXG5cdFx0dGhpcy5fYWxsb3dfdXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0dGhpcy5zaG93TW9kZSgpO1xyXG5cclxuXHRcdGlmICh0aGlzLmlzSW5saW5lKXtcclxuXHRcdFx0dGhpcy5zaG93KCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0RGF0ZXBpY2tlci5wcm90b3R5cGUgPSB7XHJcblx0XHRjb25zdHJ1Y3RvcjogRGF0ZXBpY2tlcixcclxuXHJcblx0XHRfcHJvY2Vzc19vcHRpb25zOiBmdW5jdGlvbihvcHRzKXtcclxuXHRcdFx0Ly8gU3RvcmUgcmF3IG9wdGlvbnMgZm9yIHJlZmVyZW5jZVxyXG5cdFx0XHR0aGlzLl9vID0gJC5leHRlbmQoe30sIHRoaXMuX28sIG9wdHMpO1xyXG5cdFx0XHQvLyBQcm9jZXNzZWQgb3B0aW9uc1xyXG5cdFx0XHR2YXIgbyA9IHRoaXMubyA9ICQuZXh0ZW5kKHt9LCB0aGlzLl9vKTtcclxuXHJcblx0XHRcdC8vIENoZWNrIGlmIFwiZGUtREVcIiBzdHlsZSBkYXRlIGlzIGF2YWlsYWJsZSwgaWYgbm90IGxhbmd1YWdlIHNob3VsZFxyXG5cdFx0XHQvLyBmYWxsYmFjayB0byAyIGxldHRlciBjb2RlIGVnIFwiZGVcIlxyXG5cdFx0XHR2YXIgbGFuZyA9IG8ubGFuZ3VhZ2U7XHJcblx0XHRcdGlmICghZGF0ZXNbbGFuZ10pe1xyXG5cdFx0XHRcdGxhbmcgPSBsYW5nLnNwbGl0KCctJylbMF07XHJcblx0XHRcdFx0aWYgKCFkYXRlc1tsYW5nXSlcclxuXHRcdFx0XHRcdGxhbmcgPSBkZWZhdWx0cy5sYW5ndWFnZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRvLmxhbmd1YWdlID0gbGFuZztcclxuXHJcblx0XHRcdHN3aXRjaCAoby5zdGFydFZpZXcpe1xyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRjYXNlICdkZWNhZGUnOlxyXG5cdFx0XHRcdFx0by5zdGFydFZpZXcgPSAyO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdGNhc2UgJ3llYXInOlxyXG5cdFx0XHRcdFx0by5zdGFydFZpZXcgPSAxO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdG8uc3RhcnRWaWV3ID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpdGNoIChvLm1pblZpZXdNb2RlKXtcclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0Y2FzZSAnbW9udGhzJzpcclxuXHRcdFx0XHRcdG8ubWluVmlld01vZGUgPSAxO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdGNhc2UgJ3llYXJzJzpcclxuXHRcdFx0XHRcdG8ubWluVmlld01vZGUgPSAyO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdG8ubWluVmlld01vZGUgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRvLnN0YXJ0VmlldyA9IE1hdGgubWF4KG8uc3RhcnRWaWV3LCBvLm1pblZpZXdNb2RlKTtcclxuXHJcblx0XHRcdC8vIHRydWUsIGZhbHNlLCBvciBOdW1iZXIgPiAwXHJcblx0XHRcdGlmIChvLm11bHRpZGF0ZSAhPT0gdHJ1ZSl7XHJcblx0XHRcdFx0by5tdWx0aWRhdGUgPSBOdW1iZXIoby5tdWx0aWRhdGUpIHx8IGZhbHNlO1xyXG5cdFx0XHRcdGlmIChvLm11bHRpZGF0ZSAhPT0gZmFsc2UpXHJcblx0XHRcdFx0XHRvLm11bHRpZGF0ZSA9IE1hdGgubWF4KDAsIG8ubXVsdGlkYXRlKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRvLm11bHRpZGF0ZSA9IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0by5tdWx0aWRhdGVTZXBhcmF0b3IgPSBTdHJpbmcoby5tdWx0aWRhdGVTZXBhcmF0b3IpO1xyXG5cclxuXHRcdFx0by53ZWVrU3RhcnQgJT0gNztcclxuXHRcdFx0by53ZWVrRW5kID0gKChvLndlZWtTdGFydCArIDYpICUgNyk7XHJcblxyXG5cdFx0XHR2YXIgZm9ybWF0ID0gRFBHbG9iYWwucGFyc2VGb3JtYXQoby5mb3JtYXQpO1xyXG5cdFx0XHRpZiAoby5zdGFydERhdGUgIT09IC1JbmZpbml0eSl7XHJcblx0XHRcdFx0aWYgKCEhby5zdGFydERhdGUpe1xyXG5cdFx0XHRcdFx0aWYgKG8uc3RhcnREYXRlIGluc3RhbmNlb2YgRGF0ZSlcclxuXHRcdFx0XHRcdFx0by5zdGFydERhdGUgPSB0aGlzLl9sb2NhbF90b191dGModGhpcy5femVyb190aW1lKG8uc3RhcnREYXRlKSk7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdG8uc3RhcnREYXRlID0gRFBHbG9iYWwucGFyc2VEYXRlKG8uc3RhcnREYXRlLCBmb3JtYXQsIG8ubGFuZ3VhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdG8uc3RhcnREYXRlID0gLUluZmluaXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoby5lbmREYXRlICE9PSBJbmZpbml0eSl7XHJcblx0XHRcdFx0aWYgKCEhby5lbmREYXRlKXtcclxuXHRcdFx0XHRcdGlmIChvLmVuZERhdGUgaW5zdGFuY2VvZiBEYXRlKVxyXG5cdFx0XHRcdFx0XHRvLmVuZERhdGUgPSB0aGlzLl9sb2NhbF90b191dGModGhpcy5femVyb190aW1lKG8uZW5kRGF0ZSkpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRvLmVuZERhdGUgPSBEUEdsb2JhbC5wYXJzZURhdGUoby5lbmREYXRlLCBmb3JtYXQsIG8ubGFuZ3VhZ2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdG8uZW5kRGF0ZSA9IEluZmluaXR5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0by5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBvLmRheXNPZldlZWtEaXNhYmxlZHx8W107XHJcblx0XHRcdGlmICghJC5pc0FycmF5KG8uZGF5c09mV2Vla0Rpc2FibGVkKSlcclxuXHRcdFx0XHRvLmRheXNPZldlZWtEaXNhYmxlZCA9IG8uZGF5c09mV2Vla0Rpc2FibGVkLnNwbGl0KC9bLFxcc10qLyk7XHJcblx0XHRcdG8uZGF5c09mV2Vla0Rpc2FibGVkID0gJC5tYXAoby5kYXlzT2ZXZWVrRGlzYWJsZWQsIGZ1bmN0aW9uKGQpe1xyXG5cdFx0XHRcdHJldHVybiBwYXJzZUludChkLCAxMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dmFyIHBsYyA9IFN0cmluZyhvLm9yaWVudGF0aW9uKS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrL2cpLFxyXG5cdFx0XHRcdF9wbGMgPSBvLm9yaWVudGF0aW9uLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdHBsYyA9ICQuZ3JlcChwbGMsIGZ1bmN0aW9uKHdvcmQpe1xyXG5cdFx0XHRcdHJldHVybiAoL15hdXRvfGxlZnR8cmlnaHR8dG9wfGJvdHRvbSQvKS50ZXN0KHdvcmQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0by5vcmllbnRhdGlvbiA9IHt4OiAnYXV0bycsIHk6ICdhdXRvJ307XHJcblx0XHRcdGlmICghX3BsYyB8fCBfcGxjID09PSAnYXV0bycpXHJcblx0XHRcdFx0OyAvLyBubyBhY3Rpb25cclxuXHRcdFx0ZWxzZSBpZiAocGxjLmxlbmd0aCA9PT0gMSl7XHJcblx0XHRcdFx0c3dpdGNoIChwbGNbMF0pe1xyXG5cdFx0XHRcdFx0Y2FzZSAndG9wJzpcclxuXHRcdFx0XHRcdGNhc2UgJ2JvdHRvbSc6XHJcblx0XHRcdFx0XHRcdG8ub3JpZW50YXRpb24ueSA9IHBsY1swXTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdsZWZ0JzpcclxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0by5vcmllbnRhdGlvbi54ID0gcGxjWzBdO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0X3BsYyA9ICQuZ3JlcChwbGMsIGZ1bmN0aW9uKHdvcmQpe1xyXG5cdFx0XHRcdFx0cmV0dXJuICgvXmxlZnR8cmlnaHQkLykudGVzdCh3b3JkKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRvLm9yaWVudGF0aW9uLnggPSBfcGxjWzBdIHx8ICdhdXRvJztcclxuXHJcblx0XHRcdFx0X3BsYyA9ICQuZ3JlcChwbGMsIGZ1bmN0aW9uKHdvcmQpe1xyXG5cdFx0XHRcdFx0cmV0dXJuICgvXnRvcHxib3R0b20kLykudGVzdCh3b3JkKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRvLm9yaWVudGF0aW9uLnkgPSBfcGxjWzBdIHx8ICdhdXRvJztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdF9ldmVudHM6IFtdLFxyXG5cdFx0X3NlY29uZGFyeUV2ZW50czogW10sXHJcblx0XHRfYXBwbHlFdmVudHM6IGZ1bmN0aW9uKGV2cyl7XHJcblx0XHRcdGZvciAodmFyIGk9MCwgZWwsIGNoLCBldjsgaSA8IGV2cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0ZWwgPSBldnNbaV1bMF07XHJcblx0XHRcdFx0aWYgKGV2c1tpXS5sZW5ndGggPT09IDIpe1xyXG5cdFx0XHRcdFx0Y2ggPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRldiA9IGV2c1tpXVsxXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMyl7XHJcblx0XHRcdFx0XHRjaCA9IGV2c1tpXVsxXTtcclxuXHRcdFx0XHRcdGV2ID0gZXZzW2ldWzJdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbC5vbihldiwgY2gpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0X3VuYXBwbHlFdmVudHM6IGZ1bmN0aW9uKGV2cyl7XHJcblx0XHRcdGZvciAodmFyIGk9MCwgZWwsIGV2LCBjaDsgaSA8IGV2cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0ZWwgPSBldnNbaV1bMF07XHJcblx0XHRcdFx0aWYgKGV2c1tpXS5sZW5ndGggPT09IDIpe1xyXG5cdFx0XHRcdFx0Y2ggPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRldiA9IGV2c1tpXVsxXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoZXZzW2ldLmxlbmd0aCA9PT0gMyl7XHJcblx0XHRcdFx0XHRjaCA9IGV2c1tpXVsxXTtcclxuXHRcdFx0XHRcdGV2ID0gZXZzW2ldWzJdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbC5vZmYoZXYsIGNoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdF9idWlsZEV2ZW50czogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYgKHRoaXMuaXNJbnB1dCl7IC8vIHNpbmdsZSBpbnB1dFxyXG5cdFx0XHRcdHRoaXMuX2V2ZW50cyA9IFtcclxuXHRcdFx0XHRcdFt0aGlzLmVsZW1lbnQsIHtcclxuXHRcdFx0XHRcdFx0Zm9jdXM6ICQucHJveHkodGhpcy5zaG93LCB0aGlzKSxcclxuXHRcdFx0XHRcdFx0a2V5dXA6ICQucHJveHkoZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCQuaW5BcnJheShlLmtleUNvZGUsIFsyNywzNywzOSwzOCw0MCwzMiwxMyw5XSkgPT09IC0xKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcclxuXHRcdFx0XHRcdFx0fSwgdGhpcyksXHJcblx0XHRcdFx0XHRcdGtleWRvd246ICQucHJveHkodGhpcy5rZXlkb3duLCB0aGlzKVxyXG5cdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuY29tcG9uZW50ICYmIHRoaXMuaGFzSW5wdXQpeyAvLyBjb21wb25lbnQ6IGlucHV0ICsgYnV0dG9uXHJcblx0XHRcdFx0dGhpcy5fZXZlbnRzID0gW1xyXG5cdFx0XHRcdFx0Ly8gRm9yIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IHJlYWRvbmx5LCBhbGxvdyBrZXlib2FyZCBuYXZcclxuXHRcdFx0XHRcdFt0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXQnKSwge1xyXG5cdFx0XHRcdFx0XHRmb2N1czogJC5wcm94eSh0aGlzLnNob3csIHRoaXMpLFxyXG5cdFx0XHRcdFx0XHRrZXl1cDogJC5wcm94eShmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRcdFx0XHRpZiAoJC5pbkFycmF5KGUua2V5Q29kZSwgWzI3LDM3LDM5LDM4LDQwLDMyLDEzLDldKSA9PT0gLTEpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0XHRcdFx0a2V5ZG93bjogJC5wcm94eSh0aGlzLmtleWRvd24sIHRoaXMpXHJcblx0XHRcdFx0XHR9XSxcclxuXHRcdFx0XHRcdFt0aGlzLmNvbXBvbmVudCwge1xyXG5cdFx0XHRcdFx0XHRjbGljazogJC5wcm94eSh0aGlzLnNob3csIHRoaXMpXHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdF07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5lbGVtZW50LmlzKCdkaXYnKSl7ICAvLyBpbmxpbmUgZGF0ZXBpY2tlclxyXG5cdFx0XHRcdHRoaXMuaXNJbmxpbmUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX2V2ZW50cyA9IFtcclxuXHRcdFx0XHRcdFt0aGlzLmVsZW1lbnQsIHtcclxuXHRcdFx0XHRcdFx0Y2xpY2s6ICQucHJveHkodGhpcy5zaG93LCB0aGlzKVxyXG5cdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRdO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2V2ZW50cy5wdXNoKFxyXG5cdFx0XHRcdC8vIENvbXBvbmVudDogbGlzdGVuIGZvciBibHVyIG9uIGVsZW1lbnQgZGVzY2VuZGFudHNcclxuXHRcdFx0XHRbdGhpcy5lbGVtZW50LCAnKicsIHtcclxuXHRcdFx0XHRcdGJsdXI6ICQucHJveHkoZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2ZvY3VzZWRfZnJvbSA9IGUudGFyZ2V0O1xyXG5cdFx0XHRcdFx0fSwgdGhpcylcclxuXHRcdFx0XHR9XSxcclxuXHRcdFx0XHQvLyBJbnB1dDogbGlzdGVuIGZvciBibHVyIG9uIGVsZW1lbnRcclxuXHRcdFx0XHRbdGhpcy5lbGVtZW50LCB7XHJcblx0XHRcdFx0XHRibHVyOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLl9mb2N1c2VkX2Zyb20gPSBlLnRhcmdldDtcclxuXHRcdFx0XHRcdH0sIHRoaXMpXHJcblx0XHRcdFx0fV1cclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRoaXMuX3NlY29uZGFyeUV2ZW50cyA9IFtcclxuXHRcdFx0XHRbdGhpcy5waWNrZXIsIHtcclxuXHRcdFx0XHRcdGNsaWNrOiAkLnByb3h5KHRoaXMuY2xpY2ssIHRoaXMpXHJcblx0XHRcdFx0fV0sXHJcblx0XHRcdFx0WyQod2luZG93KSwge1xyXG5cdFx0XHRcdFx0cmVzaXplOiAkLnByb3h5KHRoaXMucGxhY2UsIHRoaXMpXHJcblx0XHRcdFx0fV0sXHJcblx0XHRcdFx0WyQoZG9jdW1lbnQpLCB7XHJcblx0XHRcdFx0XHQnbW91c2Vkb3duIHRvdWNoc3RhcnQnOiAkLnByb3h5KGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdFx0XHQvLyBDbGlja2VkIG91dHNpZGUgdGhlIGRhdGVwaWNrZXIsIGhpZGUgaXRcclxuXHRcdFx0XHRcdFx0aWYgKCEoXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5lbGVtZW50LmlzKGUudGFyZ2V0KSB8fFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKGUudGFyZ2V0KS5sZW5ndGggfHxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5pcyhlLnRhcmdldCkgfHxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKGUudGFyZ2V0KS5sZW5ndGhcclxuXHRcdFx0XHRcdFx0KSl7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIHRoaXMpXHJcblx0XHRcdFx0fV1cclxuXHRcdFx0XTtcclxuXHRcdH0sXHJcblx0XHRfYXR0YWNoRXZlbnRzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5fYXBwbHlFdmVudHModGhpcy5fZXZlbnRzKTtcclxuXHRcdH0sXHJcblx0XHRfZGV0YWNoRXZlbnRzOiBmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLl91bmFwcGx5RXZlbnRzKHRoaXMuX2V2ZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0X2F0dGFjaFNlY29uZGFyeUV2ZW50czogZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCk7XHJcblx0XHRcdHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX3NlY29uZGFyeUV2ZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0X2RldGFjaFNlY29uZGFyeUV2ZW50czogZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5fdW5hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpO1xyXG5cdFx0fSxcclxuXHRcdF90cmlnZ2VyOiBmdW5jdGlvbihldmVudCwgYWx0ZGF0ZSl7XHJcblx0XHRcdHZhciBkYXRlID0gYWx0ZGF0ZSB8fCB0aGlzLmRhdGVzLmdldCgtMSksXHJcblx0XHRcdFx0bG9jYWxfZGF0ZSA9IHRoaXMuX3V0Y190b19sb2NhbChkYXRlKTtcclxuXHJcblx0XHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKHtcclxuXHRcdFx0XHR0eXBlOiBldmVudCxcclxuXHRcdFx0XHRkYXRlOiBsb2NhbF9kYXRlLFxyXG5cdFx0XHRcdGRhdGVzOiAkLm1hcCh0aGlzLmRhdGVzLCB0aGlzLl91dGNfdG9fbG9jYWwpLFxyXG5cdFx0XHRcdGZvcm1hdDogJC5wcm94eShmdW5jdGlvbihpeCwgZm9ybWF0KXtcclxuXHRcdFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKXtcclxuXHRcdFx0XHRcdFx0aXggPSB0aGlzLmRhdGVzLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0XHRcdGZvcm1hdCA9IHRoaXMuby5mb3JtYXQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgaXggPT09ICdzdHJpbmcnKXtcclxuXHRcdFx0XHRcdFx0Zm9ybWF0ID0gaXg7XHJcblx0XHRcdFx0XHRcdGl4ID0gdGhpcy5kYXRlcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zm9ybWF0ID0gZm9ybWF0IHx8IHRoaXMuby5mb3JtYXQ7XHJcblx0XHRcdFx0XHR2YXIgZGF0ZSA9IHRoaXMuZGF0ZXMuZ2V0KGl4KTtcclxuXHRcdFx0XHRcdHJldHVybiBEUEdsb2JhbC5mb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgdGhpcy5vLmxhbmd1YWdlKTtcclxuXHRcdFx0XHR9LCB0aGlzKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2hvdzogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYgKCF0aGlzLmlzSW5saW5lKVxyXG5cdFx0XHRcdHRoaXMucGlja2VyLmFwcGVuZFRvKCdib2R5Jyk7XHJcblx0XHRcdHRoaXMucGlja2VyLnNob3coKTtcclxuXHRcdFx0dGhpcy5wbGFjZSgpO1xyXG5cdFx0XHR0aGlzLl9hdHRhY2hTZWNvbmRhcnlFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5fdHJpZ2dlcignc2hvdycpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRoaWRlOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZiAodGhpcy5pc0lubGluZSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdGlmICghdGhpcy5waWNrZXIuaXMoJzp2aXNpYmxlJykpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IG51bGw7XHJcblx0XHRcdHRoaXMucGlja2VyLmhpZGUoKS5kZXRhY2goKTtcclxuXHRcdFx0dGhpcy5fZGV0YWNoU2Vjb25kYXJ5RXZlbnRzKCk7XHJcblx0XHRcdHRoaXMudmlld01vZGUgPSB0aGlzLm8uc3RhcnRWaWV3O1xyXG5cdFx0XHR0aGlzLnNob3dNb2RlKCk7XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5vLmZvcmNlUGFyc2UgJiZcclxuXHRcdFx0XHQoXHJcblx0XHRcdFx0XHR0aGlzLmlzSW5wdXQgJiYgdGhpcy5lbGVtZW50LnZhbCgpIHx8XHJcblx0XHRcdFx0XHR0aGlzLmhhc0lucHV0ICYmIHRoaXMuZWxlbWVudC5maW5kKCdpbnB1dCcpLnZhbCgpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHRcdFx0dGhpcy5zZXRWYWx1ZSgpO1xyXG5cdFx0XHR0aGlzLl90cmlnZ2VyKCdoaWRlJyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbW92ZTogZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5oaWRlKCk7XHJcblx0XHRcdHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG5cdFx0XHR0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKTtcclxuXHRcdFx0dGhpcy5waWNrZXIucmVtb3ZlKCk7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGVwaWNrZXI7XHJcblx0XHRcdGlmICghdGhpcy5pc0lucHV0KXtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdF91dGNfdG9fbG9jYWw6IGZ1bmN0aW9uKHV0Yyl7XHJcblx0XHRcdHJldHVybiB1dGMgJiYgbmV3IERhdGUodXRjLmdldFRpbWUoKSArICh1dGMuZ2V0VGltZXpvbmVPZmZzZXQoKSo2MDAwMCkpO1xyXG5cdFx0fSxcclxuXHRcdF9sb2NhbF90b191dGM6IGZ1bmN0aW9uKGxvY2FsKXtcclxuXHRcdFx0cmV0dXJuIGxvY2FsICYmIG5ldyBEYXRlKGxvY2FsLmdldFRpbWUoKSAtIChsb2NhbC5nZXRUaW1lem9uZU9mZnNldCgpKjYwMDAwKSk7XHJcblx0XHR9LFxyXG5cdFx0X3plcm9fdGltZTogZnVuY3Rpb24obG9jYWwpe1xyXG5cdFx0XHRyZXR1cm4gbG9jYWwgJiYgbmV3IERhdGUobG9jYWwuZ2V0RnVsbFllYXIoKSwgbG9jYWwuZ2V0TW9udGgoKSwgbG9jYWwuZ2V0RGF0ZSgpKTtcclxuXHRcdH0sXHJcblx0XHRfemVyb191dGNfdGltZTogZnVuY3Rpb24odXRjKXtcclxuXHRcdFx0cmV0dXJuIHV0YyAmJiBuZXcgRGF0ZShEYXRlLlVUQyh1dGMuZ2V0VVRDRnVsbFllYXIoKSwgdXRjLmdldFVUQ01vbnRoKCksIHV0Yy5nZXRVVENEYXRlKCkpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0RGF0ZXM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLmRhdGVzLCB0aGlzLl91dGNfdG9fbG9jYWwpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRVVENEYXRlczogZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuICQubWFwKHRoaXMuZGF0ZXMsIGZ1bmN0aW9uKGQpe1xyXG5cdFx0XHRcdHJldHVybiBuZXcgRGF0ZShkKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldERhdGU6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiB0aGlzLl91dGNfdG9fbG9jYWwodGhpcy5nZXRVVENEYXRlKCkpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRVVENEYXRlOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gbmV3IERhdGUodGhpcy5kYXRlcy5nZXQoLTEpKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0ZXM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBhcmdzID0gJC5pc0FycmF5KGFyZ3VtZW50c1swXSkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHM7XHJcblx0XHRcdHRoaXMudXBkYXRlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XHJcblx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0VVRDRGF0ZXM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBhcmdzID0gJC5pc0FycmF5KGFyZ3VtZW50c1swXSkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHM7XHJcblx0XHRcdHRoaXMudXBkYXRlLmFwcGx5KHRoaXMsICQubWFwKGFyZ3MsIHRoaXMuX3V0Y190b19sb2NhbCkpO1xyXG5cdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XHJcblx0XHRcdHRoaXMuc2V0VmFsdWUoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0ZTogYWxpYXMoJ3NldERhdGVzJyksXHJcblx0XHRzZXRVVENEYXRlOiBhbGlhcygnc2V0VVRDRGF0ZXMnKSxcclxuXHJcblx0XHRzZXRWYWx1ZTogZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGZvcm1hdHRlZCA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSgpO1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNJbnB1dCl7XHJcblx0XHRcdFx0aWYgKHRoaXMuY29tcG9uZW50KXtcclxuXHRcdFx0XHRcdHRoaXMuZWxlbWVudC5maW5kKCdpbnB1dCcpLnZhbChmb3JtYXR0ZWQpLmNoYW5nZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmVsZW1lbnQudmFsKGZvcm1hdHRlZCkuY2hhbmdlKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0Rm9ybWF0dGVkRGF0ZTogZnVuY3Rpb24oZm9ybWF0KXtcclxuXHRcdFx0aWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGZvcm1hdCA9IHRoaXMuby5mb3JtYXQ7XHJcblxyXG5cdFx0XHR2YXIgbGFuZyA9IHRoaXMuby5sYW5ndWFnZTtcclxuXHRcdFx0cmV0dXJuICQubWFwKHRoaXMuZGF0ZXMsIGZ1bmN0aW9uKGQpe1xyXG5cdFx0XHRcdHJldHVybiBEUEdsb2JhbC5mb3JtYXREYXRlKGQsIGZvcm1hdCwgbGFuZyk7XHJcblx0XHRcdH0pLmpvaW4odGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFN0YXJ0RGF0ZTogZnVuY3Rpb24oc3RhcnREYXRlKXtcclxuXHRcdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtzdGFydERhdGU6IHN0YXJ0RGF0ZX0pO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU5hdkFycm93cygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRFbmREYXRlOiBmdW5jdGlvbihlbmREYXRlKXtcclxuXHRcdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtlbmREYXRlOiBlbmREYXRlfSk7XHJcblx0XHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHRcdHRoaXMudXBkYXRlTmF2QXJyb3dzKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERheXNPZldlZWtEaXNhYmxlZDogZnVuY3Rpb24oZGF5c09mV2Vla0Rpc2FibGVkKXtcclxuXHRcdFx0dGhpcy5fcHJvY2Vzc19vcHRpb25zKHtkYXlzT2ZXZWVrRGlzYWJsZWQ6IGRheXNPZldlZWtEaXNhYmxlZH0pO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU5hdkFycm93cygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRwbGFjZTogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYgKHRoaXMuaXNJbmxpbmUpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR2YXIgY2FsZW5kYXJXaWR0aCA9IHRoaXMucGlja2VyLm91dGVyV2lkdGgoKSxcclxuXHRcdFx0XHRjYWxlbmRhckhlaWdodCA9IHRoaXMucGlja2VyLm91dGVySGVpZ2h0KCksXHJcblx0XHRcdFx0dmlzdWFsUGFkZGluZyA9IDEwLFxyXG5cdFx0XHRcdHdpbmRvd1dpZHRoID0gJHdpbmRvdy53aWR0aCgpLFxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCksXHJcblx0XHRcdFx0c2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcclxuXHJcblx0XHRcdHZhciB6SW5kZXggPSBwYXJzZUludCh0aGlzLmVsZW1lbnQucGFyZW50cygpLmZpbHRlcihmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0cmV0dXJuICQodGhpcykuY3NzKCd6LWluZGV4JykgIT09ICdhdXRvJztcclxuXHRcdFx0XHR9KS5maXJzdCgpLmNzcygnei1pbmRleCcpKSsxMDtcclxuXHRcdFx0dmFyIG9mZnNldCA9IHRoaXMuY29tcG9uZW50ID8gdGhpcy5jb21wb25lbnQucGFyZW50KCkub2Zmc2V0KCkgOiB0aGlzLmVsZW1lbnQub2Zmc2V0KCk7XHJcblx0XHRcdHZhciBoZWlnaHQgPSB0aGlzLmNvbXBvbmVudCA/IHRoaXMuY29tcG9uZW50Lm91dGVySGVpZ2h0KHRydWUpIDogdGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KGZhbHNlKTtcclxuXHRcdFx0dmFyIHdpZHRoID0gdGhpcy5jb21wb25lbnQgPyB0aGlzLmNvbXBvbmVudC5vdXRlcldpZHRoKHRydWUpIDogdGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoZmFsc2UpO1xyXG5cdFx0XHR2YXIgbGVmdCA9IG9mZnNldC5sZWZ0LFxyXG5cdFx0XHRcdHRvcCA9IG9mZnNldC50b3A7XHJcblxyXG5cdFx0XHR0aGlzLnBpY2tlci5yZW1vdmVDbGFzcyhcclxuXHRcdFx0XHQnZGF0ZXBpY2tlci1vcmllbnQtdG9wIGRhdGVwaWNrZXItb3JpZW50LWJvdHRvbSAnK1xyXG5cdFx0XHRcdCdkYXRlcGlja2VyLW9yaWVudC1yaWdodCBkYXRlcGlja2VyLW9yaWVudC1sZWZ0J1xyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuby5vcmllbnRhdGlvbi54ICE9PSAnYXV0bycpe1xyXG5cdFx0XHRcdHRoaXMucGlja2VyLmFkZENsYXNzKCdkYXRlcGlja2VyLW9yaWVudC0nICsgdGhpcy5vLm9yaWVudGF0aW9uLngpO1xyXG5cdFx0XHRcdGlmICh0aGlzLm8ub3JpZW50YXRpb24ueCA9PT0gJ3JpZ2h0JylcclxuXHRcdFx0XHRcdGxlZnQgLT0gY2FsZW5kYXJXaWR0aCAtIHdpZHRoO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGF1dG8geCBvcmllbnRhdGlvbiBpcyBiZXN0LXBsYWNlbWVudDogaWYgaXQgY3Jvc3NlcyBhIHdpbmRvd1xyXG5cdFx0XHQvLyBlZGdlLCBmdWRnZSBpdCBzaWRld2F5c1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHQvLyBEZWZhdWx0IHRvIGxlZnRcclxuXHRcdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1vcmllbnQtbGVmdCcpO1xyXG5cdFx0XHRcdGlmIChvZmZzZXQubGVmdCA8IDApXHJcblx0XHRcdFx0XHRsZWZ0IC09IG9mZnNldC5sZWZ0IC0gdmlzdWFsUGFkZGluZztcclxuXHRcdFx0XHRlbHNlIGlmIChvZmZzZXQubGVmdCArIGNhbGVuZGFyV2lkdGggPiB3aW5kb3dXaWR0aClcclxuXHRcdFx0XHRcdGxlZnQgPSB3aW5kb3dXaWR0aCAtIGNhbGVuZGFyV2lkdGggLSB2aXN1YWxQYWRkaW5nO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhdXRvIHkgb3JpZW50YXRpb24gaXMgYmVzdC1zaXR1YXRpb246IHRvcCBvciBib3R0b20sIG5vIGZ1ZGdpbmcsXHJcblx0XHRcdC8vIGRlY2lzaW9uIGJhc2VkIG9uIHdoaWNoIHNob3dzIG1vcmUgb2YgdGhlIGNhbGVuZGFyXHJcblx0XHRcdHZhciB5b3JpZW50ID0gdGhpcy5vLm9yaWVudGF0aW9uLnksXHJcblx0XHRcdFx0dG9wX292ZXJmbG93LCBib3R0b21fb3ZlcmZsb3c7XHJcblx0XHRcdGlmICh5b3JpZW50ID09PSAnYXV0bycpe1xyXG5cdFx0XHRcdHRvcF9vdmVyZmxvdyA9IC1zY3JvbGxUb3AgKyBvZmZzZXQudG9wIC0gY2FsZW5kYXJIZWlnaHQ7XHJcblx0XHRcdFx0Ym90dG9tX292ZXJmbG93ID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0IC0gKG9mZnNldC50b3AgKyBoZWlnaHQgKyBjYWxlbmRhckhlaWdodCk7XHJcblx0XHRcdFx0aWYgKE1hdGgubWF4KHRvcF9vdmVyZmxvdywgYm90dG9tX292ZXJmbG93KSA9PT0gYm90dG9tX292ZXJmbG93KVxyXG5cdFx0XHRcdFx0eW9yaWVudCA9ICd0b3AnO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHlvcmllbnQgPSAnYm90dG9tJztcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnBpY2tlci5hZGRDbGFzcygnZGF0ZXBpY2tlci1vcmllbnQtJyArIHlvcmllbnQpO1xyXG5cdFx0XHRpZiAoeW9yaWVudCA9PT0gJ3RvcCcpXHJcblx0XHRcdFx0dG9wICs9IGhlaWdodDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRvcCAtPSBjYWxlbmRhckhlaWdodCArIHBhcnNlSW50KHRoaXMucGlja2VyLmNzcygncGFkZGluZy10b3AnKSk7XHJcblxyXG5cdFx0XHR0aGlzLnBpY2tlci5jc3Moe1xyXG5cdFx0XHRcdHRvcDogdG9wLFxyXG5cdFx0XHRcdGxlZnQ6IGxlZnQsXHJcblx0XHRcdFx0ekluZGV4OiB6SW5kZXhcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdF9hbGxvd191cGRhdGU6IHRydWUsXHJcblx0XHR1cGRhdGU6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmICghdGhpcy5fYWxsb3dfdXBkYXRlKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdHZhciBvbGREYXRlcyA9IHRoaXMuZGF0ZXMuY29weSgpLFxyXG5cdFx0XHRcdGRhdGVzID0gW10sXHJcblx0XHRcdFx0ZnJvbUFyZ3MgPSBmYWxzZTtcclxuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpe1xyXG5cdFx0XHRcdCQuZWFjaChhcmd1bWVudHMsICQucHJveHkoZnVuY3Rpb24oaSwgZGF0ZSl7XHJcblx0XHRcdFx0XHRpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpXHJcblx0XHRcdFx0XHRcdGRhdGUgPSB0aGlzLl9sb2NhbF90b191dGMoZGF0ZSk7XHJcblx0XHRcdFx0XHRkYXRlcy5wdXNoKGRhdGUpO1xyXG5cdFx0XHRcdH0sIHRoaXMpKTtcclxuXHRcdFx0XHRmcm9tQXJncyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0ZGF0ZXMgPSB0aGlzLmlzSW5wdXRcclxuXHRcdFx0XHRcdFx0PyB0aGlzLmVsZW1lbnQudmFsKClcclxuXHRcdFx0XHRcdFx0OiB0aGlzLmVsZW1lbnQuZGF0YSgnZGF0ZScpIHx8IHRoaXMuZWxlbWVudC5maW5kKCdpbnB1dCcpLnZhbCgpO1xyXG5cdFx0XHRcdGlmIChkYXRlcyAmJiB0aGlzLm8ubXVsdGlkYXRlKVxyXG5cdFx0XHRcdFx0ZGF0ZXMgPSBkYXRlcy5zcGxpdCh0aGlzLm8ubXVsdGlkYXRlU2VwYXJhdG9yKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRkYXRlcyA9IFtkYXRlc107XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZGF0ZXMgPSAkLm1hcChkYXRlcywgJC5wcm94eShmdW5jdGlvbihkYXRlKXtcclxuXHRcdFx0XHRyZXR1cm4gRFBHbG9iYWwucGFyc2VEYXRlKGRhdGUsIHRoaXMuby5mb3JtYXQsIHRoaXMuby5sYW5ndWFnZSk7XHJcblx0XHRcdH0sIHRoaXMpKTtcclxuXHRcdFx0ZGF0ZXMgPSAkLmdyZXAoZGF0ZXMsICQucHJveHkoZnVuY3Rpb24oZGF0ZSl7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdGRhdGUgPCB0aGlzLm8uc3RhcnREYXRlIHx8XHJcblx0XHRcdFx0XHRkYXRlID4gdGhpcy5vLmVuZERhdGUgfHxcclxuXHRcdFx0XHRcdCFkYXRlXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSwgdGhpcyksIHRydWUpO1xyXG5cdFx0XHR0aGlzLmRhdGVzLnJlcGxhY2UoZGF0ZXMpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuZGF0ZXMubGVuZ3RoKVxyXG5cdFx0XHRcdHRoaXMudmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVzLmdldCgtMSkpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLnZpZXdEYXRlIDwgdGhpcy5vLnN0YXJ0RGF0ZSlcclxuXHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5vLnN0YXJ0RGF0ZSk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMudmlld0RhdGUgPiB0aGlzLm8uZW5kRGF0ZSlcclxuXHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gbmV3IERhdGUodGhpcy5vLmVuZERhdGUpO1xyXG5cclxuXHRcdFx0aWYgKGZyb21BcmdzKXtcclxuXHRcdFx0XHQvLyBzZXR0aW5nIGRhdGUgYnkgY2xpY2tpbmdcclxuXHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoZGF0ZXMubGVuZ3RoKXtcclxuXHRcdFx0XHQvLyBzZXR0aW5nIGRhdGUgYnkgdHlwaW5nXHJcblx0XHRcdFx0aWYgKFN0cmluZyhvbGREYXRlcykgIT09IFN0cmluZyh0aGlzLmRhdGVzKSlcclxuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXRoaXMuZGF0ZXMubGVuZ3RoICYmIG9sZERhdGVzLmxlbmd0aClcclxuXHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjbGVhckRhdGUnKTtcclxuXHJcblx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRmaWxsRG93OiBmdW5jdGlvbigpe1xyXG5cdFx0XHR2YXIgZG93Q250ID0gdGhpcy5vLndlZWtTdGFydCxcclxuXHRcdFx0XHRodG1sID0gJzx0cj4nO1xyXG5cdFx0XHRpZiAodGhpcy5vLmNhbGVuZGFyV2Vla3Mpe1xyXG5cdFx0XHRcdHZhciBjZWxsID0gJzx0aCBjbGFzcz1cImN3XCI+Jm5ic3A7PC90aD4nO1xyXG5cdFx0XHRcdGh0bWwgKz0gY2VsbDtcclxuXHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1kYXlzIHRoZWFkIHRyOmZpcnN0LWNoaWxkJykucHJlcGVuZChjZWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR3aGlsZSAoZG93Q250IDwgdGhpcy5vLndlZWtTdGFydCArIDcpe1xyXG5cdFx0XHRcdGh0bWwgKz0gJzx0aCBjbGFzcz1cImRvd1wiPicrZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS5kYXlzTWluWyhkb3dDbnQrKyklN10rJzwvdGg+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRodG1sICs9ICc8L3RyPic7XHJcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLWRheXMgdGhlYWQnKS5hcHBlbmQoaHRtbCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZpbGxNb250aHM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBodG1sID0gJycsXHJcblx0XHRcdGkgPSAwO1xyXG5cdFx0XHR3aGlsZSAoaSA8IDEyKXtcclxuXHRcdFx0XHRodG1sICs9ICc8c3BhbiBjbGFzcz1cIm1vbnRoXCI+JytkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLm1vbnRoc1Nob3J0W2krK10rJzwvc3Bhbj4nO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLW1vbnRocyB0ZCcpLmh0bWwoaHRtbCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFJhbmdlOiBmdW5jdGlvbihyYW5nZSl7XHJcblx0XHRcdGlmICghcmFuZ2UgfHwgIXJhbmdlLmxlbmd0aClcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5yYW5nZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMucmFuZ2UgPSAkLm1hcChyYW5nZSwgZnVuY3Rpb24oZCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gZC52YWx1ZU9mKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRDbGFzc05hbWVzOiBmdW5jdGlvbihkYXRlKXtcclxuXHRcdFx0dmFyIGNscyA9IFtdLFxyXG5cdFx0XHRcdHllYXIgPSB0aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCksXHJcblx0XHRcdFx0bW9udGggPSB0aGlzLnZpZXdEYXRlLmdldFVUQ01vbnRoKCksXHJcblx0XHRcdFx0dG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRpZiAoZGF0ZS5nZXRVVENGdWxsWWVhcigpIDwgeWVhciB8fCAoZGF0ZS5nZXRVVENGdWxsWWVhcigpID09PSB5ZWFyICYmIGRhdGUuZ2V0VVRDTW9udGgoKSA8IG1vbnRoKSl7XHJcblx0XHRcdFx0Y2xzLnB1c2goJ29sZCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IHllYXIgfHwgKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA9PT0geWVhciAmJiBkYXRlLmdldFVUQ01vbnRoKCkgPiBtb250aCkpe1xyXG5cdFx0XHRcdGNscy5wdXNoKCduZXcnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5mb2N1c0RhdGUgJiYgZGF0ZS52YWx1ZU9mKCkgPT09IHRoaXMuZm9jdXNEYXRlLnZhbHVlT2YoKSlcclxuXHRcdFx0XHRjbHMucHVzaCgnZm9jdXNlZCcpO1xyXG5cdFx0XHQvLyBDb21wYXJlIGludGVybmFsIFVUQyBkYXRlIHdpdGggbG9jYWwgdG9kYXksIG5vdCBVVEMgdG9kYXlcclxuXHRcdFx0aWYgKHRoaXMuby50b2RheUhpZ2hsaWdodCAmJlxyXG5cdFx0XHRcdGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA9PT0gdG9kYXkuZ2V0RnVsbFllYXIoKSAmJlxyXG5cdFx0XHRcdGRhdGUuZ2V0VVRDTW9udGgoKSA9PT0gdG9kYXkuZ2V0TW9udGgoKSAmJlxyXG5cdFx0XHRcdGRhdGUuZ2V0VVRDRGF0ZSgpID09PSB0b2RheS5nZXREYXRlKCkpe1xyXG5cdFx0XHRcdGNscy5wdXNoKCd0b2RheScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLmRhdGVzLmNvbnRhaW5zKGRhdGUpICE9PSAtMSlcclxuXHRcdFx0XHRjbHMucHVzaCgnYWN0aXZlJyk7XHJcblx0XHRcdGlmIChkYXRlLnZhbHVlT2YoKSA8IHRoaXMuby5zdGFydERhdGUgfHwgZGF0ZS52YWx1ZU9mKCkgPiB0aGlzLm8uZW5kRGF0ZSB8fFxyXG5cdFx0XHRcdCQuaW5BcnJheShkYXRlLmdldFVUQ0RheSgpLCB0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkKSAhPT0gLTEpe1xyXG5cdFx0XHRcdGNscy5wdXNoKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnJhbmdlKXtcclxuXHRcdFx0XHRpZiAoZGF0ZSA+IHRoaXMucmFuZ2VbMF0gJiYgZGF0ZSA8IHRoaXMucmFuZ2VbdGhpcy5yYW5nZS5sZW5ndGgtMV0pe1xyXG5cdFx0XHRcdFx0Y2xzLnB1c2goJ3JhbmdlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICgkLmluQXJyYXkoZGF0ZS52YWx1ZU9mKCksIHRoaXMucmFuZ2UpICE9PSAtMSl7XHJcblx0XHRcdFx0XHRjbHMucHVzaCgnc2VsZWN0ZWQnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGNscztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZmlsbDogZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSxcclxuXHRcdFx0XHR5ZWFyID0gZC5nZXRVVENGdWxsWWVhcigpLFxyXG5cdFx0XHRcdG1vbnRoID0gZC5nZXRVVENNb250aCgpLFxyXG5cdFx0XHRcdHN0YXJ0WWVhciA9IHRoaXMuby5zdGFydERhdGUgIT09IC1JbmZpbml0eSA/IHRoaXMuby5zdGFydERhdGUuZ2V0VVRDRnVsbFllYXIoKSA6IC1JbmZpbml0eSxcclxuXHRcdFx0XHRzdGFydE1vbnRoID0gdGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ID8gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpIDogLUluZmluaXR5LFxyXG5cdFx0XHRcdGVuZFllYXIgPSB0aGlzLm8uZW5kRGF0ZSAhPT0gSW5maW5pdHkgPyB0aGlzLm8uZW5kRGF0ZS5nZXRVVENGdWxsWWVhcigpIDogSW5maW5pdHksXHJcblx0XHRcdFx0ZW5kTW9udGggPSB0aGlzLm8uZW5kRGF0ZSAhPT0gSW5maW5pdHkgPyB0aGlzLm8uZW5kRGF0ZS5nZXRVVENNb250aCgpIDogSW5maW5pdHksXHJcblx0XHRcdFx0dG9kYXl0eHQgPSBkYXRlc1t0aGlzLm8ubGFuZ3VhZ2VdLnRvZGF5IHx8IGRhdGVzWydlbiddLnRvZGF5IHx8ICcnLFxyXG5cdFx0XHRcdGNsZWFydHh0ID0gZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS5jbGVhciB8fCBkYXRlc1snZW4nXS5jbGVhciB8fCAnJyxcclxuXHRcdFx0XHR0b29sdGlwO1xyXG5cdFx0XHR0aGlzLnBpY2tlci5maW5kKCcuZGF0ZXBpY2tlci1kYXlzIHRoZWFkIHRoLmRhdGVwaWNrZXItc3dpdGNoJylcclxuXHRcdFx0XHRcdFx0LnRleHQoZGF0ZXNbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNbbW9udGhdKycgJyt5ZWFyKTtcclxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgndGZvb3QgdGgudG9kYXknKVxyXG5cdFx0XHRcdFx0XHQudGV4dCh0b2RheXR4dClcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZSh0aGlzLm8udG9kYXlCdG4gIT09IGZhbHNlKTtcclxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgndGZvb3QgdGguY2xlYXInKVxyXG5cdFx0XHRcdFx0XHQudGV4dChjbGVhcnR4dClcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZSh0aGlzLm8uY2xlYXJCdG4gIT09IGZhbHNlKTtcclxuXHRcdFx0dGhpcy51cGRhdGVOYXZBcnJvd3MoKTtcclxuXHRcdFx0dGhpcy5maWxsTW9udGhzKCk7XHJcblx0XHRcdHZhciBwcmV2TW9udGggPSBVVENEYXRlKHllYXIsIG1vbnRoLTEsIDI4KSxcclxuXHRcdFx0XHRkYXkgPSBEUEdsb2JhbC5nZXREYXlzSW5Nb250aChwcmV2TW9udGguZ2V0VVRDRnVsbFllYXIoKSwgcHJldk1vbnRoLmdldFVUQ01vbnRoKCkpO1xyXG5cdFx0XHRwcmV2TW9udGguc2V0VVRDRGF0ZShkYXkpO1xyXG5cdFx0XHRwcmV2TW9udGguc2V0VVRDRGF0ZShkYXkgLSAocHJldk1vbnRoLmdldFVUQ0RheSgpIC0gdGhpcy5vLndlZWtTdGFydCArIDcpJTcpO1xyXG5cdFx0XHR2YXIgbmV4dE1vbnRoID0gbmV3IERhdGUocHJldk1vbnRoKTtcclxuXHRcdFx0bmV4dE1vbnRoLnNldFVUQ0RhdGUobmV4dE1vbnRoLmdldFVUQ0RhdGUoKSArIDQyKTtcclxuXHRcdFx0bmV4dE1vbnRoID0gbmV4dE1vbnRoLnZhbHVlT2YoKTtcclxuXHRcdFx0dmFyIGh0bWwgPSBbXTtcclxuXHRcdFx0dmFyIGNsc05hbWU7XHJcblx0XHRcdHdoaWxlIChwcmV2TW9udGgudmFsdWVPZigpIDwgbmV4dE1vbnRoKXtcclxuXHRcdFx0XHRpZiAocHJldk1vbnRoLmdldFVUQ0RheSgpID09PSB0aGlzLm8ud2Vla1N0YXJ0KXtcclxuXHRcdFx0XHRcdGh0bWwucHVzaCgnPHRyPicpO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuby5jYWxlbmRhcldlZWtzKXtcclxuXHRcdFx0XHRcdFx0Ly8gSVNPIDg2MDE6IEZpcnN0IHdlZWsgY29udGFpbnMgZmlyc3QgdGh1cnNkYXkuXHJcblx0XHRcdFx0XHRcdC8vIElTTyBhbHNvIHN0YXRlcyB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIGJ1dCB3ZSBjYW4gYmUgbW9yZSBhYnN0cmFjdCBoZXJlLlxyXG5cdFx0XHRcdFx0XHR2YXJcclxuXHRcdFx0XHRcdFx0XHQvLyBTdGFydCBvZiBjdXJyZW50IHdlZWs6IGJhc2VkIG9uIHdlZWtzdGFydC9jdXJyZW50IGRhdGVcclxuXHRcdFx0XHRcdFx0XHR3cyA9IG5ldyBEYXRlKCtwcmV2TW9udGggKyAodGhpcy5vLndlZWtTdGFydCAtIHByZXZNb250aC5nZXRVVENEYXkoKSAtIDcpICUgNyAqIDg2NGU1KSxcclxuXHRcdFx0XHRcdFx0XHQvLyBUaHVyc2RheSBvZiB0aGlzIHdlZWtcclxuXHRcdFx0XHRcdFx0XHR0aCA9IG5ldyBEYXRlKE51bWJlcih3cykgKyAoNyArIDQgLSB3cy5nZXRVVENEYXkoKSkgJSA3ICogODY0ZTUpLFxyXG5cdFx0XHRcdFx0XHRcdC8vIEZpcnN0IFRodXJzZGF5IG9mIHllYXIsIHllYXIgZnJvbSB0aHVyc2RheVxyXG5cdFx0XHRcdFx0XHRcdHl0aCA9IG5ldyBEYXRlKE51bWJlcih5dGggPSBVVENEYXRlKHRoLmdldFVUQ0Z1bGxZZWFyKCksIDAsIDEpKSArICg3ICsgNCAtIHl0aC5nZXRVVENEYXkoKSklNyo4NjRlNSksXHJcblx0XHRcdFx0XHRcdFx0Ly8gQ2FsZW5kYXIgd2VlazogbXMgYmV0d2VlbiB0aHVyc2RheXMsIGRpdiBtcyBwZXIgZGF5LCBkaXYgNyBkYXlzXHJcblx0XHRcdFx0XHRcdFx0Y2FsV2VlayA9ICAodGggLSB5dGgpIC8gODY0ZTUgLyA3ICsgMTtcclxuXHRcdFx0XHRcdFx0aHRtbC5wdXNoKCc8dGQgY2xhc3M9XCJjd1wiPicrIGNhbFdlZWsgKyc8L3RkPicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2xzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lcyhwcmV2TW9udGgpO1xyXG5cdFx0XHRcdGNsc05hbWUucHVzaCgnZGF5Jyk7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLm8uYmVmb3JlU2hvd0RheSAhPT0gJC5ub29wKXtcclxuXHRcdFx0XHRcdHZhciBiZWZvcmUgPSB0aGlzLm8uYmVmb3JlU2hvd0RheSh0aGlzLl91dGNfdG9fbG9jYWwocHJldk1vbnRoKSk7XHJcblx0XHRcdFx0XHRpZiAoYmVmb3JlID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHt9O1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mKGJlZm9yZSkgPT09ICdib29sZWFuJylcclxuXHRcdFx0XHRcdFx0YmVmb3JlID0ge2VuYWJsZWQ6IGJlZm9yZX07XHJcblx0XHRcdFx0XHRlbHNlIGlmICh0eXBlb2YoYmVmb3JlKSA9PT0gJ3N0cmluZycpXHJcblx0XHRcdFx0XHRcdGJlZm9yZSA9IHtjbGFzc2VzOiBiZWZvcmV9O1xyXG5cdFx0XHRcdFx0aWYgKGJlZm9yZS5lbmFibGVkID09PSBmYWxzZSlcclxuXHRcdFx0XHRcdFx0Y2xzTmFtZS5wdXNoKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdFx0aWYgKGJlZm9yZS5jbGFzc2VzKVxyXG5cdFx0XHRcdFx0XHRjbHNOYW1lID0gY2xzTmFtZS5jb25jYXQoYmVmb3JlLmNsYXNzZXMuc3BsaXQoL1xccysvKSk7XHJcblx0XHRcdFx0XHRpZiAoYmVmb3JlLnRvb2x0aXApXHJcblx0XHRcdFx0XHRcdHRvb2x0aXAgPSBiZWZvcmUudG9vbHRpcDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNsc05hbWUgPSAkLnVuaXF1ZShjbHNOYW1lKTtcclxuXHRcdFx0XHRodG1sLnB1c2goJzx0ZCBjbGFzcz1cIicrY2xzTmFtZS5qb2luKCcgJykrJ1wiJyArICh0b29sdGlwID8gJyB0aXRsZT1cIicrdG9vbHRpcCsnXCInIDogJycpICsgJz4nK3ByZXZNb250aC5nZXRVVENEYXRlKCkgKyAnPC90ZD4nKTtcclxuXHRcdFx0XHRpZiAocHJldk1vbnRoLmdldFVUQ0RheSgpID09PSB0aGlzLm8ud2Vla0VuZCl7XHJcblx0XHRcdFx0XHRodG1sLnB1c2goJzwvdHI+Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHByZXZNb250aC5zZXRVVENEYXRlKHByZXZNb250aC5nZXRVVENEYXRlKCkrMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXItZGF5cyB0Ym9keScpLmVtcHR5KCkuYXBwZW5kKGh0bWwuam9pbignJykpO1xyXG5cclxuXHRcdFx0dmFyIG1vbnRocyA9IHRoaXMucGlja2VyLmZpbmQoJy5kYXRlcGlja2VyLW1vbnRocycpXHJcblx0XHRcdFx0XHRcdC5maW5kKCd0aDplcSgxKScpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQoeWVhcilcclxuXHRcdFx0XHRcdFx0XHQuZW5kKClcclxuXHRcdFx0XHRcdFx0LmZpbmQoJ3NwYW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHQkLmVhY2godGhpcy5kYXRlcywgZnVuY3Rpb24oaSwgZCl7XHJcblx0XHRcdFx0aWYgKGQuZ2V0VVRDRnVsbFllYXIoKSA9PT0geWVhcilcclxuXHRcdFx0XHRcdG1vbnRocy5lcShkLmdldFVUQ01vbnRoKCkpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoeWVhciA8IHN0YXJ0WWVhciB8fCB5ZWFyID4gZW5kWWVhcil7XHJcblx0XHRcdFx0bW9udGhzLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh5ZWFyID09PSBzdGFydFllYXIpe1xyXG5cdFx0XHRcdG1vbnRocy5zbGljZSgwLCBzdGFydE1vbnRoKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoeWVhciA9PT0gZW5kWWVhcil7XHJcblx0XHRcdFx0bW9udGhzLnNsaWNlKGVuZE1vbnRoKzEpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRodG1sID0gJyc7XHJcblx0XHRcdHllYXIgPSBwYXJzZUludCh5ZWFyLzEwLCAxMCkgKiAxMDtcclxuXHRcdFx0dmFyIHllYXJDb250ID0gdGhpcy5waWNrZXIuZmluZCgnLmRhdGVwaWNrZXIteWVhcnMnKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmZpbmQoJ3RoOmVxKDEpJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQoeWVhciArICctJyArICh5ZWFyICsgOSkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5lbmQoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmZpbmQoJ3RkJyk7XHJcblx0XHRcdHllYXIgLT0gMTtcclxuXHRcdFx0dmFyIHllYXJzID0gJC5tYXAodGhpcy5kYXRlcywgZnVuY3Rpb24oZCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gZC5nZXRVVENGdWxsWWVhcigpO1xyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHRcdGNsYXNzZXM7XHJcblx0XHRcdGZvciAodmFyIGkgPSAtMTsgaSA8IDExOyBpKyspe1xyXG5cdFx0XHRcdGNsYXNzZXMgPSBbJ3llYXInXTtcclxuXHRcdFx0XHRpZiAoaSA9PT0gLTEpXHJcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ29sZCcpO1xyXG5cdFx0XHRcdGVsc2UgaWYgKGkgPT09IDEwKVxyXG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCduZXcnKTtcclxuXHRcdFx0XHRpZiAoJC5pbkFycmF5KHllYXIsIHllYXJzKSAhPT0gLTEpXHJcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdGlmICh5ZWFyIDwgc3RhcnRZZWFyIHx8IHllYXIgPiBlbmRZZWFyKVxyXG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCdkaXNhYmxlZCcpO1xyXG5cdFx0XHRcdGh0bWwgKz0gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzZXMuam9pbignICcpICsgJ1wiPicreWVhcisnPC9zcGFuPic7XHJcblx0XHRcdFx0eWVhciArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHRcdHllYXJDb250Lmh0bWwoaHRtbCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVwZGF0ZU5hdkFycm93czogZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYgKCF0aGlzLl9hbGxvd191cGRhdGUpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0dmFyIGQgPSBuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSxcclxuXHRcdFx0XHR5ZWFyID0gZC5nZXRVVENGdWxsWWVhcigpLFxyXG5cdFx0XHRcdG1vbnRoID0gZC5nZXRVVENNb250aCgpO1xyXG5cdFx0XHRzd2l0Y2ggKHRoaXMudmlld01vZGUpe1xyXG5cdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdGlmICh0aGlzLm8uc3RhcnREYXRlICE9PSAtSW5maW5pdHkgJiYgeWVhciA8PSB0aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCkgJiYgbW9udGggPD0gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLnByZXYnKS5jc3Moe3Zpc2liaWxpdHk6ICdoaWRkZW4nfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLnByZXYnKS5jc3Moe3Zpc2liaWxpdHk6ICd2aXNpYmxlJ30pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuby5lbmREYXRlICE9PSBJbmZpbml0eSAmJiB5ZWFyID49IHRoaXMuby5lbmREYXRlLmdldFVUQ0Z1bGxZZWFyKCkgJiYgbW9udGggPj0gdGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKSl7XHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5uZXh0JykuY3NzKHt2aXNpYmlsaXR5OiAnaGlkZGVuJ30pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGlja2VyLmZpbmQoJy5uZXh0JykuY3NzKHt2aXNpYmlsaXR5OiAndmlzaWJsZSd9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRpZiAodGhpcy5vLnN0YXJ0RGF0ZSAhPT0gLUluZmluaXR5ICYmIHllYXIgPD0gdGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLnByZXYnKS5jc3Moe3Zpc2liaWxpdHk6ICdoaWRkZW4nfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5waWNrZXIuZmluZCgnLnByZXYnKS5jc3Moe3Zpc2liaWxpdHk6ICd2aXNpYmxlJ30pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuby5lbmREYXRlICE9PSBJbmZpbml0eSAmJiB5ZWFyID49IHRoaXMuby5lbmREYXRlLmdldFVUQ0Z1bGxZZWFyKCkpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKCcubmV4dCcpLmNzcyh7dmlzaWJpbGl0eTogJ2hpZGRlbid9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBpY2tlci5maW5kKCcubmV4dCcpLmNzcyh7dmlzaWJpbGl0eTogJ3Zpc2libGUnfSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRjbGljazogZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ3NwYW4sIHRkLCB0aCcpLFxyXG5cdFx0XHRcdHllYXIsIG1vbnRoLCBkYXk7XHJcblx0XHRcdGlmICh0YXJnZXQubGVuZ3RoID09PSAxKXtcclxuXHRcdFx0XHRzd2l0Y2ggKHRhcmdldFswXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXtcclxuXHRcdFx0XHRcdGNhc2UgJ3RoJzpcclxuXHRcdFx0XHRcdFx0c3dpdGNoICh0YXJnZXRbMF0uY2xhc3NOYW1lKXtcclxuXHRcdFx0XHRcdFx0XHRjYXNlICdkYXRlcGlja2VyLXN3aXRjaCc6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dNb2RlKDEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAncHJldic6XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbmV4dCc6XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZGlyID0gRFBHbG9iYWwubW9kZXNbdGhpcy52aWV3TW9kZV0ubmF2U3RlcCAqICh0YXJnZXRbMF0uY2xhc3NOYW1lID09PSAncHJldicgPyAtMSA6IDEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoICh0aGlzLnZpZXdNb2RlKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLm1vdmVNb250aCh0aGlzLnZpZXdEYXRlLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZU1vbnRoJywgdGhpcy52aWV3RGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudmlld0RhdGUgPSB0aGlzLm1vdmVZZWFyKHRoaXMudmlld0RhdGUsIGRpcik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMudmlld01vZGUgPT09IDEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VZZWFyJywgdGhpcy52aWV3RGF0ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RvZGF5JzpcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGUgPSBVVENEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgMCwgMCwgMCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93TW9kZSgtMik7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgd2hpY2ggPSB0aGlzLm8udG9kYXlCdG4gPT09ICdsaW5rZWQnID8gbnVsbCA6ICd2aWV3JztcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3NldERhdGUoZGF0ZSwgd2hpY2gpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnY2xlYXInOlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVsZW1lbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pc0lucHV0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSBpZiAodGhpcy5jb21wb25lbnQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXQnKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LnZhbChcIlwiKS5jaGFuZ2UoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VEYXRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5vLmF1dG9jbG9zZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3NwYW4nOlxyXG5cdFx0XHRcdFx0XHRpZiAoIXRhcmdldC5pcygnLmRpc2FibGVkJykpe1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudmlld0RhdGUuc2V0VVRDRGF0ZSgxKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGFyZ2V0LmlzKCcubW9udGgnKSl7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXkgPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0bW9udGggPSB0YXJnZXQucGFyZW50KCkuZmluZCgnc3BhbicpLmluZGV4KHRhcmdldCk7XHJcblx0XHRcdFx0XHRcdFx0XHR5ZWFyID0gdGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy52aWV3RGF0ZS5zZXRVVENNb250aChtb250aCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VNb250aCcsIHRoaXMudmlld0RhdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuby5taW5WaWV3TW9kZSA9PT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX3NldERhdGUoVVRDRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5ID0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdG1vbnRoID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdHllYXIgPSBwYXJzZUludCh0YXJnZXQudGV4dCgpLCAxMCl8fDA7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlWWVhcicsIHRoaXMudmlld0RhdGUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuby5taW5WaWV3TW9kZSA9PT0gMil7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX3NldERhdGUoVVRDRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd01vZGUoLTEpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAndGQnOlxyXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0LmlzKCcuZGF5JykgJiYgIXRhcmdldC5pcygnLmRpc2FibGVkJykpe1xyXG5cdFx0XHRcdFx0XHRcdGRheSA9IHBhcnNlSW50KHRhcmdldC50ZXh0KCksIDEwKXx8MTtcclxuXHRcdFx0XHRcdFx0XHR5ZWFyID0gdGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpO1xyXG5cdFx0XHRcdFx0XHRcdG1vbnRoID0gdGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0YXJnZXQuaXMoJy5vbGQnKSl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobW9udGggPT09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtb250aCA9IDExO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR5ZWFyIC09IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bW9udGggLT0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSBpZiAodGFyZ2V0LmlzKCcubmV3Jykpe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG1vbnRoID09PSAxMSl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1vbnRoID0gMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0eWVhciArPSAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG1vbnRoICs9IDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX3NldERhdGUoVVRDRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnBpY2tlci5pcygnOnZpc2libGUnKSAmJiB0aGlzLl9mb2N1c2VkX2Zyb20pe1xyXG5cdFx0XHRcdCQodGhpcy5fZm9jdXNlZF9mcm9tKS5mb2N1cygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlbGV0ZSB0aGlzLl9mb2N1c2VkX2Zyb207XHJcblx0XHR9LFxyXG5cclxuXHRcdF90b2dnbGVfbXVsdGlkYXRlOiBmdW5jdGlvbihkYXRlKXtcclxuXHRcdFx0dmFyIGl4ID0gdGhpcy5kYXRlcy5jb250YWlucyhkYXRlKTtcclxuXHRcdFx0aWYgKCFkYXRlKXtcclxuXHRcdFx0XHR0aGlzLmRhdGVzLmNsZWFyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoaXggIT09IC0xKXtcclxuXHRcdFx0XHR0aGlzLmRhdGVzLnJlbW92ZShpeCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5kYXRlcy5wdXNoKGRhdGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5vLm11bHRpZGF0ZSA9PT0gJ251bWJlcicpXHJcblx0XHRcdFx0d2hpbGUgKHRoaXMuZGF0ZXMubGVuZ3RoID4gdGhpcy5vLm11bHRpZGF0ZSlcclxuXHRcdFx0XHRcdHRoaXMuZGF0ZXMucmVtb3ZlKDApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfc2V0RGF0ZTogZnVuY3Rpb24oZGF0ZSwgd2hpY2gpe1xyXG5cdFx0XHRpZiAoIXdoaWNoIHx8IHdoaWNoID09PSAnZGF0ZScpXHJcblx0XHRcdFx0dGhpcy5fdG9nZ2xlX211bHRpZGF0ZShkYXRlICYmIG5ldyBEYXRlKGRhdGUpKTtcclxuXHRcdFx0aWYgKCF3aGljaCB8fCB3aGljaCAgPT09ICd2aWV3JylcclxuXHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gZGF0ZSAmJiBuZXcgRGF0ZShkYXRlKTtcclxuXHJcblx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZURhdGUnKTtcclxuXHRcdFx0dmFyIGVsZW1lbnQ7XHJcblx0XHRcdGlmICh0aGlzLmlzSW5wdXQpe1xyXG5cdFx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5jb21wb25lbnQpe1xyXG5cdFx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuZmluZCgnaW5wdXQnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZWxlbWVudCl7XHJcblx0XHRcdFx0ZWxlbWVudC5jaGFuZ2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5vLmF1dG9jbG9zZSAmJiAoIXdoaWNoIHx8IHdoaWNoID09PSAnZGF0ZScpKXtcclxuXHRcdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRtb3ZlTW9udGg6IGZ1bmN0aW9uKGRhdGUsIGRpcil7XHJcblx0XHRcdGlmICghZGF0ZSlcclxuXHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdFx0XHRpZiAoIWRpcilcclxuXHRcdFx0XHRyZXR1cm4gZGF0ZTtcclxuXHRcdFx0dmFyIG5ld19kYXRlID0gbmV3IERhdGUoZGF0ZS52YWx1ZU9mKCkpLFxyXG5cdFx0XHRcdGRheSA9IG5ld19kYXRlLmdldFVUQ0RhdGUoKSxcclxuXHRcdFx0XHRtb250aCA9IG5ld19kYXRlLmdldFVUQ01vbnRoKCksXHJcblx0XHRcdFx0bWFnID0gTWF0aC5hYnMoZGlyKSxcclxuXHRcdFx0XHRuZXdfbW9udGgsIHRlc3Q7XHJcblx0XHRcdGRpciA9IGRpciA+IDAgPyAxIDogLTE7XHJcblx0XHRcdGlmIChtYWcgPT09IDEpe1xyXG5cdFx0XHRcdHRlc3QgPSBkaXIgPT09IC0xXHJcblx0XHRcdFx0XHQvLyBJZiBnb2luZyBiYWNrIG9uZSBtb250aCwgbWFrZSBzdXJlIG1vbnRoIGlzIG5vdCBjdXJyZW50IG1vbnRoXHJcblx0XHRcdFx0XHQvLyAoZWcsIE1hciAzMSAtPiBGZWIgMzEgPT0gRmViIDI4LCBub3QgTWFyIDAyKVxyXG5cdFx0XHRcdFx0PyBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKSA9PT0gbW9udGg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBJZiBnb2luZyBmb3J3YXJkIG9uZSBtb250aCwgbWFrZSBzdXJlIG1vbnRoIGlzIGFzIGV4cGVjdGVkXHJcblx0XHRcdFx0XHQvLyAoZWcsIEphbiAzMSAtPiBGZWIgMzEgPT0gRmViIDI4LCBub3QgTWFyIDAyKVxyXG5cdFx0XHRcdFx0OiBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV3X2RhdGUuZ2V0VVRDTW9udGgoKSAhPT0gbmV3X21vbnRoO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRuZXdfbW9udGggPSBtb250aCArIGRpcjtcclxuXHRcdFx0XHRuZXdfZGF0ZS5zZXRVVENNb250aChuZXdfbW9udGgpO1xyXG5cdFx0XHRcdC8vIERlYyAtPiBKYW4gKDEyKSBvciBKYW4gLT4gRGVjICgtMSkgLS0gbGltaXQgZXhwZWN0ZWQgZGF0ZSB0byAwLTExXHJcblx0XHRcdFx0aWYgKG5ld19tb250aCA8IDAgfHwgbmV3X21vbnRoID4gMTEpXHJcblx0XHRcdFx0XHRuZXdfbW9udGggPSAobmV3X21vbnRoICsgMTIpICUgMTI7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0Ly8gRm9yIG1hZ25pdHVkZXMgPjEsIG1vdmUgb25lIG1vbnRoIGF0IGEgdGltZS4uLlxyXG5cdFx0XHRcdGZvciAodmFyIGk9MDsgaSA8IG1hZzsgaSsrKVxyXG5cdFx0XHRcdFx0Ly8gLi4ud2hpY2ggbWlnaHQgZGVjcmVhc2UgdGhlIGRheSAoZWcsIEphbiAzMSB0byBGZWIgMjgsIGV0YykuLi5cclxuXHRcdFx0XHRcdG5ld19kYXRlID0gdGhpcy5tb3ZlTW9udGgobmV3X2RhdGUsIGRpcik7XHJcblx0XHRcdFx0Ly8gLi4udGhlbiByZXNldCB0aGUgZGF5LCBrZWVwaW5nIGl0IGluIHRoZSBuZXcgbW9udGhcclxuXHRcdFx0XHRuZXdfbW9udGggPSBuZXdfZGF0ZS5nZXRVVENNb250aCgpO1xyXG5cdFx0XHRcdG5ld19kYXRlLnNldFVUQ0RhdGUoZGF5KTtcclxuXHRcdFx0XHR0ZXN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHJldHVybiBuZXdfbW9udGggIT09IG5ld19kYXRlLmdldFVUQ01vbnRoKCk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBDb21tb24gZGF0ZS1yZXNldHRpbmcgbG9vcCAtLSBpZiBkYXRlIGlzIGJleW9uZCBlbmQgb2YgbW9udGgsIG1ha2UgaXRcclxuXHRcdFx0Ly8gZW5kIG9mIG1vbnRoXHJcblx0XHRcdHdoaWxlICh0ZXN0KCkpe1xyXG5cdFx0XHRcdG5ld19kYXRlLnNldFVUQ0RhdGUoLS1kYXkpO1xyXG5cdFx0XHRcdG5ld19kYXRlLnNldFVUQ01vbnRoKG5ld19tb250aCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG5ld19kYXRlO1xyXG5cdFx0fSxcclxuXHJcblx0XHRtb3ZlWWVhcjogZnVuY3Rpb24oZGF0ZSwgZGlyKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMubW92ZU1vbnRoKGRhdGUsIGRpcioxMik7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRhdGVXaXRoaW5SYW5nZTogZnVuY3Rpb24oZGF0ZSl7XHJcblx0XHRcdHJldHVybiBkYXRlID49IHRoaXMuby5zdGFydERhdGUgJiYgZGF0ZSA8PSB0aGlzLm8uZW5kRGF0ZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0a2V5ZG93bjogZnVuY3Rpb24oZSl7XHJcblx0XHRcdGlmICh0aGlzLnBpY2tlci5pcygnOm5vdCg6dmlzaWJsZSknKSl7XHJcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMjcpIC8vIGFsbG93IGVzY2FwZSB0byBoaWRlIGFuZCByZS1zaG93IHBpY2tlclxyXG5cdFx0XHRcdFx0dGhpcy5zaG93KCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBkYXRlQ2hhbmdlZCA9IGZhbHNlLFxyXG5cdFx0XHRcdGRpciwgbmV3RGF0ZSwgbmV3Vmlld0RhdGUsXHJcblx0XHRcdFx0Zm9jdXNEYXRlID0gdGhpcy5mb2N1c0RhdGUgfHwgdGhpcy52aWV3RGF0ZTtcclxuXHRcdFx0c3dpdGNoIChlLmtleUNvZGUpe1xyXG5cdFx0XHRcdGNhc2UgMjc6IC8vIGVzY2FwZVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZm9jdXNEYXRlKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XHJcblx0XHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMzc6IC8vIGxlZnRcclxuXHRcdFx0XHRjYXNlIDM5OiAvLyByaWdodFxyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9uKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRpciA9IGUua2V5Q29kZSA9PT0gMzcgPyAtMSA6IDE7XHJcblx0XHRcdFx0XHRpZiAoZS5jdHJsS2V5KXtcclxuXHRcdFx0XHRcdFx0bmV3RGF0ZSA9IHRoaXMubW92ZVllYXIodGhpcy5kYXRlcy5nZXQoLTEpIHx8IFVUQ1RvZGF5KCksIGRpcik7XHJcblx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlWWVhcihmb2N1c0RhdGUsIGRpcik7XHJcblx0XHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NoYW5nZVllYXInLCB0aGlzLnZpZXdEYXRlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2UgaWYgKGUuc2hpZnRLZXkpe1xyXG5cdFx0XHRcdFx0XHRuZXdEYXRlID0gdGhpcy5tb3ZlTW9udGgodGhpcy5kYXRlcy5nZXQoLTEpIHx8IFVUQ1RvZGF5KCksIGRpcik7XHJcblx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gdGhpcy5tb3ZlTW9udGgoZm9jdXNEYXRlLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VNb250aCcsIHRoaXMudmlld0RhdGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdG5ld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGVzLmdldCgtMSkgfHwgVVRDVG9kYXkoKSk7XHJcblx0XHRcdFx0XHRcdG5ld0RhdGUuc2V0VVRDRGF0ZShuZXdEYXRlLmdldFVUQ0RhdGUoKSArIGRpcik7XHJcblx0XHRcdFx0XHRcdG5ld1ZpZXdEYXRlID0gbmV3IERhdGUoZm9jdXNEYXRlKTtcclxuXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUuc2V0VVRDRGF0ZShmb2N1c0RhdGUuZ2V0VVRDRGF0ZSgpICsgZGlyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGVXaXRoaW5SYW5nZShuZXdEYXRlKSl7XHJcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gdGhpcy52aWV3RGF0ZSA9IG5ld1ZpZXdEYXRlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDM4OiAvLyB1cFxyXG5cdFx0XHRcdGNhc2UgNDA6IC8vIGRvd25cclxuXHRcdFx0XHRcdGlmICghdGhpcy5vLmtleWJvYXJkTmF2aWdhdGlvbilcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkaXIgPSBlLmtleUNvZGUgPT09IDM4ID8gLTEgOiAxO1xyXG5cdFx0XHRcdFx0aWYgKGUuY3RybEtleSl7XHJcblx0XHRcdFx0XHRcdG5ld0RhdGUgPSB0aGlzLm1vdmVZZWFyKHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCBVVENUb2RheSgpLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZSA9IHRoaXMubW92ZVllYXIoZm9jdXNEYXRlLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLl90cmlnZ2VyKCdjaGFuZ2VZZWFyJywgdGhpcy52aWV3RGF0ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChlLnNoaWZ0S2V5KXtcclxuXHRcdFx0XHRcdFx0bmV3RGF0ZSA9IHRoaXMubW92ZU1vbnRoKHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCBVVENUb2RheSgpLCBkaXIpO1xyXG5cdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZSA9IHRoaXMubW92ZU1vbnRoKGZvY3VzRGF0ZSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlTW9udGgnLCB0aGlzLnZpZXdEYXRlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRuZXdEYXRlID0gbmV3IERhdGUodGhpcy5kYXRlcy5nZXQoLTEpIHx8IFVUQ1RvZGF5KCkpO1xyXG5cdFx0XHRcdFx0XHRuZXdEYXRlLnNldFVUQ0RhdGUobmV3RGF0ZS5nZXRVVENEYXRlKCkgKyBkaXIgKiA3KTtcclxuXHRcdFx0XHRcdFx0bmV3Vmlld0RhdGUgPSBuZXcgRGF0ZShmb2N1c0RhdGUpO1xyXG5cdFx0XHRcdFx0XHRuZXdWaWV3RGF0ZS5zZXRVVENEYXRlKGZvY3VzRGF0ZS5nZXRVVENEYXRlKCkgKyBkaXIgKiA3KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0aGlzLmRhdGVXaXRoaW5SYW5nZShuZXdEYXRlKSl7XHJcblx0XHRcdFx0XHRcdHRoaXMuZm9jdXNEYXRlID0gdGhpcy52aWV3RGF0ZSA9IG5ld1ZpZXdEYXRlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZmlsbCgpO1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDMyOiAvLyBzcGFjZWJhclxyXG5cdFx0XHRcdFx0Ly8gU3BhY2ViYXIgaXMgdXNlZCBpbiBtYW51YWxseSB0eXBpbmcgZGF0ZXMgaW4gc29tZSBmb3JtYXRzLlxyXG5cdFx0XHRcdFx0Ly8gQXMgc3VjaCwgaXRzIGJlaGF2aW9yIHNob3VsZCBub3QgYmUgaGlqYWNrZWQuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDEzOiAvLyBlbnRlclxyXG5cdFx0XHRcdFx0Zm9jdXNEYXRlID0gdGhpcy5mb2N1c0RhdGUgfHwgdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XHJcblx0XHRcdFx0XHR0aGlzLl90b2dnbGVfbXVsdGlkYXRlKGZvY3VzRGF0ZSk7XHJcblx0XHRcdFx0XHRkYXRlQ2hhbmdlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLmZvY3VzRGF0ZSA9IG51bGw7XHJcblx0XHRcdFx0XHR0aGlzLnZpZXdEYXRlID0gdGhpcy5kYXRlcy5nZXQoLTEpIHx8IHRoaXMudmlld0RhdGU7XHJcblx0XHRcdFx0XHR0aGlzLnNldFZhbHVlKCk7XHJcblx0XHRcdFx0XHR0aGlzLmZpbGwoKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnBpY2tlci5pcygnOnZpc2libGUnKSl7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuby5hdXRvY2xvc2UpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDk6IC8vIHRhYlxyXG5cdFx0XHRcdFx0dGhpcy5mb2N1c0RhdGUgPSBudWxsO1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3RGF0ZSA9IHRoaXMuZGF0ZXMuZ2V0KC0xKSB8fCB0aGlzLnZpZXdEYXRlO1xyXG5cdFx0XHRcdFx0dGhpcy5maWxsKCk7XHJcblx0XHRcdFx0XHR0aGlzLmhpZGUoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRlQ2hhbmdlZCl7XHJcblx0XHRcdFx0aWYgKHRoaXMuZGF0ZXMubGVuZ3RoKVxyXG5cdFx0XHRcdFx0dGhpcy5fdHJpZ2dlcignY2hhbmdlRGF0ZScpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMuX3RyaWdnZXIoJ2NsZWFyRGF0ZScpO1xyXG5cdFx0XHRcdHZhciBlbGVtZW50O1xyXG5cdFx0XHRcdGlmICh0aGlzLmlzSW5wdXQpe1xyXG5cdFx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAodGhpcy5jb21wb25lbnQpe1xyXG5cdFx0XHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudC5maW5kKCdpbnB1dCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZWxlbWVudCl7XHJcblx0XHRcdFx0XHRlbGVtZW50LmNoYW5nZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRzaG93TW9kZTogZnVuY3Rpb24oZGlyKXtcclxuXHRcdFx0aWYgKGRpcil7XHJcblx0XHRcdFx0dGhpcy52aWV3TW9kZSA9IE1hdGgubWF4KHRoaXMuby5taW5WaWV3TW9kZSwgTWF0aC5taW4oMiwgdGhpcy52aWV3TW9kZSArIGRpcikpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMucGlja2VyXHJcblx0XHRcdFx0LmZpbmQoJz5kaXYnKVxyXG5cdFx0XHRcdC5oaWRlKClcclxuXHRcdFx0XHQuZmlsdGVyKCcuZGF0ZXBpY2tlci0nK0RQR2xvYmFsLm1vZGVzW3RoaXMudmlld01vZGVdLmNsc05hbWUpXHJcblx0XHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHRcdHRoaXMudXBkYXRlTmF2QXJyb3dzKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIERhdGVSYW5nZVBpY2tlciA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpe1xyXG5cdFx0dGhpcy5lbGVtZW50ID0gJChlbGVtZW50KTtcclxuXHRcdHRoaXMuaW5wdXRzID0gJC5tYXAob3B0aW9ucy5pbnB1dHMsIGZ1bmN0aW9uKGkpe1xyXG5cdFx0XHRyZXR1cm4gaS5qcXVlcnkgPyBpWzBdIDogaTtcclxuXHRcdH0pO1xyXG5cdFx0ZGVsZXRlIG9wdGlvbnMuaW5wdXRzO1xyXG5cclxuXHRcdCQodGhpcy5pbnB1dHMpXHJcblx0XHRcdC5kYXRlcGlja2VyKG9wdGlvbnMpXHJcblx0XHRcdC5iaW5kKCdjaGFuZ2VEYXRlJywgJC5wcm94eSh0aGlzLmRhdGVVcGRhdGVkLCB0aGlzKSk7XHJcblxyXG5cdFx0dGhpcy5waWNrZXJzID0gJC5tYXAodGhpcy5pbnB1dHMsIGZ1bmN0aW9uKGkpe1xyXG5cdFx0XHRyZXR1cm4gJChpKS5kYXRhKCdkYXRlcGlja2VyJyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudXBkYXRlRGF0ZXMoKTtcclxuXHR9O1xyXG5cdERhdGVSYW5nZVBpY2tlci5wcm90b3R5cGUgPSB7XHJcblx0XHR1cGRhdGVEYXRlczogZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5kYXRlcyA9ICQubWFwKHRoaXMucGlja2VycywgZnVuY3Rpb24oaSl7XHJcblx0XHRcdFx0cmV0dXJuIGkuZ2V0VVRDRGF0ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy51cGRhdGVSYW5nZXMoKTtcclxuXHRcdH0sXHJcblx0XHR1cGRhdGVSYW5nZXM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciByYW5nZSA9ICQubWFwKHRoaXMuZGF0ZXMsIGZ1bmN0aW9uKGQpe1xyXG5cdFx0XHRcdHJldHVybiBkLnZhbHVlT2YoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCQuZWFjaCh0aGlzLnBpY2tlcnMsIGZ1bmN0aW9uKGksIHApe1xyXG5cdFx0XHRcdHAuc2V0UmFuZ2UocmFuZ2UpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRkYXRlVXBkYXRlZDogZnVuY3Rpb24oZSl7XHJcblx0XHRcdC8vIGB0aGlzLnVwZGF0aW5nYCBpcyBhIHdvcmthcm91bmQgZm9yIHByZXZlbnRpbmcgaW5maW5pdGUgcmVjdXJzaW9uXHJcblx0XHRcdC8vIGJldHdlZW4gYGNoYW5nZURhdGVgIHRyaWdnZXJpbmcgYW5kIGBzZXRVVENEYXRlYCBjYWxsaW5nLiAgVW50aWxcclxuXHRcdFx0Ly8gdGhlcmUgaXMgYSBiZXR0ZXIgbWVjaGFuaXNtLlxyXG5cdFx0XHRpZiAodGhpcy51cGRhdGluZylcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdHRoaXMudXBkYXRpbmcgPSB0cnVlO1xyXG5cclxuXHRcdFx0dmFyIGRwID0gJChlLnRhcmdldCkuZGF0YSgnZGF0ZXBpY2tlcicpLFxyXG5cdFx0XHRcdG5ld19kYXRlID0gZHAuZ2V0VVRDRGF0ZSgpLFxyXG5cdFx0XHRcdGkgPSAkLmluQXJyYXkoZS50YXJnZXQsIHRoaXMuaW5wdXRzKSxcclxuXHRcdFx0XHRsID0gdGhpcy5pbnB1dHMubGVuZ3RoO1xyXG5cdFx0XHRpZiAoaSA9PT0gLTEpXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0JC5lYWNoKHRoaXMucGlja2VycywgZnVuY3Rpb24oaSwgcCl7XHJcblx0XHRcdFx0aWYgKCFwLmdldFVUQ0RhdGUoKSlcclxuXHRcdFx0XHRcdHAuc2V0VVRDRGF0ZShuZXdfZGF0ZSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKG5ld19kYXRlIDwgdGhpcy5kYXRlc1tpXSl7XHJcblx0XHRcdFx0Ly8gRGF0ZSBiZWluZyBtb3ZlZCBlYXJsaWVyL2xlZnRcclxuXHRcdFx0XHR3aGlsZSAoaSA+PSAwICYmIG5ld19kYXRlIDwgdGhpcy5kYXRlc1tpXSl7XHJcblx0XHRcdFx0XHR0aGlzLnBpY2tlcnNbaS0tXS5zZXRVVENEYXRlKG5ld19kYXRlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAobmV3X2RhdGUgPiB0aGlzLmRhdGVzW2ldKXtcclxuXHRcdFx0XHQvLyBEYXRlIGJlaW5nIG1vdmVkIGxhdGVyL3JpZ2h0XHJcblx0XHRcdFx0d2hpbGUgKGkgPCBsICYmIG5ld19kYXRlID4gdGhpcy5kYXRlc1tpXSl7XHJcblx0XHRcdFx0XHR0aGlzLnBpY2tlcnNbaSsrXS5zZXRVVENEYXRlKG5ld19kYXRlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy51cGRhdGVEYXRlcygpO1xyXG5cclxuXHRcdFx0ZGVsZXRlIHRoaXMudXBkYXRpbmc7XHJcblx0XHR9LFxyXG5cdFx0cmVtb3ZlOiBmdW5jdGlvbigpe1xyXG5cdFx0XHQkLm1hcCh0aGlzLnBpY2tlcnMsIGZ1bmN0aW9uKHApeyBwLnJlbW92ZSgpOyB9KTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZXBpY2tlcjtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBvcHRzX2Zyb21fZWwoZWwsIHByZWZpeCl7XHJcblx0XHQvLyBEZXJpdmUgb3B0aW9ucyBmcm9tIGVsZW1lbnQgZGF0YS1hdHRyc1xyXG5cdFx0dmFyIGRhdGEgPSAkKGVsKS5kYXRhKCksXHJcblx0XHRcdG91dCA9IHt9LCBpbmtleSxcclxuXHRcdFx0cmVwbGFjZSA9IG5ldyBSZWdFeHAoJ14nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnKFtBLVpdKScpO1xyXG5cdFx0cHJlZml4ID0gbmV3IFJlZ0V4cCgnXicgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSk7XHJcblx0XHRmdW5jdGlvbiByZV9sb3dlcihfLGEpe1xyXG5cdFx0XHRyZXR1cm4gYS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cdFx0Zm9yICh2YXIga2V5IGluIGRhdGEpXHJcblx0XHRcdGlmIChwcmVmaXgudGVzdChrZXkpKXtcclxuXHRcdFx0XHRpbmtleSA9IGtleS5yZXBsYWNlKHJlcGxhY2UsIHJlX2xvd2VyKTtcclxuXHRcdFx0XHRvdXRbaW5rZXldID0gZGF0YVtrZXldO1xyXG5cdFx0XHR9XHJcblx0XHRyZXR1cm4gb3V0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb3B0c19mcm9tX2xvY2FsZShsYW5nKXtcclxuXHRcdC8vIERlcml2ZSBvcHRpb25zIGZyb20gbG9jYWxlIHBsdWdpbnNcclxuXHRcdHZhciBvdXQgPSB7fTtcclxuXHRcdC8vIENoZWNrIGlmIFwiZGUtREVcIiBzdHlsZSBkYXRlIGlzIGF2YWlsYWJsZSwgaWYgbm90IGxhbmd1YWdlIHNob3VsZFxyXG5cdFx0Ly8gZmFsbGJhY2sgdG8gMiBsZXR0ZXIgY29kZSBlZyBcImRlXCJcclxuXHRcdGlmICghZGF0ZXNbbGFuZ10pe1xyXG5cdFx0XHRsYW5nID0gbGFuZy5zcGxpdCgnLScpWzBdO1xyXG5cdFx0XHRpZiAoIWRhdGVzW2xhbmddKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHZhciBkID0gZGF0ZXNbbGFuZ107XHJcblx0XHQkLmVhY2gobG9jYWxlX29wdHMsIGZ1bmN0aW9uKGksayl7XHJcblx0XHRcdGlmIChrIGluIGQpXHJcblx0XHRcdFx0b3V0W2tdID0gZFtrXTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG91dDtcclxuXHR9XHJcblxyXG5cdHZhciBvbGQgPSAkLmZuLmRhdGVwaWNrZXI7XHJcblx0JC5mbi5kYXRlcGlja2VyID0gZnVuY3Rpb24ob3B0aW9uKXtcclxuXHRcdHZhciBhcmdzID0gQXJyYXkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxuXHRcdGFyZ3Muc2hpZnQoKTtcclxuXHRcdHZhciBpbnRlcm5hbF9yZXR1cm47XHJcblx0XHR0aGlzLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRkYXRhID0gJHRoaXMuZGF0YSgnZGF0ZXBpY2tlcicpLFxyXG5cdFx0XHRcdG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb247XHJcblx0XHRcdGlmICghZGF0YSl7XHJcblx0XHRcdFx0dmFyIGVsb3B0cyA9IG9wdHNfZnJvbV9lbCh0aGlzLCAnZGF0ZScpLFxyXG5cdFx0XHRcdFx0Ly8gUHJlbGltaW5hcnkgb3Rpb25zXHJcblx0XHRcdFx0XHR4b3B0cyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgZWxvcHRzLCBvcHRpb25zKSxcclxuXHRcdFx0XHRcdGxvY29wdHMgPSBvcHRzX2Zyb21fbG9jYWxlKHhvcHRzLmxhbmd1YWdlKSxcclxuXHRcdFx0XHRcdC8vIE9wdGlvbnMgcHJpb3JpdHk6IGpzIGFyZ3MsIGRhdGEtYXR0cnMsIGxvY2FsZXMsIGRlZmF1bHRzXHJcblx0XHRcdFx0XHRvcHRzID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBsb2NvcHRzLCBlbG9wdHMsIG9wdGlvbnMpO1xyXG5cdFx0XHRcdGlmICgkdGhpcy5pcygnLmlucHV0LWRhdGVyYW5nZScpIHx8IG9wdHMuaW5wdXRzKXtcclxuXHRcdFx0XHRcdHZhciByb3B0cyA9IHtcclxuXHRcdFx0XHRcdFx0aW5wdXRzOiBvcHRzLmlucHV0cyB8fCAkdGhpcy5maW5kKCdpbnB1dCcpLnRvQXJyYXkoKVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdCR0aGlzLmRhdGEoJ2RhdGVwaWNrZXInLCAoZGF0YSA9IG5ldyBEYXRlUmFuZ2VQaWNrZXIodGhpcywgJC5leHRlbmQob3B0cywgcm9wdHMpKSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdCR0aGlzLmRhdGEoJ2RhdGVwaWNrZXInLCAoZGF0YSA9IG5ldyBEYXRlcGlja2VyKHRoaXMsIG9wdHMpKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgZGF0YVtvcHRpb25dID09PSAnZnVuY3Rpb24nKXtcclxuXHRcdFx0XHRpbnRlcm5hbF9yZXR1cm4gPSBkYXRhW29wdGlvbl0uYXBwbHkoZGF0YSwgYXJncyk7XHJcblx0XHRcdFx0aWYgKGludGVybmFsX3JldHVybiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGlmIChpbnRlcm5hbF9yZXR1cm4gIT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuIGludGVybmFsX3JldHVybjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0dmFyIGRlZmF1bHRzID0gJC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzID0ge1xyXG5cdFx0YXV0b2Nsb3NlOiBmYWxzZSxcclxuXHRcdGJlZm9yZVNob3dEYXk6ICQubm9vcCxcclxuXHRcdGNhbGVuZGFyV2Vla3M6IGZhbHNlLFxyXG5cdFx0Y2xlYXJCdG46IGZhbHNlLFxyXG5cdFx0ZGF5c09mV2Vla0Rpc2FibGVkOiBbXSxcclxuXHRcdGVuZERhdGU6IEluZmluaXR5LFxyXG5cdFx0Zm9yY2VQYXJzZTogdHJ1ZSxcclxuXHRcdGZvcm1hdDogJ21tL2RkL3l5eXknLFxyXG5cdFx0a2V5Ym9hcmROYXZpZ2F0aW9uOiB0cnVlLFxyXG5cdFx0bGFuZ3VhZ2U6ICdlbicsXHJcblx0XHRtaW5WaWV3TW9kZTogMCxcclxuXHRcdG11bHRpZGF0ZTogZmFsc2UsXHJcblx0XHRtdWx0aWRhdGVTZXBhcmF0b3I6ICcsJyxcclxuXHRcdG9yaWVudGF0aW9uOiBcImF1dG9cIixcclxuXHRcdHJ0bDogZmFsc2UsXHJcblx0XHRzdGFydERhdGU6IC1JbmZpbml0eSxcclxuXHRcdHN0YXJ0VmlldzogMCxcclxuXHRcdHRvZGF5QnRuOiBmYWxzZSxcclxuXHRcdHRvZGF5SGlnaGxpZ2h0OiBmYWxzZSxcclxuXHRcdHdlZWtTdGFydDogMFxyXG5cdH07XHJcblx0dmFyIGxvY2FsZV9vcHRzID0gJC5mbi5kYXRlcGlja2VyLmxvY2FsZV9vcHRzID0gW1xyXG5cdFx0J2Zvcm1hdCcsXHJcblx0XHQncnRsJyxcclxuXHRcdCd3ZWVrU3RhcnQnXHJcblx0XTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuQ29uc3RydWN0b3IgPSBEYXRlcGlja2VyO1xyXG5cdHZhciBkYXRlcyA9ICQuZm4uZGF0ZXBpY2tlci5kYXRlcyA9IHtcclxuXHRcdGVuOiB7XHJcblx0XHRcdGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCIsIFwiU3VuZGF5XCJdLFxyXG5cdFx0XHRkYXlzU2hvcnQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXSxcclxuXHRcdFx0ZGF5c01pbjogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIiwgXCJTdVwiXSxcclxuXHRcdFx0bW9udGhzOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcclxuXHRcdFx0bW9udGhzU2hvcnQ6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcclxuXHRcdFx0dG9kYXk6IFwiVG9kYXlcIixcclxuXHRcdFx0Y2xlYXI6IFwiQ2xlYXJcIlxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciBEUEdsb2JhbCA9IHtcclxuXHRcdG1vZGVzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjbHNOYW1lOiAnZGF5cycsXHJcblx0XHRcdFx0bmF2Rm5jOiAnTW9udGgnLFxyXG5cdFx0XHRcdG5hdlN0ZXA6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNsc05hbWU6ICdtb250aHMnLFxyXG5cdFx0XHRcdG5hdkZuYzogJ0Z1bGxZZWFyJyxcclxuXHRcdFx0XHRuYXZTdGVwOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjbHNOYW1lOiAneWVhcnMnLFxyXG5cdFx0XHRcdG5hdkZuYzogJ0Z1bGxZZWFyJyxcclxuXHRcdFx0XHRuYXZTdGVwOiAxMFxyXG5cdFx0fV0sXHJcblx0XHRpc0xlYXBZZWFyOiBmdW5jdGlvbih5ZWFyKXtcclxuXHRcdFx0cmV0dXJuICgoKHllYXIgJSA0ID09PSAwKSAmJiAoeWVhciAlIDEwMCAhPT0gMCkpIHx8ICh5ZWFyICUgNDAwID09PSAwKSk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0RGF5c0luTW9udGg6IGZ1bmN0aW9uKHllYXIsIG1vbnRoKXtcclxuXHRcdFx0cmV0dXJuIFszMSwgKERQR2xvYmFsLmlzTGVhcFllYXIoeWVhcikgPyAyOSA6IDI4KSwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vbnRoXTtcclxuXHRcdH0sXHJcblx0XHR2YWxpZFBhcnRzOiAvZGQ/fEREP3xtbT98TU0/fHl5KD86eXkpPy9nLFxyXG5cdFx0bm9ucHVuY3R1YXRpb246IC9bXiAtXFwvOi1AXFxbXFx1MzQwMC1cXHU5ZmZmLWB7LX5cXHRcXG5cXHJdKy9nLFxyXG5cdFx0cGFyc2VGb3JtYXQ6IGZ1bmN0aW9uKGZvcm1hdCl7XHJcblx0XHRcdC8vIElFIHRyZWF0cyBcXDAgYXMgYSBzdHJpbmcgZW5kIGluIGlucHV0cyAodHJ1bmNhdGluZyB0aGUgdmFsdWUpLFxyXG5cdFx0XHQvLyBzbyBpdCdzIGEgYmFkIGZvcm1hdCBkZWxpbWl0ZXIsIGFueXdheVxyXG5cdFx0XHR2YXIgc2VwYXJhdG9ycyA9IGZvcm1hdC5yZXBsYWNlKHRoaXMudmFsaWRQYXJ0cywgJ1xcMCcpLnNwbGl0KCdcXDAnKSxcclxuXHRcdFx0XHRwYXJ0cyA9IGZvcm1hdC5tYXRjaCh0aGlzLnZhbGlkUGFydHMpO1xyXG5cdFx0XHRpZiAoIXNlcGFyYXRvcnMgfHwgIXNlcGFyYXRvcnMubGVuZ3RoIHx8ICFwYXJ0cyB8fCBwYXJ0cy5sZW5ndGggPT09IDApe1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGF0ZSBmb3JtYXQuXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7c2VwYXJhdG9yczogc2VwYXJhdG9ycywgcGFydHM6IHBhcnRzfTtcclxuXHRcdH0sXHJcblx0XHRwYXJzZURhdGU6IGZ1bmN0aW9uKGRhdGUsIGZvcm1hdCwgbGFuZ3VhZ2Upe1xyXG5cdFx0XHRpZiAoIWRhdGUpXHJcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdFx0aWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKVxyXG5cdFx0XHRcdHJldHVybiBkYXRlO1xyXG5cdFx0XHRpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpXHJcblx0XHRcdFx0Zm9ybWF0ID0gRFBHbG9iYWwucGFyc2VGb3JtYXQoZm9ybWF0KTtcclxuXHRcdFx0dmFyIHBhcnRfcmUgPSAvKFtcXC0rXVxcZCspKFtkbXd5XSkvLFxyXG5cdFx0XHRcdHBhcnRzID0gZGF0ZS5tYXRjaCgvKFtcXC0rXVxcZCspKFtkbXd5XSkvZyksXHJcblx0XHRcdFx0cGFydCwgZGlyLCBpO1xyXG5cdFx0XHRpZiAoL15bXFwtK11cXGQrW2Rtd3ldKFtcXHMsXStbXFwtK11cXGQrW2Rtd3ldKSokLy50ZXN0KGRhdGUpKXtcclxuXHRcdFx0XHRkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRmb3IgKGk9MDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdHBhcnQgPSBwYXJ0X3JlLmV4ZWMocGFydHNbaV0pO1xyXG5cdFx0XHRcdFx0ZGlyID0gcGFyc2VJbnQocGFydFsxXSk7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKHBhcnRbMl0pe1xyXG5cdFx0XHRcdFx0XHRjYXNlICdkJzpcclxuXHRcdFx0XHRcdFx0XHRkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaXIpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdtJzpcclxuXHRcdFx0XHRcdFx0XHRkYXRlID0gRGF0ZXBpY2tlci5wcm90b3R5cGUubW92ZU1vbnRoLmNhbGwoRGF0ZXBpY2tlci5wcm90b3R5cGUsIGRhdGUsIGRpcik7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3cnOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpciAqIDcpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd5JzpcclxuXHRcdFx0XHRcdFx0XHRkYXRlID0gRGF0ZXBpY2tlci5wcm90b3R5cGUubW92ZVllYXIuY2FsbChEYXRlcGlja2VyLnByb3RvdHlwZSwgZGF0ZSwgZGlyKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIFVUQ0RhdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkYXRlLmdldFVUQ01vbnRoKCksIGRhdGUuZ2V0VVRDRGF0ZSgpLCAwLCAwLCAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRwYXJ0cyA9IGRhdGUgJiYgZGF0ZS5tYXRjaCh0aGlzLm5vbnB1bmN0dWF0aW9uKSB8fCBbXTtcclxuXHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHZhciBwYXJzZWQgPSB7fSxcclxuXHRcdFx0XHRzZXR0ZXJzX29yZGVyID0gWyd5eXl5JywgJ3l5JywgJ00nLCAnTU0nLCAnbScsICdtbScsICdkJywgJ2RkJ10sXHJcblx0XHRcdFx0c2V0dGVyc19tYXAgPSB7XHJcblx0XHRcdFx0XHR5eXl5OiBmdW5jdGlvbihkLHYpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZC5zZXRVVENGdWxsWWVhcih2KTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR5eTogZnVuY3Rpb24oZCx2KXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGQuc2V0VVRDRnVsbFllYXIoMjAwMCt2KTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRtOiBmdW5jdGlvbihkLHYpe1xyXG5cdFx0XHRcdFx0XHRpZiAoaXNOYU4oZCkpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQ7XHJcblx0XHRcdFx0XHRcdHYgLT0gMTtcclxuXHRcdFx0XHRcdFx0d2hpbGUgKHYgPCAwKSB2ICs9IDEyO1xyXG5cdFx0XHRcdFx0XHR2ICU9IDEyO1xyXG5cdFx0XHRcdFx0XHRkLnNldFVUQ01vbnRoKHYpO1xyXG5cdFx0XHRcdFx0XHR3aGlsZSAoZC5nZXRVVENNb250aCgpICE9PSB2KVxyXG5cdFx0XHRcdFx0XHRcdGQuc2V0VVRDRGF0ZShkLmdldFVUQ0RhdGUoKS0xKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGQ7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZDogZnVuY3Rpb24oZCx2KXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGQuc2V0VVRDRGF0ZSh2KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHZhbCwgZmlsdGVyZWQ7XHJcblx0XHRcdHNldHRlcnNfbWFwWydNJ10gPSBzZXR0ZXJzX21hcFsnTU0nXSA9IHNldHRlcnNfbWFwWydtbSddID0gc2V0dGVyc19tYXBbJ20nXTtcclxuXHRcdFx0c2V0dGVyc19tYXBbJ2RkJ10gPSBzZXR0ZXJzX21hcFsnZCddO1xyXG5cdFx0XHRkYXRlID0gVVRDRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIDAsIDAsIDApO1xyXG5cdFx0XHR2YXIgZnBhcnRzID0gZm9ybWF0LnBhcnRzLnNsaWNlKCk7XHJcblx0XHRcdC8vIFJlbW92ZSBub29wIHBhcnRzXHJcblx0XHRcdGlmIChwYXJ0cy5sZW5ndGggIT09IGZwYXJ0cy5sZW5ndGgpe1xyXG5cdFx0XHRcdGZwYXJ0cyA9ICQoZnBhcnRzKS5maWx0ZXIoZnVuY3Rpb24oaSxwKXtcclxuXHRcdFx0XHRcdHJldHVybiAkLmluQXJyYXkocCwgc2V0dGVyc19vcmRlcikgIT09IC0xO1xyXG5cdFx0XHRcdH0pLnRvQXJyYXkoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBQcm9jZXNzIHJlbWFpbmRlclxyXG5cdFx0XHRmdW5jdGlvbiBtYXRjaF9wYXJ0KCl7XHJcblx0XHRcdFx0dmFyIG0gPSB0aGlzLnNsaWNlKDAsIHBhcnRzW2ldLmxlbmd0aCksXHJcblx0XHRcdFx0XHRwID0gcGFydHNbaV0uc2xpY2UoMCwgbS5sZW5ndGgpO1xyXG5cdFx0XHRcdHJldHVybiBtID09PSBwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwYXJ0cy5sZW5ndGggPT09IGZwYXJ0cy5sZW5ndGgpe1xyXG5cdFx0XHRcdHZhciBjbnQ7XHJcblx0XHRcdFx0Zm9yIChpPTAsIGNudCA9IGZwYXJ0cy5sZW5ndGg7IGkgPCBjbnQ7IGkrKyl7XHJcblx0XHRcdFx0XHR2YWwgPSBwYXJzZUludChwYXJ0c1tpXSwgMTApO1xyXG5cdFx0XHRcdFx0cGFydCA9IGZwYXJ0c1tpXTtcclxuXHRcdFx0XHRcdGlmIChpc05hTih2YWwpKXtcclxuXHRcdFx0XHRcdFx0c3dpdGNoIChwYXJ0KXtcclxuXHRcdFx0XHRcdFx0XHRjYXNlICdNTSc6XHJcblx0XHRcdFx0XHRcdFx0XHRmaWx0ZXJlZCA9ICQoZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRocykuZmlsdGVyKG1hdGNoX3BhcnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsID0gJC5pbkFycmF5KGZpbHRlcmVkWzBdLCBkYXRlc1tsYW5ndWFnZV0ubW9udGhzKSArIDE7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICdNJzpcclxuXHRcdFx0XHRcdFx0XHRcdGZpbHRlcmVkID0gJChkYXRlc1tsYW5ndWFnZV0ubW9udGhzU2hvcnQpLmZpbHRlcihtYXRjaF9wYXJ0KTtcclxuXHRcdFx0XHRcdFx0XHRcdHZhbCA9ICQuaW5BcnJheShmaWx0ZXJlZFswXSwgZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRoc1Nob3J0KSArIDE7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cGFyc2VkW3BhcnRdID0gdmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgX2RhdGUsIHM7XHJcblx0XHRcdFx0Zm9yIChpPTA7IGkgPCBzZXR0ZXJzX29yZGVyLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdHMgPSBzZXR0ZXJzX29yZGVyW2ldO1xyXG5cdFx0XHRcdFx0aWYgKHMgaW4gcGFyc2VkICYmICFpc05hTihwYXJzZWRbc10pKXtcclxuXHRcdFx0XHRcdFx0X2RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuXHRcdFx0XHRcdFx0c2V0dGVyc19tYXBbc10oX2RhdGUsIHBhcnNlZFtzXSk7XHJcblx0XHRcdFx0XHRcdGlmICghaXNOYU4oX2RhdGUpKVxyXG5cdFx0XHRcdFx0XHRcdGRhdGUgPSBfZGF0ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGRhdGU7XHJcblx0XHR9LFxyXG5cdFx0Zm9ybWF0RGF0ZTogZnVuY3Rpb24oZGF0ZSwgZm9ybWF0LCBsYW5ndWFnZSl7XHJcblx0XHRcdGlmICghZGF0ZSlcclxuXHRcdFx0XHRyZXR1cm4gJyc7XHJcblx0XHRcdGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJylcclxuXHRcdFx0XHRmb3JtYXQgPSBEUEdsb2JhbC5wYXJzZUZvcm1hdChmb3JtYXQpO1xyXG5cdFx0XHR2YXIgdmFsID0ge1xyXG5cdFx0XHRcdGQ6IGRhdGUuZ2V0VVRDRGF0ZSgpLFxyXG5cdFx0XHRcdEQ6IGRhdGVzW2xhbmd1YWdlXS5kYXlzU2hvcnRbZGF0ZS5nZXRVVENEYXkoKV0sXHJcblx0XHRcdFx0REQ6IGRhdGVzW2xhbmd1YWdlXS5kYXlzW2RhdGUuZ2V0VVRDRGF5KCldLFxyXG5cdFx0XHRcdG06IGRhdGUuZ2V0VVRDTW9udGgoKSArIDEsXHJcblx0XHRcdFx0TTogZGF0ZXNbbGFuZ3VhZ2VdLm1vbnRoc1Nob3J0W2RhdGUuZ2V0VVRDTW9udGgoKV0sXHJcblx0XHRcdFx0TU06IGRhdGVzW2xhbmd1YWdlXS5tb250aHNbZGF0ZS5nZXRVVENNb250aCgpXSxcclxuXHRcdFx0XHR5eTogZGF0ZS5nZXRVVENGdWxsWWVhcigpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpLFxyXG5cdFx0XHRcdHl5eXk6IGRhdGUuZ2V0VVRDRnVsbFllYXIoKVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR2YWwuZGQgPSAodmFsLmQgPCAxMCA/ICcwJyA6ICcnKSArIHZhbC5kO1xyXG5cdFx0XHR2YWwubW0gPSAodmFsLm0gPCAxMCA/ICcwJyA6ICcnKSArIHZhbC5tO1xyXG5cdFx0XHRkYXRlID0gW107XHJcblx0XHRcdHZhciBzZXBzID0gJC5leHRlbmQoW10sIGZvcm1hdC5zZXBhcmF0b3JzKTtcclxuXHRcdFx0Zm9yICh2YXIgaT0wLCBjbnQgPSBmb3JtYXQucGFydHMubGVuZ3RoOyBpIDw9IGNudDsgaSsrKXtcclxuXHRcdFx0XHRpZiAoc2Vwcy5sZW5ndGgpXHJcblx0XHRcdFx0XHRkYXRlLnB1c2goc2Vwcy5zaGlmdCgpKTtcclxuXHRcdFx0XHRkYXRlLnB1c2godmFsW2Zvcm1hdC5wYXJ0c1tpXV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBkYXRlLmpvaW4oJycpO1xyXG5cdFx0fSxcclxuXHRcdGhlYWRUZW1wbGF0ZTogJzx0aGVhZD4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8dHI+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8dGggY2xhc3M9XCJwcmV2XCI+JmxhcXVvOzwvdGg+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8dGggY29sc3Bhbj1cIjVcIiBjbGFzcz1cImRhdGVwaWNrZXItc3dpdGNoXCI+PC90aD4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0Jzx0aCBjbGFzcz1cIm5leHRcIj4mcmFxdW87PC90aD4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8L3RyPicrXHJcblx0XHRcdFx0XHRcdCc8L3RoZWFkPicsXHJcblx0XHRjb250VGVtcGxhdGU6ICc8dGJvZHk+PHRyPjx0ZCBjb2xzcGFuPVwiN1wiPjwvdGQ+PC90cj48L3Rib2R5PicsXHJcblx0XHRmb290VGVtcGxhdGU6ICc8dGZvb3Q+JytcclxuXHRcdFx0XHRcdFx0XHQnPHRyPicrXHJcblx0XHRcdFx0XHRcdFx0XHQnPHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJ0b2RheVwiPjwvdGg+JytcclxuXHRcdFx0XHRcdFx0XHQnPC90cj4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8dHI+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8dGggY29sc3Bhbj1cIjdcIiBjbGFzcz1cImNsZWFyXCI+PC90aD4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8L3RyPicrXHJcblx0XHRcdFx0XHRcdCc8L3Rmb290PidcclxuXHR9O1xyXG5cdERQR2xvYmFsLnRlbXBsYXRlID0gJzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyXCI+JytcclxuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGF5c1wiPicrXHJcblx0XHRcdFx0XHRcdFx0XHQnPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtY29uZGVuc2VkXCI+JytcclxuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuaGVhZFRlbXBsYXRlK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQnPHRib2R5PjwvdGJvZHk+JytcclxuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xyXG5cdFx0XHRcdFx0XHRcdFx0JzwvdGFibGU+JytcclxuXHRcdFx0XHRcdFx0XHQnPC9kaXY+JytcclxuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItbW9udGhzXCI+JytcclxuXHRcdFx0XHRcdFx0XHRcdCc8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1jb25kZW5zZWRcIj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5oZWFkVGVtcGxhdGUrXHJcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmNvbnRUZW1wbGF0ZStcclxuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuZm9vdFRlbXBsYXRlK1xyXG5cdFx0XHRcdFx0XHRcdFx0JzwvdGFibGU+JytcclxuXHRcdFx0XHRcdFx0XHQnPC9kaXY+JytcclxuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXIteWVhcnNcIj4nK1xyXG5cdFx0XHRcdFx0XHRcdFx0Jzx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWNvbmRlbnNlZFwiPicrXHJcblx0XHRcdFx0XHRcdFx0XHRcdERQR2xvYmFsLmhlYWRUZW1wbGF0ZStcclxuXHRcdFx0XHRcdFx0XHRcdFx0RFBHbG9iYWwuY29udFRlbXBsYXRlK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHREUEdsb2JhbC5mb290VGVtcGxhdGUrXHJcblx0XHRcdFx0XHRcdFx0XHQnPC90YWJsZT4nK1xyXG5cdFx0XHRcdFx0XHRcdCc8L2Rpdj4nK1xyXG5cdFx0XHRcdFx0XHQnPC9kaXY+JztcclxuXHJcblx0JC5mbi5kYXRlcGlja2VyLkRQR2xvYmFsID0gRFBHbG9iYWw7XHJcblxyXG5cclxuXHQvKiBEQVRFUElDS0VSIE5PIENPTkZMSUNUXHJcblx0KiA9PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5cdCQuZm4uZGF0ZXBpY2tlci5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKXtcclxuXHRcdCQuZm4uZGF0ZXBpY2tlciA9IG9sZDtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH07XHJcblxyXG5cclxuXHQvKiBEQVRFUElDS0VSIERBVEEtQVBJXHJcblx0KiA9PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcblx0JChkb2N1bWVudCkub24oXHJcblx0XHQnZm9jdXMuZGF0ZXBpY2tlci5kYXRhLWFwaSBjbGljay5kYXRlcGlja2VyLmRhdGEtYXBpJyxcclxuXHRcdCdbZGF0YS1wcm92aWRlPVwiZGF0ZXBpY2tlclwiXScsXHJcblx0XHRmdW5jdGlvbihlKXtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoJ2RhdGVwaWNrZXInKSlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Ly8gY29tcG9uZW50IGNsaWNrIHJlcXVpcmVzIHVzIHRvIGV4cGxpY2l0bHkgc2hvdyBpdFxyXG5cdFx0XHQkdGhpcy5kYXRlcGlja2VyKCdzaG93Jyk7XHJcblx0XHR9XHJcblx0KTtcclxuXHQkKGZ1bmN0aW9uKCl7XHJcblx0XHQkKCdbZGF0YS1wcm92aWRlPVwiZGF0ZXBpY2tlci1pbmxpbmVcIl0nKS5kYXRlcGlja2VyKCk7XHJcblx0fSk7XHJcblxyXG59KHdpbmRvdy5qUXVlcnkpKTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2J1bmRsZS9wbHVnaW5zL2RhdGVwaWNrZXIvYm9vdHN0cmFwLWRhdGVwaWNrZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgNVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJcXG48aW5wdXQgdi1tb2RlbD1cXFwiaW5wdXRkYXRlXFxcIiBjbGFzcz1cXFwiaW5wdXRkYXRlXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwiXFxcIi8+XFxuXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLWh0bWwtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9pbnB1dC1kYXRlLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgX192dWVfc2NyaXB0X18sIF9fdnVlX3RlbXBsYXRlX19cbl9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1lczIwMTUmcGx1Z2luc1tdPXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zdWJqZWN0LWdyYWRlLnZ1ZVwiKVxuaWYgKF9fdnVlX3NjcmlwdF9fICYmXG4gICAgX192dWVfc2NyaXB0X18uX19lc01vZHVsZSAmJlxuICAgIE9iamVjdC5rZXlzKF9fdnVlX3NjcmlwdF9fKS5sZW5ndGggPiAxKSB7XG4gIGNvbnNvbGUud2FybihcIlt2dWUtbG9hZGVyXSBzcmNcXFxcY29tcG9uZW50c1xcXFxzdWJqZWN0LWdyYWRlLnZ1ZTogbmFtZWQgZXhwb3J0cyBpbiAqLnZ1ZSBmaWxlcyBhcmUgaWdub3JlZC5cIil9XG5fX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWh0bWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3N1YmplY3QtZ3JhZGUudnVlXCIpXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX3NjcmlwdF9fIHx8IHt9XG5pZiAobW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSkgbW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0XG5pZiAoX192dWVfdGVtcGxhdGVfXykge1xuKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgfHwgKG1vZHVsZS5leHBvcnRzLm9wdGlvbnMgPSB7fSkpIDogbW9kdWxlLmV4cG9ydHMpLnRlbXBsYXRlID0gX192dWVfdGVtcGxhdGVfX1xufVxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIHZhciBpZCA9IFwiX3YtMDA1YzRlMmQvc3ViamVjdC1ncmFkZS52dWVcIlxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoaWQsIG1vZHVsZS5leHBvcnRzKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS51cGRhdGUoaWQsIG1vZHVsZS5leHBvcnRzLCBfX3Z1ZV90ZW1wbGF0ZV9fKVxuICB9XG59KSgpfVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9zdWJqZWN0LWdyYWRlLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCI8dGVtcGxhdGUgaWQ9XCJzdWJncmFkaWRcIj5cclxuICAgIDxzZWxlY3QgIHYtbW9kZWw9XCJzdWJncmFkaWRcIiBjbGFzcz1cInN1YmdyYWRpZFwiIHYtYmluZDp2YWx1ZT1cInN1YmdyYWRpZFwiPlxyXG4gICAgICAgIDxvcHRpb24gIHYtZm9yPVwic2luZ2xpc3RkYXRhIGluIHNpbmdsaXN0XCI+e3tzaW5nbGlzdGRhdGF9fTwvb3B0aW9uPlxyXG4gICAgPC9zZWxlY3Q+XHJcbiA8L3RlbXBsYXRlPlxyXG5cclxuPCEtLSB2LeeahOWAvOW/hemhu+aYr+ihqOi+vuW8j+S4jeiDveaYr+W4puino+aekOeahOmCo+enjXt7fX0gIC0tPlxyXG48IS0t6K+35rGCYWpheOaVsOaNri0tPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICB0ZW1wbGF0ZTogJyNzdWJncmFkaWQnLFxyXG4gICAgICAgIHByb3BzOlsnc2luZ2xpc3QnXSxcclxuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICBzdWJncmFkaWQ6dGhpcy5zaW5nbGlzdFswXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOntcclxuICAgICAgICAgICAgZ2V0OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpbmdsaXN0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2luZ2xpc3RbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3ViamVjdC1ncmFkZS52dWU/Nzg0NjY1NmRcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPHNlbGVjdCAgdi1tb2RlbD1cXFwic3ViZ3JhZGlkXFxcIiBjbGFzcz1cXFwic3ViZ3JhZGlkXFxcIiB2LWJpbmQ6dmFsdWU9XFxcInN1YmdyYWRpZFxcXCI+XFxuICAgIDxvcHRpb24gIHYtZm9yPVxcXCJzaW5nbGlzdGRhdGEgaW4gc2luZ2xpc3RcXFwiPnt7c2luZ2xpc3RkYXRhfX08L29wdGlvbj5cXG48L3NlbGVjdD5cXG5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL3N1YmplY3QtZ3JhZGUudnVlXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=