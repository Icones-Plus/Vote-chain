const model = require("../../database/index.js");
const bcrypt = require("bcrypt");

const { sign } = require('jsonwebtoken');

const UserModel = model.userModel;
exports.signup = function (req, res) {
  const { body } = req;

  let { id, password } = body;

  if (!password) {
    return res.send({
      success: false,
      message: "password cannot be blank",
    });
  }

  if (!id) {
    return res.send({
      success: false,
      message: "id cannot be blank",
    });
  }
<<<<<<< HEAD

    function generateHash(password){
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
        }
        newPassword = generateHash(password);
  UserModel.findOneAndUpdate({ id: id }, {password:newPassword}).then(result => {
//token
  var payload = {
    id: result._id
  }

  var token = sign(payload, process.env.SECRET, (err, token) => {
    if(err){
      console.log('Err: ', err);
    } else {
      console.log(token, 'token');
      return res.send({
        success: true,
        message: 'Updated password successfully',
        token: token
      })
    }
  })


  }).catch(err => {
    console.log(err, 'Err');
  })
}
||||||| merged common ancestors

  // UserModel.find({ id: id }).then(user => {
  //     console.log(user.password, 'userpassword');
  //     console.log(user, "userHere")
  //     if(user.password === undefined ){
  //       // const newUser = new UserModel();
  //       // user.password = user.password.generateHash(password);
  //       function generateHash(password){
  //         return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
  //       }
  //       user.password = generateHash(password);
  //       UserModel.update({ password: user.password }).then((result)=>{
  //         console.log(result, 'result');
  //         console.log(user.password, 'user.password');
  //         console.log('here uppppppp');
  //         return res.send({
  //           success: true,
  //           message: 'added password successfully'
  //         })
  //       }).catch(err => {
  //         console.log('Err: ', err);
  //       })
  //     }
  // })
    function generateHash(password){
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
        }
        newPassword = generateHash(password);
  UserModel.findOneAndUpdate({ id: id }, {password:newPassword}).then(result => {
    return res.send({
      success: true,
      message: 'Updated password successfully'

    })
  }).catch(err => {
    console.log(err, 'Err');
  })
}
=======
  function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }
  newPassword = generateHash(password);
  UserModel.findOneAndUpdate({ id: id }, { password: newPassword })
    .then((result) => {
      return res.send({
        success: true,
        message: "Updated password successfully",
      });
    })
    .catch((err) => {
      console.log(err, "Err");
    });
};
>>>>>>> 205191a84d681d5001db6b58484035ef97b48171
