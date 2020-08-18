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

  // if(!first_Name){
  //   return res.send({
  //     success: false,
  //     message: 'Please provide your first name'
  //   })
  // }
  //
  // if(!last_Name){
  //   return res.send({
  //     success: false,
  //     message: 'Please provide your last name'
  //   })
  // }
  //
  // if(!picture){
  //   return res.send({
  //     success: false,
  //     message: 'Please set your picture'
  //   })
  // }
  //
  // if(!cv){
  //   return res.send({
  //     success: false,
  //     message: 'Please provide your cv'
  //   })
  // }
  //
  // if(!linkedIn){
  //   return res.send({
  //     success: false,
  //     message: 'Please provide your linkedIn'
  //   })
  // }
  //
  // if(!bio){
  //   return res.send({
  //     success: false,
  //     message: 'Please provide your bio'
  //   })
  // }
  //
  // if(!articles){
  //   return res.send({
  //     success: false,
  //     message: 'Please provide links to your articles'
  //   })
  // }

  if(picture){
   return res.send({
     success: true,
     message: 'your picture has been updated'
   })
 }

 if(picture && cv){
   return res.send({
     success: false,
     message: 'your picture and cv has been updated'
   })
 }

 if(picture && cv && linkedIn){
   return res.send({
     success: false,
     message: 'your picture and cv and linkedIn has been updated'
   })
 }

 if(bio){
   return res.send({
     success: false,
     message: 'your bio has been updated'
   })
 }

 if(articles){
   return res.send({
     success: false,
     message: 'your articles have been updated'
   })
 }

 if(picture && cv && linkedIn && articles && bio){
   return res.send({
     success: false,
     message: 'your info is updated'
   })
 }


  let newAnalyst = new analystModel();

  // newAnalyst.id = id;
  // newAnalyst.first_Name = first_Name;
  // newAnalyst.last_Name = last_Name;
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
