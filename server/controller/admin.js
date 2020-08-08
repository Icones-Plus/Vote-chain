var model = require("../database/index");
exports.add = function (req, res) {
  var { cand } = req.body;
  console.log(cand);
  var newEntity = new model.candidateModel(cand);
  newEntity.save(function (err) {
    if (err) throw new Error(err);
    else {
      res.redirct("/admin");
    }
  });
};
