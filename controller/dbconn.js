var mysql = require('../node_modules/mysql');
var sql = require('../model/sql.js');


module.exports =
{
	a : function(qwry)
			{	


				console.log("query--->",qwry)
				sql.dbconn.connect(function(err)
				{
					if(err) throw err;

					else {
						console.log('........connected.......');
						// 
					 sql.dbconn.query(qwry);
					 // callback()

					 // sql.dbconn.query(qwry,callback(err,rows,fields));
       //                  {
       //                  	if(err) throw err;
       //                  	else 
       //                  	{
       //                  		sql.dbconn.end();
							// 	console.log(".....rows.......",rows) ;

							// }

       //                  });


						}
				});


								// return rows;

				  return "a successful";
			},


	b :function()
			{
				sql.dbconn.end();
				console.log("ENDED")
				return "b successful";

			}

	
 
}
