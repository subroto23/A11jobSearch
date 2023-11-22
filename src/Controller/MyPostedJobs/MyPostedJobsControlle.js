const { allJobs } = require("../../Config/MongoDbConfig");

const myPostedJobsController = async (req, res, next) => {
  try {
    const queryData = req?.query?.email;
    const query = { email: queryData };
    const resData = await allJobs.find(query).toArray();
    res.status(200).send(resData);
  } catch (error) {
    console.log(error);
  }
};
module.exports = myPostedJobsController;
