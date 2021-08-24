const errors = require('@feathersjs/errors');

module.exports = hook => {
	const { data } = hook;

	if (!data.hasOwnProperty('email')) {
		throw new errors.BadRequest('Email is required');
	}

	if (!data.hasOwnProperty('password')) {
		throw new errors.BadRequest('Password is required');
	}

	return hook;
};
