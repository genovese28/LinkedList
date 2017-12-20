const express = require("express");
const { jobHandler } = require("../handlers");
const router = express.Router();

router
	.route("")
	.get(jobHandler.readJobs)
	.post(jobHandler.createJob);

router
	.route("/:id")
	.get(jobHandler.readJob)
	.patch(jobHandler.updateJob)
	.delete(jobHandler.deleteJob);

module.exports = router;
