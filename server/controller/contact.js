const model = require("../database/index");
const feedbackModel = model.feedbackModel;

exports.contact = (req, res) => {
  const feedback = new feedbackModel({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  
  feedback
    .save()
    .then((result) => {
      res.send("RECIEVED");
    })
    .catch((err) => {
      res.send("Not recieved");
    });
};

exports.contact1 = (req, res) => {
  feedbackModel
    .find({})
    .then((output) => {
      res.send(output);
    })
    .catch((error) => {
      res.send("Something went wrong");
    });
};

exports.delete = (req, res) => {
  feedbackModel
    .deleteOne({ message: req.body.message })
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
    });
};
