const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");
const Book = require("./books");

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
},{
  paranoid: true, // Enable soft deletes
  timestamps: true, // Include timestamps (createdAt, updatedAt, deletedAt)
  deletedAt: "deletedAt", // Use "deletedAt" as the name for the deletion timestamp column
});

Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = Library;
