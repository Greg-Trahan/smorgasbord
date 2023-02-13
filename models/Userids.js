const { Model, DataTypes  } = require('sequelize');
const sequelize = require('../config/connection')

class Userids extends Model {}

Userids.init (
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      }
    },
    locale_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Locales",
        key: "id",
      }
    }
  },


  
  {
    
   sequelize,
   timestamps: false,
   freezeTableName: true,
   underscored: true,
   modelName: 'userids',
   }
  


)