
/* 
ES6 Features
    1. ES6 Syntax
        1.1 ES6 Variables -> var, let, const (scope, redeclaration, value assigning)
        1.2 Template Literals,
        1.3 Hoisting and strick mode
        1.4 Default and Rest parameter
        1.5 spread operator
        1.6 for...of

    2. Arrow functions
    3. Destructuring
        3.1 Array and object Destructuring

*/



// var x = 4;
// if(true){
//     var x = 5;
// }
// console.log(x); // It will print 5 as answer

// //----------------------------------------------------------------------

// let x = 5;
// if(true){
//     let x = 10;
// }
// console.log(x); // It will print 5 as answer but if we put the console inside the bracket then it will print 10 as answer

// //-----------------------------------------------------------------------

// const x = 20; // we cannot change the value of const
// if(true){
//     x = 10;
// }

// //------------------String concatenation---------------------------

// var x = 35;
// var y = 40;

// var sum = x+y;
// console.log("Sum is"+ sum +". This is the answer");

// //--Now same thing using ES6--

// let x = 35;
// let y = 40;

// let sum = x+y;
// console.log(`Sum is ${sum}. This is the answer`);// To use the backticks(`) press (Alt+96)

//------------Function declare on ES6--------------------------------

// function add(x,y){
//     var sum = x+y;
//     console.log(sum);
// }
// add(40,30);

//--------------Now using ES6------------

const add = (x,y)=>{
    let sum = x+y;
    console.log(sum);
}
add(20,30);