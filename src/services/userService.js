const { User } = require('../models');

const registerUser = async (name, email) => {
  const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('Email is already registered');
    }

    // Continue with user registration
    const newUser = await User.create({ name, email });
    return newUser;
};

module.exports = {
  registerUser,
};