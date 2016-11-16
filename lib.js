console.log("hiii THIS IS LIB")


function NodeLib()
	{

	// this.data = name;
	// console.log(this.name,"inside nodeLib");

	    NodeLib.prototype.evry = function(data)
		    {
		    	console.log("_+_+_+_+_+_+_+DATA+IS_+_+_+_+_+_+_+_+_+_",data)
		    	
					function isActive(element,index)
			    	{

					return element.status==="active";
			    		
			    	}

		    	var filteredData = data.filter(isActive);
		    	console.log("THIS IS FILTERED DATA",filteredData);

		    	return filteredData ;
		    }

	}

	var nl = new NodeLib();	

		// console.log("nl---------------------->",nl.evry);
		// console.log("NodeLib.evry---------------------->",NodeLib);
		// console.log("NodeLib.prototype---------------------->",NodeLib.prototype);


	//module.exports = nl;
	module.exports = NodeLib.prototype;	

