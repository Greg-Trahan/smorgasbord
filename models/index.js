const Locales = require("./Locales");
const Users = require("./Users");
const Userids = require("./Userids");

Users.hasMany(Locales, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  // through: {
  //   model: Userids,
  //   unique: false,
  // },
});
Locales.belongsTo(Users, {
  foreignKey: "user_id",
});

// Reviews.hasMany(Users, {
//   through: {
//     model: Userids,
//     uniquie: false,
//   },
// });
module.exports = {
  Locales,
  Users,
  Userids,
};
