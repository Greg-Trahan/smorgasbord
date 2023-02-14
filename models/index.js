const Locales = require("./Locales");
const Users = require("./Users");
const Reviews = require("./Reviews");

Users.hasMany(Locales, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Locales.belongsTo(Users, {
  foreignKey: "user_id",
});

Users.hasMany(Reviews, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Reviews.belongsTo(Users, {
  foreignKey: "user_id",
});

Locales.hasMany(Reviews, {
  foreignKey: "locale_id",
  onDelete: "CASCADE",
});

Reviews.belongsTo(Locales, {
  foreignKey: "locale_id",
});

module.exports = {
  Users,
  Locales,
  Reviews,
};
