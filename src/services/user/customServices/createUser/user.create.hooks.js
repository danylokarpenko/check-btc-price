const { hashPassword } = require('@feathersjs/authentication-local').hooks;

const validateUserData = require('./hooks/validateUserData');

module.exports = {
	before: {
		create: [validateUserData, hashPassword('password')]
	}
};
