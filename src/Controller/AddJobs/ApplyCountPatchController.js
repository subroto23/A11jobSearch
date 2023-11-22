const { ObjectId } = require("mongodb");
const { allJobs } = require("../../Config/MongoDbConfig");

const applyCountPatchController = async (req, res, next) => {
  try {
    const id = req?.query?.id;
    const filter = await allJobs.findOne({ _id: new ObjectId(id) });
    const update = { $set: req.body };
    const options = { new: true };
    const applyCount = await allJobs.findOneAndUpdate(filter, update, options);
    res.status(200).send(applyCount);
  } catch (error) {
    console.log(error);
  }
};
module.exports = applyCountPatchController;
