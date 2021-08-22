const db = require("../../db/db");
const profileUpdateCommand = require('../../commands/profile/update')(db);
const profileGetByIdCommand = require('../../commands/profile/getById')(db);
const { profileUpdateMapper } = require('../../mappers/profile/update');
const errors = require("../../errors");
const errorResponse = require('../../utils/errorResponse');
const successResponse = require('../../utils/successResponse');

const updateProfile = async (event) => {
    let response;

    try {
        const body = JSON.parse(event.body);
		const profileData = profileUpdateMapper(body);
		const profileId = event.pathParameters.profileId

		const profileById = await profileGetByIdCommand.getByIdProfile(profileId);

		if ( Object.keys(profileById).length === 0 ) {
		  throw errors.conflictError('The profile does not exists');
		}

        const updateResult = await profileUpdateCommand.updateProfile(profileId, profileData);
        response = successResponse.success('Successfully updated profile.', profileData);

    } catch (e) {
        response = errorResponse.error('Failed to upadte profile.', e);
    }

    return response;
};

module.exports = { updateProfile };
