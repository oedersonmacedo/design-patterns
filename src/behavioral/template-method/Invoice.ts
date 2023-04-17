import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Invoice {
	items: Item[];

	constructor () {
		this.items = [];
	}

	addItem (item: Item) {
		const isSameItem = this.items.find(itemSearch => itemSearch.category===item.category && itemSearch.description===item.description)
		if  (isSameItem) throw new Error("Unable to insert a duplicate product!");
		
		this.items.push(item);
	}

	getTaxes() {
		let total = 0;
		for (const item of this.items) {
			if (item instanceof TaxItem) {
				total += item.calculateTax();
			}
		}
		return total;
	}
}