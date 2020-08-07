var express = require("express");
var path = require("path");
const db = require("./database/index");
const routes = require("./controller/index");
const bodyParser = require("body-parser");

var app = express();
app.use(express.json());

app.use("/", routes);
app.use(express.static(path.join(__dirname, "../client/public")));



app.post('/#SignIn', function (req, res) {
    console.log("======================================> Yo I am here")
    res.send('hello world')
})
module.exports = app;
