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

        document.addEventListener('click', function(event){
            let target = event.target;
            if(target.classList.contains('grid__column--add_item')){
                let column = target.closest('.grid__column');
                console.log(column);
                _self.addIconToRow(target);
                _self.addItem(column,target.getAttribute('data-type'));
            }
            if(target.classList.contains('grid__item--control_item')){
                target.parentNode.querySelector('.grid__item--control_item').classList.remove('active');
                target.classList.add('active');
            }
        });
    }
    addIconToRow(item){
        let icon = item.innerHTML;
        let html = parseHTML('<div class="grid__row--icon">'+icon+'</div>')[0];
        let controls = item.closest('.grid__row').querySelector('.grid__row--control');
        controls.insertBefore(html,controls.firstChild);
    }
    addItem(column,type){
        let item = new this.items_classes[type]();
        let html_block = item.getHtmlBlock();
        let container = column.querySelector('.grid__column--container');
            container.innerHTML = '';
            container.appendChild(html_block);
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
        let block = this.getHtml().trim();
        block = parseHTML(block);
        block = block[0];
        container.appendChild(block);
    }
    removeRow(index){

    }
    getHtml(){
        return document.getElementById('columnBlock').innerHTML;
    }
    getStructure(){
        return this.items;
    }
}