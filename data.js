const faker = require("faker");
const { v4:uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = function generateData() {
  // Users
  const users = [
    {
      _id: uuidv4(),
      firstName: "James",
      lastName: "Sherry",
      email: "james.sherry@thejump.tech",
      username: "admin",
      password: bcrypt.hashSync("admin", salt),
      isAdmin: true,
    },
    {
      _id: uuidv4(),
      firstName: "Fred",
      lastName: "Bloggs",
      email: "fred.bloggs@thejump.tech",
      username: "fred",
      password: bcrypt.hashSync("bloggs", salt),
      isAdmin: false,
    },
  ];

  // Courts
  const NUMBER_OF_COURTS = 10;
  const courts = [];
  Array.from({ length: NUMBER_OF_COURTS }).forEach((c, i) => {
    courts.push({
      _id: uuidv4(),
      name: `Court ${i}`,
      bookings: [],
    });
  });

  // Members
  const NUMBER_OF_MEMBERS = 10;
  const members = [];
  Array.from({ length: NUMBER_OF_MEMBERS }).forEach((c, i) => {
    members.push({
      _id: uuidv4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    });
  });

  return { members, users, courts };
};
