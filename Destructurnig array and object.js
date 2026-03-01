// array destructure
// swap variables
// object destructure
// nested object destructure
// destructuring function parameters

//----------array destructure-----------

let numbers = [10,20,30,40,50]
let [num1,num2,num3,num4,num5] = numbers // assinging the array values to the new variable
console.log(num1)
console.log(num2)

//---------swap variables---------------

let a=10, b=20;
[a,b]=[b,a]
console.log(a)
console.log(b)

//-----------object destructure---------

const studentInfo = {
    id : 519,
    name : 'Antur Deb Nath',
    cgpa : 3.42
}

const {id,name} = studentInfo
console.log(id);
console.log(name);

//-----------nested object destructure------

// const studentInfo = {
//     id : 519,
//     name : 'Antur Deb Nath',
//     cgpa : 3.42,
//     language : {
//         native : 'Bangla',
//         beginner : 'English'
//     }
// }

// const {name,language} = studentInfo
// console.log(language.native);
// console.log(language.beginner);
// console.log(name);

//---------destructuring function parameters--------

// const studentsInfo = (student) => {
//     console.log(`${student.id}, ${student.name}`)
// }
const studentsInfo = ({id,name}) => { // Destructured object
    console.log(`${id}, ${name}`)
}
const student = {
    id : 519,
    name : 'Antur Deb Nath',
}
studentsInfo(student)

