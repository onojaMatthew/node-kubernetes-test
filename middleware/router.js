const messageRoutes = require("../routes/api");

module.exports = function(app) {
  app.use("/api", messageRoutes);
}