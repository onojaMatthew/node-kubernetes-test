const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds131323.mlab.com:31323/kubernetes`, { useNewUrlParser: true })
  .then(() => {
    console.log("Connection to database established");
  })
  .catch((err) => {
    console.log(`Failed to connect to database. ${err.message}`);
  });

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("Welcome to Express API");
});

require("./middleware/router")(app);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
