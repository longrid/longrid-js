class Longread{
    constructor(){
        this.data = {};
        this.grid = null;
    }
    initButtons(){

    }
    init(){
        this.grid =  new Grid(document.getElementById('grid__container'));
        this.grid.init();
        this.initButtons();
    }

    save(){
        let _self = this;
        this.data.grid = this.grid.collectGridData();

    }
}


    let longridMaker = new Longread();
    longridMaker.init();
