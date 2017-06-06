const electron = require("electron") // Needs Electron
const app = electron.app // Electron app
const BrowserWindow = electron.BrowserWindow // Browser window for Electron

const qs = require("querystring") // Used to generate query string for pdf.js
const path = require("path") // Used to resolve requested pdf file full path

const pdfjs = "file://" + __dirname + "/pdfjs/web/viewer.html" // Root URL for Electron app (pdf.js page)
const query = qs.stringify({file: "file://" + path.resolve(process.argv.slice(-1)[0])}) // Generate query string for pdf.js, to open the requested PDF file
const frameURL = pdfjs + "?" + query

// Needed by Electron
let mainWindow

// Function to create Electron window
function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
	})

	mainWindow.loadURL(frameURL);

	mainWindow.on("closed", function() {
		mainWindow = null
	})

	var wc = mainWindow.webContents

	wc.on("will-navigate", function(e, url) {
		if(url != wc.getURL()) {
			e.preventDefault()
			electron.shell.openExternal(url)
		}
	});

	require("./menu/main.js")
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
