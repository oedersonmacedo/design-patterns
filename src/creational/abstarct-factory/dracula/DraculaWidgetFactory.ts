import Button from "../Button";
import Label from "../Label";
import WidgetFactory from "../WidgetFactory";
import DraculaButton from "./DraculaButton";
import DraculaLabel from "./DraculaLabel";

export default class DraculaWidgetFactory implements WidgetFactory {
    createLabel(): Label {
        return new DraculaLabel();
    }

    createButton(): Button {
        return new DraculaButton();
    }

}