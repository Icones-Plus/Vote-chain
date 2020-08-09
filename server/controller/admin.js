var model = require("../database/index");
exports.add = function (req, res) {
  console.log("hello>>>>>>>>>>>>>");
  var candidate = req.body;
  var newEntity = new model.candidateModel(candidate);
  newEntity.save(function (err) {
    if (err) throw new Error(err);
    else {
      res.redirect("/admin");
    }
  });
};
