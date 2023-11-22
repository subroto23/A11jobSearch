const { applyicants } = require("../../Config/MongoDbConfig");

const resumePostController = async (req, res, next) => {
  try {
    const data = req.body;
    const postData = await applyicants.insertOne(data);
    if (!postData) {
      return res.send("Failed! Your Post was Not Created");
    }
    res.status(200).send(postData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = resumePostController;
