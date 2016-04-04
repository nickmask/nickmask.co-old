'use strict';

var gulp = require('gulp'),
    path = require('path'),
    config = require('../config.js');

// watch data
gulp.task('watch_data', function() {

  gulp.watch(path.join(config.source.data, '/**/*.*'), ['data']);

});

// watch pages
gulp.task('watch_pages', function() {

  gulp.watch(path.join(config.source.pages, '/**/*.*'), ['pages']);

});

// watch styles
gulp.task('watch_styles', function() {

  gulp.watch(path.join(path.join(config.source.sass, '/**/*.scss')), ['styles']);

});

// watch fonts
gulp.task('watch_fonts', function() {

  gulp.watch(path.join(config.source.fonts, '**/*.{eot,svg,ttf,woff,woff2}'), ['fonts']);

});

// watch images
gulp.task('watch_images', function() {

  gulp.watch(path.join(config.source.images, '**/*.{jpg,svg,png,ico}'), ['images']);

});

// watch scripts
gulp.task('watch_scripts', function() {

  gulp.watch(path.join(config.source.scripts, '/**/*.js'), ['scripts']);

});
