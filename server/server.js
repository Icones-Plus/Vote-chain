var express = require("express");
var path = require("path");
var cors = require("cors");
const routes = require("./controller/index");
const bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/", routes); 

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});
module.exports = app;
