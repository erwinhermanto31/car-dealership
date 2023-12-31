'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {
      Car.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Car.init({
    user_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};