const { allJobs } = require("../../Config/MongoDbConfig");

const AddJobsPostController = async (req, res, next) => {
  try {
    const jobsData = req.body;
    const response = await allJobs.insertOne(jobsData);
    if (!response) {
      return res.send("Failed! Your Post was Not Created");
    }
    res.status(200).send(response);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = AddJobsPostController;
