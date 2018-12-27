require('dotenv').config();

const { port } = require('./config');
const logger = require('./utils/logger');
const songsRepository = require('./data/songs/repository');
const songsService = require('./domain/songs/service');
const httpRouter = require('./router');

const songsRepo = songsRepository.create();
const songsSvc = songsService.create(songsRepo);

const app = httpRouter.create({ songsService: songsSvc });

app.listen(port, () => {
  logger.info(`Listening on *:${port}`);
});
