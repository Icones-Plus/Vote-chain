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
  res.redirect("/admin");
};
