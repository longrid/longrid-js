class Grid {
    constructor(container, raw = '') {
        this.rows = [];
        this.container = container;
        this.raw = raw;
    }

    init() {
        Grid.initButtons(this.container);
        GridRow.initButtons();
        GridColumn.initButtons();
        BaseElement.initFromHtml();
        ImageElement.initFromHtml();
        GalleryElement.initFromHtml();
        this.initSortable();
        this.initRowIcons();
    }
    initRowIcons(){
        [].forEach.call(document.querySelectorAll('.grid__row'),function(item){
            let icons = this.querySelector('.grid__column .icons');
            let controls = this.querySelector('.grid__row--control');
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
        let row = new GridRow();
        row.add(this.container);
    }
    addRowBlockAfter(item){
        let row = new GridRow();
        row.add(this.container,item);
    }

    removeRow(row) {
        row.remove();
    }

}