const profileCreateMapper = payload => ({
	profileId: payload.profileId,
	name: payload.name,
	lastName: payload.lastName,
	title: payload.title,
	image: payload.image,
	description: payload.description,
  });

  module.exports = {
	profileCreateMapper
  };