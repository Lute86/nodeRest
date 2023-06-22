const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers/index.controller')
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth.mdw");
const { Book } = require("../models/index.models");
const validateTypesMdw = require('../middleware/validateTypes.mdw');



//Auth required
router.get("/deleted", userIsAdminMDW, bookController.getAllDeletedBooks)
router.post("/", [userIsAdminMDW, validateTypesMdw("books")], bookController.createBook);
router.put("/:bookId", [userIsAdminMDW, validateTypesMdw("books")], bookController.updateBook);
router.delete("/:bookId", userIsAdminMDW, bookController.deleteBook)
//Regular user required
router.get("/:bookId", jwtValidMDW, bookController.getBook);
router.get("/", jwtValidMDW, bookController.getAllBooks);

module.exports = router;
