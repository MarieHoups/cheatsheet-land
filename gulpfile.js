var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    exorcist = require('exorcist');

require('babel-core/register');
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

gulp.task('babel', function() {
  return browserify({entries: './src/app.js', extensions: ['.js'], debug: true})
    .transform(babelify.configure({sourceMapRelative: 'src'}))
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(exorcist('./public/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public'));
  })

gulp.watch("./src/scss/*.scss", ['sass']);
gulp.watch("./src/**/*.jade", ['jade']);