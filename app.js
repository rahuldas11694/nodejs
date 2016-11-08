	
	function xyz(abc){
		console.log("hello");
         return abc()()();
	}
   xyz(function(){
   		console.log('FUNABC');  
    	
    	return function(){
    		console.log("1111");
    		
    		return function(){
    			console.log("2222");
    		}
    	}
   });

	var http = require('http');
	// var mysql = require('mysql');
	var express = require('express');

	var app = express();

	var router = express.Router();

	var mysql = require('mysql');


	//var server = http.createServer(function(request, response) {
        //var sql = require('./model/sql.js');                               //DONE

	    //console.log('sql->',require('./model/sql.js'));

	   //console.log(request.url);

/*********************************************GET REQUEST******************************************************/
	    //if (request.url === '/usersList') 
        console.log('app.get');
        //app.use(multer({dest:'/usersList'}));
        //app.use('/usersList') ;

        // var route = require('./controller/router.js');
        //console.log('route->',route);

	    //console.log('route.contGet',route.contGet);
	    // router.get('/demo',);
	   // router.get('/usersList',);
	    require('./controller/router.js').contGet

/***************************************** get end and start for post **********************************************************/

		console.log('app.put');
		//if(request.url==='/addUser') //
		router.put('/addUser',function(req,resp)
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
		router.post('/updateUser', function(req,resp)
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
	    router.delete('/deleteUser',function(req,resp)
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
	app.use('/',router);

    //app.listen(8081);

	console.log('server is listening');