const mongoose = require("mongoose");
let connection = mongoose
  .connect("mongodb://localhost:27017/voting", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to dataBase");
  })
  .catch((err) => {
    console.log(err);
  });

let schema = mongoose.Schema({
  mobile: Number,
  motherName: String,
  id: Number,
  Email: String,
  password: String,
  data: String,
  voted: String,
});

let votingModel = mongoose.model("newVoting", schema);

module.exports.votingModel = votingModel;
