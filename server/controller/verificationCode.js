var TeleSignSDK = require("telesignsdk");
var bcrypt = require("bcryptjs");
var jwt_decode = require("jwt-decode");
// const model = require("../database");

// bcrypt.compare("ahmad", incoded, function (err, res) {
//   console.log("decoded.....", res);
// });
exports.verfiy = function (req, res) {
  console.log("\x1b[31m", ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  var { jwt } = req.headers.cookie;

  // console.log(jwt_decode(jwt));
  const rest_endpoint = "https://rest-api.telesign.com";
  const timeout = 10 * 1000;
  const saltRounds = 10;
  const message = "you code is: ";
  const messageType = "ARN";

  const client = new TeleSignSDK(
    process.env.customerId,
    process.env.apiKey,
    rest_endpoint,
    timeout
  );

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
  // client.sms.message(messageCallback, phoneNumber, message, messageType);

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(
      JSON.stringify({
        sub: "1234567890",
        name: "John Doe",
        iat: 1516239022,
      }),
      salt,
      function (err, hash) {
        if (err) {
          throw new Error(err);
        }

        // bcrypt.compare("111", hash, function (err, res) {
        //   if (err) {
        //     throw new Error(err);
        //   }
        //   console.log("decoded result ===========>", res);
        // });

        var code = hash.slice(hash.length - 5, hash.length);
        // client.sms.message(
        //   messageCallback,
        //   process.env.phoneNumber,
        //   message + code,
        //   messageType
        // );
      }
    );
  });
};
