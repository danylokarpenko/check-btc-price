const { KunaRepository } = require('../../repositories');

class BtcRateService {
	setup(app) {
		this.app = app;
	}

	async find() {
		return KunaRepository.getBtcUahPrice();
	}
}

const service = new BtcRateService();

module.exports = service;
