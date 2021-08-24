const {
	createLogger,
	format: { combine, colorize, timestamp, printf },
	transports
} = require('winston');

const textFormat = printf(({ timestamp, message, level }) => `\n${level}: ${timestamp}\n${message}`);
const httpFormat = printf(
	({ timestamp, message, level }) => `\n${level}: HTTP ${timestamp}\n${message.method} ${message.url}`
);

const logger = createLogger({
	format: combine(colorize(), timestamp(), textFormat),
	transports: [new transports.Console()]
});

const httpLogger = createLogger({
	format: combine(colorize(), timestamp(), httpFormat),
	transports: [new transports.Console()]
});

module.exports = {
	logger,
	httpLogger
};
