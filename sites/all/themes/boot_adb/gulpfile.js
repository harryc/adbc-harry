/**
 * @file
 * Defines gulp tasks to be run by Gulp task runner.
 */

/* eslint-env node */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    'use strict';
    gulp.src('sass/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init()) // Initializes sourcemaps
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 2 versions', '> 1%', 'ie 8'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css/'));
 //       .pipe(browserSync.stream());
  });

// Watch task //
gulp.task('watch', function () {
    'use strict';
    gulp.watch('sass/**/*.scss', ['sass']);
  });


// Add Support for Browsersync + watching scss/html files //
gulp.task('browsersync', ['sass'], function () {
    'use strict';
    browserSync.init({
      proxy: "yoursite.dev",
      reloadDelay: 1000
    });

    gulp.watch("sass/**/*.scss", ['sass']).on('change', browserSync.reload);
  });


// Default task
gulp.task('default', ['sass', 'watch']);