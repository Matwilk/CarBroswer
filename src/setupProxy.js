const { createProxyMiddleware } = require('http-proxy-middleware');
const AWS = require('aws-sdk');
const region = "eu-west-1";
const secretName = "cbe-staging";
let secret;
let decodedBinarySecret;
const keyedSecrets = {};

// Create a Secrets Manager client
const client = new AWS.SecretsManager({
    region: region
});

const secretCallbackWrapper = key => (err, data) => {
  if (err) {
    if (err.code === 'DecryptionFailureException')
      // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
    else if (err.code === 'InternalServiceErrorException')
      // An error occurred on the server side.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
    else if (err.code === 'InvalidParameterException')
      // You provided an invalid value for a parameter.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
    else if (err.code === 'InvalidRequestException')
      // You provided a parameter value that is not valid for the current state of the resource.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
    else if (err.code === 'ResourceNotFoundException')
      // We can't find the resource that you asked for.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
  }
  else {
    // store the keyed value
    keyedSecrets[key] = JSON.parse(data['SecretString']);
  }
};

// Prepare the secrets lookup
client.getSecretValue({SecretId: 'cbe-wilks'}, secretCallbackWrapper('wilks-cbe'));
client.getSecretValue({SecretId: 'cbe-staging'}, secretCallbackWrapper('staging'));
client.getSecretValue({SecretId: 'cbe-prod'}, secretCallbackWrapper('prod'));

module.exports = function(app) {
  app.use('/api/:env', 
    createProxyMiddleware({
      target: "https://api.hmhost.co.uk/",
      pathRewrite: {
        '^/api': '', // remove /api
      },
      onProxyReq(proxyReq, req, res) {
        proxyReq.setHeader('x-api-key', keyedSecrets[req.params.env]['ApiKey']);
      },
      changeOrigin: true
    })
  );
}