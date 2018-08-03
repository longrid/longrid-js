class TextElement extends BaseElement {
    constructor(column) {
        super();
        this.column = column;
        this.instance = null;
    }

    getIcon() {
        return '<i class="fa fa-font"></i>';
    }

    getObject(item) {
        return {
            'type': item.data('type'),
            'content': item.find('.editable').html()
        }
    }

    getTemplateId() {
        return 'textBlock';
    }

    getTitle() {
        return "Текст";
    }

    init() {
        this.initMedium();
    }
}