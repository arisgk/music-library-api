const SocketIO = require('socket.io');

const suggestionsRoom = 'song-suggestions';
const joinRoomEvent = 'join';
const playingSongEvent = 'playing song';
const songSuggestionEvent = 'song suggestion';

function create({ httpServer }) {
  const io = SocketIO(httpServer);

  io.on('connection', socket => {
    socket.on(joinRoomEvent, room => {
      socket.join(room);
    });

    socket.on(playingSongEvent, song => {
      socket.to(suggestionsRoom).emit(songSuggestionEvent, song);
    });
  });
}

module.exports.create = create;
