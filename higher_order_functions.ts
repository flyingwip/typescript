
/*
* See https://eloquentjavascript.net/05_higher_order.html
*/



//Voorbeeld 1
function doSomething(name) {
  console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) {
  return function() {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finished');
    return result;
  }
}

const wrapped = loggingDecorator(doSomething);

doSomething('Graham');
//Hello, Graham

wrapped('Graham');
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




