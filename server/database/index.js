const mongoose = require("mongoose");
require("mongoose-type-url");
const bcrypt = require("bcrypt");

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
  admin: Boolean,
});
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
let userModel = mongoose.model("newUser", userSchema);
const newUser = new userModel({
  id: "5773380633",
  mother_name: "Lucias",
  mobile: 655513768,
  email: "obarracks1d@prnewswire.com",
  gender: "Male",
  voted: false,
  dateOfBirth: "2/6/2020",
  password: null,
  first_name: "Olivier",
  last_name: "Barracks",
});
// newUser.save().then(result => {
//   console.log('saved', result);
// }).catch(err => {
//   console.log(err, 'Err');
// })

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

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

let candidateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
let candidateModel = mongoose.model("Candidate", candidateSchema);

// let cand = new candidateModel({
//   name: "Karam",
//   description: "Cool guy",
//   img: "https://i.ibb.co/C73t72L/02.jpg"
// })
//
// cand.save()
//   .then(success => {
//   console.log("success", success)
//   })
//   .catch(err => {
//   console.log("Error in saving cand", err)
// })

let feedbackSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

let feedbackModel = mongoose.model("feedback", feedbackSchema);

let analystSchema = mongoose.Schema({
  first_Name: {
    type: String,
  },
  last_Name: {
    type: String,
  },
  picture: {
    type: String,
  },
  cv: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  bio: {
    type: String,
  },
  articles: {
    type: Array,
  },
  id: {
    type: Number,
  },
});

let analystModel = mongoose.model("analyst", analystSchema);

module.exports.userModel = userModel;
module.exports.candidateModel = candidateModel;
module.exports.feedbackModel = feedbackModel;
module.exports.analystModel = analystModel;
