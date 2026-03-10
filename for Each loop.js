
//-----------------For Each loop------------------

//---------------without forEach------------------

// var numbers = [10,20,30,40];
// for(var x=0; x<numbers.length; x++){
//     console.log(numbers[x]);
// }

//--------------with forEach----------------------

// var numbers = [10,20,30,40];
// numbers.forEach(myFunction)
// function myFunction(x){
//     console.log(x);
// }

//-------------same thing using less code-----------

// var numbers = [10,20,30,40];
// numbers.forEach(function(x){
//     console.log(x);
// });

//---------If we want to find the square of the array-------------

// var numbers = [10,20,30,40];
// var squareNumbers = [];
// numbers.forEach(function(x){
//     squareNumbers.push(x*x);
// })
// console.log(squareNumbers);

//---------If we want to add numbers with the array----------

var numbers = [10,20,30,40];
console.log(numbers);
numbers.forEach(function(x,index,arr){
    arr[index] = x+5;
})
console.log(numbers);
