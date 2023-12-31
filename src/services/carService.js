const { Car, User } = require('../models');

const recordCar = async (userId, type, color) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found');
  }

  const existingCar = await Car.findOne({ where: { user_id: userId, type, color } });
  if (existingCar) {
    throw new Error('User already owns a car with the same type and color');
  }

  // Continue with recording the new car
  const newCar = await Car.create({ user_id: userId, type, color });
  return newCar;
};

const queryCars = async (type, color, sortBy) => {
  const whereClause = {};
  if (type) {
    whereClause.type = type;
  }
  if (color) {
    whereClause.color = color;
  }

  let orderClause = [];
  if (sortBy) {
    orderClause = sortBy.split(',').map((field) => field.split(':'));
  }

  const cars = await Car.findAll({ where: whereClause, order: orderClause });
  return cars;
};

module.exports = {
  recordCar,
  queryCars,
};
