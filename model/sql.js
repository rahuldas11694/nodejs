	var mysql = require('../node_modules/mysql');

module.exports= {
 dbconn: mysql.createConnection({
	        host: '127.0.0.1',
	        user: 'root',
	        password: '',
	        database: 'securityDB'
	    })
}

