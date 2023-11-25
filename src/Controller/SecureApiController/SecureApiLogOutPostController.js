const secureApiLogOutPostController = async (req, res, next) => {
  try {
    res.clearCookie("access_token").send({ success: true });
  } catch (error) {
    console.log(err);
  }
};
module.exports = secureApiLogOutPostController;
