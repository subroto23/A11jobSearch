const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const addJobsRoute = require("./Route/AddJobs/AddJobsRouter");
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

//All Routes Start
app.use("/jobs", addJobsRoute);
//All Routes End

//Error Routing
app.use((err, req, res, next) => {
  console.log(err);
  res.statusCode(500).send("Something went wrong");
});
module.exports = app;
