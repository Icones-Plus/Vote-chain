const model = require("../database/index");
const candidateModel = model.candidateModel;

exports.getCands = (req, res) => {
  candidateModel.find({}).then((success) => {
    console.log("Here are your candidates", success);
    res.status(200).send(success);
  });
};
