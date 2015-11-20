var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: './',
    livereload: true
  })
})

gulp.task('html', function(){
  gulp.src('**/*.html')
    .pipe(connect.reload())
});

gulp.task('js', function(){
  gulp.src('src/**/*.js')
    .pipe(connect.reload())
});


gulp.task('sass', function(){
  gulp.src('./assets/scss/**/*.scss')
    .pipe(sass({
      sourcemap: true,
      outputStyle: 'expanded',
      includePaths: ['./bower_components/bootstrap-sass/assets/stylesheets']
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
    .pipe(connect.reload())
});

gulp.task('watch', ['sass'], function(){
  gulp.watch(['./**/*.html'],['html'])
  gulp.watch(['./assets/**/*.scss'],['sass'])
  gulp.watch(['**/*.js'],['js'])
})

gulp.task('default', ['watch', 'connect'])
