const Song = require('../../../domain/songs/model');

const data = [
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
  new Song({
    id: 3,
    title: 'Fade to Black',
    url: 'https://some-host.com/fade-to-black',
    artist: 'Ride the Lightning',
    album: 'Metallica',
    albumCover: 'https://some-host.com/metallica-ride-the-lightning.jpeg',
    duration: 420,
  }),
];

module.exports = data;
