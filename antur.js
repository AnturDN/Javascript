/*fullname = "Antur Deb Nath";*/

a =undefined;
isFollow = false;
console.log( a, isFollow);

/*let fullname="antur"; /* using let we cannot redeclare a variable...its a global variable */
/*console.log(fullname);*/

var totalprice = 45;
var totalprice = 56;
var totolprice = 50;  /* using var we can re-declare a variable...its a block scope variable */
console.log(totalprice);

const pi = 3.4; /* cannot be re-declared or update...its a block scop variable */
console.log(pi);

{          /* first block */
    let a = 5;
    console.log(a);
}                     /* if we want to re-declare a variable we can do it by using block */
{          /* second block */
    let a = 10;
    console.log(a);
}

/*...............Data types of js...........*/

/*-------------- 7 Primitive data types ----------*/
/*number, string, boolean, undefined, null, BigInt, Symbol */

let age_ = 23; /* data type number */

/*let fullname = "antur"; /* string data type */

isfollow = true; /* boolean data type */

let x; /* undefined data type */

let b = null; /* null data type and it is a primitive data type ....it is a object */

let c = BigInt("123"); /* BigInt data type */

let d = Symbol("hello"); /* Symbol data type */

/*----------------Non-primitive data types---------*/
/* "Objects" but in objects we have = Arrays, Functions */
/*Objects is collection of values */

const student = {
    fullName : "Rahul Kumar",
    age :15,
    cgpa : 8.2,
    ispass : true,
};

console.log(student.fullName);/* here student is object */
student["age"] = student["age"] + 1;
console.log(student.age);
console.log(typeof student["fullName"]);

