require("dotenv").config();

const PortNumber = process.env.PORT || process.env.SERVER_PORT;
const MongoDBUrl = process.env.MONGODB_URL_CONNECTIONS;
module.exports = { PortNumber, MongoDBUrl };
