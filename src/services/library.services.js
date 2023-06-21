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
  if(library.length<1) console.log("No libraries found")
  return library;
};

const updateLibrary = async (LibraryId, updates) => {
  const library = await libraryProvider.updateLibrary(LibraryId, updates);
  return library;
}

const deleteLibrary = async (LibraryId) => {
  const library = await libraryProvider.deleteLibrary(LibraryId);
  return library;
}

const getAllDeletedLibraries = async () => {
  const library = await libraryProvider.getAllDeletedLibraries();
  if(library.length<1) console.log("No libraries found")
  return library;
}; 

module.exports = { createLibrary, getLibrary, getAllLibraries, updateLibrary, deleteLibrary, getAllDeletedLibraries };
