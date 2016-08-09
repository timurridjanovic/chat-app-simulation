'use strict';

var pagesRouter = require('./pages');

module.exports = {
	start: function(app) {
		pagesRouter.init(app);
	}
};
