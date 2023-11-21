const { allJobs } = require("../../Config/MongoDbConfig");

const allJobsGetController = async (req, res, next) => {
  try {
    const allJobsData = await allJobs.find();
    console.log(allJobsData);
  } catch (error) {
    console.log(error);
  }
};
module.exports = allJobsGetController;
