const profileUpdateMapper = payload => ({
	name: payload.name,
	screenName: payload.screenName,
	title: payload.title,
	image: payload.image,
	description: payload.description,
  });

  module.exports = {
	profileUpdateMapper
  };