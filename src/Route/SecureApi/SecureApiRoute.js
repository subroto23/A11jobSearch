const express = require("express");
const SecureApiPostController = require("../../Controller/SecureApiController/SecureApiController");
const secureApiLogOutPostController = require("../../Controller/SecureApiController/SecureApiLogOutPostController");
const secureApiRoute = express.Router();

//Logged In User
secureApiRoute.post("/", SecureApiPostController);
//Logged Out User
secureApiRoute.post("/logout", secureApiLogOutPostController);
module.exports = secureApiRoute;
