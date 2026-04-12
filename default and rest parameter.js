

"use strict"
function message(text = "Hello I am Antur"){ // Default parameter
    console.log(`${text}`);
}
message();
message("I love JS"); 
//---------------------------------------------------------------------

"use strict"
function printNumbers(x,y, ...z){ // Rest parameter
    console.log(`x = ${x}, y = ${y}, z =${z} `);
}
printNumbers(10,20,30,40,50,60);


