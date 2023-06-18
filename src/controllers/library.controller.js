const { libraryService } = require("../services/index.services");

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



module.exports = { createLibrary, getLibrary };
