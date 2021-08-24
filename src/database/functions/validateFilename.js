const errors = require('@feathersjs/errors');

const validateFileName = filename => {
	if (!filename) {
		throw new errors.GeneralError('Filename is required');
	}
};

module.exports = validateFileName;
