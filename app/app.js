const {BrowserWindow} = require('electron')

const windowSize = {
  width: 800,
  height: 600
}

module.exports = class {

  constructor(options) {

    this.win = new BrowserWindow({
      width: windowSize.width,
      height: windowSize.height,
      show: true,
      resizable: false,
      frame: true,
      transparent: false,
      skipTaskbar: true,
      hasShadow: false
    })

    this.win.setVisibleOnAllWorkspaces(true)

    this.win.on('blur', () => {
      // this.win.hide()
    })

    this.win.loadURL('file://' + __dirname + '/app.html')
  }

  showWindow() {
    // const {width, height} = screen.getPrimaryDisplay().workAreaSize
    // this.win.setPosition( (width - windowWidth)/2, (height - windowHeight)/2 )
    this.win.show()
    this.win.focus()
  }

  toggle() {
    if (this.win.isVisible()) {
      this.win.hide()
    }else {
      this.showWindow()
    }
  }
}
