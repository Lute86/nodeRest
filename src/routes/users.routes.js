const express = require('express');
const router = express.Router();
const { userController } = require('../controllers/index.controller')



/** GET Methods */
    /**
     * @openapi
     * '/user/{userid}':
     *  get:
     *     tags:
     *     - User Controller
     *     summary: Get a user by username
     *     parameters:
     *      - name: username
     *        in: path
     *        description: The username of the user
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
router.get("/", (req, res) => {
  console.log("User", req.user);
  res.send("<h1>User</h1>");
});
router.post("/", userController.createUser);
router.get("/:userId", userController.getUser);



module.exports = router;
