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


module.exports = { createBook, getBook };
