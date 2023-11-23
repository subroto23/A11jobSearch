const { ObjectId } = require("mongodb");
const { allJobs } = require("../../Config/MongoDbConfig");

const MyPostedJobsUpdateController = async (req, res, next) => {
  try {
    const id = req?.params.id;
    const filter = await allJobs.findOne({ _id: new ObjectId(id) });
    const update = { $set: req.body };
    const options = { new: true };
    const updated = await allJobs.findOneAndUpdate(filter, update, options);
    if (!updated) {
      return res.status(206).send("Update job failed");
    }
    res.status(200).send(updated);
  } catch (error) {
    console.log(error);
  }
};
module.exports = MyPostedJobsUpdateController;
