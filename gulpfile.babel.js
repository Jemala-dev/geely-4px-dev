"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/**/*.html",
                "./src/views/pages/*.html"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.html",
                "./src/views/**/*.html"
            ]
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        "bx-styles": {
            src: "./src/blocks/modules/**/*.scss",
            dist: "./dist/bx-styles/",
			includePaths: ["src/styles"],
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        "bx-styles-base": {
            src: "./src/styles/bx-styles-base.scss",
            dist: "./dist/bx-styles-base/",
            includePaths: ["src/styles"],
            watch: [
                "./src/styles/base/**/*.{scss,sass}"
            ]
        },
        "scripts": {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        "bx-scripts": {
            src: "./src/blocks/modules/**/*.js",
            dist: "./dist/bx-js/",
            watch: [
                "./src/blocks/modules/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg,webp}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff,webp}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff,webp}"
        },
        webp: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,tiff,webp}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff,webp}"
            ],
            dist: "./dist/img/",
            watch: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff, webp}"
            ]
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{ttf,woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{ttf,woff,woff2}"
        },
        libs: {
            src: "./src/libs/**/*.*",
            dist: "./dist/libs/",
            watch: "./src/libs/**/*.*"
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif,svg}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        },
        data: {
            src: "./src/data/**/*.*",
            dist: "./dist/data/",
            watch: "./src/data/**/*.*"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "bx-styles", "bx-styles-base", "scripts", "bx-scripts", "images", "webp", "sprites", "fonts-woff", "fonts-woff2", "libs", "favicons", "data"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "sprites", "fonts-woff", "fonts-woff2", "libs", "favicons", "gzip"]));

export default development;
