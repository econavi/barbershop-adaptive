/* watch */

const gulp = require('gulp');


module.exports = () => {
	gulp.watch('app/**/*.styl', gulp.series('styles'));
	gulp.watch('app/**/*.js', gulp.series('scripts'));
	gulp.watch('app/assets/img/**/*.*', gulp.series('images'));
	gulp.watch('app/assets/fonts/**/*.*', gulp.series('fonts'));
	gulp.watch('app/assets/misc/**/*.*', gulp.series('misc'));
	gulp.watch('app/**/*.pug', gulp.series('html'));
	gulp.watch('app/icons/svg/**/*.svg', gulp.series('iconsSvg'));
	gulp.watch('app/icons/png/**/*.png', gulp.series('iconsPng'));
};