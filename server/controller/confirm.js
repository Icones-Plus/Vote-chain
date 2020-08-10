var jwt_decode = require("jwt-decode");
const { sign } = require("jsonwebtoken");
const userModel = require("../database/index");
exports.done = (request, response) => {
  var incomingCode = request.body.code;
  var jwt = request.headers.cookie;
  var { id } = jwt_decode(jwt);
  sign(id, process.env.SECRET, (err, token) => {
    if (err) {
      res.status(401).json("Error: server error");
    } else {
      var originalCode = token.slice(29, 36);
      console.log(";;;;;;;", incomingCode, originalCode);
      if (originalCode === incomingCode) {
        UserModel.findOneAndUpdate({ id: id }, { voted: true }).then(
          (result) => {
            var result = { succses: true };
            response.send(result);
          }
        );
      } else {
        var result = { succses: false };
        response.send(result);
      }
    }
  });
};
