"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("work/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("work/scss/*.scss", gulp.series("sass"));
});

gulp.task("imagemin", () =>
  gulp
    .src("work/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("src/img"))
);
