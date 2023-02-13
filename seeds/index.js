const sequelize = require('../config/connection')
const seedRestaurants = require('./localesData')
const seedUser = require('./userData')

const seedAll = async () => {
  await sequelize.sync({force: true})
  
  await seedRestaurants()

  await seedUser()

  process.exit(0)
}

seedAll()