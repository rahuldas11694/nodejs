function abc(){
      console.log('FUNABC');  
      
      return function (){
        console.log("1111");
        
        function final(){
           console.log("finally")   
        }
        var fn = function(){
          console.log("sdfsdfds")
        }
        return {
          a : "haha",
          b : function(){
            console.log("2222");
            //function fn(){};
            return final;
          }
        }
      }
      // var vrr = "cool";
      // return vrr;
   }

abc()().b().final();
 // var f =  abc()().b();
 //  var f = function final(){
 //   console.log("sdfhsbfsf");
 // }
 // f();
   ////////////////////////////////////////////
 

  //  function xyz(abc){
  //   console.log("hello", abc);
  //        return;
  // }
  //  xyz();