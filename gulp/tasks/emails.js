'use strict';

var gulp = require('gulp'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    config = require('../config.js'),
    pkg = require('../../package.json');

var options = {
    encodeSpecialChars: true,
    litmus: {},
    emailTest: {}
};

// Clean emails
gulp.task('email_clean', function() {

  return del([
    config.build.emails,
    config.deploy.emails,
  ]);

});

// build emails
gulp.task('email_build', function() {

  gulp.src([
      path.join(config.source.emails, '**/*.html'),
    ])
    .pipe(gulp.dest(config.build.emails));

});


// deploy emails
gulp.task('email_deploy', function() {

  return gulp.src([
      path.join(config.build.emails, '**/*.html'),
    ])
    .pipe(gulp.dest(config.deploy.emails));

});
