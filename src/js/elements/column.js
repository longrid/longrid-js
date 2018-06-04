class GridColumn{
    constructor(raw = '') {
        this.items = [];
        this.raw = raw;
        this.init();
        this.items_classes = {
            'audio': AudioElement,
            'citate': CitateElement,
            'facts': FactElement,
            'frame': FrameElement,
            'gallery': GalleryElement,
            'gif': GifElement,
            'image': ImageElement,
            'text': TextElement,
            'video': VideoElement,
        }
    }
    static initButtons(){
        let _self = new GridColumn();
        $(document).on("click",".grid__column--add_item",function(){
            let column = $(this).closest('.grid__column');
            _self.addIconToRow($(this));
            _self.addItem(column,$(this).data('type'));
        });
        $(document).on("click",'.grid__item--control_item',function(){
            $(this).parent().find('.grid__item--control_item').removeClass('active');
            $(this).addClass('active');
        })
    }
    addIconToRow(item){
        let icon = item.html();
        item.closest('.grid__row').find('.grid__row--control').prepend('<div class="grid__row--icon">'+icon+'</div>')
    }
    addItem(column,type){
        let item = new this.items_classes[type]();
        let html_block = item.getHtmlBlock();
        let container = column.find('.grid__column--container');
            container.html('');
            container.append(html_block);
        item.init(container);

    }
    collectItemData(column){
        let items = [];
        let _self =  this;
        column.find('.grid__item').each(function(){
            let type = $(this).data('type');
            let item = new _self.items_classes[type]();
            items.push(item.getObject($(this)));
        });
        return items;
    }
    init(){

    }
    add(container){
        let block = $.trim(this.getHtml());
        block = $.parseHTML(block);
        block = block[0];
        container.append(block);
    }
    removeRow(index){

    }
    getHtml(){
        return $('#columnBlock').html();
    }
    getStructure(){
        return this.items;
    }
}