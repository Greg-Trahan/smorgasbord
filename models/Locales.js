const { Model, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/connection')

class Locales extends Model {}

Locales.init (
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
   user_id: {
    type: DataTypes.STRING,
    allowNull: false,    
   },
   price: {
    type: DataTypes.
    
   }
  },
  {
     sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'blogposts',
  }







)