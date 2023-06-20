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

const getAllBooks = async () => {
  const books = await bookProvider.getAllBooks();
  if(books.length<1) console.log("No hay libros")
  return books;
};

const updateBook = async (bookId, updates) => {
  const book = await bookProvider.updateBook(bookId, updates);
  return book;
}


module.exports = { createBook, getBook, getAllBooks, updateBook };
