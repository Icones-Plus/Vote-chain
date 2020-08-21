var jwt_decode = require("jwt-decode");
const { sign } = require("jsonwebtoken");
const { userModel, candidateModel } = require("../database/index");
// const {
//   voteForCandidate,
//   retrieveVotes,
//   retriveOne,
// } = require("../../blockchian");
// retrieveVotes().then((e) => {
//   e[4].then((w) => {
//     console.log(w);
//   });
// });
exports.done = (request, response) => {
  var incomingCode = request.body.code;
  candidateId = request.body.id;
  var jwt = request.headers.cookie;
  var { id } = jwt_decode(jwt);
  var name = "";
  userModel
    .findOne({ id })
    .then((result) => {
      if (result.voted) {
        response.send({
          succses: false,
          msg: "You cant vote more than once!!",
        });
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
                    // voteForCandidate(name);
                    // retriveOne("Coleman Luettgen");
                    // retrieveVotes();
                    var result = {
                      succses: true,
                      msg: "you voted succsessfully",
                    };
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
    })
    .catch((err) => {
      response.status(500).send({ succses: false, msg: "error on the server" });
    });
};
