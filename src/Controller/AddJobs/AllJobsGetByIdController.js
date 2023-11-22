const { ObjectId } = require("mongodb");
const { allJobs } = require("../../Config/MongoDbConfig");

const allJobsGetByIdController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const jobData = await allJobs.findOne({ _id: new ObjectId(id) });
    res.status(200).send(jobData);
  } catch (error) {
    console.log(error);
  }
};
module.exports = allJobsGetByIdController;
