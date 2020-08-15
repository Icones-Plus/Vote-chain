var { decode } = require("jsonwebtoken");
var model = require("../database/index");
exports.add = function (req, res) {
  var { candidate } = req.body;
  var newEntity = new model.candidateModel(candidate);
  newEntity
    .save()
    .then((result) => {
      res.send("success");
    })
    .catch((err) => {
      res.status(500).send("Error adding to database");
    });
};

exports.get = function (req, res) {
  var jwt = req.headers.cookie ? req.headers.cookie.split("=")[1] : undefined;
  var { admin } = decode(jwt);
  if (admin) {
    res.redirect("/admin");
  } else {
    res.status(401).send("<h1>come on youe not admin!</h1>");
  }
};
