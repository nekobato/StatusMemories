gulp = require('gulp')
packager = require('electron-packager')
appPackage = require('./package.json')
webpack = require('webpack')

const buildOption = {
  arch: 'x64', // ia32, x64, all
  dir: './app',
  platform: 'darwin', // linux, win32, darwin, all
  // below is optional
  name: 'polidium',
  version: process.env.ELECTRON || '1.2.1',
  'app-bundle-id': `${appPackage.author}.${appPackage.name}`,
  'app-version': appPackage.version,
  'build-version': appPackage.version,
  asar: true,
  prune: true,
  overwrite: true,
  icon: './AppIcon',
  out: './release',
  ignore: /\*\.map/
}

gulp.task('release', ['webpack'], () => {
  var start = Date.now()
  packager(buildOption, (err, appPath) => {
    if (err) return console.log('[ERROR]', err)
    console.log('[appPath]', appPath)
    var end = Date.now()
    console.log('[relase]', `${end  - start} MilliSeconds.`)
  })
})

gulp.task('webpack', (callback) => {
  webpack(require('./webpack.config.js'), function(err, stats) {
      if (err) throw new Error(err)
      console.log("[webpack]", stats.toString())
      callback()
  })
})
