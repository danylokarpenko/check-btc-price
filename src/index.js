const server = require('./proxy');
const { port, host } = require('../config/app.config');
const { logger } = require('./helpers/winstonLogger');

server.listen(port, () => `Startin server on ${port}`);

process.on('unhandledRejection', reason => {
	logger.error(reason);
});

server.on('listening', () => logger.info(`Feathers application started on http://${host}:${port}`));

module.exports = server;
