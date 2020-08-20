const model = require("../database/index");
const candidateModel = model.candidateModel;

exports.candidateProfile = (req, res) => {
  const { id } = req.params;
  console.log("hiii in mongooos");
  candidateModel
    .find({ id: id })
    .then((result) => {
      res.send([result[0].slogan, result[0].campaign, result[0].img]);
      console.log(result, "result is here");
    })
    .catch((err) => {
      console.log(err, "errrr");
    });
};
