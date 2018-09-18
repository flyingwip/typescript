
/*
* See https://eloquentjavascript.net/05_higher_order.html
*/

/*
* Example from https://www.sitepoint.com/javascript-decorators-what-they-are/
* In its simplest form, a decorator is simply a way of wrapping one piece of code with another — 
* literally “decorating” it. This is a concept you might well have heard of previously as functional composition, or higher-order functions.
*/

/*
* method that add the greeting hello to a name 
* @in : string
* @out : string
*/
function doSomething(name)  {
  console.log('Hello, ' + name);
  return 'Hello, ' + name;
}

/*
* @in : function
*/ 
function loggingDecorator(wrapped) {
  return function(name) {
    //console.log('Starting', a);
    let result = 'Starting : ';
    result += wrapped.apply(this, arguments);
    result += ': Finished';
    //console.log('Finished');
    return result;
  }
}

const wrapped = loggingDecorator(doSomething);

//doSomething('Graham');
//Hello, Graham

console.log(wrapped('Graham'));
// Starting
// Hello, Graham
// Finished


//voorbeeld 2
function addStringToName(fn) {
  return function(name) {
    const wrestleString = name + ' is a wrestler';
    fn(wrestleString);
  }
}

function sayName(name) {
  console.log(name);
}

//const wrestler = addStringToName(sayName);
//wrestler('Hulk Hogan'); //output: Hulk Hogan is a wrestler

function repeat(n, doe_eerst , action) {
  for (let i = 0; i < n; i++) {
    action(doe_eerst(i,i));
  }
}

function square(waarde){

  let result = waarde * waarde;
  
  return result;

}

repeat(5, Math.pow, console.log ) ;
// → 0
// → 2
// → 3




