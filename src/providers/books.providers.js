const Books  = require("../models/books");

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

module.exports = { createBook, getBook, getAllBooks };
