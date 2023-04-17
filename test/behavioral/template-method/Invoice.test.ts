import Invoice from "../../../src/behavioral/template-method/Invoice";
import Beer from "../../../src/behavioral/template-method/items/Beer";
import Eletronic from "../../../src/behavioral/template-method/items/Eletronic";
import Water from "../../../src/behavioral/template-method/items/Water";
import Whisky from "../../../src/behavioral/template-method/items/Whisky";

test("should to create a invoice and to calcultate tax", function () {
	const invoice = new Invoice();
	invoice.addItem(new Beer("Heineken 300ml", 10));
	invoice.addItem(new Whisky("Jack Daniels", 100));
	invoice.addItem(new Water("500ml", 5));
	invoice.addItem(new Eletronic("TV", 1000));
	const taxes = invoice.getTaxes();
	expect(taxes).toBe(121);
});

test("should to create a invoice to calcultate without tax", function () {
	const invoice = new Invoice();
	invoice.addItem(new Water("500ml", 100));
	const taxes = invoice.getTaxes();
	expect(taxes).toBe(0);
});


test("should to generate error, because item water duplicate", function () {
	const invoice = new Invoice();
	invoice.addItem(new Beer("Heineken 300ml", 10));
	invoice.addItem(new Whisky("Jack Daniels", 100));
	invoice.addItem(new Water("500ml", 5));
	invoice.addItem(new Eletronic("TV", 1000));
	expect(()=> {
		invoice.addItem(new Water("500ml", 100));
	}).toThrow(new Error("Unable to insert a duplicate product!"));
})