const mongoose = require("mongoose");
let connection = mongoose
  .connect("mongodb://localhost:27017/voting", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to dataBase");
  })
  .catch((err) => {
    console.log(err);
  });

let userSchema = mongoose.Schema({
  mobile: Number,
  motherName: String,
  id: Number,
  Email: String,
  password: String,
  dateOfBirth: Number,
  voted: Boolean,
});

let cndidateSchema = mongoose.Schema({
  name: String,
  info: String,
});

let userModel = mongoose.model("newUser", userSchema);

let candidateModel = mongoose.model("newCandidate", cndidateSchema);

module.exports.userModel = userModel;
module.exports.candidateModel = candidateModel;
