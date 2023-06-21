const { Library } = require("../models/index.models");
const { Op } = require("sequelize");

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

const updateLibrary = async (LibraryId, updates) => {
  try {
    const library = await Library.findByPk(LibraryId);
    if (!library) {
      throw new Error("Library not found");
    }
    const updatedLibrary = await library.update(updates);
    return updatedLibrary;
  } catch (err) {
    console.error("Error when updating Library", err);
    throw err;
  }
};

// Soft delete the library by setting the deletedAt timestamp
const deleteLibrary = async (libraryId) => {
  try {
    const library = await Library.findByPk(libraryId);
    if (!library) {
      throw new Error("Library not found");
    }
    await library.destroy();
    return library;
  } catch (err) {
    console.error("Error when deleting Library", err);
    throw err;
  }
};

const getAllDeletedLibraries = async () => {
  try {
    const deletedLibraries = await Library.findAll({
      paranoid: false,
      where: {
        deletedAt: { [Op.ne]: null }, // Filter records where deletedAt is not null
      },
    });
    return deletedLibraries;
  } catch (err) {
    console.error("Error when fetching all deleted Libraries", err);
    throw err;
  }
};

module.exports = { createLibrary, getLibrary, getAllLibraries, updateLibrary, deleteLibrary, getAllDeletedLibraries };
