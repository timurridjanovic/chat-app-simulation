'use strict';

var config = require('../config.js');
var sass = require('gulp-sass');

module.exports = function(gulp) {
    gulp.task('sass', function() {
        gulp.src(config.sass)
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(gulp.dest(config.build.css));
    });
}
