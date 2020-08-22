const { retrieveVotes } = require("../../blockchian");

exports.getResult = (req, res) => {
  retrieveVotes()
    .then((e) => {
      e[4].then((result) => {
        res.status(200).send(result);
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
