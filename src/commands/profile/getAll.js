const db = require("../../db/db");
const { ScanCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const errors = require("../../errors");

const getAllProfiles = async () => {
    try {
		const { Items } = await db.send(new ScanCommand({ TableName: process.env.DYNAMODB_TABLE_NAME }));
        return Items.map((item) => unmarshall(item));

    } catch (e) {
    	throw errors.databaseError('Error getting the profiles into DB');
    }
};

module.exports = {
	getAllProfiles
}