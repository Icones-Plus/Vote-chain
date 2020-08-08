const router = require("express").Router();
const signup = require('../middlewares/auth/signup.js');
const login = require('../middlewares/auth/login.js');

router.post('/signup', signup.signup);
router.post('/login', login.login);

module.exports = router;
