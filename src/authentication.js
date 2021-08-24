const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');

const { UserRepository } = require('./repositories');

class CustomLocalStrategy extends LocalStrategy {
	async findEntity(username, params) {
		const entity = await UserRepository.findByEmail({
			...params,
			query: {
				email: username
			}
		});
		return entity;
	}
	async getPayload(authResult, params) {
		// Call original `getPayload` first
		const payload = await super.getPayload(authResult, params);
		const { user } = authResult;

		if (user && user.permissions) {
			payload.permissions = user.permissions;
		}

		return payload;
	}
	async getEntity(authResult, params) {
		return authResult;
	}
}

module.exports = app => {
	const authentication = new AuthenticationService(app);

	authentication.register('jwt', new JWTStrategy());
	authentication.register('local', new CustomLocalStrategy());

	app.use('/authentication', authentication);
	app.configure(expressOauth());
};
