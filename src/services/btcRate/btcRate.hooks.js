const authenticate = require('../../hooks/authenticate');

module.exports = {
	before: {
		all: [authenticate()],
		find: []
	}
};
