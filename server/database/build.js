// var db = require("./index");
// var mockData = require("./MOCK_DATA.json");

// mockData.map((e) => {
//   var newEntity = new db.userModel(e);
//   newEntity.save(function (err) {
//     if (err) throw new Error(err);
//   });
// });

const faker = require("faker");
const { userModel, candidateModel, analystModel } = require("./index");
let genders = ["male", "female"];
for (let i = 0; i < 10; i++) {
  const user = new userModel({
    id: faker.random.number(),
    mother_name: faker.name.findName(),
    mobile: faker.random.number(),
    email: faker.internet.email(),
    gender: faker.random.arrayElement(genders),
    voted: false,
    dateOfBirth: faker.date.between("1940-01-01", "2002-12-31"),
    password: null,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    admin: false,
  });

  user.save().then((userRef) => {
    console.log(`${userRef.admin} saved successfully`);
    const candidate = new candidateModel({
      id: faker.random.number(),
      name: faker.name.findName(),
      description: faker.lorem.paragraph(),
      img: faker.image.avatar(),
    });

    candidate.save().then((addressRef) => {
      console.log(`${addressRef.name} saved successfully`);
    });

    const analyst = new analystModel({
      first_Name: faker.name.firstName(),
      last_Name: faker.name.lastName(),
      picture: faker.image.avatar(),
      bio: faker.lorem.paragraph(),
      linkedIn: faker.internet.url(),
      cv: faker.internet.url(),
    });

    analyst.save().then((analystRef) => {
      console.log(`${analystRef.first_Name} saved successfully`);
    });
  });
}
