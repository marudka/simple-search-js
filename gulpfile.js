var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("scripts", function() {
    gulp.src("scripts/*.js")
        .pipe(babel({
            presets: ['es2015', 'es2016']
        }))
        .pipe(gulp.dest("dist"))
});

gulp.task("watch", function() {
   gulp.watch("scripts/*.js", ["scripts"])
});

gulp.task("default", ["watch"]);
