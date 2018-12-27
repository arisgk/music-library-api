const fs = require('fs');
const util = require('util');
const path = require('path');
const Song = require('../../domain/songs/model');

const readFile = util.promisify(fs.readFile);

function create() {
  async function listSongs() {
    const jsonData = await readFile(path.resolve(__dirname, 'songs.json'));

    let data = [];

    try {
      data = JSON.parse(jsonData);
    } catch (err) {
      throw new Error(`Error parsing JSON: ${err.message}`);
    }

    return data.map(
      song =>
        new Song({
          id: song.id,
          title: song.title,
          url: song.url,
          artist: song.artist,
          album: song.album,
        }),
    );
  }

  return {
    listSongs,
  };
}

module.exports.create = create;
