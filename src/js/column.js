class GridColumn {
    constructor(row,width = 1) {
        this.items = {};
        this.row = row;
        this.instance = null;
        this.width = width;
        this.id = null;
    }

    getTemplateId() {
        return 'columnBlock';
    }

    getWidth(){
        return this.width;
    }

     initButtons() {
        let _self = this;

        this.instance.addEventListener('click', function (event) {
            let target = event.target;
            if (target.matches('.grid__column--add_item')) {
                _self.addIconToRow(target);
                _self.addItem(target.getAttribute('data-type'));
            }
            if (target.matches('.grid__item--control_item')) {
                target.parentNode.querySelector('.grid__item--control_item').classList.remove('active');
                target.classList.add('active');
            }
            if (target.matches('.grid__column--action')) {
                let action = target.getAttribute('data-action');
                if (_self[action] instanceof Function) {
                    if(['increaseWidth','decreaseWidth'].includes(action)){
                        if(!_self.isEmpty()){
                            _self[action](target);
                        }
                    } else{
                        _self[action](target);
                    }
                }
            }
        });
    }

    changeDataWidth(){
        this.instance.setAttribute('data-width',this.width);
    }
    increaseWidth(){

        if(this.width + 1 > this.row.maxWidth){
            return false;
        }
        if(this.row.canChangeColumnWidth()){
            this.width = this.width + 1;
            this.row.setWidth(1,this.isEmpty());
            if(!this.isEmpty()){
                this.row.removeOrChangeEmptyColumn()
            }


        }
        this.changeDataWidth();
    }
    decreaseWidth(){

        if(this.width - 1 <= 0){
            return false;
        }
        if(this.row.canChangeColumnWidth(true)){
            this.width = this.width - 1;
            this.row.setWidth(-1,this.isEmpty());
            if(!this.isEmpty()){
                this.row.addOrChangeEmptyColumn()
            }
        }
        this.changeDataWidth();
    }

    isEmpty(){
        return this.instance.classList.contains('empty');
    }


    addIconToRow(item) {
        let icon = item.innerHTML;
        let html = GridHelper.parseHTML('<div class="grid__row--icon">' + icon + '</div>')[0];
        let controls = item.closest('.grid__column').querySelector('.grid__column--control');
        controls.insertBefore(html, controls.firstChild);
    }

    addItem( type) {
        let className = this.getGrid().items[type];
        let item = new className();
        let html_block = item.getHtmlBlock();
        let container = this.instance.querySelector('.grid__column--container');
        container.innerHTML = '';
        container.appendChild(html_block);
        item.init(this.instance);
        this.changeColumnStatus();
    }
    changeColumnStatus(){
        this.instance.classList.remove('empty');
        this.row.emptyWidth -= this.getWidth();
        this.row.itemsWidth += this.getWidth();
    }
    collectItemData(column) {
        let items = [];
        let _self = this;
        column.find('.grid__item').each(function () {
            let type = $(this).data('type');
            let item = new _self.grid.items[type]();
            items.push(item.getObject($(this)));
        });
        return items;
    }

    init() {
        this.initButtons();
    }
    getGrid(){
        return this.row.grid;
    }
    add(id) {
        let row = this.row.instance.querySelector('.grid__row--container');
        let block = this.getTemplate(id);
        block = GridHelper.parseHTML(block);
        this.instance = block[0];
        row.appendChild(this.instance);
        this.id = id;
        this.init();

    }


    getTemplate(id) {
        let _self = this;
        let template = ` <div class="grid__column empty" data-width="${_self.getWidth()}" data-id="${id}">
        <div class="grid__column--control"> 
            <div class="grid__column--move">
                <i class="fa fa-arrows"></i>
            </div>
             <div class="grid__column--action" data-action="decreaseWidth">
                <i class="fa fa-angle-left"></i>
            </div> 
            <div class="grid__column--action" data-action="increaseWidth">
                <i class="fa fa-angle-right"></i>
            </div>
             <div class="grid__column--action" data-action="removeColumn">
                <i class="fa fa-trash"></i>
            </div>   
        </div>
        <div class="grid__column--container">
           
            <div class="empty"> 
                <div class="items__list">
                    ${_self.getColumnItems()}                   
                </div>
                <div class="select__item">

                </div>

            </div>
        </div>
    </div>`;
        return template.trim();
    }

    getColumnItems() {
        let items = this.getGrid().items;
        let template = ``;
        for (let item in items) {
            if (items.hasOwnProperty(item)) {
                let instance = new items[item]();
                template += ` <div class="grid__column--add_item" data-type="${item}" title="${instance.getTitle()}" >
                       ${instance.getIcon()}
                    </div>`;
            }
        }
        return template;
    }

    removeColumn(){
        if(!this.isEmpty()){
            let removeConfirm = confirm('Are you sure to delete?');
            if(!removeConfirm){
                return false;
            }
            this.row.setWidth(-this.getWidth());
            let emptyColumn = this.row.addColumn(this.getWidth());
            this.instance.parentNode.replaceChild(emptyColumn.instance, this.instance);
        } else{
            this.instance.remove();
        }
        this.row.columns.delete(this.id);
    }
}