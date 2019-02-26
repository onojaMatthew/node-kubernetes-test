require("dotenv").config();

const DB_USER = process.env.MONGODB_USER;
const DB_PASSWORD = process.env.MONGODB_PASSWORD;
const DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@ds131323.mlab.com:31323/kubernetes`;

module.exports = {
  development: {
    name: "development",
    db_url: DB_URL
  },
  production: {
    name: "production",
    db_url: DB_URL
  },
}