const { dest, src, task, watch, series, parallel } = require("gulp");
var pug = require('gulp-pug');
var typescript = require('gulp-typescript');

task('pug', (cb) => {
    src([
        './src/**/*.pug',
        '!./src/**/_*.pug'
    ])
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('./dist'))
    cb();
});
const srcFiles = "src/**/js/*.ts";

task('ts', (cb) => {
    src(srcFiles)
        .pipe(typescript())
        .pipe(dest('./dist'));
    cb();
});

task('default', series(parallel('pug', 'ts')));
