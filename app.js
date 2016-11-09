	
	function xyz(abc){
		console.log("hello");
         return abc()()();
	}
   xyz(function(){
   		console.log('FUNABC');  
    	
    	return function (){
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
	    router.get('/usersList',require('./controller/router.js').contGet);

/***************************************** get end and start for post **********************************************************/

		console.log('app.put');
		//if(request.url==='/addUser') //
		router.put('/addUser',require('./controller/rtrput.js').contPut);

		
		console.log('app.post');
		
		//if(request.url==='/updateUser')  // method Update
		router.post('/updateUser',require('./controller/router.js').contPost); 
		
        console.log('app.delete');

		//if(request.url==='/deleteUser')  // methos DELETE
	    router.delete('/deleteUser',require('./controller/router.js').contDelete); 

//});	 //end of create server
	/******************************************** end post *******************************************************/

	//server.listen(8081);
	app.listen(8081);
	app.use('/',router);

    //app.listen(8081);

	console.log('server is listening');