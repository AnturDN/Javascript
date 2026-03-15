// How to create an object
// How to print the value of an object
// Adding a constructor
// Adding function inside a constructor

var name = "Antur Deb Nath";
var age = 23;
var cgpa = 3.50;
var lang = ["Bengali", "Hindi", "English"];

//now we will store this in object 

function student(name, age, cgpa, lang){ // constructor
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){ // function inside constructor
        document.write(this.name);
        document.write("<br>"+this.age);  // printing the value of an object
        document.write("<br>"+this.cgpa);
        document.write("<br>"+this.lang);

    }
}

var student1 = new student("Antur Deb Nath",23,3.5,["Bengali", "Hindi", "English"]);
var student2 = new student("Joy Deb Nath",26,3.45,["Bengali", "Urdu", "English"]);
var student3 = new student("Shuvra Deb Nath",20,3.65,["Bengali", "Portuguese", "English"]);

student1.display();// printig the value using function
student2.display();
student3.display();

// document.write(student1.name);
// document.write("<br>"+student3.cgpa);  // printing the value from an object
// document.write("<br>"+student2.lang);
// document.write("<br>"+student1.age);
