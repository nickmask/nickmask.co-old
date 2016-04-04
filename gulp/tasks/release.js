'use strict';

var gulp = require('gulp'),
    del = require('del'),
    packager = require('electron-packager'),
    electron = require('gulp-electron'),
    config = require('../config.js'),
    pkg = require('../../package.json');


// Clean deploy files
gulp.task('release_clean', function() {

  return del([
    config.release.app
  ]);

});

// package in desktop OS executables (.app, .exe, etc)
gulp.task('release_executables', function() {

  gulp.src("")
    .pipe(electron({
        src: config.deploy.dist,
        packageJson: pkg,
        release: config.release.app,
        cache: config.release.cache,
        version: 'v0.36.7',
        packaging: true,
        platforms: ['win32-x64', 'darwin-x64'],
        platformResources: {
            darwin: {
                CFBundleDisplayName: config.name,
                CFBundleIdentifier: config.name,
                CFBundleName: config.name,
                CFBundleVersion: config.version,
                //icon: 'gulp-electron.icns'
            },
            win: {
                "version-string": config.version,
                "file-version": config.version,
                "product-version": config.version,
                //"icon": 'gulp-electron.ico'
            }
        }
    }))
    .pipe(gulp.dest(""));

});
