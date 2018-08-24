class Longread{
    constructor(){
        this.data = {};
        this.grid = null;
    }
    initButtons(){

    }
    init(){
        this.grid =  new Grid({
            container:document.getElementById('grid__container'),
            raw:document.querySelector('textarea').innerHTML
        });
        this.grid.addItem('frame',FrameElement);
        this.grid.init();
        this.initButtons();
    }

    save(){
        let _self = this;

    }
}


    let longridMaker = new Longread();
    longridMaker.init();
