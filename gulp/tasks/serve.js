'use strict';

var gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    config = require('../config.js');

gulp.task('serve', function() {

  browserSync.init({
    ui: {
      port: config.server.admin_port //default 3000
    },
    server: {
      baseDir: config.build.dist
    },
    port: config.server.port,
      injectChanges: false
    });

  gulp.watch(config.build.dist + '/**/*.*').on('change', browserSync.reload);

});
