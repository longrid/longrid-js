"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function i(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Unescape=function(){function t(){_classCallCheck(this,t),this.INFINITY=1/0,this.symbolTag="[object Symbol]",this.reEscapedHtml=/&(?:amp|lt|gt|quot|#39|#96);/g,this.reHasEscapedHtml=RegExp(this.reEscapedHtml.source),this.htmlUnescapes={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},this.freeGlobal="object"==("undefined"==typeof global?"undefined":_typeof(global))&&global&&global.Object===Object&&global,this.freeSelf="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,this.root=this.freeGlobal||this.freeSelf||Function("return this")(),this.unescapeHtmlChar=this.basePropertyOf(this.htmlUnescapes),this.objectProto=Object.prototype,this.objectToString=this.objectProto.toString,this.Symbol=this.root.Symbol,this.symbolProto=this.Symbol?this.Symbol.prototype:void 0,this.symbolToString=this.symbolProto?this.symbolProto.toString:void 0}return _createClass(t,[{key:"basePropertyOf",value:function(e){return function(t){return null==e?void 0:e[t]}}},{key:"baseToString",value:function(t){if("string"==typeof t)return t;if(isSymbol(t))return this.symbolToString?this.symbolToString.call(t):"";var e=t+"";return"0"==e&&1/t==-this.INFINITY?"-0":e}},{key:"isObjectLike",value:function(t){return!!t&&"object"==(void 0===t?"undefined":_typeof(t))}},{key:"isSymbol",value:function(t){return"symbol"==(void 0===t?"undefined":_typeof(t))||this.isObjectLike(t)&&this.objectToString.call(t)==this.symbolTag}},{key:"toString",value:function(t){return null==t?"":this.baseToString(t)}},{key:"do",value:function(t){return(t=this.toString(t))&&this.reHasEscapedHtml.test(t)?t.replace(this.reEscapedHtml,this.unescapeHtmlChar):t}}]),t}();