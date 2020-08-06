exports.signup = function(req, res){
  const { body } = req;
  const { id, Email, mobile, dateOfBirth, motherName } = body;
  if(id === ""){
    res.send({
      success: false,
      message: 
    })
  }

}
