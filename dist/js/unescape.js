'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
function Unescape(text) {

    var INFINITY = 1 / 0;
    var symbolTag = '[object Symbol]';
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g;
    var reHasEscapedHtml = RegExp(reEscapedHtml.source);

    var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#96;': '`'
    };

    var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

    var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

    var root = freeGlobal || freeSelf || Function('return this')();

    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

    var objectProto = Object.prototype;

    var objectToString = objectProto.toString;

    var _Symbol = root.Symbol;

    var symbolProto = _Symbol ? _Symbol.prototype : undefined;
    var symbolToString = symbolProto ? symbolProto.toString : undefined;

    function basePropertyOf(object) {
        return function (key) {
            return object == null ? undefined : object[key];
        };
    }

    function baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == 'string') {
            return value;
        }
        if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : '';
        }
        var result = value + '';
        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
    }

    function isObjectLike(value) {
        return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
    }

    function isSymbol(value) {
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }

    function toString(value) {
        return value == null ? '' : baseToString(value);
    }

    function unescape(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
    }

    return unescape(text);
}