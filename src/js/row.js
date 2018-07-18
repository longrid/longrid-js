class GridRow{
    constructor(grid = null) {
        this.columns = [];
        this.grid = grid;

    }

    /**
     * Если row не null, то добавляем строку после этого row
     * @param container
     * @param row
     */
    add(container,row = null){
        let block = this.getTemplate();
        block = GridHelper.parseHTML(block);
        block = block[0];
        if(row !== null){
            row.parentNode.insertBefore(block, row.nextSibling);
        } else{
            container.appendChild(block);
        }
        this.init();
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
                console.log(evt.to);
                console.log(evt);
                if(evt.action === 'add') {
                    console.log(evt.to);
                    evt.preventDefault();
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


    getTemplate(columns = 4){
        let template = `<div class="grid__row col_${columns}">
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