const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

async function accessSecretVersion() {
  const client = new SecretManagerServiceClient();
  const name = 'projects/my-project/secrets/CLIENT_KEY/versions/latest';
  
  const [version] = await client.accessSecretVersion({name});
  const payload = version.payload.data.toString('utf8');

  console.log(`Payload: ${payload}`);
}

accessSecretVersion();
