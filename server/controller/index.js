const router = require("express").Router();
const signup = require("../middlewares/auth/signup.js");
const login = require("../middlewares/auth/login.js");
const verfication = require("./verificationCode");
const auth = require("../middlewares/auth/auth");
const confirm = require("./confirm");
const admin = require("./admin");
const createPassword = require("../middlewares/createPassword");
const { feedbackModel } = require("./../database/index");
const { candidateModel } = require("./../database/index");
const candidates = require("./candidates");
const result = require("./result");
const getAnalyst = require("./getAnalyst.js");
const postAnalyst = require("./postAnalyst.js");
const logout = require("./logout");
const uploasCV = require("./addCv.js");
const forCandidate = require("./forCandidate");
const candidateProfile = require("./candidateProfile");

// const { sign } = require("jsonwebtoken");
// var jwt_decode = require("jwt-decode");
router.post("/signup", signup.signup);
router.post("/login", login.login);
router.post("/confirm", confirm.done);
router.post("/login", login.login);
router.post("/admn", admin.add);
router.get("/verfiy", verfication.verfiy);
router.post("/contact", function (req, res) {
  const feedback = new feedbackModel({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });
  console.log(req.body);
  feedback
    .save()
    .then((result) => {
      res.send("RECIEVED");
    })
    .catch((err) => {
      res.send("Not recieved");
    });
});

router.get("/contact", function (req, res) {
  feedbackModel
    .find({})
    .then((output) => {
      res.send(output);
    })
    .catch((error) => {
      res.send("Something went wrong");
    });
});
router.post("/delete", function (req, res) {
  feedbackModel
    .deleteOne({ message: req.body.message })
    .then((success) => {
      res.send(success);
    })
    .catch((error) => {
      res.send(error);
    });
});
router.post("/createPassword/:id", createPassword.createPassword);
router.get("/logout", logout.get);
router.get("/cand", candidates.get);
router.use(auth);
router.get("/admn", admin.get);

router.get("/res", result.get);
router.post("/forCandidate/:id", forCandidate.forCandidate);
router.get("/candidateProfile/:id", candidateProfile.candidateProfile);
router.get("/getCands", function (req, res) {
  candidateModel
    .find({})
    .then((success) => {
      console.log("Here are your candidates", success);
      res.status(200).send(success);
    })
})
router.get('/analyze', getAnalyst.getAnalyst);
router.post('/analyze/:id', postAnalyst.postAnalyst);
router.post('/uploadCV/:id', uploasCV.cv);
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
module.exports = router;
