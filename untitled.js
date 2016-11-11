function(){
      console.log('FUNABC');  
      
      return function (){
        console.log("1111");
        
        return function(){
          console.log("2222");
        }
      }
   }


   ////////////////////////////////////////////

   function xyz(abc){
    console.log("hello", abc);
         return;
  }
   xyz();