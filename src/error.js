const internalError = (message, internalCode, statusCode) => ({
	message,
	internalCode,
	statusCode,
  });

  exports.DATABASE_ERROR = 'database_error';
  exports.databaseError = message => internalError(message, exports.DATABASE_ERROR, 503);

  exports.DEFAULT_ERROR = 'default_error';
  exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR, 500);

  exports.BAD_REQUEST_ERROR = 'bad_request_error';
  exports.badRequestError = message => internalError(message, exports.BAD_REQUEST_ERROR, 400);

  exports.CONFLICT_ERROR = 'conflict_error';
  exports.conflictError = message => internalError(message, exports.CONFLICT_ERROR, 409);

  exports.UNAUTHORIZED_ERROR = 'unauthorized_error';
  exports.unauthorizedError = message => internalError(message, exports.UNAUTHORIZED_ERROR, 401);