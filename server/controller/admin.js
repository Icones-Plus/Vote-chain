var { decode } = require("jsonwebtoken");
var model = require("../database/index");
const candidateModel = model.candidateModel;
const userModel = model.userModel;
exports.add = function (req, res) {
  var candidate = req.body;
  const { id, role } = candidate;
  console.log("entered", candidate);
  userModel
    .findOneAndUpdate({ id: id }, { role: role })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err, "errrrrrrrrrrrr ");
    });

  var newEntity = new candidateModel(candidate);
  newEntity
    .save()
    .then((result) => {
      res.send("addes sucess");
    })
    .catch((err) => {
      res.status(500).send("Error");
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
