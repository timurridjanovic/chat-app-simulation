'use strict';

var del = require('del');

var cleanTask = function() {
    del(['build/js', 'build/css', '!build/.svn', '!build/.git'], { dot: true });
};

module.exports = cleanTask;
