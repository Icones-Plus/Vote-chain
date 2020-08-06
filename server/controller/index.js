const router = require("express").Router();
const signup = require("../middlewares/auth/signup.js");
const verfiy = require("./verificationCode");

router.post("/signup", signup.signup);
router.post("/verfiy", verfiy);

module.exports = router;
