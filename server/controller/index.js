const router = require("express").Router();
const signup = require("../middlewares/auth/signup.js");
const verfiy = require("./verificationCode");
const login = require("../middlewares/auth/login.js");

router.post("/signup", signup.signup);
router.post("/login", login.login);

// router.post("/verfiy", verfiy);

module.exports = router;
