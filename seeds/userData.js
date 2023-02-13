const { Users } = require("../models");

const userData = [
  {
    name: "Hon Solo",
    email: "hon.solo@example.com",
    password: "password",
  },
  {
    name: "Princess Diana",
    email: "princess.diana@example.com",
    password: "password",
  },
  {
    name: "Jacob Figueroa",
    email: "jacobrayfigueroa@gmail.com",
    password: "passw0rd",
  },
];

const seedUser = () => Users.bulkCreate(userData);

module.exports = seedUser;
