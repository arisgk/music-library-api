const AWS = require('aws-sdk');

function setup(awsConfig) {
  const credentials = new AWS.Credentials(
    awsConfig.accessKeyId,
    awsConfig.secretAccessKey,
  );

  const s3 = new AWS.S3({ apiVersion: '2006-03-01', credentials });

  return {
    s3,
  };
}

module.exports.setup = setup;
