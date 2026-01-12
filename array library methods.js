
var names = ["Antur","Joy","Shuvra","Novel"];
document.write(names);

//shift opposite of pop;

names.shift();//delet element from the starting of the array
document.write("<br>"+names);

// unshift opposite of push

names.unshift("Sky");// add element from the starting of the array
document.write("<br>"+names);

// using splice we can add and remove element
// splice(position, remove, add);

names.splice(2,0,"Tuktuk","Raju");
document.write("<br>"+names);

names.splice(1,2); // deleting 1 and 2 number index
document.write("<br>"+names);

//-------------sort method-------------
// It only works on alphabet

var Value = ["Ronok","Antur","Saju","Cat","Shuvra","Joy"];
var sortednames = Value.sort();// sort the elements in alphabetical order
document.write("<br>"+sortednames);
Value.reverse();// reverse the element
document.write("<br>"+Value);

// number sorting using---sort----------

var number = [20,5,10,2,1];
number.sort(function(a,b){
    return a-b;
});
document.write("<br>"+number);
