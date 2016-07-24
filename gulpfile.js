var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('sass', function() {
  return gulp.src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/css"));
});

gulp.task('jade', function() {
   gulp.src(['./src/templates/*.jade'])
   .pipe(jade({pretty: true, doctype: 'html'}))
   .pipe(gulp.dest('./public/views'));
});

gulp.watch("./src/scss/*.scss", ['sass']);
gulp.watch("./src/**/*.jade", ['jade']);