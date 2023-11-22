const express = require("express");
const myPostedJobsController = require("../../Controller/MyPostedJobs/MyPostedJobsControlle");
const MyPostedJobsUpdateController = require("../../Controller/MyPostedJobs/MyPostedJobsUpdateController");
const MyPostedJobsDelateController = require("../../Controller/MyPostedJobs/MyPostedJobsDelateController");
const MyPostedJobsGetBYIdController = require("../../Controller/MyPostedJobs/MyPostedJobsGetBYIdController");
const MyPostedJobsRoute = express.Router();

MyPostedJobsRoute.get("/", myPostedJobsController);
MyPostedJobsRoute.get("/job/:id", MyPostedJobsGetBYIdController);
MyPostedJobsRoute.put("/update/:id", MyPostedJobsUpdateController);
MyPostedJobsRoute.delete("/delete/:id", MyPostedJobsDelateController);
module.exports = MyPostedJobsRoute;
