const { ObjectId } = require("mongodb");
const { allJobs } = require("../../Config/MongoDbConfig");

const MyPostedJobsDelateController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const resData = await allJobs.findOneAndDelete({ _id: new ObjectId(id) });
    res.status(200).send({ message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = MyPostedJobsDelateController;
