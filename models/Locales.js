const { Model, DataTypes  } = require('sequelize');
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
   user_id: {
    type: DataTypes.STRING,
    allowNull: false,    
   },
   foodtype: {
    type: DataTypes.STRING,
    allowNull: false,
   },
   price: {
    type: DataTypes.INTEGER,
    allowNull: false,
   },
   datecreated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
   }
  },
  {
     sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'locales',
  }







)