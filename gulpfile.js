const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify6 = require('gulp-uglify-es').default;
const del = require('del');
const imagemin = require('gulp-imagemin');

let paths = {
  styles: {
    src: 'src/static/scss/*.scss',
    dest: 'dist/css'
  },
  js: {
    src: ['src/static/js/*.js'],
    dest: 'dist/js'
  },
  fonts: {
    src: ['src/static/fonts/*'],
    dest: 'dist/fonts'
  },
  webfonts: {
    src: ['src/static/webfonts/*'],
    dest: 'dist/webfonts'
  },
  icons: {
    src: ['src/static/icons/*'],
    dest: 'dist/icons'
  },
  images: {
    src: ['src/static/images/*'],
    dest: 'dist/images'
  },
  html: {
    src: ['src/index.html'],
    dest: 'dist'
  },
  manifest: {
    src: ['src/static/manifest.json'],
    dest: 'dist'
  },
  cname: {
    src: ['src/CNAME'],
    dest: 'dist'
  }
};

gulp.task('devBuildCss', function() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest('src/static/css'));
});

gulp.task('watchScss', function() {
  gulp.watch(paths.styles.src, gulp.series('devBuildCss'));
});

gulp.task('buildCss', function() {
  gulp
    .src(paths.styles.src)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest(paths.styles.dest));
  return Promise.resolve();
});

gulp.task('uglifyMain', function() {
  gulp
    .src('src/static/sw.js')
    .pipe(uglify6())
    .pipe(gulp.dest('dist'));
  return Promise.resolve();
});

gulp.task('uglifyJs', function() {
  gulp
    .src(paths.js.src)
    .pipe(uglify6())
    .pipe(gulp.dest(paths.js.dest));
  return Promise.resolve();
});

gulp.task('uglify', gulp.parallel('uglifyMain', 'uglifyJs'));

gulp.task('cleanDist', function(cb) {
  return del('dist');
});

gulp.task('compressImages', () =>
  gulp
    .src(paths.images.src)
    .pipe(imagemin([imagemin.optipng({ optimizationLevel: 6 })]))
    .pipe(gulp.dest(paths.images.dest))
);
gulp.task('copyFonts', () =>
  gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest))
);
gulp.task('copyWebfonts', () =>
  gulp.src(paths.webfonts.src).pipe(gulp.dest(paths.webfonts.dest))
);
gulp.task('copyHtml', () =>
  gulp.src(paths.html.src).pipe(gulp.dest(paths.html.dest))
);
gulp.task('copyIcons', () =>
  gulp.src(paths.icons.src).pipe(gulp.dest(paths.icons.dest))
);
gulp.task('copyManifest', () =>
  gulp.src(paths.manifest.src).pipe(gulp.dest(paths.manifest.dest))
);
gulp.task('copyCName', () =>
  gulp.src(paths.cname.src).pipe(gulp.dest(paths.cname.dest))
);

gulp.task(
  'copyStatic',
  gulp.parallel(
    'copyFonts',
    'copyWebfonts',
    'copyHtml',
    'copyIcons',
    'compressImages',
    'copyManifest'
  )
);

gulp.task(
  'default',
  gulp.series('cleanDist', gulp.parallel('uglify', 'buildCss', 'copyStatic'))
);

gulp.task(
  'buildGHPages',
  gulp.series(
    'cleanDist',
    gulp.parallel('uglify', 'buildCss', 'copyStatic', 'copyCName')
  )
);
