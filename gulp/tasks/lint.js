'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    config = require('../config.js'),
    plumber = require('gulp-plumber'),
    path = require('path');

// Lint javascript code
gulp.task('lint', function() {

  gulp.src(path.join(config.source.scripts))
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

});
