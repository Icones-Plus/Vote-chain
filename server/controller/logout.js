exports.get = (request, response) => {
  response.clearCookie("jwt");
  console.log("loging out ....");
  response.send("done");
};
