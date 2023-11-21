const express = require("express");
const allJobsRoute = express.Router();
const AddJobsPostController = require("../../Controller/AddJobs/AddJobsPostController");
const allJobsGetController = require("../../Controller/AddJobs/AllJobsGetController");

allJobsRoute.get("/", allJobsGetController);
allJobsRoute.post("/create", AddJobsPostController);

module.exports = allJobsRoute;
