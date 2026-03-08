

// document.querySelectorAll(".myButton")[0].addEventListener("click",function(){ // using querySelectorAll because there are more than one button

//     var text = this.innerHTML; // If any element is clicked through add event listener then it will be in this parameter
//     document.querySelector("h1").innerHTML = text + " is clicked";

// });

// document.querySelectorAll(".myButton")[1].addEventListener("click",function(){

//     var text = this.innerHTML; 
//     document.querySelector("h1").innerHTML = text + " is clicked";

// });

// document.querySelectorAll(".myButton")[2].addEventListener("click",function(){

//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";

// });


//-----------Same thing but using less code------------

// var len = document.querySelectorAll("myButton").length
// for(var i = 0; i<len; i++) // we can also use the for loop like this
for(var i = 0; i<3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text = this.innerHTML; 
        document.querySelector("h1").innerHTML = text + " is clicked";
    });
}
