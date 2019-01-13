/* global it, describe, beforeEach, afterEach */
/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions */
const { expect } = require('chai');
const sinon = require('sinon');
const Song = require('./model');
const songsRepository = require('../../data/songs/repository');
const songsService = require('./service');

const songsRepo = songsRepository.create();
const songsSvc = songsService.create(songsRepo);

const songs = [
  new Song({
    id: 1,
    title: 'Animals',
    url: 'https://some-host.com/animals',
    artist: 'Muse',
    album: 'The 2nd Law',
    albumCover: 'https://some-host.com/muse-the-2nd-law.jpg',
    duration: 263,
  }),
  new Song({
    id: 2,
    title: 'Coming Back to Life',
    url: 'https://some-host.com/coming-back-to-life',
    artist: 'Pink Floyd',
    album: 'The Division Bell',
    albumCover: 'https://some-host.com/pink-floyd-the-division-bell.jpg',
    duration: 386,
  }),
];

describe('songs service test', function() {
  describe('list songs', function() {
    beforeEach(() => {
      sinon.stub(songsRepo, 'listSongs');
    });

    afterEach(() => {
      songsRepo.listSongs.restore();
    });

    it('should call the repository to fetch the songs', async function() {
      songsRepo.listSongs.resolves(songs);
      const result = await songsSvc.listSongs();
      expect(result).to.have.lengthOf(2);
      expect(result).to.eql(songs);
    });
  });
});
