require('dotenv').config();
const AWS = require('aws-sdk');

// Configuring the AWS SDK with your credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION // Optional
});

// Example: creating an S3 service object
const s3 = new AWS.S3();

