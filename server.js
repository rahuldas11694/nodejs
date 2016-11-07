	var http = require('http');
	// var mysql = require('mysql');
	var express = require('express');

	var app = express();

	var mysql = require('mysql');

	var server = http.createServer(function(request, response) {

	    var dbconn = mysql.createConnection({
	        host: '127.0.0.1',
	        user: 'root',
	        password: '',
	        database: 'securityDB'
	    });

	    console.log(request.url);

/*********************************************GET REQUEST******************************************************/
	    if (request.url === '/users') 
	    {
	        console.log("true");
	        console.log(mysql);
	        console.log(dbconn);
	        /*******************************************************************/
	        dbconn.connect(function(err){

	            if (err) {
	                console.error('error (get) in connection:' + err.stack);
	                return;
	            } else {
	                console.log('get...connected..$$$$$$$$$$$$$$ ');
	                // query is asynchronous fun, so u van not return any value 
	                dbconn.query('SELECT username,email FROM auth_user',function(err, rows, fields) { //this is a callback function
	                    console.log('connection ending');
	                    dbconn.end();
	                    if (err) throw err;

	                    // connection.end();
	                    response.writeHead(200, {'Content-Type': 'x-application/json' });

	                        var json='';
	                        json = JSON.stringify(rows); //serializez it.. diff bw parsejson and stringify
	                        response.write(json);
	                        console.log(json);

	                    //for (var i in rows) {
	                        //console.log("username->", rows[i].username, '||   email address->', rows[i].email);
	                        // console.log(rows);
	                        //console.log('for loop ')
	                        //response.write('username:' + rows[i].username + '*******************Email:' + rows[i].email);
	                        response.write(json);
	                        //response.write('<br>');
	                    //} // end of for loop
	                    console.log('response ending on console');

	                    response.end(); //response ended
	                }); // end of connection.query
	                // connection.end();
	            } // end of else
	            // connection.end();
	        }); // end of connection.connect()
	        /***************************************************************************/
	    } 

/***************************************** get end and start for post **********************************************************/
	    else{
        			console.log('in put else');
					if(request.url==='/users/put')
					{
						console.log("true");
						dbconn.connect(function(err)
						{
							if(err)

							{
								console.error("post error"+ err.stack);
								return;
							}

							else
							{
								console.log("post connected...");

							var record = {id:'10', username:'mohan', email:'mohan@gmail.com', address:'charkop', teli:'098766787', department:'marketing', DOB:'23/6/1993', DOJ:'1/5/2016', password:'23yuiowkfnbd'};
								response.write('record');
							response.write("inserting data in db");
							var puted = dbconn.query('INSERT INTO auth_user SET ?',record, function(err,res)
									{
										if(err) throw err;
										console.log("inserted in auth_user");
										response.write('inserted into db');
										response.write('seted'); 

										response.end();

							}); //end of query
							}

						});  // end of db.connect post
					}

					else
					{
						if(request.url==='/users/update')
						{
							console.log("True->UPDATE");
							dbconn.connect(function(err)
									{
										if(err)
										{
											console.error("update error:"+err.stack);
										}

										else
										{
											console.log('update post connected');

											var updated = dbconn.query('UPDATE auth_user SET username="updatedAnkit" WHERE id=3', function(err,res)
											{
												if(err) throw err;
												console.log('updated data in auth_user');
												response.write('updated data in auth_user');
												response.end();

											});
										}

									});
						}
					}

					if(request.url==='users/delete')
					{
						console.log("true->delete");

						dbconn.connect(function(err)
						{
							if(err)
							{
								console.error("delete error->"+err.stack);
							}
							else
							{
								console.log('delete post connected');
								var deleted = dbconn.query('DELETE from auth_user where id=1', function(err,res)
								{
									if(err) throw err;
									console.log('deleted data');
									response.write('deletd data');
									response.end();
								});
							}
						});
					}
			} //end of else line 68







 /******************************************** end post *******************************************************/


	}); //end of create server

	server.listen(8081);

	console.log('server is listening');
