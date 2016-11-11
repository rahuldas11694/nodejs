var express = require('express');
var app = express();
var router  = express.Router(); // its a class to create modular, mountanable route handlers

	var modules = require('./modules/modules.js');
     var controller = require('./controller');

     console.log("controller->",controller.uget.contGet);
     console.log("routes->modules",modules);

	// router.use(function timelog(req,res,next)
	// 	{
	// 		console.log('Time->',Date.now());
	// 	});


	router.put('/addUser',controller.uput.contPut);

	router.post('/updateUser',controller.upost.contPost); 

	router.delete('/deleteUser',controller.udelete.contDelete); 

	router.get('/usersList',controller.uget.contGet);

     module.exports= router;
     //  module.exports= modules;
     // module.exports= controller;



// load this router module in app.js