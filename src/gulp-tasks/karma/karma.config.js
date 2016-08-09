'use strict';

var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('../config.js').webpackConfig;

module.exports = function(config) {
	config.set({
		basePath: '../../',

		files: [
			'node_modules/babel-polyfill/dist/polyfill.min.js',
			'public/js/**/*.tests.js'
		],

		preprocessors: {
			'public/js/**/*.js': ['webpack', 'sourcemap']
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			stats: {
				colors: true,
				chunks: false
			}
		},

		reporters: ['spec'],

		port: 9999,

		colors: true,

		logLevel: config.LOG_INFO,

		frameworks: ['jasmine'],

		browsers: ['PhantomJS'],

		captureTimeout: 60000,

		plugins: [
			require('karma-webpack'),
			require('karma-jasmine'),
			require('karma-spec-reporter'),
			require('karma-sourcemap-loader'),
			require('karma-phantomjs-launcher')
		]
	});
};
