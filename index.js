//Scope

// var abc = 1;

// function abc() {
//     var a = 1;
// }



// {
//     var a = 5;
//     let b = 6;
// }


// function def() {
//     var b = 1;
//     function defghi() {
//         var c = 3;
//     }
// }


// Type Conversion / Type Coercion

// parseInt - string - Int
// parseFloat - string - float (decimals)


//FIZZBUZZ Problem
for(var i=1 ; i<20 ; i++) {
	if(i%3==0 && i%5==0) {
  	console.log('FIZZBUZZ');
  }
  else if(i%3==0) {
  	console.log('FIZZ');
  }
  else if(i%5==0) {
  	console.log('BUZZ');
  }
  
}



//Objects

/* var obj = {
  name: 'Deepak',
  addr: 'India'
} */

var obj = {};

Object.defineProperty(obj, 'name', {
	value: 'Deepak',
  writable: false
});
console.log(obj.name);
obj.name="deepak 123....";
console.log(obj.name);

//Math
console.log((Math.PI).toFixed(5));
console.log(Math.ceil(4.2222));
console.log(Math.random()); //0 and 1

//String
var str = '     I work at NS';
/* console.log(str.toUpperCase());
console.log(str.endsWith('sfsfNS')); */
console.log(str.trim());
console.log(str.indexOf('w'));
console.log(str.charAt(5));


//Date
var newDate = new Date();
console.log(newDate.getFullYear);


//Iterator
//Iterator for Object -  for in
var obj = {
  name: 'Deepak',
  addr: 'India',
  id: 12345
}
for (const temp in obj){
	console.log(temp, obj[temp]);
}

//Iterator for Array - for of
var arr = [1,2,3,4,5];
for (const temp of arr){
	console.log(temp*10);
}
