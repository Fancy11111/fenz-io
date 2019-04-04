const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const uglify6 = require('gulp-uglify-es').default;
const del = require('del');

gulp.task('devBuildCss', function() {
  return gulp
    .src('static/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('static/css'));
});

gulp.task('watch', function() {
  gulp.watch('static/scss/*.scss', ['devBuildCss']);
});

gulp.task('buildCss', function() {
  return gulp
    .src('static/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('uglifyMain', function() {
  gulp
    .src('static/sw.js')
    .pipe(uglify6())
    .pipe(gulp.dest('dist'));
  return Promise.resolve();
});

gulp.task('uglifyJs', function() {
  gulp
    .src('static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
  return Promise.resolve();
});

gulp.task('uglify', function() {
  gulp.parallel('uglifyMain', 'uglifyJs');
  return Promise.resolve();
});

gulp.task('cleanDist', function() {
  del.sync('dist');
  return Promise.resolve();
});

gulp.task('copyStatic', function() {
  return gulp
    .src([
      'static/fonts',
      'static/icons',
      'static/images',
      'static/webfonts',
      'index.html'
    ])
    .pipe(gulp.dest('dist'));
});

gulp.task('build', function() {
  gulp.series(
    gulp.task('uglify'),
    gulp.task('buildCss'),
    gulp.task('copyStatic')
  );
  return Promise.resolve();
});
