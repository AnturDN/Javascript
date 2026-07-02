// DOM--> Document Object Model

// Manipulating - creating, inserting, removing elements
// Traversing - selecting an element from other elements

//--------------Downwards-Chidrens----------------
//querySelector() select only one element


// const studentsList = document.querySelector(".students-list");
// const studentA = document.querySelector(".student-a"); // it will check whole document to find student-a


// const studentstList = document.querySelector(".students-list");
// const studentA = studentsList.querySelector(".student-a");// it will check only the list to find student-a


//Finding children

// const studentsList = document.querySelector(".student-list");
// studentsList.children
// const studentA = studentsList.children[index number or list number];


//----------------Upwards-ParentElement-----------------
//querySelector() select only one element

//const studentA = document.querySelector("li");
//cont studentsList = studentA.parentElement;


//----------------Sideways - nextElementSibling, previousElementSibling---------

// const studentA = document.querySelector("li");
// const studentB = studentA.nextElementSibling;
// const studentC = studentB.nextElementSibling;

// const studentC = document.querySelector("li")[2];
// const studentB = student.previousElementSibling;

//---------------Sideways - parentElement + children + index------------

// const studentA = document.querySelector("li");
// const studentsList = studentA.parentElement;
// const studentC = studentsList.children[2];
