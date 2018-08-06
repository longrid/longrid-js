class TextElement extends BaseElement {
    constructor(id,column) {
        super();
        this.column = column;
        this.instance = null;
        this.id = id;
        this.type = 'text';
        this.content = null;
    }

    getIcon() {
        return '<i class="fa fa-font"></i>';
    }

    getObject() {
        return {
            id:this.id,
            content:this.instance.querySelector('.editable').innerHTML
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