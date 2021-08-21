const profileGetAllCommand = require('../../commands/profile/getAll');
const errorResponse = require('../../utils/errorResponse');
const successResponse = require('../../utils/successResponse');

const getAllProfiles = async () => {
    let response;

    try {
        const getAllResult = await profileGetAllCommand.getAllProfiles();

        response = successResponse.success('Successfully get all profiles.', getAllResult);

    } catch (e) {
		response = errorResponse.error('Failed to get all profiles.', e);
    }

    return response;
};

module.exports = { getAllProfiles };
