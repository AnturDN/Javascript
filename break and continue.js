
//------------------Break--------------

for( var i = 1; i<=100; i++){
    if( i==10){
        break; // it suppose to print 1-100 numbers but now it will print 1-9 numbers
    }
    document.write(" "+ i);
}

//------------------Continue-------------

for(var i = 1; i<=100; i++){
    if(i==10){
        continue;
    }
    document.write(" "+ i); // it will print 1-100 execpt 10.
}

// Write a program that will print the numbers which are not divisible by 2 within 1-100.

/*for(var i = 1; i<=100; i++){
    if(i%2==0){
        continue;
    }
    document.write(" "+ i);
}*/

// Write a program that will print the numbers which are divisible by 2 within 1-100.

/*for(var i = 1; i<=100; i++){
    if(i%2!=0){
        continue;
    }
    document.write(" "+ i);
}
*/