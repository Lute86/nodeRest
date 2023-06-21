const Books  = require("../models/books");
const { Op } = require("sequelize");


const createBook = async (book) => {
  try {
    const newBook = await Books.create(book);
    return newBook;
  } catch (err) {
    console.error("Error when creating Book", err);
    throw err;
  }
};

const getBook = async (bookId) => {
  try {
    const book = await Books.findByPk(bookId, { include: { all: true } });
    return book;
  } catch (err) {
    console.error("Error when fetching Book", err);
    throw err;
  }
};

const getAllBooks = async () => {
  try {
    const books = await Books.findAll();
    return books;
  } catch (err) {
    console.error("Error when fetching all Books", err);
    throw err;
  }
};

const updateBook = async (bookId, updates) => {
  try {
    const book = await Books.findByPk(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    const updatedBook = await book.update(updates);
    return updatedBook;
  } catch (err) {
    console.error("Error when updating Book", err);
    throw err;
  }
};

const deleteBook = async (bookId) => {
  try {
    const book = await Books.findByPk(bookId);
    if (!book) {
      throw new Error("Book not found");
    }
    
    // Soft delete the book by setting the deletedAt timestamp
    await book.destroy();
    return book;
  } catch (err) {
    console.error("Error when deleting Book", err);
    throw err;
  }
};

const getAllDeletedBooks = async () => {
  try {
    const deletedBooks = await Books.findAll({
      paranoid: false,
      where: {
        deletedAt: { [Op.ne]: null }, // Filter records where deletedAt is not null
      },
    });
    return deletedBooks;
  } catch (err) {
    console.error("Error when fetching all deleted Books", err);
    throw err;
  }
};

module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook, getAllDeletedBooks };