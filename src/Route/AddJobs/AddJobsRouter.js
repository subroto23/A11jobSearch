const express = require("express");
const allJobsRoute = express.Router();
const AddJobsPostController = require("../../Controller/AddJobs/AddJobsPostController");
const allJobsGetController = require("../../Controller/AddJobs/AllJobsGetController");
const allJobsGetByIdController = require("../../Controller/AddJobs/AllJobsGetByIdController");
const applyCountPatchController = require("../../Controller/AddJobs/ApplyCountPatchController");
const loggedUser = require("../../MiddleWare/LoggedUser");

allJobsRoute.get("/", allJobsGetController);
allJobsRoute.get("/job/:id", allJobsGetByIdController);
allJobsRoute.patch("/job", applyCountPatchController);
allJobsRoute.post("/create", loggedUser, AddJobsPostController);

module.exports = allJobsRoute;
