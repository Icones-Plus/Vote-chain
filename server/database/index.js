const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
let connection = mongoose
  .connect("mongodb://localhost:27017/votedb", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to dataBase");
  })
  .catch((err) => {
    console.log(err);
  });

let userSchema = new mongoose.Schema({
  mobile: Number,
  mother_name: String,
  gender: String,
  id: Number,
  email: String,
  first_name: String,
  last_name: String,
  password: String,
  dateOfBirth: Date,
  voted: Boolean,
  password: String,
});

let cndidateSchema = mongoose.Schema({
  name: String,
  info: String,
});

let userModel = mongoose.model("newUser", userSchema);
let candidateModel = mongoose.model("newCandidate", cndidateSchema);

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports.userModel = userModel;
module.exports.candidateModel = candidateModel;
