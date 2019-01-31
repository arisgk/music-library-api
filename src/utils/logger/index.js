const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.cli(),
  transports: [new winston.transports.Console()],
  exitOnError: false,
  silent: process.env.NODE_ENV === 'TEST',
});

// create a writable object with a 'write' function that can be used by morgan
const writable = {
  write: message => logger.info(message),
};

function info(message) {
  return logger.log({
    level: 'info',
    message,
  });
}

function err(message) {
  return logger.error({
    level: 'error',
    message,
  });
}

module.exports = {
  log: info,
  info,
  error: err,
  raw: logger,
  writable,
};
