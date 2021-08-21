const success = (msg, resultData) => {
	const successResponse = {
		statusCode: 200,
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