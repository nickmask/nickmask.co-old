'use strict';

var gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    config = require('../config.js');


// Build css files
gulp.task('styles', function() {

  gulp.src(config.vendors.css.concat([
      path.join(config.source.sass, '/**/*.scss')
    ]), {
      style: 'compressed'
    })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(config.build.css));
});
