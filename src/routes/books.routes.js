const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers/index.controller')

router.post("/", bookController.createBook);
router.get("/:bookId", bookController.getBook);

module.exports = router;
