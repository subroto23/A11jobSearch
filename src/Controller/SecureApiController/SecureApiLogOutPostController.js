const secureApiLogOutPostController = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token", {
        maxAge: 0,
        domain: "https://a11-client-side-search-job.vercel.app/",
        secure: true, // Ensure the secure attribute matches the original cookie
        sameSite: "None",
      })
      .send({ success: true });
  } catch (error) {
    console.log(err);
  }
};
module.exports = secureApiLogOutPostController;
