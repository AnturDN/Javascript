var num = 20;

var x = "20";

var y = "20.15";

num = toString(num); //turning the 'number' into string data type

x = parseInt(x); // turning the 'string' into integer data type

y = parseFloat(y); 

console.log(typeof(num));

/*------------------------------------------------------------------*/

let a = 8.5678;

console.log(a.toFixed(2)); // We use 2 because we want to see two digits after the decimal point

console.log(a.toPrecision(2)); // it will show total character "suppose 8.5678 = 8.6" 

/*----------------------Number methode-----------------------*/

console.log(Number("123")); // here "123" is string and we are turning it into number data type
console.log(typeof(Number("123")));

console.log(Number(true)); // turning the boolean into number data type "true = 1 and false = 0"




