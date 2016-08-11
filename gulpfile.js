import gulp from 'gulp');
import sass from 'gulp-sass');
import jade from 'gulp-jade');
import babelify from 'babelify');
import source from 'vinyl-source-stream'),
import buffer from 'vinyl-buffer'),
import browserify from 'browserify'),
import exorcist from 'exorcist');

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