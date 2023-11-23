const { allJobs } = require("../../Config/MongoDbConfig");

const MyPostedGetJobsController = async (req, res, next) => {
  try {
    const query = { email: req.query?.email };
    if (req.query?.email !== req.user.email) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    const myPostDatas = await allJobs.find(query).toArray();
    res.status(200).send(myPostDatas);
  } catch (error) {
    console.log(error);
  }
};
module.exports = MyPostedGetJobsController;
