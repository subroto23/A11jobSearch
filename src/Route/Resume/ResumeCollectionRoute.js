const express = require("express");
const ResumeRoute = express.Router();
const resumePostController = require("../../Controller/Resume/ResumePostController");
const loggedUser = require("../../MiddleWare/LoggedUser");
const VerifyUser = require("../../MiddleWare/VerifyUser");

ResumeRoute.post("/create", loggedUser, VerifyUser, resumePostController);
module.exports = ResumeRoute;
