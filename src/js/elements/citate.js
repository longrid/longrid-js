class CitateElement extends BaseElement{
    getHtml(){
        return $('#citateBlock').html();
    }
    getObject(item){
        return {
            'type':item.data('type'),
            'content':item.find('.editable').html()
        }
    }
}