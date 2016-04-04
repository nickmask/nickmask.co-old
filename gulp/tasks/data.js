'use strict';

var gulp = require('gulp'),
    path = require('path'),
    bump = require('gulp-bump'),
    config = require('../config.js');

// Copy data files
gulp.task('data', function() {

  gulp.src([
      path.join(config.source.data, '**/*.json')
    ])
    .pipe(bump({type:'minor'}))
    .pipe(gulp.dest(config.source.data));

  gulp.src([
      path.join(config.source.data, '**/*')
    ])
    .pipe(gulp.dest(config.build.data));

});
