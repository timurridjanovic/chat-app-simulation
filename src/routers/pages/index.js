'use strict';

var express = require('express');
var pagesRouter = express.Router();
var config = require('../../config');

function initPagesRouter(app) {
	app.use(config.pages.root, pagesRouter);
	pagesRouter.route('/').get(function(req, res) {
		res.render('index');
	});
}

module.exports = {
	init: initPagesRouter
};
