const router = require("express").Router();
const signup = require("../middlewares/auth/signup.js");
const login = require("../middlewares/auth/login.js");
const verfication = require("./verificationCode");
const auth = require("../middlewares/auth/auth");
const confirm = require("./confirm");
const admin = require("./admin");
// const { sign } = require("jsonwebtoken");
// var jwt_decode = require("jwt-decode");

router.post("/signup", signup.signup);
router.post("/login", login.login);
router.post("/confirm", confirm.done);
router.post("/login", login.login);
router.post("/admin", admin.add);
// router.use((req, response, next) => {
//   req.headers.cookie = {
//     jwt:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMCIsImlhdCI6MTUxNjIzOTAyMn0.RnVBg7o-biy687HZSIU6aQ8EVqiObH-CS2HlrjlT9OI ",
//   };
//   var payload = {
//     id: 12,
//   };

//   sign(payload, process.env.SECRET, (err, token) => {
//     if (err) {
//       res.status(401).json("Error: server error");
//     } else {
//       console.log(">>>>>>", token, jwt_decode(token));
//       req.headers.cookie.jwt = token;
//       console.log("sssss,,,,,,,");
//       next();
//     }
//   });
//   next();
// });
// router.use(auth);
router.post("/verfiy", verfication.verfiy);
module.exports = router;
