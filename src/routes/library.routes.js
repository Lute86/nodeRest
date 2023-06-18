const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library.controller')

router.post("/", libraryController.createLibrary);
router.get("/:libraryId", libraryController.getLibrary);
router.get('/', (req, res)=> {
  //console.log('Library', req.library)
  res.send("<h1>Library</h1>")
});

module.exports = router;
