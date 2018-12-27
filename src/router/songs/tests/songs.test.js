/* global it, describe, beforeEach, afterEach */
/* eslint-disable prefer-arrow-callback, func-names, no-unused-expressions */
const request = require('supertest');
const { expect } = require('chai');
const sinon = require('sinon');
const httpRouter = require('../../index');
const songsService = require('../../../domain/songs/service');
const data = require('./data');

const songsRepo = sinon.stub();
const songsSvc = songsService.create(songsRepo);
const app = httpRouter.create({ songsService: songsSvc });

describe('songs route test', function() {
  describe('GET /songs test', function() {
    beforeEach(() => {
      sinon.stub(songsSvc, 'listSongs');
    });

    afterEach(() => {
      songsSvc.listSongs.restore();
    });

    it('should return 200 and an array of songs on success', async function() {
      songsSvc.listSongs.resolves(data);

      const response = await request(app)
        .get('/songs')
        .expect(200);

      expect(response.body).to.eql(data);
    });

    it('should return 500 when the service rejects with an error', function() {
      const err = new Error('Some Error');
      songsSvc.listSongs.rejects(err);

      return request(app)
        .get('/songs')
        .expect(500)
        .catch(error => {
          expect(error).to.be.equal(err);
        });
    });
  });
});
