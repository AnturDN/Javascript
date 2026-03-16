
// Error handling -> try, catch, finally, throw
// try... catch handle run time errors (program which is )
// Error object
// The finally statement -> execute code, after try and 


// try-catch only handle runtime error

try{
// code test

    alert("Hi everyone");
    alert(x);// error
    alert("Bye everyone");

}catch(error){
// handle error

    console.log("Inside catch block");
    console.log(error);// print the error in the console

}finally{
    alert("Bye Everyone"); // the code inside (finally) always work
}


