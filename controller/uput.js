 var sql = require('../model/sql.js');
 var mysql = require('../node_modules/mysql');
 var db = require('./dbconn.js');


 exports.contPut = function(req, resp) {
     console.log("true addUser");

     var record = { id: '1000', username: 'mani', email: 'manish@gmail.com', address: 'kurla', teli: '098766785', department: 'electical', DOB: '23/6/1993', DOJ: '1/5/2016', password: 'fsgfef35', status: "Active" };
     var qwry = 'INSERT INTO auth_user SET ?';


     db.createConnectionForPut(qwry, record, function(err) {

         console.log("db conn endd");
         if (err) throw err;
         resp.writeHead(200, { 'Content-Type': 'text/html' });
         console.log("inserted in auth_user");
         resp.write('inserted into db');
         resp.write('seted');


          resp.end();

     }); //end of query
     // return;
 }
