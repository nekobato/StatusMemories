const {app, Tray, nativeImage, globalShortcut, ipcMain} = require('electron')

const DEBUG = process.env.DEBUG ? true : false

const AppWindow = require('./app.js')

let appWindow, tray, trayIcon

app.dock.hide()

app.on('ready', function() {

  appWindow = new AppWindow()

  trayIcon = nativeImage.createFromPath(__dirname + '/img/tray_icon.png')
  tray = new Tray(trayIcon)

  tray.on('click', function(event, bounds) {
    appWindow.toggle()
  })

  ipcMain.on('controller:close-application', function(event) {
    app.quit()
  })

  ipcMain.on('controller:ipc-bridge', function(event, channel, data) {
    player.win.webContents.send('main:ipc-bridge', channel, data)
  })
})

app.on('will-quit', function() {
  globalShortcut.unregisterAll()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
