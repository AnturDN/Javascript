// Error handling -> try, catch, finally, throw
// try... catch handle run time errors (program which is )
// Error object
// The finally statement -> execute code, after try and 


document.querySelector("#checkButton").addEventListener("click", function(){

    var num = document.querySelector("#id1").value; // Using "value" to find the textfield value
    
    try{
        if(num < 5){
            throw "input is too low"
        }
        else if(num > 10){
            throw "input is to high"
        }
        else{
            console.log(num);
        }
    }catch(error){
        console.log(error); // If is there any error in the code then this will print the error
    }

});



