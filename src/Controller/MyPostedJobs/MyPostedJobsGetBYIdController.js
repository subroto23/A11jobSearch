const { ObjectId } = require("mongodb");
const { allJobs } = require("../../Config/MongoDbConfig");

const MyPostedJobsGetBYIdController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await allJobs.findOne({ _id: new ObjectId(id) });
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};
module.exports = MyPostedJobsGetBYIdController;
