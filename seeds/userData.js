const { Users } = require("../models");

const userData = [
  {
    name: "Han Solo",
    email: "han.solo@example.com",
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
