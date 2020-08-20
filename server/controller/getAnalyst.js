const model = require('../database/index');
const analystModel = model.analystModel;
exports.getAnalyst = function(req, res){
  analystModel.find({}).then(result => {
     res.send({
      success: true,
      message: 'retrieves the analysts successfully',
      result: result
    })

     res.redirect('/analyst')
  }).catch(err => {
    console.log('Err', err);
  })
}
