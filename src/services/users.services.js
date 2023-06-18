const { userProvider } = require("../providers/index.providers");

const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const getUser = async (userId) => {
  const user = await userProvider.getUser(userId);
  if (user) {
    // Lógica de negocio
    console.log(user.firstName);
  }
  return user;
};

const validateUser = async (user, pass) => {
  const userFound = await userProvider.validateUser({ user, pass });
  return userFound;
};



module.exports = { createUser, getUser, validateUser };
