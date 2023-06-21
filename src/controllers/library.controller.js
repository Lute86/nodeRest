const { bookService } = require("../services/index.services");
const libraryService = require("../services/library.services");

const createLibrary = async (req, res) => {
  try {
    const newLibrary = await libraryService.createLibrary(req.body);
    res.json(newLibrary);
  } catch (err) {
    res.status(500).json({ action: "createLibrary", error: err.message });
  }
};

const getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.libraryId);
    if (!library) {
      res.status(404).json({ action: "getLibrary", error: "Library Not Found" });
    } else {
      res.json(library);
    }
  } catch (err) {
    res.status(500).json({ action: "getLibrary", error: err.message });
  }
};

const getAllLibraries = async (req, res) => {
  try {
    const library = await libraryService.getAllLibraries();
    if (!library) {
      res.status(404).json({ action: "getAllLibraries", error: "Libraries Not Found" });
    } else {
      res.json(library);
    }
  } catch (err) {
    res.status(500).json({ action: "getAllLibraries", error: err.message });
  }
};

const updateLibrary = async (req, res) => {
  try {
    const library = await libraryService.updateLibrary(req.params.libraryId, req.body);
    if (!library) {
      res.status(404).json({ action: "updateLibrary", error: "Library Not Found" });
    } else {
      res.json(library);
    }
  } catch (err) {
    res.status(500).json({ action: "updateLibrary", error: err.message });
  }
}

const deleteLibrary = async (req, res) => {
  try {
    const library = await libraryService.deleteLibrary(req.params.libraryId);
    if (!library) {
      res.status(404).json({ action: "deleteLibrary", error: "Library Not Found" });
    } else {
      res.json(library);
    }
  } catch (err) {
    res.status(500).json({ action: "deleteLibrary", error: err.message });
  }
}

const getAllDeletedLibraries = async (req, res) => {
  try {
    const library = await libraryService.getAllDeletedLibraries();
    if (!library) {
      res.status(404).json({ action: "getAllDeletedLibraries", error: "Libraries Not Found" });
    } else {
      res.json(library);
    }
  } catch (err) {
    res.status(500).json({ action: "getAllDeletedLibraries", error: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const bookData = { ...req.body, library: req.params.libraryId };
    const book = await bookService.createBook(bookData);
    res.json(book);
  } catch (err) {
    res.status(500).json({ action: "createBook", error: err.message });
  }
};


module.exports = { createLibrary, getLibrary, getAllLibraries, updateLibrary, deleteLibrary, getAllDeletedLibraries, createBook };
