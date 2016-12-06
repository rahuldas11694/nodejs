var mysql = require('../node_modules/mysql');
var express = require('express');

var sql = require('../model/sql.js'); 



exports.contPut = function(req,resp)
		{
			console.log("true addUser");
			resp.writeHead(200, {'Content-Type': 'text/html' });
			sql.dbconn.connect(function(err)
			{
   
				try{
					if(err){
						console.error("post error", err.stack);
						throw new Error("connection error in rput");
					}
				else{
					console.log("put connected...");

					var record = {id:'110', username:'love', email:'santosh@gmail.com', address:'vidyavihar', teli:'098766787', department:'front end', DOB:'23/6/1993', DOJ:'1/5/2016', password:'23sahusatish'};


					sql.dbconn.query('INSERT INTO auth_user SET ?',record, function(err,res){
								sql.dbconn.end();
								console.log("db conn endd");
								try{
									if(err) throw new Error("db query error in rput");
										else{
											console.log("inserted in auth_user");
											resp.write('inserted into db');
											resp.write('seted'); 

											resp.end();
										}
								} catch(err)
								{
									resp.write(err.toString());
									resp.end()

								}


					}); //end of query
				return;
				} // end of else line 20
			} // try end
			catch(err)
			{
				resp.write(err.toString());
			}

			});  // end of db.connect post
			
		}