'use strict';

var aws = require("aws-sdk");
var ses = new aws.SES({
  region: "eu-west-1"
});

exports.newuser = function(event, context) {
  console.log("Incoming: ", event);
  // var output = querystring.parse(event);

  var eParams = {
    Destination: {
      ToAddresses: ["ueberdiespree@gmail.com"]
    },
    Message: {
      Body: {
        Text: {
          Data: "bdlfdsf"
        }
      },
      Subject: {
        Data: "Ses Test Email"
      }
    },
    Source: "ueberdiespree@gmail.com"
  };

  console.log("===SENDING EMAIL===");
  var email = ses.sendEmail(eParams, function(err, data) {
    if (err) {
      console.log(err);
      context.fail(err);
    } else {
      console.log("===EMAIL SENT===");
      console.log("EMAIL CODE END");
      console.log("EMAIL: ", email);
      console.log(data);
      context.succeed(event);
    }
  });
};