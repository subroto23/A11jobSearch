const express = require("express");
const MyPostedJobsUpdateController = require("../../Controller/MyPostedJobs/MyPostedJobsUpdateController");
const MyPostedJobsDelateController = require("../../Controller/MyPostedJobs/MyPostedJobsDelateController");
const MyPostedJobsGetBYIdController = require("../../Controller/MyPostedJobs/MyPostedJobsGetBYIdController");
const VerifyUser = require("../../MiddleWare/VerifyUser");
const MyPostedGetJobsController = require("../../Controller/MyPostedJobs/MyPostedGetJobsController");
const loggedUser = require("../../MiddleWare/LoggedUser");
const MyPostedJobsRoute = express.Router();

MyPostedJobsRoute.get("/", loggedUser, VerifyUser, MyPostedGetJobsController);
MyPostedJobsRoute.get(
  "/job/:id",
  loggedUser,
  VerifyUser,
  MyPostedJobsGetBYIdController
);
MyPostedJobsRoute.put(
  "/update/:id",
  loggedUser,
  VerifyUser,
  MyPostedJobsUpdateController
);
MyPostedJobsRoute.delete(
  "/delete/:id",
  loggedUser,
  VerifyUser,
  MyPostedJobsDelateController
);
module.exports = MyPostedJobsRoute;
