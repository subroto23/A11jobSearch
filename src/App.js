const express = require("express");
const cors = require("cors");
const app = express();

//MiddleWare Declarations
app.use(
  cors({
    origin: ["http://localhost:5173/"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//All Routes Start

//Error Routing
app.use((err, req, res, next) => {
  console.log(err);
  res.statusCode(500).send("Something went wrong");
});
module.exports = app;
