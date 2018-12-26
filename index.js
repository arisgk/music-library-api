require('dotenv').config();

const { port } = require('./config');
const logger = require('./utils/logger');
const songsRepositoryFactory = require('./data/songs/repository');
const songsServiceFactory = require('./domain/songs/service');
const httpRouter = require('./router');

const songsRepo = songsRepositoryFactory.create();
const songsSvc = songsServiceFactory.create(songsRepo);

const app = httpRouter.create({ songsService: songsSvc });

app.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});
