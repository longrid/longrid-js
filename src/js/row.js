class GridRow{
    constructor(grid = null) {
        this.columns = [];
        this.grid = grid;
        this.init()
    }

    /**
     * Если row не null, то добавляем строку после этого row
     * @param container
     * @param row
     */
    add(container,row = null){
        let block = GridHelper.getHtml(this.getTemplateId()).trim();
        block = GridHelper.parseHTML(block);
        block = block[0];
        if(row !== null){
            row.parentNode.insertBefore(block, row.nextSibling);
        } else{
            container.appendChild(block);
        }
        this.addColumn(block);
    }
    getTemplateId(){
        return 'rowBlock';
    }

    addColumn(row){
        let column = new GridColumn(this.grid);
        column.add(row.querySelector('.grid__row--container'));
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
    static initButtons(grid){
        let _self = new GridRow(grid);


        document.addEventListener('click', function(event){
            let target = event.target;
            if(target.matches('.grid__row--collapse')){
                _self.collapse(target.closest('.grid__row').querySelector('.grid__row--container'));
            }


        });

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

    }

    removeColumn(index){

    }


    getStructure(){
        return this.columns;
    }
}