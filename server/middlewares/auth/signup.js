const model = require("../../database/index.js");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

const UserModel = model.userModel;
exports.signup = function (req, res) {
  const { body } = req;
  let {
    id,
    first_name,
    last_name,
    email,
    mobile,
    dateOfBirth,
    gender,
    mother_name,
  } = body;
  // const jwt = req.headers;
  // console.log('d', id);
  if (!id || !mobile || !mother_name) {
    return res.send({
      success: false,
      message: "id cannot be blank",
    });
  }

  if (!first_name) {
    return res.send({
      success: false,
      message: "first name cannot be blank",
    });
  }

  if (!last_name) {
    return res.send({
      success: false,
      message: "last name cannot be blank",
    });
  }

  if (!email) {
    return res.send({
      success: false,
      message: "email cannot be blank",
    });
  }

  if (!mobile) {
    return res.send({
      success: false,
      message: "mobile cannot be blank",
    });
  }

  if (!dateOfBirth) {
    return res.send({
      success: false,
      message: "date Of birth cannot be blank",
    });
  }

  if (!gender) {
    return res.send({
      success: false,
      message: "gender cannot be blank",
    });
  }

  if (!mother_name) {
    return res.send({
      success: false,
      message: "mother name cannot be blank",
    });
  } else if (
    id &&
    first_name &&
    last_name &&
    dateOfBirth &&
    email &&
    gender &&
    mother_name
  ) {
    UserModel.find({ id: id })
      .then((result) => {
        if (result.length === 0) {
          return res.send({
            success: false,
            message: "user does not exist",
          });
        } else {
          UserModel.find({ first_name: first_name })
            .then((result) => {
              if (result.length === 0) {
                return res.send({
                  success: false,
                  message: "first name does not match with id",
                });
              } else {
                UserModel.find({ first_name: first_name, last_name: last_name })
                  .then((result) => {
                    if (result.length === 0) {
                      return res.send({
                        success: false,
                        message: "last name does not match with id",
                      });
                    } else {
                      UserModel.find({
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                      })
                        .then((result) => {
                          if (result.length === 0) {
                            return res.send({
                              success: false,
                              message: "email does not match with id",
                            });
                          } else {
                            UserModel.find({
                              first_name: first_name,
                              last_name: last_name,
                              email: email,
                              mobile: mobile,
                            })
                              .then((result) => {
                                if (result.length === 0) {
                                  return res.send({
                                    success: false,
                                    message: "mobile does not match with id",
                                  });
                                } else {
                                  UserModel.find({
                                    first_name: first_name,
                                    last_name: last_name,
                                    email: email,
                                    mobile: mobile,
                                  })
                                    .then((result) => {
                                      // console.log(result[0].dateOfBirth, 'dateOfBirth');
                                      // if(result.length === 0){
                                      //   return res.send({
                                      //     success: false,
                                      //     message: 'dateOfBirth does not match with id'
                                      //   })
                                      // console.log(dateOfBirth);
                                      // console.log(result[0].dateOfBirth.toISOString().substring(0,10), 'dateeeeeeyasm');
                                      if (
                                        dateOfBirth !==
                                        result[0].dateOfBirth
                                          .toISOString()
                                          .substring(0, 10)
                                      ) {
                                        return res.send({
                                          success: false,
                                          message:
                                            "date of birth does not match with id",
                                        });
                                      } else {
                                        UserModel.find({
                                          first_name: first_name,
                                          last_name: last_name,
                                          email: email,
                                          mobile: mobile,
                                          gender: gender,
                                        })
                                          .then((result) => {
                                            if (result.length === 0) {
                                              return res.send({
                                                success: false,
                                                message:
                                                  "gender does not match with id",
                                              });
                                            } else {
                                              UserModel.find({
                                                first_name: first_name,
                                                last_name: last_name,
                                                email: email,
                                                mobile: mobile,
                                                gender: gender,
                                                mother_name: mother_name,
                                              })
                                                .then((result) => {
                                                  if (result.length === 0) {
                                                    return res.send({
                                                      success: false,
                                                      message:
                                                        "mother name does not match with id",
                                                    });
                                                  } else {
                                                    return res.send({
                                                      success: true,
                                                      message:
                                                        "you successfully signed up. set a password to continue",
                                                    });
                                                  }
                                                })
                                                .catch((err) => {
                                                  console.log(
                                                    err,
                                                    "err in finding user in db"
                                                  );
                                                });
                                            }
                                          })
                                          .catch((err) => {
                                            console.log(
                                              err,
                                              "err in finding user in db"
                                            );
                                          });
                                      }
                                    })
                                    .catch((err) => {
                                      console.log(
                                        err,
                                        "err in finding user in db"
                                      );
                                    });
                                }
                              })
                              .catch((err) => {
                                console.log(err, "err in finding user in db");
                              });
                          }
                        })
                        .catch((err) => {
                          console.log(err, "err in finding user in db");
                        });
                    }
                  })
                  .catch((err) => {
                    console.log(err, "err in finding user in db");
                  });
              }
            })
            .catch((err) => {
              console.log(err, "err in finding user in db");
            });
        }
      })
      .catch((err) => {
        console.log(err, "err in finding user in db");
      });

    // return res.send({
    //   success: true,
    //   message: "login success",
    // });
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
