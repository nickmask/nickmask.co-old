'use strict';

var gulp = require('gulp'),
    path = require('path'),
    imageop = require('gulp-image-optimization'),
    minifyHTML = require('gulp-htmlmin'),
    minifyCSS = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    size = require('gulp-size'),
    config = require('../config.js');

// copy data files
gulp.task('deploy_data', function() {

  return gulp.src([
      path.join(config.build.data, '**/*')
    ])
    .pipe(gulp.dest(config.deploy.data));

});

// copy html files
gulp.task('deploy_pages', function() {

  return gulp.src([
      path.join(config.build.dist, '**/*.html'),
    ])
    .pipe(minifyHTML({
      collapseWhitespace: true
    }))
    .pipe(size({
      showFiles: true,
      title: 'html file -'
    }))
    .pipe(gulp.dest(config.deploy.dist));

});


// copy css files
gulp.task('deploy_styles', function() {

  return gulp.src([
      path.join(config.build.css, '/*.css'),
    ])
    .pipe(minifyCSS())
    .pipe(size({
      showFiles: true,
      title: 'css file -'
    }))
    .pipe(gulp.dest(config.deploy.css));

});

// copy js files
gulp.task('deploy_scripts', function() {

  return gulp.src([
      path.join(config.build.js, '**/*.js'),
    ])
    .pipe(uglify({
      preserveComments: 'some'
    }))
    .pipe(size({
      showFiles: true,
      title: 'js file -'
    }))
    .pipe(gulp.dest(config.deploy.js));

});

// copy font files
gulp.task('deploy_fonts', function() {

  return gulp.src([
      path.join(config.build.fonts, '**/*.{eot,svg,ttf,woff,woff2}'),
    ])
    .pipe(gulp.dest(config.deploy.fonts));

});

// copy images files
gulp.task('deploy_images', function() {

  return gulp.src([
      path.join(config.build.images, '**/*.{jpg,svg,png,ico}')
    ])
    .pipe(imageop({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.deploy.images));

});


// copy misc files
gulp.task('deploy_misc', function() {

  return gulp.src([
      path.join(config.source.misc, '**/*'),
    ])
    .pipe(gulp.dest(config.deploy.dist));

});
