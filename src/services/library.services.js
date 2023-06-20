const { libraryProvider } = require("../providers/index.providers");


const createLibrary = async (library) => {
  return await libraryProvider.createLibrary(library);
};

const getLibrary = async (libraryId) => {
  const library = await libraryProvider.getLibrary(libraryId);
  if (library) {
    // Lógica de negocio
    console.log(library.name);
  }
  return library;
};

const getAllLibraries = async () => {
  const library = await libraryProvider.getAllLibraries();
  if(library.length<1) console.log("No hay librerias")
  return library;
};

module.exports = { createLibrary, getLibrary, getAllLibraries };
