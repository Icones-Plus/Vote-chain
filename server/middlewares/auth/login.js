const model = require("../../database/index");
const UserModel = model.userModel;
const UserSessionModel = model.UserSessionModel;
const { sign } = require("jsonwebtoken");
exports.login = function (req, res) {
  let { body } = req;
  let { id, password } = body;

	if (!id && !password) {
		return res.send({
			success: false,
			message: 'can not be blank'
		})
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
      console.log(result, "result");
      let user = result[0];
      if (!user.comparePassword(password)) {
        return res.send({
          success: false,
          message: "Error: password is incorrect",
        });
      }
      var payload = {
        id: result.id,
        email: result.email,
        password: result.password,
      };
      sign(payload, process.env.SECRET, (err, token) => {
        if (err) {
          res.status(401).json("Error: server error");
        } else {
          res.cookie("jwt", token, {
            maxAge: 6048000000,
          });
          res.send("login cookie set");
        }
      });
    })
    .catch((err) => {
      console.log("Err: ", err);
    });
};
