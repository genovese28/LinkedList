const express = require("express");
const { companyHandler } = require("../handlers");
const router = express.Router();

router
	.route("")
	.get(companyHandler.readCompanies)
	.post(companyHandler.createCompany);

router
	.route("/:handle")
	.get(companyHandler.readCompany)
	.patch(companyHandler.updateCompany)
	.delete(companyHandler.deleteCompany);

module.exports = router;
