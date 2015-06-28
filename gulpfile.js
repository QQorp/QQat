'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require("webpack");
var gutil = require("gulp-util");

gulp.task('icons', function() {
    return gulp.src('./node_modules/font-awesome/fonts/**.*')
      .pipe(gulp.dest('./static/fonts'));
});

gulp.task('sass', function () {
  gulp.src('./front-src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function () {
  gulp.watch('./front-src/sass/**/*.scss', ['sass']);
  gulp.watch('./front-src/js/**/*.js', ['webpack']);
});

var configWebpack = require("./webpack.config.js")

gulp.task("webpack", function(callback) {
  // run webpack
  webpack(configWebpack, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('default', ['icons', 'sass', 'webpack', 'watch']);
