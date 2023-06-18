const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers/index.controller')

router.post("/", bookController.createBook);
router.get("/:bookId", bookController.getBook);
router.get('/', (req, res)=> {
  //console.log('Book', req.library)
  res.send("<h1>Book</h1>")
});

module.exports = router;
