	var http = require('http');
	// var mysql = require('mysql');
	var express = require('express');

	var app = express();

	var mysql = require('mysql');

	//var server = http.createServer(function(request, response) {

	    var dbconn = mysql.createConnection({
	        host: '127.0.0.1',
	        user: 'root',
	        password: '',
	        database: 'securityDB'
	    });

	   //console.log(request.url);

/*********************************************GET REQUEST******************************************************/
	    //if (request.url === '/usersList') 
        console.log('app.get');
        //app.use(multer({dest:'/usersList'}));
        //app.use('/usersList') ;



	    app.get('/usersList',function(req,res)
		{
			//res.send("hiii");
	    	
	        console.log("true->userLIST");
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
	    } );

/***************************************** get end and start for post **********************************************************/

		console.log('app.put');
		//if(request.url==='/addUser') //
		app.put('/addUser',function(req,resp)
		{
			console.log("true addUser");
			resp.writeHead(200, {'Content-Type': 'text/html' });
			dbconn.connect(function(err)
			{
				if(err)

				{
					console.error("post error", err.stack);
					return;
				}

				else
				{
				console.log("put connected...");

				var record = {id:'11', username:'love', email:'santosh@gmail.com', address:'vidyavihar', teli:'098766787', department:'front end', DOB:'23/6/1993', DOJ:'1/5/2016', password:'23sahusatish'};
					// res.write('record');
				 //    res.write("inserting data in db");
				dbconn.query('INSERT INTO auth_user SET ?',record, function(err,res)
						{
							dbconn.end();
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
		});

		
		console.log('app.post');
		
		//if(request.url==='/updateUser')  // method Update
		app.post('/updateUser', function(req,resp)
		{
			console.log("True->updateUser");
			resp.writeHead(200, {'Content-Type': 'text/html' });

			dbconn.connect(function(err)
					{
						if(err)
						{
							console.error("update error:",err.stack);
						}

						else
						{
							console.log('update post connected');

							var updated = dbconn.query('UPDATE auth_user SET username="updatePostAnkit" WHERE id=3', function(err,res)
							{
								dbconn.end();
								if(err) throw err;
								console.log('updated data in auth_user');
								resp.write('updated data in auth_user');
								resp.end();

							});
						return;
						}

					});
		});
		
        console.log('app.delete');

		//if(request.url==='/deleteUser')  // methos DELETE
		app.delete('/deleteUser',function(req,resp)
		{
			console.log("true->deleteUser");
			resp.writeHead(200, {'Content-Type': 'text/html' });
			dbconn.connect(function(err)
			{
				if(err)
				{
					console.error("delete error->",err.stack);
				}
				else
				{
					console.log('delete post connected');
					var deleted = dbconn.query('DELETE from auth_user where id=11', function(err,res)
					{
						if(err) throw err;
						console.log('deleted data');
						resp.write('deletd data');
						resp.end();
					});
				return;
				}
			});
		});

//});	 //end of create server
	/******************************************** end post *******************************************************/

	//server.listen(8081);
	app.listen(8081);

    //app.listen(8081);

	console.log('server is listening');