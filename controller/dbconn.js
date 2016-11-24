var mysql = require('../node_modules/mysql');
var sql = require('../model/sql.js');


module.exports = {
        createConnection: function(qwry, callback) {
            console.log("query--->", qwry)

            sql.dbconn.connect(function(err) {

                if (err) throw err;

                else {
                    console.log('........connected.......');
                    // 
                    sql.dbconn.query(qwry, function(err, rows) {

                        sql.dbconn.end();

                        if (err)
                            return callback(err);
                        else {
                            console.log(".....rows.......", rows);
                            console.log("sending-------------------calback")
                            callback(null, rows, fields);

                        }

                    });
                }
            });

            return "hiiiiii";


        },

        createConnectionForPut: function(qwry, record, callback) { 
                sql.dbconn.connect(function(err) {

                if (err) throw err;

                else {
                    console.log('........connected.......');
                    // 
                    sql.dbconn.query(qwry, record, function(err) {

                        sql.dbconn.end();

                        if (err)
                            return callback(err);

                        else {
console.log("else");
                            callback(null);

                        }

                    });
                }
            });
            return "createConnectionForPut returned";
        }
    }