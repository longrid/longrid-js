class FactElement extends BaseElement{
    getHtml(){
        return $('#factsBlock').html();
    }
    getObject(item) {
        return {
            'type': item.data('type'),
            'content': item.find('.editable').html(),
        }
    }

}