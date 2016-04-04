'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    path = require('path'),
    config = require('../config.js');

gulp.task('scripts', function() {

  // core plugins
  gulp.src(config.vendors.plugins.concat([
      path.join(config.source.vendors, '/**/*.js'),
      path.join(config.source.polyfills, '/**/*.js')
    ]))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('core.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(config.build.js));

  //script
  gulp.src([
      path.join(config.source.scripts, '/**/*.js')
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015', "react"]
    }))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(config.build.js));
});
