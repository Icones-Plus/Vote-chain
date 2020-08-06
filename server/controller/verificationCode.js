var TeleSignSDK = require("telesignsdk");
var bcrypt = require("bcryptjs");
const model = require("../database");

// bcrypt.compare("ahmad", incoded, function (err, res) {
//   console.log("decoded.....", res);
// });
exports.verfiy = function (req, res) {
  var { id } = req.headers.cookie.token;
  const customerId = "120B17B4-DDCA-4D5F-AF61-1D3257D02FD4";
  const apiKey =
    "Evu3o78MyT2zXDwH6c0PcCL7Zdn4hqQGIJACK1URC/6MpIUSlVNWagkJGikd1XO8o/0Tr7tO2aXw9kwbDRtOEA==";
  const rest_endpoint = "https://rest-api.telesign.com";
  const timeout = 10 * 1000;

  const client = new TeleSignSDK(customerId, apiKey, rest_endpoint, timeout);

  const phoneNumber = "970599089478";
  const message = "you code is: ";
  const messageType = "ARN";

  console.log("## MessagingClient.message ##");

  function messageCallback(error, responseBody) {
    if (error === null) {
      console.log(
        `Messaging response for messaging phone number: ${phoneNumber}` +
          ` => code: ${responseBody["status"]["code"]}` +
          `, description: ${responseBody["status"]["des   cription"]}`
      );
    } else {
      console.error("Unable to send message. " + error);
    }
  }
  client.sms.message(messageCallback, phoneNumber, message, messageType);

  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(id, salt, function (err, hash) {
      var code = hash.slice(hash.length - 5, hash.length);
      client.sms.message(
        messageCallback,
        phoneNumber,
        message + code,
        messageType
      );
    });
  });
};
