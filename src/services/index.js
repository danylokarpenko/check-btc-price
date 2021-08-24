const user = require('./user/user.service');
const btcRate = require('./btcRate/btcRate.service');

module.exports = function () {
	const app = this;

	app.configure(user);
	app.configure(btcRate);
};
