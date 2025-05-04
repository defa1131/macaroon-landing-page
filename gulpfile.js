'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function compileLess() {
    return gulp.src('styles/**/*.less')
        .pipe(less())
        .pipe(concat('styles.min.css')) // Объединение всех файлов Less в один файл
        .pipe(cleanCSS()) // Минификация CSS
        .pipe(gulp.dest('styles'));
}


function watch() {
    gulp.watch('styles/**/*.less', compileLess);
}

exports.watch = watch;
exports.default = gulp.series(compileLess, watch);

