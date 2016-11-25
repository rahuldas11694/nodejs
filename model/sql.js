var mysql = require('../node_modules/mysql');

// module.exports = {
//     pool: mysql.createConnection({
//         host: '127.0.0.1',
//         user: 'root',
//         password: '',
//         database: 'securityDB'
//     })
// }


module.exports = {
    pool: mysql.createPool({
        host			: '127.0.0.1',
        user			: 'root',
        password		: '',
        database		: 'securityDB',
        connctionLimit	: 6
    })
}