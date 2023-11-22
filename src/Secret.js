require("dotenv").config();

const PortNumber = process.env.PORT || process.env.SERVER_PORT;
const MongoDBUrl = process.env.MONGODB_URL_CONNECTIONS;
const apiSecretsKey = process.env.API_SECRET_KEY;

module.exports = { PortNumber, MongoDBUrl, apiSecretsKey };
