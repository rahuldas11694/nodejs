// var cred = require('./_11465_cred.js');

var webdriverio = require('webdriverio');

var options = {
	// host				: 'localhost',
	// port 				: 80,
    desiredCapabilities	: {
       	 browserName: 'chrome'
    }
};

// var len = cred.length;
// console.log("len", len);


// for(var i = 0; i < len; i++) {
//     var client = webdriverio.remote(options);
//     console.log("client--->", client, i);

//     client
//         .init()
//         .url(cred[i].url)
//         .click('.header-account-body-title')



// }
console.log('hi')
webdriverio
    .remote(options)
    .init()
    .url('https://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    // .end();

