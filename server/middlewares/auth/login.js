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
        firstName: result[0].first_name,
        admin: result[0].admin,
        role: result[0].role,
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
            role: payload.role,
          });
        }
      });
    })
    .catch((err) => {
      console.log("Err: ", err);
    });
};
