const model = require('../database/index');
const analystModel = model.analystModel;

exports.cv = function (req, res) {
  const { body } = req;
  const { cv } = body;

  const { params } = req;
  const { id } = params;


  // return res.send('return')
  analystModel.findOneAndUpdate({ id, id }, { cv: cv }).then(result => {
    return res.send({
      success: true,
      message: 'cv updated successfully'
    })
  }).catch(err => {
    console.log('Err', err);
  })
}
