"use strict";var _createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var GridHelper=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"arrayToSortPattern",value:function(t){var n={};return t.forEach(function(t,e){n[t]=e}),n}},{key:"getFilterd",value:function(t,e){return t.filter(function(t){return!e.includes(t)})}},{key:"getHtml",value:function(t){return document.getElementById(t).innerHTML}},{key:"decodeHtml",value:function(t){return(new DOMParser).parseFromString(t,"text/html").documentElement.textContent}},{key:"parseHTML",value:function(t){var e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,e.body.children}},{key:"uniqueArray",value:function(t){return Array.from(new Set(t))}}]),t}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ImageUploader=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"init",value:function(){}}]),t}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var AbstractElement=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"init",value:function(){throw new Error("init() должен быть реализован")}},{key:"getObject",value:function(){throw new Error("getCleanClone() должен быть реализован")}},{key:"getTemplateId",value:function(){throw new Error("getTemplateId должен быть реализован")}}],[{key:"initButtons",value:function(){throw new Error("static initButtons() должен быть реализован")}}]),t}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var BaseElement=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _inherits(e,AbstractElement),_createClass(e,[{key:"getHtmlBlock",value:function(){var t=GridHelper.getHtml(this.getTemplateId()).trim();return(t=GridHelper.parseHTML(t))[0]}},{key:"getTemplateId",value:function(){return"baseElement"}},{key:"init",value:function(){this.initMedium()}},{key:"initMedium",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"Введите текст...";new MediumEditor(".editable",{toolbar:{allowMultiParagraphSelection:!0,buttons:["bold","italic","h3","anchor","justifyLeft","justifyCenter","justifyRight","removeFormat"],diffLeft:0,diffTop:-10,firstButtonClass:"medium-editor-button-first",lastButtonClass:"medium-editor-button-last",standardizeSelectionStart:!1,static:!1,relativeContainer:null,align:"center",sticky:!1,updateOnEmptySelection:!1},placeholder:{text:t,hideOnClick:!0},imageDragging:!1})}}]),e}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var QuoteElement=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _inherits(e,BaseElement),_createClass(e,[{key:"getTemplateId",value:function(){return"quoteBlock"}},{key:"getObject",value:function(t){return{type:t.data("type"),content:t.find(".editable").html()}}}]),e}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var FrameElement=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _inherits(e,BaseElement),_createClass(e,[{key:"getTemplateId",value:function(){return"frameBlock"}},{key:"getObject",value:function(t){return{type:t.data("type"),state:t.find(".grid__item--control_item.active").data("type"),content:t.find("textarea").val()}}}]),e}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var GalleryElement=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _inherits(e,BaseElement),_createClass(e,[{key:"init",value:function(t){this.initControlButtons(),this.initImageUpload(),this.container=t.find(".grid__item--gallery").get(0),this.initSortable()}},{key:"getItemTemplate",value:function(){return'<div class="grid__item--gallery__item empty">\n            <div class="image__placeholder">\n            </div>\n            <div class="editable"></div>\n            <div class="grid__btn remove"><i class="fa fa-trash"></i> Удалить фото</div>\n        </div>'}},{key:"initImageUpload",value:function(){var i=this;$(".add-images").fileupload({dataType:"json",add:function(t,e){var n=$(this);if($.each(e.files,function(t,e){i.createPlaceholder(n)}),t.isDefaultPrevented())return!1;(e.autoUpload||!1!==e.autoUpload&&$(this).fileupload("option","autoUpload"))&&e.process().done(function(){e.submit()})},done:function(t,e){i.addImagesToContainer($(this),e)},fail:function(t,e){alert("failed"),console.log(e)}})}},{key:"initSortable",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,e=void 0;e=null===t?this.container:t;Sortable.create(e,{animation:150,scrollSpeed:10,scrollSensitivity:70,handle:".image__placeholder",draggable:".grid__item--gallery__item"})}},{key:"createPlaceholder",value:function(t){var e=$.parseHTML(this.getItemTemplate())[0];e=$(e),t.closest(".grid__row").find(".grid__item--gallery").append(e),this.initMedium("Описание фото...")}},{key:"addImagesToContainer",value:function(t,e){var n=t.closest(".grid__row").find(".grid__item--gallery__item.empty").first();n.removeClass("empty"),n.find(".image__placeholder").append('<img src="'+e.result+'" />')}},{key:"initControlButtons",value:function(){var t=this;$(document).on("click",".grid__item--gallery__item .remove",function(){t.removeImage($(this).closest(".grid__item--gallery__item"))})}},{key:"removeImage",value:function(t){var e=t.find("img").attr("src");$.get("/admin.php/pages/longrid/remove-media?url="+e,function(t){}),t.remove()}},{key:"getTemplateId",value:function(){return"galleryBlock"}},{key:"getItemsObject",value:function(t){var e=[];return t.find(".grid__item--gallery__item").each(function(){e.push({image:$(this).find(".image__placeholder img").attr("src"),content:$(this).find(".editable").html()})}),e}},{key:"getObject",value:function(t){return{type:t.data("type"),items:this.getItemsObject(t)}}}],[{key:"initFromHtml",value:function(){var t=new e;t.initControlButtons(),t.initImageUpload(),$(".grid__item--gallery").each(function(){t.initSortable($(this).get(0))})}}]),e}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ImageElement=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _inherits(e,BaseElement),_createClass(e,[{key:"init",value:function(){this.initControlButtons()}},{key:"initControlButtons",value:function(){var n=this;this.initMedium(),this.initImageUpload(),document.addEventListener("click",function(t){var e=t.target;e.matches(".grid__item--image .image__placeholder .remove")&&n.removeImage(e.closest(".grid__item--image"))})}},{key:"initImageUpload",value:function(){$(".add-image").fileupload({dataType:"json",start:function(t){console.log("init"),$(this).closest(".grid__item").find(".image__placeholder").addClass("__loading")},done:function(t,e){var n=$(this).closest(".grid__item").find(".image__placeholder");n.removeClass("__loading"),n.addClass("imageAdded"),n.find(".preview").html(""),n.find(".preview").append('<img src="'+e.result+'" />')},fail:function(t,e){alert("failed"),console.log(e)}})}},{key:"removeImage",value:function(t){var e=t.find("img").attr("src");t.find(".image__placeholder").removeClass("imageAdded"),t.find(".preview").html(""),$.get("/admin.php/pages/longrid/remove-media?url="+e,function(t){})}},{key:"getTemplateId",value:function(){return"imageBlock"}},{key:"getObject",value:function(t){return{type:t.data("type"),state:t.find(".grid__item--control_item.active").data("type"),image:t.find(".preview img").attr("src"),content:t.find(".editable").html()}}}],[{key:"initFromHtml",value:function(){var t=new e;t.initControlButtons(),t.initImageUpload()}}]),e}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var TextElement=function(t){function i(t,e){_classCallCheck(this,i);var n=_possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n.column=e,n.instance=null,n.id=t,n.type="text",n.content=null,n}return _inherits(i,BaseElement),_createClass(i,[{key:"addFromRaw",value:function(t){var e=this.column.getNewElementId(),n=GridHelper.decodeHtml(t.content),i=this.getHtmlBlock(e,n);console.log(n);var r=this.column.instance.querySelector(".grid__column--container");r.innerHTML="",r.appendChild(i),this.instance=i,this.init()}},{key:"getIcon",value:function(){return'<i class="fa fa-font"></i>'}},{key:"getObject",value:function(){return{type:"text",id:this.id,content:this.instance.querySelector(".editable").innerHTML}}},{key:"getTemplateId",value:function(){return"textBlock"}},{key:"getHtmlBlock",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=this.getTemplate(t,e);return(n=GridHelper.parseHTML(n))[0]}},{key:"getTemplate",value:function(t){return'<div class="grid__item" data-type="text" data-id="'+t+'">\n            <div class="grid__item--text">\n                <div class="editable">\n                '+(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"")+"\n                </div>\n            </div>\n        </div>"}},{key:"getTitle",value:function(){return"Текст"}},{key:"init",value:function(){this.initMedium()}}]),i}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var GridColumn=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;_classCallCheck(this,n),this.items=new Map,this.row=t,this.instance=null,this.width=e,this.id=null}return _createClass(n,[{key:"getObject",value:function(){var e=[];return this.items.forEach(function(t){e.push(t.getObject())}),{items:e,width:this.getWidth(),id:this.id}}},{key:"add",value:function(t){var e=this.row.instance.querySelector(".grid__row--container"),n=this.getTemplate(t);n=GridHelper.parseHTML(n),this.instance=n[0],e.appendChild(this.instance),this.id=t,this.init()}},{key:"addFromRaw",value:function(t){var e=this,n=this.getTemplate(t.id);n=(n=GridHelper.parseHTML(n))[0],this.row.instance.querySelector(".grid__row--container").appendChild(n),this.instance=n,this.id=t.id,this.init(),t.hasOwnProperty("items")&&t.items.forEach(function(t){new(e.getGrid().items[t.type])(t.id,e).addFromRaw(t)})}},{key:"addIconToRow",value:function(t){var e=t.innerHTML,n=GridHelper.parseHTML('<div class="grid__row--icon">'+e+"</div>")[0],i=t.closest(".grid__column").querySelector(".grid__column--control");i.insertBefore(n,i.firstChild)}},{key:"addItem",value:function(t){var e=this.getGrid().items[t],n=this.getNewElementId(),i=new e(n,this),r=i.getHtmlBlock(n),o=this.instance.querySelector(".grid__column--container");o.innerHTML="",o.appendChild(r),i.instance=r,i.init(),this.addItemsToColumn(n,i),this.changeColumnStatus()}},{key:"addItemsToColumn",value:function(t,e){this.items.set(t,e)}},{key:"changeColumnStatus",value:function(){this.instance.classList.remove("empty"),this.row.emptyWidth-=this.getWidth(),this.row.itemsWidth+=this.getWidth()}},{key:"changeDataWidth",value:function(){this.instance.setAttribute("data-width",this.width)}},{key:"collectItemData",value:function(t){var n=[],i=this;return t.find(".grid__item").each(function(){var t=$(this).data("type"),e=new i.grid.items[t];n.push(e.getObject($(this)))}),n}},{key:"decreaseWidth",value:function(){if((this.row.inActionColumn=this).width-1<=0)throw new Error("can't decrease");if(!this.row.canChangeColumnWidth(!0)&&!this.row.addAction)throw new Error("can't change column width to -");this.width=this.width-1,this.row.setWidth(-1,this.isEmpty()),this.isEmpty()||this.row.addOrChangeEmptyColumn(1,!0),this.changeDataWidth(),this.row.inActionColumn=null}},{key:"getColumnItems",value:function(){var t=this.getGrid().items,e="";for(var n in t)if(t.hasOwnProperty(n)){var i=new t[n];e+=' <div class="grid__column--add_item" data-type="'+n+'" title="'+i.getTitle()+'" >\n                       '+i.getIcon()+"\n                    </div>"}return e}},{key:"getNewElementId",value:function(){var t=[].concat(_toConsumableArray(this.items.keys()));return 0<t.length?Math.max.apply(Math,_toConsumableArray(t))+1:1}},{key:"getGrid",value:function(){return this.row.grid}},{key:"getTemplate",value:function(t){return(' <div class="grid__column empty" data-width="'+this.getWidth()+'" data-id="'+t+'">\n        <div class="grid__column--control"> \n            <div class="grid__column--move">\n                <i class="fa fa-arrows"></i>\n            </div>\n             <div class="grid__column--action" data-action="decreaseWidth">\n                -\n            </div> \n            <div class="grid__column--action" data-action="increaseWidth">\n               +\n            </div>\n             <div class="grid__column--action" data-action="removeColumn">\n                <i class="fa fa-trash"></i>\n            </div>   \n        </div>\n        <div class="grid__column--container">\n           \n            <div class="empty"> \n                <div class="items__list">\n                    '+this.getColumnItems()+'                   \n                </div>\n                <div class="select__item">\n\n                </div>\n\n            </div>\n        </div>\n    </div>').trim()}},{key:"getTemplateId",value:function(){return"columnBlock"}},{key:"getWidth",value:function(){return this.width}},{key:"increaseWidth",value:function(){if((this.row.inActionColumn=this).width+1>this.row.maxWidth)throw new Error("can't increase");if(!this.row.canChangeColumnWidth())throw new Error("can't change column width to +");this.width=this.width+1,this.row.setWidth(1,this.isEmpty()),this.isEmpty()||this.row.removeOrChangeEmptyColumn(),this.changeDataWidth(),this.row.inActionColumn=null}},{key:"init",value:function(){this.initButtons()}},{key:"initButtons",value:function(){var i=this;this.instance.addEventListener("click",function(t){var e=t.target;if(e.matches(".grid__column--add_item")&&(i.addIconToRow(e),i.addItem(e.getAttribute("data-type"))),e.matches(".grid__item--control_item")&&(e.parentNode.querySelector(".grid__item--control_item").classList.remove("active"),e.classList.add("active")),e.matches(".grid__column--action")){var n=e.getAttribute("data-action");i[n]instanceof Function&&(["increaseWidth","decreaseWidth"].includes(n)&&i.isEmpty()||i[n](e))}})}},{key:"isEmpty",value:function(){return this.instance.classList.contains("empty")}},{key:"removeColumn",value:function(){if(this.isEmpty())this.instance.remove();else{if(!confirm("Are you sure to delete?"))return!1;this.row.setWidth(-this.getWidth());var t=GridHelper.uniqueArray(this.row.sortable.toArray()),e=this.row.addColumn(this.getWidth());this.instance.parentNode.replaceChild(e.instance,this.instance),this.orderRowColumns(e,t,this.id,e.id)}this.row.columns.delete(this.id)}},{key:"orderRowColumns",value:function(t,e,n,i){e=e.map(function(t){return t==n?i:t}),this.row.sortColumns(GridHelper.arrayToSortPattern(e))}},{key:"updateDataId",value:function(){this.instance.setAttribute("data-id",this.id)}}]),n}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var GridRow=function(){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:4;_classCallCheck(this,n),this.columns=new Map,this.instance=null,this.grid=t,this.id=null,this.maxWidth=e,this.itemsWidth=0,this.emptyWidth=0,this.addAction=!1,this.sortable=null,this.inActionColumn=null}return _createClass(n,[{key:"add",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=arguments[2],i=this.getTemplate(n,this.maxWidth);i=(i=GridHelper.parseHTML(i))[0],null!==e?e.parentNode.insertBefore(i,e.nextSibling):t.appendChild(i),this.instance=i,this.id=n,this.init(),this.addColumn(this.maxWidth,!0)}},{key:"addFromRaw",value:function(t,e){var n=this.getTemplate(e.id,this.maxWidth),i=this;n=(n=GridHelper.parseHTML(n))[0],t.appendChild(n),this.instance=n,this.id=e.id,this.emptyWidth=e.emptyWidth,this.itemsWidth=e.itemsWidth,this.maxWidth=e.maxWidth,this.init(),e.hasOwnProperty("columns")&&e.columns.forEach(function(t){var e=new GridColumn(i,t.width);e.addFromRaw(t),i.addColumnToRow(t.id,e)})}},{key:"addColumn",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=this.getNewElementId(),i=new GridColumn(this,t);if(!this.canAddColumn(i.getWidth()))throw new Error("No space in row");return i.add(n),this.addColumnToRow(n,i),this.setWidth(i.getWidth(),i.isEmpty()),e&&this.grid.options.hasOwnProperty("defaultItem")&&(i.addIconToRow(i.instance.querySelector('.grid__column--add_item[data-type="'+this.grid.options.defaultItem+'"]')),i.addItem(this.grid.options.defaultItem)),i}},{key:"addColumnFromAnotherRow",value:function(t){var e=this.getNewElementId();this.addAction=!0,t.row=this,t.id=e,t.updateDataId(),this.removeOrChangeEmptyColumn(t.getWidth()),this.setWidth(t.getWidth(),t.isEmpty()),this.addColumnToRow(e,t),this.addAction=!1}},{key:"addColumnToRow",value:function(t,e){this.columns.set(t,e)}},{key:"addOrChangeEmptyColumn",value:function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=0;n<t;n++)if(0<this.getAvailableWidth()){var i=this.hasEmptyColumns(e);i?i.increaseWidth():this.addColumn(1)}}},{key:"canAddColumn",value:function(t){return 0<=this.getAvailableWidth()-t}},{key:"canChangeColumnWidth",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=this.getAvailableWidth();if(t){if(this.addAction)return!0;if(e+1<this.maxWidth)return!0}else if(0<=e-1)return!0;return!1}},{key:"collapse",value:function(t){var e,n=t.closest(".grid__row"),i=(e=t.find(".editable,textarea")).length?e.hasClass("editable")?e.text().trim().substring(0,70).replace(/[\r\n +(?= )]+/g," "):e.val().trim().substring(0,70).replace(/[\r\n +(?= )]+/g," "):"";n.find(".grid__row--move_title").html(i),n.toggleClass("collapsed"),n.hasClass("collapsed")&&$(".collapse_all").attr("data-state",1),t.slideToggle()}},{key:"collectColumnData",value:function(t){var e=new GridColumn(this.grid),n=[];return t.find(".grid__column").each(function(){n.push(e.collectItemData($(this)))}),{columns:n}}},{key:"getAvailableWidth",value:function(){return this.maxWidth-this.itemsWidth}},{key:"getColumnById",value:function(t){return t=parseInt(t),this.columns.get(t)}},{key:"getNewElementId",value:function(){var t=[].concat(_toConsumableArray(this.columns.keys()));return 0<t.length?Math.max.apply(Math,_toConsumableArray(t))+1:1}},{key:"getTemplate",value:function(t){return('<div class="grid__row col_'+(1<arguments.length&&void 0!==arguments[1]?arguments[1]:4)+'" data-id="'+t+'">\n        <div class="white_background">\n            <div class="grid__row--control">\n                <div class="grid__row--move">\n                    <i class="fa fa-arrows"></i>\n                    <span class="grid__row--move_title"></span>\n                </div>\n                <div class="grid__row--remove"><i class="fa fa-trash"></i> Удалить ряд</div>\n                <div class="grid__row--collapse"><i class="fa fa-caret-up"></i></div>\n            </div>\n            <div class="grid__row--container">\n            </div>\n        </div>\n        <div class="grid__row--add">\n            <div class="btn add-inblock" data-type="row"><i class="fa fa-plus"></i> Добавить ряд</div>\n        </div>\n    </div>').trim()}},{key:"getTemplateId",value:function(){return"rowBlock"}},{key:"hasEmptyColumns",value:function(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=!1,n=this,i={before:[],after:[]},r="before";this.columns.forEach(function(t){t==n.inActionColumn?r="after":i[r].push(t)});var o=!0,a=!1,l=void 0;try{for(var s,u=i.after[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var c=s.value;if(c.isEmpty())return e=c;if(t)return!1}}catch(t){a=!0,l=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw l}}if(t&&!i.after.length)return!1;var d=!0,h=!1,f=void 0;try{for(var m,p=i.before[Symbol.iterator]();!(d=(m=p.next()).done);d=!0){var y=m.value;if(y.isEmpty())return e=y}}catch(t){h=!0,f=t}finally{try{!d&&p.return&&p.return()}finally{if(h)throw f}}return e}},{key:"init",value:function(){this.initButtons(),this.initColumnSorting()}},{key:"initButtons",value:function(){var e=this;this.instance.addEventListener("click",function(t){t.target.matches(".grid__row--remove")&&e.removeRow()})}},{key:"initColumnSorting",value:function(){var n=this,t=Sortable.create(n.instance.querySelector(".grid__row--container"),{group:"columns",animation:150,ghostClass:"ghost",handle:".grid__column--move",draggable:".grid__column",onMove:function(t,e){t.to!==t.from?n.hideOrResizeEmpty(t):n.removeTempWidth()},onStart:function(t){n._temp_sortOrder=n.sortable.toArray()},onAdd:function(t){n.moveColumnToAnotherRow(t),n._temp_sortOrder=null},onSort:function(t){n.sortColumns(GridHelper.arrayToSortPattern(n.sortable.toArray()))},onEnd:function(t){n.removeTempWidth()}});this.sortable=t}},{key:"removeTempWidth",value:function(t){this.grid.container.querySelectorAll(".grid__column.empty").forEach(function(t){t.removeAttribute("temp_width")})}},{key:"hideOrResizeEmpty",value:function(t){var e=this.grid.getRowById(t.to.closest(".grid__row").getAttribute("data-id")),n=t.dragged,i=parseInt(n.getAttribute("data-width")),r=e.hasEmptyColumns(),o=r.width-i;r&&r.instance.setAttribute("temp_width",o)}},{key:"moveColumnToAnotherRow",value:function(t){var e=this.grid.getRowById(t.from.closest(".grid__row").getAttribute("data-id")),n=this.grid.getRowById(t.target.closest(".grid__row").getAttribute("data-id")),i=e.getColumnById(t.item.getAttribute("data-id")),r=Object.assign(Object.create(Object.getPrototypeOf(i)),i);n.canAddColumn(i.getWidth())?(n.addColumnFromAnotherRow(i),e.removeColumnToAnotherRow(r)):(this.reverseSortedColumn(t),console.warn("No free space in row"))}},{key:"removeColumnToAnotherRow",value:function(t){this.columns.delete(t.id),this.setWidth(-t.getWidth(),t.isEmpty());for(var e=0;e<t.getWidth();e++)this.addOrChangeEmptyColumn();var n=GridHelper.uniqueArray(this._temp_sortOrder),i=GridHelper.getFilterd(n,this.sortable.toArray()).join(),r=GridHelper.getFilterd(this.sortable.toArray(),this._temp_sortOrder).join();n=n.map(function(t){return t==i?r:t}),this.sortable.sort(n)}},{key:"removeOrChangeEmptyColumn",value:function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1,e=0;e<t;e++){var n=this.hasEmptyColumns();n&&(1==this.emptyWidth?(n.removeColumn(),this.emptyWidth=0):1==n.getWidth()?n.removeColumn():n.decreaseWidth())}}},{key:"removeRow",value:function(){return confirm("Are you sure to delete?")&&(this.instance.remove(),this.grid.rows.delete(this.id)),!1}},{key:"reverseSortedColumn",value:function(t){var e=this.grid.getRowById(t.from.closest(".grid__row").getAttribute("data-id"));t.from.appendChild(t.item),e.sortable.sort(e._temp_sortOrder)}},{key:"setWidth",value:function(t,e){e?this.emptyWidth+=t:this.itemsWidth+=t}},{key:"sortColumns",value:function(n){this.columns=new Map([].concat(_toConsumableArray(this.columns.entries())).sort(function(t,e){return n[t[0]]-n[e[0]]}))}},{key:"getObject",value:function(){var e=[];return this.columns.forEach(function(t){e.push(t.getObject())}),{columns:e,id:this.id,maxWidth:this.maxWidth,itemsWidth:this.itemsWidth,emptyWidth:this.emptyWidth}}}]),n}();_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Grid=function(){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;_classCallCheck(this,n),this.rows=new Map,this.container=t,this.raw=e,this.sortable=null,this.options={columns:4,defaultItem:"text"},this.items={text:TextElement}}return _createClass(n,[{key:"addItem",value:function(t,e){var n=new e,i=!0,r=!1,o=void 0;try{for(var a,l=Object.getOwnPropertyNames(Object.getPrototypeOf(new AbstractElement))[Symbol.iterator]();!(i=(a=l.next()).done);i=!0){var s=a.value,u=n[s];if(!(u instanceof Function&&u!==e||"constructor"===s||"function"==typeof n[s]))throw new Error(s+"() should be implement")}}catch(t){r=!0,o=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw o}}this.items[t]=n}},{key:"addRowBlock",value:function(){var t=new GridRow(this,this.options.columns),e=this.getNewElementId();t.add(this.container,null,e),this.addRowToGrid(e,t)}},{key:"addRowBlockAfter",value:function(t){var e=new GridRow(this),n=this.getNewElementId();e.add(this.container,t,n),this.addRowToGrid(n,e)}},{key:"addRowToGrid",value:function(t,e){this.rows.set(t,e)}},{key:"getCleanClone",value:function(){var t=Object.assign(Object.create(this),this),n=[];return t.rows.forEach(function(t,e){n.push(t.getObject())}),t.rows=n,delete t.sortable,delete t.raw,delete t.items,t.container=t.container.id,t}},{key:"getNewElementId",value:function(){var t=[].concat(_toConsumableArray(this.rows.keys()));return 0<t.length?Math.max.apply(Math,_toConsumableArray(t))+1:1}},{key:"getRowById",value:function(t){return t=parseInt(t),this.rows.get(t)}},{key:"init",value:function(){this.hasRaw()&&this.initRaw(),this.initButtons(),this.initSortable()}},{key:"initRaw",value:function(){var t=JSON.parse(this.raw),n=this;t.hasOwnProperty("rows")&&t.rows.forEach(function(t){var e=new GridRow(n,n.options.columns);e.addFromRaw(n.container,t),n.addRowToGrid(t.id,e)})}},{key:"hasRaw",value:function(){try{return!!JSON.parse(this.raw).hasOwnProperty("rows")}catch(t){return!1}}},{key:"initButtons",value:function(){var n=this;document.querySelector(".grid__maker").addEventListener("click",function(t){var e=t.target;e.matches(".add-block")&&n.addRowBlock(),e.matches(".add-inblock")&&n.addRowBlockAfter(e.closest(".grid__row"))})}},{key:"initSortable",value:function(){var e=this,t=document.querySelector("#grid__container"),n=Sortable.create(t,{animation:250,scrollSpeed:10,scrollSensitivity:70,handle:".grid__row--move",draggable:".grid__row",onSort:function(t){e.sortRows(GridHelper.arrayToSortPattern(e.sortable.toArray()))}});this.sortable=n}},{key:"sortRows",value:function(n){this.rows=new Map([].concat(_toConsumableArray(this.rows.entries())).sort(function(t,e){return n[t[0]]-n[e[0]]}))}},{key:"stringify",value:function(){return JSON.stringify(this.getCleanClone())}}]),n}();