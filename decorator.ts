
/*
* https://medium.com/jsguru/javascript-decorators-dac7d4b6bba3
*/


class Cat {
  @logger
  meow() { console.log( ' Meeeoow! ') }
};


function logger(target, key, descriptor) {
  console.log("Cat snarling...");
  return descriptor;
}

const cat = new Cat();
cat.meow();