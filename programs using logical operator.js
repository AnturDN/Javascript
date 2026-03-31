
/*var marks = prompt("Enter your marks : ");

if(marks > 100 || marks < 0)
document.write("Invalid marks");

else if(marks >= 80 && marks<=100)
document.write("A+");
else if(marks >= 70 && marks<=79)
document.write("A");
else if(marks >= 60 && marks<=69)
document.write("A-");
else if(marks >= 50 && marks<=59)
document.write("B");
else if(marks >= 40 && marks<=49)
document.write("C");
else if(marks >= 33 && marks<=39)
document.write("D");
else
document.write("Fail");*/

//--------------------------------------------------------------------------

/*var num1 = prompt("Enter num1 : ");
var num2 = prompt("Enter num2 : ");
var num3 = prompt("Enter num3 : ");

if(num1>num2 && num1>num3)
document.write(num1 + " is the large number.");
else if(num1<num2 && num2>num3)
document.write(num2 + " is the large number.");
else 
document.write(num3 + " is the large number."); */

//----------------------------------------------------------------------------

var letter = prompt("Enter a letter : ");

letter = letter.toLocaleLowerCase(); // if the user input capital letter then the capital letter will convert into small letter
//letter = letter.toLocaleUpperCase(); // if the user input small letter then the small letter will convert into capital letter

if(letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u")
document.write("Vowel");
else
document.write("Conconant")


