
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}

function welkeDag(dag){

	if(dag.getDay()==6){
		return 'zaterdag';
	}else if(dag.getDay()==0){
		return 'zaterdag';
	} else {
		return 'gisteren';
	}


}


// Example of a bunch of GUIDs
// for (var i = 0; i < 10; i++) {
//     var id = Guid.newGuid();
//     console.log(id);
// }

//let dag = new Date(new Date().setDate(14));



//console.log(dag.getDay()  ) ;

function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate()-1,
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

//console.log(formatDate() );

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

//doSomething('Graham');
// Hello, Graham

//wrapped('Graham');
// Starting
// Hello, Graham
// Finished

//console.log('hallootjes');

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



