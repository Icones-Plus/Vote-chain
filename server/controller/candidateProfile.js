const model = require("../database/index");
const candidateModel = model.candidateModel;

exports.candidateProfile = (req, res) => {
  const { id } = req.params;

  candidateModel
    .find({ id: id })
    .then((result) => {
      res.send([result[0].slogan, result[0].campaign]);
      console.log(result, "result is here");
    })
    .catch((err) => {
      console.log(err, "errrr");
    });
};
