var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: './'
  })
})

gulp.task('sass', function(){
  gulp.src('./assets/scss/**/*.scss')
    .pipe(sass({
      sourcemap: true,
      outputStyle: 'compress',
      includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
    .pipe(connect.reload())
});

gulp.task('watch', ['sass'],  function(){
  gulp.watch(['./assets/**/*.scss'],['sass'])
})

gulp.task('default', ['watch', 'connect'])