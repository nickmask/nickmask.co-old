'use strict';

var gulp = require('gulp'),
    del = require('del'),
    config = require('../config.js');

// Clean build files
gulp.task('build_clean', function() {

  return del([
    config.build.dist
  ]);

});

// Clean deploy files
gulp.task('deploy_clean', function() {

  return del([
    config.deploy.dist
  ]);

});

// Clean deploy files
gulp.task('cms_clean', function() {

  return del([
    config.cms.css,
    config.cms.js,
    config.cms.fonts,
    config.cms.images,
    config.cms.data,
    config.theme + '/*.*'
  ]);

});
