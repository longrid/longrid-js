class Grid {
    constructor(container, raw = '') {
        this.rows = [];
        this.container = container;
        this.raw = raw;
        this.items = {
            'text': TextElement,
        }
    }


    addItem(name,instance_class){
        let instance = new instance_class();
        for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf((new AbstractElement)))) {
            let method = instance[name];
            // Supposedly you'd like to skip constructor
            if (!(method instanceof Function) || method === instance_class){
                if(name !== 'constructor'){
                    if (typeof instance[name] !== "function") {
                        throw new Error(`${name}() should be implement`);
                    }
                }
            }
        }
        this.items[name] = instance;
    }
    init() {
        Grid.initButtons(this.container);
        GridRow.initButtons(this);
        GridColumn.initButtons(this);
        BaseElement.initFromHtml();
        //ImageElement.initFromHtml();
       //GalleryElement.initFromHtml();
        this.initSortable();
        this.initRowIcons();
    }
    initRowIcons(){
        [].forEach.call(document.querySelectorAll('.grid__column'),function(item){
            let icons = this.querySelector('.grid__column .icons');
            let controls = this.querySelector('.grid__column--control');
            if(icons.length){
                let html = GridHelper.parseHTML('<div class="grid__row--icon">'+icons.innerHTML+'</div>');
                controls.insertBefore(html,controls.firstChild);
                icons.remove();
            }
        });
    }
    collectGridData() {
        let row = new GridRow();
        let _self = this;
        let rows = [];
        [].forEach.call(this.container.querySelectorAll('.grid__row'),function () {
            rows.push(row.collectColumnData(this));
        });
        return {
            'rows': rows
        };
    }

    static initButtons(container) {
        let _self = new Grid(container);


        document.addEventListener('click', function(event){
            let target = event.target;
            if(target.matches('.add-block')){
                _self.addRowBlock();
            }
            if(target.matches('.add-inblock')){
                _self.addRowBlockAfter( target.closest('.grid__row') );
            }
            if(target.matches('.grid__row--remove')){
                _self.removeRow( target.closest('.grid__row') );
            }
        });

    }

    initSortable() {
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
        row.add(this.container);
    }
    addRowBlockAfter(item){
        let row = new GridRow(this);
        row.add(this.container,item);
    }

    removeRow(row) {
        row.remove();
    }

}