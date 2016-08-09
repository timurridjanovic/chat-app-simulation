'use strict';
var config = require('../config');

module.exports = function(gulp) {
	gulp.task('assets-fonts', function(cb) {
		gulp.src(config.dev.fonts)
			.pipe(gulp.dest(config.build.fonts))
			.on('finish', function() {
				cb();
			});
	});

	gulp.task('assets-templates', function(cb) {
		gulp.src(config.templateSrc)
			.pipe(gulp.dest(config.templateDest))
			.on('finish', function() {
				cb();
			});
	});
};
