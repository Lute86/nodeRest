const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");
const { Book } = require("./index.models");

const Library = sequelize.define("Library", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// Library.hasMany(Book);
// Book.belongsTo(Library);

module.exports = Library;
