class TextElement extends BaseElement{

    init() {
        this.initMedium();
    }

    getTemplateId(){
        return 'textBlock';
    }

    getObject(item) {
        return {
            'type': item.data('type'),
            'content': item.find('.editable').html()
        }
    }
}