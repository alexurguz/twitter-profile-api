const success = (msg, resultData) => {
	const successResponse = {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify({
			message: msg,
			data: resultData
		})
	}
	return successResponse;
}

module.exports = {
	success,
}