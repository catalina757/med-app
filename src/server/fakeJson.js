var faker = require('faker');

var database = {
  clinics: [],
  patients: []
};

for (var i = 1; i<= 500; i++) {
  database.clinics.push({
    id: i,
    unicId: faker.datatype.uuid(),
    name: faker.company.companyName(),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    url: faker.internet.url(),
    image: faker.image.business(),
    avatar: faker.internet.avatar(),
    userName:faker.internet.userName(),
    description: faker.lorem.paragraphs()
    // imageUrl: "https://source.unsplash.com/1600x900/?product"
  });
}

for (var i = 1; i<= 500; i++) {
  database.patients.push({
    id: i,
    unicId: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    description: faker.lorem.paragraphs()
    // imageUrl: "https://source.unsplash.com/1600x900/?product"
  });
}

console.log(JSON.stringify(database));
