class TextElement extends BaseElement{

    init() {
        this.initMedium();
    }


    getHtml(){
        return $('#textBlock').html();
    }
    getObject(item) {
        return {
            'type': item.data('type'),
            'content': item.find('.editable').html()
        }
    }
}