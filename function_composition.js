/*
* https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj
* What is function composition?
* Function composition is a mechanism of combining multiple simple functions to build a more complicated one. 
* The result of each function is passed to the next one. 
*/


const add = (a, b) => a + b;
const mult = (a, b) => a * b;
console.log(add(2, mult(3, 5)));

//or have a list of users and I need to extract the name of all the adult users. I would personaly write something like:

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


//Automate the function composition
/*
* So our goal in this section is to create a high order function that take two or more functions 
* and compose them. So let's define our final signature of our future function:
* compose(function1, function2, ... , functionN): Function
*/


//parameters => expression
//currified the map and filter functions so it is more readable:
const filter = cb => arr => arr.filter(cb);
const map = cb => arr => arr.map(cb);

/*
* compose is a high order function. It is a function that returns another function.
* compose takes multiple functions as arguments and we convert them into an array of functions using the spread opeartor: ...
* Then we simply apply a reduceRight on those functions. The first parameter of the callback is the current argument. 
* The second argument is the current function. Then we call each function with the current argument and the result is use for the next call.
*/
compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

var sayHello = u => 'Hello ' + u.name;

//now greet everybody that ia older then 18
console.log(compose(
  map(sayHello),
  filter(u => u.age >= 18)
)(users)); //["Hello Jack", "Hello Milady"]

//users.map( greet );







