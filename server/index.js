const app = require("./server.js");
const dotenv = require('dotenv');
const db = require("./database/index");
const signup = require('./middlewares/auth/signup');
dotenv.config();
const createPassword = require('./middlewares/createPassword');

const port = process.env.PORT || 4000;


// app.post('/createPassword', createPassword.createPassword);
// app.get('/createPassword', createPassword.createPassword);

app.post('/signup', signup.signup)

//     function (req, res) {
//     console.log("###########################################################################")
//     console.log("request body =================>", req.body)
//     // db.userModel.save(req.)
//     res.send('hello worldoikoij')
// })


app.get('/login', function (req, res) {
    console.log("...............................> get")
    res.send('hello world')
})


app.listen(port, () =>
    console.log(`Server Runs on Port  ${port} !`));
