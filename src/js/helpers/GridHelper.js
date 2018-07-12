class GridHelper{
    static parseHTML(str){
        let tmp = document.implementation.createHTMLDocument();
        tmp.body.innerHTML = str;
        return tmp.body.children;
    }

    static getHtml(id){
        return document.getElementById(id).innerHTML;
    }

}

