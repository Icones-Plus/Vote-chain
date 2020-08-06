const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
let connection = mongoose
  .connect("mongodb://localhost:27017/votedb", { useNewUrlParser: true })
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

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}
let userModel = mongoose.model("newUser", userSchema);


let cndidateSchema = mongoose.Schema({
  name: String,
  info: String,
});


let candidateModel = mongoose.model("newCandidate", cndidateSchema);

module.exports.userModel = userModel;
module.exports.candidateModel = candidateModel;
