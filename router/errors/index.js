const logger = require('../../utils/logger');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const status = err.status || 500;

  logger.error(
    `${status} - ${err.message} - ${req.method} ${req.originalUrl} - ${req.ip}`,
  );

  res.status(status);
  res.json({ error: err.message, status });
}

module.exports = errorHandler;
