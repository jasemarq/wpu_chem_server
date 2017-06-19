// Object literal
var dog = {
	// Properties
	"name":"Benji",
	"type":"pitbull",
	// Methods
	"getName" : function () {
		console.log(dog.name);
	}
}

// Custom Constructor
function Book(name) { 
  Object.defineProperty(this, "name", { 
      get: function() { 
        return "Book: " + name;       
      },        
      set: function(newName) {            
        name = newName;        
      },               
      configurable: false     
   }); 
}

// Our modest constructor function
function MyConstructor(name, order) {
this.name = name;
this.order = order;
}

// Initialize all our new constructors from an array
var myConstructorArray = function(yourArrayOfWhatever) {
return yourArrayOfWhatever.map(function(i, value){
return new MyConstructor(‘item-‘ + (i), i);
});
};

console.log(myConstructorArray([1, 2, 3, 4, 5]));
