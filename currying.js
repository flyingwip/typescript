//https://www.sitepoint.com/currying-in-functional-javascript/

var greet = function(greeting, name) {
  console.log(greeting + ", " + name);
};
greet("Hello", "Tinus"); //"Hello, Tinus"


//currying
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

//met deze notatie word er geen functie uitgevoerd.
//Er komt een functie voor terug. Deze word uitegvoerd op het moment dat de callback word uitgevoerd
var greetHello = greetCurried("Hello");

//1e optie
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

//wat ook kan is
greetCurried("Hi there")("Howard"); //"Hi there, Howard" 

//curry all thethings
var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

greetDeeplyCurried('Hallo')(',')('!')('Tnus');
var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Heidi"); //"Hello...Heidi?"
greetAwkwardly("Eddie"); //"Hello...Eddie?"


var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

var greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};

var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi"); //"Hello, Heidi."

var greetGoodbye = curryIt(greeter, "Goodbye", ", ");
greetGoodbye(".", "Joe"); //"Goodbye, Joe."

/*
Argument Order
One thing that’s important to keep in mind when currying is the order of the arguments. 
Using the approach we’ve described, you obviously want the argument that you’re most likely to replace from one variation to the next to be the last argument passed to the original function.
*/

//Example 2 
//https://hackernoon.com/currying-in-js-d9ddc64f162e
/*
* Named after Haskell Brooks Curry, currying is the process of breaking down a function into
* a series of functions that each take a single argument.
*/

console.log('----------------------------------------------------');
console.log('----------------------------------------------------');
console.log('----------------------------------------------------');

function sum3(x, y, z) {
  return x + y + z;
}
//console.log(sum3(1, 2, 3)); // 6

//This works because JS supports closures.
function sum3(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
}


console.log( sum3(1)(2)(3) ); // 6


function _sum3(x, y, z) {
  return x + y + z;
}
function sum_3(x) {
  return (y) => {
    return (z) => {
      return _sum3(x, y, z);
    };
  };
}
console.log(sum_3(1)(2)(3)); // 6  <--  It works!



console.log('***********************************************************');
console.log('***********************************************************');

const users = [
  { name: "Jeff", age: 14 },
    { name: "Jack", age: 18 }, 
    { name: "Milady", age: 22 },
]

//cb stands for callback
//const filter = (cb, arr) => arr.filter(cb);
//const map = (cb, arr) => arr.map(cb);

//console.log(map(u => u.name, filter(u => u.age >= 18, users))); //["Jack", "Milady"]

//console.log( filter( u => u.age >= 18 , users) );
//console.log( filter( u => u.name.indexOf('J') , users) );

//let's curry this
//const filter = (cb, arr) => arr.filter(cb);

//into this
const filter = cb => arr => arr.filter(cb);
const map = cb => arr => arr.map(cb);
