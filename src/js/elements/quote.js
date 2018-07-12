class QuoteElement extends BaseElement{
    getTemplateId(){
        return 'quoteBlock';
    }
    getObject(item){
        return {
            'type':item.data('type'),
            'content':item.find('.editable').html()
        }
    }
}