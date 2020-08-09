const router = require('express').Router();
const signup = require('../middlewares/auth/signup.js');
const login = require('../middlewares/auth/login.js');
const createPassword = require('../middlewares/createPassword');

// router.post('/signup', signup.signup);
router.post('/login', login.login);
router.post('/createPassword/:id', createPassword.createPassword);

module.exports = router;
