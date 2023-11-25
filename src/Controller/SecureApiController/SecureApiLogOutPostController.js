const secureApiLogOutPostController = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token", {
        path: "/",
        domain: "job-search-plum.vercel.app",
        maxAge: 0,
      })
      .send({ success: true });
  } catch (error) {
    console.log(err);
  }
};
module.exports = secureApiLogOutPostController;
