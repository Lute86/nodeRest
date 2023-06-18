const { libraryProvider } = require("../providers/index.providers");


const createLibrary = async (id, book) => {
  return await libraryProvider.createLibrary(library);
};

const getLibrary = async (bookId) => {
  const library = await libraryProvider.getLibrary(libraryId);
  if (library) {
    // Lógica de negocio
    console.log(library.name);
  }
  return library;
};

module.exports = { createLibrary, getLibrary };
