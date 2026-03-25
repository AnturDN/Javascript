

/*var num = [10, 20, 30, 40, 50];
var sum = 0;

for(var i=0; i<5; i++){
    document.write(num[i]);//printing the array element using loop
    sum = sum + num[i];
}
document.write("Sum : "+ sum);//printing the sum of the array element
*/

// Taking the input from user in array and doing addition

var num = new Array();

for(var i = 0; i<5; i++){
    num[i] = parseInt(prompt("Ente a number : "));
}
var sum = 0;
for (var i =0; i<5; i++){
    document.write(num[i]+"<br>");//print the values that user inputs
    sum = sum + num[i];
}
document.write("Sum : "+ sum);// sum of the inputs


