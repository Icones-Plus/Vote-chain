var { verify } = require("jsonwebtoken");
const verfiyToken = (req, response, next) => {
  var jwt = req.headers.cookie ? req.headers.cookie.split("=")[1] : undefined;
  if (jwt) {
    verify(jwt, process.env.SECRET, (err, res) => {
      if (err) {
        response.status(401).send("<h1>Wrong token</h1>");
      } else {
        next();
      }
    });
  } else {
    response.status(401).send("<h1>You are not loged in</h1>");
  }
};

module.exports = verfiyToken;
