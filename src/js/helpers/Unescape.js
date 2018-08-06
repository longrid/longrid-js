/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
class Unescape{
    constructor(){
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

        this.freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

        this.freeSelf = typeof self == 'object' && self && self.Object === Object && self;

        this.root = this.freeGlobal || this.freeSelf || Function('return this')();

        this.unescapeHtmlChar = this.basePropertyOf(this.htmlUnescapes);

        this.objectProto = Object.prototype;


        this.objectToString = this.objectProto.toString;

        this.Symbol = this.root.Symbol;

        this.symbolProto = this.Symbol ? this.Symbol.prototype : undefined;
            this.symbolToString = this.symbolProto ? this.symbolProto.toString : undefined;




    }
    basePropertyOf(object) {
        return function(key) {
            return object == null ? undefined : object[key];
        };
    }
     baseToString(value) {
        // Exit early for strings to avoid a performance hit in some environments.
        if (typeof value == 'string') {
            return value;
        }
        if (isSymbol(value)) {
            return this.symbolToString ? this.symbolToString.call(value) : '';
        }
        var result = (value + '');
        return (result == '0' && (1 / value) == -this.INFINITY) ? '-0' : result;
    }

     isObjectLike(value) {
        return !!value && typeof value == 'object';
    }

     isSymbol(value) {
        return typeof value == 'symbol' ||
            (this.isObjectLike(value) && this.objectToString.call(value) == this.symbolTag);
    }

     toString(value) {
        return value == null ? '' : this.baseToString(value);
    }

     do(string) {
        string = this.toString(string);
        return (string && this.reHasEscapedHtml.test(string))
            ? string.replace(this.reEscapedHtml, this.unescapeHtmlChar)
            : string;
    }
}