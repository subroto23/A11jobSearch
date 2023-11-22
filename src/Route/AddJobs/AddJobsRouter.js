const express = require("express");
const allJobsRoute = express.Router();
const AddJobsPostController = require("../../Controller/AddJobs/AddJobsPostController");
const allJobsGetController = require("../../Controller/AddJobs/AllJobsGetController");
const allJobsGetByIdController = require("../../Controller/AddJobs/AllJobsGetByIdController");

allJobsRoute.get("/", allJobsGetController);
allJobsRoute.get("/job/:id", allJobsGetByIdController);
allJobsRoute.post("/create", AddJobsPostController);

module.exports = allJobsRoute;
