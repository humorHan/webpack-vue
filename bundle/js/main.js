webpackJsonp([3,10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var Router = __webpack_require__(16);
	var App = __webpack_require__(17);
	
	Vue.use(Router);
	var router = new Router();
	
	router.map({
	    'demo': {
	        component: function(resolve){
	            __webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(19)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	        }
	    },
	    //试卷管理-上传统计
	    'paperManage_uploadStatistics': {
	        component: function(resolve){
	            __webpack_require__.e/* require */(5, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(22)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	        }
	    },
	    'paperTypeManage': {
	        component: function(resolve){
	            __webpack_require__.e/* require */(6, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(33)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	        }
	    },
	    'choseQuestion':{
	        component: function(resolve){
	            __webpack_require__.e/* require */(7, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(44)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	        }
	    },
	    //试题管理-试题一审
	    'paperManage':{
	       component: function(resolve){
	           __webpack_require__.e/* require */(8, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(49)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	       }
	    },
	    //试题管理-试题审核
	    'paperList':{
	        component:function(resolve){
	           __webpack_require__.e/* require */(9, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(57)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	        }
	    }
	});
	
	router.beforeEach(function () {
	    window.scrollTo(0, 0)
	});
	
	router.redirect({
	    '*': '/demo'
	});
	
	router.start(App, '#app');

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }
	
	      path = tryDecode(path);
	      if (!path) return;
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';
	
	    var activeId = 0;
	
	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;
	
	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });
	
	    Vue.directive('link', {
	      priority: onPriority - 2,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	
	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4906b510/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports = "\n<div id=\"wrapper\">\n  <router-view\n    class=\"view\"\n    keep-alive\n    transition\n    transition-mode=\"out-in\">\n\n  </router-view>\n</div>\n";

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwLnZ1ZT8xM2NiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEosNkNBQUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwwSiw2Q0FBQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSwwSiw2Q0FBQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSwwSiw2Q0FBQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHlKLDZDQUFBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EseUosNkNBQUE7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBQzs7QUFFRCwyQjs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLG9CQUFvQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Es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QTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFVBQVU7QUFDdkIsY0FBYSxXQUFXO0FBQ3hCLGNBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLFVBQVU7QUFDdkIsY0FBYSxXQUFXO0FBQ3hCLGNBQWEsT0FBTztBQUNwQixjQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFD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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCOztBQUU3QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLGtDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUE4QyxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUMsSTs7Ozs7OztBQ2pCRCw4SyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvdXRlciA9IHJlcXVpcmUoJ3Z1ZS1yb3V0ZXInKTtcclxudmFyIEFwcCA9IHJlcXVpcmUoJ0FwcC52dWUnKTtcclxuXHJcblZ1ZS51c2UoUm91dGVyKTtcclxudmFyIHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5tYXAoe1xyXG4gICAgJ2RlbW8nOiB7XHJcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbihyZXNvbHZlKXtcclxuICAgICAgICAgICAgcmVxdWlyZShbJ0RlbW8udnVlJ10sIHJlc29sdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+ivleWNt+euoeeQhi3kuIrkvKDnu5/orqFcclxuICAgICdwYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzJzoge1xyXG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24ocmVzb2x2ZSl7XHJcbiAgICAgICAgICAgIHJlcXVpcmUoWydwYXBlck1hbmFnZV91cGxvYWRTdGF0aXN0aWNzLnZ1ZSddLCByZXNvbHZlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ3BhcGVyVHlwZU1hbmFnZSc6IHtcclxuICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uKHJlc29sdmUpe1xyXG4gICAgICAgICAgICByZXF1aXJlKFsncGFwZXJUeXBlTWFuYWdlLnZ1ZSddLCByZXNvbHZlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgJ2Nob3NlUXVlc3Rpb24nOntcclxuICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uKHJlc29sdmUpe1xyXG4gICAgICAgICAgICByZXF1aXJlKFsnY2hvc2VRdWVzdGlvbi52dWUnXSwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v6K+V6aKY566h55CGLeivlemimOS4gOWuoVxyXG4gICAgJ3BhcGVyTWFuYWdlJzp7XHJcbiAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uKHJlc29sdmUpe1xyXG4gICAgICAgICAgIHJlcXVpcmUoWydwYXBlck1hbmFnZS52dWUnXSwgcmVzb2x2ZSk7XHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/or5XpopjnrqHnkIYt6K+V6aKY5a6h5qC4XHJcbiAgICAncGFwZXJMaXN0Jzp7XHJcbiAgICAgICAgY29tcG9uZW50OmZ1bmN0aW9uKHJlc29sdmUpe1xyXG4gICAgICAgICAgIHJlcXVpcmUoW1wicGFwZXJMaXN0LnZ1ZVwiXSxyZXNvbHZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxucm91dGVyLmJlZm9yZUVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbn0pO1xyXG5cclxucm91dGVyLnJlZGlyZWN0KHtcclxuICAgICcqJzogJy9kZW1vJ1xyXG59KTtcclxuXHJcbnJvdXRlci5zdGFydChBcHAsICcjYXBwJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gM1xuICoqLyIsIi8qIVxuICogdnVlLXJvdXRlciB2MC43LjEzXG4gKiAoYykgMjAxNiBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIGdsb2JhbC5WdWVSb3V0ZXIgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBiYWJlbEhlbHBlcnMgPSB7fTtcblxuICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBUYXJnZXQocGF0aCwgbWF0Y2hlciwgZGVsZWdhdGUpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMubWF0Y2hlciA9IG1hdGNoZXI7XG4gICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICB9XG5cbiAgVGFyZ2V0LnByb3RvdHlwZSA9IHtcbiAgICB0bzogZnVuY3Rpb24gdG8odGFyZ2V0LCBjYWxsYmFjaykge1xuICAgICAgdmFyIGRlbGVnYXRlID0gdGhpcy5kZWxlZ2F0ZTtcblxuICAgICAgaWYgKGRlbGVnYXRlICYmIGRlbGVnYXRlLndpbGxBZGRSb3V0ZSkge1xuICAgICAgICB0YXJnZXQgPSBkZWxlZ2F0ZS53aWxsQWRkUm91dGUodGhpcy5tYXRjaGVyLnRhcmdldCwgdGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXRjaGVyLmFkZCh0aGlzLnBhdGgsIHRhcmdldCk7XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaGF2ZSBhbiBhcmd1bWVudCBpbiB0aGUgZnVuY3Rpb24gcGFzc2VkIHRvIGB0b2BcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXRjaGVyLmFkZENoaWxkKHRoaXMucGF0aCwgdGFyZ2V0LCBjYWxsYmFjaywgdGhpcy5kZWxlZ2F0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gTWF0Y2hlcih0YXJnZXQpIHtcbiAgICB0aGlzLnJvdXRlcyA9IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIE1hdGNoZXIucHJvdG90eXBlID0ge1xuICAgIGFkZDogZnVuY3Rpb24gYWRkKHBhdGgsIGhhbmRsZXIpIHtcbiAgICAgIHRoaXMucm91dGVzW3BhdGhdID0gaGFuZGxlcjtcbiAgICB9LFxuXG4gICAgYWRkQ2hpbGQ6IGZ1bmN0aW9uIGFkZENoaWxkKHBhdGgsIHRhcmdldCwgY2FsbGJhY2ssIGRlbGVnYXRlKSB7XG4gICAgICB2YXIgbWF0Y2hlciA9IG5ldyBNYXRjaGVyKHRhcmdldCk7XG4gICAgICB0aGlzLmNoaWxkcmVuW3BhdGhdID0gbWF0Y2hlcjtcblxuICAgICAgdmFyIG1hdGNoID0gZ2VuZXJhdGVNYXRjaChwYXRoLCBtYXRjaGVyLCBkZWxlZ2F0ZSk7XG5cbiAgICAgIGlmIChkZWxlZ2F0ZSAmJiBkZWxlZ2F0ZS5jb250ZXh0RW50ZXJlZCkge1xuICAgICAgICBkZWxlZ2F0ZS5jb250ZXh0RW50ZXJlZCh0YXJnZXQsIG1hdGNoKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sobWF0Y2gpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZU1hdGNoKHN0YXJ0aW5nUGF0aCwgbWF0Y2hlciwgZGVsZWdhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGgsIG5lc3RlZENhbGxiYWNrKSB7XG4gICAgICB2YXIgZnVsbFBhdGggPSBzdGFydGluZ1BhdGggKyBwYXRoO1xuXG4gICAgICBpZiAobmVzdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgbmVzdGVkQ2FsbGJhY2soZ2VuZXJhdGVNYXRjaChmdWxsUGF0aCwgbWF0Y2hlciwgZGVsZWdhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KHN0YXJ0aW5nUGF0aCArIHBhdGgsIG1hdGNoZXIsIGRlbGVnYXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUm91dGUocm91dGVBcnJheSwgcGF0aCwgaGFuZGxlcikge1xuICAgIHZhciBsZW4gPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcm91dGVBcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxlbiArPSByb3V0ZUFycmF5W2ldLnBhdGgubGVuZ3RoO1xuICAgIH1cblxuICAgIHBhdGggPSBwYXRoLnN1YnN0cihsZW4pO1xuICAgIHZhciByb3V0ZSA9IHsgcGF0aDogcGF0aCwgaGFuZGxlcjogaGFuZGxlciB9O1xuICAgIHJvdXRlQXJyYXkucHVzaChyb3V0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlYWNoUm91dGUoYmFzZVJvdXRlLCBtYXRjaGVyLCBjYWxsYmFjaywgYmluZGluZykge1xuICAgIHZhciByb3V0ZXMgPSBtYXRjaGVyLnJvdXRlcztcblxuICAgIGZvciAodmFyIHBhdGggaW4gcm91dGVzKSB7XG4gICAgICBpZiAocm91dGVzLmhhc093blByb3BlcnR5KHBhdGgpKSB7XG4gICAgICAgIHZhciByb3V0ZUFycmF5ID0gYmFzZVJvdXRlLnNsaWNlKCk7XG4gICAgICAgIGFkZFJvdXRlKHJvdXRlQXJyYXksIHBhdGgsIHJvdXRlc1twYXRoXSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXIuY2hpbGRyZW5bcGF0aF0pIHtcbiAgICAgICAgICBlYWNoUm91dGUocm91dGVBcnJheSwgbWF0Y2hlci5jaGlsZHJlbltwYXRoXSwgY2FsbGJhY2ssIGJpbmRpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoYmluZGluZywgcm91dGVBcnJheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXAgKGNhbGxiYWNrLCBhZGRSb3V0ZUNhbGxiYWNrKSB7XG4gICAgdmFyIG1hdGNoZXIgPSBuZXcgTWF0Y2hlcigpO1xuXG4gICAgY2FsbGJhY2soZ2VuZXJhdGVNYXRjaChcIlwiLCBtYXRjaGVyLCB0aGlzLmRlbGVnYXRlKSk7XG5cbiAgICBlYWNoUm91dGUoW10sIG1hdGNoZXIsIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgaWYgKGFkZFJvdXRlQ2FsbGJhY2spIHtcbiAgICAgICAgYWRkUm91dGVDYWxsYmFjayh0aGlzLCByb3V0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZChyb3V0ZSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICB2YXIgc3BlY2lhbHMgPSBbJy8nLCAnLicsICcqJywgJysnLCAnPycsICd8JywgJygnLCAnKScsICdbJywgJ10nLCAneycsICd9JywgJ1xcXFwnXTtcblxuICB2YXIgZXNjYXBlUmVnZXggPSBuZXcgUmVnRXhwKCcoXFxcXCcgKyBzcGVjaWFscy5qb2luKCd8XFxcXCcpICsgJyknLCAnZycpO1xuXG4gIHZhciBub1dhcm5pbmcgPSBmYWxzZTtcbiAgZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBpZiAoIW5vV2FybmluZyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1t2dWUtcm91dGVyXSAnICsgbXNnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cnlEZWNvZGUodXJpLCBhc0NvbXBvbmVudCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXNDb21wb25lbnQgPyBkZWNvZGVVUklDb21wb25lbnQodXJpKSA6IGRlY29kZVVSSSh1cmkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHdhcm4oJ21hbGZvcm1lZCBVUkknICsgKGFzQ29tcG9uZW50ID8gJyBjb21wb25lbnQ6ICcgOiAnOiAnKSArIHVyaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNBcnJheSh0ZXN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0ZXN0KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9XG5cbiAgLy8gQSBTZWdtZW50IHJlcHJlc2VudHMgYSBzZWdtZW50IGluIHRoZSBvcmlnaW5hbCByb3V0ZSBkZXNjcmlwdGlvbi5cbiAgLy8gRWFjaCBTZWdtZW50IHR5cGUgcHJvdmlkZXMgYW4gYGVhY2hDaGFyYCBhbmQgYHJlZ2V4YCBtZXRob2QuXG4gIC8vXG4gIC8vIFRoZSBgZWFjaENoYXJgIG1ldGhvZCBpbnZva2VzIHRoZSBjYWxsYmFjayB3aXRoIG9uZSBvciBtb3JlIGNoYXJhY3RlclxuICAvLyBzcGVjaWZpY2F0aW9ucy4gQSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBjb25zdW1lcyBvbmUgb3IgbW9yZSBpbnB1dFxuICAvLyBjaGFyYWN0ZXJzLlxuICAvL1xuICAvLyBUaGUgYHJlZ2V4YCBtZXRob2QgcmV0dXJucyBhIHJlZ2V4IGZyYWdtZW50IGZvciB0aGUgc2VnbWVudC4gSWYgdGhlXG4gIC8vIHNlZ21lbnQgaXMgYSBkeW5hbWljIG9mIHN0YXIgc2VnbWVudCwgdGhlIHJlZ2V4IGZyYWdtZW50IGFsc28gaW5jbHVkZXNcbiAgLy8gYSBjYXB0dXJlLlxuICAvL1xuICAvLyBBIGNoYXJhY3RlciBzcGVjaWZpY2F0aW9uIGNvbnRhaW5zOlxuICAvL1xuICAvLyAqIGB2YWxpZENoYXJzYDogYSBTdHJpbmcgd2l0aCBhIGxpc3Qgb2YgYWxsIHZhbGlkIGNoYXJhY3RlcnMsIG9yXG4gIC8vICogYGludmFsaWRDaGFyc2A6IGEgU3RyaW5nIHdpdGggYSBsaXN0IG9mIGFsbCBpbnZhbGlkIGNoYXJhY3RlcnNcbiAgLy8gKiBgcmVwZWF0YDogdHJ1ZSBpZiB0aGUgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gY2FuIHJlcGVhdFxuXG4gIGZ1bmN0aW9uIFN0YXRpY1NlZ21lbnQoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cbiAgU3RhdGljU2VnbWVudC5wcm90b3R5cGUgPSB7XG4gICAgZWFjaENoYXI6IGZ1bmN0aW9uIGVhY2hDaGFyKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3RyaW5nID0gdGhpcy5zdHJpbmcsXG4gICAgICAgICAgY2g7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RyaW5nLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjaCA9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgIGNhbGxiYWNrKHsgdmFsaWRDaGFyczogY2ggfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlZ2V4OiBmdW5jdGlvbiByZWdleCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmluZy5yZXBsYWNlKGVzY2FwZVJlZ2V4LCAnXFxcXCQxJyk7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlOiBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gRHluYW1pY1NlZ21lbnQobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgRHluYW1pY1NlZ21lbnQucHJvdG90eXBlID0ge1xuICAgIGVhY2hDaGFyOiBmdW5jdGlvbiBlYWNoQ2hhcihjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soeyBpbnZhbGlkQ2hhcnM6IFwiL1wiLCByZXBlYXQ6IHRydWUgfSk7XG4gICAgfSxcblxuICAgIHJlZ2V4OiBmdW5jdGlvbiByZWdleCgpIHtcbiAgICAgIHJldHVybiBcIihbXi9dKylcIjtcbiAgICB9LFxuXG4gICAgZ2VuZXJhdGU6IGZ1bmN0aW9uIGdlbmVyYXRlKHBhcmFtcykge1xuICAgICAgdmFyIHZhbCA9IHBhcmFtc1t0aGlzLm5hbWVdO1xuICAgICAgcmV0dXJuIHZhbCA9PSBudWxsID8gXCI6XCIgKyB0aGlzLm5hbWUgOiB2YWw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIFN0YXJTZWdtZW50KG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIFN0YXJTZWdtZW50LnByb3RvdHlwZSA9IHtcbiAgICBlYWNoQ2hhcjogZnVuY3Rpb24gZWFjaENoYXIoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKHsgaW52YWxpZENoYXJzOiBcIlwiLCByZXBlYXQ6IHRydWUgfSk7XG4gICAgfSxcblxuICAgIHJlZ2V4OiBmdW5jdGlvbiByZWdleCgpIHtcbiAgICAgIHJldHVybiBcIiguKylcIjtcbiAgICB9LFxuXG4gICAgZ2VuZXJhdGU6IGZ1bmN0aW9uIGdlbmVyYXRlKHBhcmFtcykge1xuICAgICAgdmFyIHZhbCA9IHBhcmFtc1t0aGlzLm5hbWVdO1xuICAgICAgcmV0dXJuIHZhbCA9PSBudWxsID8gXCI6XCIgKyB0aGlzLm5hbWUgOiB2YWw7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIEVwc2lsb25TZWdtZW50KCkge31cbiAgRXBzaWxvblNlZ21lbnQucHJvdG90eXBlID0ge1xuICAgIGVhY2hDaGFyOiBmdW5jdGlvbiBlYWNoQ2hhcigpIHt9LFxuICAgIHJlZ2V4OiBmdW5jdGlvbiByZWdleCgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH0sXG4gICAgZ2VuZXJhdGU6IGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHBhcnNlKHJvdXRlLCBuYW1lcywgc3BlY2lmaWNpdHkpIHtcbiAgICAvLyBub3JtYWxpemUgcm91dGUgYXMgbm90IHN0YXJ0aW5nIHdpdGggYSBcIi9cIi4gUmVjb2duaXRpb24gd2lsbFxuICAgIC8vIGFsc28gbm9ybWFsaXplLlxuICAgIGlmIChyb3V0ZS5jaGFyQXQoMCkgPT09IFwiL1wiKSB7XG4gICAgICByb3V0ZSA9IHJvdXRlLnN1YnN0cigxKTtcbiAgICB9XG5cbiAgICB2YXIgc2VnbWVudHMgPSByb3V0ZS5zcGxpdChcIi9cIiksXG4gICAgICAgIHJlc3VsdHMgPSBbXTtcblxuICAgIC8vIEEgcm91dGVzIGhhcyBzcGVjaWZpY2l0eSBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGF0IGl0cyBkaWZmZXJlbnQgc2VnbWVudHNcbiAgICAvLyBhcHBlYXIgaW4uIFRoaXMgc3lzdGVtIG1pcnJvcnMgaG93IHRoZSBtYWduaXR1ZGUgb2YgbnVtYmVycyB3cml0dGVuIGFzIHN0cmluZ3NcbiAgICAvLyB3b3Jrcy5cbiAgICAvLyBDb25zaWRlciBhIG51bWJlciB3cml0dGVuIGFzOiBcImFiY1wiLiBBbiBleGFtcGxlIHdvdWxkIGJlIFwiMjAwXCIuIEFueSBvdGhlciBudW1iZXIgd3JpdHRlblxuICAgIC8vIFwieHl6XCIgd2lsbCBiZSBzbWFsbGVyIHRoYW4gXCJhYmNcIiBzbyBsb25nIGFzIGBhID4gemAuIEZvciBpbnN0YW5jZSwgXCIxOTlcIiBpcyBzbWFsbGVyXG4gICAgLy8gdGhlbiBcIjIwMFwiLCBldmVuIHRob3VnaCBcInlcIiBhbmQgXCJ6XCIgKHdoaWNoIGFyZSBib3RoIDkpIGFyZSBsYXJnZXIgdGhhbiBcIjBcIiAodGhlIHZhbHVlXG4gICAgLy8gb2YgKGBiYCBhbmQgYGNgKS4gVGhpcyBpcyBiZWNhdXNlIHRoZSBsZWFkaW5nIHN5bWJvbCwgXCIyXCIsIGlzIGxhcmdlciB0aGFuIHRoZSBvdGhlclxuICAgIC8vIGxlYWRpbmcgc3ltYm9sLCBcIjFcIi5cbiAgICAvLyBUaGUgcnVsZSBpcyB0aGF0IHN5bWJvbHMgdG8gdGhlIGxlZnQgY2FycnkgbW9yZSB3ZWlnaHQgdGhhbiBzeW1ib2xzIHRvIHRoZSByaWdodFxuICAgIC8vIHdoZW4gYSBudW1iZXIgaXMgd3JpdHRlbiBvdXQgYXMgYSBzdHJpbmcuIEluIHRoZSBhYm92ZSBzdHJpbmdzLCB0aGUgbGVhZGluZyBkaWdpdFxuICAgIC8vIHJlcHJlc2VudHMgaG93IG1hbnkgMTAwJ3MgYXJlIGluIHRoZSBudW1iZXIsIGFuZCBpdCBjYXJyaWVzIG1vcmUgd2VpZ2h0IHRoYW4gdGhlIG1pZGRsZVxuICAgIC8vIG51bWJlciB3aGljaCByZXByZXNlbnRzIGhvdyBtYW55IDEwJ3MgYXJlIGluIHRoZSBudW1iZXIuXG4gICAgLy8gVGhpcyBzeXN0ZW0gb2YgbnVtYmVyIG1hZ25pdHVkZSB3b3JrcyB3ZWxsIGZvciByb3V0ZSBzcGVjaWZpY2l0eSwgdG9vLiBBIHJvdXRlIHdyaXR0ZW4gYXNcbiAgICAvLyBgYS9iL2NgIHdpbGwgYmUgbW9yZSBzcGVjaWZpYyB0aGFuIGB4L3kvemAgYXMgbG9uZyBhcyBgYWAgaXMgbW9yZSBzcGVjaWZpYyB0aGFuXG4gICAgLy8gYHhgLCBpcnJlc3BlY3RpdmUgb2YgdGhlIG90aGVyIHBhcnRzLlxuICAgIC8vIEJlY2F1c2Ugb2YgdGhpcyBzaW1pbGFyaXR5LCB3ZSBhc3NpZ24gZWFjaCB0eXBlIG9mIHNlZ21lbnQgYSBudW1iZXIgdmFsdWUgd3JpdHRlbiBhcyBhXG4gICAgLy8gc3RyaW5nLiBXZSBjYW4gZmluZCB0aGUgc3BlY2lmaWNpdHkgb2YgY29tcG91bmQgcm91dGVzIGJ5IGNvbmNhdGVuYXRpbmcgdGhlc2Ugc3RyaW5nc1xuICAgIC8vIHRvZ2V0aGVyLCBmcm9tIGxlZnQgdG8gcmlnaHQuIEFmdGVyIHdlIGhhdmUgbG9vcGVkIHRocm91Z2ggYWxsIG9mIHRoZSBzZWdtZW50cyxcbiAgICAvLyB3ZSBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYSBudW1iZXIuXG4gICAgc3BlY2lmaWNpdHkudmFsID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHNlZ21lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXSxcbiAgICAgICAgICBtYXRjaDtcblxuICAgICAgaWYgKG1hdGNoID0gc2VnbWVudC5tYXRjaCgvXjooW15cXC9dKykkLykpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyBEeW5hbWljU2VnbWVudChtYXRjaFsxXSkpO1xuICAgICAgICBuYW1lcy5wdXNoKG1hdGNoWzFdKTtcbiAgICAgICAgc3BlY2lmaWNpdHkudmFsICs9ICczJztcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBzZWdtZW50Lm1hdGNoKC9eXFwqKFteXFwvXSspJC8pKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChuZXcgU3RhclNlZ21lbnQobWF0Y2hbMV0pKTtcbiAgICAgICAgc3BlY2lmaWNpdHkudmFsICs9ICcyJztcbiAgICAgICAgbmFtZXMucHVzaChtYXRjaFsxXSk7XG4gICAgICB9IGVsc2UgaWYgKHNlZ21lbnQgPT09IFwiXCIpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyBFcHNpbG9uU2VnbWVudCgpKTtcbiAgICAgICAgc3BlY2lmaWNpdHkudmFsICs9ICcxJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChuZXcgU3RhdGljU2VnbWVudChzZWdtZW50KSk7XG4gICAgICAgIHNwZWNpZmljaXR5LnZhbCArPSAnNCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3BlY2lmaWNpdHkudmFsID0gK3NwZWNpZmljaXR5LnZhbDtcblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLy8gQSBTdGF0ZSBoYXMgYSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBhbmQgKGBjaGFyU3BlY2ApIGFuZCBhIGxpc3Qgb2YgcG9zc2libGVcbiAgLy8gc3Vic2VxdWVudCBzdGF0ZXMgKGBuZXh0U3RhdGVzYCkuXG4gIC8vXG4gIC8vIElmIGEgU3RhdGUgaXMgYW4gYWNjZXB0aW5nIHN0YXRlLCBpdCB3aWxsIGFsc28gaGF2ZSBzZXZlcmFsIGFkZGl0aW9uYWxcbiAgLy8gcHJvcGVydGllczpcbiAgLy9cbiAgLy8gKiBgcmVnZXhgOiBBIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IGlzIHVzZWQgdG8gZXh0cmFjdCBwYXJhbWV0ZXJzIGZyb20gcGF0aHNcbiAgLy8gICB0aGF0IHJlYWNoZWQgdGhpcyBhY2NlcHRpbmcgc3RhdGUuXG4gIC8vICogYGhhbmRsZXJzYDogSW5mb3JtYXRpb24gb24gaG93IHRvIGNvbnZlcnQgdGhlIGxpc3Qgb2YgY2FwdHVyZXMgaW50byBjYWxsc1xuICAvLyAgIHRvIHJlZ2lzdGVyZWQgaGFuZGxlcnMgd2l0aCB0aGUgc3BlY2lmaWVkIHBhcmFtZXRlcnNcbiAgLy8gKiBgdHlwZXNgOiBIb3cgbWFueSBzdGF0aWMsIGR5bmFtaWMgb3Igc3RhciBzZWdtZW50cyBpbiB0aGlzIHJvdXRlLiBVc2VkIHRvXG4gIC8vICAgZGVjaWRlIHdoaWNoIHJvdXRlIHRvIHVzZSBpZiBtdWx0aXBsZSByZWdpc3RlcmVkIHJvdXRlcyBtYXRjaCBhIHBhdGguXG4gIC8vXG4gIC8vIEN1cnJlbnRseSwgU3RhdGUgaXMgaW1wbGVtZW50ZWQgbmFpdmVseSBieSBsb29waW5nIG92ZXIgYG5leHRTdGF0ZXNgIGFuZFxuICAvLyBjb21wYXJpbmcgYSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBhZ2FpbnN0IGEgY2hhcmFjdGVyLiBBIG1vcmUgZWZmaWNpZW50XG4gIC8vIGltcGxlbWVudGF0aW9uIHdvdWxkIHVzZSBhIGhhc2ggb2Yga2V5cyBwb2ludGluZyBhdCBvbmUgb3IgbW9yZSBuZXh0IHN0YXRlcy5cblxuICBmdW5jdGlvbiBTdGF0ZShjaGFyU3BlYykge1xuICAgIHRoaXMuY2hhclNwZWMgPSBjaGFyU3BlYztcbiAgICB0aGlzLm5leHRTdGF0ZXMgPSBbXTtcbiAgfVxuXG4gIFN0YXRlLnByb3RvdHlwZSA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldChjaGFyU3BlYykge1xuICAgICAgdmFyIG5leHRTdGF0ZXMgPSB0aGlzLm5leHRTdGF0ZXM7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbmV4dFN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbmV4dFN0YXRlc1tpXTtcblxuICAgICAgICB2YXIgaXNFcXVhbCA9IGNoaWxkLmNoYXJTcGVjLnZhbGlkQ2hhcnMgPT09IGNoYXJTcGVjLnZhbGlkQ2hhcnM7XG4gICAgICAgIGlzRXF1YWwgPSBpc0VxdWFsICYmIGNoaWxkLmNoYXJTcGVjLmludmFsaWRDaGFycyA9PT0gY2hhclNwZWMuaW52YWxpZENoYXJzO1xuXG4gICAgICAgIGlmIChpc0VxdWFsKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHB1dDogZnVuY3Rpb24gcHV0KGNoYXJTcGVjKSB7XG4gICAgICB2YXIgc3RhdGU7XG5cbiAgICAgIC8vIElmIHRoZSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBhbHJlYWR5IGV4aXN0cyBpbiBhIGNoaWxkIG9mIHRoZSBjdXJyZW50XG4gICAgICAvLyBzdGF0ZSwganVzdCByZXR1cm4gdGhhdCBzdGF0ZS5cbiAgICAgIGlmIChzdGF0ZSA9IHRoaXMuZ2V0KGNoYXJTcGVjKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgYSBuZXcgc3RhdGUgZm9yIHRoZSBjaGFyYWN0ZXIgc3BlY1xuICAgICAgc3RhdGUgPSBuZXcgU3RhdGUoY2hhclNwZWMpO1xuXG4gICAgICAvLyBJbnNlcnQgdGhlIG5ldyBzdGF0ZSBhcyBhIGNoaWxkIG9mIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICB0aGlzLm5leHRTdGF0ZXMucHVzaChzdGF0ZSk7XG5cbiAgICAgIC8vIElmIHRoaXMgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gcmVwZWF0cywgaW5zZXJ0IHRoZSBuZXcgc3RhdGUgYXMgYSBjaGlsZFxuICAgICAgLy8gb2YgaXRzZWxmLiBOb3RlIHRoYXQgdGhpcyB3aWxsIG5vdCB0cmlnZ2VyIGFuIGluZmluaXRlIGxvb3AgYmVjYXVzZSBlYWNoXG4gICAgICAvLyB0cmFuc2l0aW9uIGR1cmluZyByZWNvZ25pdGlvbiBjb25zdW1lcyBhIGNoYXJhY3Rlci5cbiAgICAgIGlmIChjaGFyU3BlYy5yZXBlYXQpIHtcbiAgICAgICAgc3RhdGUubmV4dFN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmV0dXJuIHRoZSBuZXcgc3RhdGVcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuXG4gICAgLy8gRmluZCBhIGxpc3Qgb2YgY2hpbGQgc3RhdGVzIG1hdGNoaW5nIHRoZSBuZXh0IGNoYXJhY3RlclxuICAgIG1hdGNoOiBmdW5jdGlvbiBtYXRjaChjaCkge1xuICAgICAgLy8gREVCVUcgXCJQcm9jZXNzaW5nIGBcIiArIGNoICsgXCJgOlwiXG4gICAgICB2YXIgbmV4dFN0YXRlcyA9IHRoaXMubmV4dFN0YXRlcyxcbiAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICBjaGFyU3BlYyxcbiAgICAgICAgICBjaGFycztcblxuICAgICAgLy8gREVCVUcgXCIgIFwiICsgZGVidWdTdGF0ZSh0aGlzKVxuICAgICAgdmFyIHJldHVybmVkID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbmV4dFN0YXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY2hpbGQgPSBuZXh0U3RhdGVzW2ldO1xuXG4gICAgICAgIGNoYXJTcGVjID0gY2hpbGQuY2hhclNwZWM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoY2hhcnMgPSBjaGFyU3BlYy52YWxpZENoYXJzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpZiAoY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm5lZC5wdXNoKGNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChjaGFycyA9IGNoYXJTcGVjLmludmFsaWRDaGFycykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaWYgKGNoYXJzLmluZGV4T2YoY2gpID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuZWQucHVzaChjaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXR1cm5lZDtcbiAgICB9XG5cbiAgICAvKiogSUYgREVCVUdcbiAgICAsIGRlYnVnOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjaGFyU3BlYyA9IHRoaXMuY2hhclNwZWMsXG4gICAgICAgICAgZGVidWcgPSBcIltcIixcbiAgICAgICAgICBjaGFycyA9IGNoYXJTcGVjLnZhbGlkQ2hhcnMgfHwgY2hhclNwZWMuaW52YWxpZENoYXJzO1xuICAgICAgIGlmIChjaGFyU3BlYy5pbnZhbGlkQ2hhcnMpIHsgZGVidWcgKz0gXCJeXCI7IH1cbiAgICAgIGRlYnVnICs9IGNoYXJzO1xuICAgICAgZGVidWcgKz0gXCJdXCI7XG4gICAgICAgaWYgKGNoYXJTcGVjLnJlcGVhdCkgeyBkZWJ1ZyArPSBcIitcIjsgfVxuICAgICAgIHJldHVybiBkZWJ1ZztcbiAgICB9XG4gICAgRU5EIElGICoqL1xuICB9O1xuXG4gIC8qKiBJRiBERUJVR1xuICBmdW5jdGlvbiBkZWJ1Zyhsb2cpIHtcbiAgICBjb25zb2xlLmxvZyhsb2cpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVidWdTdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5uZXh0U3RhdGVzLm1hcChmdW5jdGlvbihuKSB7XG4gICAgICBpZiAobi5uZXh0U3RhdGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gXCIoIFwiICsgbi5kZWJ1ZygpICsgXCIgW2FjY2VwdGluZ10gKVwiOyB9XG4gICAgICByZXR1cm4gXCIoIFwiICsgbi5kZWJ1ZygpICsgXCIgPHRoZW4+IFwiICsgbi5uZXh0U3RhdGVzLm1hcChmdW5jdGlvbihzKSB7IHJldHVybiBzLmRlYnVnKCkgfSkuam9pbihcIiBvciBcIikgKyBcIiApXCI7XG4gICAgfSkuam9pbihcIiwgXCIpXG4gIH1cbiAgRU5EIElGICoqL1xuXG4gIC8vIFNvcnQgdGhlIHJvdXRlcyBieSBzcGVjaWZpY2l0eVxuICBmdW5jdGlvbiBzb3J0U29sdXRpb25zKHN0YXRlcykge1xuICAgIHJldHVybiBzdGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGIuc3BlY2lmaWNpdHkudmFsIC0gYS5zcGVjaWZpY2l0eS52YWw7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWNvZ25pemVDaGFyKHN0YXRlcywgY2gpIHtcbiAgICB2YXIgbmV4dFN0YXRlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgc3RhdGUgPSBzdGF0ZXNbaV07XG5cbiAgICAgIG5leHRTdGF0ZXMgPSBuZXh0U3RhdGVzLmNvbmNhdChzdGF0ZS5tYXRjaChjaCkpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0U3RhdGVzO1xuICB9XG5cbiAgdmFyIG9DcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIChwcm90bykge1xuICAgIGZ1bmN0aW9uIEYoKSB7fVxuICAgIEYucHJvdG90eXBlID0gcHJvdG87XG4gICAgcmV0dXJuIG5ldyBGKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gUmVjb2duaXplUmVzdWx0cyhxdWVyeVBhcmFtcykge1xuICAgIHRoaXMucXVlcnlQYXJhbXMgPSBxdWVyeVBhcmFtcyB8fCB7fTtcbiAgfVxuICBSZWNvZ25pemVSZXN1bHRzLnByb3RvdHlwZSA9IG9DcmVhdGUoe1xuICAgIHNwbGljZTogQXJyYXkucHJvdG90eXBlLnNwbGljZSxcbiAgICBzbGljZTogQXJyYXkucHJvdG90eXBlLnNsaWNlLFxuICAgIHB1c2g6IEFycmF5LnByb3RvdHlwZS5wdXNoLFxuICAgIGxlbmd0aDogMCxcbiAgICBxdWVyeVBhcmFtczogbnVsbFxuICB9KTtcblxuICBmdW5jdGlvbiBmaW5kSGFuZGxlcihzdGF0ZSwgcGF0aCwgcXVlcnlQYXJhbXMpIHtcbiAgICB2YXIgaGFuZGxlcnMgPSBzdGF0ZS5oYW5kbGVycyxcbiAgICAgICAgcmVnZXggPSBzdGF0ZS5yZWdleDtcbiAgICB2YXIgY2FwdHVyZXMgPSBwYXRoLm1hdGNoKHJlZ2V4KSxcbiAgICAgICAgY3VycmVudENhcHR1cmUgPSAxO1xuICAgIHZhciByZXN1bHQgPSBuZXcgUmVjb2duaXplUmVzdWx0cyhxdWVyeVBhcmFtcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGhhbmRsZXIgPSBoYW5kbGVyc1tpXSxcbiAgICAgICAgICBuYW1lcyA9IGhhbmRsZXIubmFtZXMsXG4gICAgICAgICAgcGFyYW1zID0ge307XG5cbiAgICAgIGZvciAodmFyIGogPSAwLCBtID0gbmFtZXMubGVuZ3RoOyBqIDwgbTsgaisrKSB7XG4gICAgICAgIHBhcmFtc1tuYW1lc1tqXV0gPSBjYXB0dXJlc1tjdXJyZW50Q2FwdHVyZSsrXTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goeyBoYW5kbGVyOiBoYW5kbGVyLmhhbmRsZXIsIHBhcmFtczogcGFyYW1zLCBpc0R5bmFtaWM6ICEhbmFtZXMubGVuZ3RoIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTZWdtZW50KGN1cnJlbnRTdGF0ZSwgc2VnbWVudCkge1xuICAgIHNlZ21lbnQuZWFjaENoYXIoZnVuY3Rpb24gKGNoKSB7XG4gICAgICB2YXIgc3RhdGU7XG5cbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdGF0ZS5wdXQoY2gpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZVF1ZXJ5UGFyYW1QYXJ0KHBhcnQpIHtcbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNDAxL2ludGVyYWN0L2Zvcm1zLmh0bWwjaC0xNy4xMy40LjFcbiAgICBwYXJ0ID0gcGFydC5yZXBsYWNlKC9cXCsvZ20sICclMjAnKTtcbiAgICByZXR1cm4gdHJ5RGVjb2RlKHBhcnQsIHRydWUpO1xuICB9XG5cbiAgLy8gVGhlIG1haW4gaW50ZXJmYWNlXG5cbiAgdmFyIFJvdXRlUmVjb2duaXplciA9IGZ1bmN0aW9uIFJvdXRlUmVjb2duaXplcigpIHtcbiAgICB0aGlzLnJvb3RTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xuICAgIHRoaXMubmFtZXMgPSB7fTtcbiAgfTtcblxuICBSb3V0ZVJlY29nbml6ZXIucHJvdG90eXBlID0ge1xuICAgIGFkZDogZnVuY3Rpb24gYWRkKHJvdXRlcywgb3B0aW9ucykge1xuICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHRoaXMucm9vdFN0YXRlLFxuICAgICAgICAgIHJlZ2V4ID0gXCJeXCIsXG4gICAgICAgICAgc3BlY2lmaWNpdHkgPSB7fSxcbiAgICAgICAgICBoYW5kbGVycyA9IFtdLFxuICAgICAgICAgIGFsbFNlZ21lbnRzID0gW10sXG4gICAgICAgICAgbmFtZTtcblxuICAgICAgdmFyIGlzRW1wdHkgPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJvdXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHJvdXRlID0gcm91dGVzW2ldLFxuICAgICAgICAgICAgbmFtZXMgPSBbXTtcblxuICAgICAgICB2YXIgc2VnbWVudHMgPSBwYXJzZShyb3V0ZS5wYXRoLCBuYW1lcywgc3BlY2lmaWNpdHkpO1xuXG4gICAgICAgIGFsbFNlZ21lbnRzID0gYWxsU2VnbWVudHMuY29uY2F0KHNlZ21lbnRzKTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMCwgbSA9IHNlZ21lbnRzLmxlbmd0aDsgaiA8IG07IGorKykge1xuICAgICAgICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbal07XG5cbiAgICAgICAgICBpZiAoc2VnbWVudCBpbnN0YW5jZW9mIEVwc2lsb25TZWdtZW50KSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpc0VtcHR5ID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyBBZGQgYSBcIi9cIiBmb3IgdGhlIG5ldyBzZWdtZW50XG4gICAgICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFN0YXRlLnB1dCh7IHZhbGlkQ2hhcnM6IFwiL1wiIH0pO1xuICAgICAgICAgIHJlZ2V4ICs9IFwiL1wiO1xuXG4gICAgICAgICAgLy8gQWRkIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHNlZ21lbnQgdG8gdGhlIE5GQSBhbmQgcmVnZXhcbiAgICAgICAgICBjdXJyZW50U3RhdGUgPSBhZGRTZWdtZW50KGN1cnJlbnRTdGF0ZSwgc2VnbWVudCk7XG4gICAgICAgICAgcmVnZXggKz0gc2VnbWVudC5yZWdleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhbmRsZXIgPSB7IGhhbmRsZXI6IHJvdXRlLmhhbmRsZXIsIG5hbWVzOiBuYW1lcyB9O1xuICAgICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNFbXB0eSkge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50U3RhdGUucHV0KHsgdmFsaWRDaGFyczogXCIvXCIgfSk7XG4gICAgICAgIHJlZ2V4ICs9IFwiL1wiO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50U3RhdGUuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICAgIGN1cnJlbnRTdGF0ZS5yZWdleCA9IG5ldyBSZWdFeHAocmVnZXggKyBcIiRcIik7XG4gICAgICBjdXJyZW50U3RhdGUuc3BlY2lmaWNpdHkgPSBzcGVjaWZpY2l0eTtcblxuICAgICAgaWYgKG5hbWUgPSBvcHRpb25zICYmIG9wdGlvbnMuYXMpIHtcbiAgICAgICAgdGhpcy5uYW1lc1tuYW1lXSA9IHtcbiAgICAgICAgICBzZWdtZW50czogYWxsU2VnbWVudHMsXG4gICAgICAgICAgaGFuZGxlcnM6IGhhbmRsZXJzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcblxuICAgIGhhbmRsZXJzRm9yOiBmdW5jdGlvbiBoYW5kbGVyc0ZvcihuYW1lKSB7XG4gICAgICB2YXIgcm91dGUgPSB0aGlzLm5hbWVzW25hbWVdLFxuICAgICAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgaWYgKCFyb3V0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyByb3V0ZSBuYW1lZCBcIiArIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJvdXRlLmhhbmRsZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChyb3V0ZS5oYW5kbGVyc1tpXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIGhhc1JvdXRlOiBmdW5jdGlvbiBoYXNSb3V0ZShuYW1lKSB7XG4gICAgICByZXR1cm4gISF0aGlzLm5hbWVzW25hbWVdO1xuICAgIH0sXG5cbiAgICBnZW5lcmF0ZTogZnVuY3Rpb24gZ2VuZXJhdGUobmFtZSwgcGFyYW1zKSB7XG4gICAgICB2YXIgcm91dGUgPSB0aGlzLm5hbWVzW25hbWVdLFxuICAgICAgICAgIG91dHB1dCA9IFwiXCI7XG4gICAgICBpZiAoIXJvdXRlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGlzIG5vIHJvdXRlIG5hbWVkIFwiICsgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWdtZW50cyA9IHJvdXRlLnNlZ21lbnRzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHNlZ21lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuXG4gICAgICAgIGlmIChzZWdtZW50IGluc3RhbmNlb2YgRXBzaWxvblNlZ21lbnQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dCArPSBcIi9cIjtcbiAgICAgICAgb3V0cHV0ICs9IHNlZ21lbnQuZ2VuZXJhdGUocGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG91dHB1dC5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgICBvdXRwdXQgPSAnLycgKyBvdXRwdXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIG91dHB1dCArPSB0aGlzLmdlbmVyYXRlUXVlcnlTdHJpbmcocGFyYW1zLnF1ZXJ5UGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LFxuXG4gICAgZ2VuZXJhdGVRdWVyeVN0cmluZzogZnVuY3Rpb24gZ2VuZXJhdGVRdWVyeVN0cmluZyhwYXJhbXMpIHtcbiAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGtleXMuc29ydCgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyYW1zW2tleV07XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhaXIgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBhcnJheVBhaXIgPSBrZXkgKyAnW10nICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlW2pdKTtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goYXJyYXlQYWlyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFpciArPSBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgICAgcGFpcnMucHVzaChwYWlyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiP1wiICsgcGFpcnMuam9pbihcIiZcIik7XG4gICAgfSxcblxuICAgIHBhcnNlUXVlcnlTdHJpbmc6IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcocXVlcnlTdHJpbmcpIHtcbiAgICAgIHZhciBwYWlycyA9IHF1ZXJ5U3RyaW5nLnNwbGl0KFwiJlwiKSxcbiAgICAgICAgICBxdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9JyksXG4gICAgICAgICAgICBrZXkgPSBkZWNvZGVRdWVyeVBhcmFtUGFydChwYWlyWzBdKSxcbiAgICAgICAgICAgIGtleUxlbmd0aCA9IGtleS5sZW5ndGgsXG4gICAgICAgICAgICBpc0FycmF5ID0gZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgaWYgKHBhaXIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdmFsdWUgPSAndHJ1ZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9IYW5kbGUgYXJyYXlzXG4gICAgICAgICAgaWYgKGtleUxlbmd0aCA+IDIgJiYga2V5LnNsaWNlKGtleUxlbmd0aCAtIDIpID09PSAnW10nKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGtleSA9IGtleS5zbGljZSgwLCBrZXlMZW5ndGggLSAyKTtcbiAgICAgICAgICAgIGlmICghcXVlcnlQYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgICBxdWVyeVBhcmFtc1trZXldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlID0gcGFpclsxXSA/IGRlY29kZVF1ZXJ5UGFyYW1QYXJ0KHBhaXJbMV0pIDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICBxdWVyeVBhcmFtc1trZXldLnB1c2godmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICAgIH0sXG5cbiAgICByZWNvZ25pemU6IGZ1bmN0aW9uIHJlY29nbml6ZShwYXRoLCBzaWxlbnQpIHtcbiAgICAgIG5vV2FybmluZyA9IHNpbGVudDtcbiAgICAgIHZhciBzdGF0ZXMgPSBbdGhpcy5yb290U3RhdGVdLFxuICAgICAgICAgIHBhdGhMZW4sXG4gICAgICAgICAgaSxcbiAgICAgICAgICBsLFxuICAgICAgICAgIHF1ZXJ5U3RhcnQsXG4gICAgICAgICAgcXVlcnlQYXJhbXMgPSB7fSxcbiAgICAgICAgICBpc1NsYXNoRHJvcHBlZCA9IGZhbHNlO1xuXG4gICAgICBxdWVyeVN0YXJ0ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgICBpZiAocXVlcnlTdGFydCAhPT0gLTEpIHtcbiAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gcGF0aC5zdWJzdHIocXVlcnlTdGFydCArIDEsIHBhdGgubGVuZ3RoKTtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHF1ZXJ5U3RhcnQpO1xuICAgICAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgICBxdWVyeVBhcmFtcyA9IHRoaXMucGFyc2VRdWVyeVN0cmluZyhxdWVyeVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGF0aCA9IHRyeURlY29kZShwYXRoKTtcbiAgICAgIGlmICghcGF0aCkgcmV0dXJuO1xuXG4gICAgICAvLyBERUJVRyBHUk9VUCBwYXRoXG5cbiAgICAgIGlmIChwYXRoLmNoYXJBdCgwKSAhPT0gXCIvXCIpIHtcbiAgICAgICAgcGF0aCA9IFwiL1wiICsgcGF0aDtcbiAgICAgIH1cblxuICAgICAgcGF0aExlbiA9IHBhdGgubGVuZ3RoO1xuICAgICAgaWYgKHBhdGhMZW4gPiAxICYmIHBhdGguY2hhckF0KHBhdGhMZW4gLSAxKSA9PT0gXCIvXCIpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGhMZW4gLSAxKTtcbiAgICAgICAgaXNTbGFzaERyb3BwZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwLCBsID0gcGF0aC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgc3RhdGVzID0gcmVjb2duaXplQ2hhcihzdGF0ZXMsIHBhdGguY2hhckF0KGkpKTtcbiAgICAgICAgaWYgKCFzdGF0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRU5EIERFQlVHIEdST1VQXG5cbiAgICAgIHZhciBzb2x1dGlvbnMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSBzdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChzdGF0ZXNbaV0uaGFuZGxlcnMpIHtcbiAgICAgICAgICBzb2x1dGlvbnMucHVzaChzdGF0ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN0YXRlcyA9IHNvcnRTb2x1dGlvbnMoc29sdXRpb25zKTtcblxuICAgICAgdmFyIHN0YXRlID0gc29sdXRpb25zWzBdO1xuXG4gICAgICBpZiAoc3RhdGUgJiYgc3RhdGUuaGFuZGxlcnMpIHtcbiAgICAgICAgLy8gaWYgYSB0cmFpbGluZyBzbGFzaCB3YXMgZHJvcHBlZCBhbmQgYSBzdGFyIHNlZ21lbnQgaXMgdGhlIGxhc3Qgc2VnbWVudFxuICAgICAgICAvLyBzcGVjaWZpZWQsIHB1dCB0aGUgdHJhaWxpbmcgc2xhc2ggYmFja1xuICAgICAgICBpZiAoaXNTbGFzaERyb3BwZWQgJiYgc3RhdGUucmVnZXguc291cmNlLnNsaWNlKC01KSA9PT0gXCIoLispJFwiKSB7XG4gICAgICAgICAgcGF0aCA9IHBhdGggKyBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluZEhhbmRsZXIoc3RhdGUsIHBhdGgsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgUm91dGVSZWNvZ25pemVyLnByb3RvdHlwZS5tYXAgPSBtYXA7XG5cbiAgdmFyIGdlblF1ZXJ5ID0gUm91dGVSZWNvZ25pemVyLnByb3RvdHlwZS5nZW5lcmF0ZVF1ZXJ5U3RyaW5nO1xuXG4gIC8vIGV4cG9ydCBkZWZhdWx0IGZvciBob2xkaW5nIHRoZSBWdWUgcmVmZXJlbmNlXG4gIHZhciBleHBvcnRzJDEgPSB7fTtcbiAgLyoqXG4gICAqIFdhcm4gc3R1ZmYuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAgICovXG5cbiAgZnVuY3Rpb24gd2FybiQxKG1zZykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcignW3Z1ZS1yb3V0ZXJdICcgKyBtc2cpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGEgcmVsYXRpdmUgcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGJhc2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IHJlbGF0aXZlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gYXBwZW5kXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG5cbiAgZnVuY3Rpb24gcmVzb2x2ZVBhdGgoYmFzZSwgcmVsYXRpdmUsIGFwcGVuZCkge1xuICAgIHZhciBxdWVyeSA9IGJhc2UubWF0Y2goLyhcXD8uKikkLyk7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBxdWVyeSA9IHF1ZXJ5WzFdO1xuICAgICAgYmFzZSA9IGJhc2Uuc2xpY2UoMCwgLXF1ZXJ5Lmxlbmd0aCk7XG4gICAgfVxuICAgIC8vIGEgcXVlcnkhXG4gICAgaWYgKHJlbGF0aXZlLmNoYXJBdCgwKSA9PT0gJz8nKSB7XG4gICAgICByZXR1cm4gYmFzZSArIHJlbGF0aXZlO1xuICAgIH1cbiAgICB2YXIgc3RhY2sgPSBiYXNlLnNwbGl0KCcvJyk7XG4gICAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNlZ21lbnQgaWY6XG4gICAgLy8gLSBub3QgYXBwZW5kaW5nXG4gICAgLy8gLSBhcHBlbmRpbmcgdG8gdHJhaWxpbmcgc2xhc2ggKGxhc3Qgc2VnbWVudCBpcyBlbXB0eSlcbiAgICBpZiAoIWFwcGVuZCB8fCAhc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgIH1cbiAgICAvLyByZXNvbHZlIHJlbGF0aXZlIHBhdGhcbiAgICB2YXIgc2VnbWVudHMgPSByZWxhdGl2ZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcbiAgICAgIGlmIChzZWdtZW50ID09PSAnLicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKHNlZ21lbnQgPT09ICcuLicpIHtcbiAgICAgICAgc3RhY2sucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHNlZ21lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBlbnN1cmUgbGVhZGluZyBzbGFzaFxuICAgIGlmIChzdGFja1swXSAhPT0gJycpIHtcbiAgICAgIHN0YWNrLnVuc2hpZnQoJycpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhY2suam9pbignLycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmdpdmluZyBjaGVjayBmb3IgYSBwcm9taXNlXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGlzUHJvbWlzZShwKSB7XG4gICAgcmV0dXJuIHAgJiYgdHlwZW9mIHAudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaXZlIGEgcm91dGUgY29uZmlnIGZpZWxkIGZyb20gYSBjb21wb25lbnQgaW5zdGFuY2VcbiAgICogT1IgYSBjb21wb25lbnQgY29udHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbnxWdWV9IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRSb3V0ZUNvbmZpZyhjb21wb25lbnQsIG5hbWUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGNvbXBvbmVudCAmJiAoY29tcG9uZW50LiRvcHRpb25zIHx8IGNvbXBvbmVudC5vcHRpb25zKTtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnJvdXRlICYmIG9wdGlvbnMucm91dGVbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSBhbiBhc3luYyBjb21wb25lbnQgZmFjdG9yeS4gSGF2ZSB0byBkbyBhIGRpcnR5XG4gICAqIG1vY2sgaGVyZSBiZWNhdXNlIG9mIFZ1ZSBjb3JlJ3MgaW50ZXJuYWwgQVBJIGRlcGVuZHMgb25cbiAgICogYW4gSUQgY2hlY2suXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAqL1xuXG4gIHZhciByZXNvbHZlciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQoaGFuZGxlciwgY2IpIHtcbiAgICBpZiAoIXJlc29sdmVyKSB7XG4gICAgICByZXNvbHZlciA9IHtcbiAgICAgICAgcmVzb2x2ZTogZXhwb3J0cyQxLlZ1ZS5wcm90b3R5cGUuX3Jlc29sdmVDb21wb25lbnQsXG4gICAgICAgICRvcHRpb25zOiB7XG4gICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgXzogaGFuZGxlci5jb21wb25lbnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmVyLiRvcHRpb25zLmNvbXBvbmVudHMuXyA9IGhhbmRsZXIuY29tcG9uZW50O1xuICAgIH1cbiAgICByZXNvbHZlci5yZXNvbHZlKCdfJywgZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgICAgaGFuZGxlci5jb21wb25lbnQgPSBDb21wb25lbnQ7XG4gICAgICBjYihDb21wb25lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcCB0aGUgZHluYW1pYyBzZWdtZW50cyBpbiBhIHBhdGggdG8gcGFyYW1zLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeVxuICAgKi9cblxuICBmdW5jdGlvbiBtYXBQYXJhbXMocGF0aCwgcGFyYW1zLCBxdWVyeSkge1xuICAgIGlmIChwYXJhbXMgPT09IHVuZGVmaW5lZCkgcGFyYW1zID0ge307XG5cbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC86KFteXFwvXSspL2csIGZ1bmN0aW9uIChfLCBrZXkpIHtcbiAgICAgIHZhciB2YWwgPSBwYXJhbXNba2V5XTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgd2FybiQxKCdwYXJhbSBcIicgKyBrZXkgKyAnXCIgbm90IGZvdW5kIHdoZW4gZ2VuZXJhdGluZyAnICsgJ3BhdGggZm9yIFwiJyArIHBhdGggKyAnXCIgd2l0aCBwYXJhbXMgJyArIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgICB9KTtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHBhdGggKz0gZ2VuUXVlcnkocXVlcnkpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHZhciBoYXNoUkUgPSAvIy4qJC87XG5cbiAgdmFyIEhUTUw1SGlzdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSFRNTDVIaXN0b3J5KF9yZWYpIHtcbiAgICAgIHZhciByb290ID0gX3JlZi5yb290O1xuICAgICAgdmFyIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZTtcbiAgICAgIGJhYmVsSGVscGVycy5jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MNUhpc3RvcnkpO1xuXG4gICAgICBpZiAocm9vdCAmJiByb290ICE9PSAnLycpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgdGhlIHN0YXJ0aW5nIHNsYXNoXG4gICAgICAgIGlmIChyb290LmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICAgICAgcm9vdCA9ICcvJyArIHJvb3Q7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3QucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICAgICAgdGhpcy5yb290UkUgPSBuZXcgUmVnRXhwKCdeXFxcXCcgKyB0aGlzLnJvb3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICAgIC8vIGNoZWNrIGJhc2UgdGFnXG4gICAgICB2YXIgYmFzZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpO1xuICAgICAgdGhpcy5iYXNlID0gYmFzZUVsICYmIGJhc2VFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB9XG5cbiAgICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLmxpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHVybCA9IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoO1xuICAgICAgICBpZiAoX3RoaXMucm9vdCkge1xuICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKF90aGlzLnJvb3RSRSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLm9uQ2hhbmdlKHVybCwgZSAmJiBlLnN0YXRlLCBsb2NhdGlvbi5oYXNoKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmxpc3RlbmVyKTtcbiAgICAgIHRoaXMubGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMubGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28ocGF0aCwgcmVwbGFjZSwgYXBwZW5kKSB7XG4gICAgICB2YXIgdXJsID0gdGhpcy5mb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCk7XG4gICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIHVybCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZWNvcmQgc2Nyb2xsIHBvc2l0aW9uIGJ5IHJlcGxhY2luZyBjdXJyZW50IHN0YXRlXG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHtcbiAgICAgICAgICBwb3M6IHtcbiAgICAgICAgICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgIH1cbiAgICAgICAgfSwgJycsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAvLyB0aGVuIHB1c2ggbmV3IHN0YXRlXG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoTWF0Y2ggPSBwYXRoLm1hdGNoKGhhc2hSRSk7XG4gICAgICB2YXIgaGFzaCA9IGhhc2hNYXRjaCAmJiBoYXNoTWF0Y2hbMF07XG4gICAgICBwYXRoID0gdXJsXG4gICAgICAvLyBzdHJpcCBoYXNoIHNvIGl0IGRvZXNuJ3QgbWVzcyB1cCBwYXJhbXNcbiAgICAgIC5yZXBsYWNlKGhhc2hSRSwgJycpXG4gICAgICAvLyByZW1vdmUgcm9vdCBiZWZvcmUgbWF0Y2hpbmdcbiAgICAgIC5yZXBsYWNlKHRoaXMucm9vdFJFLCAnJyk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHBhdGgsIG51bGwsIGhhc2gpO1xuICAgIH07XG5cbiAgICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmZvcm1hdFBhdGggPSBmdW5jdGlvbiBmb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLydcbiAgICAgIC8vIGFic29sdXRlIHBhdGhcbiAgICAgID8gdGhpcy5yb290ID8gdGhpcy5yb290ICsgJy8nICsgcGF0aC5yZXBsYWNlKC9eXFwvLywgJycpIDogcGF0aCA6IHJlc29sdmVQYXRoKHRoaXMuYmFzZSB8fCBsb2NhdGlvbi5wYXRobmFtZSwgcGF0aCwgYXBwZW5kKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEhUTUw1SGlzdG9yeTtcbiAgfSkoKTtcblxuICB2YXIgSGFzaEhpc3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhhc2hIaXN0b3J5KF9yZWYpIHtcbiAgICAgIHZhciBoYXNoYmFuZyA9IF9yZWYuaGFzaGJhbmc7XG4gICAgICB2YXIgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuICAgICAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2hIaXN0b3J5KTtcblxuICAgICAgdGhpcy5oYXNoYmFuZyA9IGhhc2hiYW5nO1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgIH1cblxuICAgIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhdGggPSBsb2NhdGlvbi5oYXNoO1xuICAgICAgICB2YXIgcmF3ID0gcGF0aC5yZXBsYWNlKC9eIyE/LywgJycpO1xuICAgICAgICAvLyBhbHdheXNcbiAgICAgICAgaWYgKHJhdy5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgICAgIHJhdyA9ICcvJyArIHJhdztcbiAgICAgICAgfVxuICAgICAgICB2YXIgZm9ybWF0dGVkUGF0aCA9IHNlbGYuZm9ybWF0UGF0aChyYXcpO1xuICAgICAgICBpZiAoZm9ybWF0dGVkUGF0aCAhPT0gcGF0aCkge1xuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoZm9ybWF0dGVkUGF0aCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRldGVybWluZSBxdWVyeVxuICAgICAgICAvLyBub3RlIGl0J3MgcG9zc2libGUgdG8gaGF2ZSBxdWVyaWVzIGluIGJvdGggdGhlIGFjdHVhbCBVUkxcbiAgICAgICAgLy8gYW5kIHRoZSBoYXNoIGZyYWdtZW50IGl0c2VsZi5cbiAgICAgICAgdmFyIHF1ZXJ5ID0gbG9jYXRpb24uc2VhcmNoICYmIHBhdGguaW5kZXhPZignPycpID4gLTEgPyAnJicgKyBsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkgOiBsb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIHNlbGYub25DaGFuZ2UocGF0aC5yZXBsYWNlKC9eIyE/LywgJycpICsgcXVlcnkpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5saXN0ZW5lcik7XG4gICAgICB0aGlzLmxpc3RlbmVyKCk7XG4gICAgfTtcblxuICAgIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5saXN0ZW5lcik7XG4gICAgfTtcblxuICAgIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvKHBhdGgsIHJlcGxhY2UsIGFwcGVuZCkge1xuICAgICAgcGF0aCA9IHRoaXMuZm9ybWF0UGF0aChwYXRoLCBhcHBlbmQpO1xuICAgICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgICAgbG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uLmhhc2ggPSBwYXRoO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZm9ybWF0UGF0aCA9IGZ1bmN0aW9uIGZvcm1hdFBhdGgocGF0aCwgYXBwZW5kKSB7XG4gICAgICB2YXIgaXNBYnNvbG91dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICAgICAgdmFyIHByZWZpeCA9ICcjJyArICh0aGlzLmhhc2hiYW5nID8gJyEnIDogJycpO1xuICAgICAgcmV0dXJuIGlzQWJzb2xvdXRlID8gcHJlZml4ICsgcGF0aCA6IHByZWZpeCArIHJlc29sdmVQYXRoKGxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMhPy8sICcnKSwgcGF0aCwgYXBwZW5kKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEhhc2hIaXN0b3J5O1xuICB9KSgpO1xuXG4gIHZhciBBYnN0cmFjdEhpc3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFic3RyYWN0SGlzdG9yeShfcmVmKSB7XG4gICAgICB2YXIgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuICAgICAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIEFic3RyYWN0SGlzdG9yeSk7XG5cbiAgICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICAgIHRoaXMuY3VycmVudFBhdGggPSAnLyc7XG4gICAgfVxuXG4gICAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdGhpcy5vbkNoYW5nZSgnLycpO1xuICAgIH07XG5cbiAgICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgLy8gbm9vcFxuICAgIH07XG5cbiAgICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28ocGF0aCwgcmVwbGFjZSwgYXBwZW5kKSB7XG4gICAgICBwYXRoID0gdGhpcy5jdXJyZW50UGF0aCA9IHRoaXMuZm9ybWF0UGF0aChwYXRoLCBhcHBlbmQpO1xuICAgICAgdGhpcy5vbkNoYW5nZShwYXRoKTtcbiAgICB9O1xuXG4gICAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5mb3JtYXRQYXRoID0gZnVuY3Rpb24gZm9ybWF0UGF0aChwYXRoLCBhcHBlbmQpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6IHJlc29sdmVQYXRoKHRoaXMuY3VycmVudFBhdGgsIHBhdGgsIGFwcGVuZCk7XG4gICAgfTtcblxuICAgIHJldHVybiBBYnN0cmFjdEhpc3Rvcnk7XG4gIH0pKCk7XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB0aGUgcmV1c2FiaWxpdHkgb2YgYW4gZXhpc3Rpbmcgcm91dGVyIHZpZXcuXG4gICAqXG4gICAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKi9cblxuICBmdW5jdGlvbiBjYW5SZXVzZSh2aWV3LCBoYW5kbGVyLCB0cmFuc2l0aW9uKSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IHZpZXcuY2hpbGRWTTtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBpbXBvcnRhbnQ6IGNoZWNrIHZpZXcuQ29tcG9uZW50IGhlcmUgYmVjYXVzZSBpdCBtYXlcbiAgICAvLyBoYXZlIGJlZW4gY2hhbmdlZCBpbiBhY3RpdmF0ZSBob29rXG4gICAgaWYgKHZpZXcuQ29tcG9uZW50ICE9PSBoYW5kbGVyLmNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgY2FuUmV1c2VGbiA9IGdldFJvdXRlQ29uZmlnKGNvbXBvbmVudCwgJ2NhblJldXNlJyk7XG4gICAgcmV0dXJuIHR5cGVvZiBjYW5SZXVzZUZuID09PSAnYm9vbGVhbicgPyBjYW5SZXVzZUZuIDogY2FuUmV1c2VGbiA/IGNhblJldXNlRm4uY2FsbChjb21wb25lbnQsIHtcbiAgICAgIHRvOiB0cmFuc2l0aW9uLnRvLFxuICAgICAgZnJvbTogdHJhbnNpdGlvbi5mcm9tXG4gICAgfSkgOiB0cnVlOyAvLyBkZWZhdWx0cyB0byB0cnVlXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBjb21wb25lbnQgY2FuIGRlYWN0aXZhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNhbkRlYWN0aXZhdGUodmlldywgdHJhbnNpdGlvbiwgbmV4dCkge1xuICAgIHZhciBmcm9tQ29tcG9uZW50ID0gdmlldy5jaGlsZFZNO1xuICAgIHZhciBob29rID0gZ2V0Um91dGVDb25maWcoZnJvbUNvbXBvbmVudCwgJ2NhbkRlYWN0aXZhdGUnKTtcbiAgICBpZiAoIWhvb2spIHtcbiAgICAgIG5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbi5jYWxsSG9vayhob29rLCBmcm9tQ29tcG9uZW50LCBuZXh0LCB7XG4gICAgICAgIGV4cGVjdEJvb2xlYW46IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIGNvbXBvbmVudCBjYW4gYWN0aXZhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNhbkFjdGl2YXRlKGhhbmRsZXIsIHRyYW5zaXRpb24sIG5leHQpIHtcbiAgICByZXNvbHZlQXN5bmNDb21wb25lbnQoaGFuZGxlciwgZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgICAgLy8gaGF2ZSB0byBjaGVjayBkdWUgdG8gYXN5bmMtbmVzc1xuICAgICAgaWYgKHRyYW5zaXRpb24uYWJvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBjb21wb25lbnQgY2FuIGJlIGFjdGl2YXRlZFxuICAgICAgdmFyIGhvb2sgPSBnZXRSb3V0ZUNvbmZpZyhDb21wb25lbnQsICdjYW5BY3RpdmF0ZScpO1xuICAgICAgaWYgKCFob29rKSB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24uY2FsbEhvb2soaG9vaywgbnVsbCwgbmV4dCwge1xuICAgICAgICAgIGV4cGVjdEJvb2xlYW46IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBkZWFjdGl2YXRlIGhvb2tzIGZvciBleGlzdGluZyByb3V0ZXItdmlld3MuXG4gICAqXG4gICAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRlYWN0aXZhdGUodmlldywgdHJhbnNpdGlvbiwgbmV4dCkge1xuICAgIHZhciBjb21wb25lbnQgPSB2aWV3LmNoaWxkVk07XG4gICAgdmFyIGhvb2sgPSBnZXRSb3V0ZUNvbmZpZyhjb21wb25lbnQsICdkZWFjdGl2YXRlJyk7XG4gICAgaWYgKCFob29rKSB7XG4gICAgICBuZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24uY2FsbEhvb2tzKGhvb2ssIGNvbXBvbmVudCwgbmV4dCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2YXRlIC8gc3dpdGNoIGNvbXBvbmVudCBmb3IgYSByb3V0ZXItdmlldy5cbiAgICpcbiAgICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBkZXB0aFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKHZpZXcsIHRyYW5zaXRpb24sIGRlcHRoLCBjYiwgcmV1c2UpIHtcbiAgICB2YXIgaGFuZGxlciA9IHRyYW5zaXRpb24uYWN0aXZhdGVRdWV1ZVtkZXB0aF07XG4gICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICBzYXZlQ2hpbGRWaWV3KHZpZXcpO1xuICAgICAgaWYgKHZpZXcuX2JvdW5kKSB7XG4gICAgICAgIHZpZXcuc2V0Q29tcG9uZW50KG51bGwpO1xuICAgICAgfVxuICAgICAgY2IgJiYgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgQ29tcG9uZW50ID0gdmlldy5Db21wb25lbnQgPSBoYW5kbGVyLmNvbXBvbmVudDtcbiAgICB2YXIgYWN0aXZhdGVIb29rID0gZ2V0Um91dGVDb25maWcoQ29tcG9uZW50LCAnYWN0aXZhdGUnKTtcbiAgICB2YXIgZGF0YUhvb2sgPSBnZXRSb3V0ZUNvbmZpZyhDb21wb25lbnQsICdkYXRhJyk7XG4gICAgdmFyIHdhaXRGb3JEYXRhID0gZ2V0Um91dGVDb25maWcoQ29tcG9uZW50LCAnd2FpdEZvckRhdGEnKTtcblxuICAgIHZpZXcuZGVwdGggPSBkZXB0aDtcbiAgICB2aWV3LmFjdGl2YXRlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGNvbXBvbmVudCA9IHVuZGVmaW5lZDtcbiAgICB2YXIgbG9hZGluZyA9ICEhKGRhdGFIb29rICYmICF3YWl0Rm9yRGF0YSk7XG5cbiAgICAvLyBcInJldXNlXCIgaXMgYSBmbGFnIHBhc3NlZCBkb3duIHdoZW4gdGhlIHBhcmVudCB2aWV3IGlzXG4gICAgLy8gZWl0aGVyIHJldXNlZCB2aWEga2VlcC1hbGl2ZSBvciBhcyBhIGNoaWxkIG9mIGEga2VwdC1hbGl2ZSB2aWV3LlxuICAgIC8vIG9mIGNvdXJzZSB3ZSBjYW4gb25seSByZXVzZSBpZiB0aGUgY3VycmVudCBrZXB0LWFsaXZlIGluc3RhbmNlXG4gICAgLy8gaXMgb2YgdGhlIGNvcnJlY3QgdHlwZS5cbiAgICByZXVzZSA9IHJldXNlICYmIHZpZXcuY2hpbGRWTSAmJiB2aWV3LmNoaWxkVk0uY29uc3RydWN0b3IgPT09IENvbXBvbmVudDtcblxuICAgIGlmIChyZXVzZSkge1xuICAgICAgLy8ganVzdCByZXVzZVxuICAgICAgY29tcG9uZW50ID0gdmlldy5jaGlsZFZNO1xuICAgICAgY29tcG9uZW50LiRsb2FkaW5nUm91dGVEYXRhID0gbG9hZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgc2F2ZUNoaWxkVmlldyh2aWV3KTtcblxuICAgICAgLy8gdW5idWlsZCBjdXJyZW50IGNvbXBvbmVudC4gdGhpcyBzdGVwIGFsc28gZGVzdHJveXNcbiAgICAgIC8vIGFuZCByZW1vdmVzIGFsbCBuZXN0ZWQgY2hpbGQgdmlld3MuXG4gICAgICB2aWV3LnVuYnVpbGQodHJ1ZSk7XG5cbiAgICAgIC8vIGJ1aWxkIHRoZSBuZXcgY29tcG9uZW50LiB0aGlzIHdpbGwgYWxzbyBjcmVhdGUgdGhlXG4gICAgICAvLyBkaXJlY3QgY2hpbGQgdmlldyBvZiB0aGUgY3VycmVudCBvbmUuIGl0IHdpbGwgcmVnaXN0ZXJcbiAgICAgIC8vIGl0c2VsZiBhcyB2aWV3LmNoaWxkVmlldy5cbiAgICAgIGNvbXBvbmVudCA9IHZpZXcuYnVpbGQoe1xuICAgICAgICBfbWV0YToge1xuICAgICAgICAgICRsb2FkaW5nUm91dGVEYXRhOiBsb2FkaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgdGhpcy5fcm91dGVyVmlldyA9IHZpZXc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBoYW5kbGUga2VlcC1hbGl2ZS5cbiAgICAgIC8vIHdoZW4gYSBrZXB0LWFsaXZlIGNoaWxkIHZtIGlzIHJlc3RvcmVkLCB3ZSBuZWVkIHRvXG4gICAgICAvLyBhZGQgaXRzIGNhY2hlZCBjaGlsZCB2aWV3cyBpbnRvIHRoZSByb3V0ZXIncyB2aWV3IGxpc3QsXG4gICAgICAvLyBhbmQgYWxzbyBwcm9wZXJseSB1cGRhdGUgY3VycmVudCB2aWV3J3MgY2hpbGQgdmlldy5cbiAgICAgIGlmICh2aWV3LmtlZXBBbGl2ZSkge1xuICAgICAgICBjb21wb25lbnQuJGxvYWRpbmdSb3V0ZURhdGEgPSBsb2FkaW5nO1xuICAgICAgICB2YXIgY2FjaGVkQ2hpbGRWaWV3ID0gY29tcG9uZW50Ll9rZWVwQWxpdmVSb3V0ZXJWaWV3O1xuICAgICAgICBpZiAoY2FjaGVkQ2hpbGRWaWV3KSB7XG4gICAgICAgICAgdmlldy5jaGlsZFZpZXcgPSBjYWNoZWRDaGlsZFZpZXc7XG4gICAgICAgICAgY29tcG9uZW50Ll9rZWVwQWxpdmVSb3V0ZXJWaWV3ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNsZWFudXAgdGhlIGNvbXBvbmVudCBpbiBjYXNlIHRoZSB0cmFuc2l0aW9uIGlzIGFib3J0ZWRcbiAgICAvLyBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBldmVyIGluc2VydGVkLlxuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIGNvbXBvbmVudC4kZGVzdHJveSgpO1xuICAgIH07XG5cbiAgICAvLyBhY3R1YWxseSBpbnNlcnQgdGhlIGNvbXBvbmVudCBhbmQgdHJpZ2dlciB0cmFuc2l0aW9uXG4gICAgdmFyIGluc2VydCA9IGZ1bmN0aW9uIGluc2VydCgpIHtcbiAgICAgIGlmIChyZXVzZSkge1xuICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcm91dGVyID0gdHJhbnNpdGlvbi5yb3V0ZXI7XG4gICAgICBpZiAocm91dGVyLl9yZW5kZXJlZCB8fCByb3V0ZXIuX3RyYW5zaXRpb25PbkxvYWQpIHtcbiAgICAgICAgdmlldy50cmFuc2l0aW9uKGNvbXBvbmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyB0cmFuc2l0aW9uIG9uIGZpcnN0IHJlbmRlciwgbWFudWFsIHRyYW5zaXRpb25cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICh2aWV3LnNldEN1cnJlbnQpIHtcbiAgICAgICAgICAvLyAwLjEyIGNvbXBhdFxuICAgICAgICAgIHZpZXcuc2V0Q3VycmVudChjb21wb25lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIDEuMFxuICAgICAgICAgIHZpZXcuY2hpbGRWTSA9IGNvbXBvbmVudDtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuJGJlZm9yZSh2aWV3LmFuY2hvciwgbnVsbCwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgY2IgJiYgY2IoKTtcbiAgICB9O1xuXG4gICAgdmFyIGFmdGVyRGF0YSA9IGZ1bmN0aW9uIGFmdGVyRGF0YSgpIHtcbiAgICAgIC8vIGFjdGl2YXRlIHRoZSBjaGlsZCB2aWV3XG4gICAgICBpZiAodmlldy5jaGlsZFZpZXcpIHtcbiAgICAgICAgYWN0aXZhdGUodmlldy5jaGlsZFZpZXcsIHRyYW5zaXRpb24sIGRlcHRoICsgMSwgbnVsbCwgcmV1c2UgfHwgdmlldy5rZWVwQWxpdmUpO1xuICAgICAgfVxuICAgICAgaW5zZXJ0KCk7XG4gICAgfTtcblxuICAgIC8vIGNhbGxlZCBhZnRlciBhY3RpdmF0aW9uIGhvb2sgaXMgcmVzb2x2ZWRcbiAgICB2YXIgYWZ0ZXJBY3RpdmF0ZSA9IGZ1bmN0aW9uIGFmdGVyQWN0aXZhdGUoKSB7XG4gICAgICB2aWV3LmFjdGl2YXRlZCA9IHRydWU7XG4gICAgICBpZiAoZGF0YUhvb2sgJiYgd2FpdEZvckRhdGEpIHtcbiAgICAgICAgLy8gd2FpdCB1bnRpbCBkYXRhIGxvYWRlZCB0byBpbnNlcnRcbiAgICAgICAgbG9hZERhdGEoY29tcG9uZW50LCB0cmFuc2l0aW9uLCBkYXRhSG9vaywgYWZ0ZXJEYXRhLCBjbGVhbnVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGxvYWQgZGF0YSBhbmQgaW5zZXJ0IGF0IHRoZSBzYW1lIHRpbWVcbiAgICAgICAgaWYgKGRhdGFIb29rKSB7XG4gICAgICAgICAgbG9hZERhdGEoY29tcG9uZW50LCB0cmFuc2l0aW9uLCBkYXRhSG9vayk7XG4gICAgICAgIH1cbiAgICAgICAgYWZ0ZXJEYXRhKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChhY3RpdmF0ZUhvb2spIHtcbiAgICAgIHRyYW5zaXRpb24uY2FsbEhvb2tzKGFjdGl2YXRlSG9vaywgY29tcG9uZW50LCBhZnRlckFjdGl2YXRlLCB7XG4gICAgICAgIGNsZWFudXA6IGNsZWFudXAsXG4gICAgICAgIHBvc3RBY3RpdmF0ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFmdGVyQWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV1c2UgYSB2aWV3LCBqdXN0IHJlbG9hZCBkYXRhIGlmIG5lY2Vzc2FyeS5cbiAgICpcbiAgICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJldXNlKHZpZXcsIHRyYW5zaXRpb24pIHtcbiAgICB2YXIgY29tcG9uZW50ID0gdmlldy5jaGlsZFZNO1xuICAgIHZhciBkYXRhSG9vayA9IGdldFJvdXRlQ29uZmlnKGNvbXBvbmVudCwgJ2RhdGEnKTtcbiAgICBpZiAoZGF0YUhvb2spIHtcbiAgICAgIGxvYWREYXRhKGNvbXBvbmVudCwgdHJhbnNpdGlvbiwgZGF0YUhvb2spO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBc3luY2hyb25vdXNseSBsb2FkIGFuZCBhcHBseSBkYXRhIHRvIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbGVhbnVwXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGxvYWREYXRhKGNvbXBvbmVudCwgdHJhbnNpdGlvbiwgaG9vaywgY2IsIGNsZWFudXApIHtcbiAgICBjb21wb25lbnQuJGxvYWRpbmdSb3V0ZURhdGEgPSB0cnVlO1xuICAgIHRyYW5zaXRpb24uY2FsbEhvb2tzKGhvb2ssIGNvbXBvbmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgY29tcG9uZW50LiRsb2FkaW5nUm91dGVEYXRhID0gZmFsc2U7XG4gICAgICBjb21wb25lbnQuJGVtaXQoJ3JvdXRlLWRhdGEtbG9hZGVkJywgY29tcG9uZW50KTtcbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfSwge1xuICAgICAgY2xlYW51cDogY2xlYW51cCxcbiAgICAgIHBvc3RBY3RpdmF0ZTogdHJ1ZSxcbiAgICAgIHByb2Nlc3NEYXRhOiBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XG4gICAgICAgIC8vIGhhbmRsZSBwcm9taXNlIHN1Z2FyIHN5bnRheFxuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBkYXRhW2tleV07XG4gICAgICAgICAgICBpZiAoaXNQcm9taXNlKHZhbCkpIHtcbiAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh2YWwudGhlbihmdW5jdGlvbiAocmVzb2x2ZWRWYWwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuJHNldChrZXksIHJlc29sdmVkVmFsKTtcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LiRzZXQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZXNbMF0uY29uc3RydWN0b3IuYWxsKHByb21pc2VzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIGNoaWxkIHZpZXcgZm9yIGEga2VwdC1hbGl2ZSB2aWV3IHNvIHRoYXRcbiAgICogd2UgY2FuIHJlc3RvcmUgaXQgd2hlbiBpdCBpcyBzd2l0Y2hlZCBiYWNrIHRvLlxuICAgKlxuICAgKiBAcGFyYW0ge0RpcmVjdGl2ZX0gdmlld1xuICAgKi9cblxuICBmdW5jdGlvbiBzYXZlQ2hpbGRWaWV3KHZpZXcpIHtcbiAgICBpZiAodmlldy5rZWVwQWxpdmUgJiYgdmlldy5jaGlsZFZNICYmIHZpZXcuY2hpbGRWaWV3KSB7XG4gICAgICB2aWV3LmNoaWxkVk0uX2tlZXBBbGl2ZVJvdXRlclZpZXcgPSB2aWV3LmNoaWxkVmlldztcbiAgICB9XG4gICAgdmlldy5jaGlsZFZpZXcgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHBsYWluIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICovXG5cbiAgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgUm91dGVUcmFuc2l0aW9uIG9iamVjdCBtYW5hZ2VzIHRoZSBwaXBlbGluZSBvZiBhXG4gICAqIHJvdXRlci12aWV3IHN3aXRjaGluZyBwcm9jZXNzLiBUaGlzIGlzIGFsc28gdGhlIG9iamVjdFxuICAgKiBwYXNzZWQgaW50byB1c2VyIHJvdXRlIGhvb2tzLlxuICAgKlxuICAgKiBAcGFyYW0ge1JvdXRlcn0gcm91dGVyXG4gICAqIEBwYXJhbSB7Um91dGV9IHRvXG4gICAqIEBwYXJhbSB7Um91dGV9IGZyb21cbiAgICovXG5cbiAgdmFyIFJvdXRlVHJhbnNpdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUm91dGVUcmFuc2l0aW9uKHJvdXRlciwgdG8sIGZyb20pIHtcbiAgICAgIGJhYmVsSGVscGVycy5jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZVRyYW5zaXRpb24pO1xuXG4gICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgIHRoaXMudG8gPSB0bztcbiAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgICAgdGhpcy5hYm9ydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBYm9ydCBjdXJyZW50IHRyYW5zaXRpb24gYW5kIHJldHVybiB0byBwcmV2aW91cyBsb2NhdGlvbi5cbiAgICAgKi9cblxuICAgIFJvdXRlVHJhbnNpdGlvbi5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgIGlmICghdGhpcy5hYm9ydGVkKSB7XG4gICAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIC8vIGlmIHRoZSByb290IHBhdGggdGhyb3dzIGFuIGVycm9yIGR1cmluZyB2YWxpZGF0aW9uXG4gICAgICAgIC8vIG9uIGluaXRpYWwgbG9hZCwgaXQgZ2V0cyBjYXVnaHQgaW4gYW4gaW5maW5pdGUgbG9vcC5cbiAgICAgICAgdmFyIGFib3J0aW5nT25Mb2FkID0gIXRoaXMuZnJvbS5wYXRoICYmIHRoaXMudG8ucGF0aCA9PT0gJy8nO1xuICAgICAgICBpZiAoIWFib3J0aW5nT25Mb2FkKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIucmVwbGFjZSh0aGlzLmZyb20ucGF0aCB8fCAnLycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFib3J0IGN1cnJlbnQgdHJhbnNpdGlvbiBhbmQgcmVkaXJlY3QgdG8gYSBuZXcgbG9jYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqL1xuXG4gICAgUm91dGVUcmFuc2l0aW9uLnByb3RvdHlwZS5yZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KHBhdGgpIHtcbiAgICAgIGlmICghdGhpcy5hYm9ydGVkKSB7XG4gICAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBwYXRoID0gbWFwUGFyYW1zKHBhdGgsIHRoaXMudG8ucGFyYW1zLCB0aGlzLnRvLnF1ZXJ5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXRoLnBhcmFtcyA9IHBhdGgucGFyYW1zIHx8IHRoaXMudG8ucGFyYW1zO1xuICAgICAgICAgIHBhdGgucXVlcnkgPSBwYXRoLnF1ZXJ5IHx8IHRoaXMudG8ucXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3V0ZXIucmVwbGFjZShwYXRoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSByb3V0ZXIgdmlldyB0cmFuc2l0aW9uJ3MgcGlwZWxpbmUgY2FuIGJlIGRlc2NyaWJlZCBhc1xuICAgICAqIGZvbGxvd3MsIGFzc3VtaW5nIHdlIGFyZSB0cmFuc2l0aW9uaW5nIGZyb20gYW4gZXhpc3RpbmdcbiAgICAgKiA8cm91dGVyLXZpZXc+IGNoYWluIFtDb21wb25lbnQgQSwgQ29tcG9uZW50IEJdIHRvIGEgbmV3XG4gICAgICogY2hhaW4gW0NvbXBvbmVudCBBLCBDb21wb25lbnQgQ106XG4gICAgICpcbiAgICAgKiAgQSAgICBBXG4gICAgICogIHwgPT4gfFxuICAgICAqICBCICAgIENcbiAgICAgKlxuICAgICAqIDEuIFJldXNhYmxpdHkgcGhhc2U6XG4gICAgICogICAtPiBjYW5SZXVzZShBLCBBKVxuICAgICAqICAgLT4gY2FuUmV1c2UoQiwgQylcbiAgICAgKiAgIC0+IGRldGVybWluZSBuZXcgcXVldWVzOlxuICAgICAqICAgICAgLSBkZWFjdGl2YXRpb246IFtCXVxuICAgICAqICAgICAgLSBhY3RpdmF0aW9uOiBbQ11cbiAgICAgKlxuICAgICAqIDIuIFZhbGlkYXRpb24gcGhhc2U6XG4gICAgICogICAtPiBjYW5EZWFjdGl2YXRlKEIpXG4gICAgICogICAtPiBjYW5BY3RpdmF0ZShDKVxuICAgICAqXG4gICAgICogMy4gQWN0aXZhdGlvbiBwaGFzZTpcbiAgICAgKiAgIC0+IGRlYWN0aXZhdGUoQilcbiAgICAgKiAgIC0+IGFjdGl2YXRlKEMpXG4gICAgICpcbiAgICAgKiBFYWNoIG9mIHRoZXNlIHN0ZXBzIGNhbiBiZSBhc3luY2hyb25vdXMsIGFuZCBhbnlcbiAgICAgKiBzdGVwIGNhbiBwb3RlbnRpYWxseSBhYm9ydCB0aGUgdHJhbnNpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAgICovXG5cbiAgICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoY2IpIHtcbiAgICAgIHZhciB0cmFuc2l0aW9uID0gdGhpcztcblxuICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBxdWV1ZSBvZiB2aWV3cyB0byBkZWFjdGl2YXRlXG4gICAgICB2YXIgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgICB2YXIgdmlldyA9IHRoaXMucm91dGVyLl9yb290VmlldztcbiAgICAgIHdoaWxlICh2aWV3KSB7XG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS51bnNoaWZ0KHZpZXcpO1xuICAgICAgICB2aWV3ID0gdmlldy5jaGlsZFZpZXc7XG4gICAgICB9XG4gICAgICB2YXIgcmV2ZXJzZURlYWN0aXZhdGVRdWV1ZSA9IGRlYWN0aXZhdGVRdWV1ZS5zbGljZSgpLnJldmVyc2UoKTtcblxuICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBxdWV1ZSBvZiByb3V0ZSBoYW5kbGVycyB0byBhY3RpdmF0ZVxuICAgICAgdmFyIGFjdGl2YXRlUXVldWUgPSB0aGlzLmFjdGl2YXRlUXVldWUgPSB0b0FycmF5KHRoaXMudG8ubWF0Y2hlZCkubWFwKGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICByZXR1cm4gbWF0Y2guaGFuZGxlcjtcbiAgICAgIH0pO1xuXG4gICAgICAvLyAxLiBSZXVzYWJpbGl0eSBwaGFzZVxuICAgICAgdmFyIGkgPSB1bmRlZmluZWQsXG4gICAgICAgICAgcmV1c2VRdWV1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCByZXZlcnNlRGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghY2FuUmV1c2UocmV2ZXJzZURlYWN0aXZhdGVRdWV1ZVtpXSwgYWN0aXZhdGVRdWV1ZVtpXSwgdHJhbnNpdGlvbikpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIHJldXNlUXVldWUgPSByZXZlcnNlRGVhY3RpdmF0ZVF1ZXVlLnNsaWNlKDAsIGkpO1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUgPSByZXZlcnNlRGVhY3RpdmF0ZVF1ZXVlLnNsaWNlKGkpLnJldmVyc2UoKTtcbiAgICAgICAgYWN0aXZhdGVRdWV1ZSA9IGFjdGl2YXRlUXVldWUuc2xpY2UoaSk7XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIFZhbGlkYXRpb24gcGhhc2VcbiAgICAgIHRyYW5zaXRpb24ucnVuUXVldWUoZGVhY3RpdmF0ZVF1ZXVlLCBjYW5EZWFjdGl2YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyYW5zaXRpb24ucnVuUXVldWUoYWN0aXZhdGVRdWV1ZSwgY2FuQWN0aXZhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLnJ1blF1ZXVlKGRlYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gMy4gQWN0aXZhdGlvbiBwaGFzZVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgcm91dGVyIGN1cnJlbnQgcm91dGVcbiAgICAgICAgICAgIHRyYW5zaXRpb24ucm91dGVyLl9vblRyYW5zaXRpb25WYWxpZGF0ZWQodHJhbnNpdGlvbik7XG5cbiAgICAgICAgICAgIC8vIHRyaWdnZXIgcmV1c2UgZm9yIGFsbCByZXVzZWQgdmlld3NcbiAgICAgICAgICAgIHJldXNlUXVldWUgJiYgcmV1c2VRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXVzZSh2aWV3LCB0cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB0aGUgcm9vdCBvZiB0aGUgY2hhaW4gdGhhdCBuZWVkcyB0byBiZSByZXBsYWNlZFxuICAgICAgICAgICAgLy8gaXMgdGhlIHRvcC1tb3N0IG5vbi1yZXVzYWJsZSB2aWV3LlxuICAgICAgICAgICAgaWYgKGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdmFyIF92aWV3ID0gZGVhY3RpdmF0ZVF1ZXVlW2RlYWN0aXZhdGVRdWV1ZS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgdmFyIGRlcHRoID0gcmV1c2VRdWV1ZSA/IHJldXNlUXVldWUubGVuZ3RoIDogMDtcbiAgICAgICAgICAgICAgYWN0aXZhdGUoX3ZpZXcsIHRyYW5zaXRpb24sIGRlcHRoLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBc3luY2hyb25vdXNseSBhbmQgc2VxdWVudGlhbGx5IGFwcGx5IGEgZnVuY3Rpb24gdG8gYVxuICAgICAqIHF1ZXVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcXVldWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAgICovXG5cbiAgICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLnJ1blF1ZXVlID0gZnVuY3Rpb24gcnVuUXVldWUocXVldWUsIGZuLCBjYikge1xuICAgICAgdmFyIHRyYW5zaXRpb24gPSB0aGlzO1xuICAgICAgc3RlcCgwKTtcbiAgICAgIGZ1bmN0aW9uIHN0ZXAoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm4ocXVldWVbaW5kZXhdLCB0cmFuc2l0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdGVwKGluZGV4ICsgMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbCBhIHVzZXIgcHJvdmlkZWQgcm91dGUgdHJhbnNpdGlvbiBob29rIGFuZCBoYW5kbGVcbiAgICAgKiB0aGUgcmVzcG9uc2UgKGUuZy4gaWYgdGhlIHVzZXIgcmV0dXJucyBhIHByb21pc2UpLlxuICAgICAqXG4gICAgICogSWYgdGhlIHVzZXIgbmVpdGhlciBleHBlY3RzIGFuIGFyZ3VtZW50IG5vciByZXR1cm5zIGFcbiAgICAgKiBwcm9taXNlLCB0aGUgaG9vayBpcyBhc3N1bWVkIHRvIGJlIHN5bmNocm9ub3VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICAgICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZXhwZWN0Qm9vbGVhblxuICAgICAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBwb3N0QWN0aXZlXG4gICAgICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBwcm9jZXNzRGF0YVxuICAgICAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gY2xlYW51cFxuICAgICAqL1xuXG4gICAgUm91dGVUcmFuc2l0aW9uLnByb3RvdHlwZS5jYWxsSG9vayA9IGZ1bmN0aW9uIGNhbGxIb29rKGhvb2ssIGNvbnRleHQsIGNiKSB7XG4gICAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzNdO1xuXG4gICAgICB2YXIgX3JlZiRleHBlY3RCb29sZWFuID0gX3JlZi5leHBlY3RCb29sZWFuO1xuICAgICAgdmFyIGV4cGVjdEJvb2xlYW4gPSBfcmVmJGV4cGVjdEJvb2xlYW4gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRleHBlY3RCb29sZWFuO1xuICAgICAgdmFyIF9yZWYkcG9zdEFjdGl2YXRlID0gX3JlZi5wb3N0QWN0aXZhdGU7XG4gICAgICB2YXIgcG9zdEFjdGl2YXRlID0gX3JlZiRwb3N0QWN0aXZhdGUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRwb3N0QWN0aXZhdGU7XG4gICAgICB2YXIgcHJvY2Vzc0RhdGEgPSBfcmVmLnByb2Nlc3NEYXRhO1xuICAgICAgdmFyIGNsZWFudXAgPSBfcmVmLmNsZWFudXA7XG5cbiAgICAgIHZhciB0cmFuc2l0aW9uID0gdGhpcztcbiAgICAgIHZhciBuZXh0Q2FsbGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIGFib3J0IHRoZSB0cmFuc2l0aW9uXG4gICAgICB2YXIgYWJvcnQgPSBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgICAgY2xlYW51cCAmJiBjbGVhbnVwKCk7XG4gICAgICAgIHRyYW5zaXRpb24uYWJvcnQoKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGhhbmRsZSBlcnJvcnNcbiAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gb25FcnJvcihlcnIpIHtcbiAgICAgICAgcG9zdEFjdGl2YXRlID8gbmV4dCgpIDogYWJvcnQoKTtcbiAgICAgICAgaWYgKGVyciAmJiAhdHJhbnNpdGlvbi5yb3V0ZXIuX3N1cHByZXNzKSB7XG4gICAgICAgICAgd2FybiQxKCdVbmNhdWdodCBlcnJvciBkdXJpbmcgdHJhbnNpdGlvbjogJyk7XG4gICAgICAgICAgdGhyb3cgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIgOiBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gc2luY2UgcHJvbWlzZSBzd2FsbG93cyBlcnJvcnMsIHdlIGhhdmUgdG9cbiAgICAgIC8vIHRocm93IGl0IGluIHRoZSBuZXh0IHRpY2suLi5cbiAgICAgIHZhciBvblByb21pc2VFcnJvciA9IGZ1bmN0aW9uIG9uUHJvbWlzZUVycm9yKGVycikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gYWR2YW5jZSB0aGUgdHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGVwXG4gICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIGlmIChuZXh0Q2FsbGVkKSB7XG4gICAgICAgICAgd2FybiQxKCd0cmFuc2l0aW9uLm5leHQoKSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZS4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbmV4dENhbGxlZCA9IHRydWU7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uLmFib3J0ZWQpIHtcbiAgICAgICAgICBjbGVhbnVwICYmIGNsZWFudXAoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBuZXh0V2l0aEJvb2xlYW4gPSBmdW5jdGlvbiBuZXh0V2l0aEJvb2xlYW4ocmVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICByZXMgPyBuZXh0KCkgOiBhYm9ydCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgICAgcmVzLnRoZW4oZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgICBvayA/IG5leHQoKSA6IGFib3J0KCk7XG4gICAgICAgICAgfSwgb25Qcm9taXNlRXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKCFob29rLmxlbmd0aCkge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIG5leHRXaXRoRGF0YSA9IGZ1bmN0aW9uIG5leHRXaXRoRGF0YShkYXRhKSB7XG4gICAgICAgIHZhciByZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gcHJvY2Vzc0RhdGEoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgICAgcmVzLnRoZW4obmV4dCwgb25Qcm9taXNlRXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gZXhwb3NlIGEgY2xvbmUgb2YgdGhlIHRyYW5zaXRpb24gb2JqZWN0LCBzbyB0aGF0IGVhY2hcbiAgICAgIC8vIGhvb2sgZ2V0cyBhIGNsZWFuIGNvcHkgYW5kIHByZXZlbnQgdGhlIHVzZXIgZnJvbVxuICAgICAgLy8gbWVzc2luZyB3aXRoIHRoZSBpbnRlcm5hbHMuXG4gICAgICB2YXIgZXhwb3NlZCA9IHtcbiAgICAgICAgdG86IHRyYW5zaXRpb24udG8sXG4gICAgICAgIGZyb206IHRyYW5zaXRpb24uZnJvbSxcbiAgICAgICAgYWJvcnQ6IGFib3J0LFxuICAgICAgICBuZXh0OiBwcm9jZXNzRGF0YSA/IG5leHRXaXRoRGF0YSA6IG5leHQsXG4gICAgICAgIHJlZGlyZWN0OiBmdW5jdGlvbiByZWRpcmVjdCgpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLnJlZGlyZWN0LmFwcGx5KHRyYW5zaXRpb24sIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIGFjdHVhbGx5IGNhbGwgdGhlIGhvb2tcbiAgICAgIHZhciByZXMgPSB1bmRlZmluZWQ7XG4gICAgICB0cnkge1xuICAgICAgICByZXMgPSBob29rLmNhbGwoY29udGV4dCwgZXhwb3NlZCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG9uRXJyb3IoZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4cGVjdEJvb2xlYW4pIHtcbiAgICAgICAgLy8gYm9vbGVhbiBob29rc1xuICAgICAgICBuZXh0V2l0aEJvb2xlYW4ocmVzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKHJlcykpIHtcbiAgICAgICAgLy8gcHJvbWlzZVxuICAgICAgICBpZiAocHJvY2Vzc0RhdGEpIHtcbiAgICAgICAgICByZXMudGhlbihuZXh0V2l0aERhdGEsIG9uUHJvbWlzZUVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMudGhlbihuZXh0LCBvblByb21pc2VFcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzc0RhdGEgJiYgaXNQbGFpbk9qYmVjdChyZXMpKSB7XG4gICAgICAgIC8vIGRhdGEgcHJvbWlzZSBzdWdhclxuICAgICAgICBuZXh0V2l0aERhdGEocmVzKTtcbiAgICAgIH0gZWxzZSBpZiAoIWhvb2subGVuZ3RoKSB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbCBhIHNpbmdsZSBob29rIG9yIGFuIGFycmF5IG9mIGFzeW5jIGhvb2tzIGluIHNlcmllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGhvb2tzXG4gICAgICogQHBhcmFtIHsqfSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgICovXG5cbiAgICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLmNhbGxIb29rcyA9IGZ1bmN0aW9uIGNhbGxIb29rcyhob29rcywgY29udGV4dCwgY2IsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGhvb2tzKSkge1xuICAgICAgICB0aGlzLnJ1blF1ZXVlKGhvb2tzLCBmdW5jdGlvbiAoaG9vaywgXywgbmV4dCkge1xuICAgICAgICAgIGlmICghX3RoaXMuYWJvcnRlZCkge1xuICAgICAgICAgICAgX3RoaXMuY2FsbEhvb2soaG9vaywgY29udGV4dCwgbmV4dCwgb3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjYik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbGxIb29rKGhvb2tzLCBjb250ZXh0LCBjYiwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBSb3V0ZVRyYW5zaXRpb247XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gaXNQbGFpbk9qYmVjdCh2YWwpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9BcnJheSh2YWwpIHtcbiAgICByZXR1cm4gdmFsID8gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodmFsKSA6IFtdO1xuICB9XG5cbiAgdmFyIGludGVybmFsS2V5c1JFID0gL14oY29tcG9uZW50fHN1YlJvdXRlc3xmdWxsUGF0aCkkLztcblxuICAvKipcbiAgICogUm91dGUgQ29udGV4dCBPYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtSb3V0ZXJ9IHJvdXRlclxuICAgKi9cblxuICB2YXIgUm91dGUgPSBmdW5jdGlvbiBSb3V0ZShwYXRoLCByb3V0ZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlKTtcblxuICAgIHZhciBtYXRjaGVkID0gcm91dGVyLl9yZWNvZ25pemVyLnJlY29nbml6ZShwYXRoKTtcbiAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgLy8gY29weSBhbGwgY3VzdG9tIGZpZWxkcyBmcm9tIHJvdXRlIGNvbmZpZ3NcbiAgICAgIFtdLmZvckVhY2guY2FsbChtYXRjaGVkLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG1hdGNoLmhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIWludGVybmFsS2V5c1JFLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgX3RoaXNba2V5XSA9IG1hdGNoLmhhbmRsZXJba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gc2V0IHF1ZXJ5IGFuZCBwYXJhbXNcbiAgICAgIHRoaXMucXVlcnkgPSBtYXRjaGVkLnF1ZXJ5UGFyYW1zO1xuICAgICAgdGhpcy5wYXJhbXMgPSBbXS5yZWR1Y2UuY2FsbChtYXRjaGVkLCBmdW5jdGlvbiAocHJldiwgY3VyKSB7XG4gICAgICAgIGlmIChjdXIucGFyYW1zKSB7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGN1ci5wYXJhbXMpIHtcbiAgICAgICAgICAgIHByZXZba2V5XSA9IGN1ci5wYXJhbXNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuICAgIC8vIGV4cG9zZSBwYXRoIGFuZCByb3V0ZXJcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIC8vIGZvciBpbnRlcm5hbCB1c2VcbiAgICB0aGlzLm1hdGNoZWQgPSBtYXRjaGVkIHx8IHJvdXRlci5fbm90Rm91bmRIYW5kbGVyO1xuICAgIC8vIGludGVybmFsIHJlZmVyZW5jZSB0byByb3V0ZXJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3JvdXRlcicsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHJvdXRlclxuICAgIH0pO1xuICAgIC8vIEltcG9ydGFudDogZnJlZXplIHNlbGYgdG8gcHJldmVudCBvYnNlcnZhdGlvblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gYXBwbHlPdmVycmlkZSAoVnVlKSB7XG4gICAgdmFyIF9WdWUkdXRpbCA9IFZ1ZS51dGlsO1xuICAgIHZhciBleHRlbmQgPSBfVnVlJHV0aWwuZXh0ZW5kO1xuICAgIHZhciBpc0FycmF5ID0gX1Z1ZSR1dGlsLmlzQXJyYXk7XG4gICAgdmFyIGRlZmluZVJlYWN0aXZlID0gX1Z1ZSR1dGlsLmRlZmluZVJlYWN0aXZlO1xuXG4gICAgLy8gb3ZlcnJpZGUgVnVlJ3MgaW5pdCBhbmQgZGVzdHJveSBwcm9jZXNzIHRvIGtlZXAgdHJhY2sgb2Ygcm91dGVyIGluc3RhbmNlc1xuICAgIHZhciBpbml0ID0gVnVlLnByb3RvdHlwZS5faW5pdDtcbiAgICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgdmFyIHJvb3QgPSBvcHRpb25zLl9wYXJlbnQgfHwgb3B0aW9ucy5wYXJlbnQgfHwgdGhpcztcbiAgICAgIHZhciByb3V0ZXIgPSByb290LiRyb3V0ZXI7XG4gICAgICB2YXIgcm91dGUgPSByb290LiRyb3V0ZTtcbiAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgLy8gZXhwb3NlIHJvdXRlclxuICAgICAgICB0aGlzLiRyb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHJvdXRlci5fY2hpbGRyZW4ucHVzaCh0aGlzKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICh0aGlzLl9kZWZpbmVNZXRhKSB7XG4gICAgICAgICAgLy8gMC4xMlxuICAgICAgICAgIHRoaXMuX2RlZmluZU1ldGEoJyRyb3V0ZScsIHJvdXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAxLjBcbiAgICAgICAgICBkZWZpbmVSZWFjdGl2ZSh0aGlzLCAnJHJvdXRlJywgcm91dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbml0LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIHZhciBkZXN0cm95ID0gVnVlLnByb3RvdHlwZS5fZGVzdHJveTtcbiAgICBWdWUucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCF0aGlzLl9pc0JlaW5nRGVzdHJveWVkICYmIHRoaXMuJHJvdXRlcikge1xuICAgICAgICB0aGlzLiRyb3V0ZXIuX2NoaWxkcmVuLiRyZW1vdmUodGhpcyk7XG4gICAgICB9XG4gICAgICBkZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIC8vIDEuMCBvbmx5OiBlbmFibGUgcm91dGUgbWl4aW5zXG4gICAgdmFyIHN0cmF0cyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuICAgIHZhciBob29rc1RvTWVyZ2VSRSA9IC9eKGRhdGF8YWN0aXZhdGV8ZGVhY3RpdmF0ZSkkLztcblxuICAgIGlmIChzdHJhdHMpIHtcbiAgICAgIHN0cmF0cy5yb3V0ZSA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gICAgICAgIGlmICghY2hpbGRWYWwpIHJldHVybiBwYXJlbnRWYWw7XG4gICAgICAgIGlmICghcGFyZW50VmFsKSByZXR1cm4gY2hpbGRWYWw7XG4gICAgICAgIHZhciByZXQgPSB7fTtcbiAgICAgICAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNoaWxkVmFsKSB7XG4gICAgICAgICAgdmFyIGEgPSByZXRba2V5XTtcbiAgICAgICAgICB2YXIgYiA9IGNoaWxkVmFsW2tleV07XG4gICAgICAgICAgLy8gZm9yIGRhdGEsIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlLCB3ZSBuZWVkIHRvIG1lcmdlIHRoZW0gaW50b1xuICAgICAgICAgIC8vIGFycmF5cyBzaW1pbGFyIHRvIGxpZmVjeWNsZSBob29rcy5cbiAgICAgICAgICBpZiAoYSAmJiBob29rc1RvTWVyZ2VSRS50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgIHJldFtrZXldID0gKGlzQXJyYXkoYSkgPyBhIDogW2FdKS5jb25jYXQoYik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldFtrZXldID0gYjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gVmlldyAoVnVlKSB7XG5cbiAgICB2YXIgXyA9IFZ1ZS51dGlsO1xuICAgIHZhciBjb21wb25lbnREZWYgPVxuICAgIC8vIDAuMTJcbiAgICBWdWUuZGlyZWN0aXZlKCdfY29tcG9uZW50JykgfHxcbiAgICAvLyAxLjBcbiAgICBWdWUuaW50ZXJuYWxEaXJlY3RpdmVzLmNvbXBvbmVudDtcbiAgICAvLyA8cm91dGVyLXZpZXc+IGV4dGVuZHMgdGhlIGludGVybmFsIGNvbXBvbmVudCBkaXJlY3RpdmVcbiAgICB2YXIgdmlld0RlZiA9IF8uZXh0ZW5kKHt9LCBjb21wb25lbnREZWYpO1xuXG4gICAgLy8gd2l0aCBzb21lIG92ZXJyaWRlc1xuICAgIF8uZXh0ZW5kKHZpZXdEZWYsIHtcblxuICAgICAgX2lzUm91dGVyVmlldzogdHJ1ZSxcblxuICAgICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgICAgdmFyIHJvdXRlID0gdGhpcy52bS4kcm91dGU7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoIXJvdXRlKSB7XG4gICAgICAgICAgd2FybiQxKCc8cm91dGVyLXZpZXc+IGNhbiBvbmx5IGJlIHVzZWQgaW5zaWRlIGEgJyArICdyb3V0ZXItZW5hYmxlZCBhcHAuJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvcmNlIGR5bmFtaWMgZGlyZWN0aXZlIHNvIHYtY29tcG9uZW50IGRvZXNuJ3RcbiAgICAgICAgLy8gYXR0ZW1wdCB0byBidWlsZCByaWdodCBub3dcbiAgICAgICAgdGhpcy5faXNEeW5hbWljTGl0ZXJhbCA9IHRydWU7XG4gICAgICAgIC8vIGZpbmFsbHksIGluaXQgYnkgZGVsZWdhdGluZyB0byB2LWNvbXBvbmVudFxuICAgICAgICBjb21wb25lbnREZWYuYmluZC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIC8vIGxvY2F0ZSB0aGUgcGFyZW50IHZpZXdcbiAgICAgICAgdmFyIHBhcmVudFZpZXcgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnZtO1xuICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgaWYgKHBhcmVudC5fcm91dGVyVmlldykge1xuICAgICAgICAgICAgcGFyZW50VmlldyA9IHBhcmVudC5fcm91dGVyVmlldztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50Vmlldykge1xuICAgICAgICAgIC8vIHJlZ2lzdGVyIHNlbGYgYXMgYSBjaGlsZCBvZiB0aGUgcGFyZW50IHZpZXcsXG4gICAgICAgICAgLy8gaW5zdGVhZCBvZiBhY3RpdmF0aW5nIG5vdy4gVGhpcyBpcyBzbyB0aGF0IHRoZVxuICAgICAgICAgIC8vIGNoaWxkJ3MgYWN0aXZhdGUgaG9vayBpcyBjYWxsZWQgYWZ0ZXIgdGhlXG4gICAgICAgICAgLy8gcGFyZW50J3MgaGFzIHJlc29sdmVkLlxuICAgICAgICAgIHRoaXMucGFyZW50VmlldyA9IHBhcmVudFZpZXc7XG4gICAgICAgICAgcGFyZW50Vmlldy5jaGlsZFZpZXcgPSB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIHJvb3QgdmlldyFcbiAgICAgICAgICB2YXIgcm91dGVyID0gcm91dGUucm91dGVyO1xuICAgICAgICAgIHJvdXRlci5fcm9vdFZpZXcgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIGxhdGUtcmVuZGVyZWQgdmlld1xuICAgICAgICAvLyB0d28gcG9zc2liaWxpdGllczpcbiAgICAgICAgLy8gMS4gcm9vdCB2aWV3IHJlbmRlcmVkIGFmdGVyIHRyYW5zaXRpb24gaGFzIGJlZW5cbiAgICAgICAgLy8gICAgdmFsaWRhdGVkO1xuICAgICAgICAvLyAyLiBjaGlsZCB2aWV3IHJlbmRlcmVkIGFmdGVyIHBhcmVudCB2aWV3IGhhcyBiZWVuXG4gICAgICAgIC8vICAgIGFjdGl2YXRlZC5cbiAgICAgICAgdmFyIHRyYW5zaXRpb24gPSByb3V0ZS5yb3V0ZXIuX2N1cnJlbnRUcmFuc2l0aW9uO1xuICAgICAgICBpZiAoIXBhcmVudFZpZXcgJiYgdHJhbnNpdGlvbi5kb25lIHx8IHBhcmVudFZpZXcgJiYgcGFyZW50Vmlldy5hY3RpdmF0ZWQpIHtcbiAgICAgICAgICB2YXIgZGVwdGggPSBwYXJlbnRWaWV3ID8gcGFyZW50Vmlldy5kZXB0aCArIDEgOiAwO1xuICAgICAgICAgIGFjdGl2YXRlKHRoaXMsIHRyYW5zaXRpb24sIGRlcHRoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudFZpZXcpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudFZpZXcuY2hpbGRWaWV3ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnREZWYudW5iaW5kLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBWdWUuZWxlbWVudERpcmVjdGl2ZSgncm91dGVyLXZpZXcnLCB2aWV3RGVmKTtcbiAgfVxuXG4gIHZhciB0cmFpbGluZ1NsYXNoUkUgPSAvXFwvJC87XG4gIHZhciByZWdleEVzY2FwZVJFID0gL1stLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZztcbiAgdmFyIHF1ZXJ5U3RyaW5nUkUgPSAvXFw/LiokLztcblxuICAvLyBpbnN0YWxsIHYtbGluaywgd2hpY2ggcHJvdmlkZXMgbmF2aWdhdGlvbiBzdXBwb3J0IGZvclxuICAvLyBIVE1MNSBoaXN0b3J5IG1vZGVcbiAgZnVuY3Rpb24gTGluayAoVnVlKSB7XG4gICAgdmFyIF9WdWUkdXRpbCA9IFZ1ZS51dGlsO1xuICAgIHZhciBfYmluZCA9IF9WdWUkdXRpbC5iaW5kO1xuICAgIHZhciBpc09iamVjdCA9IF9WdWUkdXRpbC5pc09iamVjdDtcbiAgICB2YXIgYWRkQ2xhc3MgPSBfVnVlJHV0aWwuYWRkQ2xhc3M7XG4gICAgdmFyIHJlbW92ZUNsYXNzID0gX1Z1ZSR1dGlsLnJlbW92ZUNsYXNzO1xuXG4gICAgdmFyIG9uUHJpb3JpdHkgPSBWdWUuZGlyZWN0aXZlKCdvbicpLnByaW9yaXR5O1xuICAgIHZhciBMSU5LX1VQREFURSA9ICdfX3Z1ZS1yb3V0ZXItbGluay11cGRhdGVfXyc7XG5cbiAgICB2YXIgYWN0aXZlSWQgPSAwO1xuXG4gICAgVnVlLmRpcmVjdGl2ZSgnbGluay1hY3RpdmUnLCB7XG4gICAgICBwcmlvcml0eTogOTk5OSxcbiAgICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGlkID0gU3RyaW5nKGFjdGl2ZUlkKyspO1xuICAgICAgICAvLyBjb2xsZWN0IHYtbGlua3MgY29udGFpbmVkIHdpdGhpbiB0aGlzIGVsZW1lbnQuXG4gICAgICAgIC8vIHdlIG5lZWQgZG8gdGhpcyBoZXJlIGJlZm9yZSB0aGUgcGFyZW50LWNoaWxkIHJlbGF0aW9uc2hpcFxuICAgICAgICAvLyBnZXRzIG1lc3NlZCB1cCBieSB0ZXJtaW5hbCBkaXJlY3RpdmVzIChpZiwgZm9yLCBjb21wb25lbnRzKVxuICAgICAgICB2YXIgY2hpbGRMaW5rcyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnW3YtbGlua10nKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZExpbmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciBsaW5rID0gY2hpbGRMaW5rc1tpXTtcbiAgICAgICAgICB2YXIgZXhpc3RpbmdJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKExJTktfVVBEQVRFKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBleGlzdGluZ0lkID8gZXhpc3RpbmdJZCArICcsJyArIGlkIDogaWQ7XG4gICAgICAgICAgLy8gbGVhdmUgYSBtYXJrIG9uIHRoZSBsaW5rIGVsZW1lbnQgd2hpY2ggY2FuIGJlIHBlcnNpc3RlZFxuICAgICAgICAgIC8vIHRocm91Z2ggZnJhZ21lbnQgY2xvbmVzLlxuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKExJTktfVVBEQVRFLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52bS4kb24oTElOS19VUERBVEUsIHRoaXMuY2IgPSBmdW5jdGlvbiAobGluaywgcGF0aCkge1xuICAgICAgICAgIGlmIChsaW5rLmFjdGl2ZUlkcy5pbmRleE9mKGlkKSA+IC0xKSB7XG4gICAgICAgICAgICBsaW5rLnVwZGF0ZUNsYXNzZXMocGF0aCwgX3RoaXMuZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICAgIHRoaXMudm0uJG9mZihMSU5LX1VQREFURSwgdGhpcy5jYik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBWdWUuZGlyZWN0aXZlKCdsaW5rJywge1xuICAgICAgcHJpb3JpdHk6IG9uUHJpb3JpdHkgLSAyLFxuXG4gICAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzLnZtO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCF2bS4kcm91dGUpIHtcbiAgICAgICAgICB3YXJuJDEoJ3YtbGluayBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBhIHJvdXRlci1lbmFibGVkIGFwcC4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb3V0ZXIgPSB2bS4kcm91dGUucm91dGVyO1xuICAgICAgICAvLyB1cGRhdGUgdGhpbmdzIHdoZW4gdGhlIHJvdXRlIGNoYW5nZXNcbiAgICAgICAgdGhpcy51bndhdGNoID0gdm0uJHdhdGNoKCckcm91dGUnLCBfYmluZCh0aGlzLm9uUm91dGVVcGRhdGUsIHRoaXMpKTtcbiAgICAgICAgLy8gY2hlY2sgdi1saW5rLWFjdGl2ZSBpZHNcbiAgICAgICAgdmFyIGFjdGl2ZUlkcyA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKExJTktfVVBEQVRFKTtcbiAgICAgICAgaWYgKGFjdGl2ZUlkcykge1xuICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKExJTktfVVBEQVRFKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUlkcyA9IGFjdGl2ZUlkcy5zcGxpdCgnLCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5vIG5lZWQgdG8gaGFuZGxlIGNsaWNrIGlmIGxpbmsgZXhwZWN0cyB0byBiZSBvcGVuZWRcbiAgICAgICAgLy8gaW4gYSBuZXcgd2luZG93L3RhYi5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmICh0aGlzLmVsLnRhZ05hbWUgPT09ICdBJyAmJiB0aGlzLmVsLmdldEF0dHJpYnV0ZSgndGFyZ2V0JykgPT09ICdfYmxhbmsnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSBjbGlja1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBfYmluZCh0aGlzLm9uQ2xpY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVyKTtcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICB0aGlzLmFwcGVuZCA9IHRhcmdldC5hcHBlbmQ7XG4gICAgICAgICAgdGhpcy5leGFjdCA9IHRhcmdldC5leGFjdDtcbiAgICAgICAgICB0aGlzLnByZXZBY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3M7XG4gICAgICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9IHRhcmdldC5hY3RpdmVDbGFzcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uUm91dGVVcGRhdGUodGhpcy52bS4kcm91dGUpO1xuICAgICAgfSxcblxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdpdGggY29udHJvbCBrZXlzXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSByZXR1cm47XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdoZW4gcHJldmVudERlZmF1bHQgY2FsbGVkXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoZS5idXR0b24gIT09IDApIHJldHVybjtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAvLyB2LWxpbmsgd2l0aCBleHByZXNzaW9uLCBqdXN0IGdvXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucm91dGVyLmdvKHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gbm8gZXhwcmVzc2lvbiwgZGVsZWdhdGUgZm9yIGFuIDxhPiBpbnNpZGVcbiAgICAgICAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICAgICAgICB3aGlsZSAoZWwudGFnTmFtZSAhPT0gJ0EnICYmIGVsICE9PSB0aGlzLmVsKSB7XG4gICAgICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChlbC50YWdOYW1lID09PSAnQScgJiYgc2FtZU9yaWdpbihlbCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBwYXRoID0gZWwucGF0aG5hbWU7XG4gICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIuaGlzdG9yeS5yb290KSB7XG4gICAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UodGhpcy5yb3V0ZXIuaGlzdG9yeS5yb290UkUsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucm91dGVyLmdvKHtcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgcmVwbGFjZTogdGFyZ2V0ICYmIHRhcmdldC5yZXBsYWNlLFxuICAgICAgICAgICAgICBhcHBlbmQ6IHRhcmdldCAmJiB0YXJnZXQuYXBwZW5kXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIG9uUm91dGVVcGRhdGU6IGZ1bmN0aW9uIG9uUm91dGVVcGRhdGUocm91dGUpIHtcbiAgICAgICAgLy8gcm91dGVyLnN0cmluZ2lmeVBhdGggaXMgZGVwZW5kZW50IG9uIGN1cnJlbnQgcm91dGVcbiAgICAgICAgLy8gYW5kIG5lZWRzIHRvIGJlIGNhbGxlZCBhZ2FpbiB3aGVudmVyIHJvdXRlIGNoYW5nZXMuXG4gICAgICAgIHZhciBuZXdQYXRoID0gdGhpcy5yb3V0ZXIuc3RyaW5naWZ5UGF0aCh0aGlzLnRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLnBhdGggIT09IG5ld1BhdGgpIHtcbiAgICAgICAgICB0aGlzLnBhdGggPSBuZXdQYXRoO1xuICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUhyZWYoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJZHMpIHtcbiAgICAgICAgICB0aGlzLnZtLiRlbWl0KExJTktfVVBEQVRFLCB0aGlzLCByb3V0ZS5wYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXMocm91dGUucGF0aCwgdGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZUFjdGl2ZU1hdGNoOiBmdW5jdGlvbiB1cGRhdGVBY3RpdmVNYXRjaCgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVSRSA9IHRoaXMucGF0aCAmJiAhdGhpcy5leGFjdCA/IG5ldyBSZWdFeHAoJ14nICsgdGhpcy5wYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykucmVwbGFjZShxdWVyeVN0cmluZ1JFLCAnJykucmVwbGFjZShyZWdleEVzY2FwZVJFLCAnXFxcXCQmJykgKyAnKFxcXFwvfCQpJykgOiBudWxsO1xuICAgICAgfSxcblxuICAgICAgdXBkYXRlSHJlZjogZnVuY3Rpb24gdXBkYXRlSHJlZigpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwudGFnTmFtZSAhPT0gJ0EnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXRoID0gdGhpcy5wYXRoO1xuICAgICAgICB2YXIgcm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgICAgIHZhciBpc0Fic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgICAgICAgLy8gZG8gbm90IGZvcm1hdCBub24taGFzaCByZWxhdGl2ZSBwYXRoc1xuICAgICAgICB2YXIgaHJlZiA9IHBhdGggJiYgKHJvdXRlci5tb2RlID09PSAnaGFzaCcgfHwgaXNBYnNvbHV0ZSkgPyByb3V0ZXIuaGlzdG9yeS5mb3JtYXRQYXRoKHBhdGgsIHRoaXMuYXBwZW5kKSA6IHBhdGg7XG4gICAgICAgIGlmIChocmVmKSB7XG4gICAgICAgICAgdGhpcy5lbC5ocmVmID0gaHJlZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVDbGFzc2VzOiBmdW5jdGlvbiB1cGRhdGVDbGFzc2VzKHBhdGgsIGVsKSB7XG4gICAgICAgIHZhciBhY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3MgfHwgdGhpcy5yb3V0ZXIuX2xpbmtBY3RpdmVDbGFzcztcbiAgICAgICAgLy8gY2xlYXIgb2xkIGNsYXNzXG4gICAgICAgIGlmICh0aGlzLnByZXZBY3RpdmVDbGFzcyAmJiB0aGlzLnByZXZBY3RpdmVDbGFzcyAhPT0gYWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzc2VzKGVsLCB0aGlzLnByZXZBY3RpdmVDbGFzcywgcmVtb3ZlQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBxdWVyeSBzdHJpbmcgYmVmb3JlIG1hdGNoaW5nXG4gICAgICAgIHZhciBkZXN0ID0gdGhpcy5wYXRoLnJlcGxhY2UocXVlcnlTdHJpbmdSRSwgJycpO1xuICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKHF1ZXJ5U3RyaW5nUkUsICcnKTtcbiAgICAgICAgLy8gYWRkIG5ldyBjbGFzc1xuICAgICAgICBpZiAodGhpcy5leGFjdCkge1xuICAgICAgICAgIGlmIChkZXN0ID09PSBwYXRoIHx8XG4gICAgICAgICAgLy8gYWxzbyBhbGxvdyBhZGRpdGlvbmFsIHRyYWlsaW5nIHNsYXNoXG4gICAgICAgICAgZGVzdC5jaGFyQXQoZGVzdC5sZW5ndGggLSAxKSAhPT0gJy8nICYmIGRlc3QgPT09IHBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcnKSkge1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhlbCwgYWN0aXZlQ2xhc3MsIGFkZENsYXNzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhlbCwgYWN0aXZlQ2xhc3MsIHJlbW92ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUkUgJiYgdGhpcy5hY3RpdmVSRS50ZXN0KHBhdGgpKSB7XG4gICAgICAgICAgICB0b2dnbGVDbGFzc2VzKGVsLCBhY3RpdmVDbGFzcywgYWRkQ2xhc3MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2dnbGVDbGFzc2VzKGVsLCBhY3RpdmVDbGFzcywgcmVtb3ZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZXIpO1xuICAgICAgICB0aGlzLnVud2F0Y2ggJiYgdGhpcy51bndhdGNoKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzYW1lT3JpZ2luKGxpbmspIHtcbiAgICAgIHJldHVybiBsaW5rLnByb3RvY29sID09PSBsb2NhdGlvbi5wcm90b2NvbCAmJiBsaW5rLmhvc3RuYW1lID09PSBsb2NhdGlvbi5ob3N0bmFtZSAmJiBsaW5rLnBvcnQgPT09IGxvY2F0aW9uLnBvcnQ7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBpcyBjb3BpZWQgZnJvbSB2LWJpbmQ6Y2xhc3MgaW1wbGVtZW50YXRpb24gdW50aWxcbiAgICAvLyB3ZSBwcm9wZXJseSBleHBvc2UgaXQuLi5cbiAgICBmdW5jdGlvbiB0b2dnbGVDbGFzc2VzKGVsLCBrZXksIGZuKSB7XG4gICAgICBrZXkgPSBrZXkudHJpbSgpO1xuICAgICAgaWYgKGtleS5pbmRleE9mKCcgJykgPT09IC0xKSB7XG4gICAgICAgIGZuKGVsLCBrZXkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgvXFxzKy8pO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBmbihlbCwga2V5c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGhpc3RvcnlCYWNrZW5kcyA9IHtcbiAgICBhYnN0cmFjdDogQWJzdHJhY3RIaXN0b3J5LFxuICAgIGhhc2g6IEhhc2hIaXN0b3J5LFxuICAgIGh0bWw1OiBIVE1MNUhpc3RvcnlcbiAgfTtcblxuICAvLyBsYXRlIGJpbmQgZHVyaW5nIGluc3RhbGxcbiAgdmFyIFZ1ZSA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogUm91dGVyIGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAgICovXG5cbiAgdmFyIFJvdXRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUm91dGVyKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdmFyIF9yZWYkaGFzaGJhbmcgPSBfcmVmLmhhc2hiYW5nO1xuICAgICAgdmFyIGhhc2hiYW5nID0gX3JlZiRoYXNoYmFuZyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkaGFzaGJhbmc7XG4gICAgICB2YXIgX3JlZiRhYnN0cmFjdCA9IF9yZWYuYWJzdHJhY3Q7XG4gICAgICB2YXIgYWJzdHJhY3QgPSBfcmVmJGFic3RyYWN0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkYWJzdHJhY3Q7XG4gICAgICB2YXIgX3JlZiRoaXN0b3J5ID0gX3JlZi5oaXN0b3J5O1xuICAgICAgdmFyIGhpc3RvcnkgPSBfcmVmJGhpc3RvcnkgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRoaXN0b3J5O1xuICAgICAgdmFyIF9yZWYkc2F2ZVNjcm9sbFBvc2l0aW9uID0gX3JlZi5zYXZlU2Nyb2xsUG9zaXRpb247XG4gICAgICB2YXIgc2F2ZVNjcm9sbFBvc2l0aW9uID0gX3JlZiRzYXZlU2Nyb2xsUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRzYXZlU2Nyb2xsUG9zaXRpb247XG4gICAgICB2YXIgX3JlZiR0cmFuc2l0aW9uT25Mb2FkID0gX3JlZi50cmFuc2l0aW9uT25Mb2FkO1xuICAgICAgdmFyIHRyYW5zaXRpb25PbkxvYWQgPSBfcmVmJHRyYW5zaXRpb25PbkxvYWQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiR0cmFuc2l0aW9uT25Mb2FkO1xuICAgICAgdmFyIF9yZWYkc3VwcHJlc3NUcmFuc2l0aW9uRXJyb3IgPSBfcmVmLnN1cHByZXNzVHJhbnNpdGlvbkVycm9yO1xuICAgICAgdmFyIHN1cHByZXNzVHJhbnNpdGlvbkVycm9yID0gX3JlZiRzdXBwcmVzc1RyYW5zaXRpb25FcnJvciA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHN1cHByZXNzVHJhbnNpdGlvbkVycm9yO1xuICAgICAgdmFyIF9yZWYkcm9vdCA9IF9yZWYucm9vdDtcbiAgICAgIHZhciByb290ID0gX3JlZiRyb290ID09PSB1bmRlZmluZWQgPyBudWxsIDogX3JlZiRyb290O1xuICAgICAgdmFyIF9yZWYkbGlua0FjdGl2ZUNsYXNzID0gX3JlZi5saW5rQWN0aXZlQ2xhc3M7XG4gICAgICB2YXIgbGlua0FjdGl2ZUNsYXNzID0gX3JlZiRsaW5rQWN0aXZlQ2xhc3MgPT09IHVuZGVmaW5lZCA/ICd2LWxpbmstYWN0aXZlJyA6IF9yZWYkbGlua0FjdGl2ZUNsYXNzO1xuICAgICAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlcik7XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFSb3V0ZXIuaW5zdGFsbGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGluc3RhbGwgdGhlIFJvdXRlciB3aXRoIFZ1ZS51c2UoKSBiZWZvcmUgJyArICdjcmVhdGluZyBhbiBpbnN0YW5jZS4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gVnVlIGluc3RhbmNlc1xuICAgICAgdGhpcy5hcHAgPSBudWxsO1xuICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcblxuICAgICAgLy8gcm91dGUgcmVjb2duaXplclxuICAgICAgdGhpcy5fcmVjb2duaXplciA9IG5ldyBSb3V0ZVJlY29nbml6ZXIoKTtcbiAgICAgIHRoaXMuX2d1YXJkUmVjb2duaXplciA9IG5ldyBSb3V0ZVJlY29nbml6ZXIoKTtcblxuICAgICAgLy8gc3RhdGVcbiAgICAgIHRoaXMuX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0YXJ0Q2IgPSBudWxsO1xuICAgICAgdGhpcy5fY3VycmVudFJvdXRlID0ge307XG4gICAgICB0aGlzLl9jdXJyZW50VHJhbnNpdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLl9wcmV2aW91c1RyYW5zaXRpb24gPSBudWxsO1xuICAgICAgdGhpcy5fbm90Rm91bmRIYW5kbGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX25vdEZvdW5kUmVkaXJlY3QgPSBudWxsO1xuICAgICAgdGhpcy5fYmVmb3JlRWFjaEhvb2tzID0gW107XG4gICAgICB0aGlzLl9hZnRlckVhY2hIb29rcyA9IFtdO1xuXG4gICAgICAvLyB0cmlnZ2VyIHRyYW5zaXRpb24gb24gaW5pdGlhbCByZW5kZXI/XG4gICAgICB0aGlzLl9yZW5kZXJlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdHJhbnNpdGlvbk9uTG9hZCA9IHRyYW5zaXRpb25PbkxvYWQ7XG5cbiAgICAgIC8vIGhpc3RvcnkgbW9kZVxuICAgICAgdGhpcy5fcm9vdCA9IHJvb3Q7XG4gICAgICB0aGlzLl9hYnN0cmFjdCA9IGFic3RyYWN0O1xuICAgICAgdGhpcy5faGFzaGJhbmcgPSBoYXNoYmFuZztcblxuICAgICAgLy8gY2hlY2sgaWYgSFRNTDUgaGlzdG9yeSBpcyBhdmFpbGFibGVcbiAgICAgIHZhciBoYXNQdXNoU3RhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG4gICAgICB0aGlzLl9oaXN0b3J5ID0gaGlzdG9yeSAmJiBoYXNQdXNoU3RhdGU7XG4gICAgICB0aGlzLl9oaXN0b3J5RmFsbGJhY2sgPSBoaXN0b3J5ICYmICFoYXNQdXNoU3RhdGU7XG5cbiAgICAgIC8vIGNyZWF0ZSBoaXN0b3J5IG9iamVjdFxuICAgICAgdmFyIGluQnJvd3NlciA9IFZ1ZS51dGlsLmluQnJvd3NlcjtcbiAgICAgIHRoaXMubW9kZSA9ICFpbkJyb3dzZXIgfHwgdGhpcy5fYWJzdHJhY3QgPyAnYWJzdHJhY3QnIDogdGhpcy5faGlzdG9yeSA/ICdodG1sNScgOiAnaGFzaCc7XG5cbiAgICAgIHZhciBIaXN0b3J5ID0gaGlzdG9yeUJhY2tlbmRzW3RoaXMubW9kZV07XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeSh7XG4gICAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICAgIGhhc2hiYW5nOiB0aGlzLl9oYXNoYmFuZyxcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHBhdGgsIHN0YXRlLCBhbmNob3IpIHtcbiAgICAgICAgICBfdGhpcy5fbWF0Y2gocGF0aCwgc3RhdGUsIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBvdGhlciBvcHRpb25zXG4gICAgICB0aGlzLl9zYXZlU2Nyb2xsUG9zaXRpb24gPSBzYXZlU2Nyb2xsUG9zaXRpb247XG4gICAgICB0aGlzLl9saW5rQWN0aXZlQ2xhc3MgPSBsaW5rQWN0aXZlQ2xhc3M7XG4gICAgICB0aGlzLl9zdXBwcmVzcyA9IHN1cHByZXNzVHJhbnNpdGlvbkVycm9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IGRpcmVjdGx5IHBhc3NpbmcgY29tcG9uZW50cyB0byBhIHJvdXRlXG4gICAgICogZGVmaW5pdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAgICAgKi9cblxuICAgIC8vIEFQSSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICogUmVnaXN0ZXIgYSBtYXAgb2YgdG9wLWxldmVsIHBhdGhzLlxuICAgICpcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYXBcbiAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAoX21hcCkge1xuICAgICAgZm9yICh2YXIgcm91dGUgaW4gX21hcCkge1xuICAgICAgICB0aGlzLm9uKHJvdXRlLCBfbWFwW3JvdXRlXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBzaW5nbGUgcm9vdC1sZXZlbCBwYXRoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcm9vdFBhdGhcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlclxuICAgICAqICAgICAgICAgICAgICAgICAtIHtTdHJpbmd9IGNvbXBvbmVudFxuICAgICAqICAgICAgICAgICAgICAgICAtIHtPYmplY3R9IFtzdWJSb3V0ZXNdXG4gICAgICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IFtmb3JjZVJlZnJlc2hdXG4gICAgICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbYmVmb3JlXVxuICAgICAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW2FmdGVyXVxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKHJvb3RQYXRoLCBoYW5kbGVyKSB7XG4gICAgICBpZiAocm9vdFBhdGggPT09ICcqJykge1xuICAgICAgICB0aGlzLl9ub3RGb3VuZChoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2FkZFJvdXRlKHJvb3RQYXRoLCBoYW5kbGVyLCBbXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0IHJlZGlyZWN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtYXBcbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdChtYXApIHtcbiAgICAgIGZvciAodmFyIHBhdGggaW4gbWFwKSB7XG4gICAgICAgIHRoaXMuX2FkZFJlZGlyZWN0KHBhdGgsIG1hcFtwYXRoXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0IGFsaWFzZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFwXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLmFsaWFzID0gZnVuY3Rpb24gYWxpYXMobWFwKSB7XG4gICAgICBmb3IgKHZhciBwYXRoIGluIG1hcCkge1xuICAgICAgICB0aGlzLl9hZGRBbGlhcyhwYXRoLCBtYXBbcGF0aF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCBnbG9iYWwgYmVmb3JlIGhvb2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5iZWZvcmVFYWNoID0gZnVuY3Rpb24gYmVmb3JlRWFjaChmbikge1xuICAgICAgdGhpcy5fYmVmb3JlRWFjaEhvb2tzLnB1c2goZm4pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCBnbG9iYWwgYWZ0ZXIgaG9vay5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLmFmdGVyRWFjaCA9IGZ1bmN0aW9uIGFmdGVyRWFjaChmbikge1xuICAgICAgdGhpcy5fYWZ0ZXJFYWNoSG9va3MucHVzaChmbik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGUgdG8gYSBnaXZlbiBwYXRoLlxuICAgICAqIFRoZSBwYXRoIGNhbiBiZSBhbiBvYmplY3QgZGVzY3JpYmluZyBhIG5hbWVkIHBhdGggaW5cbiAgICAgKiB0aGUgZm9ybWF0IG9mIHsgbmFtZTogJy4uLicsIHBhcmFtczoge30sIHF1ZXJ5OiB7fX1cbiAgICAgKiBUaGUgcGF0aCBpcyBhc3N1bWVkIHRvIGJlIGFscmVhZHkgZGVjb2RlZCwgYW5kIHdpbGxcbiAgICAgKiBiZSByZXNvbHZlZCBhZ2FpbnN0IHJvb3QgKGlmIHByb3ZpZGVkKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBwYXRoXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcmVwbGFjZV1cbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyhwYXRoKSB7XG4gICAgICB2YXIgcmVwbGFjZSA9IGZhbHNlO1xuICAgICAgdmFyIGFwcGVuZCA9IGZhbHNlO1xuICAgICAgaWYgKFZ1ZS51dGlsLmlzT2JqZWN0KHBhdGgpKSB7XG4gICAgICAgIHJlcGxhY2UgPSBwYXRoLnJlcGxhY2U7XG4gICAgICAgIGFwcGVuZCA9IHBhdGguYXBwZW5kO1xuICAgICAgfVxuICAgICAgcGF0aCA9IHRoaXMuc3RyaW5naWZ5UGF0aChwYXRoKTtcbiAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgIHRoaXMuaGlzdG9yeS5nbyhwYXRoLCByZXBsYWNlLCBhcHBlbmQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaG9ydCBoYW5kIGZvciByZXBsYWNpbmcgY3VycmVudCBwYXRoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggPSB7IHBhdGg6IHBhdGggfTtcbiAgICAgIH1cbiAgICAgIHBhdGgucmVwbGFjZSA9IHRydWU7XG4gICAgICB0aGlzLmdvKHBhdGgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB0aGUgcm91dGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtWdWVDb25zdHJ1Y3Rvcn0gQXBwXG4gICAgICogQHBhcmFtIHtTdHJpbmd8RWxlbWVudH0gY29udGFpbmVyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KEFwcCwgY29udGFpbmVyLCBjYikge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAodGhpcy5fc3RhcnRlZCkge1xuICAgICAgICB3YXJuJDEoJ2FscmVhZHkgc3RhcnRlZC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhcnRlZCA9IHRydWU7XG4gICAgICB0aGlzLl9zdGFydENiID0gY2I7XG4gICAgICBpZiAoIXRoaXMuYXBwKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoIUFwcCB8fCAhY29udGFpbmVyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN0YXJ0IHZ1ZS1yb3V0ZXIgd2l0aCBhIGNvbXBvbmVudCBhbmQgYSAnICsgJ3Jvb3QgY29udGFpbmVyLicpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoQXBwIGluc3RhbmNlb2YgVnVlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN0YXJ0IHZ1ZS1yb3V0ZXIgd2l0aCBhIGNvbXBvbmVudCwgbm90IGEgJyArICdWdWUgaW5zdGFuY2UuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXBwQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB2YXIgQ3RvciA9IHRoaXMuX2FwcENvbnN0cnVjdG9yID0gdHlwZW9mIEFwcCA9PT0gJ2Z1bmN0aW9uJyA/IEFwcCA6IFZ1ZS5leHRlbmQoQXBwKTtcbiAgICAgICAgLy8gZ2l2ZSBpdCBhIG5hbWUgZm9yIGJldHRlciBkZWJ1Z2dpbmdcbiAgICAgICAgQ3Rvci5vcHRpb25zLm5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCAnUm91dGVyQXBwJztcbiAgICAgIH1cblxuICAgICAgLy8gaGFuZGxlIGhpc3RvcnkgZmFsbGJhY2sgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3RcbiAgICAgIC8vIHN1cHBvcnQgSFRNTDUgaGlzdG9yeSBBUElcbiAgICAgIGlmICh0aGlzLl9oaXN0b3J5RmFsbGJhY2spIHtcbiAgICAgICAgdmFyIF9sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgICAgdmFyIF9oaXN0b3J5ID0gbmV3IEhUTUw1SGlzdG9yeSh7IHJvb3Q6IHRoaXMuX3Jvb3QgfSk7XG4gICAgICAgIHZhciBwYXRoID0gX2hpc3Rvcnkucm9vdCA/IF9sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKF9oaXN0b3J5LnJvb3RSRSwgJycpIDogX2xvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBpZiAocGF0aCAmJiBwYXRoICE9PSAnLycpIHtcbiAgICAgICAgICBfbG9jYXRpb24uYXNzaWduKChfaGlzdG9yeS5yb290IHx8ICcnKSArICcvJyArIHRoaXMuaGlzdG9yeS5mb3JtYXRQYXRoKHBhdGgpICsgX2xvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGlzdG9yeS5zdGFydCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGxpc3RlbmluZyB0byByb3V0ZSBjaGFuZ2VzLlxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5zdG9wKCk7XG4gICAgICB0aGlzLl9zdGFydGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZSBuYW1lZCByb3V0ZSBvYmplY3QgLyBzdHJpbmcgcGF0aHMgaW50b1xuICAgICAqIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfE51bWJlcn0gcGF0aFxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuc3RyaW5naWZ5UGF0aCA9IGZ1bmN0aW9uIHN0cmluZ2lmeVBhdGgocGF0aCkge1xuICAgICAgdmFyIGdlbmVyYXRlZFBhdGggPSAnJztcbiAgICAgIGlmIChwYXRoICYmIHR5cGVvZiBwYXRoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocGF0aC5uYW1lKSB7XG4gICAgICAgICAgdmFyIGV4dGVuZCA9IFZ1ZS51dGlsLmV4dGVuZDtcbiAgICAgICAgICB2YXIgY3VycmVudFBhcmFtcyA9IHRoaXMuX2N1cnJlbnRUcmFuc2l0aW9uICYmIHRoaXMuX2N1cnJlbnRUcmFuc2l0aW9uLnRvLnBhcmFtcztcbiAgICAgICAgICB2YXIgdGFyZ2V0UGFyYW1zID0gcGF0aC5wYXJhbXMgfHwge307XG4gICAgICAgICAgdmFyIHBhcmFtcyA9IGN1cnJlbnRQYXJhbXMgPyBleHRlbmQoZXh0ZW5kKHt9LCBjdXJyZW50UGFyYW1zKSwgdGFyZ2V0UGFyYW1zKSA6IHRhcmdldFBhcmFtcztcbiAgICAgICAgICBnZW5lcmF0ZWRQYXRoID0gZW5jb2RlVVJJKHRoaXMuX3JlY29nbml6ZXIuZ2VuZXJhdGUocGF0aC5uYW1lLCBwYXJhbXMpKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoLnBhdGgpIHtcbiAgICAgICAgICBnZW5lcmF0ZWRQYXRoID0gZW5jb2RlVVJJKHBhdGgucGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgucXVlcnkpIHtcbiAgICAgICAgICAvLyBub3RlOiB0aGUgZ2VuZXJhdGVkIHF1ZXJ5IHN0cmluZyBpcyBwcmUtVVJMLWVuY29kZWQgYnkgdGhlIHJlY29nbml6ZXJcbiAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLl9yZWNvZ25pemVyLmdlbmVyYXRlUXVlcnlTdHJpbmcocGF0aC5xdWVyeSk7XG4gICAgICAgICAgaWYgKGdlbmVyYXRlZFBhdGguaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgICAgICAgIGdlbmVyYXRlZFBhdGggKz0gJyYnICsgcXVlcnkuc2xpY2UoMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdlbmVyYXRlZFBhdGggKz0gcXVlcnk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZW5lcmF0ZWRQYXRoID0gZW5jb2RlVVJJKHBhdGggPyBwYXRoICsgJycgOiAnJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2VuZXJhdGVkUGF0aDtcbiAgICB9O1xuXG4gICAgLy8gSW50ZXJuYWwgbWV0aG9kcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgKiBBZGQgYSByb3V0ZSBjb250YWluaW5nIGEgbGlzdCBvZiBzZWdtZW50cyB0byB0aGUgaW50ZXJuYWxcbiAgICAqIHJvdXRlIHJlY29nbml6ZXIuIFdpbGwgYmUgY2FsbGVkIHJlY3Vyc2l2ZWx5IHRvIGFkZCBhbGxcbiAgICAqIHBvc3NpYmxlIHN1Yi1yb3V0ZXMuXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVyXG4gICAgKiBAcGFyYW0ge0FycmF5fSBzZWdtZW50c1xuICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLl9hZGRSb3V0ZSA9IGZ1bmN0aW9uIF9hZGRSb3V0ZShwYXRoLCBoYW5kbGVyLCBzZWdtZW50cykge1xuICAgICAgZ3VhcmRDb21wb25lbnQocGF0aCwgaGFuZGxlcik7XG4gICAgICBoYW5kbGVyLnBhdGggPSBwYXRoO1xuICAgICAgaGFuZGxlci5mdWxsUGF0aCA9IChzZWdtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKHBhdGgsIHNlZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyBzZWdtZW50LnBhdGg7XG4gICAgICB9LCAnJykgKyBwYXRoKS5yZXBsYWNlKCcvLycsICcvJyk7XG4gICAgICBzZWdtZW50cy5wdXNoKHtcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgaGFuZGxlcjogaGFuZGxlclxuICAgICAgfSk7XG4gICAgICB0aGlzLl9yZWNvZ25pemVyLmFkZChzZWdtZW50cywge1xuICAgICAgICBhczogaGFuZGxlci5uYW1lXG4gICAgICB9KTtcbiAgICAgIC8vIGFkZCBzdWIgcm91dGVzXG4gICAgICBpZiAoaGFuZGxlci5zdWJSb3V0ZXMpIHtcbiAgICAgICAgZm9yICh2YXIgc3ViUGF0aCBpbiBoYW5kbGVyLnN1YlJvdXRlcykge1xuICAgICAgICAgIC8vIHJlY3Vyc2l2ZWx5IHdhbGsgYWxsIHN1YiByb3V0ZXNcbiAgICAgICAgICB0aGlzLl9hZGRSb3V0ZShzdWJQYXRoLCBoYW5kbGVyLnN1YlJvdXRlc1tzdWJQYXRoXSxcbiAgICAgICAgICAvLyBwYXNzIGEgY29weSBpbiByZWN1cnNpb24gdG8gYXZvaWQgbXV0YXRpbmdcbiAgICAgICAgICAvLyBhY3Jvc3MgYnJhbmNoZXNcbiAgICAgICAgICBzZWdtZW50cy5zbGljZSgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIG5vdEZvdW5kIHJvdXRlIGhhbmRsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlclxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5fbm90Rm91bmQgPSBmdW5jdGlvbiBfbm90Rm91bmQoaGFuZGxlcikge1xuICAgICAgZ3VhcmRDb21wb25lbnQoJyonLCBoYW5kbGVyKTtcbiAgICAgIHRoaXMuX25vdEZvdW5kSGFuZGxlciA9IFt7IGhhbmRsZXI6IGhhbmRsZXIgfV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHJlZGlyZWN0IHJlY29yZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHJlZGlyZWN0UGF0aFxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5fYWRkUmVkaXJlY3QgPSBmdW5jdGlvbiBfYWRkUmVkaXJlY3QocGF0aCwgcmVkaXJlY3RQYXRoKSB7XG4gICAgICBpZiAocGF0aCA9PT0gJyonKSB7XG4gICAgICAgIHRoaXMuX25vdEZvdW5kUmVkaXJlY3QgPSByZWRpcmVjdFBhdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRHdWFyZChwYXRoLCByZWRpcmVjdFBhdGgsIHRoaXMucmVwbGFjZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhbiBhbGlhcyByZWNvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhbGlhc1BhdGhcbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuX2FkZEFsaWFzID0gZnVuY3Rpb24gX2FkZEFsaWFzKHBhdGgsIGFsaWFzUGF0aCkge1xuICAgICAgdGhpcy5fYWRkR3VhcmQocGF0aCwgYWxpYXNQYXRoLCB0aGlzLl9tYXRjaCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHBhdGggZ3VhcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtYXBwZWRQYXRoXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5fYWRkR3VhcmQgPSBmdW5jdGlvbiBfYWRkR3VhcmQocGF0aCwgbWFwcGVkUGF0aCwgX2hhbmRsZXIpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9ndWFyZFJlY29nbml6ZXIuYWRkKFt7XG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgICAgICAgdmFyIHJlYWxQYXRoID0gbWFwUGFyYW1zKG1hcHBlZFBhdGgsIG1hdGNoLnBhcmFtcywgcXVlcnkpO1xuICAgICAgICAgIF9oYW5kbGVyLmNhbGwoX3RoaXMyLCByZWFsUGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBwYXRoIG1hdGNoZXMgYW55IHJlZGlyZWN0IHJlY29yZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IC0gaWYgdHJ1ZSwgd2lsbCBza2lwIG5vcm1hbCBtYXRjaC5cbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuX2NoZWNrR3VhcmQgPSBmdW5jdGlvbiBfY2hlY2tHdWFyZChwYXRoKSB7XG4gICAgICB2YXIgbWF0Y2hlZCA9IHRoaXMuX2d1YXJkUmVjb2duaXplci5yZWNvZ25pemUocGF0aCwgdHJ1ZSk7XG4gICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICBtYXRjaGVkWzBdLmhhbmRsZXIobWF0Y2hlZFswXSwgbWF0Y2hlZC5xdWVyeVBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ub3RGb3VuZFJlZGlyZWN0KSB7XG4gICAgICAgIG1hdGNoZWQgPSB0aGlzLl9yZWNvZ25pemVyLnJlY29nbml6ZShwYXRoKTtcbiAgICAgICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICAgICAgdGhpcy5yZXBsYWNlKHRoaXMuX25vdEZvdW5kUmVkaXJlY3QpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1hdGNoIGEgVVJMIHBhdGggYW5kIHNldCB0aGUgcm91dGUgY29udGV4dCBvbiB2bSxcbiAgICAgKiB0cmlnZ2VyaW5nIHZpZXcgdXBkYXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzdGF0ZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2FuY2hvcl1cbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuX21hdGNoID0gZnVuY3Rpb24gX21hdGNoKHBhdGgsIHN0YXRlLCBhbmNob3IpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5fY2hlY2tHdWFyZChwYXRoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50Um91dGUgPSB0aGlzLl9jdXJyZW50Um91dGU7XG4gICAgICB2YXIgY3VycmVudFRyYW5zaXRpb24gPSB0aGlzLl9jdXJyZW50VHJhbnNpdGlvbjtcblxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgIGlmIChjdXJyZW50VHJhbnNpdGlvbi50by5wYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgLy8gZG8gbm90aGluZyBpZiB3ZSBoYXZlIGFuIGFjdGl2ZSB0cmFuc2l0aW9uIGdvaW5nIHRvIHRoZSBzYW1lIHBhdGhcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJvdXRlLnBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgICAvLyBXZSBhcmUgZ29pbmcgdG8gdGhlIHNhbWUgcGF0aCwgYnV0IHdlIGFsc28gaGF2ZSBhbiBvbmdvaW5nIGJ1dFxuICAgICAgICAgIC8vIG5vdC15ZXQtdmFsaWRhdGVkIHRyYW5zaXRpb24uIEFib3J0IHRoYXQgdHJhbnNpdGlvbiBhbmQgcmVzZXQgdG9cbiAgICAgICAgICAvLyBwcmV2IHRyYW5zaXRpb24uXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uYWJvcnRlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fY3VycmVudFRyYW5zaXRpb24gPSB0aGlzLl9wcmV2VHJhbnNpdGlvbjtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZ29pbmcgdG8gYSB0b3RhbGx5IGRpZmZlcmVudCBwYXRoLiBhYm9ydCBvbmdvaW5nIHRyYW5zaXRpb24uXG4gICAgICAgICAgY3VycmVudFRyYW5zaXRpb24uYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29uc3RydWN0IG5ldyByb3V0ZSBhbmQgdHJhbnNpdGlvbiBjb250ZXh0XG4gICAgICB2YXIgcm91dGUgPSBuZXcgUm91dGUocGF0aCwgdGhpcyk7XG4gICAgICB2YXIgdHJhbnNpdGlvbiA9IG5ldyBSb3V0ZVRyYW5zaXRpb24odGhpcywgcm91dGUsIGN1cnJlbnRSb3V0ZSk7XG5cbiAgICAgIC8vIGN1cnJlbnQgdHJhbnNpdGlvbiBpcyB1cGRhdGVkIHJpZ2h0IG5vdy5cbiAgICAgIC8vIGhvd2V2ZXIsIGN1cnJlbnQgcm91dGUgd2lsbCBvbmx5IGJlIHVwZGF0ZWQgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gaGFzXG4gICAgICAvLyBiZWVuIHZhbGlkYXRlZC5cbiAgICAgIHRoaXMuX3ByZXZUcmFuc2l0aW9uID0gY3VycmVudFRyYW5zaXRpb247XG4gICAgICB0aGlzLl9jdXJyZW50VHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICAgIGlmICghdGhpcy5hcHApIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgICAgICAgIHZhciByb3V0ZXIgPSBfdGhpczM7XG4gICAgICAgICAgX3RoaXMzLmFwcCA9IG5ldyBfdGhpczMuX2FwcENvbnN0cnVjdG9yKHtcbiAgICAgICAgICAgIGVsOiBfdGhpczMuX2FwcENvbnRhaW5lcixcbiAgICAgICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfbWV0YToge1xuICAgICAgICAgICAgICAkcm91dGU6IHJvdXRlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGdsb2JhbCBiZWZvcmUgaG9va1xuICAgICAgdmFyIGJlZm9yZUhvb2tzID0gdGhpcy5fYmVmb3JlRWFjaEhvb2tzO1xuICAgICAgdmFyIHN0YXJ0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIHN0YXJ0VHJhbnNpdGlvbigpIHtcbiAgICAgICAgdHJhbnNpdGlvbi5zdGFydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLl9wb3N0VHJhbnNpdGlvbihyb3V0ZSwgc3RhdGUsIGFuY2hvcik7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgaWYgKGJlZm9yZUhvb2tzLmxlbmd0aCkge1xuICAgICAgICB0cmFuc2l0aW9uLnJ1blF1ZXVlKGJlZm9yZUhvb2tzLCBmdW5jdGlvbiAoaG9vaywgXywgbmV4dCkge1xuICAgICAgICAgIGlmICh0cmFuc2l0aW9uID09PSBfdGhpczMuX2N1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLmNhbGxIb29rKGhvb2ssIG51bGwsIG5leHQsIHtcbiAgICAgICAgICAgICAgZXhwZWN0Qm9vbGVhbjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzdGFydFRyYW5zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRUcmFuc2l0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fcmVuZGVyZWQgJiYgdGhpcy5fc3RhcnRDYikge1xuICAgICAgICB0aGlzLl9zdGFydENiLmNhbGwobnVsbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEhBQ0s6XG4gICAgICAvLyBzZXQgcmVuZGVyZWQgdG8gdHJ1ZSBhZnRlciB0aGUgdHJhbnNpdGlvbiBzdGFydCwgc29cbiAgICAgIC8vIHRoYXQgY29tcG9uZW50cyB0aGF0IGFyZSBhY2l0dmF0ZWQgc3luY2hyb25vdXNseSBrbm93XG4gICAgICAvLyB3aGV0aGVyIGl0IGlzIHRoZSBpbml0aWFsIHJlbmRlci5cbiAgICAgIHRoaXMuX3JlbmRlcmVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0IGN1cnJlbnQgdG8gdGhlIG5ldyB0cmFuc2l0aW9uLlxuICAgICAqIFRoaXMgaXMgY2FsbGVkIGJ5IHRoZSB0cmFuc2l0aW9uIG9iamVjdCB3aGVuIHRoZVxuICAgICAqIHZhbGlkYXRpb24gb2YgYSByb3V0ZSBoYXMgc3VjY2VlZGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLl9vblRyYW5zaXRpb25WYWxpZGF0ZWQgPSBmdW5jdGlvbiBfb25UcmFuc2l0aW9uVmFsaWRhdGVkKHRyYW5zaXRpb24pIHtcbiAgICAgIC8vIHNldCBjdXJyZW50IHJvdXRlXG4gICAgICB2YXIgcm91dGUgPSB0aGlzLl9jdXJyZW50Um91dGUgPSB0cmFuc2l0aW9uLnRvO1xuICAgICAgLy8gdXBkYXRlIHJvdXRlIGNvbnRleHQgZm9yIGFsbCBjaGlsZHJlblxuICAgICAgaWYgKHRoaXMuYXBwLiRyb3V0ZSAhPT0gcm91dGUpIHtcbiAgICAgICAgdGhpcy5hcHAuJHJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgY2hpbGQuJHJvdXRlID0gcm91dGU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gY2FsbCBnbG9iYWwgYWZ0ZXIgaG9va1xuICAgICAgaWYgKHRoaXMuX2FmdGVyRWFjaEhvb2tzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9hZnRlckVhY2hIb29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgICAgcmV0dXJuIGhvb2suY2FsbChudWxsLCB7XG4gICAgICAgICAgICB0bzogdHJhbnNpdGlvbi50byxcbiAgICAgICAgICAgIGZyb206IHRyYW5zaXRpb24uZnJvbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2N1cnJlbnRUcmFuc2l0aW9uLmRvbmUgPSB0cnVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgc3R1ZmYgYWZ0ZXIgdGhlIHRyYW5zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JvdXRlfSByb3V0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhdGVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFthbmNob3JdXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLl9wb3N0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIF9wb3N0VHJhbnNpdGlvbihyb3V0ZSwgc3RhdGUsIGFuY2hvcikge1xuICAgICAgLy8gaGFuZGxlIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAgIC8vIHNhdmVkIHNjcm9sbCBwb3NpdGlvbnMgdGFrZSBwcmlvcml0eVxuICAgICAgLy8gdGhlbiB3ZSBjaGVjayBpZiB0aGUgcGF0aCBoYXMgYW4gYW5jaG9yXG4gICAgICB2YXIgcG9zID0gc3RhdGUgJiYgc3RhdGUucG9zO1xuICAgICAgaWYgKHBvcyAmJiB0aGlzLl9zYXZlU2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ocG9zLngsIHBvcy55KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGFuY2hvcikge1xuICAgICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFuY2hvci5zbGljZSgxKSk7XG4gICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIGVsLm9mZnNldFRvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFJvdXRlcjtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBndWFyZENvbXBvbmVudChwYXRoLCBoYW5kbGVyKSB7XG4gICAgdmFyIGNvbXAgPSBoYW5kbGVyLmNvbXBvbmVudDtcbiAgICBpZiAoVnVlLnV0aWwuaXNQbGFpbk9iamVjdChjb21wKSkge1xuICAgICAgY29tcCA9IGhhbmRsZXIuY29tcG9uZW50ID0gVnVlLmV4dGVuZChjb21wKTtcbiAgICB9XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHR5cGVvZiBjb21wICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoYW5kbGVyLmNvbXBvbmVudCA9IG51bGw7XG4gICAgICB3YXJuJDEoJ2ludmFsaWQgY29tcG9uZW50IGZvciByb3V0ZSBcIicgKyBwYXRoICsgJ1wiLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qIEluc3RhbGxhdGlvbiAqL1xuXG4gIFJvdXRlci5pbnN0YWxsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5zdGFsbGF0aW9uIGludGVyZmFjZS5cbiAgICogSW5zdGFsbCB0aGUgbmVjZXNzYXJ5IGRpcmVjdGl2ZXMuXG4gICAqL1xuXG4gIFJvdXRlci5pbnN0YWxsID0gZnVuY3Rpb24gKGV4dGVybmFsVnVlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKFJvdXRlci5pbnN0YWxsZWQpIHtcbiAgICAgIHdhcm4kMSgnYWxyZWFkeSBpbnN0YWxsZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFZ1ZSA9IGV4dGVybmFsVnVlO1xuICAgIGFwcGx5T3ZlcnJpZGUoVnVlKTtcbiAgICBWaWV3KFZ1ZSk7XG4gICAgTGluayhWdWUpO1xuICAgIGV4cG9ydHMkMS5WdWUgPSBWdWU7XG4gICAgUm91dGVyLmluc3RhbGxlZCA9IHRydWU7XG4gIH07XG5cbiAgLy8gYXV0byBpbnN0YWxsXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICAgIHdpbmRvdy5WdWUudXNlKFJvdXRlcik7XG4gIH1cblxuICByZXR1cm4gUm91dGVyO1xuXG59KSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAzXG4gKiovIiwidmFyIF9fdnVlX3NjcmlwdF9fLCBfX3Z1ZV90ZW1wbGF0ZV9fXG5fX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWh0bWwtbG9hZGVyIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcC52dWVcIilcbm1vZHVsZS5leHBvcnRzID0gX192dWVfc2NyaXB0X18gfHwge31cbmlmIChtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHRcbmlmIChfX3Z1ZV90ZW1wbGF0ZV9fKSB7XG4odHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcImZ1bmN0aW9uXCIgPyAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyB8fCAobW9kdWxlLmV4cG9ydHMub3B0aW9ucyA9IHt9KSkgOiBtb2R1bGUuZXhwb3J0cykudGVtcGxhdGUgPSBfX3Z1ZV90ZW1wbGF0ZV9fXG59XG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7ICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgdmFyIGlkID0gXCJfdi00OTA2YjUxMC9BcHAudnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgX192dWVfdGVtcGxhdGVfXylcbiAgfVxufSkoKX1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQXBwLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPGRpdiBpZD1cXFwid3JhcHBlclxcXCI+XFxuICA8cm91dGVyLXZpZXdcXG4gICAgY2xhc3M9XFxcInZpZXdcXFwiXFxuICAgIGtlZXAtYWxpdmVcXG4gICAgdHJhbnNpdGlvblxcbiAgICB0cmFuc2l0aW9uLW1vZGU9XFxcIm91dC1pblxcXCI+XFxuXFxuICA8L3JvdXRlci12aWV3PlxcbjwvZGl2PlxcblwiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1odG1sLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvQXBwLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9