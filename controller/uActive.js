var sql = require('../model/sql.js'); 
var mysql = require('../node_modules/mysql');
var checkActive = require('./check_active.js');
var lib = require('../lib');
var db = require('./dbconn.js');
var promise = require('../node_modules/promise');
var q = require('../node_modules/q');



console.log(checkActive);
 
/*******************************************************************/
exports.contActive = function(req,res){

			// sql.dbconn.connect(function(err){

			//if (err){
			//console.error('error (get) in connection:' + err.stack);
			//return;
						// } 
			// else{
			// 		console.log('get...connected..$$$$$$$$$$$$$$ ');
					// query is asynchronous fun, so u van not return any value 
					var qwry = 'SELECT username,email,status FROM auth_user'

					var k = db.a(qwry,function(err,rows,fields)
						{
							console.log("IN CALLBACK")
							if(err) throw err;
                         	else 
                        	{
                         		sql.dbconn.end();
                         		global.rows =rows;
							 	console.log(".....rows.......",rows) ;
							}
							return 1;
					});
					console.log('.........'+k+'............')

					//var stat = sql.dbconn.query('SELECT username,email,status FROM auth_user',function(err, rows, fields) { //this is a callback function
     
					//console.log('.........'+db.b()+'............')

					// db.b();
				// 	if (err) throw err;
				// 	else{
				// 	sql.dbconn.end();
				// }
					// connetion.end();


					res.writeHead(200, {'Content-Type': 'text/html' });


					var json = JSON.stringify(rows); //serialized it.. diff bw parsejson and stringify
					// res.write(json);
					var data = JSON.parse(json);
					// res.write("hiiii");
					if (data==="undefined" || data[0]==null)
					{
						res.send("requested data not present");
						return;
					}


					console.log("status-->",data);
					console.log("*****DATA********",data[0].status);

					//function GiveStatus(data){
					// var th = {};
					//for(var i=0; i<data.length; i++)
					//{
					//              		 data[i].username= data[i].status;
					//}

					// return th;
					//}

					//var giveStatusData = GiveStatus(data);
					//console.log("+++++++++++++++++++++++++++++++++++++++++====", giveStatusData)


					// console.log("+++++++++++++++++++++++JD+++++++++++++++++++++++++++",jd);
					// module.exports =data;



					// var lib_data = lib.evry(data,"active",function(data){


				/*	var status= "";
					console.log("((((((((((((((((((((",status);
					for(var i=0; i<data.length;i++)
					{
					 	console.log('+++++++++++++++++++',data[i].status);

						if(data[i].status === 'active' ||  data[i].status === 'present' || data[i].status === 'enable')
						{
							status = data[i].status;
							console.log(")))))))))))))))))))))))))))",status);
							break;
						}
						else 
						{
							continue;
						} 
					}
				*/    // this code is optimized in filter method below

					var filteredData = data.filter(function(element,index){
						if(element.status==='active' || element.status==='present' || element.status==='enable')
						{	
							var status =element.status;
							return element.status === status;
						}
					});
					console.log("filteredData---->",filteredData);



					//function isActive(element,index)
					//{

					// return element.status===status;

					//}

					/*******************************************************************
					*
					var lib_data = lib.evry(data,function(){
					* 			console.log("check1")
					var  chAc = checkActive.statuses(data);
					*			console.log("qwertyuioplkjhgfdsazxcvbnm",chAc);
					return chAc;
					*

					*	
					// onsole.log("--------------------------------------",data)
					* 		// console.log("---------------------CALLBACK---------------------");
					}
					);

					*******************************************************************/
					// var chAc = checkActive.statuses(data,)


					// console.log("---------------------",libdata,"---------------------");



					// for(var i=0; i<lib_data.length; i++)
					// {
					// 	console.log(lib_data[i].username);
					// 	res.write("<br>THE ACTIVE USERS ARE-------->"+lib_data[i].username+"<br>");
					// }
					// console.log("required data========",lib); // evry fun return some value here;

					console.log("!@#$%^&*())(*&^%$#@!@#$%^&*()",lib);




					// var nl = new NodeLib(data);

					/** lib.LibData gives function defination
					* and lib.LibData() executes the function
					*
					**/
					// console.log("_+_+_+_+_+_+_+_+_+",lib.LibData());
					// var activeUser = lib.LibData(); 
					// for(var i=0 ; i<activeUser.length;i++)
					// {
					// console.log("username:",activeUser[i].username,"is",activeUser[i].status);
					// res.write(activeUser[i].status);

					// }




					// console.log('response ending on console',lib);

					res.end(); //response ended
					// }); // end of connection.query
					// connection.end();

				// } // end of else
				// connection.end();
		// }); // end of connection.connect()
		/***************************************************************************/
	}
