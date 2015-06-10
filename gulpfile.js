var gulp = require('gulp');
var sass = require('gulp-sass');
var react = require('gulp-react');
var copy = require('gulp-copy');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('include_js_libs', function() {
  gulp.src('./node_modules/react/dist/react.js').pipe(gulp.dest('./prod/js/libs/'));
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('react', function () {
  return gulp.src('./src/jsx/**/*.jsx')
      .pipe(react())
      .pipe(gulp.dest('build/js'));
});

gulp.task('copy_js', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(copy('./build/js'));
});

gulp.task('copy_css', function() {
  return gulp.src('./src/css/**/*.css')
    .pipe(copy('./build/css'));
});

gulp.task('build_js', ['react', 'copy_js'], function(){
  return gulp.src('./build/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./prod/js/'));
});

gulp.task('build_css', ['sass', 'copy_css'], function(){
  return gulp.src('./build/css/**/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./prod/css/'));
});

gulp.task('build', ['build_css', 'build_js', 'include_js_libs']);

gulp.task('default', ['build']);
