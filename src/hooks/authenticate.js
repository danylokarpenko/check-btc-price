const { authenticate } = require('@feathersjs/authentication').hooks;
const errors = require('@feathersjs/errors');

module.exports = () => incomingHook => {
	return authenticate({ strategies: ['jwt'] })(incomingHook).catch(({ message }) => {
		if (message === 'jwt expired') {
			throw new errors.Forbidden('Token expired. Please log in again');
		} else {
			throw new errors.NotAuthenticated(message);
		}
	});
};
