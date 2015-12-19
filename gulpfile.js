'use strict';

var gulp = require('gulp');
var menu = require('gulp-menu');
var del = require('del');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config');
var webpackConfigMin = require('extend')(true, {}, webpackConfig);

gulp.task('clean:js', function() {
  del([
    './dist/*'
  ]);
});

gulp.task('build:js:min', ['clean:js'], function() {
  webpackConfigMin.output.filename += '.min.js';
  webpackConfigMin.devtool = 'source-map';
  webpackConfigMin.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ];

  return gulp.src(webpackConfigMin.entry.myPlugin)
  .pipe(webpackStream(webpackConfigMin))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('build:js',['clean:js'], function() {
  webpackConfig.output.filename += '.js';

  return gulp.src(webpackConfig.entry.myPlugin)
  .pipe(webpackStream(webpackConfig))
  .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['build:js', 'build:js:min']);

gulp.task('default', function() {
  menu(this);
});
