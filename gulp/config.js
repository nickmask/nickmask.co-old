'use strict';

var path = require('path'),
    pkg = require('../package.json');

var rootDir = path.resolve('.'),
    vendorDir = path.resolve(__dirname, '../node_modules'),
    sourceDir = path.resolve(__dirname, '../src'),
    buildDir = path.resolve(__dirname, '..' + pkg.path.build),
    deployDir = path.resolve(__dirname, '..' + pkg.path.deploy),
    cmsDir = path.resolve(__dirname, '..' + pkg.path.cms),
    cmsThemeDir = path.resolve(__dirname, '..' + pkg.path.cmstheme),
    releaseDir = path.resolve(__dirname, '..' + pkg.path.release),
    testDir = path.resolve(__dirname, '..' + pkg.path.test);

module.exports = {

  root: rootDir,

  name: pkg.name,
  description: pkg.description,
  version: pkg.version,

  // Server
  server: {
    admin_port: pkg.server.admin_port, // port number for admin
    site_port: pkg.server.site_port // site port
  },

  // Source
  source: {
    src: sourceDir,
    data: sourceDir + '/data',
    pages: sourceDir + '/pages',
    sass: sourceDir + '/sass',
    fonts: sourceDir + '/fonts',
    images: sourceDir + '/images',
    misc: sourceDir + '/misc',
    scripts: sourceDir + '/scripts/custom',
    polyfills: sourceDir + '/scripts/polyfills',
    vendors: sourceDir + '/scripts/vendors',
    plugins: sourceDir + '/scripts/plugins',
    emails: sourceDir + '/pages/emails'
  },

  // Templating Outputs
  build: {
    dist: buildDir,
    data: buildDir + '/data',
    css: buildDir + '/css',
    fonts: buildDir + '/fonts',
    images: buildDir + '/images',
    js: buildDir + '/js',
    plugins: buildDir + '/js/plugins',
    emails: buildDir + '/emails'
  },

  // deploy Outputs
  deploy: {
    dist: deployDir,
    css: deployDir + '/css',
    data: deployDir + '/data',
    fonts: deployDir + '/fonts',
    images: deployDir + '/images',
    js: deployDir + '/js',
    emails: buildDir + '/email'
  },

  // CMS Outputs
  cms: {
    dist: cmsDir,
    theme: cmsThemeDir,
    css: cmsThemeDir + '/css',
    data: cmsDir + '/data',
    fonts: cmsThemeDir + '/fonts',
    images: cmsThemeDir + '/images',
    js: cmsThemeDir + '/js'
  },

  // app Outputs
  release: {
    dist: releaseDir,
    app: releaseDir + '/app',
    cache: releaseDir + '/cache'
  },

  test: {
    dist: testDir
  },

  // Vendor Libries
  vendors: {
    src: vendorDir,
    plugins: [
      //jQuery
      vendorDir + "/jquery/dist/jquery.min.js",
      //jQuery Easing
      vendorDir + "/jquery.easing/jquery.easing.min.js",
      // jQuery validation
      vendorDir + "jquery-validation/dist/jquery.validate.js",
      //ReactJS
      vendorDir + "/react/dist/react.min.js",
      //React-DOM
      vendorDir + "/react-dom/dist/react-dom.min.js",

      //vendorDir + '/html5shiv/dist/html5shiv.min.js',
      //vendorDir + '/es6-shim/es6-shim.min.js',
      //vendorDir + '/es6-shim/es6-sham.min.js',
      //vendorDir + '/svg4everybody/svg4everybody.min.js'
    ],
    css: [
      //normalize
      vendorDir + '/normalize.css/normalize.css',
      //Bookstrap
      vendorDir + '/bootstrap/dist/css/bootstrap.min.css',
      //ionicons
      vendorDir + '/ionicons/css/ionicons.min.css'
    ],
    fonts: [
      //ionicons
      vendorDir + '/ionicons/fonts/*.{eot,svg,ttf,woff,woff2}',
      //font-awesome
      //vendorDir + '/font-awesome/fonts/*.{eot,svg,ttf,woff,woff2}'
    ]
  }

};
