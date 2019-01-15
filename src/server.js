require('dotenv').config();

const config = require('./config');
const aws = require('./data/shared/aws');
const logger = require('./utils/logger');
const songsRepository = require('./data/songs/s3/repository');
const songsService = require('./domain/songs/service');
const httpRouter = require('./router');
const websockets = require('./websockets');

const { s3 } = aws.setup(config.aws);

const songsRepo = songsRepository.create(s3, config.aws);
const songsSvc = songsService.create(songsRepo);

const app = httpRouter.create({ songsService: songsSvc });
websockets.create({ httpServer: app });

app.listen(config.port, () => {
  logger.info(`Listening on *:${config.port}`);
});
