'use strict';

var gulp = require('gulp'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    config = require('../config.js');


// Images
gulp.task('images', function() {

  return gulp.src([
      path.join(config.source.images, '**/*.{jpg,svg,png,ico}')
    ])
    .pipe(plumber())
    .pipe(gulp.dest(config.build.images));

});
