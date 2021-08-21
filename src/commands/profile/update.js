const db = require("../../db/db");
const { UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
const errors = require("../../errors");

const updateProfile = async (profileId, profileData) => {
    try {
		const profileDataKeys = Object.keys(profileData);
		const params = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Key: marshall({ profileId }),
            UpdateExpression: `SET ${profileDataKeys.map((_, index) => `#key${index} = :value${index}`).join(", ")}`,
            ExpressionAttributeNames: profileDataKeys.reduce((acc, key, index) => ({
                ...acc,
                [`#key${index}`]: key,
            }), {}),
            ExpressionAttributeValues: marshall(profileDataKeys.reduce((acc, key, index) => ({
                ...acc,
                [`:value${index}`]: profileData[key],
            }), {})),
        };

        return await db.send(new UpdateItemCommand(params));

    } catch (e) {
    	throw errors.databaseError('Error updating profile into DB');
    }
};

module.exports = {
	updateProfile
}
