function myMessage1(){
    alert("I am button 1");
}
function myMessage2(){
    alert("I am button 2");
}
function myMessage3(){
    alert("I am paragraph");
}



function myMessage4(){
   var myVar = document.querySelector("#para");
   myVar.innerHTML = "You have clicked on button 1";
}
function myMessage5(){
    var myVar = document.querySelector("#para");
    myVar.innerHTML = "You have clicked on button 2";
 }


 //same thing using less code


//  var myVar = document.querySelector("#para");
//  function myMessage4(){
    
//     myVar.innerHTML = "You have clicked on button 1";
//  }
//  function myMessage4(){
    
//     myVar.innerHTML = "You have clicked on button 2";
//  }

var myPicture = document.querySelector("#pic1");
function myPicture1(){
    myPicture.src = "img.jpeg";
}
function myPicture2(){
    myPicture.src = "img 2.jpeg";
}
function myPicture3(){
    myPicture.src = "img 3.jpeg";
}


