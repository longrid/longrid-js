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
    getHtmlBlock(id){
        let block = this.getTemplate(id);
        block = GridHelper.parseHTML(block);
        return block[0];
    }
    getTemplate(id,content = ''){
        return `<div class="grid__item" data-type="text" data-id="${id}">
            <div class="grid__item--text">
                <div class="editable">
                ${content}
                </div>
            </div>
        </div>`;
    }
    getTitle() {
        return "Текст";
    }

    init() {
        this.initMedium();
    }
}