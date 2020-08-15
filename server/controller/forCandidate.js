const model = require("../database/index");
const CandidateModel = model.candidateModel;

exports.forCandidate = (req, res) => {
  console.log("I am hereeeeeeeeee");
  const { id } = req.params;
  const { body } = req;
  const { slogan, campaign } = body;
  console.log(id, "idddddddddd");

  CandidateModel.findOneAndUpdate(
    { id: id },
    { slogan: slogan, campaign: campaign }
    // { campaign: campaign }
  )
    .then((result) => {
      res.send("updateeeeeeeeeeeeee");
      console.log(result, "hereeeeeeeeee");
    })
    .catch((err) => {
      res.send(err);
    });
};
