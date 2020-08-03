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
  id: Number,
  mother_name: String,
  mobile: Number,
  email: String,
  gender: String,
  voted: Boolean,
  dateOfBirth: Date,
  password: String,
  first_name: String,
  last_name: String,
});

let cndidateSchema = mongoose.Schema({
  name: String,
  info: String,
});

let userModel = mongoose.model("newUser", userSchema);

let candidateModel = mongoose.model("newCandidate", cndidateSchema);

module.exports.userModel = userModel;
module.exports.candidateModel = candidateModel;
