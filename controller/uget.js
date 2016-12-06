 var sql = require('../model/sql.js');
 var mysql = require('../node_modules/mysql');
 var db = require('./dbconn.js');
 var lib = require('../lib');

 exports.contGet = function(req, res) {
     /*******************************************************************/


     	var qwry = 'SELECT username,email,status FROM auth_user'; 
     
     	var createConn = db.createConnection(qwry,function(err, rows){

                 res.writeHead(200, { 'Content-Type': 'x-application/json' });

                 var json = JSON.stringify(rows); //serializez it.. diff bw parsejson and stringify
                 res.write(json);

                 var data = JSON.parse(json);
                 res.write("hiiii");

                 module.exports = data;

                 console.log("status-->", json);
              // console.log("*****DATA********");

                 res.end(); //response ended
             }); // end of connection.query
}
    /***************************************************************************/