
// Array--> is an object; collection of variables
// In array index number starts from 0

var names = new Array(5);
names[0]="Antur";
names[1]="Joy";
names[2]="Shuvra";
names[3]="Ronok";
names[4]="Ramprashad";

//document.write(names[0]);
//document.write(names.length);// using this we can findout the length of an array

var nm = ["Antur","Joy","Ronok","Shuvra","Ramprashad"];// array in different way
nm.push("Raj");//this value will add at the end of the existing array
document.write(nm);

nm.pop();// this will delet the last element of the array
document.write(nm)

var country1 = ["Bangladesh","India"];
var country2 = ["Japan","China"];
var country = country1.concat(country2);// adding two array
document.write(country);
//----------------------------------------------
