const model = require("../../database/index.js");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

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

  function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }
  newPassword = generateHash(password);
  UserModel.findOneAndUpdate({ id: id }, { password: newPassword })
    .then((result) => {
      //token
      var payload = {
        id: result._id,
      };

      //token here

      var token = sign(payload, process.env.SECRET, (err, token) => {
        if (err) {
          console.log("Err: ", err);
        } else {
          res.cookie("jwt", token, { maxAge: 6048000000 });
          res.send("signup cookie set");
        }
      });
    })
    .catch((err) => {
      console.log(err, "Err");
    });
};
