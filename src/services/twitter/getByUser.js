
const authorization = require('./authorization');
const { DEFAULT_COUNT_TWEETS } = require('../../utils/constants');
const fetch = require('node-fetch');
const errors = require('../../errors');

const getByUser = async (userId, screenName) => {
	try {
		const token = await authorization.getToken();

		const options = {
			headers: {
				Authorization: token
			},
			method: 'GET'
		};
		const urlParams = `&count=${DEFAULT_COUNT_TWEETS}&screen_name=${screenName}&user_id=${userId}&exclude_replies=true`;

		const usersTwitter = await fetch(`${process.env.PATH_TWITTER_GET_TWEETS}${urlParams}`, options);

		const usersTwitterJSON = await usersTwitter.json();
		let userTwitterResult = usersTwitterJSON.map( userTwitter => {
            const userTwitterReturn = {
                user: userTwitter.user.name,
				text: userTwitter.text,
				profile_image: userTwitter.user.profile_image_url
            }
            return userTwitterReturn;
        });

		return userTwitterResult;
	} catch (e) {
		throw errors.badRequestError('Error getting data from api');
	}
};

module.exports = {
	getByUser
};
