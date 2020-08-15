const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
mongoose.set("useFindAndModify", false);

let connection = mongoose
  .connect("mongodb://localhost:27017/votedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
  admin: Boolean,
});
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
let userModel = mongoose.model("newUser", userSchema);

let candidateSchema = mongoose.Schema({
  name: String,
  description: String,
  img: String,
  id: Number,
  slogan: String,
  campaign: String,
});

let feedbackSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// const newUser = new userModel({
//   id: "5773380633",
//   mother_name: "Lucias",
//   mobile: 655513768,
//   email: "obarracks1d@prnewswire.com",
//   gender: "Male",
//   voted: false,
//   dateOfBirth: "2/6/2020",
//   password: null,
//   first_name: "Olivier",
//   last_name: "Barracks",
//   admin: true,
// });

// newUser
//   .save()
//   .then((result) => {
//     console.log("saved", result);
//   })
//   .catch((err) => {
//     console.log(err, "err in save");
//   });

// userSchema.methods.comparePassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };

// let candidateSchema = mongoose.Schema({
//   name: String,
//   description: String,
//   img: String,
// });

let candidateModel = mongoose.model("Candidate", candidateSchema);

// let cand = new candidateModel({
//   name: "Karam",
//   description: "Cool guy",
//   img: "https://i.ibb.co/C73t72L/02.jpg",
// });

// cand
//   .save()
//   .then((success) => {
//     console.log("success", success);
//   })
//   .catch((err) => {
//     console.log("Error in saving cand", err);
//   });

let feedbackModel = mongoose.model("feedback", feedbackSchema);

module.exports.userModel = userModel;
module.exports.candidateModel = candidateModel;
module.exports.feedbackModel = feedbackModel;
