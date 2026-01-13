
var students = [
    {
        id : 101,
        name : 'Antur Deb Nath',
        cgpa : 3.42
    },
    {
        id : 102,
        name : 'Shuvra Deb Nath',
        cgpa : 3.11
    },
    {
        id : 103,
        name : 'Ramprashad Deb Nath',
        cgpa : 2.50
    },
    {
        id : 104,
        name : 'Orni Deb Nath',
        cgpa : 2.99
    }
]
//---------finding the name who's got the cgpa more than 3--------
function studentNames1 (){

    return students.filter(function(x){
        return x.cgpa > 3
    }).map(function(y){
        return y.name;
    }); 

}

const studentNames2 = ()=>{
    return students.filter((x)=> x.cgpa > 3).map((y) => y.name);
}

console.log(studentNames1())
console.log(studentNames2())


