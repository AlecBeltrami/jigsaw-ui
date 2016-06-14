var postcss = require('gulp-postcss');
var gulp = require('gulp');
var atImport = require("postcss-import")
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano');

gulp.task('styles', function () {
  var processors = [
    atImport(),
    cssnext({browsers: ['last 2 versions']}),
    cssnano(),
  ];
  // return gulp.src('./stylesheets/*.css')
  // to watch all files in the directory
  return gulp.src('./src/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch:styles', function() {
  gulp.watch('**/*.css', ['styles']);
});
