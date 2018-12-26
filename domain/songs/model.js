class Song {
  constructor({ id, title, url, artist, album } = {}) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.artist = artist;
    this.album = album;
  }
}

module.exports = Song;
