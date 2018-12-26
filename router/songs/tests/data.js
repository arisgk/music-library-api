const Song = require('../../../domain/songs/model');

const data = [
  new Song({
    id: 1,
    title: 'Animals',
    url: 'https://some-host.com/animals',
    artist: 'Muse',
    album: 'The 2nd Law',
  }),
  new Song({
    id: 2,
    title: 'Coming Back to Life',
    url: 'https://some-host.com/coming-back-to-life',
    artist: 'Pink Floyd',
    album: 'The Division Bell',
  }),
  new Song({
    id: 3,
    title: 'Fade to Black',
    url: 'https://some-host.com/fade-to-black',
    artist: 'Ride the Lightning',
    album: 'Metallica',
  }),
];

module.exports = data;
