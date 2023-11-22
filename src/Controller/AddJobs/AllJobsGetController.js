const { allJobs } = require("../../Config/MongoDbConfig");

const allJobsGetController = async (req, res, next) => {
  try {
    const allJobsData = await allJobs.find().toArray();
    res.status(200).send(allJobsData);
  } catch (error) {
    console.log(error);
  }
};
module.exports = allJobsGetController;
