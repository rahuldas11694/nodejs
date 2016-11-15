var Jsondata = require('./controller/uget'); // data imported from uget conget fun frm inside
console.log("Jsondata from uget",Jsondata);

// var LibData 
exports.LibData= function()
					{
						var ActiveUser = new Array();
						var i=0;

						function isActive(element,index)
						{
							//console.log("callback. Element-->",element.status,index)
							if(element.status==='active')
							{
								//console.log("IN IF STATEMENT ELEMENT-->",element,index);
								// return element.status;
								
								  ActiveUser[i++] =element;
								  return element.status;
								 //console.log("NEW array INDEX ->",i,"ActiveUser ",ActiveUser)

							}
							else{
							  return element.status;   // by defaults it returns false always
							}
						}

						console.log("every-->",Jsondata.every(isActive)); //three param 1.ele 2.index 3.array
						

						console.log("************",ActiveUser,"**************");
						return ActiveUser;
						
					} 
// module.exports = LibData;
//module.exports = ActiveUser;


						

