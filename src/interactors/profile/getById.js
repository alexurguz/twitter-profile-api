const profileGetByIdCommand = require('../../commands/profile/getById');
const twitterGetByUserService = require('../../services/twitter/getByUser');
const errors = require("../../errors");

const getByIdProfile = async (profileId) => {
    try {
        let profileById = await profileGetByIdCommand.getByIdProfile(profileId);
		console.log('profileId::',profileId);
		console.log('profileById::',profileById);

		if ( Object.keys(profileById).length > 1 ) {
			const tweetsByUser = await twitterGetByUserService.getByUser(profileId, profileById.screenName);

			if (Array.isArray(tweetsByUser)) {
				profileById.tweets = tweetsByUser;
			}
		}

        return profileById;

    } catch (e) {
		throw errors.databaseError('Error getting the profile into DB');
    }
};

module.exports = { getByIdProfile };