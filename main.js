const electron = require("electron")
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require("path")
const url = require("url")
const qs = require("querystring")

const pdfjs = "file://" + __dirname + "/pdfjs/web/viewer.html"
const query = qs.stringify({file: "file://" + process.argv[2]})

let mainWindow

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false
	})

	/*mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, "/pdfjs/web/viewer.html"),
		protocol: "file:",
		slashes: true
	}))*/

	mainWindow.loadURL(pdfjs + "?" + query);

	mainWindow.on("closed", function() {
		mainWindow = null
	})
}

app.on("ready", createWindow)

app.on("window-all-closed", function() {
	if(process.platform != "darwin") {
		app.quit()
	}
})

app.on("activate", function() {
	if(mainWindow == null) {
		createWindow()
	}
})
