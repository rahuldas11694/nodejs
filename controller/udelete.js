 var sql = require('../model/sql.js');
 var mysql = require('../node_modules/mysql');
 var db = require('./dbconn.js');


 exports.contDelete = function(req, resp) {
     console.log("true->deleteUser");
     var qwry = 'DELETE from auth_user where id=1000';
     
     var deleted = db.createConnection(qwry,function(err,rows) {

     			if(err) throw err;

                console.log('deleted data',rows);
 				
 				resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write('deletd data');
                resp.end();
             });
             return;
         }