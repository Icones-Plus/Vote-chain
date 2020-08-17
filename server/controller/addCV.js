const model = require('../database/index');
const analystModel = model.analystModel;

exports.cv = function(req, res){
  const { body } = req;
  const { cv } = body;
  console.log(cv, 'cv');
  console.log("hiiiiiiiiiiiiiiiiiii1233456678899")
  const { params } = req;
  const { id } = params;
  console.log(body, 'body');
  console.log(id, 'id');
  // console.log(req.body );
  // return res.send('return')
  analystModel.findOneAndUpdate({id, id}, {cv: cv}).then(result => {
    return res.send({
      success: true,
      message: 'cv updated successfully'
    })
  }).catch(err => {
    console.log('Err', err);
  })
}
