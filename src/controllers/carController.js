const carService = require('../services/carService');

const recordCar = async (req, res) => {
  try {
    const { userId } = req.params;
    const { type, color } = req.body;
    const newCar = await carService.recordCar(userId, type, color);
    res.json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const queryCars = async (req, res) => {
  try {
    const { type, color, sortBy } = req.query;
    const cars = await carService.queryCars(type, color, sortBy);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  recordCar,
  queryCars,
};
