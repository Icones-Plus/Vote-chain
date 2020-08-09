var express = require("express");
var path = require("path");
const db = require("./database/index");
const routes = require("./controller/index");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();
app.use(express.json());

app.use("/", routes);
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(cors());
module.exports = app;
