const { Library } = require("../models/index.models");

const createLibrary = async (library) => {
  try {
    const newLibrary = await Library.create(library);
    return newLibrary;
  } catch (err) {
    console.error("Error when creating Library", err);
    throw err;
  }
};

const getLibrary = async (libraryId) => {
  try {
    const library = await Library.findByPk(libraryId, { include: { all: true } });
    return library;
  } catch (err) {
    console.error("Error when fetching Library", err);
    throw err;
  }
};

const getAllLibraries = async () => {
  try {
    const library = await Library.findAll();
    return library;
  } catch (err) {
    console.error("Error when fetching all Libraries", err);
    throw err;
  }
};

module.exports = { createLibrary, getLibrary, getAllLibraries };
