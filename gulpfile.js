gulp = require('gulp');
packager = require('electron-packager');
appPackage = require('./package.json');

const buildOption = {
  arch: 'x64', // ia32, x64, all
  dir: './app',
  platform: 'darwin', // linux, win32, darwin, all
  // below is optional
  name: 'polidium',
  version: appPackage.devDependencies["electron-prebuilt"],
  'app-bundle-id': `${appPackage.author}.${appPackage.name}`,
  'app-version': appPackage.version,
  'build-version': appPackage.version,
  asar: true,
  prune: true,
  overwrite: true,
  icon: './AppIcon' || false,
  out: './release',
  ignore: /\*\.map/
}

gulp.task('release', () => {
  var start = Date.now();

  packager(buildOption, (err, appPath) => {
    if (err) console.log('[ERROR]', err);
    console.log('[appPath]', appPath);
    var end = Date.now();

    console.log('[relase]', `${end  - start} MilliSeconds.`);
  });
});
