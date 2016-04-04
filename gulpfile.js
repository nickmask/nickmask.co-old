'use strict'

var gulp = require('gulp'),
requireDir = require('require-dir'),
runSequence = require('run-sequence'),
browserSync = require('browser-sync').create()

// Require all tasks in gulp/tasks, including subfolders
requireDir('gulp/tasks/', {
  recurse: true
})

gulp.task('build', ['build_clean'], function () {
  console.log('----- Starting to build project ------')
  runSequence('iconfonts', ['data', 'pages', 'fonts', 'images', 'styles', 'lint', 'plugins', 'modernizr', 'scripts'],
    function () {
      console.log('----- Project has been built successfully ------')
    })
})

gulp.task('deploy', ['deploy_clean'], function () {
  console.log('----- Starting to deploy project ------')
  runSequence(['deploy_data', 'deploy_pages', 'deploy_styles', 'deploy_fonts', 'deploy_images', 'deploy_scripts', 'deploy_misc'],
    'cms_clean', ['cms_data', 'cms_styles', 'cms_fonts', 'cms_images', 'cms_scripts', 'cms_misc'],
    function () {
      console.log('----- Project has been deployed successfully ------')
    })
})

gulp.task('release', ['release_clean'], function () {
  console.log('----- Starting to package project ------')
  runSequence(['release_executables'],
    function () {
      console.log('----- Project has been packaged successfully ------')
    })
})

gulp.task('email', ['email_clean'], function () {
  console.log('----- Starting to build email eDMs ------')
  runSequence(['email_build'], ['email_deploy'],
    function () {
      console.log('----- Email eDMs have been built successfully ------')
    })
})

gulp.task('publish', ['commit'])

gulp.task('default', ['build'])

gulp.task('clean', ['build_clean', 'deploy_clean', 'cms_clean'])

gulp.task('watch', function () {
  console.log('----- Starting to watch project ------')
  runSequence(['watch_data', 'watch_pages', 'watch_styles', 'watch_fonts', 'watch_images', 'watch_scripts'],
    function () {
      console.log('----- Project is under watch ------')
    })
})

gulp.task('run', ['build'], function () {
  console.log('----- Starting to run proejct ------')
  runSequence('watch', 'serve', function () {
    console.log('----- Project is running ------')
  })
})
