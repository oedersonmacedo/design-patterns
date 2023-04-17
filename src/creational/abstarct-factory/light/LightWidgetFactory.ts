import Button from "../Button";
import Label from "../Label";
import WidgetFactory from "../WidgetFactory";
import LightButton from "./LightButton";
import LightLabel from "./LightLabel";

export default class LightWidgetFactory implements WidgetFactory {
    createLabel(): Label {
        return new LightLabel();
    }

    createButton(): Button {
        return new LightButton();
    }

}