require("express-async-errors");
const winston = require("winston");
require("winston-mongodb");

module.exports = function () {
  process.on("uncaughtException", (ex) => {
    winston.error(ex.message);
    process.exit(1);
  });

  process.on("unhandledRejection", (ex) => {
    winston.error(ex.message);
    process.exit(1);
  });

  winston.configure({
    transports: [new winston.transports.File({ filename: "logfile.log" })],
  });

  winston.add(
    new winston.transports.MongoDB({
      db: "mongodb://localhost/movies",
      level: "error",
    })
  );
};
