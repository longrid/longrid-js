class Grid {
    constructor(container, raw = '') {
        this.rows = new Map();
        this.container = container;
        this.raw = raw;
        this.items = {
            'text': TextElement,
        };

    }


    addItem(name, instance_class) {
        let instance = new instance_class();
        for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf((new AbstractElement)))) {
            let method = instance[name];
            // Supposedly you'd like to skip constructor
            if (!(method instanceof Function) || method === instance_class) {
                if (name !== 'constructor') {
                    if (typeof instance[name] !== "function") {
                        throw new Error(`${name}() should be implement`);
                    }
                }
            }
        }
        this.items[name] = instance;
    }

    init() {
        this.initButtons();
        //GridRow.initButtons(this);
        //GridColumn.initButtons(this);
       // BaseElement.initFromHtml();
        //ImageElement.initFromHtml();
        //GalleryElement.initFromHtml();
        this.initSortable();
        this.initRowIcons();
    }

    initRowIcons() {
        [].forEach.call(document.querySelectorAll('.grid__column'), function (item) {
            let icons = this.querySelector('.grid__column .icons');
            let controls = this.querySelector('.grid__column--control');
            if (icons.length) {
                let html = GridHelper.parseHTML('<div class="grid__row--icon">' + icons.innerHTML + '</div>');
                controls.insertBefore(html, controls.firstChild);
                icons.remove();
            }
        });
    }

    collectGridData() {
        let row = new GridRow();
        let _self = this;
        let rows = [];
        [].forEach.call(this.container.querySelectorAll('.grid__row'), function () {
            rows.push(row.collectColumnData(this));
        });
        return {
            'rows': rows
        };
    }

    initButtons() {
        let _self  = this;
        document.querySelector('.grid__maker').addEventListener('click', function (event) {
            let target = event.target;
            if (target.matches('.add-block')) {
                _self.addRowBlock();
            }
            if (target.matches('.add-inblock')) {
                _self.addRowBlockAfter(target.closest('.grid__row'));
            }
        });

    }

    initSortable(){
        let container = document.querySelector("#grid__container");
        let sort = Sortable.create(container, {
            animation: 250, // ms, animation speed moving items when sorting, `0` — without animation
            scrollSpeed: 10,
            scrollSensitivity: 70,
            handle: ".grid__row--move", // Restricts sort start click/touch to the specified element
            draggable: ".grid__row", // Specifies which items inside the element should be sortable
        });
    }

    addRowBlock() {
        let row = new GridRow(this);
        let id = this.getNewElementId();
        row.add(this.container, null, id);
        this.addRowToGrid(id, row);
    }

    addRowBlockAfter(item) {
        let row = new GridRow(this);
        let id = this.getNewElementId();
        row.add(this.container, item, id);
        this.addRowToGrid(id, row);
    }

    addRowToGrid(id, row) {
        this.rows.set(id,row);
    }


    getNewElementId() {
        let keys = [...this.rows.keys()];
        if (keys.length > 0) {
            return Math.max(...keys) + 1;
        } else {
            return 1;
        }
    }
    sort(arr,pattern = undefined){
        return  new Map(arr.sort(pattern));
        /*
                let map = {3:0,2:3,1:2};
        clone.rows = clone.sort([...this.rows.entries()],function(x, y){ return map[x[0]] - map[y[0]]; });
         */
    }
    getCleanClone(){
        let clone =  Object.assign(Object.create(this), this);
        clone.rows.forEach(function(row){
            row.columns.forEach(function(column){
                delete column.row;
            });

           delete row.grid ;
        });
        clone.rows.forEach(function(row){
           row.columns = [...row.columns.values()];
        });
        clone.rows = [...clone.rows.values()];
        clone.container = clone.container.id;
        return clone;
    }

    stringify(){
        return JSON.stringify(this.getCleanClone());
    }


}