const { Op } = require("sequelize");
const { User } = require("../models/index.models");

const createUser = async (user) => {
  try {
    const newUser = await User.create(user);
    return newUser;
  } catch (err) {
    console.error("Error when creating User", err);
    throw err;
  }
};

const getUser = async (userId) => {
  try {
    const user = await User.findByPk(userId, { include: { all: true } });
    return user;
  } catch (err) {
    console.error("Error when fetching User", err);
    throw err;
  }
};

const getUserByCriteria = async (options) => {
  try {
    const user = await User.findAll({
      where: {
        [Op.or]: [
          { firstName: options.firstName },
          { lastName: options.lastName },
        ],
      },
    });
    return user;
  } catch (err) {
    console.error("Error when fetching User", err);
    throw err;
  }
};

const validateUser = async (options) => {
  try {
    const user = await User.findAll({
      where: {
        email: options.user,
        password: options.pass,
      },
    });
    if (user.length !== 0) {
      return user;
    }
    return false;
  } catch (err) {
    console.error("Error when validating User", err);
    return false;
  }
};



module.exports = { createUser, getUser, validateUser };
