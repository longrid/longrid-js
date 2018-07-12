class GridRow{
    constructor(raw = '') {
        this.columns = [];
        this.raw = raw;
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
        let column = new GridColumn();
        column.add(row.querySelector('.grid__row--container'));
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


        document.addEventListener('click', function(event){
            let target = event.target;
            if(target.matches('.grid__row--collapse')){
                _self.collapse(target.closest('.grid__row').querySelector('.grid__row--container'));
            }
            if(target.matches('.collapse_all')){
                let is_collapsed = this.getAttribute('data-state');
                if(is_collapsed == '1'){
                    _self.collapseAll('open');
                    target.setAttribute('data-state',0);
                } else{
                    _self.collapseAll('close');
                    target.setAttribute('data-state',1);
                }

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


    getStructure(){
        return this.columns;
    }
}