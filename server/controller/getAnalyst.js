const model = require('../database/index');
const analystModel = model.analystModel;
exports.getAnalyst = function(req, res){
  analystModel.find({}).then(result => {
    return res.send(result)
  }).catch(err => {
    console.log('Err', err);
  })
}
