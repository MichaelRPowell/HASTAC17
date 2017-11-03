"use strict";
var Alexa = require("alexa-sdk");

var handlers = {
  
  "LaunchRequest": function () {
	//We will update this to prompt the user for a name.
	this.response.speak("Welcome to the HASTAC Conference skill. What is your name?").listen("What should I call you?");
    this.emit(':responseReady');
  },
  "HelloHASTACIntent": function () {
	this.response.speak("Hello there.");
    this.emit(':responseReady');
  },
  "LocationHASTACIntent": function () {
	if (this.event.request.intent.slots.location.value == "cafeteria"){
		this.response.speak("Knightros is located behind the CFE Arena. You can find the arena at H3 or G4 on the maps around campus.");
		this.emit(':responseReady');
	}
	else if (this.event.request.intent.slots.location.value == "student union"){
		this.response.speak("The student union is located at the middle of campus.");
		this.emit(':responseReady');
	}
	else {
		this.response.speak("What are you trying to find?").listen("Sorry, what are you looking for?");
		this.emit(':responseReady');
	}
  },

  //New function for "my name is {name}" and "call me {name}"
  "HASTACUserName": function () {
    this.attributes['username'] = this.event.request.intent.slots.name.value;
	var username = this.attributes['username'];
    this.response.speak('Hello ' + username + '!'); 
    this.emit(':responseReady');
  },

  
  'AMAZON.StopIntent': function() {
      this.response.speak('Goodbye!');
      this.emit(':responseReady');
  },
  'AMAZON.CancelIntent': function() {
      this.response.speak('Goodbye!');
      this.emit(':responseReady');
  },
  'SessionEndedRequest': function() {
    	this.emit(':saveState', true);
  }
  

}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
	//Add the database here, and change the permissions for your role.
	alexa.dynamoDBTableName = 'HASTACConference';
    alexa.registerHandlers(handlers);
    alexa.execute();
}