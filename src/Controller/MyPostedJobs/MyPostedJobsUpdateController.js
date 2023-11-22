const { ObjectId } = require("mongodb");
const { allJobs } = require("../../Config/MongoDbConfig");

const MyPostedJobsUpdateController = async (req, res, next) => {
  try {
    const id = req?.params.id;
    const filter = { _id: new ObjectId(id) };
    const query = req.body;
    const options = { new: true };
    const updated = await allJobs.findOneAndUpdate(filter, query, options);
    if (!updated) {
      return res.status(206).send("Update job failed");
    }
    res.status(200).send(updated);
  } catch (error) {
    console.log(error);
  }
};
module.exports = MyPostedJobsUpdateController;
