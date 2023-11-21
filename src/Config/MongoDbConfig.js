const { MongoClient, ServerApiVersion } = require("mongodb");
const { MongoDBUrl } = require("../Secret");

console.log(MongoDBUrl);
//Mongodb Client
const client = new MongoClient(MongoDBUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//
const mongodbConnection = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    console.log("Mongodb Connected Successfully");
  } catch (error) {
    console.log("Mongodb Not Connected");
  }
};

const allJobs = client.db("jobs").collection("alljobs");
module.exports = {
  mongodbConnection,
  allJobs,
};
