const secureApiLogOutPostController = async (req, res, next) => {
  try {
    res.clearCookie("access_token", { maxAge: 0 }).send({ success: true });
  } catch (error) {
    console.log(err);
  }
};
module.exports = secureApiLogOutPostController;
