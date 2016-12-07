var Promise = require("bluebird");
// var fs = require("fs");
var fs = Promise.promisifyAll(require("fs"));
// console.log('promisifyfs', fs);



// console.log("bluebird---->", Promise);






exports.contPromise = function(req, res) {

    /*  
    fs.readFileAsync("./app.js")
        .then(function(data) {
            console.log("promise function executed");
            console.log(data.toString());
            res.write(data.toString());
            return data; // if you dont return it, it wont get passed to following then()

            // res.end();
        })
        .then(function(data) {
            // console.log("in second then", data.toString());



            res.write(data);
            res.end();
        })
        .catch(ReferenceError, function(err) {
            console.log("SyntaxError+++++")
            console.error(err);
            res.end("suntax err");
        })
        .catch(function(err) {
            console.log("just error ")
            console.error(err)
            res.end("just error");

        });

*/


    // .catch(function(err) {
    //     console.error(err)
    //     res.statusMessage = "issue with file";
    //     res.statusCode = 404;

    //     res.write("FileNotFoundException");
    //     res.end();
    // })


  			//NESTED Promise

  /*  
    fs.readFileAsync("./app.js")
        .then(function(data1) {
            console.log("in data11111 then")
            // res.write(data1.toString());

            fs.readFileAsync("./lib.js")
                .then(function(data2) {
                    console.log("in data2222 then")
			        // res.write(data2.toString());

                    fs.readFileAsync("./package.json")
                        .then(function(data3) {
                        	res.write(data3+""+data2+" "+data1)
                            console.log("in data3333 then")
                            res.end();

                         })
                        .catch(function(err){
                        	console.error("error in 3rd file",err);
                        	res.end("FileNotFoundException in 3rd");
                        }); // 3rd then 
                }) // 2nd then
                .catch(function(err)
                {
                	console.error("error in 2nd file",err);
                });
        })   // 1st then
        .catch(function(err)
        {
        	console.error("error in 1st file")
        })

*/

var arr = ['./app.js', './lib.js', './package.json']






}
