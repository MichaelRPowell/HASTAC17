"use strict";
var Alexa = require("alexa-sdk");

var handlers = {
  
  "LaunchRequest": function () {
	this.response.speak("Welcome to HASTAC Conference skill.");
    this.emit(':responseReady');
  },
  "HelloHASTACIntent": function () {
	this.response.speak("Hello there.");
    this.emit(':responseReady');
  },
  //We are going to modify this code to let the user choose what they are looking for.
  "LocationHASTACIntent": function () {
	this.response.speak("Knightros is located behind the CFE Arena. You can find the arena at H3 or G4 on the maps around campus.");
    this.emit(':responseReady');
  }

}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
}