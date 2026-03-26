
//---This part of code will show you which character you have pressed

document.querySelector("textarea").addEventListener("keypress", function(event){ // what we press will be in the event
    var text = event.key;

    document.querySelector("p").innerHTML = "You have pressed " + text;

});

//----------------------------------------------------------------------------------------------------------------------------------------------------

//*******This part of the code will show how many character you have pressed******


// var count = 0;
// document.querySelector("textarea").addEventListener("keypress", function(event){ // what we press will be in the event

//     count++;
//     var text = event.key;
//     document.querySelector("p").innerHTML = "You have pressed " + count;

// });
