const fetch = require('node-fetch');
const errors = require('../../errors');

const getToken = async () => {
	try {
		//the consumer key 'RFC 1738 encoded'
		const apiKey = encodeURI(process.env.TWITTER_API_KEY);
		//the consumer secret 'RFC 1738 encoded'
		const apiSecretKey = encodeURI(process.env.TWITTER_API_SECRET_KEY);
		//make the bearer token credential string - 
		//the rfc encoded key : the rfc encoded secret
		const bearerTokenCredentials = `${apiKey}:${apiSecretKey}`;
		//encode the credentials to base 64
		const base64BearerTokenCredentials = Buffer.from(
			bearerTokenCredentials
		).toString('base64');
		//create the options object for node-fetch
		const options = {
			headers: {
				accept: 'gzip',
				Authorization: 'Basic ' + base64BearerTokenCredentials,
				'content-type': 'application/x-www-form-urlencoded',
			},
			method: 'POST',
			body: 'grant_type=client_credentials',
		};

		const response = await fetch(process.env.PATH_TWITTER_GET_TOKEN, options);

		const { access_token } = await response.json();
		return `Bearer ${access_token}`;
	} catch (e) {
		throw errors.badRequestError('Error getting data from api');
	}
};

module.exports = {
	getToken
};
