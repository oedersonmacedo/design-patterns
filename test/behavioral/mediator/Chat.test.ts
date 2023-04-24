import Channel from "../../../src/behavioral/mediator/Channel";
import Participant from "../../../src/behavioral/mediator/Participant";

test("Should to create a chat when participants directly", function () {
	const participantJoy = new Participant("Joy");
	const participantEd = new Participant("Ed");
	const participantAli = new Participant("Ali");
	participantEd.receive(participantJoy, "hello");
	participantAli.receive(participantJoy, "hello");
	expect(participantEd.messages[0]).toBe("Joy: hello");
	expect(participantAli.messages[0]).toBe("Joy: hello");
});

test("Should to create a chat when participants no directly", function () {
	const participantJoy = new Participant("Joy");
	const participantEd = new Participant("Ed");
	const participantAli = new Participant("Ali");
	const channel = new Channel();
	channel.register(participantJoy);
	channel.register(participantEd);
	channel.register(participantAli);
	channel.send(participantJoy, "hello");
	expect(participantEd.messages[0]).toBe("Joy: hello");
	expect(participantAli.messages[0]).toBe("Joy: hello");
});
