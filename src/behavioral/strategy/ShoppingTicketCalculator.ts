import TicketCalculator from "./TicketCalculator";

export default class ShoppingTicketCalculator implements TicketCalculator {
	COSTuPERuHOUR: number = 10;
	COSTuAFTERuTRHEEuFIRSTuHOUR = 10;

	calculate(checkinDate: Date, checkoutDate: Date): number {
		const period = (checkoutDate.getTime() - checkinDate.getTime())/(1000*60*60);
		const extra = period - 3;
		let price = this.COSTuPERuHOUR;
		if (extra > 0) {
			price += extra * this.COSTuAFTERuTRHEEuFIRSTuHOUR;
		}
		return price;
	}
}
