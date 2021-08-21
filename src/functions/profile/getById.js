const profileGetByIdInteractor = require('../../interactors/profile/getById');
const errorResponse = require('../../utils/errorResponse');
const successResponse = require('../../utils/successResponse');

const getByIdProfile = async (event) => {
    let response;

    try {
        const profileId = event.pathParameters.profileId;

        const getByIdResult = await profileGetByIdInteractor.getByIdProfile(profileId);

        response = successResponse.success('Successfully get profile by id.', getByIdResult);

    } catch (e) {
		response = errorResponse.error('Failed to get profile by id.', e);
    }

    return response;
};

module.exports = { getByIdProfile };
