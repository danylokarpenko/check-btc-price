const BtcRateClass = require('./btcRate.class');
const BtcRateHooks = require('./btcRate.hooks');

module.exports = function () {
	const app = this;

	app.use('/btcRate', BtcRateClass);
	app.service('btcRate').hooks(BtcRateHooks);
};
