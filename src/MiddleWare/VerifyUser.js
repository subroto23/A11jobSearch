const jwt = require("jsonwebtoken");
const { apiSecretsKey } = require("../Secret");

const VerifyUser = (req, res, next) => {
  const token = req?.cookies?.access_token;
  if (!token) {
    return res.status(403).send({ message: "unauthorized access" });
  }
  jwt.verify(token, apiSecretsKey, (err, decode) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decode;
    next();
  });
  next();
};
module.exports = VerifyUser;
