const { UserRepository } = require('../../../../repositories');

class CreateUserService {
	setup(app) {
		this.app = app;
	}

	async create(data) {
		const createdUser = await UserRepository.create(data);
		return createdUser;
	}
}

const service = new CreateUserService();

module.exports = service;
