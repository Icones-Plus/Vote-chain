const model = require('../../database/index.js');
const bcrypt = require('bcrypt');

const UserModel = model.userModel;
exports.signup = function(req, res){
  const { body } = req;

  let { id,
        password
      } = body;

  if(!password){
    return res.send({
    success: false,
    message:  'password cannot be blank'
    })
  }

  if(!id){
    return res.send({
    success: false,
    message:  'id cannot be blank'
    })
  }

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
