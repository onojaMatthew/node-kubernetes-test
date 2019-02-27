const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function() {
  mongoose.Promise = global.Promise;
  mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds131323.mlab.com:31323/${process.env.MONGO_DB}`, { useNewUrlParser: true })
    .then(() => {
      console.log("Connection to database established");
    })
    .catch((err) => {
      console.log(`Failed to connect to database. ${err.message}`);
    });
}