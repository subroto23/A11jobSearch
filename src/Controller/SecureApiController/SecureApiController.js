const jwt = require("jsonwebtoken");
const { apiSecretsKey } = require("../../Secret");
const SecureApiPostController = async (req, res, next) => {
  try {
    const token = jwt.sign(req.body, apiSecretsKey, { expiresIn: "24h" });
    res.cookie("access_token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
      path: "/",
      domain: "job-search-plum.vercel.app",
    });
    res.send({ success: true });
  } catch (error) {
    console.log(error);
  }
};
module.exports = SecureApiPostController;
