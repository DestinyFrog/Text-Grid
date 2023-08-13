const gulp = require('gulp');
const typescript = require('gulp-typescript');
const concat = require('gulp-concat');
const stripImportExport = require('gulp-strip-import-export');
const sourcemaps = require('gulp-sourcemaps');

const tsproject = typescript.createProject({
    "module": "ESNext",
    "moduleResolution": "NodeNext",
    "target": "ESNext",
    "removeComments":true
});

gulp.task( "build", ()=>
    gulp.src("./src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe( tsproject() ).js
        .pipe( stripImportExport() )
        .pipe( concat('main.js', {newLine: ';'}) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest("./dist") )
);