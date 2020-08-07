var { verify } = require("jsonwebtoken");

const verfiyToken = (req, response, next) => {
  console.log("sss", req.headers.cookie);
  var jwt = req.headers.cookie.jwt
    ? req.headers.cookie.jwt.split("=")[1]
    : undefined;

  if (jwt) {
    verify(jwt, process.env.SECRET, (err, res) => {
      if (err) {
        response.status(401).send("some thing wrong in the token");
      } else {
        next();
      }
    });
  } else {
    response.status(401).send("you are not loged in");
  }
};

module.exports = verfiyToken;
