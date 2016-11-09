	var http = require('http');

	var express = require('express');

	var app = express();

	var router = express.Router();

	var mysql = require('mysql');

    var cont = require('./controller/router.js');

/*********************************************GET REQUEST******************************************************/

	    router.get('/usersList',cont.contGet);

		//if(request.url==='/addUser') //
		router.put('/addUser',cont.contPut);

		//if(request.url==='/updateUser')  // method Update
		router.post('/updateUser',cont.contPost); 
		
		//if(request.url==='/deleteUser')  // methos DELETE
	    router.delete('/deleteUser',cont.contDelete); 


/******************************************** end post *******************************************************/

	//server.listen(8081);
	app.listen(8081);
	app.use('/',router);

    //app.listen(8081);

	console.log('server is listening');