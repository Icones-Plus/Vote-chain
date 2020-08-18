var jwt_decode = require("jwt-decode");
const { sign } = require("jsonwebtoken");
const { userModel, candidateModel } = require("../database/index");
// const {
//   voteForCandidate,
//   retrieveVotes,
//   retriveOne,
// } = require("../../blockchian");
exports.done = (request, response) => {
  var incomingCode = request.body.code;
  candidateId = request.body.id;
  var name = "";
  var jwt = request.headers.cookie;
  var { id } = jwt_decode(jwt);
  userModel.findOne({ id }).then((cand) => {
    console.log("im about to lose my mind,im runnung out of time", cand);
    if (cand.voted) {
      response.send({ succses: false, msg: "this user already voted" });
    } else {
      candidateModel.findOne({ id: candidateId }).then((res) => {
        name = res.name;
        sign(String(id), process.env.SECRET, (err, token) => {
          if (err) {
            response.status(401).json("Error: server error");
          } else {
            var originalCode = token.slice(29, 36);
            if (originalCode === incomingCode) {
              userModel
                .findOneAndUpdate({ id }, { voted: true })
                .then((result) => {
                  // voteForCandidate("d");
                  // retriveOne("a");
                  // retrieveVotes();
                  var result = { succses: true };
                  response.send(result);
                })
                .catch((err) => {
                  console.log("EEERRRROOOOORRRR", err);
                });
            } else {
              var result = { succses: false };
              response.send(result);
            }
          }
        });
      });
    }
  });
};
