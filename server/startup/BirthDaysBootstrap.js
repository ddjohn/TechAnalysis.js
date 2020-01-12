console.log("Loading <BirthdaysBootstrap.js>...");

Meteor.startup(function () {
	if(Birthdays.find().count() === 0) {
		console.log("Bootstraping birthdays...");
	}
});
