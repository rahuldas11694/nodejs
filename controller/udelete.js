 var sql = require('../model/sql.js');  
var mysql = require('../node_modules/mysql');


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
					var deleted = sql.dbconn.query('DELETE from auth_user where id=12', function(err,res)
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