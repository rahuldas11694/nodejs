	var http 		= require('http');

	var express 	= require('express');

	var app 		= express();

	var Router 		= express.Router();

	var mysql 		= require('mysql');

	var routes 		= require('./routes');

    var fs 			= require('fs');
//ksjndvskv 

    // console.log("FILE SYSTEM",fs);
   // var da = fs.readFile("/Users/rahulsurvase/Desktop/nodeSql/app.js", function(err, data)
   //  	{
   //  		if(err) throw err;
    		
   //  		console.log("READFILE_______––––––––––_________–––––––>",data.toString());


   //  	});  
   
   // console.log("_______––––––––––_________–––––––",da);




	//var cont = require('./controller/router.js');
	// var modules = require('./modules/modules.js');
	// var modules = require('./modules/modules.js');
	// var controller = require('./controller');
	// console.log("controller",controller);
	// console.log("modules",modules);

	/*********************************************GET REQUEST******************************************************/

	// router.get('/usersList',controller..contGet);

	//if(request.url==='/addUser') //
	// router.put('/addUser',controller.uput.contPut);

	//if(request.url==='/updateUser')  // method Update
	// router.post('/updateUser',controller.upost.contPost); 

	//if(request.url==='/deleteUser')  // methos DELETE
	// router.delete('/deleteUser',controller.udelete.contDelete); 

	// router.get('/users/List',controller.uget.contGet);

	console.log("routes$$$$$$$$$", routes);

	app.use('/', routes);
	/******************************************** end post *******************************************************/

	//server.listen(8081);
	app.listen(8081);
	//app.use('/',router);

	//app.listen(8081);

	console.log('server is listening');
