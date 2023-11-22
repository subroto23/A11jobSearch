const jwt = require("jsonwebtoken");
const { apiSecretsKey } = require("../../Secret");
const SecureApiPostController = async (req, res, next) => {
  try {
    const token = jwt.sign(req.body, apiSecretsKey, { expiresIn: "24h" });
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        samesite: "none",
      })
      .send({ success: true });
  } catch (error) {
    console.log(error);
  }
};
module.exports = SecureApiPostController;
