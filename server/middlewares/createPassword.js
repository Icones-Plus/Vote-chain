const model = require("../database/index");
const bcrypt = require("bcrypt");
// const UserModel = model.UserModel;

const UserModel = model.userModel;
const { sign } = require("jsonwebtoken");

exports.createPassword = function (req, res) {
  let { body } = req;
  const { params } = req;
  const { id } = params;
  let { password, password2 } = body;
  if (password !== password2) {
    return res.send({
      success: false,
      message: "passwords do not match",
    });
  } else {
    function generateHash(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }
    newPassword = generateHash(password);
    UserModel.findOneAndUpdate(
      {
        id: id,
      },
      {
        password: newPassword,
      }
    )
      .then((result) => {
        console.log(result);
        var payload = {
          id: result.id,
          firstName: result.first_name,
          admin: result.admin,
          role: result.role,
          img_url: result.img_url
        };
        var token = sign(payload, process.env.SECRET, (err, token) => {
          if (err) {
            console.log("Err: ", err);
          } else {
            res.cookie("jwt", token, {
              maxAge: 6048000000,
            });
            res.send({
              message: "signup cookie set",
              role: payload.role
            });
          }
        });
      })
      .catch((err) => {
        console.log(err, "Err");
      });
  }
};
