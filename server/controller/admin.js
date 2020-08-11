var { decode } = require("jsonwebtoken");
var model = require("../database/index");
exports.add = function (req, res) {
  var candidate = req.body;
  var newEntity = new model.candidateModel(candidate);
  newEntity.save(function (err) {
    if (err) throw new Error(err);
    else {
      res.redirect("/admin");
    }
  });
};

exports.get = function (req, res) {
  var jwt = req.headers.cookie ? req.headers.cookie.split("=")[1] : undefined;
  var { admin } = decode(jwt);
  console.log("sssss0", admin);
  if (admin) {
    res.redirect("/admin");
  } else {
    res.status(401).send("<h1>come on youe not admin!</h1>");
  }
};
