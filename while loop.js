/*
var i = 1;
while(i<=5){
    document.write(" "+i);// printing 1-5
    i++;
}*/

/*
var i = 1;
var sum = 0;
while(i<=10){
    sum = sum+i;
    i = i+1;
}
document.write(sum); // printing the sum of 1-10
*/


/*var i = 2;
var sum = 0;
while(i<=100){
    sum = sum + i;
    i = i+2;
}
document.write(sum);// printing the sum of all the even numbers within 1-100
*/

//Write a program that will print sum of all the numbers that are divisible by 3 and 5.

var i = 1;
var sum = 0;
while(i <= 50){

    if(i % 3 == 0 && i % 5 == 0){
        document.write(" " + i); // printing the numbers which divisible by 3 and 5
        sum = sum + i;
    }
    i = i + 1;
}
document.write("<br>Sum=  " + sum);




