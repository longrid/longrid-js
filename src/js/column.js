class GridColumn{
    constructor(grid = null) {
        this.items = [];
        this.grid = grid;
        this.init();

    }

    getTemplateId(){
        return 'columnBlock';
    }
    static initButtons(grid){
        let _self = new GridColumn(grid);

        document.addEventListener('click', function(event){
            let target = event.target;
            if(target.matches('.grid__column--add_item')){
                let column = target.closest('.grid__column');
                console.log(column);
                _self.addIconToRow(target);
                _self.addItem(column,target.getAttribute('data-type'));
            }
            if(target.matches('.grid__item--control_item')){
                target.parentNode.querySelector('.grid__item--control_item').classList.remove('active');
                target.classList.add('active');
            }
        });
    }
    addIconToRow(item){
        let icon = item.innerHTML;
        let html = GridHelper.parseHTML('<div class="grid__row--icon">'+icon+'</div>')[0];
        let controls = item.closest('.grid__row').querySelector('.grid__row--control');
        controls.insertBefore(html,controls.firstChild);
    }
    addItem(column,type){
        let item = new this.grid.itemTypes[type]();
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
        let block = GridHelper.getHtml(this.getTemplateId()).trim();
        block = GridHelper.parseHTML(block);
        block = block[0];
        container.appendChild(block);
    }
    removeRow(index){

    }

    getStructure(){
        return this.items;
    }
}