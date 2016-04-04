'use strict';

var gulp = require('gulp'),
    modernizr = require('gulp-modernizr'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    path = require('path'),
    config = require('../config.js');

// generate modernizr script
gulp.task('modernizr', function() {

  gulp.src(config.vendors.plugins.concat([
      path.join(config.source.vendors, '/**/*.js'),
      path.join(config.source.polyfills, '/**/*.js'),
      path.join(config.source.scripts, '/**/*.js')
    ]))
    .pipe(plumber())
    .pipe(modernizr('modernizr.js', {
      options: [
        'setClasses'
      ],
      tests: [

      ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest(config.build.js));
});
