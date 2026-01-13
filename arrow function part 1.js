
//--------Traditional Function---------

function display1(){
    console.log("I am display1")
}
//--------Arrow Function---------------

const display2 = ()=>{
    console.log("I am display2")
}
display1();
display2();

//------Now returning function from Traditional and Arrow Function--------

function message1(){   // Traditional function
    return "Hi I am message1";
}
console.log(message1());
//-------------------------------------------------------------------------
const message2 = () => { // Arrow function
    return "Hi I am message2";
}
console.log(message2());

//----------Parameter pass in Tranditional function and Arrow function-------

function add(num1,num2){ // Traditional function
    return num1+num2;
}
console.log(add(10,30));
//-----------------------------------------------------------------------

const add2 = (num1,num2)=>{ // Arrow function
    return num1+num2;
}
console.log(add2(20,50));
