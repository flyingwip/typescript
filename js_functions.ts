//JavaScript Function Definitions

//You can use a function declaration or a function expression.

//function declaration
//Hoisting applies to variable declarations and to function declarations.
function myFunction(a, b) {
    return a * b;
}


//A function expression can be stored in a variable
//anonymous function
//Functions defined using an expression are not hoisted.
var x = function (a, b) {
	return a * b
};

//After a function expression has been stored in a variable, the variable can be used as a function:
//
var z = x(4, 3);
//console.log(z);

//Self-Invoking Functions
//does not work is js
(function () {
    var x = "Hello!!";      // I will invoke myself
    console.log(x);
})();


//JavaScript Function Parameters
x = findMax(1, 123, 500, 115, 44, 88);

//JavaScript functions have a built-in object called the arguments object.
function findMax() {
    var i;
    var max = -Infinity;
    console.log(max);
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

/*
Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.

JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

If a function changes an argument's value, it does not change the parameter's original value.

Changes to arguments are not visible (reflected) outside the function.

Objects are Passed by Reference
In JavaScript, object references are values.

Because of this, objects will behave like they are passed by reference:

If a function changes an object property, it changes the original value.

Changes to object properties are visible (reflected) outside the function.

*/
var x = myFunction();            // x will be the window object


function myFunction() {
   return this;
}



//Invoking a Function as a Method
//In JavaScript you can define functions as object methods.
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
    	//console.log(this); //{ firstName: 'John',lastName: 'Doe',fullName: [Function: fullName] };
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();         // Will return "John Doe"


//JavaScript Function Call
//With the call() method, you can write a method that can be used on different objects.
//In JavaScript all functions are object methods.

var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe",
}
console.log(person.fullName.call(person1));  // Will return "John Doe"
console.log(person.fullName.call(person2));  // Will return "Mary Doe"


var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
console.log(person.fullName.call(person1, "Oslo", "Norway"));

//The JavaScript apply() Method

var person = {
    fullName: function() {
    	console.log(this); // { firstName: 'Mary', lastName: 'Doe' }
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "Mary",
    lastName: "Doe",
}

//The call() Method with Arguments

//console.log(person1);

//
person.fullName.apply(person1);  // Will return "Mary Doe"

/*
The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.
*/
var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
console.log(person.fullName.apply(person1, ["Amsterdam", "The netherlands"]));


