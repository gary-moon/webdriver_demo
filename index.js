var selenium = require('selenium-standalone');
var spawn = require('child_process').spawn;

selenium.install({
  version: '2.48.0',
  baseURL: 'http://selenium-release.storage.googleapis.com',
  drivers: {
    chrome: {
      // check for more recent versions of chrome driver here:
      // http://chromedriver.storage.googleapis.com/index.html
      version: '2.20',
      arch: process.arch,
      baseURL: 'http://chromedriver.storage.googleapis.com'
    },
    ie: {
      // check for more recent versions of internet explorer driver here:
      // http://selenium-release.storage.googleapis.com/index.html
      version: '2.48.0',
      arch: process.arch,
      baseURL: 'http://selenium-release.storage.googleapis.com'
    }
  },
  logger: function (message) {
    console.log(message);
  }
}, function(err) {
  if (err) {
    console.error(err);
    return;
  }

  selenium.start({
    version: '2.48.0'
  }, function(err, child) {
    if (err) {
      console.error(err);

      if (child) {
        child.kill();
      }

      return;
    }

    var testProc = spawn('node', ['./node_modules/webdriverio/bin/wdio', 'wdio.conf.js'], {
      'stdio': 'inherit'
    });

    testProc.on('close', function () {
      child.kill();
      process.exit(0);
    });
  });
});
