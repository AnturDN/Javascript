
// function addNumbers(x,y,z)
// {
//     return x+y+z;
// }
// let numbers1 = [1,2,3];
// //console.log(addNumbers(...numbers))

// // let numbers1 = [5,6,...numbers];// spread operator---> we can use it everywhere
// // console.log(numbers1);

// let numbers2 = [4,5,6];
// //let numbers = numbers1.concat(numbers2);// same thing using spread operator given below
// let numbers = [...numbers1, ...numbers2];
// console.log(numbers);

//--------------------------------------------------------------------

let p1 = {
    name : "Antur Deb Nath",
    age : 22
}
let p2 = {
    nationality : 'Bangladeshi',
    Occupation : 'Student'
}
let p = {...p1, ...p2}
console.log(p);


