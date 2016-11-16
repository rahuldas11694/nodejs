		

		var Person = function()
			{
				this.canTalk = true;
 				
			};

		Person.prototype.greet = function()
			{
				if(this.canTalk){
					console.log("hiii"+this.name);
				}
			};

		var Employee = function(name,title)
			{
				Person.call(this);
				this.name = name;
				this.title = title;
			};

		Employee.prototype = Object.create(Person.prototype);
		Employee.prototype.constructor = Employee;

		Employee.prototype.greet= function(){
			if(this.canTalk){
				console.log("hii Employee.prototype"+this.name+"title"+this.title);

			}
		};

		var Customer = function(name){
			Person.call(this);
			this.name = name;
		};

		Customer.prototype = Object.create(Person.prototype);
		Customer.prototype.constructor = Customer;


		var Mime = function(name){
			Person.call(this);
			this.name = name;
			this.canTalk= false;
		};

		Mime.prototype = Object.create(Person,prototype);
		Mime.prototype.constructor = Mime;

		var bob = new Employee('rahul','survase');
		var joe = new Customer('joe');
		var rg  = new Employee('red green', 'sdjk');
		var mike = new Customer('Mike');
		var mime = new Mime('mime');

		bob.greet();

		joe.greet();

		rg.greet();

		mike.mike();

		mime.greet();















