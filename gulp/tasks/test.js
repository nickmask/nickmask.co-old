'use strict';

var gulp = require('gulp'),
    path = require('path'),
    bump = require('gulp-bump'),
    mocha = require('gulp-mocha'),
    config = require('../config.js');

// Copy data files
gulp.task('test', function() {

  gulp.src([
      path.join(config.build.js, '**/*.js'),
      path.join(config.test.dist, '**/*.js')
    ], {read: false})
		.pipe(mocha({reporter: 'spec'}));

});
