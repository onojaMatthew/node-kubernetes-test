const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connection to database successful");
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

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
