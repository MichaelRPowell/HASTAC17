"use strict";
var Alexa = require("alexa-sdk");

var handlers = {

  //We will be editing these handlers.
  "LaunchRequest": function () {

  },
  //You can edit the name of this intent to match the name of your intent.
  "HelloHASTACIntent": function () {

  }

}

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
}