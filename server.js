/** Importing modules */
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./models/db");

require("dotenv").config();

/** Setting the server port */
const port = process.env.PORT || 4000;

/** Database connection */
db();

/** Instantiating express app */
const app = express();

/** Middleware */
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** Routes */
app.get("/", (req, res, next) => {
  res.send("Hey! I am Express API");
});

require("./middleware/router")(app);

/** Listening to server */
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
