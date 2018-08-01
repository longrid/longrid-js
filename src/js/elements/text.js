class TextElement extends BaseElement{
    constructor(column){
        super();
        this.column = column;
        this.instance = null;
    }
    init() {
        this.initMedium();
    }

    getTemplateId(){
        return 'textBlock';
    }
    getTitle(){
        return "Текст";
    }
    getIcon(){
        return '<i class="fa fa-font"></i>';
    }
    getObject(item) {
        return {
            'type': item.data('type'),
            'content': item.find('.editable').html()
        }
    }
}