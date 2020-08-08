const router = require("express").Router();
const signup = require('../middlewares/auth/signup.js');
 router.post("/signup", signup.signup);

module.exports = router;
