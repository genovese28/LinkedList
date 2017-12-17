const express = require("express");
const { userHandler } = require("../handlers");
const router = express.Router();

router
	.route("")
	.get(userHandler.readUsers)
	.post(userHandler.createUser);

router
	.route("/:username")
	.get(userHandler.readUser)
	.patch(userHandler.updateUser)
	.delete(userHandler.deleteUser);

module.exports = router;
