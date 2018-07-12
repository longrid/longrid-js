class ImageElement extends BaseElement{
    init(){
        this.initControlButtons();
    }
    initControlButtons(){
        let _self = this;
        this.initMedium();
        this.initImageUpload();
        $(document).on("click",'.grid__item--image .image__placeholder .remove',function(){
            _self.removeImage($(this).closest('.grid__item--image'));
        });

    }
    static initFromHtml(){
        let _self = new ImageElement();
        _self.initControlButtons();
        _self.initImageUpload();
    }
    initImageUpload(){
        $('.add-image').fileupload({
            dataType: 'json',
            start:function(e){
                console.log('init');
                $(this).closest('.grid__item').find('.image__placeholder').addClass('__loading');
            },
            done: function (e, data) {
                // $(this).parent().find('input').hide();
                let container = $(this).closest('.grid__item').find('.image__placeholder');
                container.removeClass('__loading');
                container.addClass('imageAdded');
                container.find('.preview').html('');
                container.find('.preview').append('<img src="' + data.result + '" />');
            },
            fail: function (e, data) {
                alert('failed');
                console.log(data);
            }
        }) 
    }
    removeImage(container){
        let src = container.find('img').attr('src');
        container.find('.image__placeholder').removeClass('imageAdded');
        container.find('.preview').html('');
        $.get( "/admin.php/pages/longrid/remove-media?url="+src, function( data) {
        });

    }
    getTemplateId(){
        return 'imageBlock';
    }
    getObject(item) {
        return {
            'type': item.data('type'),
            'state':item.find('.grid__item--control_item.active').data('type'),
            'image':item.find('.preview img').attr('src'),
            'content':item.find('.editable').html(),
        }
    }
}