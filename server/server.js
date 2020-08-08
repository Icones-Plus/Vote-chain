var express = require("express");
var path = require("path");
var cors = require("cors")
const routes = require("./controller/index");



var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")))
app.use("/", routes);




module.exports = app;
