const express = require("express");
const resumePostController = require("../../Controller/Resume/ResumePostController");
const ResumeRoute = express.Router();

ResumeRoute.post("/create", resumePostController);
module.exports = ResumeRoute;
