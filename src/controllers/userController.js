const userService = require('../services/userService');

const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await userService.registerUser(name, email);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
};
