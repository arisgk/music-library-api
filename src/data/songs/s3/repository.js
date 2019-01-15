const Song = require('../../../domain/songs/model');

/**
 * Get an object from a s3 bucket
 *
 * @param  {string} key - Object location in the bucket
 * @return {object}     - A promise containing the response
 */

function create(s3, awsConfig) {
  async function listSongs() {
    let data = [];

    try {
      const params = {
        Bucket: awsConfig.songsMetadataBucketName,
        Key: 'songs.json',
      };

      const jsonData = await s3.getObject(params).promise();
      data = JSON.parse(jsonData.Body);
    } catch (err) {
      throw new Error(`Error in getting songs from Amazon S3: ${err.message}`);
    }

    return data.map(
      song =>
        new Song({
          id: song.id,
          title: song.title,
          url: song.url,
          artist: song.artist,
          album: song.album,
          albumCover: song.albumCover,
          duration: song.duration,
        }),
    );
  }

  return {
    listSongs,
  };
}

module.exports.create = create;
