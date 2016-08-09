'use strict';

var cleanTask = require('./clean-task.js');

module.exports = function(gulp) {
    gulp.task('clean', function() {
        cleanTask(); 
    });
};
