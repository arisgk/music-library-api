function create(songsRepository) {
  async function listSongs() {
    return songsRepository.listSongs();
  }

  return {
    listSongs,
  };
}

module.exports.create = create;
