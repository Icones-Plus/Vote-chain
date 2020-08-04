var express = require("express");
var path = require("path");
const db = require("./database/index");
const routes = require('./controller/index');
const bodyParser = require('body-parser');

var app = express();
app.use(express.json())

app.use('/', routes);
// app.use(bodyParser.json())
// app.get('/', (req, res)=> {
//   res.send('hiiiiiiii')
// })

app.use(express.static(path.join(__dirname, "../client/public")));

module.exports = app;
