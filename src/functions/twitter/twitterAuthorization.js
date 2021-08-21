const twitterAuthorizationService = require('../../services/twitter/authorization');
const errorResponse = require('../../utils/errorResponse');
const successResponse = require('../../utils/successResponse');

const getToken = async () => {
    let response;

    try {

        const tokenResult = await twitterAuthorizationService.getToken();
        response = successResponse.success('Successfully get token.', tokenResult);

    } catch (e) {
        response = errorResponse.error('Failed to get the token.', e);
    }

    return response;
};

module.exports = { getToken };
