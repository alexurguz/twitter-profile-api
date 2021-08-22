const db = require("../../db/db");
const profileGetAllCommand = require('../../commands/profile/getAll')(db);
const errorResponse = require('../../utils/errorResponse');
const successResponse = require('../../utils/successResponse');

const getAllProfiles = async () => {
    let response;

    try {
        const getAllResult = await profileGetAllCommand.getAllProfiles();
		console.log('getAllResult::',getAllResult);
        response = successResponse.success('Successfully get all profiles.', getAllResult);

    } catch (e) {
		console.log('error::',JSON.stringify(e));
		response = errorResponse.error('Failed to get all profiles.', e);
    }

    return response;
};

module.exports = { getAllProfiles };
