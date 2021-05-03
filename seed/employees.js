//what your telling the seed to follow the blueprint
const db = require("../db"); // putting the db that I created into the database created in index.js Connection

const Employee = require("../models/employee");

const faker = require("faker");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const employees = [...Array(5)].map((employee) => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    job_title: faker.name.jobTitle(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
    },
  }));
  await Employee.insertMany(employees);
  console.log("Created employees");
};

const run = async () => {
  await main();
  db.close();
};

run();
