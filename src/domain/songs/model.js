class Song {
  constructor({ id, title, url, artist, album, albumCover, duration } = {}) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.artist = artist;
    this.album = album;
    this.albumCover = albumCover;
    this.duration = duration;
  }
}

module.exports = Song;
