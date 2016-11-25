// this file is nothing but library for other files

var mysql = require('../node_modules/mysql');
var sql = require('../model/sql.js');


module.exports = {
        createConnection: function(qwry, callback) {
            console.log("query--->", qwry)
            sql.pool.getConnection(function(err, connection) {

                if (err) return callback(err);

                else {
                    console.log('........connected.......');
                    // 
                    connection.query(qwry, function(err, rows) {
                        connection.release();

                        if (err)
                            return callback(err);

                        else {
                            console.log(".....rows.......", rows);
                            console.log("sending-------------------calback")
                            callback(null, rows);

                        }

                    });
                }
            });

            return "hiiiiii";
        },

        // createConnectionForPut: function(qwry, record, callback) {
        //     sql.pool.connect(function(err) {
        //     		console.log("ERROR",err);
        //         if (err) throw err;

        //         else {
        //             console.log('........connected.......');
        //             // 
        //             sql.pool.query(qwry, record, function(err) {

        //                  sql.pool.end();
        //                  Error: Cannot enqueue Handshake after already enqueuing a Handshake.


        //                 if (err)
        //                     return callback(err);

        //                 else {
        //                     console.log("else");
        //                     callback(null);

        //                 }

        //             });
        //         }
        //     });
        //     // return "createConnectionForPut returned";
        // }
        createConnectionForPut: function(qwry, record, callback) {
            sql.pool.getConnection(function(err, connection) {
                if (err) return callback(err);

                else {
                    console.log('........connected.......');
                    // 
                    connection.query(qwry, record, function(err) {

                        connection.release();

                        if (err)
                            return callback(err);

                        else {
                            console.log("else");
                            callback(null);

                        }

                    });
                }
            });
            // return "createConnectionForPut returned";
        }

    } // end of module.exports
