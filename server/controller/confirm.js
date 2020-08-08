var jwt_decode = require("jwt-decode");
const { sign } = require("jsonwebtoken");
const usermodel = require("../database/index");
exports.done = (request, response) => {
  console.log(request.body);
  var incomingCode = request.body.code;
  console.log("heloo  frim  thr other side", incomingCode);
  // var jwt = request.headers.cookie;
  // var { id } = jwt_decode(jwt);

  sign("123", process.env.SECRET, (err, token) => {
    if (err) {
      res.status(401).json("Error: server error");
    } else {
      var originalCode = token.slice(29, 36);
      if (originalCode === incomingCode) {
        var result = { succses: true };
        response.send(result);
      } else {
        var result = { succses: false };
        response.send(result);
      }
    }
  });
};
