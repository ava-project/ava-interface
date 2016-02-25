// get the dependencies
var gulp = require('gulp'),
    childProcess = require('child_process'),
    electron = require('electron-prebuilt');
// less' shit
concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    less = require("gulp-less"),
    combiner = require('stream-combiner2'),
    path = require('path');

// create the gulp task
gulp.task('run', function() {
    childProcess.spawn(electron, ['./app'], {
        stdio: 'inherit'
    });
});

var inputLess = path.join(__dirname, './app/**/*.less'),
    destLess = path.join(__dirname, './app/assets/css');

gulp.task('less', function() {
    var combined = combiner.obj([
        gulp.src(inputLess),
        less(),
        concat('dist.css'),
        minifyCSS(),
        gulp.dest(destLess)
    ]);

    combined.on('error', function(e) {
        console.error(e);
    });

    return (combined);
});

gulp.task('watch', ['less'], function() {
    gulp.watch(inputLess, ['less']);
});

gulp.task('default', ['run'], function() {});
