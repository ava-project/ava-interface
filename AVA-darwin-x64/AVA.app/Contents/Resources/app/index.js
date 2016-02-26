var electron = require('electron');

// Module to control application life.
var app = require('app');

// Module to create native browser window.
var BrowserWindow = require('browser-window');
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {

  var screenSize = electron.screen.getPrimaryDisplay().workAreaSize;
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: Math.round(screenSize.width * 0.8), height: Math.round((screenSize.height / 3) * 2.5), frame: false, 'titleBarStyle': 'hidden' });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the devtools.
  // mainWindow.openDevTools();
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    process.exit(0);
  });

});