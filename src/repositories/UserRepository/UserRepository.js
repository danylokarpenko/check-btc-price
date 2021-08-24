const DB = require('../../database');

class UserRepository {
	constructor() {
		this.UserModel = new DB('users');
	}

	async create(data) {
		const { id, email } = await this.UserModel.createNewRecord(data);
		return { id, email };
	}

	findByEmail(params) {
		const { email } = params.query;
		return this.UserModel.findOneByFieldName('email', email);
	}
}

module.exports = new UserRepository();
