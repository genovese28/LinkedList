const express = require("express");
const { userHandler } = require("../handlers");
const router = express.Router();

router
  .route('/')
  .post(userHandler.createUser);

  module.exports = router;
