
// IIFEs--> Immediately Invokeable Function Expressions
// Function Expressions--> ( ),{ }, [ ], < >

//---------IIFes---------------------
(function display(){
    document.write("Hello");
})();//--> IIFEs


//--------IIFEs with parameter---------------------

/*(function display(messege){
    document.write(messege);
})("Hello");
*/

//--------Function expression-------------------

/*var display = function displayMessage(){
    document.write("Hi I am Antur");
}
display();
*/
//---------Function expression with parameter----------
/*
var display = function displayMessage(messege){
    document.write(messege);
};
display("I am Antur");
*/

//-----Sum of two numbers using IIFEs----
/*(function sum(){
    document.write(5+5);
})();
*/
