'use strict';

var path = require('path');
var dir = path.resolve(__dirname, '..');

var config = {
	sass: path.join(dir, '/public/scss/**/*.scss'),
	webpack: path.join(dir, '/public/js/**/*.js'),
	webpackConfig: {
		entry: './public/js/main.jsx',
		output: {
			path: path.join(__dirname, '/build/js/'),
			filename: 'bundle.js',
			publicPath: '/js/'
		},
		storeStatsTo: 'bundle_hash',
		devtool: 'inline-source-map',
		module: {
			preLoaders: [
				{
					test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/
				}
			],
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel',
					query: {
						presets: ['babel-preset-es2015', 'babel-preset-react']
					}
				},
				{
					test: /\.json$/, loader: 'json'
				}
			]
		},
		eslint: {
			configFile: './.eslintrc',
			emitWarning: true
		},
		externals: {
			'react/addons': true,
			'react/lib/ExecutionEnvironment': true,
			'react/lib/ReactContext': true
		}
	},
	dev: {
		jsEntry: path.join(dir, '/public/js/main.js'),
		fonts: path.join(dir, '/public/fonts/**/*')
	},
	build: {
		css: path.join(dir, '/build/css/'),
		js: path.join(dir, '/build/js'),
		fonts: path.join(dir, '/build/css/fonts')
	},
	bundleName: 'bundle.js',
	templateSrc: path.join(dir, '/views/**/*.hbs'),
	templateDest: path.join(dir, '/build/views/'),
	templateLayoutSrc: path.join(dir, '/views/layout.hbs')
};

module.exports = config;

