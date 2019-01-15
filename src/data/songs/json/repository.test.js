/* global it, describe */
/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions */
const { expect } = require('chai');
const Song = require('../../../domain/songs/model');
const songsRepository = require('./repository');
const parsedSongs = require('./songs.json');

const songsRepo = songsRepository.create();

const expected = parsedSongs.map(
  song =>
    new Song({
      id: song.id,
      title: song.title,
      url: song.url,
      artist: song.artist,
      album: song.album,
      albumCover: song.albumCover,
      duration: song.duration,
    }),
);

describe('songs JSON repository test', function() {
  describe('list songs', function() {
    it('should return an array of Song objects based on a JSON file', async function() {
      const result = await songsRepo.listSongs();
      expect(result).to.have.lengthOf(12);
      expect(result).to.eql(expected);
    });
  });
});
