const express = require("express");
const addJobsRoute = express.Router();
const AddJobsPostController = require("../../Controller/AddJobs/AddJobsPostController");

//Post Request Handler
addJobsRoute.post("/create", AddJobsPostController);

module.exports = addJobsRoute;
