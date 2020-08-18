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
const logout = require("./logout");
const axios = require('axios');
const request = require('request');



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
      console.log("Feedback saved to database", result);
      res.send("RECIEVED");
    })
    .catch((err) => {
      console.log("ERROR in saving feedback to database", err);
      res.send("Not recieved");
    });
});

router.get("/contact", function (req, res) {
  feedbackModel
    .find({})
    .then((output) => {
      console.log("Here goes your data", output);
      res.send(output);
    })
    .catch((error) => {
      console.log("Not well", error);
      res.send("Something went wrong");
    });
});
router.post("/delete", function (req, res) {
  feedbackModel.deleteOne({ message: req.body.message }).then(success => {
    console.log("Succesfully deleted", success)
    res.send(success)
  }).catch(error => {
    console.log("Error in deleting from feedback!", error)
    res.send(error)
  })
})
router.post("/createPassword/:id", createPassword.createPassword);
router.get("/logout", logout.get);
// router.use(auth);
router.get("/admn", admin.get);
router.get("/cand", candidates.get);
router.get("/res", result.get);
router.get("/getCands", function (req, res) {
  candidateModel.find({})
    .then(success => {
      console.log("Here are your candidates", success)
      res.status(200).send(success)
    })
    .catch(error => {
      console.log("Error in retrieving data from database", error)
    })
})


router.post("/webcam", function (req, res) {

  request.post({
    url: 'https://api-us.faceplusplus.com/facepp/v3/compare', formData: {
      api_key: 'FavnHOrlAbZ3TcgYxhPIdXy5Xb-SA3vJ',
      api_secret: 'nMjgy48bWF3WaVovNllv-EgWV2CsnFqP',
      image_base64_1: req.body.image_base64_1,
      image_url2: req.body.image_url2
    }
  }, (err, httpResponse, body) => {
    if (err) {
      console.error('error', err);
      res.status(500).send("Error");
    } else if (JSON.parse(body).confidence === undefined) {
      res.status(200).send("Invalid image url");
    } else {
      console.log('success ', JSON.parse(body).confidence);
      res.status(200).send((JSON.parse(body).confidence).toString());
    }
  });
})













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
