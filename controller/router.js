var mysql = require('../node_modules/mysql');
var express = require('express');

var sql = require('../model/sql.js');  
 
	 exports.contGet = function(req,res){

	    	
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

	                    
	                    console.log('response ending on console');

	                    res.end(); //response ended
	                }); // end of connection.query
	                // connection.end();

	            } // end of else
	            // connection.end();
	        }); // end of connection.connect()
	        /***************************************************************************/
	    }






 exports.contPost = function(req,resp)
		{
			console.log("True->updateUser");
			resp.writeHead(200, {'Content-Type': 'text/html' });

			sql.dbconn.connect(function(err)
					{
						if(err)
						{
							console.error("update error:",err.stack);
						}

						else
						{
							console.log('update post connected');

							var updated = sql.dbconn.query('UPDATE auth_user SET username="updatePostAnkit" WHERE id=3', function(err,res)
							{
								sql.dbconn.end();
								if(err) throw err;
								console.log('updated data in auth_user');
								resp.write('updated data in auth_user');
								resp.end();

							});
						return;
						}

					});
		}

	     
exports.contDelete = function(req,resp)
		{
			console.log("true->deleteUser");
			resp.writeHead(200, {'Content-Type': 'text/html' });
			sql.dbconn.connect(function(err)
			{
				if(err)
				{
					console.error("delete error->",err.stack);
				}
				else
				{
					console.log('delete post connected');
					var deleted = sql.dbconn.query('DELETE from auth_user where id=3', function(err,res)
					{
						if(err) throw err;
						console.log('deleted data');
						resp.write('deletd data');
						resp.end();
					});
				return;
				}
			});
		} 

exports.contPut = function(req,resp)
		{
			console.log("true addUser");
			resp.writeHead(200, {'Content-Type': 'text/html' });
			sql.dbconn.connect(function(err)
			{
				if(err)
   
				{
					console.error("post error", err.stack);
					return;
				}

				else
				{
				console.log("put connected...");

				var record = {id:'100', username:'hundred', email:'santosh@gmail.com', address:'vidyavihar', teli:'098766787', department:'front end', DOB:'23/6/1993', DOJ:'1/5/2016', password:'23sahusatish'};


				sql.dbconn.query('INSERT INTO auth_user SET ?',record, function(err,res)
						{
							sql.dbconn.end();
							console.log("db conn endd");
							if(err) throw err;
							console.log("inserted in auth_user");
							resp.write('inserted into db');
							resp.write('seted'); 

							resp.end();

				}); //end of query
				return;
				}

			});  // end of db.connect post
			
		}



