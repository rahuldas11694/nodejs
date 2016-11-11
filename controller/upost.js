 var sql = require('../model/sql.js');  
var mysql = require('../node_modules/mysql');
 


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