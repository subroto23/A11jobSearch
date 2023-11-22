const express = require("express");
const ResumeRoute = express.Router();
const resumePostController = require("../../Controller/Resume/ResumePostController");

ResumeRoute.post("/create", resumePostController);
module.exports = ResumeRoute;
