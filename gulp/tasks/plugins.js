'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    obfuscator = require('gulp-js-obfuscator'),
    config = require('../config.js');

gulp.task('plugins', function() {

  // external plugins
  gulp.src([
      path.join(config.source.plugins, '/**/*.js'),
    ])
    .pipe(plumber())
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(obfuscator())
    .pipe(gulp.dest(config.build.plugins));

});
