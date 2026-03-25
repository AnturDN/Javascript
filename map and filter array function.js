

// forEach, map, filter

//----------forEach-------------

// var numbers = [2,3,4,5];
// var squareNumbers = []

// numbers.forEach(function(x){
//     squareNumbers.push(x*x);
// })
// console.log(squareNumbers)

//---------map----------------


// var numbers = [2,3,4,5];
// var squareNumbers = numbers.map(function(x){

//         return x*x;

// })
// console.log(squareNumbers)

//--------filter---------------

var numbers = [22,31,4,5,35,26];
var newNumbers = numbers.filter(function(x){

       return x>10;

})
console.log(newNumbers)

