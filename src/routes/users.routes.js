const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/index.controller')

router.post("/", userController.createUser);
router.get("/:userId", userController.getUser);
router.get("/", (req, res) => {
  //console.log("User", req.user);
  res.send("<h1>User</h1>");
});



module.exports = router;
