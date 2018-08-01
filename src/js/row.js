class GridRow{
    constructor(grid = null,maxWidth = 4) {
        this.columns = new Map();
        this.instance = null; // DOMElement
        this.grid = grid;
        this.id = null;
        this.maxWidth = maxWidth; //4 items or 2 items with size 2 and etc.
        this.itemsWidth = 0;
        this.emptyWidth = 0;
    }
    getNewElementId() {

        let keys = [...this.columns.keys()];
        if (keys.length > 0) {
            return Math.max(...keys) + 1;
        } else {
            return 1;
        }

    }
    /**
     * Если row не null, то добавляем строку после этого row
     * @param container
     * @param row
     * @param id
     */
    add(container,row = null,id){
        let block = this.getTemplate(id,this.maxWidth);
        block = GridHelper.parseHTML(block);
        block = block[0];
        if(row !== null){
            row.parentNode.insertBefore(block, row.nextSibling);
        } else{
            container.appendChild(block);
        }
        this.instance = block;
        this.id = id;
        this.init();
        this.addColumn(this.maxWidth,true);
    }
    getTemplateId(){
        return 'rowBlock';
    }

    addColumn(defaultColumnWidth = 1,addItem = false){
        let id = this.getNewElementId();
        let column = new GridColumn(this,defaultColumnWidth);
        if(this.canAddColumn(column.getWidth())){
            column.add(id,addItem);
            this.addColumnToRow(id, column);
            this.setWidth(column.getWidth(),column.isEmpty())
            if(addItem){
                column.addIconToRow(column.instance.querySelector(`.grid__column--add_item[data-type="${this.grid.options.defaultItem}"]`));
                column.addItem(this.grid.options.defaultItem);
            }
        } else{
            throw new Error('No space in row');
        }
        return column;
    }
    addColumnToRow(id,column){
        this.columns.set(id,column);
    }
    collectColumnData(row){
        let column = new GridColumn(this.grid);
        let _self =  this;
        let columns = [];
        row.find('.grid__column').each(function(){
            columns.push(column.collectItemData($(this)));
        });
        return {
            'columns' : columns
        };
    }
    initButtons(){
        let _self = this;
        this.instance.addEventListener('click', function(event){
            let target = event.target;
            if(target.matches('.grid__row--remove')){
                _self.removeRow();
            }
        });
    }

    removeRow(){
       this.instance.remove();
       this.grid.rows.delete(this.id);
    }

    collapse(row){
        let parent = row.closest('.grid__row');

        let content = function(){
            let block = row.find('.editable,textarea');
            if(block.length){
                if(block.hasClass('editable')){
                    return  block.text().trim().substring(0,70).replace(/[\r\n +(?= )]+/g, ' ');
                } else{
                    return block.val().trim().substring(0,70).replace(/[\r\n +(?= )]+/g, ' ');
                }
            }
            return '';

        }();
        parent.find('.grid__row--move_title').html(content);
        parent.toggleClass('collapsed');
        if(parent.hasClass('collapsed')){
            $('.collapse_all').attr('data-state',1);
        }
        row.slideToggle();
    }
    init(){
        this.initButtons();
        this.initColumnSorting();
    }
    initColumnSorting() {
        let container = document.querySelector("#grid__container");
        let sort = Sortable.create(container, {
            animation: 250, // ms, animation speed moving items when sorting, `0` — without animation
            scrollSpeed: 10,
            scrollSensitivity: 70,
            handle: ".grid__column--move", // Restricts sort start click/touch to the specified element
            draggable: ".grid__column", // Specifies which items inside the element should be sortable
            onSort:function(evt){

                if(evt.action === 'add') {

                }
             }
        });
        [].forEach.call(container.getElementsByClassName('grid__row--container'), function (el){
            Sortable.create(el, {
                group: 'columns',
                animation: 150
            });
        });
    }
    removeColumn(index){

    }

    getAvailableWidth(){
       return this.maxWidth - (this.itemsWidth );
    }
    canAddColumn(columnWidth){
       let nextWidth =  this.getAvailableWidth() - columnWidth ;
       return nextWidth >= 0;
    }
    canChangeColumnWidth(decrease = false){
        let available = this.getAvailableWidth();
        if(decrease){
            if((available + 1) < this.maxWidth){
                return true;
            }
        } else{
            if((available - 1) >= 0){
                return true;
            }
        }
        return false;
    }
    setWidth(columnWidth,emptyItem ){
        if(emptyItem){
            this.emptyWidth += columnWidth;
        } else{
            this.itemsWidth += columnWidth;
        }

    }
    addOrChangeEmptyColumn(){
        if(this.getAvailableWidth() > 0){
            let emptyItem = this.hasEmptyColumns();
            if(!emptyItem){
                this.addColumn(1);
            } else{
                emptyItem.increaseWidth();
            }
        }
    }
    removeOrChangeEmptyColumn(){

        let emptyItem = this.hasEmptyColumns();
        if(emptyItem){
            if(this.emptyWidth == 1){
                emptyItem.removeColumn();
                this.emptyWidth = 0;
            } else{
                emptyItem.decreaseWidth();
            }


        } else{

        }

    }
    hasEmptyColumns(){
        let has = false;
        for( let item of this.columns.values()){
            if(item.isEmpty()){
                has = item;
                break;
            }
        }
       return has;

    }

    getTemplate(id,columns = 4){
        let template = `<div class="grid__row col_${columns}" data-id="${id}">
        <div class="white_background">
            <div class="grid__row--control">
                <div class="grid__row--move">
                    <i class="fa fa-arrows"></i>
                    <span class="grid__row--move_title"></span>
                </div>
                <div class="grid__row--remove"><i class="fa fa-trash"></i> Удалить ряд</div>
                <div class="grid__row--collapse"><i class="fa fa-caret-up"></i></div>
            </div>
            <div class="grid__row--container">
            </div>
        </div>
        <div class="grid__row--add">
            <div class="btn add-inblock" data-type="row"><i class="fa fa-plus"></i> Добавить ряд</div>
        </div>
    </div>`;
        return template.trim();
    }
}