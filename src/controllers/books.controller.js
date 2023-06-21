const { bookService } = require("../services/index.services");

const createBook = async (req, res) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.json(newBook);
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookService.getBook(req.params.bookId);
    if (!book) {
      res.status(404).json({ action: "getBook", error: "Book Not Found" });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).json({ action: "getBook", error: err.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    if (!books) {
      res.status(404).json({ action: "getAllBooks", error: "Books Not Found" });
    } else {
      res.json(books);
    }
  } catch (err) {
    res.status(500).json({ action: "getAllBooks", error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await bookService.updateBook(req.params.bookId, req.body);
    if (!book) {
      res.status(404).json({ action: "updateBook", error: "Book Not Found" });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).json({ action: "updateBook", error: err.message });
  }
}

const deleteBook = async (req, res) => {
  try {
    const book = await bookService.deleteBook(req.params.bookId);
    if (!book) {
      res.status(404).json({ action: "deleteBook", error: "Book Not Found" });
    } else {
      res.json(book);
    }
  } catch (err) {
    res.status(500).json({ action: "deleteBook", error: err.message });
  }
}

const getAllDeletedBooks = async (req, res) => {
  try {
    const books = await bookService.getAllDeletedBooks();
    if (!books) {
      res.status(404).json({ action: "getAllDeletedBooks", error: "Books Not Found" });
    } else {
      res.json(books);
    }
  } catch (err) {
    res.status(500).json({ action: "getAllDeletedBooks", error: err.message });
  }
};

module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook, getAllDeletedBooks };
