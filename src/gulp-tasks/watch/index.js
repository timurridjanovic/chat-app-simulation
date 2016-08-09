'use strict';

var config = require('../config.js');
var webpackStream = require('webpack-stream');
var webpackTask = require('../webpack/webpack-task');

module.exports = function(gulp) {
	gulp.task('watch', ['default'], function(done) {
		gulp.watch(config.sass, ['sass']);
		webpackTask(true, webpackStream, gulp);
	});
};

