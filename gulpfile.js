'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require("webpack");
var gutil = require("gulp-util");
var purify = require('gulp-purifycss');
var uglifycss = require('gulp-uglifycss');
var shell = require('gulp-shell')

gulp.task('icons', function() {
    return gulp.src('./node_modules/font-awesome/fonts/**.*')
      .pipe(gulp.dest('./static/fonts'));
});

gulp.task('sass', function () {
  gulp.src('./front-src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css/'));
});

gulp.task('sass:prod', function () {
  gulp.src('./front-src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(purify(['./static/**/*.js', './views/**/*.tpl']))
    .pipe(uglifycss())
    .pipe(gulp.dest('./static/css/'));
});

var configWebpack = require("./webpack.config.js")

gulp.task("webpack", function(callback) {
  webpack(configWebpack, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("webpack:prod", function(callback) {
  configWebpack.plugins = configWebpack.plugins.concat(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
);
  webpack(configWebpack, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('watch', function () {
  gulp.watch(['./static/**/*.js', './views/**/*.tpl', './front-src/sass/**/*.scss'], ['sass']);
  gulp.watch('./front-src/js/**/*.js', ['webpack']);
});

gulp.task('run:beego', shell.task([
  'bee run'
]))

gulp.task('run:goconvey', ['dev'], shell.task([
  'cd $GOPATH/src/github.com/QQorp/QQat/tests/ && $GOPATH/bin/goconvey'
]))

gulp.task('run', ['run:beego', 'run:goconvey', 'dev'])

gulp.task('dev', ['icons', 'sass', 'webpack', 'watch'])

gulp.task('default', ['icons', 'sass:prod', 'webpack:prod']);
