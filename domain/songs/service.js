function create(repository) {
  async function listSongs() {
    return repository.listSongs();
  }

  return {
    listSongs,
  };
}

module.exports.create = create;
