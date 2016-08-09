'use strict';

function getConfig() {
	var env = process.env.NODE_ENV || 'development';
	var config;
	if (env === 'qa') {
		config = require('./qa');
	} else if (env === 'production') {
		config = require('./production');
	} else {
		config = require('./development');
	}
	return config;
}

module.exports = getConfig();
