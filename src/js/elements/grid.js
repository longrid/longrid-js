class Grid {
    constructor(container, raw = '') {
        this.rows = [];
        this.container = container;
        this.raw = raw;
    }

    init() {
        Grid.initButtons(this.container);
       // GridRow.initButtons();
       // GridColumn.initButtons();
      //  BaseElement.initFromHtml();
       // ImageElement.initFromHtml();
      //  GalleryElement.initFromHtml();
      //  this.initSortable();
      //  this.initRowIcons();
    }
    initRowIcons(){
       /*
        $('.grid__row').each(function(){
            let icons = $(this).find('.grid__column .icons');
            if(icons.length){
                $(this).find('.grid__row--control').prepend('<div class="grid__row--icon">'+icons.html()+'</div>');
                icons.remove();
            }
        });*/
    }
    collectGridData() {
        let row = new GridRow();
        let _self = this;
        let rows = [];
        this.container.find('.grid__row').each(function () {
            rows.push(row.collectColumnData($(this)));
        });
        return {
            'rows': rows
        };
    }

    static initButtons(container) {
        let _self = new Grid(container);


        document.addEventListener('click', function(event){
            if(event.target.classList.contains('add-block')){
                _self.addRowBlock();
            }
        });

        document.addEventListener('click', function(event){
            let target = event.target;
            if(target.classList.contains('add-inblock')){
                _self.addRowBlockAfter( target.closest('.grid__row') );
            }
        });
        document.addEventListener('click', function(event){
            let target = event.target;
            if(target.classList.contains('grid__row--remove')){
                _self.removeRow( target.closest('.grid__row') );
            }
        });
        /**
         *
         *
         *   $(document).on("click", ".add-inblock", function () {

        });


        $(document).on("click", ".grid__row--remove", function () {
            _self.removeRow($(this).closest('.grid__row'));
        });      */
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
        row.addAfter(this.container,item);
    }

    removeRow(row) {
        row.remove();
    }

}