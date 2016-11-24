var sql = require('../model/sql.js');
var mysql = require('../node_modules/mysql');
var checkActive = require('./check_active.js');
var lib = require('../lib');
var db = require('./dbconn.js');
var promise = require('../node_modules/promise');
var q = require('../node_modules/q');

/*******************************************************************/

exports.contActive = function(req, res) {

    // console.log('get...connected..$$$$$$$$$$$$$$ ');
    // query is asynchronous fun, so u van not return any value 
    var qwry = 'SELECT username,email,status FROM auth_user'

    var k = db.createConnection(qwry, function(err, rows, fields) {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        var json = JSON.stringify(rows); //serialized it.. diff bw parsejson and stringify
        var data = JSON.parse(json);

        if (data === "undefined" || data[0] == null || data.length<0 ) {
            res.send("requested data not present");
            return;
        }

        var filteredData = data.filter(function(element, index) { //creates new array and save the filtered data in tht array
            if (element.status === 'active' || element.status === 'present' || element.status === 'enable') {

                return element.status;
            }
        });
        
        console.log("filteredData---->", filteredData);
        console.log("!@#$%^&*())(*&^%$#@!@#$%^&*()", lib);
        res.end(); //response ended
    }); // end of connection.query
    /***************************************************************************/
}
