const faker = require("faker");

module.exports = function generateGuests() {
  const guests = [];
  for (let id = 0; id < 50; id += 1) {
    guests.push({
      id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }
  return { guests };
};
