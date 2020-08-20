var { decode } = require("jsonwebtoken");
var model = require("../database/index");
const candidateModel = model.candidateModel;
const userModel = model.userModel;
exports.add = function (req, res) {
  var candidate = req.body;
  const { id, role } = candidate;
  console.log("entered", candidate);
  console.log(role, 'role');
  if(role === "candidate"){
    var newEntity = new candidateModel(candidate);
    newEntity
      .save()
      .then((result) => {
        res.send("addes sucess");
      })
      .catch((err) => {
        res.status(500).send("Error");
      });
  }

  if(role === "analyst"){
    var newAnalystEntity = new model.analystModel(candidate);
    newAnalystEntity
      .save()
      .then((result) => {
        console.log(result, 'result');
        res.send("addes sucess");
      })
      .catch((err) => {
        res.status(500).send("Error");
      });
  }
  // userModel
  //   .findOneAndUpdate({ id: id }, { role: role })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err, "errrrrrrrrrrrr ");
  //   });
  //
  // var newEntity = new candidateModel(candidate);
  // console.log(candidate, 'candidate');
  //
  // var analyst = req.body;
  // console.log(analyst, 'analyst');
  //
  // // const { id, role } = candidate;
  //
  // // const { id, role } = analyst;
  // // console.log("entered", candidate);
  //
  userModel.findOneAndUpdate({ id: id }, { role: role }).then(result => {
    console.log(result);
  }).catch(err => {
    console.log('Err', err);
  })
  //
  // var newEntity = new model.candidateModel(candidate);
  // newEntity
  //   .save()
  //   .then((result) => {
  //     res.send("addes sucess");
  //   })
  //   .catch((err) => {
  //     res.status(500).send("Error");
  //   });


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
