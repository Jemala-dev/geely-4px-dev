"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";
import ttf2woff2 from "gulp-ttf2woff2";

gulp.task("fonts-woff2", () => {
    return gulp.src(paths.fonts.src)
        .pipe(ttf2woff2())
        .pipe(gulp.dest(paths.fonts.dist))
        .pipe(debug({
            "title": "Fonts woff2"
        }));
});