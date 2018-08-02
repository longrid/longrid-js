class GridHelper{
    static parseHTML(str){
        let tmp = document.implementation.createHTMLDocument();
        tmp.body.innerHTML = str;
        return tmp.body.children;
    }

    static getHtml(id){
        return document.getElementById(id).innerHTML;
    }
    static  uniqueArray (arrArg){
        return Array.from(new Set(arrArg));
    }
    static getFilterd(arr,arr2){
       return arr.filter( ( el ) => !arr2.includes( el ) );
    }

}

