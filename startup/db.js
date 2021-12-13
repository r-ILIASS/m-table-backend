const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/movies")
    .then(() => console.log("Connected to MongoDB..."));
};
