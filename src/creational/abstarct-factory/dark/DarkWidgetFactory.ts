import Button from "../Button";
import Label from "../Label";
import WidgetFactory from "../WidgetFactory";
import DarkButton from "./DarkButton";
import DarkLabel from "./DarkLabel";

export default class DarkWidgetFactory implements WidgetFactory {
    createLabel(): Label {
        return new DarkLabel();
    }

    createButton(): Button {
        return new DarkButton();
    }

}