const express = require("express");
const ApplyJobGetController = require("../../Controller/ApplyJob/ApplyJobGetController");
const ApplyJobsRoute = express.Router();

ApplyJobsRoute.get("/", ApplyJobGetController);
module.exports = ApplyJobsRoute;
