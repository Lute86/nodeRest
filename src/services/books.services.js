const { bookProvider } = require("../providers/index.providers");


const createBook = async (book) => {
  return await bookProvider.createBook(book);
};

const getBook = async (bookId) => {
  const book = await bookProvider.getBook(bookId);
  if (book) {
    // Lógica de negocio
    console.log(book.title);
  }
  return book;
};

module.exports = { createBook, getBook };
