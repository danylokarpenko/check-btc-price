// Initializes the `user` service on path `/user`
const hooks = require('./user.hooks');

const CreateUserService = require('./customServices/createUser/user.create.service');
const CreateUserHooks = require('./customServices/createUser/user.create.hooks');

const LoginUserService = require('./customServices/loginUser/user.login.service');
const LoginUserHooks = require('./customServices/loginUser/user.login.hooks');

module.exports = function () {
	const app = this;

	app.use('/user/create', CreateUserService);
	app.service('user/create').hooks(CreateUserHooks);

	app.use('/user/login', LoginUserService);
	app.service('user/login').hooks(LoginUserHooks);
};
