
var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number : "));

var maximum = Math.max(num1,num2);
document.write(maximum);

// Math functions

Math.sqrt(250);// ans : 5
Math.abs(-5);// ans : 5
Math.sin(30);// ans : 1/2;
Math.pow(2,4); // ans : 16 (pow = power)
Math.floor(2.4); // ans : 2 (It will always return the whole number below the decimal point)
Math.ceil(2.8); // ans : 3 (It will always return the whole number above the decimal point)
Math.round(3.5);// ans : 4 (round = roundFigure)
Math.mas(2,3,-6); // ans : 3 (will find the maximum value)
Math.random(); // will print random values between 0 and 1

// Math.random()----------

Math.random() *6; // it will print random value within 0-5 and the values will always print in decimel form
Math.floor(Math.random()*6); // now it will print the whole number within 0 - 5
Math.floor(Math.random()*6) + 1; // now it will print the whole number within 1 - 5