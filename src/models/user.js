'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Car, { as: 'cars', foreignKey: 'user_id' });
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};