'use strict';

var karmaTask = require('./karma-task');

module.exports = function(gulp) {
	gulp.task('test', function(done) {
		karmaTask(done);
	});
};
