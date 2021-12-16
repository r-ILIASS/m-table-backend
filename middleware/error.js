const { createLogger, format, transports } = require("winston");
require("winston-mongodb");

module.exports = function (err, req, res, next) {
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
      //
      // - Write to all logs with level `info` and below to `quick-start-combined.log`.
      // - Write all logs error (and below) to `quick-start-error.log`.
      //
      new transports.File({ filename: "errorLogs.log", level: "error" }),
      new transports.File({ filename: "logfile.log" }),
      new transports.MongoDB({
        db: "mongodb://localhost/movies",
        level: "error",
      }),
      new transports.Console(),
    ],
  });

  console.error(new Error("Something went wrong"));
  logger.log("error", err.message, err);

  res.status(500).send("Something went wrong.");
};
