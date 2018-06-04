class GridRow{
    constructor(raw = '') {
        this.columns = [];
        this.raw = raw;
        this.init()
    }
    add(container){
        let block = this.getHtml().trim();
        block = parseHTML(block);
        block = block[0];
        container.appendChild(block);
        this.addColumn(block);
    }
    addAfter(container,row){
        let block = $.trim(this.getHtml());
        block = $.parseHTML(block);
        block = block[0];
        $(block).insertAfter(row);
        this.addColumn($(block));
    }
    addColumn(row){
        return false;
        let column = new GridColumn();
        column.add(row.find('.grid__row--container'));
    }
    collectColumnData(row){
        let column = new GridColumn();
        let _self =  this;
        let columns = [];
        row.find('.grid__column').each(function(){
            columns.push(column.collectItemData($(this)));
        });
        return {
            'columns' : columns
        };
    }
    static initButtons(){
        let _self = new GridRow();
        $(document).on("click",".grid__row--collapse",function(){
            _self.collapse($(this).closest('.grid__row').find('.grid__row--container'));
        });

        $(document).on("click",".collapse_all",function(){
            let is_collapsed = $(this).attr('data-state');
            if(is_collapsed == '1'){
                _self.collapseAll('open');
                $(this).attr('data-state',0);
            } else{
                _self.collapseAll('close');
                $(this).attr('data-state',1);
            }


        });
    }
    collapseAll(state){
        let _self = this;

        $('.grid__row').each(function(){
            let container = $(this).find('.grid__row--container');
            if(state === 'open'){
                if($(this).hasClass('collapsed')){
                    _self.collapse(container);
                }
            } else{
                if(!$(this).hasClass('collapsed')){
                    _self.collapse(container);
                }
            }

        })
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

    getHtml(){
        return document.getElementById('rowBlock').innerHTML;
    }
    getStructure(){
        return this.columns;
    }
}