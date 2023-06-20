const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/library.controller')
const { jwtValidMDW, userIsAdminMDW } = require("../middleware/auth.mdw");


router.post("/", userIsAdminMDW, libraryController.createLibrary);
router.get("/:libraryId", jwtValidMDW, libraryController.getLibrary);
router.get("/", jwtValidMDW, libraryController.getAllLibraries);

// router.get('/', jwtValidMDW, (req, res)=> {
//   console.log('Library', req.user)
//   res.send("<h1>Library</h1>")
// });

module.exports = router;
