	
	var http = require('http');
	var mysql = require('mysql');
	var express = require('express');
    var app = express();


	console.log(mysql);
	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user: 'root',
		password:'',
		database:'securityDB'
	});

    // console.log(connection);
/*******************************************************************/
	// connection.connect(function(err)
	// 	{
	// 		if(err){
	// 		console.error('error in connection:'+err.stack);
	// 		return;
	// 		}
 // 			else
 // 			{
 // 				console.log('connected... now you can perform query ');

 // 	connection.query('SELECT username,email FROM auth_user', function(err,rows,fields)
	// 	{
	// 		if(err) throw err;

	// 		for(var i in rows){
	// 			console.log("username->",rows[i].username,'||   email address->', rows[i].email);
	// 	}
		
	// connection.end();
	// 	});
	// 		}
	// 	});
 /*******************************************************************/







	var server = http.createServer(function(request,response)
	{
		console.log(request.url)
		if(request.url==='/users'){
			console.log("true");
			return;
		}
		else{
				console.log('false');
		}

		response.writeHead(200,{'Content-Type':'text/html'});
		//response.write('<!DOCTYPE 'html'>');
		response.write('<html>');
		response.write('<header>');
		response.write('<title>server started</title>');
		response.write('</head>');
		response.write('<body>');
		response.write('hello world');
		response.write('</body>');
		response.write('<html>');
      



		// var sql = require('nodesql.js');

		response.end('hiiii'+request.url);


	});

	server.listen(8081);

	console.log('server is listening');