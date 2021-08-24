const fetch = require('node-fetch');

class KunaRepository {
	constructor() {
		this.kunaPublicUrl = 'https://api.kuna.io/v3';
	}

	getBtcUahPrice = async () => {
		const currentPrice = await fetch(this.kunaPublicUrl + '/book/btcuah', {
			method: 'GET'
		})
			.then(res => res.json())
			.then(prices => {
				const [btcToUah] = prices[0];
				return { btcToUah };
			});

		return currentPrice;
	};
}

module.exports = new KunaRepository();
