const { createLogger, format, transports } = require("winston");
require("winston-mongodb");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.prettyPrint(),
    format.errors({ stack: true }),
    format.splat(),
    format.metadata(),
    format.json()
  ),
  defaultMeta: { service: "moviesBackend" },
  transports: [
    new transports.File({ filename: "errorLogs.log", level: "error" }),
    new transports.File({ filename: "logfile.log" }),
    new transports.MongoDB({
      db: "mongodb://localhost/movies",
      level: "error",
    }),
    new transports.Console(),
  ],
});

module.exports = function () {
  process.on("uncaughtException", (ex) => {
    console.log("WE GOT AN UNCAUGHT EXCEPTION");
    logger.log("error", ex.message, ex);
  });

  process.on("unhandledRejection", (ex) => {
    console.log("WE GOT AN UNHANDLED REJECTION");
    logger.log("error", ex.message, ex);
  });
};

module.exports.logger = logger;
