const profileCreateCommand = require('../../commands/profile/create');
const profileGetByIdCommand = require('../../commands/profile/getById');
const { profileCreateMapper } = require('../../mappers/profile/create');
const errors = require("../../errors");
const errorResponse = require('../../utils/errorResponse');
const successResponse = require('../../utils/successResponse');

const createProfile = async (event) => {
    let response;

    try {
        const body = JSON.parse(event.body);
		const profileData = profileCreateMapper(body);

		const profileById = await profileGetByIdCommand.getByIdProfile(profileData.profileId);

		if ( Object.keys(profileById).length > 0 ) {
		  throw errors.conflictError('The profile already exists');
		}

        await profileCreateCommand.createProfile(profileData);
        response = successResponse.success('Successfully created profile.', profileData);

    } catch (e) {
        response = errorResponse.error('Failed to create profile.', e);
    }

	return response;
};

module.exports = { createProfile };
