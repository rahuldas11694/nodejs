	var mysql = require('mysql');
	console.log(mysql);

	var connection = mysql.createConnection({
		host:'127.0.0.1',
		user: 'root',
		password:'',
		database:'securityDB'
	});

	connection.connect(function(err)
		{
			if(err){
			console.error('error in connection:'+err.stack);
			return;
			}
			else
			{
				console.log('connected... now you can perform query ');

	connection.query('SELECT username,email FROM auth_user', function(err,rows,fields)
		{
			if(err) throw err;

			for(var i in rows){
				console.log("username->",rows[i].username,'||   email address->', rows[i].email);
		}
		
	connection.end();
		});
			}
		});


