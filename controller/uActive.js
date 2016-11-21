 var sql = require('../model/sql.js'); 
var mysql = require('../node_modules/mysql');

var lib = require('../lib');
var checkActive = require('./check_active.js');


exports.contActive = function(req,res){

	    	
	        /*******************************************************************/

	        sql.dbconn.connect(function(err){

	            if (err) {
	                console.error('error (get) in connection:' + err.stack);
	                return;
	            } else {
	                console.log('get...connected..$$$$$$$$$$$$$$ ');
	                // query is asynchronous fun, so u van not return any value 
	               	 var stat = sql.dbconn.query('SELECT username,email,status FROM auth_user',function(err, rows, fields) { //this is a callback function
	                 console.log('connection ending');

	                    sql.dbconn.end();
	                    if (err) throw err;

	                    // connection.end();
	                    res.writeHead(200, {'Content-Type': 'text/html' });

	                        
	                        var json = JSON.stringify(rows); //serializez it.. diff bw parsejson and stringify
	                        // res.write(json);
	                        var data = JSON.parse(json);
	                        // res.write("hiiii");

	                        console.log("status-->",data);
	                        console.log("*****DATA********",data[0].status);

	           //              function GiveStatus(data){
	           //              	var th = {};
	           //              	for(var i=0; i<data.length; i++)
	           //              	{
	           //              		 data[i].username= data[i].status;
	           //              	}

    								// return th;
	           //              }

	           //              	var giveStatusData = GiveStatus(data);
	           //              	console.log("+++++++++++++++++++++++++++++++++++++++++====", giveStatusData)

	                        
	                        // console.log("+++++++++++++++++++++++JD+++++++++++++++++++++++++++",jd);
							   // module.exports =data;

             

             // var lib_data = lib.evry(data,"active",function(data){
             var lib_data = lib.evry(data,function(data){


             		// onsole.log("--------------------------------------",data)
             		// console.log("---------------------CALLBACK---------------------");
					}
             );
					
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
	                }); // end of connection.query
	                // connection.end();

	            } // end of else
	            // connection.end();
	        }); // end of connection.connect()
	        /***************************************************************************/


	    }



	    