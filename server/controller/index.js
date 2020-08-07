const router = require("express").Router();
const signup = require("../middlewares/auth/signup.js");
const login = require("../middlewares/auth/login.js");
const verfication = require("./verificationCode");
const auth = require("../middlewares/auth/auth");
router.post("/signup", signup.signup);
router.post("/login", login.login);

// router.use(auth);
router.post("/verfiy", verfication.verfiy);
module.exports = router;
