const secureApiLogOutPostController = async (req, res, next) => {
  try {
    await res
      .clearCookie("access_token", {
        path: "/",
        domain: "job-search-plum.vercel.app",
        maxAge: 0,
      })
      .send({ success: "Logout" });
  } catch (error) {
    console.log(err);
  }
};
module.exports = secureApiLogOutPostController;
