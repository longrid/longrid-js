class TextElement extends BaseElement{

    init() {
        this.initMedium();
    }


    getHtml(){
        return document.getElementById('textBlock').innerHTML;
    }
    getObject(item) {
        return {
            'type': item.data('type'),
            'content': item.find('.editable').html()
        }
    }
}