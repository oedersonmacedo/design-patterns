import View from "../../src/creational/abstarct-factory/View";
import DarkWidgetFactory from "../../src/creational/abstarct-factory/dark/DarkWidgetFactory";
import DraculaWidgetFactory from "../../src/creational/abstarct-factory/dracula/DraculaWidgetFactory";
import LightWidgetFactory from "../../src/creational/abstarct-factory/light/LightWidgetFactory";

test("Should to create a graphic interface with the theme Light", function() {
    const view = new View(new LightWidgetFactory());
	expect(view.label.color).toBe("black");
	expect(view.button.color).toBe("white");
	expect(view.button.backgroundColor).toBe("blue");
})

test("Should to create a graphic interface with the theme dark", function() {
    const view = new View(new DarkWidgetFactory());
	expect(view.label.color).toBe("white");
	expect(view.button.color).toBe("white");
	expect(view.button.backgroundColor).toBe("black");
})

test("Should to create a graphic interface with the theme dracula", function() {
    const view = new View(new DraculaWidgetFactory());
	expect(view.label.color).toBe("#44475a");
	expect(view.button.color).toBe("white");
	expect(view.button.backgroundColor).toBe("#282a36");
})