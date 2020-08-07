var express = require("express");
var path = require("path");
var cors = require("cors")
const db = require("./database/index");
const routes = require("./controller/index");
const bodyParser = require("body-parser");



var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", routes);
app.use(express.static(path.join(__dirname, "./../client")));




module.exports = app;
