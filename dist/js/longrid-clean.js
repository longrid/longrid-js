"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GridHelper = function () {
    function GridHelper() {
        _classCallCheck(this, GridHelper);
    }

    _createClass(GridHelper, null, [{
        key: "arrayToSortPattern",
        value: function arrayToSortPattern(arr) {
            var obj = {};
            arr.forEach(function (item, index) {
                obj[item] = index;
            });
            return obj;
        }
    }, {
        key: "getFilterd",
        value: function getFilterd(arr, arr2) {
            return arr.filter(function (el) {
                return !arr2.includes(el);
            });
        }
    }, {
        key: "getHtml",
        value: function getHtml(id) {
            return document.getElementById(id).innerHTML;
        }
    }, {
        key: "parseHTML",
        value: function parseHTML(str) {
            var tmp = document.implementation.createHTMLDocument();
            tmp.body.innerHTML = str;
            return tmp.body.children;
        }
    }, {
        key: "uniqueArray",
        value: function uniqueArray(arrArg) {
            return Array.from(new Set(arrArg));
        }
    }]);

    return GridHelper;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageUploader = function () {
    function ImageUploader() {
        _classCallCheck(this, ImageUploader);
    }

    _createClass(ImageUploader, [{
        key: "init",
        value: function init() {}
    }]);

    return ImageUploader;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractElement = function () {
    function AbstractElement() {
        _classCallCheck(this, AbstractElement);
    }

    _createClass(AbstractElement, [{
        key: "init",


        /**
         * some init staff like enable MediumEditor and etc.
         */
        value: function init() {
            throw new Error("init() \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D");
        }

        /**
         * init Buttons for item control
         */

    }, {
        key: "getObject",

        /**
         * should prepare to create json
         */
        value: function getObject() {
            throw new Error("getCleanClone() \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D");
        }

        /**
         * should return id of text/template
         */

    }, {
        key: "getTemplateId",
        value: function getTemplateId() {
            throw new Error("getTemplateId \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D");
        }
    }], [{
        key: "initButtons",
        value: function initButtons() {
            throw new Error("static initButtons() \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D");
        }
    }]);

    return AbstractElement;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseElement = function (_AbstractElement) {
    _inherits(BaseElement, _AbstractElement);

    function BaseElement() {
        _classCallCheck(this, BaseElement);

        return _possibleConstructorReturn(this, (BaseElement.__proto__ || Object.getPrototypeOf(BaseElement)).apply(this, arguments));
    }

    _createClass(BaseElement, [{
        key: 'getHtmlBlock',
        value: function getHtmlBlock() {
            var block = GridHelper.getHtml(this.getTemplateId()).trim();
            block = GridHelper.parseHTML(block);
            return block[0];
        }
    }, {
        key: 'getTemplateId',
        value: function getTemplateId() {
            return 'baseElement';
        }
    }, {
        key: 'init',
        value: function init() {
            this.initMedium();
        }
    }, {
        key: 'initMedium',
        value: function initMedium() {
            var placeholder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Введите текст...';

            var editor = new MediumEditor('.editable', {
                toolbar: {
                    /* These are the default options for the toolbar,
                     if nothing is passed this is what is used */
                    allowMultiParagraphSelection: true,
                    buttons: ['bold', 'italic', 'h3', 'anchor', 'justifyLeft', 'justifyCenter', 'justifyRight', 'removeFormat'],
                    diffLeft: 0,
                    diffTop: -10,
                    firstButtonClass: 'medium-editor-button-first',
                    lastButtonClass: 'medium-editor-button-last',
                    standardizeSelectionStart: false,
                    static: false,
                    relativeContainer: null,
                    /* options which only apply when static is true */
                    align: 'center',
                    sticky: false,
                    updateOnEmptySelection: false
                },
                placeholder: {
                    text: placeholder,
                    hideOnClick: true
                },
                imageDragging: false
            });
        }
    }]);

    return BaseElement;
}(AbstractElement);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuoteElement = function (_BaseElement) {
    _inherits(QuoteElement, _BaseElement);

    function QuoteElement() {
        _classCallCheck(this, QuoteElement);

        return _possibleConstructorReturn(this, (QuoteElement.__proto__ || Object.getPrototypeOf(QuoteElement)).apply(this, arguments));
    }

    _createClass(QuoteElement, [{
        key: 'getTemplateId',
        value: function getTemplateId() {
            return 'quoteBlock';
        }
    }, {
        key: 'getObject',
        value: function getObject(item) {
            return {
                'type': item.data('type'),
                'content': item.find('.editable').html()
            };
        }
    }]);

    return QuoteElement;
}(BaseElement);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FrameElement = function (_BaseElement) {
    _inherits(FrameElement, _BaseElement);

    function FrameElement() {
        _classCallCheck(this, FrameElement);

        return _possibleConstructorReturn(this, (FrameElement.__proto__ || Object.getPrototypeOf(FrameElement)).apply(this, arguments));
    }

    _createClass(FrameElement, [{
        key: 'getTemplateId',
        value: function getTemplateId() {
            return 'frameBlock';
        }
    }, {
        key: 'getObject',
        value: function getObject(item) {
            return {
                'type': item.data('type'),
                'state': item.find('.grid__item--control_item.active').data('type'),
                'content': item.find('textarea').val()
            };
        }
    }]);

    return FrameElement;
}(BaseElement);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GalleryElement = function (_BaseElement) {
    _inherits(GalleryElement, _BaseElement);

    function GalleryElement() {
        _classCallCheck(this, GalleryElement);

        return _possibleConstructorReturn(this, (GalleryElement.__proto__ || Object.getPrototypeOf(GalleryElement)).apply(this, arguments));
    }

    _createClass(GalleryElement, [{
        key: 'init',
        value: function init(container) {
            this.initControlButtons();
            this.initImageUpload();
            this.container = container.find('.grid__item--gallery').get(0);
            this.initSortable();
        }
    }, {
        key: 'getItemTemplate',
        value: function getItemTemplate() {
            return '<div class="grid__item--gallery__item empty">\n' + '            <div class="image__placeholder">\n' + '            </div>\n' + '            <div class="editable"></div>\n' + '            <div class="grid__btn remove"><i class="fa fa-trash"></i> Удалить фото</div>\n' + '        </div>';
        }
    }, {
        key: 'initImageUpload',
        value: function initImageUpload() {
            var _self = this;
            $('.add-images').fileupload({
                dataType: 'json',
                add: function add(e, data) {
                    var self = $(this);
                    $.each(data.files, function (index, file) {
                        _self.createPlaceholder(self);
                    });
                    if (e.isDefaultPrevented()) {
                        return false;
                    }
                    if (data.autoUpload || data.autoUpload !== false && $(this).fileupload('option', 'autoUpload')) {
                        data.process().done(function () {
                            data.submit();
                        });
                    }
                },
                done: function done(e, data) {
                    // $(this).parent().find('input').hide();
                    _self.addImagesToContainer($(this), data);
                },
                fail: function fail(e, data) {
                    alert('failed');
                    console.log(data);
                }
            });
        }
    }, {
        key: 'initSortable',
        value: function initSortable() {
            var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var _self = this;
            var _container = void 0;
            if (container === null) {
                _container = _self.container;
            } else {
                _container = container;
            }

            var sort = Sortable.create(_container, {
                animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
                scrollSpeed: 10,
                scrollSensitivity: 70,
                handle: ".image__placeholder", // Restricts sort start click/touch to the specified element
                draggable: ".grid__item--gallery__item" // Specifies which items inside the element should be sortable
            });
        }
    }, {
        key: 'createPlaceholder',
        value: function createPlaceholder(self) {
            var item = $.parseHTML(this.getItemTemplate())[0];
            item = $(item);
            self.closest('.grid__row').find('.grid__item--gallery').append(item);
            this.initMedium('Описание фото...');
        }
    }, {
        key: 'addImagesToContainer',
        value: function addImagesToContainer(self, data) {
            var block = self.closest('.grid__row').find('.grid__item--gallery__item.empty').first();
            block.removeClass('empty');
            block.find('.image__placeholder').append('<img src="' + data.result + '" />');
        }
    }, {
        key: 'initControlButtons',
        value: function initControlButtons() {
            var _self = this;
            $(document).on("click", '.grid__item--gallery__item .remove', function () {
                _self.removeImage($(this).closest(".grid__item--gallery__item"));
            });
        }
    }, {
        key: 'removeImage',
        value: function removeImage(container) {
            var src = container.find('img').attr('src');
            $.get("/admin.php/pages/longrid/remove-media?url=" + src, function (data) {});
            container.remove();
        }
    }, {
        key: 'getTemplateId',
        value: function getTemplateId() {
            return 'galleryBlock';
        }
    }, {
        key: 'getItemsObject',
        value: function getItemsObject(item) {
            var items = [];
            item.find('.grid__item--gallery__item').each(function () {
                items.push({
                    'image': $(this).find('.image__placeholder img').attr('src'),
                    'content': $(this).find('.editable').html()
                });
            });
            return items;
        }
    }, {
        key: 'getObject',
        value: function getObject(item) {
            return {
                'type': item.data('type'),
                'items': this.getItemsObject(item)
            };
        }
    }], [{
        key: 'initFromHtml',
        value: function initFromHtml() {
            var _self = new GalleryElement();
            _self.initControlButtons();
            _self.initImageUpload();
            $('.grid__item--gallery').each(function () {
                _self.initSortable($(this).get(0));
            });
        }
    }]);

    return GalleryElement;
}(BaseElement);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageElement = function (_BaseElement) {
    _inherits(ImageElement, _BaseElement);

    function ImageElement() {
        _classCallCheck(this, ImageElement);

        return _possibleConstructorReturn(this, (ImageElement.__proto__ || Object.getPrototypeOf(ImageElement)).apply(this, arguments));
    }

    _createClass(ImageElement, [{
        key: 'init',
        value: function init() {
            this.initControlButtons();
        }
    }, {
        key: 'initControlButtons',
        value: function initControlButtons() {
            var _self = this;
            this.initMedium();
            this.initImageUpload();
            document.addEventListener('click', function (event) {
                var target = event.target;
                if (target.matches('.grid__item--image .image__placeholder .remove')) {
                    _self.removeImage(target.closest('.grid__item--image'));
                }
            });
        }
    }, {
        key: 'initImageUpload',
        value: function initImageUpload() {
            $('.add-image').fileupload({
                dataType: 'json',
                start: function start(e) {
                    console.log('init');
                    $(this).closest('.grid__item').find('.image__placeholder').addClass('__loading');
                },
                done: function done(e, data) {
                    // $(this).parent().find('input').hide();
                    var container = $(this).closest('.grid__item').find('.image__placeholder');
                    container.removeClass('__loading');
                    container.addClass('imageAdded');
                    container.find('.preview').html('');
                    container.find('.preview').append('<img src="' + data.result + '" />');
                },
                fail: function fail(e, data) {
                    alert('failed');
                    console.log(data);
                }
            });
        }
    }, {
        key: 'removeImage',
        value: function removeImage(container) {
            var src = container.find('img').attr('src');
            container.find('.image__placeholder').removeClass('imageAdded');
            container.find('.preview').html('');
            $.get("/admin.php/pages/longrid/remove-media?url=" + src, function (data) {});
        }
    }, {
        key: 'getTemplateId',
        value: function getTemplateId() {
            return 'imageBlock';
        }
    }, {
        key: 'getObject',
        value: function getObject(item) {
            return {
                'type': item.data('type'),
                'state': item.find('.grid__item--control_item.active').data('type'),
                'image': item.find('.preview img').attr('src'),
                'content': item.find('.editable').html()
            };
        }
    }], [{
        key: 'initFromHtml',
        value: function initFromHtml() {
            var _self = new ImageElement();
            _self.initControlButtons();
            _self.initImageUpload();
        }
    }]);

    return ImageElement;
}(BaseElement);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextElement = function (_BaseElement) {
    _inherits(TextElement, _BaseElement);

    function TextElement(id, column) {
        _classCallCheck(this, TextElement);

        var _this = _possibleConstructorReturn(this, (TextElement.__proto__ || Object.getPrototypeOf(TextElement)).call(this));

        _this.column = column;
        _this.instance = null;
        _this.id = id;
        _this.type = 'text';
        _this.content = null;
        return _this;
    }

    _createClass(TextElement, [{
        key: 'getIcon',
        value: function getIcon() {
            return '<i class="fa fa-font"></i>';
        }
    }, {
        key: 'getObject',
        value: function getObject() {
            return {
                id: this.id,
                content: this.instance.querySelector('.editable').innerHTML
            };
        }
    }, {
        key: 'getTemplateId',
        value: function getTemplateId() {
            return 'textBlock';
        }
    }, {
        key: 'getHtmlBlock',
        value: function getHtmlBlock(id) {
            var block = this.getTemplate(id);
            block = GridHelper.parseHTML(block);
            return block[0];
        }
    }, {
        key: 'getTemplate',
        value: function getTemplate(id) {
            var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            return '<div class="grid__item" data-type="text" data-id="' + id + '">\n            <div class="grid__item--text">\n                <div class="editable">\n                ' + content + '\n                </div>\n            </div>\n        </div>';
        }
    }, {
        key: 'getTitle',
        value: function getTitle() {
            return "Текст";
        }
    }, {
        key: 'init',
        value: function init() {
            this.initMedium();
        }
    }]);

    return TextElement;
}(BaseElement);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GridColumn = function () {
    function GridColumn(row) {
        var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        _classCallCheck(this, GridColumn);

        this.items = new Map();
        this.row = row;
        this.instance = null;
        this.width = width;
        this.id = null;
    }

    _createClass(GridColumn, [{
        key: 'getObject',
        value: function getObject() {
            var items = [];
            this.items.forEach(function (item) {
                items.push(item.getObject());
            });

            return {
                items: items,
                width: this.getWidth(),
                id: this.id
            };
        }
    }, {
        key: 'add',
        value: function add(id) {
            var row = this.row.instance.querySelector('.grid__row--container');
            var block = this.getTemplate(id);
            block = GridHelper.parseHTML(block);
            this.instance = block[0];
            row.appendChild(this.instance);
            this.id = id;
            this.init();
        }
    }, {
        key: 'addFromRaw',
        value: function addFromRaw(column) {
            var _self = this;
            var block = this.getTemplate(column.id);
            block = GridHelper.parseHTML(block);
            block = block[0];
            var row = this.row.instance.querySelector('.grid__row--container');
            row.appendChild(block);
            this.instance = block;
            this.id = column.id;
            this.init();
            if (column.hasOwnProperty('items')) {
                column.items.forEach(function (item) {
                    // let grid_column = new GridColumn(this);
                    // grid_column.addFromRaw(this,column);
                });
            }
        }
    }, {
        key: 'addIconToRow',
        value: function addIconToRow(item) {
            var icon = item.innerHTML;
            var html = GridHelper.parseHTML('<div class="grid__row--icon">' + icon + '</div>')[0];
            var controls = item.closest('.grid__column').querySelector('.grid__column--control');
            controls.insertBefore(html, controls.firstChild);
        }
    }, {
        key: 'addItem',
        value: function addItem(type) {
            var className = this.getGrid().items[type];
            var item = new className(this);

            var id = this.getNewElementId();
            var block = item.getHtmlBlock(id);
            var container = this.instance.querySelector('.grid__column--container');
            container.innerHTML = '';
            container.appendChild(block);
            item.instance = block;
            item.id = id;
            item.init();
            this.addItemsToColumn(id, item);
            this.changeColumnStatus();
        }
    }, {
        key: 'addItemsToColumn',
        value: function addItemsToColumn(id, item) {
            this.items.set(id, item);
        }
    }, {
        key: 'changeColumnStatus',
        value: function changeColumnStatus() {
            this.instance.classList.remove('empty');
            this.row.emptyWidth -= this.getWidth();
            this.row.itemsWidth += this.getWidth();
        }
    }, {
        key: 'changeDataWidth',
        value: function changeDataWidth() {
            this.instance.setAttribute('data-width', this.width);
        }
    }, {
        key: 'collectItemData',
        value: function collectItemData(column) {
            var items = [];
            var _self = this;
            column.find('.grid__item').each(function () {
                var type = $(this).data('type');
                var item = new _self.grid.items[type]();
                items.push(item.getObject($(this)));
            });
            return items;
        }
    }, {
        key: 'decreaseWidth',
        value: function decreaseWidth() {
            this.row.inActionColumn = this;
            if (this.width - 1 <= 0) {
                throw new Error('can\'t decrease');
                return false;
            } else {}
            if (this.row.canChangeColumnWidth(true) || this.row.addAction) {
                this.width = this.width - 1;
                this.row.setWidth(-1, this.isEmpty());
                if (!this.isEmpty()) {
                    this.row.addOrChangeEmptyColumn(1, true);
                }
            } else {
                throw new Error('can\'t change column width to -');
            }
            this.changeDataWidth();
            this.row.inActionColumn = null;
        }
    }, {
        key: 'getColumnItems',
        value: function getColumnItems() {
            var items = this.getGrid().items;
            var template = '';
            for (var item in items) {
                if (items.hasOwnProperty(item)) {
                    var instance = new items[item]();
                    template += ' <div class="grid__column--add_item" data-type="' + item + '" title="' + instance.getTitle() + '" >\n                       ' + instance.getIcon() + '\n                    </div>';
                }
            }
            return template;
        }
    }, {
        key: 'getNewElementId',
        value: function getNewElementId() {

            var keys = [].concat(_toConsumableArray(this.items.keys()));
            if (keys.length > 0) {
                return Math.max.apply(Math, _toConsumableArray(keys)) + 1;
            } else {
                return 1;
            }
        }
    }, {
        key: 'getGrid',
        value: function getGrid() {
            return this.row.grid;
        }
    }, {
        key: 'getTemplate',
        value: function getTemplate(id) {
            var _self = this;
            var template = ' <div class="grid__column empty" data-width="' + _self.getWidth() + '" data-id="' + id + '">\n        <div class="grid__column--control"> \n            <div class="grid__column--move">\n                <i class="fa fa-arrows"></i>\n            </div>\n             <div class="grid__column--action" data-action="decreaseWidth">\n                -\n            </div> \n            <div class="grid__column--action" data-action="increaseWidth">\n               +\n            </div>\n             <div class="grid__column--action" data-action="removeColumn">\n                <i class="fa fa-trash"></i>\n            </div>   \n        </div>\n        <div class="grid__column--container">\n           \n            <div class="empty"> \n                <div class="items__list">\n                    ' + _self.getColumnItems() + '                   \n                </div>\n                <div class="select__item">\n\n                </div>\n\n            </div>\n        </div>\n    </div>';
            return template.trim();
        }
    }, {
        key: 'getTemplateId',
        value: function getTemplateId() {
            return 'columnBlock';
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this.width;
        }
    }, {
        key: 'increaseWidth',
        value: function increaseWidth() {
            this.row.inActionColumn = this;
            if (this.width + 1 > this.row.maxWidth) {
                throw new Error('can\'t increase');
                return false;
            }
            if (this.row.canChangeColumnWidth()) {
                this.width = this.width + 1;
                this.row.setWidth(1, this.isEmpty());
                if (!this.isEmpty()) {
                    this.row.removeOrChangeEmptyColumn();
                }
            } else {
                throw new Error('can\'t change column width to +');
            }
            this.changeDataWidth();
            this.row.inActionColumn = null;
        }
    }, {
        key: 'init',
        value: function init() {
            this.initButtons();
        }
    }, {
        key: 'initButtons',
        value: function initButtons() {
            var _self = this;

            this.instance.addEventListener('click', function (event) {
                var target = event.target;
                if (target.matches('.grid__column--add_item')) {
                    _self.addIconToRow(target);
                    _self.addItem(target.getAttribute('data-type'));
                }
                if (target.matches('.grid__item--control_item')) {
                    target.parentNode.querySelector('.grid__item--control_item').classList.remove('active');
                    target.classList.add('active');
                }
                if (target.matches('.grid__column--action')) {
                    var action = target.getAttribute('data-action');
                    if (_self[action] instanceof Function) {
                        if (['increaseWidth', 'decreaseWidth'].includes(action)) {
                            if (!_self.isEmpty()) {
                                _self[action](target);
                            }
                        } else {
                            _self[action](target);
                        }
                    }
                }
            });
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this.instance.classList.contains('empty');
        }
    }, {
        key: 'removeColumn',
        value: function removeColumn() {
            if (!this.isEmpty()) {
                var removeConfirm = confirm('Are you sure to delete?');
                if (!removeConfirm) {
                    return false;
                }
                this.row.setWidth(-this.getWidth());
                //Save Old Sorting
                var oldSort = GridHelper.uniqueArray(this.row.sortable.toArray());

                var emptyColumn = this.row.addColumn(this.getWidth());
                this.instance.parentNode.replaceChild(emptyColumn.instance, this.instance);
                //Fix this.row.columns ordering
                this.orderRowColumns(emptyColumn, oldSort, this.id, emptyColumn.id);
            } else {
                this.instance.remove();
            }
            this.row.columns.delete(this.id);
        }
    }, {
        key: 'orderRowColumns',
        value: function orderRowColumns(emptyColumn, oldSort, removedIndex, newIndex) {
            oldSort = oldSort.map(function (name) {
                if (name == removedIndex) {
                    return newIndex;
                } else {
                    return name;
                }
            });
            this.row.sortColumns(GridHelper.arrayToSortPattern(oldSort));
        }
    }, {
        key: 'updateDataId',
        value: function updateDataId() {
            this.instance.setAttribute('data-id', this.id);
        }
    }]);

    return GridColumn;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GridRow = function () {
    function GridRow() {
        var grid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var maxWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

        _classCallCheck(this, GridRow);

        this.columns = new Map();
        this.instance = null; // DOMElement
        this.grid = grid;
        this.id = null;
        this.maxWidth = maxWidth; //4 items or 2 items with size 2 and etc.
        this.itemsWidth = 0;
        this.emptyWidth = 0;
        this.addAction = false;
        this.sortable = null;
        this.inActionColumn = null;
    }

    /**
     * Если row не null, то добавляем строку после этого row
     * @param container
     * @param row
     * @param id
     */


    _createClass(GridRow, [{
        key: 'add',
        value: function add(container) {
            var row = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var id = arguments[2];

            var block = this.getTemplate(id, this.maxWidth);
            block = GridHelper.parseHTML(block);
            block = block[0];
            if (row !== null) {
                row.parentNode.insertBefore(block, row.nextSibling);
            } else {
                container.appendChild(block);
            }
            this.instance = block;
            this.id = id;
            this.init();
            this.addColumn(this.maxWidth, true);
        }
    }, {
        key: 'addFromRaw',
        value: function addFromRaw(container, row) {
            var block = this.getTemplate(row.id, this.maxWidth);
            var _self = this;
            block = GridHelper.parseHTML(block);
            block = block[0];

            container.appendChild(block);
            this.instance = block;
            this.id = row.id;
            this.emptyWidth = row.emptyWidth;
            this.itemsWidth = row.itemsWidth;
            this.maxWidth = row.maxWidth;
            this.init();
            if (row.hasOwnProperty('columns')) {
                row.columns.forEach(function (column) {
                    var grid_column = new GridColumn(_self, column.width);
                    grid_column.addFromRaw(column);
                    _self.addColumnToRow(column.id, grid_column);
                });
            }
        }
    }, {
        key: 'addColumn',
        value: function addColumn() {
            var defaultColumnWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var addItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var id = this.getNewElementId();
            var column = new GridColumn(this, defaultColumnWidth);
            if (this.canAddColumn(column.getWidth())) {
                column.add(id);
                this.addColumnToRow(id, column);
                this.setWidth(column.getWidth(), column.isEmpty());
                if (addItem) {
                    if (this.grid.options.hasOwnProperty('defaultItem')) {
                        column.addIconToRow(column.instance.querySelector('.grid__column--add_item[data-type="' + this.grid.options.defaultItem + '"]'));
                        column.addItem(this.grid.options.defaultItem);
                    }
                }
            } else {
                throw new Error('No space in row');
            }
            return column;
        }
    }, {
        key: 'addColumnFromAnotherRow',
        value: function addColumnFromAnotherRow(column) {
            var new_id = this.getNewElementId();
            this.addAction = true;
            column.row = this;
            column.id = new_id;
            column.updateDataId();
            this.removeOrChangeEmptyColumn(column.getWidth());
            this.setWidth(column.getWidth(), column.isEmpty());
            this.addColumnToRow(new_id, column);
            this.addAction = false;
        }
    }, {
        key: 'addColumnToRow',
        value: function addColumnToRow(id, column) {
            this.columns.set(id, column);
        }
    }, {
        key: 'addOrChangeEmptyColumn',
        value: function addOrChangeEmptyColumn() {
            var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var decreaseAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            for (var i = 0; i < times; i++) {
                if (this.getAvailableWidth() > 0) {
                    var emptyItem = this.hasEmptyColumns(decreaseAction);
                    if (!emptyItem) {
                        this.addColumn(1);
                    } else {
                        emptyItem.increaseWidth();
                    }
                }
            }
        }
    }, {
        key: 'canAddColumn',
        value: function canAddColumn(columnWidth) {
            var nextWidth = this.getAvailableWidth() - columnWidth;
            return nextWidth >= 0;
        }
    }, {
        key: 'canChangeColumnWidth',
        value: function canChangeColumnWidth() {
            var decrease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var available = this.getAvailableWidth();
            if (decrease) {
                if (this.addAction) {
                    return true;
                }
                if (available + 1 < this.maxWidth) {
                    return true;
                }
            } else {
                if (available - 1 >= 0) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'collapse',
        value: function collapse(row) {
            var parent = row.closest('.grid__row');

            var content = function () {
                var block = row.find('.editable,textarea');
                if (block.length) {
                    if (block.hasClass('editable')) {
                        return block.text().trim().substring(0, 70).replace(/[\r\n +(?= )]+/g, ' ');
                    } else {
                        return block.val().trim().substring(0, 70).replace(/[\r\n +(?= )]+/g, ' ');
                    }
                }
                return '';
            }();
            parent.find('.grid__row--move_title').html(content);
            parent.toggleClass('collapsed');
            if (parent.hasClass('collapsed')) {
                $('.collapse_all').attr('data-state', 1);
            }
            row.slideToggle();
        }
    }, {
        key: 'collectColumnData',
        value: function collectColumnData(row) {
            var column = new GridColumn(this.grid);
            var _self = this;
            var columns = [];
            row.find('.grid__column').each(function () {
                columns.push(column.collectItemData($(this)));
            });
            return {
                'columns': columns
            };
        }
    }, {
        key: 'getAvailableWidth',
        value: function getAvailableWidth() {
            return this.maxWidth - this.itemsWidth;
        }
    }, {
        key: 'getColumnById',
        value: function getColumnById(id) {
            id = parseInt(id);
            return this.columns.get(id);
        }
    }, {
        key: 'getNewElementId',
        value: function getNewElementId() {

            var keys = [].concat(_toConsumableArray(this.columns.keys()));
            if (keys.length > 0) {
                return Math.max.apply(Math, _toConsumableArray(keys)) + 1;
            } else {
                return 1;
            }
        }
    }, {
        key: 'getTemplate',
        value: function getTemplate(id) {
            var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

            var template = '<div class="grid__row col_' + columns + '" data-id="' + id + '">\n        <div class="white_background">\n            <div class="grid__row--control">\n                <div class="grid__row--move">\n                    <i class="fa fa-arrows"></i>\n                    <span class="grid__row--move_title"></span>\n                </div>\n                <div class="grid__row--remove"><i class="fa fa-trash"></i> \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u044F\u0434</div>\n                <div class="grid__row--collapse"><i class="fa fa-caret-up"></i></div>\n            </div>\n            <div class="grid__row--container">\n            </div>\n        </div>\n        <div class="grid__row--add">\n            <div class="btn add-inblock" data-type="row"><i class="fa fa-plus"></i> \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u044F\u0434</div>\n        </div>\n    </div>';
            return template.trim();
        }
    }, {
        key: 'getTemplateId',
        value: function getTemplateId() {
            return 'rowBlock';
        }
    }, {
        key: 'hasEmptyColumns',
        value: function hasEmptyColumns() {
            var decreaseAction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var has = false;
            var _self = this;
            var items = {
                'before': [],
                'after': []
            };
            var arrName = 'before';
            this.columns.forEach(function (item) {
                if (item == _self.inActionColumn) {
                    arrName = 'after';
                } else {
                    items[arrName].push(item);
                }
            });

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = items.after[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.isEmpty()) {
                        has = item;
                        return has;
                    } else {
                        if (decreaseAction) {
                            return false;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (decreaseAction) {
                if (!items.after.length) {
                    return false;
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = items.before[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _item = _step2.value;

                    if (_item.isEmpty()) {
                        has = _item;
                        return has;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return has;
        }
    }, {
        key: 'init',
        value: function init() {
            this.initButtons();
            this.initColumnSorting();
        }
    }, {
        key: 'initButtons',
        value: function initButtons() {
            var _self = this;
            this.instance.addEventListener('click', function (event) {
                var target = event.target;
                if (target.matches('.grid__row--remove')) {
                    _self.removeRow();
                }
            });
        }
    }, {
        key: 'initColumnSorting',
        value: function initColumnSorting() {
            var _self = this;

            var sortable = Sortable.create(_self.instance.querySelector('.grid__row--container'), {
                group: 'columns',
                animation: 150,
                ghostClass: "ghost",
                handle: ".grid__column--move", // Restricts sort start click/touch to the specified element
                draggable: ".grid__column", // Specifies which items inside the element should be sortable
                onMove: function onMove(evt, originalEvent) {
                    if (evt.to !== evt.from) {
                        _self.hideOrResizeEmpty(evt);
                    } else {
                        _self.removeTempWidth();
                    }
                },
                onStart: function onStart(evt) {
                    _self._temp_sortOrder = _self.sortable.toArray();
                },
                onAdd: function onAdd(evt) {
                    _self.moveColumnToAnotherRow(evt);
                    _self._temp_sortOrder = null;
                },
                onSort: function onSort(evt) {
                    _self.sortColumns(GridHelper.arrayToSortPattern(_self.sortable.toArray()));
                },
                onEnd: function onEnd(evt) {

                    _self.removeTempWidth();
                }
            });

            this.sortable = sortable;
        }
    }, {
        key: 'removeTempWidth',
        value: function removeTempWidth(rowInstance) {
            this.grid.container.querySelectorAll('.grid__column.empty').forEach(function (item) {
                item.removeAttribute('temp_width');
            });
        }
    }, {
        key: 'hideOrResizeEmpty',
        value: function hideOrResizeEmpty(event) {

            var newRow = this.grid.getRowById(event.to.closest('.grid__row').getAttribute('data-id'));
            var item = event.dragged;
            var itemSize = parseInt(item.getAttribute('data-width'));
            var emptyColumn = newRow.hasEmptyColumns();
            var emptyColumnNewSize = emptyColumn.width - itemSize;
            if (emptyColumn) {
                emptyColumn.instance.setAttribute('temp_width', emptyColumnNewSize);
            }
        }
    }, {
        key: 'moveColumnToAnotherRow',
        value: function moveColumnToAnotherRow(e) {
            var oldRow = this.grid.getRowById(e.from.closest('.grid__row').getAttribute('data-id'));
            var newRow = this.grid.getRowById(e.target.closest('.grid__row').getAttribute('data-id'));
            var column = oldRow.getColumnById(e.item.getAttribute('data-id'));
            var clone = Object.assign(Object.create(Object.getPrototypeOf(column)), column);
            if (newRow.canAddColumn(column.getWidth())) {
                newRow.addColumnFromAnotherRow(column);
                oldRow.removeColumnToAnotherRow(clone);
            } else {
                this.reverseSortedColumn(e);
                console.warn('No free space in row');
                //throw new Error('No free space in row');
            }
        }
    }, {
        key: 'removeColumnToAnotherRow',
        value: function removeColumnToAnotherRow(column) {
            this.columns.delete(column.id);
            this.setWidth(-column.getWidth(), column.isEmpty());
            for (var i = 0; i < column.getWidth(); i++) {
                this.addOrChangeEmptyColumn();
            }
            //Отсортировать добавленную колонку так, чтобы она встала на место перемещенного
            var oldSort = GridHelper.uniqueArray(this._temp_sortOrder);
            var removedIndex = GridHelper.getFilterd(oldSort, this.sortable.toArray()).join();
            var newIndex = GridHelper.getFilterd(this.sortable.toArray(), this._temp_sortOrder).join();
            oldSort = oldSort.map(function (name) {
                if (name == removedIndex) {
                    return newIndex;
                } else {
                    return name;
                }
            });
            this.sortable.sort(oldSort);
        }
    }, {
        key: 'removeOrChangeEmptyColumn',
        value: function removeOrChangeEmptyColumn() {
            var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            for (var i = 0; i < times; i++) {
                var emptyItem = this.hasEmptyColumns();
                if (emptyItem) {
                    if (this.emptyWidth == 1) {
                        emptyItem.removeColumn();
                        this.emptyWidth = 0;
                    } else {
                        if (emptyItem.getWidth() == 1) {
                            emptyItem.removeColumn();
                        } else {
                            emptyItem.decreaseWidth();
                        }
                    }
                }
            }
        }
    }, {
        key: 'removeRow',
        value: function removeRow() {
            var removeConfirm = confirm('Are you sure to delete?');
            if (removeConfirm) {
                this.instance.remove();
                this.grid.rows.delete(this.id);
            }
            return false;
        }
    }, {
        key: 'reverseSortedColumn',
        value: function reverseSortedColumn(e) {
            var oldRow = this.grid.getRowById(e.from.closest('.grid__row').getAttribute('data-id'));
            e.from.appendChild(e.item);
            oldRow.sortable.sort(oldRow._temp_sortOrder);
        }
    }, {
        key: 'setWidth',
        value: function setWidth(columnWidth, emptyItem) {
            if (emptyItem) {
                this.emptyWidth += columnWidth;
            } else {
                this.itemsWidth += columnWidth;
            }
        }
    }, {
        key: 'sortColumns',
        value: function sortColumns(pattern) {
            this.columns = new Map([].concat(_toConsumableArray(this.columns.entries())).sort(function (x, y) {
                return pattern[x[0]] - pattern[y[0]];
            }));
        }
    }, {
        key: 'getObject',
        value: function getObject() {
            var columns = [];
            this.columns.forEach(function (column) {
                columns.push(column.getObject());
            });
            return {
                columns: columns,
                id: this.id,
                maxWidth: this.maxWidth,
                itemsWidth: this.itemsWidth,
                emptyWidth: this.emptyWidth
            };
        }
    }]);

    return GridRow;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * columns can be 2 to 12
 */
var Grid = function () {
    function Grid(container) {
        var raw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Grid);

        this.rows = new Map();
        this.container = container;
        this.raw = raw;
        this.sortable = null;
        this.options = {
            columns: 4,
            defaultItem: 'text'
        };
        this.items = {
            'text': TextElement
        };
    }

    _createClass(Grid, [{
        key: 'addItem',
        value: function addItem(name, instance_class) {
            var instance = new instance_class();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.getOwnPropertyNames(Object.getPrototypeOf(new AbstractElement()))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _name = _step.value;

                    var method = instance[_name];
                    // Supposedly you'd like to skip constructor
                    if (!(method instanceof Function) || method === instance_class) {
                        if (_name !== 'constructor') {
                            if (typeof instance[_name] !== "function") {
                                throw new Error(_name + '() should be implement');
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.items[name] = instance;
        }
    }, {
        key: 'addRowBlock',
        value: function addRowBlock() {
            var row = new GridRow(this, this.options.columns);
            var id = this.getNewElementId();
            row.add(this.container, null, id);
            this.addRowToGrid(id, row);
        }
    }, {
        key: 'addRowBlockAfter',
        value: function addRowBlockAfter(item) {
            var row = new GridRow(this);
            var id = this.getNewElementId();
            row.add(this.container, item, id);
            this.addRowToGrid(id, row);
        }
    }, {
        key: 'addRowToGrid',
        value: function addRowToGrid(id, row) {
            this.rows.set(id, row);
        }
    }, {
        key: 'getCleanClone',
        value: function getCleanClone() {
            var clone = Object.assign(Object.create(this), this);
            var rows = [];
            clone.rows.forEach(function (row, index) {
                rows.push(row.getObject());
            });
            clone.rows = rows;
            delete clone.sortable;
            delete clone.raw;
            delete clone.items;
            clone.container = clone.container.id;
            return clone;
        }
    }, {
        key: 'getNewElementId',
        value: function getNewElementId() {
            var keys = [].concat(_toConsumableArray(this.rows.keys()));
            if (keys.length > 0) {
                return Math.max.apply(Math, _toConsumableArray(keys)) + 1;
            } else {
                return 1;
            }
        }
    }, {
        key: 'getRowById',
        value: function getRowById(id) {
            id = parseInt(id);
            return this.rows.get(id);
        }
    }, {
        key: 'init',
        value: function init() {
            if (this.hasRaw()) {
                this.initRaw();
            }
            this.initButtons();
            this.initSortable();
            // this.initRowIcons();
        }
    }, {
        key: 'initRaw',
        value: function initRaw() {
            var raw = JSON.parse(this.raw);
            var _self = this;
            if (raw.hasOwnProperty('rows')) {
                raw.rows.forEach(function (row) {
                    var grid_row = new GridRow(_self, _self.options.columns);
                    grid_row.addFromRaw(_self.container, row);
                    _self.addRowToGrid(row.id, grid_row);
                });
            }
        }
    }, {
        key: 'hasRaw',
        value: function hasRaw() {
            try {
                var r = JSON.parse(this.raw);
                if (r.hasOwnProperty('rows')) {
                    return true;
                } else {
                    return false;
                }
            } catch (err) {
                return false;
            }
        }
    }, {
        key: 'initButtons',
        value: function initButtons() {
            var _self = this;
            document.querySelector('.grid__maker').addEventListener('click', function (event) {
                var target = event.target;
                if (target.matches('.add-block')) {
                    _self.addRowBlock();
                }
                if (target.matches('.add-inblock')) {
                    _self.addRowBlockAfter(target.closest('.grid__row'));
                }
            });
        }
    }, {
        key: 'initSortable',
        value: function initSortable() {
            var _self = this;
            var container = document.querySelector("#grid__container");
            var sort = Sortable.create(container, {
                animation: 250, // ms, animation speed moving items when sorting, `0` — without animation
                scrollSpeed: 10,
                scrollSensitivity: 70,
                handle: ".grid__row--move", // Restricts sort start click/touch to the specified element
                draggable: ".grid__row", // Specifies which items inside the element should be sortable
                onSort: function onSort(evt) {
                    _self.sortRows(GridHelper.arrayToSortPattern(_self.sortable.toArray()));
                }
            });
            this.sortable = sort;
        }
    }, {
        key: 'sortRows',
        value: function sortRows(pattern) {
            this.rows = new Map([].concat(_toConsumableArray(this.rows.entries())).sort(function (x, y) {
                return pattern[x[0]] - pattern[y[0]];
            }));
        }
    }, {
        key: 'stringify',
        value: function stringify() {
            return JSON.stringify(this.getCleanClone());
        }
    }]);

    return Grid;
}();