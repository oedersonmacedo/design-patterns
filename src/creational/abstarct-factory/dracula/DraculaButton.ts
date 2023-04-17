import Button from "../Button";

export default class DraculaButton implements Button {
    color: string;
	backgroundColor: string;

    constructor () {
		this.color = "white";
		this.backgroundColor = "#282a36";
	}
}