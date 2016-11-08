var mysql = require('../node_modules/mysql');
var express = require('express');

var sql = require('../model/sql.js');  
 
	 exports.contGet = function(req,res){
			//res.send("hiii");
	    	console.log('RESPONSE',res);
	        console.log("true->userLIST");
	        console.log(mysql);
	        console.log(sql.dbconn);
	        /*******************************************************************/
	        sql.dbconn.connect(function(err){

	            if (err) {
	                console.error('error (get) in connection:' + err.stack);
	                return;
	            } else {
	                console.log('get...connected..$$$$$$$$$$$$$$ ');
	                // query is asynchronous fun, so u van not return any value 
	                sql.dbconn.query('SELECT username,email FROM auth_user',function(err, rows, fields) { //this is a callback function
	                    console.log('connection ending');
	                    sql.dbconn.end();
	                    if (err) throw err;

	                    // connection.end();
	                    res.writeHead(200, {'Content-Type': 'x-application/json' });

	                        var json='';
	                        json = JSON.stringify(rows); //serializez it.. diff bw parsejson and stringify
	                        res.write(json);
	                        res.write("hiiii");
	                        console.log(json);

	                    //for (var i in rows) {
	                        //console.log("username->", rows[i].username, '||   email address->', rows[i].email);
	                        // console.log(rows);
	                        //console.log('for loop ')
	                        //response.write('username:' + rows[i].username + '*******************Email:' + rows[i].email);
	                        //response.write(json);
	                        //response.write('<br>');
	                    //} // end of for loop
	                    console.log('response ending on console');

	                    res.end(); //response ended
	                }); // end of connection.query
	                // connection.end();

	            } // end of else
	            // connection.end();
	        }); // end of connection.connect()
	        /***************************************************************************/
	    }


	     











