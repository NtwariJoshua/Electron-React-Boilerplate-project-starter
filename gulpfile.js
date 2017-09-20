var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('serve:dev',function(){
	//Start the browser renderer
	electron.start();

	//watch the browser process for changes and restart
	gulp.watch('./main.js',electron.restart)

	//watch for changes in the js files
	gulp.watch(['./dist/app.bundle.js','./dist/index.html'],electron.reload);
})