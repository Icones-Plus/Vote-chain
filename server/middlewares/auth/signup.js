const model = require("../../database/index.js");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const UserModel = model.userModel;
exports.signup = function (req, res) {
  const { body } = req;
  let { id, mobile, mother_name } = body;
  // const jwt = req.headers;
  // console.log('d', id);
  if (!id || !mobile || !mother_name) {
    return res.send({
      success: false,
      message: "id cannot be blank",
    });
  } else if (id && mother_name && mobile) {
    return res.send({
      success: true,
      message: "id here",
    });
  }
  //
  // if (!password) {
  // 	return res.send({
  // 		success: false,
  // 		message: 'password cannot be blank'
  // 	})
  // }

  // function generateHash(password) {
  //   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  // }
  // newPassword = generateHash(password);
  // UserModel.findOneAndUpdate(
  //   {
  //     id: id,
  //   },
  //   {
  //     password: newPassword,
  //   }
  // )
  //   .then((result) => {
  //     var payload = {
  //       id: result._id,
  //     };
  //     var token = sign(payload, process.env.SECRET, (err, token) => {
  //       if (err) {
  //         console.log("Err: ", err);
  //       } else {
  //         res.cookie("jwt", token, {
  //           maxAge: 6048000000,
  //         });
  //         res.send("signup cookie set");
  //       }
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err, "Err");
  //   });
};
