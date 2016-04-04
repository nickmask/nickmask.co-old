'use strict';

var gulp = require('gulp'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    config = require('../config.js');

// copy data files
gulp.task('cms_data', function() {

  return gulp.src([
      path.join(config.deploy.data, '**/*')
    ])
    .pipe(gulp.dest(config.cms.data));

});

// copy css files
gulp.task('cms_styles', function() {

  return gulp.src([
      path.join(config.deploy.css, '/*.css'),
    ])
    .pipe(gulp.dest(config.cms.css));

});

// copy js files
gulp.task('cms_scripts', function() {

  return gulp.src([
      path.join(config.deploy.js, '/*.js'),
    ])
    .pipe(gulp.dest(config.cms.js));

});

// copy font files
gulp.task('cms_fonts', function() {

  return gulp.src([
      path.join(config.deploy.fonts, '/*.{eot,svg,ttf,woff,woff2}'),
    ])
    .pipe(gulp.dest(config.cms.fonts));

});

// copy images files
gulp.task('cms_images', function() {

  return gulp.src([
      path.join(config.deploy.images, '**/*.{jpg,svg,png,ico}')
    ])
    .pipe(gulp.dest(config.cms.images));

});


// copy misc files
gulp.task('cms_misc', function() {

  return gulp.src([
      path.join(config.source.misc, '**/*')
    ])
    .pipe(gulp.dest(config.cms.dist));

});
