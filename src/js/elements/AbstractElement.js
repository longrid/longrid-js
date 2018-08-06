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
     * should prepare to create json
     */
    getObject() {
        throw new Error(`getCleanClone() должен быть реализован`)
    }

    /**
     * should return id of text/template
     */
    getTemplateId(){
        throw new Error(`getTemplateId должен быть реализован`)
    }
}
