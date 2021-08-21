const db = require("../../db/db");
const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
const errors = require("../../errors");

const createProfile = async (profileData) => {
    try {
        const params = {
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Item: marshall(profileData || {}),
        };
        return await db.send(new PutItemCommand(params));

    } catch (e) {
    	throw errors.databaseError('Error creating profile into DB');
    }
};

module.exports = {
	createProfile
}