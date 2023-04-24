import InputText from "../../../src/behavioral/observer/InputText";
import Label from "../../../src/behavioral/observer/Label";

test("Should to create a component", function () {
	const inputText = new InputText("country");
	const label = new Label("Country: {{ country }}");
	inputText.setValue("Brazil");
	label.setValue("country", "Brazil");
	expect(label.getValue()).toBe("Country: Brazil");
});

test("Should to create a component reactive", function () {
	const inputText = new InputText("country");
	const label = new Label("País: {{country}}");
	inputText.register(label);
	inputText.setValue("Brasil");
	expect(label.getValue()).toBe("País: Brasil");
});