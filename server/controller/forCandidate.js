const model = require("../database/index");
const CandidateModel = model.candidateModel;

exports.forCandidate = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { slogan, campaign } = body;

  CandidateModel.findOneAndUpdate(
    { id: id },
    { slogan: slogan, campaign: campaign }
    // { campaign: campaign }
  )
    .then((result) => {
      res.send("updateeeeeeeeeeeeee");

    })
    .catch((err) => {
      res.send(err);
    });
};
