var TeleSignSDK = require("telesignsdk");
var bcrypt = require("bcryptjs");
var jwt_decode = require("jwt-decode");
const { sign } = require("jsonwebtoken");

// const model = require("../database");

// bcrypt.compare("ahmad", incoded, function (err, res) {
//   console.log("decoded.....", res);
// });
exports.verfiy = function (req, res) {
  var jwt = req.headers.cookie.split("=")[1];
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
        `Messaging response for messaging phone number: ${process.env.phoneNumber}` +
          ` => code: ${responseBody["status"]["code"]}` +
          `, description: ${responseBody["status"]["des  cription"]}`
      );
    } else {
      console.error("Unable to send message. " + error);
    }
  }
  var { id } = jwt_decode(jwt);
  sign(String(id), process.env.SECRET, (err, token) => {
    if (err) {
      res.status(401).json("Error: server error");
    } else {
      var code = token.slice(29, 36);
       console.log("My generated code ...........", code);
      client.sms.message(
        messageCallback,
        process.env.phoneNumber,
        message + code,
        messageType
      );
      res.send("message sent");
    }
  });
  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   bcrypt.hash(id, salt, function (err, hash) {
  //     if (err) {
  //       throw new Error(err);
  //     }
  //     var dun = (str) => {
  //       var hash = "";
  //       for (let i = 0; i < array.length; i++) {
  //         hash + (charCodeAt(i) % 5);
  //       }
  //     };
  //     // bcrypt.compare("111", hash, function (err, res) {
  //     //   if (err) {
  //     //     throw new Error(err);
  //     //   }
  //     //   console.log("decoded result ===========>", res);
  //     // });

  //     var code = hash.split(".");
  //     console.log("this is it================================>", code);
  // client.sms.message(
  //   messageCallback,
  //   process.env.phoneNumber,
  //   message + code,
  //   messageType
  // );
  //     res.end();
  //   });
  // });
};
