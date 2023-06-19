const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/index.controller')

router.get("/", (req, res) => {
  console.log("User", req.user);
  res.send("<h1>User</h1>");
});
router.post("/", userController.createUser);
router.get("/:userId", userController.getUser);



module.exports = router;
