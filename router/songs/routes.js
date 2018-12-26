const express = require('express');
const asyncHandler = require('../utils/asyncHandler');

const router = express.Router();

function create(service) {
  router.get(
    '/',
    asyncHandler(async (req, res) => {
      const songs = await service.listSongs();
      res.json(songs);
    }),
  );

  return router;
}

module.exports.create = create;
