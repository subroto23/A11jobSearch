const app = require("./src/App");
const { mongodbConnection, allJobs } = require("./src/Config/MongoDbConfig");
const { PortNumber } = require("./src/Secret");

//Server Home page
app.get("/", (req, res) => {
  res.send("Welcome to Our Server");
});

//Server Running Check
app.listen(PortNumber, async () => {
  console.log(`Server is running http://localhost:${PortNumber}`);
  //Mongodb Connections
  await mongodbConnection();
});
