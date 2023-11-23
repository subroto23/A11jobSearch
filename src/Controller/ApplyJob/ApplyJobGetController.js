const { ObjectId } = require("mongodb");
const { applyicants, allJobs } = require("../../Config/MongoDbConfig");

const ApplyJobGetController = async (req, res, next) => {
  try {
    const query = { email: req.query?.email };
    if (req.user.email !== req.query?.email) {
      return res.status(403).send({ message: "Unauthorized Access" });
    }
    const applyJobDatas = await applyicants.find(query).toArray();
    const applyJobId = applyJobDatas.map(
      (data) => new ObjectId(data.applyJobId)
    );
    //
    const projection = {
      jobCreator: 0,
      shortDetails: 0,
      cretedDate: 0,
      banner: 0,
      email: 0,
    };
    const applyValue = await allJobs
      .find({ _id: { $in: applyJobId } })
      .project(projection)
      .toArray();
    res.status(200).send(applyValue);
  } catch (error) {
    console.log(error);
  }
};
module.exports = ApplyJobGetController;
