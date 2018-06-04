class FrameElement extends BaseElement{
    getHtml(){
        return $('#frameBlock').html();
    }
    getObject(item) {
        return {
            'type': item.data('type'),
            'state':item.find('.grid__item--control_item.active').data('type'),
            'content': item.find('textarea').val()
        }
    }

}