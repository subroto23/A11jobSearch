const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const addJobsRoute = require("./Route/AddJobs/AddJobsRouter");
const ResumeRoute = require("./Route/Resume/ResumeCollectionRoute");
const secureApiRoute = require("./Route/SecureApi/SecureApiRoute");
const MyPostedJobsRoute = require("./Route/MyPostedJobs/MyPostedJobsRoute");
const app = express();

//MiddleWare Declarations
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Secure Api
app.use("/secure/api", secureApiRoute);

//All Routes Start
app.use("/jobs", addJobsRoute);

//Resume Route
app.use("/resume", ResumeRoute);

//My Jobs Route
app.use("/api/my-jobs", MyPostedJobsRoute);

//All Routes End

//Error Routing
app.use((err, req, res, next) => {
  console.log(err);
  res.statusCode(500).send("Something went wrong");
});
module.exports = app;
