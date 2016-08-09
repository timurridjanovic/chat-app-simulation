'use strict';

var Karma = require('karma').Server;

module.exports = function(done) {
	return new Karma({
		configFile: __dirname + '/karma.config.js'
	}, done).start();
};
