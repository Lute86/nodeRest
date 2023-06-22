const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

const User = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha:true
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      isAlpha:true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  // role: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      isAlphanumeric:true
    }
  },
});


module.exports = User;
