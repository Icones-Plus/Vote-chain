const app = require("./server.js");
const dotenv = require("dotenv");
// const build = require("./data cbase/build");
dotenv.config();
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server Runs on Port  ${port} !`));
