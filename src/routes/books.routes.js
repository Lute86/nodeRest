const express = require('express');
const router = express.Router();
const { bookController } = require('../controllers/index.controller')
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth.mdw");


router.post("/", userIsAdminMDW, bookController.createBook);

router.get("/:bookId", jwtValidMDW, bookController.getBook);

router.get('/', (req, res)=> {
  console.log('Book', req)
  res.send("<h1>Book</h1>")
});

module.exports = router;
