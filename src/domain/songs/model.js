class Song {
  constructor({ id, title, url, artist, album, duration } = {}) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
  }
}

module.exports = Song;
