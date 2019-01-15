const config = {
  port: process.env.PORT || 5000,
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    songsMetadataBucketName: process.env.AWS_SONGS_METADATA_BUCKET_NAME,
  },
};

module.exports = config;
