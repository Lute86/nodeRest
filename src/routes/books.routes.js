const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers/index.controller')
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth.mdw");
const { Book } = require("../models/index.models")



//Auth required
router.get("/deleted", userIsAdminMDW, bookController.getAllDeletedBooks)
router.post("/", userIsAdminMDW, bookController.createBook);
router.put("/:bookId", userIsAdminMDW, bookController.updateBook);
router.delete("/:bookId", userIsAdminMDW, bookController.deleteBook)
//Regular user required
router.get("/:bookId", jwtValidMDW, bookController.getBook);
router.get("/", jwtValidMDW, bookController.getAllBooks);

module.exports = router;
