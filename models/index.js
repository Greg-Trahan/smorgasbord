const Locales = require("./Locales");
const Users = require("./Users");

Users.hasMany(Locales, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Locales.belongsTo(Users, {
//   foreignKey: "user_id",
// });
// Reviews.hasMany(Users, {
//   through: {
//     model: Userids,
//     uniquie: false,
//   },
// });
module.exports = {
  Users,
  Locales,
};
