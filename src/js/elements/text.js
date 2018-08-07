class TextElement extends AbstractElement {
    constructor(id,column) {
        super();
        this.column = column;
        this.instance = null;
        this.id = id;
        this.type = 'text';
        this.content = null;
        this.editor = null;
    }

    addFromRaw(item){
        let id = this.column.getNewElementId();
        //  let content = (new Unescape).do(item.content);
          let content = Unescape(item.content);
        //let content = GridHelper.decodeHtml(item.content);
        let block = this.getHtmlBlock(id,content);
        let container = this.column.instance.querySelector('.grid__column--container');
        container.innerHTML = '';
        container.appendChild(block);
        this.instance = block;
        this.init();
    }
    getIcon() {
        return '<i class="fa fa-font"></i>';
    }

    getObject() {
        return {
            type:'text',
            id:this.id,
            content:this.instance.querySelector('.editable').innerHTML
        }
    }

    getTemplateId() {
        return 'textBlock';
    }
    getHtmlBlock(id,content = ''){
        let block = this.getTemplate(id,content);
        block = GridHelper.parseHTML(block);
        return block[0];
    }
    getTemplate(id,content = ''){
        return `<div class="grid__item" data-type="text" data-id="${id}">
            <div class="grid__item--text">
                <div class="editable">
                ${content}
                </div>
            </div>
        </div>`;
    }
    getTitle() {
        return "Текст";
    }

    init() {
        this.initMedium();
    }
    initMedium(placeholder = 'Введите текст...'){
        let selector = this.instance.querySelector('.editable');
        this.editor = new MediumEditor(selector,{
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
}