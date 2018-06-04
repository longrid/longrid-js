class BaseElement{

    getHtmlBlock(){
        let block = $.trim(this.getHtml());
        block = $.parseHTML(block);
        return block[0];
    }
    init(){
        this.initMedium();
    }
    initMedium(placeholder = 'Введите текст...'){
        let editor = new MediumEditor('.editable',{
            toolbar: {
                /* These are the default options for the toolbar,
                 if nothing is passed this is what is used */
                allowMultiParagraphSelection: true,
                buttons: [
                    'bold',
                    'italic',
                    'h3',
                    'anchor',
                    'justifyLeft',
                    'justifyCenter',
                    'justifyRight',
                    'removeFormat'
                ],
                diffLeft: 0,
                diffTop: -10,
                firstButtonClass: 'medium-editor-button-first',
                lastButtonClass: 'medium-editor-button-last',
                standardizeSelectionStart: false,
                static: false,
                relativeContainer: null,
                /* options which only apply when static is true */
                align: 'center',
                sticky: false,
                updateOnEmptySelection: false
            },
            placeholder: {
                text: placeholder,
                hideOnClick: true
            },
            imageDragging: false
        });
    }
    getHtml(){
        return '';
    }
    //return Object for column
    getObject(item){
        return {};
    }
    static initFromHtml(){
        let _self = new BaseElement();
        _self.initMedium();
    }
}