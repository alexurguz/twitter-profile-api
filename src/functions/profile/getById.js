const db = require("../../db/db");
const profileGetByIdInteractor = require('../../interactors/profile/getById')(db);
const errors = require("../../errors");
const errorResponse = require('../../utils/errorResponse');
const successResponse = require('../../utils/successResponse');

const getByIdProfile = async (event) => {
    let response;

    try {
        const profileId = event.pathParameters.profileId;

        const getByIdResult = await profileGetByIdInteractor.getByIdProfile(profileId);

		if ( Object.keys(getByIdResult).length === 0 ) {
			throw errors.conflictError('The profile does not exists');
		}

        response = successResponse.success('Successfully get profile by id.', getByIdResult);

    } catch (e) {
		response = errorResponse.error('Failed to get profile by id.', e);
    }

    return response;
};

module.exports = { getByIdProfile };
