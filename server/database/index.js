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

<<<<<<< HEAD
// userSchema.methods.generateHash = function(password){
//   console.log('here');
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
// }

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}
||||||| merged common ancestors
userSchema.methods.generateHash = function(password){
  console.log('here');
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}
=======
userSchema.methods.generateHash = function (password) {
  console.log("here");
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
>>>>>>> 163b3b1cb465ccd041e090395671cbdaf214fb9a

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

let cndidateSchema = mongoose.Schema({
  name: String,
  info: String,
});

<<<<<<< HEAD
// {"id":"9140259846","mother_name":"Erick","mobile":936734698,"email":"vviant11@altervista.org","gender":"Male","voted":false,"dateOfBirth":"11/13/2019","password":null,"first_name":"Vaughan","last_name":"Viant"},

||||||| merged common ancestors


=======
>>>>>>> 163b3b1cb465ccd041e090395671cbdaf214fb9a
let userModel = mongoose.model("newUser", userSchema);
<<<<<<< HEAD
// var newEntity = new userModel({"id":"5154778472","mother_name":"Alane","mobile":993111980,"email":"acoupland0@ameblo.jp","gender":"Female","voted":false,"dateOfBirth":"11/13/2019","password":null,"first_name":"Ammamaria","last_name":"Coupland"});
//  newEntity.save().then((res)=>{
//    console.log('dine');
//  }).catch((err)=>{
//    console.log('EEE',err);
//  })

// var newEntity = new userModel({"id":"9140259846","mother_name":"Erick","mobile":936734698,"email":"vviant11@altervista.org","gender":"Male","voted":false,"dateOfBirth":"11/13/2019","password":null,"first_name":"Vaughan","last_name":"Viant"});
//  newEntity.save().then((res)=>{
//    console.log('saved user: Vaughan');
//  }).catch((err)=>{
//    console.log('EEE',err);
//  })
||||||| merged common ancestors
// var newEntity = new userModel({"id":"5154778472","mother_name":"Alane","mobile":993111980,"email":"acoupland0@ameblo.jp","gender":"Female","voted":false,"dateOfBirth":"11/13/2019","password":null,"first_name":"Ammamaria","last_name":"Coupland"});
 // newEntity.save().then((res)=>{
 //   console.log('dine');
 // }).catch((err)=>{
 //   console.log('EEE',err);
 // })
=======
>>>>>>> 163b3b1cb465ccd041e090395671cbdaf214fb9a
let candidateModel = mongoose.model("newCandidate", cndidateSchema);

module.exports.userModel = userModel;
module.exports.candidateModel = candidateModel;
