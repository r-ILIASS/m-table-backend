const { logger } = require("../startup/logging.js");

module.exports = function (err, req, res, next) {
  console.error(new Error("Something went wrong"));
  logger.log("error", err.message, err);

  res.status(500).send("Something went wrong.");
};
