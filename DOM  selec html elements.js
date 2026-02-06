// DOM --> Document Object Model--> document object can access and manipulate HTML
// Using DOM we can find, change, add, delet HTML elements.


//getElementByID

var myHeading = document.getElementById("h1");
myHeading.innerHTML = "I am h1"; // using innerHTML we can change the value

document.getElementById("h2").innerHTML = "I am h2";
document.getElementById("para").innerHTML = "I am para";

//getElementByTagName
//document.getElementsByTagName("h1")[0].innerHTML = "I am antur"; // document.getElementsByTagName("h1")[index number].innerHTML = "I am antur"; use it in the console

//getElementsByClassName

document.getElementsByClassName("h3")[3].innerHTML = "I am h3";// use it in the console as like getElementsByTagName.

