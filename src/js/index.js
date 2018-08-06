class Longread{
    constructor(){
        this.data = {};
        this.grid = null;
    }
    initButtons(){

    }
    init(){
        this.grid =  new Grid(document.getElementById('grid__container'),document.querySelector('textarea').innerHTML);
        this.grid.init();
        this.initButtons();
    }

    save(){
        let _self = this;

    }
}


    let longridMaker = new Longread();
    longridMaker.init();
