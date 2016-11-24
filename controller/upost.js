 var sql = require('../model/sql.js');
 var mysql = require('../node_modules/mysql');
 var db = require('./dbconn.js');

 // updating the attribute value
 exports.contPost = function(req, resp) {

 console.log("True->updateUser");

 var qwry = 'UPDATE auth_user SET username="updatePostSanket" WHERE id=6';

 var createConn = db.createConnection(qwry, function(err, rows) {
     if (err) throw err;
     console.log('updated data in auth_user');
 	 
 	 resp.writeHead(200, { 'Content-Type': 'text/html' });
     resp.write('updated data in auth_user');
     resp.end();

 });
 return;
 }