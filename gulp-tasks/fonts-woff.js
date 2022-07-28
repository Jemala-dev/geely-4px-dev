"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
import ttf2woff  from "gulp-ttf2woff";

gulp.task("fonts-woff", () => {
    return gulp.src(paths.fonts.src)
        .pipe(ttf2woff())
        .pipe(gulp.dest(paths.fonts.dist))
        .pipe(debug({
            "title": "Fonts woff"
        }));
});