import Account from "../../../src/behavioral/command/Account";
import CreditCommand from "../../../src/behavioral/command/CreditCommand";
import DebitCommand from "../../../src/behavioral/command/DebitCommand";

test("Should to create an account", function () {
	const account = new Account("0011239");
	const balance = account.getBalance();
	expect(balance).toBe(0);
});

test("Should to credit an account", function () {
	const account = new Account("0011239");
	account.credit(100);
	const balance = account.getBalance();
	expect(balance).toBe(100);
});

test("Should to debit an account", function () {
	const account = new Account("0011239");
	account.credit(100);
	account.debit(50);
	const balance = account.getBalance();
	expect(balance).toBe(50);
});

test("Should to credit an account using a command", function () {
	const account = new Account("0011239");
	const creditCommand = new CreditCommand(account, 100);
	creditCommand.execute();
	const balance = account.getBalance();
	expect(balance).toBe(100);
});

test("Should to debit an account using a command", function () {
	const account = new Account("0011239");
	const creditCommand = new CreditCommand(account, 100);
	creditCommand.execute();
	const debitCommand = new DebitCommand(account, 50);
	debitCommand.execute();
	const balance = account.getBalance();
	expect(balance).toBe(50);
});
