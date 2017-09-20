const {app,BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const client = require('electron-connect').client;


let window;

function createWindow(){
	window = new BrowserWindow({width:800,height:600});
	window.loadURL(url.format({
		pathname: path.join(__dirname,'dist/index.html'),
		protocol: 'file',
		slashes: true,
	}))

	window.on('closed',() => {
		window = null;
	});

	//For Development purposes only
	client.create(window)
}

app.on('ready',createWindow)

//Mac has a special behavior of keeping the app in dock unless if explicitly closed

app.on('window-all-closed',() => {
	if(process.platform !== 'darwin'){
		app.quit()
	}
})
