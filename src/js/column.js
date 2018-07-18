class GridColumn {
    constructor(grid = null,maxWidth = 4,allWidth = 4) {
        this.items = [];
        this.grid = grid;
        this.init();
        this.maxWidth = maxWidth;
    }

    getTemplateId() {
        return 'columnBlock';
    }
    canAdd(item){
        return ( this.getAllWidth(item) + item.getAttribute('data-width')) > this.maxWidth;
    }
    static initButtons(grid) {
        let _self = new GridColumn(grid);

        document.addEventListener('click', function (event) {
            let target = event.target;
            if (target.matches('.grid__column--add_item')) {
                let column = target.closest('.grid__column');
                console.log(column);
                _self.addIconToRow(target);
                _self.addItem(column, target.getAttribute('data-type'));
            }
            if (target.matches('.grid__item--control_item')) {
                target.parentNode.querySelector('.grid__item--control_item').classList.remove('active');
                target.classList.add('active');
            }
            if (target.matches('.grid__column--action')) {
                let action = target.getAttribute('data-action');
                if (_self[action] instanceof Function) {
                    _self[action](target);
                }
            }
        });
    }
    changeWidth(target,to_right = true){
        let column = target.closest('.grid__column');
        let currentWidth =  parseInt(column.getAttribute('data-width'));
        let allWidth = this.getAllWidth(target);

        if(to_right){
            let nextWidth = currentWidth +1;
            let nextAllWidth = allWidth + 1;
            if(nextAllWidth <= this.maxWidth){
                column.setAttribute('data-width',nextWidth.toString())
            }
        } else{
            let nextWidth = currentWidth - 1;
            if(nextWidth > 0){
                column.setAttribute('data-width',nextWidth.toString())
            }
        }
        this.setAllWidth(target);
    }
    changeWidthToRight(target){
        this.changeWidth(target);
    }
    changeWidthToLeft(target){
        this.changeWidth(target,false);
    }
    setAllWidth(target){
       let row =  target.closest('.grid__row');
       let allWidth  = 0;
       [].forEach.call(row.querySelectorAll('.grid__column'),function(item){
           allWidth = allWidth +  parseInt(item.getAttribute('data-width'))
       });

       row.setAttribute('data-allWidth',allWidth);
    }
    getAllWidth(target = null){
        if(target === null){
            return this.maxWidth;
        } else{
           return parseInt(target.closest('.grid__row').getAttribute('data-allWidth'));
        }
    }
    addIconToRow(item) {
        let icon = item.innerHTML;
        let html = GridHelper.parseHTML('<div class="grid__row--icon">' + icon + '</div>')[0];
        let controls = item.closest('.grid__column').querySelector('.grid__column--control');
        controls.insertBefore(html, controls.firstChild);
    }

    addItem(column, type) {
        let item = new this.grid.items[type]();
        let html_block = item.getHtmlBlock();
        let container = column.querySelector('.grid__column--container');
        container.innerHTML = '';
        container.appendChild(html_block);
        item.init(container);
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

    }

    add(container,width = null) {
        if(width === null){
            width = this.maxWidth;
        }
        let block = this.getTemplate(width);
        block = GridHelper.parseHTML(block);
        block = block[0];
        container.appendChild(block);
        this.setAllWidth(block);
    }


    getTemplate(column_width = 4) {
        let _self = this;
        let template = ` <div class="grid__column" data-width="${column_width}">
        <div class="grid__column--control">
            <div class="grid__column--move">
                <i class="fa fa-arrows"></i>
            </div>
             <div class="grid__column--action" data-action="changeWidthToLeft">
                <i class="fa fa-angle-left"></i>
            </div> 
            <div class="grid__column--action" data-action="changeWidthToRight">
                <i class="fa fa-angle-right"></i>
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
        let items = this.grid.items;
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
}