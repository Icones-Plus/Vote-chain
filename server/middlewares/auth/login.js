const model = require("../../database/index");
const UserModel = model.userModel;
const UserSessionModel = model.UserSessionModel;
const { sign, decode } = require("jsonwebtoken");
exports.login = function (req, res) {
  let { body } = req;
  let { id, password } = body;

  if (!id && !password) {
    return res.status("401");
  }

  // if (!password) {
  // 	return res.send({
  // 		success: false,
  // 		message: 'password cannot be blank'
  // 	})
  // }

  UserModel.find({
    id: id,
  })
    .then((result) => {
      let user = result[0];
      if (!user.comparePassword(password)) {
        return res.send({
          success: false,
          message: "Error: password is incorrect",
        });
      }
      var payload = {
        id: result[0].id,
        email: result[0].email,
        password: result[0].password,
      };
      sign(payload, process.env.SECRET, (err, token) => {
        if (err) {
          res.status(401).json("Error: server error");
        } else {
          res.cookie("jwt", token, {
            maxAge: 6048000000,
          });
          res.send({
            success: true,
            message: "done",
          });
        }
      });
    })
    .catch((err) => {
      console.log("Err: ", err);
    });
};
