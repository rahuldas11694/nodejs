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

        var arr = ['./app.js', './lib.js', './package.json'];
        // console.log(arr.length);
        var i;
        var j = 0;
        for (i = 0; i < arr.length; i++) {
            console.log("current value of i----->", i)

            fs.readFileAsync(arr[i])
                .then(function(data) {

                    console.log("INSIDE FIRST THEN ");
                    res.write(data.toString());
                    // if()
                    return Promise.resolve(data);

                })
                .then(function(data) {
                    var jval = arr[j];
                    var DATA = data.toString("utf8");

                    // console.log("TO STRING DATA----_______>>>>",DATA);
                    var datum = {
                        jval: DATA
                    };

                    var serialize = JSON.stringify(datum);
                    var deserialize = JSON.parse(serialize);
                    console.log("INSIDE SECOND THEN ", jval, deserialize, j, arr.length - 1)
                    res.write(datum.toString());
                    if (j === arr.length - 1) {
                        console.log("INSIDE IF-----ENDING")
                        res.end();
                    }

                    j++;
                })
                .catch(function(err) {
                    // console.error("INSIDE CATCH", err);

                    res.end();

                })


        }


        console.log(i + "    OUTSIDE OF FOR LOOP");


    } //end of contPromise





// if(i==arr.length)
// 			{
// 				console.log("asdfguhjhgfdg43567890-97632hgjfcvb");
// 				res.end();
// 			}
