const model = require('../database/index');
const analystModel = model.analystModel;
exports.postAnalyst = function(req, res){
  let { body } = req;
  let {
    first_Name,
    last_Name,
    picture,
    cv,
    linkedIn,
    bio,
    articles
  } = body;

  let newAnalyst = new analystModel();

  // newAnalyst.id = id;
  newAnalyst.first_Name = first_Name;
  newAnalyst.last_Name = last_Name;
  newAnalyst.picture = picture;
  newAnalyst.cv = cv;
  newAnalyst.linkedIn = linkedIn;
  newAnalyst.bio = bio;
  newAnalyst.articles = articles;


   //
   // analystModel.findOneAndUpdate({id: id}, {$push: {articles: articles}}).then(result => {
   //    console.log(result, 'result');
   //  }).catch(err => {
   //    console.log('Err in findOneAndUpdate', err);
   //  });



  // newAnalyst.articles.push(articles);

  // if(errors){
  //   console.log(errors, 'errors');
  // }

  // if(linkedIn.length === 0){
  //   let analystWithNoLinkedIn = new analystModel;
  //
  //   analystWithNoLinkedIn.linkedIn = "http://";
  //   newAnalyst.save().then(res => {
  //     console.log(res, 'ressss');
  //   }).catch(err => {
  //     console.log(err, 'errrrrr');
  //   })
  //   return res.send({
  //     message: 'please provide your linkedIn link',
  //
  //   })
  //   console.log('linkedIn is empty');
  // }

  // if(articles){
  //   console.log('hey');
  // }

  newAnalyst.save().then(result => {
    console.log(result, 'result');
    return res.send({
      success: true,
      message: 'successfully saves'
    })
  }).catch(err => {
    console.log('Err in saving analyst to db', err);
  })
}
