
// Relational operator : >, >=, <, <=, ===, !=, !==

// Logical operator : &&, ||, !


//-----------------Relational Operator-----------------

var num1 = 20;
var num2 = 30;
var num3 = 25;

console.log(num1>num2);// Ans: false
console.log(num1<num2);// Ans: true

console.log(20>=20);// Ans: true
console.log(20<=20);// Ans: true

console.log(20=="20");// Ans: true---Because double equal only check value
console.log(20==="20");// Ans: False...Because tripple equal checks the data type and here "20" is string value 20 is int value,both has different data type.

console.log(25!=20);// Ans: true
console.log(25!=="20"); // Ans: false...because of different data type


//------------------Logical Operator-------------------

console.log(num1>num2 && num2>num3);// Ans: false...in-case of && operator both of the condition should be true otherwise the ans would be false
console.log(num1<num2 && num2>num3);// Ans: true...because both of the conditions are true

console.log(num1>num2 || num2>num3);// Ans: true...in-case of || operator at-least one condition should be true, then the ans will be true.

console.log(!true);// Ans: false
console.log(!false);// Ans: true
                                // it's actually opposites the answer
console.log(!(25>20));// Ans: false 
console.log(!(25<20));// Ans: true
