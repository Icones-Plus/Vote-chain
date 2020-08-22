const router = require("express").Router();
const signup = require("../middlewares/auth/signup.js");
const login = require("../middlewares/auth/login.js");
const verfication = require("./verificationCode");
const auth = require("../middlewares/auth/auth");
const confirm = require("./confirm");
const admin = require("./admin");
const createPassword = require("../middlewares/createPassword");
// const { feedbackModel } = require("./../database/index");
// const { candidateModel } = require("./../database/index");
const candidates = require("./candidates");
const result = require("./result");
const getAnalyst = require("./getAnalyst.js");
const postAnalyst = require("./postAnalyst.js");
const logout = require("./logout");

const uploasCV = require("./addCV");

const request = require("request");

const forCandidate = require("./forCandidate");
const candidateProfile = require("./candidateProfile");
const getCands = require("./getCands");
const getResult = require("./getResult");
const contact = require("./contact");

// const { sign } = require("jsonwebtoken");
// var jwt_decode = require("jwt-decode");
router.post("/signup", signup.signup);
router.post("/login", login.login);
router.post("/confirm", confirm.done);
router.post("/login", login.login);
router.post("/admn", admin.add);
router.get("/verfiy", verfication.verfiy);
router.post("/contact", contact.contact);

router.get("/contact", contact.contact1);
router.post("/delete", contact.delete);
router.post("/createPassword/:id", createPassword.createPassword);
router.get("/logout", logout.get);

router.use(auth);

router.get("/cand", candidates.get);

router.get("/admn", admin.get);

router.get("/res", result.get);
router.post("/webcam", function (req, res) {
  request.post(
    {
      url: "https://api-us.faceplusplus.com/facepp/v3/compare",
      form: {
        api_key: "FavnHOrlAbZ3TcgYxhPIdXy5Xb-SA3vJ",
        api_secret: "nMjgy48bWF3WaVovNllv-EgWV2CsnFqP",
        image_base64_1: req.body.image_base64_1,
        image_url2: req.body.image_url2,
      },
    },
    (err, httpResponse, body) => {
      if (err) {
        console.error("error", err);
        res.status(500).send("Error");
      } else if (JSON.parse(body).confidence === undefined) {
        res.status(200).send("Invalid image url");
      } else {
        console.log("success ", JSON.parse(body).confidence);
        res.status(200).send(JSON.parse(body).confidence.toString());
      }
    },

    (err, httpResponse, body) => {
      if (err) {
        console.error("error", err);
        res.status(500).send("Error");
      } else if (JSON.parse(body).confidence === undefined) {
        res.status(200).send("Invalid image url");
      } else {
        console.log("success ", JSON.parse(body).confidence);
        res.status(200).send(JSON.parse(body).confidence.toString());
      }
    }
  );
});

router.post("/forCandidate/:id", forCandidate.forCandidate);
router.get("/candidateProfile/:id", candidateProfile.candidateProfile);
router.get("/getCands", getCands.getCands);
router.get("/getResult", getResult.getResult);
router.get("/analyze", getAnalyst.getAnalyst);
router.post("/analyze", postAnalyst.postAnalyst);
router.post("/uploadCV/:id", uploasCV.cv);
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

// getCands candidateModel.find({}).then((success) => {
//   console.log("Here are your candidates", success);
//   res.status(200).send(success);
// });
// contact function (req, res) {
//   const feedback = new feedbackModel({
//     name: req.body.name,
//     email: req.body.email,
//     message: req.body.message,
//   });
//   console.log(req.body);
//   feedback
//     .save()
//     .then((result) => {
//       res.send("RECIEVED");
//     })
//     .catch((err) => {
//       res.send("Not recieved");
//     });
// contact1 function (req, res) {
//   feedbackModel
//     .find({})
//     .then((output) => {
//       res.send(output);
//     })
//     .catch((error) => {
//       res.send("Something went wrong");
//     });

//  delete function (req, res) {
//   feedbackModel
//     .deleteOne({ message: req.body.message })
//     .then((success) => {
//       res.send(success);
//     })
//     .catch((error) => {
//       res.send(error);
//     });
// }

module.exports = router;
