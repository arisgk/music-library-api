const express = require('express');
const cors = require('cors');
const compress = require('compression')();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const songsRoutes = require('./songs/routes');
const logger = require('../utils/logger');
const errorHandler = require('./errors');
const notFoundMiddleware = require('./errors/notFound');

const app = express();

app
  .use(helmet())
  .use(bodyParser.json())
  .use(compress)
  .use(cors())
  .use(morgan('combined', { stream: logger.raw.stream }));

function create({ songsService }) {
  app.use('/songs', songsRoutes.create(songsService));
  app.use(errorHandler);
  app.use(notFoundMiddleware);
  return app;
}

module.exports.create = create;
