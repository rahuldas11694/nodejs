var fs = require('fs');

console.log("FILE_SYSTEM")

 var promise = require('bluebird');
// console.log(promise)

exports.contFile = function(req,res){


// 			 res.writeHead(200, {	'Transfer-Encoding'	: 'chunked',
// 			 						'Content-Type': 	'video/avi', 
// 			 						'Content-Length'	: 100, // large size to fake a file
// });

        res.writeHead(200, { 'Content-Type': 'text' });

       
	var da = fs.readFile("./ap.js", function(err, data1)
    	{
    		try{
			if(err) throw err;
    		console.log("DATA1");
    		}
    		catch(err){
    			console.log("in catch of app.js")
    			res.write(err.toString());
    			res.end();

    		}


    		// res.write(data1);

    			fs.readFile("./lib.js",function(err,data2)
					{
						try{
						if(err) throw err;
						res.write(data2);
						console.log("data2");
					}catch(err){
						res.send(err.toString());
						res.end();
					}

						 // res.write(data2)

							fs.readFile("./package.json",function(err,data3)
							{
								try{
								if(err) throw new Error("fiel not found"); 

								console.log("data3");
						res.write(data3);
						res.end();

							}catch(err)
							{
								res.send(err.toString());
								res.end();
							}
   //  		res.write("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n");
			// 					res.write(data1+"\n"+data2+" \n "+data3);

			// res.end();
							});	
					});
    		

    	});

/* var promisee = new Promise(function(resolve, reject)
	 {
	 	console.log("in promise ");

		fs.readFile("./ap.js",function(err,data)
			{
				if(err) reject(new Error("file not found"))

					else resolve(data);
			});



 	});


  console.log("____________",promisee);

 promisee.then(function(fromResolve)
 {
 	console.log("inside resolve",fromResolve.toString());

 });
 promisee.catch(function(err)
 	{
 		console.log("inside catch",err.message)
 	});
 res.end();
 */
								


    		// console.log("READFILE_______––––––––––_________–––––––>",data.toString());

    		// res.write("<html><body>giiiiiii </html></body>")








}
