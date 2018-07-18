class AbstractElement{

    /**
     * some init staff like enable MediumEditor and etc.
     */
    init(){
        throw new Error(`init() должен быть реализован`)
    }

    /**
     * init Buttons for item control
     */
    static initButtons(){
        throw new Error(`static initButtons() должен быть реализован`)
    }
    /**
     * should return object {}
     * @param item
     */
    getObject(item) {
        throw new Error(`getObject(item) должен быть реализован`)
    }

    /**
     * should return id of text/template
     */
    getTemplateId(){
        throw new Error(`getTemplateId должен быть реализован`)
    }
}
