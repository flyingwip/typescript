//https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc

function funcName(params) {
   return params + 2;
 }
console.log(funcName(2));
// 4


// (parameters) =>  statement
var funcName = (params) => params + 2
console.log(funcName(2));
// 4

//If we have no parameters, we express an arrow function like this:
//() => { statements }

//parameters => expression

//how does this work?

const users = [
  { name: "Jeff", age: 14 },
    { name: "Jack", age: 18 }, 
    { name: "Milady", age: 22 },
]
//
//const filter = cb => arr => arr.filter(cb);

console.log(users.filter( u => u.age >= 18 ));

//console.log(filter(u => u.age >= 18));



