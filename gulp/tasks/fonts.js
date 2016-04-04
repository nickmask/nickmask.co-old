'use strict';

var gulp = require('gulp'),
    path = require('path'),
    gutil = require('gulp-util'),
    flatten = require('gulp-flatten'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    plumber = require('gulp-plumber'),
    config = require('../config.js');


// Icon Font files
gulp.task('iconfonts', function() {

  // Generate Icon Fonts
  var fontName = 'Icons';

  gulp.src([
      path.join(config.source.images, '/icons/*.svg')
    ])
    .pipe(plumber())
    .pipe(iconfontCss({
      fontName: fontName,
      targetPath: '../../src/sass/fonts/_iconfont.scss',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      normalize: true,
      fontHeight: 2000
    }))
    .pipe(gulp.dest(config.build.fonts));

});


// Font files
gulp.task('fonts', function() {

  gulp.src(config.vendors.fonts.concat([
      path.join(config.source.fonts, '**/*.{eot,svg,ttf,woff,woff2}')
    ]))
    .on('error', gutil.log)
    .pipe(flatten())
    .pipe(gulp.dest(config.build.fonts));

});
