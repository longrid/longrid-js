class Longread{
    constructor(){
        this.data = {};
        this.grid = new Grid(document.getElementById('grid__container'));
    }
    initButtons(){

    }
    init(){
        this.grid.init();
        this.initButtons();
    }

    save(){
        let _self = this;
        this.data.grid = this.grid.collectGridData();

    }
}


class newElement extends AbstractElement{
}
    let longridMaker = new Longread();
    longridMaker.grid.addItemType('new',newElement);
    longridMaker.init();
