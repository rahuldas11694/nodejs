var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox',

        // protocol: 'http',


        coloredLogs: true,
        logLevel: 'verbose',
        // baseUrl: 'http://localhost',
        platform:'MAC'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('https://www.facebook.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    // .end();



    