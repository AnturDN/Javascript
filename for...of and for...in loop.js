
//for...of and for...in loop.

//----For of--------------

const names = ["s1", "s2", "s3"]
for(let name of names){
    console.log(name);
}

//----For in----------

// we use (For in) to iterate object

let students = {
    ID : 101,
    name : "Antur Deb Nath",
    cgpa : 3.42
}
for(let x in students){
   //console.log(x); // it will only print the keys ==> ID, name, cgpa
   //console.log(students[x]); // it will print the value of the keys ==> 101, "Antur Deb Nath", 3.42
   console.log(`${x} : ${students[x]}`); // it will print both keys and values
}


