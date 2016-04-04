'use strict';

var gulp = require('gulp-param')(require('gulp'), process.argv),
    path = require('path'),
    semver = require('semver'),
    git = require('gulp-git'),
    bump = require('gulp-bump'),
    config = require('../config.js'),
    pkg = require('../../package.json');

var currentVer = pkg.version;


// Run git init
// src is the root folder for git to initialize
gulp.task('init', function(){
  git.init(function (err) {
    if (err) throw err;
  });
});


// Run git remote add
// remote is the remote repo
// repo is the https url of the repo
gulp.task('remote', function(){
  git.addRemote('origin', pkg.repository.url, function (err) {
    if (err) throw err;
  });
});


// Copy data files
// type: semver version type: `major|minor|patch|prerelease`
// message: more message for git commit
gulp.task('commit', function (type, message) {

  console.log('Current version is: ' + currentVer);
  var newVer = semver.inc(currentVer, type);
  console.log('New version is: ' + newVer);

  gulp.src('../../package.json')
  .pipe(bump({version: newVer}))
  .pipe(gulp.dest('./'));

  var v = 'v' + newVer;
  var releaseMessage = 'Release ' + v;

  return gulp.src(config.root)
    .pipe(git.add())
    .pipe(git.commit([releaseMessage, message]))
    .on('end', function() {
      git.push('origin', 'master', {args: '--tags'}, function(err){
        git.tag(v, releaseMessage);
      });

    });

});
