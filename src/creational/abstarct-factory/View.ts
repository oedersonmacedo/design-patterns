import Button from "./Button";
import Label from "./Label";
import WidgetFactory from "./WidgetFactory";

export default class View {
    label: Label;
    button: Button;

    constructor(widgetFacotry: WidgetFactory){
        this.label = widgetFacotry.createLabel();
        this.button = widgetFacotry.createButton();
    }
}