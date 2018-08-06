'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Unescape = function () {
    function Unescape() {
        _classCallCheck(this, Unescape);

        this.INFINITY = 1 / 0;
        this.symbolTag = '[object Symbol]';
        this.reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g;
        this.reHasEscapedHtml = RegExp(this.reEscapedHtml.source);

        this.htmlUnescapes = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#39;': "'",
            '&#96;': '`'
        };

        this.freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

        this.freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

        this.root = this.freeGlobal || this.freeSelf || Function('return this')();

        this.unescapeHtmlChar = this.basePropertyOf(this.htmlUnescapes);

        this.objectProto = Object.prototype;

        this.objectToString = this.objectProto.toString;

        this.Symbol = this.root.Symbol;

        this.symbolProto = this.Symbol ? this.Symbol.prototype : undefined;
        this.symbolToString = this.symbolProto ? this.symbolProto.toString : undefined;
    }

    _createClass(Unescape, [{
        key: 'basePropertyOf',
        value: function basePropertyOf(object) {
            return function (key) {
                return object == null ? undefined : object[key];
            };
        }
    }, {
        key: 'baseToString',
        value: function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') {
                return value;
            }
            if (isSymbol(value)) {
                return this.symbolToString ? this.symbolToString.call(value) : '';
            }
            var result = value + '';
            return result == '0' && 1 / value == -this.INFINITY ? '-0' : result;
        }
    }, {
        key: 'isObjectLike',
        value: function isObjectLike(value) {
            return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
        }
    }, {
        key: 'isSymbol',
        value: function isSymbol(value) {
            return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || this.isObjectLike(value) && this.objectToString.call(value) == this.symbolTag;
        }
    }, {
        key: 'toString',
        value: function toString(value) {
            return value == null ? '' : this.baseToString(value);
        }
    }, {
        key: 'do',
        value: function _do(string) {
            string = this.toString(string);
            return string && this.reHasEscapedHtml.test(string) ? string.replace(this.reEscapedHtml, this.unescapeHtmlChar) : string;
        }
    }]);

    return Unescape;
}();