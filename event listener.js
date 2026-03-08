
//..........clickable listener..........
//document.querySelector("button").addEventListener("type of event/listener", we have to say what to do);

document.querySelector("button").addEventListener("click",myFunction);// if we click on button then the display will show you alert named Hello

function myFunction(){
   alert("Hello");
}

// document.querySelector("button").addEventListener("click", function(){     alert("Hello");
// }); // same thing as above but in less code...it is called anonymous function

// var myVar = document.querySelector("h1");
// myVar.addEventListener("click", function(){
//     alert("Hi");
// });

//-------------Mouseover listener------------

var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", function(){
    myVar.classList.add("my-style");
;})
myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("my-style");
;})



