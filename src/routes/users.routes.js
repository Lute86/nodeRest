const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/index.controller')

router.post("/", userController.createUser);
router.get("/:userId", userController.getUser);

module.exports = router;
