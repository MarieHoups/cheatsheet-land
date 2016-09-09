import gulp from 'gulp';
import sass from 'gulp-sass';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import exorcist from 'exorcist';
import eslint from 'gulp-eslint';

gulp.task('sass', function() {
  return gulp.src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/css"));
});

gulp.task('babel', function() {
  return browserify({entries: './src/app.js', extensions: ['.js'], debug: true})
    .transform(babelify.configure({sourceMapRelative: 'src'}))
    .bundle()
    .on('error', function(error){
      console.error( '\nError: ', error.message, '\n');
      this.emit('end');
    })
    .pipe(exorcist('./public/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public'));
  })

gulp.task('lint', function() {
  return gulp.src(['./src/**/*.js', 'gulpfile.babel.js']).pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('watch', () => {
  gulp.watch("./src/scss/*.scss", ['sass']);
  gulp.watch("./src/**/*.js", ['babel', 'lint']);
});