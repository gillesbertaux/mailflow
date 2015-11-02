/*
This is where the all the gulp packages are listed.
*/

var gulp         = require("gulp"),
		sass         = require("gulp-sass"),
		autoprefixer = require('gulp-autoprefixer'),
    jade         = require('gulp-jade'),
    rename       = require('gulp-rename'),
    replace      = require('gulp-replace'),
    browserSync  = require('browser-sync').create(),
    notify       = require("gulp-notify"),
    emailBuilder = require('gulp-email-builder');

gulp.task('sass', function () {
 gulp.src('sass/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
  .pipe(gulp.dest('./'))
  .pipe(notify("SCSS to CSS done."));
});

gulp.task('jade', function() {
  gulp.src('*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./build/'))
    .pipe(notify("Jade to HTML done."));
});

gulp.task('default', [
  'sass',
  'jade'
  ], function(){});

gulp.task('build', function() {
  return gulp.src(['./build/*.html'])
    .pipe(emailBuilder())
    .pipe(rename('final.html'))
    .pipe(gulp.dest('./build/'))
    .pipe(notify("Inlining done"))
});

gulp.task('serve', ['sass', 'jade'], function() {
  browserSync.init({ proxy: "/" });
  gulp.watch("sass/**/*.scss", ['sass']);
  gulp.watch("*.jade", ['jade']);
});
