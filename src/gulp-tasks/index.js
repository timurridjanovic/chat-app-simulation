'use strict';

var gulp = require('gulp');

module.exports = function() {
	gulp.task('default', ['clean', 'sass', 'assets-fonts', 'assets-templates', 'webpack']);
	require('./clean')(gulp);
	require('./assets')(gulp);
	require('./sass')(gulp);
	require('./webpack')(gulp);
	require('./watch')(gulp);
	require('./karma')(gulp);
};

