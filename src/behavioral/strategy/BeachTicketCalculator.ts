import TicketCalculator from "./TicketCalculator";

export default class BeachTicketCalculator implements TicketCalculator {
	COST: number = 20;

	calculate(checkinDate: Date, checkoutDate: Date): number {
		return this.COST;
	}
}