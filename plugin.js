const gulp = require('gulp');
const gulpPngquant = require('gulp-pngquant');

function plugin(program) {
    return function (done) {
        return gulp.src([program.output + "/**/*.png"])
            .pipe(gulpPngquant({ quality: program['pngquant-quality'] || "65-80" }))
            .pipe(gulp.dest(program.output));
    }
}

module.exports = {
    plugin
}