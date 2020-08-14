const model = require("../database/index");
const CandidateModel = model.candidateModel;

exports.forCandidate = (req, res) => {
  const id = req.params.id;
  const { body } = req;
  const { slogan, campaign } = body;

  const slogn = slogan;
  const campagn = campaign;
  CandidateModel.findOneAndUpdate(
    { id: id },
    { slogan: slogn },
    { campaign: campagn }
  )
    .then((res) => {
      res.send("updateeeeeeeeeeeeee");
    })
    .catch((err) => {
      res.send(err);
    });
};
