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
  if(books.length<1) console.log("No books found")
  return books;
};

const updateBook = async (bookId, updates) => {
  const book = await bookProvider.updateBook(bookId, updates);
  return book;
}

const deleteBook = async (bookId) => {
  const book = await bookProvider.deleteBook(bookId);
  return book;
}

const getAllDeletedBooks = async () => {
  const books = await bookProvider.getAllDeletedBooks();
  if(books.length<1) console.log("No books found")
  return books;
}; 


module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook, getAllDeletedBooks };
