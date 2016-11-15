 var sql = require('../model/sql.js');  
var mysql = require('../node_modules/mysql');


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

				var record = {id:'12', username:'manish', email:'manish@gmail.com', address:'kurla', teli:'098766785', department:'electical', DOB:'23/6/1993', DOJ:'1/5/2016', password:'fsgfef35',status:"Active"};


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