const Locales = require('./Locales');
const Users = require('./Users');
const Userids = require('./Userids');

Users.hasMany(Locales,
  {
    through: {
      model: Userids,
      unique: false,
    }    
  });
  Locales.hasOne(Users,
    {
      foreignKey: "user_id",
    });

  Reviews.hasMany(Users,
    {
      through: {
        model: Userids,
        uniquie: false,
      }
    })
    module.exports = {
      Locales,
      Users,
      Userids,
    }