	var http = require('http');
	// var mysql = require('mysql');
	var express = require('express');

	var app = express();




	var mysql = require('mysql');


	var connection = mysql.createPool({
	    host: '127.0.0.1',
	    user: 'root',
	    password: '',
	    database: 'securityDB'
	});

	var server = http.createServer(function(request, response) {
	    console.log(request.url)
	    if (request.url === '/users') {
	        console.log("true");
	         console.log(mysql);

	         console.log(connection);

	        /*******************************************************************/
	        connection.connect(function(err) {

	            if (err) {
	                console.error('error in connection:' + err.stack);
	                return;
	            } else {
	                console.log('connected...$$$$$$$$$$$$$$ ');
	                // query is asynchronous fun, so u van not return any value
	                connection.query('SELECT username,email FROM auth_user', function(err, rows, fields) {
	                console.log('connection ending');
	                    connection.end();
	                    if (err) throw err;

	            	// connection.end();
	                    response.writeHead(200, { 'Content-Type': 'text/html' });
	                    response.write('<html>');
	                    response.write('<header>');
	                    response.write('<title>server started</title>');
	                    response.write('</head>');
	                    response.write('<body>');
	                    response.write('hello world<br>');

	                    for (var i in rows) {
	                        //console.log("username->", rows[i].username, '||   email address->', rows[i].email);
	                        // console.log(rows);
	                      console.log('for loop ')
                        response.write('username:' + rows[i].username + '*******************Email:' + rows[i].email);
                        response.write('<br>');


	                    } // end of for loop
	                    response.write('</body>');
	                    response.write('<html>');
	                    console.log('response ending on console');
		                response.write("response endingggg-> <br>");
		                response.end('response ended');

	                }); // end of connection.query
					// connection.end();

	            } // end of else
	           // connection.end();
	        }); // end of connection.connect()

// connection.end();

	        /*******************************************************************/
	    } else {
	        console.log('false');

	    }

	}); //end of create server


	server.listen(8081);

	console.log('server is listening');
