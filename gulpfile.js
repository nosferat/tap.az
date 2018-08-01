const gulp = require('gulp');

const pug = require('gulp-pug');
const less = require('gulp-less');
const path = require('path');
 
gulp.task('pug', function buildHTML() {
  return gulp.src('./src/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./dist/"))
});

gulp.task('less', function () {
  return gulp.src('./src/css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['pug', 'less']);