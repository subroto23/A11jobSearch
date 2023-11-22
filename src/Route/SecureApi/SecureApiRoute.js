const express = require("express");
const SecureApiPostController = require("../../Controller/SecureApiController/SecureApiController");
const secureApiRoute = express.Router();

secureApiRoute.post("/", SecureApiPostController);
module.exports = secureApiRoute;
