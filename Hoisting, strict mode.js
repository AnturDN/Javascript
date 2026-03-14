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

//--------Hoisting----------
x=30;
if(true){
    var y;
    y = 10;
    console.log(`y = ${y}`)
}
console.log(`x = ${x}`);
var x;

//----------Strict Mode--------

"use strict"

x = 20;
console.log(`x = ${x}`); // we cannot use it without  declaring variable

