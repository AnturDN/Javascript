// This file is added with...find, creat, add, remove html elements...file
// Creating html element
// adding a new element
var heading3 = document.createElement("h1");
var text = document.createTextNode("This is heading 3"); // adding text
heading3.appendChild(text); // text is the child of heading 3

var myDiv = document.getElementById("div1");
myDiv.appendChild(heading3);

