const sequelize = require("../config/connection");
const seedLocales = require("./localesData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedLocales();

  process.exit(0);
};

seedAll();
