const error = (msg, error) => {
	const statusCode = error.statusCode ? error.statusCode : 500;
	const errorResponse = {
		statusCode,
		body :  JSON.stringify({
			message: msg,
			errorMsg: error.message
		})
	}
	return errorResponse;
}

module.exports = {
	error,
}