const db = require("./db");
const Employee = require("./models/employee");
const faker = require("faker");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const findAll = async () => {
  const employees = await Employee.find();
  console.log("All Employees:", employees);
};

// Below creates random employee using Faker
const createEmployee = async () => {
  const oneEmp = await [...Array(1)].map((employee) => ({
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
  await Employee.insertMany(oneEmp);
  console.log("Created one Employee", oneEmp);
};

const createEmployees = async () => {
  const threeEmp = await [...Array(3)].map((employee) => ({
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
  await Employee.insertMany(threeEmp);
  console.log("Created Three Employee", threeEmp);
};

const findAllNames = async () => {
  const employees = await Employee.find().select("first_name last_name");
  console.log("All Employees First & Last Names:", employees);
};

const updateOne = async () => {
  const updateEmp = await Employee.updateMany({
    first_name: "Shan",
    last_name: "Siddiqui",
  });
  console.log("One Updated:", updateEmp);
};

const deleteEmp = async () => {
  const deleteOne = await Employee.deleteMany({
    first_name: "Shan",
    last_name: "Siddiqi",
  });
  console.log("One Employee Deleted", deleteOne);
};

const run = async () => {
  await createEmployee();
  await createEmployees();
  await findAllNames();
  await findAll();
  await updateOne();
  await deleteEmp();
  process.exit();
};

run();
