'use strict';

var gulp = require('gulp'),
    path = require('path'),
    hbsmaster = require('gulp-handlebars-master'),
    fs = require('fs'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    config = require('../config.js');

// Templating pages
gulp.task('pages', function() {

  var pagePath = './src/pages';
  var data = JSON.parse(fs.readFileSync(config.source.pages + '/data.json'));

  data.site.name = config.name;
  data.site.description = config.description;
  data.site.company = config.company;

  gulp.src(config.source.pages + '/pages/*.hbs')
    .pipe(plumber())
    .pipe(hbsmaster(config.source.pages + '/master.hbs',
      data, {
        batch: [pagePath + '/partials', pagePath + '/components'],
        helpers: {
          equal: function(a, b, opts) {
            if (a == b)
              return opts.fn(this);
            else
              return opts.inverse(this);
          }
        }
      }))
    .pipe(rename(function(path) {
      path.extname = '.html';
    }))
    .pipe(gulp.dest(config.build.dist));

  // copy static html pages
  gulp.src([
      path.join(config.source.pages, '/static/**/*.html'),
    ])
    .pipe(gulp.dest(config.build.dist));

});
