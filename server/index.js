const app = require("./server.js");
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT||4000;

app.listen(port, () => 
console.log(`Server Runs on Port  ${port} !`));


app.post('/', function (req, res) {
    console.log("========================================================================> Yo I am here")
    res.send('hello world')
})


app.get('/', function (req, res) {
    console.log("....................................................................> getttttttttttttttttttttttttt")
    res.send('hello world')
})
