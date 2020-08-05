const model = require("../../database/index.js");
const bcrypt = require("bcrypt");

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
      return res.send({
        success: true,
        message: "Updated password successfully",
      });
    })
    .catch((err) => {
      console.log(err, "Err");
    });
};
