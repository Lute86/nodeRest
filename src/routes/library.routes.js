const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library.controller')
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth.mdw");


//Auth required
router.post("/", userIsAdminMDW, libraryController.createLibrary);
router.get("/deleted", userIsAdminMDW, libraryController.getAllDeletedLibraries)
router.put("/:libraryId", userIsAdminMDW, libraryController.updateLibrary);
router.delete("/:libraryId", userIsAdminMDW, libraryController.deleteLibrary);
router.post("/:libraryId/book", userIsAdminMDW, libraryController.createBook);

//Regular user required
router.get("/:libraryId", jwtValidMDW, libraryController.getLibrary);
router.get("/", jwtValidMDW, libraryController.getAllLibraries);



module.exports = router;
