import AirportTicketCalculator from "../../../src/behavioral/strategy/AirportTicketCalculator";
import BeachTicketCalculator from "../../../src/behavioral/strategy/BeachTicketCalculator";
import ParkingLot from "../../../src/behavioral/strategy/ParkingLot";
import ShoppingTicketCalculator from "../../../src/behavioral/strategy/ShoppingTicketCalculator";

test("Should to create a parking lot with 500 capacity", function () {
	const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
	expect(parkingLot.getEmptySpaces()).toBe(500);
});

test("Should to exit a car in the a parking lot", function () {
	const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
	parkingLot.checkin("AAA-9999", new Date("2021-03-01T10:00:00"));
	parkingLot.checkout("AAA-9999");
	expect(parkingLot.getEmptySpaces()).toBe(500);
});

test("Should to calculate the ticket in parking lot, in Beach is ever 20 dollars indepent the time", function () {
	const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
	parkingLot.checkin("AAA-9999", new Date("2021-03-01T10:00:00"));
	const ticket = parkingLot.calculateTicket("AAA-9999", new Date("2021-03-01T15:00:00"));
	parkingLot.checkout("AAA-9999");
	expect(ticket.price).toBe(20);
});

test("Should to calculate the ticket in parking lot, in shopping is 10 dollars the first hours and 3 hours the after is 10 dollars per hour", function () {
	const parkingLot = new ParkingLot(500, new ShoppingTicketCalculator());
	parkingLot.checkin("AAA-9999", new Date("2021-03-01T10:00:00"));
	const ticket = parkingLot.calculateTicket("AAA-9999", new Date("2021-03-01T15:00:00"));
	parkingLot.checkout("AAA-9999");
	expect(ticket.price).toBe(30);
});

test("Should to calculate the ticket parking lot in the airportis 10 dollars per hour", function () {
	const parkingLot = new ParkingLot(500, new AirportTicketCalculator());
	parkingLot.checkin("AAA-9999", new Date("2021-03-01T10:00:00"));
	const ticket = parkingLot.calculateTicket("AAA-9999", new Date("2021-03-01T15:00:00"));
	parkingLot.checkout("AAA-9999");
	expect(ticket.price).toBe(50);
});
