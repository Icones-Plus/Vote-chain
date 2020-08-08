var jwt_decode = require("jwt-decode");
const { sign } = require("jsonwebtoken");

exports.done = (request, response) => {
  var incomingCode = req.body;
  var jwt = req.headers.cookie;
  var { id } = jwt_decode(jwt);

  sign(id, process.env.SECRET, (err, token) => {
    if (err) {
      res.status(401).json("Error: server error");
    } else {
      var originalCode = token.slice(15, 21);
      if (incomingCode === originalCode) {
        var result = { msg: "Success", success: true };
        response.send(result);
      } else {
        var result = { msg: "fail", success: false };
        response.send(result);
      }
    }
  });
  response.redirect("/");
};
