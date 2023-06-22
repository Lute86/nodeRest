const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config");

const Book = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  isbn: {
    /*Compartido por todos los libros iguales*/
    type: DataTypes.INTEGER,
    allowNull: false,
    validate:{
      isInt:true
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  library: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate:{
      isInt:true
    }
  },
},
{
  paranoid: true, // Enable soft deletes
  timestamps: true, // Include timestamps (createdAt, updatedAt, deletedAt)
  deletedAt: "deletedAt", // Use "deletedAt" as the name for the deletion timestamp column
});


module.exports = Book;
