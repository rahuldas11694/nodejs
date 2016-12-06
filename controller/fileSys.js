var fs = require('fs');

console.log("FILE_SYSTEM")

var promise = require('bluebird');
// console.log(promise)

var errors = require('errors');
console.log(errors)


exports.contFile = function(req, res) {


    //           res.writeHead(200, {   'Transfer-Encoding' : 'chunked',
    //                                  'Content-Type':     'video/avi', 
    //                                  'Content-Length'    : 100, // large size to fake a file
    // });
    //     errors.stacks(true);
    // errors.create({
    //  name                : 'FileNotFoundError',
    //  code                : 404,
    //  defaultMessage      : 'The requested file could not be found',
    //  defaultResponse : 'Verify the file exists and retry the operation',
    //  defaultExplanation  : 'The file /home/boden/foo could not be found'
    // });


    // res.writeHead(200, { 'Content-Type': 'text/plain' });

    var da = fs.readFile("./app.s", function(err, data1) {

        if (err) { //throw new Error("jhdkndm cjn ");
            console.log("app.js FileNotFoundException")
            //  res.statusMessage = "RequestedFileNotFound";
            // res.statusCode = 402;
            res.status(402);
            res.write("FileNotFoundException");
            res.end();
            // res.statusMessage = "RequestedFileNotFound";
            // res.status(400);
            // res.write("app.js  requested file not found");
            // res.end();
            console.log("err----->",err,"-------","<--------req------>",req)
            // res.writeHead(404);
            res.write("FileNotFoundException");

            res.end();

        } else {
            fs.readFile("./lib.js", function(err, data2) {

                if (err) {
                    console.log("lib.js   FileNotFoundException")
                        // res.status(404);
                        // res.write("FileNotFoundException");
                    res.statusMessage = "RequestedFileNotFound";
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.write("lib.js   requested file not found");
                    res.end();
                } else {

                    console.log(data2.toString());
                    fs.readFile("./package.json", function(err, data3) {

                        if (err) {
                            console.log("package.js   FileNotFoundException")
                                // res.status(404);
                                // res.write("FileNotFoundException");
                                // res.end();
                            res.statusMessage = "RequestedFileNotFound";
                            res.writeHead(404, { 'Content-Type': 'text/plain' });
                            res.write("package.js requested file not found");
                            res.end();


                        }
                        console.log(data3.toString());
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.write(data1 + "" + data2 + "" + data3);
                        res.end()
                    });
                } // else end

                console.log("in data2 catch");
            });

        } //else end





         



        /*

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
           //       res.write("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ \n");
                    //                  res.write(data1+"\n"+data2+" \n "+data3);

                    // res.end();
                                    }); 
                            });
                    

                });


        */




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




    }); //end of data1 da=
}
