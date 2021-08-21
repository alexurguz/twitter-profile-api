const db = require("../../db/db");
const { GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
const errors = require("../../errors");

const getByIdProfile = async (profileId) => {
    try {
        const params = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Key: marshall({ profileId }),
        };

		const { Item } = await db.send(new GetItemCommand(params));
        return (Item) ? unmarshall(Item) : {};

    } catch (e) {
    	throw errors.databaseError('Error getting the profile into DB');
    }
};

module.exports = {
	getByIdProfile
}