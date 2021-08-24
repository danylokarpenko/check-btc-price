class LoginUserService {
	setup(app) {
		this.app = app;
	}

	async create(data, params) {
		const { email, password } = data;
		const { accessToken } = await this.app.service('authentication').create(
			{
				email,
				password,
				strategy: 'local'
			},
			params
		);
		return { accessToken, user: { email } };
	}
}

const service = new LoginUserService();

module.exports = service;
