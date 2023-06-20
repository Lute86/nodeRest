const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers/index.controller')
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth.mdw");
const {Book} = require("../models/index.models")


router.post("/", userIsAdminMDW, bookController.createBook);

router.get("/:bookId", jwtValidMDW, bookController.getBook);
router.get("/", jwtValidMDW, bookController.getAllBooks);

router.put("/:bookId", userIsAdminMDW, bookController.updateBook);

//router.delete("/", userIsAdminMDW, bookController.deleteBook)

module.exports = router;
