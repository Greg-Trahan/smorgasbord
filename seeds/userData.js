const {Users} = require('../models')

const userData = [
  {
    name: 'Hon Solo',
    email: 'hon.solo@example.com'
  },
  {
    name: 'Princess Diana',
    email: 'princess.diana@example.com'
  },
  {
    name: 'Jacob Figueroa',
    email: 'jacobrayfigueroa@gmail.com'
  }
]

const seedUser = () => Users.bultCreate(userData)

module.exports = seedUser